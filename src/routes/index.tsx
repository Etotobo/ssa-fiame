import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ssa-fiame — Site en préparation" },
      { name: "description", content: "Le site ssa-fiame est en préparation." },
      { property: "og:title", content: "ssa-fiame — Site en préparation" },
      { property: "og:description", content: "Le site ssa-fiame est en préparation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-2xl text-foreground">Site en préparation</p>
    </div>
  );
}
