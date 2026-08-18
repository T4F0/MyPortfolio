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
    image: "form-builder.webp",
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
    image: "nafass.webp",
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
      {
        label: "Repo",
        href: "https://github.com/T4F0/Freely-platform",
        external: true
      },
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
    image: "openwork.webp",
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
  image: "kodikos.webp",

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
  image: "ingehack.jpg",
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
  image: "ingeneer.jpg",
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
      image: "excel expo.webp",
    },
    {
      tone: "teal",
      iconSize: 40,
      label: "Connecting with the Algerian tech ecosystem",
      full: false,
      image: "meeting wazir.jpg",
    },
    {
      tone: "gold",
      iconSize: 40,
      label: "Meeting entrepreneurs and technology professionals",
      full: false,
      image: "representing ingeniums (1).jpg",
    },
    {
      tone: "purple",
      iconSize: 48,
      label: "Ingeniums Club at ECSEL Expo",
      full: true,
      image: "ingeniums club.jpg",
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

export const frenchData = {
  services: [
    {
      title: "Applications Full-Stack",
      description: "Applications web personnalisées, du frontend au backend.",
      open: true,
    },
    {
      title: "Sites Web Professionnels",
      description:
        "Sites web modernes et responsifs pour entreprises et organisations.",
    },
    {
      title: "Backend & APIs",
      description: "APIs REST, authentification, bases de données et systèmes backend.",
    },
    {
      title: "Applications IA",
      description:
        "Assistants IA, RAG, traitement de documents et fonctionnalités intelligentes.",
    },
    {
      title: "Développement Axé Sécurité",
      description:
        "La sécurité intégrée dès le premier jour : authentification sécurisée, APIs durcies et infrastructure fiable.",
    },
  ],

  featuredProjects: [
    {
      eyebrow: "Application Web & Desktop Full-Stack",
      title: "e-RCP (Plateforme de Consultation Multidisciplinaire Électronique)",
      description:
        "Une plateforme médicale sécurisée et multi-tenant pour l'organisation de réunions de concertation pluridisciplinaire (RCP) dans les services d'oncologie, avec authentification JWT et rotation de tokens, chiffrement AES au niveau des champs pour les données de santé des patients, vidéconférence WebRTC en temps réel avec salle d'attente et contrôles de l'hôte, un constructeur de formulaires cliniques par glisser-déposer, la gestion de cas patients avec anonymisation, la planification de rendez-vous avec notifications par e-mail, la génération de rapports PDF, un journal d'audit réglementaire complet et des tableaux de bord par rôle — déployée en tant qu'application web et application de bureau Electron.",
      callout:
        "Architecture full-stack, vidéconférence en temps réel, chiffrement au niveau des champs, constructeur de formulaires dynamique, système d'audit multi-tenant, application de bureau",
      role: "Mon Rôle · Développeur Full-Stack",
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
      placeholder: "Capture d'écran du projet — placeholder",
      image: "ercp.jpeg",
      reverse: false,
      links: [],
    },
    {
      eyebrow: "e-RCP · Module Principal",
      title: "Dynamic Clinical Form Builder",
      description:
        "Un concepteur visuel de schémas par glisser-déposer et un moteur de soumission pour les équipes médicales — des modèles cliniques dynamiques avec des sections imbriquées à l'infini, des types de champs riches (texte, nombre, date, sélection, cases à cocher multiples et téléchargements de fichiers DICOM), et un réordonnancement triable. Le tout soutenu par une synchronisation transactionnelle atomique, des soumissions chiffrées avec Fernet, un workflow de cycle de vie des cas (Nouveau → Rediscuter → Fermé), des codes de référence générés automatiquement, un filtrage des données par rôle et une exportation Excel par lot avec mise en forme.",
      callout:
        "Concepteur de schémas par glisser-déposer, soumissions dynamiques chiffrées, synchronisation atomique, export Excel, workflow de cycle de vie des cas",
      role: "Mon Rôle · Développeur Full-Stack",
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
      placeholder: "Capture d'écran du projet — placeholder",
      image: "form-builder.webp",
      reverse: true,
      links: [
        {
          label: "Repo",
          href: "https://github.com/T4F0/Dynamic-Form-Builder",
          external: true,
        },
      ],
    },
    {
      eyebrow: "IA × Technologie Juridique",
      title: "Mu7ami",
      description:
        "Un assistant juridique alimenté par l'IA, conçu pour les utilisateurs algériens, combinant l'interaction en langage naturel avec la génération augmentée par récupération (RAG) sur des documents juridiques algériens.",
      callout: "Interaction en arabe/darija, récupération de documents juridiques, RAG, IA",
      role: "Mon Rôle · Développeur Full-Stack & IA",
      tech: ["Python", "AI / RAG", "NLP", "OCR"],
      icon: "scales",
      media: "purple",
      placeholder: "Capture d'écran du projet — placeholder",
      image: "mu7ami.png",
      reverse: true,
      links: [
        {
          label: "Design",
          href: "https://www.figma.com/design/VSmcGCgY0ZXPjT6OeVlysT/Mu7ami-App",
          external: true,
        },
      ],
    },
    {
      eyebrow: "Application Web Full-Stack",
      title: "Nafass",
      description:
        "Une plateforme conçue pour les psychologues et les patients, avec authentification, profils thérapeute/patient, fonctionnalité de mise en relation, planification, tableaux de bord et communication API sécurisée.",
      callout:
        "Architecture full-stack, authentification, système de mise en relation, tableaux de bord",
      role: "Mon Rôle · Développeur Full-Stack",
      tech: ["React", "Django", "PostgreSQL", "Docker", "JWT"],
      icon: "heartbeat",
      media: "indigo",
      placeholder: "Capture d'écran du projet — placeholder",
      image: "nafass.webp",
      reverse: false,
      links: [
        {
          label: "Design",
          href: "https://www.figma.com/design/mlZInFvcFsKoYTNEZCuQa7/Nafass-Design?node-id=0-1&t=Ux5nG8aRbxY61kNl-1",
          external: true,
        },
      ],
    },
    {
      eyebrow: "Application Web",
      title: "Freely — Marketplace Freelance",
      description:
        "Une marketplace freelance bilatérale pour laquelle j'ai développé le front-end web responsif en SvelteKit — une page d'atterrissage marketing, un flux d'offres infini avec recherche et filtres multicritères (budget, catégorie, taille du projet, structure de paiement, niveau d'expertise, date), les flux de publication d'offres et de propositions, un chat en temps réel avec indicateurs de frappe et présence en ligne, messages vocaux et partage de médias, ainsi que des tableaux de bord client et freelance avec notes, analyses des revenus et un processus de paiement sécurisé.",
      callout:
        "Interface web responsive, messagerie en temps réel, flux d'offres avec recherche, publication d'offres et propositions, tableaux de bord analytiques, paiement sécurisé",
      role: "Mon Rôle · Développeur Front-End Web",
      tech: ["SvelteKit", "Tailwind CSS", "Flowbite", "Socket.IO"],
      icon: "storefront",
      media: "gold",
      placeholder: "Capture d'écran du projet — placeholder",
      image: "freely.png",
      reverse: false,
      links: [
        {
          label: "Design",
          href: "https://www.figma.com/design/lMOey4GEvWYOruKADk4jUN/Freelancing-platform-prototypes?node-id=0-1&t=74KFuNdaB8SWSiZW-1",
          external: true,
        },
        {
          label: "Démo en Direct",
          href: "https://drive.google.com/file/d/1z2F2Pw7_4iSpAIlBQtJZn0h4H-tAF2ud/view?usp=sharing",
          external: true,
        },
        {
          label: "Repo",
          href: "https://github.com/T4F0/Freely-platform",
          external: true,
        },
      ],
    },
  ],

  workGridProjects: [
    {
      eyebrow: "Ouvert aux Projets",
      title: "Votre Idée. N'importe quelle Stack. Construisons-la.",
      description:
        "Un SaaS, une plateforme e-commerce, un tableau de bord, ou quelque chose que le web n'a pas encore vu — apportez l'idée, j'apporte la technologie. Du premier croquis à un produit déployé et prêt pour la production, construit avec les bons outils pour le travail.",
      icon: "rocketLaunch",
      media: "indigo",
      placeholder: "Prêt pour votre prochain projet",
      image: "openwork.webp",
      cta: true,
      tech: [
        "React",
        "Next.js",
        "SvelteKit",
        "Django",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Déploiement & Mise en Production",
      ],
      links: [{ label: "Lancer un Projet", href: "#contact", primary: true }],
    },
  ],

  securityItems: [
    { icon: "network", label: "Sécurité Réseau" },
    { icon: "shieldCheck", label: "Sécurité Web" },
    { icon: "bug", label: "Tests d'Intrusion" },
    { icon: "arrowCircleUpRight", label: "Reverse Engineering" },
    { icon: "linux", label: "Linux" },
    { icon: "terminal", label: "Nmap" },
    { icon: "bugBeetle", label: "Burp Suite" },
    { icon: "code", label: "Ghidra" },
    { icon: "database", label: "Énumération" },
    { icon: "fingerprint", label: "Élévation de Privilèges" },
    { icon: "trophy", label: "CTFs" },
    { icon: "cpu", label: "Hack The Box" },
  ],

  skills: [
    {
      title: "Frontend",
      text: "React · Next.js · TypeScript · SvelteKit · Tailwind CSS",
    },
    {
      title: "Backend",
      text: "Python · Django · DRF · Node.js · Express.js",
    },
    {
      title: "Bases de Données",
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
      title: "Cybersécurité",
      text: "Burp Suite · Nmap · Ghidra · Hack The Box",
      accent: true,
    },
    {
      title: "IA",
      text: "RAG · NLP · OCR · LLM Integration · Whisper",
    },
    {
      title: "Réseaux & Sécurité",
      text: "GNS3 · Cisco Packet Tracer · Sécurité Web · Cryptographie",
    },
  ],

  aboutParagraphs: [
    "J'ai commencé par le développement logiciel — conception d'interfaces, d'APIs et de produits complets. Avec le temps, je suis devenu curieux de ce qui se passe réellement en dessous : les systèmes d'exploitation, les réseaux et les hypothèses de sécurité sur lesquelles la plupart des applications reposent silencieusement.",
    "Cette curiosité s'est transformée en un parcours délibéré : Génie Logiciel → Développement Full-Stack → Réseaux → Cybersécurité → IA. Chaque étape a remodelé ma façon de construire — avec plus d'attention portée à la fiabilité, aux cas limites et à la manière dont les systèmes peuvent échouer.",
    "J'étudie actuellement l'informatique avec une spécialisation en cybersécurité, et je passe la plupart de mon temps en dehors des cours à construire des projets concrets, à participer à des CTF et à approfondir la conception réelle des systèmes sécurisés.",
    "En parallèle de mes études, cela fait plus de 3 ans que je conçois des applications web pour de vrais clients, apprenant à transformer des idées et des besoins en produits fonctionnels.",
  ],

  journey: [
    "Génie Logiciel",
    "Dev Full-Stack",
    "Réseaux",
    "Cybersécurité",
    "IA",
  ],

  experience: [
    {
      icon: "briefcase",
      number: "3+ Years",
      title: "Développement Freelance",
      description:
        "Conception d'applications web full-stack pour de vrais clients, de l'analyse des besoins au déploiement.",
    },
    {
      icon: "brain",
      number: "250+",
      title: "Problèmes LeetCode Résolus",
      description: "Incluant des problèmes de difficulté Moyenne et Difficile.",
    },
    {
      icon: "trophy",
      number: "15+",
      title: "Hackathons & CTFs",
      description: "Participation à plus de 15 hackathons et CTF, avec plus de 3 victoires.",
    },
    {
      icon: "rocketLaunch",
      number: "6+",
      title: "Projets Clients Livrés",
      description:
        "Applications web en production livrées pour de vrais clients, de A à Z.",
    },
  ],

  leadershipChips: [
    "Leadership d'Équipe",
    "Stratégie Événementielle",
    "Coordination Technique",
    "Gestion de Projet",
    "Organisation de Bénévoles et d'Équipe",
    "Expérience des Participants",
    "Partenariats & Collaborations",
    "Logistique & Exécution",
    "Construction Communautaire",
  ],

  journeyEvents: [
    { title: "INGENIUMS", subtitle: "Président · 2025/26", tone: "accent" },
    {
      title: "KODIKOS",
      subtitle: "Hackathon · Technologie & Innovation",
      tone: "neutral",
    },
    { title: "INGEHACK", subtitle: "Cybersécurité · CTF", tone: "neutral" },
    {
      title: "INGENEER",
      subtitle: "Challenge d'Ingénierie Multidisciplinaire · Édition Poudlard",
      tone: "gold",
    },
  ],

  kodikos: {
    badge: "PRÉSIDENT DU CLUB",
    eyebrow: "Hackathon · Technologie & Innovation",
    title: "Kodikos",
    description:
      "Un hackathon d'envergure réunissant étudiants et développeurs pour transformer des idées en solutions technologiques concrètes. Membre de l'équipe de leadership et d'organisation, impliqué dans la stratégie, la coordination et l'exécution de l'événement.",
    chips: [
      "Stratégie Événementielle",
      "Coordination d'Équipe",
      "Organisation Technique",
      "Expérience des Participants",
      "Logistique",
      "Exécution d'Événement",
    ],
    stats: [
      { value: "60+", label: "Participants" },
      { value: "15+", label: "Équipes" },
      { value: "9+", label: "Universités" },
      { value: "36", label: "Heures" },
    ],
    image: "kodikos.webp",
  },

  ingehack: {
    badge: "PRÉSIDENT DU CLUB",
    eyebrow: "Cybersécurité · Capture The Flag",
    title: "IngeHack",
    description:
      "Une compétition axée sur la cybersécurité, centrée sur des défis de sécurité pratiques et la résolution de problèmes Capture The Flag — organisée et coordonnée dans le cadre de l'équipe de leadership.",
    chips: [
      "Sécurité Web",
      "Cryptographie",
      "Reverse Engineering",
      "Sécurité Réseau",
      "Linux",
      "Résolution de Problèmes Techniques",
    ],
    neutralChips: [
      "Coordination d'Équipe",
      "Coordination des Défis",
      "Structure de Compétition",
      "Logistique",
      "Expérience des Participants",
    ],
    stats: [
      { value: "17+", label: "Équipes" },
      { value: "85+", label: "Participants" },
      { value: "60+", label: "Défis" },
      { value: "35", label: "Organisateurs" },
    ],
    image: "ingehack.jpg",
  },

  ingeneer: {
    badge: "CHEF DE PROJET",
    eyebrow: "Challenge d'Ingénierie Multidisciplinaire · Édition Poudlard",
    title: "Ingeneer",
    description:
      "Pas un CTF mono-discipline — Ingeneer est une compétition technique multidisciplinaire à thème Poudlard, combinant CTF, résolution de problèmes, design, IA et réseaux en une seule expérience immersive. Les participants sont challengés à basculer entre disciplines techniques et créatives plutôt que de maîtriser une seule.",
    disciplines: [
      {
        icon: "lockKey",
        tone: "indigo",
        title: "CTF",
        description:
          "Investigation, exploitation, raisonnement technique.",
      },
      {
        icon: "brain",
        tone: "teal",
        title: "Résolution de Problèmes",
        description: "Logique, algorithmes, problèmes techniques hors des sentiers battus.",
      },
      {
        icon: "palette",
        tone: "pink",
        title: "Design",
        description:
          "Défis créatifs et visuels combinant design et communication.",
      },
      {
        icon: "robot",
        tone: "gold",
        title: "Intelligence Artificielle",
        description: "Concepts IA, outils, raisonnement et applications pratiques.",
      },
      {
        icon: "globe",
        tone: "blue",
        title: "Réseaux",
        description:
          "Protocoles, configuration, dépannage, résolution de problèmes réseau.",
      },
    ],
    chips: [
      "Planification d'Événement",
      "Coordination d'Équipe",
      "Coordination des Défis",
      "Coordination Transdisciplinaire",
      "Logistique & Exécution",
    ],
    image: "ingeneer.jpg",
  },

  ecsel: {
    badge: "REPRÉSENTATION · RÉSEAUTAGE · COMMUNAUTÉ",
    eyebrow: "Club Ingeniums · Représentant · 2025/26",
    title: "ECSEL Expo",
    subtitle: "Représenter Ingeniums à l'écosystème algérien du e-commerce",
    description:
      "Représentation du club Ingeniums à ECSEL Expo, l'un des principaux événements e-commerce et technologie en Algérie — connectant notre communauté étudiante technologique à l'écosystème algérien plus large de la tech et de l'entrepreneuriat.",
    photos: [
      {
        tone: "indigo",
        iconSize: 56,
        label: "Représentation d'Ingeniums à ECSEL Expo",
        full: true,
        tall: true,
        image: "excel expo.webp",
      },
      {
        tone: "teal",
        iconSize: 40,
        label: "Connection avec l'écosystème tech algérien",
        full: false,
        image: "meeting wazir.jpg",
      },
      {
        tone: "gold",
        iconSize: 40,
        label: "Échange avec des entrepreneurs et professionnels de la technologie",
        full: false,
        image: "representing ingeniums (1).jpg",
      },
      {
        tone: "purple",
        iconSize: 48,
        label: "Club Ingeniums à ECSEL Expo",
        full: true,
        image: "ingeniums club.jpg",
      },
    ],
    roleChips: [
      "Représentation du Club Ingeniums",
      "Communication de la Vision",
      "Échange avec des Professionnels",
      "Réseautage Écosystémique",
      "Création de Liens",
      "Présentation des Initiatives du Club",
    ],
  },

  leadershipInAction: [
    {
      label: "BUILD",
      title: "Kodikos",
      description: "Transformer les idées en solutions technologiques.",
      tone: "indigo",
    },
    {
      label: "SECURE",
      title: "IngeHack",
      description: "Apprendre la cybersécurité à travers des défis pratiques.",
      tone: "teal",
    },
    {
      label: "ADAPT",
      title: "Ingeneer",
      description:
        "Combiner différentes disciplines pour résoudre des problèmes inédits.",
      tone: "gold",
    },
  ],

  articles: [
    {
      category: "Réseaux",
      title: "Qu'est-ce que le Banner Grabbing ?",
      meta: "Jan 2026 · 4 min de lecture",
    },
    {
      category: "Réseaux",
      title: "Comprendre la Détection de Services Nmap",
      meta: "Jan 2026 · 6 min de lecture",
    },
    {
      category: "Cybersécurité",
      title: "Mon Expérience avec Hack The Box Getting Started",
      meta: "Fév 2026 · 5 min de lecture",
    },
    {
      category: "Backend",
      title: "Implémenter l'Authentification JWT avec Django REST Framework",
      meta: "Mar 2026 · 8 min de lecture",
    },
    {
      category: "DevOps",
      title: "Dockeriser Django + PostgreSQL",
      meta: "Avr 2026 · 7 min de lecture",
    },
    {
      category: "IA",
      title: "Construire un Système RAG pour les Documents Juridiques Algériens",
      meta: "Mai 2026 · 9 min de lecture",
    },
    {
      category: "Cybersécurité",
      title: "Leçons Apprises en Organisant un CTF de Cybersécurité",
      meta: "Jun 2026 · 6 min de lecture",
    },
  ],

  steps: [
    {
      number: "01",
      title: "Comprendre",
      description: "Comprendre l'idée du client, ses besoins et ses objectifs.",
    },
    {
      number: "02",
      title: "Planifier",
      description: "Définir l'approche technique et la feuille de route.",
    },
    {
      number: "03",
      title: "Développer",
      description: "Développer de manière itérative avec une communication régulière.",
    },
    {
      number: "04",
      title: "Tester",
      description:
        "Tester la fonctionnalité, la responsivité, les performances et la sécurité.",
    },
    {
      number: "05",
      title: "Lancer",
      description: "Déployer et livrer le produit final.",
    },
  ],
};

export const uiStrings = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      security: "Security",
      about: "About",
      leadership: "Leadership",
      articles: "Articles",
      services: "Services",
      contact: "Contact",
      toggleMenu: "Toggle menu",
    },
    hero: {
      badge: "Available for freelance projects",
      subtitle: "Full-Stack Developer & Cybersecurity Enthusiast",
      tags: "Full-Stack Engineering · Cybersecurity · AI · Technical Leadership",
      description:
        "I build modern, scalable web applications with a strong focus on performance, security, and real-world problem solving.",
      viewWork: "View My Work",
      startProject: "Start a Project",
    },
    positioning:
      "I combine full-stack development with cybersecurity to build applications that are not only functional, but reliable and secure.",
    services: {
      eyebrow: "What I Can Build",
      heading: "Services built around your product, not a template",
    },
    work: {
      eyebrow: "Selected Work",
      heading: "Projects worth talking about",
      placeholder: "Project screenshot — placeholder",
    },
    securityLab: {
      eyebrow: "Security Lab",
      heading: "On the path to becoming a pentester",
      description:
        "Beyond building applications, I study how they break — deliberately and seriously. I'm currently working through the Hack The Box Academy pentester path with the goal of earning the CPTS certification, backed by hands-on practice with Hack The Box machines, CTFs, and real-world security tools.",
    },
    skills: {
      eyebrow: "Toolkit",
      heading: "What I work with",
    },
    about: {
      eyebrow: "About Me",
      heading: "From code to what runs underneath it",
    },
    experience: {
      eyebrow: "Experience & Achievements",
      heading: "By the numbers",
    },
    leadership: {
      eyebrow: "Leadership & Events",
      heading: "Leading technology, cybersecurity, and innovation communities.",
      badge: "President — Ingeniums Club · 2025/26",
      intro:
        "I lead a multidisciplinary student technology community, bringing together developers, security enthusiasts, and creatives around shared technical projects. My role spans the full lifecycle of large-scale events — from early strategy to on-the-ground execution.",
      eventPhotoPlaceholder: "Event photography — placeholder",
      quote:
        "How well can you adapt when the problem doesn't fit into a single discipline?",
      quoteSub:
        "Ingeneer is designed to test adaptability, creativity, and technical reasoning — an immersive technical adventure rather than a standard competition.",
      eventLeader: "Event Leader & Organizer",
      photoNote: "Photo placeholders — ready for real ECSEL Expo photography",
      myRole: "My Role",
      clubRep: "Ingeniums Club Representative",
      communityQuote:
        "Leadership isn't only about organizing events — it's also about representing a community, communicating its vision, and building relationships beyond it.",
      inAction: "Leadership in Action",
      closingQuote:
        "Through these events, I learned that successful technical projects are not only about technology. They require vision, planning, people, coordination, execution, and the ability to adapt.",
    },
    articles: {
      eyebrow: "Knowledge / Lab Notes",
      heading: "Learning by building and documenting",
    },
    howIWork: {
      eyebrow: "How I Work",
      heading: "A clear path from idea to launch",
    },
    contact: {
      heading: "Have an idea worth building?",
      sub: "Let's turn it into something real.",
      startProject: "Start a Project",
      contactMe: "Contact Me",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCV: "Download CV",
    },
    footer: {
      brand: "SA — Selloum Abdelmoncef",
      copy: "© 2026. Built with intent.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      work: "Projets",
      security: "Sécurité",
      about: "À propos",
      leadership: "Leadership",
      articles: "Articles",
      services: "Services",
      contact: "Contact",
      toggleMenu: "Basculer le menu",
    },
    hero: {
      badge: "Disponible pour des projets freelance",
      subtitle: "Développeur Full-Stack & Passionné de Cybersécurité",
      tags: "Ingénierie Full-Stack · Cybersécurité · IA · Leadership Technique",
      description:
        "Je conçois des applications web modernes et évolutives, avec un accent fort sur la performance, la sécurité et la résolution de problèmes concrets.",
      viewWork: "Voir Mes Projets",
      startProject: "Lancer un Projet",
    },
    positioning:
      "Je combine le développement full-stack avec la cybersécurité pour concevoir des applications non seulement fonctionnelles, mais aussi fiables et sécurisées.",
    services: {
      eyebrow: "Ce Que Je Peux Concevoir",
      heading: "Des services conçus autour de votre produit, pas d'un template",
    },
    work: {
      eyebrow: "Projets Sélectionnés",
      heading: "Des projets qui méritent qu'on en parle",
      placeholder: "Capture d'écran du projet — placeholder",
    },
    securityLab: {
      eyebrow: "Labo Sécurité",
      heading: "Sur le chemin pour devenir pentester",
      description:
        "Au-delà de la conception d'applications, j'étudie comment elles peuvent être compromises — de manière délibérée et sérieuse. Je suis actuellement le parcours pentester de Hack The Box Academy avec l'objectif d'obtenir la certification CPTS, soutenu par une pratique concrète sur les machines Hack The Box, les CTF et les outils de sécurité réels.",
    },
    skills: {
      eyebrow: "Boîte à Outils",
      heading: "Les outils que j'utilise",
    },
    about: {
      eyebrow: "À Propos",
      heading: "Du code à ce qui tourne en dessous",
    },
    experience: {
      eyebrow: "Expérience & Réalisations",
      heading: "En chiffres",
    },
    leadership: {
      eyebrow: "Leadership & Événements",
      heading:
        "Fédérer les communautés de la technologie, de la cybersécurité et de l'innovation.",
      badge: "Président — Club Ingeniums · 2025/26",
      intro:
        "Je dirige une communauté étudiante technologique multidisciplinaire, réunissant développeurs, passionnés de sécurité et créatifs autour de projets techniques communs. Mon rôle couvre l'ensemble du cycle de vie des événements d'envergure — de la stratégie initiale à l'exécution sur le terrain.",
      eventPhotoPlaceholder: "Photographie d'événement — placeholder",
      quote:
        "« Dans quelle mesure pouvez-vous vous adapter quand le problème ne rentre dans le cadre d'aucune discipline unique ? »",
      quoteSub:
        "Ingeneer est conçu pour tester l'adaptabilité, la créativité et le raisonnement technique — une aventure technique immersive plutôt qu'une compétition standard.",
      eventLeader: "Chef de Projet & Organisateur",
      photoNote:
        "Emplacements photo — prêts pour la photographie réelle de ECSEL Expo",
      myRole: "Mon Rôle",
      clubRep: "Représentant du Club Ingeniums",
      communityQuote:
        "Le leadership ne se limite pas à organiser des événements — c'est aussi représenter une communauté, communiquer sa vision et tisser des relations au-delà de celle-ci.",
      inAction: "Le Leadership en Action",
      closingQuote:
        "À travers ces événements, j'ai compris que les projets techniques réussis ne se résument pas à la technologie. Ils exigent une vision, une planification, des personnes, de la coordination, de l'exécution et la capacité de s'adapter.",
    },
    articles: {
      eyebrow: "Savoir / Notes de Labo",
      heading: "Apprendre en construisant et en documentant",
    },
    howIWork: {
      eyebrow: "Comment Je Travaille",
      heading: "Un parcours clair de l'idée au lancement",
    },
    contact: {
      heading: "Vous avez une idée qui mérite d'être construite ?",
      sub: "Transformons-la en quelque chose de concret.",
      startProject: "Lancer un Projet",
      contactMe: "Me Contacter",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadCV: "Télécharger mon CV",
    },
    footer: {
      brand: "SA — Selloum Abdelmoncef",
      copy: "© 2026. Conçu avec intention.",
    },
  },
};
