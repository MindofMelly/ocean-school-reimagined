import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";
const homecomingUrl = "https://www.zeffy.com/en-US/ticketing/celebrating-21-years-2nd-annual-kilombo-homecoming";
const homecomingFlyer = "https://res.cloudinary.com/hxn9dbuhd/image/upload/f_auto,c_limit,w_1200,q_auto/v1788888868/organizations/9/3/e/f/93efb418-a839-4108-bfee-794c4299193c/22f2149c-577f-48c3-b95c-20663cb054e4.png";
const investFlyer = "https://kilomboschool.com/wp-content/uploads/2026/08/kilombo-invest.png";
const committed1000Url = "https://kilomboschool.com/committed1000/";

export const Route = createFileRoute("/bulletin")({
  head: () => ({
    meta: [
      { title: "Bulletin Board | Kilombo School" },
      { name: "description", content: "Upcoming events, videos, and flyers from Kilombo Academic & Cultural Institute." },
      { property: "og:title", content: "Bulletin Board | Kilombo School" },
      { property: "og:description", content: "See what's happening at Kilombo — events, videos, and announcements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BulletinPage,
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
        <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
          <Link to="/about" className="text-sm font-semibold hover:text-brand-gold">Our School</Link>
          <Link to="/curriculum" className="text-sm font-semibold hover:text-brand-gold">Curriculum</Link>
          <Link to="/staff" className="text-sm font-semibold hover:text-brand-gold">Staff</Link>
          <Link to="/enroll" className="text-sm font-semibold hover:text-brand-gold">Admissions</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-brand-gold">Community</Link>
          <Link to="/bulletin" className="text-sm font-semibold text-brand-gold">Bulletin</Link>
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
            <Link to="/enroll" className="p-3 font-semibold">Admissions</Link>
            <Link to="/community" className="p-3 font-semibold">Community</Link>
            <Link to="/bulletin" className="p-3 font-semibold text-brand-red">Bulletin</Link>
            <Link to="/contact" className="p-3 font-semibold">Contact</Link>
            <Link to="/enroll" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</Link>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

const videos = [
  { title: "First Day of School — August 2026", src: "/videos/first-day-of-school-2026.mp4" },
  { title: "Yolanda on Adonis", src: "/videos/yolanda-on-adonis.mp4" },
  { title: "Ire for Back to Black", src: "/videos/ire-for-back-to-black.mp4" },
  { title: "Join the Committed 1000 Campaign", src: "https://kilomboschool.com/wp-content/uploads/2020/11/We-All-Win-Join-The-Committed-1000-Campaign.mp4" },
];

function BulletinPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[52svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={homecomingFlyer} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover object-center opacity-30 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
        <div className="relative mx-auto flex min-h-[calc(52svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Bulletin board</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">What's happening<br /><span className="text-brand-gold">at Kilombo.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">Upcoming events, videos, and flyers from around the school.</p>
        </div>
      </section>

      <section className="bg-brand-gold px-5 py-16 text-ink lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase">Upcoming event</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <a href={homecomingUrl} target="_blank" rel="noreferrer" className="block overflow-hidden border border-ink/10">
              <img src={homecomingFlyer} alt="Celebrating 21 Years — 2nd Annual Kilombo Homecoming flyer" className="w-full object-cover" />
            </a>
            <div>
              <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl">Celebrating 21 years! 2nd Annual Kilombo Homecoming</h2>
              <ul className="mt-6 space-y-2 text-lg leading-relaxed">
                <li><strong>When:</strong> Saturday, October 3, 2026</li>
                <li><strong>Where:</strong> 2575 Snapfinger Rd, Decatur, GA 30034</li>
                <li><strong>Cost:</strong> Free — general admission, family-friendly</li>
              </ul>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/80">Join us as we honor 21 years of Afrikan-centered excellence at Kilombo.</p>
              <div className="mt-8"><ActionLink href={homecomingUrl} tone="green">RSVP / get tickets</ActionLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-red">Videos</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl uppercase leading-tight sm:text-6xl">See Kilombo in motion.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="aspect-video w-full overflow-hidden border border-ink/10">
                <iframe title="Educate to Liberate" className="size-full" src="https://www.youtube.com/embed/lISScGDcmQg" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h3 className="font-display mt-4 text-lg uppercase">Educate to Liberate</h3>
            </div>
            {videos.map((v) => (
              <div key={v.title}>
                <div className="aspect-video w-full overflow-hidden border border-ink/10 bg-ink">
                  <video controls preload="metadata" className="size-full object-cover"><source src={v.src} /></video>
                </div>
                <h3 className="font-display mt-4 text-lg uppercase">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-gold">Flyers & announcements</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl uppercase leading-tight sm:text-6xl">Print it, share it, post it.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a href={homecomingUrl} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-paper/15">
              <img src={homecomingFlyer} alt="Kilombo Homecoming flyer" className="w-full object-cover transition-transform group-hover:scale-105" />
              <p className="p-4 text-sm font-semibold uppercase">Homecoming — Oct 3, 2026</p>
            </a>
            <a href={committed1000Url} target="_blank" rel="noreferrer" className="group block overflow-hidden border border-paper/15">
              <img src={investFlyer} alt="Join the Committed 1000 flyer" className="w-full object-cover transition-transform group-hover:scale-105" />
              <p className="p-4 text-sm font-semibold uppercase">Join the Committed 1000</p>
            </a>
          </div>
          <p className="mt-8 text-sm text-paper/60">More flyers and event announcements are posted here as they come in — check back for updates.</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Join our school</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Be part of what's next.</h2><p className="mt-5 max-w-xl leading-relaxed">Begin the enrollment process and become part of the Kilombo community.</p><div className="mt-8"><ActionLink href="/enroll" tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Support what you see here.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your gift helps make these programs and events possible.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
