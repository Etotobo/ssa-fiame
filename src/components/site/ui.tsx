import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { COMMON } from "@/site/content";
import type { Lang } from "@/site/ssa";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

type Look = "primary" | "outline" | "yellow" | "light";
const LOOK: Record<Look, string> = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  outline: "border-2 border-brand text-brand bg-white hover:bg-brand-soft",
  yellow: "bg-yellow text-brand-deep hover:brightness-95",
  light: "border-2 border-white/80 text-white hover:bg-white/10",
};
const BTN =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-semibold leading-tight transition-colors";

/** A link that looks like a button: an internal path (to) or an outside URL (href). */
export function ButtonLink({
  to,
  href,
  look = "primary",
  children,
  className,
}: {
  to?: string;
  href?: string;
  look?: Look;
  children: ReactNode;
  className?: string;
}) {
  const cls = cx(BTN, LOOK[look], className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Button({
  look = "primary",
  children,
  className,
  ...rest
}: {
  look?: Look;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={cx(BTN, LOOK[look], "disabled:opacity-50", className)}>
      {children}
    </button>
  );
}

/** A page section; heading and intro centred (house rule for new content). */
export function Section({
  id,
  title,
  intro,
  tone = "white",
  children,
  className,
}: {
  id?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "white" | "soft" | "deep";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "px-4 py-12 sm:py-16",
        tone === "soft" && "bg-brand-soft",
        tone === "deep" && "bg-brand-deep text-white",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <h2
            className={cx(
              "text-center text-2xl font-extrabold tracking-tight sm:text-3xl",
              tone === "deep" ? "text-white" : "text-brand-deep",
            )}
          >
            {title}
          </h2>
        )}
        {intro && (
          <p
            className={cx(
              "mx-auto mt-3 max-w-2xl text-center text-lg",
              tone === "deep" ? "text-white/85" : "text-muted",
            )}
          >
            {intro}
          </p>
        )}
        {children && <div className={cx(title || intro ? "mt-8" : "")}>{children}</div>}
      </div>
    </section>
  );
}

/** What SSA has not given yet: shown as such, never filled in by us. */
export function ToComplete({ lang, children }: { lang: Lang; children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-orange bg-orange/10 px-2 py-0.5 text-sm font-medium text-[#9a4a0c]">
      {COMMON.toComplete[lang]}
      {children ? <span className="font-normal">· {children}</span> : null}
    </span>
  );
}

/** A numbered list of steps (« Comment réserver ? »…). */
export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mx-auto grid max-w-3xl gap-3">
      {items.map((s, i) => (
        <li key={i} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-line">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {i + 1}
          </span>
          <span className="pt-1">{s}</span>
        </li>
      ))}
    </ol>
  );
}

/** The page title band at the top of every page but the home. */
export function PageHero({ title, intro }: { title: ReactNode; intro?: ReactNode }) {
  return (
    <header className="bg-brand-deep px-4 py-10 text-center text-white sm:py-14">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro && <p className="mx-auto mt-3 max-w-2xl text-lg text-white/85">{intro}</p>}
      </div>
      <div aria-hidden className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow" />
    </header>
  );
}

/** Agenda CM's mark: public/favicon.svg of the agenda-cm repository, copied as is. */
export function AgendaCmMark({ className }: { className?: string }) {
  return (
    <img
      src="/sites/ssa/agenda-cm-logo.svg"
      alt=""
      width={64}
      height={64}
      className={cx("shrink-0", className)}
    />
  );
}

/**
 * Agenda CM's logo as agenda.cm shows it (mark, then « agenda » in near-black
 * and « .cm » in its red #DC2626, bold system font), stacked to fill a
 * square logo box.
 */
export function AgendaCmLogo() {
  return (
    <span className="flex flex-col items-center gap-1.5" role="img" aria-label="Agenda CM">
      <AgendaCmMark className="h-[60px] w-[60px]" />
      <span
        aria-hidden
        className="font-sans text-[22px] font-bold leading-none tracking-tight text-[#171717]"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        agenda<span className="text-[#dc2626]">.cm</span>
      </span>
    </span>
  );
}

export { cx };
