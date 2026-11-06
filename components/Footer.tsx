import Link from "next/link";
import { site } from "@/lib/site";

const socialLabels = { github: "GitHub", linkedin: "LinkedIn", upwork: "Upwork" } as const;

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url) as [keyof typeof socialLabels, string][];
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name}{site.location ? ` · ${site.location}` : ""}</span>
        <nav aria-label="Footer">
          <Link href="/work/">Work</Link>
          <a href={`mailto:${site.email}`}>Email</a>
          {socials.map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noreferrer">{socialLabels[key]}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
