import Photo from "@/components/ui/Photo";
import { hero, images } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-14 md:pt-[88px]" aria-labelledby="hero-title">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">
              {hero.titleLine}
              <br />
              <em className="font-light normal-case italic tracking-[.02em] text-blue">{hero.titleAccent}</em>
            </h1>
            <p className="lead mt-7 mb-9">{hero.lead}</p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#register" className="btn btn-primary w-full md:w-auto">
                Register interest
              </a>
              <a href="#register" className="btn btn-ghost w-full md:w-auto">
                Download brochure
              </a>
            </div>
          </div>
          <Photo image={images.heroExterior} ratio="4/5" sizes="(min-width: 721px) 50vw, 100vw" eager />
        </div>
        <dl className="mt-14 grid grid-cols-1 border-y border-line md:mt-[88px] md:grid-cols-3">
          {hero.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse border-b border-line py-[22px] last:border-b-0 md:border-r md:border-b-0 md:py-[30px] md:last:border-r-0"
            >
              <dt className="mt-2.5 text-[11px] font-medium uppercase tracking-[.14em] text-muted">{s.label}</dt>
              <dd className="font-display text-[34px] leading-none font-light tracking-[.02em]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
