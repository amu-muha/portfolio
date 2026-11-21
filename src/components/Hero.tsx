'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, Github, Linkedin, Copy, Check, MapPin, GraduationCap } from 'lucide-react';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-12 md:py-16 border-b border-hairline">
      {/* Editorial Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Backend Systems & Infrastructure</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
          {PORTFOLIO_DATA.personal.name}
        </h1>

        <p className="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-300">
          {PORTFOLIO_DATA.personal.role}
        </p>

        {/* Location & Education Metadata */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>{PORTFOLIO_DATA.personal.location} ({PORTFOLIO_DATA.personal.timezone})</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-800">/</span>
          <div className="flex items-center space-x-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>{PORTFOLIO_DATA.cv.education.degree}, {PORTFOLIO_DATA.cv.education.institution}</span>
          </div>
        </div>

        {/* Editorial Bio Statement */}
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl pt-2 leading-relaxed">
          &ldquo;{PORTFOLIO_DATA.personal.bio}&rdquo;
        </p>
      </div>

      {/* Primary Action Row - Clean Hairline Triggers */}
      <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap items-center gap-3">
        {/* Download CV */}
        <a
          href={PORTFOLIO_DATA.personal.cvPath}
          download={PORTFOLIO_DATA.personal.cvFilename}
          className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono font-medium rounded border border-hairline bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white hover:shadow-sm transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download CV (PDF)</span>
        </a>

        {/* GitHub */}
        <a
          href={PORTFOLIO_DATA.personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
        >
          <Github className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>GitHub (@amu-muha)</span>
        </a>

        {/* LinkedIn */}
        <a
          href={PORTFOLIO_DATA.personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
        >
          <Linkedin className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>LinkedIn</span>
        </a>

        {/* Copy Email */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

