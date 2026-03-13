export const RSS_SOURCES = [
  // داخل المنطقة / MENA
  {
    name: "Al Jazeera Centre for Studies",
    nameAr: "مركز الجزيرة للدراسات",
    method: "rss",
    url: "https://studies.aljazeera.net/ar/rss",
    lang: "ar",
    region: "mena",
    base: "in-region",
    category: "research-center",
    topics: ["politics", "geopolitics", "media", "culture"]
  },
  {
    name: "Carnegie Middle East Center",
    nameAr: "كارنيغي الشرق الأوسط",
    method: "rss",
    url: "https://carnegie-mec.org/rss/solr.xml",
    lang: "ar",
    region: "mena",
    base: "in-region",
    category: "think-tank",
    topics: ["politics", "governance", "economy", "rights"]
  },
  {
    name: "Arab Reform Initiative",
    nameAr: "مبادرة الإصلاح العربي",
    method: "rss",
    url: "https://www.arab-reform.net/feed/",
    lang: "en",
    region: "mena",
    base: "in-region",
    category: "research-network",
    topics: ["governance", "rights", "politics", "economy"]
  },

  // داخل أفريقيا
  {
    name: "ISS Africa",
    nameAr: "معهد الدراسات الأمنية - أفريقيا",
    method: "rss",
    url: "https://issafrica.org/iss-today/feed",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "think-tank",
    topics: ["security", "peace", "governance", "geopolitics"]
  },
  {
    name: "African Arguments",
    nameAr: "أفريكان أرجومنتس",
    method: "rss",
    url: "https://africanarguments.org/feed/",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "research-platform",
    topics: ["politics", "rights", "culture", "society"]
  },
  {
    name: "ACCORD",
    nameAr: "أكورد - حل النزاعات",
    method: "rss",
    url: "https://www.accord.org.za/feed/",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "research-center",
    topics: ["peace", "security", "governance"]
  },
  {
    name: "ECDPM",
    nameAr: "مركز سياسات التنمية الأوروبي",
    method: "rss",
    url: "https://ecdpm.org/feed/",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "think-tank",
    topics: ["governance", "economy", "development"]
  },
  {
    name: "The Africa Report",
    nameAr: "ذا أفريكا ريبورت",
    method: "rss",
    url: "https://www.theafricareport.com/feed/",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "analysis-platform",
    topics: ["politics", "economy", "geopolitics"]
  },
  {
    name: "Jeune Afrique - Politique",
    nameAr: "جون أفريك - سياسة",
    method: "rss",
    url: "https://www.jeuneafrique.com/politique/feed/",
    lang: "fr",
    region: "africa",
    base: "in-africa",
    category: "analysis-platform",
    topics: ["politics", "economy", "society"]
  },

  // خارج المنطقة لكن متخصصة فيها
  {
    name: "MERIP",
    nameAr: "ميريب",
    method: "rss",
    url: "https://merip.org/feed/",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "research-platform",
    topics: ["politics", "rights", "culture", "political-economy"]
  },
  {
    name: "TIMEP",
    nameAr: "معهد التحرير لسياسة الشرق الأوسط",
    method: "rss",
    url: "https://timep.org/feed/",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "think-tank",
    topics: ["politics", "rights", "governance"]
  },
  {
    name: "Al-Shabaka",
    nameAr: "الشبكة",
    method: "rss",
    url: "https://al-shabaka.org/feed/",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "policy-network",
    topics: ["politics", "rights", "culture"]
  },

  // عالمي لكن نستخدمه فقط إذا كان المحتوى MENA/Africa-focused
  {
    name: "Chatham House",
    nameAr: "تشاتام هاوس",
    method: "rss",
    url: "https://www.chathamhouse.org/feed/default/rss.xml",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["politics", "geopolitics", "economy", "security"]
  },
  {
    name: "CSIS",
    nameAr: "مركز الدراسات الاستراتيجية والدولية",
    method: "rss",
    url: "https://www.csis.org/analysis/feed",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["security", "geopolitics", "politics"]
  },
  {
    name: "Brookings",
    nameAr: "بروكينغز",
    method: "rss",
    url: "https://www.brookings.edu/feed/",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["politics", "economy", "governance", "society"]
  },
  {
    name: "Carnegie Endowment",
    nameAr: "مؤسسة كارنيغي",
    method: "rss",
    url: "https://carnegieendowment.org/rss/solr.xml",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["politics", "governance", "geopolitics"]
  },
  {
    name: "ECFR",
    nameAr: "المجلس الأوروبي للعلاقات الخارجية",
    method: "rss",
    url: "https://ecfr.eu/feed/",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["geopolitics", "international", "security"]
  },
  {
    name: "Stimson Center",
    nameAr: "مركز ستيمسون",
    method: "rss",
    url: "https://www.stimson.org/feed/",
    lang: "en",
    region: "global",
    base: "outside",
    category: "think-tank",
    topics: ["security", "peace", "governance"]
  },

  // حقوقي / مدني
  {
    name: "Human Rights Watch Publications",
    nameAr: "هيومن رايتس ووتش - منشورات",
    method: "rss",
    url: "https://www.hrw.org/rss/publications",
    lang: "en",
    region: "global",
    base: "outside",
    category: "ngo",
    topics: ["rights", "politics", "governance"]
  },
  {
    name: "Amnesty International",
    nameAr: "العفو الدولية",
    method: "rss",
    url: "https://www.amnesty.org/en/feed/",
    lang: "en",
    region: "global",
    base: "outside",
    category: "ngo",
    topics: ["rights", "governance"]
  },
  {
    name: "RSF",
    nameAr: "مراسلون بلا حدود",
    method: "rss",
    url: "https://rsf.org/en/rss.xml",
    lang: "en",
    region: "global",
    base: "outside",
    category: "ngo",
    topics: ["rights", "media", "governance"]
  }
];

