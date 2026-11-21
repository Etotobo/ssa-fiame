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
import { ERROR_TEXT, errorLang } from "../lib/error-page";
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
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  // French, English under /en (founder 21/11); same texts as the server page
  const t = ERROR_TEXT[errorLang(pathname)];
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-soft px-4">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center">
        <h1 className="text-xl font-extrabold text-brand-deep">{t.title}</h1>
        <p className="mt-2 text-muted">{t.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 py-2 font-semibold text-white hover:bg-brand-deep"
          >
            {t.retry}
          </button>
          <a
            href={t.homeHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand bg-white px-5 py-2 font-semibold text-brand hover:bg-brand-soft"
          >
            {t.home}
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
