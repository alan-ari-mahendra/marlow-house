"use client";

import { useState } from "react";
import Photo from "@/components/ui/Photo";
import { designSection, schemes, type SchemeId } from "@/lib/data";

const wide = "(min-width: 1025px) 680px, (min-width: 721px) 58vw, 100vw";
const half = "(min-width: 1025px) 330px, (min-width: 721px) 29vw, 100vw";

export default function Design() {
  const [schemeId, setSchemeId] = useState<SchemeId>("harbour");
  const scheme = schemes.find((s) => s.id === schemeId) ?? schemes[0];
  const img = scheme.images ?? designSection.defaultImages;

  return (
    <section id="design" className="section bg-grey">
      <div className="container-x grid grid-cols-1 items-start gap-12 md:grid-cols-[5fr_7fr] lg:gap-[72px]">
        <div>
          <p className="eyebrow">{designSection.eyebrow}</p>
          <h2>{designSection.title}</h2>
          <p>{designSection.body}</p>

          <div
            role="group"
            aria-label="Finish scheme"
            className="mt-8 mb-7 inline-flex overflow-hidden rounded-base border border-line"
          >
            {schemes.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={s.id === schemeId}
                onClick={() => setSchemeId(s.id)}
                className="h-[42px] cursor-pointer px-6 text-[11px] font-medium uppercase tracking-[.14em] text-muted transition-colors not-first:border-l not-first:border-line aria-pressed:bg-ink aria-pressed:text-white"
              >
                {s.name}
              </button>
            ))}
          </div>

          <ul className="grid grid-cols-3 gap-2.5 xs:gap-4">
            {scheme.swatches.map((sw) => (
              <li key={sw.use}>
                <span
                  aria-hidden="true"
                  className="block aspect-square rounded-base border border-line transition-colors duration-300"
                  style={{ backgroundColor: sw.hex }}
                />
                <b className="mt-3 block text-[13px] font-medium">{sw.name}</b>
                <small className="block text-[11px] uppercase tracking-[.1em] text-muted">{sw.use}</small>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[15px]" aria-live="polite">
            Shown: <span className="font-medium text-ink">{scheme.name}</span> scheme. {scheme.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Photo image={img.kitchen} ratio="16/9" sizes={wide} className="md:col-span-2" />
          <Photo image={img.living} ratio="4/5" sizes={half} />
          <Photo image={img.bathroom} ratio="4/5" sizes={half} />
          <Photo image={img.terrace} ratio="16/9" sizes={wide} className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
}
