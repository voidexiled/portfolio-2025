export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
  order: number;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Astro",
    ],
    order: 1,
  },
  {
    id: "desktop-product",
    label: "Desktop / Product",
    items: ["Tauri", "UI/UX", "Product Development"],
    order: 2,
  },
  {
    id: "backend-tooling",
    label: "Backend / Tooling",
    items: ["Node.js", "Git", "GitHub", "Vercel"],
    order: 3,
  },
  {
    id: "workflow",
    label: "Workflow / AI-assisted development",
    items: ["Claude Code", "OpenAI Codex", "AI-assisted development"],
    order: 4,
  },
];

export default skillGroups;
