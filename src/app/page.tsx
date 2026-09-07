"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import CertificationsSection from "@/app/components/CertificationsSection";

interface NavItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

interface BlogPostPreview {
  id: string;
  num: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
}

const navItems: NavItem[] = [
  {
    num: "01",
    title: "Create",
    description:
      "I know how to communicate. Design, strategy, UI/UX, and visual systems.",
    href: "/create",
  },
  {
    num: "02",
    title: "Capture",
    description:
      "I know how to tell stories visually. Film, photography, and creative expression.",
    href: "/capture",
  },
  {
    num: "03",
    title: "Build",
    description:
      "I know how to turn ideas into technology. AR, 3D, apps, and interactive experiences.",
    href: "/build",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    handle: "Amandi Dassanayaka",
    url: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@amandi.dassanayaka",
    url: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Amandi Dassanayaka",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<NavItem | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState<boolean>(false);
  const [recentPosts, setRecentPosts] = useState<BlogPostPreview[]>([]);
  const [hoveredDesk, setHoveredDesk] = useState<string | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Marketing & Growth",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Footer minimal contact form state
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [footerSubmitting, setFooterSubmitting] = useState(false);
  const [footerStatus, setFooterStatus] = useState<"idle" | "success" | "error">("idle");

  // Dynamic Wire Connection state & refs
  const footerSectionRef = useRef<HTMLElement>(null);
  const footerFormRef = useRef<HTMLDivElement>(null);
  const footerSocialRef = useRef<HTMLDivElement>(null);
  const footerImageRef = useRef<HTMLImageElement>(null);
  const [wireData, setWireData] = useState<{
    main: string;
    secondary: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);

  const [socialWireData, setSocialWireData] = useState<{
    main: string;
    secondary: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);

  const [randomOffsets, setRandomOffsets] = useState({
    socialX: 0,
    socialY: 0,
    formX: 0,
    formY: 0,
  });

  useEffect(() => {
    // Generate organic subtle positioning offsets to match the footer artwork
    const sX = (Math.random() - 0.5) * 24;
    const sY = (Math.random() - 0.5) * 32;
    const fX = (Math.random() - 0.5) * 24;
    const fY = (Math.random() - 0.5) * 32;
    setRandomOffsets({ socialX: sX, socialY: sY, formX: fX, formY: fY });
  }, []);

  const updateFooterWire = useCallback(() => {
    if (!footerSectionRef.current || !footerImageRef.current) return;
    const secRect = footerSectionRef.current.getBoundingClientRect();
    const imgRect = footerImageRef.current.getBoundingClientRect();

    // Right Wire: Contact Form -> Right side of the Head
    if (footerFormRef.current) {
      const formRect = footerFormRef.current.getBoundingClientRect();
      const startX = formRect.left - secRect.left + 16;
      const startY = formRect.top - secRect.top + 28;

      const endX = imgRect.left - secRect.left + imgRect.width * 0.58;
      const endY = imgRect.top - secRect.top + imgRect.height * 0.49;

      const dx = startX - endX;
      const cp1X = startX - dx * 0.44;
      const cp1Y = startY + 50;
      const cp2X = endX + dx * 0.28;
      const cp2Y = endY + 85;
      const main = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

      const cp1X2 = startX - dx * 0.46;
      const cp1Y2 = startY + 75;
      const cp2X2 = endX + dx * 0.26;
      const cp2Y2 = endY + 120;
      const secondary = `M ${startX + 4} ${startY + 8} C ${cp1X2} ${cp1Y2}, ${cp2X2} ${cp2Y2}, ${endX + 3} ${endY - 2}`;

      setWireData({
        main,
        secondary,
        startX,
        startY,
        endX,
        endY,
      });
    }

    // Left Wire: Social Channels Card -> Left side of the Head
    if (footerSocialRef.current) {
      const socialRect = footerSocialRef.current.getBoundingClientRect();
      const startX = socialRect.right - secRect.left - 16;
      const startY = socialRect.top - secRect.top + 28;

      const endX = imgRect.left - secRect.left + imgRect.width * 0.45;
      const endY = imgRect.top - secRect.top + imgRect.height * 0.49;

      const dx = endX - startX;
      const cp1X = startX + dx * 0.44;
      const cp1Y = startY + 50;
      const cp2X = endX - dx * 0.28;
      const cp2Y = endY + 85;
      const main = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

      const cp1X2 = startX + dx * 0.46;
      const cp1Y2 = startY + 75;
      const cp2X2 = endX - dx * 0.26;
      const cp2Y2 = endY + 120;
      const secondary = `M ${startX - 4} ${startY + 8} C ${cp1X2} ${cp1Y2}, ${cp2X2} ${cp2Y2}, ${endX - 3} ${endY - 2}`;

      setSocialWireData({
        main,
        secondary,
        startX,
        startY,
        endX,
        endY,
      });
    }
  }, []);

  useEffect(() => {
    updateFooterWire();
    window.addEventListener("resize", updateFooterWire);
    window.addEventListener("scroll", updateFooterWire);

    const ro = new ResizeObserver(() => {
      updateFooterWire();
    });

    if (footerSectionRef.current) ro.observe(footerSectionRef.current);
    if (footerFormRef.current) ro.observe(footerFormRef.current);
    if (footerSocialRef.current) ro.observe(footerSocialRef.current);
    if (footerImageRef.current) ro.observe(footerImageRef.current);

    const timer = setTimeout(updateFooterWire, 300);

    return () => {
      window.removeEventListener("resize", updateFooterWire);
      window.removeEventListener("scroll", updateFooterWire);
      ro.disconnect();
      clearTimeout(timer);
    };
  }, [updateFooterWire, randomOffsets]);

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerForm.name || !footerForm.email || !footerForm.message) return;

    setFooterSubmitting(true);
    setFooterStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...footerForm,
          subject: "Quick Footer Message",
        }),
      });

      const data = await res.json();
      if (data?.success) {
        setFooterStatus("success");
        setFooterForm({ name: "", email: "", message: "" });
      } else {
        setFooterStatus("error");
      }
    } catch (err) {
      console.error("Footer contact submit error:", err);
      setFooterStatus("error");
    } finally {
      setFooterSubmitting(false);
    }
  };

  // Hero 3D Parallax & Scroll animation state
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = window.innerHeight || 900;
          const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1.2);
          setHeroScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > (window.innerHeight || 900)) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseTilt({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Desk 3D transform (Background layer)
  const deskTranslateY = heroScrollProgress * 120;
  const deskScale = Math.max(1 - heroScrollProgress * 0.12, 0.85);
  const deskRotateX = heroScrollProgress * 8 - mouseTilt.y * 2.5;
  const deskRotateY = mouseTilt.x * 3;
  const deskOpacity = Math.max(1 - heroScrollProgress * 1.1, 0);
  const deskStyle = {
    transform: `perspective(1000px) translateY(${deskTranslateY}px) scale(${deskScale}) rotateX(${deskRotateX}deg) rotateY(${deskRotateY}deg) translateZ(${-heroScrollProgress * 80}px)`,
    opacity: deskOpacity,
    transition: "transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.15s ease-out",
    transformOrigin: "center bottom",
    willChange: "transform, opacity",
  };

  // Person 3D transform (Foreground layer with higher depth velocity)
  const personTranslateY = heroScrollProgress * 200;
  const personScale = Math.max(1 - heroScrollProgress * 0.18, 0.8);
  const personRotateX = heroScrollProgress * 6 - mouseTilt.y * 3.5;
  const personRotateY = mouseTilt.x * 4.5;
  const personTranslateX = mouseTilt.x * 8;
  const personOpacity = Math.max(1 - heroScrollProgress * 1.15, 0);
  const personStyle = {
    transform: `perspective(1000px) translateX(${personTranslateX}px) translateY(${personTranslateY}px) scale(${personScale}) rotateX(${personRotateX}deg) rotateY(${personRotateY}deg) translateZ(${-heroScrollProgress * 40}px)`,
    opacity: personOpacity,
    transition: "transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.15s ease-out",
    transformOrigin: "center bottom",
    willChange: "transform, opacity",
  };

  // Hero nav 3D fade
  const heroNavStyle = {
    transform: `translateY(-${heroScrollProgress * 50}px)`,
    opacity: Math.max(1 - heroScrollProgress * 1.8, 0),
    transition: "opacity 0.2s ease-out",
    pointerEvents: heroScrollProgress > 0.6 ? ("none" as const) : ("auto" as const),
  };

  // Fetch recent posts from MongoDB
  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (data?.success && data?.posts) {
          setRecentPosts(data.posts.slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      }
    }
    fetchRecentPosts();
  }, []);

  const handleCardClick = (item: NavItem) => {
    if (isRotating || isCanvasOpen) return;
    setSelectedCard(item);
    setIsRotating(true);

    // Navigate to the world page after the 3D card transition
    setTimeout(() => {
      router.push(item.href);
    }, 850);
  };

  const handleClose = () => {
    setIsCanvasOpen(false);
    setIsRotating(false);
    setSelectedCard(null);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data?.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "Marketing & Growth", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCanvasOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCanvasOpen]);

  return (
    <main className="relative w-full min-h-screen bg-white selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      {/* 3D Rotating & Zooming Launch Overlay */}
      {isRotating && selectedCard && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center perspective-1000 overflow-visible">
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />

          <div className="relative w-[85vw] sm:w-[380px] md:w-[440px] h-[75vh] md:h-[580px] p-6 sm:p-8 md:p-12 flex flex-col justify-between items-start rounded-lg border border-zinc-500/80 preserve-3d animate-3d-rotate-card">
            <div className="w-full flex justify-end">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black font-heading tracking-tighter text-zinc-100">
                {selectedCard.num}
              </span>
            </div>

            {selectedCard.num === "01" && (
              <div className="relative w-full flex-1 flex items-center justify-center my-4">
                <Image
                  src="/laptop.png"
                  alt="Create Laptop"
                  width={280}
                  height={200}
                  priority
                  className="w-36 sm:w-44 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                />
              </div>
            )}
            {selectedCard.num === "02" && (
              <div className="relative w-full flex-1 flex items-center justify-center my-4">
                <Image
                  src="/capture.png"
                  alt="Capture Camera"
                  width={280}
                  height={200}
                  priority
                  className="w-36 sm:w-44 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                />
              </div>
            )}
            {selectedCard.num === "03" && (
              <div className="relative w-full flex-1 flex items-center justify-center my-4">
                <Image
                  src="/vr.png"
                  alt="Build VR Headset"
                  width={300}
                  height={210}
                  priority
                  className="w-40 sm:w-48 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                />
              </div>
            )}

            <div className="w-full pb-2 sm:pb-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-white uppercase">
                {selectedCard.title}
              </h2>
              <p className="text-xs sm:text-sm font-sans-clean text-zinc-300 mt-2 sm:mt-3 leading-relaxed max-w-xs">
                {selectedCard.description}
              </p>
              <div className="w-16 h-[2px] bg-white mt-4 rounded-full" />
            </div>
          </div>
        </div>
      )}

      {/* BLANK CANVAS FOR OTHER CARDS */}
      {isCanvasOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-40 bg-white cursor-pointer select-none animate-page-content"
          title="Click anywhere or press Esc to return"
        >
          <div className="fixed top-6 left-6 z-50">
            <button
              onClick={handleClose}
              className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span>RETURN</span>
            </button>
          </div>
        </div>
      )}

      {/* SECTION 1: Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-end items-center bg-white overflow-hidden perspective-1000">
        {/* Left Bottom Hero Branding Title */}
        <div
          style={heroNavStyle}
          className="absolute left-6 sm:left-10 md:left-16 bottom-8 sm:bottom-12 md:bottom-16 z-30 select-none pointer-events-none"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tighter text-zinc-950 leading-none">
            ABI.amandi
          </h1>
        </div>

        {/* Right Side Vertically-Centered Vertical Navigation Menu (Left-aligned) */}
        <nav
          aria-label="Hero Navigation"
          style={heroNavStyle}
          className="absolute right-6 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col items-start gap-3.5 sm:gap-4 md:gap-5"
        >
          <Link
            href="/create"
            onMouseEnter={() => setHoveredDesk("/desk_2.png")}
            onMouseLeave={() => setHoveredDesk(null)}
            className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group cursor-pointer text-left"
          >
            <span>Create</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/capture"
            onMouseEnter={() => setHoveredDesk("/desk_4.png")}
            onMouseLeave={() => setHoveredDesk(null)}
            className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group cursor-pointer text-left"
          >
            <span>Capture</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/build"
            onMouseEnter={() => setHoveredDesk("/desk_3.png")}
            onMouseLeave={() => setHoveredDesk(null)}
            className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group cursor-pointer text-left"
          >
            <span>Build</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
          </Link>

          <a
            href="#blog"
            className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group cursor-pointer text-left"
          >
            <span>Blogs</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="text-xs sm:text-sm font-mono-tech uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 group cursor-pointer text-left"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Desk and Sitting Hero Person Layered with 3D Depth Transitions */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none">
          {/* Desk 3D Layer (Crossfades between hero-desk.png, desk_2.png, desk_3.png, and desk_4.png on hover) */}
          <div
            style={deskStyle}
            className="relative z-10 w-full flex justify-center items-end"
          >
            {/* Default Hero Desk */}
            <Image
              src="/hero-desk.png"
              alt="Hero Desk"
              width={1200}
              height={1500}
              priority
              className={`w-auto max-w-none h-[90vh] sm:h-[95vh] md:h-[98vh] lg:h-screen object-contain object-bottom select-none translate-y-[4%] sm:translate-y-[5%] md:translate-y-[5.5%] transition-opacity duration-500 ease-out ${
                hoveredDesk ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />
            {/* Alternate Desk on Create Hover (desk_2.png) */}
            <Image
              src="/desk_2.png"
              alt="Hero Desk - Create Mode"
              width={1200}
              height={1500}
              priority
              className={`absolute inset-0 mx-auto w-auto max-w-none h-[90vh] sm:h-[95vh] md:h-[98vh] lg:h-screen object-contain object-bottom select-none translate-y-[4%] sm:translate-y-[5%] md:translate-y-[5.5%] transition-opacity duration-500 ease-out ${
                hoveredDesk === "/desk_2.png" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
            {/* Alternate Desk on Build Hover (desk_3.png) */}
            <Image
              src="/desk_3.png"
              alt="Hero Desk - Build Mode"
              width={1200}
              height={1500}
              priority
              className={`absolute inset-0 mx-auto w-auto max-w-none h-[90vh] sm:h-[95vh] md:h-[98vh] lg:h-screen object-contain object-bottom select-none translate-y-[4%] sm:translate-y-[5%] md:translate-y-[5.5%] transition-opacity duration-500 ease-out ${
                hoveredDesk === "/desk_3.png" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
            {/* Alternate Desk on Capture Hover (desk_4.png) */}
            <Image
              src="/desk_4.png"
              alt="Hero Desk - Capture Mode"
              width={1200}
              height={1500}
              priority
              className={`absolute inset-0 mx-auto w-auto max-w-none h-[90vh] sm:h-[95vh] md:h-[98vh] lg:h-screen object-contain object-bottom select-none translate-y-[4%] sm:translate-y-[5%] md:translate-y-[5.5%] transition-opacity duration-500 ease-out ${
                hoveredDesk === "/desk_4.png" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </div>

          {/* hero_person.png sitting at the desk (Foreground 3D Layer) */}
          <div
            style={personStyle}
            className="absolute bottom-0 z-20 flex justify-center items-end"
          >
            <Image
              src="/hero_person.png"
              alt="Person at Desk"
              width={800}
              height={1000}
              priority
              className="w-auto max-w-none h-[52vh] sm:h-[56vh] md:h-[58vh] lg:h-[62vh] object-contain object-bottom select-none translate-y-[6.5%] sm:translate-y-[7.5%] md:translate-y-[8%] -translate-x-[2%]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Navigation Menu Section (4 Equal Width Panels) */}
      <section id="categories" className="relative w-full min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-3 overflow-hidden border-t border-zinc-200">
        {navItems.map((item) => (
          <div
            key={item.num}
            onClick={() => handleCardClick(item)}
            className="group relative h-full min-h-[540px] md:min-h-0 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between items-start transition-all duration-500 hover:bg-[#0c0c0e] cursor-pointer select-none border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0 hover:border-zinc-800 overflow-hidden"
          >
            {/* Top Right Big Number */}
            <div className="w-full flex justify-end">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading tracking-tighter text-zinc-200 group-hover:text-white transition-all duration-500 group-hover:scale-105 origin-top-right">
                {item.num}
              </span>
            </div>

            {/* Middle Section: Visual for 01 Create, 02 Capture, 03 Build (Bleeding off right border) */}
            {item.num === "01" ? (
              <div className="w-full flex-1 flex items-center justify-end my-4 relative pointer-events-none select-none -mr-6 sm:-mr-8 md:-mr-10 lg:-mr-12">
                <div className="relative w-full max-w-[210px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[310px] xl:max-w-[340px] flex items-center justify-center translate-x-20 sm:translate-x-24 md:translate-x-28 lg:translate-x-36 xl:translate-x-44 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                  <Image
                    src="/laptop.png"
                    alt="Create Laptop"
                    width={700}
                    height={480}
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl select-none"
                  />
                </div>
              </div>
            ) : item.num === "02" ? (
              <div className="w-full flex-1 flex items-center justify-end my-4 relative pointer-events-none select-none -mr-6 sm:-mr-8 md:-mr-10 lg:-mr-12">
                <div className="relative w-full max-w-[190px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[270px] xl:max-w-[300px] flex items-center justify-center translate-x-12 sm:translate-x-14 md:translate-x-18 lg:translate-x-22 xl:translate-x-26 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                  <Image
                    src="/capture.png"
                    alt="Capture Camera"
                    width={700}
                    height={480}
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl select-none"
                  />
                </div>
              </div>
            ) : item.num === "03" ? (
              <div className="w-full flex-1 flex items-center justify-end my-4 relative pointer-events-none select-none -mr-6 sm:-mr-8 md:-mr-10 lg:-mr-12">
                <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[390px] xl:max-w-[440px] flex items-center justify-center translate-x-14 sm:translate-x-16 md:translate-x-20 lg:translate-x-26 xl:translate-x-32 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                  <Image
                    src="/vr.png"
                    alt="Build VR Headset"
                    width={750}
                    height={520}
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl select-none"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex-1" />
            )}

            {/* Bottom Title, Description & Nav Arrow */}
            <div className="w-full pb-2 sm:pb-4 md:pb-6">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading tracking-tight text-zinc-900 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 uppercase">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans-clean text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 mt-2 sm:mt-3 leading-relaxed max-w-xs">
                {item.description}
              </p>

              {/* Expanding Accent Line & Arrow */}
              <div className="flex items-center justify-between w-full mt-4 md:mt-6 pt-2">
                {/* Expanding line accent */}
                <div className="w-0 group-hover:w-12 md:group-hover:w-16 h-[2px] bg-white transition-all duration-500 rounded-full" />

                {/* Navigation Arrow */}
                <span className="text-lg sm:text-xl md:text-2xl font-light text-zinc-900 group-hover:text-white transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 3: Certifications Infinite Showcase */}
      <CertificationsSection />

      {/* SECTION 4: Featured Blog Section */}
      <section id="blog" className="relative w-full min-h-screen bg-white border-t border-zinc-200 flex flex-col justify-between">
        {/* Section Header with See More Navigation */}
        <div className="w-full border-b border-zinc-200 px-6 sm:px-10 md:px-16 pt-20 sm:pt-24 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-2">
              Publications & Essays
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-zinc-950 uppercase">
              Blog
            </h2>
          </div>

          <div>
            <Link
              href="/blog"
              className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer group"
            >
              <span>SEE MORE</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 3 Featured Publication Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-b border-zinc-200 flex-1">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href="/blog"
              className="group relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between items-start transition-all duration-500 hover:bg-[#0c0c0e] hover:text-white cursor-pointer select-none border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0 hover:border-zinc-800 min-h-[480px] sm:min-h-[520px]"
            >
              {/* Top: Category & Big Number */}
              <div className="w-full flex justify-between items-start">
                <span className="text-xs font-mono-tech text-zinc-400 group-hover:text-zinc-400 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tighter text-zinc-200 group-hover:text-white transition-all duration-500 group-hover:scale-105 origin-top-right">
                  {post.num}
                </span>
              </div>

              {/* Middle: Image Preview */}
              <div className="relative w-full h-[180px] sm:h-[200px] my-6 rounded-xl overflow-hidden bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom: Title, Excerpt & Read Link */}
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-zinc-900 group-hover:text-white transition-colors uppercase mb-2">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans-clean text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between w-full pt-3 border-t border-zinc-200 group-hover:border-zinc-800 transition-colors text-xs font-mono-tech text-zinc-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    <span>{post.readTime}</span>
                    <span className="text-sm transition-transform group-hover:translate-x-1">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Bottom Bar */}
        {/* <div className="w-full px-6 sm:px-10 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-400 bg-white">
          <span>PORTFOLIO • ESSAYS & ARTICLES</span>
          <Link
            href="/blog"
            className="text-zinc-900 font-bold hover:underline cursor-pointer flex items-center gap-1.5 group"
          >
            <span>VIEW ALL PUBLICATIONS</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div> */}
      </section>

      {/* SECTION 4: Footer Artwork Showcase */}
      <section
        id="contact"
        ref={footerSectionRef}
        className="relative w-full min-h-screen bg-white flex flex-col justify-between items-center overflow-hidden"
      >
        {/* Dynamic Wires connecting Contact Form & Social Channels to Person's Head */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-visible"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <filter id="wire-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodOpacity="0.16" floodColor="#000000" />
            </filter>
            <linearGradient id="wire-red-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
            <linearGradient id="wire-red-gradient-left" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>

          {/* Right Wire (Contact Form -> Right Temple) */}
          {wireData && wireData.main && (
            <g>
              <path
                d={wireData.main}
                fill="none"
                stroke="url(#wire-red-gradient-right)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#wire-shadow)"
              />
              <path
                d={wireData.main}
                fill="none"
                stroke="#FECACA"
                strokeWidth="1.5"
                strokeDasharray="10 40"
                className="animate-wire-flow"
                opacity="0.85"
              />
              {/* Terminal Jack on Contact Card */}
              <circle cx={wireData.startX} cy={wireData.startY} r="4" fill="#18181B" stroke="#FCA5A5" strokeWidth="1.5" />
              <circle cx={wireData.startX} cy={wireData.startY} r="1.8" fill="#EF4444" />
              {/* Electrode Terminal on Head */}
              <circle cx={wireData.endX} cy={wireData.endY} r="4" fill="#18181B" stroke="#FCA5A5" strokeWidth="1.5" />
              <circle cx={wireData.endX} cy={wireData.endY} r="1.8" fill="#EF4444" />
            </g>
          )}

          {/* Left Wire (Social Card -> Left Temple) */}
          {socialWireData && socialWireData.main && (
            <g>
              <path
                d={socialWireData.main}
                fill="none"
                stroke="url(#wire-red-gradient-left)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#wire-shadow)"
              />
              <path
                d={socialWireData.main}
                fill="none"
                stroke="#FECACA"
                strokeWidth="1.5"
                strokeDasharray="10 40"
                className="animate-wire-flow"
                opacity="0.85"
              />
              {/* Terminal Jack on Social Card */}
              <circle cx={socialWireData.startX} cy={socialWireData.startY} r="4" fill="#18181B" stroke="#FCA5A5" strokeWidth="1.5" />
              <circle cx={socialWireData.startX} cy={socialWireData.startY} r="1.8" fill="#EF4444" />
              {/* Electrode Terminal on Left Head */}
              <circle cx={socialWireData.endX} cy={socialWireData.endY} r="4" fill="#18181B" stroke="#FCA5A5" strokeWidth="1.5" />
              <circle cx={socialWireData.endX} cy={socialWireData.endY} r="1.8" fill="#EF4444" />
            </g>
          )}
        </svg>

        {/* Left Bottom Social Channels Card (Matching Contact Form Style) */}
        <div
          ref={footerSocialRef}
          style={{
            transform: `translate(${randomOffsets.socialX}px, ${randomOffsets.socialY}px)`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="absolute left-6 sm:left-10 md:left-16 bottom-20 sm:bottom-24 md:bottom-28 z-20 w-[calc(100vw-3rem)] sm:w-[260px] md:w-[280px]"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col gap-2.5">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-zinc-500 font-bold">
                Social Networks
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-1.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-zinc-200/80 bg-zinc-50/70 hover:bg-white hover:border-zinc-950 text-zinc-700 hover:text-zinc-950 transition-all text-xs font-sans-clean group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 shrink-0 text-zinc-700 group-hover:text-zinc-950 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-mono-tech font-medium">{item.name}</span>
                  </div>
                  <span className="text-zinc-400 group-hover:text-zinc-950 transform group-hover:translate-x-0.5 transition-all text-xs">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Bottom Minimal Contact Form */}
        <div
          ref={footerFormRef}
          style={{
            transform: `translate(${randomOffsets.formX}px, ${randomOffsets.formY}px)`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="absolute right-6 sm:right-10 md:right-16 bottom-20 sm:bottom-24 md:bottom-28 z-20 w-[calc(100vw-3rem)] sm:w-[320px] md:w-[360px]"
        >
          <form
            onSubmit={handleFooterSubmit}
            className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col gap-2.5"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-zinc-500 font-bold">
                Quick Message
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                required
                placeholder="Name"
                value={footerForm.name}
                onChange={(e) => setFooterForm({ ...footerForm, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50/70 focus:bg-white focus:border-zinc-950 focus:outline-none transition-all text-xs font-sans-clean text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                required
                placeholder="Email"
                value={footerForm.email}
                onChange={(e) => setFooterForm({ ...footerForm, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50/70 focus:bg-white focus:border-zinc-950 focus:outline-none transition-all text-xs font-sans-clean text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                required
                rows={2}
                placeholder="Message..."
                value={footerForm.message}
                onChange={(e) => setFooterForm({ ...footerForm, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50/70 focus:bg-white focus:border-zinc-950 focus:outline-none transition-all text-xs font-sans-clean text-zinc-900 placeholder:text-zinc-400 resize-none leading-relaxed"
              />
            </div>

            {/* Feedback alert */}
            {footerStatus === "success" && (
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono-tech flex items-center gap-1.5">
                <span>✓</span>
                <span>Sent successfully!</span>
              </div>
            )}
            {footerStatus === "error" && (
              <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-800 text-[11px] font-mono-tech flex items-center gap-1.5">
                <span>✕</span>
                <span>Failed to send. Please try again.</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={footerSubmitting}
              className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-mono-tech font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-md transform active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-between group"
            >
              <span>{footerSubmitting ? "TRANSMITTING..." : "SEND"}</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>

        <div className="w-full flex-1 flex justify-center items-end pt-8 pb-0 px-6">
          <div className="relative w-full max-w-5xl flex justify-center items-end translate-y-8 sm:translate-y-14 md:translate-y-16">
            <Image
              ref={footerImageRef}
              onLoad={updateFooterWire}
              src="/footer_img.png"
              alt="Creative Visual Artwork"
              width={1400}
              height={1800}
              className="w-auto h-auto max-h-[78vh] sm:max-h-[86vh] object-contain object-bottom select-none hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Global Bottom Copyright Footer */}
        <div className="w-full px-6 sm:px-10 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-400 bg-white relative z-10">
          <span>AMANDI DASSANAYAKA • ALL RIGHTS RESERVED</span>
          <span>PORTFOLIO 2026</span>
        </div>
      </section>
    </main>
  );
}
