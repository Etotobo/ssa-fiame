import { ShoppingBag } from "lucide-react";
import { ButtonLink, PageHero, Section, Steps, ToComplete } from "@/components/site/ui";
import { COMMON, MAGAZINE } from "@/site/content";
import { SSA, type Lang } from "@/site/ssa";

// The magazine is paid: the cover (and later 2–3 extract pages, as images)
// only. The PDF is never on the site, in the repository or in Supabase.
export function Magazine({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero title={MAGAZINE.title[lang]} />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="/sites/ssa/magazine-n01-couverture.webp"
            alt={MAGAZINE.coverAlt[lang]}
            width={786}
            height={1079}
            className="mx-auto w-full max-w-sm rounded-lg shadow-xl"
          />
          <div className="text-center md:text-left">
            <p className="text-lg">{MAGAZINE.body[lang]}</p>
            <p className="mt-5 inline-flex rounded-full bg-yellow px-5 py-2 text-lg font-bold text-brand-deep">
              {MAGAZINE.priceLabel[lang]} : {MAGAZINE.price[lang]}
            </p>
            <div className="mt-6">
              <ButtonLink href={SSA.catalogue}>
                <ShoppingBag className="h-5 w-5" aria-hidden /> {COMMON.buyOnWhatsapp[lang]}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="soft" title={MAGAZINE.howTitle[lang]}>
        <Steps items={MAGAZINE.how.map((s) => s[lang])} />
      </Section>
      {/* TODO: 2 or 3 extract pages as images, when SSA sends them */}
      <Section title={MAGAZINE.extractsTitle[lang]}>
        <p className="text-center">
          <ToComplete lang={lang}>
            {lang === "fr" ? "2 ou 3 pages d'extrait en image" : "2 or 3 extract pages as images"}
          </ToComplete>
        </p>
      </Section>
    </>
  );
}
