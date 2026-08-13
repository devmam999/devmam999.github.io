import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b12",
          color: "#f4f7fb",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#7dd8ff",
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 650, letterSpacing: "-0.04em" }}>
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#9aa3b0",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#9aa3b0" }}>
          UC Santa Barbara · CS · GPA 3.80
        </div>
      </div>
    ),
    { ...size },
  );
}
