import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import students from "@/assets/kilombo-students.jpg";
import community from "@/assets/kilombo-community.jpg";
import love from "@/assets/kilombo-love.png";
import knowledge from "@/assets/kilombo-knowledge.png";
import firstDayVideo from "@/assets/kilombo-first-day.mp4";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kilombo School | Educate to Liberate" },
      { name: "description", content: "Kilombo offers academically excellent, African-centered education in Lithonia, Georgia. Enroll a student or support our work." },
      { property: "og:title", content: "Kilombo School | Educate to Liberate" },
      { property: "og:description", content: "Putting the child first through academically excellent, culturally relevant education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ActionLink = ({ href, children, tone = "red" }: { href: string; children: React.ReactNode; tone?: "red" | "green" | "gold" | "light" }) => {
  const tones = {
    red: "bg-brand-red text-primary-foreground hover:bg-ink",
    green: "bg-brand-green text-secondary-foreground hover:bg-ink",
    gold: "bg-brand-gold text-accent-foreground hover:bg-paper",
    light: "bg-paper text-ink hover:bg-brand-gold",
  };
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-bold uppercase transition-colors ${tones[tone]}`}>{children}<ArrowRight aria-hidden="true" className="size-4" /></a>;
};

function Index() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/20 bg-ink/90 text-paper backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <a href="#top" aria-label="Kilombo School home" className="bg-paper px-3 py-2"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-10 w-auto" /></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <Link to="/about" className="text-sm font-semibold hover:text-brand-gold">Our School</Link>
            <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
            <a href="#learning" className="text-sm font-semibold hover:text-brand-gold">Learning</a>
            <a href="#community" className="text-sm font-semibold hover:text-brand-gold">Mission</a>
            <a href={enrollUrl} target="_blank" rel="noreferrer" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</a>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
          </nav>
          <details className="group relative md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
            <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
              <Link to="/about" className="p-3 font-semibold">Our School</Link><Link to="/community" className="p-3 font-semibold">Community</Link><a href="#learning" className="p-3 font-semibold">Learning</a><a href="#community" className="p-3 font-semibold">Mission</a>
              <a href={enrollUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</a>
              <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink pt-20 text-paper">
        <video className="absolute -top-[6%] left-0 h-[112%] w-full object-cover opacity-75" autoPlay muted loop playsInline poster={community} aria-label="Kilombo students celebrating their first day of school"><source src={firstDayVideo} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
        <div className="relative mx-auto grid w-full max-w-[1500px] gap-10 px-5 pb-10 pt-32 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:pb-16">
          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Putting the child first</p>
            <h1 className="font-display max-w-5xl text-5xl leading-[0.95] uppercase sm:text-7xl lg:text-[7.5rem]">Educate to<br /><span className="text-brand-gold">liberate.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">An academically excellent, culturally relevant education rooted in love, knowledge, and community.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ActionLink href={enrollUrl} tone="green">Enroll a student</ActionLink><ActionLink href={donateUrl}>Donate today</ActionLink></div>
          </div>
          <a href="#about" aria-label="Discover Kilombo" className="hidden size-16 items-center justify-center rounded-full border border-paper/40 transition-colors hover:bg-paper hover:text-ink lg:flex"><ArrowDown className="size-5" /></a>
        </div>
      </section>

      <div className="overflow-hidden bg-brand-gold py-4 text-ink" aria-hidden="true"><div className="animate-marquee flex w-max whitespace-nowrap font-display text-xl uppercase"><span>Beautiful · Capable · Divine · Educate to Liberate · Community · Excellence · </span><span>Beautiful · Capable · Divine · Educate to Liberate · Community · Excellence · </span></div></div>

      <section id="about" className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-sm font-bold uppercase text-brand-red">Our philosophy</p><p className="mt-3 text-sm text-muted-foreground">Lithonia, Georgia</p></div>
          <div><h2 className="font-display text-4xl leading-tight uppercase sm:text-6xl">Every child is<br /><span className="text-brand-green">beautiful, capable,</span><br />and divine.</h2><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">The children at Kilombo achieve at high levels not because they are special; they achieve because that is the expectation. We create the conditions for every child to know who they are and what they can become.</p></div>
        </div>
      </section>

      <section id="learning" className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="relative min-h-[540px] overflow-hidden"><img src={students} alt="A Kilombo student raising her hand during a community gathering" className="absolute inset-0 size-full object-cover object-center" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" /><p className="absolute bottom-8 left-8 font-display text-2xl uppercase">Learning in community</p></div>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <p className="text-sm font-bold uppercase text-brand-gold">Our approach</p><h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Rooted in culture.<br />Ready for the world.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Our African-centered educational process is holistic. It nurtures the physical, spiritual, intellectual, relational, and communal dimensions of every student.</p>
          <div className="mt-10 grid gap-px bg-paper/20 sm:grid-cols-2">
            <article className="bg-ink p-6"><img src={knowledge} alt="Adinkra knowledge symbol" className="mb-5 size-16" /><h3 className="font-display text-xl uppercase">Knowledge</h3><p className="mt-3 text-sm leading-relaxed text-paper/65">Academic rigor, curiosity, and a deep understanding of self.</p></article>
            <article className="bg-ink p-6"><img src={love} alt="Adinkra love symbol" className="mb-5 size-16" /><h3 className="font-display text-xl uppercase">Love</h3><p className="mt-3 text-sm leading-relaxed text-paper/65">A caring community where each child is fully seen and supported.</p></article>
          </div>
        </div>
      </section>

      <section id="community" className="bg-brand-green px-5 py-20 text-secondary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div><p className="text-sm font-bold uppercase text-brand-gold">The Kilombo community</p><h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">A school where belonging comes first.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">Kilombo fosters an academically excellent and culturally relevant education that equips students to succeed globally and commit to social justice.</p><div className="mt-8"><ActionLink href={enrollUrl} tone="light">Begin enrollment</ActionLink></div></div>
          <img src={community} alt="Kilombo students and educators spending time together outdoors" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">For families</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">A place to learn, grow, and lead.</h2><p className="mt-5 max-w-xl leading-relaxed">Discover an educational experience that sees your child’s brilliance and cultivates their whole self.</p><div className="mt-8"><ActionLink href={enrollUrl} tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">For our village</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Invest in the future.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your gift sustains culturally rooted learning and helps Kilombo students thrive. Every contribution matters.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}