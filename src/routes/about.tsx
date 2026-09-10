import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import students from "@/assets/kilombo-students.jpg";
import community from "@/assets/kilombo-community.jpg";
import love from "@/assets/kilombo-love.png";
import knowledge from "@/assets/kilombo-knowledge.png";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Kilombo School" },
      { name: "description", content: "Learn how Kilombo grew from a community vision into an African-centered freedom school rooted in love, excellence, and liberation." },
      { property: "og:title", content: "Our Story | Kilombo School" },
      { property: "og:description", content: "A freedom school built by a community that believes every child is beautiful, capable, and divine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
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
          <Link to="/about" className="text-sm font-semibold text-brand-gold">Our School</Link>
          <Link to="/curriculum" className="text-sm font-semibold hover:text-brand-gold">Curriculum</Link>
          <Link to="/staff" className="text-sm font-semibold hover:text-brand-gold">Staff</Link>
          <Link to="/enroll" className="text-sm font-semibold hover:text-brand-gold">Admissions</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
          <Link to="/bulletin" className="text-sm font-semibold hover:text-brand-gold">Bulletin</Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-brand-gold">Contact</Link>
          <Link to="/enroll" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</Link>
          <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
          <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
            <Link to="/about" className="p-3 font-semibold text-brand-red">Our School</Link>
            <Link to="/curriculum" className="p-3 font-semibold">Curriculum</Link>
            <Link to="/staff" className="p-3 font-semibold">Staff</Link>
            <Link to="/enroll" className="p-3 font-semibold">Admissions</Link>
            <Link to="/community" className="p-3 font-semibold">Community</Link>
            <Link to="/bulletin" className="p-3 font-semibold">Bulletin</Link>
            <Link to="/contact" className="p-3 font-semibold">Contact</Link>
            <Link to="/enroll" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</Link>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function AboutPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[76svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={community} alt="Kilombo students and educators together outdoors" className="absolute inset-0 size-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(76svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Our story</p>
          <h1 className="font-display max-w-5xl text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-[7rem]">Built for<br /><span className="text-brand-gold">our children.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">A freedom school born from faith, community action, and an unwavering belief in the brilliance of African children.</p>
        </div>
      </section>

      <section className="bg-brand-gold px-5 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="text-sm font-bold uppercase">Why Kilombo exists</p><p className="mt-3 text-sm">Lithonia, Georgia</p></div>
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">A community decided its children deserved a freedom school.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">Kilombo grew from First Afrikan Church’s commitment to institution building and from families, educators, and organizations who loved African children enough to create an alternative. They imagined a school with high expectations, cultural truth, and joy at its center.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase text-brand-red">Our journey</p>
              <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">From an idea to a living institution.</h2>
            </div>
            <ol className="border-t border-ink/20">
              <li className="grid gap-5 border-b border-ink/20 py-9 sm:grid-cols-[8rem_1fr]"><p className="font-display text-2xl text-brand-green">2000</p><div><h3 className="font-display text-2xl uppercase">The vision begins</h3><p className="mt-3 leading-relaxed text-muted-foreground">A planning committee gathered at First Afrikan Church to build an educational alternative rooted in African history, culture, and possibility.</p></div></li>
              <li className="grid gap-5 border-b border-ink/20 py-9 sm:grid-cols-[8rem_1fr]"><p className="font-display text-2xl text-brand-green">2001</p><div><h3 className="font-display text-2xl uppercase">Learning takes root</h3><p className="mt-3 leading-relaxed text-muted-foreground">Kilombo began a reading tutorial program to help students who were below grade level get back on track—and saw powerful results.</p></div></li>
              <li className="grid gap-5 border-b border-ink/20 py-9 sm:grid-cols-[8rem_1fr]"><p className="font-display text-2xl text-brand-green">2005</p><div><h3 className="font-display text-2xl uppercase">The first full school day</h3><p className="mt-3 leading-relaxed text-muted-foreground">Thirteen children entered Kilombo’s full-day home school tutorial program in a small Decatur house. They learned with focus, discipline, and joy.</p></div></li>
              <li className="grid gap-5 border-b border-ink/20 py-9 sm:grid-cols-[8rem_1fr]"><p className="font-display text-2xl text-brand-green">Today</p><div><h3 className="font-display text-2xl uppercase">The work continues</h3><p className="mt-3 leading-relaxed text-muted-foreground">Kilombo remains a place where students see themselves in the curriculum, learn among examples of Black excellence, and are expected to soar.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="relative min-h-[500px] overflow-hidden"><img src={students} alt="A Kilombo student participating in a school gathering" className="absolute inset-0 size-full object-cover object-center" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /></div>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <p className="text-sm font-bold uppercase text-brand-gold">What we believe</p>
          <blockquote className="font-display mt-6 text-4xl uppercase leading-tight sm:text-5xl">“Love the children, expect them to achieve at high levels, and push them to greater levels of achievement.”</blockquote>
          <p className="mt-7 max-w-xl leading-relaxed text-paper/70">At Kilombo, high achievement is not treated as an exception. It is the expectation. Students learn that they are beautiful, capable, and divine—and that knowledge shapes how they move through the world.</p>
        </div>
      </section>

      <section className="bg-brand-green px-5 py-20 text-secondary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-gold">A whole-child vision</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end"><h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">Education touches every dimension of life.</h2><p className="max-w-xl text-lg leading-relaxed text-secondary-foreground/80">Kilombo’s African-centered approach is physical, spiritual, intellectual, relational, and communal. Learning equips students to know themselves, work together, and contribute to the world.</p></div>
          <div className="mt-12 grid gap-px bg-paper/25 md:grid-cols-2">
            <article className="bg-brand-green p-7 sm:p-9"><img src={knowledge} alt="Adinkra knowledge symbol" className="mb-6 size-16" /><h3 className="font-display text-2xl uppercase">Know deeply</h3><p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75">Critical thinking, strong academic foundations, and a clear cultural and historical identity.</p></article>
            <article className="bg-brand-green p-7 sm:p-9"><img src={love} alt="Adinkra love symbol" className="mb-6 size-16" /><h3 className="font-display text-2xl uppercase">Live communally</h3><p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75">Cooperation over competition, healthy relationships, and responsibility to humanity.</p></article>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Join our school</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Let your child’s brilliance lead.</h2><p className="mt-5 max-w-xl leading-relaxed">Begin the enrollment process and discover a community built to see, challenge, and support the whole child.</p><div className="mt-8"><ActionLink href="/enroll" tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Help the freedom school grow.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Every gift helps preserve culturally rooted education for today’s students and generations to come.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}