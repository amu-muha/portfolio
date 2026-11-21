'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ProjectRow } from '@/components/ProjectRow';
import { CVSection } from '@/components/CVSection';
import { SecurityLab } from '@/components/SecurityLab';
import { Footer } from '@/components/Footer';
import { ArchitectureDrawer } from '@/components/ArchitectureDrawer';
import { TerminalDrawer } from '@/components/TerminalDrawer';
import { Layers } from 'lucide-react';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut listener for terminal (~ or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on backquote (~) or Ctrl+K / Cmd+K
      if (
        e.key === '`' ||
        e.key === '~' ||
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')
      ) {
        // If typing in another input element, don't trigger unless it's Ctrl+K
        const target = e.target as HTMLElement;
        const isInputField =
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable;

        if (!isInputField || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-editorial-lightBg dark:bg-obsidian transition-colors duration-200">
      {/* Top Minimal Navigation */}
      <Navigation onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Single-Column Editorial Canvas */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Editorial Hero */}
        <Hero />

        {/* Selected Backend & Systems Work (Full-Width Interactive Tabular Rows - NO CARDS) */}
        <section id="work" className="py-12 md:py-16 border-b border-hairline">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Production & Systems Engineering</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Selected Backend & Systems Work
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Click row to inspect architecture
            </span>
          </div>

          {/* Full-Width Rows */}
          <div className="divide-y divide-hairline border-t border-hairline">
            {PORTFOLIO_DATA.projects.map((project) => (
              <ProjectRow
                key={project.index}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        {/* Curriculum Vitae Section */}
        <CVSection />

        {/* Cybersecurity & Systems Engineering Lab */}
        <SecurityLab />

        {/* Minimal Contact & Footer */}
        <Footer />
      </main>

      {/* Slide-Over Architecture Drawer */}
      <ArchitectureDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSelectProject={(index) => {
          const match = PORTFOLIO_DATA.projects.find((p) => p.index === index);
          if (match) {
            setSelectedProject(match);
          }
        }}
      />
    </div>
  );
}

