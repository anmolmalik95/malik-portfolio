"use client";

import { useEffect, useMemo, useState } from "react";

export default function CalendarPage() {
  const BASE = useMemo(
    () =>
      "https://calendar.google.com/calendar/embed?src=1725d8fc6d4aff2fb2cbb6bddc68b95d9d8877ba54e6bf6389e0ea26a70439ed%40group.calendar.google.com&ctz=Asia%2FSingapore&showTitle=0&showCalendars=0&showPrint=0&showTz=0",
    []
  );

  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const updateMobile = () => setIsMobile(mqMobile.matches);
    const updateTheme = () => setIsDark(mqTheme.matches);

    updateMobile();
    updateTheme();

    mqMobile.addEventListener?.("change", updateMobile);
    mqTheme.addEventListener?.("change", updateTheme);

    return () => {
      mqMobile.removeEventListener?.("change", updateMobile);
      mqTheme.removeEventListener?.("change", updateTheme);
    };
  }, []);

  const viewMode = isMobile ? "AGENDA" : "MONTH";
  const themeMode = isDark ? "dark" : "light";
  const embedUrl = `${BASE}&mode=${viewMode}&theme=${themeMode}`;

  return (
    <main
      style={{
        width: "min(1300px, calc(100vw - 32px))",
        margin: "0 auto",

        /* 👇 THIS is what removes the gap */
        paddingTop: isMobile ? 8 : 12,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 48,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <h1
          style={{
            fontSize: isMobile ? 34 : 44,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Availability
        </h1>
      </div>

      <div
        style={{
          width: "100%",
          height: isMobile ? "75vh" : "85vh",
          minHeight: isMobile ? 620 : 820,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          background: isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.04)",
        }}
      >
        <iframe
          key={embedUrl}
          title="Availability Calendar"
          src={embedUrl}
          style={{ width: "100%", height: "100%", border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
