import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/data";
import "./globals.css";

// Self-hosted (latin subset, variable weight) instead of next/font/google: Google
// sometimes serves Inter Tight as a `/l/font?kit=…&skey=…` URL, which next/font
// can't parse in dev ("next/font/google queries have exactly one entry").
const jost = localFont({
  variable: "--font-jost",
  src: [
    { path: "./fonts/Jost-latin-wght.woff2", weight: "300 400", style: "normal" },
    { path: "./fonts/Jost-latin-wght-italic.woff2", weight: "300 400", style: "italic" },
  ],
});

const interTight = localFont({
  variable: "--font-inter-tight",
  src: [{ path: "./fonts/InterTight-latin-wght.woff2", weight: "400 500", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription,
    type: "website",
    locale: "en_AU",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${jost.variable} ${interTight.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
