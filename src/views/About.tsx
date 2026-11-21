import { PageHero, Section } from "@/components/site/ui";
import { ABOUT } from "@/site/content";
import type { Lang } from "@/site/ssa";

export function About({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero title={ABOUT.whoTitle[lang]} intro={ABOUT.who[0]![lang]} />

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg">{ABOUT.who[1]![lang]}</p>
          <img
            src="/sites/ssa/photo-sensibilisation-dechets.webp"
            alt={
              lang === "fr"
                ? "Séance de sensibilisation de SSA sur les déchets ménagers"
                : "SSA awareness session on household waste"
            }
            width={1080}
            height={810}
            loading="lazy"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
            <h2 className="text-xl font-extrabold text-brand-deep">{ABOUT.missionTitle[lang]}</h2>
            <p className="mt-2">{ABOUT.mission[lang]}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
            <h2 className="text-xl font-extrabold text-brand-deep">{ABOUT.visionTitle[lang]}</h2>
            <p className="mt-2">{ABOUT.vision[lang]}</p>
          </div>
        </div>
        <p className="mt-6 text-center text-lg">
          <strong className="text-brand-deep">{ABOUT.valuesTitle[lang]} :</strong>{" "}
          {ABOUT.values[lang]}
        </p>
      </Section>

      <Section title={ABOUT.domainsTitle[lang]}>
        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {ABOUT.domains.map((d) => (
            <li key={d.fr} className="flex gap-3 rounded-xl p-4 ring-1 ring-line">
              <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
              {d[lang]}
            </li>
          ))}
        </ul>
        {/* The 17 SDGs, the FIAME's 7 highlighted. Numbers only: the UN icons
            need their terms of use checked first (plan v3.1). */}
        <p className="mx-auto mt-10 max-w-3xl text-center">{ABOUT.sdg[lang]}</p>
        <ul
          className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2"
          aria-label={lang === "fr" ? "Les 17 ODD" : "The 17 SDGs"}
        >
          {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => {
            const on = ABOUT.sdgFiame.includes(n);
            return (
              <li
                key={n}
                className={
                  on
                    ? "flex h-12 w-[4.75rem] items-center justify-center whitespace-nowrap rounded-lg text-[15px] bg-brand font-bold text-white"
                    : "flex h-12 w-[4.75rem] items-center justify-center whitespace-nowrap rounded-lg text-[15px] bg-line/60 font-semibold text-muted"
                }
              >
                {ABOUT.sdgShort[lang]} {n}
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="soft" title={ABOUT.achievementsTitle[lang]}>
        <ul className="grid gap-4 md:grid-cols-3">
          {ABOUT.achievements.map((a) => (
            <li key={a.title.fr} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
              <h3 className="text-lg font-bold text-brand-deep">{a.title[lang]}</h3>
              <p className="mt-1 text-muted">{a.body[lang]}</p>
            </li>
          ))}
        </ul>
        <img
          src="/sites/ssa/photo-planche-bulletin-011.webp"
          alt={
            lang === "fr"
              ? "Planche de photos des actions de SSA (bulletin n° 011, août 2025)"
              : "Photos of SSA's activities (newsletter No. 011, August 2025)"
          }
          width={620}
          height={877}
          loading="lazy"
          className="mx-auto mt-8 w-full max-w-md rounded-xl shadow-lg"
        />
      </Section>

      <Section title={ABOUT.boardTitle[lang]}>
        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT.board.map((b) => (
            <li key={b.role.fr} className="rounded-xl p-4 text-center ring-1 ring-line">
              <p className="text-sm font-bold uppercase tracking-wide text-brand">{b.role[lang]}</p>
              <p className="mt-1 font-semibold">{b.name[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
