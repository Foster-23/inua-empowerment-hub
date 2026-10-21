import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { sitePhotos } from "@/lib/unsplash-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Inua Youth Initiative" },
      { name: "description", content: "Who we are and what makes Inua Youth Initiative different." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Youth first", desc: "We center the voices, ideas and leadership of young Kenyans in everything we do." },
  { title: "Radical transparency", desc: "We value honesty and clear communication about our work." },
  { title: "Local ownership", desc: "We value the ideas and participation of the communities we work with." },
  { title: "Long-term impact", desc: "We aim for meaningful learning and positive community change." },
];

function About() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/about" && pathname !== "/about/") return <Outlet />;
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Inua Youth Initiative."
        description="A Kenyan youth organization focused on leadership, empowerment, mentorship, civic awareness, skills development and community participation."
      />

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img src={sitePhotos.aboutStory} alt="Community members learning and gathering together" loading="lazy" className="rounded-lg w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Who we are</h2>
            <p className="mt-6 text-lg text-brand-navy/60 leading-relaxed">
              Inua Youth Initiative works with and for young people in Kenya. Our focus is helping young people learn, connect, participate and contribute to positive change in their communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-green">What guides us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Our core values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-10 rounded-lg border border-brand-navy/5 bg-background hover:border-brand-green/30 transition-colors">
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="mt-4 text-brand-navy/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link to="/about/leadership" className="px-6 py-3 rounded-full bg-brand-green text-white font-bold text-sm uppercase tracking-wider hover:brightness-110">Meet our leadership</Link>
            <Link to="/about/reports" className="px-6 py-3 rounded-full border border-brand-navy/10 font-bold text-sm uppercase tracking-wider hover:bg-brand-navy/5">Read our annual reports</Link>
            <Link to="/about/vision" className="px-6 py-3 rounded-full border border-brand-navy/10 font-bold text-sm uppercase tracking-wider hover:bg-brand-navy/5">Our vision & values</Link>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}
