import { PlusIcon } from "@/components/ui/Icon";
import { faqSection, faqs } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="section bg-grey">
      <div className="container-x">
        <p className="eyebrow">{faqSection.eyebrow}</p>
        <h2>{faqSection.title}</h2>
        <div className="mt-10 max-w-[760px] border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] font-display text-base tracking-[.04em] md:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon className="size-4 flex-none text-muted transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-[60ch] pb-6 text-[15px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
