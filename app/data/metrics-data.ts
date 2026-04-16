export type MetricCountry = "iran" | "turkey" | "pakistan" | "saudi" | "iraq" | "egypt" | "uae" | "usa" | "uk" | "germany" | "france" | "russia" | "china" | "israel";

export interface MetricDataPoint {
  year: number;
  iran?: number;
  turkey?: number;
  pakistan?: number;
  saudi?: number;
  iraq?: number;
  egypt?: number;
  uae?: number;
  usa?: number;
  uk?: number;
  germany?: number;
  france?: number;
  russia?: number;
  china?: number;
  israel?: number;
}

export interface MetricDef {
  id: string;
  name: { fa: string; en: string };
  unit: { fa: string; en: string };
  data: MetricDataPoint[];
}

export const metricCountryInfo: Record<MetricCountry, { flag: string; name: { fa: string; en: string }; color: string }> = {
  iran: { flag: "🇮🇷", name: { fa: "ایران", en: "Iran" }, color: "#16a34a" },
  turkey: { flag: "🇹🇷", name: { fa: "ترکیه", en: "Turkey" }, color: "#ef4444" },
  pakistan: { flag: "🇵🇰", name: { fa: "پاکستان", en: "Pakistan" }, color: "#065f46" },
  saudi: { flag: "🇸🇦", name: { fa: "عربستان", en: "Saudi Arabia" }, color: "#10b981" },
  iraq: { flag: "🇮🇶", name: { fa: "عراق", en: "Iraq" }, color: "#ea580c" },
  egypt: { flag: "🇪🇬", name: { fa: "مصر", en: "Egypt" }, color: "#eab308" },
  uae: { flag: "🇦🇪", name: { fa: "امارات", en: "UAE" }, color: "#0ea5e9" },
  usa: { flag: "🇺🇸", name: { fa: "آمریکا", en: "USA" }, color: "#3b82f6" },
  uk: { flag: "🇬🇧", name: { fa: "بریتانیا", en: "UK" }, color: "#1e3a5f" },
  germany: { flag: "🇩🇪", name: { fa: "آلمان", en: "Germany" }, color: "#374151" },
  france: { flag: "🇫🇷", name: { fa: "فرانسه", en: "France" }, color: "#2563eb" },
  russia: { flag: "🇷🇺", name: { fa: "روسیه", en: "Russia" }, color: "#b91c1c" },
  china: { flag: "🇨🇳", name: { fa: "چین", en: "China" }, color: "#dc2626" },
  israel: { flag: "🇮🇱", name: { fa: "اسرائیل", en: "Israel" }, color: "#1d4ed8" },
};

