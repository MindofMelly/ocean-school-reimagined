import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, Heart, Mail, MapPin, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import community from "@/assets/kilombo-community.jpg";
import students from "@/assets/kilombo-students.jpg";
import love from "@/assets/kilombo-love.png";
import knowledge from "@/assets/kilombo-knowledge.png";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Events | Kilombo School" },
      { name: "description", content: "Get involved with Kilombo School. See upcoming events, family resources, volunteer opportunities, and ways to support our village." },
      { property: "og:title", content: "Community & Events | Kilombo School" },
      { property: "og:description", content: "Join the Kilombo village. Events, family resources, and ways to support our students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function ActionLink({ href, children, tone = "red" }: { href: string; children: React.ReactNode; tone?: "red" | "green" | "gold" | "light" }) {
  const tones = {
    red: "bg-brand-red text-primary-foreground hover:bg-ink",
    green: "bg-brand-green text-secondary-foreground hover:bg-ink",
    gold: "bg-brand-gold text-accent-foreground hover:bg-paper",
    light: "bg-paper text-ink hover:bg-brand-gold",
  };
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-bold uppercase transition-colors ${tones[tone]}`}>
      {children}<ArrowRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/20 bg-ink/90 text-paper backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link to="/" aria-label="Kilombo School home" className="bg-paper px-3 py-2"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-10 w-auto" /></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link to="/about" className="text-sm font-semibold hover:text-brand-gold">Our School</Link>
          <Link to="/community" className="text-sm font-semibold text-brand-gold">Community</Link>
          <Link to="/" hash="learning" className="text-sm font-semibold hover:text-brand-gold">Learning</Link>
          <Link to="/" hash="community" className="text-sm font-semibold hover:text-brand-gold">Mission</Link>
          <Link to="/donate" className="text-sm font-semibold hover:text-brand-gold">Support</Link>
          <a href={enrollUrl} target="_blank" rel="noreferrer" className="bg-brand-green px-5 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-paper hover:text-ink">Enroll</a>
          <a href={donateUrl} target="_blank" rel="noreferrer" className="bg-brand-red px-5 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-paper hover:text-ink">Donate</a>
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-paper/30" aria-label="Open navigation"><Menu className="size-5 group-open:hidden" /><X className="hidden size-5 group-open:block" /></summary>
          <nav className="absolute right-0 top-14 flex w-64 flex-col border border-border bg-paper p-3 text-ink shadow-xl" aria-label="Mobile navigation">
            <Link to="/about" className="p-3 font-semibold">Our School</Link>
            <Link to="/community" className="p-3 font-semibold text-brand-red">Community</Link>
            <Link to="/" hash="learning" className="p-3 font-semibold">Learning</Link>
            <Link to="/" hash="community" className="p-3 font-semibold">Mission</Link>
            <Link to="/donate" className="p-3 font-semibold">Support</Link>
            <a href={enrollUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-green p-3 text-center font-bold uppercase text-secondary-foreground">Enroll</a>
            <a href={donateUrl} target="_blank" rel="noreferrer" className="mt-2 bg-brand-red p-3 text-center font-bold uppercase text-primary-foreground">Donate</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

const events = [
  {
    title: "Back-to-School Family Gathering",
    date: "August 3, 2026",
    time: "10:00 AM – 1:00 PM",
    location: "Kilombo Campus",
    description: "Meet teachers, tour classrooms, and connect with other Kilombo families before the first day.",
    tone: "gold" as const,
  },
  {
    title: "Kwanzaa Celebration & Student Showcase",
    date: "December 18, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "First Afrikan Church",
    description: "An evening of student performances, cultural presentations, and community fellowship.",
    tone: "green" as const,
  },
  {
    title: "Black History Month Open House",
    date: "February 20, 2027",
    time: "5:30 PM – 7:30 PM",
    location: "Kilombo Campus",
    description: "Prospective families and community members are invited to learn about our African-centered program.",
    tone: "red" as const,
  },
];

const involvements = [
  {
    title: "Volunteer",
    body: "Share your time, skills, or profession with our students. From reading buddies to career day speakers, our village is built by many hands.",
    visual: "heart" as const,
  },
  {
    title: "Partner",
    body: "Community organizations, businesses, and institutions can support Kilombo through sponsorships, in-kind gifts, and shared programs.",
    visual: "knowledge" as const,
  },
  {
    title: "Pray & Advocate",
    body: "Lift up our students and educators, and help spread the word about Kilombo’s mission in your networks.",
    visual: "love" as const,
  },
];

function CommunityPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[76svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={community} alt="Kilombo students and educators together outdoors" className="absolute inset-0 size-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(76svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Our village</p>
          <h1 className="font-display max-w-5xl text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-[7rem]">It takes a <br /><span className="text-brand-gold">community.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">Kilombo is more than a school. It is a village of families, educators, elders, and allies committed to raising free, brilliant children.</p>
        </div>
      </section>

      <section className="bg-brand-gold px-5 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="text-sm font-bold uppercase">Why community matters</p><p className="mt-3 text-sm">Lithonia, Georgia</p></div>
          <div>
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">A freedom school is sustained by the village around it.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">From families who carpool and pray, to volunteers who tutor and mentor, to donors who keep tuition accessible—Kilombo thrives because people show up. This page is your invitation to join the work.</p>
          </div>
        </div>
      </section>

      <section id="events" className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-brand-red">Upcoming events</p>
              <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Join us on campus.</h2>
            </div>
            <a href="mailto:admin@kilomboinstitute.com?subject=Event%20inquiry" className="inline-flex items-center gap-2 text-sm font-bold uppercase hover:text-brand-red"><Mail className="size-4" /> Ask about an event</a>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className={`flex flex-col justify-between p-7 sm:p-9 ${event.tone === "gold" ? "bg-brand-gold text-ink" : event.tone === "green" ? "bg-brand-green text-secondary-foreground" : "bg-brand-red text-primary-foreground"}`}>
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase opacity-80"><Calendar className="size-4" />{event.date}</div>
                  <h3 className="font-display mt-5 text-2xl uppercase leading-tight">{event.title}</h3>
                  <p className="mt-4 leading-relaxed opacity-85">{event.description}</p>
                </div>
                <div className="mt-8 space-y-2 text-sm opacity-80">
                  <p className="flex items-center gap-2"><span className="font-semibold">Time:</span> {event.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="size-4" /> {event.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden"><img src={students} alt="A Kilombo student participating in a school gathering" className="absolute inset-0 size-full object-cover object-center" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /></div>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <p className="text-sm font-bold uppercase text-brand-gold">Get involved</p>
          <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">There is a place for you here.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">Whether you have an hour, a skill, or a network to share, your contribution strengthens the village.</p>
          <div className="mt-10 grid gap-px bg-paper/20">
            {involvements.map((item) => (
              <article key={item.title} className="bg-ink p-6">
                {item.visual === "heart" ? <Heart className="mb-5 size-8 text-brand-gold" aria-hidden="true" /> : <img src={item.visual === "knowledge" ? knowledge : love} alt="" className="mb-5 size-16" />}
                <h3 className="font-display text-xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-green px-5 py-20 text-secondary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-brand-gold">Family resources</p>
              <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Information for current & prospective families.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-secondary-foreground/80">From enrollment deadlines to volunteer opportunities, we keep families informed and connected to the life of the school.</p>
          </div>
          <div className="mt-12 grid gap-px bg-paper/25 md:grid-cols-2">
            <a href={enrollUrl} target="_blank" rel="noreferrer" className="group bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
              <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Enrollment & tuition</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75 group-hover:text-paper/70">Start your application, learn about tuition, and schedule a campus visit.</p>
            </a>
            <a href="mailto:admin@kilomboinstitute.com?subject=Volunteer%20inquiry" className="group bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
              <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Volunteer with us</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75 group-hover:text-paper/70">Share your time and talents. We welcome tutors, mentors, event helpers, and more.</p>
            </a>
            <a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="group bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
              <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Follow us on Facebook</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75 group-hover:text-paper/70">See photos, announcements, and everyday moments from the Kilombo community.</p>
            </a>
            <a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="group bg-brand-green p-7 transition-colors hover:bg-ink sm:p-9">
              <h3 className="font-display text-2xl uppercase group-hover:text-brand-gold">Follow us on Instagram</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-secondary-foreground/75 group-hover:text-paper/70">Get a behind-the-scenes look at student life, events, and celebrations.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-brand-red">Stay connected</p>
            <h2 className="font-display mt-5 text-4xl uppercase leading-tight sm:text-6xl">Join the village.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Get event announcements, enrollment updates, and stories from Kilombo delivered to your inbox.</p>
          </div>
          <form action="mailto:admin@kilomboinstitute.com?subject=Newsletter%20signup" method="post" encType="text/plain" className="flex flex-col gap-4 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" required placeholder="Your email address" className="min-h-12 flex-1 border border-ink/20 bg-paper px-5 text-sm outline-none focus:border-brand-gold" />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-6 text-sm font-bold uppercase text-paper transition-colors hover:bg-brand-gold hover:text-ink">Subscribe<ArrowRight aria-hidden="true" className="size-4" /></button>
          </form>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">For families</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Ready to join us?</h2><p className="mt-5 max-w-xl leading-relaxed">Begin the enrollment process and become part of a school community that puts your child first.</p><div className="mt-8"><ActionLink href={enrollUrl} tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Support our village.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your donation helps fund scholarships, cultural programming, and the everyday work of educating free children.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
