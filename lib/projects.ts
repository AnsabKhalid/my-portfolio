import fs from "node:fs";
import path from "node:path";

// One case study per JSON file in content/work/. Read at build time only (server components).
export type Project = {
  slug: string;
  name: string;
  kind: "ai" | "web" | "site";
  order: number;
  featured?: boolean;
  confidential?: boolean;
  image?: string;
  link?: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  team?: string;
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string[];
  constraints: { label: string; text: string }[];
  architecture: { steps: string[]; caption: string };
  sections: { heading: string; paras: string[] }[];
  challenges: { title: string; text: string }[];
  outcome: string[];
  stack: string[];
};

const dir = path.join(process.cwd(), "content", "work");

export const projects: Project[] = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Project)
  .sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const kinds = [
  { key: "web", label: "Business platforms" },
  { key: "ai", label: "Computer vision & AI" },
  { key: "site", label: "Websites" },
] as const;
