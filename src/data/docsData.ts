// docsData.ts - Prometrion Master Documentation & Skills Specification
// Provides structured guides, service specs, Prometrion skills index, and future docs roadmap.

export interface DocArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  desc: string;
  badge?: string;
  content: string[];
  codeSnippet?: string;
  tags: string[];
}

export interface PrometrionSkill {
  id: string;
  name: string;
  category: 'Agent Intelligence' | 'Search & GEO' | 'Component Craft' | 'DevOps & Edge' | 'Business Logic';
  status: 'Ready' | 'In Development' | 'Configurable';
  summary: string;
  description: string;
  parameters: { name: string; type: string; desc: string }[];
  exampleUsage: string;
}

export const docCategories = [
  { id: "platform-overview", name: "Platform & Quickstart", desc: "Core concepts, architecture, and getting started." },
  { id: "services-spec", name: "Service Catalog Specifications", desc: "Delivery stages, pricing rules, and deliverables." },
  { id: "engineering-standards", name: "Engineering & Design System", desc: "Astro 7, Tailwind v4, Geist tokens, and performance." },
  { id: "prometrion-skills", name: "Prometrion Skills System", desc: "Skills registry for autonomous agents, GEO, and developer tools." },
  { id: "future-roadmap", name: "Future Docs & Extension Guide", desc: "How to add new documentation pages, skills, and schemas." },
];

export const docsList: DocArticle[] = [
  {
    id: "doc-overview",
    slug: "platform-overview",
    title: "Prometrion Platform Overview",
    category: "Platform & Quickstart",
    desc: "Understanding the three unified layers: Corporate Platform, Marketplace & Content, and Authenticated Ecosystem.",
    badge: "Core Architecture",
    tags: ["Platform", "Architecture", "Overview"],
    content: [
      "Prometrion is a technology company conceiving, architecting, and deploying high-impact software products, digital services, marketplaces, and developer communities.",
      "The platform operates across three structured layers:",
      "1. Layer 1: Corporate Platform — Communicates company identity, mission, leadership, products (like Taluq AI), and multi-channel communication.",
      "2. Layer 2: Marketplace & Content Platform — Houses the Prometrion Store (Webstore, Appstore, Component Store), complete Services Catalog with database-driven pricing, transparent Packages, and Articles publishing.",
      "3. Layer 3: Authenticated Ecosystem — Community ratings & reviews, Prometrion Developer partner network, Coders Club guild, Users directory, and Customer showcase."
    ],
    codeSnippet: `// Prometrion Core Hierarchy
Platform
 ├── Corporate (Home, Products, About, Contact)
 ├── Marketplace (Store, Services, Pricing, Articles)
 └── Community (Developer, Coders Club, Ratings, Profiles)`
  },

  {
    id: "doc-services-spec",
    slug: "service-catalog-standards",
    title: "Service Catalog & Pricing Standards",
    category: "Service Catalog Specifications",
    desc: "Canonical pricing rules, scope boundaries, and delivery timelines across our 8 service pillars.",
    badge: "Commercial Standards",
    tags: ["Pricing", "Scope", "Delivery"],
    content: [
      "Prometrion's commercial catalog is database-driven and adheres to strict transparency rules:",
      "• Base Price & Suffix: All prices represent baseline investments. Offerings with expandable scopes are designated with a '+' (e.g., ₹5,000+, ₹12,000+).",
      "• Billing Periods: Services clearly indicate whether they are one-time project deliverables, monthly retainers (/month), or session-based advisory (/session).",
      "• No Hardcoded UI Pricing: All prices reside in the centralized services catalog data store (src/data/servicesCatalog.ts).",
      "• Honest Search Visibility Policy: We never guarantee a #1 search ranking, because search algorithms and market competition continually fluctuate. We commit to technical and semantic excellence."
    ]
  },

  {
    id: "doc-engineering",
    slug: "engineering-and-geist-tokens",
    title: "Engineering & Geist Design System",
    category: "Engineering & Design System",
    desc: "How we implement the Swiss-inspired Geist design language using Astro 7 zero-JS islands and Tailwind CSS v4 cascade layers.",
    badge: "Geist System",
    tags: ["Astro 7", "Tailwind v4", "Design Tokens"],
    content: [
      "Our frontend architecture strictly implements the tokens defined in DESIGN.md:",
      "• Color Palette: Deep Ink (#171717) on off-white Canvas (#fafafa), with 1px hairline dividers (#ebebeb).",
      "• Radius Contrast: Distinct 100px marketing pill buttons vs. 6px technical chrome controls.",
      "• Conic Mesh Gradient: Multi-stop atmospheric radial gradient hero band blending cyan, blue, purple, magenta, and amber.",
      "• Core Web Vitals SLA: Zero Cumulative Layout Shift (0.00 CLS) and sub-100ms Time to First Byte (TTFB)."
    ],
    codeSnippet: `@theme {
  --color-ink: #171717;
  --color-canvas: #fafafa;
  --color-hairline: #ebebeb;
  --font-sans: 'Geist', sans-serif;
  --font-mono: 'Geist Mono', monospace;
}`
  },

  {
    id: "doc-skills-guide",
    slug: "skills-architecture",
    title: "Prometrion Skills System & Extensibility",
    category: "Prometrion Skills System",
    desc: "The modular execution framework that powers autonomous agent operations, GEO audits, and developer tooling.",
    badge: "Skills Engine",
    tags: ["Skills", "Agents", "Automation"],
    content: [
      "The Prometrion Skills System defines specialized operational capabilities that can be executed by human developers or autonomous AI agents (such as Taluq AI).",
      "Each Prometrion Skill encapsulates:",
      "1. Unique Identifier & Categorization",
      "2. Input Parameter Schema & Validation Rules",
      "3. Core Operational Logic or Prometrion API Call",
      "4. Deterministic Output Format & Telemetry Logs",
      "Below is the official Prometrion Skills Registry. You can add new custom skills by registering them in the skills registry."
    ]
  },

  {
    id: "doc-future-docs",
    slug: "future-docs-guide",
    title: "How to Add New Documentation & Skills",
    category: "Future Docs & Extension Guide",
    desc: "A developer guide for adding new technical articles, API references, and Prometrion skill files.",
    badge: "Developer Guide",
    tags: ["Guide", "Contributing", "Extensions"],
    content: [
      "Extending Prometrion documentation is streamlined:",
      "• To Add a New Documentation Article: Open src/data/docsData.ts and append an entry to the docsList array with title, slug, category, and markdown content blocks.",
      "• To Register a New Prometrion Skill: Add your skill definition to the prometrionSkills array with parameters and usage examples.",
      "• Future Markdown Integration: The documentation engine is architected to seamlessly plug into Astro Content Collections with glob loaders when local .md files are added."
    ],
    codeSnippet: `// Registering a new skill in src/data/docsData.ts
{
  id: "skill-custom-name",
  name: "Custom Skill Name",
  category: "Agent Intelligence",
  status: "Ready",
  summary: "Brief description of the capability",
  description: "Detailed operational specifications",
  parameters: [{ name: "param1", type: "string", desc: "Parameter description" }],
  exampleUsage: "prometrion execute skill-custom-name --param1 value"
}`
  }
];

