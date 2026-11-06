import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import { projects, kinds } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <section className="page-head">
      <div className="wrap">
        <span className="eyebrow mono reveal"><span className="dot" />{projects.length} case studies</span>
        <h1 className="reveal d1">work.</h1>
        <p className="reveal d2" style={{ marginBottom: 48 }}>
          SaaS and ERP platforms built with client teams, computer-vision and AI apps built end to end, and websites for small businesses. Each case study covers the problem, the constraints, how it works and what broke along the way.
        </p>
        <WorkGrid projects={projects} tabs={kinds} />
      </div>
    </section>
  );
}
