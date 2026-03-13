import fs from "node:fs/promises";
import Parser from "rss-parser";
import * as cheerio from "cheerio";
import {
  RSS_SOURCES,
  HTML_SOURCES,
  FLAGSHIP_REPORTS,
  POSITIVE_KEYWORDS,
  NEGATIVE_KEYWORDS,
  MENA_KEYWORDS,
  AFRICA_KEYWORDS
} from "./sources.mjs";

const parser = new Parser({
  timeout: 20000,
  headers: { "User-Agent": "MENA-Africa-Reports-Tracker/1.0" }
});

const NOW = new Date();
const CUTOFF = new Date();
CUTOFF.setFullYear(CUTOFF.getFullYear() - 1);

// اختياري: تقريب 3+ صفحات إذا كان الرابط PDF مباشرًا
const MIN_PDF_BYTES = 150000;

function normalizeText(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

function stripHtml(html = "") {
  return normalizeText(html.replace(/<[^>]*>/g, " "));
}

function withinLastYear(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return !isNaN(d) && d >= CUTOFF && d <= NOW;
}

function classifyRegion(text = "", fallback = "global") {
  const t = text.toLowerCase();
  if (MENA_KEYWORDS.some(k => t.includes(k.toLowerCase()))) return "mena";
  if (AFRICA_KEYWORDS.some(k => t.includes(k.toLowerCase()))) return "africa";
  return fallback;
}

function guessTopics(text = "") {
  const t = text.toLowerCase();
  const topics = new Set();

  if (/(politic|election|government|regime|democracy|سياس|انتخاب|حكوم|démocr)/i.test(t)) topics.add("politics");
  if (/(security|military|war|conflict|terror|أمن|حرب|صراع|militaire|sécurité)/i.test(t)) topics.add("security");
  if (/(governance|reform|corruption|rule of law|حوكم|إصلاح|فساد|gouvernance)/i.test(t)) topics.add("governance");
  if (/(economy|economic|trade|debt|growth|inflation|اقتصاد|تجار|نمو|économ|commerce)/i.test(t)) topics.add("economy");
  if (/(rights|human rights|freedom|refugee|حقوق|لاجئ|حري|droits|liberté)/i.test(t)) topics.add("rights");
  if (/(culture|society|identity|religion|education|ثقاف|مجتمع|هوي|culture|société)/i.test(t)) topics.add("culture");
  if (/(migration|asylum|displacement|border|هجر|لجوء|نزوح|migration|asile)/i.test(t)) topics.add("migration");
  if (/(geopolitic|regional order|strategic|geopolit|جيوبوليت|استراتيج)/i.test(t)) topics.add("geopolitics");
  if (/(climate|energy|oil|gas|renewable|مناخ|طاق|نفط|غاز|climat|énergie)/i.test(t)) topics.add("energy");

  if (!topics.size) topics.add("general");
  return [...topics];
}

function isResearchLike(title = "", desc = "", url = "") {
  const t = `${title} ${desc} ${url}`.toLowerCase();

  if (NEGATIVE_KEYWORDS.some(k => t.includes(k))) return false;

  const positive = POSITIVE_KEYWORDS.some(k => t.includes(k));
  const longEnough = normalizeText(desc).length >= 80;

  return positive || longEnough;
}

function absoluteUrl(base, href) {
  try { return new URL(href, base).href; } catch { return href; }
}

function findPdfUrlFromHtml(fragment = "", baseUrl = "") {
  const match = fragment.match(/href=<!--citation:3-->["']/i);
  return match ? absoluteUrl(baseUrl, match[1]) : null;
}

async function pdfSeemsLongEnough(url) {
  if (!url || !url.toLowerCase().includes(".pdf")) return true;
  try {
    const res = await fetch(url, { method: "HEAD" });
    const len = res.headers.get("content-length");
    if (!len) return true;
    return Number(len) >= MIN_PDF_BYTES;
  } catch {
    return true;
  }
}

function extractDateFromText(text = "") {
  const iso = text.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
  if (iso) return iso[1];

  const slash = text.match(/\b(20\d{2}\/\d{2}\/\d{2})\b/);
  if (slash) return slash[1].replaceAll("/", "-");

  const monthMap = {
    january:"01", february:"02", march:"03", april:"04", may:"05", june:"06",
    july:"07", august:"08", september:"09", october:"10", november:"11", december:"12"
  };
  const m = text.toLowerCase().match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2}),\s*(20\d{2})\b/);
  if (m) return `${m[3]}-${monthMap[m[1]]}-${String(m[2]).padStart(2, "0")}`;

  return null;
}

