const projectImages = import.meta.glob(
  "./assets/projects/*.{png,jpg,jpeg,webp,gif,svg,avif}",
  {
    eager: true,
    as: "url",
  },
);

export function getProjectImage(name) {
  if (!name) return "";
  if (/^https?:\/\//i.test(name)) return name;
  return projectImages[`./assets/projects/${name}`] ?? "";
}

export const services = [
  {
    title: "Full-Stack Applications",
    description: "Custom web applications from frontend to backend.",
    open: true,
  },
  {
    title: "Business Websites",
    description:
      "Modern, responsive websites for businesses and organizations.",
  },
  {
    title: "Backend & APIs",
    description: "REST APIs, authentication, databases, and backend systems.",
  },
  {
    title: "AI Applications",
    description:
      "AI assistants, RAG, document processing, and intelligent features.",
  },
  {
    title: "Security-Focused Development",
    description:
      "Security built in from day one: secure authentication, hardened APIs, and safe infrastructure.",
  },
];

export const featuredProjects = [
  {
    eyebrow: "Full-Stack Web & Desktop Application",
    title: "e-RCP (Electronic Multidisciplinary Consultation Platform)",
    description:
      "A secure, multi-tenant medical platform for organizing multidisciplinary team meetings (RCP) in oncology departments, featuring JWT authentication with token rotation, field-level AES encryption for patient health data, real-time WebRTC video conferencing with lobby admission and host controls, a drag-and-drop clinical form builder, patient case management with anonymization, appointment scheduling with email notifications, PDF report generation, a full regulatory audit trail, and role-based dashboards — deployed as both a web application and an Electron desktop app.",
    callout:
      "Full-stack architecture, real-time video conferencing, field-level encryption, dynamic form builder, multi-tenant audit system, desktop app",
    role: "My Role · Full-Stack Developer",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Electron",
      "Framer Motion",
      "WebRTC",
      "Django",
      "Django REST Framework",
      "Django Channels",
      "WebSocket / Daphne",
      "Fernet (AES)",
      "Google APIs",
      "PostgreSQL",
      "Docker",
      "Redis",
      "JWT (SimpleJWT)",
      "Gunicorn",
      "drf-spectacular",
    ],
    icon: "videoCamera",
    media: "blue",
    placeholder: "Project screenshot — placeholder",
    image: "ercp.jpeg",
    reverse: false,
    links: [
      // { label: "Live Demo", href: "#work" },
      // { label: "Case Study", href: "#work" },
    ],
  },
  {
    eyebrow: "e-RCP · Core Module",
    title: "Dynamic Clinical Form Builder",
    description:
      "A visual drag-and-drop schema designer and submission engine for medical teams — dynamic clinical templates with infinitely nested sections, rich field types (text, number, date, select, multi-checkbox, and DICOM file uploads), and sortable reordering. Backed by atomic transactional sync, Fernet-encrypted submissions, a case lifecycle workflow (New → Re-discuss → Closed), auto-generated reference codes, role-based data stripping, and batch Excel export with formatted styling.",
    callout:
      "Drag-and-drop schema designer, encrypted dynamic submissions, atomic sync, Excel export, case lifecycle workflow",
    role: "My Role · Full-Stack Developer",
    tech: [
      "React",
      "@dnd-kit (DnD)",
      "Django REST Framework",
      "PostgreSQL",
      "Fernet (AES) Encryption",
      "openpyxl (Excel)",
    ],
    icon: "gridFour",
    media: "pink",
    placeholder: "Project screenshot — placeholder",
    image: "form-builder.jpg",
    reverse: true,
    links: [
      {
        label: "Repo",
        href: "https://github.com/T4F0/Dynamic-Form-Builder",
        external: true,
      },
      // { label: "Case Study", href: "#work" },
    ],
  },

  {
    eyebrow: "AI × Legal Technology",
    title: "Mu7ami",
    description:
      "An AI-powered legal assistant designed for Algerian users, combining natural-language interaction with retrieval-augmented generation over Algerian legal documents.",
    callout: "Arabic/Darija interaction, legal document retrieval, RAG, AI",
    role: "My Role · Full-Stack & AI Developer",
    tech: ["Python", "AI / RAG", "NLP", "OCR"],
    icon: "scales",
    media: "purple",
    placeholder: "Project screenshot — placeholder",
    image: "mu7ami.png",
    reverse: true,
    links: [
      {
        label: "Design",
        href: "https://www.figma.com/design/VSmcGCgY0ZXPjT6OeVlysT/Mu7ami-App",
        external: true,
      },
      // { label: "Live Demo", href: "#work" },
      // { label: "Case Study", href: "#work" },
    ],
  },
  {
    eyebrow: "Full-Stack Web Application",
    title: "Nafass",
    description:
      "A platform designed for psychologists and patients, featuring authentication, therapist/patient profiles, matching functionality, scheduling, dashboards, and secure API communication.",
    callout:
      "Full-stack architecture, authentication, matching system, dashboards",
    role: "My Role · Full-Stack Developer",
    tech: ["React", "Django", "PostgreSQL", "Docker", "JWT"],
    icon: "heartbeat",
    media: "indigo",
    placeholder: "Project screenshot — placeholder",
    image: "nafass.png",
    reverse: false,
    links: [
      {
        label: "Design",
        href: "https://www.figma.com/design/mlZInFvcFsKoYTNEZCuQa7/Nafass-Design?node-id=0-1&t=Ux5nG8aRbxY61kNl-1",
        external: true,
      },
      // { label: "Live Demo", href: "#work" },
      // { label: "Case Study", href: "#work" },
    ],
  },
  {
    eyebrow: "Web Application",
    title: "Freely — Freelance Marketplace",
    description:
      "A two-sided freelance marketplace where I built the responsive SvelteKit web front end — a marketing landing page, an infinite job feed with multi-criteria search and filters (budget, category, project size, payment structure, expertise level, date), job posting and proposal flows, real-time chat with typing indicators and online presence, voice messages and media sharing, plus client & freelancer dashboards with ratings, earnings analytics, and a secure checkout.",
    callout:
      "Responsive web UI, real-time messaging, searchable job feed, job posting & proposals, analytics dashboards, secure checkout",
    role: "My Role · Web Front-End Developer",
    tech: ["SvelteKit", "Tailwind CSS", "Flowbite", "Socket.IO"],
    icon: "storefront",
    media: "gold",
    placeholder: "Project screenshot — placeholder",
    image: "freely.png",
    reverse: false,
    links: [
      {
        label: "Design",
        href: "https://www.figma.com/design/lMOey4GEvWYOruKADk4jUN/Freelancing-platform-prototypes?node-id=0-1&t=74KFuNdaB8SWSiZW-1",
        external: true,
      },
      {
        label: "Live Demo",
        href: "https://drive.google.com/file/d/1z2F2Pw7_4iSpAIlBQtJZn0h4H-tAF2ud/view?usp=sharing",
        external: true,
      },
      // { label: "Case Study", href: "#work" },
    ],
  },
];

