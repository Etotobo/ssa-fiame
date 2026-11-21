import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { COMMON } from "@/site/content";
import { NAV_LABEL, NAV_ORDER, pagePath, type PageKey } from "@/site/pages";
import { registerLink, SSA, type Lang } from "@/site/ssa";
import { cx } from "./ui";

function Logo({ lang, light = false }: { lang: Lang; light?: boolean }) {
  return (
    <Link to={pagePath("home", lang)} className="flex items-center gap-2.5" aria-label={SSA.name}>
      <span
        className={cx(
          "flex h-12 w-9 shrink-0 items-center justify-center",
          light && "rounded-md bg-white px-0.5",
        )}
      >
        <img
          src="/sites/ssa/ssa-embleme.webp"
          alt=""
          width={200}
          height={375}
          className="h-11 w-auto"
        />
      </span>
      <span
        className={cx(
          "text-[13px] font-extrabold uppercase leading-tight tracking-wide sm:text-sm",
          light ? "text-white" : "text-brand",
        )}
      >
        Sanitation Safety
        <br />
        Association
      </span>
    </Link>
  );
}

export function Layout({
  lang,
  page,
  children,
}: {
  lang: Lang;
  page: PageKey | null;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  const other: Lang = lang === "fr" ? "en" : "fr";
  const switchTo = pagePath(page ?? "home", other);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        {COMMON.skip[lang]}
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Logo lang={lang} />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
            {NAV_ORDER.map((k) => (
              <Link
                key={k}
                to={pagePath(k, lang)}
                className={cx(
                  "rounded-full px-3 py-2 text-[15px] font-semibold transition-colors",
                  page === k ? "bg-brand-soft text-brand-deep" : "text-ink hover:text-brand",
                )}
              >
                {NAV_LABEL[k][lang]}
              </Link>
            ))}
            <Link
              to={switchTo}
              hrefLang={other}
              className="ml-2 rounded-full border border-line px-3 py-2 text-sm font-semibold text-muted hover:text-brand"
            >
              {other.toUpperCase()}
            </Link>
          </nav>
          <div className="flex items-center gap-1 lg:hidden">
            <Link
              to={switchTo}
              hrefLang={other}
              className="flex h-11 items-center rounded-full px-3 text-sm font-semibold text-muted"
            >
              {other.toUpperCase()}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? COMMON.close[lang] : COMMON.menu[lang]}
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-deep hover:bg-brand-soft"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="menu-mobile"
            className="border-t border-line bg-white px-4 pb-4 lg:hidden"
            aria-label="Navigation"
          >
            <ul className="mx-auto max-w-6xl">
              {NAV_ORDER.map((k) => (
                <li key={k}>
                  <Link
                    to={pagePath(k, lang)}
                    className={cx(
                      "flex min-h-12 items-center border-b border-line text-lg font-semibold",
                      page === k ? "text-brand" : "text-ink",
                    )}
                  >
                    {NAV_LABEL[k][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="contenu" className="flex-1">
        {children}
      </main>

      <footer className="bg-brand-deep px-4 pb-8 pt-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <Logo lang={lang} light />
            <p className="mt-4 text-white/80">{COMMON.footerTagline[lang]}</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
            {NAV_ORDER.map((k) => (
              <li key={k}>
                <Link to={pagePath(k, lang)} className="text-white/85 hover:text-yellow">
                  {NAV_LABEL[k][lang]}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-white/90">
            <li>
              <a
                className="flex items-center gap-2 hover:text-yellow"
                href={`https://wa.me/${SSA.whatsapp.wa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 shrink-0" /> {SSA.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-yellow"
                href={`tel:${SSA.phone.tel}`}
              >
                <Phone className="h-5 w-5 shrink-0" /> {SSA.phone.display}
              </a>
            </li>
            {SSA.emails.map((e) => (
              <li key={e}>
                <a
                  className="flex items-center gap-2 break-all hover:text-yellow"
                  href={`mailto:${e}`}
                >
                  <Mail className="h-5 w-5 shrink-0" /> {e}
                </a>
              </li>
            ))}
            <li>
              <a
                className="flex items-center gap-2 hover:text-yellow"
                href={SSA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 shrink-0" /> {SSA.instagram.handle}
              </a>
            </li>
            <li className="flex gap-4">
              <a
                className="flex items-center gap-2 hover:text-yellow"
                href={SSA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 shrink-0" /> Facebook
              </a>
              <a
                className="flex items-center gap-2 hover:text-yellow"
                href={SSA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 shrink-0" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-center text-sm text-white/65">
          © 2026 {SSA.name}. {COMMON.footerRights[lang]}
        </p>
        {/* discreet (founder 21/11) */}
        <p className="mx-auto mt-2 max-w-6xl text-center text-xs text-white/55">
          <a
            href={registerLink("pied")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow"
          >
            {COMMON.footerRegistration[lang]}
          </a>
        </p>
      </footer>
    </div>
  );
}
