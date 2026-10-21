import { footer, navLinks, site } from "@/lib/data";

const heading = "mb-[18px] text-[11px] font-medium uppercase tracking-[.18em] text-muted";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <a href="#top" className="font-display text-[17px] uppercase tracking-[.2em]">
              {site.name}
            </a>
            <address className="mt-[18px] text-sm leading-[1.7] text-muted not-italic">
              {site.address.street}, {site.address.locality} {site.address.region} {site.address.postcode}
              <br />
              <a href={site.phoneHref} className="hover:text-blue">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-blue">
                {site.email}
              </a>
            </address>
          </div>
          <nav aria-label="Project">
            <h2 className={`${heading} font-body tracking-[.18em]`}>Project</h2>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-blue">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2 className={`${heading} font-body tracking-[.18em]`}>Legal</h2>
            <ul className="space-y-2.5 text-sm">
              {footer.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-blue">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className={`${heading} font-body tracking-[.18em]`}>Team</h2>
            <p className="text-sm leading-[1.7]">
              {footer.team[0]}
              <br />
              {footer.team[1]}
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-line pt-6 text-xs text-muted">
          <span>{footer.disclaimer}</span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
