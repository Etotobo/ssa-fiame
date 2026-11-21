import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Home } from "@/views/Home";
import { pageHead } from "@/site/head";

export const Route = createFileRoute("/en/")({
  head: () => pageHead("home", "en"),
  component: () => (
    <Layout lang="en" page="home">
      <Home lang="en" />
    </Layout>
  ),
});
