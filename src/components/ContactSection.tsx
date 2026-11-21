'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, MapPin, Copy, Check, ExternalLink, Download, Send } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Construct mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Vision:\n${message}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Section Headline */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-amber-bright uppercase">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-emerald-amber">
            Let&apos;s Start a Conversation.
          </h2>
          <p className="text-base md:text-lg text-[#94A8AB] max-w-xl leading-relaxed">
            {PORTFOLIO_DATA.contact.pitch}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Blocks */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Communication Block */}
            <div className="p-6 rounded-2xl bg-[#111D20] border border-[#1E3237] space-y-3 shadow-xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-mint-bright">
                <Mail className="w-4 h-4" />
                <span>DIRECT COMMUNICATION</span>
              </div>
              <div className="text-sm md:text-base font-mono text-[#F2EFE9] break-all">
                {PORTFOLIO_DATA.personal.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-xs font-mono text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-mint" />
                    <span className="text-mint">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Base of Operations Block */}
            <div className="p-6 rounded-2xl bg-[#111D20] border border-[#1E3237] space-y-2 shadow-xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-amber-bright">
                <MapPin className="w-4 h-4" />
                <span>BASE OF OPERATIONS</span>
              </div>
              <div className="text-sm font-mono text-[#F2EFE9]">
                {PORTFOLIO_DATA.contact.base}
              </div>
              <div className="text-xs text-[#94A8AB]">
                Addis Ababa University (AAU) · UTC+3 Timezone
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-2xl bg-[#111D20] border border-[#1E3237] space-y-3 shadow-xl">
              <span className="text-xs font-mono text-[#94A8AB]">NETWORK CHANNELS</span>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-[#94A8AB] hover:text-mint hover:border-mint/50 transition-all flex items-center space-x-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-[#94A8AB] hover:text-amber-bright hover:border-amber-bright/50 transition-all flex items-center space-x-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.cvPath}
                  download={PORTFOLIO_DATA.personal.cvFilename}
                  className="px-3 py-1.5 rounded-lg bg-[#0B1315] border border-[#1E3237] text-[#94A8AB] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all flex items-center space-x-1"
                >
                  <span>Download CV</span>
                  <Download className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tinted Slate-Glass Transmission Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-[#111D20] border border-[#1E3237] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold tracking-wider text-mint-bright">
                  IDENTITY / YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Linus Torvalds"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1315] border border-[#1E3237] text-sm text-[#F2EFE9] placeholder-[#94A8AB]/50 focus:outline-none focus:border-mint transition-colors font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold tracking-wider text-amber-bright">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1315] border border-[#1E3237] text-sm text-[#F2EFE9] placeholder-[#94A8AB]/50 focus:outline-none focus:border-amber-bright transition-colors font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold tracking-wider text-[#94A8AB]">
                  PROJECT VISION / OBJECTIVE
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your backend architecture, security review, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1315] border border-[#1E3237] text-sm text-[#F2EFE9] placeholder-[#94A8AB]/50 focus:outline-none focus:border-mint transition-colors resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-mint text-[#0B1315] font-bold text-xs font-mono tracking-wider hover:bg-mint-bright transition-all shadow-[0_0_20px_rgba(52,211,153,0.25)] flex items-center justify-center space-x-2"
              >
                <span>{submitted ? 'TRANSMISSION INITIALIZED ✓' : 'INITIALIZE TRANSMISSION ➤'}</span>
                {!submitted && <Send className="w-3.5 h-3.5" />}
              </button>

              <div className="text-[11px] font-mono text-[#94A8AB] text-center pt-1">
                Zero telemetry · Directly dispatches to default email client
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
