"use client";

import { useState } from "react";
import { MenuIcon } from "@/components/ui/Icon";
import { navLinks, site } from "@/lib/data";

const linkClass = "text-xs font-medium uppercase tracking-[.14em] text-muted transition-colors hover:text-ink";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-[10px]">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="font-display text-[17px] font-normal uppercase tracking-[.2em]">
          {site.name}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href={site.phoneHref} className="hidden text-[13px] font-medium text-muted lg:inline">
            {site.phone}
          </a>
          <a href="#register" className="btn btn-primary hidden h-10 px-5 md:inline-flex">
            Register interest
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-base border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} className="size-5" />
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${open ? "block" : "hidden"} border-t border-line bg-white md:hidden`}
      >
        {[...navLinks, { href: site.phoneHref, label: site.phone }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="block border-b border-line px-6 py-4 text-[13px] font-medium uppercase tracking-[.14em]"
          >
            {l.label}
          </a>
        ))}
        <div className="px-6 py-5">
          <a href="#register" onClick={close} className="btn btn-primary w-full">
            Register interest
          </a>
        </div>
      </nav>
    </header>
  );
}
