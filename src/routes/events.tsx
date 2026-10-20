import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events — Inua Youth Initiative" }, { name: "description", content: "Youth forums, learning and community participation." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Events" title="Coming together in Kenya." description="Youth forums, learning and community participation." /><ContentPending icon={Calendar} title="No confirmed events listed" description="Dates, venues and registration details will be added once confirmed." /></>;
}
