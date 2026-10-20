import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/impact")({
  head: () => ({ meta: [{ title: "Impact Stories — Inua Youth Initiative" }, { name: "description", content: "Youth leadership, learning and community participation in Kenya." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Impact Stories" title="Young voices. Positive change." description="Youth leadership, learning and community participation in Kenya." /><ContentPending icon={Users} title="Stories are not yet available" description="We will share participant stories with their permission and publish results only when verified." /></>;
}
