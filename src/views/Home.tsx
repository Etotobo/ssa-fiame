import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { ButtonLink, Section } from "@/components/site/ui";
import { COMMON, FIAME, HOME } from "@/site/content";
import { pagePath } from "@/site/pages";
import { SSA, type Lang } from "@/site/ssa";
import { typo } from "@/site/typo";

export function Home({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Title and intro centred, then SSA's photo of the 2025 World
          Environment Day. */}
      <section className="bg-brand-soft px-4 pb-12 pt-10 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mx-auto max-w-4xl text-center text-3xl font-extrabold leading-tight tracking-tight text-brand-deep sm:text-5xl">
            {HOME.title[lang]}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted sm:text-xl">
            {HOME.subtitle[lang]}
          </p>
          <img
            src="/sites/ssa/photo-journee-environnement-2025.webp"
            alt={
              lang === "fr"
                ? "L'équipe de SSA et ses partenaires lors de la Journée mondiale de l'environnement, 5 juin 2025"
                : "SSA's team and partners at World Environment Day, 5 June 2025"
            }
            width={1080}
            height={500}
            className="mt-8 w-full rounded-2xl object-cover shadow-lg sm:mt-10"
          />
        </div>
      </section>

      {/* FIAME 2027, the main call to action */}
      <section className="bg-brand-deep px-4 py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-xl">
            <img
              src="/sites/ssa/fiame-logo.webp"
              alt="FIAME"
              width={395}
              height={340}
              className="w-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              {HOME.fiameTitle[lang]}
            </h2>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <li className="inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-1.5 font-bold text-brand-deep">
                <CalendarDays className="h-5 w-5" />{" "}
                {typo(lang, lang === "fr" ? "1er – 5 juin 2027" : "1 – 5 June 2027")}
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-semibold">
                <MapPin className="h-5 w-5" /> Douala
              </li>
              <li className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 font-semibold">
                {FIAME.free[lang]}
              </li>
            </ul>
            <p className="mt-4 text-lg text-white/85">{HOME.fiameBody[lang]}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <ButtonLink to={pagePath("stands", lang)} look="yellow">
                {COMMON.bookStand[lang]}
              </ButtonLink>
              <ButtonLink to={pagePath("partners", lang)} look="light">
                {COMMON.becomePartner[lang]}
              </ButtonLink>
            </div>
            <p className="mt-4">
              <Link
                to={pagePath("fiame", lang)}
                className="font-semibold text-yellow underline-offset-4 hover:underline"
              >
                {lang === "fr"
                  ? "Découvrir le programme de la FIAME 2027 →"
                  : "See the FIAME 2027 programme →"}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <Section>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HOME.figures.map((f) => (
            <li
              key={f.n.fr}
              className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-line"
            >
              <p className="whitespace-nowrap text-[28px] font-extrabold text-brand sm:text-4xl">
                {f.n[lang]}
              </p>
              <p className="mt-1 text-sm text-muted sm:text-base">{f.label[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* The magazine: the cover only, bought from SSA's WhatsApp catalogue */}
      <Section tone="soft">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img
            src="/sites/ssa/magazine-n01-couverture.webp"
            alt={
              lang === "fr" ? "Couverture du FIAME Magazine n° 1" : "Cover of FIAME Magazine No. 1"
            }
            width={786}
            height={1079}
            loading="lazy"
            className="mx-auto w-full max-w-xs rounded-lg shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-brand-deep sm:text-3xl">FIAME Magazine</h2>
            <p className="mt-3 text-lg">{HOME.magazine[lang]}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <ButtonLink href={SSA.catalogue}>{COMMON.buyMagazine[lang]}</ButtonLink>
              <ButtonLink to={pagePath("magazine", lang)} look="outline">
                {lang === "fr" ? "En savoir plus" : "Learn more"}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <p className="mx-auto max-w-3xl text-center text-xl font-bold text-brand-deep sm:text-2xl">
          {HOME.closing[lang]}
        </p>
      </Section>
    </>
  );
}
