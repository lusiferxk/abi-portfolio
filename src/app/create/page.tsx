"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  createProjects,
  createSocialCampaigns,
  Project,
  SocialCampaignItem
} from "@/lib/projects";

const FILTERS = [
  "ALL",
  "MARKETING",
  "SEO + CRO",
  "UI/UX",
  "GRAPHIC DESIGN",
  "CONTENT DESIGN",
  "ANALYTICS",
  "PAID MEDIA",
  "EMAIL"
];

export default function CreateWorld() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Social Campaigns State
  const [socialFilter, setSocialFilter] = useState<"ALL" | "MITRA" | "SYNC2">("ALL");
  const [selectedSocial, setSelectedSocial] = useState<SocialCampaignItem | null>(null);

  // Filter logic for main case studies
  const filteredProjects = createProjects.filter((project) => {
    if (activeFilter === "ALL") return true;
    return project.category.some((cat) => cat.toUpperCase() === activeFilter);
  });

  // Filter logic for social campaigns
  const filteredSocialCampaigns = createSocialCampaigns.filter((item) => {
    if (socialFilter === "ALL") return true;
    if (socialFilter === "MITRA") return item.client === "Mitra Innovation";
    if (socialFilter === "SYNC2") return item.client === "Sync2 Brand";
    return true;
  });

  // Handle keyboard navigation for social lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSocial(null);
        setSelectedProject(null);
      } else if (selectedSocial) {
        const currentIndex = filteredSocialCampaigns.findIndex((s) => s.id === selectedSocial.id);
        if (e.key === "ArrowLeft") {
          const prevIndex = (currentIndex - 1 + filteredSocialCampaigns.length) % filteredSocialCampaigns.length;
          setSelectedSocial(filteredSocialCampaigns[prevIndex]);
        } else if (e.key === "ArrowRight") {
          const nextIndex = (currentIndex + 1) % filteredSocialCampaigns.length;
          setSelectedSocial(filteredSocialCampaigns[nextIndex]);
        }
      }
    },
    [selectedSocial, filteredSocialCampaigns]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans-clean selection:bg-zinc-200">
      {/* Plain Return Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>RETURN</span>
        </Link>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 pt-32 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-6 text-zinc-950">
            CREATE
          </h1>
          <p className="text-xl sm:text-2xl font-sans-clean text-zinc-500 max-w-2xl mx-auto">
            I know how to communicate.
          </p>
        </section>

        {/* Filters for Case Studies */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 relative">
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 md:w-full md:static md:translate-x-0 md:mx-auto max-w-5xl overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-nowrap gap-2 px-6 md:px-0 w-max min-w-full md:justify-center after:content-[''] after:w-6 after:shrink-0 md:after:hidden">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono-tech transition-all border cursor-pointer ${
                    activeFilter === filter
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md scale-105"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid Container */}
        <div className="space-y-24">
          {/* Main Grid */}
          {filteredProjects.length > 0 && (
            <section className="animate-in fade-in duration-700 delay-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden cursor-pointer hover:shadow-xl hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 h-[380px]"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.category.slice(0, 2).map((cat, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-zinc-500 text-[9px] font-mono-tech uppercase bg-zinc-50 border border-zinc-100"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold font-heading tracking-tight mb-2 text-zinc-950 leading-tight">
                        {project.title}
                      </h4>

                      <p className="text-zinc-500 font-sans-clean text-xs line-clamp-2 mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[10px] font-mono-tech text-zinc-400 uppercase truncate pr-2">
                          {project.role}
                        </span>
                        <span className="text-[10px] font-mono-tech text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity">
                          READ ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-zinc-500 font-mono-tech text-sm">
              No projects found for this filter.
            </div>
          )}
        </div>

        {/* ─── LIVE CAMPAIGNS & SOCIAL MEDIA WORKS ─── */}
        <section className="mt-32 pt-20 border-t border-zinc-200 animate-in fade-in duration-700 delay-300">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="px-3 py-1 rounded-full text-zinc-500 text-[10px] font-mono-tech uppercase bg-zinc-100 border border-zinc-200 mb-4">
              Social Campaigns & Creative Direction
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight uppercase text-zinc-950 mb-4">
              Live Campaigns & Social Media
            </h2>
            <p className="text-base sm:text-lg font-sans-clean text-zinc-500 max-w-2xl mx-auto mb-8">
              Real-world digital assets, brand systems, and enterprise technology communications published across Instagram & LinkedIn.
            </p>

            {/* Sub-Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSocialFilter("ALL")}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all border cursor-pointer ${
                  socialFilter === "ALL"
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                ALL WORKS ({createSocialCampaigns.length})
              </button>
              <button
                onClick={() => setSocialFilter("MITRA")}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all border cursor-pointer ${
                  socialFilter === "MITRA"
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                MITRA INNOVATION • LINKEDIN (12)
              </button>
              <button
                onClick={() => setSocialFilter("SYNC2")}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all border cursor-pointer ${
                  socialFilter === "SYNC2"
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                SYNC2 STUDIO • INSTAGRAM (8)
              </button>
            </div>
          </div>

          {/* Social Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSocialCampaigns.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Platform Badge & Lightbox Click */}
                <div
                  onClick={() => setSelectedSocial(item)}
                  className={`relative w-full ${
                    item.aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-square"
                  } bg-zinc-100 overflow-hidden cursor-pointer`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Platform Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                        item.platform === "LinkedIn"
                          ? "bg-white/90 text-blue-800 border-blue-200"
                          : "bg-white/90 text-pink-700 border-pink-200"
                      }`}
                    >
                      {item.platform === "LinkedIn" ? "in LinkedIn" : "IG Instagram"}
                    </span>
                  </div>

                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur text-xs font-mono-tech text-zinc-950 font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      PREVIEW ↗
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono-tech text-zinc-400 uppercase tracking-wider">
                      {item.client}
                    </span>
                    <span className="px-2 py-0.5 rounded text-zinc-500 text-[9px] font-mono-tech uppercase bg-zinc-50 border border-zinc-100">
                      {item.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedSocial(item)}
                    className="text-base font-bold font-heading text-zinc-950 leading-snug mb-2 cursor-pointer hover:text-zinc-600 transition-colors line-clamp-2"
                  >
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 font-sans-clean text-xs line-clamp-2 mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Direct Link to original post */}
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono-tech text-zinc-900 hover:text-blue-600 font-medium transition-colors flex items-center gap-1.5"
                    >
                      <span>VIEW ON {item.platform.toUpperCase()}</span>
                      <span className="transform transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ─── CASE STUDY MODAL OVERLAY ─── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-zinc-200 animate-in slide-in-from-bottom-8 duration-500 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur border border-zinc-200 text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Hero */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-zinc-100 shrink-0">
              <Image
                src={selectedProject.coverImage}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.category.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono-tech uppercase border border-white/30"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-2">
                  {selectedProject.title}
                </h2>
                <div className="font-mono-tech text-sm text-white/80 uppercase">
                  {selectedProject.role} {selectedProject.year ? `• ${selectedProject.year}` : ""}
                </div>
              </div>
            </div>

            {/* Modal Body (10-point system) */}
            <div className="p-8 sm:p-12 md:p-16 space-y-16">
              {selectedProject.context && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    01 — Context
                  </h3>
                  <p className="text-lg md:text-xl font-sans-clean text-zinc-800 leading-relaxed">
                    {selectedProject.context}
                  </p>
                </section>
              )}

              {selectedProject.challenge && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    02 — Challenge
                  </h3>
                  <p className="text-lg font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </section>
              )}

              {selectedProject.myRole && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    03 — My Role
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.myRole}
                  </p>
                </section>
              )}

              {selectedProject.thinking && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    04 — Thinking & Research
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.thinking}
                  </p>
                </section>
              )}

              {selectedProject.process && selectedProject.process.length > 0 && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-6">
                    05 — Process
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4">
                    {selectedProject.process.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 md:gap-4">
                        <span className="px-4 py-2 rounded-full border border-zinc-200 text-sm font-mono-tech text-zinc-800 bg-zinc-50">
                          {step}
                        </span>
                        {i < selectedProject.process!.length - 1 && (
                          <span className="text-zinc-300">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {selectedProject.execution && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    06 — Execution
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.execution}
                  </p>
                </section>
              )}

              {selectedProject.output && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    07 — Output
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.output}
                  </p>
                </section>
              )}

              {selectedProject.impact && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    08 — Impact
                  </h3>
                  <p className="text-lg font-sans-clean text-zinc-950 font-medium leading-relaxed border-l-2 border-zinc-950 pl-4 py-1">
                    {selectedProject.impact}
                  </p>
                </section>
              )}

              {selectedProject.tools && selectedProject.tools.length > 0 && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    09 — Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded bg-zinc-100 text-zinc-600 text-xs font-mono-tech border border-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {selectedProject.learning && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    10 — Learning
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 italic">
                    "{selectedProject.learning}"
                  </p>
                </section>
              )}

              {/* Media Gallery if available */}
              {selectedProject.media && selectedProject.media.length > 0 && (
                <section className="space-y-6 pt-6 border-t border-zinc-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase">
                      Creative Assets & Live Publications ({selectedProject.media.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.media.map((item, i) => (
                      <div
                        key={i}
                        className="group flex flex-col rounded-xl border border-zinc-200 bg-white overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all"
                      >
                        <div
                          className={`relative w-full ${
                            item.aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-square"
                          } bg-zinc-100 overflow-hidden`}
                        >
                          <Image
                            src={item.url}
                            alt={item.title || selectedProject.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h4 className="text-sm font-bold font-heading text-zinc-950 mb-1 leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          {item.source && (
                            <a
                              href={item.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto pt-3 text-[11px] font-mono-tech text-zinc-500 hover:text-zinc-950 flex items-center gap-1 border-t border-zinc-100"
                            >
                              <span>VIEW ORIGINAL POST</span>
                              <span>↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* External Link / Gallery Links */}
              <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                {selectedProject.galleryUrls && selectedProject.galleryUrls.length > 0 ? (
                  <div className="flex flex-col gap-3 w-full">
                    <span className="text-xs font-mono-tech text-zinc-400 uppercase">
                      Direct Publication References:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.galleryUrls.map((url, i) => (
                        <Link
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors text-xs font-mono-tech flex items-center gap-1.5"
                        >
                          Post {i + 1} ↗
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    {selectedProject.source !== "#" ? (
                      <Link
                        href={selectedProject.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-8 py-4 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-colors text-sm font-sans-clean font-medium items-center gap-2"
                      >
                        Visit Live Project ↗
                      </Link>
                    ) : (
                      <span className="inline-flex px-8 py-4 rounded-full bg-zinc-100 text-zinc-500 text-sm font-sans-clean font-medium border border-zinc-200 cursor-default">
                        Internal / Manual Assets (Not Public)
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── LIGHTBOX MODAL FOR SOCIAL CAMPAIGNS ─── */}
      {selectedSocial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-white/85 backdrop-blur-md"
            onClick={() => setSelectedSocial(null)}
          />

          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl border border-zinc-200 animate-in slide-in-from-bottom-8 duration-500 flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSocial(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur border border-zinc-200 text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer"
            >
              ✕
            </button>

            {/* Left: Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[320px] bg-zinc-100 flex items-center justify-center">
              <Image
                src={selectedSocial.image}
                alt={selectedSocial.title}
                fill
                className="object-contain md:object-cover p-2 md:p-0"
              />
            </div>

            {/* Right: Details & Action */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between w-full md:w-1/2 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider border ${
                      selectedSocial.platform === "LinkedIn"
                        ? "bg-blue-50 text-blue-800 border-blue-200"
                        : "bg-pink-50 text-pink-700 border-pink-200"
                    }`}
                  >
                    {selectedSocial.platform}
                  </span>
                  <span className="text-xs font-mono-tech text-zinc-400 uppercase">
                    {selectedSocial.client}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight mb-3 text-zinc-950">
                  {selectedSocial.title}
                </h3>

                <div className="mb-4">
                  <span className="px-2.5 py-1 rounded text-zinc-600 text-[10px] font-mono-tech uppercase bg-zinc-100 border border-zinc-200">
                    {selectedSocial.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-sans-clean text-zinc-600 leading-relaxed whitespace-pre-line mb-6">
                  {selectedSocial.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Prev / Next controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const idx = filteredSocialCampaigns.findIndex((s) => s.id === selectedSocial.id);
                      if (idx > 0) {
                        setSelectedSocial(filteredSocialCampaigns[idx - 1]);
                      } else {
                        setSelectedSocial(filteredSocialCampaigns[filteredSocialCampaigns.length - 1]);
                      }
                    }}
                    className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white flex items-center justify-center transition-colors text-xs font-mono-tech cursor-pointer"
                    title="Previous"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      const idx = filteredSocialCampaigns.findIndex((s) => s.id === selectedSocial.id);
                      if (idx < filteredSocialCampaigns.length - 1) {
                        setSelectedSocial(filteredSocialCampaigns[idx + 1]);
                      } else {
                        setSelectedSocial(filteredSocialCampaigns[0]);
                      }
                    }}
                    className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white flex items-center justify-center transition-colors text-xs font-mono-tech cursor-pointer"
                    title="Next"
                  >
                    →
                  </button>
                </div>

                <a
                  href={selectedSocial.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex px-6 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-colors text-xs font-mono-tech font-medium items-center justify-center gap-2"
                >
                  <span>OPEN ON {selectedSocial.platform.toUpperCase()}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
