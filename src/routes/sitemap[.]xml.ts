import { createFileRoute, redirect } from "@tanstack/react-router";

// XML sitemap generation requires a confirmed public domain.
export const Route = createFileRoute("/sitemap.xml")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
});
