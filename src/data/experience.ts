export type ExperienceType =
  | "independent"
  | "trainee"
  | "employment"
  | "contract";

export type Experience = {
  organization: string;
  role: string;
  location?: string;
  start: string;
  end?: string | null;
  type: ExperienceType;
  portfolioCopy?: string;
  cvCopy?: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    organization: "Desarrollo de Software Independiente",
    role: "Frontend / Software Developer",
    location: "Remoto",
    start: "2025",
    end: null,
    type: "independent",
    portfolioCopy:
      "Desarrollo de aplicaciones web y desktop completas, desde definición de producto y UX hasta implementación, validación y publicación. Incluye productos comerciales para clientes reales y proyectos desarrollados con flujos modernos asistidos por IA.",
    cvCopy:
      "Desarrollo de aplicaciones web y desktop completas con TypeScript, React y tecnologías relacionadas, incluyendo productos comerciales utilizados por clientes reales.",
  },
  {
    organization: "Europartners Group",
    role: "Trainee de Desarrollo Web",
    location: "Remoto",
    start: "2022-08",
    end: "2022-12",
    type: "trainee",
    portfolioCopy:
      "Formación interna en desarrollo web utilizando Angular, .NET y Git dentro de un entorno profesional remoto.",
    cvCopy:
      "Formación interna en desarrollo web utilizando Angular, .NET y Git dentro de un entorno profesional remoto.",
  },
];

export default experience;