export const HTML_SOURCES = [
  {
    name: "Middle East Council on Global Affairs",
    nameAr: "مجلس الشرق الأوسط للشؤون العالمية",
    method: "html",
    url: "https://mecouncil.org/publications/",
    lang: "en",
    region: "mena",
    base: "in-region",
    category: "think-tank"
  },
  {
    name: "AUB Issam Fares Institute",
    nameAr: "معهد عصام فارس - الجامعة الأميركية في بيروت",
    method: "html",
    url: "https://www.aub.edu.lb/ifi/Pages/index.aspx",
    lang: "en",
    region: "mena",
    base: "in-region",
    category: "university-center"
  },
  {
    name: "Harvard CMES",
    nameAr: "مركز هارفارد للدراسات الشرق أوسطية",
    method: "html",
    url: "https://cmes.fas.harvard.edu/cmes-publications",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "university-center"
  },
  {
    name: "Georgetown CCAS",
    nameAr: "مركز جورجتاون للدراسات العربية المعاصرة",
    method: "html",
    url: "https://ccas.georgetown.edu/category/faculty-publications/",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "university-center"
  },
  {
    name: "Cambridge Centre of African Studies",
    nameAr: "مركز كامبريدج للدراسات الأفريقية",
    method: "html",
    url: "https://www.african.cam.ac.uk/books",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "university-center"
  },
  {
    name: "Afrobarometer Dispatches",
    nameAr: "أفروباروميتر - إحالات تحليلية",
    method: "html",
    url: "https://www.afrobarometer.org/dispatches/",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "research-network"
  },
  {
    name: "SAIIA Publications",
    nameAr: "SAIIA - منشورات",
    method: "html",
    url: "https://saiia.org.za/publications/",
    lang: "en",
    region: "africa",
    base: "in-africa",
    category: "think-tank"
  },
  {
    name: "Africa Center for Strategic Studies",
    nameAr: "مركز أفريقيا للدراسات الاستراتيجية",
    method: "html",
    url: "https://africacenter.org/publications-EN",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "think-tank"
  },
  {
    name: "Chatham House MENA",
    nameAr: "تشاتام هاوس - الشرق الأوسط وشمال أفريقيا",
    method: "html",
    url: "https://www.chathamhouse.org/regions/middle-east-and-north-africa",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "think-tank"
  },
  {
    name: "Brookings Foresight Africa",
    nameAr: "بروكينغز - فورسايت أفريقيا",
    method: "html",
    url: "https://www.brookings.edu/collection/foresight-africa-2025-2030/",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "think-tank"
  }
];

