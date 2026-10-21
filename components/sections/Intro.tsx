import { intro } from "@/lib/data";

export default function Intro() {
  return (
    <section id="idea" className="section">
      <div className="container-x grid grid-cols-1 items-start gap-12 md:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2>{intro.title}</h2>
        </div>
        <div className="space-y-5">
          {intro.paragraphs.map((p) => (
            <p key={p} className="max-w-[48ch] text-[17px]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
