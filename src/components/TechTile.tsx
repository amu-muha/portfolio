'use client';

import React, { useState } from 'react';

interface TechTileProps {
  name: string;
  brandColor: string;
  iconKey?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function TechTile({ name, brandColor, iconKey, size = 'md' }: TechTileProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-lg text-xs',
    md: 'w-[52px] h-[52px] rounded-xl text-sm',
    lg: 'w-16 h-16 rounded-2xl text-base',
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 30,
  };

  return (
    <div
      className="relative flex items-center justify-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`${sizeClasses[size]} tactile-tile flex items-center justify-center cursor-pointer select-none`}
        style={{
          borderColor: '#1E3237',
        }}
      >
        {renderIcon(iconKey || name.toLowerCase(), brandColor, iconSizes[size])}
      </div>

      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="absolute -bottom-8 z-30 px-2 py-1 text-[11px] font-mono rounded bg-[#111D20] text-[#F2EFE9] border border-[#1E3237] shadow-lg whitespace-nowrap pointer-events-none animate-fade-in">
          {name}
        </div>
      )}
    </div>
  );
}

function renderIcon(key: string, brandColor: string, size: number) {
  const k = key.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Brand-colored vector glyphs for technology stacks
  if (k.includes('go')) {
    return (
      <span className="font-mono font-black text-sm tracking-tighter" style={{ color: brandColor }}>
        GO
      </span>
    );
  }

  if (k.includes('typescript') || k === 'ts') {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        TS
      </span>
    );
  }

  if (k.includes('javascript') || k === 'js') {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        JS
      </span>
    );
  }

  if (k.includes('java')) {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        JAVA
      </span>
    );
  }

  if (k.includes('cpp') || k.includes('c++')) {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        C++
      </span>
    );
  }

  if (k.includes('python')) {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        PY
      </span>
    );
  }

  if (k.includes('sql') || k.includes('sqlite')) {
    return (
      <span className="font-mono font-bold text-[10px]" style={{ color: brandColor }}>
        SQL
      </span>
    );
  }

  if (k.includes('postgres') || k.includes('postgis')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    );
  }

  if (k.includes('redis')) {
    return (
      <span className="font-mono font-bold text-[11px]" style={{ color: brandColor }}>
        RDS
      </span>
    );
  }

  if (k.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 13c-.5-1.5-2-2-3-2-.5 0-1 .2-1.5.5A7 7 0 0 0 3 13c0 4.4 3.6 8 8 8 5.5 0 9.8-3.6 11-8z" />
        <path d="M6 9h3v3H6z" />
        <path d="M10 9h3v3h-3z" />
        <path d="M14 9h3v3h-3z" />
      </svg>
    );
  }

  if (k.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m9 10 2 2-2 2" />
        <path d="M13 14h2" />
      </svg>
    );
  }

  if (k.includes('suricata') || k.includes('ids') || k.includes('security')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  if (k.includes('burp')) {
    return (
      <span className="font-mono font-bold text-[11px]" style={{ color: brandColor }}>
        BURP
      </span>
    );
  }

  if (k.includes('node')) {
    return (
      <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
        NODE
      </span>
    );
  }

  if (k.includes('fastify')) {
    return (
      <span className="font-mono font-black text-xs text-[#34D399]">
        FAST
      </span>
    );
  }

  if (k.includes('socket')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }

  if (k.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill={brandColor} />
      </svg>
    );
  }

  if (k.includes('next')) {
    return (
      <span className="font-mono font-bold text-xs text-[#F2EFE9]">
        NXT
      </span>
    );
  }

  if (k.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    );
  }

  // Default fallback monogram
  const initials = key.slice(0, 3).toUpperCase();
  return (
    <span className="font-mono font-bold text-xs" style={{ color: brandColor }}>
      {initials}
    </span>
  );
}
