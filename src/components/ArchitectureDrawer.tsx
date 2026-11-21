'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolio';
import { X, GitBranch, ExternalLink, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

interface ArchitectureDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export function ArchitectureDrawer({ project, onClose }: ArchitectureDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
      />

      {/* Slide-over panel */}
      <div className="relative z-10 w-full max-w-2xl h-full bg-white dark:bg-[#0D0E12] border-l border-hairline shadow-2xl overflow-y-auto transition-transform duration-300">
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-[#0D0E12]/90 border-b border-hairline px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {project.index} // ARCHITECTURE
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded border border-hairline text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            title="Close Drawer (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title & Overview */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
              {project.subtitle}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2">
              {project.architecture.deepDive}
            </p>
          </div>

          {/* Quick External Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono rounded border border-hairline bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Inspect Source Repository ↗</span>
            </a>

            {project.projectUrl && project.projectUrl !== '#' && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono rounded border border-hairline bg-white dark:bg-obsidian-surface text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                <span>Documentation / Spec ↗</span>
              </a>
            )}
          </div>

          {/* Performance Benchmarks if available */}
          {project.architecture.benchmarks && (
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Verified System Metrics
              </span>
              <div className="grid grid-cols-3 gap-2">
                {project.architecture.benchmarks.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded border border-hairline bg-zinc-50 dark:bg-[#13151B]"
                  >
                    <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                      {b.label}
                    </div>
                    <div className="text-sm md:text-base font-mono font-bold text-zinc-900 dark:text-zinc-100 pt-0.5">
                      {b.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inline SVG System Architecture Diagram */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                <span>System Architecture Data Flow</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                SVG Flow Simulation
              </span>
            </div>

            <div className="p-4 md:p-6 rounded-lg border border-hairline bg-zinc-50/80 dark:bg-[#111318] overflow-x-auto">
              {renderArchitectureSvg(project.index)}
            </div>
          </div>

          {/* Key Engineering Trade-offs */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Key Engineering Trade-offs
              </h3>
            </div>

            <div className="space-y-4">
              {project.architecture.tradeOffs.map((trade, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded border border-hairline bg-white dark:bg-obsidian-surface space-y-2.5 text-xs"
                >
                  <div className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 flex items-center space-x-1.5">
                    <span className="text-emerald-500 font-bold">#0{idx + 1}</span>
                    <span>{trade.decision}</span>
                  </div>

                  <div className="space-y-1.5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <div>
                      <strong className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                        Rationale:&nbsp;
                      </strong>
                      {trade.rationale}
                    </div>
                    <div>
                      <strong className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300">
                        Compromise:&nbsp;
                      </strong>
                      {trade.compromise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Architectural Highlights
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Breakdown */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded border border-hairline bg-zinc-100 dark:bg-obsidian-surface text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to render custom, crisp SVGs tailored to each project's flow
function renderArchitectureSvg(projectIndex: string) {
  if (projectIndex === '01') {
    // Go E-Commerce API
    return (
      <svg
        viewBox="0 0 540 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-zinc-900 dark:text-zinc-100"
      >
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
          </marker>
        </defs>

        {/* Client Box */}
        <rect x="15" y="85" width="90" height="50" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="60" y="108" textAnchor="middle" className="text-[10px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">HTTP/2 Clients</text>
        <text x="60" y="122" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Web / Mobile</text>

        {/* Arrow to Router */}
        <path d="M 105 110 L 145 110" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />
        <text x="125" y="103" textAnchor="middle" className="text-[8px] font-mono fill-emerald-500">JSON</text>

        {/* Chi Gateway Box */}
        <rect x="150" y="70" width="105" height="80" rx="6" className="stroke-emerald-500" fill="url(#g1)" strokeWidth="1.5" />
        <text x="202" y="94" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-500">Chi Gateway</text>
        <text x="202" y="108" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">Rate Limiter</text>
        <text x="202" y="122" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">JWT & Zap Logger</text>
        <text x="202" y="136" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">RFC 7807 Errors</text>

        {/* Arrow to Domain */}
        <path d="M 255 110 L 295 110" stroke="#10B981" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Domain Engine */}
        <rect x="300" y="75" width="100" height="70" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="350" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">Go Services</text>
        <text x="350" y="112" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Orders & Stock</text>
        <text x="350" y="126" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Row Locks (Tx)</text>

        {/* Branch Up to Redis */}
        <path d="M 370 75 L 370 45 L 435 45" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <rect x="440" y="20" width="90" height="48" rx="6" className="stroke-red-400/80" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="485" y="42" textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-400">Redis 7</text>
        <text x="485" y="55" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Cache-Aside TTL</text>

        {/* Branch Down to PostgreSQL */}
        <path d="M 370 145 L 370 175 L 435 175" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <rect x="440" y="150" width="90" height="50" rx="6" className="stroke-blue-400/80" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="485" y="172" textAnchor="middle" className="text-[9px] font-mono font-bold fill-blue-400">PostgreSQL 16</text>
        <text x="485" y="185" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">pgxpool Conns: 50</text>
      </svg>
    );
  }

  if (projectIndex === '02') {
    // Veridix
    return (
      <svg
        viewBox="0 0 540 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-zinc-900 dark:text-zinc-100"
      >
        <defs>
          <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
          </marker>
        </defs>

        <rect x="10" y="85" width="85" height="50" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="52" y="108" textAnchor="middle" className="text-[9px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">UGC Ingestion</text>
        <text x="52" y="121" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Untrusted Input</text>

        <path d="M 95 110 L 130 110" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow2)" />

        <rect x="135" y="75" width="100" height="70" rx="6" className="stroke-emerald-500" fill="currentColor" fillOpacity="0.08" strokeWidth="1.5" />
        <text x="185" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-500">Fastify Core</text>
        <text x="185" y="112" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">Token-Bucket Rate</text>
        <text x="185" y="125" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">Fast JSON Schema</text>

        <path d="M 235 110 L 270 110" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow2)" />

        <rect x="275" y="70" width="115" height="80" rx="6" className="stroke-amber-500/80" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="332" y="93" textAnchor="middle" className="text-[9px] font-mono font-bold fill-amber-500">Injection Defense</text>
        <text x="332" y="107" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Heuristic Sanitizer</text>
        <text x="332" y="121" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Boundary Escapes</text>
        <text x="332" y="135" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Prompt Extraction</text>

        <path d="M 390 95 L 430 65" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow2)" />
        <rect x="435" y="30" width="95" height="52" rx="6" className="stroke-purple-400" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="482" y="52" textAnchor="middle" className="text-[9px] font-mono font-bold fill-purple-400">Gemini 1.5</text>
        <text x="482" y="65" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Structured Safety</text>

        <path d="M 390 125 L 430 155" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow2)" />
        <rect x="435" y="138" width="95" height="52" rx="6" className="stroke-cyan-400" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="482" y="160" textAnchor="middle" className="text-[9px] font-mono font-bold fill-cyan-400">Prisma Audit</text>
        <text x="482" y="173" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Async Tamper Log</text>
      </svg>
    );
  }

  if (projectIndex === '03') {
    // AmpShare
    return (
      <svg
        viewBox="0 0 540 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-zinc-900 dark:text-zinc-100"
      >
        <defs>
          <marker id="arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
          </marker>
        </defs>

        <rect x="15" y="40" width="95" height="50" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="62" y="62" textAnchor="middle" className="text-[9px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">EV Driver</text>
        <text x="62" y="76" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Spatial Search</text>

        <rect x="15" y="130" width="95" height="50" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="62" y="152" textAnchor="middle" className="text-[9px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">Host Station</text>
        <text x="62" y="166" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Hardware Telemetry</text>

        <path d="M 110 65 L 165 95" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow3)" />
        <path d="M 110 155 L 165 125" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow3)" />

        <rect x="170" y="70" width="130" height="80" rx="6" className="stroke-emerald-500" fill="currentColor" fillOpacity="0.08" strokeWidth="1.5" />
        <text x="235" y="93" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-500">Express + Socket.IO</text>
        <text x="235" y="107" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">Charging FSM Engine</text>
        <text x="235" y="121" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">JWT Role Auth (Driver/Host)</text>
        <text x="235" y="135" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">WebSocket Dispatcher</text>

        <path d="M 300 110 L 350 110" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow3)" />

        <rect x="355" y="65" width="165" height="90" rx="6" className="stroke-blue-400" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
        <text x="437" y="88" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-400">PostgreSQL + PostGIS</text>
        <text x="437" y="103" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">ST_DWithin GiST Indexes</text>
        <text x="437" y="118" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Radial Proximity Queries</text>
        <text x="437" y="133" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Append-Only Energy Ledger</text>
      </svg>
    );
  }

  // Project 04 - Habeshan REMS
  return (
    <svg
      viewBox="0 0 540 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto text-zinc-900 dark:text-zinc-100"
    >
      <defs>
        <marker id="arrow4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
        </marker>
      </defs>

      <rect x="15" y="70" width="115" height="80" rx="6" className="stroke-emerald-500" fill="currentColor" fillOpacity="0.08" strokeWidth="1.5" />
      <text x="72" y="93" textAnchor="middle" className="text-[9px] font-mono font-bold fill-emerald-500">React Offline PWA</text>
      <text x="72" y="107" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">Dexie.js IndexedDB</text>
      <text x="72" y="121" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">SHA-256 Fingerprint</text>
      <text x="72" y="135" textAnchor="middle" className="text-[8px] font-mono fill-zinc-700 dark:fill-zinc-300">UUIDv4 Mutation Queue</text>

      <path d="M 130 110 L 175 110" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#arrow4)" />
      <text x="152" y="102" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Batch Sync</text>

      <rect x="180" y="75" width="120" height="70" rx="6" className="stroke-zinc-400 dark:stroke-zinc-700" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
      <text x="240" y="98" textAnchor="middle" className="text-[9px] font-mono font-bold fill-zinc-800 dark:fill-zinc-200">Go (Fiber) Ingestion</text>
      <text x="240" y="112" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Idempotency Filter</text>
      <text x="240" y="126" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Batch Gzip Handler</text>

      <path d="M 300 110 L 345 110" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow4)" />

      <rect x="350" y="65" width="165" height="90" rx="6" className="stroke-blue-400" fill="currentColor" fillOpacity="0.05" strokeWidth="1.2" />
      <text x="432" y="88" textAnchor="middle" className="text-[10px] font-mono font-bold fill-blue-400">PostgreSQL + GORM</text>
      <text x="432" y="103" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Vector Clock Arbitrator</text>
      <text x="432" y="118" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Atomic Attendance Ledger</text>
      <text x="432" y="133" textAnchor="middle" className="text-[8px] font-mono fill-zinc-500">Air-Gapped Backup Importer</text>
    </svg>
  );
}