export const FLAGSHIP_REPORTS = [
  {
    title: "Survey of economic and social developments in the Arab region 2023–2024",
    titleAr: "مسح التطورات الاقتصادية والاجتماعية في المنطقة العربية 2023-2024",
    source: "ESCWA",
    sourceAr: "الإسكوا",
    url: "https://www.unescwa.org/publications/survey-economic-social-developments-arab-region-2023-2024",
    date: "2025-04-01",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "igo",
    freq: "annual",
    hasPdf: true,
    topics: ["economy", "governance"]
  },
  {
    title: "Progress towards the Sustainable Development Goals in the Arab region in 2025",
    titleAr: "التقدم نحو أهداف التنمية المستدامة في المنطقة العربية 2025",
    source: "ESCWA",
    sourceAr: "الإسكوا",
    url: "https://www.unescwa.org/publications/progress-towards-sdgs-arab-region-2025",
    date: "2025-04-01",
    lang: "en",
    region: "mena",
    base: "outside",
    category: "igo",
    freq: "annual",
    hasPdf: false,
    topics: ["economy", "governance", "rights"]
  },
  {
    title: "Economic Report on Africa 2025",
    titleAr: "التقرير الاقتصادي عن أفريقيا 2025",
    source: "UNECA",
    sourceAr: "اللجنة الاقتصادية لأفريقيا",
    url: "https://www.uneca.org/eca-events/stories/afcfta-holds-key-economic-resilience-ecas-2025-economic-report-africa",
    date: "2025-03-17",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "igo",
    freq: "annual",
    hasPdf: false,
    topics: ["economy", "governance"]
  },
  {
    title: "African Economic Outlook 2025",
    titleAr: "التوقعات الاقتصادية الأفريقية 2025",
    source: "AfDB",
    sourceAr: "البنك الأفريقي للتنمية",
    url: "https://am.afdb.org/en/publications/african-economic-outlook-2025",
    date: "2025-05-27",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "ifi",
    freq: "annual",
    hasPdf: true,
    topics: ["economy", "governance"]
  },
  {
    title: "Foresight Africa 2025-2030",
    titleAr: "فورسايت أفريقيا 2025-2030",
    source: "Brookings",
    sourceAr: "بروكينغز",
    url: "https://www.brookings.edu/collection/foresight-africa-2025-2030/",
    date: "2025-01-14",
    lang: "en",
    region: "africa",
    base: "outside",
    category: "think-tank",
    freq: "annual",
    hasPdf: true,
    topics: ["economy", "governance", "politics", "climate"]
  },
  {
    title: "Regional Economic Outlook: Middle East and Central Asia, October 2025",
    titleAr: "الآفاق الاقتصادية الإقليمية: الشرق الأوسط وآسيا الوسطى - أكتوبر 2025",
    source: "IMF",
    sourceAr: "صندوق النقد الدولي",
    url: "https://www.imf.org/ar/publications/reo/meca/issues/2025/10/21/regional-economic-outlook-middle-east-central-asia-october-2025",
    date: "2025-10-21",
    lang: "ar",
    region: "mena",
    base: "outside",
    category: "ifi",
    freq: "semi",
    hasPdf: false,
    topics: ["economy", "governance"]
  }
];

export const POSITIVE_KEYWORDS = [
  "report","study","paper","brief","analysis","assessment","survey","outlook","index",
  "yearbook","monitor","review","working paper","discussion paper","policy paper",
  "research paper","special report","issue brief","dispatch","monograph",
  "rapport","étude","note d'analyse","working papers",
  "تقرير","دراسة","ورقة بحثية","ورقة سياسات","إحاطة","تحليل","مؤشر","استعراض","ورقة عمل"
];

export const NEGATIVE_KEYWORDS = [
  "press release","press statement","news","commentary","op-ed","podcast","video","webinar",
  "speech","remarks","newsletter","event","announcement",
  "communiqué de presse","déclaration","discours",
  "بيان صحفي","خبر","تصريح","ندوة","فعالية","إعلان"
];

export const MENA_KEYWORDS = [
  "arab","middle east","mena","gulf","maghreb","levant","palestine","gaza","iraq","syria",
  "lebanon","jordan","egypt","libya","morocco","tunisia","algeria","saudi","uae","qatar",
  "عربي","الشرق الأوسط","شمال أفريقيا","الخليج","المغرب العربي","المشرق","فلسطين","غزة","سوريا","العراق"
];

export const AFRICA_KEYWORDS = [
  "africa","african","sahel","sub-saharan","horn of africa","east africa","west africa",
  "nigeria","kenya","ethiopia","sudan","south africa","ghana","senegal","congo",
  "أفريقيا","إفريقي","الساحل","القرن الأفريقي"
];
