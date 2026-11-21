import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aymen Muhammed Seid — Backend Software Engineer & Cybersecurity Practitioner',
  description:
    'Personal engineering portfolio of Aymen Muhammed Seid. Backend systems architectures, distributed offline-first sync engines, and hardened Linux infrastructure.',
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
    title: 'Aymen Muhammed Seid — Backend Software Engineer & Cybersecurity Practitioner',
    description:
      'Backend systems architectures, distributed offline-first sync engines, and hardened Linux infrastructure.',
    url: 'https://aymenmuhammed.vercel.app',
    siteName: 'Aymen Muhammed Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aymen Muhammed Seid — Backend Software Engineer',
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0B1315] text-[#F2EFE9]">
        {children}
      </body>
    </html>
  );
}
