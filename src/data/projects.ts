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
  portfolioCopy: string;
  cvCopy: string;
  stack: string[];
  repoURL: string;
  liveURL?: string;
  order: number;
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    id: "loteria-studio",
    title: "Lotería Studio",
    status: "active",
    portfolioCopy:
      "Aplicación desktop comercial para diseñar, personalizar y producir materiales de lotería mexicana. Incluye editor visual, generación de documentos y flujos de producción, y actualmente es utilizada por cuatro clientes Pro.",
    cvCopy:
      "Producto desktop comercial con React, TypeScript y Tauri para edición visual y generación de materiales de lotería mexicana; utilizado por 4 clientes Pro.",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Tauri"],
    repoURL: "https://github.com/voidexiled/loteria-studio",
    order: 1,
    featured: true,
  },
  {
    id: "acadance",
    title: "Acadance",
    status: "paused",
    portfolioCopy:
      "Prototipo funcional de plataforma académica con experiencias por roles para administración, docentes y estudiantes, incluyendo cursos, grupos, laboratorios, prácticas y flujos relacionales sobre Supabase.",
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
    repoURL: "https://github.com/voidexiled/Acadance",
    order: 2,
    featured: true,
  },
  {
    id: "cotizador-3d",
    title: "Cotizador 3D",
    status: "active",
    portfolioCopy:
      "Aplicación web operativa para gestionar cotizaciones, pedidos, producción, inventario, pagos y entregas dentro de un flujo de impresión 3D, con lógica de costos y márgenes y persistencia mediante Firebase.",
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
    repoURL: "https://github.com/voidexiled/cotizador-3d",
    order: 3,
    featured: true,
  },
  {
    id: "noctera",
    title: "Noctera",
    status: "paused",
    portfolioCopy:
      "Proyecto de servidor Tibia personalizado sobre Canary con una plataforma web en Next.js y sistemas propios de progresión, economía y Battle Pass, integrados mediante una base de datos MySQL compartida.",
    cvCopy:
      "Plataforma web y sistemas de juego para un servidor Tibia personalizado sobre Canary, incluyendo Next.js, TypeScript, Prisma/MySQL, Lua y un Battle Pass integrado.",
    stack: ["TypeScript", "Next.js", "React", "Prisma", "MySQL", "Lua", "Canary"],
    repoURL: "https://github.com/voidexiled/noctera",
    liveURL: "https://noctera-demo.vercel.app",
    order: 4,
    featured: true,
  },
];

export default projects;
