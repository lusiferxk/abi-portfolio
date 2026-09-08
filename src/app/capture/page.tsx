"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { captureProjects, Project, ProjectMedia } from "@/lib/projects";

const FILTERS = [
  "ALL",
  "PHOTOGRAPHY",
  "FILM",
  "CINEMATOGRAPHY",
  "VIDEOGRAPHY",
  "EXPERIMENTAL"
];

// Flatten the projects into individual media items for the gallery
type GalleryItem = {
  project: Project;
  media: ProjectMedia;
  mediaIndex: number;
  uniqueId: string;
};

export default function CaptureWorld() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Lightbox state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter projects first
  const filteredProjects = captureProjects.filter(project => {
    if (project.assetStatus === "awaiting-source") return false;
    if (activeFilter === "ALL") return true;
    return project.category.some(cat => cat.toUpperCase() === activeFilter);
  });

  // Then extract all media from filtered projects
  const galleryItems: GalleryItem[] = [];
  filteredProjects.forEach(project => {
    if (project.media) {
      project.media.forEach((media, index) => {
        galleryItems.push({
          project,
          media,
          mediaIndex: index,
          uniqueId: `${project.id}-${index}`
        });
      });
    }
  });

  // Lightbox Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "Escape") {
      setSelectedIndex(null);
    } else if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }
  }, [selectedIndex, galleryItems.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Helper to get Tailwind aspect ratio classes based on media type
  const getLayoutClasses = (aspectRatio?: string) => {
    switch (aspectRatio) {
      case "portrait": return "aspect-[2/3]";
      case "wide": return "aspect-video";
      case "cinematic": return "aspect-[21/9]";
      case "square": return "aspect-square";
      case "landscape":
      default:
        return "aspect-[3/2]";
    }
  };

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

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-32">

        {/* Header & Filters */}
        <section className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-6 text-zinc-950">
              CAPTURE
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-sans-clean max-w-2xl mb-12">
              I know how to tell stories visually.
            </p>

            <div className="flex flex-nowrap overflow-x-auto pb-4 justify-start md:justify-center gap-2 w-full max-w-5xl scrollbar-hide">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono-tech transition-all border ${activeFilter === filter
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                      : "bg-white text-zinc-400 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Masonry Gallery */}
        <section className="animate-in fade-in duration-1000 delay-300">
          {galleryItems.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {galleryItems.map((item, index) => {
                const isHovered = hoveredId === item.uniqueId;
                const isAnotherHovered = hoveredId !== null && hoveredId !== item.uniqueId;

                return (
                  <div
                    key={item.uniqueId}
                    className={`group relative overflow-hidden bg-zinc-100 cursor-pointer transition-all duration-500 ease-out rounded-xl w-full inline-block break-inside-avoid mb-4 ${getLayoutClasses(item.media.aspectRatio)} ${isAnotherHovered ? "grayscale opacity-50 blur-[2px]" : "grayscale-0 opacity-100 blur-0"
                      }`}
                    onMouseEnter={() => setHoveredId(item.uniqueId)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={item.media.url}
                      alt={item.media.alt || item.project.title}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out ${isHovered ? "scale-[1.03]" : "scale-100"
                        }`}
                    />

                    {/* Hover Metadata Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}>
                      {item.media.type === "video" && (
                        <div className="absolute top-4 right-4 bg-red-600/90 text-white text-[10px] font-mono-tech px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                          <span>▶</span>
                          <span>VIDEO</span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 p-5 text-white">
                        <h3 className="text-lg font-bold font-heading mb-1 drop-shadow-md leading-snug">
                          {item.media.title || item.project.title}
                        </h3>
                        <p className="text-[10px] font-mono-tech uppercase tracking-widest text-white/80 drop-shadow-md">
                          {item.project.category.join(" · ")} {item.project.year && `· ${item.project.year}`}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-32 text-zinc-400 font-mono-tech text-sm">
              No visual work available for this category yet.
            </div>
          )}
        </section>

        {/* Published Photography Sets on Facebook */}
        <section className="mt-28 pt-16 border-t border-zinc-100 animate-in fade-in duration-1000 delay-500">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono-tech uppercase tracking-widest text-zinc-400 block mb-2">
              Published Shoots & Albums
            </span>
            <h2 className="text-3xl font-bold font-heading uppercase text-zinc-950 mb-3">
              Editorial Sets on Facebook
            </h2>
            <p className="text-sm text-zinc-500 font-sans-clean">
              Original photography collections, stories, and editorial sets published across social media.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { title: "Photography Set 01", url: "https://www.facebook.com/share/1VaRPn5NTb/" },
              { title: "Photography Set 02", url: "https://www.facebook.com/share/19KjBfnbqB/" },
              { title: "Photography Set 03", url: "https://www.facebook.com/share/14npFnPp3e2/" },
              { title: "Photography Set 04", url: "https://www.facebook.com/share/1L8REPbzUr/" },
              { title: "Photography Set 05", url: "https://www.facebook.com/share/1K84M8qYWv/" },
              { title: "Photography Set 06", url: "https://www.facebook.com/share/1Ed2ayn4D1/" },
              { title: "Photography Set 07", url: "https://www.facebook.com/share/19BNVTzn82/" },
              { title: "Photography Set 08", url: "https://www.facebook.com/share/1Mw9XKW4Wg/" },
            ].map((set, idx) => (
              <a
                key={set.url}
                href={set.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 bg-zinc-50 hover:bg-zinc-900 rounded-xl border border-zinc-200/80 hover:border-zinc-900 transition-all text-left"
              >
                <div>
                  <span className="text-[10px] font-mono-tech text-zinc-400 group-hover:text-zinc-500 block">
                    SHOOT 0{idx + 1}
                  </span>
                  <span className="text-xs font-bold font-sans-clean text-zinc-900 group-hover:text-white transition-colors">
                    {set.title}
                  </span>
                </div>
                <span className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs font-mono-tech">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Media Viewer Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white animate-in fade-in duration-300">

          {/* Controls */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 p-4 text-white/50 hover:text-white transition-colors text-xl"
            title="Close (Esc)"
          >
            ✕
          </button>

          {selectedIndex > 0 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 text-white/30 hover:text-white transition-colors text-2xl hidden md:block"
              title="Previous (Left Arrow)"
            >
              ←
            </button>
          )}

          {selectedIndex < galleryItems.length - 1 && (
            <button
              onClick={() => setSelectedIndex(selectedIndex + 1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 text-white/30 hover:text-white transition-colors text-2xl hidden md:block"
              title="Next (Right Arrow)"
            >
              →
            </button>
          )}

          {/* Viewer Content */}
          <div className="relative w-full max-w-[90vw] h-[85vh] flex flex-col items-center justify-center">

            <div className="relative w-full flex-1 flex items-center justify-center">
              <div className="relative w-full h-full max-h-full">
                <Image
                  src={galleryItems[selectedIndex].media.url}
                  alt={galleryItems[selectedIndex].media.alt || galleryItems[selectedIndex].project.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Viewer Metadata */}
            <div className="w-full max-w-3xl mt-6 text-center px-4 shrink-0">
              <h2 className="text-2xl font-bold font-heading mb-1">
                {galleryItems[selectedIndex].media.title || galleryItems[selectedIndex].project.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-2.5 text-xs font-mono-tech text-white/60 uppercase tracking-widest mb-3">
                <span>{galleryItems[selectedIndex].project.category.join(" · ")}</span>
                {galleryItems[selectedIndex].project.year && (
                  <span>· {galleryItems[selectedIndex].project.year}</span>
                )}
                {galleryItems[selectedIndex].project.role && (
                  <span>· {galleryItems[selectedIndex].project.role}</span>
                )}
              </div>
              {galleryItems[selectedIndex].project.description && (
                <p className="text-sm font-sans-clean text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                  {galleryItems[selectedIndex].project.description}
                </p>
              )}

              {/* Direct Asset Link (Normalized Google Drive, YouTube, etc.) */}
              {(galleryItems[selectedIndex].media.source || galleryItems[selectedIndex].project.source) && (
                <div className="flex justify-center">
                  <a
                    href={galleryItems[selectedIndex].media.source || galleryItems[selectedIndex].project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full text-xs font-mono-tech transition-all border border-white/20 shadow-md group"
                  >
                    <span>
                      {galleryItems[selectedIndex].media.type === "video"
                        ? "WATCH ON YOUTUBE"
                        : (galleryItems[selectedIndex].media.source || galleryItems[selectedIndex].project.source).includes("drive.google.com")
                          ? "VIEW ON GOOGLE DRIVE"
                          : (galleryItems[selectedIndex].media.source || galleryItems[selectedIndex].project.source).includes("facebook.com")
                            ? "VIEW ON FACEBOOK"
                            : "VIEW ORIGINAL ASSET"}
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