export const workGridProjects = [
  {
    eyebrow: "Open for Projects",
    title: "Your Idea. Any Stack. Let's Build It.",
    description:
      "A SaaS, an e-commerce platform, a dashboard, or something the web hasn't seen yet — bring the idea, I'll bring the technology. From the first sketch to a deployed, production-ready product, built with the right tools for the job.",
    icon: "rocketLaunch",
    media: "indigo",
    placeholder: "Ready for your next project",
    image: "openwork.jpg",
    cta: true,
    tech: [
      "React",
      "Next.js",
      "SvelteKit",
      "Django",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Deploy & Ship",
    ],
    links: [{ label: "Start a Project", href: "#contact", primary: true }],
  },
];

export const securityItems = [
  { icon: "network", label: "Network Security" },
  { icon: "shieldCheck", label: "Web Security" },
  { icon: "bug", label: "Penetration Testing" },
  { icon: "arrowCircleUpRight", label: "Reverse Engineering" },
  { icon: "linux", label: "Linux" },
  { icon: "terminal", label: "Nmap" },
  { icon: "bugBeetle", label: "Burp Suite" },
  { icon: "code", label: "Ghidra" },
  { icon: "database", label: "Enumeration" },
  { icon: "fingerprint", label: "Privilege Escalation" },
  { icon: "trophy", label: "CTFs" },
  { icon: "cpu", label: "Hack The Box" },
];

