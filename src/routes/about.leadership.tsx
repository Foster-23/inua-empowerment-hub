import { createFileRoute, Link } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Our Team — Inua Youth Initiative" },
      { name: "description", content: "The people behind Inua Youth Initiative in Kenya." },
    ],
  }),
  component: Leadership,
});

// Placeholder slots only. No names, roles or photos are shown until each
// person has confirmed their details — see mem://identity.md.
const executiveSlots = [1, 2, 3, 4];

function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Led by young people, for young people."
        description="The executive team of Inua Youth Initiative. Profiles are published here as soon as each person confirms their details."
      />

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-green">
              Executive Team
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
              Meet the team behind the Initiative.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are preparing these profiles for publication. Each slot below is reserved for one
              member of the executive team — with their name, role and photo — and will be filled in
              once confirmed by the person themselves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveSlots.map((slot) => (
              <div
                key={slot}
                className="rounded-lg border border-brand-navy/5 bg-brand-surface overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/5] flex items-center justify-center bg-brand-navy/5">
                  <UserRound className="size-14 text-brand-navy/25" aria-hidden="true" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-brand-navy/40">Name to be confirmed</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-navy/30">
                    Role to be confirmed
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    This space is reserved for an executive profile.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            The number of slots shown is a placeholder structure, not a statement about the size of
            the team. We only publish names and roles once they are confirmed by the people
            themselves.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="max-w-2xl border-t border-border pt-8">
            <h2 className="text-2xl md:text-3xl">Interested in joining the team?</h2>
            <p className="mt-4 text-muted-foreground">
              Want to know more about who runs the Initiative, or interested in joining the team?
            </p>
            <Button asChild variant="link" className="mt-6 px-0">
              <Link to="/contact">Contact the Initiative</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
