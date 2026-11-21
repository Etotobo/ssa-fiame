import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PAGE_COMPONENT } from "@/views/registry";
import { pageHead } from "@/site/head";
import { pageAt } from "@/site/pages";

export const Route = createFileRoute("/$page")({
  beforeLoad: ({ params }) => {
    const key = pageAt(params.page, "fr");
    if (!key || key === "home") throw notFound();
    return { key };
  },
  head: ({ match }) => pageHead((match.context as { key: "about" }).key, "fr"),
  component: Page,
});

function Page() {
  const { key } = Route.useRouteContext();
  const C = PAGE_COMPONENT[key];
  return (
    <Layout lang="fr" page={key}>
      <C lang="fr" />
    </Layout>
  );
}
