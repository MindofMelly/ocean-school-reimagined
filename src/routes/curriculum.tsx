import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import students from "@/assets/kilombo-students.jpg";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum | Kilombo School" },
      { name: "description", content: "Kilombo pairs Common Core, Next Generation Science, and Georgia Standards with a Culturally Relevant curriculum supplement to teach every core subject through an African-centered lens." },
      { property: "og:title", content: "Curriculum | Kilombo School" },
      { property: "og:description", content: "Standards are the floor, not the ceiling. See how Kilombo builds a culturally relevant K-8 curriculum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CurriculumPage,
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
          <Link to="/curriculum" className="text-sm font-semibold text-brand-gold">Curriculum</Link>
          <Link to="/staff" className="text-sm font-semibold hover:text-brand-gold">Staff</Link>
          <Link to="/enroll" className="text-sm font-semibold hover:text-brand-gold">Admissions</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-brand-gold">Contact</Link>
          <Link to="/enroll" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</Link>
          <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
          <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
            <Link to="/about" className="p-3 font-semibold">Our School</Link>
            <Link to="/curriculum" className="p-3 font-semibold text-brand-red">Curriculum</Link>
            <Link to="/staff" className="p-3 font-semibold">Staff</Link>
            <Link to="/enroll" className="p-3 font-semibold">Admissions</Link>
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

const standards = [
  {
    name: "Common Core",
    subject: "Reading, Language Arts & Math",
    body: "Building on the best of existing state standards, the Common Core State Standards provide clear and consistent learning goals to help prepare students for college, career, and life. They show what students are expected to learn at each grade level so every parent and teacher can understand and support that learning.",
    href: "http://www.thecorestandards.org/",
  },
  {
    name: "Next Generation Science",
    subject: "K-8 Science",
    body: "Kilombo uses Generation Genius, a K-8 teaching resource that brings school science standards to life through videos, lesson plans, activities, and quizzes, produced in partnership with the National Science Teaching Association and aligned to standards in all 50 states.",
    href: "http://www.nextgenscience.org/",
  },
  {
    name: "Georgia Standards",
    subject: "Social Studies",
    body: "GeorgiaStandards.Org, part of the Georgia Department of Education, is committed to improving student achievement and guides Kilombo's social studies instruction alongside our culturally relevant approach.",
    href: "https://www.georgiastandards.org/Pages/default.aspx",
  },
];

function CurriculumPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[64svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={students} alt="A Kilombo student engaged in classroom learning" className="absolute inset-0 size-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(64svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Curriculum</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">Standards are<br /><span className="text-brand-gold">the floor,</span><br />not the ceiling.</h1>
        </div>
      </section>

      <section className="bg-brand-gold px-5 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="text-sm font-bold uppercase">K-8 academics</p><p className="mt-3 text-sm">Lithonia, Georgia</p></div>
          <div>
            <p className="max-w-3xl text-lg leading-relaxed">Using standards allows teachers to systematically teach age-appropriate content throughout our scholars' K-8 career. Learning happens in steps, and using standards allows us to fill holes for scholars who struggle and push scholars who have accelerated skill sets.</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed">In order to ensure our teachers are culturally proficient, Kilombo has created a Culturally Relevant curriculum supplement that allows us to teach all core content from a culturally relevant perspective — combined with standards to build units that include projects, field trips, art, hands-on activities, and cross-content learning experiences. We use data to assess student growth and differentiate instruction so our scholars excel regardless of circumstance.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-red">Our standards</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl uppercase leading-tight sm:text-6xl">Rigorous frameworks, taught through a cultural lens.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {standards.map((s) => (
              <article key={s.name} className="flex flex-col justify-between border border-ink/10 p-7 transition-colors hover:border-brand-gold sm:p-9">
                <div>
                  <p className="text-xs font-bold uppercase text-brand-red">{s.subject}</p>
                  <h3 className="font-display mt-3 text-2xl uppercase">{s.name}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <a href={s.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase text-brand-red hover:text-ink">Learn more<ArrowRight aria-hidden="true" className="size-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <p className="text-sm font-bold uppercase text-brand-gold">Culturally Relevant Supplement</p>
          <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-5xl">Core content, African-centered lens.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Every subject Kilombo teaches — reading, math, science, and social studies — is taught in combination with our Culturally Relevant Supplement, so scholars see themselves in what they learn while meeting rigorous state and national standards.</p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden"><img src={students} alt="Kilombo scholars during a hands-on lesson" className="absolute inset-0 size-full object-cover object-center" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /></div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Join our school</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">See the curriculum in action.</h2><p className="mt-5 max-w-xl leading-relaxed">Begin the enrollment process and discover a rigorous, culturally rooted education for your child.</p><div className="mt-8"><ActionLink href="/enroll" tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Invest in the classroom.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your gift funds books, materials, and the tools that bring our curriculum to life.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
