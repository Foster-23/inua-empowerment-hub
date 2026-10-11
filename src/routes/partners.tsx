import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Inua Youth Initiative" },
      { name: "description", content: "Work with Inua Youth Initiative to support young people in Kenya through leadership, mentorship and skills." },
    ],
  }),
  component: Partners,
});

const ways = [
  { title: "Schools & colleges", body: "Host mentorship sessions, leadership talks or civic awareness forums with your students." },
  { title: "Community groups", body: "Co-organise clean-ups, tree planting and local youth activities." },
  { title: "Organisations & businesses", body: "Offer trainings, mentors, internships or support for youth activities." },
  { title: "Individuals", body: "Share your skills as a mentor or volunteer, or support our work." },
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's lift young people, together."
        description="We welcome partners who share our commitment to young Kenyans. Partnerships are listed here only once they are confirmed."
      />
      <section className="py-24">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {ways.map((w) => (
            <div key={w.title} className="p-8 rounded-3xl bg-brand-surface border border-brand-navy/5">
              <h2 className="text-xl font-extrabold">{w.title}</h2>
              <p className="mt-3 text-brand-navy/65">{w.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-brand-navy text-white">
        <div className="container-page flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Interested in partnering?</h2>
          <Link to="/contact" className="px-8 py-4 rounded-full bg-brand-yellow text-brand-navy font-bold uppercase tracking-wider text-sm self-start">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
