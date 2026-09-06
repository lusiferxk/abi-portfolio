"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildProjects, Project } from "@/lib/projects";

const FILTERS = [
  "ALL",
  "AUGMENTED REALITY",
  "3D MODELING",
  "INTERACTIVE",
  "MOBILE APP",
  "WEB",
  "RESEARCH"
];

export default function BuildWorld() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter logic: if ALL, show all. Otherwise match case-insensitively across categories
  const filteredProjects = buildProjects.filter((project) => {
    if (activeFilter === "ALL") return true;
    return project.category.some(
      (cat) => cat.toUpperCase() === activeFilter || cat.toUpperCase().includes(activeFilter)
    );
  });

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    },
    [selectedProject]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans-clean selection:bg-zinc-200">
      {/* Return Link - Consistent with /create and /capture */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-zinc-200 text-sm font-mono-tech text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 transition-all shadow-sm hover:shadow"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          RETURN
        </Link>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-6 text-zinc-950">
            BUILD
          </h1>
          <p className="text-xl sm:text-2xl font-sans-clean text-zinc-500 max-w-2xl mx-auto">
            I know how to turn ideas into technology.
          </p>
        </section>

        {/* Category Filters Bar */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 relative">
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 md:w-full md:static md:translate-x-0 md:mx-auto max-w-5xl overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-nowrap gap-2 px-6 md:px-0 w-max min-w-full md:justify-center after:content-[''] after:w-6 after:shrink-0 md:after:hidden">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono-tech transition-all border ${activeFilter === filter
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

        {/* Projects Grid */}
        <div className="space-y-24">
          {filteredProjects.length > 0 && (
            <section className="animate-in fade-in duration-700 delay-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden cursor-pointer hover:shadow-xl hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 h-[420px]"
                  >
                    {/* Card Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        priority={project.featured}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-full bg-zinc-950 text-white text-[9px] font-mono-tech uppercase tracking-wider shadow-md">
                            FEATURED
                          </span>
                        </div>
                      )}

                      {/* Hover Arrow */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-zinc-950 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:scale-110">
                        <span className="text-xs">↗</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Category Chips */}
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

                      {/* Title */}
                      <h4 className="text-lg font-bold font-heading tracking-tight mb-2 text-zinc-950 leading-tight group-hover:text-zinc-700 transition-colors">
                        {project.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-zinc-500 font-sans-clean text-xs line-clamp-2 mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      {project.tools && project.tools.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1 mb-3 pt-3 border-t border-zinc-100">
                          {project.tools.slice(0, 3).map((tool, i) => (
                            <span
                              key={i}
                              className="text-[9px] font-mono-tech text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="text-[9px] font-mono-tech text-zinc-400 pl-1">
                              +{project.tools.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer Info & Read Trigger */}
                      <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[10px] font-mono-tech text-zinc-400 uppercase truncate pr-2">
                          {project.role} {project.year ? `• ${project.year}` : ""}
                        </span>
                        <span className="text-[10px] font-mono-tech text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity">
                          EXPLORE ↗
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Empty Filter State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-zinc-500 font-mono-tech text-sm">
              No projects found for this filter.
            </div>
          )}
        </div>
      </main>

      {/* Case Study Modal Overlay - 100% Matching /create System */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content Window */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-zinc-200 animate-in slide-in-from-bottom-8 duration-500 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur border border-zinc-200 text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm"
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Modal Hero Banner */}
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

            {/* Modal Body - 10-Point Technical Case Study System */}
            <div className="p-8 sm:p-12 md:p-16 space-y-16">
              {/* 01 - Context */}
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

              {/* 02 - Challenge */}
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

              {/* 03 - My Role */}
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

              {/* 04 - Thinking & Research */}
              {selectedProject.thinking && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    04 — Thinking & Architecture
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.thinking}
                  </p>
                </section>
              )}

              {/* 05 - Process */}
              {selectedProject.process && selectedProject.process.length > 0 && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-6">
                    05 — Engineering Process
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

              {/* 06 - Execution */}
              {selectedProject.execution && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    06 — Technical Execution
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.execution}
                  </p>
                </section>
              )}

              {/* 07 - Output */}
              {selectedProject.output && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    07 — Output & Deliverables
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 leading-relaxed">
                    {selectedProject.output}
                  </p>
                </section>
              )}

              {/* 08 - Impact */}
              {selectedProject.impact && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    08 — Impact & Results
                  </h3>
                  <p className="text-lg font-sans-clean text-zinc-950 font-medium leading-relaxed border-l-2 border-zinc-950 pl-4 py-1">
                    {selectedProject.impact}
                  </p>
                </section>
              )}

              {/* 09 - Tools & Technologies */}
              {selectedProject.tools && selectedProject.tools.length > 0 && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    09 — Tools & Technologies
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

              {/* 10 - Learning */}
              {selectedProject.learning && (
                <section>
                  <h3 className="text-xs font-mono-tech text-zinc-400 tracking-widest uppercase mb-4">
                    10 — Key Engineering Takeaway
                  </h3>
                  <p className="text-base font-sans-clean text-zinc-600 italic">
                    &quot;{selectedProject.learning}&quot;
                  </p>
                </section>
              )}

              {/* Action Buttons */}
              <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="w-full">
                  {selectedProject.source !== "#" ? (
                    <Link
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-8 py-4 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-colors text-sm font-sans-clean font-medium items-center gap-2 shadow-sm"
                    >
                      Visit Live Project ↗
                    </Link>
                  ) : (
                    <span className="inline-flex px-8 py-4 rounded-full bg-zinc-100 text-zinc-500 text-sm font-sans-clean font-medium border border-zinc-200 cursor-default">
                      Internal / Proprietary Asset (Demo on Request)
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
