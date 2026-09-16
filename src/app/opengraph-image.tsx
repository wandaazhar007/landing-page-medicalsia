import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F8FC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 44,
              background: "#1E40AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="96" height="96" viewBox="0 0 36 36" fill="none">
              <path
                d="M9 26V11l4.5 8L18 11v0M18 11l4.5 8L27 11v15"
                stroke="#fff"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="27" cy="9" r="2.2" fill="#93C5FD" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800 }}>
            <span style={{ color: "#1E40AF" }}>Medical</span>
            <span style={{ color: "#3B82F6" }}>sia</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
