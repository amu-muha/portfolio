'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Download, Mail, Github, Linkedin, ArrowRight, Shield, Terminal, Database, Server } from 'lucide-react';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personal.typewriterRoles;

  useEffect(() => {
    const targetRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetRole.length) {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetRole.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Engineering Dot-Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1E3237 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 45%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 45%, #000 60%, transparent 100%)',
        }}
      />

      {/* Ambient Radial Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-amber/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111D20] border border-[#1E3237] text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
            <span className="w-2 h-2 rounded-full bg-mint -ml-3" />
            <span className="text-[#94A8AB] text-[11px] tracking-wider">
              {PORTFOLIO_DATA.personal.statusBadge}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <div className="text-sm font-mono text-amber-bright tracking-wider uppercase">
              Hello 👋
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EFE9] leading-[1.1]">
              I am{' '}
              <span className="shimmer-text">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
          </div>

          {/* Live Typewriter Role Line */}
          <div className="min-h-[44px] flex items-center text-lg sm:text-xl font-mono text-[#94A8AB]">
            <span>I engineer&nbsp;</span>
            <span className="text-mint-bright font-semibold">
              {currentText}
            </span>
            <span className="text-amber-bright font-light animate-pulse">|</span>
          </div>

          <p className="text-sm sm:text-base text-[#94A8AB] max-w-xl leading-relaxed">
            {PORTFOLIO_DATA.personal.headline}
          </p>

          {/* Social Icon Row */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.socials.email}
              aria-label="Direct Email"
              className="w-10 h-10 rounded-xl bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-mint hover:border-mint/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-amber-bright hover:border-amber-bright/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-mint text-[#0B1315] font-semibold text-xs font-mono tracking-wider hover:bg-mint-bright hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.cvPath}
              download={PORTFOLIO_DATA.personal.cvFilename}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#111D20] text-[#F2EFE9] border border-[#1E3237] font-semibold text-xs font-mono tracking-wider hover:border-amber-bright/60 hover:text-amber-bright transition-all"
            >
              <Download className="w-4 h-4 text-amber-bright" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column (5 cols) - Sleek Systems Frame Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#111D20] border border-[#1E3237] p-4 shadow-2xl flex flex-col justify-between overflow-hidden group">
            {/* Top Bar with Status Indicators */}
            <div className="flex items-center justify-between border-b border-[#1E3237] pb-3">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-mint/70" />
              </div>
              <span className="text-[10px] font-mono text-[#94A8AB]">systems.aymen.local</span>
            </div>

            {/* Inner Stylized Architectural Visual Placeholder */}
            <div className="flex-1 my-4 rounded-2xl bg-[#0B1315]/80 border border-[#1E3237]/60 p-5 flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A8AB] border-b border-[#1E3237]/40 pb-2">
                <span className="flex items-center space-x-1 text-mint-bright">
                  <Server className="w-3.5 h-3.5" />
                  <span>Cluster Node 01</span>
                </span>
                <span className="text-amber-bright">ONLINE</span>
              </div>

              {/* Real-time looking metric rows */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center text-[#94A8AB]">
                  <span className="flex items-center space-x-1.5">
                    <Terminal className="w-3.5 h-3.5 text-mint" />
                    <span>Go/Fiber Engine</span>
                  </span>
                  <span className="text-[#F2EFE9] font-bold">14.8k req/s</span>
                </div>
                <div className="w-full bg-[#16262A] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-mint h-full rounded-full w-[88%]" />
                </div>

                <div className="flex justify-between items-center text-[#94A8AB] pt-1">
                  <span className="flex items-center space-x-1.5">
                    <Database className="w-3.5 h-3.5 text-[#4169E1]" />
                    <span>PostgreSQL Pool</span>
                  </span>
                  <span className="text-[#F2EFE9] font-bold">50 conns (0 idle)</span>
                </div>
                <div className="w-full bg-[#16262A] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-bright h-full rounded-full w-[64%]" />
                </div>

                <div className="flex justify-between items-center text-[#94A8AB] pt-1">
                  <span className="flex items-center space-x-1.5">
                    <Shield className="w-3.5 h-3.5 text-red-400" />
                    <span>Suricata IDS</span>
                  </span>
                  <span className="text-mint font-bold">0 Dropped</span>
                </div>
              </div>
            </div>

            {/* Bottom Floating Glass Badge */}
            <div className="px-3.5 py-2 rounded-xl bg-[#0B1315]/90 border border-[#1E3237] flex items-center justify-between text-xs font-mono text-[#94A8AB]">
              <span>BASE</span>
              <span className="text-[#F2EFE9] font-semibold">{PORTFOLIO_DATA.personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

