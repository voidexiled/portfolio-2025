export const portfolioCopy = {
  nav: {
    work: "Work",
    experience: "Experience",
    technologies: "Technologies",
    resume: "Resume",
    spanish: "CV ES",
  },
  hero: {
    headline: "I build product-focused web and desktop applications with TypeScript and React, from UX and implementation through validation and release.",
    secondary:
      "Commercial products, technical case studies, and AI-assisted engineering workflows.",
    location: "Tampico, Tamaulipas, Mexico",
    availability: "Open to remote opportunities",
    viewResume: "View resume",
    viewGithub: "View GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  sections: {
    work: "Selected Work",
    experience: "Experience",
    technologies: "Technologies",
  },
  projects: {
    "loteria-studio":
      "Commercial desktop application for designing and producing Mexican lotería materials, with an interactive editor and document-generation workflows. Used by 4 paying Pro customers.",
    acadance:
      "Functional academic platform prototype with role-based experiences, complex forms, and course, group, laboratory, and practice workflows.",
    "cotizador-3d":
      "Operational application for quoting, inventory, orders, and 3D-print production tracking, with cost logic and Firebase persistence.",
    noctera:
      "Custom Tibia server project built on Canary with a Next.js account platform, Lua gameplay systems, and an integrated Battle Pass.",
  },
  experience: {
    independent: {
      title: "Independent Software Developer",
      summary:
        "Building complete web and desktop applications from product definition and UX through implementation, validation, and release, including commercial products used by real customers.",
      currentWork: "Current work includes Lotería Studio and Cotizador 3D.",
    },
    europartners: {
      title: "Web Development Trainee",
      summary:
        "Internal training in web development using Angular, .NET, and Git in a professional remote environment.",
    },
  },
  technologyGroups: {
    frontend: "Frontend",
    "desktop-product": "Desktop / Product",
    "backend-tooling": "Backend / Tooling",
    workflow: "AI-assisted workflow",
  },
  workflowNote:
    "Used for implementation, debugging, refactoring, documentation, and testing while I retain responsibility for requirements and validation.",
  footer: {
    message: "Open to remote Frontend Engineer opportunities.",
    location: "Tampico, Mexico",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
  },
} as const;

export default portfolioCopy;
