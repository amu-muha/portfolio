'use client';

import React from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1315] text-[#F2EFE9] selection:bg-mint/30 selection:text-mint-bright">
      {/* Floating Glass Pill Navigation */}
      <FloatingNav />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* 3-Column Footer */}
      <FooterSection />
    </div>
  );
}
