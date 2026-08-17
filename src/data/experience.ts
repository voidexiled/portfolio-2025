export type ExperienceType =
  | "independent"
  | "trainee"
  | "employment"
  | "contract";

export type Experience = {
  id: string;
  organization: string;
  role: string;
  location?: string;
  start: string;
  end?: string | null;
  type: ExperienceType;
  cvCopy?: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    id: "independent",
    organization: "Desarrollo de Software Independiente",
    role: "Frontend / Software Developer",
    location: "Remoto",
    start: "2025",
    end: null,
    type: "independent",
    cvCopy:
      "Desarrollo de aplicaciones web y desktop completas con TypeScript, React y tecnologías relacionadas, incluyendo productos comerciales utilizados por clientes reales.",
  },
  {
    id: "europartners",
    organization: "Europartners Group",
    role: "Trainee de Desarrollo Web",
    location: "Remoto",
    start: "2022-08",
    end: "2022-12",
    type: "trainee",
    cvCopy:
      "Formación interna en desarrollo web utilizando Angular, .NET y Git dentro de un entorno profesional remoto.",
  },
];

export default experience;
