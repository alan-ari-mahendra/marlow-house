import Image from "next/image";
import type { ImageAsset } from "@/lib/data";

const ratios = {
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
} as const;

type PhotoProps = {
  image: ImageAsset;
  ratio: keyof typeof ratios;
  sizes: string;
  /** Above-the-fold image: load eagerly with high fetch priority. */
  eager?: boolean;
  /** Sits on the blue location band: translucent backdrop instead of the grey placeholder. */
  onDark?: boolean;
  className?: string;
};

export default function Photo({ image, ratio, sizes, eager, onDark, className = "" }: PhotoProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-base ${onDark ? "bg-white/12" : "bg-ph"} ${ratios[ratio]} ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
        {...(eager ? { loading: "eager", fetchPriority: "high" } : {})}
      />
    </div>
  );
}
