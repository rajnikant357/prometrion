// src/data/webstoreProjects.ts
// Comprehensive, typed portfolio project registry for Prometrion Webstore

export type ProjectCategory =
  | "Business Websites"
  | "Portfolios"
  | "SaaS and Web Applications"
  | "AI Applications"
  | "Admin Dashboards"
  | "E-commerce and Retail"
  | "Education"
  | "Consultancy"
  | "Games and Interactive Experiences";

export interface WebstoreProject {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  shortDesc: string;
  fullDesc: string;
  url: string;
  image?: string;
  stack: string[];
  features: string[];
  statusNote?: string;
}

export const webstoreCategories: ProjectCategory[] = [
  "Business Websites",
  "Portfolios",
  "SaaS and Web Applications",
  "AI Applications",
  "Admin Dashboards",
  "E-commerce and Retail",
  "Education",
  "Consultancy",
  "Games and Interactive Experiences",
];

export const webstoreProjects: WebstoreProject[] = [
  {
    id: "prometrion",
    slug: "prometrion",
    name: "Prometrion",
    category: "Business Websites",
    shortDesc: "Official technology and digital services platform featuring software engineering, ready solutions, and 3D WebGL interfaces.",
    fullDesc: "The flagship digital services and software platform for Prometrion. Engineered with Astro 7, Tailwind CSS v4, and Three.js WebGL to deliver sub-second edge performance, interactive scrollytelling workflows, and transparent service offerings for modern enterprises.",
    url: "https://www.prometrion.com/",
    image: "/projects/prometrion.png",
    stack: ["Astro 7", "Tailwind CSS v4", "Three.js WebGL", "TypeScript", "Lenis Scroll"],
    features: [
      "Interactive 3D WebGL wireframe half-globe with raycasting nodes",
      "Dynamic scrollytelling workflow architecture showcase",
      "Comprehensive digital services and solutions catalog",
      "Dual aurora atmospheric lighting and dark-mode default styling",
      "Edge-optimized static generation with sub-15ms TTFB"
    ]
  },
  {
    id: "sharpr",
    slug: "sharpr",
    name: "Sharpr",
    category: "Education",
    shortDesc: "Innovative EdTech learning platform empowering students aged 10–16 with neighborhood center locations and interactive programs.",
    fullDesc: "An educational platform designed for young learners (Classes 5–10) with the mission 'Sharper Minds. Stronger Future.' Features comprehensive program listings, verified student results, interactive center location discovery, and booking request workflows.",
    url: "https://www.sharpr.in/",
    image: "/projects/sharpr.png",
    stack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Supabase"],
    features: [
      "Academic programs showcase for Classes 5 to 10",
      "Interactive neighborhood center locator and map integration",
      "Free demo class reservation and waitlist onboarding",
      "Student success metrics and verified results timeline",
      "Fluid animated UI with space-themed interactive visuals"
    ]
  },
  {
    id: "paperfolio",
    slug: "paperfolio",
    name: "Paperfolio",
    category: "Portfolios",
    shortDesc: "Interactive software engineering portfolio of Rajnikant Gaurav featuring conversational AI retrieval and project showcases.",
    fullDesc: "The official personal and engineering portfolio of Rajnikant Gaurav. Combines an innovative conversational assistant capable of retrieving background, skills, and projects on demand with a high-contrast minimalist interface.",
    url: "https://www.rajnikantg.in/",
    image: "/projects/paperfolio.png",
    stack: ["React 19", "Tailwind CSS", "TypeScript", "Vite"],
    features: [
      "Natural language conversational retrieval for skills and projects",
      "Interactive showcase of production software and web experiments",
      "Clean Swiss-inspired typography with instant theme responsiveness",
      "Direct GitHub repository and contact desk connections"
    ]
  },
  {
    id: "ultron",
    slug: "ultron",
    name: "Ultron",
    category: "Games and Interactive Experiences",
    shortDesc: "Iron Man-inspired 3D holographic orb interface built with Three.js, real-time hand gesture tracking, and audio effects.",
    fullDesc: "An experimental interactive web application featuring an Iron Man-inspired holographic core. Users can spin, zoom, and manipulate the 3D orb using mouse gestures, keyboard shortcuts, or real-time camera-based hand gestures.",
    url: "https://ultron-psi-snowy.vercel.app/",
    image: "/projects/ultron.png",
    stack: ["Three.js", "Next.js", "WebGL", "MediaPipe / Hand Gestures"],
    features: [
      "Real-time 3D particle and geometric holographic orb rendering",
      "Camera-based hand gesture control (pinch to zoom, fist to rotate)",
      "Interactive audio feedback and HUD sound effects",
      "Responsive canvas with custom orbit and damping controls"
    ]
  },
  {
    id: "prometrion-ai",
    slug: "prometrion-ai",
    name: "Prometrion AI",
    category: "AI Applications",
    shortDesc: "Multimodal intelligence engine and autonomous agent interface built for complex workflows and reasoning.",
    fullDesc: "The web interface and developer client for Prometrion's autonomous AI capabilities. Architected to support multimodal prompt streaming, tool execution graphs, and automated engineering workflows.",
    url: "https://ai.prometrion.com/",
    image: "/projects/prometrion-ai.png",
    stack: ["React", "Next.js", "Tailwind CSS", "AI SDK"],
    features: [
      "Multimodal prompt and streaming response interface",
      "Agent execution graph and tool step inspector",
      "Real-time token usage and latency monitoring metrics",
      "Secure developer API credential management"
    ]
  },
  {
    id: "paper-ui-dashboard",
    slug: "paper-ui-admin-dashboard",
    name: "Paper UI Admin Dashboard",
    category: "Admin Dashboards",
    shortDesc: "Creative sketch and papercraft developer admin dashboard featuring interactive journey timelines and tech stack visualizations.",
    fullDesc: "A distinctive, whimsical dashboard designed with Patrick Hand and Permanent Marker typography mimicking handwritten paper notebooks. Features modular widget layouts, developer career timeline cards, skill level meters, and personal coffee-support micro-transactions.",
    url: "https://admin-dashboard-eight-theta-74.vercel.app/",
    image: "/projects/paper-ui-dashboard.png",
    stack: ["React 19", "Tailwind CSS", "Vite", "Custom Typography"],
    features: [
      "Handcrafted papercraft design system and sketch aesthetic",
      "Interactive career journey milestone cards ('The Spark', 'Growing up')",
      "Modular dashboard widgets for projects, goals, and tech stacks",
      "Micro-transaction support widgets (Buy Me a Tea / Coffee)",
      "Fully responsive flex and grid layouts"
    ]
  },
  {
    id: "qualytics-ai",
    slug: "qualytics-ai",
    name: "Qualytics AI",
    category: "AI Applications",
    shortDesc: "Enterprise AI-powered data quality and observability platform catching data issues before impacting business operations.",
    fullDesc: "An AI-powered data observability platform modeled around proactive enterprise data hygiene. Empowers data teams to construct intelligent validation rules, establish continuous monitoring pipelines, and prevent downstream analytics anomalies.",
    url: "https://rajnikant357.github.io/qualytics-ai-clone/",
    image: "/projects/qualytics-ai.png",
    stack: ["React", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Proactive automated data quality anomaly detection",
      "Intelligent rule builder for relational and lakehouse pipelines",
      "Enterprise workflow integrations and alerting webhooks",
      "Interactive data health dashboard and quality scoring"
    ]
  },
  {
    id: "locallink",
    slug: "locallink",
    name: "LocalLink",
    category: "SaaS and Web Applications",
    shortDesc: "Hyperlocal on-demand marketplace connecting homeowners with verified electricians, carpenters, plumbers, and technicians.",
    fullDesc: "A digital service platform operating in Sikandarpur, Ballia, connecting local residents with vetted service professionals. Enables instant discovery of tradespeople, direct phone contact, verified credentials, and streamlined booking.",
    url: "https://new-locallink.vercel.app/",
    image: "/projects/locallink.png",
    stack: ["React 19", "Tailwind CSS", "REST API", "Vite", "Render Cloud"],
    features: [
      "Service provider directory (electricians, carpenters, tailors, technicians)",
      "Hyperlocal area filtering for instant nearby provider discovery",
      "Direct phone and WhatsApp booking actions",
      "RESTful API architecture connected to backend microservice"
    ]
  },
  {
    id: "pacman-clone",
    slug: "pac-man-clone",
    name: "Pac Man Clone",
    category: "Games and Interactive Experiences",
    shortDesc: "Classic arcade maze game 'Chomper' featuring retro ghost AI navigation, score multipliers, and sound effects.",
    fullDesc: "A faithful browser recreation of the iconic arcade maze game. Built on HTML5 Canvas with custom collision detection, authentic ghost pathfinding algorithms, power pellet mechanics, and high score tracking.",
    url: "https://pacman-clone-virid.vercel.app/",
    image: "/projects/pacman-clone.png",
    stack: ["HTML5 Canvas", "JavaScript", "Web Audio API", "Vercel"],
    features: [
      "Authentic maze geometry and continuous tile-based collision physics",
      "Dynamic ghost AI pathfinding with scatter and chase modes",
      "Power pellet state with flashing vulnerability animations",
      "High score tracking and responsive keyboard/touch arcade controls"
    ]
  },
  {
    id: "quiz-game",
    slug: "quiz-game",
    name: "Quiz Game",
    category: "Games and Interactive Experiences",
    shortDesc: "Interactive trivia and knowledge challenge game with randomized question pools and real-time score calculation.",
    fullDesc: "A dynamic quiz web application built for swift, interactive trivia sessions. Features randomized question batches, immediate feedback on correct and incorrect selections, progress tracking, and final performance analytics.",
    url: "https://rajnikant357.github.io/Quiz-Game/",
    image: "/projects/quiz-game.png",
    stack: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    features: [
      "Randomized 5-question trivia challenge cycles",
      "Instant visual feedback on correct vs incorrect answer choices",
      "Final score calculation with replay option",
      "Clean, distraction-free card interface suitable for mobile and desktop"
    ]
  },
  {
    id: "study-academy-1",
    slug: "study-academy-1",
    name: "Study Academy 1",
    category: "Education",
    shortDesc: "Online educational learning academy portal designed for structured course curricula and academic materials.",
    fullDesc: "A digital education and academic coaching platform created to host course catalogs, lesson schedules, student enrollment resources, and instructor profiles.",
    url: "https://study-academy-1.vercel.app/",
    image: "/projects/study-academy-1.png",
    stack: ["Modern Web", "HTML/CSS", "JavaScript", "Responsive UI"],
    features: [
      "Academic course catalog with curriculum breakdowns",
      "Student learning tracks and syllabus guides",
      "Course registration and online inquiry forms",
      "Responsive education portal design"
    ]
  },
  {
    id: "study-academy-2",
    slug: "study-academy-2",
    name: "Study Academy 2",
    category: "Education",
    shortDesc: "Comprehensive educational learning platform featuring interactive curriculum pathways and student admission portals.",
    fullDesc: "An advanced digital learning academy portal (Edition 2) engineered to host course curricula, interactive learning modules, student enrollment portals, and instructor coaching resources.",
    url: "https://study-academy-2.vercel.app/",
    image: "/projects/study-academy-2.png",
    stack: ["Modern Web", "React", "Tailwind CSS", "JavaScript"],
    features: [
      "Interactive academic course tracks and syllabus explorer",
      "Student enrollment portal and admission application forms",
      "Faculty directory and scheduled lecture timings",
      "High-performance responsive portal interface"
    ]
  },
  {
    id: "gazal-suit-ghar",
    slug: "gazal-suit-ghar",
    name: "Gazal Suit Ghar",
    category: "E-commerce and Retail",
    shortDesc: "Traditional Indian ethnic wear boutique and retail storefront specializing in Banarasi silk sarees, suits, and kurtis.",
    fullDesc: "An ethnic fashion e-commerce catalog showcasing handcrafted Banarasi silk sarees, Anarkali designer suit sets with dupattas, and festive kurtis with prices in INR. Includes dynamic product variant selection, image galleries, and cart state management.",
    url: "https://gazal-suit-ghar.vercel.app/",
    image: "/projects/gazal-suit-ghar.png",
    stack: ["React 19", "Tailwind CSS", "Vite", "Context API Store"],
    features: [
      "Product showcase across Sarees, Kurtis, and Suits in INR",
      "Handcrafted Banarasi silk and designer Anarkali collections",
      "Size and color variant selectors with live stock indicators",
      "Interactive shopping cart drawer with checkout calculation"
    ]
  },
  {
    id: "skribble-clone",
    slug: "skribble-clone",
    name: "Skribble Clone",
    category: "Games and Interactive Experiences",
    shortDesc: "Free multiplayer drawing and word guessing game featuring live canvas rendering and room-based matches.",
    fullDesc: "A real-time multiplayer drawing and guessing pictionary game. Players take turns drawing selected words on a shared canvas while participants guess in real time to earn points across competitive rounds.",
    url: "https://rajnikant357.github.io/skribble-clone/",
    image: "/projects/skribble-clone.png",
    stack: ["HTML5 Canvas", "JavaScript", "Realtime WebSockets", "GitHub Pages"],
    features: [
      "Interactive drawing canvas with color palette and brush size controls",
      "Real-time guess detection with scoring and leaderboards",
      "Multiplayer private room creation and global lobbies",
      "Multi-language word packs supporting over 20 languages"
    ]
  },
  {
    id: "alankarini-mehandi-art",
    slug: "alankarini-mehandi-art",
    name: "Alankarini Mehandi Art",
    category: "Business Websites",
    shortDesc: "Premier bridal mehandi artist studio in Varanasi with doorstep services, design galleries, and 35-day certified academy.",
    fullDesc: "The official business website for Sandhya's Alankarini Mehandi Art in Varanasi (Banaras). Features bridal henna design galleries, doorstep home service bookings, customer testimonials, and enrollment for 35-day certified offline and online mehandi masterclasses.",
    url: "https://alankarini-mehandi-art.vercel.app/",
    image: "/projects/alankarini-mehandi-art.png",
    stack: ["React", "Tailwind CSS", "Lucide Icons", "WhatsApp Direct Integration"],
    features: [
      "Comprehensive bridal, engagement, and festival henna design galleries",
      "Doorstep home service booking with direct WhatsApp/Call hotline (+91 9336814631)",
      "35-day certified mehandi academy course curriculum and fee structure",
      "Verified local Varanasi client reviews and customer gallery"
    ]
  },
  {
    id: "zacson",
    slug: "zacson",
    name: "Zacson",
    category: "Business Websites",
    shortDesc: "High-energy personal fitness training and gym workout template with course offerings and consultation booking.",
    fullDesc: "A bold, modern fitness trainer and gym studio website template. Showcases personalized training programs, group workout schedules, client transformation galleries, and clear pricing options for athletic coaches.",
    url: "https://rajnikant357.github.io/Zacson/",
    image: "/projects/zacson.png",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Grid"],
    features: [
      "Personal and group fitness training program modules",
      "Trainer biography and coaching credentials overview",
      "Photo gallery showcasing gym facilities and workout regimens",
      "Direct consultation inquiry form and pricing breakdown"
    ]
  },
  {
    id: "pankaj-consultancy",
    slug: "pankaj-consultancy",
    name: "Pankaj Consultancy",
    category: "Consultancy",
    shortDesc: "Professional real estate and property consultancy firm providing title verification, buyer representation, and loan advisory.",
    fullDesc: "The official web presence of Pankaj Kumar's real estate and property advisory practice. Offers clients legal property title searches, buyer representation during negotiations, home loan approval assistance, and investment consulting with a structured consultation intake form.",
    url: "https://pankaj-consultancy-123.vercel.app/",
    image: "/projects/pankaj-consultancy.png",
    stack: ["React 19", "Tailwind CSS", "Vite", "Lucide Icons"],
    features: [
      "Property buying assistance and pre-market listing advisory",
      "Legal verification, document scrutiny, and title search assistance",
      "Step-by-step home loan approval and disbursement guidance",
      "Direct contact desk with phone, official email, and consultation intake form"
    ]
  }
];
