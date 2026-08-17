export type EducationStatus =
  | "completed"
  | "in_progress"
  | "paused"
  | "not_specified";

export type Education = {
  institution: string;
  program: string;
  start?: string;
  end?: string;
  status: EducationStatus;
  portfolioCopy?: string;
  cvCopy?: string;
};

export const education: Education[] = [
  {
    institution: "Instituto Tecnológico de Ciudad Madero",
    program: "Ingeniería en Sistemas Computacionales",
    status: "not_specified",
    portfolioCopy:
      "Estudios universitarios cursados en Ingeniería en Sistemas Computacionales.",
    cvCopy:
      "Estudios universitarios cursados en Ingeniería en Sistemas Computacionales; programa no concluido.",
  },
  {
    institution: "CETis 109",
    program: "Técnico en Programación",
    start: "2017",
    end: "2020",
    status: "completed",
    portfolioCopy: "Técnico en Programación.",
    cvCopy: "Técnico en Programación.",
  },
];

export default education;
