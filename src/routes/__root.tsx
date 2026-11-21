import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type CSSProperties, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "@/components/site/Layout";
import { ButtonLink } from "@/components/site/ui";
import { COMMON } from "@/site/content";
import { langOf, pagePath } from "@/site/pages";
import { SSA } from "@/site/ssa";

// The site's colours as CSS variables (src/site/ssa.ts).
const themeVars = {
  "--brand": SSA.colors.brand,
  "--brand-deep": SSA.colors.brandDeep,
  "--brand-soft": SSA.colors.brandSoft,
  "--yellow": SSA.colors.yellow,
  "--orange": SSA.colors.orange,
} as CSSProperties;

function NotFoundComponent() {
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const lang = langOf(pathname);
  return (
    <Layout lang={lang} page={null}>
      <div className="px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-brand-deep">{COMMON.notFoundTitle[lang]}</h1>
        <p className="mt-3 text-muted">{COMMON.notFoundBody[lang]}</p>
        <div className="mt-6">
          <ButtonLink to={pagePath("home", lang)}>{COMMON.backHome[lang]}</ButtonLink>
        </div>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Each page sets its own title, description, og:* and hreflang (src/site/head.ts).
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: SSA.colors.brandDeep },
      // Preview: nothing is indexed until the site goes live (founder 21/11).
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/sites/ssa/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  return (
    <html lang={langOf(pathname)} style={themeVars}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