// ─── Prometrion Skills Registry ───
// The user can register new Prometrion Skills here
export const prometrionSkills: PrometrionSkill[] = [
  {
    id: "skill-geo-audit",
    name: "GEO Semantic Authority Audit",
    category: "Search & GEO",
    status: "Ready",
    summary: "Audits a website for Generative Engine Optimization (GEO) readiness across AI search assistants.",
    description: "Evaluates JSON-LD schema entity structures, citation density, conversational FAQ formatting, and knowledge graph cross-referencing.",
    parameters: [
      { name: "targetUrl", type: "string", desc: "Fully qualified domain URL to audit" },
      { name: "brandEntities", type: "string[]", desc: "List of canonical brand and founder entity names" },
      { name: "depth", type: "number", desc: "Crawl depth for internal authority pages (default: 3)" }
    ],
    exampleUsage: `prometrion skill:run geo-audit --targetUrl="https://prometrion.com" --brandEntities=["Prometrion", "Rajnikant"]`
  },
  {
    id: "skill-taluq-reasoning",
    name: "Taluq AI Reasoning Graph Invocation",
    category: "Agent Intelligence",
    status: "Ready",
    summary: "Executes a multi-step cognitive directed acyclic graph (DAG) inside isolated microVM sandboxes.",
    description: "Connects with the Taluq AI runtime to parse natural language instructions into verifiable tasks, execute tool calls, and return structured telemetry.",
    parameters: [
      { name: "taskPrompt", type: "string", desc: "High-level goal or business task definition" },
      { name: "allowedTools", type: "string[]", desc: "Allowed sandbox tool capabilities (e.g., ['web-search', 'code-exec'])" },
      { name: "maxExecutionMs", type: "number", desc: "Timeout threshold in milliseconds" }
    ],
    exampleUsage: `import { runSkill } from '@prometrion/skills';
const result = await runSkill('taluq-reasoning', {
  taskPrompt: 'Analyze customer purchase patterns and generate weekly growth forecast.',
  allowedTools: ['db-query', 'analytics-chart']
});`
  },
  {
    id: "skill-geist-component-lint",
    name: "Geist Design System Compliance Linter",
    category: "Component Craft",
    status: "Ready",
    summary: "Verifies that UI components adhere to Prometrion Geist tokens (1px borders, typography tracking, padding).",
    description: "Scans Astro, React, and Tailwind CSS files to enforce hairline border syntax, radius rules (6px chrome vs 100px pills), and contrast ratios.",
    parameters: [
      { name: "componentPath", type: "string", desc: "Path to component source file" },
      { name: "strictMode", type: "boolean", desc: "Whether to fail on non-token arbitrary CSS colors" }
    ],
    exampleUsage: `npx prometrion lint-design --strict ./src/components/Navbar.astro`
  },
  {
    id: "skill-edge-cache-purge",
    name: "Anycast Edge Cache Invalidator",
    category: "DevOps & Edge",
    status: "Configurable",
    summary: "Triggers instant global edge cache purging across Anycast Points of Presence.",
    description: "Ensures newly published blog posts, catalog items, and service updates reflect worldwide within 200 milliseconds.",
    parameters: [
      { name: "routes", type: "string[]", desc: "Array of route paths to invalidate, e.g. ['/articles/blogs', '/services/catalog']" }
    ],
    exampleUsage: `prometrion skill:run edge-cache-purge --routes=["/services/catalog", "/articles/*"]`
  },
  {
    id: "skill-catalog-pricing-sync",
    name: "Centralized Pricing Database Sync",
    category: "Business Logic",
    status: "Configurable",
    summary: "Synchronizes central service and catalog pricing without requiring website redeployments.",
    description: "Validates canonical pricing rules, currency conversions, billing frequency suffixes, and publishes live pricing updates.",
    parameters: [
      { name: "sourceVersion", type: "string", desc: "Version identifier for the price catalog pack (e.g., 'v1.0')" },
      { name: "currency", type: "string", desc: "Currency ISO code (default: 'INR')" }
    ],
    exampleUsage: `prometrion pricing:sync --sourceVersion="1.0" --currency="INR"`
  }
];
