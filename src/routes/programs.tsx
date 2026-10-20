import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { sitePhotos } from "@/lib/unsplash-images";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Inua Youth Initiative" },
      { name: "description", content: "Youth leadership, mentorship, civic awareness, skills and community participation in Kenya." },
    ],
  }),
  component: Programs,
});

const items = [
  { tag: "Leadership", title: "Youth leadership", desc: "Confidence, communication and participation that help young Kenyans take the lead.", image: sitePhotos.programsLeadership },
  { tag: "Mentorship", title: "Guidance and connection", desc: "Supporting young people through shared experience, encouragement and mentorship.", image: sitePhotos.programsEducation },
  { tag: "Civic Awareness", title: "Informed participation", desc: "Understanding rights, responsibilities and the role young people can play in their communities.", image: sitePhotos.impactCivic },
  { tag: "Skills", title: "Learning for opportunity", desc: "Developing practical skills for personal growth and readiness for work.", image: sitePhotos.programsTechnology },
  { tag: "Community", title: "Local participation", desc: "Encouraging young people to contribute to positive change in their communities.", image: sitePhotos.programsClimate },
  { tag: "Opportunity", title: "Paths to move forward", desc: "Connecting youth empowerment with learning, participation and new possibilities.", image: sitePhotos.impactEntrepreneurship },
];

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Youth empowerment in Kenya."
        description="Our focus areas bring together leadership, mentorship, civic awareness, practical skills and community participation."
      />

      <section className="py-24">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden rounded-lg mb-6 aspect-[4/3] bg-brand-surface">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[2px] bg-brand-yellow" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-navy/40">{p.tag}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-brand-green transition-colors">{p.title}</h3>
                <p className="mt-3 text-brand-navy/60 text-sm leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
