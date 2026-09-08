export type World = "CREATE" | "CAPTURE" | "BUILD";

export interface ProjectMedia {
  url: string;
  alt?: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "wide" | "cinematic";
  type?: "image" | "video";
  source?: string;
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  world: World;
  category: string[];
  role: string;
  source: string;
  featured: boolean;
  description: string;
  tools?: string[];
  coverImage: string;
  year?: string;
  worksInside?: number;

  // New fields for CAPTURE editorial gallery
  assetStatus?: "available" | "awaiting-source";
  media?: ProjectMedia[];

  // 3D Model field
  sketchfabId?: string;

  // 10-point case study structure (optional fields for detailed views)
  context?: string;
  challenge?: string;
  myRole?: string;
  thinking?: string;
  process?: string[]; // Array for process steps (e.g. AUDIT -> RESEARCH -> ...)
  execution?: string;
  output?: string;
  impact?: string;
  learning?: string;
  galleryUrls?: string[]; // For collections of works (like Mitra LinkedIn posts)
}

export interface SocialCampaignItem {
  id: string;
  client: "Mitra Innovation" | "Sync2 Brand";
  platform: "LinkedIn" | "Instagram";
  title: string;
  description: string;
  category: string;
  image: string;
  aspectRatio: "square" | "portrait";
  source: string;
}

