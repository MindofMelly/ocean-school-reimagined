import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import students from "@/assets/kilombo-students.jpg";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Kilombo School" },
      { name: "description", content: "Reach Kilombo Academic & Cultural Institute in Lithonia, Georgia by phone, email, or text." },
      { property: "og:title", content: "Contact Us | Kilombo School" },
      { property: "og:description", content: "Get in touch with Kilombo School." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/20 bg-ink/90 text-paper backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link to="/" aria-label="Kilombo School home" className="bg-paper px-3 py-2"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-10 w-auto" /></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          <Link to="/about" className="text-sm font-semibold hover:text-brand-gold">Our School</Link>
          <Link to="/curriculum" className="text-sm font-semibold hover:text-brand-gold">Curriculum</Link>
          <Link to="/staff" className="text-sm font-semibold hover:text-brand-gold">Staff</Link>
          <Link to="/enroll" className="text-sm font-semibold hover:text-brand-gold">Admissions</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
          <Link to="/contact" className="text-sm font-semibold text-brand-gold">Contact</Link>
          <Link to="/enroll" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</Link>
          <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
          <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
            <Link to="/about" className="p-3 font-semibold">Our School</Link>
            <Link to="/curriculum" className="p-3 font-semibold">Curriculum</Link>
            <Link to="/staff" className="p-3 font-semibold">Staff</Link>
            <Link to="/enroll" className="p-3 font-semibold">Admissions</Link>
            <Link to="/community" className="p-3 font-semibold">Community</Link>
            <Link to="/contact" className="p-3 font-semibold text-brand-red">Contact</Link>
            <Link to="/enroll" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</Link>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function ContactPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[46svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={students} alt="Kilombo campus" className="absolute inset-0 size-full object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/35" />
        <div className="relative mx-auto flex min-h-[calc(46svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Get in touch</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">We'd love to<br /><span className="text-brand-gold">hear from you.</span></h1>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-brand-red">Contact info</p>
            <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-5xl">Reach the office.</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4"><MapPin className="mt-1 size-5 shrink-0 text-brand-red" aria-hidden="true" /><span className="leading-relaxed">6133 Redan Road<br />Lithonia, GA 30058</span></li>
              <li className="flex items-start gap-4"><Phone className="mt-1 size-5 shrink-0 text-brand-red" aria-hidden="true" /><a href="tel:+14049928021" className="leading-relaxed hover:text-brand-red">Text or call: (404) 992-8021</a></li>
              <li className="flex items-start gap-4"><Mail className="mt-1 size-5 shrink-0 text-brand-red" aria-hidden="true" /><a href="mailto:admin@kilomboinstitute.com" className="leading-relaxed hover:text-brand-red">admin@kilomboinstitute.com</a></li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" aria-label="Kilombo on Facebook" className="flex size-11 items-center justify-center border border-ink/15 transition-colors hover:border-brand-red hover:text-brand-red"><Facebook className="size-5" /></a>
              <a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" aria-label="Kilombo on Instagram" className="flex size-11 items-center justify-center border border-ink/15 transition-colors hover:border-brand-red hover:text-brand-red"><Instagram className="size-5" /></a>
            </div>
            <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-ink/10">
              <iframe title="Kilombo School location map" className="size-full" loading="lazy" src="https://www.google.com/maps?q=6133+Redan+Road+Lithonia+GA+30058&output=embed" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-brand-red">Send a message</p>
            <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-5xl">Ask us anything.</h2>
            <form action="mailto:admin@kilomboinstitute.com" method="post" encType="text/plain" className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">Name</label>
                  <input id="name" name="name" type="text" required className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-4 text-sm outline-none focus:border-brand-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">Email</label>
                  <input id="email" name="email" type="email" required className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-4 text-sm outline-none focus:border-brand-gold" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                <input id="subject" name="subject" type="text" className="mt-2 min-h-12 w-full border border-ink/20 bg-paper px-4 text-sm outline-none focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-2 w-full border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-brand-gold" />
              </div>
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand-red px-6 text-sm font-bold uppercase text-primary-foreground transition-colors hover:bg-ink">Send message<ArrowRight aria-hidden="true" className="size-4" /></button>
              <p className="text-xs text-muted-foreground/80">This form opens your email app to send directly to admin@kilomboinstitute.com. Prefer to skip it? Just email or text us using the details on the left.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