// =============================================================================
// GDP per capita, PPP (constant 2017 international $)
// Sources: Maddison Project Database 2023 (pre-1960), World Bank WDI (post-1960)
// =============================================================================
// Maddison Project (pre-1990), World Bank WDI (post-1990)
// Russia = USSR/RSFSR before 1991, Russian Federation after
// China: rapid growth post-1978 reforms; UK/France near parity historically
const gdpPerCapita: MetricDataPoint[] = [
  { year: 1950, iran: 3000, turkey: 4200, pakistan: 1500, saudi: 5000, iraq: 2500, egypt: 2000, usa: 18000, uk: 13500, germany: 8000, france: 10000, russia: 6000, china: 1200, israel: 5500 },
  { year: 1960, iran: 4300, turkey: 5500, pakistan: 1700, saudi: 12000, iraq: 4000, egypt: 2600, usa: 22000, uk: 16500, germany: 14500, france: 14000, russia: 8500, china: 1100, israel: 9000 },
  { year: 1970, iran: 7800, turkey: 8500, pakistan: 2300, saudi: 25000, iraq: 5500, egypt: 3100, usa: 28000, uk: 20000, germany: 20500, france: 21000, russia: 11500, china: 1200, israel: 15000 },
  { year: 1980, iran: 7500, turkey: 10000, pakistan: 2700, saudi: 55000, iraq: 8500, egypt: 4500, usa: 32000, uk: 22000, germany: 24000, france: 25000, russia: 14000, china: 1500, israel: 17500 },
  { year: 1990, iran: 6900, turkey: 13000, pakistan: 3200, saudi: 35000, iraq: 4000, egypt: 6300, uae: 62000, usa: 40000, uk: 28000, germany: 31000, france: 30000, russia: 14500, china: 2500, israel: 22000 },
  { year: 1995, iran: 8200, turkey: 14000, pakistan: 3500, saudi: 33000, iraq: 2000, egypt: 7000, uae: 60000, usa: 43000, uk: 31000, germany: 34000, france: 32000, russia: 8000, china: 3800, israel: 25000 },
  { year: 2000, iran: 10700, turkey: 16000, pakistan: 3700, saudi: 40000, iraq: 3000, egypt: 8000, uae: 62000, usa: 50000, uk: 36000, germany: 38000, france: 36000, russia: 11000, china: 5000, israel: 31000 },
  { year: 2005, iran: 14000, turkey: 20000, pakistan: 4000, saudi: 43000, iraq: 4500, egypt: 9500, uae: 65000, usa: 55000, uk: 40000, germany: 40000, france: 38000, russia: 17000, china: 7500, israel: 33000 },
  { year: 2010, iran: 16500, turkey: 22000, pakistan: 4300, saudi: 45000, iraq: 8000, egypt: 10700, uae: 58000, usa: 54000, uk: 40500, germany: 43000, france: 40000, russia: 22000, china: 11000, israel: 35000 },
  { year: 2015, iran: 16000, turkey: 26000, pakistan: 4800, saudi: 47000, iraq: 9000, egypt: 12000, uae: 63000, usa: 58000, uk: 44000, germany: 49000, france: 43000, russia: 25000, china: 15000, israel: 38000 },
  { year: 2019, iran: 14500, turkey: 28300, pakistan: 5200, saudi: 49000, iraq: 10400, egypt: 13000, uae: 63500, usa: 63000, uk: 47000, germany: 52000, france: 46000, russia: 28000, china: 18000, israel: 42000 },
  { year: 2020, iran: 13500, turkey: 28500, pakistan: 4900, saudi: 44000, iraq: 8500, egypt: 12500, uae: 55000, usa: 61000, uk: 42500, germany: 49000, france: 43000, russia: 27000, china: 18500, israel: 41000 },
  { year: 2022, iran: 14800, turkey: 32000, pakistan: 5400, saudi: 50000, iraq: 10000, egypt: 13500, uae: 62000, usa: 65000, uk: 48000, germany: 54000, france: 47000, russia: 29000, china: 21500, israel: 44500 },
  { year: 2024, iran: 15500, turkey: 33000, pakistan: 5300, saudi: 51000, iraq: 10500, egypt: 13000, uae: 64000, usa: 68000, uk: 49500, germany: 55000, france: 48000, russia: 28000, china: 23500, israel: 46500 },
  { year: 2026, iran: 15000, turkey: 34000, pakistan: 5500, saudi: 52000, iraq: 10800, egypt: 13500, uae: 65000, usa: 70000, uk: 50000, germany: 56000, france: 49000, russia: 27000, china: 25000, israel: 47500 },
];

