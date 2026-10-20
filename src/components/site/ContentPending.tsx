import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContentPending({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="max-w-2xl border-t border-border pt-8">
          <Icon className="size-7 text-brand-green mb-5" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
          <Button asChild variant="link" className="mt-6 px-0">
            <Link to="/contact">Contact the Initiative <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}