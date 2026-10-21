import type { ReactNode } from "react";

type PlanProps = { label: string; hatchId: string; children: ReactNode };

export function Plan({ label, hatchId, children }: PlanProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-3.5 h-[calc(100%-28px)] w-[calc(100%-28px)] text-ink"
    >
      <defs>
        <pattern id={hatchId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" className="stroke-blue opacity-55" strokeWidth={1} />
        </pattern>
      </defs>
      {children}
      <North />
    </svg>
  );
}

type Rect = { x: number; y: number; w: number; h: number };

export function Balcony({ x, y, w, h, hatchId }: Rect & { hatchId: string }) {
  return <rect x={x} y={y} width={w} height={h} className="stroke-blue" strokeWidth={1} fill={`url(#${hatchId})`} />;
}

/** Room outline with its name (and optional area) centred inside. */
export function Room({ x, y, w, h, name, area }: Rect & { name: string; area?: string }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <>
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="currentColor" strokeWidth={1.2} />
      <text x={cx} y={area ? cy - 3 : cy + 3} className="fp-name">
        {name}
      </text>
      {area && (
        <text x={cx} y={cy + 9} className="fp-area">
          {area}
        </text>
      )}
    </>
  );
}

export function Wall({ d }: { d: string }) {
  return <path d={d} fill="none" stroke="currentColor" strokeWidth={4} />;
}

function North() {
  return (
    <g>
      <circle cx="378" cy="22" r="10" fill="none" className="stroke-muted" />
      <path d="M378 14 L382 26 L378 23 L374 26 Z" className="fill-muted" />
    </g>
  );
}
