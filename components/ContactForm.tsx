"use client";
import { site } from "@/lib/site";

// No server on a static site: the form opens the visitor's mail app with the message filled in.
export default function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Project enquiry from ${d.get("name")}`;
    const body = `${d.get("message")}\n\n${d.get("name")} <${d.get("email")}>`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="f" onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows={5} required placeholder="What are you building?" /></label>
      <button className="btn primary" type="submit">Send message</button>
      <small>Opens your email app with the message ready to send.</small>
    </form>
  );
}