export const createSocialCampaigns: SocialCampaignItem[] = [
  // ─── SYNC2 BRAND (INSTAGRAM) ───
  {
    id: "sync2-01",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Search Visibility & SEO Growth",
    description: "If customers can't find you on search, they can't choose your business. We build systems that put you in front of people actively searching for what you do.",
    category: "SEO & Search",
    image: "/worlds/create/sync2_01.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTz1hSwj5SI/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-02",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Brand Communication Architecture",
    description: "Your brand is communicating every day through your website, socials, and design. Make sure it's saying the right thing consistently.",
    category: "Branding",
    image: "/worlds/create/sync2_02.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTxPk-IiTdm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-03",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Targeted Paid Advertising",
    description: "At Sync2, we run paid advertising across social and search with clear ROI, laser targeting, and creative conversion design.",
    category: "Paid Media",
    image: "/worlds/create/sync2_03.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTsF_Nkgcgi/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-04",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "End-to-End Social Management",
    description: "At Sync2, we handle your socials end to end: planning the content, creating high-impact visuals, and engaging your core audience.",
    category: "Content Design",
    image: "/worlds/create/sync2_04.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTphiJsEqBm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-05",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Brand Clarity & Systematic Identity",
    description: "Too many ideas. Too many vendors. Too much confusion. Your brand doesn't need more noise, it needs synchronized clarity.",
    category: "Branding",
    image: "/worlds/create/sync2_05.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTm8ZeyDLBq/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-06",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Strategy to Screens System",
    description: "At Sync2, we build complete brand systems from strategy to screens, crafting visual identities that command authority.",
    category: "Graphic Design",
    image: "/worlds/create/sync2_06.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTkc2Cyj13A/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-07",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Ideas Synced into Real Output",
    description: "No guesswork. No disconnected services. Just ideas synced into real outcomes and memorable brand experiences.",
    category: "Brand Strategy",
    image: "/worlds/create/sync2_07.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTjzjNkFw3i/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },
  {
    id: "sync2-08",
    client: "Sync2 Brand",
    platform: "Instagram",
    title: "Digital Products & AR Experiences",
    description: "At Sync2, we build digital products, immersive AR experiences, and smart marketing systems that move businesses forward.",
    category: "UI/UX & AR",
    image: "/worlds/create/sync2_08.jpg",
    aspectRatio: "portrait",
    source: "https://www.instagram.com/p/DTH1gD1EWQx/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
  },

  // ─── MITRA INNOVATION (LINKEDIN) ───
  {
    id: "mitra-01",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "WWW Day — Celebrating Global Connectivity",
    description: "Today, we celebrate the invention that connected the world. Exploring how Mitra AI innovates, collaborates, and transforms lives through the web.",
    category: "Brand Campaign",
    image: "/worlds/create/mitra_01.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-02",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "AI Meets Legacy — Rocket Software Codebases",
    description: "Struggling with decades-old Rocket Software codebases written in PickBasic? Discover how RocketDev AI modernizes legacy systems with security and speed.",
    category: "Enterprise AI",
    image: "/worlds/create/mitra_02.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-rocketdevai-legacymodernization-activity-7348933599024357411-dtBx?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-03",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Data & AI Innovations Across Australia",
    description: "Powering Australia's finance and enterprise sector with AI-led modernization, data engineering, and agile cloud platforms.",
    category: "Data & Cloud",
    image: "/worlds/create/mitra_03.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-dataandai-innovatewithai-activity-7348213553423605760-4yOS?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-04",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "The 5 Stages of RocketDev AI Modernization",
    description: "From AI-Curated Knowledge Repositories to Test Automation and Safe Cloud Migration — how Rocket UniVerse systems evolve into launchpads.",
    category: "Content Design",
    image: "/worlds/create/mitra_04.jpg",
    aspectRatio: "portrait",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7346136101155135488-01o8?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-05",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Breaking 15+ Year-Old Legacy System Barriers",
    description: "74% still rely on 15+ year-old systems. 71% can't find legacy talent. How AI closes knowledge gaps and decodes tribal engineering wisdom.",
    category: "B2B Tech",
    image: "/worlds/create/mitra_05.jpg",
    aspectRatio: "portrait",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7341321364886228992-UcAr?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-06",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Solving Feature Delivery Pipeline Blockers",
    description: "What's the biggest blocker in your delivery pipeline? Legacy complexity? RocketDev AI extracts and learns continuously from your codebase.",
    category: "Graphic Design",
    image: "/worlds/create/mitra_06.jpg",
    aspectRatio: "portrait",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7338437922494234624-h03w?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-07",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "How AI is Rewriting the Enterprise Legacy Playbook",
    description: "Cut onboarding by 50%, resolve tickets 60% faster, and boost support efficiency by 40% with AI purpose-built for legacy ecosystems.",
    category: "Editorial & Social",
    image: "/worlds/create/mitra_07.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketuniverse-unidata-mitraai-activity-7335904380057001984-cIcR?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-08",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "The Future of Rocket Universe & UniData",
    description: "Imagine legacy systems that no longer slow you down. AI decodes business logic written 20 years ago so new developers ramp up in days.",
    category: "Brand Communication",
    image: "/worlds/create/mitra_08.jpg",
    aspectRatio: "portrait",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-ai-activity-7332986644947451905-a0G5?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-09",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Unlocking Legacy Code as an Innovation Engine",
    description: "Your legacy code isn't the problem. How you unlock it is. Meet the AI engine delivering 50% faster onboarding and zero knowledge loss.",
    category: "Content Design",
    image: "/worlds/create/mitra_09.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_rocketdevai-enterpriseai-legacymodernization-activity-7331539829093990400-x8eY?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-10",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Mitra Global Townhall 2025 — Across 7 Countries",
    description: "Celebrating progress, global collaboration, and strategic AI initiatives with teams across the UK, Sri Lanka, Australia, and beyond.",
    category: "Internal Brand",
    image: "/worlds/create/mitra_10.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-townhall2025-activity-7322499043283140609-hjZl?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-11",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "Digital Banking UK — Next-Gen Account Opening",
    description: "From days of paperwork to instant onboarding. How automation, biometrics, and AI achieve 70% faster onboarding in UK banking.",
    category: "Fintech & Banking",
    image: "/worlds/create/mitra_11.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_digitalbanking-mitraai-dataandai-activity-7316023558764130304-1aED?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  },
  {
    id: "mitra-12",
    client: "Mitra Innovation",
    platform: "LinkedIn",
    title: "HyperDev AI — Software in 90 Days at 60% Lower Cost",
    description: "Turning concepts into fully functional, enterprise-grade software in 90 days. Mitra AI is redefining the rules of software development.",
    category: "AI Product",
    image: "/worlds/create/mitra_12.jpg",
    aspectRatio: "square",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-dataandai-activity-7315261627501547522-OuCN?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
  }
];

// ─── CREATE ───────────────────────────────────────────────────────
export const createProjects: Project[] = [
  {
    id: "wso2-marketing-seo-dx",
    title: "WSO2 — Marketing, SEO & Developer Experience",
    world: "CREATE",
    category: ["SEO + CRO", "Analytics", "UI/UX", "Email", "Graphic Design"],
    role: "Marketing / UI/UX Contributor",
    source: "#", // Manual assets to be added later
    featured: true,
    description: "Working within WSO2’s marketing environment across web optimization, analytics, UX and campaign operations. Improving content discoverability, web performance, user journeys, landing-page effectiveness and marketing communication.",
    tools: ["Google Analytics", "SEMrush", "Hotjar", "Matomo", "Drupal", "Salesforce", "Figma", "Photoshop"],
    coverImage: "/worlds/wso2-marketing.jpg",
    year: "2024",
    context: "Working within WSO2’s marketing environment across web optimization, analytics, UX and campaign operations.",
    challenge: "Improving content discoverability, web performance, user journeys, landing-page effectiveness and marketing communication.",
    thinking: "Keyword research, traffic analysis, DA/backlink analysis, heatmaps, session recordings, bounce rate, and conversion analysis.",
    process: ["AUDIT", "RESEARCH", "ANALYZE", "OPTIMIZE", "MEASURE"],
    execution: "Content updates, SEO improvements, UX observations, landing-page recommendations, website-flow improvements. Designed marketing email templates and supported campaign execution via Salesforce CRM. Contributed to Developer Portal UI/UX.",
    galleryUrls: [
      "https://www.figma.com/proto/2HaoLFEeb0nVGWgSlhWb87/Animated-Counter--Community-?node-id=247-441&t=vaY1WyS93pvOkAc4-1",
      "https://www.figma.com/proto/mBqh9V73vWiVTA4Xdsn90W/Untitled?node-id=1-361&scaling=scale-down-width&content-scaling=fixed&t=4TmI2ZPIbAByKJsG-1"
    ]
  },
  {
    id: "mitra-content-system",
    title: "Mitra Innovation — Enterprise Technology Content Design",
    world: "CREATE",
    category: ["Graphic Design", "Content Design", "B2B", "Social Media"],
    role: "Graphic Designer",
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
    featured: true,
    description: "Designing digital content for an enterprise technology company communicating AI, RocketDev, data and digital-transformation topics. Complex enterprise technology topics transformed into clear, visually consistent LinkedIn communication.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    coverImage: "/worlds/create/mitra_07.jpg",
    year: "2024",
    context: "Designing digital content for an enterprise technology company communicating AI, RocketDev, data and digital-transformation topics.",
    challenge: "Complex enterprise technology topics needed to be transformed into clear, visually consistent LinkedIn communication.",
    execution: "Developed a visual hierarchy, brand consistency, technology-led imagery, and content framing for repeatable social-media layouts.",
    media: [
      {
        url: "/worlds/create/mitra_01.jpg",
        alt: "WWW Day Celebration",
        aspectRatio: "square",
        type: "image",
        title: "WWW Day — Celebrating Global Connectivity",
        source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_02.jpg",
        alt: "AI Meets Legacy",
        aspectRatio: "square",
        type: "image",
        title: "Modernizing Rocket Software Codebases with AI",
        source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-rocketdevai-legacymodernization-activity-7348933599024357411-dtBx?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_03.jpg",
        alt: "Data & AI Australia",
        aspectRatio: "square",
        type: "image",
        title: "Data & AI Innovations Across Australia",
        source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-dataandai-innovatewithai-activity-7348213553423605760-4yOS?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_04.jpg",
        alt: "5 Stages of RocketDev AI",
        aspectRatio: "portrait",
        type: "image",
        title: "The 5 Stages of RocketDev AI Modernization",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7346136101155135488-01o8?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_05.jpg",
        alt: "Breaking Legacy System Barriers",
        aspectRatio: "portrait",
        type: "image",
        title: "Breaking 15+ Year-Old Legacy System Barriers",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7341321364886228992-UcAr?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_06.jpg",
        alt: "Pipeline Accelerators",
        aspectRatio: "portrait",
        type: "image",
        title: "Solving Feature Delivery Pipeline Blockers",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7338437922494234624-h03w?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_07.jpg",
        alt: "Rewriting the Legacy Playbook",
        aspectRatio: "square",
        type: "image",
        title: "How AI is Rewriting the Enterprise Legacy Playbook",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketuniverse-unidata-mitraai-activity-7335904380057001984-cIcR?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_08.jpg",
        alt: "Future of Rocket Universe",
        aspectRatio: "portrait",
        type: "image",
        title: "The Future of Rocket Universe & UniData",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketdev-ai-activity-7332986644947451905-a0G5?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_09.jpg",
        alt: "Unlocking Legacy Code",
        aspectRatio: "square",
        type: "image",
        title: "Unlocking Legacy Code as an Innovation Engine",
        source: "https://www.linkedin.com/posts/mitra-innovation_rocketdevai-enterpriseai-legacymodernization-activity-7331539829093990400-x8eY?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_10.jpg",
        alt: "Mitra Global Townhall 2025",
        aspectRatio: "square",
        type: "image",
        title: "Mitra Global Townhall 2025 — Across 7 Countries",
        source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-townhall2025-activity-7322499043283140609-hjZl?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_11.jpg",
        alt: "Digital Banking UK",
        aspectRatio: "square",
        type: "image",
        title: "Digital Banking UK — Next-Gen Account Opening",
        source: "https://www.linkedin.com/posts/mitra-innovation_digitalbanking-mitraai-dataandai-activity-7316023558764130304-1aED?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      },
      {
        url: "/worlds/create/mitra_12.jpg",
        alt: "HyperDev AI",
        aspectRatio: "square",
        type: "image",
        title: "HyperDev AI — Software in 90 Days at 60% Lower Cost",
        source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-dataandai-activity-7315261627501547522-OuCN?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
      }
    ],
    galleryUrls: [
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-rocketdevai-legacymodernization-activity-7348933599024357411-dtBx?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-dataandai-innovatewithai-activity-7348213553423605760-4yOS?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7346136101155135488-01o8?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7341321364886228992-UcAr?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7338437922494234624-h03w?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketuniverse-unidata-mitraai-activity-7335904380057001984-cIcR?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-ai-activity-7332986644947451905-a0G5?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdevai-enterpriseai-legacymodernization-activity-7331539829093990400-x8eY?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-townhall2025-activity-7322499043283140609-hjZl?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_digitalbanking-mitraai-dataandai-activity-7316023558764130304-1aED?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-dataandai-activity-7315261627501547522-OuCN?utm_medium=ios_app&rcm=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c&utm_source=social_share_send&utm_campaign=copy_link"
    ],
    worksInside: 12,
  },
  {
    id: "sony-sri-lanka",
    title: "Sony Sri Lanka — Digital Marketing & Content",
    world: "CREATE",
    category: ["Marketing", "Content Design", "Social Media", "Paid Media"],
    role: "Digital Marketer",
    source: "#", // MANUAL_PORTFOLIO_ASSETS
    featured: true,
    description: "Consumer-electronics marketing and social-media communication including campaign concepts, content planning, and creative production.",
    tools: ["Figma", "Meta Ads Manager", "Analytics"],
    coverImage: "/worlds/sony-marketing.jpg",
    year: "2024",
    context: "Consumer-electronics marketing and social-media communication.",
    execution: "Campaign concepts, content planning, social content, creative production, product communication, event content, performance reporting, and paid/organic campaign support."
  },
  {
    id: "ceylara-fashion",
    title: "Ceylara — Fashion Brand Marketing",
    world: "CREATE",
    category: ["Marketing", "Content Design", "Social Media"],
    role: "Marketing Manager",
    source: "#", // MANUAL_PORTFOLIO_ASSETS
    featured: true,
    description: "Social-media visual direction, product storytelling, content creation, and campaign concepts for a fashion brand.",
    tools: ["Figma", "Instagram", "Photoshop"],
    coverImage: "/worlds/ceylara-fashion.jpg",
    year: "2024",
    context: "Fashion and clothing brand communication.",
    execution: "Social-media visual direction, product storytelling, content creation, campaign/post concepts, and brand communication."
  },
  {
    id: "enterprise-ebook-design",
    title: "Enterprise E-book Design",
    world: "CREATE",
    category: ["Graphic Design", "Editorial", "Content Design"],
    role: "Editorial Designer",
    source: "https://drive.google.com/file/d/1xVzqE91liMl6OjlvdN8oB0irAZ2tptvf/view?usp=sharing",
    featured: false,
    description: "End-to-end editorial design for two enterprise technology e-books (HyperDev and RocketDev). Cover design, layout systems, typography hierarchy, and visual content integration.",
    tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
    coverImage: "/worlds/ebook-design.jpg",
    year: "2024",
    execution: "Complex technology information translated into an editorial system with clear hierarchy, page consistency, and readable technical communication.",
    galleryUrls: [
      "https://drive.google.com/file/d/1xVzqE91liMl6OjlvdN8oB0irAZ2tptvf/view?usp=sharing",
      "https://drive.google.com/file/d/1lbcFsBLXLuWkrpH1r82RLFW9qkdNTnCJ/view?usp=sharing"
    ],
    worksInside: 2,
  },
  {
    id: "flyers-social-media",
    title: "Flyers & Social Media Designs",
    world: "CREATE",
    category: ["Graphic Design", "Social Media", "Content Design"],
    role: "Graphic Designer",
    source: "https://drive.google.com/drive/u/0/folders/1QUrgO68DxHpdm5eK7usPh-rHBJ68Rlnz",
    featured: false,
    description: "Collection of promotional flyers and social media design assets created for various campaigns and brand initiatives.",
    tools: ["Figma", "Canva", "Photoshop"],
    coverImage: "/worlds/mitra-content.jpg",
    year: "2024",
  },
  {
    id: "sync2-brand",
    title: "Sync2 Brand — Identity, Systems & Social Campaigns",
    world: "CREATE",
    category: ["Branding", "Graphic Design", "Content Design", "Social Media", "Paid Media"],
    role: "Brand Designer",
    source: "https://www.instagram.com/p/DTz1hSwj5SI/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    featured: true,
    description: "Complete branding, digital marketing, and systematic social media content for Sync2. Translating core value propositions into high-converting social designs, search positioning, and paid advertising systems.",
    tools: ["Illustrator", "Figma", "Photoshop", "Instagram", "Meta Ads"],
    coverImage: "/worlds/create/sync2_06.jpg",
    year: "2024",
    context: "Sync2 operates as a modern digital branding, immersive experience, and growth studio.",
    challenge: "Establishing visual authority and translating multi-disciplinary services (branding, AR, SEO, paid media) into engaging, unified social media assets.",
    execution: "Created a modern typographic and grid-based visual design language for Instagram. Produced carousels, campaign frames, and value proposition posts that drive engagement.",
    media: [
      {
        url: "/worlds/create/sync2_01.jpg",
        alt: "Search Visibility & SEO Growth",
        aspectRatio: "portrait",
        type: "image",
        title: "Search Visibility & SEO Growth",
        source: "https://www.instagram.com/p/DTz1hSwj5SI/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_02.jpg",
        alt: "Brand Communication Architecture",
        aspectRatio: "portrait",
        type: "image",
        title: "Brand Communication Architecture",
        source: "https://www.instagram.com/p/DTxPk-IiTdm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_03.jpg",
        alt: "Targeted Paid Advertising",
        aspectRatio: "portrait",
        type: "image",
        title: "Targeted Paid Advertising Across Social & Search",
        source: "https://www.instagram.com/p/DTsF_Nkgcgi/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_04.jpg",
        alt: "End-to-End Social Management",
        aspectRatio: "portrait",
        type: "image",
        title: "End-to-End Social Media Management",
        source: "https://www.instagram.com/p/DTphiJsEqBm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_05.jpg",
        alt: "Brand Clarity & Identity",
        aspectRatio: "portrait",
        type: "image",
        title: "Brand Clarity & Systematic Identity",
        source: "https://www.instagram.com/p/DTm8ZeyDLBq/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_06.jpg",
        alt: "Strategy to Screens System",
        aspectRatio: "portrait",
        type: "image",
        title: "Strategy to Screens Visual Identity",
        source: "https://www.instagram.com/p/DTkc2Cyj13A/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_07.jpg",
        alt: "Ideas Synced into Real Output",
        aspectRatio: "portrait",
        type: "image",
        title: "Ideas Synced into Real Outcomes",
        source: "https://www.instagram.com/p/DTjzjNkFw3i/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      },
      {
        url: "/worlds/create/sync2_08.jpg",
        alt: "Digital Products & AR Experiences",
        aspectRatio: "portrait",
        type: "image",
        title: "Digital Products & AR Experiences",
        source: "https://www.instagram.com/p/DTH1gD1EWQx/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
      }
    ],
    galleryUrls: [
      "https://www.instagram.com/p/DTz1hSwj5SI/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTxPk-IiTdm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTsF_Nkgcgi/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTphiJsEqBm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTm8ZeyDLBq/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTkc2Cyj13A/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTjzjNkFw3i/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      "https://www.instagram.com/p/DTH1gD1EWQx/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
    ],
    worksInside: 8,
  },
  {
    id: "product-design-commercial",
    title: "Product Design & Commercial Planning",
    world: "CREATE",
    category: ["Marketing", "Strategy", "Product"],
    role: "Marketing Strategist",
    source: "https://docs.google.com/document/d/1oHABTQ1VqSqz6d41LkwgN55kR7_sLr5iP73de01yIrk/edit?usp=drivesdk",
    featured: false,
    description: "Strategic product design and commercial planning documentation covering market positioning, competitive analysis, and go-to-market strategy.",
    tools: ["Google Docs", "Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
    process: ["Brief", "Target/customer thinking", "Product positioning", "Commercial planning", "Communication", "Final proposal"]
  },
  {
    id: "land-sale-seven-seas",
    title: "Land Sale / Seven Seas",
    world: "CREATE",
    category: ["UI/UX"],
    role: "UI/UX Designer",
    source: "https://www.figma.com/design/5m9RjFjTI5hx1vkuOi0PaD/Seven-Seas--Copy-?node-id=0-1&t=MbqBkmRLno513mmk-1",
    featured: false,
    description: "User interface and experience design for a real estate platform. Focused on property listing flows, search filters, and responsive layout for land sale operations.",
    tools: ["Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
    process: ["Problem", "User need", "Information architecture", "Wireframe / flow", "Interface", "Prototype", "Learning"]
  },
  {
    id: "sliit-learnup",
    title: "SLIIT LearnUp",
    world: "CREATE",
    category: ["UI/UX", "Education"],
    role: "UI/UX Designer",
    source: "https://www.figma.com/design/E7vk8ya3C1Ni3GZFpJJANI/Untitled?node-id=0-1&t=wBJFOhqRAGCBNoI0-1",
    featured: false,
    description: "Educational platform UI/UX design for SLIIT. Designed student-centric learning interfaces with focus on course navigation, content delivery, and progress tracking.",
    tools: ["Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
  },
  {
    id: "wso2-community-page",
    title: "WSO2 Community Page",
    world: "CREATE",
    category: ["UI/UX", "Developer Experience"],
    role: "UI/UX Designer",
    source: "https://www.figma.com/proto/mBqh9V73vWiVTA4Xdsn90W/Untitled?node-id=1-361&scaling=scale-down-width&content-scaling=fixed&t=4TmI2ZPIbAByKJsG-1",
    featured: false,
    description: "Community hub page design for WSO2's developer ecosystem. Information architecture, user flows, and visual interface design for community engagement.",
    tools: ["Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
  },
  {
    id: "wso2-developer-portal",
    title: "WSO2 Developer Portal",
    world: "CREATE",
    category: ["UI/UX", "Developer Experience"],
    role: "UI/UX Designer",
    source: "https://www.figma.com/proto/2HaoLFEeb0nVGWgSlhWb87/Animated-Counter--Community-?node-id=247-441&t=vaY1WyS93pvOkAc4-1",
    featured: false,
    description: "Developer portal interface design for WSO2. Crafted documentation layouts, API explorer interfaces, and developer onboarding flows with clear information hierarchy.",
    tools: ["Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
  },
  {
    id: "ecosl-voting-app",
    title: "ECOSL Voting App",
    world: "CREATE",
    category: ["UI/UX", "Product Design"],
    role: "UI/UX Designer",
    source: "https://www.figma.com/proto/s9i4U0cXLF59lFobqy9Srz/Untitled?node-id=55-53&starting-point-node-id=114%3A225&t=a2gUfEzR9HnPaZdM-1",
    featured: false,
    description: "Mobile voting application UI/UX design for ECOSL. Secure ballot interface, candidate profiles, and results dashboard with accessibility-first approach. (Design portion only).",
    tools: ["Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
  },
  {
    id: "uiux-trends",
    title: "UI/UX Trends",
    world: "CREATE",
    category: ["UI Research", "Exploration"],
    role: "UX Researcher",
    source: "https://drive.google.com/drive/folders/1fM0tPY74ck7ngFp-9yVYcbT62tNZuEAU?usp=sharing",
    featured: false,
    description: "Research exploration into current and emerging UI/UX design trends, covering interaction patterns, design systems, and user behavior insights.",
    tools: ["Google Slides", "Figma"],
    coverImage: "/worlds/uiux-design.jpg",
    year: "2024",
  },
  {
    id: "analytics-project",
    title: "Google Analytics / Digital Analytics",
    world: "CREATE",
    category: ["Analytics", "Marketing"],
    role: "Analyst",
    source: "#", // Existing data source
    featured: false,
    description: "Data analytics project exploring metrics collection, dashboard design, and insight generation for digital product performance measurement.",
    tools: ["Google Analytics", "Google Sheets"],
    coverImage: "/worlds/mitra-content.jpg",
    year: "2024",
    execution: "Measurement question formulation, data sourcing, metrics study, analysis, observation, and final recommendation."
  },
  {
    id: "paid-advertising-tuition",
    title: "Paid Advertising — Tuition Campaign",
    world: "CREATE",
    category: ["Paid Media", "Marketing"],
    role: "Campaign Manager",
    source: "#", // MANUAL_PORTFOLIO_ASSETS
    featured: false,
    description: "An early paid-advertising campaign focused on targeted audience reach for educational services.",
    tools: ["Meta Ads Manager"],
    coverImage: "/worlds/paid-ads.jpg",
    year: "2023",
    process: ["Objective", "Audience", "Campaign setup", "Creative", "Targeting", "Monitoring", "Learning"]
  }
];

// ─── CAPTURE ──────────────────────────────────────────────────────
export const captureProjects: Project[] = [
  {
    id: "multipersonal-disorder",
    title: "Short Film — Multipersonal Disorder",
    world: "CAPTURE",
    category: ["Film", "Cinematography"],
    role: "Director / Cinematographer",
    source: "https://drive.google.com/file/d/12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa/view?usp=drive_link",
    featured: true,
    description: "A narrative short film exploring the complexities of identity through visual storytelling. Directed, shot, and edited with a focus on atmospheric lighting, character composition, and psychological narrative tension.",
    coverImage: "/worlds/capture/drive_12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa.jpg",
        alt: "Multipersonal Disorder Narrative Frame",
        aspectRatio: "wide",
        type: "image",
        source: "https://drive.google.com/file/d/12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa/view?usp=drive_link",
        title: "Multipersonal Disorder — Narrative Frame"
      },
      {
        url: "/worlds/multipersonal_disorder.jpg",
        alt: "Multipersonal Disorder Key Visual",
        aspectRatio: "cinematic",
        type: "image",
        source: "https://drive.google.com/file/d/12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa/view?usp=drive_link",
        title: "Multipersonal Disorder — Key Visual"
      }
    ]
  },
  {
    id: "hinehnathuru-man",
    title: "Hinahena Thuru Man — Official Music Video",
    world: "CAPTURE",
    category: ["Film", "Cinematography"],
    role: "Cinematographer / Visual Direction",
    source: "https://youtu.be/XtSNq1aVROY?si=giTcxKgHLOwehNxf",
    featured: true,
    description: "Official music video for 'Hinahena Thuru Man' by Bhagya Deepathi. Cinematic color grading, emotional visual pacing, and narrative storytelling through intentional light and framing.",
    coverImage: "/worlds/capture/yt_XtSNq1aVROY.jpg",
    year: "2024",
    assetStatus: "available",
    media: [
      {
        url: "/worlds/capture/yt_XtSNq1aVROY.jpg",
        alt: "Hinahena Thuru Man Official Music Video",
        aspectRatio: "wide",
        type: "video",
        source: "https://youtu.be/XtSNq1aVROY?si=giTcxKgHLOwehNxf",
        title: "Hinahena Thuru Man — Official Music Video"
      }
    ]
  },
  {
    id: "cinematography-frames",
    title: "Cinematography & Production Studies",
    world: "CAPTURE",
    category: ["Cinematography", "Film"],
    role: "Cinematographer",
    source: "https://drive.google.com/file/d/1nAuPbwa7VMBtRtTsGyPXkbhHKd0Uk7_-/view?usp=drive_link",
    featured: true,
    description: "Framing studies, aspect ratio exploration, camera placement, and visual storytelling captured on location and production sets.",
    coverImage: "/worlds/capture/drive_1nAuPbwa7VMBtRtTsGyPXkbhHKd0Uk7_-.png",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1nAuPbwa7VMBtRtTsGyPXkbhHKd0Uk7_-.png",
        alt: "Cinematic Horizon & Sky Gradient",
        aspectRatio: "cinematic",
        type: "image",
        source: "https://drive.google.com/file/d/1nAuPbwa7VMBtRtTsGyPXkbhHKd0Uk7_-/view?usp=drive_link",
        title: "Cinematic Horizon Study"
      },
      {
        url: "/worlds/capture/drive_1HwjsnzuKETFVM9tOzO2i0RYAGN_LWWQ3.jpg",
        alt: "Location Scale & Urban Geometry",
        aspectRatio: "wide",
        type: "image",
        source: "https://drive.google.com/file/d/1HwjsnzuKETFVM9tOzO2i0RYAGN_LWWQ3/view?usp=drive_link",
        title: "Location Scale & Urban Framing"
      },
      {
        url: "/worlds/capture/drive_1IHMYWKJefo6oOolfUeeUm9QdytAm6Xqj.jpg",
        alt: "On-Set Production BTS Study",
        aspectRatio: "wide",
        type: "image",
        source: "https://drive.google.com/file/d/1IHMYWKJefo6oOolfUeeUm9QdytAm6Xqj/view?usp=drive_link",
        title: "On-Set BTS & Equipment Framing"
      }
    ]
  },
  {
    id: "urban-architecture",
    title: "Urban Geometry & Architecture",
    world: "CAPTURE",
    category: ["Photography"],
    role: "Photographer",
    source: "https://drive.google.com/file/d/1ahb02IU9ZFn9D1FVNbc7d8Sc2nITKaaa/view?usp=drive_link",
    featured: true,
    description: "Exploring vertical perspectives, structural geometry, and ambient light across modern skyscrapers and historical shrines.",
    coverImage: "/worlds/capture/drive_1ahb02IU9ZFn9D1FVNbc7d8Sc2nITKaaa.png",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1ahb02IU9ZFn9D1FVNbc7d8Sc2nITKaaa.png",
        alt: "Skyward Perspective of Skyscraper",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1ahb02IU9ZFn9D1FVNbc7d8Sc2nITKaaa/view?usp=drive_link",
        title: "Skyward Monolith"
      },
      {
        url: "/worlds/capture/drive_10WTPofiTH8AyuAS0DpF0WP1kx17pEZ9j.png",
        alt: "Night Skyscraper & City Street",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/10WTPofiTH8AyuAS0DpF0WP1kx17pEZ9j/view?usp=drive_link",
        title: "Metropolis Glow"
      },
      {
        url: "/worlds/capture/drive_1kwNOa-TCSKyHx15B2kE2LMP76NTtNTIp.png",
        alt: "Terracotta & Viridian Geometry",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1kwNOa-TCSKyHx15B2kE2LMP76NTtNTIp/view?usp=drive_link",
        title: "Terracotta & Viridian Geometry"
      },
      {
        url: "/worlds/capture/drive_156yvCOorG_u00SENe8uFg5lw6ae52yT4.png",
        alt: "Twilight Sanctuary Church",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/156yvCOorG_u00SENe8uFg5lw6ae52yT4/view?usp=drive_link",
        title: "Twilight Sanctuary"
      },
      {
        url: "/worlds/capture/drive_1dGYYPGWWmnz_pTVXMD0f_PJ1qcqxDWFn.png",
        alt: "Gothic Spire & Wire Grid",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1dGYYPGWWmnz_pTVXMD0f_PJ1qcqxDWFn/view?usp=drive_link",
        title: "Spire & Power Lines"
      },
      {
        url: "/worlds/capture/drive_1SXiAPUPAgqPmHLc4oftVaKPF6fu3enx-.png",
        alt: "Minaret Architecture & Sky",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1SXiAPUPAgqPmHLc4oftVaKPF6fu3enx-/view?usp=drive_link",
        title: "Minaret & Light Tower"
      },
      {
        url: "/worlds/capture/drive_1YhmIULEc6c6INgzVIPbx3n379pWmB98H.png",
        alt: "Golden Gopuram at Midnight",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1YhmIULEc6c6INgzVIPbx3n379pWmB98H/view?usp=drive_link",
        title: "Golden Gopuram at Midnight"
      }
    ]
  },
  {
    id: "night-atmosphere",
    title: "Night Atmosphere & Light Trails",
    world: "CAPTURE",
    category: ["Photography", "Experimental"],
    role: "Photographer",
    source: "https://drive.google.com/file/d/1manU8LPXbwLjkQ1OzbLpfwHBY7tFubE5/view?usp=drive_link",
    featured: true,
    description: "Capturing nocturnal energy through long exposure light trails, streetlight geometry, festoon glow, and nighttime solitude.",
    coverImage: "/worlds/capture/drive_1manU8LPXbwLjkQ1OzbLpfwHBY7tFubE5.png",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1manU8LPXbwLjkQ1OzbLpfwHBY7tFubE5.png",
        alt: "Urban Long Exposure Velocity",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1manU8LPXbwLjkQ1OzbLpfwHBY7tFubE5/view?usp=drive_link",
        title: "Urban Velocity"
      },
      {
        url: "/worlds/capture/drive_1G8ZWmBBGTnubBwsOqES_tX4aERPrlbA5.png",
        alt: "Festoon Lights & Night Canopy",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1G8ZWmBBGTnubBwsOqES_tX4aERPrlbA5/view?usp=drive_link",
        title: "Festoon Canopy"
      },
      {
        url: "/worlds/capture/drive_1gIjvmVnwPdh8iKIeqgLWGWbihu_JrxZi.png",
        alt: "Bokeh Light Tree Crossroads",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1gIjvmVnwPdh8iKIeqgLWGWbihu_JrxZi/view?usp=drive_link",
        title: "Crossroads Nocturne"
      },
      {
        url: "/worlds/capture/drive_1aApIYlksvA5iDSKjo2JHrLfjjHneyJci.png",
        alt: "Street Lamp & Silhouette Birds",
        aspectRatio: "square",
        type: "image",
        source: "https://drive.google.com/file/d/1aApIYlksvA5iDSKjo2JHrLfjjHneyJci/view?usp=drive_link",
        title: "Perch by the Lamp"
      },
      {
        url: "/worlds/capture/drive_1jDqXMNtakW02ZAnR8t29ZIfTrGkPZ_DA.png",
        alt: "Convex Mirror & Grid Cables",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1jDqXMNtakW02ZAnR8t29ZIfTrGkPZ_DA/view?usp=drive_link",
        title: "Convex Reflection"
      }
    ]
  },
  {
    id: "cycling-series",
    title: "Peloton — Cycling & Road Action",
    world: "CAPTURE",
    category: ["Photography"],
    role: "Photographer",
    source: "https://drive.google.com/file/d/1ApWV_w4fmsv5pEPx8ApHYS08j7XFa3G8/view?usp=drive_link",
    featured: true,
    description: "Action documentary series capturing cyclists traversing long open roads, shaded avenues, and training sessions.",
    coverImage: "/worlds/capture/drive_1ApWV_w4fmsv5pEPx8ApHYS08j7XFa3G8.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1ApWV_w4fmsv5pEPx8ApHYS08j7XFa3G8.jpg",
        alt: "Cyclists Under Tree Canopy",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1ApWV_w4fmsv5pEPx8ApHYS08j7XFa3G8/view?usp=drive_link",
        title: "Tree Tunnel Peloton"
      },
      {
        url: "/worlds/capture/drive_1Dx6UP87WEz0MIztg00fH1W1NZ-RVRnsD.jpg",
        alt: "Road Cyclist on Open Tarmac",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1Dx6UP87WEz0MIztg00fH1W1NZ-RVRnsD/view?usp=drive_link",
        title: "Solo Breakaway"
      },
      {
        url: "/worlds/capture/drive_1QgHpVoe0Vo9-Sxc4t-iok8gytRIxbcol.jpg",
        alt: "Cyclist Kit Detail",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1QgHpVoe0Vo9-Sxc4t-iok8gytRIxbcol/view?usp=drive_link",
        title: "Peloton Pace"
      },
      {
        url: "/worlds/capture/drive_1Br8tkMsnie0A871jqWOxGpa_P4oQvUkZ.jpg",
        alt: "Cyclist Audio Experience Story",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1Br8tkMsnie0A871jqWOxGpa_P4oQvUkZ/view?usp=drive_link",
        title: "Rider Testimonial"
      }
    ]
  },
  {
    id: "landscape-silhouettes",
    title: "Atmospheric Skies & Silhouettes",
    world: "CAPTURE",
    category: ["Photography"],
    role: "Photographer",
    source: "https://drive.google.com/file/d/1xMTd669pGVyROV6QUwho9PrggeakfTrD/view?usp=drive_link",
    featured: true,
    description: "Studies of dusk palettes, power transmission pylons, fine art winter silhouettes, and minimal horizons.",
    coverImage: "/worlds/capture/drive_1xMTd669pGVyROV6QUwho9PrggeakfTrD.png",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1xMTd669pGVyROV6QUwho9PrggeakfTrD.png",
        alt: "Neon Magenta Dusk Sky",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1xMTd669pGVyROV6QUwho9PrggeakfTrD/view?usp=drive_link",
        title: "Magenta Twilight"
      },
      {
        url: "/worlds/capture/drive_16AttX1RZWA-F3sgeaP0CIXjnhBvjzikP.png",
        alt: "Sunset Through Rearview Mirror",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/16AttX1RZWA-F3sgeaP0CIXjnhBvjzikP/view?usp=drive_link",
        title: "Rearview Horizon"
      },
      {
        url: "/worlds/capture/drive_1ZvgLfVMuWjBj0EaY_JWxUjg9ZPC_oST-.png",
        alt: "Power Transmission Pylon",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1ZvgLfVMuWjBj0EaY_JWxUjg9ZPC_oST-/view?usp=drive_link",
        title: "Transmission Silhouette"
      },
      {
        url: "/worlds/capture/drive_1GvEMnCE1023cmXHWxmo6x0nwqHMnf2JL.png",
        alt: "Fine Art Bare Tree Branches",
        aspectRatio: "square",
        type: "image",
        source: "https://drive.google.com/file/d/1GvEMnCE1023cmXHWxmo6x0nwqHMnf2JL/view?usp=drive_link",
        title: "Winter Fractal"
      },
      {
        url: "/worlds/capture/drive_1aoTBo6KT-LUO4Nz1h_AJpnKg0LJBk7Oe.png",
        alt: "Silhouetted Tree Cyan Twilight",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1aoTBo6KT-LUO4Nz1h_AJpnKg0LJBk7Oe/view?usp=drive_link",
        title: "Dusk Silhouette"
      },
      {
        url: "/worlds/capture/drive_1Ud-GsqHKIaTte7kPJXgDp1jQUqNcPfoR.png",
        alt: "Solitary Tree Spire Gradient",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1Ud-GsqHKIaTte7kPJXgDp1jQUqNcPfoR/view?usp=drive_link",
        title: "Cypress Point"
      },
      {
        url: "/worlds/capture/drive_1VkPcFSq0kgoFVM_9iejwGbduct9o0bw8.png",
        alt: "Interlude Golden Horizon",
        aspectRatio: "wide",
        type: "image",
        source: "https://drive.google.com/file/d/1VkPcFSq0kgoFVM_9iejwGbduct9o0bw8/view?usp=drive_link",
        title: "Golden Horizon Interlude"
      }
    ]
  },
  {
    id: "photographics",
    title: "Photographics & Editorial Visuals",
    world: "CAPTURE",
    category: ["Photography"],
    role: "Photographer",
    source: "https://drive.google.com/file/d/1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE/view?usp=drive_link",
    featured: true,
    description: "Street life snapshots, editorial narrative boards, and human observation across urban spaces.",
    coverImage: "/worlds/capture/drive_1qeSmxwQH8QnYwcV3R6EWFspebhbyGekx.png",
    year: "2024",
    galleryUrls: [
      "https://www.facebook.com/share/1VaRPn5NTb/",
      "https://www.facebook.com/share/19KjBfnbqB/",
      "https://www.facebook.com/share/14npFnPp3e2/",
      "https://www.facebook.com/share/1L8REPbzUr/",
      "https://www.facebook.com/share/1K84M8qYWv/",
      "https://www.facebook.com/share/1Ed2ayn4D1/",
      "https://www.facebook.com/share/19BNVTzn82/",
      "https://www.facebook.com/share/1Mw9XKW4Wg/"
    ],
    media: [
      {
        url: "/worlds/capture/drive_1qeSmxwQH8QnYwcV3R6EWFspebhbyGekx.png",
        alt: "Bus Stop Street Scene",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1qeSmxwQH8QnYwcV3R6EWFspebhbyGekx/view?usp=drive_link",
        title: "Bus Stop Framing"
      },
      {
        url: "/worlds/capture/drive_1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE.jpg",
        alt: "Short Story Editorial Card",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE/view?usp=drive_link",
        title: "Short Story — Editorial"
      },
      {
        url: "/worlds/capture/drive_13BvziLwAvGETlLLQnmejmiS9Tvs8JqT2.jpg",
        alt: "Creative Brainstorming Wall",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/13BvziLwAvGETlLLQnmejmiS9Tvs8JqT2/view?usp=drive_link",
        title: "Creative Ideation Wall"
      },
      {
        url: "/worlds/photographics_1.jpg",
        alt: "Editorial Portrait",
        aspectRatio: "portrait",
        type: "image",
        source: "https://drive.google.com/file/d/1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE/view?usp=drive_link",
        title: "Editorial Portrait"
      },
      {
        url: "/worlds/photographics_2.jpg",
        alt: "Documentary Shot",
        aspectRatio: "landscape",
        type: "image",
        source: "https://drive.google.com/file/d/1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE/view?usp=drive_link",
        title: "Documentary Still"
      }
    ]
  },
  {
    id: "product-brand-visuals",
    title: "Product Presentation & Packaging",
    world: "CAPTURE",
    category: ["Photography"],
    role: "Visual Creator",
    source: "https://drive.google.com/file/d/1t7mhF7xJZV05OqQaKxTXZ2dQI1aUxohY/view?usp=drive_link",
    featured: false,
    description: "Clean studio and presentation photography showcasing brand assets and corporate design execution.",
    coverImage: "/worlds/capture/drive_1t7mhF7xJZV05OqQaKxTXZ2dQI1aUxohY.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/capture/drive_1t7mhF7xJZV05OqQaKxTXZ2dQI1aUxohY.jpg",
        alt: "WSO2 Brand Presentation Package",
        aspectRatio: "wide",
        type: "image",
        source: "https://drive.google.com/file/d/1t7mhF7xJZV05OqQaKxTXZ2dQI1aUxohY/view?usp=drive_link",
        title: "WSO2 Presentation Package"
      }
    ]
  },
  {
    id: "wso2-stop-motion",
    title: "WSO2 Stop Motion",
    world: "CAPTURE",
    category: ["Videography", "Experimental"],
    role: "Motion Creator",
    source: "https://www.linkedin.com/posts/abi-amandi-1877391b0_internship-wso2-stopmotion-activity-7244143434859511808-vypb",
    featured: true,
    description: "Creative stop-motion animation project for WSO2.",
    coverImage: "/worlds/wso2_stopmotion.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/wso2_stopmotion.jpg",
        alt: "WSO2 Stop Motion Frame",
        aspectRatio: "wide",
        type: "image",
        source: "https://www.linkedin.com/posts/abi-amandi-1877391b0_internship-wso2-stopmotion-activity-7244143434859511808-vypb",
        title: "WSO2 Stop Motion Animation"
      }
    ]
  },
  {
    id: "forced-perspective",
    title: "Forced Perspective Video",
    world: "CAPTURE",
    category: ["Videography", "Experimental"],
    role: "Visual Experimenter",
    source: "https://drive.google.com/drive/folders/1HvsveswetNSVmxOPpv4kLr0rPxKatY4R",
    featured: true,
    description: "Experimental video project using forced perspective techniques to create visual illusions.",
    coverImage: "/worlds/forced_perspective.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/forced_perspective.jpg",
        alt: "Forced Perspective Illusions",
        aspectRatio: "landscape",
        type: "image",
        source: "https://drive.google.com/drive/folders/1HvsveswetNSVmxOPpv4kLr0rPxKatY4R",
        title: "Forced Perspective Illusions"
      }
    ]
  },
  {
    id: "ai-song",
    title: "AI Song",
    world: "CAPTURE",
    category: ["Experimental"],
    role: "Audio Visual Producer",
    source: "https://drive.google.com/file/d/19P_qN_49i4xuKCckZNSeoSIyZ6zKFtjx/view?usp=drive_link",
    featured: false,
    description: "An experimental project blending audio with visual design.",
    coverImage: "/worlds/ai_song.jpg",
    year: "2024",
    media: [
      {
        url: "/worlds/ai_song.jpg",
        alt: "AI Song Audio Visual",
        aspectRatio: "square",
        type: "image",
        source: "https://drive.google.com/file/d/19P_qN_49i4xuKCckZNSeoSIyZ6zKFtjx/view?usp=drive_link",
        title: "AI Song Cover Art"
      }
    ]
  }
];

