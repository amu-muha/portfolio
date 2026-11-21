'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { X, CornerDownLeft } from 'lucide-react';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (index: string) => void;
}

interface CommandOutput {
  id: string;
  command: string;
  content: React.ReactNode;
}

export function TerminalDrawer({ isOpen, onClose, onSelectProject }: TerminalDrawerProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'welcome',
          command: 'init',
          content: (
            <div className="space-y-1 text-zinc-400">
              <p className="text-emerald-400 font-bold">
                Aymen Muhammed Seid — Terminal Environment v1.0.4
              </p>
              <p className="text-xs text-zinc-500">
                Type <span className="text-zinc-200 font-semibold">&apos;help&apos;</span> to inspect available commands or <span className="text-zinc-200 font-semibold">&apos;cv&apos;</span> to trigger resume download.
              </p>
            </div>
          ),
        },
      ]);
    }
  }, [history.length]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on output change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const id = Date.now().toString();

    switch (trimmed) {
      case 'help':
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="space-y-1 text-xs text-zinc-300">
                <p className="text-emerald-400 font-semibold">Available Commands:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 font-mono pt-1">
                  <div><span className="text-emerald-400">whoami</span> — Identity, engineering bio & focus</div>
                  <div><span className="text-emerald-400">projects</span> — Index of backend & distributed systems</div>
                  <div><span className="text-emerald-400">cv</span> — Trigger instant download of CV (PDF)</div>
                  <div><span className="text-emerald-400">security</span> — Offensive/defensive research & IDS lab</div>
                  <div><span className="text-emerald-400">contact</span> — Email, GitHub, LinkedIn details</div>
                  <div><span className="text-emerald-400">clear</span> — Purge terminal history</div>
                  <div><span className="text-emerald-400">exit</span> — Close terminal drawer</div>
                </div>
              </div>
            ),
          },
        ]);
        break;

      case 'whoami':
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="space-y-1.5 text-xs text-zinc-300">
                <p className="font-bold text-zinc-100">{PORTFOLIO_DATA.personal.name}</p>
                <p className="text-zinc-400">{PORTFOLIO_DATA.personal.role}</p>
                <p className="text-zinc-400">
                  Location: {PORTFOLIO_DATA.personal.location} ({PORTFOLIO_DATA.personal.timezone})
                </p>
                <p className="text-zinc-400">
                  Education: {PORTFOLIO_DATA.cv.education.degree}, {PORTFOLIO_DATA.cv.education.institution}
                </p>
                <p className="text-zinc-300 italic pt-1">&ldquo;{PORTFOLIO_DATA.personal.bio}&rdquo;</p>
              </div>
            ),
          },
        ]);
        break;

      case 'projects':
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="space-y-2.5 text-xs">
                <p className="text-emerald-400 font-semibold">Selected Backend & Systems Work:</p>
                {PORTFOLIO_DATA.projects.map((p) => (
                  <div key={p.index} className="space-y-0.5 border-l-2 border-hairline pl-2.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold">{p.index} /</span>
                      <span className="font-semibold text-zinc-200">{p.title}</span>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-zinc-400 hover:text-emerald-400 underline"
                      >
                        [GitHub ↗]
                      </a>
                    </div>
                    <p className="text-zinc-400">{p.summary}</p>
                    <p className="text-[10px] font-mono text-zinc-500">Stack: {p.stack.join(' · ')}</p>
                  </div>
                ))}
              </div>
            ),
          },
        ]);
        break;

      case 'cv':
        // Trigger download
        if (typeof window !== 'undefined') {
          const link = document.createElement('a');
          link.href = PORTFOLIO_DATA.personal.cvPath;
          link.download = PORTFOLIO_DATA.personal.cvFilename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="text-xs space-y-1">
                <p className="text-emerald-400">
                  ✓ Triggered download of &apos;{PORTFOLIO_DATA.personal.cvFilename}&apos;
                </p>
                <p className="text-zinc-400">
                  Direct Link:{' '}
                  <a
                    href={PORTFOLIO_DATA.personal.cvPath}
                    download={PORTFOLIO_DATA.personal.cvFilename}
                    className="underline text-zinc-200 hover:text-emerald-400"
                  >
                    {PORTFOLIO_DATA.personal.cvPath}
                  </a>
                </p>
              </div>
            ),
          },
        ]);
        break;

      case 'security':
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="space-y-2 text-xs">
                <p className="text-emerald-400 font-semibold">Security & Systems Lab:</p>
                <div className="space-y-1 text-zinc-300">
                  <p className="font-semibold text-zinc-200">Offensive & Defensive Security:</p>
                  <p className="text-zinc-400">
                    - Vulnerability research on PortSwigger Web Security Academy & OWASP Juice Shop
                  </p>
                  <p className="text-zinc-400">- Burp Suite traffic interception, custom match & replace rules, fuzzing</p>
                  <p className="text-zinc-400">- Suricata IDS network monitoring on Ubuntu Linux with custom signatures</p>
                  <p className="text-zinc-400">- Linux kernel hardening (/etc/sysctl.conf) & non-root Docker isolation</p>
                </div>
                <div className="space-y-1 text-zinc-300 pt-1">
                  <p className="font-semibold text-zinc-200">Algorithms & Information Retrieval:</p>
                  <p className="text-zinc-400">
                    - Vector Space Model Search Engine (BSBI, TF-IDF, Cosine Similarity on Cranfield 1400)
                  </p>
                  <p className="text-zinc-400">- High-efficiency C++ algorithmic problem-solving on LeetCode</p>
                </div>
              </div>
            ),
          },
        ]);
        break;

      case 'contact':
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <div className="space-y-1.5 text-xs text-zinc-300">
                <p className="text-emerald-400 font-semibold">Contact & Social Channels:</p>
                <p>
                  Email:{' '}
                  <a
                    href={PORTFOLIO_DATA.personal.socials.email}
                    className="text-zinc-200 hover:text-emerald-400 underline font-mono"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </p>
                <p>
                  GitHub:{' '}
                  <a
                    href={PORTFOLIO_DATA.personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-200 hover:text-emerald-400 underline font-mono"
                  >
                    {PORTFOLIO_DATA.personal.socials.github}
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a
                    href={PORTFOLIO_DATA.personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-200 hover:text-emerald-400 underline font-mono"
                  >
                    {PORTFOLIO_DATA.personal.socials.linkedin}
                  </a>
                </p>
              </div>
            ),
          },
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'exit':
      case 'quit':
        onClose();
        break;

      default:
        setHistory((prev) => [
          ...prev,
          {
            id,
            command: cmd,
            content: (
              <p className="text-xs text-red-400 font-mono">
                command not found: {cmd}. Type &apos;help&apos; for available commands.
              </p>
            ),
          },
        ]);
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < cmdHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(cmdHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Terminal Container */}
      <div className="relative z-10 w-full max-w-2xl h-[480px] bg-[#0A0B0E] border border-zinc-800 rounded-lg shadow-2xl flex flex-col font-mono overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="bg-[#12141A] border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="text-xs text-zinc-400 pl-2">aymen@systems:~ (CLI)</span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-zinc-500">
            <span className="text-[11px] font-mono hidden sm:inline">[ESC to exit]</span>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 cursor-text text-sm"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              {item.command !== 'init' && (
                <div className="flex items-center space-x-2 text-xs text-zinc-400">
                  <span className="text-emerald-400">aymen@systems:~$</span>
                  <span className="text-zinc-100">{item.command}</span>
                </div>
              )}
              <div className="pl-0">{item.content}</div>
            </div>
          ))}

          {/* Active Prompt */}
          <div className="flex items-center space-x-2 text-xs pt-1">
            <span className="text-emerald-400 shrink-0">aymen@systems:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-zinc-100 focus:outline-none caret-emerald-400 text-xs"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              onClick={() => {
                handleCommand(input);
                setInput('');
              }}
              className="text-zinc-500 hover:text-emerald-400"
              title="Execute"
            >
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

