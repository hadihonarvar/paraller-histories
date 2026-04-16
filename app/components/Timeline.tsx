"use client";

import { useState, useMemo } from "react";
import MetricsPanel from "./MetricsPanel";
import {
  type Country,
  type Leader,
  type TimelineEntry,
  timelineData,
  countryInfo,
  iranLeaders,
  iranPresidents,
  usaLeaders,
  ukLeaders,
  germanyLeaders,
  franceLeaders,
  russiaLeaders,
  chinaLeaders,
  getLeaderForYear,
  toFarsiNumber,
  gregorianToShamsi,
} from "../data/timeline-data";

type Language = "fa" | "en";

const countryLeaderMap: Record<Country, Leader[]> = {
  usa: usaLeaders,
  uk: ukLeaders,
  germany: germanyLeaders,
  france: franceLeaders,
  russia: russiaLeaders,
  china: chinaLeaders,
  world: [],
};

function FallbackImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  if (status === "error") return null;
  return (
    <img
      src={src}
      alt=""
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("error")}
      referrerPolicy="no-referrer"
      loading="lazy"
      className={`${className} ${status === "loading" ? "hidden" : ""}`}
    />
  );
}

function LeaderPhoto({
  leader,
  size = "sm",
}: {
  leader: Leader;
  size?: "sm" | "md";
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const sizeClasses = size === "md" ? "h-12 w-12" : "h-10 w-10";
  const textSize = size === "md" ? "text-sm" : "text-xs";

  const fallback = (
    <div
      className={`${leader.color} ${sizeClasses} flex shrink-0 items-center justify-center rounded-full ${textSize} font-bold text-white shadow-md`}
    >
      {leader.initials}
    </div>
  );

  if (!leader.image || status === "error") return fallback;

  return (
    <>
      {status === "loading" && fallback}
      <img
        src={leader.image}
        alt=""
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        referrerPolicy="no-referrer"
        loading="lazy"
        className={`${sizeClasses} shrink-0 rounded-full object-cover shadow-md ring-2 ring-white dark:ring-slate-700 ${
          status === "loading" ? "hidden" : ""
        }`}
      />
    </>
  );
}

function LeaderBadge({
  leader,
  lang,
  side,
}: {
  leader: Leader | undefined;
  lang: Language;
  side: "iran" | "world";
}) {
  if (!leader) return null;
  return (
    <div
      className={`flex items-center gap-2 ${
        side === "iran" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <LeaderPhoto leader={leader} />
      <div className={side === "iran" ? "text-left" : "text-right"}>
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {leader.name[lang]}
        </p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">
          {leader.title[lang]}
        </p>
      </div>
    </div>
  );
}

function LeaderStrip({
  leaders,
  year,
  lang,
  side,
}: {
  leaders: Leader[];
  year: number;
  lang: Language;
  side: "iran" | "world";
}) {
  const leader = getLeaderForYear(leaders, year);
  return <LeaderBadge leader={leader} lang={lang} side={side} />;
}

function IranLeaderSection({ year, lang }: { year: number; lang: Language }) {
  const supreme = getLeaderForYear(iranLeaders, year);
  const president = getLeaderForYear(iranPresidents, year);

  return (
    <div className="flex flex-col gap-1.5">
      {supreme && <LeaderBadge leader={supreme} lang={lang} side="iran" />}
      {president && <LeaderBadge leader={president} lang={lang} side="iran" />}
    </div>
  );
}

function EventCard({
  entry,
  lang,
  selectedCountries,
}: {
  entry: TimelineEntry;
  lang: Language;
  selectedCountries: Set<Country>;
}) {
  const [iranExpanded, setIranExpanded] = useState(false);
  const [worldExpanded, setWorldExpanded] = useState(false);
  const [yearExpanded, setYearExpanded] = useState(false);

  const worldEvents = entry.world?.filter((e) =>
    selectedCountries.has(e.country)
  );
  const hasIran = !!entry.iran;
  const hasWorld = worldEvents && worldEvents.length > 0;

  if (!hasIran && !hasWorld) return null;

  const primaryWorldCountry = worldEvents?.find(
    (e) => e.country !== "world"
  )?.country;

  return (
    <div className="relative flex items-start gap-0 py-4 md:py-6">
      {/* World Side (Left) */}
      <div className="flex w-1/2 justify-end pr-3 md:pr-6">
        {hasWorld ? (
          <div className="flex max-w-md flex-col items-end gap-2">
            {primaryWorldCountry && (
              <LeaderStrip
                leaders={countryLeaderMap[primaryWorldCountry]}
                year={entry.year}
                lang={lang}
                side="world"
              />
            )}
            <button
              onClick={() => setWorldExpanded(!worldExpanded)}
              className="group w-full cursor-pointer rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-3 text-left shadow-sm transition-all hover:shadow-md dark:border-sky-900 dark:from-sky-950/40 dark:to-blue-950/30 md:p-4"
            >
              {worldEvents!.map((event, idx) => (
                <div
                  key={idx}
                  className={
                    idx > 0
                      ? "mt-2 border-t border-sky-100 pt-2 dark:border-sky-800"
                      : ""
                  }
                >
                  <div className="flex items-center justify-end gap-1.5">
                    <h3 className="text-sm font-bold text-sky-900 dark:text-sky-200 md:text-base">
                      {event.title[lang]}
                    </h3>
                    <span className="text-sm">
                      {countryInfo[event.country].flag}
                    </span>
                  </div>
                  {event.description && (
                    <p className="mt-0.5 text-right text-xs text-sky-700 dark:text-sky-400 md:text-sm">
                      {event.description[lang]}
                    </p>
                  )}
                  {worldExpanded && event.details && (
                    <div className="mt-2 space-y-2 border-t border-sky-100 pt-2 dark:border-sky-800">
                      {event.image && (
                        <FallbackImage
                          src={event.image}
                          alt={event.title.en}
                          className="mx-auto max-h-40 rounded-lg object-cover shadow-sm"
                        />
                      )}
                      <p className="text-right text-xs leading-relaxed text-sky-800 dark:text-sky-300">
                        {event.details[lang]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2 flex justify-end">
                <span className="text-[10px] text-sky-400 transition-colors group-hover:text-sky-600 dark:text-sky-600 dark:group-hover:text-sky-400">
                  {worldExpanded
                    ? lang === "fa"
                      ? "▲ بستن"
                      : "▲ Close"
                    : lang === "fa"
                      ? "▼ جزئیات بیشتر"
                      : "▼ More details"}
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Center Year Circle */}
      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <button
          onClick={() => setYearExpanded(!yearExpanded)}
          className={`flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-full border-4 shadow-lg transition-all hover:scale-110 md:h-20 md:w-20 ${
            yearExpanded
              ? "border-amber-400 bg-slate-700 dark:border-amber-500 dark:bg-slate-800"
              : "border-slate-300 bg-slate-800 dark:border-slate-600 dark:bg-slate-900"
          }`}
        >
          <span className="text-[10px] font-bold text-sky-300 md:text-xs">
            {entry.year}
          </span>
          <div className="my-0.5 h-px w-6 bg-slate-500" />
          <span className="text-[10px] font-bold text-amber-300 md:text-xs">
            {toFarsiNumber(gregorianToShamsi(entry.year))}
          </span>
        </button>
        {yearExpanded && entry.yearInfo && (
          <div className="absolute top-full z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800 md:w-80">
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              {entry.yearInfo[lang]}
            </p>
            <button
              onClick={() => setYearExpanded(false)}
              className="mt-2 text-[10px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              {lang === "fa" ? "✕ بستن" : "✕ Close"}
            </button>
          </div>
        )}
      </div>

      {/* Iran Side (Right) */}
      <div className="flex w-1/2 justify-start pl-3 md:pl-6">
        {hasIran ? (
          <div className="flex max-w-md flex-col items-start gap-2">
            <IranLeaderSection year={entry.year} lang={lang} />
            <button
              onClick={() => setIranExpanded(!iranExpanded)}
              className="group w-full cursor-pointer rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-3 text-left shadow-sm transition-all hover:shadow-md dark:border-amber-900 dark:from-amber-950/40 dark:to-orange-950/30 md:p-4"
            >
              <h3 className="text-right text-sm font-bold text-amber-900 dark:text-amber-200 md:text-base">
                {entry.iran!.title[lang]}
              </h3>
              {entry.iran!.description && (
                <p className="mt-1 text-right text-xs text-amber-700 dark:text-amber-400 md:text-sm">
                  {entry.iran!.description[lang]}
                </p>
              )}
              {iranExpanded && (
                <div className="mt-2 space-y-2 border-t border-amber-100 pt-2 dark:border-amber-800">
                  {entry.iran!.image && (
                    <FallbackImage
                      src={entry.iran!.image}
                      alt={entry.iran!.title.en}
                      className="mx-auto max-h-40 rounded-lg object-cover shadow-sm"
                    />
                  )}
                  {entry.iran!.details && (
                    <p className="text-right text-xs leading-relaxed text-amber-800 dark:text-amber-300">
                      {entry.iran!.details[lang]}
                    </p>
                  )}
                </div>
              )}
              <div className="mt-2 flex justify-start">
                <span className="text-[10px] text-amber-400 transition-colors group-hover:text-amber-600 dark:text-amber-600 dark:group-hover:text-amber-400">
                  {iranExpanded
                    ? lang === "fa"
                      ? "▲ بستن"
                      : "▲ Close"
                    : lang === "fa"
                      ? "▼ جزئیات بیشتر"
                      : "▼ More details"}
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [lang, setLang] = useState<Language>("fa");
  const [selectedCountries, setSelectedCountries] = useState<Set<Country>>(
    new Set(["usa", "uk", "germany", "france", "russia", "china", "world"])
  );

  const toggleCountry = (country: Country) => {
    setSelectedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(country)) {
        next.delete(country);
      } else {
        next.add(country);
      }
      return next;
    });
  };

  const filteredData = useMemo(() => {
    return timelineData
      .filter((entry) => {
        const hasIran = !!entry.iran;
        const hasWorld = entry.world?.some((e) =>
          selectedCountries.has(e.country)
        );
        return hasIran || hasWorld;
      })
      .slice()
      .reverse();
  }, [selectedCountries]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="ltr">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:py-4">
          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white md:text-2xl">
              <span className="text-sky-600">Parallel Histories</span>
              <span className="mx-2 text-slate-300 dark:text-slate-600">
                |
              </span>
              <span className="text-amber-600">تاریخ موازی</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              1900 – 2025 &nbsp;/&nbsp; ۱۲۷۸ – ۱۴۰۴
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <div className="flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setLang("fa")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "fa"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                فارسی
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-sky-500 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                English
              </button>
            </div>

            {/* Country Filters */}
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(countryInfo) as Country[]).map((country) => (
                <button
                  key={country}
                  onClick={() => toggleCountry(country)}
                  className={`rounded-lg px-2 py-1.5 text-xs font-medium transition-all ${
                    selectedCountries.has(country)
                      ? "bg-sky-100 text-sky-800 ring-1 ring-sky-300 dark:bg-sky-900/50 dark:text-sky-200 dark:ring-sky-700"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  {countryInfo[country].flag}{" "}
                  <span className="hidden sm:inline">
                    {countryInfo[country].name[lang]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column Headers */}
        <div className="border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto flex max-w-7xl items-center px-4 py-2">
            <div className="w-1/2 text-right">
              <span className="text-xs font-bold text-sky-700 dark:text-sky-400 md:text-sm">
                🌍 {lang === "fa" ? "تاریخ جهان" : "World History"}
              </span>
            </div>
            <div className="w-20 shrink-0" />
            <div className="w-1/2 text-left">
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 md:text-sm">
                🇮🇷 {lang === "fa" ? "تاریخ ایران" : "Iran's History"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hint */}
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <p className="text-center text-xs text-slate-400 dark:text-slate-500">
          {lang === "fa"
            ? "روی کارت‌ها و دایره سال کلیک کنید برای جزئیات بیشتر"
            : "Click on cards and year circles for more details"}
        </p>
      </div>

      {/* Timeline Body */}
      <main className="relative mx-auto max-w-7xl px-2 pb-16 pt-4 md:px-4">
        {/* Center Line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />

        {/* Events */}
        <div className="relative">
          {filteredData.map((entry) => (
            <EventCard
              key={entry.year}
              entry={entry}
              lang={lang}
              selectedCountries={selectedCountries}
            />
          ))}
        </div>

        {/* End marker */}
        <div className="relative z-10 flex justify-center py-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-300 bg-slate-700 text-xs font-bold text-white shadow-lg dark:border-slate-600">
            ···
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white pb-14 pt-4 text-center text-xs text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500">
        {lang === "fa"
          ? "تاریخ موازی — مقایسه رویدادهای تاریخی ایران و جهان"
          : "Parallel Histories — Comparing Historical Events of Iran and the World"}
      </footer>

      {/* Metrics Panel */}
      <MetricsPanel lang={lang} />
    </div>
  );
}
