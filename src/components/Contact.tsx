import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-cream py-24 lg:py-32 dark:bg-ink-900">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">
              <span className="gold-line" />
              Get in touch
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Tell us about your{" "}
              <span className="italic text-gradient-gold">moment</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-600 leading-relaxed max-w-md dark:text-cream/60">
              We respond to every enquiry personally — usually within 24
              hours. Share a few details and we'll come back with package
              options, available dates and a few honest questions.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={0.15}>
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Studio"
                value={site.contact.address}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Call"
                value={site.contact.phone}
                href={`tel:${site.contact.phoneRaw}`}
              />
            </Reveal>
            <Reveal delay={0.25}>
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={site.contact.email}
                href={`mailto:${site.contact.email}`}
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="rounded-[4px] border border-ink-900/10 bg-gradient-to-br from-white to-ink-50 p-8 sm:p-10 shadow-sm dark:border-cream/10 dark:from-ink-800/80 dark:to-ink-900 dark:shadow-none"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" placeholder="Anaya & Rohit" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                />
                <Field label="Phone" name="phone" placeholder="+91 ..." />
                <Field
                  label="Event date"
                  name="date"
                  type="date"
                  placeholder=""
                />
              </div>

              <div className="mt-5">
                <label className="block text-[11px] uppercase tracking-widest2 text-ink-500 mb-2 dark:text-cream/50">
                  Service
                </label>
                <select
                  name="service"
                  className="w-full bg-white border border-ink-900/15 rounded-md px-4 py-3 text-ink-900 focus:border-gold-600 focus:outline-none dark:bg-ink-900/60 dark:border-cream/10 dark:text-cream dark:focus:border-gold-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Maternity</option>
                  <option>Newborn / Baby</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate / Branding</option>
                  <option>Live Telecast</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-[11px] uppercase tracking-widest2 text-ink-500 mb-2 dark:text-cream/50">
                  Tell us a bit more
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Where, when, who, the vibe you're going for..."
                  className="w-full bg-white border border-ink-900/15 rounded-md px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-gold-600 focus:outline-none resize-none dark:bg-ink-900/60 dark:border-cream/10 dark:text-cream dark:placeholder-cream/30 dark:focus:border-gold-300"
                />
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-ink-400 dark:text-cream/40">
                  By sending this you agree to be contacted about your enquiry.
                </p>
                <button type="submit" className="btn-primary">
                  {sent ? "Message sent ✓" : (<>Send enquiry <Send className="h-4 w-4" /></>)}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest2 text-ink-500 mb-2 dark:text-cream/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-ink-900/15 rounded-md px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-gold-600 focus:outline-none dark:bg-ink-900/60 dark:border-cream/10 dark:text-cream dark:placeholder-cream/30 dark:focus:border-gold-300"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-4 group">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-gold-700 group-hover:border-gold-600 transition dark:border-cream/15 dark:text-gold-300 dark:group-hover:border-gold-300">
        {icon}
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-widest2 text-ink-500 dark:text-cream/40">
          {label}
        </div>
        <div className="font-display text-xl text-ink-900 group-hover:text-gold-700 transition dark:text-cream dark:group-hover:text-gold-300">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
