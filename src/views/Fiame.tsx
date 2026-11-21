import { CalendarDays, MapPin, Play, Ticket } from "lucide-react";
import { AgendaCmMark, ButtonLink, PageHero, Section, ToComplete } from "@/components/site/ui";
import { COMMON, EXHIBIT, FIAME, REMINDER } from "@/site/content";
import { pagePath } from "@/site/pages";
import { registerLink, SSA, type Lang } from "@/site/ssa";
import { typo } from "@/site/typo";

function Actions({ lang, onDark = false }: { lang: Lang; onDark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
      <ButtonLink to={pagePath("stands", lang)} look={onDark ? "yellow" : "primary"}>
        {COMMON.bookStand[lang]}
      </ButtonLink>
      <ButtonLink href={registerLink("fiame")} look={onDark ? "light" : "outline"}>
        <AgendaCmMark className="h-5 w-5" /> {COMMON.registerVisitor[lang]}
      </ButtonLink>
      <ButtonLink to={pagePath("partners", lang)} look={onDark ? "light" : "outline"}>
        {COMMON.becomePartner[lang]}
      </ButtonLink>
    </div>
  );
}

export function Fiame({ lang }: { lang: Lang }) {
  const facts = [
    { icon: CalendarDays, label: FIAME.datesLabel[lang], value: FIAME.dates[lang] },
    { icon: MapPin, label: FIAME.venueLabel[lang], value: FIAME.venue[lang] },
    { icon: Ticket, label: lang === "fr" ? "Entrée" : "Admission", value: FIAME.free[lang] },
  ];
  return (
    <>
      <PageHero
        title={FIAME.title[lang]}
        subtitle={FIAME.subtitle[lang]}
        intro={FIAME.theme[lang]}
      />

      {/* Key facts and the poster */}
      <Section>
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <ul className="grid gap-4">
              {facts.map((f) => (
                <li key={f.label} className="flex gap-4 rounded-2xl bg-brand-soft p-5">
                  <f.icon className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand">
                      {f.label}
                    </p>
                    <p className="mt-0.5 text-lg font-semibold text-brand-deep">{f.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* « Ouvrir dans Maps » (founder 21/11): hidden until SSA sends its
                location; set SSA.mapsUrl (src/site/ssa.ts) to show it again. */}
            {SSA.mapsUrl && (
              <p className="mt-4 flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-brand" aria-hidden />
                <a
                  href={SSA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline"
                >
                  {FIAME.openInMaps[lang]}
                </a>
              </p>
            )}

            <h2 className="mt-10 text-2xl font-extrabold text-brand-deep">
              {FIAME.whyTitle[lang]}
            </h2>
            <p className="mt-3 text-lg">{FIAME.why[lang]}</p>
            <p className="mt-4 rounded-xl border-l-4 border-yellow bg-white p-4 text-lg shadow-sm ring-1 ring-line">
              <strong className="text-brand-deep">{FIAME.goalLabel[lang]} :</strong>{" "}
              {FIAME.goal[lang]}
            </p>
          </div>
          <img
            src="/sites/ssa/fiame-affiche.webp"
            alt={lang === "fr" ? "Affiche de la FIAME 2027" : "FIAME 2027 poster"}
            width={852}
            height={1280}
            className="mx-auto w-full max-w-sm rounded-xl shadow-xl"
          />
        </div>
      </Section>

      {/* What's on */}
      <Section tone="soft" title={FIAME.programmeTitle[lang]}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIAME.programme.map((p) => (
            <li key={p.title.fr} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line">
              <h3 className="text-lg font-bold text-brand-deep">{p.title[lang]}</h3>
              <p className="mt-1 text-muted">{p.body[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Day by day: days 2–5 not given by SSA yet */}
      <Section title={FIAME.daysTitle[lang]}>
        <ol className="mx-auto grid max-w-3xl gap-3">
          {FIAME.days.map((d) => (
            <li key={d.day.fr} className="rounded-2xl p-5 ring-1 ring-line">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-brand">{d.day[lang]}</h3>
                {!d.done && <ToComplete lang={lang} />}
              </div>
              <p className="mt-1">{d.body[lang]}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* SSA's videos: a still and a link to YouTube, no player (weight) */}
      {/* « Recevez un rappel avant la foire » (founder 21/11): the FIAME
          page on Agenda CM */}
      <Section title={REMINDER.title[lang]} intro={REMINDER.body[lang]}>
        <div className="flex flex-col items-center gap-3">
          <ButtonLink href={registerLink("rappel")}>
            <AgendaCmMark className="h-5 w-5 rounded-[5px] ring-1 ring-white/70" />{" "}
            {REMINDER.button[lang]}
          </ButtonLink>
          <p className="text-sm text-muted">{EXHIBIT.handledBy[lang]}</p>
        </div>
      </Section>

      <Section tone="soft" title={lang === "fr" ? "En vidéo" : "On video"}>
        <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {SSA.videos.map((v) => (
            <li key={v.id}>
              <a
                href={`https://youtu.be/${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-line"
              >
                <span className="relative block">
                  <img
                    src={`/sites/ssa/video-${v.id}.webp`}
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                    className="block aspect-video w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      <Play className="ml-1 h-7 w-7 fill-brand text-brand" aria-hidden />
                    </span>
                  </span>
                </span>
                <span className="block p-4 text-[15px] font-semibold leading-snug">
                  {typo("fr", v.title)}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-sm text-muted">
          {lang === "fr" ? "Les vidéos s'ouvrent sur YouTube." : "Videos open on YouTube."}
        </p>
      </Section>

      <Section title={FIAME.previousTitle[lang]} intro={FIAME.previous[lang]}>
        <Actions lang={lang} />
        <p className="mt-6 text-center text-sm text-muted">{EXHIBIT.handledBy[lang]}</p>
      </Section>
    </>
  );
}
