import type { AmenityIcon } from "@/lib/data";

type IconProps = { className?: string };

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function BedIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...line} strokeWidth={1.3}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
    </svg>
  );
}

export function BathIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...line} strokeWidth={1.3}>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zM6 12V6a2 2 0 0 1 4 0" />
    </svg>
  );
}

export function AreaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...line} strokeWidth={1.3}>
      <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={className}>
      <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth={1.2} />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="20" cy="20" r="18" />
      <path d="M12 20l6 6 10-12" />
    </svg>
  );
}

export function MenuIcon({ open, className }: IconProps & { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path
        d={open ? "M4 4l12 12M16 4L4 16" : "M2 5h16M2 10h16M2 15h16"}
        stroke="currentColor"
        strokeWidth={1.3}
      />
    </svg>
  );
}

const amenityPaths: Record<AmenityIcon, string> = {
  pool: "M3 22c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2M3 27c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2M10 22V8a3 3 0 0 1 6 0M18 22V8a3 3 0 0 1 6 0M10 14h8",
  dining: "M4 18h24M6 18v8M26 18v8M8 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M12 10V6M20 10V6",
  gym: "M3 16h26M6 11v10M26 11v10M9 13v6M23 13v6",
  garden: "M16 29V14M16 14c-5 0-9-4-9-9 5 0 9 4 9 9zM16 18c0-5 4-9 9-9 0 5-4 9-9 9zM8 29h16",
  parking: "M4 22h18v-9l-3-6H9l-5 6v9zM7 22v3M19 22v3M8 18h2M16 18h2M24 10h4v6h-4zM26 16v6",
  concierge: "M8 27h16M11 27v-7h10v7M8 14a8 8 0 0 1 16 0v6H8v-6zM16 4v3",
};

export function AmenityGlyph({ name, className }: IconProps & { name: AmenityIcon }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} {...line} strokeWidth={1.2}>
      <path d={amenityPaths[name]} />
    </svg>
  );
}
