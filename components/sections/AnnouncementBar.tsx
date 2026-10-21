import { announcement } from "@/lib/data";

export default function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-grey px-6 py-[9px] text-center text-[11px] tracking-[.06em] text-muted md:text-xs">
      <strong className="font-medium text-ink">{announcement.strong}</strong> · {announcement.rest}
    </div>
  );
}
