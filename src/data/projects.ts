export type ProjectStatus =
  | "active"
  | "in-progress"
  | "paused"
  | "experimental"
  | "archived";

export type PortfolioProject = {
  id: string;
  title: string;
  status: ProjectStatus;
  cvCopy: string;
  stack: string[];
  portfolioStack: string[];
  cvStack?: string[];
  repoURL: string;
  liveURL?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  order: number;
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    id: "loteria-studio",
    title: "Lotería Studio",
    status: "active",
    cvCopy:
      "Producto desktop comercial con React, TypeScript y Tauri para edición visual y generación de materiales de lotería mexicana; utilizado por 4 clientes Pro.",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Tauri"],
    portfolioStack: ["React", "TypeScript", "Tauri"],
    cvStack: ["React", "TypeScript", "Tauri"],
    repoURL: "https://github.com/voidexiled/loteria-studio",
    image: "/projects/loteria-studio.png",
    imageWidth: 2556,
    imageHeight: 1391,
    order: 1,
    featured: true,
  },
  {
    id: "acadance",
    title: "Acadance",
    status: "paused",
    cvCopy:
      "Plataforma académica prototipo con Next.js, TypeScript y Supabase, centrada en interfaces por roles, formularios complejos y flujos de cursos, grupos y prácticas.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "TanStack Query",
    ],
    portfolioStack: ["Next.js", "TypeScript", "Supabase"],
    cvStack: ["Next.js", "TypeScript", "Supabase"],
    repoURL: "https://github.com/voidexiled/Acadance",
    image: "/projects/acadance.png",
    imageWidth: 2224,
    imageHeight: 1341,
    order: 2,
    featured: true,
  },
  {
    id: "cotizador-3d",
    title: "Cotizador 3D",
    status: "active",
    cvCopy:
      "Aplicación operativa en Next.js y TypeScript para cotizaciones, inventario y seguimiento de producción de impresión 3D, con lógica de costos, Firebase y pruebas automatizadas.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
    ],
    portfolioStack: ["Next.js", "TypeScript", "Firebase"],
    cvStack: ["Next.js", "TypeScript", "Firebase"],
    repoURL: "https://github.com/voidexiled/cotizador-3d",
    image: "/projects/cotizador-3d.png",
    imageWidth: 2222,
    imageHeight: 1344,
    order: 3,
    featured: true,
  },
  {
    id: "noctera",
    title: "Noctera",
    status: "paused",
    cvCopy:
      "Plataforma web y sistemas de juego para un servidor Tibia personalizado sobre Canary, incluyendo Next.js, TypeScript, Prisma/MySQL, Lua y un Battle Pass integrado.",
    stack: ["TypeScript", "Next.js", "React", "Prisma", "MySQL", "Lua", "Canary"],
    portfolioStack: ["Next.js", "TypeScript", "Lua", "MySQL"],
    cvStack: ["Next.js", "TypeScript", "Prisma/MySQL", "Lua"],
    repoURL: "https://github.com/voidexiled/noctera",
    liveURL: "https://noctera-demo.vercel.app",
    image: "/projects/noctera.png",
    imageWidth: 2223,
    imageHeight: 1347,
    order: 4,
    featured: true,
  },
];

export default projects;
