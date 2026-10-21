import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = "Marlow House, Fremantle. Forty-eight residences above the working harbour.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#5C7F93",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.8 }}>
          Fremantle, Western Australia
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 300 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, marginTop: 24, opacity: 0.85, maxWidth: 900 }}>
            Forty-eight residences above the working harbour. Now selling off the plan.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75 }}>
          <span>Harbour &amp; Lane · Studio Reeve</span>
          <span>Completion late 2027</span>
        </div>
      </div>
    ),
    size,
  );
}