export const skills = [
  {
    title: "Frontend",
    text: "React · Next.js · TypeScript · SvelteKit · Tailwind CSS",
  },
  {
    title: "Backend",
    text: "Python · Django · DRF · Node.js · Express.js",
  },
  {
    title: "Databases",
    text: "PostgreSQL · MySQL · SQLite · MongoDB",
  },
  {
    title: "APIs & Architecture",
    text: "REST APIs · JWT · Swagger/OpenAPI",
  },
  {
    title: "DevOps & Infrastructure",
    text: "Docker · Linux · Git · Kubernetes · Jenkins · CI/CD",
  },
  {
    title: "Cybersecurity",
    text: "Burp Suite · Nmap · Ghidra · Hack The Box",
    accent: true,
  },
  {
    title: "AI",
    text: "RAG · NLP · OCR · LLM Integration · Whisper",
  },
  {
    title: "Networking & Security",
    text: "GNS3 · Cisco Packet Tracer · Web Security · Cryptography",
  },
];

export const aboutParagraphs = [
  "I started with software development — building interfaces, APIs, and full products. Over time I became curious about what actually happens underneath: operating systems, networks, and the security assumptions most applications quietly rely on.",
  "That curiosity turned into a deliberate path: Software Engineering → Full-Stack Development → Networking → Cybersecurity → AI. Each step reshaped how I build — with more attention to reliability, edge cases, and how systems fail.",
  "I’m currently studying Computer Science with a focus on Cybersecurity, and I spend most of my time outside class building real projects, competing in CTFs, and going deeper into how secure systems are actually designed.",
  "Alongside my studies, I’ve spent 3+ years building web applications for real clients, learning to turn ideas and requirements into working products.",
];

export const journey = [
  "Software Engineering",
  "Full-Stack Dev",
  "Networking",
  "Cybersecurity",
  "AI",
];

export const experience = [
  {
    icon: "briefcase",
    number: "3+ Years",
    title: "Freelance Development",
    description:
      "Building full-stack web applications for real clients, from requirements to deployment.",
  },
  {
    icon: "brain",
    number: "250+",
    title: "LeetCode Problems Solved",
    description: "Including Medium and Hard problems.",
  },
  {
    icon: "trophy",
    number: "15+",
    title: "Hackathons & CTFs",
    description: "Competed in 15+ hackathons and CTFs, taking 3+ wins.",
  },
  {
    icon: "rocketLaunch",
    number: "6+",
    title: "Client Projects Delivered",
    description:
      "Production web applications shipped for real clients, end to end.",
  },
];

export const leadershipChips = [
  "Team Leadership",
  "Event Strategy",
  "Technical Coordination",
  "Project Management",
  "Volunteer & Team Organization",
  "Participant Experience",
  "Partnerships & Collaborations",
  "Logistics & Execution",
  "Community Building",
];

export const journeyEvents = [
  { title: "INGENIUMS", subtitle: "President · 2025/26", tone: "accent" },
  {
    title: "KODIKOS",
    subtitle: "Hackathon · Technology & Innovation",
    tone: "neutral",
  },
  { title: "INGEHACK", subtitle: "Cybersecurity · CTF", tone: "neutral" },
  {
    title: "INGENEER",
    subtitle: "Multidisciplinary Engineering Challenge · Hogwarts Edition",
    tone: "gold",
  },
];

