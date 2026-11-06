import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="block contact-block" id="contact">
      <div className="wrap contact">
        <div>
          <h2>Have a project in mind? <em>Let&apos;s talk.</em></h2>
          <p className="note">
            Open to contract and full-time work. Based in {site.location} ({site.timezone}), working with teams in the US, Canada, Europe and the Gulf.
          </p>
          <ul className="reach">
            <li><span className="mono muted">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li><span className="mono muted">Phone</span><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            {site.socials.linkedin && <li><span className="mono muted">LinkedIn</span><a href={site.socials.linkedin} target="_blank" rel="noreferrer">ansab-khalid ↗</a></li>}
            {site.socials.github && <li><span className="mono muted">GitHub</span><a href={site.socials.github} target="_blank" rel="noreferrer">AnsabKhalid ↗</a></li>}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
