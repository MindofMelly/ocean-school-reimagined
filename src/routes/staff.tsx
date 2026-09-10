import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import logo from "@/assets/kilombo-logo.png";
import community from "@/assets/kilombo-community.jpg";

const enrollUrl = "https://app.tuiopay.com/registration/c82f988";
const donateUrl = "https://www.zeffy.com/en-US/fundraising/406b65c3-fdc9-4287-aaf3-a430bcd9ed28";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Faculty & Staff | Kilombo School" },
      { name: "description", content: "Meet the educators, administrators, and cultural instructors who make up the Kilombo village." },
      { property: "og:title", content: "Faculty & Staff | Kilombo School" },
      { property: "og:description", content: "Meet the team behind Kilombo's African-centered education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StaffPage,
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
          <Link to="/staff" className="text-sm font-semibold text-brand-gold">Staff</Link>
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
            <Link to="/staff" className="p-3 font-semibold text-brand-red">Staff</Link>
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

const staff = [
  { name: "Aminata Umoja", role: "Founder", bio: "Founder of Kilombo Academic and Cultural Institute and an educational consultant with Research for Better Teaching. With over 35 years in education, she specializes in equity, culturally relevant pedagogy, differentiated instruction, and transforming schools into professional learning communities. Aminata co-founded the New Afrikan People's Organization, the Malcolm X Grassroots Movement, and the Malcolm X Festival in Atlanta." },
  { name: "Tashiya Umoja M'kanga", role: "Director", bio: "Director and middle school math instructor, and a 3rd generation teacher with 16 years of experience. A wife, mother, singer, actress, and activist, Tashiya is committed to differentiation, hands-on math, and inquiry- and project-based science and social studies taught through a culturally relevant lens. Bachelor's in African American Studies, Master's in Elementary Education." },
  { name: "Ndola Owuo-Hagood", role: "Mate Masie: K-2", bio: "Over 20 years in education, having taught from PreK through university, including formative years spent in Senegal, West Africa. Founded M'Balia Leadership Academy in 2013, serving as administrator and educator for seven years. Degrees in Religious Studies, Philosophy, Anthropology, and Women's Studies." },
  { name: "Bro. Sèkoú Djali", role: "K-2 Teaching Assistant", bio: "An undergraduate of Howard University and current Master's student in Africana Studies at Georgia State University. A member and affiliate of The Kwame Ture Society, All African People's Revolutionary Party, Pan African Community Action, and Black Alliance for Peace." },
  { name: "Kameela Mosley", role: "Sankofa: 3-5", bio: "A Georgia-certified educator with over 11 years of experience teaching in U.S. public schools, Middle Eastern international schools, and homeschooling her own son. Graduate of Florida A&M University and Clark Atlanta University, passionate about integrating education with African cultural perspectives." },
  { name: "RaVonya Knight", role: "Mframadan: RLA/Science/Social Studies", bio: "Over 20 years of experience educating, mentoring, and coaching a diverse population of youth, teachers, administrators, and parents. Bachelor's in English and Secondary Education, Master's in Educational Leadership." },
  { name: "Syng Summers", role: "Teaching Assistant", bio: "Focused on creating an inclusive and engaging learning environment, assisting with grading, facilitating discussions, and providing personalized support to help students succeed." },
  { name: "Omelika Kuumba", role: "African Dance", bio: "Known as Sister Omelika, a Spelman alumna and African dance educator with 25 years at Spelman College. Specializes in African Dance Forms, created the West African Rhythms course, and co-founded the award-winning ensemble GIWAYEN MATA. Career highlights include the 1996 Olympics." },
  { name: "Aiyetoro Fraizer", role: "Drum Teacher", bio: "Brings the rhythms of traditional West African drumming to life, with a deep understanding of the cultural significance and history behind each beat, creating an engaging and interactive learning environment for students of all ages and skill levels." },
  { name: "Amen Kai", role: "Office Assistant", bio: "Dedicated School Office Assistant committed to supporting students, staff, and families, ensuring the smooth operation of daily school activities and creating a welcoming environment for all." },
  { name: "Lindiwe Famodou", role: "Mindfulness & Swimming", bio: "A skilled swimming instructor and mindfulness coach who empowers students to build confidence, resilience, and focus both in and out of the water, with a patient and encouraging teaching style." },
  { name: "Kwadwo Danso", role: "Capoeira", bio: "Brings the vibrant energy and cultural richness of this Afro-Brazilian martial art to life, combining martial arts technique, acrobatics, rhythm, and storytelling in a dynamic, inclusive learning environment." },
];

function initials(name: string) {
  return name.replace(/Bro\.\s*/, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
}

function StaffPage() {
  return (
    <main className="bg-paper">
      <SiteHeader />

      <section className="relative min-h-[56svh] overflow-hidden bg-ink pt-20 text-paper">
        <img src={community} alt="Kilombo educators and students together" className="absolute inset-0 size-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
        <div className="relative mx-auto flex min-h-[calc(56svh-5rem)] max-w-[1500px] flex-col justify-end px-5 pb-12 lg:px-10 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Faculty & staff</p>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">The village<br /><span className="text-brand-gold">that teaches.</span></h1>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((person) => (
              <article key={person.name} className="border border-ink/10 p-7">
                <div className="flex size-16 items-center justify-center bg-brand-gold font-display text-xl uppercase text-ink">{initials(person.name)}</div>
                <h3 className="font-display mt-5 text-xl uppercase leading-tight">{person.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase text-brand-red">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground/80">Staff photos to come — replace the initials above with headshots when available.</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-brand-gold px-6 py-20 text-ink sm:px-12 lg:p-20"><p className="text-sm font-bold uppercase">Join our school</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Meet the team in person.</h2><p className="mt-5 max-w-xl leading-relaxed">Begin enrollment and get to know the educators who will guide your child's journey.</p><div className="mt-8"><ActionLink href="/enroll" tone="green">Enroll at Kilombo</ActionLink></div></article>
        <article className="bg-brand-red px-6 py-20 text-primary-foreground sm:px-12 lg:p-20"><Heart aria-hidden="true" className="size-9" /><p className="mt-6 text-sm font-bold uppercase">Sustain the vision</p><h2 className="font-display mt-5 text-4xl uppercase sm:text-5xl">Support our educators.</h2><p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/80">Your gift supports professional growth for the teachers shaping our students.</p><div className="mt-8"><ActionLink href={donateUrl} tone="light">Donate now</ActionLink></div></article>
      </section>

      <footer className="bg-ink px-5 py-12 text-paper lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-b border-paper/20 pb-10 md:grid-cols-3 md:items-end"><Link to="/" aria-label="Kilombo School home"><img src={logo} alt="Kilombo Academic and Cultural Institute" className="h-20 w-auto" /></Link><address className="not-italic text-sm leading-7 text-paper/65">6133 Redan Road<br />Lithonia, GA 30058<br /><a href="tel:+14049928021" className="hover:text-brand-gold">404.992.8021</a></address><div className="md:text-right"><a href="mailto:admin@kilomboinstitute.com" className="text-sm font-semibold hover:text-brand-gold">admin@kilomboinstitute.com</a><div className="mt-3 flex gap-5 md:justify-end"><a href="https://www.facebook.com/kilomboinstitute/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Facebook</a><a href="https://www.instagram.com/kilomboschool/" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-gold">Instagram</a></div></div></div>
        <div className="mx-auto mt-6 flex max-w-[1400px] flex-wrap justify-between gap-3 text-xs text-paper/45"><p>© {new Date().getFullYear()} Kilombo Academic & Cultural Institute</p><p>Educate to liberate.</p></div>
      </footer>
    </main>
  );
}
