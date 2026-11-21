// The page shown when the server fails (founder 21/11: in French, in
// English under /en). Plain HTML, no import of the app: it must render even
// when the app itself is broken.

export type ErrorLang = "fr" | "en";

export const ERROR_TEXT: Record<
  ErrorLang,
  { title: string; body: string; retry: string; home: string; homeHref: string }
> = {
  fr: {
    title: "Cette page n'a pas pu s'afficher",
    body: "Un problème est survenu de notre côté. Réessayez dans un instant ou revenez à l'accueil.",
    retry: "Réessayer",
    home: "Retour à l'accueil",
    homeHref: "/",
  },
  en: {
    title: "This page didn't load",
    body: "Something went wrong on our end. Try again in a moment or go back to the home page.",
    retry: "Try again",
    home: "Back to home",
    homeHref: "/en",
  },
};

/** The language of a request path: English under /en, French elsewhere. */
export function errorLang(pathname: string | null | undefined): ErrorLang {
  return pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "fr";
}

/** The language of a request (its URL's path). */
export function requestLang(request: Request | null | undefined): ErrorLang {
  try {
    return errorLang(request ? new URL(request.url).pathname : null);
  } catch {
    return "fr";
  }
}

export function renderErrorPage(lang: ErrorLang = "fr"): string {
  const t = ERROR_TEXT[lang];
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <title>${t.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <style>
      body { font: 16px/1.5 system-ui, -apple-system, sans-serif; background: #e8f4e6; color: #1c2420; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; background: #fff; border-radius: 1rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.5rem; color: #0b3f18; }
      p { color: #55615a; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { min-height: 44px; padding: 0.6rem 1.2rem; border-radius: 999px; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; border: 2px solid #12801f; }
      .primary { background: #12801f; color: #fff; }
      .secondary { background: #fff; color: #12801f; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${t.title}</h1>
      <p>${t.body}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${t.retry}</button>
        <a class="secondary" href="${t.homeHref}">${t.home}</a>
      </div>
    </div>
  </body>
</html>`;
}
