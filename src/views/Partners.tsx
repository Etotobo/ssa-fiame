import { Mail, MessageCircle } from "lucide-react";
import { AgendaCmLogo, ButtonLink, PageHero, Section, Steps, cx } from "@/components/site/ui";
import {
  PACK_NAME,
  PACK_ORDER,
  PACK_ROWS,
  PARTNER_LIST,
  PARTNERS,
  partnerMessage,
} from "@/site/content";
import { mailLink, SSA, waLink, type Lang } from "@/site/ssa";

const PACK_TOP: Record<string, string> = {
  platine: "bg-brand-deep text-white",
  or: "bg-yellow text-brand-deep",
  argent: "bg-[#d9dfdb] text-brand-deep",
  bronze: "bg-[#c98a4b] text-white",
};

export function Partners({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHero title={PARTNERS.title[lang]} intro={PARTNERS.intro[lang]} />

      {/* One card per pack (phones scroll down, computers see 4 columns) */}
      <Section>
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PACK_ORDER.map((p) => (
            <li
              key={p}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-line"
            >
              <div className={cx("px-5 py-4 text-center", PACK_TOP[p])}>
                <h2 className="text-xl font-extrabold">{PACK_NAME[p][lang]}</h2>
                <p className="mt-1 text-lg font-bold">{PACK_ROWS[0]!.values[p][lang]}</p>
              </div>
              <dl className="flex-1 divide-y divide-line px-5">
                {PACK_ROWS.slice(1).map((r) => (
                  <div key={r.label.fr} className="py-3">
                    <dt className="text-xs font-bold uppercase tracking-wide text-brand">
                      {r.label[lang]}
                    </dt>
                    <dd className="mt-0.5 text-[15px]">{r.values[p][lang]}</dd>
                  </div>
                ))}
              </dl>
              <div className="p-5 pt-2">
                <ButtonLink
                  href={waLink(SSA.whatsapp.wa, partnerMessage(PACK_NAME[p][lang], lang))}
                  className="w-full"
                >
                  {PARTNERS.choose[lang]}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft" title={PARTNERS.howTitle[lang]}>
        <Steps items={PARTNERS.how.map((s) => s[lang])} />
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonLink
            href={waLink(SSA.whatsapp.wa, partnerMessage(PARTNERS.undefinedPack[lang], lang))}
          >
            <MessageCircle className="h-5 w-5" aria-hidden /> {PARTNERS.contactWa[lang]}
          </ButtonLink>
          <ButtonLink href={mailLink(SSA.fairEmail, PARTNERS.emailSubject[lang])} look="outline">
            <Mail className="h-5 w-5" aria-hidden /> {PARTNERS.email[lang]}
          </ButtonLink>
        </div>
      </Section>

      <Section title={PARTNERS.listTitle[lang]}>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PARTNER_LIST.map((p) => (
            <li
              key={p.name.fr}
              className="flex flex-col items-center rounded-2xl bg-white p-4 text-center ring-1 ring-line"
            >
              <div className="flex h-24 w-full items-center justify-center">
                {p.logo ? (
                  <img
                    src={`/sites/ssa/partenaires/${p.logo}.webp`}
                    alt=""
                    loading="lazy"
                    className="max-h-24 max-w-full object-contain"
                  />
                ) : (
                  <AgendaCmLogo />
                )}
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug">{p.name[lang]}</p>
              {p.description && (
                <p className="mt-1 text-xs leading-snug text-muted">{p.description[lang]}</p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
