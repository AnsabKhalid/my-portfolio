import Link from "next/link";
import Schematic from "./Schematic";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}/`} className="card">
      <div className="media">
        {p.image ? <img src={p.image} alt={`${p.name} preview`} loading="lazy" /> : <Schematic steps={p.architecture.steps} label={p.name} />}
      </div>
      <div className="body">
        <span className="cat mono">{p.name}{p.year ? ` · ${p.year}` : ""}</span>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <span className="go mono">Read the case study <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
