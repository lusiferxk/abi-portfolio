"use client";

import Link from "next/link";
import Image from "next/image";
import { buildProjects } from "@/lib/projects";

export default function BuildWorld() {
  const featuredProject = buildProjects.find(p => p.featured) || buildProjects[0];
  const gridProjects = buildProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-zinc-200">
      {/* Return Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-sm font-mono-tech uppercase hover:scale-105 hover:bg-zinc-50 transition-all shadow-sm"
        >
          <span className="text-sm">←</span>
          <span>Return</span>
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono-tech border border-zinc-200">
            <span className="text-xs">&lt;/&gt;</span>
            <span>SOFTWARE ENGINEERING & R&D</span>
          </div>
          
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-6 text-zinc-950">
            Build
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl font-sans-clean text-zinc-500 mb-12">
            I know how to turn ideas into technology.
          </p>

          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl mb-8 group">
            <Image
              src="/worlds/build-hero.jpg"
              alt="Build World"
              width={1200}
              height={675}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent"></div>
          </div>
          
          <div className="flex justify-center items-center gap-4 text-sm font-mono-tech text-zinc-500">
            <span>{buildProjects.length} PROJECTS CATALOGUED</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span>SYSTEM OF RECORD</span>
          </div>
        </section>

        {/* Featured Project - CineAR */}
        {featuredProject && (
          <section className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white border border-zinc-800 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredProject.coverImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-zinc-950 text-xs font-mono-tech shadow-lg">
                      ⭐ FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.category.map((cat, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-mono-tech border border-zinc-800">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4 text-white">
                    {featuredProject.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm font-mono-tech text-zinc-400 mb-6">
                    <span>{featuredProject.role}</span>
                    {featuredProject.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <span>{featuredProject.year}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-lg text-zinc-400 font-sans-clean mb-8 line-clamp-4">
                    {featuredProject.description}
                  </p>
                  
                  <div className="mt-auto">
                    {featuredProject.source !== "#" ? (
                      <Link 
                        href={featuredProject.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-medium font-sans-clean hover:bg-zinc-200 transition-colors"
                      >
                        View Research <span>↗</span>
                      </Link>
                    ) : (
                      <span 
                        title="Link pending"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-zinc-500 text-sm font-medium font-sans-clean cursor-not-allowed border border-zinc-800"
                      >
                        Source Private <span>↗</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Grid */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <h3 className="text-2xl font-bold font-heading tracking-tight mb-8 text-zinc-950 flex items-center gap-3">
            <span>Archive</span>
            <span className="h-[1px] flex-1 bg-zinc-200"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridProjects.map((project, idx) => (
              <div 
                key={project.id}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.source !== "#" && (
                    <Link
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:scale-110"
                    >
                      <span>↗</span>
                    </Link>
                  )}
                  {project.source === "#" && (
                    <div 
                      title="Link pending"
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-not-allowed"
                    >
                      <span>↗</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.slice(0, 2).map((cat, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-mono-tech tracking-wider uppercase">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading tracking-tight mb-2 text-zinc-950 group-hover:text-zinc-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-xs font-mono-tech text-zinc-500 mb-4 uppercase">
                    <span>{project.role}</span>
                    {project.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                        <span>{project.year}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-zinc-600 font-sans-clean text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  {project.tools && project.tools.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="text-xs font-mono-tech text-zinc-400">
                          {tool}{i < Math.min(project.tools!.length, 3) - 1 ? ',' : ''}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-xs font-mono-tech text-zinc-400">+{project.tools.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
