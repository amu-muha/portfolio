'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, Terminal, Shield, Cpu, Activity, Award } from 'lucide-react';

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-bright uppercase">
            {about.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-emerald-amber">
            {about.title}
          </h2>
          <p className="text-base md:text-lg text-[#94A8AB] max-w-3xl leading-relaxed pt-1">
            {about.subheadline}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stylized Server / Live System Metrics Visual Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#111D20] border border-[#1E3237] p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1E3237] pb-3 text-xs font-mono text-[#94A8AB]">
              <span className="flex items-center space-x-1.5 text-mint-bright">
                <Terminal className="w-4 h-4" />
                <span>telemetry.system.live</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                <span>STABLE</span>
              </span>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              {about.liveMetrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0B1315] border border-[#1E3237] space-y-1"
                >
                  <div className="text-[10px] text-[#94A8AB] uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div
                    className="text-sm md:text-base font-bold"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition Highlights inside card */}
            <div className="pt-2 border-t border-[#1E3237] space-y-3">
              <div className="flex items-start space-x-3 text-xs font-mono text-[#F2EFE9]">
                <Award className="w-4 h-4 text-amber-bright shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-bright">1st Place Hackathon Winner</div>
                  <div className="text-[11px] text-[#94A8AB]">Invited to IDEEZA Cohort 7 (Hardware & AI)</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs font-mono text-[#F2EFE9]">
                <Shield className="w-4 h-4 text-mint-bright shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-mint-bright">Cybersecurity Track Graduate</div>
                  <div className="text-[11px] text-[#94A8AB]">UNDP, UN Technology Bank & ICPSD FTL</div>
                </div>
              </div>
            </div>

            {/* Frame Badge */}
            <div className="pt-2 text-center text-[11px] font-mono text-[#94A8AB]">
              BASED IN Addis Ababa, Ethiopia (UTC+3)
            </div>
          </div>

          {/* Right Column: The Journey Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-wider text-mint-bright uppercase">
              <Activity className="w-3.5 h-3.5" />
              <span>{about.journeyTitle}</span>
            </div>

            <div className="space-y-4 text-sm md:text-base text-[#94A8AB] leading-relaxed">
              {about.journeyText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Inline Download CV Link */}
            <div className="pt-2">
              <a
                href={PORTFOLIO_DATA.personal.cvPath}
                download={PORTFOLIO_DATA.personal.cvFilename}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-bright hover:text-amber transition-colors underline underline-offset-4"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Full CV (PDF) ↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
