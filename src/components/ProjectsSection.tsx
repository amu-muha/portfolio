'use client';

import React, { useRef, useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import { ChevronLeft, ChevronRight, GitBranch, ExternalLink, ArrowRight, Server, Terminal, Database, Shield } from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-amber-bright uppercase">
              SELECTED WORKS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-emerald-amber">
              My Digital Works.
            </h2>
            <p className="text-base md:text-lg text-[#94A8AB] max-w-xl leading-relaxed">
              Architecting resilient backend engines, real-time platforms, and offline-first systems.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-full bg-[#111D20] border border-[#1E3237] text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-full bg-[#111D20] border border-[#1E3237] text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.index}
              className="snap-start shrink-0 w-[340px] sm:w-[420px] rounded-3xl bg-[#111D20] border border-[#1E3237] p-6 flex flex-col justify-between space-y-5 shadow-2xl hover:border-mint/40 transition-all group"
            >
              {/* Card Header: Index & Quick Actions */}
              <div className="flex items-center justify-between border-b border-[#1E3237] pb-3">
                <span className="font-mono text-xs font-bold text-mint-bright">
                  PROJECT {project.index}
                </span>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-[#94A8AB] hover:text-[#F2EFE9] hover:border-mint/50 transition-colors"
                    title="GitHub Repository"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                  </a>

                  {project.projectUrl && project.projectUrl !== '#' && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-[#94A8AB] hover:text-[#F2EFE9] hover:border-amber-bright/50 transition-colors"
                      title="Project Link / Docs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tilted Architecture Preview Window with 4 Floating Corner Tech Badges */}
              <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#0B1315] border border-[#1E3237] p-4 flex flex-col justify-between overflow-hidden shadow-inner group-hover:border-mint/30 transition-all">
                {/* 4 Floating Corner Badges */}
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#111D20]/90 border border-[#1E3237] text-[10px] font-mono font-bold shadow-md" style={{ color: project.cornerIcons[0]?.brandColor }}>
                  {project.cornerIcons[0]?.name}
                </div>
                <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-md bg-[#111D20]/90 border border-[#1E3237] text-[10px] font-mono font-bold shadow-md" style={{ color: project.cornerIcons[1]?.brandColor }}>
                  {project.cornerIcons[1]?.name}
                </div>
                <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#111D20]/90 border border-[#1E3237] text-[10px] font-mono font-bold shadow-md" style={{ color: project.cornerIcons[2]?.brandColor }}>
                  {project.cornerIcons[2]?.name}
                </div>
                <div className="absolute bottom-2 right-2 z-10 px-2 py-0.5 rounded-md bg-[#111D20]/90 border border-[#1E3237] text-[10px] font-mono font-bold shadow-md" style={{ color: project.cornerIcons[3]?.brandColor }}>
                  {project.cornerIcons[3]?.name}
                </div>

                {/* Center Stylized Preview Graphic */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Server className="w-8 h-8 text-mint-bright animate-pulse-slow" />
                  <div className="text-[11px] font-mono text-[#94A8AB] text-center px-4">
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* Project Title & Architectural Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#F2EFE9] group-hover:text-mint-bright transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#94A8AB] leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Action Button: Inspect Architecture Modal */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B1315] border border-[#1E3237] text-xs font-mono font-semibold text-[#F2EFE9] hover:border-mint hover:text-mint-bright flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <span>Inspect Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-over Architecture Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
