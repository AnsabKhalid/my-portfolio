import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow mono"><span className="dot" />404</span>
        <h1>Nothing here.</h1>
        <Link href="/" className="btn primary">Back home ›</Link>
      </div>
    </section>
  );
}