async function collectFromRss(source) {
  try {
    const feed = await parser.parseURL(source.url);
    const out = [];

    for (const item of (feed.items || [])) {
      const title = normalizeText(item.title || "");
      const desc = stripHtml(item.contentSnippet || item.content || item.summary || "");
      const date = item.isoDate || item.pubDate || item.published || "";
      const pageUrl = item.link || "";

      if (!withinLastYear(date)) continue;
      if (!isResearchLike(title, desc, pageUrl)) continue;

      const text = `${title} ${desc}`;
      const region = classifyRegion(text, source.region);

      if (!["mena", "africa"].includes(region) && source.region === "global") continue;

      let pdfUrl = null;
      if (item.enclosure?.url && item.enclosure.url.toLowerCase().includes(".pdf")) pdfUrl = item.enclosure.url;
      if (!pdfUrl && pageUrl.toLowerCase().includes(".pdf")) pdfUrl = pageUrl;

      if (!(await pdfSeemsLongEnough(pdfUrl || ""))) continue;

      out.push({
        id: Buffer.from(`${source.name}-${pageUrl}`).toString("base64").slice(0, 24),
        title,
        description: desc,
        url: pdfUrl || pageUrl,
        pageUrl,
        hasPdf: !!pdfUrl,
        date,
        lang: source.lang,
        region,
        base: source.base,
        category: source.category,
        source: source.name,
        sourceAr: source.nameAr,
        freq: source.freq,
        topics: guessTopics(text)
      });
    }

    return out;
  } catch (err) {
    console.warn("RSS error:", source.name, err.message);
    return [];
  }
}

async function collectFromHtml(source) {
  try {
    const res = await fetch(source.url, {
      headers: { "User-Agent": "MENA-Africa-Reports-Tracker/1.0" }
    });
    if (!res.ok) return [];
    const html = await res.text();
    const $ = cheerio.load(html);
    const out = [];

    $("a[href]").each((_, a) => {
      const href = $(a).attr("href");
      if (!href) return;

      const url = absoluteUrl(source.url, href);
      const title = normalizeText($(a).text());
      const parent = $(a).closest("article, li, div, section");
      const parentText = normalizeText(parent.text()).slice(0, 1200);
      const desc = parentText.replace(title, "").trim().slice(0, 400);

      if (!title || title.length < 10) return;
      if (!isResearchLike(title, desc, url)) return;

      const timeEl = parent.find("time").attr("datetime") || parent.find("time").text();
      const date = timeEl || extractDateFromText(parentText + " " + url);
      if (!withinLastYear(date)) return;

      const region = classifyRegion(`${title} ${desc}`, source.region);
      if (!["mena", "africa"].includes(region) && source.region === "global") return;

      const pdfUrl = url.toLowerCase().includes(".pdf")
        ? url
        : findPdfUrlFromHtml($.html(parent), source.url);

      out.push({
        id: Buffer.from(`${source.name}-${url}`).toString("base64").slice(0, 24),
        title,
        description: desc,
        url: pdfUrl || url,
        pageUrl: url,
        hasPdf: !!pdfUrl,
        date,
        lang: source.lang,
        region,
        base: source.base,
        category: source.category,
        source: source.name,
        sourceAr: source.nameAr,
        freq: source.freq || "periodic",
        topics: guessTopics(`${title} ${desc}`)
      });
    });

    const filtered = [];
    for (const item of out) {
      if (!(await pdfSeemsLongEnough(item.hasPdf ? item.url : ""))) continue;
      filtered.push(item);
    }

    return filtered;
  } catch (err) {
    console.warn("HTML error:", source.name, err.message);
    return [];
  }
}

function dedupe(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = item.title.toLowerCase().slice(0, 80);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function main() {
  const results = [];

  // curated flagships
  results.push(
    ...FLAGSHIP_REPORTS
      .filter(r => withinLastYear(r.date))
      .map(r => ({
        id: Buffer.from(`${r.source}-${r.title}`).toString("base64").slice(0, 24),
        title: r.title,
        description: r.titleAr,
        url: r.url,
        pageUrl: r.url,
        hasPdf: r.hasPdf,
        date: r.date,
        lang: r.lang,
        region: r.region,
        base: r.base,
        category: r.category,
        source: r.source,
        sourceAr: r.sourceAr,
        freq: r.freq,
        topics: r.topics,
        flagship: true
      }))
  );

  // RSS
  for (const src of RSS_SOURCES) {
    const items = await collectFromRss(src);
    results.push(...items);
  }

  // HTML pages
  for (const src of HTML_SOURCES) {
    const items = await collectFromHtml(src);
    results.push(...items);
  }

  const finalItems = dedupe(results).sort((a, b) => new Date(b.date) - new Date(a.date));

  await fs.mkdir("data", { recursive: true });
  await fs.writeFile(
    "data/reports.json",
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      cutoffDate: CUTOFF.toISOString(),
      total: finalItems.length,
      reports: finalItems
    }, null, 2)
  );

  console.log(`Saved ${finalItems.length} reports.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
