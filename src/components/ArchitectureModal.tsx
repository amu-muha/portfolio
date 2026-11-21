'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolio';
import { X, GitBranch, ExternalLink, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#08080F]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#111D20] border border-[#1E3237] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#F2EFE9]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#1E3237] bg-[#111D20]/95 backdrop-blur-md flex items-center justify-between select-none">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-mint-bright">
              {project.index} // ARCHITECTURAL SPECIFICATION
            </span>
            <span className="text-[#94A8AB]">·</span>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded border border-mint/30 text-mint-bright bg-mint/10">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#1E3237] text-[#94A8AB] hover:text-[#F2EFE9] hover:border-mint/50 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Title & Overview */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F2EFE9]">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-amber-bright">
              {project.subtitle}
            </p>
            <p className="text-sm text-[#94A8AB] leading-relaxed pt-1">
              {project.architecture.deepDive}
            </p>
          </div>

          {/* Direct Action Triggers */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono rounded-xl bg-mint text-[#0B1315] font-bold hover:bg-mint-bright transition-all"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Inspect Source Code ↗</span>
            </a>

            {project.projectUrl && project.projectUrl !== '#' && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono rounded-xl bg-[#0B1315] text-[#F2EFE9] border border-[#1E3237] hover:border-amber-bright hover:text-amber-bright transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-bright" />
                <span>Architecture Spec / Docs ↗</span>
              </a>
            )}
          </div>

          {/* Benchmarks if present */}
          {project.architecture.benchmarks && (
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A8AB]">
                Verified Performance Benchmarks
              </span>
              <div className="grid grid-cols-3 gap-3">
                {project.architecture.benchmarks.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-[#1E3237] bg-[#0B1315]"
                  >
                    <div className="text-[10px] font-mono text-[#94A8AB] truncate">
                      {b.label}
                    </div>
                    <div className="text-sm md:text-base font-mono font-bold text-mint-bright pt-0.5">
                      {b.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inline SVG Data Flow Simulation */}
          <div className="space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-mono text-mint-bright">
              <Cpu className="w-3.5 h-3.5" />
              <span>System Data-Flow Pipeline (SVG)</span>
            </div>
            <div className="p-4 rounded-xl border border-[#1E3237] bg-[#0B1315] overflow-x-auto">
              {renderNordicArchitectureSvg(project.index)}
            </div>
          </div>

          {/* Key Engineering Trade-offs */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-bright" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F2EFE9]">
                Architectural Trade-offs & Decisions
              </h3>
            </div>

            <div className="space-y-3">
              {project.architecture.tradeOffs.map((trade, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#1E3237] bg-[#0B1315] space-y-2 text-xs"
                >
                  <div className="font-mono font-semibold text-[#F2EFE9] flex items-center space-x-1.5">
                    <span className="text-amber-bright font-bold">#0{idx + 1}</span>
                    <span>{trade.decision}</span>
                  </div>
                  <div className="space-y-1 text-[#94A8AB] leading-relaxed">
                    <div>
                      <strong className="text-mint-bright font-mono text-[11px]">Rationale:&nbsp;</strong>
                      {trade.rationale}
                    </div>
                    <div>
                      <strong className="text-amber-bright font-mono text-[11px]">Compromise:&nbsp;</strong>
                      {trade.compromise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A8AB]">
              Key Highlights
            </span>
            <ul className="space-y-1.5 text-xs text-[#94A8AB]">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-mint-bright shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderNordicArchitectureSvg(projectIndex: string) {
  if (projectIndex === '01') {
    return (
      <svg viewBox="0 0 540 200" fill="none" className="w-full h-auto">
        <rect x="15" y="75" width="85" height="50" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
        <text x="57" y="98" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace">Clients</text>
        <text x="57" y="112" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">REST HTTP/2</text>

        <path d="M 100 100 L 145 100" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="122" y="93" textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="monospace">JSON</text>

        <rect x="150" y="60" width="105" height="80" rx="8" stroke="#10B981" fill="#111D20" strokeWidth="1.5" />
        <text x="202" y="85" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">Chi Router</text>
        <text x="202" y="100" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Rate Limiter</text>
        <text x="202" y="114" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">JWT & Zap Log</text>
        <text x="202" y="128" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">RFC 7807 Errors</text>

        <path d="M 255 100 L 300 100" stroke="#10B981" strokeWidth="1.5" />

        <rect x="305" y="70" width="95" height="60" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
        <text x="352" y="95" textAnchor="middle" fill="#F2EFE9" fontSize="10" fontFamily="monospace">Go Engine</text>
        <text x="352" y="110" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Orders & Stock</text>

        <path d="M 370 70 L 370 40 L 435 40" stroke="#FBBF24" strokeWidth="1.2" />
        <rect x="440" y="18" width="85" height="45" rx="6" stroke="#F59E0B" fill="#111D20" strokeWidth="1.2" />
        <text x="482" y="38" textAnchor="middle" fill="#FBBF24" fontSize="9" fontFamily="monospace" fontWeight="bold">Redis 7</text>
        <text x="482" y="52" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Cache-Aside TTL</text>

        <path d="M 370 130 L 370 160 L 435 160" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="440" y="140" width="85" height="45" rx="6" stroke="#38BDF8" fill="#111D20" strokeWidth="1.2" />
        <text x="482" y="160" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">PostgreSQL 16</text>
        <text x="482" y="174" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">pgxpool Conns: 50</text>
      </svg>
    );
  }

  if (projectIndex === '02') {
    return (
      <svg viewBox="0 0 540 200" fill="none" className="w-full h-auto">
        <rect x="15" y="75" width="85" height="50" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
        <text x="57" y="98" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace">UGC Content</text>
        <text x="57" y="112" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Inbound Input</text>

        <path d="M 100 100 L 140 100" stroke="#10B981" strokeWidth="1.5" />

        <rect x="145" y="65" width="100" height="70" rx="6" stroke="#10B981" fill="#111D20" strokeWidth="1.5" />
        <text x="195" y="90" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">Fastify Gateway</text>
        <text x="195" y="105" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Token-Bucket Rate</text>
        <text x="195" y="119" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">ajv Schema Valid</text>

        <path d="M 245 100 L 285 100" stroke="#FBBF24" strokeWidth="1.5" />

        <rect x="290" y="60" width="115" height="80" rx="6" stroke="#F59E0B" fill="#111D20" strokeWidth="1.2" />
        <text x="347" y="85" textAnchor="middle" fill="#FBBF24" fontSize="9" fontFamily="monospace" fontWeight="bold">Injection Defense</text>
        <text x="347" y="100" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Heuristic Filter</text>
        <text x="347" y="114" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Boundary Escapes</text>
        <text x="347" y="128" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Prompt Extraction</text>

        <path d="M 405 85 L 440 55" stroke="#10B981" strokeWidth="1.2" />
        <rect x="445" y="30" width="85" height="45" rx="6" stroke="#A78BFA" fill="#111D20" strokeWidth="1.2" />
        <text x="487" y="50" textAnchor="middle" fill="#A78BFA" fontSize="9" fontFamily="monospace" fontWeight="bold">Gemini 1.5</text>
        <text x="487" y="64" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Structured JSON</text>

        <path d="M 405 115 L 440 145" stroke="#38BDF8" strokeWidth="1.2" />
        <rect x="445" y="125" width="85" height="45" rx="6" stroke="#38BDF8" fill="#111D20" strokeWidth="1.2" />
        <text x="487" y="145" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">Prisma Audit</text>
        <text x="487" y="159" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Async Tamper Log</text>
      </svg>
    );
  }

  if (projectIndex === '03') {
    return (
      <svg viewBox="0 0 540 200" fill="none" className="w-full h-auto">
        <rect x="15" y="35" width="95" height="45" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
        <text x="62" y="55" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace">EV Driver</text>
        <text x="62" y="69" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Spatial Search</text>

        <rect x="15" y="120" width="95" height="45" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
        <text x="62" y="140" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace">Host Station</text>
        <text x="62" y="154" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Live Telemetry</text>

        <path d="M 110 58 L 165 85" stroke="#10B981" strokeWidth="1.2" />
        <path d="M 110 142 L 165 115" stroke="#FBBF24" strokeWidth="1.2" />

        <rect x="170" y="65" width="130" height="70" rx="8" stroke="#10B981" fill="#111D20" strokeWidth="1.5" />
        <text x="235" y="88" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">Express + Socket.IO</text>
        <text x="235" y="102" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Charging FSM Engine</text>
        <text x="235" y="116" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Role Auth & Dispatch</text>

        <path d="M 300 100 L 350 100" stroke="#38BDF8" strokeWidth="1.5" />

        <rect x="355" y="55" width="165" height="90" rx="6" stroke="#38BDF8" fill="#111D20" strokeWidth="1.2" />
        <text x="437" y="78" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">PostgreSQL + PostGIS</text>
        <text x="437" y="93" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">ST_DWithin GiST Indexes</text>
        <text x="437" y="108" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Radial Proximity Queries</text>
        <text x="437" y="123" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Append-Only Energy Ledger</text>
      </svg>
    );
  }

  // 04 - Habeshan REMS
  return (
    <svg viewBox="0 0 540 200" fill="none" className="w-full h-auto">
      <rect x="15" y="60" width="115" height="80" rx="6" stroke="#10B981" fill="#111D20" strokeWidth="1.5" />
      <text x="72" y="83" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace" fontWeight="bold">React Offline PWA</text>
      <text x="72" y="97" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Dexie.js IndexedDB</text>
      <text x="72" y="111" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">SHA-256 Fingerprint</text>
      <text x="72" y="125" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">UUIDv4 Mutation Queue</text>

      <path d="M 130 100 L 175 100" stroke="#FBBF24" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="152" y="93" textAnchor="middle" fill="#FBBF24" fontSize="8" fontFamily="monospace">Batch Sync</text>

      <rect x="180" y="65" width="120" height="70" rx="6" stroke="#1E3237" fill="#111D20" strokeWidth="1.2" />
      <text x="240" y="88" textAnchor="middle" fill="#F2EFE9" fontSize="9" fontFamily="monospace" fontWeight="bold">Go (Fiber) API</text>
      <text x="240" y="102" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Idempotency Filter</text>
      <text x="240" y="116" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Batch Gzip Handler</text>

      <path d="M 300 100 L 345 100" stroke="#38BDF8" strokeWidth="1.5" />

      <rect x="350" y="55" width="165" height="90" rx="6" stroke="#38BDF8" fill="#111D20" strokeWidth="1.2" />
      <text x="432" y="78" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">PostgreSQL + GORM</text>
      <text x="432" y="93" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Vector Clock Arbitrator</text>
      <text x="432" y="108" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Atomic Attendance Ledger</text>
      <text x="432" y="123" textAnchor="middle" fill="#94A8AB" fontSize="8" fontFamily="monospace">Air-Gapped Backup Importer</text>
    </svg>
  );
}

