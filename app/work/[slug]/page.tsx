import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Schematic from "@/components/Schematic";
import ContactSection from "@/components/ContactSection";
import { projects, getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const roman = ["i", "ii", "iii", "iv", "v"];

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.name, description: p.summary, openGraph: p.image ? { images: [p.image] } : undefined } : {};
}

export default async function CaseStudy({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  // Table of contents follows the sections that this case study actually has.
  const toc = [
    { id: "problem", label: "The problem" },
    { id: "constraints", label: "Constraints" },
    { id: "architecture", label: "Architecture" },
    ...p.sections.map((s, n) => ({ id: `s${n}`, label: s.heading })),
    ...(p.challenges.length ? [{ id: "broke", label: "What broke" }] : []),
    { id: "landed", label: "Where it landed" },
  ];

  return (
    <>
      <article className="wrap cs">
        <div className="crumb mono"><Link href="/work/">‹ All work</Link></div>

        <header className="phead">
          <span className="mono" style={{ color: "var(--accent)" }}>{p.category}</span>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <dl className="meta">
            <div><dt className="mono">Project</dt><dd>{p.name}</dd></div>
            <div><dt className="mono">Client</dt><dd>{p.client}</dd></div>
            {p.year && <div><dt className="mono">Period</dt><dd>{p.year}</dd></div>}
            {p.team && <div><dt className="mono">Team</dt><dd>{p.team}</dd></div>}
            <div className="wide"><dt className="mono">My role</dt><dd>{p.role}</dd></div>
            {p.link && <div className="wide"><dt className="mono">Live</dt><dd><a className="ext" href={p.link} target="_blank" rel="noreferrer">{p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")} ↗</a></dd></div>}
          </dl>
        </header>

        <div className="metrics">
          {p.metrics.map((m) => (
            <div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>
          ))}
        </div>

        <div className="hero-media" style={{ marginTop: 28 }}>
          {p.image ? (
            <img src={p.image} alt={`${p.name} preview`} style={p.kind === "ai" ? undefined : { objectPosition: "center top" }} />
          ) : (
            <>
              <span className="only-wide"><Schematic steps={p.architecture.steps} label={p.name} wide /></span>
              <span className="only-tall"><Schematic steps={p.architecture.steps} label={p.name} /></span>
            </>
          )}
        </div>

        <div className="cs-body">
          <aside className="toc">
            <span className="mono muted">On this page</span>
            <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}</ol>
          </aside>

          <div className="prose">
            {p.confidential && (
              <p className="note-box">This was client work under confidentiality, so the client&apos;s name and internal details are left out.</p>
            )}

            <section id="problem">
              <h2>The problem</h2>
              {p.problem.map((t) => <p key={t}>{t}</p>)}
            </section>

            <section id="constraints">
              <h2>Constraints</h2>
              <div className="cons">
                {p.constraints.map((c) => (
                  <div key={c.label}><b>{c.label}</b><p>{c.text}</p></div>
                ))}
              </div>
            </section>

            <section id="architecture">
              <h2>Architecture</h2>
              <figure className="arch">
                <ol className="flow">
                  {p.architecture.steps.map((s, n) => <li key={s}><span className="mono">{String(n + 1).padStart(2, "0")}</span>{s}</li>)}
                </ol>
                <figcaption>{p.architecture.caption}</figcaption>
              </figure>
            </section>

            {p.sections.map((s, n) => (
              <section id={`s${n}`} key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paras.map((t) => <p key={t}>{t}</p>)}
              </section>
            ))}

            {p.challenges.length > 0 && (
              <section id="broke">
                <h2>What broke</h2>
                <div className="broke">
                  {p.challenges.map((c, n) => (
                    <div key={c.title}>
                      <h3><span className="mono">{roman[n]}.</span> {c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="landed">
              <h2>Where it landed</h2>
              {p.outcome.map((t) => <p key={t}>{t}</p>)}
              <div className="chips" style={{ marginTop: 22 }}>{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            </section>
          </div>
        </div>

        <nav className="next" aria-label="More projects">
          <Link href="/work/"><span className="mono muted">‹ All work</span><b>Back to every project</b></Link>
          <Link href={`/work/${next.slug}/`}><span className="mono muted">Next ›</span><b>{next.title}</b></Link>
        </nav>
      </article>
      <ContactSection />
    </>
  );
}
