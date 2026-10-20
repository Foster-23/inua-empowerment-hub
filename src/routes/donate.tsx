import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/donate")({
  head: () => ({ meta: [{ title: "Support Our Work — Inua Youth Initiative" }, { name: "description", content: "Support youth leadership, mentorship and community participation in Kenya." }] }),
  component: Donate,
});

function Donate() {
  return <>
    <PageHero eyebrow="Support Our Work" title="Support young people in Kenya." description="Help create space for leadership, mentorship, skills and community participation." />
    <section className="py-16 md:py-20">
      <div className="container-page max-w-3xl">
        <Heart className="size-8 text-brand-green mb-6" aria-hidden="true" />
        <h2 className="text-3xl">Every contribution starts with trust.</h2>
        <p className="mt-5 text-muted-foreground">Online donations are not available yet. No payment is collected on this website. Contact the Initiative to discuss support and confirm any payment instructions directly.</p>
        <Button asChild size="lg" className="mt-8"><Link to="/contact">Discuss supporting our work <ArrowRight /></Link></Button>
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl">More ways to contribute</h3>
          <p className="mt-4 text-muted-foreground">Share your time, experience or skills, or explore working together as an organization.</p>
          <div className="flex flex-wrap gap-4 mt-5"><Button asChild variant="outline"><Link to="/volunteer">Volunteer</Link></Button><Button asChild variant="outline"><Link to="/partners">Partner with us</Link></Button></div>
        </div>
      </div>
    </section>
  </>;
}
