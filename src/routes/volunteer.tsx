import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { sitePhotos } from "@/lib/unsplash-images";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Inua Youth Initiative" },
      { name: "description", content: "Join our volunteer network as a mentor, trainer, event coordinator or ambassador." },
    ],
  }),
  component: Volunteer,
});

function Volunteer() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Give your time. Multiply your impact."
        description="Interested in contributing your time and experience to youth empowerment in Kenya? Let’s talk."
      />

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ways you could contribute</h2>
            <div className="mt-10 space-y-6">
              {[
                { title: "Mentor", desc: "Share your experience and listen to young people’s aspirations." },
                { title: "Trainer", desc: "Share practical knowledge in your area of expertise." },
                { title: "Event Coordinator", desc: "Help with youth activities and local community gatherings." },
                { title: "Ambassador", desc: "Help more people connect with the Initiative." },
              ].map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="size-10 shrink-0 grid place-items-center rounded-full bg-brand-green/10 text-brand-green">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{v.title}</h3>
                    <p className="text-brand-navy/60 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <img src={sitePhotos.volunteerWorkshop} alt="Volunteers collaborating during a community workshop" loading="lazy" className="mt-12 rounded-lg w-full aspect-[4/3] object-cover" />
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-extrabold">Interested in volunteering?</h3>
            <p className="mt-4 text-muted-foreground">Online volunteer applications are not open yet. Contact us to discuss your skills, interests and availability. Roles and commitments will be agreed directly with the Initiative.</p>
            <Button asChild className="mt-6"><Link to="/contact">Discuss volunteering</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
