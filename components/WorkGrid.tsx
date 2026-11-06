"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

type Tab = { key: string; label: string };

export default function WorkGrid({ projects, tabs }: { projects: Project[]; tabs: readonly Tab[] }) {
  const [tab, setTab] = useState("all");
  const all = [{ key: "all", label: "All" }, ...tabs];
  const count = (k: string) => (k === "all" ? projects.length : projects.filter((p) => p.kind === k).length);
  const shown = tab === "all" ? projects : projects.filter((p) => p.kind === tab);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {all.map((t) => (
          <button key={t.key} aria-pressed={tab === t.key} onClick={() => setTab(t.key)}>
            {t.label} <span className="muted">{count(t.key)}</span>
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
