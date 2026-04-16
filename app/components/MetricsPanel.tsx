"use client";

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  type MetricCountry,
  allMetrics,
  metricCountryInfo,
} from "../data/metrics-data";

type Language = "fa" | "en";

export default function MetricsPanel({ lang }: { lang: Language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("gdp_per_capita");
  const [selectedCountries, setSelectedCountries] = useState<Set<MetricCountry>>(
    new Set(["iran", "turkey", "saudi", "egypt"])
  );

  const metric = allMetrics.find((m) => m.id === selectedMetric)!;

  const toggleCountry = (c: MetricCountry) => {
    setSelectedCountries((prev) => {
      const next = new Set(prev);
      // Iran always stays selected
      if (c === "iran") return prev;
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const chartData = useMemo(() => {
    return metric.data.map((dp) => {
      const row: Record<string, number | undefined> = { year: dp.year };
      for (const c of selectedCountries) {
        row[c] = dp[c];
      }
      return row;
    });
  }, [metric, selectedCountries]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-300 bg-white/95 shadow-2xl backdrop-blur-md transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/95 ${
        isOpen ? "h-80 md:h-96" : "h-10"
      }`}
    >
      {/* Toggle bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <span className="mx-auto">
          📊{" "}
          {lang === "fa"
            ? "مقایسه شاخص‌های ایران با کشورهای منطقه و جهان"
            : "Compare Iran's Metrics with Regional & World Countries"}
        </span>
        <span>{isOpen ? "▼" : "▲"}</span>
      </button>

      {isOpen && (
        <div className="flex h-[calc(100%-2.5rem)] flex-col gap-2 px-3 pb-2 md:px-4">
          {/* Controls Row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Metric Selector */}
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
            >
              {allMetrics.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name[lang]}
                </option>
              ))}
            </select>

            {/* Country toggles */}
            <div className="flex flex-wrap gap-1">
              {(Object.keys(metricCountryInfo) as MetricCountry[]).map((c) => (
                <button
                  key={c}
                  onClick={() => toggleCountry(c)}
                  className={`rounded px-2 py-0.5 text-[10px] font-medium transition-all ${
                    selectedCountries.has(c)
                      ? c === "iran"
                        ? "bg-amber-100 text-amber-800 ring-1 ring-amber-400 dark:bg-amber-900/50 dark:text-amber-200 dark:ring-amber-600"
                        : "bg-sky-100 text-sky-800 ring-1 ring-sky-300 dark:bg-sky-900/50 dark:text-sky-200 dark:ring-sky-700"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  {metricCountryInfo[c].flag} {metricCountryInfo[c].name[lang]}
                </button>
              ))}
            </div>

            {/* Unit */}
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              ({metric.unit[lang]})
            </span>
          </div>

          {/* Chart */}
          <div className="min-h-0 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                />
                <YAxis tick={{ fontSize: 10 }} tickLine={false} width={50} />
                <Tooltip
                  contentStyle={{
                    fontSize: 11,
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                  }}
                  labelFormatter={(year) => `${year}`}
                />
                <Legend
                  wrapperStyle={{ fontSize: 10 }}
                  formatter={(value: string) => {
                    const info = metricCountryInfo[value as MetricCountry];
                    return info
                      ? `${info.flag} ${info.name[lang]}`
                      : value;
                  }}
                />
                {Array.from(selectedCountries).map((c) => (
                  <Line
                    key={c}
                    type="monotone"
                    dataKey={c}
                    stroke={metricCountryInfo[c].color}
                    strokeWidth={c === "iran" ? 3 : 1.5}
                    dot={false}
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