// =============================================================================
// Population (millions)
// Sources: UN World Population Prospects 2024
// =============================================================================
const population: MetricDataPoint[] = [
  { year: 1950, iran: 16.9, turkey: 21.5, pakistan: 33, saudi: 3.1, iraq: 5.2, egypt: 20.9, usa: 152, uk: 50.6, germany: 68.4, france: 41.8, russia: 102.8, china: 552, israel: 1.3 },
  { year: 1960, iran: 22, turkey: 27.8, pakistan: 45, saudi: 4.1, iraq: 7.3, egypt: 26, usa: 181, uk: 52, germany: 73, france: 46, russia: 120, china: 660, israel: 2.1 },
  { year: 1970, iran: 28.5, turkey: 35.3, pakistan: 58, saudi: 5.7, iraq: 9.4, egypt: 33.6, usa: 205, uk: 56, germany: 78, france: 51, russia: 130, china: 818, israel: 2.9 },
  { year: 1980, iran: 38.7, turkey: 44.4, pakistan: 80, saudi: 9.6, iraq: 13.2, egypt: 43, usa: 227, uk: 56, germany: 78, france: 54, russia: 139, china: 981, israel: 3.9 },
  { year: 1990, iran: 56.7, turkey: 53.9, pakistan: 108, saudi: 16.1, iraq: 17.4, egypt: 56.3, uae: 1.9, usa: 250, uk: 57, germany: 79, france: 57, russia: 148, china: 1135, israel: 4.7 },
  { year: 2000, iran: 65.6, turkey: 63.2, pakistan: 142, saudi: 20.8, iraq: 23.6, egypt: 68.8, uae: 3.0, usa: 282, uk: 59, germany: 82, france: 59, russia: 146, china: 1263, israel: 6.3 },
  { year: 2010, iran: 74.3, turkey: 72.3, pakistan: 170, saudi: 27.4, iraq: 30.5, egypt: 81.1, uae: 8.3, usa: 309, uk: 63, germany: 82, france: 63, russia: 143, china: 1338, israel: 7.6 },
  { year: 2020, iran: 83.9, turkey: 83.6, pakistan: 221, saudi: 34.8, iraq: 40.2, egypt: 102.3, uae: 9.9, usa: 331, uk: 67, germany: 83, france: 67, russia: 144, china: 1411, israel: 9.2 },
  { year: 2026, iran: 89, turkey: 87, pakistan: 245, saudi: 38, iraq: 46, egypt: 113, uae: 10.4, usa: 340, uk: 69, germany: 84, france: 68, russia: 143, china: 1408, israel: 10 },
];

// =============================================================================
// Fertility Rate (births per woman, Total Fertility Rate)
// Sources: World Bank WDI, UN Population Division
// =============================================================================
const fertilityRate: MetricDataPoint[] = [
  { year: 1960, iran: 7.0, turkey: 6.1, pakistan: 6.6, saudi: 7.2, iraq: 7.2, egypt: 6.9, usa: 3.7, uk: 2.7, germany: 2.4, france: 2.7, russia: 2.6, china: 5.8, israel: 3.9 },
  { year: 1970, iran: 6.5, turkey: 5.3, pakistan: 6.6, saudi: 7.3, iraq: 7.1, egypt: 5.9, usa: 2.5, uk: 2.4, germany: 2.0, france: 2.5, russia: 2.0, china: 5.5, israel: 3.8 },
  { year: 1980, iran: 6.5, turkey: 4.2, pakistan: 6.5, saudi: 7.0, iraq: 6.3, egypt: 5.2, usa: 1.8, uk: 1.9, germany: 1.4, france: 1.9, russia: 1.9, china: 2.6, israel: 3.2 },
  { year: 1990, iran: 5.6, turkey: 3.0, pakistan: 6.0, saudi: 5.9, iraq: 5.4, egypt: 4.4, uae: 4.4, usa: 2.1, uk: 1.8, germany: 1.5, france: 1.8, russia: 1.9, china: 2.3, israel: 3.0 },
  { year: 2000, iran: 2.0, turkey: 2.4, pakistan: 4.7, saudi: 4.0, iraq: 4.7, egypt: 3.3, uae: 2.8, usa: 2.1, uk: 1.6, germany: 1.4, france: 1.9, russia: 1.2, china: 1.6, israel: 2.9 },
  { year: 2010, iran: 1.87, turkey: 2.1, pakistan: 3.7, saudi: 2.8, iraq: 4.4, egypt: 3.3, uae: 1.8, usa: 1.9, uk: 1.9, germany: 1.4, france: 2.0, russia: 1.6, china: 1.6, israel: 3.0 },
  { year: 2020, iran: 2.1, turkey: 1.8, pakistan: 3.3, saudi: 2.3, iraq: 3.6, egypt: 3.2, uae: 1.4, usa: 1.6, uk: 1.6, germany: 1.5, france: 1.8, russia: 1.5, china: 1.3, israel: 3.0 },
  { year: 2026, iran: 1.5, turkey: 1.5, pakistan: 3.0, saudi: 2.0, iraq: 3.3, egypt: 2.7, uae: 1.4, usa: 1.6, uk: 1.6, germany: 1.5, france: 1.8, russia: 1.4, china: 1.0, israel: 3.0 },
];

