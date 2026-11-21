'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Shield, Terminal, ArrowRight } from 'lucide-react';

export function SecurityLab() {
  const { offensiveDefensive, algorithmsSystems } = PORTFOLIO_DATA.securityLab;

  return (
    <section id="security" className="py-12 md:py-16 border-b border-hairline">
      {/* Section Header */}
      <div className="space-y-2 pb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Applied Research</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {PORTFOLIO_DATA.securityLab.title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {PORTFOLIO_DATA.securityLab.subtitle}
        </p>
      </div>

      {/* 2-Column Editorial Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Column 1: Offensive & Defensive Security */}
        <div className="space-y-6">
          <div className="border-b border-hairline pb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {offensiveDefensive.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {offensiveDefensive.description}
            </p>
          </div>

          <div className="space-y-4">
            {offensiveDefensive.topics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-hairline bg-zinc-50/50 dark:bg-obsidian-surface/50 space-y-1.5"
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                  <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-5 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Algorithms & Information Retrieval */}
        <div className="space-y-6">
          <div className="border-b border-hairline pb-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {algorithmsSystems.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {algorithmsSystems.description}
            </p>
          </div>

          <div className="space-y-4">
            {algorithmsSystems.topics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-hairline bg-zinc-50/50 dark:bg-obsidian-surface/50 space-y-1.5"
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                  <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-5 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
