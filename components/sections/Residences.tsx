"use client";

import { useState } from "react";
import { floorPlans } from "@/components/floorplans";
import { AreaIcon, ArrowIcon, BathIcon, BedIcon } from "@/components/ui/Icon";
import { residences, residencesSection, type Residence } from "@/lib/data";

type Filter = (typeof residencesSection.filters)[number]["value"];

export default function Residences() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = residences.filter((r) => filter === "all" || r.beds === filter);

  return (
    <section id="residences" className="section bg-grey">
      <div className="container-x">
        <p className="eyebrow">{residencesSection.eyebrow}</p>
        <h2>{residencesSection.title}</h2>
        <p className="lead">{residencesSection.lead}</p>

        <div role="group" aria-label="Filter residences by bedrooms" className="mt-9 mb-8 flex flex-wrap gap-2">
          {residencesSection.filters.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
              className="h-[38px] cursor-pointer rounded-base border border-line bg-white px-[18px] text-[11px] font-medium uppercase tracking-[.14em] text-muted transition-colors hover:border-ink hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((r) => (
            <ResidenceCard key={r.id} residence={r} />
          ))}
        </div>
        <p aria-live="polite" className={visible.length === 0 ? "py-10 text-[15px]" : "sr-only"}>
          {visible.length === 0 ? residencesSection.empty : ""}
        </p>
      </div>
    </section>
  );
}

function ResidenceCard({ residence: r }: { residence: Residence }) {
  const Plan = floorPlans[r.beds];
  return (
    <article className="flex flex-col gap-3.5 rounded-base border border-line bg-white p-5 transition-[box-shadow,border-color] duration-300 hover:border-line-strong hover:shadow-card">
      <div className="relative aspect-square w-full overflow-hidden rounded-base border border-line bg-white">
        <Plan />
      </div>
      <h3 className="mt-1.5">{r.title}</h3>
      <ul className="flex flex-wrap gap-4 text-xs tracking-[.04em] text-muted">
        <li className="inline-flex items-center gap-1.5">
          <BedIcon className="size-[15px]" />
          {r.bed}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <BathIcon className="size-[15px]" />
          {r.bath}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <AreaIcon className="size-[15px]" />
          {r.area}
        </li>
      </ul>
      <p className="font-display text-[22px] font-light tracking-[.02em] text-ink">
        <small className="mb-1 block font-body text-[11px] font-medium uppercase tracking-[.14em] text-muted">
          {r.priceLabel}
        </small>
        {r.price}
      </p>
      <p className="flex-1 text-sm leading-[1.55]">{r.note}</p>
      <a href="#register" className="link">
        View plan <ArrowIcon />
      </a>
    </article>
  );
}
