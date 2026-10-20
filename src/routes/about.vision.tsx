import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Compass, Eye, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/about/vision")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Values — Inua Youth Initiative" },
      { name: "description", content: "Our vision, mission and the values that guide Inua Youth Initiative's work." },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision, Mission & Values"
        title="What we're building, and why it matters."
        description="Leadership, opportunity and participation for young people in Kenya."
      />

      <section className="py-24">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Our Vision", body: "A Kenya where young people have the confidence, skills and opportunities to shape their future and contribute to their communities." },
            { icon: Target, title: "Our Mission", body: "To support young people in Kenya through leadership, mentorship, skills development, civic awareness and community participation." },
            { icon: Compass, title: "Our Approach", body: "We value learning, connection and youth participation rooted in the Kenyan community context." },
            { icon: Sparkles, title: "Our Values", body: "Inclusion, respect, honesty and the belief that young people have a meaningful contribution to make." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="p-10 rounded-lg bg-brand-surface  transition-all">
              <Icon className="h-8 w-8 text-brand-green mb-6" />
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <p className="mt-4 text-brand-navy/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>


    </>
  );
}