export const kodikos = {
  badge: "CLUB PRESIDENT",
  eyebrow: "Hackathon · Technology & Innovation",
  title: "Kodikos",
  description:
    "A large-scale hackathon bringing students and developers together to transform ideas into working technological solutions. Part of the leadership and organizing team behind strategy, coordination, and execution.",
  chips: [
    "Event Strategy",
    "Team Coordination",
    "Technical Organization",
    "Participant Experience",
    "Logistics",
    "Event Execution",
  ],
  stats: [
    { value: "60+", label: "Participants" },
    { value: "15+", label: "Teams" },
    { value: "9+", label: "Universities" },
    { value: "36", label: "Hours" },
  ],
};

export const ingehack = {
  badge: "CLUB PRESIDENT",
  eyebrow: "Cybersecurity · Capture The Flag",
  title: "IngeHack",
  description:
    "A cybersecurity-focused competition centered around practical security challenges and Capture The Flag problem solving — organized and coordinated as part of the leadership team.",
  chips: [
    "Web Security",
    "Cryptography",
    "Reverse Engineering",
    "Network Security",
    "Linux",
    "Technical Problem Solving",
  ],
  neutralChips: [
    "Team Coordination",
    "Challenge Coordination",
    "Competition Structure",
    "Logistics",
    "Participant Experience",
  ],
  stats: [
    { value: "17+", label: "Teams" },
    { value: "85+", label: "Participants" },
    { value: "60+", label: "Challenges" },
    { value: "35", label: "Organizers" },
  ],
};

export const ingeneer = {
  badge: "EVENT LEADER",
  eyebrow: "Multidisciplinary Engineering Challenge · Hogwarts Edition",
  title: "Ingeneer",
  description:
    "Not a single-discipline CTF — Ingeneer is a Hogwarts-themed, multidisciplinary technical competition combining CTF, problem solving, design, AI, and networking into one immersive experience. Participants are challenged to switch across technical and creative disciplines rather than master one.",
  disciplines: [
    {
      icon: "lockKey",
      tone: "indigo",
      title: "CTF",
      description:
        "Investigation, exploitation, analysis, technical reasoning.",
    },
    {
      icon: "brain",
      tone: "teal",
      title: "Problem Solving",
      description: "Logic, algorithms, unconventional technical problems.",
    },
    {
      icon: "palette",
      tone: "pink",
      title: "Design",
      description:
        "Creative, visual challenges combining design and communication.",
    },
    {
      icon: "robot",
      tone: "gold",
      title: "Artificial Intelligence",
      description: "AI concepts, tools, reasoning, and practical applications.",
    },
    {
      icon: "globe",
      tone: "blue",
      title: "Networking",
      description:
        "Protocols, configuration, troubleshooting, network problem solving.",
    },
  ],
  chips: [
    "Event Planning",
    "Team Coordination",
    "Challenge Coordination",
    "Cross-Disciplinary Coordination",
    "Logistics & Execution",
  ],
};

export const ecsel = {
  badge: "REPRESENTATION · NETWORKING · COMMUNITY",
  eyebrow: "Ingeniums Club · Representative · 2025/26",
  title: "ECSEL Expo",
  subtitle: "Representing Ingeniums at Algeria’s E-Commerce Ecosystem",
  description:
    "Represented Ingeniums Club at ECSEL Expo, one of Algeria’s major e-commerce and technology events — connecting our student technology community with the broader Algerian tech and entrepreneurship ecosystem.",
  photos: [
    {
      tone: "indigo",
      iconSize: 56,
      label: "Representing Ingeniums at ECSEL Expo",
      full: true,
      tall: true,
    },
    {
      tone: "teal",
      iconSize: 40,
      label: "Connecting with the Algerian tech ecosystem",
      full: false,
    },
    {
      tone: "gold",
      iconSize: 40,
      label: "Meeting entrepreneurs and technology professionals",
      full: false,
    },
    {
      tone: "purple",
      iconSize: 48,
      label: "Ingeniums Club at ECSEL Expo",
      full: true,
    },
  ],
  roleChips: [
    "Representing Ingeniums Club",
    "Communicating Vision",
    "Engaging With Professionals",
    "Ecosystem Networking",
    "Building Connections",
    "Presenting Club Initiatives",
  ],
};