// =============================================================================
// Life Expectancy at birth (years)
// Sources: World Bank WDI, Gapminder, OWID
// =============================================================================
const lifeExpectancy: MetricDataPoint[] = [
  { year: 1960, iran: 46, turkey: 50, pakistan: 42, saudi: 42, iraq: 46, egypt: 46, usa: 70, uk: 71, germany: 70, france: 70, russia: 67, china: 44, israel: 70 },
  { year: 1970, iran: 52, turkey: 56, pakistan: 49, saudi: 50, iraq: 54, egypt: 51, usa: 71, uk: 72, germany: 71, france: 72, russia: 69, china: 59, israel: 72 },
  { year: 1980, iran: 55, turkey: 61, pakistan: 54, saudi: 60, iraq: 60, egypt: 56, usa: 74, uk: 74, germany: 73, france: 74, russia: 68, china: 66, israel: 74 },
  { year: 1990, iran: 63, turkey: 65, pakistan: 59, saudi: 67, iraq: 64, egypt: 63, uae: 72, usa: 75, uk: 76, germany: 75, france: 77, russia: 69, china: 69, israel: 77 },
  { year: 2000, iran: 70, turkey: 71, pakistan: 62, saudi: 72, iraq: 67, egypt: 68, uae: 75, usa: 77, uk: 78, germany: 78, france: 79, russia: 65, china: 72, israel: 79 },
  { year: 2010, iran: 74, turkey: 75, pakistan: 65, saudi: 74, iraq: 68, egypt: 70, uae: 77, usa: 79, uk: 81, germany: 80, france: 82, russia: 69, china: 75, israel: 82 },
  { year: 2020, iran: 76, turkey: 76, pakistan: 67, saudi: 76, iraq: 71, egypt: 72, uae: 78, usa: 77, uk: 81, germany: 81, france: 82, russia: 71, china: 78, israel: 83 },
  { year: 2026, iran: 77, turkey: 78, pakistan: 68, saudi: 77, iraq: 72, egypt: 73, uae: 79, usa: 78, uk: 81, germany: 81, france: 83, russia: 72, china: 79, israel: 83 },
];

// =============================================================================
// Literacy Rate (% of population age 15+)
// Sources: UNESCO UIS, World Bank, Our World in Data
// =============================================================================
const literacyRate: MetricDataPoint[] = [
  { year: 1960, iran: 18, turkey: 40, pakistan: 15, saudi: 10, iraq: 18, egypt: 26, usa: 97, uk: 99, germany: 99, france: 97, russia: 98, china: 65, israel: 88 },
  { year: 1980, iran: 47, turkey: 68, pakistan: 26, saudi: 30, iraq: 50, egypt: 38, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 66, israel: 92 },
  { year: 1990, iran: 65, turkey: 80, pakistan: 35, saudi: 62, iraq: 45, egypt: 47, uae: 71, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 78, israel: 95 },
  { year: 2000, iran: 77, turkey: 87, pakistan: 43, saudi: 77, iraq: 40, egypt: 56, uae: 77, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 91, israel: 97 },
  { year: 2010, iran: 85, turkey: 93, pakistan: 55, saudi: 87, iraq: 65, egypt: 72, uae: 90, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 95, israel: 98 },
  { year: 2020, iran: 88, turkey: 97, pakistan: 59, saudi: 95, iraq: 86, egypt: 73, uae: 95, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 97, israel: 98 },
  { year: 2026, iran: 89, turkey: 98, pakistan: 63, saudi: 97, iraq: 88, egypt: 76, uae: 97, usa: 99, uk: 99, germany: 99, france: 99, russia: 99, china: 97, israel: 98 },
];

