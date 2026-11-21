'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Github, Linkedin, Download, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E3237] bg-[#0B1315] pt-16 pb-12 text-[#94A8AB]">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-mono font-bold text-lg text-[#F2EFE9]">
              Aymen Muhammed<span className="text-amber-bright">.</span>
            </div>
            <p className="text-xs text-[#94A8AB] leading-relaxed max-w-sm">
              Architecting resilient backend systems and secure infrastructure with engineering precision.
            </p>

            {/* Square Social Buttons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-amber-bright hover:border-amber-bright/50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.email}
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.cvPath}
                download={PORTFOLIO_DATA.personal.cvFilename}
                aria-label="Download CV"
                className="w-8 h-8 rounded-lg bg-[#111D20] border border-[#1E3237] flex items-center justify-center text-[#94A8AB] hover:text-amber-bright hover:border-amber-bright/50 transition-colors"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-bold text-[#F2EFE9] tracking-wider uppercase">
              NAVIGATION
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-mint transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-mint transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-mint transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-mint transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-mint transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-bold text-[#F2EFE9] tracking-wider uppercase">
              GET IN TOUCH
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-[#94A8AB] block text-[10px]">EMAIL ME:</span>
                <a
                  href={PORTFOLIO_DATA.personal.socials.email}
                  className="text-mint-bright hover:underline break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              <div>
                <span className="text-[#94A8AB] block text-[10px]">LOCATED IN:</span>
                <span className="text-[#F2EFE9]">Addis Ababa, Ethiopia (UTC+3)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E3237] flex items-center justify-between text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Aymen Muhammed Seid.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#111D20] border border-[#1E3237] text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
