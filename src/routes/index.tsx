import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Home } from "@/views/Home";
import { pageHead } from "@/site/head";

export const Route = createFileRoute("/")({
  head: () => pageHead("home", "fr"),
  component: () => (
    <Layout lang="fr" page="home">
      <Home lang="fr" />
    </Layout>
  ),
});
