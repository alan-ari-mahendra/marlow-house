import { teamSection } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container-x">
        <p className="eyebrow">{teamSection.eyebrow}</p>
        <h2>{teamSection.title}</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {teamSection.members.map((m) => (
            <div key={m.name} className="rounded-base border border-line bg-white px-9 py-10">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[.18em] text-blue">{m.role}</p>
              <h3 className="text-2xl">{m.name}</h3>
              <p className="mt-3.5 text-[15px]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
