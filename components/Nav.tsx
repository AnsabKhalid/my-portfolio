"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const initials = site.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    // Dark is the default; light is opt-in.
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link href="/" className="brand"><i>{initials}</i><span>{site.name}<small className="mono">{site.role}</small></span></Link>
        <nav className="links" aria-label="Main">
          <Link href="/work/">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#toolkit">Toolkit</Link>
          <Link href="/#about">About</Link>
          <button className="theme" onClick={toggleTheme} aria-label="Switch light or dark theme">◐</button>
          <Link href="/#contact" className="cta">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