export const leadershipInAction = [
  {
    label: "BUILD",
    title: "Kodikos",
    description: "Turning ideas into technological solutions.",
    tone: "indigo",
  },
  {
    label: "SECURE",
    title: "IngeHack",
    description: "Learning cybersecurity through practical challenges.",
    tone: "teal",
  },
  {
    label: "ADAPT",
    title: "Ingeneer",
    description:
      "Combining different disciplines to solve unfamiliar problems.",
    tone: "gold",
  },
];

export const articles = [
  {
    category: "Networking",
    title: "What Is Banner Grabbing?",
    meta: "Jan 2026 · 4 min read",
  },
  {
    category: "Networking",
    title: "Understanding Nmap Service Detection",
    meta: "Jan 2026 · 6 min read",
  },
  {
    category: "Cybersecurity",
    title: "My Experience With Hack The Box Getting Started",
    meta: "Feb 2026 · 5 min read",
  },
  {
    category: "Backend",
    title: "Building JWT Authentication With Django REST Framework",
    meta: "Mar 2026 · 8 min read",
  },
  {
    category: "DevOps",
    title: "Dockerizing Django + PostgreSQL",
    meta: "Apr 2026 · 7 min read",
  },
  {
    category: "AI",
    title: "Building a RAG System for Algerian Legal Documents",
    meta: "May 2026 · 9 min read",
  },
  {
    category: "Cybersecurity",
    title: "Lessons From Organizing a Cybersecurity CTF",
    meta: "Jun 2026 · 6 min read",
  },
];

export const contributionCells = [
  0.65, 0.45, 0.65, 0.45, 0.3, 0.45, 0.3, 0.06, 0.45, 0.45, 0.45, 0.1, 0.45,
  0.65, 0.65, 0.65, 0.1, 0.06, 0.3, 0.45, 0.06, 0.18, 0.1, 0.18, 0.45, 0.06,
  0.3, 0.45, 0.18, 0.45, 0.06, 0.65, 0.18, 0.1, 0.65, 0.1, 0.18, 0.45, 0.1,
  0.06, 0.65, 0.1, 0.3, 0.65, 0.1, 0.3, 0.06, 0.06, 0.18, 0.45, 0.65, 0.18,
  0.18, 0.06, 0.65, 0.3, 0.1, 0.3, 0.3, 0.45, 0.3, 0.45, 0.65, 0.18, 0.3, 0.1,
  0.3, 0.3, 0.1, 0.18, 0.06, 0.06, 0.18, 0.18, 0.1, 0.65, 0.06, 0.1, 0.18, 0.3,
  0.3, 0.1, 0.06, 0.18, 0.45, 0.1, 0.18, 0.3, 0.18, 0.65, 0.65, 0.06, 0.06, 0.1,
  0.18, 0.45, 0.06, 0.06, 0.06, 0.65, 0.18, 0.3, 0.45, 0.65, 0.3, 0.18, 0.45,
  0.3, 0.1, 0.3, 0.65, 0.3, 0.45, 0.06, 0.45, 0.45, 0.3, 0.18, 0.45, 0.3, 0.45,
  0.18, 0.3, 0.18, 0.06, 0.1, 0.3, 0.1, 0.3, 0.45,
];

export const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the client’s idea, requirements, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the technical approach and roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop iteratively with regular communication.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Test functionality, responsiveness, performance and security.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy and deliver the finished product.",
  },
];
