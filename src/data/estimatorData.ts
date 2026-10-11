// src/data/estimatorData.ts
// Centralized, typed calculation engine and configuration for Prometrion Cost Estimator
// Strictly grounded in approved servicesCatalog.ts data

import { comboPackages, servicesCatalog, type ServiceItem } from "./servicesCatalog";

export interface EstimatorQuestionOption {
  id: string;
  label: string;
  description?: string;
  priceDelta: number; // In INR (0 if included in base or requires custom quote)
  priceFormatted?: string;
  billingBasis: "one-time" | "monthly" | "per-session" | "custom";
  isCustomQuote?: boolean;
}

export interface EstimatorQuestion {
  id: string;
  question: string;
  helpText?: string;
  type: "single-choice" | "multi-choice";
  options: EstimatorQuestionOption[];
}

export interface ServiceEstimatorConfig {
  serviceId: string;
  serviceName: string;
  categorySlug: string;
  basePrice: number;
  basePriceFormatted: string;
  billingBasis: "one-time" | "monthly" | "per-session";
  defaultDescription: string;
  questions: EstimatorQuestion[];
  compatibleAddons: {
    id: string;
    name: string;
    price: number;
    priceFormatted: string;
    billingBasis: "one-time" | "monthly" | "annual";
  }[];
}

