'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Terminal as TerminalIcon } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal: () => void;
}

export function Navigation({ onOpenTerminal }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/70 dark:bg-[#09090B]/80 border-b border-hairline transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Identity & Availability */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="font-mono text-sm tracking-tight font-semibold text-editorial-lightText dark:text-zinc-100 hover:text-emerald-500 transition-colors"
          >
            {PORTFOLIO_DATA.personal.handle}
          </a>
          <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">/</span>
          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono tracking-tight text-[11px] text-zinc-500 dark:text-zinc-400">
              {PORTFOLIO_DATA.personal.statusText}
            </span>
          </div>
        </div>

        {/* Right: Anchor links, CLI trigger, Theme toggle */}
        <div className="flex items-center space-x-5 text-sm">
          <nav className="hidden md:flex items-center space-x-4 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            <a
              href="#work"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Work
            </a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <a
              href="#cv"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              CV
            </a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <a
              href="#security"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Security
            </a>
            <span className="text-zinc-300 dark:text-zinc-800">·</span>
            <a
              href="#contact"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Interactive CLI Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono rounded border border-hairline bg-zinc-100 dark:bg-obsidian-surface hover:border-emerald-500/50 hover:text-emerald-500 text-zinc-700 dark:text-zinc-300 transition-all duration-150"
            title="Open Interactive Terminal (~ or Ctrl+K)"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-semibold">[ ~ CLI ]</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark / Light Theme"
            className="p-1.5 rounded border border-hairline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

