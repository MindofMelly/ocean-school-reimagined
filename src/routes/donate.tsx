import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Box, Building2, Heart, Menu, Repeat, Share2, Sparkles, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import community from "@/assets/kilombo-community.jpg";
import students from "@/assets/kilombo-students.jpg";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Give & Support | Kilombo School" },
      { name: "description", content: "Partner with Kilombo School through a one-time or recurring gift. Your support sustains scholarships, African-centered curriculum, and the daily work of educating free children." },
      { property: "og:title", content: "Give & Support | Kilombo School" },
      { property: "og:description", content: "Every gift helps Kilombo students learn, grow, and lead. Give today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

function ActionLink({ href, children, tone = "red" }: { href: string; children: React.ReactNode; tone?: "red" | "green" | "gold" | "light" }) {
  const tones = {
    red: "bg-brand-red text-primary-foreground hover:bg-ink",
    green: "bg-brand-green text-secondary-foreground hover:bg-ink",
    gold: "bg-brand-gold text-accent-foreground hover:bg-paper",
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
            <Link to="/about" className="p-3 font-semibold">Our School</Link>
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

const ways = [
  {
    title: "One-time gift",
    body: "Make an immediate impact. Your one-time gift helps fund scholarships, classroom materials, and cultural programming.",
    icon: Heart,
  },
  {
    title: "Monthly giving",
    body: "Sustained support keeps Kilombo strong all year long. Become a recurring partner and help us plan with confidence.",
    icon: Repeat,
  },
  {
    title: "In-kind donation",
    body: "Books, supplies, technology, and professional services strengthen our classrooms and operations. Reach out to explore what we need.",
    icon: Box,
  },
  {
    title: "Corporate & community partnership",
    body: "Schools, businesses, and institutions can sponsor programs, events, or scholarships. We are eager to build together.",
    icon: Building2,
  },
  {
    title: "Planned & legacy giving",
    body: "Include Kilombo in your estate plans and leave a lasting imprint on generations of students.",
    icon: Sparkles,
  },
  {
    title: "Pray & share",
    body: "Not everyone can give financially. Your prayers, advocacy, and social shares expand our village and help families find us.",
    icon: Share2,
  },
];

function DonatePage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[76svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={community} alt="Kilombo students and educators together outdoors" className="absolute inset-0 size-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(76svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Give today</p>
          <h1 className="font-display max-w-5xl text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-[7rem]">Give to<br /><span className="text-brand-gold">liberate.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">Your partnership sustains an African-centered freedom school where every child is expected to achieve at high levels and lead with purpose.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ActionLink href={donateUrl}>Donate now</ActionLink><ActionLink href="/enroll" tone="green">Enroll a student</ActionLink></div>
        </div>
      </section>

      <section className="bg-brand-gold px-5 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="text-sm font-bold uppercase">Why give</p><p className="mt-3 text-sm">Every gift matters</p></div>
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">Donors keep Kilombo accessible, excellent, and free.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">Kilombo refuses to choose between academic rigor and cultural truth. Your support helps us offer both while keeping tuition within reach for families who need us most. Every dollar strengthens scholarships, teacher development, facilities, and the daily work of liberation.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-red px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-brand-gold">The Committed 1000</p>
            <h2 className="font-display mt-5 text-4xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">1,000 people.<br /><span className="text-brand-gold">$25 a month.</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">Microfunding is powerful. When 1,000 committed supporters each pledge a tax-deductible $25 a month, small gifts become $25,000 of steady, predictable support — every single month — for our students, teachers, and programs.</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">Your pledge might seem small, but together it provides resources, support, and opportunities our children can count on all year long.</p>
            <div className="mt-8"><ActionLink href={donateUrl} tone="light">Join the Committed 1000</ActionLink></div>
          </div>
          <div className="border border-paper/25 p-7 sm:p-10">
            <p className="font-display text-5xl uppercase text-brand-gold sm:text-6xl">$25<span className="text-2xl text-primary-foreground">/mo</span></p>
            <p className="mt-3 text-sm font-bold uppercase">Your monthly pledge</p>
            <ul className="mt-8 space-y-5 text-primary-foreground/85">
              <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-primary-foreground">Tax-deductible</strong> — every monthly gift is fully deductible.</span></li>
              <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-primary-foreground">Collective impact</strong> — 1,000 pledges become $25,000 each month.</span></li>
              <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-primary-foreground">Dependable support</strong> — steady funding lets us plan with confidence.</span></li>
              <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-primary-foreground">Cancel anytime</strong> — you stay in control of your giving.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ways" className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-bold uppercase text-brand-red">Ways to give</p>
          <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Pick the path that fits you.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ways.map((way) => {
              const Icon = way.icon;
              return (
                <article key={way.title} className="border border-ink/10 p-7 transition-colors hover:border-brand-gold sm:p-9">
                  <Icon className="mb-6 size-10 text-brand-red" aria-hidden="true" />
                  <h3 className="font-display text-2xl uppercase">{way.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{way.body}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-12"><ActionLink href={donateUrl}>Give through Zeffy</ActionLink></div>
        </div>
      </section>

      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden"><img src={students} alt="A Kilombo student participating in a school gathering" className="absolute inset-0 size-full object-cover object-center" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /></div>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <p className="text-sm font-bold uppercase text-brand-gold">Where your gift goes</p>
          <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Support that reaches the classroom.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Gifts to Kilombo are stewarded with care. Your generosity flows directly into the people, programs, and place that make our school possible.</p>
          <ul className="mt-10 space-y-5 text-paper/80">
            <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-paper">Scholarships & tuition assistance</strong> — making a Kilombo education possible for more families.</span></li>
            <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-paper">Cultural & experiential learning</strong> — field trips, speakers, arts, and heritage programming.</span></li>
            <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-paper">Classroom resources & technology</strong> — books, materials, and tools that nurture curiosity.</span></li>
            <li className="flex items-start gap-4"><span className="mt-1.5 size-2 shrink-0 bg-brand-gold" /><span><strong className="text-paper">Educator support & professional growth</strong> — because excellent teaching is at the heart of liberation.</span></li>
          </ul>
        </div>
      </section>

      <section className="bg-brand-green px-5 py-20 text-secondary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-brand-gold">Partner with us</p>
              <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">There is room for your whole village.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground/80">Whether you give once a year, volunteer monthly, or spread the word across your network, you are part of keeping this freedom school alive. We would love to talk about how you can join.</p>
            </div>
            <div className="grid gap-6">
              <a href="mailto:admin@kilomboinstitute.com?subject=Partnership%20and%20giving%20inquiry" className="group border border-paper/25 bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
                <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Ask about partnership</h3>
                <p className="mt-3 text-secondary-foreground/75 group-hover:text-paper/70">Send us an email to discuss sponsorships, in-kind gifts, or legacy plans.</p>
              </a>
              <a href={donateUrl} target="_blank" rel="noreferrer" className="group border border-paper/25 bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
                <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Give securely online</h3>
                <p className="mt-3 text-secondary-foreground/75 group-hover:text-paper/70">Make a one-time or recurring gift through our secure Zeffy donation page.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Join our school</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">A place for your child to soar.</h2><p className="mt-5 max-w-xl leading-relaxed">Discover a community that sees your child’s brilliance and expects them to lead. Begin the enrollment process today.</p><div className="mt-8"><ActionLink href="/enroll" tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Give what you can, when you can.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Every contribution helps preserve culturally rooted education for today’s students and the generations they will inspire.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
