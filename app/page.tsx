import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/lib/projects";
import { site, stats, about, capabilities, experience, education, toolkit } from "@/lib/site";

// Drop public/me.jpg or public/cv.pdf in and the portrait and CV button appear on the next build.
const hasFile = (f: string) => fs.existsSync(path.join(process.cwd(), "public", f));
const photo = hasFile("me.jpg");
const cv = hasFile("cv.pdf");

const words = ["build.", "automate.", "integrate.", "see."];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <span className="eyebrow mono reveal"><span className="dot" />Available for projects · {site.location}</span>
              <h1 className="reveal d1">
                I build the software that runs the business: <em>multi-tenant ERPs, data pipelines and AI products</em>, shipped for clients in the US, Canada and the Gulf.
              </h1>
            </div>
            <figure className={`portrait reveal d2${photo ? "" : " mono-card"}`}>
              {photo ? (
                <img src="/me.jpg" alt={site.name} />
              ) : (
                <>
                  <span className="initials">AK</span>
                  <figcaption>
                    <b>{site.name}</b>
                    <span className="mono muted">{site.role}</span>
                  </figcaption>
                </>
              )}
            </figure>
          </div>

          <div className="hero-bottom">
            <div className="big-word reveal d2" aria-label="build, automate, integrate, see">
              <span className="rot" aria-hidden="true">{[...words, words[0]].map((w, i) => <i key={i}>{w}</i>)}</span>
            </div>
            <div className="hero-side reveal d3">
              <p>{site.intro}</p>
              <div className="actions">
                <Link href="/work/" className="btn primary">See the work ›</Link>
                {cv ? <a href="/cv.pdf" className="btn ghost" download>Download CV</a> : <a href={`mailto:${site.email}`} className="btn ghost">Email me</a>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="wrap stats">
          {stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
        </div>
      </section>

      <section className="block" id="capabilities">
        <div className="wrap">
          <div className="caps">
            {capabilities.map((c) => (
              <div className="cap" key={c.tag}>
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="tools mono">{c.tools.join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="work">
        <div className="wrap">
          <div className="head">
            <h2>Selected work</h2>
            <Link href="/work/" className="more">All {projects.length} case studies ›</Link>
          </div>
          <div className="grid">
            {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="block" id="experience">
        <div className="wrap">
          <div className="head"><h2>Where I&apos;ve worked</h2></div>
          <ul className="xp">
            {experience.map((x) => (
              <li key={x.org}>
                <div className="xp-side">
                  <img className="logo" src={x.logo} alt={`${x.org} logo`} />
                  <span className="mono muted">{x.period}</span>
                </div>
                <div>
                  <h3>{x.role} <span className="muted">· {x.org}, {x.place}</span></h3>
                  <p className="xp-sum">{x.summary}</p>
                  <ul className="dots">{x.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block" id="toolkit">
        <div className="wrap">
          <div className="head"><h2>Toolkit</h2></div>
          <dl className="kit">
            {toolkit.map((t) => (
              <div key={t.group}>
                <dt className="mono muted">{t.group}</dt>
                <dd className="chips">{t.items.map((s) => <span key={s}>{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="block" id="about">
        <div className="wrap about">
          <div>
            <div className="head"><h2>About</h2></div>
            {about.map((a) => <p key={a} className="para">{a}</p>)}
          </div>
          <div>
            <h3 className="mono muted side-label">Education & certifications</h3>
            <ul className="edu">
              {education.map((e) => (
                <li key={e.title}><b>{e.title}</b><span className="muted">{e.org}{e.period !== "Certificate" ? ` · ${e.period}` : " · Certificate"}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
