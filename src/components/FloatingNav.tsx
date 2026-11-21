'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
      <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto">
        {/* Left: Monogram Logo */}
        <a
          href="#hero"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111D20]/90 border border-[#1E3237] backdrop-blur-md shadow-lg hover:border-mint/50 transition-colors"
        >
          <span className="w-5 h-5 rounded-md bg-gradient-to-br from-mint-bright to-amber-bright flex items-center justify-center text-[10px] font-mono font-black text-[#0B1315]">
            A
          </span>
          <span className="font-mono font-bold text-sm text-[#F2EFE9] tracking-tight">
            Aymen<span className="text-amber-bright">.</span>
          </span>
        </a>

        {/* Center: Floating Glass Pill (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 p-1.5 rounded-full bg-[#111D20]/90 border border-[#1E3237] backdrop-blur-md shadow-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? 'bg-mint text-[#0B1315] font-bold shadow-md'
                    : 'text-[#94A8AB] hover:text-[#F2EFE9] hover:bg-[#16262A]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary CTA Pill & Mobile Toggle */}
        <div className="flex items-center space-x-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-mono font-bold rounded-full bg-[#111D20] text-[#34D399] border border-mint/40 hover:border-amber-bright hover:text-amber-bright hover:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#111D20] border border-[#1E3237] text-[#F2EFE9]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-4 rounded-2xl bg-[#111D20] border border-[#1E3237] shadow-2xl pointer-events-auto space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-mono rounded-lg text-[#F2EFE9] hover:bg-[#16262A] hover:text-mint"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center px-4 py-2 text-xs font-mono font-bold rounded-lg bg-mint text-[#0B1315] mt-2"
          >
            HIRE ME ↗
          </a>
        </div>
      )}
    </header>
  );
}
