export type CvLocale = "en" | "es";

export type CvProjectId =
  | "loteria-studio"
  | "acadance"
  | "cotizador-3d"
  | "noctera";

export type CvLanguageId = "spanish" | "english";

type CvCopy = {
  description: string;
  headerStack: string;
  remote: string;
  present: string;
  months: Record<string, string>;
  labels: {
    profile: string;
    experience: string;
    projects: string;
    technologies: string;
    education: string;
    languages: string;
    repository: string;
    demo: string;
  };
  profile: string;
  experience: {
    independent: {
      title: string;
      summary: string;
      bullets: string[];
    };
    europartners: {
      title: string;
      summary: string;
    };
  };
  projects: Record<CvProjectId, string>;
  technologies: Record<string, string>;
  education: {
    itcmProgram: string;
    itcmCopy: string;
    cetisProgram: string;
  };
  languages: Record<CvLanguageId, { name: string; level: string }>;
};

export const cvCopy: Record<CvLocale, CvCopy> = {
  es: {
    description:
      "CV de Francisco Jesús Jalomo Chávez, Frontend Engineer especializado en TypeScript y React.",
    headerStack: "TypeScript, React, Next.js, Tauri",
    remote: "Remoto",
    present: "Actualidad",
    months: {
      "2022-08": "ago 2022",
      "2022-12": "dic 2022",
    },
    labels: {
      profile: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos seleccionados",
      technologies: "Tecnologías",
      education: "Educación",
      languages: "Idiomas",
      repository: "Repositorio",
      demo: "Demo",
    },
    profile:
      "Frontend Engineer enfocado en TypeScript y React, con experiencia construyendo aplicaciones web y desktop completas, incluyendo productos comerciales utilizados por clientes reales.",
    experience: {
      independent: {
        title: "Desarrollador de Software Independiente",
        summary:
          "Desarrollo de aplicaciones web y desktop completas con TypeScript, React y tecnologías relacionadas, incluyendo productos comerciales utilizados por clientes reales.",
        bullets: [
          "Definición de producto y UX, implementación, validación y publicación de aplicaciones web y desktop completas.",
          "Desarrollo y mantenimiento de productos comerciales, incluyendo Lotería Studio, actualmente utilizado por 4 clientes Pro.",
          "Uso de TypeScript, React, Next.js, Vite, Tauri, Tailwind CSS y herramientas relacionadas según las necesidades de cada producto.",
          "Uso de Claude Code y OpenAI Codex para implementación, depuración, refactorización, documentación y pruebas, manteniendo a mi cargo la definición de requisitos y validación final.",
        ],
      },
      europartners: {
        title: "Trainee de Desarrollo Web",
        summary:
          "Formación interna en desarrollo web utilizando Angular, .NET y Git dentro de un entorno profesional remoto.",
      },
    },
    projects: {
      "loteria-studio":
        "Producto desktop comercial con React, TypeScript y Tauri para edición visual y generación de materiales de lotería mexicana; utilizado por 4 clientes Pro.",
      acadance:
        "Plataforma académica prototipo con Next.js, TypeScript y Supabase, centrada en interfaces por roles, formularios complejos y flujos de cursos, grupos y prácticas.",
      "cotizador-3d":
        "Aplicación operativa en Next.js y TypeScript para cotizaciones, inventario y seguimiento de producción de impresión 3D, con lógica de costos, Firebase y pruebas automatizadas.",
      noctera:
        "Plataforma web y sistemas de juego para un servidor Tibia personalizado sobre Canary, incluyendo Next.js, TypeScript, Prisma/MySQL, Lua y un Battle Pass integrado.",
    },
    technologies: {
      frontend: "Frontend",
      "desktop-product": "Desktop / producto",
      "backend-tooling": "Tooling",
      workflow: "IA / workflow",
    },
    education: {
      itcmProgram: "Ingeniería en Sistemas Computacionales",
      itcmCopy:
        "Estudios universitarios cursados en Ingeniería en Sistemas Computacionales; programa no concluido.",
      cetisProgram: "Técnico en Programación",
    },
    languages: {
      spanish: { name: "Español", level: "Nativo" },
      english: {
        name: "Inglés",
        level:
          "Intermedio técnico; lectura sólida, escritura funcional y conversación básica-intermedia.",
      },
    },
  },
  en: {
    description:
      "Resume of Francisco Jesús Jalomo Chávez, Frontend Engineer focused on TypeScript and React.",
    headerStack: "TypeScript · React · Next.js · Tauri",
    remote: "Remote",
    present: "Present",
    months: {
      "2022-08": "Aug 2022",
      "2022-12": "Dec 2022",
    },
    labels: {
      profile: "PROFILE",
      experience: "EXPERIENCE",
      projects: "SELECTED PROJECTS",
      technologies: "TECHNOLOGIES",
      education: "EDUCATION",
      languages: "LANGUAGES",
      repository: "Repository",
      demo: "Demo",
    },
    profile:
      "Frontend Engineer focused on TypeScript and React, with experience building complete web and desktop applications, including commercial products used by real customers.",
    experience: {
      independent: {
        title: "Independent Software Developer",
        summary:
          "Built complete web and desktop applications with TypeScript, React, and related technologies, including commercial products used by real customers.",
        bullets: [
          "Owned product definition and UX, implementation, validation, and release of complete web and desktop applications.",
          "Developed and maintained commercial products, including Lotería Studio, currently used by 4 paying Pro customers.",
          "Worked across TypeScript, React, Next.js, Vite, Tauri, Tailwind CSS, and related tooling according to product needs.",
          "Used Claude Code and OpenAI Codex for implementation, debugging, refactoring, documentation, and testing, while retaining responsibility for requirements and final validation.",
        ],
      },
      europartners: {
        title: "Web Development Trainee",
        summary:
          "Internal training in web development using Angular, .NET, and Git in a professional remote environment.",
      },
    },
    projects: {
      "loteria-studio":
        "Commercial desktop product built with React, TypeScript, and Tauri for visual editing and generation of Mexican lotería materials; used by 4 paying Pro customers.",
      acadance:
        "Academic platform prototype built with Next.js, TypeScript, and Supabase, focused on role-based interfaces, complex forms, and course, group, and practice workflows.",
      "cotizador-3d":
        "Operational Next.js and TypeScript application for quoting, inventory, and 3D-print production tracking, with cost logic, Firebase, and automated tests.",
      noctera:
        "Web platform and game systems for a custom Tibia server built on Canary, including Next.js, TypeScript, Prisma/MySQL, Lua, and an integrated Battle Pass.",
    },
    technologies: {
      frontend: "Frontend",
      "desktop-product": "Desktop / Product",
      "backend-tooling": "Tooling",
      workflow: "AI-assisted",
    },
    education: {
      itcmProgram: "Computer Systems Engineering",
      itcmCopy:
        "Coursework toward a B.S. in Computer Systems Engineering; degree not completed.",
      cetisProgram: "Technical Diploma in Programming",
    },
    languages: {
      spanish: { name: "Spanish", level: "Native" },
      english: {
        name: "English",
        level:
          "Intermediate technical English; strong reading, functional writing, and basic-to-intermediate conversation.",
      },
    },
  },
};

export default cvCopy;
