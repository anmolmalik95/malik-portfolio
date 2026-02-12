"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type TestStatus = "IDLE" | "RUNNING" | "PASS" | "FAIL";

type TestDef = {
  id: string;
  title: string; // "Test 1 - Happy Path ( ... )"
  subtitle: string; // one-liner under title
  tagText: string; // pill on right (AUTO APPROVED / MANUAL APPROVAL / INVALID INPUTS / TBD)
  tagTone: "green" | "amber" | "red" | "gray";
  info: {
    summary: string;
    does: string[];
    pass: string[];
    fail: string[];
  };
  script: string[]; // log lines that appear with delays
  expectedOutcome: "PASS" | "FAIL"; // for demo you’ll keep PASS
};

type RunState = {
  status: TestStatus;
  tagOverride?: { text: string; tone: TestDef["tagTone"] };
  expanded: boolean;
  logs: string[];
  stepIndex: number; // next script index to emit
  startedAt?: number;
};

function Pill({
  text,
  tone,
}: {
  text: string;
  tone: "green" | "amber" | "red" | "gray";
}) {
  const map = {
    green: { bg: "#e9fbf1", fg: "#0f6b3a", bd: "#9fe2be" },
    amber: { bg: "#fff6e7", fg: "#8a4b00", bd: "#ffd39b" },
    red: { bg: "#ffecec", fg: "#8a0f0f", bd: "#ffb3b3" },
    gray: { bg: "#f3f4f6", fg: "#374151", bd: "#e5e7eb" },
  } as const;

  const c = map[tone];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: 0.3,
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.bd}`,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

function StatusPill({ status }: { status: TestStatus }) {
  if (status === "PASS") return <Pill text="PASS" tone="green" />;
  if (status === "FAIL") return <Pill text="FAIL" tone="red" />;
  if (status === "RUNNING") return <Pill text="RUNNING" tone="amber" />;
  return <Pill text="IDLE" tone="gray" />;
}

function Chevron({ open }: { open: boolean }) {
  // nicer than ">"
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-hidden="true"
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 160ms ease",
        display: "block",
      }}
    >
      <path
        d="M7.25 4.75L12.5 10l-5.25 5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function AutoSecurityTestingPage() {
  // Clean, consistent font stack (Mac + Windows) — similar vibe to your form page.
  const uiFont =
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';
  const monoFont =
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

  const tests: TestDef[] = useMemo(
    () => [
      {
        id: "t1",
        title: "Test 1 - Happy Path (Low Risk → Auto Approved)",
        subtitle: "Submits a low-risk access request and expects automatic approval.",
        tagText: "AUTO APPROVED",
        tagTone: "green",
        info: {
          summary:
            "Valid low-risk request should be automatically approved with no manual review.",
          does: [
            "Fill the request form with low-risk system category + non-admin access level",
            "Submit request",
            "Verify response indicates automatic approval (Low Risk)",
          ],
          pass: ["Response is Low Risk / Auto Approved"],
          fail: ["Response is High Risk / Manual Approval Required", "Network / server error"],
        },
        script: [
          "[1/6] Preparing request payload…",
          "[2/6] Filling in form with low-risk inputs…",
          "[3/6] Submitting request…",
          "[4/6] Evaluating risk classification…",
          "[5/6] Result: Low Risk → Auto Approved",
          "[6/6] ✅ Test passed",
        ],
        expectedOutcome: "PASS",
      },
      {
        id: "t2",
        title: "Test 2 - High Risk (Manual Approval Required)",
        subtitle: "Submits a high-risk access request and expects manager review outcome.",
        tagText: "MANUAL APPROVAL",
        tagTone: "amber",
        info: {
          summary:
            "High-risk categories or admin roles should trigger manual approval workflow.",
          does: [
            "Fill the request form with high-risk category and/or admin access",
            "Submit request",
            "Verify response indicates manual approval required (High Risk)",
          ],
          pass: ["Response is High Risk / Manual Approval Required"],
          fail: ["Response is Low Risk / Auto Approved", "Network / server error"],
        },
        script: [
          "[1/6] Preparing request payload…",
          "[2/6] Filling in form with high-risk inputs…",
          "[3/6] Submitting request…",
          "[4/6] Evaluating risk classification…",
          "[5/6] Result: High Risk → Manual Approval Required",
          "[6/6] ✅ Test passed",
        ],
        expectedOutcome: "PASS",
      },
      {
        id: "t3",
        title: "Test 3 - Invalid Inputs (Form blocks submission)",
        subtitle:
          "Attempts to submit with invalid/missing inputs. Pass = submission is blocked.",
        tagText: "INVALID INPUTS",
        tagTone: "red",
        info: {
          summary:
            "Client-side validation should prevent submitting invalid or incomplete requests.",
          does: [
            "Clear required fields / provide invalid combinations",
            "Attempt to submit",
            "Verify submit is blocked and validation errors show",
          ],
          pass: ["Form blocks submit and shows validation feedback"],
          fail: ["Form submits despite missing/invalid inputs"],
        },
        script: [
          "[1/6] Preparing invalid input set…",
          "[2/6] Clearing required fields…",
          "[3/6] Attempting to submit…",
          "[4/6] Client-side validation triggered",
          "[5/6] Submit blocked as expected",
          "[6/6] ✅ Test passed",
        ],
        expectedOutcome: "PASS",
      },
      {
        id: "t4",
        title: "Test 4 - (Placeholder)",
        subtitle: "Waiting for Stefano’s final definition.",
        tagText: "TBD",
        tagTone: "gray",
        info: {
          summary: "Placeholder test. Replace with Stefano’s final test definition.",
          does: ["(TBD)"],
          pass: ["(TBD)"],
          fail: ["(TBD)"],
        },
        script: [
          "[1/4] Loading placeholder…",
          "[2/4] No actions defined yet",
          "[3/4] Waiting for final requirements…",
          "[4/4] ✅ Test passed (placeholder)",
        ],
        expectedOutcome: "PASS",
      },
    ],
    []
  );

  const initialRuns: Record<string, RunState> = useMemo(() => {
    const o: Record<string, RunState> = {};
    for (const t of tests) {
      o[t.id] = {
        status: "IDLE",
        expanded: false,
        logs: [],
        stepIndex: 0,
      };
    }
    return o;
  }, [tests]);

  const [runs, setRuns] = useState<Record<string, RunState>>(initialRuns);

  // Tooltip state (fixed overlay so it never clips inside the card)
  const [tip, setTip] = useState<{
    open: boolean;
    anchorRect?: DOMRect;
    testId?: string;
  }>({ open: false });

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const getRowTone = (status: TestStatus) => {
    if (status === "PASS") return { bg: "#e9fbf1", bd: "#9fe2be" };
    if (status === "FAIL") return { bg: "#ffecec", bd: "#ffb3b3" };
    if (status === "RUNNING") return { bg: "#fff6e7", bd: "#ffd39b" };
    return { bg: "#ffffff", bd: "#e5e7eb" };
  };

  // Runs a single test with delayed log emission (can run in parallel with others)
  const runTest = (t: TestDef) => {
    setRuns((prev) => {
      const cur = prev[t.id];
      // allow rerun: reset only this test
      return {
        ...prev,
        [t.id]: {
          status: "RUNNING",
          expanded: true, // show logs when started
          logs: [],
          stepIndex: 0,
          startedAt: Date.now(),
        },
      };
    });

    // Emit script lines with slight buffer delays.
    // Keep it snappy for demo (not too slow).
    const baseDelayMs = 450;

    t.script.forEach((line, idx) => {
      const delay = baseDelayMs * (idx + 1) + Math.floor(Math.random() * 120);

      window.setTimeout(() => {
        setRuns((prev) => {
          const cur = prev[t.id];
          // if reset happened mid-run, stop appending
          if (!cur || (cur.status !== "RUNNING" && cur.status !== "PASS" && cur.status !== "FAIL")) {
            return prev;
          }
          // If user re-ran quickly, we only append if we're still in expected flow.
          // (This keeps things stable without complex cancellation logic.)
          const nextLogs = cur.logs.length >= idx ? [...cur.logs, line] : cur.logs;

          const isLast = idx === t.script.length - 1;
          const endStatus: TestStatus = isLast
            ? t.expectedOutcome === "PASS"
              ? "PASS"
              : "FAIL"
            : "RUNNING";

          return {
            ...prev,
            [t.id]: {
              ...cur,
              logs: nextLogs,
              stepIndex: Math.max(cur.stepIndex, idx + 1),
              status: endStatus,
            },
          };
        });
      }, delay);
    });
  };

  const toggleExpanded = (id: string) => {
    setRuns((prev) => ({
      ...prev,
      [id]: { ...prev[id], expanded: !prev[id].expanded },
    }));
  };

  const resetAll = () => {
    setRuns(initialRuns);
    setTip({ open: false });
  };

  // Close tooltip on scroll/resize (keeps it from floating oddly)
  useEffect(() => {
    const close = () => setTip({ open: false });
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, []);

  const renderTooltip = () => {
    if (!tip.open || !tip.anchorRect || !tip.testId) return null;
    const t = tests.find((x) => x.id === tip.testId);
    if (!t) return null;

    const rect = tip.anchorRect;

    // Desired size
    const w = 420;
    const pad = 12;
    const gap = 10;

    // Prefer below/right of icon, clamp within viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = rect.left + gap;
    left = clamp(left, pad, vw - w - pad);

    // compute height roughly by max, but just clamp top/bottom
    let top = rect.bottom + gap;
    // if too low, place above
    const estimatedH = 220;
    if (top + estimatedH > vh - pad) {
      top = rect.top - gap - estimatedH;
    }
    top = clamp(top, pad, vh - estimatedH - pad);

    return (
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top,
          left,
          width: w,
          zIndex: 9999,
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
          padding: 14,
          color: "#111827",
          pointerEvents: "none", // so hover stays on the icon row, simple + stable
          fontFamily: uiFont,
        }}
      >
        <div style={{ fontWeight: 900, marginBottom: 10 }}>{t.info.summary}</div>

        <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.55 }}>
          <div style={{ fontWeight: 900, marginTop: 10, marginBottom: 6 }}>What it does</div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {t.info.does.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
            <div>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Pass</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {t.info.pass.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Fail</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {t.info.fail.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        color: "#111827",
        fontFamily: uiFont,
        padding: "36px 18px",
      }}
      onMouseDown={() => {
        // Clicking anywhere closes tooltip (simple)
        if (tip.open) setTip({ open: false });
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div
          style={{
            background: "white",
            borderRadius: 18,
            border: "1px solid #e5e7eb",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            padding: 26,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div style={{ fontSize: 34, fontWeight: 950, letterSpacing: -0.4 }}>
                Automatic Security Testing
              </div>
              <div style={{ marginTop: 6, color: "#6b7280", fontWeight: 650, fontSize: 13 }}>
                Internal Access Request Tool
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                resetAll();
              }}
              style={{
                height: 40,
                padding: "0 14px",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                background: "white",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Reset all
            </button>
          </div>

          <div style={{ marginTop: 22, fontSize: 18, fontWeight: 950 }}>
            Available Tests ({tests.length})
          </div>

          <div
            style={{
              marginTop: 14,
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              background: "white",
            }}
          >
            {tests.map((t, idx) => {
              const r = runs[t.id];
              const tone = getRowTone(r.status);

              const tag = r.tagOverride
                ? r.tagOverride
                : { text: t.tagText, tone: t.tagTone };

              const canRun = r.status !== "RUNNING";

              return (
                <div
                  key={t.id}
                  style={{
                    background: tone.bg,
                    borderTop: idx === 0 ? "none" : "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 16,
                      padding: 16,
                      alignItems: "center",
                    }}
                  >
                    {/* Left: Title + subtitle */}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            fontSize: 18,
                            fontWeight: 950,
                            letterSpacing: -0.2,
                            lineHeight: 1.2,
                          }}
                        >
                          {t.title}
                        </div>

                        {/* Info icon */}
                        <button
                          type="button"
                          aria-label="Test details"
                          onMouseEnter={(e) => {
                            const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                            setTip({ open: true, anchorRect: rect, testId: t.id });
                          }}
                          onMouseLeave={() => setTip({ open: false })}
                          onFocus={(e) => {
                            const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                            setTip({ open: true, anchorRect: rect, testId: t.id });
                          }}
                          onBlur={() => setTip({ open: false })}
                          onClick={(e) => {
                            // allow click toggling for touchpads
                            e.stopPropagation();
                            const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                            setTip((prev) =>
                              prev.open && prev.testId === t.id
                                ? { open: false }
                                : { open: true, anchorRect: rect, testId: t.id }
                            );
                          }}
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 999,
                            border: "1px solid #e5e7eb",
                            background: "white",
                            fontWeight: 900,
                            fontSize: 12,
                            color: "#111827",
                            cursor: "help",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          i
                        </button>
                      </div>

                      <div
                        style={{
                          marginTop: 6,
                          color: "#6b7280",
                          fontSize: 13,
                          fontWeight: 650,
                        }}
                      >
                        {t.subtitle}
                      </div>
                    </div>

                    {/* Right: pills + chevron + run */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Pill text={tag.text} tone={tag.tone} />
                      <StatusPill status={r.status} />

                      <button
                        type="button"
                        onClick={() => toggleExpanded(t.id)}
                        aria-label={r.expanded ? "Collapse logs" : "Expand logs"}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          border: "1px solid #e5e7eb",
                          background: "white",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#111827",
                        }}
                      >
                        <Chevron open={r.expanded} />
                      </button>

                      <button
                        type="button"
                        disabled={!canRun}
                        onClick={() => runTest(t)}
                        style={{
                          height: 40,
                          padding: "0 16px",
                          borderRadius: 12,
                          border: "1px solid #4338ca",
                          background: canRun ? "#4f46e5" : "#a5b4fc",
                          color: "white",
                          fontWeight: 900,
                          cursor: canRun ? "pointer" : "not-allowed",
                        }}
                      >
                        Run test
                      </button>
                    </div>
                  </div>

                  {/* Logs */}
                  {r.expanded ? (
                    <div style={{ padding: "0 16px 16px 16px" }}>
                      <div
                        style={{
                          background: "#0b1220",
                          color: "#e5e7eb",
                          borderRadius: 14,
                          border: `1px solid ${tone.bd}`,
                          padding: 14,
                          fontFamily: monoFont,
                          fontSize: 12.5,
                          lineHeight: 1.55,
                          overflowX: "auto",
                        }}
                      >
                        {r.logs.length === 0 ? (
                          <div style={{ color: "#9ca3af" }}>
                            Click <span style={{ fontWeight: 800 }}>Run test</span> to view output…
                          </div>
                        ) : (
                          r.logs.map((line, i) => (
                            <div key={i} style={{ whiteSpace: "pre" }}>
                              {line}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 10, color: "#6b7280", fontSize: 12, fontWeight: 650 }}>
            Note: In this demo, tests are designed to pass. Fail styling exists for completeness.
          </div>
        </div>
      </div>

      {/* Tooltip overlay */}
      {tip.open ? renderTooltip() : null}
    </div>
  );
}