// =============================================================================
// Inflation Rate (annual % change in CPI)
// Sources: World Bank WDI, IMF WEO
// =============================================================================
// Russia 1992: ~2500% hyperinflation after USSR collapse; China low/stable post-reform
// UK 1975: 24% (stagflation); France 1980: 13%
const inflationRate: MetricDataPoint[] = [
  { year: 1980, iran: 23, turkey: 110, pakistan: 12, saudi: 5, iraq: 15, egypt: 21, usa: 14, uk: 18, germany: 5, france: 13, china: 6, israel: 131 },
  { year: 1990, iran: 9, turkey: 60, pakistan: 6, saudi: 2, iraq: 50, egypt: 17, uae: 3, usa: 5, uk: 7, germany: 3, france: 3, russia: 6, china: 3, israel: 17 },
  { year: 1995, iran: 49, turkey: 93, pakistan: 13, saudi: 5, iraq: 500, egypt: 16, uae: 4, usa: 3, uk: 3, germany: 2, france: 2, russia: 197, china: 17, israel: 10 },
  { year: 2000, iran: 13, turkey: 55, pakistan: 4, saudi: -1, iraq: 5, egypt: 3, uae: 1, usa: 3, uk: 3, germany: 1, france: 2, russia: 21, china: 0, israel: 1 },
  { year: 2010, iran: 12, turkey: 6, pakistan: 11, saudi: 4, iraq: 3, egypt: 11, uae: 1, usa: 2, uk: 3, germany: 1, france: 2, russia: 7, china: 3, israel: 3 },
  { year: 2015, iran: 12, turkey: 8, pakistan: 3, saudi: 2, iraq: 1, egypt: 10, uae: 4, usa: 0, uk: 0, germany: 0, france: 0, russia: 16, china: 1, israel: -1 },
  { year: 2020, iran: 36, turkey: 12, pakistan: 9, saudi: 3, iraq: 0.6, egypt: 5, uae: -2, usa: 1, uk: 1, germany: 0, france: 1, russia: 3, china: 2, israel: -1 },
  { year: 2022, iran: 46, turkey: 72, pakistan: 12, saudi: 3, iraq: 5, egypt: 15, uae: 5, usa: 8, uk: 9, germany: 8, france: 6, russia: 14, china: 2, israel: 4 },
  { year: 2024, iran: 35, turkey: 49, pakistan: 24, saudi: 2, iraq: 3, egypt: 28, uae: 2, usa: 3, uk: 3, germany: 2, france: 2, russia: 8, china: 0, israel: 3 },
  { year: 2026, iran: 35, turkey: 25, pakistan: 10, saudi: 2, iraq: 3, egypt: 15, uae: 2, usa: 2, uk: 2, germany: 2, france: 2, russia: 7, china: 1, israel: 3 },
];