export const estimatorServicesConfig: Record<string, ServiceEstimatorConfig> = {
  website: {
    serviceId: "website",
    serviceName: "Website Development",
    categorySlug: "website-development",
    basePrice: 5000,
    basePriceFormatted: "₹5,000+",
    billingBasis: "one-time",
    defaultDescription: "High-performance websites built on Astro 7 with sub-second speeds, mobile responsiveness, and clean SEO architecture.",
    questions: [
      {
        id: "website-type",
        question: "What type of website does your business require?",
        helpText: "Select the primary purpose and commercial model of the website.",
        type: "single-choice",
        options: [
          {
            id: "type-portfolio",
            label: "Portfolio / Creative Showcase",
            description: "Visual showcase for independent creatives, photographers, and artists.",
            priceDelta: 0,
            priceFormatted: "Base Scope (₹5,000+)",
            billingBasis: "one-time",
          },
          {
            id: "type-business",
            label: "Local Business / Corporate Website",
            description: "Professional multi-page website establishing local trust, credibility, and client inquiries.",
            priceDelta: 3000,
            priceFormatted: "+₹3,000 (Base ₹8,000+)",
            billingBasis: "one-time",
          },
          {
            id: "type-catalogue",
            label: "Product Catalogue / Wholesale Showcase",
            description: "Showcase dozens of items with WhatsApp inquiries without complex checkout barriers.",
            priceDelta: 7000,
            priceFormatted: "+₹7,000 (Base ₹12,000+)",
            billingBasis: "one-time",
          },
          {
            id: "type-ecommerce",
            label: "Dynamic E-Commerce Store",
            description: "Complete online store with Razorpay/Stripe checkout, slide-out cart, and order alerts.",
            priceDelta: 13000,
            priceFormatted: "+₹13,000 (Base ₹18,000+)",
            billingBasis: "one-time",
          },
          {
            id: "type-custom-app",
            label: "Custom Web App / Portal / SaaS MVP",
            description: "Interactive application requiring user roles, custom logic, or backend databases.",
            priceDelta: 20000,
            priceFormatted: "Starting ₹25,000+ (Scope Required)",
            billingBasis: "one-time",
            isCustomQuote: true,
          },
        ],
      },
      {
        id: "website-scale",
        question: "Estimated scale & number of custom pages:",
        helpText: "Content volume and structural complexity.",
        type: "single-choice",
        options: [
          {
            id: "pages-starter",
            label: "1 to 3 Pages",
            description: "Clean single-page landing or streamlined 3-page site (Home, About, Contact).",
            priceDelta: 0,
            priceFormatted: "Included in Base",
            billingBasis: "one-time",
          },
          {
            id: "pages-standard",
            label: "4 to 6 Pages",
            description: "Standard business footprint: Home, About, Services, Gallery, FAQ, Contact.",
            priceDelta: 2500,
            priceFormatted: "+₹2,500",
            billingBasis: "one-time",
          },
          {
            id: "pages-growth",
            label: "7 to 12 Pages",
            description: "Deep content structure with distinct landing pages for every service/product category.",
            priceDelta: 5500,
            priceFormatted: "+₹5,500",
            billingBasis: "one-time",
          },
          {
            id: "pages-enterprise",
            label: "13+ Pages or High-Volume Directory",
            description: "Large content libraries, dynamic programmatic SEO routes, or multi-branch sites.",
            priceDelta: 0,
            priceFormatted: "Custom Scope Required",
            billingBasis: "custom",
            isCustomQuote: true,
          },
        ],
      },
      {
        id: "website-features",
        question: "Required interactive capabilities & integrations:",
        helpText: "Select all features needed for your workflow.",
        type: "multi-choice",
        options: [
          {
            id: "feat-whatsapp",
            label: "Direct WhatsApp & Call Inquiries",
            description: "One-click connection for visitors on mobile devices.",
            priceDelta: 0,
            priceFormatted: "Included Free",
            billingBasis: "one-time",
          },
          {
            id: "feat-blog",
            label: "Blog / Content Publishing Engine",
            description: "Markdown or CMS-driven articles section for search engine visibility.",
            priceDelta: 3000,
            priceFormatted: "+₹3,000",
            billingBasis: "one-time",
          },
          {
            id: "feat-payment",
            label: "Payment Gateway Integration",
            description: "Razorpay, Stripe, or UPI QR code automated checkout integration.",
            priceDelta: 4000,
            priceFormatted: "+₹4,000",
            billingBasis: "one-time",
          },
          {
            id: "feat-auth",
            label: "User Accounts / Authentication",
            description: "Secure login, profile dashboards, and members-only content portals.",
            priceDelta: 5000,
            priceFormatted: "+₹5,000",
            billingBasis: "one-time",
          },
          {
            id: "feat-3d",
            label: "3D WebGL / Interactive Canvas Effects",
            description: "Three.js interactive visuals, particle fields, or custom product rotators.",
            priceDelta: 6000,
            priceFormatted: "+₹6,000",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-ga4", name: "Google Analytics 4 (GA4) Setup", price: 999, priceFormatted: "₹999", billingBasis: "one-time" },
      { id: "addon-domain", name: "Custom Domain DNS & SSL Setup", price: 500, priceFormatted: "₹500", billingBasis: "one-time" },
      { id: "addon-speed", name: "Core Web Vitals Sub-Second Speed Tuning", price: 2500, priceFormatted: "₹2,500", billingBasis: "one-time" },
      { id: "addon-email", name: "Business Email Account (1 Year)", price: 999, priceFormatted: "₹999/yr", billingBasis: "annual" },
    ],
  },

  app: {
    serviceId: "app",
    serviceName: "Mobile App Development",
    categorySlug: "app-development",
    basePrice: 15000,
    basePriceFormatted: "₹15,000+",
    billingBasis: "one-time",
    defaultDescription: "High-performance native Android and modern cross-platform mobile systems designed for real operational workflows.",
    questions: [
      {
        id: "app-platform",
        question: "Target mobile platform & architecture:",
        helpText: "Determine which devices your users will run the app on.",
        type: "single-choice",
        options: [
          {
            id: "plat-android-utility",
            label: "Android Native — Standalone Utility",
            description: "Compact Android package distributed directly via APK / GitHub Releases.",
            priceDelta: 0,
            priceFormatted: "Base Scope (₹15,000+)",
            billingBasis: "one-time",
          },
          {
            id: "plat-android-commercial",
            label: "Android Commercial Application",
            description: "Complete commercial Android app with cloud database synchronization.",
            priceDelta: 7000,
            priceFormatted: "+₹7,000 (Base ₹22,000+)",
            billingBasis: "one-time",
          },
          {
            id: "plat-cross-platform",
            label: "Android + iOS Cross-Platform System",
            description: "Single codebase running seamlessly across both Android and Apple iOS devices.",
            priceDelta: 13000,
            priceFormatted: "+₹13,000 (Base ₹28,000+)",
            billingBasis: "one-time",
          },
          {
            id: "plat-enterprise-workflow",
            label: "Enterprise Mobile Infrastructure / Multi-Role",
            description: "Complex multi-role systems (Admin, Driver, Agent, Customer) with custom backends.",
            priceDelta: 25000,
            priceFormatted: "Starting ₹40,000+ (Scope Required)",
            billingBasis: "one-time",
            isCustomQuote: true,
          },
        ],
      },
      {
        id: "app-screens",
        question: "Approximate screen count and user flows:",
        helpText: "Number of unique application screens.",
        type: "single-choice",
        options: [
          {
            id: "screens-compact",
            label: "3 to 5 Screens",
            description: "Focused workflows: Splash, Main Dashboard, Details, Settings, Info.",
            priceDelta: 0,
            priceFormatted: "Included in Base",
            billingBasis: "one-time",
          },
          {
            id: "screens-standard",
            label: "6 to 12 Screens",
            description: "Full commercial workflow: Auth, Catalog, Cart, Orders, Profile, Support.",
            priceDelta: 8000,
            priceFormatted: "+₹8,000",
            billingBasis: "one-time",
          },
          {
            id: "screens-complex",
            label: "13+ Screens or Dynamic Modular Views",
            description: "Extensive multi-tier dashboards and complex state machines.",
            priceDelta: 0,
            priceFormatted: "Custom Scope Required",
            billingBasis: "custom",
            isCustomQuote: true,
          },
        ],
      },
      {
        id: "app-features",
        question: "Required mobile hardware & cloud features:",
        helpText: "Select all that apply.",
        type: "multi-choice",
        options: [
          {
            id: "app-auth",
            label: "Biometric / OTP Phone Authentication",
            description: "Fingerprint, Face Unlock, and SMS/WhatsApp OTP verification.",
            priceDelta: 4000,
            priceFormatted: "+₹4,000",
            billingBasis: "one-time",
          },
          {
            id: "app-notifications",
            label: "Push Notifications & Background Alerts",
            description: "Firebase Cloud Messaging (FCM) integration for instant order/status alerts.",
            priceDelta: 3000,
            priceFormatted: "+₹3,000",
            billingBasis: "one-time",
          },
          {
            id: "app-offline",
            label: "Offline-First Local Storage Sync",
            description: "SQLite/Room/WatermelonDB local caching with background cloud sync.",
            priceDelta: 5000,
            priceFormatted: "+₹5,000",
            billingBasis: "one-time",
          },
          {
            id: "app-payments",
            label: "In-App Payment Gateway",
            description: "Native Razorpay or Stripe mobile SDK integration.",
            priceDelta: 4000,
            priceFormatted: "+₹4,000",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-play-setup", name: "Google Play Store Console Publishing Prep", price: 2500, priceFormatted: "₹2,500", billingBasis: "one-time" },
      { id: "addon-app-analytics", name: "Mobile Crashlytics & Event Telemetry", price: 1500, priceFormatted: "₹1,500", billingBasis: "one-time" },
    ],
  },

  "seo-geo": {
    serviceId: "seo-geo",
    serviceName: "SEO & GEO (Search & AI Engine Optimization)",
    categorySlug: "seo-geo",
    basePrice: 4500,
    basePriceFormatted: "₹4,500+",
    billingBasis: "one-time",
    defaultDescription: "Dual-engine visibility optimization: rank organically on Google and become the cited source on ChatGPT, Perplexity, and AI search engines.",
    questions: [
      {
        id: "seo-scope",
        question: "Select your optimization objective & duration:",
        helpText: "Choose between foundational sprints or monthly retained optimization.",
        type: "single-choice",
        options: [
          {
            id: "seo-sprint-local",
            label: "Local SEO & Google Maps Sprint (One-Time)",
            description: "Local citation audit, Google Business Profile tuning, and local schema markup.",
            priceDelta: 0,
            priceFormatted: "₹4,500 (One-time)",
            billingBasis: "one-time",
          },
          {
            id: "seo-sprint-audit",
            label: "Complete Technical SEO + GEO AI Audit (One-Time)",
            description: "In-depth crawl analysis, LLM citation readiness review, and keyword architecture.",
            priceDelta: 1500,
            priceFormatted: "₹6,000 (One-time)",
            billingBasis: "one-time",
          },
          {
            id: "seo-retainer-monthly",
            label: "Organic Growth & GEO Retainer (Monthly Ongoing)",
            description: "Continuous on-page optimization, monthly ranking tracking, and AI engine citation tuning.",
            priceDelta: 5000,
            priceFormatted: "₹5,000 / month",
            billingBasis: "monthly",
          },
          {
            id: "seo-retainer-aggressive",
            label: "Aggressive Growth & Multi-City GEO Retainer (Monthly Ongoing)",
            description: "Weekly content optimizations, competitive gap attacks, and multi-location rankings.",
            priceDelta: 10000,
            priceFormatted: "₹10,000 / month",
            billingBasis: "monthly",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-schema", name: "Advanced JSON-LD Entity Schema Suite", price: 1999, priceFormatted: "₹1,999", billingBasis: "one-time" },
      { id: "addon-competitor", name: "In-Depth Competitor Keyword & Gap Report", price: 2500, priceFormatted: "₹2,500", billingBasis: "one-time" },
    ],
  },

  presence: {
    serviceId: "presence",
    serviceName: "Digital Presence",
    categorySlug: "digital-presence",
    basePrice: 2500,
    basePriceFormatted: "₹2,500+",
    billingBasis: "one-time",
    defaultDescription: "Establish your local authority, verified map pins, Google reviews channel, and real-time WhatsApp inquiry desk.",
    questions: [
      {
        id: "presence-selection",
        question: "Select your required presence deliverables:",
        helpText: "Choose individual deliverables or the complete foundation suite.",
        type: "single-choice",
        options: [
          {
            id: "presence-gbp",
            label: "Google Business Profile Verification & Map Pin",
            description: "Official Google verification, accurate coordinates, categories, and service hours.",
            priceDelta: 0,
            priceFormatted: "₹2,500 (Base)",
            billingBasis: "one-time",
          },
          {
            id: "presence-social",
            label: "Social Media Footprint Setup (3 Core Channels)",
            description: "Professional branded setup on LinkedIn, Instagram, and Facebook.",
            priceDelta: 0,
            priceFormatted: "₹2,500 (Base)",
            billingBasis: "one-time",
          },
          {
            id: "presence-whatsapp",
            label: "WhatsApp Business Desk & Catalog",
            description: "Catalog setup, instant automated greeting, and quick-reply templates.",
            priceDelta: -1000,
            priceFormatted: "₹1,500 (Base)",
            billingBasis: "one-time",
          },
          {
            id: "presence-bundle",
            label: "Complete Digital Presence Foundation Suite (All-in-One)",
            description: "Google Business Profile + 3 Social Profiles + WhatsApp Catalog (Save ₹1,500).",
            priceDelta: 2500,
            priceFormatted: "₹5,000 (Save ₹1,500)",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-qr-card", name: "Branded QR Review Stand / NFC Card Design", price: 999, priceFormatted: "₹999", billingBasis: "one-time" },
    ],
  },

  branding: {
    serviceId: "branding",
    serviceName: "Digital Branding",
    categorySlug: "digital-branding",
    basePrice: 2500,
    basePriceFormatted: "₹2,500+",
    billingBasis: "one-time",
    defaultDescription: "Minimalist, timeless visual identities: vector logos, cohesive typography, high-contrast color palettes, and print assets.",
    questions: [
      {
        id: "branding-package",
        question: "Select your desired branding scope:",
        helpText: "Deliverables tailored to your company's stage.",
        type: "single-choice",
        options: [
          {
            id: "brand-logo-only",
            label: "Minimalist Vector Logo Design",
            description: "Primary vector emblem + dark/light variations + high-res SVG, PNG, and PDF exports.",
            priceDelta: 0,
            priceFormatted: "₹2,500 (Base)",
            billingBasis: "one-time",
          },
          {
            id: "brand-stationery",
            label: "Stationery Kit (Business Card + Letterhead)",
            description: "Print-ready CMYK layouts, digital invoice header, and email signature graphics.",
            priceDelta: -1000,
            priceFormatted: "₹1,500 (Base)",
            billingBasis: "one-time",
          },
          {
            id: "brand-full-kit",
            label: "Complete Brand Kit (Logo + Palette + Typography + Socials)",
            description: "Comprehensive brand identity guidelines, color swatches, font pairings, and banners.",
            priceDelta: 2500,
            priceFormatted: "₹5,000 (Recommended)",
            billingBasis: "one-time",
          },
          {
            id: "brand-pitch-deck",
            label: "Complete Brand Kit + Corporate Presentation Deck",
            description: "Everything in the Brand Kit plus a custom 10-slide pitch/overview presentation.",
            priceDelta: 5000,
            priceFormatted: "₹7,500",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-social-covers", name: "Custom Social Media Banners (LinkedIn, X, YouTube)", price: 999, priceFormatted: "₹999", billingBasis: "one-time" },
    ],
  },

  consultancy: {
    serviceId: "consultancy",
    serviceName: "Digital Consultancy",
    categorySlug: "digital-consultancy",
    basePrice: 1999,
    basePriceFormatted: "₹1,999+",
    billingBasis: "per-session",
    defaultDescription: "Direct, high-impact technology advisory for founders, business owners, and engineering leaders.",
    questions: [
      {
        id: "consult-format",
        question: "Choose your advisory format:",
        helpText: "Single session or structured strategic blueprint.",
        type: "single-choice",
        options: [
          {
            id: "consult-session",
            label: "1-on-1 Strategic Advisory Session (60 Mins)",
            description: "Direct deep dive on technology selection, conversion bottlenecks, or architecture review.",
            priceDelta: 0,
            priceFormatted: "₹1,999 / session",
            billingBasis: "per-session",
          },
          {
            id: "consult-blueprint",
            label: "90-Day Digital Growth Blueprint",
            description: "Structured milestone roadmap analyzing tech stack, SEO gaps, competitors, and priorities.",
            priceDelta: 4501,
            priceFormatted: "₹6,500 (One-time)",
            billingBasis: "one-time",
          },
          {
            id: "consult-audit",
            label: "Complete Architecture & Security Code Audit",
            description: "Detailed security review, performance bottlenecks inspection, and written report.",
            priceDelta: 6001,
            priceFormatted: "₹8,000 (One-time)",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-followup-call", name: "Follow-Up 30-Minute Check-in Call", price: 999, priceFormatted: "₹999", billingBasis: "per-session" },
    ],
  },

  maintenance: {
    serviceId: "maintenance",
    serviceName: "Maintenance & Support",
    categorySlug: "maintenance-support",
    basePrice: 1500,
    basePriceFormatted: "₹1,500 / month",
    billingBasis: "monthly",
    defaultDescription: "Reliable developer care plans: encrypted cloud backups, 24/7 uptime monitoring, security updates, and SLA support.",
    questions: [
      {
        id: "maint-tier",
        question: "Select your monthly support plan or emergency sprint:",
        helpText: "Recurring peace of mind or immediate technical fix.",
        type: "single-choice",
        options: [
          {
            id: "maint-essential",
            label: "Essential Care Plan (Monthly)",
            description: "Monthly cloud backups, uptime monitoring, security scans, and core framework updates.",
            priceDelta: 0,
            priceFormatted: "₹1,500 / month",
            billingBasis: "monthly",
          },
          {
            id: "maint-standard",
            label: "Standard Business Care Plan (Monthly)",
            description: "Weekly cloud backups, 2 hours developer content/code updates, speed checks.",
            priceDelta: 1500,
            priceFormatted: "₹3,000 / month",
            billingBasis: "monthly",
          },
          {
            id: "maint-priority",
            label: "Priority SLA Retainer (Monthly)",
            description: "Daily backups, 6 hours dev updates, priority 4-hour SLA incident response.",
            priceDelta: 4500,
            priceFormatted: "₹6,000 / month",
            billingBasis: "monthly",
          },
          {
            id: "maint-emergency",
            label: "Emergency Fix & Recovery Sprint (One-Time)",
            description: "Immediate triage for hacked, broken, offline, or corrupted websites.",
            priceDelta: 2000,
            priceFormatted: "₹3,500 (One-time sprint)",
            billingBasis: "one-time",
          },
        ],
      },
    ],
    compatibleAddons: [
      { id: "addon-extra-dev-hour", name: "Additional Developer Hours Pack (2 Hours)", price: 1500, priceFormatted: "₹1,500", billingBasis: "one-time" },
    ],
  },
};

// Estimator Calculation Result Interface
export interface CalculationResult {
  serviceId: string;
  serviceName: string;
  oneTimeTotal: number;
  monthlyTotal: number;
  perSessionTotal: number;
  annualTotal: number;
  hasCustomQuote: boolean;
  itemizedBreakdown: {
    title: string;
    description?: string;
    amount: number;
    amountFormatted: string;
    billingBasis: "one-time" | "monthly" | "per-session" | "annual" | "custom";
    isCustom?: boolean;
  }[];
  selectedAddons: {
    id: string;
    name: string;
    price: number;
    billingBasis: string;
  }[];
  assumptions: string[];
}

/**
 * Pure calculation function for generating indicative estimates
 */
export function calculateEstimate(
  serviceKey: string,
  selectedOptionIds: string[],
  selectedAddonIds: string[]
): CalculationResult {
  const config = estimatorServicesConfig[serviceKey] || estimatorServicesConfig.website;
  
  let oneTimeTotal = 0;
  let monthlyTotal = 0;
  let perSessionTotal = 0;
  let annualTotal = 0;
  let hasCustomQuote = false;

  const itemizedBreakdown: CalculationResult["itemizedBreakdown"] = [];
  const selectedAddons: CalculationResult["selectedAddons"] = [];

  // 1. Initial base service fee (if applicable)
  if (config.billingBasis === "one-time") {
    oneTimeTotal += config.basePrice;
    itemizedBreakdown.push({
      title: `${config.serviceName} Base Platform`,
      description: "Standard foundation, responsive design, and core framework deployment.",
      amount: config.basePrice,
      amountFormatted: `₹${config.basePrice.toLocaleString("en-IN")}`,
      billingBasis: "one-time",
    });
  } else if (config.billingBasis === "monthly") {
    monthlyTotal += config.basePrice;
    itemizedBreakdown.push({
      title: `${config.serviceName} Base Retainer`,
      description: "Foundational ongoing monthly service scope.",
      amount: config.basePrice,
      amountFormatted: `₹${config.basePrice.toLocaleString("en-IN")} / mo`,
      billingBasis: "monthly",
    });
  } else if (config.billingBasis === "per-session") {
    perSessionTotal += config.basePrice;
    itemizedBreakdown.push({
      title: `${config.serviceName} Base Session`,
      description: "Foundational advisory session scope.",
      amount: config.basePrice,
      amountFormatted: `₹${config.basePrice.toLocaleString("en-IN")} / session`,
      billingBasis: "per-session",
    });
  }

  // 2. Iterate through questions and evaluate selected options
  config.questions.forEach((q) => {
    q.options.forEach((opt) => {
      if (selectedOptionIds.includes(opt.id)) {
        if (opt.isCustomQuote) {
          hasCustomQuote = true;
          itemizedBreakdown.push({
            title: opt.label,
            description: opt.description,
            amount: 0,
            amountFormatted: "Custom Quote Required",
            billingBasis: "custom",
            isCustom: true,
          });
        } else if (opt.priceDelta !== 0) {
          const delta = opt.priceDelta;
          if (opt.billingBasis === "monthly") {
            monthlyTotal += delta;
            itemizedBreakdown.push({
              title: opt.label,
              description: opt.description,
              amount: delta,
              amountFormatted: `+₹${delta.toLocaleString("en-IN")} / mo`,
              billingBasis: "monthly",
            });
          } else if (opt.billingBasis === "per-session") {
            perSessionTotal += delta;
            itemizedBreakdown.push({
              title: opt.label,
              description: opt.description,
              amount: delta,
              amountFormatted: `+₹${delta.toLocaleString("en-IN")} / session`,
              billingBasis: "per-session",
            });
          } else {
            oneTimeTotal += delta;
            itemizedBreakdown.push({
              title: opt.label,
              description: opt.description,
              amount: delta,
              amountFormatted: `${delta > 0 ? "+" : ""}₹${delta.toLocaleString("en-IN")}`,
              billingBasis: "one-time",
            });
          }
        }
      }
    });
  });

  // 3. Evaluate selected compatible add-ons
  config.compatibleAddons.forEach((addon) => {
    if (selectedAddonIds.includes(addon.id)) {
      selectedAddons.push({
        id: addon.id,
        name: addon.name,
        price: addon.price,
        billingBasis: addon.billingBasis,
      });

      if (addon.billingBasis === "annual") {
        annualTotal += addon.price;
        itemizedBreakdown.push({
          title: `Add-on: ${addon.name}`,
          amount: addon.price,
          amountFormatted: `₹${addon.price.toLocaleString("en-IN")} / yr`,
          billingBasis: "annual",
        });
      } else if (addon.billingBasis === "monthly") {
        monthlyTotal += addon.price;
        itemizedBreakdown.push({
          title: `Add-on: ${addon.name}`,
          amount: addon.price,
          amountFormatted: `₹${addon.price.toLocaleString("en-IN")} / mo`,
          billingBasis: "monthly",
        });
      } else {
        oneTimeTotal += addon.price;
        itemizedBreakdown.push({
          title: `Add-on: ${addon.name}`,
          amount: addon.price,
          amountFormatted: `₹${addon.price.toLocaleString("en-IN")}`,
          billingBasis: "one-time",
        });
      }
    }
  });

  const assumptions = [
    "Indicative estimate only — final pricing subject to formal Statement of Work (SOW) scope confirmation.",
    "Prometrion does not apply arbitrary percentage markups or hidden surcharges.",
    "All prices quoted in Indian Rupees (INR) based on official Prometrion services catalog.",
    "Third-party expenses (domain renewals, third-party API quotas, Apple Developer Account fees) are payable directly to respective vendors.",
  ];

  return {
    serviceId: config.serviceId,
    serviceName: config.serviceName,
    oneTimeTotal,
    monthlyTotal,
    perSessionTotal,
    annualTotal,
    hasCustomQuote,
    itemizedBreakdown,
    selectedAddons,
    assumptions,
  };
}
