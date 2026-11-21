'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="py-12 md:py-16 space-y-8">
      {/* Contact Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Contact & Direct Inquiries</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Let&apos;s build resilient systems together.
        </h2>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Available for backend engineering, distributed systems, and cybersecurity roles. Reach out via email or connect on professional channels.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Direct Mailto */}
          <a
            href={PORTFOLIO_DATA.personal.socials.email}
            className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono font-medium rounded border border-hairline bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white shadow-sm transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Email ({PORTFOLIO_DATA.personal.email})</span>
          </a>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
          >
            <Github className="w-3.5 h-3.5 text-zinc-500" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-500" />
            <span>LinkedIn</span>
          </a>

          {/* Secondary CV Download */}
          <a
            href={PORTFOLIO_DATA.personal.cvPath}
            download={PORTFOLIO_DATA.personal.cvFilename}
            className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </div>

      {/* Hairline Divider & System Status */}
      <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{PORTFOLIO_DATA.personal.name}</span>
          <span>·</span>
          <span>Addis Ababa, Ethiopia ({PORTFOLIO_DATA.personal.timezone})</span>
        </div>

        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
          Static Edge Architecture · Strictly zero telemetry
        </div>
      </div>
    </footer>
  );
}

