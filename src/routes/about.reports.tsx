import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/about/reports")({
  head: () => ({ meta: [{ title: "Annual Reports — Inua Youth Initiative" }, { name: "description", content: "Reports and organizational information from Inua Youth Initiative." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Annual Reports" title="Accountability matters." description="Reports and organizational information from Inua Youth Initiative." /><ContentPending icon={FileText} title="No reports available for download" description="Approved reports and financial documents will appear here when available." /></>;
}
