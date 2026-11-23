import { useRef, useState } from "react";
import { BellRing, ShoppingBag, X } from "lucide-react";
import { ButtonLink, PageHero, Section, Steps } from "@/components/site/ui";
import { BOOK, COMMON, MAGAZINE } from "@/site/content";
import { SSA, waLink, type Lang } from "@/site/ssa";

const pageSrc = (n: number, mini = false) =>
  `/sites/ssa/magazine-n01-p${String(n).padStart(2, "0")}${mini ? "-mini" : ""}.webp`;

/**
 * « Extraits » (SSA 21/11): 4 pages, enlarged on touch in a <dialog>. Each
 * thumbnail is a plain link to the full page, so it still opens without
 * JavaScript or where <dialog> is missing.
 */
function Extracts({ lang }: { lang: Lang }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const shown = MAGAZINE.extracts.find((e) => e.page === open);
  const label = (page: number, caption: string) => `${MAGAZINE.page[lang]} ${page} · ${caption}`;
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {MAGAZINE.extracts.map((e) => (
          <li key={e.page}>
            <a
              href={pageSrc(e.page)}
              onClick={(ev) => {
                if (!dialog.current?.showModal) return;
                ev.preventDefault();
                setOpen(e.page);
                dialog.current.showModal();
              }}
              className="group block"
            >
              <img
                src={pageSrc(e.page, true)}
                alt={label(e.page, e.caption[lang])}
                width={440}
                height={611}
                loading="lazy"
                className="block aspect-[440/611] w-full rounded-lg bg-white object-cover shadow-md ring-1 ring-line transition-transform group-hover:scale-[1.02]"
              />
              <span className="mt-2 block text-center text-sm leading-snug">
                <span className="font-bold text-brand">
                  {MAGAZINE.page[lang]} {e.page}
                </span>{" "}
                · {e.caption[lang]}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(ev) => {
          // a tap outside the page (on the backdrop) closes it
          if (ev.target === ev.currentTarget) dialog.current?.close();
        }}
        aria-label={shown ? label(shown.page, shown.caption[lang]) : undefined}
        className="m-auto max-h-[100dvh] max-w-[min(100vw,48rem)] bg-transparent p-2 backdrop:bg-black/90"
      >
        {shown && (
          <figure className="relative">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-deep shadow-lg"
              aria-label={COMMON.close[lang]}
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
            <img
              src={pageSrc(shown.page)}
              alt={label(shown.page, shown.caption[lang])}
              width={778}
              height={1080}
              className="mx-auto block max-h-[calc(100dvh-4.5rem)] w-auto rounded-lg bg-white"
            />
            <figcaption className="mt-2 text-center text-sm text-white">
              {label(shown.page, shown.caption[lang])}
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}

/** « À paraître »: shown only when SSA.showBook is true (SSA's go). */
function Book({ lang }: { lang: Lang }) {
  return (
    <Section tone="soft" title={BOOK.label[lang]}>
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <img
          src="/sites/ssa/livre-qhse-couverture.webp"
          alt={BOOK.coverAlt[lang]}
          width={520}
          height={785}
          loading="lazy"
          className="mx-auto w-full max-w-[15rem] rounded-lg shadow-xl"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold leading-tight text-brand-deep">
            {BOOK.title[lang]}
          </h3>
          {BOOK.inFrench[lang] && <p className="mt-2 text-muted">{BOOK.inFrench[lang]}</p>}
          <p className="mt-3 text-lg">
            {BOOK.author[lang]} · {BOOK.publisher[lang]}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            {BOOK.prices.map((p) => (
              <li
                key={p.label.fr}
                className="rounded-full bg-yellow px-4 py-1.5 font-bold text-brand-deep"
              >
                {p.label[lang]} : {p.price[lang]}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-semibold text-brand">{BOOK.release[lang]}</p>
          <div className="mt-5">
            <ButtonLink href={waLink(SSA.whatsapp.wa, BOOK.message[lang])}>
              <BellRing className="h-5 w-5" aria-hidden /> {BOOK.button[lang]}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

// The magazine is paid: the cover and 4 extract pages, as images, only. The
// PDF is never on the site, in the repository or in Supabase.
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
      <Section title={MAGAZINE.extractsTitle[lang]} intro={MAGAZINE.extractsIntro[lang]}>
        <Extracts lang={lang} />
      </Section>
      {SSA.showBook && <Book lang={lang} />}
    </>
  );
}
