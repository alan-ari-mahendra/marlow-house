import { AmenityGlyph } from "@/components/ui/Icon";
import { amenitiesSection } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" className="section">
      <div className="container-x">
        <p className="eyebrow">{amenitiesSection.eyebrow}</p>
        <h2>{amenitiesSection.title}</h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {amenitiesSection.items.map((a) => (
            <li
              key={a.title}
              className="rounded-base border border-line bg-white px-7 py-9 transition-[box-shadow,border-color] duration-300 hover:border-line-strong hover:shadow-card"
            >
              <AmenityGlyph name={a.icon} className="mb-6 size-8 text-blue" />
              <h3 className="text-[15px] leading-[1.4] tracking-[.1em]">{a.title}</h3>
              <p className="mt-2.5 text-sm">{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