// =============================================================================
// Military Expenditure (% of GDP)
// Sources: SIPRI Military Expenditure Database
// =============================================================================
const militarySpending: MetricDataPoint[] = [
  { year: 1970, iran: 7.5, turkey: 3.5, pakistan: 6, saudi: 8, iraq: 10, egypt: 18, usa: 8, uk: 5, germany: 3.3, france: 4, russia: 14, china: 8, israel: 25 },
  { year: 1980, iran: 5, turkey: 4, pakistan: 5.5, saudi: 14, iraq: 28, egypt: 7, usa: 5.3, uk: 4.7, germany: 3.3, france: 4, russia: 15, china: 5, israel: 23 },
  { year: 1990, iran: 3.5, turkey: 3.5, pakistan: 6, saudi: 14, iraq: 12, egypt: 4, uae: 5, usa: 5.5, uk: 4, germany: 2.8, france: 3.5, russia: 12, china: 2.5, israel: 12 },
  { year: 2000, iran: 3.3, turkey: 3.7, pakistan: 4, saudi: 10.6, iraq: 3, egypt: 2.5, uae: 5, usa: 3, uk: 2.4, germany: 1.5, france: 2.6, russia: 3.5, china: 1.9, israel: 8 },
  { year: 2010, iran: 2.3, turkey: 2, pakistan: 3.4, saudi: 8.6, iraq: 3.5, egypt: 1.9, uae: 5.1, usa: 4.7, uk: 2.5, germany: 1.4, france: 2.3, russia: 3.8, china: 1.9, israel: 6.3 },
  { year: 2020, iran: 2.1, turkey: 1.9, pakistan: 4, saudi: 6.6, iraq: 3.2, egypt: 1.2, uae: 5.6, usa: 3.7, uk: 2.2, germany: 1.4, france: 2.1, russia: 4, china: 1.7, israel: 5.6 },
  { year: 2026, iran: 2.5, turkey: 2.2, pakistan: 3.7, saudi: 7, iraq: 2.8, egypt: 1.3, uae: 5.2, usa: 3.5, uk: 2.5, germany: 2, france: 2.2, russia: 6, china: 1.7, israel: 5.5 },
];

// =============================================================================
// HDI (Human Development Index, scale 0–1)
// Source: UNDP Human Development Reports
// =============================================================================
const hdi: MetricDataPoint[] = [
  { year: 1990, iran: 0.571, turkey: 0.579, pakistan: 0.359, saudi: 0.653, iraq: 0.472, egypt: 0.471, uae: 0.726, usa: 0.860, uk: 0.775, germany: 0.801, france: 0.779, russia: 0.734, china: 0.499, israel: 0.790 },
  { year: 2000, iran: 0.672, turkey: 0.665, pakistan: 0.404, saudi: 0.738, iraq: 0.443, egypt: 0.572, uae: 0.800, usa: 0.885, uk: 0.867, germany: 0.868, france: 0.849, russia: 0.720, china: 0.594, israel: 0.869 },
  { year: 2010, iran: 0.749, turkey: 0.743, pakistan: 0.493, saudi: 0.806, iraq: 0.573, egypt: 0.660, uae: 0.840, usa: 0.914, uk: 0.907, germany: 0.921, france: 0.884, russia: 0.785, china: 0.700, israel: 0.900 },
  { year: 2020, iran: 0.780, turkey: 0.805, pakistan: 0.544, saudi: 0.854, iraq: 0.661, egypt: 0.707, uae: 0.890, usa: 0.926, uk: 0.929, germany: 0.942, france: 0.903, russia: 0.822, china: 0.764, israel: 0.919 },
  { year: 2026, iran: 0.782, turkey: 0.815, pakistan: 0.557, saudi: 0.870, iraq: 0.672, egypt: 0.716, uae: 0.901, usa: 0.930, uk: 0.932, germany: 0.946, france: 0.908, russia: 0.825, china: 0.780, israel: 0.923 },
];

