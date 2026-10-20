import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/publications")({
  head: () => ({ meta: [{ title: "Publications — Inua Youth Initiative" }, { name: "description", content: "Resources on youth leadership, civic awareness and skills in Kenya." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Publications" title="Knowledge worth sharing." description="Resources on youth leadership, civic awareness and skills in Kenya." /><ContentPending icon={BookOpen} title="No publications available yet" description="Resources will be listed here when approved documents are available." /></>;
}
