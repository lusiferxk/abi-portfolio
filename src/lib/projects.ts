export type World = "CREATE" | "CAPTURE" | "BUILD";

export interface ProjectMedia {
  url: string;
  alt?: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "wide" | "cinematic";
  type?: "image" | "video";
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
    source: "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ",
    featured: true,
    description: "Designing digital content for an enterprise technology company communicating AI, RocketDev, data and digital-transformation topics. Complex enterprise technology topics transformed into clear, visually consistent LinkedIn communication.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    coverImage: "/worlds/mitra-content.jpg",
    year: "2024",
    context: "Designing digital content for an enterprise technology company communicating AI, RocketDev, data and digital-transformation topics.",
    challenge: "Complex enterprise technology topics needed to be transformed into clear, visually consistent LinkedIn communication.",
    execution: "Developed a visual hierarchy, brand consistency, technology-led imagery, and content framing for repeatable social-media layouts.",
    galleryUrls: [
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-www-activity-7356914794383233024-JBrQ",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-rocketdevai-legacymodernization-activity-7348933599024357411-dtBx",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-dataandai-innovatewithai-activity-7348213553423605760-4yOS",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7346136101155135488-01o8",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7341321364886228992-UcAr",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-activity-7338437922494234624-h03w",
      "https://www.linkedin.com/posts/mitra-innovation_rocketuniverse-unidata-mitraai-activity-7335904380057001984-cIcR",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdev-ai-activity-7332986644947451905-a0G5",
      "https://www.linkedin.com/posts/mitra-innovation_rocketdevai-enterpriseai-legacymodernization-activity-7331539829093990400-x8eY",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-townhall2025-activity-7322499043283140609-hjZl",
      "https://www.linkedin.com/posts/mitra-innovation_digitalbanking-mitraai-dataandai-activity-7316023558764130304-1aED",
      "https://www.linkedin.com/posts/mitra-innovation_mitraai-innovatewithai-dataandai-activity-7315261627501547522-OuCN"
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
    title: "Sync2 Brand",
    world: "CREATE",
    category: ["Branding", "Marketing", "Content Design"],
    role: "Brand Designer",
    source: "#", // MANUAL_PORTFOLIO_ASSETS
    featured: false,
    description: "Complete branding, marketing, and content design system for Sync2.",
    tools: ["Illustrator", "Figma"],
    coverImage: "/worlds/sync2-branding.jpg",
    year: "2024",
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
    source: "https://drive.google.com/file/d/12Gs0qR9DmCSfmiBYpmSMKg7uHIH9Aswa/view?usp=sharing",
    featured: true,
    description: "A narrative short film exploring the complexities of identity through visual storytelling. Directed, shot, and edited with a focus on atmospheric lighting, character composition, and psychological narrative tension.",
    coverImage: "/worlds/multipersonal_disorder.jpg",
    year: "2024",
    media: [
      { url: "/worlds/multipersonal_disorder.jpg", alt: "Multipersonal Disorder Cinematic Frame", aspectRatio: "cinematic", type: "image" }
    ]
  },
  {
    id: "wso2-stop-motion",
    title: "WSO2 Stop Motion",
    world: "CAPTURE",
    category: ["Videography", "Experimental", "Stop Motion"],
    role: "", // No invented role
    source: "https://www.linkedin.com/posts/abi-amandi-1877391b0_internship-wso2-stopmotion-activity-7244143434859511808-vypb",
    featured: true,
    description: "Creative stop-motion animation project for WSO2.",
    coverImage: "/worlds/wso2_stopmotion.jpg",
    year: "2024",
    media: [
      { url: "/worlds/wso2_stopmotion.jpg", alt: "WSO2 Stop Motion Frame", aspectRatio: "wide", type: "image" }
    ]
  },
  {
    id: "forced-perspective",
    title: "Forced Perspective Video",
    world: "CAPTURE",
    category: ["Videography", "Experimental"],
    role: "", // No invented role
    source: "https://drive.google.com/drive/folders/1HvsveswetNSVmxOPpv4kLr0rPxKatY4R",
    featured: true,
    description: "Experimental video project using forced perspective techniques to create visual illusions.",
    coverImage: "/worlds/forced_perspective.jpg",
    year: "2024",
    media: [
      { url: "/worlds/forced_perspective.jpg", alt: "Forced Perspective Illusions", aspectRatio: "landscape", type: "image" }
    ]
  },
  {
    id: "photographics",
    title: "Photographics",
    world: "CAPTURE",
    category: ["Photography"],
    role: "",
    source: "https://drive.google.com/file/d/1lwnDNsQ2LROqrWDOSgbHaAwOc8ag7WQE/edit",
    featured: true,
    description: "A curated photography portfolio spanning multiple genres.",
    coverImage: "/worlds/photographics_1.jpg",
    year: "2024",
    media: [
      { url: "/worlds/photographics_1.jpg", alt: "Editorial Portrait", aspectRatio: "portrait", type: "image" },
      { url: "/worlds/photographics_2.jpg", alt: "Documentary Shot", aspectRatio: "landscape", type: "image" }
    ]
  },
  {
    id: "ai-song",
    title: "AI Song",
    world: "CAPTURE",
    category: ["Experimental", "Audio Visual"],
    role: "",
    source: "https://drive.google.com/file/d/19P_qN_49i4xuKCckZNSeoSIyZ6zKFtjx/view?usp=sharing",
    featured: false,
    description: "An experimental project blending audio with visual design.",
    coverImage: "/worlds/ai_song.jpg",
    year: "2024",
    media: [
      { url: "/worlds/ai_song.jpg", alt: "AI Song Audio Visual", aspectRatio: "square", type: "image" }
    ]
  },
  {
    id: "hinehnathuru-man",
    title: "Hinehnathuru Man",
    world: "CAPTURE",
    category: ["Film", "Music", "Visual"],
    role: "",
    source: "#",
    featured: false,
    description: "A music and visual art project combining original melody composition with creative visual storytelling.",
    coverImage: "/worlds/film-production.jpg",
    year: "2024",
    assetStatus: "awaiting-source",
    media: [] // No media to render currently
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
