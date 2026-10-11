import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Our Team — Inua Youth Initiative" },
      { name: "description", content: "The people behind Inua Youth Initiative in Kenya." },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Led by young people, for young people."
        description="Our team profiles will be published here soon. We only share names and roles once they are confirmed by the people themselves."
      />
      <section className="py-24">
        <div className="container-page max-w-2xl">
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            Want to know more about who runs the Initiative, or interested in joining the team?
          </p>
          <Link to="/contact" className="mt-8 inline-block px-8 py-4 rounded-full bg-brand-green text-white font-bold">Contact us</Link>
        </div>
      </section>
    </>
  );
}
