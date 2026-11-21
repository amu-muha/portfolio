import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Aymen Muhammed Seid — Backend Systems Engineer & Cybersecurity',
  description:
    'Editorial engineering portfolio of Aymen Muhammed Seid. Backend systems architectures, distributed sync engines, and hardened Linux infrastructure.',
  keywords: [
    'Aymen Muhammed Seid',
    'Backend Engineer',
    'Cybersecurity',
    'Go',
    'Node.js',
    'PostgreSQL',
    'Addis Ababa University',
    'Distributed Systems',
  ],
  authors: [{ name: 'Aymen Muhammed Seid' }],
  creator: 'Aymen Muhammed Seid',
  metadataBase: new URL('https://aymenmuhammed.vercel.app'),
  openGraph: {
    title: 'Aymen Muhammed Seid — Backend Systems Engineer & Cybersecurity',
    description:
      'Backend systems architectures, distributed offline-first sync engines, and hardened Linux infrastructure.',
    url: 'https://aymenmuhammed.vercel.app',
    siteName: 'Aymen Muhammed Seid Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aymen Muhammed Seid — Backend Systems Engineer',
    description:
      'Resilient backend architectures, offline-first distributed sync engines, and hardened Linux infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

