import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Handshake, Megaphone, GraduationCap, Sprout, Lightbulb } from "lucide-react";
import { sitePhotos } from "@/lib/unsplash-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inua Youth Initiative — Youth Leadership & Empowerment in Kenya" },
      {
        name: "description",
        content:
          "Inua Youth Initiative is a Kenyan youth organisation building leadership, mentorship, civic awareness, skills and community participation among young people.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Users, title: "Youth Leadership", desc: "Helping young Kenyans grow the confidence and skills to lead in their schools, wards and communities.", image: sitePhotos.programsLeadership },
  { icon: GraduationCap, title: "Mentorship", desc: "Connecting young people with mentors who listen, guide and open doors.", image: sitePhotos.programsEducation },
  { icon: Megaphone, title: "Civic Awareness", desc: "Encouraging young people to understand their rights, responsibilities and voice in public life.", image: sitePhotos.impactCivic },
  { icon: Lightbulb, title: "Skills Development", desc: "Practical learning — digital, life and work-readiness skills — for real opportunities.", image: sitePhotos.programsTechnology },
  { icon: Sprout, title: "Community Participation", desc: "Young people taking part in clean-ups, tree planting and local action that changes neighbourhoods.", image: sitePhotos.programsClimate },
  { icon: Handshake, title: "Opportunities", desc: "Sharing trainings, programmes and openings that help young people move forward.", image: sitePhotos.impactEntrepreneurship },
];

function Home() {
  return (
    <>
      <section className="relative h-[88vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sitePhotos.hero} alt="Young Kenyans in a group discussion during a youth leadership workshop" className="w-full h-full object-cover animate-slow-zoom" width={1600} height={1008} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/65 to-brand-navy/20" />
        </div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl animate-reveal">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full mb-6">
              Inua Youth Initiative · Kenya
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.03] tracking-tight text-balance">
              Lifting young Kenyans to <span className="text-brand-yellow">lead.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Inua means "lift up." We support young people with leadership, mentorship,
              civic awareness and skills — so they can shape their own futures and their communities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/join" className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-brand-yellow transition-all">Join the Initiative</Link>
              <Link to="/programs" className="px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-full hover:bg-white/20 transition-all">What We Do</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-page grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-green">Who we are</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance">
              A Kenyan youth initiative built on participation and positive change.
            </h2>
            <p className="mt-8 text-lg text-brand-navy/80 leading-relaxed">
              We believe young people are not only the leaders of tomorrow — they are
              contributors today. Inua Youth Initiative creates spaces where young Kenyans learn,
              connect with mentors, take part in community action and discover opportunities.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-brand-green border-b-2 border-brand-green/20 hover:border-brand-green pb-1">
              About the Initiative <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={sitePhotos.homeMission} alt="A young mentor speaking with secondary school students" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-green">Our focus</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">What we work on</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl overflow-hidden border border-brand-navy/5">
                <img src={p.image} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover" />
                <div className="p-8">
                  <p.icon className="h-6 w-6 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm text-brand-navy/65 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-navy text-white">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              There is a place for <span className="text-brand-yellow">you.</span>
            </h2>
            <p className="mt-8 text-xl text-white/70 max-w-lg">
              Whether you are a young person ready to grow, a mentor, a volunteer or an
              organisation that shares our values — let's work together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/volunteer" className="px-8 py-4 bg-brand-yellow text-brand-navy font-bold rounded-full">Volunteer</Link>
              <Link to="/partners" className="px-8 py-4 border border-white/25 font-bold rounded-full hover:bg-white/10">Partner with us</Link>
              <Link to="/contact" className="px-8 py-4 border border-white/25 font-bold rounded-full hover:bg-white/10">Contact us</Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={sitePhotos.aboutStory} alt="Young volunteers planting trees during a community clean-up" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
