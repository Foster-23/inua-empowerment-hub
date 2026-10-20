import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Inua Youth Initiative" }, { name: "description", content: "Youth participation and local action are central to our work." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Projects" title="Community action in Kenya." description="Youth participation and local action are central to our work." /><ContentPending icon={FolderOpen} title="No project profiles published yet" description="Confirmed project details, locations and progress will appear here when available." /></>;
}
