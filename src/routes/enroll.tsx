import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import community from "@/assets/kilombo-community.jpg";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Admissions & Tuition | Kilombo School" },
      { name: "description", content: "Everything families need to enroll at Kilombo: how to apply, tuition payment options, and scholarship information." },
      { property: "og:title", content: "Admissions & Tuition | Kilombo School" },
      { property: "og:description", content: "Begin enrollment and review Kilombo's tuition options and scholarships in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnrollPage,
});

function ActionLink({ href, children, tone = "red" }: { href: string; children: React.ReactNode; tone?: "red" | "green" | "light" }) {
  const tones = {
    red: "bg-brand-red text-primary-foreground hover:bg-ink",
    green: "bg-brand-green text-secondary-foreground hover:bg-ink",
    light: "bg-paper text-ink hover:bg-brand-gold",
  };
  const className = `inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-bold uppercase transition-colors ${tones[tone]}`;
  if (href.startsWith("/")) return <Link to={href} className={className}>{children}<ArrowRight aria-hidden="true" className="size-4" /></Link>;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}<ArrowRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/20 bg-ink/90 text-paper backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link to="/" aria-label="Kilombo School home" className="bg-paper px-3 py-2"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-10 w-auto" /></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          <Link to="/about" className="text-sm font-semibold hover:text-brand-gold">Our School</Link>
          <Link to="/curriculum" className="text-sm font-semibold hover:text-brand-gold">Curriculum</Link>
          <Link to="/staff" className="text-sm font-semibold hover:text-brand-gold">Staff</Link>
          <Link to="/enroll" className="text-sm font-semibold text-brand-gold">Admissions</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-brand-gold">Contact</Link>
          <Link to="/enroll" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</Link>
          <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
          <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
            <Link to="/about" className="p-3 font-semibold">Our School</Link>
            <Link to="/curriculum" className="p-3 font-semibold">Curriculum</Link>
            <Link to="/staff" className="p-3 font-semibold">Staff</Link>
            <Link to="/enroll" className="p-3 font-semibold text-brand-red">Admissions</Link>
            <Link to="/community" className="p-3 font-semibold">Community</Link>
            <Link to="/contact" className="p-3 font-semibold">Contact</Link>
            <Link to="/enroll" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</Link>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

const tuitionOptions = [
  {
    label: "Option 1",
    tagline: "Standard monthly plan",
    price: "$11,000/yr",
    monthly: "$1,100/mo",
    details: [
      "Plus a one-time registration fee",
      "Attend 5 of 10 parent meetings",
      "Volunteer 20 hours a school year",
      "Not on auto-draft: $1,200/mo instead",
    ],
  },
  {
    label: "Option 2",
    tagline: "Reduced monthly plan",
    price: "$10,000/yr",
    monthly: "$1,000/mo",
    details: [
      "Plus a one-time registration fee",
      "Attend 7 of 10 parent meetings",
      "$500 fundraising fee (1 child) / $750 (2+ children)",
      "Volunteer 40 hours a school year",
      "Not on auto-draft: $1,100/mo instead",
      "Falls back to Option 1 if meeting/fundraising minimums aren't met by mid-December",
    ],
  },
  {
    label: "Option 3",
    tagline: "Paid in full by Aug 1 — save 10%",
    price: "$9,900 (Option 1 basis) or $8,550 (Option 2 basis)",
    monthly: "One payment",
    details: [
      "Plus registration fee",
      "Option 2 basis still requires 7 of 10 meetings, 40 volunteer hours, and fundraising fees",
      "Falls back to Option 1 if requirements aren't met by mid-December",
    ],
  },
  {
    label: "Option 4",
    tagline: "Two semester payments — save 5%",
    price: "$5,225 per semester (Option 1 basis)",
    monthly: "Due Aug 1 & Dec 15",
    details: [
      "Plus applicable registration fee",
      "Attend 5 of 10 parent meetings",
      "Volunteer 20 hours a school year",
      "Falls back to Option 1 if requirements aren't met by mid-December",
    ],
  },
];

function EnrollPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[62svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={community} alt="Kilombo families gathered on campus" className="absolute inset-0 size-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(62svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Admissions</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">Join the<br /><span className="text-brand-gold">Kilombo family.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">Enrollment is open for PK–8th grade. Review tuition options below, then begin your application online.</p>
          <div className="mt-8"><ActionLink href={enrollUrl} tone="green">Start your application</ActionLink></div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-red">Tuition</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl uppercase leading-tight sm:text-6xl">Four ways to pay.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Families choose the plan that works best for them. Questions about tuition? <Link to="/contact" className="font-semibold text-brand-red underline underline-offset-4">Contact us</Link> — we're glad to walk through the details.</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {tuitionOptions.map((opt) => (
              <article key={opt.label} className="border border-ink/10 p-7 sm:p-9">
                <p className="text-xs font-bold uppercase text-brand-red">{opt.label}</p>
                <h3 className="font-display mt-2 text-2xl uppercase leading-tight">{opt.tagline}</h3>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="font-display text-3xl text-brand-green">{opt.price}</p>
                  <p className="text-sm font-semibold text-muted-foreground">{opt.monthly}</p>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {opt.details.map((d) => (<li key={d} className="flex items-start gap-3"><span className="mt-1.5 size-1.5 shrink-0 bg-brand-gold" />{d}</li>))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground/80">Figures shown reflect the school's most recently published tuition schedule and should be confirmed with the Kilombo office before enrolling, as amounts are reviewed each year.</p>
          <div className="mt-10"><ActionLink href={enrollUrl}>Ready to enroll?</ActionLink></div>
        </div>
      </section>

      <section className="bg-brand-green px-5 py-20 text-secondary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-brand-gold">Scholarships</p>
            <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Support is available.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">Kilombo offers scholarships to families in need. To apply, submit a financial profile including a statement of need and pay stubs and/or tax statements. Kilombo's Viongozi (leadership team) reviews profiles and responds based on availability — most scholarships are approved before July 1 of the upcoming school year.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ActionLink href={donateUrl} tone="light">Give to the scholarship fund</ActionLink><Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 border border-paper/40 px-6 text-sm font-bold uppercase text-secondary-foreground transition-colors hover:bg-paper hover:text-ink">Ask about a scholarship<ArrowRight aria-hidden="true" className="size-4" /></Link></div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Ready when you are</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Begin your child's application.</h2><p className="mt-5 max-w-xl leading-relaxed">Applications are reviewed on a rolling basis. Start today to secure your family's spot.</p><div className="mt-8"><ActionLink href={enrollUrl} tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Help a family enroll.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your gift helps fund scholarships so more children can access a Kilombo education.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
