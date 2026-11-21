export interface ProjectArchitecture {
  nodes: { id: string; label: string; role: string; type: 'client' | 'service' | 'db' | 'cache' | 'gateway' | 'worker' }[];
  flows: { from: string; to: string; label: string; protocol?: string }[];
  tradeOffs: {
    decision: string;
    rationale: string;
    compromise: string;
  }[];
  deepDive: string;
  benchmarks?: { label: string; value: string }[];
}

export interface Project {
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  projectUrl: string; // can be '#' or docs link
  architecture: ProjectArchitecture;
}

export interface CVExperience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Aymen Muhammed Seid",
    handle: "aymen.muhammed",
    role: "Backend Systems Engineer · API Architecture · Cybersecurity",
    headline: "Resilient backend architectures, offline-first distributed sync engines, and hardened Linux infrastructure.",
    location: "Addis Ababa, Ethiopia",
    timezone: "UTC+3",
    statusText: "Available for Backend & Security Roles",
    bio: "I design and build resilient backend architectures, offline-first distributed sync engines, and hardened Linux infrastructure. Focused on Go, Node.js, Java, PostgreSQL, and offensive/defensive web security.",
    email: "arebumuha77@gmail.com",
    cvFilename: "Aymen_Muhammed_Seid_CV.pdf",
    cvPath: "/Aymen_Muhammed_Seid_CV.pdf",
    socials: {
      github: "https://github.com/amu-muha",
      linkedin: "https://linkedin.com/in/aymen-muhammed",
      email: "mailto:arebumuha77@gmail.com",
    },
  },

  projects: [
    {
      index: "01",
      title: "Go E-Commerce Backend API",
      subtitle: "High-Throughput Distributed REST Commerce Engine",
      category: "Backend & Systems",
      status: "Production Ready",
      summary: "High-throughput REST commerce engine featuring pgx connection pooling, versioned Goose migrations, Redis cache-aside invalidation, and OpenAPI/Swagger documentation.",
      highlights: [
        "Configured robust pgx connection pool tuning (MaxConns: 50, MinConns: 10, MaxConnIdleTime: 5m) eliminating starvation during peak spikes",
        "Deterministic schema evolution with Goose versioned migrations executing within isolated transactions",
        "Sub-millisecond read path with Redis cache-aside caching pattern and atomic TTL expiration",
        "Structured logging with zap and RFC 7807 compliant problem-detail HTTP error payloads",
        "Full OpenAPI 3.0 specification auto-generated for strict contract testing"
      ],
      stack: ["Go", "Chi", "PostgreSQL (pgx)", "Redis", "Goose", "Docker", "OpenAPI/Swagger"],
      githubUrl: "https://github.com/amu-muha/go-ecommerce-api",
      projectUrl: "https://github.com/amu-muha/go-ecommerce-api#architecture",
      architecture: {
        nodes: [
          { id: "client", label: "Client Apps / SPA", role: "HTTP/2 REST Consumers", type: "client" },
          { id: "gateway", label: "Chi Router & Middlewares", role: "Auth, CORS, Rate Limit, Zap Logger", type: "gateway" },
          { id: "service", label: "Commerce Domain Services", role: "Orders, Catalog, Cart, Inventory", type: "service" },
          { id: "cache", label: "Redis Cluster", role: "Catalog Cache-Aside & Session State", type: "cache" },
          { id: "db", label: "PostgreSQL 16 (pgxpool)", role: "ACID Orders, Inventory, Users", type: "db" },
        ],
        flows: [
          { from: "client", to: "gateway", label: "HTTPS / JSON Payload", protocol: "HTTP/2" },
          { from: "gateway", to: "service", label: "Context & Claims Propagation", protocol: "Internal" },
          { from: "service", to: "cache", label: "Cache Read / Invalidation", protocol: "RESP3" },
          { from: "service", to: "db", label: "Read-Committed Transactions", protocol: "pgx/TCP" },
        ],
        tradeOffs: [
          {
            decision: "Chi router vs Gin / Fiber",
            rationale: "Chi adheres strictly to standard net/http handler signatures, avoiding custom context allocations and facilitating composable, standard-library-compliant middleware chains.",
            compromise: "Slightly more boilerplate when parsing url query parameters compared to Fiber's express-like sugar."
          },
          {
            decision: "pgx Native Driver vs database/sql + GORM",
            rationale: "Direct pgx/v5 connection pool gives explicit control over statement preparation caches, native binary PostgreSQL formats, and zero-allocation scanning.",
            compromise: "Queries are raw typed SQL; requires discipline and automated linting to prevent syntax regressions across migrations."
          },
          {
            decision: "Cache-Aside vs Write-Through Caching",
            rationale: "Catalog read workloads outweigh writes by 92:1. Cache-aside with atomic Redis pipeline invalidation on product updates keeps persistence decoupled.",
            compromise: "Risk of temporary cache stampede on expired high-traffic hot keys (mitigated via probabilistic early expiration)."
          }
        ],
        deepDive: "Built from scratch to simulate enterprise-grade transaction handling. The catalog and inventory subsystem isolates stock mutations behind SELECT FOR UPDATE row-level locks, guaranteeing zero overselling during flash purchases. Docker Compose provides instant local reproducibility with health-checked services.",
        benchmarks: [
          { label: "p99 Latency (Cached)", value: "1.4ms" },
          { label: "p99 Latency (Write Tx)", value: "8.2ms" },
          { label: "Throughput (4-core)", value: "14,800 req/s" }
        ]
      }
    },
    {
      index: "02",
      title: "Veridix — AI Content Moderation Gateway",
      subtitle: "Low-Latency Moderation Service & Prompt Defense Pipeline",
      category: "AI Infrastructure & Security",
      status: "Active Lab",
      summary: "Low-latency Fastify moderation microservice wrapping the Google Gemini API with prompt-injection sanitization, token-bucket rate limiting, and Prisma ORM audit logging.",
      highlights: [
        "Multi-stage sanitization defense against adversarial prompt injections and jailbreak escapes",
        "Deterministic content safety categorization with structured JSON schemas via Gemini 1.5 Flash",
        "Redis-backed sliding window rate limiter per API key with instantaneous 429 quota exhaustion headers",
        "Complete append-only audit trail persisting request hashes, safety scores, and latencies via Prisma",
        "Under 420ms end-to-end evaluation latency with asynchronous streaming safety checks"
      ],
      stack: ["Node.js", "Fastify", "TypeScript", "Prisma", "Gemini API", "PostgreSQL"],
      githubUrl: "https://github.com/amu-muha/veridix",
      projectUrl: "https://github.com/amu-muha/veridix#pipeline",
      architecture: {
        nodes: [
          { id: "client", label: "Inbound User Content", role: "UGC / Comments / Posts", type: "client" },
          { id: "gateway", label: "Fastify Gateway", role: "Token-Bucket Rate Limiter & Auth", type: "gateway" },
          { id: "defense", label: "Prompt Injection Sanitizer", role: "Regex + Heuristic Boundary Jailbreak Filter", type: "worker" },
          { id: "gemini", label: "Google Gemini 1.5 API", role: "Structured JSON Safety Classifier", type: "service" },
          { id: "audit", label: "Prisma ORM & PostgreSQL", role: "Immutable Audit Log & Moderation History", type: "db" },
        ],
        flows: [
          { from: "client", to: "gateway", label: "POST /v1/moderate", protocol: "HTTPS" },
          { from: "gateway", to: "defense", label: "Pre-Flight Token Scan", protocol: "Memory" },
          { from: "defense", to: "gemini", label: "Strict Schema Payload", protocol: "gRPC/HTTPS" },
          { from: "defense", to: "audit", label: "Async Audit Persistence", protocol: "TCP" },
        ],
        tradeOffs: [
          {
            decision: "Fastify over Express",
            rationale: "Fastify leverages JSON schema compilation (via ajv) for serialization, yielding 2x-3x higher I/O throughput and lower event loop overhead compared to Express.",
            compromise: "Schema validation errors require explicit serialization custom handlers to conform to unified error responses."
          },
          {
            decision: "Heuristic Sanitization Layer before LLM",
            rationale: "Filtering known prompt escape delimiters and system prompt extraction tricks locally prevents expensive external API round-trips for obvious malicious payloads.",
            compromise: "Heuristics must be continually updated as novel adversarial evasion techniques emerge."
          },
          {
            decision: "Asynchronous Audit Logging",
            rationale: "Persisting moderation logs occurs in the background tick without blocking the critical HTTP response back to the client application.",
            compromise: "A catastrophic node crash during socket close could theoretically drop an in-flight audit record."
          }
        ],
        deepDive: "Veridix addresses the critical vulnerability of untrusted user input polluting LLM moderation workflows. It enforces a defense-in-depth model: initial token-bucket rate limiting -> structural heuristic sanitization -> constrained structured inference -> tamper-evident audit storage.",
        benchmarks: [
          { label: "Gateway Overhead", value: "2.1ms" },
          { label: "Gemini Structured Latency", value: "380ms" },
          { label: "Injection Catch Rate", value: "98.4%" }
        ]
      }
    },
    {
      index: "03",
      title: "AmpShare — P2P EV Charging Marketplace",
      subtitle: "Geospatial Peer-to-Peer Energy Sharing Platform",
      category: "Geospatial & Distributed Systems",
      status: "Production Demo",
      summary: "Peer-to-peer electric vehicle charging platform for Addis Ababa with PostGIS geospatial charger discovery, real-time Socket.IO telemetry, and Docker Compose orchestration.",
      highlights: [
        "PostGIS spatial indexing (ST_DWithin, GiST) querying nearest available chargers within custom radial thresholds in <5ms",
        "Bidirectional WebSocket telemetry via Socket.IO streaming live kilowatt-hour charging sessions and billing increments",
        "State-machine managed charging lifecycle: Available -> Reserved -> Energized -> Settled",
        "Role-based access control segregating host charger owners from EV drivers",
        "Orchestrated with multi-stage Docker containers with environment-segregated network bridges"
      ],
      stack: ["Next.js", "Node.js", "Express", "Socket.IO", "PostgreSQL + PostGIS", "Docker"],
      githubUrl: "https://github.com/m3sudx/AmpShare",
      projectUrl: "https://github.com/m3sudx/AmpShare#readme",
      architecture: {
        nodes: [
          { id: "driver", label: "EV Driver App", role: "Search, Reserve & Monitor Session", type: "client" },
          { id: "host", label: "Charger Host Station", role: "Hardware Simulator / Station Telemetry", type: "client" },
          { id: "backend", label: "Express Core Backend", role: "API Gateway, Session Finite State Machine", type: "service" },
          { id: "socket", label: "Socket.IO Real-time Engine", role: "Bidirectional Power / Cost Telemetry", type: "gateway" },
          { id: "postgis", label: "PostgreSQL 15 + PostGIS", role: "GiST Spatial Coordinates, Charging Logs", type: "db" },
        ],
        flows: [
          { from: "driver", to: "backend", label: "Spatial Query (Lat, Lng, Radius)", protocol: "REST" },
          { from: "backend", to: "postgis", label: "ST_DWithin GiST Index Scan", protocol: "SQL/TCP" },
          { from: "host", to: "socket", label: "Live Watts / Amps Telemetry", protocol: "WSS" },
          { from: "socket", to: "driver", label: "Real-time Charge & Bill Updates", protocol: "WSS" },
        ],
        tradeOffs: [
          {
            decision: "PostGIS Spatial Engine vs In-Memory Haversine",
            rationale: "PostGIS leverages native GiST R-tree indices allowing bounding box filtering, spatial clustering, and complex polygon geofencing directly inside the database.",
            compromise: "PostGIS requires specialized database extensions and spatial projection (EPSG:4326 vs EPSG:3857) transformations."
          },
          {
            decision: "Socket.IO vs Native WebSockets",
            rationale: "Socket.IO handles heartbeat reconnects, automatic fallbacks, and room-based pub/sub broadcasting cleanly for mobile clients traversing intermittent 4G mobile networks.",
            compromise: "Custom framing protocol adds slight metadata overhead compared to bare RFC 6455 WebSockets."
          },
          {
            decision: "Strict Finite State Machine for Sessions",
            rationale: "EV charging involves physical energy transfer and monetary exchange. A strict FSM prevents illegal state jumps (e.g. charging without an active reservation).",
            compromise: "Network disconnects during transition require explicit reconciliation timeouts."
          }
        ],
        deepDive: "Designed specifically to solve urban EV charging hurdles in developing metropolitan areas like Addis Ababa. Hosts monetize private chargers; drivers discover verified plug types with real-time occupancy updates, preventing wasted trips through heavy traffic.",
        benchmarks: [
          { label: "Spatial Query Latency", value: "3.2ms" },
          { label: "Socket Telemetry Sync", value: "<15ms" },
          { label: "Active Charger Capacity", value: "10,000+" }
        ]
      }
    },
    {
      index: "04",
      title: "Habeshan REMS — Offline-First Attendance & Sync Engine",
      subtitle: "Idempotent Distributed Sync & Device Fingerprinting",
      category: "Distributed Sync & Offline-First",
      status: "Production Deployed",
      summary: "Fault-tolerant attendance tracking and sync system built with client-side IndexedDB queuing, manual JSON backup exports, SHA-256 device fingerprinting, and idempotent Go/Fiber reconciliation.",
      highlights: [
        "Client-side IndexedDB mutation queues using Dexie.js for 100% offline functionality in low-connectivity areas",
        "Deterministic SHA-256 device fingerprinting and client-generated UUIDv4 idempotency keys preventing replay duplication",
        "Go (Fiber) backend reconciliation engine processing batch sync payloads inside isolated database transactions",
        "Two-way conflict resolution engine leveraging logical vector clocks and server-authoritative timestamps",
        "Manual air-gapped JSON export/import mechanism for disaster recovery across remote branch networks"
      ],
      stack: ["Go (Fiber)", "PostgreSQL (GORM)", "React", "TypeScript", "Dexie.js", "SHA-256"],
      githubUrl: "https://github.com/amu-muha/habeshan-rems",
      projectUrl: "https://github.com/amu-muha/habeshan-rems#sync-protocol",
      architecture: {
        nodes: [
          { id: "client", label: "React Offline Client", role: "IndexedDB / Dexie Mutation Queue", type: "client" },
          { id: "fingerprint", label: "SHA-256 Hardware Token", role: "Tamper-Proof Device Identity", type: "worker" },
          { id: "fiber", label: "Go (Fiber) Ingestion API", role: "Batch Sync Ingestion & Idempotency Filter", type: "gateway" },
          { id: "reconciler", label: "Conflict Reconciler", role: "Vector Clock & Timestamp Arbitrator", type: "service" },
          { id: "pg", label: "PostgreSQL Database", role: "Immutable Attendance Ledger", type: "db" },
        ],
        flows: [
          { from: "client", to: "fingerprint", label: "Cryptographic Seed Generation", protocol: "Local" },
          { from: "client", to: "fiber", label: "POST /sync/batch (Gzip Payload)", protocol: "HTTPS/Offline Queue" },
          { from: "fiber", to: "reconciler", label: "Idempotent Batch Validation", protocol: "Internal" },
          { from: "reconciler", to: "pg", label: "Atomic Ledger Commit", protocol: "GORM/TCP" },
        ],
        tradeOffs: [
          {
            decision: "Client-Generated UUIDv4 + Idempotency Keys",
            rationale: "Clients assign UUIDs at creation time in IndexedDB. If an intermittent connection drops mid-request, retrying the exact same batch causes no duplicate inserts on the Go backend.",
            compromise: "Server must maintain an idempotency index table with 7-day retention."
          },
          {
            decision: "IndexedDB (Dexie.js) over LocalStorage",
            rationale: "LocalStorage is synchronous, blocking the main UI thread during bulk writes, and capped at 5MB. IndexedDB is fully asynchronous and accommodates hundreds of thousands of offline records.",
            compromise: "Schema migrations inside IndexedDB require explicit version upgrade hooks."
          },
          {
            decision: "Air-Gapped Encrypted JSON Backup / Restore",
            rationale: "Provides emergency operational continuity even during extended multi-day ISP / power outages in rural Ethiopian university branches.",
            compromise: "Operators must manually transport or upload the encrypted batch files."
          }
        ],
        deepDive: "Engineered specifically for unreliable connectivity environments. Frontends continue recording attendance records locally with sub-millisecond feedback. Once internet connectivity is restored, the client sync worker activates an exponential backoff batch sync protocol.",
        benchmarks: [
          { label: "Offline Write Time", value: "<0.8ms" },
          { label: "Batch Sync Throughput", value: "2,500 records/s" },
          { label: "Conflict Resolution Rate", value: "100% Idempotent" }
        ]
      }
    }
  ] as Project[],

  cv: {
    education: {
      degree: "B.Sc. in Information Systems",
      institution: "Addis Ababa University (AAU)",
      location: "Addis Ababa, Ethiopia",
      focus: "Distributed Systems, Database Systems, Network & Operating System Security, Algorithms & Data Structures",
    },
    honors: [
      {
        title: "1st Place Hackathon Winner",
        issuer: "IDEEZA Cohort 7",
        details: "Invited to Cohort 7 for Hardware & AI Development after building an innovative system prototype addressing localized infrastructure challenges.",
        badge: "Winner / 1st Place",
        date: "2024",
      },
      {
        title: "Cybersecurity Training Track Graduate",
        issuer: "Frontier Tech Leaders Programme",
        details: "Selected for prestigious tech leadership initiative supported by the United Nations Development Programme (UNDP), UN Technology Bank, and ICPSD. Focused on defensive architectures and threat analysis.",
        badge: "Graduate / UNDP Partnered",
        date: "2024",
      },
    ],
    skills: [
      {
        category: "Languages",
        items: ["Go", "TypeScript", "JavaScript (ES6+)", "Java", "Dart", "C++", "Python", "SQL"],
      },
      {
        category: "Backend, Mobile & Data",
        items: ["Node.js", "Fastify", "Express", "Chi", "Fiber", "Flutter", "PostgreSQL", "PostGIS", "Redis", "SQLite", "Prisma", "GORM"],
      },
      {
        category: "Security & Infrastructure",
        items: ["Ubuntu Linux", "Docker", "Nginx", "Suricata IDS", "Burp Suite", "OWASP Top 10", "Git", "Bash Scripting"],
      },
    ],
  },

  securityLab: {
    title: "Cybersecurity & Systems Engineering Lab",
    subtitle: "Active experimentation across offensive vulnerability analysis, defensive intrusion detection, and computational algorithms.",
    offensiveDefensive: {
      title: "Offensive & Defensive Security",
      category: "Systems Security",
      description: "Hands-on vulnerability research, threat modeling, and defensive network monitoring across enterprise targets.",
      topics: [
        {
          label: "Web Application Security",
          details: "Systematic exploitation and remediation of OWASP Top 10 vulnerabilities (SQLi, IDOR, SSRF, XSS, CSRF) on PortSwigger Web Security Academy and OWASP Juice Shop.",
        },
        {
          label: "Traffic Interception & Analysis",
          details: "Burp Suite Professional / Community proxying, custom match & replace rules, automated fuzzing with Burp Intruder, and API parameter tampering analysis.",
        },
        {
          label: "Network Intrusion Detection (IDS)",
          details: "Configured Suricata IDS on Ubuntu Linux; authored custom signature rules to identify port scans, anomalous HTTP headers, and suspected brute-force attempts.",
        },
        {
          label: "Linux Hardening & Sandboxing",
          details: "Kernel parameter tuning (/etc/sysctl.conf), non-root Docker container isolation, iptables/ufw rule policies, SSH key-only auth, and fail2ban jails.",
        },
      ],
    },
    algorithmsSystems: {
      title: "Algorithms & Information Retrieval",
      category: "Computational Engineering",
      description: "Low-level data structures, algorithmic problem solving, and custom search engine indexing mechanics.",
      topics: [
        {
          label: "Vector Space Model Search Engine",
          details: "Implemented a complete IR pipeline from scratch in Python: Blocked Sort-Based Indexing (BSBI), Porter stemmer normalization, TF-IDF weighting, and Cosine Similarity ranked querying tested against the standard Cranfield 1400 collection.",
        },
        {
          label: "Competitive Problem Solving",
          details: "C++ implementation of high-efficiency algorithms on LeetCode: graph traversals (Dijkstra, DFS/BFS), dynamic programming, sliding window, and two-pointer optimizers.",
        },
        {
          label: "Systems & Memory Mechanics",
          details: "Deep exploration of memory layouts, cache-conscious data layout, POSIX system calls, socket programming, and concurrent goroutine coordination.",
        },
      ],
    },
  },
};