// =============================================================================
// Oil Production (million barrels per day)
// Sources: EIA International Energy Statistics, OPEC Annual Statistical Bulletin
// Iran's production crashed in 1979 revolution, 1980–88 war, 2018 sanctions
// =============================================================================
const oilProduction: MetricDataPoint[] = [
  { year: 1910, iran: 0.01 },
  { year: 1920, iran: 0.03, iraq: 0.01 },
  { year: 1930, iran: 0.12, iraq: 0.03 },
  { year: 1940, iran: 0.2, iraq: 0.06, saudi: 0.01, egypt: 0.03 },
  { year: 1950, iran: 0.66, iraq: 0.14, saudi: 0.55, egypt: 0.04 },
  { year: 1955, iran: 0.33, iraq: 0.69, saudi: 0.97, egypt: 0.05 },
  { year: 1960, iran: 1.07, iraq: 0.97, saudi: 1.31, egypt: 0.06 },
  { year: 1965, iran: 1.91, iraq: 1.31, saudi: 2.21, egypt: 0.07 },
  { year: 1970, iran: 3.83, iraq: 1.55, saudi: 3.80, egypt: 0.33, uae: 0.78, usa: 9.6, russia: 7.0, china: 0.6 },
  { year: 1975, iran: 5.35, iraq: 2.26, saudi: 7.08, egypt: 0.24, uae: 1.66, usa: 8.4, russia: 9.8, china: 1.5, uk: 0.01 },
  { year: 1980, iran: 1.46, iraq: 2.65, saudi: 9.90, egypt: 0.59, uae: 1.71, usa: 8.6, russia: 11.7, china: 2.1, uk: 1.6 },
  { year: 1985, iran: 2.25, iraq: 1.43, saudi: 3.39, egypt: 0.89, uae: 1.19, usa: 8.9, russia: 11.5, china: 2.5, uk: 2.5 },
  { year: 1990, iran: 3.09, iraq: 2.04, saudi: 6.41, egypt: 0.87, uae: 2.12, usa: 7.4, russia: 10.4, china: 2.8, uk: 1.8 },
  { year: 1995, iran: 3.60, iraq: 0.56, saudi: 8.23, egypt: 0.92, uae: 2.28, usa: 6.6, russia: 6.2, china: 3.0, uk: 2.5 },
  { year: 2000, iran: 3.70, iraq: 2.57, saudi: 8.40, egypt: 0.77, uae: 2.41, usa: 5.8, russia: 6.5, china: 3.3, uk: 2.3 },
  { year: 2005, iran: 4.09, iraq: 1.83, saudi: 9.55, egypt: 0.67, uae: 2.54, usa: 5.2, russia: 9.6, china: 3.6, uk: 1.6 },
  { year: 2010, iran: 4.25, iraq: 2.46, saudi: 8.90, egypt: 0.66, uae: 2.85, usa: 5.5, russia: 10.3, china: 4.1, uk: 1.3 },
  { year: 2015, iran: 3.15, iraq: 3.98, saudi: 10.19, egypt: 0.49, uae: 3.47, usa: 9.4, russia: 10.9, china: 4.3, uk: 1.0 },
  { year: 2018, iran: 3.55, iraq: 4.41, saudi: 10.42, egypt: 0.45, uae: 3.01, usa: 10.9, russia: 11.4, china: 3.8, uk: 1.0 },
  { year: 2019, iran: 2.36, iraq: 4.58, saudi: 9.81, egypt: 0.44, uae: 3.05, usa: 12.2, russia: 11.5, china: 3.8, uk: 1.0 },
  { year: 2020, iran: 1.99, iraq: 4.02, saudi: 9.21, egypt: 0.43, uae: 2.79, usa: 11.3, russia: 10.7, china: 3.9, uk: 0.9 },
  { year: 2022, iran: 2.55, iraq: 4.44, saudi: 10.59, egypt: 0.41, uae: 3.07, usa: 11.9, russia: 10.7, china: 4.1, uk: 0.8 },
  { year: 2026, iran: 3.3, iraq: 4.3, saudi: 9.0, egypt: 0.37, uae: 2.9, usa: 13.0, uk: 0.7, russia: 10.5, china: 4.2 },
];

