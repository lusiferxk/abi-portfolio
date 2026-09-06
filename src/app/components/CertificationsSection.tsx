"use client";

import { useState } from "react";
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

function CertificateCard({
  cert,
  trackPrefix,
  isDuplicate = false,
}: {
  cert: CertificateItem;
  trackPrefix: string;
  isDuplicate?: boolean;
}) {
  return (
    <a
      key={`${trackPrefix}-${cert.id}`}
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={isDuplicate ? -1 : undefined}
      aria-hidden={isDuplicate ? "true" : undefined}
      className="w-[290px] sm:w-[320px] md:w-[350px] min-h-[340px] sm:min-h-[360px] p-6 sm:p-7 rounded-3xl bg-zinc-50/80 hover:bg-white border border-zinc-200/90 hover:border-zinc-950 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-start shrink-0 group transform hover:-translate-y-1 block cursor-pointer"
    >
      {/* Top: Card Header & Number */}
      <div className="flex items-center justify-between text-xs font-mono-tech text-zinc-400 mb-4 pb-2 border-b border-zinc-200/60">
        <span className="uppercase tracking-wider font-mono-tech truncate max-w-[180px]">
          ID: {cert.credentialId}
        </span>
        <span className="font-bold text-zinc-900 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
          {cert.num} ↗
        </span>
      </div>

      {/* Clean Official Badge (No background, pure badge artwork) */}
      {cert.badgeImage && (
        <div className="my-4 flex items-center justify-center">
          <Image
            src={cert.badgeImage}
            alt={`${cert.title} Badge`}
            width={130}
            height={130}
            unoptimized
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Certificate Title */}
      <h3 className="text-lg sm:text-xl font-bold font-heading tracking-tight text-zinc-950 leading-snug line-clamp-2 uppercase mt-2">
        {cert.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm font-sans-clean text-zinc-600 leading-relaxed line-clamp-3 mt-3">
        {cert.description}
      </p>
    </a>
  );
}

export default function CertificationsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  return (
    <section
      id="certifications"
      className="relative w-full bg-white border-t border-zinc-200 py-20 sm:py-24 overflow-hidden select-none"
    >
      {/* Section Header with Navigation Controls */}
      <div className="w-full px-6 sm:px-10 md:px-16 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-200/80">
        <div>
          <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-2">
            Accreditations & Honors
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-zinc-950 uppercase">
            Certifications
          </h2>
        </div>

        {/* Right Header Navigation & Counter */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono-tech text-zinc-400 hidden sm:inline-block">
            {certificatesList.length} Verified Credentials
          </span>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => {
                setDirection("right");
                setIsPaused(false);
              }}
              aria-label="Stream Left to Right"
              className={`text-xs font-mono-tech transition-colors flex items-center gap-1.5 cursor-pointer group ${
                direction === "right" && !isPaused
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-950"
              }`}
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span>REVERSE</span>
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label="Toggle Auto-scroll"
              className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer"
            >
              <span>{isPaused ? "RESUME" : "PAUSE"}</span>
            </button>

            <button
              onClick={() => {
                setDirection("left");
                setIsPaused(false);
              }}
              aria-label="Stream Right to Left"
              className={`text-xs font-mono-tech transition-colors flex items-center gap-1.5 cursor-pointer group ${
                direction === "left" && !isPaused
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-zinc-950"
              }`}
            >
              <span>FORWARD</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 100% UNBROKEN SEAMLESS INFINITE LOOP STREAM */}
      <div
        className="w-full overflow-hidden pt-10 pb-4 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex w-max ${
            isPaused
              ? ""
              : direction === "left"
              ? "animate-marquee-loop-left"
              : "animate-marquee-loop-right"
          }`}
          style={{ willChange: "transform" }}
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

          {/* TRACK 2 (Exact clone for mathematically seamless loop that never restarts) */}
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
    </section>
  );
}
