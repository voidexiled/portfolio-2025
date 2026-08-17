export type Language = {
  id: string;
  name: string;
  level: string;
  order: number;
};

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Español",
    level: "Nativo",
    order: 1,
  },
  {
    id: "english",
    name: "Inglés",
    level: "Intermedio técnico; lectura sólida, escritura funcional y conversación básica-intermedia.",
    order: 2,
  },
];

export default languages;
