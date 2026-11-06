// Personal details shown across the site. Edit here; every page reads from this file.
export const site = {
  name: "Ansab Khalid",
  role: "Full-stack & AI engineer",
  intro:
    "Full-stack developer with 4+ years building production web applications in Laravel, Vue/Nuxt and React: multi-tenant SaaS ERPs, data pipelines processing 1M+ records per county, and AI-integrated products.",
  since: "8+ production projects delivered to clients in the United States, Canada, Ireland and the Gulf.",
  email: "ansab.khalid444@gmail.com",
  phone: "+92 316 4990917",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  socials: {
    github: "https://github.com/AnsabKhalid",
    linkedin: "https://www.linkedin.com/in/ansab-khalid-719b81206/",
    upwork: "",
  },
  oldSite: "https://ansabkhalid.github.io/portfolio/",
  siteUrl: "https://example.vercel.app",
};

// Headline numbers from the CV; each is a countable fact.
export const stats = [
  { value: "4+", label: "years shipping production software" },
  { value: "8+", label: "client projects delivered at Maqware" },
  { value: "1M+", label: "records per county in the Banyan pipeline" },
  { value: "6", label: "developers led through sprints and review" },
];

export const about = [
  "I'm a full-stack developer in Lahore. I own features end to end, from schema design through the API and frontend to deployment, mostly in Laravel with Vue, Nuxt and React.",
  "My work centres on multi-tenant SaaS ERPs, automated data-aggregation pipelines and AI-integrated products: LLM features with GPT-4 and Gemini, chatbots, and computer-vision apps I've built end to end. I care about tests (Pest, Dusk), CI on every push, and leaving systems easier to change than I found them.",
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Maqware Solutions",
    logo: "/logos/maqware.png",
    place: "Lahore",
    period: "May 2023 – Present",
    summary: "8 production projects for clients in the US, Canada and the Gulf, across ERP, SaaS, logistics and marketplace domains.",
    points: [
      "Architected multi-tenant systems with per-tenant database isolation, role-based access control and subscription-gated features.",
      "Designed REST APIs and relational schemas; owned queues, scheduled jobs and integrations with OpenAI GPT-4, Google Gemini, Telnyx SMS/Voice, Stripe, PayPal and MyFatoorah.",
      "Kept quality up with Pest and Laravel Dusk suites, Pint and GitHub Actions CI running lint and tests on every push.",
      "Led a team of 6 developers through Agile sprint planning and code review, owning delivery of high-scale systems and data pipelines.",
    ],
  },
  {
    role: "Software Developer",
    org: "Pacslink Corporation",
    logo: "/logos/pacslink.png",
    place: "Lahore",
    period: "Mar 2021 – Apr 2023",
    summary: "A hospital information system used by 1,000+ clinical staff across multiple departments.",
    points: [
      "Built desktop and web modules in Java and Oracle APEX.",
      "Designed and shipped a patient portal dashboard bringing records, appointments and reports into one view.",
      "Wrote complex PL/SQL procedures for data processing and built medical and operational reports in Jasper Reports (iReport).",
    ],
  },
];

export const education = [
  { title: "BS Computer Science", org: "Government College University", period: "2018 – 2022" },
  { title: "The Complete Software Development Bootcamp", org: "Udemy", period: "Certificate" },
  { title: "Foundations of AI and Machine Learning", org: "Coursera", period: "Certificate" },
  { title: "API Creation and Testing with Postman", org: "Postman", period: "Certificate" },
];

export const capabilities = [
  {
    tag: "build.",
    title: "SaaS & ERP platforms",
    text: "Multi-tenant ERPs and SaaS products with per-tenant databases, real accounting, inventory and billing, and subscription-gated modules.",
    tools: ["Laravel 12", "Vue 3 / Nuxt", "React", "Inertia", "MySQL", "stancl/tenancy"],
  },
  {
    tag: "automate.",
    title: "Data pipelines & integrations",
    text: "Queued, scheduled pipelines that collect and enrich millions of records, and the integrations that act on them: SMS, voice, payments, PDFs.",
    tools: ["Queues & scheduler", "Puppeteer", "Telnyx", "Stripe", "PayPal", "Browsershot"],
  },
  {
    tag: "see.",
    title: "AI & computer vision",
    text: "LLM features and chatbots on GPT-4 and Gemini, and vision apps (detection, tracking, recognition) that run locally and report into a dashboard.",
    tools: ["OpenAI GPT-4", "Gemini", "Ollama", "YOLO", "ArcFace", "OpenCV"],
  },
];

// Grouped like the CV's core skills.
export const toolkit = [
  { group: "Languages", items: ["PHP 8", "JavaScript", "TypeScript", "Python", "Java", "SQL / PL-SQL"] },
  { group: "Backend", items: ["Laravel 12", "Inertia.js", "REST API design", "Queued & scheduled jobs", "Laravel Fortify", "Laravel Nova", "Flask"] },
  { group: "Frontend", items: ["Vue 3", "Nuxt", "React", "Tailwind CSS", "Vite", "Vuex", "Chart.js"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "Oracle PL/SQL", "SQLite"] },
  { group: "Integrations & AI", items: ["Stripe", "PayPal", "MyFatoorah", "Telnyx SMS & Voice", "OpenAI GPT-4", "Google Gemini", "WebSockets", "YOLO / ONNX"] },
  { group: "Testing & ops", items: ["Pest", "Laravel Dusk", "GitHub Actions CI", "Docker (Sail)", "AWS", "cPanel", "Git", "Jira", "Agile / Scrum"] },
];
