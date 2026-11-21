'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, Award, GraduationCap, Code } from 'lucide-react';

export function CVSection() {
  return (
    <section id="cv" className="py-12 md:py-16 border-b border-hairline">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education & Technical Credentials
          </h2>
        </div>

        {/* Direct PDF Download Button */}
        <a
          href={PORTFOLIO_DATA.personal.cvPath}
          download={PORTFOLIO_DATA.personal.cvFilename}
          className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono font-medium rounded border border-hairline bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white shadow-sm transition-all shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Full CV (PDF)</span>
        </a>
      </div>

      <div className="space-y-8 divide-y divide-hairline">
        {/* Education Item */}
        <div className="pt-6 first:pt-0 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-500">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
            <span>Formal Education</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {PORTFOLIO_DATA.cv.education.degree}
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              {PORTFOLIO_DATA.cv.education.location}
            </span>
          </div>

          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {PORTFOLIO_DATA.cv.education.institution}
          </p>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            Core Curriculum Focus: {PORTFOLIO_DATA.cv.education.focus}
          </p>
        </div>

        {/* Honors & Credentials */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-500">
            <Award className="w-3.5 h-3.5 text-emerald-500" />
            <span>Honors & Professional Recognitions</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.cv.honors.map((honor, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-hairline bg-zinc-50/60 dark:bg-obsidian-surface/60 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {honor.title}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                      {honor.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {honor.date}
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {honor.issuer}
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {honor.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Stack Typographic Rows */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-500">
            <Code className="w-3.5 h-3.5 text-emerald-500" />
            <span>Core Technical Stack & Tooling</span>
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.cv.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-2 border-b border-hairline last:border-0"
              >
                <span className="w-48 text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
                  {skillGroup.category}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-hairline bg-zinc-100 dark:bg-obsidian-elevated text-zinc-800 dark:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
