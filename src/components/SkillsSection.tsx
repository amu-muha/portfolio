'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { TechTile } from './TechTile';

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-bright uppercase">
            {skills.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-emerald-amber">
            {skills.title}
          </h2>
          <p className="text-base md:text-lg text-[#94A8AB] max-w-2xl leading-relaxed">
            {skills.subtitle}
          </p>
        </div>

        {/* Categorized Tactile 3D Icon Rows */}
        <div className="space-y-8">
          {skills.categories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 md:p-8 rounded-2xl bg-[#111D20] border border-[#1E3237] space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-[#1E3237] pb-3">
                <span className="text-xs font-mono font-bold tracking-wider text-mint-bright">
                  {cat.label}
                </span>
                <span className="text-[11px] font-mono text-[#94A8AB]">
                  {cat.skills.length} TECHNOLOGIES
                </span>
              </div>

              {/* Grid of Tactile 3D Tiles */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <TechTile
                    key={sIdx}
                    name={skill.name}
                    brandColor={skill.brandColor}
                    iconKey={skill.iconKey}
                    size="md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