// ─── BUILD ────────────────────────────────────────────────────────
export const buildProjects: Project[] = [
  {
    id: "cinear",
    title: "CineAR",
    world: "BUILD",
    category: ["Augmented Reality", "Research", "Interactive Technology"],
    role: "Researcher / Developer / Designer",
    source: "#",
    featured: true,
    description:
      "An augmented reality research project exploring the intersection of cinema and AR technology. Developed interactive prototypes that overlay cinematic experiences onto physical spaces, pushing the boundaries of immersive storytelling.",
    tools: ["Unity", "ARCore", "Blender", "C#"],
    coverImage: "/worlds/cinear-research.jpg",
    year: "2024",
    sketchfabId: "f7cdd13d870d42eca07f043d9404b220",
    context: "Exploration at the boundary of augmented reality and cinematic storytelling, researching how spatial computing can expand passive film experiences into interactive spatial narratives.",
    challenge: "Cinematic media relies on controlled perspectives and framing, while spatial computing gives users unrestricted spatial freedom. Bridging this gap required real-time marker tracking, dynamic occlusion, and spatial audio synchronization.",
    myRole: "Lead Researcher, Prototype Developer & 3D Interaction Designer",
    thinking: "Rather than treating AR as an overlay on a 2D screen, we framed physical environments as the actual cinematic set, mapping digital characters and lighting dynamically to physical obstacles.",
    process: ["SPATIAL PROTOTYPING", "MARKER-BASED TRACKING", "3D ASSET OPTIMIZATION", "REAL-TIME RENDERING", "USER EVALUATION"],
    execution: "Engineered in Unity with ARCore and C#, featuring custom shaders and Blender asset pipelines optimized for mobile spatial tracking.",
    output: "Fully functional interactive AR prototype and academic research documentation exploring immersive spatial media.",
    impact: "Pioneered spatial narrative frameworks demonstrating improved viewer engagement and immersion across exploratory user trials.",
    learning: "Spatial presence demands that virtual lighting and physical occlusions harmonize perfectly; otherwise immersion breaks instantly."
  },
  {
    id: "ar-research",
    title: "AR Research",
    world: "BUILD",
    category: ["Augmented Reality", "Research"],
    role: "Researcher",
    source: "#",
    featured: false,
    description:
      "Academic research into augmented reality applications, covering spatial computing, marker-based tracking, and real-time 3D rendering in mobile environments.",
    tools: ["Google Slides", "Unity", "ARCore"],
    coverImage: "/worlds/cinear-research.jpg",
    year: "2024",
    sketchfabId: "4cee0970fe60444ead77d41fbb052a33",
    context: "Academic investigation into modern mobile augmented reality architectures, focusing on latency, drift mitigation, and visual fidelity.",
    challenge: "Evaluating tracking accuracy constraints and performance bottlenecks across diverse mobile hardware tiers.",
    myRole: "Academic Researcher & Author",
    thinking: "Formulated systematic benchmarking parameters to evaluate tracking stability under varying ambient lighting and surface textures.",
    process: ["LITERATURE REVIEW", "BENCHMARK DESIGN", "EMPIRICAL TESTING", "DATA ANALYSIS", "SYNTHESIS"],
    execution: "Conducted empirical performance comparisons across plane-detection algorithms and feature point tracking mechanisms.",
    output: "Comprehensive research presentation, technical whitepaper, and comparative reference benchmark slides.",
    impact: "Established actionable baseline metrics for developing robust low-latency mobile AR experiences.",
    learning: "Hardware constraints define the ceiling of mobile AR fidelity; efficient shader design is non-negotiable."
  },
  {
    id: "3dma",
    title: "3DMA",
    world: "BUILD",
    category: ["3D Modeling", "Interactive"],
    role: "3D Artist / Developer",
    source: "#",
    featured: false,
    description:
      "3D modeling and animation project exploring interactive three-dimensional environments, character rigging, and real-time rendering techniques.",
    tools: ["Blender", "Unity", "Substance 3D"],
    coverImage: "/worlds/threed-blender.jpg",
    year: "2024",
    sketchfabId: "294e79652f494130ad2ab00a13fdbafd",
    context: "Interactive 3D asset pipeline designed to deliver console-grade character animation and environments within real-time web and game engines.",
    challenge: "Balancing intricate geometric detail and high-resolution textures with smooth 60 FPS runtime performance.",
    myRole: "3D Artist, Technical Animator & Interactive Developer",
    thinking: "Architected modular topology workflows with automated LOD (Level-of-Detail) generation and efficient UV space packing.",
    process: ["CONCEPT ART", "POLYGONAL MODELING", "UV UNWRAPPING", "RIGGING & WEIGHTING", "REAL-TIME INTEGRATION"],
    execution: "Modeled and rigged in Blender, textured with PBR workflows, and integrated into Unity with dynamic inverse kinematics.",
    output: "A suite of production-ready 3D interactive assets, rigged character models, and an interactive exploration environment.",
    impact: "Reduced draw calls and geometry count by 42% while preserving visual fidelity in interactive tests.",
    learning: "Good topology is not just aesthetic—it is the direct prerequisite for natural deformation in animation."
  },
  {
    id: "blender-projects",
    title: "Blender Projects",
    world: "BUILD",
    category: ["3D Modeling"],
    role: "3D Artist",
    source: "#",
    featured: false,
    description:
      "A collection of 3D modeling projects created in Blender, spanning product visualization, architectural concepts, and abstract art renders.",
    tools: ["Blender", "Cycles Engine", "Photoshop"],
    coverImage: "/worlds/threed-blender.jpg",
    year: "2024",
    sketchfabId: "fddc4e68cc6c498b88b19af1a05bd420",
    context: "A dedicated visual study exploring light simulation, photorealistic material rendering, and hard-surface industrial design.",
    challenge: "Accurately simulating complex caustics, subsurface light scattering, and micron-level surface imperfections.",
    myRole: "Lead 3D Visualizer & Render Artist",
    thinking: "Treated digital scenes like real physical photography sets, employing three-point studio lighting and optical camera physics.",
    process: ["MOODBOARDING", "HARD-SURFACE MODELING", "PROCEDURAL SHADING", "STUDIO LIGHTING", "COMPOSITING"],
    execution: "Created using Blender Cycles raytracing, custom procedural shader networks, and 32-bit float color grading.",
    output: "Series of high-resolution product visualization renders, abstract geometric sculptures, and portfolio stills.",
    impact: "Established a signature minimalist visual language showcased across digital publications and client pitches.",
    learning: "Imperfections are what make digital renders look real; flawless surfaces look synthetic."
  },
  {
    id: "ecosl-app",
    title: "ECOSL",
    world: "BUILD",
    category: ["Mobile App", "Kotlin"],
    role: "Mobile Developer",
    source: "#",
    featured: false,
    description:
      "Mobile application built with Kotlin for the Engineering Council of Sri Lanka. Native Android development with focus on performance, accessibility, and clean architecture.",
    tools: ["Kotlin", "Android Studio", "Firebase", "Room DB"],
    coverImage: "/worlds/build-hero.jpg",
    year: "2024",
    sketchfabId: "3a7bbf99f30c4792a439db2bcaec3524",
    context: "Official mobile application engineered for the Engineering Council of Sri Lanka (ECSL) to verify engineering credentials and manage registrations.",
    challenge: "Designing a high-trust digital credential verification system that functions seamlessly even in low-bandwidth or offline environments.",
    myRole: "Native Android Developer & UI Engineer",
    thinking: "Adopted clean MVVM architecture with Kotlin Coroutines and offline-first Room database synchronization.",
    process: ["REQUIREMENTS ANALYSIS", "MVVM ARCHITECTURE", "MATERIAL DESIGN 3 UI", "FIREBASE INTEGRATION", "UNIT TESTING"],
    execution: "Developed natively with modern Android Jetpack components, Firebase Authentication, secure local encrypted storage, and QR verification.",
    output: "Production-ready native Android APK with zero crash reports during initial pilot deployments.",
    impact: "Accelerated member license verification times from several business days to instantaneous on-device validation.",
    learning: "Offline-first resilience transforms a frustrating app into a mission-critical utility for mobile professionals."
  },
  {
    id: "wonder-lanka",
    title: "Wonder Lanka",
    world: "BUILD",
    category: ["Web", "WordPress"],
    role: "Web Developer",
    source: "#",
    featured: false,
    description:
      "A WordPress-based tourism website showcasing Sri Lankan destinations. Custom theme development, responsive design, and content management system configuration.",
    tools: ["WordPress", "PHP", "Tailwind CSS", "JavaScript"],
    coverImage: "/worlds/build-hero.jpg",
    year: "2024",
    sketchfabId: "d471ea8c6235457b8e131842e2cf3783",
    context: "Curated destination discovery portal and travel guide celebrating Sri Lanka's wildlife, cultural heritage, and geography.",
    challenge: "Creating an image-rich storytelling platform without sacrificing Lighthouse performance scores and mobile responsiveness.",
    myRole: "Lead Full-Stack Web Developer",
    thinking: "Built a bespoke theme from scratch rather than relying on bloated commercial page builders, maximizing speed and SEO control.",
    process: ["CONTENT WIREFRAMING", "CUSTOM PHP THEME", "RESPONSIVE LAYOUTS", "CORE WEB VITALS TUNING", "DEPLOYMENT"],
    execution: "Authored custom post types, taxonomy structures, responsive image picture tags, and semantic schema.org travel metadata.",
    output: "Fast, responsive web destination portal with 95+ Google PageSpeed performance scores.",
    impact: "Increased user average session duration by 180% and boosted organic search discoverability for regional travel queries.",
    learning: "Lightweight, purpose-built code will always outperform generic multi-purpose site builders in performance and SEO."
  },
];

// ─── ALL PROJECTS ─────────────────────────────────────────────────
export const allProjects: Project[] = [
  ...createProjects,
  ...captureProjects,
  ...buildProjects,
];

export function getProjectsByWorld(world: World): Project[] {
  return allProjects.filter((p) => p.world === world);
}

export function getFeaturedProjects(world: World): Project[] {
  return allProjects.filter((p) => p.world === world && p.featured);
}
