"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export interface CertificateItem {
  id: string;
  num: string;
  title: string;
  description: string;
  corporation: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  logo: React.ReactNode;
  badgeImage?: string;
  badgeType?: string;
}

const googleLogo = (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const hubspotLogo = (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.885 7.195a2.536 2.536 0 0 0-2.348-1.572c-.443 0-.86.115-1.226.316V3.803a1.8 1.8 0 1 0-1.26 0v2.136a2.528 2.528 0 0 0-1.226-.316 2.537 2.537 0 0 0-2.533 2.537c0 .484.136.936.372 1.323L7.75 11.23a2.524 2.524 0 0 0-1.18-.288 2.537 2.537 0 1 0 2.536 2.536c0-.39-.089-.76-.247-1.09l2.766-1.782a2.535 2.535 0 0 0 1.954.896c.552 0 1.06-.176 1.479-.475l3.228 2.32a1.8 1.8 0 1 0 1.056-.994l-3.21-2.308a2.524 2.524 0 0 0 .19-1.042c0-.52-.158-1-.429-1.403l2.45-1.784c.15.05.309.076.474.076a1.8 1.8 0 1 0-.422-.796l-2.454 1.787a2.51 2.51 0 0 0-.253-.284zM14.6 9.732a1.272 1.272 0 1 1 0-2.544 1.272 1.272 0 0 1 0 2.544z" />
  </svg>
);

const courseraLogo = (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.976 0-7.2-3.224-7.2-7.2s3.224-7.2 7.2-7.2c2.112 0 4.016.912 5.344 2.368l-2.544 2.544C14.048 8.848 13.08 8.4 12 8.4c-1.984 0-3.6 1.616-3.6 3.6s1.616 3.6 3.6 3.6c1.08 0 2.048-.448 2.8-1.296l2.544 2.528C16.016 18.288 14.112 19.2 12 19.2z" />
  </svg>
);

const semrushLogo = (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M21.6 8.4l-7.2-4.156a4.8 4.8 0 0 0-4.8 0L2.4 8.4A4.8 4.8 0 0 0 0 12.556v8.312a1.2 1.2 0 0 0 1.8 1.04l7.2-4.157a4.8 4.8 0 0 0 2.4-4.156v-4.8l7.2 4.157a1.2 1.2 0 0 0 1.8-1.04v-4.156a4.8 4.8 0 0 0-2.4-4.156z" />
  </svg>
);

export const certificatesList: CertificateItem[] = [
  {
    id: "cert-1",
    num: "01",
    title: "Google Ads - Measurement Certification",
    description:
      "Validating expertise in measuring digital ad campaign performance, attribution models, and conversion tracking across Google marketing channels.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143265069",
    credentialUrl:
      "https://www.linkedin.com/in/abi-amandi-1877391b0/overlay/Certifications/2069604506/treasury/?profileId=ACoAADE7BLcBPEO_J5ihH1spuuCoS1buwglNl6c",
    logo: googleLogo,
    badgeType: "Google Digital Academy",
  },
  {
    id: "cert-2",
    num: "02",
    title: "Google Ads Creative Certification",
    description:
      "Demonstrating mastery in developing data-driven, high-performing visual and copy ad assets across Search, Display, and YouTube.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143318854",
    credentialUrl: "https://skillshop.credential.net/34c024c7-84ec-403b-a0ee-df50f9222742",
    logo: googleLogo,
    badgeImage: "/badges/14.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-3",
    num: "03",
    title: "Google Ads Video Certification",
    description:
      "Demonstrating proficiency in driving awareness, consideration, and action using YouTube and Google video advertising solutions.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143323804",
    credentialUrl: "https://skillshop.credential.net/6e42e2df-565f-4ccc-b4c5-dc7b67f3f465",
    logo: googleLogo,
    badgeImage: "/badges/15.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-4",
    num: "04",
    title: "Campaign Manager 360 Certification Exam",
    description:
      "Enterprise ad server management, ad serving, targeting, verification, and cross-channel reporting workflows in CM360.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143595846",
    credentialUrl: "https://skillshop.credential.net/85d11609-53c4-4197-bb1a-f386dabd7fee",
    logo: googleLogo,
    badgeImage: "/badges/13.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-5",
    num: "05",
    title: "Search Ads 360 Certification Exam",
    description:
      "Managing and optimizing large-scale search marketing campaigns across multiple engines using advanced bidding algorithms in SA360.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143581039",
    credentialUrl: "https://skillshop.credential.net/5d51055e-a282-4df7-acf6-a55aa4818850",
    logo: googleLogo,
    badgeImage: "/badges/11.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-6",
    num: "06",
    title: "Display & Video 360 Certification Exam",
    description:
      "End-to-end programmatic media buying, audience data onboarding, inventory marketplaces, and creative management in DV360.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143576428",
    credentialUrl: "https://skillshop.credential.net/b207c13f-3742-4aa9-b32d-c658d9d52797",
    logo: googleLogo,
    badgeImage: "/badges/12.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-7",
    num: "07",
    title: "Conversion Optimisation Certification Exam",
    description:
      "Analyzing user funnels, multivariate landing page experimentation, and conversion rate optimization (CRO) strategies.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143566224",
    credentialUrl: "https://skillshop.credential.net/6c34b5de-0521-4497-bec2-e4cb4675c16e",
    logo: googleLogo,
    badgeImage: "/badges/10.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-8",
    num: "08",
    title: "Google Analytics Certification",
    description:
      "Mastery in Google Analytics 4 (GA4) event-based tracking, custom exploration funnels, and predictive audience segments.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143556781",
    credentialUrl: "https://skillshop.credential.net/3cf9d6fc-787d-4ea0-b1a3-ed8060b7789b",
    logo: googleLogo,
    badgeImage: "/badges/8.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-9",
    num: "09",
    title: "Google Ads Apps Certification",
    description:
      "Growing mobile app installs, user engagement, and lifetime value using automated Google App campaign infrastructure.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143307741",
    credentialUrl: "https://skillshop.credential.net/481ea859-e7d0-4303-ba72-c40ece5c7c32",
    logo: googleLogo,
    badgeImage: "/badges/9.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-10",
    num: "10",
    title: "Grow Offline Sales Certification",
    description:
      "Connecting digital intent to in-store foot traffic and omni-channel offline sales using Local campaigns and Store Visit conversions.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143303596",
    credentialUrl: "https://skillshop.credential.net/f5a0183e-5c7d-44e5-b712-b80c79566b8e",
    logo: googleLogo,
    badgeImage: "/badges/7.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-11",
    num: "11",
    title: "Google Ads Search Certification",
    description:
      "Building, managing, and scaling high-intent Search campaigns with Smart Bidding, broad match, and responsive search ads.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143290549",
    credentialUrl: "https://skillshop.credential.net/640d62e7-4cbd-4c09-9148-f9121ab392d3",
    logo: googleLogo,
    badgeImage: "/badges/6.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-12",
    num: "12",
    title: "Google Ads Display Certification",
    description:
      "Targeting high-intent audiences and delivering visual brand awareness across 3M+ websites and apps on the Google Display Network.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143287696",
    credentialUrl: "https://skillshop.credential.net/187bb906-7206-4e6c-97bd-fcd79529352d",
    logo: googleLogo,
    badgeImage: "/badges/5.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-13",
    num: "13",
    title: "AI-Powered Shopping Ads Certification",
    description:
      "Optimizing Google Merchant Center product feeds, Smart Shopping campaigns, and inventory merchandising with AI.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143259875",
    credentialUrl: "https://skillshop.credential.net/ff5ddc2b-86ca-4506-8288-ec1bb3c49356",
    logo: googleLogo,
    badgeType: "Google Digital Academy",
  },
  {
    id: "cert-14",
    num: "14",
    title: "AI-Powered Performance Ads Certification",
    description:
      "Leveraging Performance Max (PMax) multi-channel AI bidding, creative asset automation, and cross-network audience scaling.",
    corporation: "Google Digital Academy",
    date: "May 2025",
    credentialId: "143256298",
    credentialUrl: "https://skillshop.credential.net/a2299adc-cdbb-4fa3-97bd-431a94e9ff37",
    logo: googleLogo,
    badgeImage: "/badges/4.png",
    badgeType: "Google Skillshop",
  },
  {
    id: "cert-15",
    num: "15",
    title: "Social Media Marketing Certification",
    description:
      "Building social strategy, inbound listening, brand advocacy, influencer collaboration, and measurable social ROI funnels.",
    corporation: "HubSpot Academy",
    date: "May 2025",
    credentialId: "125129efe66949608f04e05eb5e36521",
    credentialUrl:
      "https://app-na2.hubspot.com/academy/achievements/x847dxrj/en/1/amandi-d/social-media-marketing",
    logo: hubspotLogo,
    badgeImage: "/badges/3.png",
    badgeType: "HubSpot Academy",
  },
  {
    id: "cert-16",
    num: "16",
    title: "SEO (Search Engine Optimization)",
    description:
      "Technical website optimization, content clustering, link authority building, and organic search ranking growth.",
    corporation: "HubSpot Academy",
    date: "May 2025",
    credentialId: "6bc0e6ff2bd74730ac5eec62821e1d25",
    credentialUrl: "https://app-na2.hubspot.com/academy/achievements/ypkswtcg/en/1/amandi-d/seo",
    logo: hubspotLogo,
    badgeImage: "/badges/3.png",
    badgeType: "HubSpot Academy",
  },
  {
    id: "cert-17",
    num: "17",
    title: "Content Marketing Certification",
    description:
      "Strategic storytelling, content creation frameworks, editorial calendar workflows, and multi-channel content syndication.",
    corporation: "HubSpot Academy",
    date: "May 2025",
    credentialId: "c34abdcb8dac4e29b60a9dca11cd03f1",
    credentialUrl:
      "https://app-na2.hubspot.com/academy/achievements/4t009vdk/en/1/amandi-d/content-marketing",
    logo: hubspotLogo,
    badgeImage: "/badges/3.png",
    badgeType: "HubSpot Academy",
  },
  {
    id: "cert-18",
    num: "18",
    title: "Fundamentals of Digital Marketing",
    description:
      "Core digital landscape mastery encompassing search strategy, display marketing, business presence, and web analytics.",
    corporation: "Google",
    date: "May 2025",
    credentialId: "385635396",
    credentialUrl: "https://skillshop.exceedlms.com/student/award/kE1L6gdxiCsEMViw6vtwDxbe",
    logo: googleLogo,
    badgeType: "Google Digital Garage",
  },
  {
    id: "cert-19",
    num: "19",
    title: "Build a Full Website Using WordPress",
    description:
      "End-to-end CMS architecture, domain routing, responsive custom design layouts, and production deployment.",
    corporation: "Coursera",
    date: "Feb 2025",
    credentialId: "NVTHTWYM0F4N",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/NVTHTWYM0F4N",
    logo: courseraLogo,
    badgeImage: "/badges/2.png",
    badgeType: "Coursera",
  },
  {
    id: "cert-20",
    num: "20",
    title: "How to Boost Lead Generation with SEO",
    description:
      "Generating high-intent B2B and B2C inbound leads using search intent mapping, conversion funnels, and landing page SEO.",
    corporation: "Semrush",
    date: "Feb 2025",
    credentialId: "533526",
    credentialUrl:
      "https://static.semrush.com/academy/certificates/6b3e7c6039/amandi-dassanayake_1.pdf",
    logo: semrushLogo,
    badgeType: "Semrush Academy",
  },
  {
    id: "cert-21",
    num: "21",
    title: "Keyword Research with Semrush: Step-by-Step",
    description:
      "Keyword gap analysis, search intent clustering, competitive domain auditing, and high-ROI topic discovery.",
    corporation: "Semrush",
    date: "Feb 2025",
    credentialId: "531678",
    credentialUrl:
      "https://static.semrush.com/academy/certificates/6adbefc723/amandi-dassanayake_1.pdf",
    logo: semrushLogo,
    badgeType: "Semrush Academy",
  },
  {
    id: "cert-22",
    num: "22",
    title: "Ultimate 2024 Marketing Trivia",
    description:
      "Comprehensive knowledge of digital growth trends, marketing strategy frameworks, algorithmic shifts, and campaign case studies.",
    corporation: "Semrush",
    date: "Feb 2025",
    credentialId: "531550",
    credentialUrl:
      "https://static.semrush.com/academy/certificates/331910c0c5/amandi-dassanayake_34.pdf",
    logo: semrushLogo,
    badgeType: "Semrush Academy",
  },
  {
    id: "cert-23",
    num: "23",
    title: "Getting Started with Semrush",
    description:
      "Competitor intelligence, backlink profile analysis, on-page SEO audits, and position tracking using the Semrush toolkit.",
    corporation: "Semrush",
    date: "Feb 2025",
    credentialId: "531540",
    credentialUrl: "https://www.semrush.com/academy/",
    logo: semrushLogo,
    badgeType: "Semrush Academy",
  },
];

// Global ref for drag movement detection across cards
let globalDragMoved = 0;

function CertificateCard({
  cert,
  trackPrefix,
  isDuplicate = false,
}: {
  cert: CertificateItem;
  trackPrefix: string;
  isDuplicate?: boolean;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setTilt({ x: rotateX, y: rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (globalDragMoved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <a
      ref={cardRef}
      key={`${trackPrefix}-${cert.id}`}
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDragStart={(e) => e.preventDefault()}
      tabIndex={isDuplicate ? -1 : undefined}
      aria-hidden={isDuplicate ? "true" : undefined}
      style={{
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)",
        transition: tilt.isHovered
          ? "transform 0.12s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease-out, border-color 0.3s ease-out"
          : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease-out, border-color 0.3s ease-out",
      }}
      className="relative w-[290px] sm:w-[320px] md:w-[350px] min-h-[340px] sm:min-h-[360px] p-6 sm:p-7 rounded-3xl bg-zinc-50/85 hover:bg-white border border-zinc-200/90 hover:border-zinc-950 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.09)] flex flex-col justify-start shrink-0 group block select-none cursor-pointer overflow-hidden will-change-transform"
    >
      {/* Dynamic subtle holographic glass sheen overlay following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: tilt.isHovered ? 0.35 : 0,
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 245, 0.3) 45%, transparent 75%)`,
        }}
      />

      {/* Top: Card Header & Number */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech text-zinc-400 mb-4 pb-2 border-b border-zinc-200/60">
        <span className="uppercase tracking-wider font-mono-tech truncate max-w-[180px]">
          ID: {cert.credentialId}
        </span>
        <span className="font-bold text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1">
          {cert.num} ↗
        </span>
      </div>

      {/* Clean Official Badge (No background, pure badge artwork) */}
      {cert.badgeImage && (
        <div className="relative z-10 my-4 flex items-center justify-center pointer-events-none">
          <Image
            src={cert.badgeImage}
            alt={`${cert.title} Badge`}
            width={130}
            height={130}
            unoptimized
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain mix-blend-multiply group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:rotate-2 transition-all duration-500 ease-out pointer-events-none drop-shadow-sm"
          />
        </div>
      )}

      {/* Certificate Title */}
      <h3 className="relative z-10 text-lg sm:text-xl font-bold font-heading tracking-tight text-zinc-950 leading-snug line-clamp-2 uppercase mt-2 group-hover:text-black transition-colors">
        {cert.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-xs sm:text-sm font-sans-clean text-zinc-600 leading-relaxed line-clamp-3 mt-3">
        {cert.description}
      </p>
    </a>
  );
}

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const streamContainerRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 2>(1);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Physics animation state references (bypasses React state latency for 120fps smoothness)
  const isPausedRef = useRef(false);
  const directionRef = useRef<-1 | 1>(-1); // -1 = left, 1 = right
  const speedMultiplierRef = useRef(1);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const currentSpeedRef = useRef(0.9);
  const skewRef = useRef(0);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const offsetRef = useRef(0);
  const dragMovedRef = useRef(0);
  const lastScrollYRef = useRef(0);

  // Sync state into refs
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    directionRef.current = direction === "left" ? -1 : 1;
  }, [direction]);

  useEffect(() => {
    speedMultiplierRef.current = speedMultiplier;
  }, [speedMultiplier]);

  // Viewport entrance reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Window scroll-velocity reactivity: vertical scroll smoothly accelerates stream
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (Math.abs(deltaY) > 1 && !isDraggingRef.current) {
        // Boost momentum in current stream direction proportional to vertical scroll speed
        velocityRef.current += directionRef.current * Math.min(Math.abs(deltaY) * 0.06, 5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main high-performance physics animation loop
  useEffect(() => {
    let animId: number;

    const animate = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const halfWidth = totalWidth / 2;

        if (halfWidth > 0) {
          // Smooth cruise speed interpolation (gentle slow-motion drift on hover instead of jarring stop)
          const targetCruiseSpeed = isPausedRef.current
            ? 0
            : isHoveredRef.current
            ? 0.15
            : 0.9 * speedMultiplierRef.current;

          currentSpeedRef.current += (targetCruiseSpeed - currentSpeedRef.current) * 0.08;

          // Standard progression
          if (!isDraggingRef.current) {
            offsetRef.current += currentSpeedRef.current * directionRef.current;
          }

          // Apply momentum & friction deceleration
          if (!isDraggingRef.current) {
            offsetRef.current += velocityRef.current;
            velocityRef.current *= 0.94; // Physics friction decay
            if (Math.abs(velocityRef.current) < 0.01) {
              velocityRef.current = 0;
            }
          }

          // Mathematical infinite conveyor wrap
          while (offsetRef.current <= -halfWidth) {
            offsetRef.current += halfWidth;
          }
          while (offsetRef.current > 0) {
            offsetRef.current -= halfWidth;
          }

          // Dynamic momentum-based inertia tilt (smooth skew based on current speed & velocity)
          const totalMotion = isDraggingRef.current
            ? velocityRef.current
            : velocityRef.current + (currentSpeedRef.current * directionRef.current);
          const targetSkew = Math.max(-2.5, Math.min(2.5, totalMotion * 0.08));
          skewRef.current += (targetSkew - skewRef.current) * 0.12;

          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0) skewX(${skewRef.current.toFixed(2)}deg)`;

          // Normalized stream position (0 to 1) for the interactive scrubber
          const normProg = (Math.abs(offsetRef.current) % halfWidth) / halfWidth;
          setProgress(normProg);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer drag event handlers (Supports mouse & touch gestures with momentum flick)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    dragMovedRef.current = 0;
    globalDragMoved = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastXRef.current;

    dragMovedRef.current += Math.abs(dx);
    globalDragMoved = dragMovedRef.current;
    offsetRef.current += dx;
    velocityRef.current = (dx / dt) * 16; // Calculate release velocity

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    // Reset global drag flag after a small tick so click events can read it
    setTimeout(() => {
      globalDragMoved = 0;
    }, 50);
  };

  // Two-finger trackpad / mousewheel horizontal navigation
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1) {
      velocityRef.current -= delta * 0.18;
    }
  };

  // Scrubber bar scrub/jump interaction
  const handleScrub = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      offsetRef.current = -ratio * halfWidth;
      setProgress(ratio);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative w-full bg-white border-t border-zinc-200 py-20 sm:py-24 overflow-hidden select-none"
    >
      {/* Section Header with Navigation Controls */}
      <div
        className={`w-full px-6 sm:px-10 md:px-16 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-200/80 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-2">
            Accreditations & Honors
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-zinc-950 uppercase">
            Certifications
          </h2>
        </div>

        {/* Right Header Navigation & Controls */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono-tech text-zinc-400 hidden sm:inline-block">
            {certificatesList.length} Verified Credentials
          </span>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Reverse Button */}
            <button
              onClick={() => {
                setDirection("right");
                setIsPaused(false);
              }}
              aria-label="Stream Left to Right"
              className={`text-xs font-mono-tech transition-all flex items-center gap-1 cursor-pointer group px-2 py-1 rounded hover:bg-zinc-100 ${
                direction === "right" && !isPaused
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-950"
              }`}
            >
              <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>REVERSE</span>
            </button>

            {/* Pause / Resume Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label="Toggle Auto-scroll"
              className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer px-2 py-1 rounded hover:bg-zinc-100"
            >
              <span>{isPaused ? "RESUME" : "PAUSE"}</span>
            </button>

            {/* Speed Toggle (1x / 2x Boost) */}
            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : 1))}
              aria-label="Toggle Scroll Speed"
              className={`text-xs font-mono-tech transition-colors cursor-pointer px-2 py-0.5 rounded border ${
                speedMultiplier === 2
                  ? "bg-zinc-950 text-white border-zinc-950"
                  : "text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {speedMultiplier}X SPEED
            </button>

            {/* Forward Button */}
            <button
              onClick={() => {
                setDirection("left");
                setIsPaused(false);
              }}
              aria-label="Stream Right to Left"
              className={`text-xs font-mono-tech transition-all flex items-center gap-1 cursor-pointer group px-2 py-1 rounded hover:bg-zinc-100 ${
                direction === "left" && !isPaused
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-950"
              }`}
            >
              <span>FORWARD</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 
        NEXT-LEVEL SEAMLESS INFINITE STREAM
        - Momentum drag-to-scroll & flick inertia
        - Vertical scroll-velocity reactivity
        - Cinematic edge-fade gradient masks
        - Micro-velocity dynamic skew
        - Smooth deceleration on hover
      */}
      <div
        ref={streamContainerRef}
        className={`w-full overflow-hidden pt-10 pb-6 relative transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max"
          style={{ willChange: "transform", touchAction: "pan-y" }}
        >
          {/* TRACK 1 */}
          <div className="flex gap-5 sm:gap-6 shrink-0 pr-5 sm:pr-6">
            {certificatesList.map((cert) => (
              <CertificateCard
                key={`track1-${cert.id}`}
                cert={cert}
                trackPrefix="track1"
              />
            ))}
          </div>

          {/* TRACK 2 (Seamless loop clone) */}
          <div className="flex gap-5 sm:gap-6 shrink-0 pr-5 sm:pr-6" aria-hidden="true">
            {certificatesList.map((cert) => (
              <CertificateCard
                key={`track2-${cert.id}`}
                cert={cert}
                trackPrefix="track2"
                isDuplicate={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Timeline Scrubber & Gesture Hint */}
      <div className="w-full px-6 sm:px-10 md:px-16 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
          <span className="uppercase tracking-wider">Drag to scrub or scroll page</span>
        </div>

        {/* Draggable & Clickable Timeline Progress Bar */}
        <div
          onClick={handleScrub}
          className="relative w-full sm:w-80 md:w-96 h-2 bg-zinc-100 hover:bg-zinc-200/80 rounded-full cursor-pointer overflow-hidden transition-colors group"
          title="Click to scrub credentials"
        >
          <div
            className="h-full bg-zinc-950 rounded-full relative transition-all duration-75"
            style={{ width: `${(progress * 100).toFixed(1)}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm ring-1 ring-zinc-900" />
          </div>
        </div>

        <div className="uppercase tracking-wider">
          {Math.round(progress * certificatesList.length) + 1} / {certificatesList.length}
        </div>
      </div>
    </section>
  );
}
