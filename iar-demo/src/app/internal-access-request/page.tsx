"use client";

import { useState } from "react";

const HIGH_RISK_ROLES = ["Admin", "Super Admin"];


type RiskResult = {
  risk: "LOW" | "HIGH";
  outcome: "AUTO_APPROVED" | "PENDING_MANAGER_REVIEW";
};

const SYSTEM_CATEGORIES = [
  { key: "Internal Tool", icon: "🛠️", highRisk: false },
  { key: "Customer Data System", icon: "🗄️", highRisk: true },
  { key: "Production Environment", icon: "🚨", highRisk: true },
  { key: "Development Environment", icon: "🧪", highRisk: false },
  { key: "Network Access", icon: "🌐", highRisk: false },
  { key: "Shared Drive", icon: "📁", highRisk: false },
];

export default function InternalAccessRequestPage() {
  const [systemCategory, setSystemCategory] = useState("");
  const [systemName, setSystemName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [justification, setJustification] = useState("");
  const [result, setResult] = useState<RiskResult | null>(null);
  const [error, setError] = useState("");

  const canSubmit =
    systemCategory &&
    systemName.trim().length > 0 &&
    accessLevel &&
    justification.trim().length >= 20;

  async function submitRequest() {
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemCategory,
          systemName,
          accessLevel,
          justification,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setResult(data);
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-12">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow p-6 space-y-6">
        <header>
          <h1 className="text-2xl font-bold">New Access Request</h1>
          <p className="text-gray-500 text-sm">
            Internal Access Request Tool
          </p>
        </header>

        <section>
          <h2 className="font-semibold mb-2">
            System Type / Category <span className="text-red-500">*</span>
          </h2>

          <div className="grid grid-cols-3 gap-3">
            {SYSTEM_CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setSystemCategory(c.key)}
                className={`border rounded-lg p-3 text-left ${
                  systemCategory === c.key
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm">
                    <span className="text-lg">{c.icon}</span>
                    <span>{c.key}</span>
                </div>

                {c.highRisk && (
                  <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">
                    HIGH RISK
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        <section>
          <label className="block font-semibold mb-1">
            System / Application Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={systemName}
            onChange={(e) => setSystemName(e.target.value)}
          />
        </section>

        <section>
          <label className="block font-semibold mb-1">
            Access Level / Role Requested <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
          >
            <option value="">Select access level</option>
            <option>Read Only</option>
            <option>Read/Write</option>
            <option>Admin</option>
            <option>Super Admin</option>
          </select>
          {HIGH_RISK_ROLES.includes(accessLevel) && (
            <div className="mt-2 inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                HIGH RISK ACCESS
            </div>
            )}
        </section>

        <section>
          <label className="block font-semibold mb-1">
            Business Justification <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            rows={4}
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Minimum 20 characters required
          </p>
        </section>

        {result && (
          <div
            className={`rounded-lg p-3 text-sm ${
              result.risk === "HIGH"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            <strong>Risk:</strong> {result.risk} —{" "}
            {result.outcome === "AUTO_APPROVED"
              ? "Auto-approved"
              : "Pending manager review"}
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            disabled={!canSubmit}
            onClick={submitRequest}
            className="ml-auto bg-indigo-600 text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            Submit Request
          </button>
        </div>
      </div>
    </main>
  );
}
