import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContentPending } from "@/components/site/ContentPending";

export const Route = createFileRoute("/opportunities")({
  head: () => ({ meta: [{ title: "Youth Opportunities — Inua Youth Initiative" }, { name: "description", content: "Learning, mentorship and pathways to participation." }] }),
  component: Page,
});

function Page() {
  return <><PageHero eyebrow="Youth Opportunities" title="Opportunities for young Kenyans." description="Learning, mentorship and pathways to participation." /><ContentPending icon={GraduationCap} title="No open opportunities currently listed" description="Verified opportunities will include eligibility, deadlines and a working application link." /></>;
}
