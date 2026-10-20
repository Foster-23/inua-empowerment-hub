import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News — Inua Youth Initiative" }, { name: "description", content: "News and announcements from Inua Youth Initiative in Kenya." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="News" title="Updates from the Initiative." description="News and announcements from Inua Youth Initiative in Kenya." /><ContentPending icon={Newspaper} title="No updates published yet" description="Confirmed announcements and activity updates will appear here." /></>;
}