// =============================================================================
// Unemployment Rate (% of total labor force, ILO modeled estimates)
// Sources: World Bank WDI (ILO estimate), national statistical offices
// Note: Real unemployment in Iran and Iraq is widely believed to be higher
// =============================================================================
const unemploymentRate: MetricDataPoint[] = [
  { year: 1990, iran: 11, turkey: 8, pakistan: 4, saudi: 5, iraq: 15, egypt: 9, uae: 2, usa: 5.6, uk: 7, germany: 5, france: 8.5, russia: 5, china: 3, israel: 9 },
  { year: 2000, iran: 14, turkey: 6.5, pakistan: 7.2, saudi: 5.5, iraq: 28, egypt: 9, uae: 2.5, usa: 4, uk: 5.4, germany: 8, france: 10, russia: 10, china: 3.1, israel: 9 },
  { year: 2010, iran: 13.5, turkey: 11.9, pakistan: 5.6, saudi: 5.5, iraq: 15, egypt: 9, uae: 4, usa: 9.6, uk: 7.9, germany: 7, france: 9.3, russia: 7.3, china: 4.2, israel: 6.7 },
  { year: 2020, iran: 10.8, turkey: 13.1, pakistan: 4.6, saudi: 7.7, iraq: 14.2, egypt: 7.9, uae: 3.4, usa: 8.1, uk: 4.5, germany: 3.8, france: 8, russia: 5.8, china: 5.2, israel: 4.3 },
  { year: 2022, iran: 9.6, turkey: 10.5, pakistan: 6.2, saudi: 5.6, iraq: 16.5, egypt: 7.2, uae: 2.9, usa: 3.6, uk: 3.7, germany: 3.1, france: 7.3, russia: 3.9, china: 4.9, israel: 3.8 },
  { year: 2026, iran: 9, turkey: 9, pakistan: 7, saudi: 4.8, iraq: 15, egypt: 7, uae: 2.7, usa: 4, uk: 4, germany: 3.5, france: 7, russia: 3, china: 5, israel: 4 },
];

export const allMetrics: MetricDef[] = [
  {
    id: "gdp_per_capita",
    name: { fa: "تولید ناخالص داخلی سرانه", en: "GDP per Capita (PPP)" },
    unit: { fa: "دلار بین‌المللی ۲۰۱۷", en: "2017 Intl $" },
    data: gdpPerCapita,
  },
  {
    id: "population",
    name: { fa: "جمعیت", en: "Population" },
    unit: { fa: "میلیون نفر", en: "Million" },
    data: population,
  },
  {
    id: "fertility",
    name: { fa: "نرخ باروری", en: "Fertility Rate" },
    unit: { fa: "فرزند به ازای هر زن", en: "Births/Woman" },
    data: fertilityRate,
  },
  {
    id: "life_expectancy",
    name: { fa: "امید به زندگی", en: "Life Expectancy" },
    unit: { fa: "سال", en: "Years" },
    data: lifeExpectancy,
  },
  {
    id: "literacy",
    name: { fa: "نرخ سواد", en: "Literacy Rate" },
    unit: { fa: "درصد بزرگسالان", en: "% Adults 15+" },
    data: literacyRate,
  },
  {
    id: "inflation",
    name: { fa: "نرخ تورم", en: "Inflation Rate" },
    unit: { fa: "درصد سالانه CPI", en: "% Annual CPI" },
    data: inflationRate,
  },
  {
    id: "military",
    name: { fa: "هزینه نظامی", en: "Military Spending" },
    unit: { fa: "درصد از GDP", en: "% of GDP" },
    data: militarySpending,
  },
  {
    id: "hdi",
    name: { fa: "شاخص توسعه انسانی", en: "HDI" },
    unit: { fa: "۰ تا ۱ (UNDP)", en: "0–1 (UNDP)" },
    data: hdi,
  },
  {
    id: "oil",
    name: { fa: "تولید نفت", en: "Oil Production" },
    unit: { fa: "میلیون بشکه/روز", en: "M bbl/day" },
    data: oilProduction,
  },
  {
    id: "unemployment",
    name: { fa: "نرخ بیکاری", en: "Unemployment Rate" },
    unit: { fa: "درصد (ILO)", en: "% (ILO est.)" },
    data: unemploymentRate,
  },
];
