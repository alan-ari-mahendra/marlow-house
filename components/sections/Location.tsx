import Photo from "@/components/ui/Photo";
import { locationSection } from "@/lib/data";

export default function Location() {
  return (
    <section id="location" className="section bg-blue text-white">
      <div className="container-x grid grid-cols-1 items-start gap-12 md:grid-cols-[5fr_7fr] lg:gap-[72px]">
        <div>
          <p className="eyebrow text-white/70">{locationSection.eyebrow}</p>
          <h2 className="text-white">{locationSection.title}</h2>
          <p className="text-white/80">{locationSection.body}</p>
          <ul className="mt-10 border-t border-white/28">
            {locationSection.distances.map((d) => (
              <li
                key={d.place}
                className="flex items-baseline justify-between gap-4 border-b border-white/28 py-4 text-[15px]"
              >
                <span>{d.place}</span>
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[.12em] text-white/75">
                  {d.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {locationSection.images.map((img) => (
            <Photo
              key={img.src}
              image={img}
              ratio="4/5"
              sizes="(min-width: 1025px) 340px, (min-width: 721px) 30vw, 100vw"
              onDark
            />
          ))}
        </div>
      </div>
    </section>
  );
}
