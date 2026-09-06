// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.
// Sourced from Aadhithya A's resume and GitHub profile

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  demo?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Aadhithya A",
  headline:
    "Software Developer | Full-Stack Developer | Creative Designer",
  summary:
    "Building AI based Projects, full-stack web platforms",
  education: {
    degree: "B.E in Computer Science & Engineering",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    affiliation: "Anna University, TamilNadu",
    cgpa: "7.6",
    graduation: "2022 – 2026",
  },
  email: "aadhithyaragul@gmail.com",
  linkedin: "https://www.linkedin.com/in/aadhithya-a-152253302",
  github: "https://github.com/AadhithyaRagul",
  location: "TamilNadu, India",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Developer",
    organization: "Retech Solution",
    period: "July,2025",
    mode: "Tambaram, Chennai",
    points: [
      "Developed a Django-based Inventory Management System to manage products, stock, suppliers, purchases, and sales efficiently.",
      "Automated stock tracking and inventory operations, reducing manual work and providing accurate real-time inventory information."
    ],
    logo: "/assets/experience/logos/retech.jpeg",
  }
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "government-schemes-chatbot-using-rag",
    name: "Government Schemes chatbot using RAG",
    status: "Live",
    category: "Full-Stack / Web",
    purpose:
      "This project is an AI-powered chatbot that helps users find information about Tamil Nadu government schemes using Retrieval-Augmented Generation (RAG). It uses semantic search and an LLM to provide relevant information about scheme eligibility, benefits, required documents, and application procedures.",
    github: "https://github.com/AadhithyaRagul/Government-Schemes-Chatbot-Using-RAG",
    stack: [
      "Python", "FastAPI", "RAG", "FAISS", "Sentence Transformers", "Groq API", "PostgreSQL", "JWT", "Bcrypt", "HTML", "CSS", "JavaScript"
    ],
    facts: [
      "Provides eligibility, benefits, documents, and application details",
      "Secure user login and authentication",
      "Maintains conversation history for contextual responses",
    ],
    screenshots: [],
  },
  {
    id: "alzheimer-disease-prediction",
    name: "Alzheimer Disease Prediction",
    status: "Live",
    category: "Full-Stack / Prediction / Web",
    purpose:
      "This project focuses on predicting the risk of Alzheimer’s disease using machine learning techniques and relevant patient data. It aims to support early detection by analyzing patterns in the data and providing a predictive result.",
    github: "https://github.com/AadhithyaRagul/Alzheimer-Disease-Prediction-webapp",
    stack: [
      "React.js", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL", "Python", "TensorFlow/Keras", "Scikit-learn", "OpenCV", "NumPy"
    ],
    facts: [
      "Predicts Alzheimer’s disease using a machine learning model",
      "Analyzes brain scan images and provides prediction results",
      " Secure web application with user authentication and data management"
    ],
    screenshots: [],
  },
  {
    id: "to-do-list",
    name: "ToDo List webApp",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "This project is a To-Do List application designed to help users organize and manage their daily tasks. It allows users to easily add, track, complete, and remove tasks in a simple interface.",
    github: "https://github.com/AadhithyaRagul/ToDoList",
    stack: ["HTML", "CSS", "JavaScript"],
    facts: [
      "Add and manage tasks",
      "Mark tasks as completed",
      "Edit or delete tasks",
    ],
    screenshots: [],
  },
  {
    id: "travel-explorer",
    name: "Travel Explorer",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "This project is designed to help users explore and plan exciting trips to different destinations and also provides useful information about popular places, activities, and travel options for an enjoyable vacation.",
    github:
      "https://github.com/AadhithyaRagul/Travel-Explore",
    stack: ["HTML", "CSS"],
    facts: [
      "Explore popular destinations",
      "Discover activities and places to visit",
      "Plan an enjoyable and memorable trip",
    ],
    screenshots: [],
  },
  {
    id: "food-menu",
    name: "Food Menu App",
    status: "Live",
    category: "Frontend / Web",
    purpose:
      "This project is a food menu application that allows users to explore different food items and their details. It provides an easy and user-friendly way to browse dishes, categories, prices, and other menu information.",
    github:
      "https://github.com/AadhithyaRagul/food-store-project",
    stack: [
      "HTML",
      "CSS"
    ],
    facts: [
      "Browse food items and categories",
      "View dish details and prices",
      "Simple and user-friendly menu interface"
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming",
    icon: "code",
    items: ["Java", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["HTML5", "CSS3", "React","Vite", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Express.js", "Node.js", "REST"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "VS Code","Figma"],
  },

];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: "Google Crash Course on Python",
    organization: "Google",
    track: "IT Automation & Python Specialization",
    scale: "Verified Professional Certificate",
    image: "/assets/certifications/",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Google Crash Course on Python",
    issuer: "Google",
    issued: "2024",
    credentialId: "Google IT Automation",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "IBM Python for Data Science, AI & Development",
    issuer: "IBM",
    issued: "2024",
    credentialId: "IBM Professional Certificate",
    image: "/assets/certifications/ibm-python-ds-ai-certificate.jpg",
  },
  {
    title: "Coursera Python Programming Specialization",
    issuer: "Coursera",
    issued: "2024",
    credentialId: "Python Basics & Data Structures",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera / UPenn",
    issued: "2024",
    credentialId: "Java OOP & Data Structures",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
  {
    title: "Solution Challenge 2026: Build with AI",
    issuer: "Hack2skill / Google",
    issued: "2026",
    credentialId: "Solution Challenge Prototype Certificate",
    image: "/assets/certifications/hack2skill-certificate.png",
  },
  {
    title: "B.Tech Artificial Intelligence & Machine Learning",
    issuer: "LJ University",
    issued: "2024 – Present",
    credentialId: "Enrollment & Academic Verification",
    image: "/assets/certifications/aiml-university-certificate.jpg",
  },
];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────

export const galleryImages: { src: string; label: string }[] = [];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Aadhithya and his verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Aadhithya, so I only answer questions about Aadhithya and his work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  {
    title: "Aadhithya A",
    category: "Profile",
    appId: "about",
    keywords: ["Aadhithya", "Aadhi", "about", "profile", "education"],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: [
    {
      institution: profile.education.institution,
      degree: profile.education.degree,
      affiliation: profile.education.affiliation,
      cgpa: profile.education.cgpa,
      duration: profile.education.graduation,
    },
  ],
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  galleryImages,
};
