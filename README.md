# Aymen Muhammed Seid

Backend Systems Engineer & Cybersecurity Practitioner based in Addis Ababa, Ethiopia.  
B.Sc. in Information Systems at Addis Ababa University (AAU).

- **GitHub:** [@amu-muha](https://github.com/amu-muha)
- **LinkedIn:** [/in/aymen-muhammed](https://linkedin.com/in/aymen-muhammed)
- **Email:** arebumuha77@gmail.com
- **Website:** [aymenmuhammed.vercel.app](https://aymenmuhammed.vercel.app)

---

## About Me

I focus on backend systems architecture, API design, and web/infrastructure security. Most of my work centers around building services that remain reliable under real-world constraints—network volatility, high concurrency, and low latency requirements.

Engineering software in Addis Ababa gives me a practical perspective on infrastructure. When connectivity drops or bandwidth fluctuates, a backend cannot simply throw a generic 500 or assume uninterrupted cloud round-trips. That environment drove my interest in offline-first architectures, distributed sync protocols with idempotent batch reconciliation, local mutation queuing, and hardened Linux infrastructure.

On the security side, I practice both offensive analysis (vulnerability research on PortSwigger Web Security Academy, OWASP Juice Shop, and Burp Suite traffic inspection) and defensive hardening (Suricata IDS rule authoring on Ubuntu Linux, kernel tuning, and isolated container environments).

### Core Technical Focus

- **Languages:** Go, TypeScript, JavaScript (ES6+), Java, C++, Python, SQL
- **Backend & Data:** Node.js (Fastify, Express), Go (Chi, Fiber), PostgreSQL, PostGIS, Redis, SQLite, Prisma, GORM
- **Systems & Security:** Ubuntu Linux, Docker, Nginx, Suricata IDS, Burp Suite, OWASP Top 10, Git
- **Foundations:** Relational data modeling, connection pool tuning (pgx), spatial indexing (GiST), information retrieval (BSBI / TF-IDF), and algorithmic problem solving

---

## Projects Featured in the Portfolio

The projects showcased in this repository highlight specific architectural decisions and trade-offs:

1. **Go E-Commerce Backend API** ([Source](https://github.com/amu-muha/go-ecommerce-api))
   - REST API built in Go using Chi and native `pgx/v5` connection pooling.
   - Database migrations managed deterministically with Goose inside isolated transactions.
   - Redis cache-aside invalidation for product catalog reads, structured Zap logging, and RFC 7807 problem details.

2. **Veridix — AI Content Moderation Gateway** ([Source](https://github.com/amu-muha/veridix))
   - Low-latency moderation microservice built on Fastify and TypeScript.
   - Multi-layer defense against prompt injection and boundary escape attacks prior to LLM evaluation.
   - Token-bucket rate limiting, structured schema classification via Gemini, and append-only Prisma audit logging.

3. **AmpShare — P2P EV Charging Platform** ([Source](https://github.com/m3sudx/AmpShare))
   - Peer-to-peer EV charging platform addressing charger discovery hurdles in Addis Ababa.
   - PostGIS spatial indexing (`ST_DWithin`, GiST) for radial charger discovery within sub-5ms lookup windows.
   - Bidirectional WebSocket telemetry (Socket.IO) for streaming live kilowatt-hour charging sessions and a strict charging finite state machine.

4. **Habeshan REMS — Offline-First Attendance & Sync Engine** ([Source](https://github.com/amu-muha/habeshan-rems))
   - Designed for low/intermittent connectivity campus environments.
   - Client-side IndexedDB mutation queues (Dexie.js), SHA-256 device fingerprinting, and client-generated UUIDv4 idempotency tokens.
   - Idempotent Go (Fiber) backend reconciliation with conflict resolution, vector clocks, and air-gapped JSON disaster recovery exports.

---

## About This Portfolio

I built this portfolio to present technical work cleanly without the typical boxed-card templates that dominate developer websites.

### Design Choices

- **Editorial Tabular Layout:** Rather than repetitive cards, projects and lab work are laid out in high-density tabular rows separated by 1px hairline dividers (`#1E2028` dark / `#E4E4E7` light).
- **Slide-Over Architecture Drawer:** Clicking any project row opens a slide-over panel containing custom inline SVG data-flow diagrams, system performance metrics, and detailed engineering trade-offs (Decision vs. Rationale vs. Compromise).
- **Embedded Terminal (`~` or `Ctrl+K`):** A lightweight CLI modal with built-in commands (`whoami`, `projects`, `cv`, `security`, `contact`, `clear`) and history navigation.
- **Strictly Static Edge Output:** Built using Next.js (App Router) without server-side API routes, databases, or runtime backend dependencies. Everything compiles down to static HTML/JS for zero-latency Vercel Edge delivery.
- **Security Headers:** Enforced via `next.config.ts` (strict CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).

---

## Running Locally

Clone and run the project locally:

```bash
# Clone the repository
git clone https://github.com/amu-muha/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify the production build:

```bash
npm run build
npm run start
```

---

## License

MIT © [Aymen Muhammed Seid](https://github.com/amu-muha)
