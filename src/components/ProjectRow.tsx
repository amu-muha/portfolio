'use client';

import React from 'react';
import { Project } from '@/data/portfolio';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';

interface ProjectRowProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectRow({ project, onSelect }: ProjectRowProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative block w-full text-left py-7 border-b border-hairline transition-all duration-150 hover:bg-zinc-50/70 dark:hover:bg-obsidian-elevated/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Index & Title */}
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
              {project.index}
            </span>
            <span className="text-zinc-300 dark:text-zinc-800">/</span>
            <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded border border-hairline text-zinc-600 dark:text-zinc-400 bg-zinc-100/60 dark:bg-obsidian-surface">
              {project.category}
            </span>
          </div>

          {/* Architectural Summary */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-7">
            {project.summary}
          </p>

          {/* Monospace Stack Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pl-7 pt-1">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-[#13151B] border border-hairline rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Links & Trigger */}
        <div className="flex items-center space-x-3 pl-7 md:pl-0 pt-2 md:pt-0 shrink-0">
          {/* GitHub Link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-mono rounded border border-hairline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-obsidian-surface transition-colors"
            title="Inspect Source Code on GitHub"
          >
            <GitBranch className="w-3 h-3 text-zinc-500" />
            <span>GitHub ↗</span>
          </a>

          {/* Project Link */}
          {project.projectUrl && project.projectUrl !== '#' && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-mono rounded border border-hairline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-obsidian-surface transition-colors"
              title="View Documentation or Project"
            >
              <ExternalLink className="w-3 h-3 text-zinc-500" />
              <span>Project ↗</span>
            </a>
          )}

          {/* Architecture Drawer Trigger Hint */}
          <div className="hidden sm:flex items-center space-x-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-[11px]">Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
