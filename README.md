# Aymen Muhammed Seid — Engineering Portfolio

> Editorial software engineering portfolio for **Aymen Muhammed Seid**, Backend Systems Engineer & Cybersecurity Practitioner based in Addis Ababa, Ethiopia.

Designed with a modern editorial layout inspired by high-signal engineering portfolios (`leerob.com`, `paco.me`, `rauno.me`). Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, optimized for pure static edge deployment on **Vercel**.

---

## ⚡ Architectural Highlights

- **Strictly No Card Grids:** High-signal editorial layout structured with crisp `1px` hairline dividers (`#1E2028` dark / `#E4E4E7` light) and full-width interactive tabular rows.
- **Slide-Over Architecture Drawer:** Clicking any project row opens a right-side drawer containing inline SVG system data-flow diagrams, architectural trade-offs, and deep-dive technical narratives.
- **Interactive Terminal Environment (`~` or `Ctrl+K`):** Keyboard-accessible CLI modal supporting `whoami`, `projects`, `cv` (triggers instant PDF download), `security`, `contact`, and `clear`.
- **Refined Obsidian Dark / Light Theme:** Obsidian dark mode (`#09090B` background, `#F4F4F5` text, `#8E929F` muted slate, `#10B981` emerald accent) with instant toggle and zero flash of unstyled content.
- **Hardened Security Headers:** Strict Content Security Policy (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and disabled `x-powered-by` header.
- **Centralized Metadata Configuration (`src/data/portfolio.ts`):** Single point of configuration for personal details, projects, tech stacks, and credentials.
- **Pure Static / Edge Frontend:** Zero backend servers, databases, or API routes. Ready for instant deployment on Vercel or Cloudflare Pages.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Pre-Rendering)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter & JetBrains Mono

---

## 📁 Project Structure

```text
├── public/
│   └── Aymen_Muhammed_Seid_CV.pdf    # Direct downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css               # Hairline utility classes & dark/light CSS variables
│   │   ├── layout.tsx                # Metadata, SEO tags & ThemeProvider
│   │   └── page.tsx                  # Single-column editorial page
│   ├── components/
│   │   ├── ArchitectureDrawer.tsx    # Slide-over right drawer with custom inline SVGs
│   │   ├── CVSection.tsx             # Education, hackathon wins & categorized skills
│   │   ├── Footer.tsx                # Contact row, mailto, copy email & timezone status
│   │   ├── Hero.tsx                  # Editorial bio, identity & primary action triggers
│   │   ├── Navigation.tsx            # Sticky header, availability pulse, anchor links & theme toggle
│   │   ├── ProjectRow.tsx            # Full-width interactive project rows (no cards)
│   │   ├── SecurityLab.tsx           # 2-column offensive/defensive & algorithms lab
│   │   ├── TerminalDrawer.tsx        # Keyboard-accessible CLI (~ or Ctrl+K)
│   │   └── ThemeProvider.tsx         # Dark/Light theme state & local storage persistence
│   └── data/
│       └── portfolio.ts              # Centralized portfolio data, projects, & credentials
├── next.config.ts                    # Strict security headers & Next.js config
├── tailwind.config.ts                # Obsidian palette & animation keyframes
├── tsconfig.json                     # Strict TypeScript compiler options
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+` or `v20+` (tested with v24)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/amu-muha/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static distribution
npm run build

# Start production preview server
npm run start
```

---

## 🌐 Deploy to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/amu-muha/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. The default Next.js build settings (`npm run build`, output `.next`) will automatically detect the static export and deploy to the global edge network.

---

## 📄 License

MIT © [Aymen Muhammed Seid](https://github.com/amu-muha)
