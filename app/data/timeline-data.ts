export type Country = "usa" | "uk" | "germany" | "france" | "russia" | "china" | "world";

export interface LocalizedText {
  fa: string;
  en: string;
}

export interface Leader {
  name: LocalizedText;
  title: LocalizedText;
  startYear: number;
  endYear: number;
  initials: string;
  color: string;
  image?: string;
}

export interface IranEvent {
  title: LocalizedText;
  description?: LocalizedText;
  details?: LocalizedText;
  image?: string;
}

export interface WorldEvent {
  country: Country;
  title: LocalizedText;
  description?: LocalizedText;
  details?: LocalizedText;
  image?: string;
}

export interface YearInfo {
  fa: string;
  en: string;
}

export interface TimelineEntry {
  year: number;
  shamsiYear: string;
  iran?: IranEvent;
  world?: WorldEvent[];
  yearInfo?: YearInfo;
}

const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toFarsiNumber(num: number): string {
  return num
    .toString()
    .split("")
    .map((d) => farsiDigits[parseInt(d)] ?? d)
    .join("");
}

export function gregorianToShamsi(year: number): number {
  return year - 621;
}

export const countryInfo: Record<Country, { flag: string; name: LocalizedText }> = {
  usa: { flag: "🇺🇸", name: { fa: "آمریکا", en: "USA" } },
  uk: { flag: "🇬🇧", name: { fa: "بریتانیا", en: "UK" } },
  germany: { flag: "🇩🇪", name: { fa: "آلمان", en: "Germany" } },
  france: { flag: "🇫🇷", name: { fa: "فرانسه", en: "France" } },
  russia: { flag: "🇷🇺", name: { fa: "روسیه", en: "Russia" } },
  china: { flag: "🇨🇳", name: { fa: "چین", en: "China" } },
  world: { flag: "🌍", name: { fa: "جهان", en: "World" } },
};

// --- Leaders with photos ---
export const iranLeaders: Leader[] = [
  {
    name: { fa: "مظفرالدین شاه", en: "Mozaffar ad-Din Shah" },
    title: { fa: "شاه قاجار", en: "Qajar King" },
    startYear: 1896,
    endYear: 1907,
    initials: "مظ",
    color: "bg-amber-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mozaffar_ad-Din_Shah_Qajar.jpg&width=200",
  },
  {
    name: { fa: "محمدعلی شاه", en: "Mohammad Ali Shah" },
    title: { fa: "شاه قاجار", en: "Qajar King" },
    startYear: 1907,
    endYear: 1909,
    initials: "مع",
    color: "bg-amber-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad_ali_shah.jpg&width=200",
  },
  {
    name: { fa: "احمدشاه قاجار", en: "Ahmad Shah Qajar" },
    title: { fa: "شاه قاجار", en: "Qajar King" },
    startYear: 1909,
    endYear: 1925,
    initials: "اش",
    color: "bg-amber-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Ahmad_Shah_Qajar.jpg&width=200",
  },
  {
    name: { fa: "رضا شاه پهلوی", en: "Reza Shah Pahlavi" },
    title: { fa: "شاه ایران", en: "Shah of Iran" },
    startYear: 1925,
    endYear: 1941,
    initials: "رض",
    color: "bg-yellow-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Reza_Shah_Pahlavi_Official.jpg&width=200",
  },
  {
    name: { fa: "محمدرضا شاه پهلوی", en: "Mohammad Reza Shah" },
    title: { fa: "شاه ایران", en: "Shah of Iran" },
    startYear: 1941,
    endYear: 1979,
    initials: "مر",
    color: "bg-yellow-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad_Reza_Shah_Pahlavi_in_1973.jpg&width=200",
  },
  {
    name: { fa: "روح‌الله خمینی", en: "Ruhollah Khomeini" },
    title: { fa: "رهبر انقلاب", en: "Supreme Leader" },
    startYear: 1979,
    endYear: 1989,
    initials: "خم",
    color: "bg-emerald-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Roollah-Khomeini.jpg&width=200",
  },
  {
    name: { fa: "علی خامنه‌ای", en: "Ali Khamenei" },
    title: { fa: "رهبر", en: "Supreme Leader" },
    startYear: 1989,
    endYear: 2026,
    initials: "خا",
    color: "bg-emerald-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Ali_Khamenei_crop.jpg&width=200",
  },
];

export const iranPresidents: Leader[] = [
  {
    name: { fa: "ابوالحسن بنی‌صدر", en: "Abolhassan Banisadr" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1980,
    endYear: 1981,
    initials: "بص",
    color: "bg-teal-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Abolhassan_Banisadr.jpg&width=200",
  },
  {
    name: { fa: "محمدعلی رجایی", en: "Mohammad-Ali Rajai" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1981,
    endYear: 1981,
    initials: "رج",
    color: "bg-teal-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad-Ali_Rajai.jpg&width=200",
  },
  {
    name: { fa: "علی خامنه‌ای", en: "Ali Khamenei" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1981,
    endYear: 1989,
    initials: "خا",
    color: "bg-teal-500",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Ali_Khamenei_crop.jpg&width=200",
  },
  {
    name: { fa: "اکبر هاشمی رفسنجانی", en: "Akbar Hashemi Rafsanjani" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1989,
    endYear: 1997,
    initials: "رف",
    color: "bg-cyan-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Akbar_Hashemi_Rafsanjani_in_Expediency_Discernment_Council_by_Tasnimnews.jpg&width=200",
  },
  {
    name: { fa: "سید محمد خاتمی", en: "Mohammad Khatami" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1997,
    endYear: 2005,
    initials: "خت",
    color: "bg-sky-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad_Khatami_-_August_26%2C_2003.jpg&width=200",
  },
  {
    name: { fa: "محمود احمدی‌نژاد", en: "Mahmoud Ahmadinejad" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2005,
    endYear: 2013,
    initials: "اح",
    color: "bg-slate-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mahmoud_Ahmadinejad_2009.jpg&width=200",
  },
  {
    name: { fa: "حسن روحانی", en: "Hassan Rouhani" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2013,
    endYear: 2021,
    initials: "رو",
    color: "bg-indigo-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Hassan_Rouhani_re-election_celebration_2.jpg&width=200",
  },
  {
    name: { fa: "ابراهیم رئیسی", en: "Ebrahim Raisi" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2021,
    endYear: 2024,
    initials: "رئ",
    color: "bg-stone-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Ebrahim_Raisi_%2819.05.2024%29_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "مسعود پزشکیان", en: "Masoud Pezeshkian" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2024,
    endYear: 2026,
    initials: "پز",
    color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Masoud_Pezeshkian_%282024%29.jpg&width=200",
  },
];

export const usaLeaders: Leader[] = [
  {
    name: { fa: "ویلیام مک‌کینلی", en: "William McKinley" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1897, endYear: 1901, initials: "WM", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/William_McKinley_by_Courtney_Art_Studio%2C_1896.jpg&width=200",
  },
  {
    name: { fa: "تئودور روزولت", en: "Theodore Roosevelt" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1901, endYear: 1909, initials: "TR", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/President_Roosevelt_-_Pach_Bros.jpg&width=200",
  },
  {
    name: { fa: "ویلیام تافت", en: "William H. Taft" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1909, endYear: 1913, initials: "WT", color: "bg-red-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/William_Howard_Taft_-_Harris_and_Ewing.jpg&width=200",
  },
  {
    name: { fa: "وودرو ویلسون", en: "Woodrow Wilson" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1913, endYear: 1921, initials: "WW", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/President_Woodrow_Wilson_portrait_December_2_1912.jpg&width=200",
  },
  {
    name: { fa: "وارن هاردینگ", en: "Warren G. Harding" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1921, endYear: 1923, initials: "WH", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Warren_G_Harding-Harris_%26_Ewing.jpg&width=200",
  },
  {
    name: { fa: "کالوین کولیج", en: "Calvin Coolidge" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1923, endYear: 1929, initials: "CC", color: "bg-red-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "هربرت هوور", en: "Herbert Hoover" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1929, endYear: 1933, initials: "HH", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/President_Hoover_portrait.jpg&width=200",
  },
  {
    name: { fa: "فرانکلین روزولت", en: "Franklin D. Roosevelt" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1933, endYear: 1945, initials: "FR", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/FDR_1944_Color_Portrait.jpg&width=200",
  },
  {
    name: { fa: "هری ترومن", en: "Harry S. Truman" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1945, endYear: 1953, initials: "HT", color: "bg-blue-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Harry_S._Truman.jpg&width=200",
  },
  {
    name: { fa: "دوایت آیزنهاور", en: "Dwight D. Eisenhower" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1953, endYear: 1961, initials: "DE", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg&width=200",
  },
  {
    name: { fa: "جان اف. کندی", en: "John F. Kennedy" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1961, endYear: 1963, initials: "JK", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg&width=200",
  },
  {
    name: { fa: "لیندون جانسون", en: "Lyndon B. Johnson" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1963, endYear: 1969, initials: "LJ", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/37_Lyndon_Johnson_3x4.jpg&width=200",
  },
  {
    name: { fa: "ریچارد نیکسون", en: "Richard Nixon" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1969, endYear: 1974, initials: "RN", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Richard_Nixon_presidential_portrait_%281%29.jpg&width=200",
  },
  {
    name: { fa: "جرالد فورد", en: "Gerald Ford" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1974, endYear: 1977, initials: "GF", color: "bg-red-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Gerald_Ford_presidential_portrait_%28cropped_2%29.jpg&width=200",
  },
  {
    name: { fa: "جیمی کارتر", en: "Jimmy Carter" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1977, endYear: 1981, initials: "JC", color: "bg-blue-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/JimmyCarterPortrait2.jpg&width=200",
  },
  {
    name: { fa: "رونالد ریگان", en: "Ronald Reagan" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1981, endYear: 1989, initials: "RR", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Official_Portrait_of_President_Reagan_1981.jpg&width=200",
  },
  {
    name: { fa: "جرج بوش پدر", en: "George H.W. Bush" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1989, endYear: 1993, initials: "GB", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/George_H._W._Bush_presidential_portrait_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "بیل کلینتون", en: "Bill Clinton" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1993, endYear: 2001, initials: "BC", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bill_Clinton.jpg&width=200",
  },
  {
    name: { fa: "جرج دبلیو بوش", en: "George W. Bush" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2001, endYear: 2009, initials: "GW", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/George-W-Bush.jpeg&width=200",
  },
  {
    name: { fa: "باراک اوباما", en: "Barack Obama" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2009, endYear: 2017, initials: "BO", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/President_Barack_Obama.jpg&width=200",
  },
  {
    name: { fa: "دونالد ترامپ", en: "Donald Trump" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2017, endYear: 2021, initials: "DT", color: "bg-red-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Donald_Trump_official_portrait.jpg&width=200",
  },
  {
    name: { fa: "جو بایدن", en: "Joe Biden" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2021, endYear: 2025, initials: "JB", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Joe_Biden_presidential_portrait.jpg&width=200",
  },
  {
    name: { fa: "دونالد ترامپ", en: "Donald Trump" },
    title: { fa: "رئیس‌جمهور (دور دوم)", en: "President (2nd term)" },
    startYear: 2025, endYear: 2026, initials: "DT", color: "bg-red-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Donald_Trump_official_portrait.jpg&width=200",
  },
];

export const ukLeaders: Leader[] = [
  {
    name: { fa: "مارکیز سالزبری", en: "Lord Salisbury" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1895, endYear: 1902, initials: "LS", color: "bg-blue-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Lord_Salisbury%2C_photo_by_Bassano.jpg&width=200",
  },
  {
    name: { fa: "آرتور بالفور", en: "Arthur Balfour" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1902, endYear: 1905, initials: "AB", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Arthur_Balfour%2C_photo_portrait_facing_left.jpg&width=200",
  },
  {
    name: { fa: "هربرت آسکوئیت", en: "H.H. Asquith" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1908, endYear: 1916, initials: "HA", color: "bg-amber-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Herbert_Henry_Asquith.jpg&width=200",
  },
  {
    name: { fa: "دیوید لوید جرج", en: "David Lloyd George" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1916, endYear: 1922, initials: "DG", color: "bg-amber-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/David_Lloyd_George.jpg&width=200",
  },
  {
    name: { fa: "نویل چمبرلین", en: "Neville Chamberlain" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1937, endYear: 1940, initials: "NC", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Neville_Chamberlain_Birmingham.jpg&width=200",
  },
  {
    name: { fa: "وینستون چرچیل", en: "Winston Churchill" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1940, endYear: 1945, initials: "WC", color: "bg-blue-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Sir_Winston_Churchill_-_19086236948.jpg&width=200",
  },
  {
    name: { fa: "کلمنت اتلی", en: "Clement Attlee" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1945, endYear: 1951, initials: "CA", color: "bg-rose-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Clement_Attlee.png&width=200",
  },
  {
    name: { fa: "وینستون چرچیل", en: "Winston Churchill" },
    title: { fa: "نخست‌وزیر (دور دوم)", en: "PM (2nd term)" },
    startYear: 1951, endYear: 1955, initials: "WC", color: "bg-blue-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Sir_Winston_Churchill_-_19086236948.jpg&width=200",
  },
  {
    name: { fa: "آنتونی ایدن", en: "Anthony Eden" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1955, endYear: 1957, initials: "AE", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Anthony_Eden_portrait.jpg&width=200",
  },
  {
    name: { fa: "مارگارت تاچر", en: "Margaret Thatcher" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1979, endYear: 1990, initials: "MT", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Margaret_Thatcher_stock_portrait_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "جان میجر", en: "John Major" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1990, endYear: 1997, initials: "JM", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/John_Major_1996.jpg&width=200",
  },
  {
    name: { fa: "تونی بلر", en: "Tony Blair" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1997, endYear: 2007, initials: "TB", color: "bg-rose-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tony_Blair_2010_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "بوریس جانسون", en: "Boris Johnson" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 2019, endYear: 2022, initials: "BJ", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Boris_Johnson_official_portrait_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "کیر استارمر", en: "Keir Starmer" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 2024, endYear: 2026, initials: "KS", color: "bg-rose-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Keir_Starmer_official_portrait%2C_2024_%28cropped%29.jpg&width=200",
  },
];

export const germanyLeaders: Leader[] = [
  {
    name: { fa: "ویلهلم دوم", en: "Kaiser Wilhelm II" },
    title: { fa: "امپراتور", en: "Emperor" },
    startYear: 1888, endYear: 1918, initials: "WII", color: "bg-gray-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg&width=200",
  },
  {
    name: { fa: "فردریش ابرت", en: "Friedrich Ebert" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1919, endYear: 1925, initials: "FE", color: "bg-rose-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bundesarchiv_Bild_102-00015%2C_Friedrich_Ebert.jpg&width=200",
  },
  {
    name: { fa: "آدولف هیتلر", en: "Adolf Hitler" },
    title: { fa: "صدراعظم/فوهرر", en: "Führer" },
    startYear: 1933, endYear: 1945, initials: "AH", color: "bg-gray-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Hitler_portrait_crop.jpg&width=200",
  },
  {
    name: { fa: "کنراد آدناور", en: "Konrad Adenauer" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 1949, endYear: 1963, initials: "KA", color: "bg-gray-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bundesarchiv_B_145_Bild-F078072-0004%2C_Konrad_Adenauer.jpg&width=200",
  },
  {
    name: { fa: "ویلی برانت", en: "Willy Brandt" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 1969, endYear: 1974, initials: "WB", color: "bg-rose-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bundesarchiv_B_145_Bild-F057884-0009%2C_Willy_Brandt.jpg&width=200",
  },
  {
    name: { fa: "هلموت کهل", en: "Helmut Kohl" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 1982, endYear: 1998, initials: "HK", color: "bg-gray-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Helmut_Kohl_%281996%29_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "آنگلا مرکل", en: "Angela Merkel" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 2005, endYear: 2021, initials: "AM", color: "bg-gray-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Angela_Merkel._Tallinn_Digital_Summit.jpg&width=200",
  },
  {
    name: { fa: "اولاف شولتس", en: "Olaf Scholz" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 2021, endYear: 2025, initials: "OS", color: "bg-rose-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Olaf_Scholz_2021_cropped.jpg&width=200",
  },
  {
    name: { fa: "فردریش مرتس", en: "Friedrich Merz" },
    title: { fa: "صدراعظم", en: "Chancellor" },
    startYear: 2025, endYear: 2026, initials: "FM", color: "bg-gray-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/2020-02-14_Friedrich_Merz_%28cropped%29.jpg&width=200",
  },
];

export const franceLeaders: Leader[] = [
  {
    name: { fa: "ژرژ کلمانسو", en: "Georges Clemenceau" },
    title: { fa: "نخست‌وزیر", en: "Prime Minister" },
    startYear: 1917, endYear: 1920, initials: "GC", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Georges_Clemenceau_par_Nadar.jpg&width=200",
  },
  {
    name: { fa: "شارل دوگل", en: "Charles de Gaulle" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1959, endYear: 1969, initials: "CG", color: "bg-blue-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/De_Gaulle-OWI_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "فرانسوا میتران", en: "François Mitterrand" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1981, endYear: 1995, initials: "FM", color: "bg-rose-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Reagan_Mitterrand_1984_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "ژاک شیراک", en: "Jacques Chirac" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 1995, endYear: 2007, initials: "JC", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Jacques_Chirac_%281997%29_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "نیکلا سارکوزی", en: "Nicolas Sarkozy" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2007, endYear: 2012, initials: "NS", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Nicolas_Sarkozy_%282008%29.jpg&width=200",
  },
  {
    name: { fa: "امانوئل ماکرون", en: "Emmanuel Macron" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2017, endYear: 2026, initials: "EM", color: "bg-indigo-600",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Emmanuel_Macron_in_2019.jpg&width=200",
  },
];

export const russiaLeaders: Leader[] = [
  {
    name: { fa: "نیکلای دوم", en: "Nicholas II" },
    title: { fa: "تزار روسیه", en: "Tsar of Russia" },
    startYear: 1894, endYear: 1917, initials: "NII", color: "bg-yellow-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Nicholas_II_of_Russia_painted_by_Earnest_Lipgart.jpg&width=200",
  },
  {
    name: { fa: "ولادیمیر لنین", en: "Vladimir Lenin" },
    title: { fa: "رهبر شوروی", en: "Soviet Leader" },
    startYear: 1917, endYear: 1924, initials: "VL", color: "bg-red-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Lenin_CL_Colour.jpg&width=200",
  },
  {
    name: { fa: "ژوزف استالین", en: "Joseph Stalin" },
    title: { fa: "رهبر شوروی", en: "Soviet Leader" },
    startYear: 1924, endYear: 1953, initials: "JS", color: "bg-red-950",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Stalin_1943.jpg&width=200",
  },
  {
    name: { fa: "نیکیتا خروشچف", en: "Nikita Khrushchev" },
    title: { fa: "رهبر شوروی", en: "Soviet Leader" },
    startYear: 1953, endYear: 1964, initials: "NK", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Nikita_Khrushchev_Colour.jpg&width=200",
  },
  {
    name: { fa: "لئونید برژنف", en: "Leonid Brezhnev" },
    title: { fa: "رهبر شوروی", en: "Soviet Leader" },
    startYear: 1964, endYear: 1982, initials: "LB", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Brezhnev-color.jpg&width=200",
  },
  {
    name: { fa: "میخائیل گورباچف", en: "Mikhail Gorbachev" },
    title: { fa: "رهبر شوروی", en: "Soviet Leader" },
    startYear: 1985, endYear: 1991, initials: "MG", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%28crop%29.jpg&width=200",
  },
  {
    name: { fa: "بوریس یلتسین", en: "Boris Yeltsin" },
    title: { fa: "رئیس‌جمهور روسیه", en: "President of Russia" },
    startYear: 1991, endYear: 1999, initials: "BY", color: "bg-slate-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Boris_Yeltsin-2.jpg&width=200",
  },
  {
    name: { fa: "ولادیمیر پوتین", en: "Vladimir Putin" },
    title: { fa: "رئیس‌جمهور روسیه", en: "President of Russia" },
    startYear: 1999, endYear: 2026, initials: "VP", color: "bg-slate-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Vladimir_Putin_-_2012.jpg&width=200",
  },
];

export const chinaLeaders: Leader[] = [
  {
    name: { fa: "سون یات سن", en: "Sun Yat-sen" },
    title: { fa: "بنیانگذار جمهوری", en: "Founding Father" },
    startYear: 1912, endYear: 1925, initials: "SY", color: "bg-blue-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Sun_Yat-sen_2.jpg&width=200",
  },
  {
    name: { fa: "چیانگ کای‌شک", en: "Chiang Kai-shek" },
    title: { fa: "رهبر جمهوری چین", en: "Leader of ROC" },
    startYear: 1928, endYear: 1949, initials: "CK", color: "bg-blue-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Chiang_Kai-shek%EF%BC%88%E8%94%A3%E4%B8%AD%E6%AD%A3%EF%BC%89.jpg&width=200",
  },
  {
    name: { fa: "مائو زدونگ", en: "Mao Zedong" },
    title: { fa: "رهبر چین", en: "Chairman" },
    startYear: 1949, endYear: 1976, initials: "MZ", color: "bg-red-900",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mao_Zedong_portrait.jpg&width=200",
  },
  {
    name: { fa: "دنگ شیائوپینگ", en: "Deng Xiaoping" },
    title: { fa: "رهبر عالی", en: "Paramount Leader" },
    startYear: 1978, endYear: 1992, initials: "DX", color: "bg-red-800",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Deng_Xiaoping_and_Jimmy_Carter_at_the_arrival_ceremony_for_the_Vice_Premier_of_China._-_NARA_-_183157-restored_%28cropped%29.jpg&width=200",
  },
  {
    name: { fa: "شی جین‌پینگ", en: "Xi Jinping" },
    title: { fa: "رئیس‌جمهور", en: "President" },
    startYear: 2012, endYear: 2026, initials: "XJ", color: "bg-red-700",
    image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Xi_Jinping_2019.jpg&width=200",
  },
];

export function getLeaderForYear(leaders: Leader[], year: number): Leader | undefined {
  return leaders.find((l) => year >= l.startYear && year < l.endYear);
}

// --- Timeline Events ---
export const timelineData: TimelineEntry[] = [
  {
    year: 1900,
    shamsiYear: "۱۲۷۸",
    yearInfo: {
      fa: "آغاز قرن بیستم. ایران تحت حکومت ضعیف قاجار و زیر نفوذ روسیه و بریتانیا. اقتصاد وابسته به کشاورزی و وام‌های خارجی.",
      en: "Dawn of the 20th century. Iran under weak Qajar rule, dominated by Russian and British spheres of influence. Economy dependent on agriculture and foreign loans.",
    },
    iran: {
      title: { fa: "بحران مالی و وام‌های خارجی قاجار", en: "Qajar Financial Crisis & Foreign Loans" },
      description: { fa: "قرض‌های سنگین از روسیه و بریتانیا - اقتصاد فلج", en: "Heavy loans from Russia & Britain cripple the economy" },
      details: {
        fa: "مظفرالدین شاه برای تأمین هزینه‌های سفرهای اروپایی و دربار، وام‌های سنگینی از روسیه و بریتانیا گرفت. در ازای این وام‌ها، امتیازات اقتصادی گسترده‌ای به این دو قدرت واگذار شد. گمرکات ایران عملاً در اختیار بلژیکی‌ها قرار گرفت. این وضعیت منجر به نارضایتی شدید بازاریان و روحانیون شد.",
        en: "Mozaffar ad-Din Shah took massive loans from Russia and Britain to fund his European travels and court expenses. In return, extensive economic concessions were granted to both powers. Iran's customs were effectively controlled by Belgian officials. This situation led to severe discontent among merchants and clergy.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mozaffar_ad-Din_Shah_Qajar.jpg&width=200",
    },
    world: [
      {
        country: "uk",
        title: { fa: "جنگ بوئر دوم در آفریقای جنوبی", en: "Second Boer War in South Africa" },
        description: { fa: "بریتانیا در جنگ استعماری علیه بوئرها", en: "Britain fights colonial war against Boers" },
        details: {
          fa: "امپراتوری بریتانیا در آفریقای جنوبی با مقاومت شدید بوئرها روبرو شد. این جنگ هزینه‌های سنگینی بر خزانه بریتانیا تحمیل کرد و اردوگاه‌های اسارت ایجاد شده از اولین نمونه‌های مدرن بودند.",
          en: "The British Empire faced fierce resistance from the Boers in South Africa. The war imposed heavy costs on the British treasury, and the concentration camps created were among the first modern examples.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Boer_War_Memorial%2C_Canterbury_01.JPG&width=200",
      },
      {
        country: "china",
        title: { fa: "شورش بوکسرها و مداخله خارجی", en: "Boxer Rebellion & Foreign Intervention" },
        description: { fa: "شورش ضد خارجی در چین و اشغال پکن توسط قدرت‌های هشت‌گانه", en: "Anti-foreign uprising in China and occupation of Beijing by Eight-Nation Alliance" },
        details: {
          fa: "شورش بوکسرها (جنبش ضد خارجی و ضد مسیحی) در چین سرکوب شد. ائتلاف هشت کشور (بریتانیا، فرانسه، آلمان، روسیه، آمریکا، ژاپن، ایتالیا و اتریش) پکن را اشغال کردند. سلسله چینگ مجبور به امضای پروتکل بوکسر و پرداخت غرامت سنگین شد که سقوط امپراتوری را تسریع کرد.",
          en: "The Boxer Rebellion (anti-foreign and anti-Christian movement) in China was crushed. An Eight-Nation Alliance (Britain, France, Germany, Russia, USA, Japan, Italy, Austria) occupied Beijing. The Qing Dynasty was forced to sign the Boxer Protocol and pay heavy indemnities, accelerating the empire's decline.",
        },
      },
      {
        country: "germany",
        title: { fa: "آغاز رقابت دریایی آلمان و بریتانیا", en: "German-British Naval Rivalry Begins" },
        description: { fa: "قایزر ویلهلم دوم قانون نیروی دریایی را تصویب کرد", en: "Kaiser Wilhelm II passes Second Naval Law" },
        details: {
          fa: "آلمان قایزری تحت فرمان ویلهلم دوم قانون دوم نیروی دریایی را تصویب کرد و ساخت ناوگان عظیمی را برای رقابت با بریتانیا آغاز نمود. این رقابت تسلیحاتی دریایی یکی از عوامل اصلی تنش‌های اروپایی بود که در نهایت به جنگ جهانی اول منجر شد.",
          en: "Kaiser Wilhelm II's Germany passed the Second Naval Law, beginning construction of a massive fleet to rival Britain. This naval arms race became one of the main causes of European tensions that ultimately led to World War I.",
        },
      },
      {
        country: "france",
        title: { fa: "نمایشگاه جهانی پاریس ۱۹۰۰", en: "Paris World's Fair 1900" },
        description: { fa: "بزرگترین نمایشگاه جهانی تاریخ با ۵۰ میلیون بازدیدکننده", en: "Largest world's fair in history with 50 million visitors" },
        details: {
          fa: "نمایشگاه جهانی ۱۹۰۰ در پاریس با بیش از ۵۰ میلیون بازدیدکننده برگزار شد. فرانسه قدرت صنعتی و فرهنگی خود را به نمایش گذاشت. مترو پاریس در همین سال افتتاح شد. این نمایشگاه نماد «عصر زیبا» (Belle Époque) فرانسه بود.",
          en: "The 1900 World's Fair in Paris attracted over 50 million visitors. France showcased its industrial and cultural power. The Paris Metro opened the same year. The fair was a symbol of France's 'Belle Époque' era.",
        },
      },
    ],
  },
  {
    year: 1901,
    shamsiYear: "۱۲۸۰",
    iran: {
      title: { fa: "اعتراضات و پیامدهای جنبش تنباکو - وام‌های خارجی", en: "Concession Protests & Tobacco Movement Aftermath" },
      description: { fa: "مظفرالدین شاه وام‌های سنگین از روسیه گرفت و وابستگی مالی تشدید شد", en: "Mozaffar ad-Din Shah takes heavy foreign loans from Russia" },
      details: {
        fa: "در پی جنبش تنباکو و لغو امتیاز تالبوت، دولت قاجار مجبور به پرداخت غرامت سنگین به بریتانیا شد و برای تأمین این غرامت و هزینه‌های دربار، وام‌های جدیدی از روسیه گرفت. روسیه در ازای این وام‌ها نفوذ سیاسی و اقتصادی خود را در ایران افزایش داد. بریگاد قزاق ایران تحت فرماندهی افسران روسی عمل می‌کرد و عملاً ابزار نفوذ روسیه در ایران بود.",
        en: "Following the Tobacco Movement and the cancellation of the Talbot concession, the Qajar government was forced to pay heavy compensation to Britain. To fund this and court expenses, new loans were taken from Russia. In exchange, Russia increased its political and economic influence in Iran. The Persian Cossack Brigade operated under Russian officers and was effectively an instrument of Russian influence in Iran.",
      },
    },
  },
  {
    year: 1902,
    shamsiYear: "۱۲۸۱",
    iran: {
      title: { fa: "بحران فزاینده بدهی خارجی", en: "Growing Foreign Debt Crisis" },
      description: { fa: "نفوذ روزافزون روسیه و کنترل گمرکات ایران توسط بلژیکی‌ها", en: "Russia gains more influence, Belgian customs officials control Iranian customs" },
      details: {
        fa: "بحران بدهی‌های خارجی ایران تشدید شد. مأموران بلژیکی تحت نظارت نوز بلژیکی کنترل کامل گمرکات ایران را در دست داشتند و درآمدهای گمرکی مستقیماً صرف بازپرداخت وام‌ها می‌شد. روسیه با اعطای وام‌های جدید نفوذ خود را گسترش داد و از ایران به عنوان حائلی در برابر بریتانیا استفاده می‌کرد. اقتصاد کشور در رکود بود و نارضایتی مردم رو به افزایش بود.",
        en: "Iran's foreign debt crisis deepened. Belgian officials under Joseph Naus controlled Iran's customs completely, with customs revenues going directly to loan repayments. Russia expanded its influence through new loans and used Iran as a buffer against Britain. The country's economy was in recession and public discontent was growing.",
      },
    },
  },
  {
    year: 1903,
    shamsiYear: "۱۲۸۲",
    iran: {
      title: { fa: "امتیاز نفت دارسی", en: "D'Arcy Oil Concession" },
      description: { fa: "امتیاز اکتشاف نفت به ویلیام ناکس دارسی بریتانیایی واگذار شد", en: "Oil exploration concession granted to William Knox D'Arcy" },
      details: {
        fa: "مظفرالدین شاه امتیاز اکتشاف و استخراج نفت در سراسر ایران (به جز پنج ولایت شمالی که در حوزه نفوذ روسیه بود) را به مدت ۶۰ سال به ویلیام ناکس دارسی بریتانیایی واگذار کرد. بر اساس این امتیاز، ایران تنها ۱۶ درصد از سود خالص را دریافت می‌کرد. این امتیاز سرآغاز صنعت نفت ایران و یکی از فاجعه‌بارترین قراردادهای تاریخ ایران بود که تا دهه‌ها منبع بهره‌برداری بیگانگان از منابع ملی باقی ماند.",
        en: "Mozaffar ad-Din Shah granted William Knox D'Arcy a 60-year concession to explore and extract oil throughout Iran (except five northern provinces in Russia's sphere of influence). Under this concession, Iran received only 16% of net profits. This concession marked the beginning of Iran's oil industry and was one of the most disastrous agreements in Iranian history, remaining a source of foreign exploitation of national resources for decades.",
      },
    },
  },
  {
    year: 1904,
    shamsiYear: "۱۲۸۳",
    iran: {
      title: { fa: "رشد ناآرامی سیاسی و انجمن‌های سری", en: "Political Unrest & Secret Societies Form" },
      description: { fa: "انجمن‌های سری خواستار اصلاحات شدند - روحانیون به مشروطه‌خواهان پیوستند", en: "Secret societies demand reform, religious scholars join constitutionalists" },
      details: {
        fa: "ناآرامی سیاسی در ایران رو به افزایش بود. انجمن‌های سری متعددی در تهران و شهرهای بزرگ تشکیل شدند که خواستار اصلاحات سیاسی و محدود کردن قدرت استبدادی شاه بودند. روشنفکران تحصیل‌کرده در اروپا، بازاریان و بخشی از علمای دینی به تدریج متحد شدند. روحانیون برجسته‌ای مانند سید محمد طباطبایی و سید عبدالله بهبهانی نقش رهبری در جنبش اصلاح‌طلبی بر عهده گرفتند.",
        en: "Political unrest was growing in Iran. Numerous secret societies formed in Tehran and major cities demanding political reform and limits on the Shah's despotic power. European-educated intellectuals, merchants, and some religious scholars gradually united. Prominent clergy such as Seyyed Mohammad Tabatabaei and Seyyed Abdollah Behbahani took leadership roles in the reform movement.",
      },
    },
  },
  {
    year: 1905,
    shamsiYear: "۱۲۸۴",
    yearInfo: {
      fa: "سال انقلاب‌ها. در ایران جنبش مشروطه آغاز شد و در روسیه انقلاب ۱۹۰۵. موج آزادی‌خواهی در آسیا و اروپا.",
      en: "Year of revolutions. Constitutional movement begins in Iran, 1905 Revolution in Russia. Wave of liberalism across Asia and Europe.",
    },
    iran: {
      title: { fa: "آغاز جنبش مشروطه‌خواهی", en: "Constitutional Movement Begins" },
      description: { fa: "اعتراض بازاریان و روحانیون علیه استبداد قاجار و نفوذ بیگانه", en: "Merchants and clergy protest Qajar despotism and foreign influence" },
      details: {
        fa: "بست‌نشینی بازاریان در حرم حضرت عبدالعظیم و سفارت بریتانیا. مردم خواستار عدالتخانه و محدود کردن قدرت شاه شدند. عین‌الدوله صدراعظم مستبد عزل شد. این جنبش تحت تأثیر انقلاب ۱۹۰۵ روسیه و اندیشه‌های مشروطه‌خواهی اروپا بود.",
        en: "Merchants took sanctuary (bast) at the shrine of Shah Abdol-Azim and the British Embassy. People demanded a house of justice and limits on royal power. The despotic PM Ain al-Dawleh was dismissed. This movement was influenced by the 1905 Russian Revolution and European constitutionalism.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Majles1.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "انقلاب ۱۹۰۵ روسیه - یکشنبه خونین", en: "1905 Russian Revolution - Bloody Sunday" },
        description: { fa: "کشتار معترضان در سنت پترزبورگ - بحران تزاریسم", en: "Massacre of protesters in St. Petersburg - Tsarism in crisis" },
        details: {
          fa: "در ژانویه ۱۹۰۵، سربازان تزار به سوی مردم بی‌سلاح که به سمت کاخ زمستانی راهپیمایی می‌کردند آتش گشودند. صدها نفر کشته شدند. این واقعه موج اعتصابات و شورش‌های گسترده را در سراسر امپراتوری روسیه به راه انداخت.",
          en: "In January 1905, Tsar's soldiers fired on unarmed civilians marching towards the Winter Palace. Hundreds were killed. This triggered a wave of strikes and uprisings across the Russian Empire.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bloody_Sunday_Massacre.jpg&width=200",
      },
      {
        country: "france",
        title: { fa: "جدایی کلیسا و دولت در فرانسه", en: "Separation of Church and State in France" },
        description: { fa: "قانون لائیسیته فرانسه - جدایی کامل دین از حکومت", en: "French secularism law - Complete separation of religion from government" },
        details: {
          fa: "فرانسه قانون جدایی کلیسا و دولت را در ۱۹۰۵ تصویب کرد. این قانون پایه لائیسیته (سکولاریسم فرانسوی) شد و تمام ارتباط رسمی بین دولت و نهادهای مذهبی را قطع کرد. کلیسای کاتولیک شدیداً مخالفت کرد اما این اصل تا امروز یکی از ارکان جمهوری فرانسه باقی مانده است.",
          en: "France passed the law on the Separation of Churches and State in 1905. This law became the foundation of laïcité (French secularism) and severed all official ties between the state and religious institutions. The Catholic Church fiercely opposed it, but this principle remains a pillar of the French Republic to this day.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران مراکش - رقابت فرانسه و آلمان", en: "First Moroccan Crisis - Franco-German Rivalry" },
        description: { fa: "قایزر ویلهلم دوم در طنجه علیه نفوذ فرانسه موضع گرفت", en: "Kaiser Wilhelm II challenges French influence in Tangier" },
        details: {
          fa: "قایزر ویلهلم دوم با سفر به طنجه مراکش، استقلال مراکش را در برابر نفوذ فرانسه حمایت کرد. این بحران اروپا را به آستانه جنگ برد و در نهایت در کنفرانس الجزیره ۱۹۰۶ حل شد. این رویداد اتحاد فرانسه و بریتانیا را تقویت و انزوای آلمان را تشدید کرد.",
          en: "Kaiser Wilhelm II visited Tangier, Morocco, supporting Moroccan independence against French influence. This crisis brought Europe to the brink of war and was resolved at the 1906 Algeciras Conference. The event strengthened the Franco-British alliance and deepened Germany's isolation.",
        },
      },
    ],
  },
  {
    year: 1906,
    shamsiYear: "۱۲۸۵",
    yearInfo: {
      fa: "سال تاریخ‌ساز ایران. فرمان مشروطه صادر و اولین مجلس شورای ملی تأسیس شد. ایران دومین کشور آسیایی (پس از عثمانی) با قانون اساسی.",
      en: "Landmark year for Iran. Constitutional decree issued and first National Assembly established. Iran becomes second Asian country (after Ottoman Empire) with a constitution.",
    },
    iran: {
      title: { fa: "انقلاب مشروطه - تأسیس مجلس", en: "Constitutional Revolution - Parliament Founded" },
      description: { fa: "مظفرالدین شاه فرمان مشروطه را امضا کرد - تأسیس اولین مجلس شورای ملی", en: "Mozaffar ad-Din Shah signs constitutional decree - First National Parliament" },
      details: {
        fa: "در ۱۴ مرداد ۱۲۸۵، مظفرالدین شاه فرمان مشروطیت را امضا کرد. مجلس شورای ملی با ۱۵۶ نماینده افتتاح شد. قانون اساسی (متمم قانون اساسی) حقوق ملت و محدودیت‌های قدرت شاه را تعیین کرد. این انقلاب نخستین تلاش ایرانیان برای دموکراسی مدرن بود و تأثیر عمیقی بر تاریخ سیاسی ایران گذاشت.",
        en: "On August 5, 1906, Mozaffar ad-Din Shah signed the constitutional decree. The National Assembly opened with 156 representatives. The Supplementary Fundamental Laws established citizens' rights and limits on royal power. This was Iranians' first attempt at modern democracy and profoundly impacted Iran's political history.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Majles1.jpg&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "زلزله ویرانگر سان‌فرانسیسکو", en: "Great San Francisco Earthquake" },
        description: { fa: "۳۰۰۰ کشته و تخریب ۸۰٪ شهر", en: "3,000 dead, 80% of city destroyed" },
        details: {
          fa: "زلزله ۷.۹ ریشتری و آتش‌سوزی ناشی از آن ۸۰ درصد سان‌فرانسیسکو را ویران کرد. بیش از ۳۰۰۰ نفر کشته و ۲۲۵ تا ۳۰۰ هزار نفر بی‌خانمان شدند. خسارات به ارزش امروز بیش از ۱۰ میلیارد دلار بود.",
          en: "A 7.9-magnitude earthquake and ensuing fires destroyed 80% of San Francisco. Over 3,000 died and 225,000-300,000 were left homeless. Damage exceeded $10 billion in today's value.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/San_Francisco_1906_earthquake_fire.jpg&width=200",
      },
      {
        country: "russia",
        title: { fa: "دومای اول روسیه و اصلاحات استولیپین", en: "First Russian Duma & Stolypin Reforms" },
        description: { fa: "اولین پارلمان روسیه تشکیل شد اما تزار آن را منحل کرد", en: "Russia's first parliament formed but Tsar dissolves it" },
        details: {
          fa: "تزار نیکلای دوم تحت فشار انقلاب ۱۹۰۵ مجبور به تشکیل دوما (پارلمان) شد. اما دومای اول تنها ۷۳ روز دوام آورد و تزار آن را منحل کرد. پیوتر استولیپین نخست‌وزیر اصلاحات ارضی را آغاز کرد تا از انقلاب جلوگیری کند، اما اصلاحات با ترور او در ۱۹۱۱ متوقف شد.",
          en: "Tsar Nicholas II, under pressure from the 1905 Revolution, was forced to create the Duma (parliament). But the First Duma lasted only 73 days before the Tsar dissolved it. PM Pyotr Stolypin launched land reforms to prevent revolution, but reforms stalled with his assassination in 1911.",
        },
      },
      {
        country: "uk",
        title: { fa: "پیروزی بزرگ حزب لیبرال بریتانیا", en: "Liberal Party Landslide in Britain" },
        description: { fa: "آغاز اصلاحات اجتماعی در بریتانیا", en: "Beginning of social reforms in Britain" },
        details: {
          fa: "حزب لیبرال با پیروزی بزرگ انتخاباتی به قدرت رسید و دوره اصلاحات اجتماعی گسترده‌ای را آغاز کرد. قوانین مربوط به غذای رایگان مدارس، حقوق کارگران و بیمه بیکاری در سال‌های بعد تصویب شد. این اصلاحات پایه دولت رفاه بریتانیا را بنا نهاد.",
          en: "The Liberal Party won a landslide election victory and began an era of sweeping social reforms. Laws on free school meals, workers' rights, and unemployment insurance followed in subsequent years. These reforms laid the foundation for Britain's welfare state.",
        },
      },
    ],
  },
  {
    year: 1907,
    shamsiYear: "۱۲۸۶",
    iran: {
      title: { fa: "قرارداد ۱۹۰۷ - تقسیم ایران بین روسیه و بریتانیا", en: "Anglo-Russian Convention — Iran Divided" },
      description: { fa: "روسیه و بریتانیا ایران را بدون رضایت ایران به مناطق نفوذ تقسیم کردند", en: "Russia and Britain divide Iran into spheres of influence without Iranian consent" },
      details: {
        fa: "بریتانیا و روسیه قرارداد ۱۹۰۷ را امضا کردند که ایران را بدون اطلاع و رضایت دولت ایران به سه منطقه تقسیم می‌کرد: شمال ایران منطقه نفوذ روسیه، جنوب شرقی منطقه نفوذ بریتانیا و مرکز ایران منطقه بی‌طرف. این قرارداد ضربه سنگینی به حاکمیت ملی ایران وارد کرد و خشم عمومی شدیدی برانگیخت. دو قدرت بزرگ که قبلاً رقیب بودند، برای مقابله با آلمان متحد شدند و ایران قربانی این اتحاد شد.",
        en: "Britain and Russia signed the 1907 Convention, dividing Iran without the knowledge or consent of the Iranian government into three zones: northern Iran as Russia's sphere of influence, southeastern Iran as Britain's sphere, and central Iran as a neutral zone. This agreement dealt a heavy blow to Iran's national sovereignty and provoked intense public anger. The two great powers, previously rivals, united against Germany, and Iran became the victim of this alliance.",
      },
    },
  },
  {
    year: 1908,
    shamsiYear: "۱۲۸۷",
    yearInfo: {
      fa: "کشف نفت تاریخ ایران و خاورمیانه را برای همیشه تغییر داد. محمدعلی شاه با بمباران مجلس علیه مشروطه کودتا کرد.",
      en: "Oil discovery forever changes Iran and the Middle East. Mohammad Ali Shah stages coup against constitution by bombarding parliament.",
    },
    iran: {
      title: { fa: "کشف نفت و بمباران مجلس", en: "Oil Discovered & Parliament Bombarded" },
      description: { fa: "اولین نفت خاورمیانه در مسجد سلیمان - محمدعلی شاه مجلس را به توپ بست", en: "First Middle East oil at Masjed Soleyman - Shah bombards parliament" },
      details: {
        fa: "در ۲۶ مه ۱۹۰۸ ویلیام ناکس دارسی نفت را در مسجد سلیمان کشف کرد. این کشف منجر به تأسیس شرکت نفت ایران-انگلیس (BP امروزی) شد و سرنوشت ایران و خاورمیانه را تغییر داد. همزمان محمدعلی شاه با کمک بریگاد قزاق، مجلس را به توپ بست و مشروطه‌خواهان را سرکوب کرد.",
        en: "On May 26, 1908, William Knox D'Arcy discovered oil at Masjed Soleyman. This led to the founding of the Anglo-Persian Oil Company (today's BP) and forever changed Iran and the Middle East. Simultaneously, Mohammad Ali Shah, with the Cossack Brigade, bombarded parliament and crushed the constitutionalists.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bombardment_of_Majlis_1908.jpg&width=200",
    },
    world: [
      {
        country: "uk",
        title: { fa: "تأسیس شرکت نفت ایران-انگلیس", en: "Anglo-Persian Oil Company Founded" },
        description: { fa: "بریتانیا کنترل نفت ایران را به دست گرفت", en: "Britain seizes control of Iran's oil" },
        details: {
          fa: "شرکت نفت ایران-انگلیس (APOC) تأسیس شد و عملاً کنترل منابع نفتی ایران را در اختیار بریتانیا قرار داد. این شرکت بعداً به BP تبدیل شد. سهم ایران از درآمد نفت ناچیز بود و این موضوع دهه‌ها بعد به ملی شدن نفت منجر شد.",
          en: "The Anglo-Persian Oil Company (APOC) was established, effectively giving Britain control over Iran's oil resources. This company later became BP. Iran's share of oil revenue was minimal, which decades later led to the oil nationalization movement.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران دوم بوسنی - اتریش-آلمان علیه روسیه", en: "Bosnian Crisis - Austro-German Alliance vs Russia" },
        description: { fa: "اتریش-مجارستان بوسنی را ضمیمه کرد - تنش با روسیه", en: "Austria-Hungary annexes Bosnia - Tensions with Russia" },
        details: {
          fa: "اتریش-مجارستان با حمایت آلمان بوسنی-هرزگوین را رسماً ضمیمه کرد. این اقدام خشم صربستان و روسیه را برانگیخت. آلمان از متحد خود اتریش حمایت کامل کرد و روسیه مجبور به عقب‌نشینی شد. این بحران زمینه‌ساز جنگ جهانی اول شد.",
          en: "Austria-Hungary, backed by Germany, formally annexed Bosnia-Herzegovina. This angered Serbia and Russia. Germany fully backed its Austrian ally, forcing Russia to back down. This crisis laid the groundwork for World War I.",
        },
      },
      {
        country: "usa",
        title: { fa: "فورد مدل تی - انقلاب خودروسازی", en: "Ford Model T - Automobile Revolution" },
        description: { fa: "هنری فورد مدل تی را معرفی کرد و خودرو را در دسترس عموم قرار داد", en: "Henry Ford introduces Model T, making cars accessible to the public" },
        details: {
          fa: "هنری فورد مدل تی را معرفی کرد که اولین خودرو مقرون‌به‌صرفه برای طبقه متوسط بود. خط مونتاژ فورد روش تولید صنعتی را متحول کرد و قیمت خودرو را از ۸۵۰ به ۲۶۰ دلار کاهش داد. تا ۱۹۲۷ بیش از ۱۵ میلیون دستگاه فروخته شد.",
          en: "Henry Ford introduced the Model T, the first affordable car for the middle class. Ford's assembly line revolutionized industrial production, reducing the car's price from $850 to $260. Over 15 million units were sold by 1927.",
        },
      },
    ],
  },
  {
    year: 1909,
    shamsiYear: "۱۲۸۸",
    iran: {
      title: { fa: "خلع محمدعلی شاه - تاجگذاری احمدشاه", en: "Mohammad Ali Shah Deposed - Ahmad Shah Crowned" },
      description: { fa: "مشروطه‌خواهان تهران را فتح کردند - احمدشاه ۱۲ ساله به سلطنت رسید", en: "Constitutionalists conquer Tehran - 12-year-old Ahmad Shah crowned" },
      details: {
        fa: "پس از مقاومت مسلحانه مشروطه‌خواهان در تبریز و گیلان، نیروهای ستارخان و باقرخان به همراه مجاهدان بختیاری تهران را فتح کردند. محمدعلی شاه به سفارت روسیه پناه برد و خلع شد. پسر ۱۲ ساله‌اش احمدشاه با نیابت عضدالملک به سلطنت رسید. مجلس دوم تشکیل شد اما ایران در بی‌ثباتی سیاسی و مالی فرو رفت.",
        en: "After armed resistance by constitutionalists in Tabriz and Gilan, forces of Sattar Khan and Baqer Khan along with Bakhtiari warriors conquered Tehran. Mohammad Ali Shah took refuge in the Russian embassy and was deposed. His 12-year-old son Ahmad Shah was crowned with Azod al-Molk as regent. The second parliament was formed but Iran sank into political and financial instability.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "تأسیس NAACP در آمریکا", en: "NAACP Founded in USA" },
        description: { fa: "انجمن ملی پیشرفت رنگین‌پوستان تأسیس شد", en: "National Association for the Advancement of Colored People established" },
        details: {
          fa: "NAACP در ۱۲ فوریه ۱۹۰۹ در نیویورک تأسیس شد. این سازمان برای مبارزه با تبعیض نژادی و دفاع از حقوق مدنی آفریقایی-آمریکایی‌ها شکل گرفت و نقش مهمی در جنبش حقوق مدنی ایفا کرد.",
          en: "The NAACP was founded on February 12, 1909 in New York City. The organization was formed to fight racial discrimination and defend the civil rights of African Americans, playing a crucial role in the civil rights movement.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحران بودجه بریتانیا - بودجه مردمی لوید جرج", en: "UK People's Budget Crisis - Lloyd George" },
        description: { fa: "بودجه مالیاتی لوید جرج بحران سیاسی در بریتانیا ایجاد کرد", en: "Lloyd George's tax budget creates political crisis in Britain" },
        details: {
          fa: "دیوید لوید جرج وزیر دارایی بریتانیا بودجه‌ای ارائه داد که مالیات بر ثروتمندان و زمین‌داران را افزایش می‌داد. مجلس اعیان بودجه را رد کرد و بحران قانون اساسی ایجاد شد که در نهایت به محدود شدن قدرت مجلس اعیان در ۱۹۱۱ منجر شد.",
          en: "David Lloyd George, Britain's Chancellor, introduced a budget increasing taxes on the wealthy and landowners. The House of Lords rejected the budget, creating a constitutional crisis that eventually led to limiting the Lords' power in 1911.",
        },
      },
      {
        country: "france",
        title: { fa: "لوئی بلریو از کانال مانش پرواز کرد", en: "Louis Blériot Flies Across English Channel" },
        description: { fa: "اولین پرواز موفق بر فراز کانال مانش", en: "First successful flight across the English Channel" },
        details: {
          fa: "لوئی بلریو خلبان فرانسوی در ۲۵ ژوئیه ۱۹۰۹ اولین پرواز موفق بر فراز کانال مانش را انجام داد. این دستاورد فرانسه را در صدر فناوری هوانوردی قرار داد و نشان داد که دریا دیگر مانع تهاجم نیست. بریتانیا به ناامنی جدید جزیره‌ای خود پی برد.",
          en: "French aviator Louis Blériot made the first successful flight across the English Channel on July 25, 1909. This achievement placed France at the forefront of aviation technology and demonstrated that the sea was no longer a barrier to invasion. Britain realized its new island vulnerability.",
        },
      },
    ],
  },
  {
    year: 1910,
    shamsiYear: "۱۲۸۹",
    iran: {
      title: { fa: "افتتاح مجلس دوم", en: "Second Majles Opens" },
      description: { fa: "مجلس دوم افتتاح شد اما کشمکش جناح‌های سیاسی و بی‌ثباتی ادامه داشت", en: "Second Majles opens but political factions struggle, country remains unstable" },
      details: {
        fa: "مجلس دوم شورای ملی پس از فتح تهران و بازگشت مشروطه افتتاح شد. اما اختلافات شدید بین جناح‌های سیاسی، به ویژه بین دموکرات‌ها و اعتدالیون، مجلس را فلج کرده بود. کشور با بحران مالی شدید، ناامنی در ولایات و نفوذ روزافزون روسیه و بریتانیا دست و پنجه نرم می‌کرد. دولت مرکزی ضعیف بود و توانایی کنترل مناطق مختلف را نداشت.",
        en: "The Second National Assembly opened after the conquest of Tehran and restoration of the constitution. But severe disagreements between political factions, especially between Democrats and Moderates, paralyzed parliament. The country grappled with severe financial crisis, insecurity in provinces, and growing Russian and British influence. The central government was weak and unable to control various regions.",
      },
    },
  },
  {
    year: 1911,
    shamsiYear: "۱۲۹۰",
    iran: {
      title: { fa: "ماجرای مورگان شوستر", en: "Morgan Shuster Affair" },
      description: { fa: "مستشار مالی آمریکایی تحت فشار روسیه اخراج شد - مجلس منحل شد", en: "American financial advisor expelled under Russian pressure — Majles dissolved" },
      details: {
        fa: "مورگان شوستر، مستشار مالی آمریکایی که برای اصلاح نظام مالی ایران استخدام شده بود، با اقداماتش خشم روسیه را برانگیخت. روسیه با ارسال اولتیماتوم خواستار اخراج شوستر شد و نیروهای خود را به سمت تهران حرکت داد. مجلس اولتیماتوم را رد کرد اما کابینه تسلیم شد و شوستر اخراج و مجلس دوم منحل شد. شوستر کتاب «خفقان ایران» را نوشت که شرح مداخلات خارجی در ایران بود.",
        en: "Morgan Shuster, an American financial advisor hired to reform Iran's financial system, provoked Russia's anger with his actions. Russia sent an ultimatum demanding Shuster's expulsion and moved troops toward Tehran. The Majles rejected the ultimatum but the cabinet capitulated — Shuster was expelled and the Second Majles dissolved. Shuster wrote 'The Strangling of Persia,' describing foreign interference in Iran.",
      },
    },
  },
  {
    year: 1912,
    shamsiYear: "۱۲۹۱",
    iran: {
      title: { fa: "خلأ سیاسی و افزایش درگیری‌های قبیله‌ای", en: "Political Vacuum & Increasing Tribal Conflicts" },
      description: { fa: "پس از انحلال مجلس، درگیری‌های قبیله‌ای افزایش یافت و دولت مرکزی ضعیف شد", en: "After Majles dissolution, tribal conflicts increase, central government weakens" },
      details: {
        fa: "پس از انحلال مجلس دوم، ایران در خلأ سیاسی شدیدی فرو رفت. دولت مرکزی بدون مجلس و بدون مشروعیت مردمی بسیار ضعیف بود. درگیری‌های قبیله‌ای در مناطق مختلف کشور شدت گرفت و راهزنی و ناامنی عمومی شد. روسیه در شمال و بریتانیا در جنوب عملاً حاکمیت خود را اعمال می‌کردند و ایران به کشوری نیمه‌مستعمره تبدیل شده بود.",
        en: "After the dissolution of the Second Majles, Iran fell into a severe political vacuum. The central government, without parliament and popular legitimacy, was extremely weak. Tribal conflicts intensified across the country and banditry became widespread. Russia in the north and Britain in the south effectively exercised their own sovereignty, and Iran had become a semi-colonial state.",
      },
    },
  },
  {
    year: 1913,
    shamsiYear: "۱۲۹۲",
    iran: {
      title: { fa: "مجلس سوم و آغاز درآمد نفت بریتانیا", en: "Third Majles & British Oil Revenues Begin" },
      description: { fa: "مجلس سوم به طور کوتاه تشکیل شد - درآمدهای نفتی به بریتانیا سرازیر شد", en: "Third Majles convenes briefly — oil revenues flow to Britain" },
      details: {
        fa: "مجلس سوم شورای ملی برای مدت کوتاهی تشکیل شد اما قادر به ایجاد ثبات نبود. شرکت نفت ایران و انگلیس (APOC) تولید نفت را افزایش داده بود و درآمدهای عظیمی از نفت ایران به بریتانیا سرازیر می‌شد، در حالی که سهم ایران ناچیز بود. بی‌ثباتی سیاسی ادامه داشت و ایران در آستانه جنگ جهانی اول در وضعیت آشفته‌ای قرار داشت.",
        en: "The Third Majles convened briefly but was unable to create stability. The Anglo-Persian Oil Company (APOC) had increased oil production and massive oil revenues flowed to Britain while Iran's share was negligible. Political instability continued and Iran was in a chaotic state on the eve of World War I.",
      },
    },
  },

  {
    year: 1914,
    shamsiYear: "۱۲۹۳",
    yearInfo: {
      fa: "جنگ جهانی اول آغاز شد. ایران اعلام بی‌طرفی کرد اما میدان جنگ قدرت‌های خارجی شد. اقتصاد ایران ویران و قحطی شروع شد.",
      en: "World War I begins. Iran declares neutrality but becomes a battlefield for foreign powers. Economy devastated, famine begins.",
    },
    iran: {
      title: { fa: "جنگ جهانی اول - اشغال ایران", en: "WWI - Occupation of Iran" },
      description: { fa: "علی‌رغم بی‌طرفی، روسیه، بریتانیا و عثمانی ایران را اشغال کردند", en: "Despite neutrality, Russia, Britain & Ottomans occupy Iran" },
      details: {
        fa: "ایران بی‌طرفی خود را اعلام کرد اما به دلیل موقعیت استراتژیک، نیروهای روس، بریتانیایی و عثمانی وارد خاک ایران شدند. آذربایجان، کرمانشاه و جنوب ایران اشغال شد. راه‌های تجاری مسدود شد و تولید کشاورزی سقوط کرد. این وضعیت زمینه‌ساز قحطی بزرگ ۱۹۱۷-۱۹۱۹ شد که جان میلیون‌ها ایرانی را گرفت.",
        en: "Iran declared neutrality but due to its strategic location, Russian, British, and Ottoman forces entered Iranian territory. Azerbaijan, Kermanshah, and southern Iran were occupied. Trade routes were blocked and agricultural production collapsed. This set the stage for the Great Famine of 1917-1919 that killed millions.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "آغاز جنگ جهانی اول", en: "World War I Begins" },
        description: { fa: "ترور آرشیدوک فرانتس فردیناند - ۳۷ میلیون تلفات", en: "Assassination of Archduke Franz Ferdinand - 37 million casualties" },
        details: {
          fa: "ترور آرشیدوک فرانتس فردیناند اتریش در سارایوو جرقه جنگ را زد. اتحادهای نظامی اروپایی دومینووار فعال شدند. آلمان، اتریش و عثمانی در برابر بریتانیا، فرانسه و روسیه. این جنگ ۳۷ میلیون تلفات داشت و نقشه سیاسی جهان را بازنویسی کرد.",
          en: "The assassination of Austria's Archduke Franz Ferdinand in Sarajevo sparked the war. European military alliances activated like dominos. Germany, Austria-Hungary and the Ottomans vs. Britain, France and Russia. The war caused 37 million casualties and rewrote the world's political map.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/WWImontage.jpg&width=200",
      },
      {
        country: "germany",
        title: { fa: "آلمان وارد جنگ شد - طرح شلیفن", en: "Germany Enters War - Schlieffen Plan" },
        description: { fa: "حمله به بلژیک و فرانسه - جنگ خندق آغاز شد", en: "Invasion of Belgium & France - Trench warfare begins" },
        details: {
          fa: "طرح شلیفن که قرار بود فرانسه را در ۶ هفته شکست دهد، با مقاومت بلژیک و فرانسه شکست خورد. جنگ به بن‌بست جنگ خندق‌ها تبدیل شد که در آن میلیون‌ها سرباز در خطوط مقدم کشته شدند. تنها در نبرد سوم در ۱۹۱۴، آلمان ۸۰۰,۰۰۰ تلفات داد.",
          en: "The Schlieffen Plan, designed to defeat France in 6 weeks, failed due to Belgian and French resistance. The war devolved into a trench warfare stalemate along the Western Front, where millions perished for mere yards of territory. Germany suffered 800,000 casualties by the end of 1914 alone, setting the stage for four years of unprecedented slaughter.",
        },
      },
      {
        country: "france",
        title: { fa: "فرانسه در خط مقدم جنگ", en: "France on the Front Line" },
        description: { fa: "نبرد مارن - جنگ خندق‌ها در خاک فرانسه", en: "Battle of the Marne - Trench warfare on French soil" },
        details: {
          fa: "نبرد مارن در سپتامبر ۱۹۱۴ پاریس را از سقوط نجات داد و پیشروی آلمان را متوقف کرد. تا پایان جنگ، ۱.۴ میلیون سرباز فرانسوی کشته شدند و شمال شرقی فرانسه به ویرانه تبدیل شد. جنگ خندق‌ها خاک فرانسه را به قتلگاه نسل جوان اروپا تبدیل کرد.",
          en: "The Battle of the Marne in September 1914 saved Paris from capture and halted the German advance. By war's end, 1.4 million French soldiers were killed and northeastern France was devastated beyond recognition. The trenches turned French soil into the killing ground of an entire European generation.",
        },
      },
      {
        country: "russia",
        title: { fa: "روسیه تزاری وارد جنگ شد", en: "Tsarist Russia Enters the War" },
        description: { fa: "بسیج ۱۲ میلیون سرباز - شکست‌های سنگین در جبهه شرق", en: "12 million soldiers mobilized - Heavy defeats on Eastern Front" },
        details: {
          fa: "روسیه ۱۲ میلیون سرباز بسیج کرد اما در نبرد تاننبرگ شکست سنگینی خورد و ۳۰,۰۰۰ کشته و ۹۰,۰۰۰ اسیر داد. اقتصاد جنگی فروپاشید، قحطی گسترش یافت و نارضایتی عمومی زمینه‌ساز انقلاب ۱۹۱۷ شد. جنگ جهانی اول مستقیماً به سقوط سلسله رومانوف و ظهور بلشویک‌ها انجامید.",
          en: "Russia mobilized 12 million troops but suffered a catastrophic defeat at Tannenberg, losing 30,000 killed and 90,000 captured. The war economy collapsed, famine spread, and public discontent set the stage for the 1917 Revolution. World War I directly led to the fall of the Romanov dynasty and the rise of the Bolsheviks.",
        },
      },
    ],
  },
  {
    year: 1917,
    shamsiYear: "۱۲۹۶",
    yearInfo: {
      fa: "سال انقلاب‌ها و فاجعه. انقلاب روسیه نظم جهانی را تغییر داد. در ایران قحطی بزرگ میلیون‌ها قربانی گرفت.",
      en: "Year of revolutions and tragedy. Russian Revolution changes world order. In Iran, the Great Famine kills millions.",
    },
    iran: {
      title: { fa: "قحطی بزرگ ایران - ژنوساید خاموش", en: "Great Famine of Iran - Silent Genocide" },
      description: { fa: "مرگ ۲ تا ۱۰ میلیون ایرانی - نیمی از جمعیت شمال ایران", en: "2-10 million Iranians perish - Half of northern Iran's population" },
      details: {
        fa: "قحطی بزرگ ایران (۱۲۹۶-۱۲۹۸) یکی از بزرگترین فجایع تاریخ بشر بود. نیروهای بریتانیایی و روسی غلات و مواد غذایی ایران را برای مصارف نظامی مصادره کردند. راه‌های تجاری مسدود شد. بین ۲ تا ۱۰ میلیون نفر (از جمعیت ۱۸-۲۰ میلیونی) جان باختند. برخی مورخان این قحطی را ژنوساید خاموش می‌نامند.",
        en: "The Great Famine of Iran (1917-1919) was one of the greatest catastrophes in human history. British and Russian forces requisitioned Iran's grain and food supplies for military use. Trade routes were blocked. Between 2-10 million people (out of 18-20 million population) perished. Some historians call this famine a silent genocide.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "انقلاب اکتبر روسیه - سقوط تزار", en: "Russian October Revolution - Fall of Tsar" },
        description: { fa: "بلشویک‌ها به قدرت رسیدند - تولد شوروی", en: "Bolsheviks seize power - Birth of Soviet Union" },
        details: {
          fa: "لنین و بلشویک‌ها کاخ زمستانی را تصرف کردند. تزار نیکلاس دوم و خانواده‌اش اعدام شدند. اولین دولت کمونیستی جهان تأسیس شد. این انقلاب تأثیر عمیقی بر جنبش‌های چپ در سراسر جهان از جمله ایران گذاشت.",
          en: "Lenin and the Bolsheviks stormed the Winter Palace. Tsar Nicholas II and his family were executed. The world's first communist state was established. This revolution profoundly influenced leftist movements worldwide, including in Iran.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Stormningen_av_vinterpalatset.jpg&width=200",
      },
      {
        country: "usa",
        title: { fa: "ورود آمریکا به جنگ جهانی", en: "USA Enters World War I" },
        description: { fa: "۲ میلیون سرباز آمریکایی به اروپا اعزام شدند", en: "2 million American soldiers sent to Europe" },
        details: {
          fa: "تلگرام زیمرمن که آلمان از مکزیک خواست به آمریکا حمله کند و جنگ زیردریایی نامحدود آلمان، آمریکا را به جنگ کشاند. ۲ میلیون سرباز آمریکایی به اروپا اعزام شدند و توازن قوا را به نفع متفقین تغییر دادند. ورود آمریکا پایان انزواگرایی و آغاز نقش جهانی این کشور بود.",
          en: "The Zimmermann Telegram, in which Germany urged Mexico to attack the US, and Germany's unrestricted submarine warfare drew America into the war. Two million American troops tipped the balance decisively in favor of the Allies. America's entry marked the end of isolationism and the beginning of its role as a global power.",
        },
      },
      {
        country: "uk",
        title: { fa: "اعلامیه بالفور - وعده وطن یهودی", en: "Balfour Declaration - Promise of Jewish Homeland" },
        description: { fa: "بریتانیا وعده ایجاد وطن ملی یهودی در فلسطین داد", en: "Britain promises a Jewish national home in Palestine" },
        details: {
          fa: "لرد بالفور وزیر خارجه بریتانیا در نامه‌ای به لرد روچیلد اعلام کرد بریتانیا از ایجاد «وطن ملی برای مردم یهود» در فلسطین حمایت می‌کند. این اعلامیه پایه حقوقی مهاجرت یهودیان به فلسطین شد و یکی از ریشه‌های اصلی بحران خاورمیانه تا امروز باقی مانده است.",
          en: "British Foreign Secretary Lord Balfour declared in a letter to Lord Rothschild that Britain favored establishing a 'national home for the Jewish people' in Palestine. This declaration became the legal basis for Jewish immigration to Palestine and remains one of the root causes of the Middle East crisis to this day.",
        },
      },
    ],
  },
  {
    year: 1918,
    shamsiYear: "۱۲۹۷",
    iran: {
      title: { fa: "ادامه قحطی بزرگ ایران", en: "Great Famine of Iran Continues" },
      description: { fa: "قحطی ناشی از جنگ جهانی اول - مرگ میلیون‌ها ایرانی", en: "WWI-caused famine - Millions of Iranians perish" },
      details: {
        fa: "قحطی بزرگ ایران (۱۲۹۶-۱۲۹۸) که عمدتاً ناشی از اشغال نظامی و غارت منابع غذایی توسط بریتانیا، روسیه و عثمانی بود، به اوج رسید. تخمین زده می‌شود ۲ تا ۱۰ میلیون نفر (تا نیمی از جمعیت ایران) در اثر گرسنگی و بیماری جان باختند. این فاجعه یکی از بدترین بلایای انسانی قرن بیستم بود.",
        en: "The Great Famine of Iran (1917-1919), largely caused by military occupation and plundering of food resources by Britain, Russia, and the Ottomans, reached its peak. An estimated 2 to 10 million people (up to half of Iran's population) died from starvation and disease. This catastrophe was one of the worst humanitarian disasters of the 20th century.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "پایان جنگ جهانی اول", en: "End of World War I" },
        description: { fa: "فروپاشی امپراتوری‌های عثمانی، آلمان، روسیه و اتریش-مجارستان", en: "Collapse of Ottoman, German, Russian & Austro-Hungarian empires" },
        details: {
          fa: "جنگ جهانی اول در ۱۱ نوامبر ۱۹۱۸ با آتش‌بس پایان یافت. بیش از ۱۷ میلیون نفر کشته شدند. چهار امپراتوری بزرگ (عثمانی، آلمان، روسیه و اتریش-مجارستان) فروپاشید و نقشه جهان برای همیشه تغییر کرد. خاورمیانه مدرن از ویرانه‌های عثمانی شکل گرفت.",
          en: "World War I ended on November 11, 1918 with the armistice. Over 17 million people were killed. Four great empires (Ottoman, German, Russian, and Austro-Hungarian) collapsed and the world map changed forever. The modern Middle East was shaped from the ruins of the Ottoman Empire.",
        },
      },
      {
        country: "russia",
        title: { fa: "جنگ داخلی روسیه - اعدام تزار", en: "Russian Civil War - Tsar Executed" },
        description: { fa: "بلشویک‌ها تزار نیکلای دوم و خانواده‌اش را اعدام کردند", en: "Bolsheviks execute Tsar Nicholas II and his family" },
        details: {
          fa: "تزار نیکلای دوم و تمام خانواده‌اش در ۱۷ ژوئیه ۱۹۱۸ در یکاترینبورگ توسط بلشویک‌ها اعدام شدند. جنگ داخلی روسیه بین ارتش سرخ و سفید شدت گرفت. بلشویک‌ها با پیمان برست-لیتوفسک از جنگ جهانی خارج شده بودند.",
          en: "Tsar Nicholas II and his entire family were executed by the Bolsheviks on July 17, 1918 in Yekaterinburg. The Russian Civil War between the Red and White armies intensified. The Bolsheviks had exited WWI through the Treaty of Brest-Litovsk.",
        },
      },
      {
        country: "germany",
        title: { fa: "شکست آلمان و انقلاب نوامبر", en: "German Defeat & November Revolution" },
        description: { fa: "قایزر ویلهلم دوم تبعید شد - جمهوری وایمار تأسیس شد", en: "Kaiser Wilhelm II exiled - Weimar Republic established" },
        details: {
          fa: "ارتش آلمان در جبهه غربی شکست خورد و ملوانان در کیل شورش کردند. قایزر ویلهلم دوم به هلند تبعید شد و جمهوری وایمار اعلام شد. آلمان آتش‌بس ۱۱ نوامبر را پذیرفت. افسانه «خنجر از پشت» (که ارتش شکست نخورد بلکه خیانت شد) بعدها توسط نازی‌ها استفاده شد.",
          en: "The German army was defeated on the Western Front and sailors mutinied in Kiel. Kaiser Wilhelm II was exiled to the Netherlands and the Weimar Republic was proclaimed. Germany accepted the November 11 armistice. The 'stab in the back' myth (that the army was betrayed, not defeated) was later exploited by the Nazis.",
        },
      },
      {
        country: "uk",
        title: { fa: "حق رأی زنان بریتانیایی", en: "British Women Win Right to Vote" },
        description: { fa: "زنان بالای ۳۰ سال برای اولین بار حق رأی گرفتند", en: "Women over 30 gain the right to vote for the first time" },
        details: {
          fa: "قانون نمایندگی مردم ۱۹۱۸ برای اولین بار به زنان بالای ۳۰ سال حق رأی داد. این دستاورد نتیجه مبارزات طولانی جنبش سافرجت بود. جنگ جهانی اول و مشارکت گسترده زنان در کارخانه‌ها و بیمارستان‌ها نقش مهمی در تغییر نگرش جامعه داشت.",
          en: "The Representation of the People Act 1918 gave women over 30 the right to vote for the first time. This achievement was the result of the long suffragette struggle. WWI and women's extensive participation in factories and hospitals played a key role in changing societal attitudes.",
        },
      },
    ],
  },
  {
    year: 1919,
    shamsiYear: "۱۲۹۸",
    iran: {
      title: { fa: "قرارداد ۱۹۱۹ وثوق‌الدوله", en: "1919 Anglo-Persian Agreement" },
      description: { fa: "وثوق‌الدوله قراردادی امضا کرد که ایران را تحت‌الحمایه بریتانیا می‌کرد", en: "Vosuq od-Dowleh signs agreement making Iran a British protectorate" },
      details: {
        fa: "وثوق‌الدوله نخست‌وزیر ایران قرارداد ۱۹۱۹ را با بریتانیا امضا کرد که عملاً استقلال ایران را از بین می‌برد. طبق این قرارداد مستشاران انگلیسی بر ارتش و مالیه ایران نظارت می‌کردند. مخالفت گسترده داخلی و بین‌المللی (به‌ویژه آمریکا و شوروی) مانع اجرای کامل قرارداد شد. وثوق‌الدوله متهم به دریافت رشوه شد.",
        en: "Vosuq od-Dowleh, Iran's Prime Minister, signed the 1919 agreement with Britain that effectively eliminated Iran's independence. Under this agreement, British advisors would oversee Iran's military and finances. Widespread domestic and international opposition (especially from the US and Soviet Union) prevented full implementation. Vosuq od-Dowleh was accused of accepting bribes.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "پیمان ورسای - کنفرانس صلح پاریس", en: "Treaty of Versailles - Paris Peace Conference" },
        description: { fa: "پیمان صلح جنگ جهانی اول - تحقیر آلمان", en: "WWI peace treaty - Humiliation of Germany" },
        details: {
          fa: "پیمان ورسای در ۲۸ ژوئن ۱۹۱۹ امضا شد. آلمان مجبور به پذیرش مسئولیت جنگ، پرداخت غرامت سنگین و از دست دادن سرزمین‌ها شد. این پیمان تحقیرآمیز بذر نارضایتی را کاشت که در نهایت به ظهور هیتلر و جنگ جهانی دوم منجر شد. جامعه ملل نیز تأسیس شد.",
          en: "The Treaty of Versailles was signed on June 28, 1919. Germany was forced to accept war guilt, pay heavy reparations, and lose territories. This humiliating treaty planted seeds of resentment that eventually led to Hitler's rise and WWII. The League of Nations was also established.",
        },
      },
      {
        country: "uk",
        title: { fa: "کشتار آمریتسار در هند", en: "Amritsar Massacre in India" },
        description: { fa: "ارتش بریتانیا صدها غیرنظامی هندی را کشت", en: "British army kills hundreds of Indian civilians" },
        details: {
          fa: "در ۱۳ آوریل ۱۹۱۹ ژنرال دایر به سربازان دستور آتش به سوی جمعیت غیرمسلح در جلیان‌واله باغ آمریتسار داد. صدها نفر کشته و بیش از هزار نفر زخمی شدند. این کشتار جنبش استقلال هند را تقویت کرد و گاندی را به مبارزه جدی‌تر کشاند.",
          en: "On April 13, 1919, General Dyer ordered soldiers to fire on an unarmed crowd at Jallianwala Bagh in Amritsar. Hundreds were killed and over a thousand wounded. This massacre strengthened the Indian independence movement and drew Gandhi into more serious activism.",
        },
      },
      {
        country: "germany",
        title: { fa: "جمهوری وایمار و پیمان ورسای", en: "Weimar Republic & Treaty of Versailles" },
        description: { fa: "آلمان مجبور به پذیرش پیمان تحقیرآمیز ورسای شد", en: "Germany forced to accept humiliating Treaty of Versailles" },
        details: {
          fa: "جمهوری وایمار در بحران متولد شد. آلمان مجبور به پذیرش پیمان ورسای شد که مسئولیت جنگ، غرامت ۳۳ میلیارد دلاری و از دست دادن ۱۳ درصد خاک آلمان را تحمیل می‌کرد. شورش‌های کمونیستی (اسپارتاکیست‌ها) سرکوب شدند. نارضایتی از ورسای زمینه‌ساز ظهور نازیسم شد.",
          en: "The Weimar Republic was born in crisis. Germany was forced to accept the Versailles Treaty, which imposed war guilt, $33 billion in reparations, and loss of 13% of German territory. Communist uprisings (Spartacists) were crushed. Resentment over Versailles set the stage for the rise of Nazism.",
        },
      },
    ],
  },
  {
    year: 1920,
    shamsiYear: "۱۲۹۹",
    iran: {
      title: { fa: "جنبش جنگل - میرزا کوچک‌خان", en: "Jungle Movement - Mirza Kuchik Khan" },
      description: { fa: "جمهوری شوروی گیلان تشکیل شد - جنبش ضد استعماری در شمال ایران", en: "Soviet Republic of Gilan formed - Anti-colonial movement in northern Iran" },
      details: {
        fa: "میرزا کوچک‌خان جنگلی رهبر جنبش جنگل در گیلان بود که علیه نفوذ بریتانیا و روسیه مبارزه می‌کرد. در ژوئن ۱۹۲۰ با حمایت بلشویک‌ها جمهوری شوروی سوسیالیستی گیلان تشکیل شد. اختلاف بین کوچک‌خان و کمونیست‌ها در نهایت به شکست جنبش منجر شد. کوچک‌خان در ۱۹۲۱ در کوه‌های تالش از سرما جان باخت.",
        en: "Mirza Kuchik Khan Jangali led the Jungle Movement in Gilan, fighting against British and Russian influence. In June 1920, with Bolshevik support, the Persian Socialist Soviet Republic of Gilan was formed. Disagreements between Kuchik Khan and communists eventually led to the movement's defeat. Kuchik Khan died of frostbite in the Talesh mountains in 1921.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "تأسیس جامعه ملل", en: "League of Nations Founded" },
        description: { fa: "اولین سازمان بین‌المللی برای حفظ صلح جهانی", en: "First international organization for maintaining world peace" },
        details: {
          fa: "جامعه ملل در ۱۰ ژانویه ۱۹۲۰ تأسیس شد. این اولین سازمان بین‌المللی بود که هدفش حفظ صلح و جلوگیری از جنگ بود. با وجود عضویت نداشتن آمریکا، ۴۲ کشور عضو شدند. جامعه ملل در نهایت در جلوگیری از جنگ جهانی دوم ناکام ماند.",
          en: "The League of Nations was founded on January 10, 1920. It was the first international organization aimed at maintaining peace and preventing war. Despite the US not joining, 42 countries became members. The League ultimately failed to prevent World War II.",
        },
      },
      {
        country: "usa",
        title: { fa: "ممنوعیت مشروبات الکلی در آمریکا", en: "Prohibition Begins in USA" },
        description: { fa: "اصلاحیه هجدهم قانون اساسی - ممنوعیت تولید و فروش الکل", en: "18th Amendment - Ban on manufacture and sale of alcohol" },
        details: {
          fa: "اصلاحیه هجدهم قانون اساسی آمریکا از ۱۷ ژانویه ۱۹۲۰ اجرایی شد و تولید، فروش و حمل مشروبات الکلی ممنوع شد. این قانون منجر به رشد قاچاق، مافیا و جرایم سازمان‌یافته شد. ممنوعیت تا ۱۹۳۳ ادامه یافت.",
          en: "The 18th Amendment to the US Constitution took effect on January 17, 1920, banning the manufacture, sale, and transportation of alcoholic beverages. This law led to the growth of bootlegging, mafia, and organized crime. Prohibition lasted until 1933.",
        },
      },
      {
        country: "russia",
        title: { fa: "جنگ داخلی روسیه و کمونیسم جنگی", en: "Russian Civil War & War Communism" },
        description: { fa: "بلشویک‌ها ارتش سفید را شکست دادند - قحطی میلیون‌ها قربانی گرفت", en: "Bolsheviks defeat White Army - Famine kills millions" },
        details: {
          fa: "جنگ داخلی روسیه با پیروزی ارتش سرخ بر نیروهای سفید به پایان نزدیک شد. سیاست «کمونیسم جنگی» لنین شامل مصادره محصولات کشاورزی و ملی‌سازی صنایع بود. قحطی ناشی از جنگ و سیاست‌های اقتصادی جان ۵ تا ۱۰ میلیون نفر را گرفت.",
          en: "The Russian Civil War was nearing its end with the Red Army's victory over White forces. Lenin's 'War Communism' policy included confiscation of agricultural products and nationalization of industries. Famine caused by war and economic policies killed 5 to 10 million people.",
        },
      },
    ],
  },

  {
    year: 1921,
    shamsiYear: "۱۲۹۹",
    yearInfo: {
      fa: "کودتای سوم اسفند ایران را وارد دوران جدیدی کرد. رضاخان قدرت نظامی را به دست گرفت و مسیر پایان قاجار هموار شد.",
      en: "The 1921 coup d'état ushered Iran into a new era. Reza Khan seized military power, paving the way for the end of the Qajar dynasty.",
    },
    iran: {
      title: { fa: "کودتای سوم اسفند ۱۲۹۹", en: "1921 Persian Coup d'état" },
      description: { fa: "رضاخان با ۳۰۰۰ قزاق تهران را تصرف کرد - حمایت بریتانیا", en: "Reza Khan seizes Tehran with 3,000 Cossacks - British backing" },
      details: {
        fa: "رضاخان میرپنج با ۳۰۰۰ نیروی بریگاد قزاق از قزوین به سمت تهران حرکت کرد و بدون مقاومت جدی تهران را تصرف کرد. سید ضیاءالدین طباطبایی نخست‌وزیر شد اما رضاخان قدرت واقعی را در دست داشت. نقش بریتانیا در این کودتا مورد بحث مورخان است. ژنرال آیرونساید بریتانیایی نقش کلیدی در سازماندهی داشت.",
        en: "Reza Khan marched from Qazvin to Tehran with 3,000 Cossack Brigade forces, seizing the capital without serious resistance. Seyyed Zia al-Din Tabatabaei became PM but Reza Khan held real power. Britain's role in the coup is debated by historians. British General Ironside played a key organizing role.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Reza_Shah_Pahlavi_Official.jpg&width=200",
    },
    world: [
      {
        country: "uk",
        title: { fa: "تأسیس ایرلند آزاد - جنگ استقلال", en: "Irish Free State - War of Independence" },
        description: { fa: "تقسیم ایرلند - آغاز جنگ داخلی", en: "Partition of Ireland - Civil war begins" },
        details: {
          fa: "پیمان‌نامه انگلیسی-ایرلندی ایرلند را به ۶ شهرستان شمالی (ایرلند شمالی تحت حاکمیت بریتانیا) و ۲۶ شهرستان جنوبی (دولت آزاد ایرلند) تقسیم کرد. مایکل کالینز پیمان را امضا کرد اما در جنگ داخلی ناشی از آن کشته شد. این تقسیم‌بندی تا یک قرن بعد منشأ خشونت و بحران ایرلند شمالی باقی ماند.",
          en: "The Anglo-Irish Treaty partitioned Ireland into 6 northern counties (Northern Ireland under British rule) and 26 southern counties (Irish Free State). Michael Collins signed the treaty but was killed in the ensuing civil war. This partition remained a source of violence and the Northern Ireland Troubles for nearly a century.",
        },
      },
      {
        country: "world",
        title: { fa: "تأسیس حزب کمونیست چین", en: "Chinese Communist Party Founded" },
        description: { fa: "مائو و ۱۲ نماینده حزب را تأسیس کردند", en: "Mao and 12 delegates found the party" },
        details: {
          fa: "۱۳ نماینده از جمله مائو زدونگ در جلسه‌ای مخفی در شانگهای حزب کمونیست چین را تأسیس کردند. این حزب با الهام از انقلاب روسیه و حمایت کمینترن تشکیل شد. تأسیس حزب آغاز مسیر سیاسی مائو بود که سرانجام به بزرگترین انقلاب کمونیستی تاریخ در ۱۹۴۹ منجر شد.",
          en: "Thirteen delegates including Mao Zedong founded the Chinese Communist Party at a secret meeting in Shanghai. Inspired by the Russian Revolution and supported by the Comintern, the party began as a small radical group. Its founding marked the beginning of Mao's political career, which would ultimately lead to the largest communist revolution in history in 1949.",
        },
      },
      {
        country: "russia",
        title: { fa: "سیاست اقتصادی نوین لنین (نپ)", en: "Lenin's New Economic Policy (NEP)" },
        description: { fa: "لنین سرمایه‌داری محدود را برای نجات اقتصاد شوروی پذیرفت", en: "Lenin accepts limited capitalism to save Soviet economy" },
        details: {
          fa: "لنین پس از شکست کمونیسم جنگی و قحطی گسترده، سیاست اقتصادی نوین (نپ) را اعلام کرد. این سیاست تجارت خصوصی محدود و فروش آزاد محصولات کشاورزی را مجاز می‌کرد. نپ اقتصاد شوروی را تا حدی احیا کرد اما استالین در ۱۹۲۸ آن را لغو و اقتصاد برنامه‌ریزی‌شده را جایگزین کرد.",
          en: "Lenin, after the failure of War Communism and widespread famine, announced the New Economic Policy (NEP). This policy allowed limited private trade and free sale of agricultural products. NEP partially revived the Soviet economy, but Stalin abolished it in 1928 and replaced it with a planned economy.",
        },
      },
    ],
  },
  {
    year: 1922,
    shamsiYear: "۱۳۰۱",
    iran: {
      title: { fa: "تحکیم قدرت نظامی رضاخان", en: "Reza Khan Consolidates Military Power" },
      description: { fa: "شکست شورش‌های قبیله‌ای و متمرکز کردن فرماندهی ارتش", en: "Defeats tribal rebellions and centralizes army command" },
      details: {
        fa: "رضاخان به عنوان فرمانده کل قوا و وزیر جنگ، قدرت نظامی خود را تحکیم کرد. شورش‌های قبیله‌ای در مناطق مختلف کشور از جمله کردستان، لرستان و خوزستان را سرکوب کرد. ارتش متمرکز و مدرنی تشکیل داد و فرماندهی تمام نیروها را در دست گرفت. این اقدامات زمینه‌ساز قدرت‌گیری بیشتر رضاخان و در نهایت تغییر سلسله شد.",
        en: "Reza Khan, as Commander-in-Chief and War Minister, consolidated his military power. He suppressed tribal rebellions in various regions including Kurdistan, Lorestan, and Khuzestan. He formed a centralized modern army and took command of all forces. These actions laid the groundwork for Reza Khan's further rise to power and the eventual change of dynasty.",
      },
    },
  },
  {
    year: 1923,
    shamsiYear: "۱۳۰۲",
    iran: {
      title: { fa: "نخست‌وزیری رضاخان - خروج احمدشاه", en: "Reza Khan Becomes PM — Ahmad Shah Departs" },
      description: { fa: "رضاخان نخست‌وزیر شد و احمدشاه به اروپا رفت و دیگر بازنگشت", en: "Reza Khan becomes Prime Minister, Ahmad Shah leaves for Europe never to return" },
      details: {
        fa: "رضاخان در آبان ۱۳۰۲ به نخست‌وزیری رسید و قدرت اجرایی کامل را در دست گرفت. احمدشاه قاجار که عملاً قدرتی نداشت، به بهانه معالجه به اروپا رفت و هرگز به ایران بازنگشت. رضاخان با کنترل ارتش و دولت، عملاً حاکم مطلق ایران شد. سلطنت قاجار در آستانه پایان بود و رضاخان مسیر رسیدن به تاج و تخت را هموار می‌کرد.",
        en: "Reza Khan became Prime Minister in October 1923, taking full executive power. Ahmad Shah Qajar, who had virtually no power, left for Europe under the pretext of medical treatment and never returned to Iran. Reza Khan, controlling both the army and government, became Iran's de facto absolute ruler. The Qajar dynasty was nearing its end as Reza Khan paved his way to the throne.",
      },
    },
  },
  {
    year: 1924,
    shamsiYear: "۱۳۰۳",
    iran: {
      title: { fa: "بحث جمهوری یا سلطنت", en: "Republic vs. Monarchy Debate" },
      description: { fa: "رضاخان ابتدا خواستار جمهوری شد اما مسیر خود را تغییر داد", en: "Reza Khan initially pushes for republic then changes course" },
      details: {
        fa: "پس از لغو خلافت عثمانی توسط آتاتورک و اعلام جمهوری ترکیه، رضاخان نیز ایده تبدیل ایران به جمهوری را مطرح کرد. اما مخالفت شدید روحانیون، به ویژه مدرس، و بخشی از مردم که نگران تکرار تجربه ترکیه و حذف دین از سیاست بودند، رضاخان را وادار به عقب‌نشینی کرد. او تصمیم گرفت به جای جمهوری، سلطنت را از قاجار گرفته و خود شاه شود.",
        en: "After Atatürk abolished the Ottoman Caliphate and declared the Republic of Turkey, Reza Khan proposed turning Iran into a republic. But fierce opposition from clergy, especially Modarres, and segments of the public who feared a repeat of Turkey's secularization, forced Reza Khan to retreat. He decided instead of establishing a republic, to take the monarchy from the Qajars and become Shah himself.",
      },
    },
  },
  {
    year: 1925,
    shamsiYear: "۱۳۰۴",
    iran: {
      title: { fa: "تأسیس سلسله پهلوی", en: "Pahlavi Dynasty Founded" },
      description: { fa: "مجلس احمدشاه را خلع و رضاخان را شاه کرد", en: "Parliament deposes Ahmad Shah, crowns Reza Khan" },
      details: {
        fa: "مجلس مؤسسان با ۲۵۷ رأی موافق و ۳ رأی مخالف (مصدق، مدرس، تقی‌زاده) سلطنت قاجار را برانداخت و رضاخان را به عنوان رضا شاه پهلوی بر تخت نشاند. مصدق و مدرس به این تغییر اعتراض کردند. رضا شاه برنامه مدرن‌سازی گسترده‌ای شامل ساخت راه‌آهن، دانشگاه تهران و اصلاحات قضایی را آغاز کرد.",
        en: "The Constituent Assembly voted 257-3 (Mosaddegh, Modarres, Taqizadeh dissented) to abolish the Qajar dynasty and crown Reza Khan as Reza Shah Pahlavi. Mosaddegh and Modarres protested. Reza Shah launched an extensive modernization program including the Trans-Iranian Railway, Tehran University, and judicial reforms.",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "هیندنبورگ رئیس‌جمهور آلمان", en: "Hindenburg Elected President" },
        description: { fa: "جمهوری وایمار در بحران اقتصادی عمیق", en: "Weimar Republic in deep economic crisis" },
        details: {
          fa: "پاول فون هیندنبورگ، قهرمان جنگ جهانی اول، در سن ۷۷ سالگی رئیس‌جمهور آلمان شد. جمهوری وایمار هنوز از تورم فوق‌العاده ۱۹۲۳ بهبود نیافته بود و بی‌ثباتی سیاسی شدید حاکم بود. انتخاب هیندنبورگ راه را برای انتصاب هیتلر به صدراعظمی در ۱۹۳۳ هموار کرد.",
          en: "Paul von Hindenburg, a WWI hero, was elected president of Germany at age 77. The Weimar Republic was still reeling from the hyperinflation crisis of 1923 and plagued by severe political instability. Hindenburg's election ultimately paved the way for his fateful appointment of Hitler as Chancellor in 1933.",
        },
      },
      {
        country: "world",
        title: { fa: "عهدنامه لوکارنو - صلح موقت اروپا", en: "Locarno Treaties - Temporary European Peace" },
        description: { fa: "تلاش برای تثبیت مرزهای اروپا پس از جنگ اول", en: "Attempt to stabilize European borders after WWI" },
        details: {
          fa: "آلمان مرزهای غربی خود با فرانسه و بلژیک را پذیرفت و «روح لوکارنو» موجی از خوش‌بینی در اروپا ایجاد کرد. آلمان در ۱۹۲۶ به جامعه ملل پیوست و به نظر می‌رسید صلح پایدار ممکن است. اما این خوش‌بینی کوتاه‌مدت بود و با بحران اقتصادی ۱۹۲۹ و ظهور نازیسم فروپاشید.",
          en: "Germany accepted its western borders with France and Belgium, and the 'Spirit of Locarno' created a wave of optimism across Europe. Germany joined the League of Nations in 1926 and lasting peace seemed possible. But this optimism was short-lived, collapsing with the 1929 economic crash and the rise of Nazism.",
        },
      },
      {
        country: "russia",
        title: { fa: "مرگ لنین و قدرت‌گیری استالین", en: "Lenin's Death & Stalin's Rise to Power" },
        description: { fa: "استالین تروتسکی را کنار زد و رهبری شوروی را در دست گرفت", en: "Stalin sidelines Trotsky and takes control of USSR" },
        details: {
          fa: "لنین در ژانویه ۱۹۲۴ درگذشت و مبارزه قدرت بین استالین و تروتسکی آغاز شد. استالین با مانورهای سیاسی تروتسکی را از حزب اخراج و سرانجام تبعید کرد. استالین سیاست «سوسیالیسم در یک کشور» را در برابر «انقلاب دائمی» تروتسکی مطرح کرد و تا ۱۹۲۸ قدرت مطلق را به دست آورد.",
          en: "Lenin died in January 1924 and a power struggle between Stalin and Trotsky began. Stalin, through political maneuvering, expelled Trotsky from the party and eventually had him exiled. Stalin promoted 'Socialism in One Country' against Trotsky's 'Permanent Revolution' and achieved absolute power by 1928.",
        },
      },
    ],
  },
  {
    year: 1926,
    shamsiYear: "۱۳۰۵",
    iran: {
      title: { fa: "آغاز مدرن‌سازی رضا شاه", en: "Reza Shah's Modernization Begins" },
      description: { fa: "قانون مدنی جدید، اصلاحات لباس و گسترش ارتش مدرن", en: "New civil code, dress code reforms, modern army expansion" },
      details: {
        fa: "رضا شاه برنامه گسترده مدرن‌سازی کشور را آغاز کرد. قانون مدنی جدید بر اساس قوانین اروپایی (به ویژه فرانسه) تدوین شد. اصلاحات لباس برای مردان اجرا شد و سربازان موظف به پوشیدن لباس نظامی به سبک غربی شدند. ارتش مدرن با خدمت سربازی اجباری تشکیل شد. این اصلاحات گرچه سرعت مدرن‌سازی را افزایش داد، با مقاومت روحانیون و سنت‌گرایان مواجه شد.",
        en: "Reza Shah launched an extensive national modernization program. A new civil code based on European laws (especially French) was drafted. Dress reforms for men were implemented and soldiers were required to wear Western-style military uniforms. A modern army with compulsory military service was formed. These reforms accelerated modernization but faced resistance from clergy and traditionalists.",
      },
    },
  },
  {
    year: 1927,
    shamsiYear: "۱۳۰۶",
    iran: {
      title: { fa: "لغو کاپیتولاسیون‌ها", en: "Abolition of Capitulations" },
      description: { fa: "لغو امتیازات قضایی بیگانگان - تأکید بر حاکمیت ملی", en: "Foreign legal privileges cancelled — assertion of national sovereignty" },
      details: {
        fa: "رضا شاه کاپیتولاسیون‌ها (امتیازات قضایی خارجیان) را که بر اساس آن اتباع خارجی از قوانین ایران مصون بودند لغو کرد. این اقدام یکی از مهم‌ترین گام‌های بازیابی حاکمیت ملی ایران بود. قدرت‌های اروپایی که دهه‌ها از این امتیازات بهره‌مند بوده بودند اعتراض کردند، اما رضا شاه بر موضع خود پافشاری کرد. نظام قضایی جدید بر اساس حقوق مدرن جایگزین شد.",
        en: "Reza Shah abolished capitulations — foreign legal privileges under which foreign nationals were immune from Iranian law. This was one of the most important steps in restoring Iran's national sovereignty. European powers, which had benefited from these privileges for decades, protested, but Reza Shah held firm. A new judicial system based on modern law replaced the old one.",
      },
    },
  },
  {
    year: 1928,
    shamsiYear: "۱۳۰۷",
    iran: {
      title: { fa: "قانون متحدالشکل لباس", en: "Uniform Dress Law Enacted" },
      description: { fa: "مردان ملزم به پوشیدن لباس غربی و کلاه پهلوی شدند", en: "Men required to wear Western-style clothing and Pahlavi hat" },
      details: {
        fa: "قانون متحدالشکل لباس تصویب شد که بر اساس آن تمام مردان ایرانی (به جز روحانیون ثبت‌شده) موظف به پوشیدن لباس به سبک غربی و کلاه پهلوی شدند. لباس‌های سنتی و محلی ممنوع شد. این قانون بخشی از سیاست‌های مدرن‌سازی اجباری رضا شاه بود و با مقاومت گسترده در مناطق مختلف کشور، به ویژه در میان عشایر و مردم مذهبی مواجه شد.",
        en: "The Uniform Dress Law was passed, requiring all Iranian men (except registered clergy) to wear Western-style clothing and the Pahlavi hat. Traditional and local clothing was banned. This law was part of Reza Shah's forced modernization policies and faced widespread resistance across various regions, especially among tribal and religious communities.",
      },
    },
  },
  {
    year: 1929,
    shamsiYear: "۱۳۰۸",
    iran: {
      title: { fa: "مدرن‌سازی اجباری رضا شاه", en: "Reza Shah's Forced Modernization" },
      description: { fa: "ساخت راه‌آهن سراسری - ممنوعیت حجاب - سرکوب مخالفان", en: "Trans-Iranian Railway - Hijab ban - Opposition crushed" },
      details: {
        fa: "رضا شاه با سرعت اصلاحات مدرن‌سازی را پیش برد: ساخت راه‌آهن سراسری از خلیج فارس به دریای خزر، تأسیس دانشگاه تهران، اصلاحات قضایی، و ممنوعیت پوشش سنتی. مخالفان از جمله مدرس دستگیر و بعداً اعدام شدند. اقتصاد ایران از رکود جهانی نسبتاً مصون ماند اما استبداد تشدید شد.",
        en: "Reza Shah rapidly pushed modernization: Trans-Iranian Railway from Persian Gulf to Caspian Sea, founding Tehran University, judicial reforms, and banning traditional dress. Opponents including Modarres were arrested and later executed. Iran's economy was relatively shielded from the global depression but authoritarianism intensified.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "سقوط بازار بورس - رکود بزرگ", en: "Wall Street Crash - Great Depression" },
        description: { fa: "بدترین بحران اقتصادی تاریخ - ۲۵٪ بیکاری", en: "Worst economic crisis in history - 25% unemployment" },
        details: {
          fa: "در ۲۴ اکتبر ۱۹۲۹ (پنج‌شنبه سیاه) بازار بورس نیویورک سقوط کرد. میلیون‌ها نفر پس‌اندازهای خود را از دست دادند. بیکاری به ۲۵ درصد رسید. هزاران بانک ورشکسته شدند. این رکود به سرتاسر جهان سرایت کرد و زمینه‌ساز ظهور فاشیسم در اروپا شد.",
          en: "On October 24, 1929 (Black Thursday), the New York Stock Exchange crashed. Millions lost their savings. Unemployment reached 25%. Thousands of banks failed. The depression spread worldwide and created conditions for the rise of fascism in Europe.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Crowd_outside_nyse.jpg&width=200",
      },
      {
        country: "russia",
        title: { fa: "آغاز برنامه پنج‌ساله اول استالین", en: "Stalin's First Five-Year Plan Begins" },
        description: { fa: "صنعتی‌سازی اجباری و جمعی‌سازی کشاورزی", en: "Forced industrialization and agricultural collectivization" },
        details: {
          fa: "استالین برنامه پنج‌ساله اول را برای صنعتی‌سازی سریع شوروی آغاز کرد. جمعی‌سازی اجباری کشاورزی منجر به مصادره زمین‌های کولاک‌ها و قحطی گسترده شد. میلیون‌ها کشاورز به اردوگاه‌های کار اجباری (گولاگ) فرستاده شدند. صنعت سنگین رشد کرد اما به قیمت جان میلیون‌ها نفر.",
          en: "Stalin launched the First Five-Year Plan for rapid Soviet industrialization. Forced agricultural collectivization led to confiscation of kulak lands and widespread famine. Millions of peasants were sent to forced labor camps (Gulag). Heavy industry grew but at the cost of millions of lives.",
        },
      },
      {
        country: "germany",
        title: { fa: "رشد حزب نازی در بحران اقتصادی", en: "Nazi Party Growth Amid Economic Crisis" },
        description: { fa: "بحران اقتصادی جهانی به نازی‌ها قدرت داد", en: "Global economic crisis empowers the Nazis" },
        details: {
          fa: "سقوط بورس وال‌استریت اقتصاد آلمان را ویران کرد. بیکاری به ۶ میلیون نفر رسید. حزب نازی هیتلر از نارضایتی مردم بهره برد و در انتخابات ۱۹۳۰ از ۱۲ به ۱۰۷ کرسی رسید. هیتلر وعده احیای عظمت آلمان و لغو پیمان ورسای را داد.",
          en: "The Wall Street crash devastated Germany's economy. Unemployment reached 6 million. Hitler's Nazi Party exploited public discontent, jumping from 12 to 107 seats in the 1930 elections. Hitler promised to restore German greatness and abolish the Treaty of Versailles.",
        },
      },
    ],
  },
  {
    year: 1930,
    shamsiYear: "۱۳۰۹",
    iran: {
      title: { fa: "تأسیس بانک ملی ایران", en: "National Bank of Iran (Bank Melli) Established" },
      description: { fa: "تأسیس بانک ملی برای کاهش کنترل مالی بریتانیا", en: "Bank Melli founded to reduce British financial control" },
      details: {
        fa: "بانک ملی ایران به عنوان نخستین بانک ملی کشور تأسیس شد. هدف اصلی کاهش وابستگی مالی ایران به بانک شاهنشاهی (بانک بریتانیایی) بود که تا آن زمان انحصار انتشار اسکناس را در اختیار داشت. تأسیس بانک ملی گامی مهم در استقلال اقتصادی ایران بود و به تدریج حق انتشار اسکناس از بانک شاهنشاهی به بانک ملی منتقل شد.",
        en: "Bank Melli Iran was founded as the country's first national bank. The main goal was to reduce Iran's financial dependence on the Imperial Bank of Persia (a British bank) which had held a monopoly on banknote issuance. The establishment of Bank Melli was an important step toward Iran's economic independence, and the right to issue banknotes was gradually transferred from the Imperial Bank to Bank Melli.",
      },
    },
  },
  {
    year: 1931,
    shamsiYear: "۱۳۱۰",
    iran: {
      title: { fa: "قانون انحصار تجارت خارجی", en: "Foreign Trade Monopoly Law" },
      description: { fa: "دولت کنترل واردات و صادرات را در دست گرفت", en: "Government takes control of imports and exports" },
      details: {
        fa: "مجلس قانون انحصار تجارت خارجی را تصویب کرد که بر اساس آن دولت کنترل کامل بر واردات و صادرات کشور داشت. این قانون بخشی از سیاست‌های اقتصادی دولتی رضا شاه بود که هدف آن حمایت از صنایع داخلی و کاهش وابستگی به واردات بود. بازاریان و تجار سنتی از این قانون متضرر شدند، اما دولت درآمد قابل توجهی از انحصار تجارت کسب کرد.",
        en: "Parliament passed the Foreign Trade Monopoly Law, giving the government complete control over the country's imports and exports. This law was part of Reza Shah's statist economic policies aimed at protecting domestic industry and reducing import dependency. Traditional merchants and bazaaris were harmed by this law, but the government gained considerable revenue from the trade monopoly.",
      },
    },
  },
  {
    year: 1932,
    shamsiYear: "۱۳۱۱",
    iran: {
      title: { fa: "لغو امتیاز نفت دارسی", en: "D'Arcy Oil Concession Cancelled" },
      description: { fa: "رضا شاه امتیاز نفت دارسی را لغو کرد - تنش شدید با بریتانیا", en: "Reza Shah cancels D'Arcy oil concession — severe tensions with Britain" },
      details: {
        fa: "رضا شاه در اقدامی جسورانه امتیاز نفت دارسی (۱۹۰۱) را که به شرکت نفت ایران و انگلیس (APOC) داده شده بود لغو کرد. دلیل اصلی کاهش شدید درآمدهای نفتی ایران در بحران اقتصادی جهانی بود. بریتانیا شدیداً اعتراض کرد و پرونده به جامعه ملل ارجاع شد. این بحران در نهایت به مذاکره مجدد و امضای قرارداد جدید ۱۹۳۳ منجر شد که مدت امتیاز را تا ۱۹۹۳ تمدید کرد.",
        en: "Reza Shah boldly cancelled the D'Arcy oil concession (1901) granted to the Anglo-Persian Oil Company (APOC). The main reason was the dramatic decline in Iran's oil revenues during the global economic crisis. Britain protested strongly and the case was referred to the League of Nations. This crisis ultimately led to renegotiation and the 1933 agreement, which extended the concession until 1993.",
      },
    },
  },
  {
    year: 1933,
    shamsiYear: "۱۳۱۲",
    iran: {
      title: { fa: "قرارداد ننگین نفت ۱۹۳۳", en: "Controversial 1933 Oil Agreement" },
      description: { fa: "رضا شاه امتیاز نفت بریتانیا را ۳۲ سال تمدید کرد", en: "Reza Shah extends British oil concession by 32 years" },
      details: {
        fa: "رضا شاه ابتدا قرارداد دارسی را لغو کرد اما تحت فشار بریتانیا و جامعه ملل، قرارداد جدیدی امضا شد که امتیاز نفت را تا ۱۹۹۳ تمدید کرد. سهم ایران اندکی افزایش یافت اما کنترل عملیات در دست بریتانیا باقی ماند. مصدق بعدها این قرارداد را خیانت‌آمیز خواند.",
        en: "Reza Shah initially canceled the D'Arcy concession but under British and League of Nations pressure, signed a new agreement extending the oil concession until 1993. Iran's share increased slightly but operational control remained with Britain. Mosaddegh later called this agreement treasonous.",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "هیتلر صدراعظم شد - آغاز رایش سوم", en: "Hitler Becomes Chancellor - Third Reich Begins" },
        description: { fa: "پایان دموکراسی وایمار - آغاز دیکتاتوری نازی", en: "End of Weimar democracy - Nazi dictatorship begins" },
        details: {
          fa: "هیتلر در ۳۰ ژانویه ۱۹۳۳ صدراعظم شد. آتش‌سوزی رایشتاگ بهانه‌ای برای سرکوب مخالفان شد. قانون توانمندسازی به هیتلر قدرت مطلقه داد. احزاب سیاسی ممنوع شدند. اردوگاه‌های اسارت ساخته شدند. اقتصاد نظامی شد.",
          en: "Hitler became Chancellor on January 30, 1933. The Reichstag fire provided pretext for crushing opposition. The Enabling Act gave Hitler absolute power. Political parties were banned. Concentration camps were built. The economy was militarized.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Hitler_portrait_crop.jpg&width=200",
      },
      {
        country: "usa",
        title: { fa: "روزولت و نیو دیل", en: "FDR & The New Deal" },
        description: { fa: "بزرگترین برنامه اقتصادی دولتی تاریخ آمریکا", en: "Largest government economic program in US history" },
        details: {
          fa: "روزولت سیستم تأمین اجتماعی را ایجاد کرد و پروژه‌های عظیم عمرانی مانند TVA و WPA را راه‌اندازی کرد که میلیون‌ها شغل ایجاد کرد. اصلاحات بانکی و مقررات مالی از تکرار بحران جلوگیری کرد. بیکاری از ۲۵٪ به ۱۴٪ کاهش یافت و نقش دولت در اقتصاد آمریکا برای همیشه تغییر کرد.",
          en: "FDR created Social Security and launched massive public works programs like the TVA and WPA, creating millions of jobs. Banking reform and financial regulations prevented a repeat of the crisis. Unemployment dropped from 25% to 14%, and the role of government in the American economy was permanently transformed.",
        },
      },
      {
        country: "russia",
        title: { fa: "قحطی بزرگ اوکراین (هولودومور)", en: "Great Ukrainian Famine (Holodomor)" },
        description: { fa: "قحطی ناشی از جمعی‌سازی استالین - ۳ تا ۷ میلیون کشته", en: "Famine from Stalin's collectivization - 3 to 7 million killed" },
        details: {
          fa: "سیاست جمعی‌سازی اجباری استالین قحطی مصنوعی در اوکراین ایجاد کرد. بین ۳ تا ۷ میلیون اوکراینی از گرسنگی جان باختند. استالین صادرات غلات را ادامه داد در حالی که مردم اوکراین از گرسنگی می‌مردند. اوکراین این قحطی را ژنوساید می‌داند.",
          en: "Stalin's forced collectivization policy created an artificial famine in Ukraine. Between 3 to 7 million Ukrainians starved to death. Stalin continued grain exports while Ukrainians were dying of hunger. Ukraine considers this famine a genocide.",
        },
      },
      {
        country: "china",
        title: { fa: "لانگ مارش کمونیست‌های چین", en: "Chinese Communists' Long March" },
        description: { fa: "مائو و ارتش سرخ از محاصره ناسیونالیست‌ها گریختند", en: "Mao and Red Army escape Nationalist encirclement" },
        details: {
          fa: "ارتش سرخ چین تحت فشار ناسیونالیست‌های چیانگ کای‌شک مجبور به «لانگ مارش» تاریخی شد. ۱۰۰ هزار نفر مسیر ۱۲ هزار کیلومتری را آغاز کردند اما تنها ۸ هزار نفر به مقصد رسیدند. مائو در طول این راهپیمایی رهبری حزب کمونیست را به دست گرفت.",
          en: "China's Red Army, under pressure from Chiang Kai-shek's Nationalists, was forced into the historic Long March. 100,000 people began the 12,000 km journey but only 8,000 arrived. Mao consolidated his leadership of the Communist Party during this march.",
        },
      },
    ],
  },
  {
    year: 1934,
    shamsiYear: "۱۳۱۳",
    iran: {
      title: { fa: "تأسیس دانشگاه تهران", en: "University of Tehran Founded" },
      description: { fa: "نخستین دانشگاه مدرن ایران تأسیس شد - شاهکار مدرن‌سازی رضا شاه", en: "Iran's first modern university founded — centerpiece of Reza Shah's modernization" },
      details: {
        fa: "دانشگاه تهران به عنوان نخستین دانشگاه مدرن ایران با ادغام چند مدرسه عالی موجود تأسیس شد. این دانشگاه شامل دانشکده‌های حقوق، پزشکی، فنی، ادبیات و الهیات بود. تأسیس دانشگاه تهران یکی از مهم‌ترین دستاوردهای برنامه مدرن‌سازی رضا شاه بود و نقش اساسی در تربیت نسل جدیدی از نخبگان و متخصصان ایرانی ایفا کرد.",
        en: "The University of Tehran was founded as Iran's first modern university by merging several existing higher education schools. It included faculties of law, medicine, engineering, literature, and theology. The founding of Tehran University was one of the most important achievements of Reza Shah's modernization program and played a fundamental role in training a new generation of Iranian elites and professionals.",
      },
    },
  },
  {
    year: 1935,
    shamsiYear: "۱۳۱۴",
    iran: {
      title: { fa: "کشف حجاب اجباری - تغییر نام به ایران", en: "Forced Unveiling - Country Renamed to Iran" },
      description: { fa: "رضا شاه حجاب را ممنوع و نام رسمی کشور را ایران کرد", en: "Reza Shah bans hijab and officially renames country to Iran" },
      details: {
        fa: "رضا شاه در ۱۷ دی ۱۳۱۴ حکم کشف حجاب اجباری صادر کرد. پلیس مأمور برداشتن حجاب زنان در خیابان شد. این حکم با مقاومت شدید مذهبی روبرو شد. قیام مسجد گوهرشاد در مشهد سرکوب خونین شد. همزمان رضا شاه از تمام کشورها خواست نام «ایران» را به جای «پرشیا» استفاده کنند.",
        en: "On January 7, 1936, Reza Shah decreed compulsory unveiling. Police were ordered to remove women's hijabs in streets. This decree met fierce religious resistance. The Goharshad Mosque uprising in Mashhad was bloodily suppressed. Simultaneously, Reza Shah requested all nations use 'Iran' instead of 'Persia.'",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "قوانین نورنبرگ - تبعیض نژادی قانونی", en: "Nuremberg Laws - Legal Racial Discrimination" },
        description: { fa: "یهودیان از شهروندی آلمان محروم شدند", en: "Jews stripped of German citizenship" },
        details: {
          fa: "قوانین نورنبرگ شهروندی آلمان را از یهودیان سلب کرد و ازدواج بین یهودیان و آلمانی‌ها را ممنوع ساخت. این قوانین پایه حقوقی تبعیض نژادی نازی‌ها بودند که سرانجام به هولوکاست و قتل ۶ میلیون یهودی منجر شد.",
          en: "The Nuremberg Laws stripped Jews of German citizenship and banned marriages between Jews and Germans. These laws provided the legal foundation for Nazi racial discrimination that ultimately led to the Holocaust and the murder of 6 million Jews.",
        },
      },
      {
        country: "world",
        title: { fa: "ایتالیا به اتیوپی حمله کرد", en: "Italy Invades Ethiopia" },
        description: { fa: "موسولینی امپراتوری آفریقایی را گسترش داد", en: "Mussolini expands African empire" },
        details: {
          fa: "موسولینی با هدف ایجاد امپراتوری آفریقایی به اتیوپی حمله کرد و از گاز خردل علیه غیرنظامیان استفاده کرد. جامعه ملل محکوم کرد اما اقدام مؤثری نکرد و این ناتوانی اعتبار سازمان را از بین برد.",
          en: "Mussolini invaded Ethiopia to build an African empire, using mustard gas against civilians. The League of Nations condemned but failed to take effective action, destroying the organization's credibility and emboldening further aggression.",
        },
      },
      {
        country: "france",
        title: { fa: "خط ماژینو و تدارک دفاعی فرانسه", en: "Maginot Line & French Defense Preparations" },
        description: { fa: "فرانسه استحکامات عظیم مرزی خود با آلمان را تکمیل کرد", en: "France completes massive border fortifications against Germany" },
        details: {
          fa: "فرانسه ساخت خط ماژینو، سیستم عظیم استحکامات دفاعی در مرز آلمان، را ادامه داد. این خط که میلیاردها فرانک هزینه داشت، احساس امنیت کاذبی ایجاد کرد. در ۱۹۴۰ آلمان با دور زدن خط ماژینو از بلژیک فرانسه را شکست داد و بی‌فایدگی این استراتژی ثابت شد.",
          en: "France continued building the Maginot Line, a massive defensive fortification system on the German border. Costing billions of francs, it created a false sense of security. In 1940, Germany bypassed the Maginot Line through Belgium, defeating France and proving the strategy's futility.",
        },
      },
    ],
  },
  {
    year: 1936,
    shamsiYear: "۱۳۱۵",
    iran: {
      title: { fa: "کشف حجاب اجباری ادامه دارد - قیام گوهرشاد", en: "Forced Unveiling Continues - Goharshad Massacre" },
      description: { fa: "سرکوب خونین معترضان در مسجد گوهرشاد مشهد", en: "Bloody suppression of protesters at Goharshad Mosque in Mashhad" },
      details: {
        fa: "در تیر ۱۳۱۴ (ژوئیه ۱۹۳۵) مردم مشهد در اعتراض به کشف حجاب اجباری و سیاست‌های رضا شاه در مسجد گوهرشاد تجمع کردند. ارتش به دستور رضا شاه مسجد را محاصره و به معترضان شلیک کرد. صدها نفر کشته شدند. این سرکوب نشان‌دهنده روش‌های خشن رضا شاه در اجرای مدرنیزاسیون اجباری بود. سیاست کشف حجاب در ۱۳۱۵ نیز با شدت ادامه یافت.",
        en: "In July 1935, people of Mashhad gathered at Goharshad Mosque protesting forced unveiling and Reza Shah's policies. The army, on Reza Shah's orders, besieged the mosque and fired on protesters. Hundreds were killed. This crackdown demonstrated Reza Shah's brutal methods of forced modernization. The unveiling policy continued with intensity in 1936.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "آغاز جنگ داخلی اسپانیا", en: "Spanish Civil War Begins" },
        description: { fa: "فرانکو علیه جمهوری‌خواهان شورش کرد - آزمایشگاه جنگ جهانی دوم", en: "Franco rebels against republicans - Testing ground for WWII" },
        details: {
          fa: "جنگ داخلی اسپانیا در ژوئیه ۱۹۳۶ با شورش ژنرال فرانکو علیه حکومت جمهوری آغاز شد. آلمان نازی و ایتالیا فاشیست از فرانکو حمایت کردند، در حالی که شوروی از جمهوری‌خواهان حمایت می‌کرد. این جنگ آزمایشگاهی برای سلاح‌ها و تاکتیک‌های جنگ جهانی دوم شد.",
          en: "The Spanish Civil War began in July 1936 with General Franco's rebellion against the republican government. Nazi Germany and Fascist Italy supported Franco, while the Soviet Union backed the republicans. This war became a testing ground for WWII weapons and tactics.",
        },
      },
      {
        country: "germany",
        title: { fa: "المپیک برلین - نمایش قدرت نازی", en: "Berlin Olympics - Nazi Power Display" },
        description: { fa: "هیتلر از المپیک ۱۹۳۶ برای تبلیغ نازیسم استفاده کرد", en: "Hitler uses 1936 Olympics to promote Nazism" },
        details: {
          fa: "المپیک تابستانی ۱۹۳۶ در برلین برگزار شد. هیتلر از این رویداد برای نمایش قدرت آلمان نازی استفاده کرد. تبعیض نژادی موقتاً پنهان شد. جسی اونز ورزشکار سیاه‌پوست آمریکایی با کسب ۴ مدال طلا تبلیغات نژادپرستانه نازی‌ها را به چالش کشید.",
          en: "The 1936 Summer Olympics were held in Berlin. Hitler used the event to showcase Nazi Germany's power. Racial discrimination was temporarily hidden. Jesse Owens, a Black American athlete, challenged Nazi racial propaganda by winning 4 gold medals.",
        },
      },
      {
        country: "russia",
        title: { fa: "آغاز پاکسازی‌های بزرگ استالین", en: "Stalin's Great Purges Begin" },
        description: { fa: "استالین رقبای سیاسی و ژنرال‌ها را محاکمه و اعدام کرد", en: "Stalin tries and executes political rivals and generals" },
        details: {
          fa: "استالین پاکسازی‌های بزرگ را آغاز کرد. محاکمات نمایشی مسکو رهبران انقلاب مانند زینوویف و کامنف را محکوم و اعدام کرد. هزاران فرمانده نظامی، مقام حزبی و روشنفکر کشته یا به گولاگ فرستاده شدند. تخمین زده می‌شود ۷۵۰ هزار نفر اعدام و میلیون‌ها نفر زندانی شدند.",
          en: "Stalin launched the Great Purges. Moscow show trials condemned and executed revolutionary leaders like Zinoviev and Kamenev. Thousands of military commanders, party officials, and intellectuals were killed or sent to the Gulag. An estimated 750,000 were executed and millions imprisoned.",
        },
      },
      {
        country: "france",
        title: { fa: "پیروزی جبهه مردمی در فرانسه", en: "Popular Front Victory in France" },
        description: { fa: "ائتلاف چپ فرانسه به قدرت رسید - اصلاحات کارگری", en: "French left coalition comes to power - Workers' reforms" },
        details: {
          fa: "ائتلاف جبهه مردمی به رهبری لئون بلوم در انتخابات پیروز شد. بلوم اولین نخست‌وزیر یهودی فرانسه شد. حکومت جدید هفته کاری ۴۰ ساعته، مرخصی با حقوق و حق اعتصاب را تصویب کرد. اما بحران اقتصادی و مخالفت راست‌گرایان جبهه مردمی را در ۱۹۳۸ سرنگون کرد.",
          en: "The Popular Front coalition led by Léon Blum won the elections. Blum became France's first Jewish prime minister. The new government passed the 40-hour work week, paid vacations, and the right to strike. But economic crisis and right-wing opposition brought down the Popular Front in 1938.",
        },
      },
    ],
  },
  {
    year: 1937,
    shamsiYear: "۱۳۱۶",
    iran: {
      title: { fa: "پیمان سعدآباد", en: "Sa'dabad Pact Signed" },
      description: { fa: "پیمان عدم تجاوز با ترکیه، عراق و افغانستان", en: "Non-aggression treaty with Turkey, Iraq, and Afghanistan" },
      details: {
        fa: "پیمان سعدآباد در کاخ سعدآباد تهران بین ایران، ترکیه، عراق و افغانستان امضا شد. این پیمان یک معاهده عدم تجاوز منطقه‌ای بود که طرفین را به احترام به مرزهای یکدیگر و عدم مداخله در امور داخلی هم متعهد می‌کرد. این پیمان نشان‌دهنده تلاش رضا شاه برای ایجاد روابط مستقل منطقه‌ای و کاهش وابستگی به قدرت‌های بزرگ بود.",
        en: "The Sa'dabad Pact was signed at Sa'dabad Palace in Tehran between Iran, Turkey, Iraq, and Afghanistan. This regional non-aggression treaty committed parties to respect each other's borders and non-interference in internal affairs. The pact demonstrated Reza Shah's effort to establish independent regional relations and reduce dependence on great powers.",
      },
    },
  },
  {
    year: 1938,
    shamsiYear: "۱۳۱۷",
    iran: {
      title: { fa: "تکمیل راه‌آهن سراسری ایران", en: "Trans-Iranian Railway Completed" },
      description: { fa: "راه‌آهن از خلیج فارس تا دریای خزر افتتاح شد", en: "Railway from Persian Gulf to Caspian Sea inaugurated" },
      details: {
        fa: "راه‌آهن سراسری ایران که از ۱۹۲۷ ساخت آن آغاز شده بود، در ۱۹۳۸ تکمیل شد. این خط ۱۳۹۴ کیلومتری بندر شاه (بندر ترکمن) در خزر را به بندرشاهپور (بندر امام) در خلیج فارس متصل کرد. این پروژه بدون وام خارجی و با درآمد مالیات چای و قند ساخته شد. در جنگ جهانی دوم، متفقین از آن برای ارسال تدارکات به شوروی استفاده کردند.",
        en: "The Trans-Iranian Railway, whose construction began in 1927, was completed in 1938. This 1,394 km line connected Bandar Shah (Bandar Torkaman) on the Caspian to Bandar Shahpur (Bandar Imam) on the Persian Gulf. Built without foreign loans, funded by tea and sugar taxes. During WWII, the Allies used it to send supplies to the Soviet Union.",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "الحاق اتریش و شب کریستال", en: "Anschluss & Kristallnacht" },
        description: { fa: "آلمان اتریش را ضمیمه کرد - حمله به یهودیان در شب کریستال", en: "Germany annexes Austria - Attack on Jews in Kristallnacht" },
        details: {
          fa: "در مارس ۱۹۳۸ آلمان نازی اتریش را ضمیمه کرد (آنشلوس). در نوامبر، شب کریستال رخ داد: حمله سازمان‌یافته به مغازه‌ها، کنیسه‌ها و خانه‌های یهودیان در سراسر آلمان و اتریش. بیش از ۳۰,۰۰۰ یهودی بازداشت شدند. این آغاز سیستماتیک‌تر شدن سرکوب یهودیان بود.",
          en: "In March 1938, Nazi Germany annexed Austria (Anschluss). In November, Kristallnacht occurred: organized attacks on Jewish shops, synagogues, and homes across Germany and Austria. Over 30,000 Jews were arrested. This marked the beginning of more systematic persecution of Jews.",
        },
      },
      {
        country: "uk",
        title: { fa: "پیمان مونیخ - سیاست مماشات", en: "Munich Agreement - Appeasement Policy" },
        description: { fa: "بریتانیا و فرانسه سرزمین‌های چکسلواکی را به هیتلر دادند", en: "Britain and France cede Czechoslovak territory to Hitler" },
        details: {
          fa: "نخست‌وزیر بریتانیا نویل چمبرلین و فرانسه در پیمان مونیخ (سپتامبر ۱۹۳۸) منطقه سودت چکسلواکی را به آلمان واگذار کردند. چمبرلین ادعا کرد «صلح در زمان ما» را آورده اما وینستون چرچیل این پیمان را فاجعه خواند. شش ماه بعد هیتلر تمام چکسلواکی را اشغال کرد.",
          en: "British PM Neville Chamberlain and France, in the Munich Agreement (September 1938), ceded Czechoslovakia's Sudetenland to Germany. Chamberlain claimed he brought 'peace in our time' but Winston Churchill called it a disaster. Six months later Hitler occupied all of Czechoslovakia.",
        },
      },
      {
        country: "russia",
        title: { fa: "اوج پاکسازی‌های ارتش شوروی", en: "Peak of Soviet Military Purges" },
        description: { fa: "استالین بیشتر فرماندهان ارشد ارتش سرخ را اعدام کرد", en: "Stalin executes most senior Red Army commanders" },
        details: {
          fa: "پاکسازی‌های استالین ارتش سرخ را فلج کرد. ۳ تا از ۵ مارشال، ۱۳ تا از ۱۵ فرمانده ارتش و ۵۰ تا از ۵۷ فرمانده سپاه اعدام شدند. این پاکسازی ارتش شوروی را در برابر حمله آلمان در ۱۹۴۱ ضعیف کرد و یکی از دلایل شکست‌های اولیه شوروی در جنگ بود.",
          en: "Stalin's purges crippled the Red Army. 3 of 5 marshals, 13 of 15 army commanders, and 50 of 57 corps commanders were executed. These purges weakened the Soviet military against the German invasion in 1941 and were a key reason for the USSR's early wartime defeats.",
        },
      },
    ],
  },

  {
    year: 1939,
    shamsiYear: "۱۳۱۸",
    yearInfo: {
      fa: "جنگ جهانی دوم آغاز شد. ایران اعلام بی‌طرفی کرد اما رضا شاه روابط تجاری با آلمان نازی داشت.",
      en: "World War II begins. Iran declares neutrality but Reza Shah has trade relations with Nazi Germany.",
    },
    iran: {
      title: { fa: "اعلام بی‌طرفی ایران در جنگ جهانی دوم", en: "Iran Declares Neutrality in WWII" },
      description: { fa: "رضا شاه بی‌طرفی اعلام کرد اما روابط تجاری با آلمان نازی ادامه داشت", en: "Reza Shah declares neutrality but trade relations with Nazi Germany continue" },
      details: {
        fa: "با آغاز جنگ جهانی دوم، رضا شاه بی‌طرفی ایران را اعلام کرد. اما ایران روابط تجاری گسترده‌ای با آلمان نازی داشت و صدها کارشناس آلمانی در ایران فعال بودند. آلمان بزرگترین شریک تجاری ایران بود. این روابط بهانه‌ای شد که متفقین در ۱۹۴۱ برای اشغال ایران استفاده کردند. رضا شاه با تغییر نام کشور از پرشیا به ایران (به معنای سرزمین آریایی‌ها) گرایش‌های آریایی خود را نشان داده بود.",
        en: "When WWII began, Reza Shah declared Iran's neutrality. However, Iran had extensive trade relations with Nazi Germany and hundreds of German experts were active in Iran. Germany was Iran's largest trading partner. These ties became the pretext the Allies used to occupy Iran in 1941. Reza Shah had shown his Aryan sympathies by changing the country's name from Persia to Iran (meaning 'Land of the Aryans').",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "حمله آلمان به لهستان - آغاز جنگ دوم", en: "Germany Invades Poland - WWII Begins" },
        description: { fa: "بلیتزکریگ آلمان - بریتانیا و فرانسه اعلان جنگ کردند", en: "German Blitzkrieg - Britain & France declare war" },
        details: {
          fa: "در اول سپتامبر ۱۹۳۹ آلمان نازی با تاکتیک بلیتزکریگ به لهستان حمله کرد. بریتانیا و فرانسه دو روز بعد اعلان جنگ کردند. هیتلر و استالین پیشتر پیمان عدم تجاوز امضا کرده بودند و لهستان بین آنها تقسیم شد.",
          en: "On September 1, 1939, Nazi Germany invaded Poland using Blitzkrieg tactics. Britain and France declared war two days later. Hitler and Stalin had previously signed a non-aggression pact, and Poland was divided between them.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bundesarchiv_Bild_183-S55480%2C_Polen%2C_Parade_vor_Adolf_Hitler.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "بریتانیا اعلان جنگ کرد - چرچیل به قدرت نزدیک شد", en: "Britain Declares War - Churchill Rises" },
        description: { fa: "چمبرلین: «ما اکنون در جنگیم»", en: "Chamberlain: 'We are now at war'" },
        details: {
          fa: "سیاست مماشات چمبرلین با امضای پیمان مونیخ شکست خورد و آلمان لهستان را اشغال کرد. چرچیل به عنوان لرد اول دریاسالاری منصوب شد و در ۱۹۴۰ نخست‌وزیر شد. دوره «جنگ ساختگی» از سپتامبر ۱۹۳۹ تا آوریل ۱۹۴۰ آرامش فریبنده‌ای قبل از طوفان بود.",
          en: "Chamberlain's appeasement policy, sealed by the Munich Agreement, failed when Germany invaded Poland. Churchill was appointed First Lord of the Admiralty and became Prime Minister in 1940. The 'Phoney War' period from September 1939 to April 1940 was a deceptive calm before the storm of the Blitzkrieg.",
        },
      },
      {
        country: "russia",
        title: { fa: "پیمان مولوتوف-ریبنتروپ - تقسیم لهستان", en: "Molotov-Ribbentrop Pact - Partition of Poland" },
        description: { fa: "شوروی و آلمان نازی پیمان عدم تجاوز امضا کردند", en: "USSR and Nazi Germany sign non-aggression pact" },
        details: {
          fa: "در اوت ۱۹۳۹ شوروی و آلمان نازی پیمان عدم تجاوز امضا کردند. پروتکل محرمانه لهستان و اروپای شرقی را بین دو قدرت تقسیم می‌کرد. شوروی شرق لهستان، کشورهای بالتیک و بسارابی را اشغال کرد. این پیمان جهان را شوکه کرد زیرا دو دشمن ایدئولوژیک متحد شده بودند.",
          en: "In August 1939, the USSR and Nazi Germany signed a non-aggression pact. A secret protocol divided Poland and Eastern Europe between the two powers. The USSR occupied eastern Poland, the Baltic states, and Bessarabia. The pact shocked the world as two ideological enemies became allies.",
        },
      },
      {
        country: "france",
        title: { fa: "فرانسه اعلان جنگ کرد - بسیج عمومی", en: "France Declares War - General Mobilization" },
        description: { fa: "فرانسه ۵ میلیون سرباز بسیج کرد اما پشت خط ماژینو منتظر ماند", en: "France mobilizes 5 million soldiers but waits behind the Maginot Line" },
        details: {
          fa: "فرانسه در ۳ سپتامبر ۱۹۳۹ به آلمان اعلان جنگ کرد و ۵ میلیون سرباز بسیج نمود. اما ارتش فرانسه پشت خط ماژینو موضع دفاعی گرفت و حمله‌ای به آلمان نکرد. این دوره «جنگ ساختگی» نامیده شد. در مه ۱۹۴۰ آلمان از بلژیک حمله کرد و فرانسه در عرض ۶ هفته سقوط کرد.",
          en: "France declared war on Germany on September 3, 1939 and mobilized 5 million soldiers. But the French army took a defensive position behind the Maginot Line and didn't attack Germany. This period was called the 'Phoney War.' In May 1940, Germany attacked through Belgium and France fell in just 6 weeks.",
        },
      },
    ],
  },
  {
    year: 1940,
    shamsiYear: "۱۳۱۹",
    iran: {
      title: { fa: "اعلام بی‌طرفی ایران در جنگ جهانی دوم", en: "Iran Declares Neutrality in WWII" },
      description: { fa: "ایران بی‌طرفی اعلام کرد اما تجارت رضا شاه با آلمان نگرانی متفقین را برانگیخت", en: "Iran declares neutrality but Reza Shah's trade with Germany worries the Allies" },
      details: {
        fa: "ایران رسماً بی‌طرفی خود در جنگ جهانی دوم را اعلام کرد، اما رضا شاه روابط تجاری گسترده‌ای با آلمان نازی داشت. صدها مستشار و تکنسین آلمانی در ایران فعال بودند و آلمان شریک تجاری اصلی ایران شده بود. متفقین، به ویژه بریتانیا و شوروی، از نفوذ آلمان در ایران و خطر تهدید خطوط تأمین نفت نگران بودند. این نگرانی‌ها زمینه‌ساز اشغال ایران در سال بعد شد.",
        en: "Iran officially declared neutrality in World War II, but Reza Shah maintained extensive trade relations with Nazi Germany. Hundreds of German advisors and technicians were active in Iran, and Germany had become Iran's main trading partner. The Allies, especially Britain and the Soviet Union, were concerned about German influence in Iran and the threat to oil supply lines. These concerns set the stage for Iran's occupation the following year.",
      },
    },
  },
  {
    year: 1941,
    shamsiYear: "۱۳۲۰",
    yearInfo: {
      fa: "سال سرنوشت‌ساز. اشغال ایران توسط متفقین، تبعید رضا شاه و آغاز سلطنت محمدرضا شاه. آمریکا به جنگ جهانی پیوست.",
      en: "Fateful year. Allied occupation of Iran, exile of Reza Shah, beginning of Mohammad Reza Shah's reign. America enters WWII.",
    },
    iran: {
      title: { fa: "اشغال ایران - تبعید رضا شاه", en: "Allied Invasion - Reza Shah Exiled" },
      description: { fa: "شهریور ۱۳۲۰: شوروی از شمال و بریتانیا از جنوب ایران را اشغال کردند", en: "Sept 1941: USSR from north, Britain from south occupy Iran" },
      details: {
        fa: "در ۳ شهریور ۱۳۲۰ (۲۵ اوت ۱۹۴۱) نیروهای بریتانیا و شوروی از جنوب و شمال به ایران حمله کردند. بهانه متفقین: روابط رضا شاه با آلمان و نیاز به «پل پیروزی» برای ارسال تدارکات به شوروی. ارتش ایران در عرض سه روز شکست خورد. رضا شاه مجبور به استعفا و تبعید شد (ابتدا به موریس و سپس ژوهانسبورگ که در ۱۹۴۴ درگذشت). محمدرضا، پسر ۲۱ ساله‌اش، شاه شد.",
        en: "On August 25, 1941, British and Soviet forces invaded Iran from south and north. Allied pretext: Reza Shah's ties to Germany and need for the 'Bridge of Victory' supply corridor to the USSR. Iran's army collapsed within three days. Reza Shah was forced to abdicate and exiled (first to Mauritius, then Johannesburg where he died in 1944). His 21-year-old son Mohammad Reza became Shah.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad_Reza_Shah_Pahlavi_in_1973.jpg&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "حمله پرل هاربر - آمریکا وارد جنگ شد", en: "Pearl Harbor - USA Enters WWII" },
        description: { fa: "ژاپن به پرل هاربر حمله کرد - روزولت: «روز ننگین»", en: "Japan attacks Pearl Harbor - FDR: 'Day of Infamy'" },
        details: {
          fa: "در ۷ دسامبر ۱۹۴۱ نیروی هوایی ژاپن به پایگاه دریایی پرل هاربر در هاوایی حمله کرد. ۲۴۰۳ آمریکایی کشته شدند. ۴ کشتی جنگی غرق شد. روزولت این روز را «روز ننگین» نامید و کنگره اعلان جنگ کرد. ورود آمریکا به جنگ تعادل قدرت را تغییر داد.",
          en: "On December 7, 1941, Japanese air forces attacked the Pearl Harbor naval base in Hawaii. 2,403 Americans were killed. 4 battleships were sunk. FDR called it 'a date which will live in infamy' and Congress declared war. America's entry changed the balance of power.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg&width=200",
      },
      {
        country: "germany",
        title: { fa: "عملیات بارباروسا - حمله به شوروی", en: "Operation Barbarossa - Invasion of USSR" },
        description: { fa: "بزرگترین عملیات نظامی تاریخ - ۳.۸ میلیون سرباز", en: "Largest military operation in history - 3.8 million soldiers" },
        details: {
          fa: "عملیات بارباروسا با ۳.۸ میلیون سرباز بزرگترین عملیات نظامی تاریخ بود. در ابتدا ارتش آلمان پیشرفت‌های ویرانگری داشت و میلیون‌ها اسیر شوروی گرفت. اما ضدحمله شوروی در نبرد مسکو در دسامبر ۱۹۴۱ اسطوره شکست‌ناپذیری آلمان را شکست و نقطه عطف جنگ شد.",
          en: "Operation Barbarossa, with 3.8 million soldiers, was the largest military operation in history. Initially devastating, the German army captured millions of Soviet prisoners and advanced deep into Russia. But the Soviet counterattack at the Battle of Moscow in December 1941 shattered the myth of German invincibility and became a turning point of the war.",
        },
      },
      {
        country: "uk",
        title: { fa: "بمباران لندن (بلیتز) و مقاومت چرچیل", en: "London Blitz & Churchill's Resistance" },
        description: { fa: "آلمان لندن را بمباران کرد اما بریتانیا تسلیم نشد", en: "Germany bombs London but Britain refuses to surrender" },
        details: {
          fa: "بمباران لندن (بلیتز) از سپتامبر ۱۹۴۰ تا مه ۱۹۴۱ ادامه داشت. بیش از ۴۳ هزار غیرنظامی بریتانیایی کشته شدند. چرچیل با سخنرانی‌های الهام‌بخش روحیه مردم را بالا نگه داشت: «ما در سواحل خواهیم جنگید، هرگز تسلیم نخواهیم شد.» بریتانیا تنها کشور اروپایی بود که در برابر هیتلر مقاومت کرد.",
          en: "The London Blitz lasted from September 1940 to May 1941. Over 43,000 British civilians were killed. Churchill kept morale high with inspiring speeches: 'We shall fight on the beaches, we shall never surrender.' Britain was the only European country that resisted Hitler.",
        },
      },
      {
        country: "russia",
        title: { fa: "حمله آلمان به شوروی - ضربه غافلگیرانه", en: "German Attack on USSR - Surprise Blow" },
        description: { fa: "۳ میلیون اسیر شوروی در ماه‌های اول - فاجعه نظامی", en: "3 million Soviet POWs in first months - Military catastrophe" },
        details: {
          fa: "عملیات بارباروسا شوروی را غافلگیر کرد. استالین علی‌رغم هشدارهای اطلاعاتی آمادگی نداشت. در ماه‌های اول ۳ میلیون سرباز شوروی اسیر شدند. ارتش آلمان تا دروازه‌های مسکو پیشروی کرد اما ضدحمله زمستانی شوروی در دسامبر ۱۹۴۱ آنها را متوقف کرد. شوروی در نهایت ۲۷ میلیون نفر در جنگ از دست داد.",
          en: "Operation Barbarossa caught the USSR off guard. Stalin, despite intelligence warnings, was unprepared. In the first months, 3 million Soviet soldiers were captured. The German army advanced to the gates of Moscow but the Soviet winter counterattack in December 1941 stopped them. The USSR ultimately lost 27 million people in the war.",
        },
      },
    ],
  },
  {
    year: 1942,
    shamsiYear: "۱۳۲۱",
    iran: {
      title: { fa: "ایران کریدور تدارکاتی متفقین", en: "Iran Becomes Allied Supply Corridor" },
      description: { fa: "تهران مسیر اصلی ارسال تسلیحات به شوروی شد - پل پیروزی", en: "Tehran becomes main route for sending arms to USSR - Bridge of Victory" },
      details: {
        fa: "پس از اشغال ایران، متفقین از راه‌آهن سراسری ایران برای ارسال تسلیحات و تدارکات به شوروی استفاده کردند. این مسیر که «پل پیروزی» نام گرفت، نقش حیاتی در شکست آلمان در جبهه شرق داشت. بیش از ۵ میلیون تن تدارکات از این مسیر عبور کرد. ایران در فقر و تورم شدید فرو رفت در حالی که ثروتش برای جنگ دیگران خرج می‌شد.",
        en: "After Iran's occupation, the Allies used the Trans-Iranian Railway to send weapons and supplies to the Soviet Union. This route, called the 'Bridge of Victory,' played a vital role in Germany's defeat on the Eastern Front. Over 5 million tons of supplies passed through. Iran sank into poverty and severe inflation while its wealth was spent on others' wars.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "آغاز نبرد استالینگراد", en: "Battle of Stalingrad Begins" },
        description: { fa: "خونین‌ترین نبرد تاریخ بشر آغاز شد", en: "The bloodiest battle in human history begins" },
        details: {
          fa: "نبرد استالینگراد از اوت ۱۹۴۲ تا فوریه ۱۹۴۳ ادامه یافت. بیش از ۲ میلیون نفر کشته، زخمی یا اسیر شدند. این نبرد نقطه عطف جنگ جهانی دوم بود و اولین شکست بزرگ آلمان نازی. ارتش ششم آلمان به فرماندهی فون پائولوس تسلیم شد.",
          en: "The Battle of Stalingrad lasted from August 1942 to February 1943. Over 2 million were killed, wounded, or captured. This battle was the turning point of WWII and Nazi Germany's first major defeat. The German Sixth Army under von Paulus surrendered.",
        },
      },
      {
        country: "usa",
        title: { fa: "نبرد میدوی - نقطه عطف اقیانوس آرام", en: "Battle of Midway - Pacific Turning Point" },
        description: { fa: "شکست ژاپن در نبرد دریایی میدوی", en: "Japan defeated in the naval Battle of Midway" },
        details: {
          fa: "نبرد میدوی در ژوئن ۱۹۴۲ نقطه عطف جنگ در اقیانوس آرام بود. نیروی دریایی آمریکا چهار ناو هواپیمابر ژاپن را غرق کرد. این شکست توان تهاجمی ژاپن را از بین برد و جنگ در اقیانوس آرام به نفع متفقین تغییر کرد.",
          en: "The Battle of Midway in June 1942 was the turning point of the Pacific War. The US Navy sank four Japanese aircraft carriers. This defeat destroyed Japan's offensive capability and turned the Pacific War in favor of the Allies.",
        },
      },
      {
        country: "uk",
        title: { fa: "نبرد العلمین - نقطه عطف آفریقا", en: "Battle of El Alamein - African Turning Point" },
        description: { fa: "مونتگومری رومل را در مصر شکست داد", en: "Montgomery defeats Rommel in Egypt" },
        details: {
          fa: "ژنرال مونتگومری بریتانیایی در نبرد دوم العلمین (اکتبر ۱۹۴۲) ارتش آفریقای رومل آلمانی را شکست داد. چرچیل گفت: «این پایان نیست، حتی آغاز پایان نیست، اما شاید پایان آغاز باشد.» این پیروزی نقطه عطف جنگ در شمال آفریقا بود.",
          en: "British General Montgomery defeated German General Rommel's Afrika Korps at the Second Battle of El Alamein (October 1942). Churchill said: 'This is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.' This victory was the turning point of the North African campaign.",
        },
      },
    ],
  },

  {
    year: 1943,
    shamsiYear: "۱۳۲۲",
    iran: {
      title: { fa: "کنفرانس تهران - سران متفقین", en: "Tehran Conference - Allied Leaders" },
      description: { fa: "روزولت، چرچیل و استالین در تهران سرنوشت جنگ و جهان را تعیین کردند", en: "Roosevelt, Churchill & Stalin decide the fate of the war and the world in Tehran" },
      details: {
        fa: "کنفرانس تهران (۷-۹ آذر ۱۳۲۲) اولین نشست سران سه‌گانه متفقین بود. تصمیمات: عملیات نورماندی (روز دی)، تقسیم آلمان، و وعده استقلال ایران پس از جنگ. بیانیه تهران «استقلال و تمامیت ارضی ایران» را تضمین کرد اما در عمل ایران تا ۱۹۴۶ تحت اشغال ماند. محمدرضا شاه در کنفرانس حضور نداشت.",
        en: "The Tehran Conference (Nov 28 - Dec 1, 1943) was the first meeting of the Allied Big Three. Decisions: Operation Overlord (D-Day), division of Germany, and promise of Iran's independence after the war. The Tehran Declaration guaranteed 'independence and territorial integrity of Iran' but in practice Iran remained occupied until 1946.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tehran_Conference%2C_1943.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "نبرد استالینگراد - نقطه عطف جنگ", en: "Battle of Stalingrad - WWII Turning Point" },
        description: { fa: "شکست آلمان - ۲ میلیون تلفات", en: "German defeat - 2 million casualties" },
        details: {
          fa: "نبرد استالینگراد (اوت ۱۹۴۲ - فوریه ۱۹۴۳) خونین‌ترین نبرد تاریخ بود. ارتش ششم آلمان محاصره و تسلیم شد. ۲ میلیون نفر کشته یا زخمی شدند. این شکست نقطه عطف جنگ در جبهه شرق بود.",
          en: "The Battle of Stalingrad (Aug 1942 - Feb 1943) was the bloodiest battle in history. Germany's 6th Army was encircled and surrendered. 2 million were killed or wounded. This defeat was the turning point on the Eastern Front.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Bundesarchiv_Bild_183-W0506-316%2C_Russland%2C_Kampf_um_Stalingrad%2C_Siegesflagge.jpg&width=200",
      },
      {
        country: "usa",
        title: { fa: "حمله متفقین به ایتالیا", en: "Allied Invasion of Italy" },
        description: { fa: "متفقین سیسیل و جنوب ایتالیا را فتح کردند - سقوط موسولینی", en: "Allies conquer Sicily and southern Italy - Mussolini falls" },
        details: {
          fa: "متفقین در ژوئیه ۱۹۴۳ به سیسیل حمله کردند و موسولینی سرنگون شد. ایتالیا تسلیم شد اما آلمان شمال ایتالیا را اشغال کرد. جنگ خونین در خط گوستاو و آنزیو ادامه یافت. آزادسازی کامل ایتالیا تا ۱۹۴۵ طول کشید.",
          en: "The Allies invaded Sicily in July 1943 and Mussolini was overthrown. Italy surrendered but Germany occupied northern Italy. Bloody fighting continued at the Gustav Line and Anzio. Complete liberation of Italy took until 1945.",
        },
      },
      {
        country: "uk",
        title: { fa: "بمباران هامبورگ - عملیات گومورا", en: "Bombing of Hamburg - Operation Gomorrah" },
        description: { fa: "بمباران آتشین متفقین ۴۲,۰۰۰ غیرنظامی آلمانی را کشت", en: "Allied firebombing kills 42,000 German civilians" },
        details: {
          fa: "نیروی هوایی بریتانیا و آمریکا در عملیات گومورا هامبورگ را بمباران آتشین کردند. طوفان آتش ناشی از بمباران ۴۲,۰۰۰ غیرنظامی را کشت و بخش بزرگی از شهر را ویران کرد. بمباران استراتژیک شهرهای آلمان بحث‌برانگیزترین جنبه جنگ هوایی متفقین بود.",
          en: "The British and American air forces firebombed Hamburg in Operation Gomorrah. The resulting firestorm killed 42,000 civilians and destroyed much of the city. Strategic bombing of German cities remained the most controversial aspect of the Allied air war.",
        },
      },
    ],
  },
  {
    year: 1944,
    shamsiYear: "۱۳۲۳",
    iran: {
      title: { fa: "بحران امتیاز نفت شمال", en: "Northern Oil Concession Crisis" },
      description: { fa: "شوروی خواستار امتیاز نفت شمال ایران شد - مصدق رهبری مخالفان را بر عهده گرفت", en: "Soviets demand northern oil concession — Mossadegh leads opposition in Majles" },
      details: {
        fa: "شوروی با اعزام هیئتی به تهران خواستار امتیاز نفت شمال ایران شد. محمد مصدق در مجلس شورای ملی رهبری مخالفت با واگذاری امتیاز نفت به هر کشور خارجی را بر عهده گرفت. مجلس با تصویب قانونی، دولت را از مذاکره و اعطای هرگونه امتیاز نفتی بدون تصویب مجلس منع کرد. این اقدام مصدق سرآغاز مسیری بود که به ملی شدن نفت در ۱۹۵۱ منجر شد.",
        en: "The Soviet Union sent a delegation to Tehran demanding a northern Iran oil concession. Mohammad Mossadegh led opposition in the Majles against granting oil concessions to any foreign power. Parliament passed a law prohibiting the government from negotiating or granting any oil concessions without parliamentary approval. This action by Mossadegh was the beginning of the path that led to oil nationalization in 1951.",
      },
    },
  },
  {
    year: 1945,
    shamsiYear: "۱۳۲۴",
    iran: {
      title: { fa: "بحران آذربایجان و کردستان", en: "Azerbaijan & Kurdistan Crisis" },
      description: { fa: "شوروی دولت‌های دست‌نشانده در آذربایجان و کردستان ایجاد کرد", en: "USSR creates puppet states in Azerbaijan and Kurdistan" },
      details: {
        fa: "شوروی از خروج ایران امتناع کرد و «جمهوری خودمختار آذربایجان» و «جمهوری مهاباد کردستان» را ایجاد کرد. این اولین بحران جنگ سرد بود. فشار آمریکا و بریتانیا و مذاکرات قوام‌السلطنه با استالین (وعده امتیاز نفت شمال) منجر به عقب‌نشینی شوروی در ۱۹۴۶ شد. ارتش ایران آذربایجان و کردستان را بازپس گرفت.",
        en: "The USSR refused to leave Iran and created the 'Autonomous Republic of Azerbaijan' and 'Republic of Mahabad Kurdistan.' This was the first Cold War crisis. US/British pressure and Qavam's negotiations with Stalin (promising a northern oil concession) led to Soviet withdrawal in 1946. The Iranian army recaptured Azerbaijan and Kurdistan.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "بمب اتمی هیروشیما و ناگازاکی", en: "Atomic Bombs on Hiroshima & Nagasaki" },
        description: { fa: "۲۰۰,۰۰۰+ کشته - ژاپن تسلیم شد - آغاز عصر اتمی", en: "200,000+ killed - Japan surrenders - Atomic age begins" },
        details: {
          fa: "در ۶ اوت بمب اتمی «پسر کوچولو» بر هیروشیما و در ۹ اوت «مرد چاق» بر ناگازاکی انداخته شد. بیش از ۲۰۰ هزار نفر در اثر انفجار و تشعشع کشته شدند. ژاپن در ۱۵ اوت تسلیم شد. عصر اتمی و توازن وحشت آغاز شد.",
          en: "On August 6, the 'Little Boy' atomic bomb was dropped on Hiroshima and on August 9, 'Fat Man' on Nagasaki. Over 200,000 were killed by blast and radiation. Japan surrendered on August 15. The atomic age and balance of terror began.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Nagasakibomb.jpg&width=200",
      },
      {
        country: "germany",
        title: { fa: "سقوط برلین - تقسیم آلمان", en: "Fall of Berlin - Division of Germany" },
        description: { fa: "خودکشی هیتلر - آلمان تسلیم شد - اشغال چهارگانه", en: "Hitler's suicide - Germany surrenders - Four-power occupation" },
        details: {
          fa: "هیتلر در ۳۰ آوریل ۱۹۴۵ در پناهگاه خود خودکشی کرد و پرچم شوروی بر فراز رایشتاگ برافراشته شد. آلمان به ۴ منطقه اشغالی تحت کنترل آمریکا، بریتانیا، فرانسه و شوروی تقسیم شد. این تقسیم‌بندی به ایجاد دو آلمان و دیوار برلین منجر شد که تا ۱۹۸۹ پابرجا ماند.",
          en: "Hitler committed suicide on April 30, 1945 in his bunker, and the Soviet flag was raised over the Reichstag. Germany was divided into 4 occupation zones controlled by the US, Britain, France, and the Soviet Union. This partition led to the creation of two Germanys and the Berlin Wall, which stood until 1989.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Raising_a_flag_over_the_Reichstag.jpg&width=200",
      },
      {
        country: "world",
        title: { fa: "تأسیس سازمان ملل متحد", en: "United Nations Founded" },
        description: { fa: "۵۱ کشور منشور ملل متحد را امضا کردند", en: "51 countries sign the UN Charter" },
        details: {
          fa: "در کنفرانس سانفرانسیسکو ۵۱ کشور منشور ملل متحد را امضا کردند تا از تکرار جنگ جهانی جلوگیری شود. شورای امنیت با ۵ عضو دائم دارای حق وتو (آمریکا، بریتانیا، فرانسه، شوروی و چین) تشکیل شد. این ساختار قدرت وتو تا امروز یکی از بحث‌برانگیزترین جنبه‌های سازمان ملل باقی مانده است.",
          en: "At the San Francisco Conference, 51 founding members signed the UN Charter to prevent another world war. The Security Council was established with 5 permanent veto-wielding members: the US, UK, France, Soviet Union, and China. This veto power structure remains one of the most controversial aspects of the UN to this day.",
        },
      },
      {
        country: "russia",
        title: { fa: "شوروی ابرقدرت شد - آغاز جنگ سرد", en: "USSR Becomes Superpower - Cold War Begins" },
        description: { fa: "شوروی نیمی از اروپا را کنترل کرد", en: "Soviet Union controls half of Europe" },
        details: {
          fa: "ارتش سرخ در اروپای شرقی مستقر شد و پرده آهنین از بالتیک تا آدریاتیک کشیده شد. شوروی در ۱۹۴۹ بمب اتمی آزمایش کرد و مسابقه تسلیحات هسته‌ای آغاز شد. جنگ سرد جهان را به دو بلوک شرق و غرب تقسیم کرد و برای نیم قرن سیاست جهانی را شکل داد.",
          en: "The Red Army remained stationed across Eastern Europe, and the Iron Curtain descended from the Baltic to the Adriatic. The Soviet Union tested its atomic bomb in 1949, launching the nuclear arms race. The Cold War divided the world into Eastern and Western blocs, shaping global politics for half a century.",
        },
      },
      {
        country: "france",
        title: { fa: "آزادی فرانسه - دوگل قهرمان ملی", en: "Liberation of France - De Gaulle National Hero" },
        description: { fa: "فرانسه از اشغال نازی آزاد شد", en: "France liberated from Nazi occupation" },
        details: {
          fa: "عملیات دی-دی در ۶ ژوئن ۱۹۴۴ آغاز شد و پاریس در اوت ۱۹۴۴ آزاد شد. شارل دوگل در رأس دولت موقت قرار گرفت و به قهرمان ملی فرانسه تبدیل شد. آزادسازی فرانسه غرور ملی را احیا کرد، اما کشور با ویرانی گسترده و محاکمه همکاران نازی روبرو بود.",
          en: "D-Day on June 6, 1944 launched the liberation, and Paris was freed in August 1944. Charles de Gaulle headed the provisional government and became France's national hero. The liberation restored national pride, but France faced widespread destruction and painful reckoning with Nazi collaboration.",
        },
      },
    ],
  },
  {
    year: 1946,
    shamsiYear: "۱۳۲۵",
    iran: {
      title: { fa: "بازپس‌گیری آذربایجان و کردستان", en: "Recapture of Azerbaijan & Kurdistan" },
      description: { fa: "ارتش ایران جمهوری‌های جعلی شوروی را برچید", en: "Iranian army dismantles Soviet puppet republics" },
      details: {
        fa: "قوام‌السلطنه با دیپلماسی هوشمندانه (وعده امتیاز نفت شمال به شوروی) و فشار آمریکا، شوروی را مجبور به عقب‌نشینی کرد. ارتش ایران در آذر ۱۳۲۵ آذربایجان و کردستان را بازپس گرفت. پیشه‌وری و قاضی محمد سقوط کردند. مجلس بعداً قرارداد نفت شمال را رد کرد.",
        en: "Qavam used clever diplomacy (promising a northern oil concession to USSR) and US pressure to force Soviet withdrawal. The Iranian army recaptured Azerbaijan and Kurdistan in December 1946. Pishevari and Qazi Muhammad fell. Parliament later rejected the northern oil deal.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "آغاز رسمی جنگ سرد", en: "Cold War Officially Begins" },
        description: { fa: "سخنرانی «پرده آهنین» چرچیل - تقسیم جهان به دو بلوک", en: "Churchill's 'Iron Curtain' speech - World divided into two blocs" },
        details: {
          fa: "چرچیل در سخنرانی معروف خود در فولتون میسوری اعلام کرد «پرده آهنینی از اشتتین در بالتیک تا تریسته در آدریاتیک بر قاره فرود آمده». این سخنرانی آغاز رسمی جنگ سرد و تقسیم جهان به دو بلوک شرق و غرب را نشان داد.",
          en: "Churchill declared in his famous speech at Fulton, Missouri that 'an iron curtain has descended across the Continent from Stettin in the Baltic to Trieste in the Adriatic.' This speech marked the official beginning of the Cold War and the division of the world into Eastern and Western blocs.",
        },
      },
      {
        country: "france",
        title: { fa: "جمهوری چهارم فرانسه تأسیس شد", en: "French Fourth Republic Established" },
        description: { fa: "فرانسه پس از جنگ بازسازی می‌شود", en: "France rebuilds after the war" },
        details: {
          fa: "جمهوری چهارم فرانسه با قانون اساسی جدید تأسیس شد. فرانسه با کمک طرح مارشال آمریکا بازسازی را آغاز کرد. اما بی‌ثباتی سیاسی با تغییرات مکرر دولت و جنگ‌های استعماری در هندوچین و الجزایر این جمهوری را تضعیف کرد.",
          en: "The French Fourth Republic was established with a new constitution. France began reconstruction with the help of America's Marshall Plan. But political instability with frequent government changes and colonial wars in Indochina and Algeria weakened this republic.",
        },
      },
      {
        country: "usa",
        title: { fa: "دکترین ترومن - مهار کمونیسم", en: "Truman Doctrine - Containment of Communism" },
        description: { fa: "آمریکا سیاست مهار کمونیسم در سراسر جهان را آغاز کرد", en: "US begins policy of containing communism worldwide" },
        details: {
          fa: "ترومن اعلام کرد آمریکا از «مردم آزاد» در برابر تهدید کمونیسم حمایت خواهد کرد. کمک نظامی و اقتصادی به یونان و ترکیه فرستاده شد تا از نفوذ شوروی جلوگیری شود. دکترین ترومن پایه سیاست خارجی آمریکا در جنگ سرد شد.",
          en: "Truman declared the US would support 'free peoples' against communist threats. Military and economic aid was sent to Greece and Turkey to prevent Soviet influence. The Truman Doctrine became the foundation of US foreign policy during the Cold War.",
        },
      },
    ],
  },
  {
    year: 1947,
    shamsiYear: "۱۳۲۶",
    iran: {
      title: { fa: "پیامدهای بحران آذربایجان - بازگشت ثبات", en: "Azerbaijan Crisis Aftermath - Return of Stability" },
      description: { fa: "ایران پس از بحران شوروی به بازسازی پرداخت - رشد جنبش ملی نفت", en: "Iran rebuilds after Soviet crisis - Oil nationalization movement grows" },
      details: {
        fa: "پس از بازپس‌گیری آذربایجان و کردستان در ۱۳۲۵، ایران تلاش کرد ثبات سیاسی را بازیابد. مجلس پانزدهم قرارداد نفت با شوروی را رد کرد. احساسات ملی‌گرایانه در مورد نفت رشد کرد و زمینه برای جنبش ملی شدن نفت فراهم شد. حزب توده با وجود سرکوب همچنان فعال بود.",
        en: "After recapturing Azerbaijan and Kurdistan in 1946, Iran tried to restore political stability. The 15th Parliament rejected the oil agreement with the Soviet Union. Nationalist sentiments regarding oil grew, setting the stage for the oil nationalization movement. The Tudeh Party remained active despite suppression.",
      },
    },
    world: [
      {
        country: "uk",
        title: { fa: "استقلال و تقسیم هند و پاکستان", en: "India-Pakistan Independence & Partition" },
        description: { fa: "بریتانیا هند را ترک کرد - تقسیم خونین هند و پاکستان", en: "Britain leaves India - Bloody partition of India and Pakistan" },
        details: {
          fa: "در ۱۵ اوت ۱۹۴۷ بریتانیا هند را ترک کرد و دو کشور هند و پاکستان تشکیل شد. تقسیم بر اساس مذهب (هندو و مسلمان) منجر به بزرگترین مهاجرت اجباری تاریخ شد. بیش از ۱۵ میلیون نفر جابجا و تا ۲ میلیون نفر کشته شدند.",
          en: "On August 15, 1947, Britain left India and two countries, India and Pakistan, were formed. The partition along religious lines (Hindu and Muslim) led to the largest forced migration in history. Over 15 million people were displaced and up to 2 million were killed.",
        },
      },
      {
        country: "usa",
        title: { fa: "طرح مارشال - بازسازی اروپا", en: "Marshall Plan - European Reconstruction" },
        description: { fa: "آمریکا ۱۳ میلیارد دلار برای بازسازی اروپا اختصاص داد", en: "US allocates $13 billion for European reconstruction" },
        details: {
          fa: "طرح مارشال (برنامه بازسازی اروپا) در ۱۹۴۷ اعلام شد. آمریکا ۱۳ میلیارد دلار (معادل ۱۵۰ میلیارد دلار امروزی) برای بازسازی اروپای ویران از جنگ اختصاص داد. این طرح هم انگیزه اقتصادی داشت و هم هدف جلوگیری از گسترش کمونیسم در اروپا. جنگ سرد عمیق‌تر شد.",
          en: "The Marshall Plan (European Recovery Program) was announced in 1947. The US allocated $13 billion ($150 billion in today's dollars) for rebuilding war-torn Europe. The plan had both economic motives and the goal of preventing communist expansion in Europe. The Cold War deepened.",
        },
      },
      {
        country: "china",
        title: { fa: "جنگ داخلی چین شدت گرفت", en: "Chinese Civil War Intensifies" },
        description: { fa: "کمونیست‌ها و ناسیونالیست‌ها در جنگ تمام‌عیار", en: "Communists and Nationalists in all-out war" },
        details: {
          fa: "جنگ داخلی چین بین کمونیست‌های مائو و ناسیونالیست‌های چیانگ کای‌شک شدت گرفت. ارتش آزادی‌بخش خلق با حمایت دهقانان و تاکتیک‌های چریکی پیشرفت‌های بزرگی کرد. فساد و بی‌کفایتی حکومت ناسیونالیست حمایت مردمی را از دست داد. تا ۱۹۴۹ کمونیست‌ها پیروز شدند.",
          en: "China's civil war between Mao's Communists and Chiang Kai-shek's Nationalists intensified. The People's Liberation Army, backed by peasants and guerrilla tactics, made major advances. Corruption and incompetence of the Nationalist government lost public support. By 1949, the Communists prevailed.",
        },
      },
    ],
  },
  {
    year: 1948,
    shamsiYear: "۱۳۲۷",
    iran: {
      title: { fa: "ترور نافرجام شاه - سرکوب حزب توده", en: "Assassination Attempt on Shah - Tudeh Party Crackdown" },
      description: { fa: "تیراندازی به محمدرضا شاه - حزب توده غیرقانونی شد", en: "Mohammad Reza Shah shot at - Tudeh Party banned" },
      details: {
        fa: "در ۱۵ بهمن ۱۳۲۶ (۴ فوریه ۱۹۴۹) یک عکاس روزنامه به محمدرضا شاه در دانشگاه تهران تیراندازی کرد. شاه زخمی شد اما جان سالم به در برد. حکومت حزب توده را متهم کرد و آن را غیرقانونی اعلام کرد. شاه از این فرصت برای تقویت قدرت خود استفاده کرد و مجلس مؤسسان برای افزایش اختیارات شاه تشکیل شد.",
        en: "On February 4, 1949, a newspaper photographer shot at Mohammad Reza Shah at Tehran University. The Shah was wounded but survived. The government blamed the Tudeh Party and banned it. The Shah used this opportunity to strengthen his power, and a constituent assembly was formed to increase royal authority.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "تأسیس اسرائیل - نکبت - جنگ اعراب و اسرائیل", en: "Israel Founded - Nakba - Arab-Israeli War" },
        description: { fa: "اعلام موجودیت اسرائیل - آوارگی ۷۰۰,۰۰۰ فلسطینی", en: "Israel declares independence - 700,000 Palestinians displaced" },
        details: {
          fa: "در ۱۴ مه ۱۹۴۸ دیوید بن‌گوریون استقلال اسرائیل را اعلام کرد. ارتش‌های مصر، اردن، سوریه و عراق حمله کردند اما شکست خوردند. بیش از ۷۰۰,۰۰۰ فلسطینی آواره شدند (نکبت). این رویداد خاورمیانه را برای دهه‌ها بی‌ثبات کرد و منبع اصلی تنش در منطقه شد.",
          en: "On May 14, 1948, David Ben-Gurion declared Israel's independence. Armies of Egypt, Jordan, Syria, and Iraq attacked but were defeated. Over 700,000 Palestinians were displaced (Nakba). This event destabilized the Middle East for decades and became the main source of tension in the region.",
        },
      },
      {
        country: "germany",
        title: { fa: "محاصره برلین - آغاز جنگ سرد عملی", en: "Berlin Blockade - Practical Start of Cold War" },
        description: { fa: "شوروی برلین غربی را محاصره کرد - پل هوایی آمریکا", en: "USSR blockades West Berlin - US airlift" },
        details: {
          fa: "شوروی در ژوئن ۱۹۴۸ تمام راه‌های زمینی به برلین غربی را بست. آمریکا و بریتانیا با پل هوایی عظیم (بیش از ۲۷۰,۰۰۰ پرواز) مردم برلین غربی را تأمین کردند. محاصره ۱۱ ماه ادامه یافت و نشان‌دهنده شدت جنگ سرد بود.",
          en: "The Soviet Union in June 1948 blocked all land routes to West Berlin. The US and Britain sustained West Berlin's population through a massive airlift (over 270,000 flights). The blockade lasted 11 months and demonstrated the intensity of the Cold War.",
        },
      },
      {
        country: "uk",
        title: { fa: "تأسیس خدمات ملی بهداشت بریتانیا (NHS)", en: "Britain's National Health Service (NHS) Founded" },
        description: { fa: "دولت اتلی بهداشت رایگان برای همه را تأسیس کرد", en: "Attlee government establishes free healthcare for all" },
        details: {
          fa: "دولت کارگری کلمنت اتلی سرویس ملی بهداشت (NHS) را در ۵ ژوئیه ۱۹۴۸ تأسیس کرد. برای اولین بار در تاریخ بریتانیا، خدمات بهداشتی رایگان در دسترس همه شهروندان قرار گرفت. NHS به نماد دولت رفاه بریتانیا تبدیل شد و تا امروز یکی از محبوب‌ترین نهادهای بریتانیایی است.",
          en: "Clement Attlee's Labour government founded the National Health Service (NHS) on July 5, 1948. For the first time in British history, free healthcare was available to all citizens. The NHS became a symbol of Britain's welfare state and remains one of Britain's most beloved institutions to this day.",
        },
      },
    ],
  },

  {
    year: 1949,
    shamsiYear: "۱۳۲۸",
    iran: {
      title: { fa: "تأسیس حزب توده و نفوذ شوروی", en: "Tudeh Party & Soviet Influence" },
      description: { fa: "حزب کمونیست توده قدرت‌مند شد - نگرانی غرب", en: "Communist Tudeh Party gains power - Western concern" },
      details: {
        fa: "حزب توده ایران که در ۱۳۲۰ تأسیس شده بود، پس از جنگ به یکی از قدرتمندترین احزاب سیاسی ایران تبدیل شد. با حمایت شوروی در میان کارگران، روشنفکران و نظامیان نفوذ گسترده‌ای یافت. نگرانی آمریکا و بریتانیا از نفوذ کمونیسم در ایران عامل مهمی در سیاست‌های بعدی آنها شد.",
        en: "The Tudeh Party, founded in 1941, became one of Iran's most powerful political parties after the war. With Soviet backing, it gained widespread influence among workers, intellectuals, and military officers. American and British concern about communist influence in Iran became a key factor in their subsequent policies toward the country.",
      },
    },
    world: [
      {
        country: "china",
        title: { fa: "پیروزی انقلاب کمونیستی چین", en: "Chinese Communist Revolution Triumphs" },
        description: { fa: "مائو جمهوری خلق چین را تأسیس کرد - چیانگ کای‌شک به تایوان گریخت", en: "Mao founds People's Republic - Chiang Kai-shek flees to Taiwan" },
        details: {
          fa: "مائو زدونگ در اول اکتبر ۱۹۴۹ از بالای دروازه تیان‌آنمن جمهوری خلق چین را اعلام کرد. پس از ۲۲ سال جنگ داخلی، کمونیست‌ها بر ناسیونالیست‌ها پیروز شدند. چیانگ کای‌شک و ۲ میلیون نفر به تایوان گریختند. این انقلاب یک‌چهارم جمعیت جهان را تحت حکومت کمونیستی درآورد.",
          en: "Mao Zedong proclaimed the People's Republic of China from Tiananmen Gate on October 1, 1949. After 22 years of civil war, the Communists defeated the Nationalists. Chiang Kai-shek and 2 million people fled to Taiwan. This revolution brought one quarter of the world's population under communist rule.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mao_Zedong_portrait.jpg&width=200",
      },
      {
        country: "germany",
        title: { fa: "تأسیس دو آلمان - تقسیم رسمی", en: "Two Germanys Founded - Official Division" },
        description: { fa: "جمهوری فدرال آلمان (غربی) و جمهوری دموکراتیک آلمان (شرقی) تأسیس شدند", en: "Federal Republic of Germany (West) and German Democratic Republic (East) founded" },
        details: {
          fa: "در مه ۱۹۴۹ جمهوری فدرال آلمان (آلمان غربی) با قانون اساسی بن تأسیس شد و کنراد آدناور صدراعظم شد. در اکتبر جمهوری دموکراتیک آلمان (آلمان شرقی) تحت نفوذ شوروی تأسیس شد. تقسیم آلمان تا ۱۹۹۰ ادامه یافت و نماد جنگ سرد شد.",
          en: "In May 1949, the Federal Republic of Germany (West Germany) was founded with the Bonn constitution, and Konrad Adenauer became chancellor. In October, the German Democratic Republic (East Germany) was established under Soviet influence. Germany's division lasted until 1990 and became the symbol of the Cold War.",
        },
      },
      {
        country: "russia",
        title: { fa: "شوروی بمب اتمی آزمایش کرد", en: "Soviet Union Tests Atomic Bomb" },
        description: { fa: "شوروی اولین بمب اتمی خود را آزمایش کرد - پایان انحصار اتمی آمریکا", en: "USSR tests first atomic bomb - End of US nuclear monopoly" },
        details: {
          fa: "شوروی در ۲۹ اوت ۱۹۴۹ اولین بمب اتمی خود را در قزاقستان آزمایش کرد. این آزمایش انحصار اتمی آمریکا را شکست و مسابقه تسلیحات هسته‌ای آغاز شد. جاسوسی اتمی شوروی (از جمله کلاوس فوکس) نقش مهمی در تسریع برنامه هسته‌ای شوروی داشت.",
          en: "The USSR tested its first atomic bomb on August 29, 1949 in Kazakhstan. This test broke America's nuclear monopoly and launched the nuclear arms race. Soviet atomic espionage (including Klaus Fuchs) played a key role in accelerating the Soviet nuclear program.",
        },
      },
    ],
  },
  {
    year: 1950,
    shamsiYear: "۱۳۲۹",
    iran: {
      title: { fa: "ترور رزم‌آرا - رشد جنبش ملی شدن نفت", en: "Razmara Assassination - Oil Nationalization Movement Grows" },
      description: { fa: "نخست‌وزیر رزم‌آرا ترور شد - جنبش ملی شدن نفت قدرت گرفت", en: "PM Razmara assassinated - Oil nationalization movement gains power" },
      details: {
        fa: "ژنرال حاج‌علی رزم‌آرا نخست‌وزیر ایران که مخالف ملی شدن نفت بود، در ۱۶ اسفند ۱۳۲۹ (۷ مارس ۱۹۵۱) توسط خلیل طهماسبی از فداییان اسلام ترور شد. رزم‌آرا معتقد بود ایران توان اداره صنعت نفت را ندارد. ترور او راه را برای ملی شدن نفت و نخست‌وزیری مصدق هموار کرد.",
        en: "General Haj Ali Razmara, Iran's Prime Minister who opposed oil nationalization, was assassinated on March 7, 1951 by Khalil Tahmasebi of the Fada'iyan-e Islam. Razmara believed Iran couldn't manage the oil industry. His assassination paved the way for oil nationalization and Mosaddegh's premiership.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "آغاز جنگ کره", en: "Korean War Begins" },
        description: { fa: "کره شمالی به کره جنوبی حمله کرد - جنگ سرد داغ شد", en: "North Korea invades South Korea - Cold War heats up" },
        details: {
          fa: "در ۲۵ ژوئن ۱۹۵۰ کره شمالی با حمایت شوروی و چین به کره جنوبی حمله کرد. آمریکا و متحدانش تحت پرچم سازمان ملل وارد جنگ شدند. جنگ کره اولین درگیری نظامی مستقیم جنگ سرد بود و تا ۱۹۵۳ ادامه یافت. بیش از ۳ میلیون نفر کشته شدند.",
          en: "On June 25, 1950, North Korea, backed by the Soviet Union and China, invaded South Korea. The US and allies entered the war under the UN flag. The Korean War was the first direct military conflict of the Cold War and lasted until 1953. Over 3 million people were killed.",
        },
      },
      {
        country: "china",
        title: { fa: "چین وارد تبت شد", en: "China Invades Tibet" },
        description: { fa: "ارتش آزادی‌بخش خلق تبت را اشغال کرد", en: "People's Liberation Army occupies Tibet" },
        details: {
          fa: "در اکتبر ۱۹۵۰ ارتش آزادی‌بخش خلق چین وارد تبت شد و آن را ضمیمه جمهوری خلق چین کرد. تبت عملاً استقلال خود را از دست داد. دالای لاما تلاش کرد با پکن مذاکره کند اما در نهایت در ۱۹۵۹ به هند گریخت.",
          en: "In October 1950, China's People's Liberation Army entered Tibet and annexed it to the People's Republic of China. Tibet effectively lost its independence. The Dalai Lama tried to negotiate with Beijing but eventually fled to India in 1959.",
        },
      },
      {
        country: "usa",
        title: { fa: "مک‌کارتیسم - ترس از کمونیسم در آمریکا", en: "McCarthyism - Red Scare in America" },
        description: { fa: "سناتور مک‌کارتی جستجوی کمونیست‌ها در دولت را آغاز کرد", en: "Senator McCarthy begins hunting for communists in government" },
        details: {
          fa: "سناتور جوزف مک‌کارتی ادعا کرد ۲۰۵ کمونیست در وزارت خارجه نفوذ کرده‌اند. شکار جادوگران ضد کمونیستی آغاز شد. هزاران نفر از مشاغل دولتی، هالیوود و دانشگاه‌ها اخراج شدند. آزادی بیان محدود شد و فضای ترس و سوءظن بر آمریکا حاکم شد.",
          en: "Senator Joseph McCarthy claimed 205 communists had infiltrated the State Department. An anti-communist witch hunt began. Thousands were fired from government jobs, Hollywood, and universities. Free speech was curtailed and an atmosphere of fear and suspicion gripped America.",
        },
      },
    ],
  },

  {
    year: 1951,
    shamsiYear: "۱۳۳۰",
    yearInfo: {
      fa: "مصدق نخست‌وزیر شد و نفت ایران را ملی کرد. بزرگترین چالش منافع بریتانیا در خاورمیانه.",
      en: "Mosaddegh becomes PM and nationalizes Iran's oil. The greatest challenge to British interests in the Middle East.",
    },
    iran: {
      title: { fa: "ملی شدن صنعت نفت - مصدق نخست‌وزیر", en: "Oil Nationalization - Mosaddegh Becomes PM" },
      description: { fa: "مصدق قانون ملی شدن نفت را تصویب کرد - بریتانیا تحریم نفتی اعمال کرد", en: "Mosaddegh passes oil nationalization law - Britain imposes oil embargo" },
      details: {
        fa: "دکتر محمد مصدق در ۲۹ اسفند ۱۳۲۹ نخست‌وزیر شد و بلافاصله قانون ملی شدن صنعت نفت را اجرا کرد. شرکت نفت ایران-انگلیس بسته شد. بریتانیا با تحریم نفتی، مسدود کردن حساب‌های بانکی ایران، و تهدید نظامی واکنش نشان داد. پالایشگاه آبادان (بزرگترین جهان) تعطیل شد. درآمد نفتی ایران به صفر رسید. مصدق به دیوان لاهه و سازمان ملل رفت.",
        en: "Dr. Mohammad Mosaddegh became PM on March 15, 1951 and immediately implemented the oil nationalization law. The Anglo-Iranian Oil Company was shut down. Britain responded with an oil embargo, freezing Iran's bank accounts, and military threats. The Abadan refinery (world's largest) was closed. Iran's oil revenue dropped to zero. Mosaddegh went to The Hague and the UN.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mosaddegh-3.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ کره - جنگ سرد داغ شد", en: "Korean War - Cold War Heats Up" },
        description: { fa: "کره شمالی به جنوب حمله کرد - ۳ میلیون تلفات", en: "North Korea invades South - 3 million casualties" },
        details: {
          fa: "کره شمالی در ژوئن ۱۹۵۰ به کره جنوبی حمله کرد و نیروهای سازمان ملل به رهبری آمریکا وارد جنگ شدند. ۳ میلیون نفر کشته شدند و جنگ در ۱۹۵۳ با آتش‌بس (نه صلح) پایان یافت. این جنگ ثابت کرد که جنگ سرد می‌تواند به درگیری نظامی واقعی تبدیل شود.",
          en: "North Korea invaded South Korea in June 1950, and UN forces led by the US entered the war. Three million people were killed and the war ended in 1953 with an armistice (not a peace treaty). The Korean War proved that the Cold War could turn into real military conflict.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحران نفت ایران - تحریم بریتانیا", en: "Iran Oil Crisis - British Embargo" },
        description: { fa: "بریتانیا نیروی دریایی به خلیج فارس فرستاد", en: "Britain sends navy to Persian Gulf" },
        details: {
          fa: "نیروی دریایی سلطنتی بریتانیا به خلیج فارس اعزام شد تا صادرات نفت ایران را مسدود کند. بازار جهانی نفت مختل شد و درآمد نفتی ایران به صفر رسید. MI6 برنامه‌ریزی کودتا علیه مصدق را آغاز کرد که در ۱۹۵۳ با کمک CIA اجرا شد.",
          en: "The Royal Navy was deployed to the Persian Gulf to block Iranian oil exports. The global oil market was disrupted and Iran's oil revenue dropped to zero. MI6 began planning the coup against Mosaddegh, which was executed in 1953 with CIA assistance.",
        },
      },
      {
        country: "france",
        title: { fa: "جنگ هندوچین - فرانسه در ویتنام", en: "Indochina War - France in Vietnam" },
        description: { fa: "فرانسه در جنگ علیه ویتنام کمونیست گیر افتاد", en: "France mired in war against Communist Vietnam" },
        details: {
          fa: "فرانسه در جنگ استعماری علیه هوشی‌مین و ویتنام کمونیست (ویت‌مین) گرفتار بود. آمریکا ۸۰ درصد هزینه جنگ را تأمین می‌کرد اما فرانسه نمی‌توانست پیروز شود. این جنگ در ۱۹۵۴ با شکست فاجعه‌بار فرانسه در دین‌بین‌فو پایان یافت.",
          en: "France was bogged down in a colonial war against Ho Chi Minh and Communist Vietnam (Viet Minh). The US funded 80% of war costs but France couldn't win. The war ended in 1954 with France's catastrophic defeat at Dien Bien Phu.",
        },
      },
    ],
  },
  {
    year: 1952,
    shamsiYear: "۱۳۳۱",
    iran: {
      title: { fa: "رویارویی مصدق و شاه - قیام ۳۰ تیر", en: "Mossadegh vs. Shah — 30 Tir Uprising" },
      description: { fa: "قیام مردمی ۳۰ تیر، مصدق اختیارات فوق‌العاده گرفت", en: "Popular July uprising (30 Tir), Mossadegh gains emergency powers" },
      details: {
        fa: "مصدق در تیرماه ۱۳۳۱ با شاه بر سر کنترل وزارت جنگ درگیر شد و استعفا داد. قوام‌السلطنه نخست‌وزیر شد اما قیام خونین مردم در ۳۰ تیر (۲۱ ژوئیه) او را مجبور به کناره‌گیری کرد. مصدق به قدرت بازگشت و مجلس اختیارات فوق‌العاده شش‌ماهه به او داد. مصدق در اوج قدرت و محبوبیت بود اما تنش با شاه، بریتانیا و آمریکا رو به افزایش بود.",
        en: "In July 1952, Mossadegh clashed with the Shah over control of the War Ministry and resigned. Qavam became PM but a bloody popular uprising on July 21 (30 Tir) forced his resignation. Mossadegh returned to power and parliament granted him six-month emergency powers. Mossadegh was at the height of power and popularity, but tensions with the Shah, Britain, and the US were escalating.",
      },
    },
  },
  {
    year: 1953,
    shamsiYear: "۱۳۳۲",
    yearInfo: {
      fa: "کودتای ۲۸ مرداد: CIA و MI6 دولت منتخب مصدق را سرنگون کردند. این کودتا تاریخ ایران و خاورمیانه را تغییر داد.",
      en: "August 19 coup: CIA and MI6 overthrow the elected Mosaddegh government. This coup changed the history of Iran and the Middle East.",
    },
    iran: {
      title: { fa: "کودتای ۲۸ مرداد ۱۳۳۲", en: "1953 CIA/MI6 Coup d'état" },
      description: { fa: "سرنگونی مصدق توسط CIA (عملیات آژاکس) و MI6 (عملیات چکمه)", en: "Overthrow of Mosaddegh by CIA (Operation Ajax) & MI6 (Operation Boot)" },
      details: {
        fa: "CIA تحت فرماندهی کرمیت روزولت (نوه تئودور روزولت) و MI6 کودتا را طراحی کردند. تلاش اول (۲۵ مرداد) شکست خورد و شاه به بغداد و سپس رم گریخت. در تلاش دوم (۲۸ مرداد) اوباش سازمان‌یافته و بخشی از ارتش، مصدق را سرنگون کردند. مصدق محاکمه و به زندان و سپس تبعید خانگی محکوم شد. شاه بازگشت و دیکتاتوری تشدید شد. CIA بعدها اذعان کرد کودتا اشتباه بود.",
        en: "CIA under Kermit Roosevelt (grandson of Theodore Roosevelt) and MI6 planned the coup. The first attempt (Aug 15) failed and the Shah fled to Baghdad then Rome. In the second attempt (Aug 19), organized mobs and military units overthrew Mosaddegh. Mosaddegh was tried and sentenced to prison then house arrest. The Shah returned and dictatorship intensified. The CIA later admitted the coup was a mistake.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mosaddegh-3.jpg&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "عملیات آژاکس - CIA مصدق را سرنگون کرد", en: "Operation Ajax - CIA Overthrows Mosaddegh" },
        description: { fa: "آیزنهاور دستور کودتا را داد - کرمیت روزولت عملیات را هدایت کرد", en: "Eisenhower orders the coup - Kermit Roosevelt leads operation" },
        details: {
          fa: "آیزنهاور تحت تأثیر برادران دالس (آلن دالس رئیس CIA و جان فاستر دالس وزیر خارجه) دستور عملیات آژاکس را داد. بودجه عملیات ۱ میلیون دلار بود. CIA به روزنامه‌نگاران، سیاستمداران و اوباش رشوه داد. این کودتا الگوی مداخلات بعدی CIA در گواتمالا، شیلی و سایر کشورها شد.",
          en: "Eisenhower, influenced by the Dulles brothers (Allen Dulles, CIA Director, and John Foster Dulles, Secretary of State), ordered Operation Ajax. The operation budget was $1 million. The CIA bribed journalists, politicians, and hired mobs. This coup became the template for subsequent CIA interventions in Guatemala, Chile, and other countries.",
        },
      },
      {
        country: "uk",
        title: { fa: "عملیات چکمه - MI6 در کودتای ایران", en: "Operation Boot - MI6 in Iran Coup" },
        description: { fa: "بریتانیا طراح اصلی کودتا بود و آمریکا را متقاعد کرد", en: "Britain was the original coup planner and convinced the US" },
        details: {
          fa: "بریتانیا پس از ملی شدن صنعت نفت توسط مصدق، اولین طراح کودتا بود و عملیات را «عملیات چکمه» نامید. MI6 سیا را متقاعد کرد که ایران ممکن است کمونیست شود و آمریکا وارد عملیات شد. این کودتا الگویی برای مداخلات جنگ سرد غرب در کشورهای جهان سوم شد.",
          en: "Britain conceived the coup first after Mosaddegh nationalized the oil industry, codenamed 'Operation Boot.' MI6 convinced the CIA that Iran might go communist, bringing America into the operation. This coup set the template for Western Cold War interventions in Third World countries for decades to come.",
        },
      },
      {
        country: "russia",
        title: { fa: "مرگ استالین - پایان دوران وحشت", en: "Stalin Dies - End of the Terror Era" },
        description: { fa: "استالین پس از ۳۰ سال حکومت مطلق درگذشت", en: "Stalin dies after 30 years of absolute rule" },
        details: {
          fa: "ژوزف استالین در ۵ مارس ۱۹۵۳ درگذشت. مبارزه قدرت بین خروشچف، برژنف و مالنکوف آغاز شد. خروشچف سرانجام پیروز شد و در ۱۹۵۶ در کنگره بیستم حزب جنایات استالین را افشا کرد. میلیون‌ها زندانی گولاگ آزاد شدند و «ذوب یخ» خروشچف آغاز شد.",
          en: "Joseph Stalin died on March 5, 1953. A power struggle between Khrushchev, Beria, and Malenkov began. Khrushchev eventually prevailed and in 1956 at the 20th Party Congress, exposed Stalin's crimes. Millions of Gulag prisoners were freed and the 'Khrushchev Thaw' began.",
        },
      },
    ],
  },
  {
    year: 1954,
    shamsiYear: "۱۳۳۳",
    iran: {
      title: { fa: "قرارداد کنسرسیوم نفت", en: "Oil Consortium Agreement" },
      description: { fa: "پس از کودتا، کنسرسیوم بین‌المللی نفت جایگزین ملی شدن شد", en: "After the coup, international oil consortium replaces nationalization" },
      details: {
        fa: "پس از کودتای ۲۸ مرداد و سرنگونی مصدق، دولت زاهدی قرارداد کنسرسیوم نفت را امضا کرد. بر اساس این قرارداد، یک کنسرسیوم بین‌المللی متشکل از شرکت‌های نفتی آمریکایی، بریتانیایی، هلندی و فرانسوی عملیات نفتی ایران را در دست گرفت. سهم ایران ۵۰ درصد از سود تعیین شد. گرچه شرکت نفت ایران رسماً باقی ماند، عملاً ملی شدن نفت بی‌اثر شد و دستاورد مصدق از بین رفت.",
        en: "After the August 1953 coup and Mossadegh's overthrow, the Zahedi government signed the Consortium Agreement. An international consortium of American, British, Dutch, and French oil companies took over Iran's oil operations. Iran's share was set at 50% of profits. Although the National Iranian Oil Company formally remained, nationalization was effectively undone and Mossadegh's achievement was nullified.",
      },
    },
  },
  {
    year: 1955,
    shamsiYear: "۱۳۳۴",
    iran: {
      title: { fa: "ایران به پیمان بغداد پیوست", en: "Iran Joins Baghdad Pact (CENTO)" },
      description: { fa: "همسویی قاطع ایران با غرب در جنگ سرد", en: "Iran aligns firmly with the West in the Cold War" },
      details: {
        fa: "ایران به پیمان بغداد (سنتو) پیوست که یک اتحاد نظامی منطقه‌ای شامل ترکیه، عراق، پاکستان و بریتانیا بود. این پیمان با هدف مقابله با نفوذ شوروی در خاورمیانه تشکیل شده بود. عضویت ایران نشان‌دهنده همسویی کامل شاه با بلوک غرب بود. شوروی این اقدام را تهدیدی علیه خود تلقی کرد و روابط ایران و شوروی تیره شد.",
        en: "Iran joined the Baghdad Pact (CENTO), a regional military alliance including Turkey, Iraq, Pakistan, and Britain. The pact was formed to counter Soviet influence in the Middle East. Iran's membership demonstrated the Shah's complete alignment with the Western bloc. The Soviet Union viewed this as a threat and Iran-Soviet relations deteriorated.",
      },
    },
  },
  {
    year: 1956,
    shamsiYear: "۱۳۳۵",
    iran: {
      title: { fa: "سرکوب مخالفان و تثبیت شاه", en: "Suppression of Opposition & Shah Consolidation" },
      description: { fa: "حزب توده سرکوب شد - شاه با حمایت آمریکا قدرت را تثبیت کرد", en: "Tudeh Party crushed - Shah consolidates power with US support" },
      details: {
        fa: "پس از کودتای ۲۸ مرداد، شاه با حمایت CIA و MI6 سرکوب گسترده مخالفان را آغاز کرد. حزب توده متلاشی و رهبرانش دستگیر یا فراری شدند. ساواک با کمک آمریکا و اسرائیل تأسیس شد. شاه کنترل کامل بر ارتش، مجلس و دستگاه قضایی به دست آورد و مخالفت سیاسی عملاً ممنوع شد.",
        en: "After the 1953 coup, the Shah launched a sweeping crackdown on opposition with CIA and MI6 support. The Tudeh Party was dismantled and its leaders arrested or forced into exile. SAVAK was established with American and Israeli assistance. The Shah gained complete control over the military, parliament, and judiciary, effectively banning political opposition.",
      },
    },
    world: [
      {
        country: "uk",
        title: { fa: "بحران سوئز - پایان امپراتوری بریتانیا", en: "Suez Crisis - End of British Empire" },
        description: { fa: "بریتانیا و فرانسه در مصر شکست خوردند", en: "Britain & France humiliated in Egypt" },
        details: {
          fa: "ناصر کانال سوئز را ملی کرد. بریتانیا، فرانسه و اسرائیل حمله کردند اما آمریکا و شوروی آنها را مجبور به عقب‌نشینی کردند. این بحران پایان امپراتوری بریتانیا و آغاز هژمونی آمریکا در خاورمیانه بود.",
          en: "Nasser nationalized the Suez Canal. Britain, France and Israel attacked but the US and USSR forced them to withdraw. This crisis marked the end of the British Empire and the beginning of American hegemony in the Middle East.",
        },
      },
      {
        country: "russia",
        title: { fa: "سرکوب انقلاب مجارستان توسط شوروی", en: "Soviet Crushing of Hungarian Revolution" },
        description: { fa: "تانک‌های شوروی بوداپست را اشغال کردند - ۲۵۰۰ کشته", en: "Soviet tanks occupy Budapest - 2,500 killed" },
        details: {
          fa: "مردم مجارستان علیه حکومت کمونیستی قیام کردند و ایمره ناگی نخست‌وزیر خروج از پیمان ورشو را اعلام کرد. شوروی با ارسال ۲۰۰۰ تانک قیام را سرکوب کرد. ۲۵۰۰ مجار کشته و ۲۰۰,۰۰۰ نفر به غرب پناهنده شدند. ناگی اعدام شد.",
          en: "Hungarians rose against communist rule and PM Imre Nagy declared withdrawal from the Warsaw Pact. The USSR crushed the uprising with 2,000 tanks. 2,500 Hungarians were killed and 200,000 fled to the West. Nagy was executed.",
        },
      },
      {
        country: "france",
        title: { fa: "جنگ الجزایر شدت گرفت", en: "Algerian War Intensifies" },
        description: { fa: "جنگ استقلال الجزایر فرانسه را بحران‌زده کرد", en: "Algerian independence war plunges France into crisis" },
        details: {
          fa: "جنگ الجزایر (۱۹۵۴-۱۹۶۲) شدت گرفت. ارتش فرانسه از شکنجه و سرکوب خشونت‌آمیز استفاده می‌کرد. جبهه آزادی‌بخش ملی الجزایر (FLN) مقاومت مسلحانه را گسترش داد. این جنگ فرانسه را به بحران سیاسی عمیق کشاند و در نهایت به بازگشت دوگل و تأسیس جمهوری پنجم منجر شد.",
          en: "The Algerian War (1954-1962) intensified. The French army used torture and brutal repression. Algeria's National Liberation Front (FLN) expanded armed resistance. The war plunged France into deep political crisis and ultimately led to de Gaulle's return and the founding of the Fifth Republic.",
        },
      },
    ],
  },
  {
    year: 1957,
    shamsiYear: "۱۳۳۶",
    iran: {
      title: { fa: "تأسیس ساواک", en: "SAVAK Established" },
      description: { fa: "سازمان اطلاعات و امنیت کشور با کمک CIA و موساد تأسیس شد", en: "Intelligence agency established with CIA and Mossad assistance" },
      details: {
        fa: "ساواک (سازمان اطلاعات و امنیت کشور) در ۱۳۳۶ با کمک فنی CIA آمریکا و موساد اسرائیل تأسیس شد. تیمور بختیار اولین رئیس آن بود. ساواک به سرعت به ابزار سرکوب مخالفان تبدیل شد و به شکنجه و زندانی کردن منتقدان شاه مشهور شد. این سازمان تا انقلاب ۱۳۵۷ فعال بود.",
        en: "SAVAK (Organization of Intelligence and National Security) was established in 1957 with technical assistance from the US CIA and Israel's Mossad. Teimur Bakhtiar was its first director. SAVAK quickly became a tool for suppressing opposition and became notorious for torturing and imprisoning Shah's critics. It remained active until the 1979 revolution.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "پرتاب اسپوتنیک - آغاز عصر فضا", en: "Sputnik Launch - Space Age Begins" },
        description: { fa: "شوروی اولین ماهواره مصنوعی را به فضا فرستاد", en: "USSR launches first artificial satellite into space" },
        details: {
          fa: "شوروی در ۴ اکتبر ۱۹۵۷ اسپوتنیک ۱ را به فضا پرتاب کرد. این اولین ماهواره مصنوعی بشر بود و شوک بزرگی به آمریکا وارد کرد. رقابت فضایی جنگ سرد آغاز شد و آمریکا ناسا را تأسیس کرد.",
          en: "The Soviet Union launched Sputnik 1 into space on October 4, 1957. It was humanity's first artificial satellite and sent shockwaves through America. The Cold War space race began and the US established NASA.",
        },
      },
      {
        country: "world",
        title: { fa: "پیمان رم - جامعه اقتصادی اروپا", en: "Treaty of Rome - European Economic Community" },
        description: { fa: "شش کشور اروپایی بازار مشترک تشکیل دادند", en: "Six European countries form common market" },
        details: {
          fa: "پیمان رم در مارس ۱۹۵۷ توسط شش کشور (فرانسه، آلمان غربی، ایتالیا، بلژیک، هلند و لوکزامبورگ) امضا شد و جامعه اقتصادی اروپا تأسیس شد. این پیمان سنگ بنای اتحادیه اروپای امروزی بود و هدفش یکپارچگی اقتصادی و جلوگیری از جنگ در اروپا بود.",
          en: "The Treaty of Rome was signed in March 1957 by six countries (France, West Germany, Italy, Belgium, Netherlands, Luxembourg), establishing the European Economic Community. This treaty was the foundation of today's EU and aimed at economic integration and preventing war in Europe.",
        },
      },
      {
        country: "germany",
        title: { fa: "معجزه اقتصادی آلمان غربی", en: "West German Economic Miracle" },
        description: { fa: "آلمان غربی به سومین اقتصاد بزرگ جهان تبدیل شد", en: "West Germany becomes world's third largest economy" },
        details: {
          fa: "«معجزه اقتصادی» آلمان غربی تحت رهبری صدراعظم آدناور و وزیر اقتصاد لودویگ ارهارد ادامه داشت. آلمان غربی به سومین اقتصاد بزرگ جهان تبدیل شد. بیکاری به کمتر از ۱ درصد رسید و صادرات صنعتی رشد چشمگیری کرد.",
          en: "West Germany's 'economic miracle' continued under Chancellor Adenauer and Economics Minister Ludwig Erhard. West Germany became the world's third largest economy. Unemployment fell below 1% and industrial exports grew dramatically.",
        },
      },
    ],
  },
  {
    year: 1958,
    shamsiYear: "۱۳۳۷",
    iran: {
      title: { fa: "رشد اقتدارگرایی شاه", en: "Growing Authoritarianism of Shah" },
      description: { fa: "شاه قدرت را متمرکز کرد - سرکوب مخالفان با ساواک", en: "Shah centralizes power - Suppression of opposition via SAVAK" },
      details: {
        fa: "محمدرضا شاه پس از کودتای ۲۸ مرداد و تأسیس ساواک، به تدریج قدرت را در دست خود متمرکز کرد. احزاب سیاسی تحت کنترل درآمدند و فضای سیاسی بسته‌تر شد. انقلاب عراق و سقوط سلطنت در همسایگی شاه را نگران کرد و او را به سمت اصلاحات کنترل‌شده سوق داد.",
        en: "After the 1953 coup and SAVAK's establishment, Mohammad Reza Shah gradually centralized power. Political parties came under control and the political space narrowed. The Iraqi revolution and fall of monarchy in the neighborhood worried the Shah and pushed him toward controlled reforms.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "انقلاب عراق - سقوط سلطنت", en: "Iraqi Revolution - Monarchy Overthrown" },
        description: { fa: "کودتای عبدالکریم قاسم - سلطنت هاشمی سرنگون شد", en: "Abdul Karim Qasim's coup - Hashemite monarchy overthrown" },
        details: {
          fa: "در ۱۴ ژوئیه ۱۹۵۸ ارتش عراق به رهبری عبدالکریم قاسم کودتا کرد. ملک فیصل دوم و خانواده سلطنتی کشته شدند. سلطنت هاشمی سرنگون شد و جمهوری عراق تأسیس شد. این کودتا شوک بزرگی به شاه ایران و غرب وارد کرد.",
          en: "On July 14, 1958, the Iraqi army under Abdul Karim Qasim staged a coup. King Faisal II and the royal family were killed. The Hashemite monarchy was overthrown and the Republic of Iraq was established. This coup sent shockwaves through the Shah and the West.",
        },
      },
      {
        country: "france",
        title: { fa: "جمهوری پنجم فرانسه - بازگشت دوگل", en: "French Fifth Republic - De Gaulle Returns" },
        description: { fa: "شارل دوگل به قدرت بازگشت و جمهوری پنجم را بنیان‌گذاشت", en: "Charles de Gaulle returns to power and founds the Fifth Republic" },
        details: {
          fa: "بحران الجزایر فرانسه را به مرز جنگ داخلی کشاند. ژنرال شارل دوگل به قدرت بازگشت و قانون اساسی جدیدی نوشت که جمهوری پنجم فرانسه را تأسیس کرد. دوگل قدرت ریاست‌جمهوری را تقویت کرد و تا ۱۹۶۹ حکومت کرد.",
          en: "The Algerian crisis brought France to the brink of civil war. General Charles de Gaulle returned to power and wrote a new constitution establishing the French Fifth Republic. De Gaulle strengthened presidential power and governed until 1969.",
        },
      },
      {
        country: "china",
        title: { fa: "آغاز جهش بزرگ به جلو مائو", en: "Mao's Great Leap Forward Begins" },
        description: { fa: "صنعتی‌سازی اجباری و کشاورزی جمعی - آغاز قحطی بزرگ", en: "Forced industrialization and collective farming - Great Famine begins" },
        details: {
          fa: "مائو «جهش بزرگ به جلو» را برای صنعتی‌سازی سریع چین آغاز کرد. دهقانان مجبور به کار در کوره‌های ذوب آهن خانگی شدند. کشاورزی جمعی فاجعه‌بار بود و قحطی بزرگی ایجاد شد که تخمین زده می‌شود ۱۵ تا ۵۵ میلیون نفر را کشت. این بزرگترین قحطی مصنوعی تاریخ بشر بود.",
          en: "Mao launched the 'Great Leap Forward' for rapid Chinese industrialization. Peasants were forced to work in backyard steel furnaces. Collective farming was catastrophic and created a massive famine that is estimated to have killed 15 to 55 million people. This was the largest man-made famine in human history.",
        },
      },
    ],
  },
  {
    year: 1960,
    shamsiYear: "۱۳۳۹",
    iran: {
      title: { fa: "تشکیل جبهه ملی دوم - تأسیس اوپک", en: "Second National Front Formed - OPEC Founded" },
      description: { fa: "جبهه ملی بازسازی شد - ایران از بنیان‌گذاران اوپک", en: "National Front reorganized - Iran among OPEC founders" },
      details: {
        fa: "جبهه ملی دوم به رهبری کریم سنجابی و شاپور بختیار تشکیل شد و خواستار بازگشت به اصول مشروطه و آزادی‌های سیاسی شد. همزمان در سپتامبر ۱۹۶۰، ایران، عراق، عربستان سعودی، کویت و ونزوئلا سازمان کشورهای صادرکننده نفت (اوپک) را در بغداد تأسیس کردند تا در برابر شرکت‌های نفتی غربی متحد شوند.",
        en: "The Second National Front was formed under Karim Sanjabi and Shapour Bakhtiar, demanding return to constitutional principles and political freedoms. Simultaneously, in September 1960, Iran, Iraq, Saudi Arabia, Kuwait, and Venezuela founded OPEC in Baghdad to unite against Western oil companies.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "انتخاب جان اف کندی", en: "JFK Elected President" },
        description: { fa: "جوان‌ترین رئیس‌جمهور منتخب تاریخ آمریکا", en: "Youngest elected president in US history" },
        details: {
          fa: "جان اف کندی در نوامبر ۱۹۶۰ با پیروزی نزدیک بر ریچارد نیکسون رئیس‌جمهور آمریکا شد. او جوان‌ترین رئیس‌جمهور منتخب و اولین کاتولیک در این مقام بود. کندی وعده «مرز نو» داد و سیاست فعال‌تری نسبت به ایران و جهان سوم اتخاذ کرد.",
          en: "John F. Kennedy narrowly defeated Richard Nixon in November 1960 to become US President. He was the youngest elected president and the first Catholic. Kennedy promised a 'New Frontier' and adopted a more active policy toward Iran and the Third World.",
        },
      },
      {
        country: "world",
        title: { fa: "بحران کنگو - استقلال آفریقا", en: "Congo Crisis - African Independence" },
        description: { fa: "۱۷ کشور آفریقایی مستقل شدند - بحران کنگو آغاز شد", en: "17 African countries gain independence - Congo crisis begins" },
        details: {
          fa: "سال ۱۹۶۰ «سال آفریقا» نام گرفت زیرا ۱۷ کشور آفریقایی استقلال یافتند. کنگو پس از استقلال از بلژیک دچار بحران شد. پاتریس لومومبا نخست‌وزیر منتخب با کودتای موبوتو و دخالت بلژیک و CIA سرنگون و اعدام شد.",
          en: "1960 was called the 'Year of Africa' as 17 African countries gained independence. Congo fell into crisis after independence from Belgium. Patrice Lumumba, the elected PM, was overthrown by Mobutu's coup with Belgian and CIA involvement, and executed.",
        },
      },
      {
        country: "france",
        title: { fa: "آزمایش اتمی فرانسه در صحرای الجزایر", en: "French Nuclear Test in Algerian Sahara" },
        description: { fa: "فرانسه چهارمین قدرت اتمی جهان شد", en: "France becomes world's fourth nuclear power" },
        details: {
          fa: "فرانسه اولین آزمایش اتمی خود را در فوریه ۱۹۶۰ در صحرای الجزایر انجام داد و چهارمین قدرت اتمی جهان شد. دوگل از سلاح هسته‌ای به عنوان نماد استقلال فرانسه از ناتو و آمریکا استفاده کرد. «نیروی ضربت» هسته‌ای فرانسه پایه استقلال استراتژیک این کشور شد.",
          en: "France conducted its first nuclear test in February 1960 in the Algerian Sahara, becoming the world's fourth nuclear power. De Gaulle used nuclear weapons as a symbol of French independence from NATO and the US. France's nuclear 'force de frappe' became the foundation of its strategic independence.",
        },
      },
    ],
  },

  {
    year: 1961,
    shamsiYear: "۱۳۴۰",
    iran: {
      title: { fa: "نخست‌وزیری امینی و اصلاحات ارضی", en: "Amini Becomes PM — Land Reform Attempts" },
      description: { fa: "علی امینی تحت فشار آمریکا نخست‌وزیر شد و اصلاحات ارضی و آزادسازی سیاسی را آغاز کرد", en: "Ali Amini becomes PM under US pressure, begins land reform and political liberalization" },
      details: {
        fa: "علی امینی تحت فشار دولت کندی به نخست‌وزیری رسید. آمریکا نگران رشد نفوذ کمونیسم در ایران بود و خواستار اصلاحات بود. امینی حسن ارسنجانی را وزیر کشاورزی کرد و اصلاحات ارضی آغاز شد. فضای سیاسی نسبتاً باز شد و فعالیت جبهه ملی و نیروهای سیاسی افزایش یافت. اما شاه از قدرت‌گیری امینی ناراضی بود و سرانجام او را عزل کرد.",
        en: "Ali Amini became Prime Minister under pressure from the Kennedy administration. The US, concerned about growing communist influence in Iran, demanded reforms. Amini appointed Hassan Arsanjani as Agriculture Minister and land reform began. The political atmosphere relatively opened, with increased activity by the National Front and political forces. However, the Shah was unhappy with Amini's growing power and eventually dismissed him.",
      },
    },
  },
  {
    year: 1962,
    shamsiYear: "۱۳۴۱",
    iran: {
      title: { fa: "انقلاب سفید شاه", en: "Shah's White Revolution" },
      description: { fa: "اصلاحات ارضی - حق رأی زنان - سپاه دانش", en: "Land reform - Women's suffrage - Literacy Corps" },
      details: {
        fa: "محمدرضا شاه «انقلاب سفید» با ۶ اصل (بعداً ۱۹ اصل) را اعلام کرد: اصلاحات ارضی، ملی کردن جنگل‌ها، سهیم کردن کارگران در سود کارخانه‌ها، حق رأی زنان، ایجاد سپاه دانش. مالکان بزرگ و روحانیون مخالف بودند. خمینی شدیداً به اصلاحات حمله کرد. اقتصاد ایران رشد کرد اما نابرابری تشدید شد.",
        en: "Mohammad Reza Shah announced the 'White Revolution' with 6 principles (later 19): land reform, nationalization of forests, worker profit-sharing, women's suffrage, Literacy Corps. Large landowners and clergy opposed it. Khomeini fiercely attacked the reforms. Iran's economy grew but inequality worsened.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "بحران موشکی کوبا - لبه پرتگاه هسته‌ای", en: "Cuban Missile Crisis - Nuclear Brink" },
        description: { fa: "شوروی موشک هسته‌ای در کوبا مستقر کرد - ۱۳ روز وحشت", en: "USSR deploys nuclear missiles in Cuba - 13 days of terror" },
        details: {
          fa: "شوروی موشک‌های هسته‌ای در کوبا مستقر کرد. کندی محاصره دریایی اعلام کرد. به مدت ۱۳ روز جهان در آستانه جنگ هسته‌ای بود. خروشچف سرانجام عقب‌نشینی کرد. نزدیک‌ترین لحظه بشر به نابودی هسته‌ای.",
          en: "USSR deployed nuclear missiles in Cuba. Kennedy declared a naval blockade. For 13 days the world stood on the brink of nuclear war. Khrushchev finally backed down. Humanity's closest moment to nuclear annihilation.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/P-2_missile_on_a_transporter_during_the_Cuban_Missile_Crisis.jpg&width=200",
      },
      {
        country: "france",
        title: { fa: "استقلال الجزایر - پایان استعمار فرانسه", en: "Algerian Independence - End of French Colonialism" },
        description: { fa: "الجزایر پس از ۸ سال جنگ خونین از فرانسه مستقل شد", en: "Algeria gains independence after 8 years of bloody war" },
        details: {
          fa: "الجزایر در ۵ ژوئیه ۱۹۶۲ پس از ۸ سال جنگ خونین مستقل شد. بیش از یک میلیون الجزایری و ۲۵ هزار فرانسوی کشته شدند. یک میلیون فرانسوی‌الاصل (پی‌ینوار) از الجزایر به فرانسه مهاجرت کردند. استقلال الجزایر پایان امپراتوری استعماری فرانسه بود.",
          en: "Algeria gained independence on July 5, 1962 after 8 years of bloody war. Over one million Algerians and 25,000 French were killed. One million French settlers (Pieds-Noirs) migrated from Algeria to France. Algerian independence marked the end of the French colonial empire.",
        },
      },
      {
        country: "russia",
        title: { fa: "خروشچف موشک‌ها را از کوبا خارج کرد", en: "Khrushchev Withdraws Missiles from Cuba" },
        description: { fa: "شوروی عقب‌نشینی کرد - آمریکا قول عدم حمله به کوبا داد", en: "USSR backs down - US promises not to invade Cuba" },
        details: {
          fa: "خروشچف موافقت کرد موشک‌های هسته‌ای را از کوبا خارج کند. در مقابل آمریکا قول داد به کوبا حمله نکند و مخفیانه موشک‌های خود را از ترکیه خارج کرد. خروشچف در شوروی به خاطر عقب‌نشینی مورد انتقاد قرار گرفت و این یکی از دلایل برکناری او در ۱۹۶۴ بود.",
          en: "Khrushchev agreed to withdraw nuclear missiles from Cuba. In return, the US promised not to invade Cuba and secretly removed its own missiles from Turkey. Khrushchev was criticized in the USSR for backing down, and this was one of the reasons for his ouster in 1964.",
        },
      },
    ],
  },
  {
    year: 1963,
    shamsiYear: "۱۳۴۲",
    iran: {
      title: { fa: "قیام ۱۵ خرداد - تبعید خمینی", en: "June 1963 Uprising - Khomeini Exiled" },
      description: { fa: "خمینی علیه شاه سخنرانی کرد - سرکوب خونین - تبعید به ترکیه و عراق", en: "Khomeini speaks against Shah - Bloody crackdown - Exiled to Turkey then Iraq" },
      details: {
        fa: "خمینی در عاشورای ۱۳۴۲ سخنرانی تندی علیه شاه، اصلاحات ارضی و روابط با اسرائیل کرد. دستگیری خمینی منجر به اعتراضات خونین در تهران، قم و ورامین شد. شاه ارتش را برای سرکوب فرستاد. صدها نفر کشته شدند (رقم دقیق محل اختلاف است). خمینی ابتدا به ترکیه و سپس به نجف عراق تبعید شد و ۱۵ سال در تبعید ماند.",
        en: "Khomeini gave a fiery speech on Ashura 1963 against the Shah, land reforms, and relations with Israel. Khomeini's arrest led to bloody protests in Tehran, Qom, and Varamin. The Shah sent the army to suppress them. Hundreds were killed (exact number disputed). Khomeini was exiled first to Turkey then Najaf, Iraq, and remained in exile for 15 years.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترور جان اف. کندی", en: "JFK Assassination" },
        description: { fa: "کندی در دالاس ترور شد - جانسون رئیس‌جمهور شد", en: "Kennedy assassinated in Dallas - Johnson becomes president" },
        details: {
          fa: "جان اف. کندی در ۲۲ نوامبر ۱۹۶۳ در دالاس تگزاس ترور شد. لی هاروی آزوالد به عنوان قاتل شناخته شد اما خود دو روز بعد توسط جک روبی کشته شد. تئوری‌های توطئه متعددی درباره عاملان واقعی وجود دارد.",
          en: "JFK was assassinated on November 22, 1963 in Dallas, Texas. Lee Harvey Oswald was identified as the killer but was himself shot dead two days later by Jack Ruby. Numerous conspiracy theories exist about the true perpetrators.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "رسوایی پروفیومو در بریتانیا", en: "Profumo Affair in Britain" },
        description: { fa: "رسوایی جاسوسی و جنسی دولت مک‌میلان را سرنگون کرد", en: "Espionage and sex scandal brings down Macmillan government" },
        details: {
          fa: "جان پروفیومو وزیر جنگ بریتانیا به خاطر رابطه با کریستین کیلر (که همزمان با وابسته نظامی شوروی رابطه داشت) استعفا داد. این رسوایی دولت هارولد مک‌میلان را تضعیف کرد و به پیروزی حزب کارگر در ۱۹۶۴ کمک کرد.",
          en: "British War Secretary John Profumo resigned over his relationship with Christine Keeler (who was simultaneously involved with a Soviet military attaché). This scandal weakened Harold Macmillan's government and contributed to Labour's victory in 1964.",
        },
      },
      {
        country: "germany",
        title: { fa: "سخنرانی کندی در برلین: «من یک برلینی‌ام»", en: "Kennedy's Berlin Speech: 'Ich bin ein Berliner'" },
        description: { fa: "کندی از مردم برلین غربی حمایت کرد", en: "Kennedy shows solidarity with West Berliners" },
        details: {
          fa: "جان اف. کندی در ۲۶ ژوئن ۱۹۶۳ در برابر ۴۵۰ هزار نفر در برلین غربی سخنرانی کرد و جمله معروف «من یک برلینی‌ام» را گفت. این سخنرانی نماد حمایت آمریکا از برلین غربی و مقاومت در برابر کمونیسم شد و دیوار برلین را که دو سال قبل ساخته شده بود محکوم کرد.",
          en: "JFK spoke before 450,000 people in West Berlin on June 26, 1963, delivering the famous line 'Ich bin ein Berliner.' This speech symbolized American support for West Berlin and resistance to communism, condemning the Berlin Wall that had been built two years earlier.",
        },
      },
    ],
  },
  {
    year: 1964,
    shamsiYear: "۱۳۴۳",
    iran: {
      title: { fa: "لایحه کاپیتولاسیون - خشم خمینی", en: "Status of Forces Agreement - Khomeini's Fury" },
      description: { fa: "اعطای مصونیت قضایی به مستشاران آمریکایی - اعتراض خمینی و تبعید به ترکیه", en: "Judicial immunity for US advisors - Khomeini protests, exiled to Turkey" },
      details: {
        fa: "مجلس ایران لایحه مصونیت قضایی (کاپیتولاسیون) مستشاران نظامی آمریکایی را تصویب کرد. خمینی در سخنرانی تندی این لایحه را تحقیر ملت ایران خواند و گفت اگر سگ آمریکایی ایرانی را زیر بگیرد کسی حق تعقیب ندارد. خمینی در آبان ۱۳۴۳ ابتدا به ترکیه و سپس به نجف عراق تبعید شد.",
        en: "Iran's parliament approved the Status of Forces Agreement granting judicial immunity to US military advisors. Khomeini in a fiery speech called this law a humiliation of the Iranian nation, saying if an American dog ran over an Iranian, no one could prosecute. Khomeini was exiled first to Turkey then to Najaf, Iraq in November 1964.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "قانون حقوق مدنی آمریکا", en: "US Civil Rights Act" },
        description: { fa: "تبعیض نژادی در آمریکا غیرقانونی شد", en: "Racial discrimination outlawed in America" },
        details: {
          fa: "پرزیدنت لیندون جانسون قانون حقوق مدنی ۱۹۶۴ را امضا کرد که تبعیض بر اساس نژاد، رنگ، مذهب، جنسیت یا ملیت را غیرقانونی کرد. این قانون دستاورد بزرگ جنبش حقوق مدنی به رهبری مارتین لوتر کینگ بود.",
          en: "President Lyndon Johnson signed the Civil Rights Act of 1964, outlawing discrimination based on race, color, religion, sex, or national origin. This law was a major achievement of the civil rights movement led by Martin Luther King Jr.",
        },
      },
      {
        country: "china",
        title: { fa: "آزمایش اتمی چین", en: "China's Nuclear Test" },
        description: { fa: "چین پنجمین قدرت اتمی جهان شد", en: "China becomes the fifth nuclear power" },
        details: {
          fa: "چین در ۱۶ اکتبر ۱۹۶۴ اولین آزمایش اتمی خود را انجام داد و پنجمین کشور دارای سلاح هسته‌ای شد. این آزمایش تعادل قدرت جنگ سرد را تغییر داد و نگرانی آمریکا و شوروی را افزایش داد.",
          en: "China conducted its first nuclear test on October 16, 1964, becoming the fifth country with nuclear weapons. This test changed the Cold War balance of power and increased US and Soviet concerns.",
        },
      },
      {
        country: "russia",
        title: { fa: "برکناری خروشچف - برژنف به قدرت رسید", en: "Khrushchev Ousted - Brezhnev Takes Power" },
        description: { fa: "خروشچف در کودتای حزبی برکنار و برژنف جانشین شد", en: "Khrushchev removed in party coup, replaced by Brezhnev" },
        details: {
          fa: "نیکیتا خروشچف در اکتبر ۱۹۶۴ توسط اعضای دفتر سیاسی برکنار شد. لئونید برژنف دبیرکل حزب شد و دوران ۱۸ ساله حکومتش آغاز شد. دوره برژنف با رکود اقتصادی، بوروکراسی و رقابت تسلیحاتی با آمریکا شناخته می‌شود.",
          en: "Nikita Khrushchev was removed by Politburo members in October 1964. Leonid Brezhnev became General Secretary, beginning his 18-year rule. The Brezhnev era was characterized by economic stagnation, bureaucracy, and the arms race with America.",
        },
      },
    ],
  },

  {
    year: 1965,
    shamsiYear: "۱۳۴۴",
    iran: {
      title: { fa: "ترور نخست‌وزیر منصور - هویدا نخست‌وزیر شد", en: "PM Mansur Assassinated — Hoveyda Becomes PM" },
      description: { fa: "حسنعلی منصور ترور شد و امیرعباس هویدا جانشین او شد", en: "Hassan-Ali Mansur assassinated, Amir-Abbas Hoveyda succeeds him" },
      details: {
        fa: "حسنعلی منصور نخست‌وزیر در ۷ بهمن ۱۳۴۳ توسط محمد بخارایی عضو فداییان اسلام ترور شد. انگیزه ترور تصویب لایحه کاپیتولاسیون بود که به آمریکاییان مصونیت قضایی می‌داد. امیرعباس هویدا که دوست نزدیک منصور بود به نخست‌وزیری رسید و طولانی‌ترین دوره نخست‌وزیری تاریخ معاصر ایران (۱۳ سال) را آغاز کرد.",
        en: "Prime Minister Hassan-Ali Mansur was assassinated on January 27, 1965 by Mohammad Bokharaei, a member of the Fada'iyan-e Islam. The motive was the passage of the Status of Forces Agreement granting legal immunity to Americans. Amir-Abbas Hoveyda, a close friend of Mansur, became PM and began the longest premiership in modern Iranian history (13 years).",
      },
    },
  },
  {
    year: 1966,
    shamsiYear: "۱۳۴۵",
    iran: {
      title: { fa: "رونق اقتصادی و آغاز دوران هویدا", en: "Economic Boom & Beginning of Hoveyda Era" },
      description: { fa: "شتاب رشد اقتصادی ایران و آغاز دوران ثبات و توسعه هویدا", en: "Iran's economic growth accelerates, Hoveyda era of stability and development begins" },
      details: {
        fa: "با نخست‌وزیری هویدا، ایران وارد دوره‌ای از ثبات سیاسی نسبی و رشد اقتصادی شد. درآمدهای نفتی افزایش یافت و برنامه‌های عمرانی و صنعتی گسترده اجرا شد. هویدا با مدیریت تکنوکراتیک و روابط خوب با شاه، سیاست‌های توسعه‌ای را پیش برد. اما فضای سیاسی بسته باقی ماند و مخالفان همچنان سرکوب می‌شدند.",
        en: "Under Hoveyda's premiership, Iran entered a period of relative political stability and economic growth. Oil revenues increased and extensive development and industrial programs were implemented. Hoveyda, with technocratic management and good relations with the Shah, advanced development policies. However, the political atmosphere remained closed and dissidents continued to be suppressed.",
      },
    },
  },
  {
    year: 1967,
    shamsiYear: "۱۳۴۶",
    iran: {
      title: { fa: "تاجگذاری محمدرضا شاه", en: "Coronation of Mohammad Reza Shah" },
      description: { fa: "تاجگذاری باشکوه پس از ۲۶ سال سلطنت - اقتصاد در حال رشد", en: "Lavish coronation after 26 years of rule - Economy growing" },
      details: {
        fa: "محمدرضا شاه پس از ۲۶ سال سلطنت سرانجام تاجگذاری رسمی کرد. اقتصاد ایران با درآمد نفت و اصلاحات ارضی در حال رشد بود. اما فاصله طبقاتی زیاد شده و ساواک مخالفان را سرکوب می‌کرد. فرح دیبا نقش فعالی در فرهنگ و هنر داشت.",
        en: "Mohammad Reza Shah finally held his formal coronation after 26 years of rule. Iran's economy was growing with oil revenue and land reforms. But class gaps widened and SAVAK suppressed dissent. Farah Diba played an active role in culture and arts.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ شش‌روزه - اسرائیل اراضی عربی را اشغال کرد", en: "Six-Day War - Israel Occupies Arab Territories" },
        description: { fa: "اسرائیل سینا، غزه، کرانه باختری، بلندی‌های جولان را گرفت", en: "Israel captures Sinai, Gaza, West Bank, Golan Heights" },
        details: {
          fa: "اسرائیل در ۶ روز ارتش‌های مصر، اردن و سوریه را شکست داد. سینا، نوار غزه، کرانه باختری، بیت‌المقدس شرقی و بلندی‌های جولان اشغال شد. این جنگ نقشه خاورمیانه را برای همیشه تغییر داد و مسئله فلسطین را تشدید کرد.",
          en: "Israel defeated the armies of Egypt, Jordan and Syria in 6 days. Sinai, Gaza Strip, West Bank, East Jerusalem and Golan Heights were occupied. This war forever changed the Middle East map and intensified the Palestinian issue.",
        },
      },
      {
        country: "china",
        title: { fa: "اوج انقلاب فرهنگی مائو", en: "Peak of Mao's Cultural Revolution" },
        description: { fa: "میلیون‌ها نفر تصفیه، شکنجه و اعدام شدند", en: "Millions purged, tortured and executed" },
        details: {
          fa: "مائو زدونگ انقلاب فرهنگی را برای تصفیه مخالفان درون حزب آغاز کرد. گارد سرخ میلیون‌ها نفر از جمله روشنفکران، معلمان و مقامات حزبی را شکنجه و اعدام کرد. میراث فرهنگی هزاران ساله چین نابود شد و تخمین زده می‌شود بین ۵۰۰ هزار تا ۲ میلیون نفر کشته شدند.",
          en: "Mao launched the Cultural Revolution to purge opponents within the party. The Red Guards tortured and executed millions including intellectuals, teachers, and party officials. China's millennia-old cultural heritage was destroyed, and an estimated 500,000 to 2 million people were killed.",
        },
      },
      {
        country: "uk",
        title: { fa: "کاهش ارزش پوند و بحران اقتصادی بریتانیا", en: "Pound Devaluation & British Economic Crisis" },
        description: { fa: "پوند ۱۴ درصد کاهش ارزش یافت - پایان ادعای ابرقدرتی بریتانیا", en: "Pound devalued by 14% - End of Britain's superpower pretensions" },
        details: {
          fa: "هارولد ویلسون نخست‌وزیر بریتانیا مجبور به کاهش ارزش پوند شد. بریتانیا اعلام کرد نیروهای نظامی خود را «از شرق سوئز» خارج می‌کند و نقش جهانی نظامی خود را پایان می‌دهد. این تصمیم پایان رسمی امپراتوری بریتانیا و آغاز وابستگی بیشتر به ایالات متحده بود.",
          en: "British PM Harold Wilson was forced to devalue the pound. Britain announced withdrawal of military forces 'East of Suez,' ending its global military role. This decision marked the formal end of the British Empire and the beginning of greater dependence on the United States.",
        },
      },
    ],
  },
  {
    year: 1968,
    shamsiYear: "۱۳۴۷",
    iran: {
      title: { fa: "رشد مخالفت زیرزمینی", en: "Growing Underground Opposition" },
      description: { fa: "گروه‌های چریکی شکل گرفتند - فضای سیاسی بسته‌تر شد", en: "Guerrilla groups form - Political space narrows further" },
      details: {
        fa: "در حالی که جهان شاهد اعتراضات گسترده بود، در ایران فضای سیاسی کاملاً بسته بود. گروه‌های چریکی مسلح مانند فداییان خلق (مارکسیست) و مجاهدین خلق (اسلام-مارکسیست) در حال شکل‌گیری بودند. دانشگاه‌ها مرکز نارضایتی بودند اما ساواک مخالفان را شدیداً سرکوب می‌کرد.",
        en: "While the world witnessed widespread protests, Iran's political space was completely closed. Armed guerrilla groups like the Fedai'i (Marxist) and Mojahedin-e Khalq (Islamic-Marxist) were forming. Universities were centers of discontent but SAVAK severely suppressed opposition.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "اعتراضات جهانی ۱۹۶۸", en: "Global Protests of 1968" },
        description: { fa: "اعتراضات در پاریس، پراگ و آمریکا - جهان در آتش", en: "Protests in Paris, Prague & USA - World on fire" },
        details: {
          fa: "سال ۱۹۶۸ سال اعتراضات جهانی بود. در پاریس دانشجویان و کارگران اعتصاب عمومی کردند. در پراگ بهار پراگ توسط تانک‌های شوروی سرکوب شد. در آمریکا اعتراضات ضد جنگ ویتنام و ترور مارتین لوتر کینگ و رابرت کندی کشور را تکان داد.",
          en: "1968 was a year of global protests. In Paris, students and workers held a general strike. In Prague, the Prague Spring was crushed by Soviet tanks. In the US, anti-Vietnam War protests and the assassinations of Martin Luther King Jr. and Robert Kennedy shook the nation.",
        },
      },
      {
        country: "usa",
        title: { fa: "حمله تت در ویتنام", en: "Tet Offensive in Vietnam" },
        description: { fa: "حمله غافلگیرانه ویتنام شمالی - نقطه عطف جنگ", en: "North Vietnam surprise attack - Turning point of war" },
        details: {
          fa: "در ژانویه ۱۹۶۸ نیروهای ویتنام شمالی و ویت‌کنگ حمله غافلگیرانه‌ای به بیش از ۱۰۰ شهر ویتنام جنوبی انجام دادند. اگرچه نظامی شکست خوردند اما از نظر سیاسی پیروز شدند. افکار عمومی آمریکا علیه جنگ برگشت و جانسون از نامزدی انتخابات کناره‌گیری کرد.",
          en: "In January 1968, North Vietnamese and Viet Cong forces launched a surprise attack on over 100 South Vietnamese cities. Though militarily defeated, they won politically. American public opinion turned against the war and Johnson withdrew from the presidential race.",
        },
      },
      {
        country: "france",
        title: { fa: "مه ۶۸ - انقلاب دانشجویی پاریس", en: "May '68 - Paris Student Revolution" },
        description: { fa: "اعتصاب عمومی ۱۰ میلیون کارگر فرانسوی - دوگل در خطر سقوط", en: "General strike of 10 million French workers - De Gaulle nearly falls" },
        details: {
          fa: "اعتراضات دانشجویی در مه ۱۹۶۸ به اعتصاب عمومی ۱۰ میلیون کارگر تبدیل شد و فرانسه را فلج کرد. دوگل مخفیانه به پایگاه نظامی فرانسه در آلمان رفت تا از حمایت ارتش مطمئن شود. سرانجام انتخابات جدید برگزار شد و دوگل پیروز شد، اما در ۱۹۶۹ استعفا داد.",
          en: "Student protests in May 1968 turned into a general strike of 10 million workers, paralyzing France. De Gaulle secretly flew to a French military base in Germany to ensure army support. New elections were held and de Gaulle won, but he resigned in 1969.",
        },
      },
      {
        country: "russia",
        title: { fa: "سرکوب بهار پراگ توسط شوروی", en: "Soviet Crushing of Prague Spring" },
        description: { fa: "تانک‌های شوروی اصلاحات چکسلواکی را سرکوب کردند", en: "Soviet tanks crush Czechoslovak reforms" },
        details: {
          fa: "الکساندر دوبچک رهبر چکسلواکی «سوسیالیسم با چهره انسانی» را آغاز کرد. شوروی با ارسال ۵۰۰ هزار سرباز پیمان ورشو اصلاحات را سرکوب کرد. «دکترین برژنف» اعلام کرد شوروی حق مداخله در کشورهای سوسیالیستی را دارد. دوبچک برکنار و اصلاحات لغو شد.",
          en: "Czechoslovak leader Alexander Dubček launched 'Socialism with a human face.' The USSR crushed the reforms by sending 500,000 Warsaw Pact troops. The 'Brezhnev Doctrine' declared the USSR's right to intervene in socialist countries. Dubček was removed and reforms reversed.",
        },
      },
    ],
  },
  {
    year: 1969,
    shamsiYear: "۱۳۴۸",
    iran: {
      title: { fa: "افزایش درآمد نفت - رشد اقتصادی", en: "Increased Oil Revenue - Economic Growth" },
      description: { fa: "شاه از افزایش قیمت نفت بهره برد - مدرنیزاسیون شتاب گرفت", en: "Shah benefits from rising oil prices - Modernization accelerates" },
      details: {
        fa: "درآمد نفت ایران افزایش یافت و شاه برنامه‌های عظیم عمرانی و نظامی را گسترش داد. خرید تسلیحات از آمریکا و اروپا افزایش یافت. شاه ایران را به «ژاندارم خلیج فارس» تبدیل کرد. اما رشد اقتصادی نابرابر بود و شکاف طبقاتی عمیق‌تر شد.",
        en: "Iran's oil revenue increased and the Shah expanded massive development and military programs. Arms purchases from the US and Europe grew. The Shah turned Iran into the 'Gendarme of the Persian Gulf.' But economic growth was unequal and the class gap deepened.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "فرود بر ماه - آپولو ۱۱", en: "Moon Landing - Apollo 11" },
        description: { fa: "نیل آرمسترانگ اولین انسان روی ماه", en: "Neil Armstrong becomes first human on the Moon" },
        details: {
          fa: "در ۲۰ ژوئیه ۱۹۶۹ نیل آرمسترانگ و باز آلدرین از آپولو ۱۱ بر سطح ماه فرود آمدند. آرمسترانگ گفت: «یک گام کوچک برای انسان، یک جهش بزرگ برای بشریت.» آمریکا در رقابت فضایی از شوروی پیشی گرفت. بیش از ۶۰۰ میلیون نفر این رویداد را از تلویزیون تماشا کردند.",
          en: "On July 20, 1969, Neil Armstrong and Buzz Aldrin from Apollo 11 landed on the Moon's surface. Armstrong said: 'One small step for man, one giant leap for mankind.' The US surpassed the USSR in the space race. Over 600 million people watched the event on television.",
        },
      },
      {
        country: "usa",
        title: { fa: "دکترین نیکسون", en: "Nixon Doctrine" },
        description: { fa: "آمریکا از متحدان منطقه‌ای خواست مسئولیت امنیت خود را بپذیرند", en: "US asks regional allies to take responsibility for their own security" },
        details: {
          fa: "ریچارد نیکسون دکترین نیکسون را اعلام کرد: آمریکا از متحدانش در برابر تهدید هسته‌ای دفاع می‌کند اما آنها باید مسئولیت دفاع متعارف خود را بپذیرند. شاه ایران از متحدان اصلی این دکترین بود و ایران به ژاندارم آمریکا در خلیج فارس تبدیل شد.",
          en: "Richard Nixon announced the Nixon Doctrine: the US would defend allies against nuclear threats but they must take responsibility for their own conventional defense. The Shah of Iran was a key ally of this doctrine and Iran became America's gendarme in the Persian Gulf.",
        },
      },
      {
        country: "germany",
        title: { fa: "ویلی برانت و سیاست شرقی (اوستپولیتیک)", en: "Willy Brandt & Eastern Policy (Ostpolitik)" },
        description: { fa: "صدراعظم جدید آلمان غربی سیاست تنش‌زدایی با بلوک شرق را آغاز کرد", en: "New West German chancellor begins détente with Eastern Bloc" },
        details: {
          fa: "ویلی برانت سوسیال‌دموکرات صدراعظم آلمان غربی شد و سیاست اوستپولیتیک (سیاست شرقی) را آغاز کرد. او با شوروی و آلمان شرقی مذاکره کرد و در ۱۹۷۰ در ورشو در برابر یادبود قربانیان گتوی یهودیان زانو زد. برانت در ۱۹۷۱ جایزه صلح نوبل گرفت.",
          en: "Social Democrat Willy Brandt became West German chancellor and launched Ostpolitik (Eastern Policy). He negotiated with the USSR and East Germany, and in 1970 knelt at the Warsaw Ghetto memorial. Brandt received the Nobel Peace Prize in 1971.",
        },
      },
    ],
  },

  {
    year: 1970,
    shamsiYear: "۱۳۴۹",
    iran: {
      title: { fa: "رشد سریع اقتصادی و توسعه زیرساخت‌ها", en: "Rapid Economic Growth & Infrastructure Development" },
      description: { fa: "رشد تولید ناخالص داخلی، پروژه‌های عمرانی بزرگ و گسترش سپاه دانش", en: "GDP growth, major construction projects, expanding Literacy Corps" },
      details: {
        fa: "اقتصاد ایران با رشد سریع تولید ناخالص داخلی به یکی از پویاترین اقتصادهای منطقه تبدیل شد. پروژه‌های عمرانی بزرگ شامل سدسازی، جاده‌سازی و صنعتی‌سازی در سراسر کشور ادامه داشت. سپاه دانش در روستاها فعال بود و نرخ باسوادی افزایش می‌یافت. اما این رشد اقتصادی توزیع نابرابر داشت و شکاف طبقاتی رو به افزایش بود.",
        en: "Iran's economy became one of the most dynamic in the region with rapid GDP growth. Major construction projects including dam-building, road construction, and industrialization continued across the country. The Literacy Corps was active in villages, raising literacy rates. However, economic growth was unevenly distributed, and class disparity was widening.",
      },
    },
  },
  {
    year: 1971,
    shamsiYear: "۱۳۵۰",
    iran: {
      title: { fa: "جشن‌های ۲۵۰۰ ساله شاهنشاهی", en: "2500-Year Celebration of Persian Empire" },
      description: { fa: "مراسم مجلل در تخت جمشید - هزینه ۲۰۰ میلیون دلاری", en: "Lavish ceremony at Persepolis - $200 million cost" },
      details: {
        fa: "شاه مراسم باشکوهی در تخت جمشید برگزار کرد و سران ۶۰ کشور را دعوت کرد. غذا از ماکسیم پاریس آورده شد. هزینه رسمی ۱۷ میلیون دلار اعلام شد اما برخی تخمین‌ها تا ۲۰۰ میلیون دلار است. خمینی این جشن‌ها را «جشن شیطان» نامید. مردم عادی از فقر رنج می‌بردند.",
        en: "The Shah organized a lavish ceremony at Persepolis, inviting leaders of 60 nations. Food was flown in from Maxim's of Paris. Official cost was $17 million but some estimates reach $200 million. Khomeini called the celebrations 'the Devil's festival.' Ordinary people suffered from poverty.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Persepolis_24.11.2009_11-12-14.jpg&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "شوک نیکسون - پایان استاندارد طلا", en: "Nixon Shock - End of Gold Standard" },
        description: { fa: "آمریکا تبدیل دلار به طلا را متوقف کرد - نظم مالی جهان تغییر کرد", en: "US suspends dollar-gold convertibility - World financial order changes" },
        details: {
          fa: "نیکسون در ۱۵ اوت ۱۹۷۱ تبدیل دلار به طلا را متوقف کرد و سیستم برتون وودز فروپاشید. ارزهای جهان شناور شدند و دوره جدیدی در اقتصاد بین‌المللی آغاز شد. این تصمیم تورم جهانی را افزایش داد و زمینه‌ساز بحران نفتی ۱۹۷۳ شد.",
          en: "Nixon suspended dollar-gold convertibility on August 15, 1971, collapsing the Bretton Woods system. World currencies became free-floating, beginning a new era in international economics. This decision increased global inflation and set the stage for the 1973 oil crisis.",
        },
      },
      {
        country: "china",
        title: { fa: "چین عضو سازمان ملل شد", en: "China Joins United Nations" },
        description: { fa: "جمهوری خلق جایگزین تایوان در شورای امنیت شد", en: "PRC replaces Taiwan on Security Council" },
        details: {
          fa: "مجمع عمومی سازمان ملل جمهوری خلق چین را به جای تایوان به عنوان نماینده قانونی چین به رسمیت شناخت. این تغییر بخشی از سیاست نزدیکی نیکسون به چین بود که در ۱۹۷۲ با سفر تاریخی او به پکن تکمیل شد.",
          en: "The UN General Assembly recognized the People's Republic of China as the legitimate representative of China, replacing Taiwan. This shift was part of Nixon's rapprochement with China, completed by his historic 1972 visit to Beijing.",
        },
      },
      {
        country: "uk",
        title: { fa: "بریتانیا به جامعه اقتصادی اروپا پیوست", en: "Britain Joins European Economic Community" },
        description: { fa: "درخواست عضویت بریتانیا پس از دو وتوی دوگل پذیرفته شد", en: "Britain's membership bid accepted after two de Gaulle vetoes" },
        details: {
          fa: "پس از دو بار وتوی دوگل (۱۹۶۳ و ۱۹۶۷)، درخواست عضویت بریتانیا در جامعه اقتصادی اروپا پذیرفته شد. ادوارد هیث نخست‌وزیر بریتانیا پیمان الحاق را امضا کرد. عضویت رسمی در ژانویه ۱۹۷۳ آغاز شد. این تصمیم تا برگزیت ۲۰۱۶ بحث‌برانگیز باقی ماند.",
          en: "After two vetoes by de Gaulle (1963 and 1967), Britain's application to join the European Economic Community was accepted. PM Edward Heath signed the accession treaty. Formal membership began in January 1973. This decision remained controversial until Brexit in 2016.",
        },
      },
    ],
  },
  {
    year: 1972,
    shamsiYear: "۱۳۵۱",
    iran: {
      title: { fa: "دکترین نیکسون و تسلیح ایران", en: "Nixon Doctrine — Arming Iran" },
      description: { fa: "آمریکا ایران را ژاندارم منطقه کرد - خرید تسلیحاتی گسترده", en: "US makes Iran regional policeman — massive arms purchases begin" },
      details: {
        fa: "بر اساس دکترین نیکسون، آمریکا ایران را به عنوان ژاندارم منطقه خلیج فارس برگزید. شاه اجازه یافت هر سلاح غیرهسته‌ای را از آمریکا خریداری کند. قراردادهای تسلیحاتی عظیمی امضا شد و ایران به بزرگترین خریدار سلاح آمریکایی در خاورمیانه تبدیل شد. این سیاست وابستگی نظامی ایران به آمریکا را عمیق‌تر کرد و بودجه نظامی کشور را به شدت افزایش داد.",
        en: "Under the Nixon Doctrine, the US designated Iran as the policeman of the Persian Gulf region. The Shah was granted permission to purchase any non-nuclear weapon from the US. Massive arms deals were signed, making Iran the largest buyer of American weapons in the Middle East. This policy deepened Iran's military dependence on the US and dramatically increased the country's defense budget.",
      },
    },
  },
  {
    year: 1973,
    shamsiYear: "۱۳۵۲",
    iran: {
      title: { fa: "بحران نفتی - ثروت باد آورده", en: "Oil Crisis - Windfall Wealth" },
      description: { fa: "قیمت نفت ۴ برابر شد - شاه: «عصر تمدن بزرگ»", en: "Oil prices quadruple - Shah: 'Great Civilization era'" },
      details: {
        fa: "تحریم نفتی اعراب در جنگ یوم‌کیپور قیمت نفت را ۴ برابر کرد. درآمد نفتی ایران از ۴ میلیارد به ۲۰ میلیارد دلار جهش کرد. شاه برنامه‌های توسعه عظیم اعلام کرد: ساخت نیروگاه هسته‌ای، خرید سلاح‌های پیشرفته، صنعتی‌سازی سریع. اما تورم به ۵۰٪ رسید، مهاجرت روستایی به شهرها شتاب گرفت و فساد گسترده شد.",
        en: "The Arab oil embargo during the Yom Kippur War quadrupled oil prices. Iran's oil revenue jumped from $4 billion to $20 billion. The Shah announced massive development plans: nuclear power plants, advanced weapons purchases, rapid industrialization. But inflation hit 50%, rural-to-urban migration accelerated, and corruption became widespread.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ یوم‌کیپور و شوک نفتی", en: "Yom Kippur War & Oil Shock" },
        description: { fa: "مصر و سوریه به اسرائیل حمله کردند - تحریم نفتی اعراب", en: "Egypt & Syria attack Israel - Arab oil embargo" },
        details: {
          fa: "در ۶ اکتبر (روز کیپور یهودیان) مصر و سوریه به اسرائیل حمله کردند. آمریکا با پل هوایی به اسرائیل کمک کرد. اعراب در پاسخ تحریم نفتی اعمال کردند. قیمت نفت از ۳ به ۱۲ دلار رسید. این بحران اقتصاد غرب را فلج کرد و قدرت اوپک را نشان داد.",
          en: "On October 6 (Jewish Yom Kippur), Egypt and Syria attacked Israel. The US airlifted supplies to Israel. Arabs imposed an oil embargo in response. Oil prices rose from $3 to $12. This crisis paralyzed Western economies and demonstrated OPEC's power.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Yom_Kippur_War_map.svg&width=200",
      },
      {
        country: "usa",
        title: { fa: "کودتای شیلی - سرنگونی آلنده", en: "Chilean Coup - Overthrow of Allende" },
        description: { fa: "CIA از کودتای پینوشه علیه آلنده حمایت کرد", en: "CIA backs Pinochet's coup against Allende" },
        details: {
          fa: "در ۱۱ سپتامبر ۱۹۷۳ ژنرال آگوستو پینوشه با حمایت CIA دولت منتخب سالوادور آلنده (اولین رئیس‌جمهور سوسیالیست منتخب آمریکای لاتین) را سرنگون کرد. آلنده در کاخ ریاست‌جمهوری کشته شد. دیکتاتوری پینوشه ۱۷ سال ادامه یافت و هزاران نفر شکنجه و ناپدید شدند.",
          en: "On September 11, 1973, General Augusto Pinochet, backed by the CIA, overthrew the elected government of Salvador Allende (Latin America's first elected socialist president). Allende died in the presidential palace. Pinochet's dictatorship lasted 17 years and thousands were tortured and disappeared.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحران نفتی و اعتصاب معدنچیان بریتانیا", en: "Oil Crisis & British Miners' Strike" },
        description: { fa: "بحران انرژی بریتانیا را به هفته کاری سه‌روزه کشاند", en: "Energy crisis forces Britain into three-day work week" },
        details: {
          fa: "تحریم نفتی اعراب همزمان با اعتصاب معدنچیان زغال‌سنگ بریتانیا رخ داد. دولت هیث مجبور به اعلام هفته کاری سه‌روزه شد تا انرژی صرفه‌جویی شود. قطعی برق و بحران اقتصادی منجر به سقوط دولت محافظه‌کار و پیروزی حزب کارگر در ۱۹۷۴ شد.",
          en: "The Arab oil embargo coincided with British coal miners' strike. PM Heath was forced to declare a three-day work week to conserve energy. Power cuts and economic crisis led to the fall of the Conservative government and Labour's victory in 1974.",
        },
      },
    ],
  },
  {
    year: 1974,
    shamsiYear: "۱۳۵۳",
    iran: {
      title: { fa: "اوج رونق نفتی - هزینه‌های کلان", en: "Peak Oil Boom - Massive Spending" },
      description: { fa: "درآمد نفت ۴ برابر شد - خرید تسلیحات و پروژه‌های عظیم", en: "Oil revenue quadruples - Arms purchases and mega-projects" },
      details: {
        fa: "پس از بحران نفتی ۱۹۷۳ درآمد نفت ایران از ۵ میلیارد به ۲۰ میلیارد دلار جهش کرد. شاه برنامه‌های عظیم نظامی و عمرانی راه انداخت: خرید جنگنده‌های F-14 از آمریکا، ساخت نیروگاه اتمی بوشهر، و پروژه‌های زیربنایی. اما رشد سریع باعث تورم شدید و مهاجرت روستاییان به شهرها شد.",
        en: "After the 1973 oil crisis, Iran's oil revenue jumped from $5 billion to $20 billion. The Shah launched massive military and development programs: purchasing F-14 fighters from the US, building Bushehr nuclear plant, and infrastructure projects. But rapid growth caused severe inflation and rural-to-urban migration.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "استعفای نیکسون - رسوایی واترگیت", en: "Nixon Resigns - Watergate Scandal" },
        description: { fa: "نیکسون اولین رئیس‌جمهور آمریکا که استعفا داد", en: "Nixon becomes first US president to resign" },
        details: {
          fa: "ریچارد نیکسون در ۹ اوت ۱۹۷۴ به دلیل رسوایی واترگیت استعفا داد. او متهم به دستور شنود غیرقانونی دفتر حزب دموکرات و سپس پنهان‌کاری بود. جرالد فورد جانشین او شد و نیکسون را عفو کرد. این بحران اعتماد مردم آمریکا به حکومت را تضعیف کرد.",
          en: "Richard Nixon resigned on August 9, 1974 due to the Watergate scandal. He was accused of ordering illegal wiretapping of the Democratic Party office and subsequent cover-up. Gerald Ford succeeded him and pardoned Nixon. This crisis weakened Americans' trust in government.",
        },
      },
      {
        country: "world",
        title: { fa: "انقلاب میخک پرتغال", en: "Carnation Revolution in Portugal" },
        description: { fa: "کودتای نظامی دیکتاتوری ۴۸ ساله پرتغال را سرنگون کرد", en: "Military coup overthrows Portugal's 48-year dictatorship" },
        details: {
          fa: "در ۲۵ آوریل ۱۹۷۴ افسران ارتش پرتغال در کودتایی بدون خونریزی دیکتاتوری ۴۸ ساله سالازار-کایتانو را سرنگون کردند. مردم گل میخک در لوله تفنگ سربازان گذاشتند. پرتغال به دموکراسی گذار کرد و مستعمرات آفریقایی خود (آنگولا، موزامبیک) را آزاد کرد.",
          en: "On April 25, 1974, Portuguese army officers overthrew the 48-year Salazar-Caetano dictatorship in a bloodless coup. People placed carnations in soldiers' rifle barrels. Portugal transitioned to democracy and freed its African colonies (Angola, Mozambique).",
        },
      },
      {
        country: "germany",
        title: { fa: "هلموت اشمیت صدراعظم آلمان غربی شد", en: "Helmut Schmidt Becomes West German Chancellor" },
        description: { fa: "اشمیت پس از رسوایی جاسوسی برانت جانشین او شد", en: "Schmidt succeeds Brandt after espionage scandal" },
        details: {
          fa: "ویلی برانت پس از کشف جاسوس آلمان شرقی (گونتر گیوم) در دفترش استعفا داد. هلموت اشمیت صدراعظم شد و با بحران نفتی و تروریسم گروه بادر-ماینهوف (فراکسیون ارتش سرخ) دست و پنجه نرم کرد. اشمیت آلمان غربی را به یکی از قدرتمندترین اقتصادهای جهان تبدیل کرد.",
          en: "Willy Brandt resigned after an East German spy (Günter Guillaume) was discovered in his office. Helmut Schmidt became chancellor and dealt with the oil crisis and Baader-Meinhof terrorism (Red Army Faction). Schmidt made West Germany one of the world's most powerful economies.",
        },
      },
    ],
  },
  {
    year: 1975,
    shamsiYear: "۱۳۵۴",
    iran: {
      title: { fa: "حزب رستاخیز - نظام تک‌حزبی", en: "Rastakhiz Party - Single-Party System" },
      description: { fa: "شاه حزب واحد رستاخیز را تأسیس و همه را مجبور به عضویت کرد", en: "Shah establishes single Rastakhiz Party, forces everyone to join" },
      details: {
        fa: "محمدرضا شاه در اسفند ۱۳۵۳ حزب رستاخیز ملت ایران را تأسیس کرد و اعلام کرد هر ایرانی باید عضو شود وگرنه باید از کشور برود. این نظام تک‌حزبی حتی متحدان شاه را هم ناراضی کرد. خمینی از نجف عضویت در حزب را حرام اعلام کرد. این تصمیم یکی از عوامل نارضایتی گسترده‌ای بود که به انقلاب منجر شد.",
        en: "Mohammad Reza Shah established the Rastakhiz Party in March 1975 and declared every Iranian must join or leave the country. This single-party system alienated even the Shah's allies. Khomeini from Najaf declared party membership forbidden. This decision was one of the factors behind the widespread discontent that led to the revolution.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "سقوط سایگون - پایان جنگ ویتنام", en: "Fall of Saigon - End of Vietnam War" },
        description: { fa: "ویتنام شمالی سایگون را فتح کرد - شکست آمریکا", en: "North Vietnam captures Saigon - US defeat" },
        details: {
          fa: "در ۳۰ آوریل ۱۹۷۵ نیروهای ویتنام شمالی وارد سایگون شدند و جنگ ویتنام پایان یافت. آمریکا در عملیات اضطراری آخرین نفرات خود و برخی ویتنامی‌ها را با هلیکوپتر از سفارت تخلیه کرد. بیش از ۳ میلیون ویتنامی و ۵۸,۰۰۰ آمریکایی در این جنگ کشته شدند.",
          en: "On April 30, 1975, North Vietnamese forces entered Saigon and the Vietnam War ended. The US evacuated its last personnel and some Vietnamese by helicopter from the embassy in an emergency operation. Over 3 million Vietnamese and 58,000 Americans were killed in this war.",
        },
      },
      {
        country: "world",
        title: { fa: "توافقات هلسینکی", en: "Helsinki Accords" },
        description: { fa: "توافق امنیت و حقوق بشر بین شرق و غرب", en: "Security and human rights agreement between East and West" },
        details: {
          fa: "توافقات هلسینکی در اوت ۱۹۷۵ توسط ۳۵ کشور از جمله آمریکا و شوروی امضا شد. این توافق مرزهای اروپا را به رسمیت شناخت و اصول حقوق بشر را تثبیت کرد. بعدها فعالان حقوق بشر در بلوک شرق از این توافق برای مبارزه با دیکتاتوری استفاده کردند.",
          en: "The Helsinki Accords were signed in August 1975 by 35 nations including the US and USSR. The agreement recognized European borders and established human rights principles. Later, human rights activists in the Eastern Bloc used this agreement to fight dictatorship.",
        },
      },
      {
        country: "china",
        title: { fa: "چوئن‌لای درگذشت - بحران جانشینی مائو", en: "Zhou Enlai Dies - Mao Succession Crisis" },
        description: { fa: "مرگ نخست‌وزیر چین بحران قدرت ایجاد کرد", en: "Chinese PM's death creates power crisis" },
        details: {
          fa: "چوئن‌لای نخست‌وزیر محبوب چین در ژانویه ۱۹۷۶ درگذشت. مائو که خود بیمار بود، جنگ قدرت بین باند چهار نفره (رادیکال‌ها) و اصلاح‌طلبان به رهبری دنگ شیائوپینگ تشدید شد. دنگ برکنار و سپس بازگردانده شد. مرگ مائو در سپتامبر ۱۹۷۶ سرنوشت چین را تغییر داد.",
          en: "Zhou Enlai, China's popular premier, died in January 1976. With Mao himself ailing, the power struggle between the Gang of Four (radicals) and reformers led by Deng Xiaoping intensified. Deng was purged then reinstated. Mao's death in September 1976 changed China's destiny.",
        },
      },
    ],
  },
  {
    year: 1976,
    shamsiYear: "۱۳۵۵",
    iran: {
      title: { fa: "آغاز اعتراضات - فشار حقوق بشری کارتر", en: "Protests Begin - Carter's Human Rights Pressure" },
      description: { fa: "تغییر تقویم به شاهنشاهی - نارضایتی گسترده - فشار آمریکا", en: "Calendar changed to imperial - Widespread discontent - US pressure" },
      details: {
        fa: "شاه تقویم ایران را از هجری شمسی به شاهنشاهی تغییر داد (مبدأ: تأسیس هخامنشیان) که خشم روحانیون و مردم را برانگیخت. جیمی کارتر در کارزار انتخاباتی‌اش بر حقوق بشر تأکید کرد و فشار بر شاه افزایش یافت. نامه‌های سرگشاده منتقدان و روشنفکران منتشر شد. اعتراضات اولیه در دانشگاه‌ها شکل گرفت.",
        en: "The Shah changed Iran's calendar from Solar Hijri to Imperial (starting from Achaemenid founding), angering clerics and the public. Jimmy Carter emphasized human rights in his campaign, increasing pressure on the Shah. Open letters from critics and intellectuals were published. Initial protests formed at universities.",
      },
    },
    world: [
      {
        country: "china",
        title: { fa: "مرگ مائو - پایان انقلاب فرهنگی", en: "Mao Dies - End of Cultural Revolution" },
        description: { fa: "مائو زدونگ درگذشت - باند چهار نفره دستگیر شد", en: "Mao Zedong dies - Gang of Four arrested" },
        details: {
          fa: "مائو زدونگ رهبر جمهوری خلق چین در ۹ سپتامبر ۱۹۷۶ درگذشت. باند چهار نفره (شامل همسر مائو) که مسئول انقلاب فرهنگی بودند دستگیر شدند. دنگ شیائوپینگ به تدریج به قدرت رسید و اصلاحات اقتصادی چین را آغاز کرد.",
          en: "Mao Zedong, leader of the People's Republic of China, died on September 9, 1976. The Gang of Four (including Mao's wife) responsible for the Cultural Revolution were arrested. Deng Xiaoping gradually rose to power and began China's economic reforms.",
        },
      },
      {
        country: "world",
        title: { fa: "قیام سووتو در آفریقای جنوبی", en: "Soweto Uprising in South Africa" },
        description: { fa: "دانش‌آموزان سیاه‌پوست علیه آپارتاید قیام کردند", en: "Black students rise up against apartheid" },
        details: {
          fa: "در ۱۶ ژوئن ۱۹۷۶ دانش‌آموزان سیاه‌پوست در سووتو (ژوهانسبورگ) علیه اجبار تحصیل به زبان آفریکانس اعتراض کردند. پلیس آپارتاید به سوی کودکان شلیک کرد و صدها نفر کشته شدند. این قیام جنبش ضد آپارتاید را در سطح جهانی تقویت کرد.",
          en: "On June 16, 1976, Black students in Soweto (Johannesburg) protested against forced Afrikaans-language education. Apartheid police fired on children, killing hundreds. This uprising strengthened the global anti-apartheid movement.",
        },
      },
      {
        country: "usa",
        title: { fa: "انتخاب جیمی کارتر - تأکید بر حقوق بشر", en: "Jimmy Carter Elected - Human Rights Emphasis" },
        description: { fa: "کارتر با وعده حقوق بشر و اخلاق در سیاست پیروز شد", en: "Carter wins with promise of human rights and morality in politics" },
        details: {
          fa: "جیمی کارتر دموکرات بر جرالد فورد پیروز شد. کارتر وعده حقوق بشر، شفافیت و اخلاق در سیاست خارجی داد. سیاست حقوق بشری او فشار بر متحدان دیکتاتور آمریکا از جمله شاه ایران را افزایش داد و نقش مهمی در تحولات ایران ایفا کرد.",
          en: "Democrat Jimmy Carter defeated Gerald Ford. Carter promised human rights, transparency, and morality in foreign policy. His human rights policy increased pressure on America's dictator allies including the Shah of Iran and played a significant role in Iran's developments.",
        },
      },
    ],
  },
  {
    year: 1977,
    shamsiYear: "۱۳۵۶",
    iran: {
      title: { fa: "سفر کارتر به تهران - «جزیره ثبات»", en: "Carter Visits Tehran - 'Island of Stability'" },
      description: { fa: "کارتر ایران را جزیره ثبات خواند - آغاز اعتراضات انقلابی", en: "Carter calls Iran island of stability - Revolutionary protests begin" },
      details: {
        fa: "جیمی کارتر در شب سال نو ۱۹۷۸ (دی ۱۳۵۶) در ضیافت شاه ایران را «جزیره ثبات در دریای آشوب» خواند. اما واقعیت متفاوت بود: شب‌های شعر گوته در تهران به اعتراض تبدیل شد، نامه سرگشاده روشنفکران منتشر شد و مقاله توهین‌آمیز روزنامه اطلاعات علیه خمینی (دی ۱۳۵۶) جرقه اعتراضات گسترده را زد.",
        en: "Jimmy Carter at a New Year's Eve 1978 dinner with the Shah called Iran 'an island of stability in a sea of turmoil.' But reality was different: Goethe poetry nights in Tehran turned into protests, intellectuals published open letters, and an insulting article against Khomeini in Ettela'at newspaper (January 1978) sparked widespread protests.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "سیاست حقوق بشر کارتر", en: "Carter's Human Rights Policy" },
        description: { fa: "کارتر حقوق بشر را محور سیاست خارجی آمریکا کرد", en: "Carter makes human rights the focus of US foreign policy" },
        details: {
          fa: "جیمی کارتر حقوق بشر را به عنوان محور اصلی سیاست خارجی آمریکا اعلام کرد. این سیاست فشار بر متحدان دیکتاتور آمریکا از جمله شاه ایران را افزایش داد. شاه مجبور به آزاد کردن برخی زندانیان سیاسی و باز کردن نسبی فضای سیاسی شد که راه را برای اعتراضات هموار کرد.",
          en: "Jimmy Carter declared human rights as the core of US foreign policy. This policy increased pressure on America's dictator allies including the Shah of Iran. The Shah was forced to release some political prisoners and relatively open the political space, which paved the way for protests.",
        },
      },
      {
        country: "world",
        title: { fa: "پاکستان: کودتای ضیاءالحق", en: "Pakistan: Zia ul-Haq Coup" },
        description: { fa: "ژنرال ضیاءالحق ذوالفقار علی بوتو را سرنگون کرد", en: "General Zia ul-Haq overthrows Zulfikar Ali Bhutto" },
        details: {
          fa: "ژنرال ضیاءالحق در ژوئیه ۱۹۷۷ با کودتای نظامی ذوالفقار علی بوتو نخست‌وزیر منتخب پاکستان را سرنگون کرد. بوتو بعداً اعدام شد. ضیاءالحق اسلامی‌سازی پاکستان را آغاز کرد و در جنگ افغانستان نقش مهمی ایفا کرد.",
          en: "General Zia ul-Haq overthrew Pakistan's elected PM Zulfikar Ali Bhutto in a military coup in July 1977. Bhutto was later executed. Zia ul-Haq began Islamization of Pakistan and played a major role in the Afghanistan war.",
        },
      },
      {
        country: "france",
        title: { fa: "آغاز ساخت هواپیمای ایرباس و قطار سریع TGV", en: "Airbus & TGV High-Speed Train Begin" },
        description: { fa: "فرانسه با پروژه‌های صنعتی بزرگ قدرت فناوری خود را نشان داد", en: "France demonstrates technological power with major industrial projects" },
        details: {
          fa: "فرانسه با پیشبرد پروژه ایرباس (با آلمان و بریتانیا) و ساخت قطار سریع‌السیر TGV قدرت فناوری و صنعتی خود را نشان داد. ژیسکار دستن رئیس‌جمهور سیاست مدرنیزاسیون و تقویت همکاری اروپایی را دنبال می‌کرد. فرانسه همچنین برنامه هسته‌ای صلح‌آمیز خود را برای تولید ۷۵ درصد برق از انرژی اتمی گسترش داد.",
          en: "France demonstrated its technological and industrial power by advancing the Airbus project (with Germany and Britain) and building the TGV high-speed train. President Giscard d'Estaing pursued modernization and stronger European cooperation. France also expanded its civilian nuclear program to generate 75% of electricity from nuclear energy.",
        },
      },
    ],
  },
  {
    year: 1978,
    shamsiYear: "۱۳۵۷",
    iran: {
      title: { fa: "شتاب انقلاب - سینما رکس، جمعه سیاه، اعتصابات", en: "Revolution Accelerates - Cinema Rex, Black Friday, Strikes" },
      description: { fa: "سوزاندن سینما رکس آبادان - کشتار جمعه سیاه - اعتصاب سراسری نفت", en: "Cinema Rex fire in Abadan - Black Friday massacre - Nationwide oil strike" },
      details: {
        fa: "سال ۱۳۵۷ سال سرنوشت‌ساز انقلاب بود. در ۲۸ مرداد سینما رکس آبادان آتش زده شد و ۴۰۰ نفر کشته شدند. در ۱۷ شهریور (جمعه سیاه) ارتش در میدان ژاله تهران به تظاهرکنندگان شلیک کرد و صدها نفر کشته شدند. کارگران نفت اعتصاب سراسری کردند و اقتصاد ایران فلج شد. خمینی از نجف به پاریس رفت و رهبری انقلاب را به دست گرفت.",
        en: "1978 was the fateful year of revolution. On August 19, Cinema Rex in Abadan was set on fire, killing 400. On September 8 (Black Friday), the army fired on protesters in Tehran's Jaleh Square, killing hundreds. Oil workers launched a nationwide strike, paralyzing Iran's economy. Khomeini moved from Najaf to Paris and took leadership of the revolution.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "توافقات کمپ دیوید", en: "Camp David Accords" },
        description: { fa: "مصر و اسرائیل صلح کردند - سادات و بگین با میانجیگری کارتر", en: "Egypt and Israel make peace - Sadat and Begin with Carter's mediation" },
        details: {
          fa: "در سپتامبر ۱۹۷۸ انور سادات (مصر) و مناخم بگین (اسرائیل) با میانجیگری جیمی کارتر در کمپ دیوید به توافق صلح رسیدند. مصر اولین کشور عربی بود که اسرائیل را به رسمیت شناخت. این توافق دنیای عرب را خشمگین کرد و سادات در ۱۹۸۱ ترور شد.",
          en: "In September 1978, Anwar Sadat (Egypt) and Menachem Begin (Israel) reached a peace agreement at Camp David with Jimmy Carter's mediation. Egypt became the first Arab country to recognize Israel. This agreement angered the Arab world and Sadat was assassinated in 1981.",
        },
      },
      {
        country: "world",
        title: { fa: "اولین نوزاد لوله آزمایشگاهی", en: "First Test-Tube Baby Born" },
        description: { fa: "لوئیز براون اولین نوزاد لقاح مصنوعی در بریتانیا متولد شد", en: "Louise Brown, first IVF baby, born in Britain" },
        details: {
          fa: "لوئیز براون اولین نوزاد حاصل از لقاح مصنوعی در ۲۵ ژوئیه ۱۹۷۸ در بریتانیا متولد شد. این دستاورد پزشکی انقلابی بود اما بحث‌های اخلاقی و مذهبی فراوانی برانگیخت. تاکنون بیش از ۸ میلیون نوزاد از طریق IVF متولد شده‌اند.",
          en: "Louise Brown, the first baby conceived through IVF, was born on July 25, 1978 in Britain. This revolutionary medical achievement sparked extensive ethical and religious debates. Over 8 million babies have been born through IVF since.",
        },
      },
      {
        country: "china",
        title: { fa: "اصلاحات دنگ شیائوپینگ - گشایش اقتصادی چین", en: "Deng Xiaoping's Reforms - China's Economic Opening" },
        description: { fa: "دنگ شیائوپینگ اصلاحات اقتصادی و «گشایش» چین را آغاز کرد", en: "Deng Xiaoping launches economic reforms and China's 'opening up'" },
        details: {
          fa: "دنگ شیائوپینگ قدرت را به دست گرفت و سیاست «اصلاح و گشایش» را آغاز کرد. مناطق ویژه اقتصادی ایجاد شد، کشاورزی خصوصی مجاز شد و سرمایه‌گذاری خارجی تشویق شد. این اصلاحات آغاز تبدیل چین از کشوری فقیر به دومین اقتصاد بزرگ جهان بود.",
          en: "Deng Xiaoping took power and launched the 'Reform and Opening Up' policy. Special economic zones were created, private farming was allowed, and foreign investment encouraged. These reforms began China's transformation from a poor country to the world's second largest economy.",
        },
      },
    ],
  },

  {
    year: 1979,
    shamsiYear: "۱۳۵۷",
    yearInfo: {
      fa: "سال انقلاب ایران. سقوط ۲۵۰۰ سال نظام شاهنشاهی. خمینی جمهوری اسلامی تأسیس کرد. گروگانگیری سفارت آمریکا. جهان تکان خورد.",
      en: "Year of the Iranian Revolution. Fall of 2,500 years of monarchy. Khomeini establishes the Islamic Republic. US Embassy hostage crisis. The world is shaken.",
    },
    iran: {
      title: { fa: "پیروزی انقلاب اسلامی", en: "Islamic Revolution Triumphs" },
      description: { fa: "۲۲ بهمن: سقوط شاه - بازگشت خمینی - گروگانگیری سفارت آمریکا", en: "Feb 11: Shah falls - Khomeini returns - US Embassy hostage crisis" },
      details: {
        fa: "شاه در ۲۶ دی ۱۳۵۷ ایران را ترک کرد. خمینی در ۱۲ بهمن با استقبال میلیونی به ایران بازگشت. در ۲۲ بهمن ارتش بی‌طرفی اعلام کرد و حکومت سقوط کرد. در ۱۲ فروردین ۵۸ جمهوری اسلامی با ۹۸.۲٪ آرا تأسیس شد. در ۱۳ آبان دانشجویان پیرو خط امام سفارت آمریکا را اشغال کردند و ۵۲ دیپلمات آمریکایی را ۴۴۴ روز گروگان گرفتند. این بحران روابط ایران-آمریکا را برای دهه‌ها تخریب کرد.",
        en: "The Shah left Iran on January 16, 1979. Khomeini returned on February 1 to a reception of millions. On February 11, the military declared neutrality and the government fell. On April 1, the Islamic Republic was established with 98.2% vote. On November 4, students seized the US Embassy and held 52 American diplomats hostage for 444 days. This crisis destroyed Iran-US relations for decades.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Ruhollah_Khomeini_arrived_in_Iran_from_exile%2C_1_February_1979.jpg&width=200",
    },
    world: [
      {
        country: "uk",
        title: { fa: "تاچر نخست‌وزیر - انقلاب نئولیبرال", en: "Thatcher Becomes PM - Neoliberal Revolution" },
        description: { fa: "خصوصی‌سازی، شکستن اتحادیه‌ها، بازار آزاد", en: "Privatization, union-busting, free market" },
        details: {
          fa: "مارگارت تاچر اولین نخست‌وزیر زن بریتانیا شد و انقلاب نئولیبرالی را آغاز کرد. او صنایع دولتی را خصوصی‌سازی کرد، قدرت اتحادیه‌های کارگری را شکست و مالیات‌ها را کاهش داد. سیاست‌های تاچر اقتصاد بریتانیا را متحول کرد اما نابرابری اجتماعی را تشدید و صنایع سنتی شمال انگلستان را نابود کرد.",
          en: "Margaret Thatcher became Britain's first female Prime Minister and launched a neoliberal revolution. She privatized state industries, broke the power of trade unions, and cut taxes. Thatcher's policies transformed the British economy but deepened social inequality and devastated traditional industries in northern England.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Margaret_Thatcher_stock_portrait_%28cropped%29.jpg&width=200",
      },
      {
        country: "world",
        title: { fa: "اشغال افغانستان توسط شوروی", en: "Soviet Invasion of Afghanistan" },
        description: { fa: "آغاز جنگ ۱۰ ساله - زمینه‌ساز سقوط شوروی و ظهور القاعده", en: "10-year war begins - Seeds of Soviet collapse and rise of Al-Qaeda" },
        details: {
          fa: "۱۰۰,۰۰۰ سرباز شوروی وارد افغانستان شدند و آمریکا از طریق عملیات سیکلون سیا مجاهدین را مسلح کرد. حدود ۱ میلیون غیرنظامی افغان کشته شدند و ۵ میلیون آواره شدند. این جنگ «ویتنام شوروی» نامیده شد و مستقیماً به فروپاشی اتحاد جماهیر شوروی کمک کرد.",
          en: "100,000 Soviet troops entered Afghanistan and the US armed the Mujahideen via CIA's Operation Cyclone. Approximately 1 million Afghan civilians were killed and 5 million became refugees. Called the 'Soviet Vietnam,' this war directly contributed to the collapse of the Soviet Union.",
        },
      },
      {
        country: "china",
        title: { fa: "عادی‌سازی روابط چین و آمریکا", en: "US-China Diplomatic Normalization" },
        description: { fa: "آمریکا و چین روابط دیپلماتیک کامل برقرار کردند", en: "US and China establish full diplomatic relations" },
        details: {
          fa: "آمریکا و جمهوری خلق چین در ژانویه ۱۹۷۹ روابط دیپلماتیک کامل برقرار کردند. آمریکا تایوان را از رسمیت انداخت. دنگ شیائوپینگ به آمریکا سفر کرد. عادی‌سازی روابط به اصلاحات اقتصادی چین و ورود سرمایه‌گذاری غربی کمک کرد.",
          en: "The US and People's Republic of China established full diplomatic relations in January 1979. The US de-recognized Taiwan. Deng Xiaoping visited the US. Diplomatic normalization aided China's economic reforms and Western investment.",
        },
      },
    ],
  },
  {
    year: 1980,
    shamsiYear: "۱۳۵۹",
    yearInfo: {
      fa: "آغاز جنگ ایران و عراق. ارتش عراق به ایران حمله کرد و هشت سال جنگ خونین آغاز شد.",
      en: "Start of the Iran-Iraq War. Iraq invades Iran and 8 years of devastating war begins.",
    },
    iran: {
      title: { fa: "حمله عراق به ایران - آغاز جنگ ۸ ساله", en: "Iraq Invades Iran - 8-Year War Begins" },
      description: { fa: "۳۱ شهریور ۱۳۵۹: ارتش عراق از چند محور به ایران حمله کرد", en: "Sep 22, 1980: Iraqi forces invade Iran on multiple fronts" },
      details: {
        fa: "صدام حسین در ۳۱ شهریور ۱۳۵۹ به ایران حمله کرد. خوزستان هدف اصلی بود و شهر خرمشهر پس از مقاومت سخت سقوط کرد. عراق از تسلیحات متنوع غربی و شرقی بهره‌مند بود، در حالی که ایران تحت تحریم تسلیحاتی قرار داشت. این جنگ هشت سال به طول انجامید و بر اساس برآوردها حدود یک میلیون کشته، دو میلیون زخمی و خسارات اقتصادی هنگفتی بر جای گذاشت.",
        en: "Saddam Hussein invaded Iran on September 22, 1980. Khuzestan was the main target and the city of Khorramshahr fell after fierce resistance. Iraq had access to diverse Western and Eastern weaponry, while Iran was under an arms embargo. The war lasted eight years and is estimated to have caused around one million deaths, two million wounded, and massive economic damage.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Iran-Iraq_war-gallery.png&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "ریگان انتخاب شد - محافظه‌کاری جدید", en: "Reagan Elected - New Conservatism" },
        description: { fa: "پایان دوره کارتر - حمایت پنهانی از عراق", en: "End of Carter era - Covert support for Iraq" },
        details: {
          fa: "گروگان‌های آمریکایی دقیقاً در لحظه تحلیف ریگان آزاد شدند. ریگان سیاست «ریگانومیکس» شامل کاهش مالیات و خصوصی‌سازی را پیش گرفت. افزایش عظیم بودجه نظامی علیه شوروی، از جمله طرح «جنگ ستارگان»، فشار اقتصادی بر شوروی را تشدید کرد.",
          en: "The American hostages were released the very minute Reagan was inaugurated. Reagan pursued 'Reaganomics' with tax cuts and deregulation. A massive military buildup against the USSR, including the 'Star Wars' program, intensified economic pressure on the Soviet Union and helped accelerate its collapse.",
        },
      },
      {
        country: "uk",
        title: { fa: "تحریم المپیک مسکو توسط غرب", en: "Western Boycott of Moscow Olympics" },
        description: { fa: "آمریکا و متحدانش المپیک مسکو را تحریم کردند", en: "US and allies boycott Moscow Olympics" },
        details: {
          fa: "آمریکا، بریتانیا و بسیاری از کشورهای غربی المپیک ۱۹۸۰ مسکو را در اعتراض به حمله شوروی به افغانستان تحریم کردند. تاچر از تحریم حمایت کرد هرچند برخی ورزشکاران بریتانیایی با پرچم المپیک شرکت کردند. شوروی در ۱۹۸۴ المپیک لس‌آنجلس را تحریم کرد.",
          en: "The US, Britain, and many Western nations boycotted the 1980 Moscow Olympics in protest against the Soviet invasion of Afghanistan. Thatcher supported the boycott though some British athletes competed under the Olympic flag. The USSR boycotted the 1984 Los Angeles Olympics in retaliation.",
        },
      },
      {
        country: "world",
        title: { fa: "جنبش همبستگی لهستان", en: "Poland's Solidarity Movement" },
        description: { fa: "لخ والسا اولین اتحادیه کارگری مستقل در بلوک شرق را تأسیس کرد", en: "Lech Walesa founds first independent trade union in Eastern Bloc" },
        details: {
          fa: "لخ والسا اتحادیه کارگری «همبستگی» (سولیدارنوشچ) را در کارخانه کشتی‌سازی گدانسک تأسیس کرد. ده میلیون نفر عضو شدند. این اولین اتحادیه مستقل در بلوک شرق بود و ضربه مهلکی به حکومت کمونیستی زد. والسا در ۱۹۸۳ جایزه صلح نوبل گرفت و در ۱۹۹۰ رئیس‌جمهور لهستان شد.",
          en: "Lech Walesa founded the 'Solidarity' (Solidarność) trade union at the Gdansk shipyard. Ten million people joined. It was the first independent union in the Eastern Bloc and dealt a fatal blow to communist rule. Walesa won the Nobel Peace Prize in 1983 and became Poland's president in 1990.",
        },
      },
    ],
  },
  {
    year: 1981,
    shamsiYear: "۱۳۶۰",
    iran: {
      title: { fa: "برکناری بنی‌صدر - ترور رجایی - تثبیت قدرت", en: "Banisadr Ousted - Rajai Assassinated - Power Consolidation" },
      description: { fa: "بنی‌صدر عزل و فراری شد - رجایی و باهنر ترور شدند - سرکوب خونین مجاهدین", en: "Banisadr impeached and flees - Rajai and Bahonar assassinated - Bloody MEK crackdown" },
      details: {
        fa: "سال ۱۳۶۰ سال خونین تثبیت جمهوری اسلامی بود. بنی‌صدر اولین رئیس‌جمهور عزل و به فرانسه گریخت. دفتر حزب جمهوری اسلامی بمبگذاری شد و ۷۲ نفر کشته شدند. محمدعلی رجایی رئیس‌جمهور و باهنر نخست‌وزیر ترور شدند. مجاهدین خلق سرکوب خونین شدند و هزاران نفر اعدام شدند.",
        en: "1981 was a bloody year of Islamic Republic consolidation. Banisadr, the first president, was impeached and fled to France. The Islamic Republic Party headquarters was bombed, killing 72. President Rajai and PM Bahonar were assassinated. MEK was bloodily suppressed and thousands were executed.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترور نافرجام ریگان", en: "Reagan Assassination Attempt" },
        description: { fa: "رونالد ریگان هدف تیراندازی قرار گرفت اما جان سالم به در برد", en: "Ronald Reagan shot but survives" },
        details: {
          fa: "در ۳۰ مارس ۱۹۸۱ جان هینکلی به رونالد ریگان رئیس‌جمهور آمریکا تیراندازی کرد. ریگان زخمی شد اما جان سالم به در برد. ریگان با شوخی‌هایش محبوبیت یافت و دوران محافظه‌کاری جدید (ریگانیسم) را با کاهش مالیات و افزایش هزینه‌های نظامی آغاز کرد.",
          en: "On March 30, 1981, John Hinckley shot President Ronald Reagan. Reagan was wounded but survived. Reagan gained popularity with his humor and began a new conservative era (Reaganism) with tax cuts and increased military spending.",
        },
      },
      {
        country: "world",
        title: { fa: "ترور انور سادات", en: "Sadat Assassinated" },
        description: { fa: "رئیس‌جمهور مصر در رژه نظامی ترور شد", en: "Egyptian president assassinated at military parade" },
        details: {
          fa: "انور سادات رئیس‌جمهور مصر در ۶ اکتبر ۱۹۸۱ توسط افراطیون اسلامگرا در ارتش در جریان رژه نظامی ترور شد. سادات به دلیل صلح با اسرائیل (کمپ دیوید) هدف خشم اسلامگرایان و جهان عرب بود. حسنی مبارک جانشین او شد.",
          en: "Egyptian President Anwar Sadat was assassinated on October 6, 1981 by Islamist extremists in the army during a military parade. Sadat was targeted for his peace with Israel (Camp David Accords). Hosni Mubarak succeeded him.",
        },
      },
      {
        country: "france",
        title: { fa: "فرانسوا میتران رئیس‌جمهور فرانسه شد", en: "François Mitterrand Becomes French President" },
        description: { fa: "اولین رئیس‌جمهور سوسیالیست فرانسه از ۱۹۵۸ انتخاب شد", en: "First socialist president of France since 1958 elected" },
        details: {
          fa: "فرانسوا میتران سوسیالیست در انتخابات ریاست‌جمهوری ۱۹۸۱ بر ژیسکار دستن پیروز شد. میتران حداقل دستمزد را افزایش، بانک‌ها و صنایع بزرگ را ملی و مجازات اعدام را لغو کرد. اما بحران اقتصادی او را به تغییر سیاست به سمت ریاضت مالی وادار کرد.",
          en: "Socialist François Mitterrand defeated Giscard d'Estaing in the 1981 presidential election. Mitterrand raised minimum wage, nationalized banks and major industries, and abolished the death penalty. But economic crisis forced him to shift toward austerity.",
        },
      },
    ],
  },
  {
    year: 1982,
    shamsiYear: "۱۳۶۱",
    iran: {
      title: { fa: "آزادسازی خرمشهر - ادامه جنگ", en: "Khorramshahr Liberated - War Continues" },
      description: { fa: "خرمشهر آزاد شد اما ایران جنگ را به خاک عراق برد", en: "Khorramshahr liberated but Iran takes war into Iraqi territory" },
      details: {
        fa: "در سوم خرداد ۱۳۶۱ (۲۴ مه ۱۹۸۲) ارتش و سپاه ایران خرمشهر را از اشغال عراق آزاد کردند. این پیروزی بزرگ فرصت صلح ایجاد کرد اما خمینی تصمیم به ادامه جنگ و وارد شدن به خاک عراق گرفت. این تصمیم جنگ را ۶ سال دیگر ادامه داد و صدها هزار کشته بیشتر بر جای گذاشت.",
        en: "On May 24, 1982, Iran's army and IRGC liberated Khorramshahr from Iraqi occupation. This major victory created an opportunity for peace, but Khomeini decided to continue the war into Iraqi territory. This decision extended the war by 6 more years, leaving hundreds of thousands more dead.",
      },
    },
    world: [
      {
        country: "uk",
        title: { fa: "جنگ فالکلند", en: "Falklands War" },
        description: { fa: "بریتانیا جزایر فالکلند را از آرژانتین پس گرفت", en: "Britain recaptures Falkland Islands from Argentina" },
        details: {
          fa: "آرژانتین در آوریل ۱۹۸۲ جزایر فالکلند (مالویناس) را اشغال کرد. بریتانیا نیروی دریایی فرستاد و پس از ۷۴ روز جنگ جزایر را پس گرفت. ۶۴۹ آرژانتینی و ۲۵۵ بریتانیایی کشته شدند. شکست منجر به سقوط دیکتاتوری نظامی آرژانتین شد.",
          en: "Argentina occupied the Falkland Islands (Malvinas) in April 1982. Britain sent a naval force and recaptured the islands after 74 days of war. 649 Argentines and 255 British were killed. The defeat led to the fall of Argentina's military dictatorship.",
        },
      },
      {
        country: "world",
        title: { fa: "حمله اسرائیل به لبنان", en: "Israel Invades Lebanon" },
        description: { fa: "اسرائیل جنوب لبنان را اشغال کرد - کشتار صبرا و شتیلا", en: "Israel occupies southern Lebanon - Sabra and Shatila massacre" },
        details: {
          fa: "اسرائیل در ژوئن ۱۹۸۲ به لبنان حمله کرد و بیروت را محاصره نمود. سازمان آزادی‌بخش فلسطین مجبور به خروج شد. در سپتامبر، متحدان مسیحی اسرائیل در اردوگاه‌های صبرا و شتیلا صدها تا هزاران فلسطینی غیرنظامی را قتل‌عام کردند. حزب‌الله لبنان در واکنش به اشغال تشکیل شد.",
          en: "Israel invaded Lebanon in June 1982 and besieged Beirut. The PLO was forced to leave. In September, Israel's Christian allies massacred hundreds to thousands of Palestinian civilians in Sabra and Shatila camps. Hezbollah was formed in Lebanon in response to the occupation.",
        },
      },
      {
        country: "germany",
        title: { fa: "هلموت کهل صدراعظم آلمان شد", en: "Helmut Kohl Becomes German Chancellor" },
        description: { fa: "آغاز ۱۶ سال حکومت کهل - طولانی‌ترین صدراعظمی پس از جنگ", en: "Start of Kohl's 16-year rule - Longest post-war chancellorship" },
        details: {
          fa: "هلموت کهل محافظه‌کار در رأی عدم اعتماد پارلمان بر هلموت اشمیت پیروز شد و صدراعظم آلمان غربی شد. کهل ۱۶ سال حکومت کرد و مهم‌ترین دستاوردش وحدت آلمان در ۱۹۹۰ بود. او نقش کلیدی در ادغام اروپا و ایجاد یورو داشت.",
          en: "Conservative Helmut Kohl defeated Helmut Schmidt in a parliamentary vote of no confidence and became West German chancellor. Kohl governed for 16 years, with his greatest achievement being German reunification in 1990. He played a key role in European integration and the creation of the euro.",
        },
      },
    ],
  },
  {
    year: 1983,
    shamsiYear: "۱۳۶۲",
    iran: {
      title: { fa: "سرکوب حزب توده و انزوای بین‌المللی", en: "Tudeh Party Crushed & International Isolation" },
      description: { fa: "حزب توده منحل و دیپلمات‌های شوروی اخراج شدند - شعار «نه شرقی نه غربی»", en: "Tudeh Party dissolved, Soviet diplomats expelled — 'Neither East nor West'" },
      details: {
        fa: "جمهوری اسلامی حزب توده (حزب کمونیست ایران) را که ابتدا از انقلاب حمایت کرده بود منحل کرد. رهبران حزب بازداشت و به اعترافات تلویزیونی وادار شدند. ۱۸ دیپلمات شوروی به اتهام جاسوسی اخراج شدند. ایران با شعار «نه شرقی نه غربی، جمهوری اسلامی» خود را از هر دو بلوک جدا کرد و در حالی که درگیر جنگ با عراق بود، انزوای بین‌المللی‌اش عمیق‌تر شد.",
        en: "The Islamic Republic dissolved the Tudeh Party (Iran's communist party), which had initially supported the revolution. Party leaders were arrested and forced into televised confessions. Eighteen Soviet diplomats were expelled on espionage charges. Iran, under the slogan 'Neither East nor West, Islamic Republic,' distanced itself from both blocs while its international isolation deepened amid the ongoing war with Iraq.",
      },
    },
  },
  {
    year: 1984,
    shamsiYear: "۱۳۶۳",
    iran: {
      title: { fa: "جنگ نفتکش‌ها و سلاح‌های شیمیایی", en: "Tanker War & Chemical Weapons" },
      description: { fa: "حملات عراق به نفتکش‌ها در خلیج فارس و استفاده از سلاح‌های شیمیایی علیه ایران", en: "Iraqi attacks on tankers in Persian Gulf and use of chemical weapons against Iran" },
      details: {
        fa: "جنگ نفتکش‌ها در خلیج فارس شدت گرفت و عراق با حمله به نفتکش‌های متوجه بنادر ایرانی سعی در فلج کردن اقتصاد ایران داشت. عراق از سلاح‌های شیمیایی (گاز خردل و تابون) علیه نیروهای ایرانی در جبهه‌ها استفاده گسترده کرد. جامعه بین‌المللی عمدتاً در برابر این جنایات جنگی سکوت کرد. هزاران رزمنده ایرانی قربانی حملات شیمیایی شدند.",
        en: "The Tanker War in the Persian Gulf escalated as Iraq attacked tankers heading to Iranian ports to cripple Iran's economy. Iraq extensively used chemical weapons (mustard gas and tabun) against Iranian forces on the frontlines. The international community largely remained silent about these war crimes. Thousands of Iranian soldiers became victims of chemical attacks.",
      },
    },
  },
  {
    year: 1985,
    shamsiYear: "۱۳۶۴",
    iran: {
      title: { fa: "جنگ شهرها - آغاز ایران-کنترا", en: "War of the Cities - Iran-Contra Begins" },
      description: { fa: "عراق و ایران شهرهای یکدیگر را موشک‌باران کردند - آمریکا مخفیانه به ایران سلاح فروخت", en: "Iraq and Iran bombard each other's cities - US secretly sells arms to Iran" },
      details: {
        fa: "جنگ شهرها شدت گرفت و عراق با موشک‌های اسکاد شهرهای ایران را بمباران کرد. همزمان رسوایی ایران-کنترا در حال شکل‌گیری بود: دولت ریگان مخفیانه سلاح به ایران می‌فروخت و درآمد آن را صرف تأمین مالی شورشیان کنترای نیکاراگوئه می‌کرد. این معامله نقض تحریم‌های خود آمریکا بود.",
        en: "The War of the Cities intensified with Iraq bombarding Iranian cities with Scud missiles. Meanwhile, the Iran-Contra affair was forming: the Reagan administration secretly sold weapons to Iran and used the proceeds to fund Nicaraguan Contra rebels. This deal violated America's own sanctions.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "گورباچف رهبر شوروی شد", en: "Gorbachev Becomes Soviet Leader" },
        description: { fa: "میخائیل گورباچف با سیاست‌های گلاسنوست و پروستروئیکا", en: "Mikhail Gorbachev with glasnost and perestroika policies" },
        details: {
          fa: "میخائیل گورباچف در مارس ۱۹۸۵ دبیرکل حزب کمونیست شوروی شد. او سیاست‌های اصلاحی گلاسنوست (شفافیت) و پروستروئیکا (بازسازی) را آغاز کرد. این اصلاحات که هدفشان نجات شوروی بود، در نهایت به فروپاشی آن منجر شد.",
          en: "Mikhail Gorbachev became General Secretary of the Soviet Communist Party in March 1985. He launched reform policies of glasnost (openness) and perestroika (restructuring). These reforms, intended to save the Soviet Union, ultimately led to its collapse.",
        },
      },
      {
        country: "world",
        title: { fa: "زلزله مکزیکوسیتی", en: "Mexico City Earthquake" },
        description: { fa: "زلزله ۸.۱ ریشتر مکزیکوسیتی - بیش از ۱۰,۰۰۰ کشته", en: "8.1 magnitude earthquake in Mexico City - Over 10,000 killed" },
        details: {
          fa: "زلزله ۸.۱ ریشتری در ۱۹ سپتامبر ۱۹۸۵ مکزیکوسیتی را ویران کرد. بیش از ۱۰,۰۰۰ نفر کشته و ۳۰,۰۰۰ نفر زخمی شدند. صدها ساختمان فرو ریخت. ناتوانی دولت در پاسخگویی به بحران باعث رشد جنبش‌های مدنی در مکزیک شد.",
          en: "An 8.1 magnitude earthquake devastated Mexico City on September 19, 1985. Over 10,000 were killed and 30,000 wounded. Hundreds of buildings collapsed. The government's inability to respond to the crisis fueled civil movements in Mexico.",
        },
      },
      {
        country: "uk",
        title: { fa: "اعتصاب معدنچیان بریتانیا شکست خورد", en: "British Miners' Strike Defeated" },
        description: { fa: "تاچر اتحادیه معدنچیان را شکست داد - پایان صنعت زغال‌سنگ", en: "Thatcher defeats miners' union - End of coal industry" },
        details: {
          fa: "اعتصاب یک‌ساله معدنچیان زغال‌سنگ (۱۹۸۴-۱۹۸۵) بزرگترین درگیری صنعتی تاریخ بریتانیا بود. تاچر با آمادگی قبلی و استفاده از پلیس اعتصاب را شکست داد. آرتور اسکارگیل رهبر اتحادیه تسلیم شد. شکست معدنچیان پایان قدرت اتحادیه‌های کارگری بریتانیا بود و جوامع معدنی شمال انگلستان ویران شد.",
          en: "The year-long miners' strike (1984-1985) was the biggest industrial dispute in British history. Thatcher, with prior preparation and police deployment, defeated the strike. Union leader Arthur Scargill surrendered. The miners' defeat ended British trade union power and devastated northern English mining communities.",
        },
      },
    ],
  },
  {
    year: 1986,
    shamsiYear: "۱۳۶۵",
    iran: {
      title: { fa: "شکست عملیات مهران - رسوایی ایران-کنترا", en: "Mehran Offensive Fails - Iran-Contra Exposed" },
      description: { fa: "عملیات نظامی ایران در مهران شکست خورد - فروش مخفیانه سلاح آمریکا افشا شد", en: "Iran's military operation in Mehran fails - Secret US arms sales exposed" },
      details: {
        fa: "ایران شهر مهران را در عملیات نظامی از دست داد و تلفات سنگینی متحمل شد. رسوایی ایران-کنترا در نوامبر ۱۹۸۶ افشا شد: مشخص شد دولت ریگان مخفیانه از طریق اسرائیل به ایران سلاح فروخته و درآمد آن را صرف کنتراهای نیکاراگوئه کرده است. این رسوایی ریگان را در بزرگترین بحران سیاسی‌اش فرو برد.",
        en: "Iran lost the city of Mehran in a military operation and suffered heavy casualties. The Iran-Contra scandal was exposed in November 1986: it was revealed the Reagan administration secretly sold arms to Iran through Israel and used proceeds to fund Nicaraguan Contras. This scandal plunged Reagan into his biggest political crisis.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "فاجعه چرنوبیل", en: "Chernobyl Disaster" },
        description: { fa: "انفجار نیروگاه اتمی چرنوبیل - بدترین فاجعه هسته‌ای تاریخ", en: "Chernobyl nuclear plant explosion - Worst nuclear disaster in history" },
        details: {
          fa: "در ۲۶ آوریل ۱۹۸۶ رآکتور شماره ۴ نیروگاه اتمی چرنوبیل در اوکراین (شوروی) منفجر شد. ابر رادیواکتیو بر اروپا پخش شد. هزاران نفر مستقیماً کشته شدند و صدها هزار نفر در معرض تشعشعات قرار گرفتند. این فاجعه ضعف سیستم شوروی را آشکار کرد و به فروپاشی آن کمک کرد.",
          en: "On April 26, 1986, Reactor No. 4 of the Chernobyl nuclear plant in Ukraine (USSR) exploded. A radioactive cloud spread over Europe. Thousands were directly killed and hundreds of thousands were exposed to radiation. This disaster exposed the weakness of the Soviet system and contributed to its collapse.",
        },
      },
      {
        country: "usa",
        title: { fa: "فاجعه شاتل فضایی چلنجر", en: "Space Shuttle Challenger Disaster" },
        description: { fa: "شاتل چلنجر ۷۳ ثانیه پس از پرتاب منفجر شد", en: "Shuttle Challenger explodes 73 seconds after launch" },
        details: {
          fa: "شاتل فضایی چلنجر در ۲۸ ژانویه ۱۹۸۶ تنها ۷۳ ثانیه پس از پرتاب منفجر شد و هر ۷ سرنشین کشته شدند. علت نقص در اورینگ‌های بوستر جامد بود. این فاجعه برنامه فضایی آمریکا را برای سال‌ها متوقف کرد.",
          en: "The Space Shuttle Challenger exploded just 73 seconds after launch on January 28, 1986, killing all 7 crew members. The cause was a faulty O-ring in the solid rocket booster. This disaster halted the US space program for years.",
        },
      },
      {
        country: "uk",
        title: { fa: "انفجار بزرگ بورس لندن (بیگ بنگ)", en: "London Stock Exchange Big Bang" },
        description: { fa: "آزادسازی بازارهای مالی لندن - تبدیل به مرکز مالی جهان", en: "Deregulation of London financial markets - Becomes global financial center" },
        details: {
          fa: "تاچر بازارهای مالی لندن را در «بیگ بنگ» ۲۷ اکتبر ۱۹۸۶ آزادسازی کرد. کارمزدهای ثابت حذف شد و بانک‌های خارجی اجازه فعالیت گرفتند. لندن دوباره به یکی از بزرگترین مراکز مالی جهان تبدیل شد اما ریسک‌های مالی نیز افزایش یافت.",
          en: "Thatcher deregulated London's financial markets in the 'Big Bang' of October 27, 1986. Fixed commissions were abolished and foreign banks were allowed to operate. London once again became one of the world's largest financial centers, but financial risks also increased.",
        },
      },
    ],
  },
  {
    year: 1987,
    shamsiYear: "۱۳۶۶",
    iran: {
      title: { fa: "کشتار حجاج ایرانی در مکه", en: "Massacre of Iranian Pilgrims in Mecca" },
      description: { fa: "بیش از ۴۰۰ زائر ایرانی در مکه کشته شدند", en: "Over 400 Iranian pilgrims killed in Mecca" },
      details: {
        fa: "در ۶ مرداد ۱۳۶۶ (۳۱ ژوئیه ۱۹۸۷) زائران ایرانی در مراسم حج در مکه تظاهرات کردند. نیروهای امنیتی عربستان به تظاهرکنندگان حمله کردند و بیش از ۴۰۰ نفر (عمدتاً ایرانی) کشته شدند. این رویداد روابط ایران و عربستان را به بحران شدید کشاند و خمینی عربستان را تهدید کرد.",
        en: "On July 31, 1987, Iranian pilgrims held demonstrations during Hajj in Mecca. Saudi security forces attacked the demonstrators, killing over 400 people (mostly Iranians). This event plunged Iran-Saudi relations into severe crisis and Khomeini threatened Saudi Arabia.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "دوشنبه سیاه - سقوط بورس", en: "Black Monday - Stock Market Crash" },
        description: { fa: "بزرگترین سقوط یک‌روزه بورس در تاریخ - ۲۲.۶٪ افت", en: "Largest single-day stock crash in history - 22.6% drop" },
        details: {
          fa: "در ۱۹ اکتبر ۱۹۸۷ شاخص داوجونز ۲۲.۶ درصد سقوط کرد - بزرگترین سقوط یک‌روزه تاریخ بورس. ترس از سقوط بیشتر بازارهای جهانی را فرا گرفت. اما بر خلاف ۱۹۲۹، بانک‌های مرکزی سریع واکنش نشان دادند و بازار تا ۱۹۸۹ بهبود یافت.",
          en: "On October 19, 1987, the Dow Jones index fell 22.6% - the largest single-day crash in stock market history. Fear of further decline gripped global markets. But unlike 1929, central banks reacted quickly and the market recovered by 1989.",
        },
      },
      {
        country: "usa",
        title: { fa: "پیمان INF - خلع سلاح هسته‌ای", en: "INF Treaty - Nuclear Disarmament" },
        description: { fa: "آمریکا و شوروی موشک‌های میان‌برد هسته‌ای را حذف کردند", en: "US and USSR eliminate intermediate-range nuclear missiles" },
        details: {
          fa: "ریگان و گورباچف پیمان نیروهای هسته‌ای میان‌برد (INF) را در دسامبر ۱۹۸۷ امضا کردند. این اولین پیمانی بود که یک دسته کامل از سلاح‌های هسته‌ای را حذف می‌کرد. بیش از ۲,۶۰۰ موشک نابود شد. این پیمان نقطه عطفی در پایان جنگ سرد بود.",
          en: "Reagan and Gorbachev signed the Intermediate-Range Nuclear Forces (INF) Treaty in December 1987. It was the first treaty to eliminate an entire class of nuclear weapons. Over 2,600 missiles were destroyed. This treaty was a turning point in ending the Cold War.",
        },
      },
      {
        country: "russia",
        title: { fa: "گورباچف: گلاسنوست و پروستروئیکا", en: "Gorbachev: Glasnost & Perestroika" },
        description: { fa: "اصلاحات گورباچف شوروی را متحول کرد اما فروپاشی را تسریع کرد", en: "Gorbachev's reforms transform USSR but accelerate its collapse" },
        details: {
          fa: "اصلاحات گورباچف عمق بیشتری یافت. گلاسنوست (شفافیت) آزادی بیان محدودی ایجاد کرد و رسانه‌ها شروع به انتقاد از حکومت کردند. پروستروئیکا (بازسازی) اقتصاد را آزادتر کرد اما بی‌ثباتی اقتصادی افزایش یافت. جنبش‌های ملی‌گرایانه در جمهوری‌های شوروی رشد کرد.",
          en: "Gorbachev's reforms deepened. Glasnost (openness) created limited free speech and media began criticizing the government. Perestroika (restructuring) liberalized the economy but increased economic instability. Nationalist movements grew in Soviet republics.",
        },
      },
    ],
  },

  {
    year: 1988,
    shamsiYear: "۱۳۶۷",
    iran: {
      title: { fa: "پایان جنگ - قطعنامه ۵۹۸ - اعدام‌های ۶۷", en: "End of War - Resolution 598 - 1988 Executions" },
      description: { fa: "خمینی: «جام زهر نوشیدم» - اعدام هزاران زندانی سیاسی", en: "Khomeini: 'I drank poison' - Thousands of political prisoners executed" },
      details: {
        fa: "خمینی در ۲۷ تیر ۱۳۶۷ قطعنامه ۵۹۸ شورای امنیت را پذیرفت و گفت «نوشیدن جام زهر». بلافاصله کمیته‌های مرگ تشکیل شد و طی تابستان ۶۷ هزاران زندانی سیاسی (عمدتاً مجاهدین خلق و چپ‌ها) بدون محاکمه عادلانه اعدام شدند. آمار دقیق هنوز نامعلوم است (تخمین: ۲۸۰۰ تا ۳۰۰۰۰). این فاجعه تا سال‌ها مخفی ماند.",
        en: "Khomeini accepted UN Security Council Resolution 598 on July 18, 1988, calling it 'drinking poison.' Death committees were immediately formed and during summer 1988, thousands of political prisoners (mainly MEK and leftists) were executed without fair trial. The exact number remains unknown (estimates: 2,800 to 30,000). This tragedy remained hidden for years.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "سقوط هواپیمای ایران ایر ۶۵۵ توسط ناو آمریکایی", en: "USS Vincennes Shoots Down Iran Air 655" },
        description: { fa: "۲۹۰ مسافر غیرنظامی کشته شدند - آمریکا عذرخواهی نکرد", en: "290 civilians killed - US never formally apologized" },
        details: {
          fa: "در ۱۲ تیر ۱۳۶۷ ناو جنگی آمریکایی وینسنس هواپیمای مسافربری ایران ایر پرواز ۶۵۵ را بر فراز خلیج فارس ساقط کرد. هر ۲۹۰ سرنشین کشته شدند. آمریکا ادعا کرد هواپیما را با جنگنده اشتباه گرفته. ناخدای ناو مدال دریافت کرد. آمریکا هرگز رسماً عذرخواهی نکرد اما ۶۱.۸ میلیون دلار غرامت پرداخت.",
          en: "On July 3, 1988, the USS Vincennes shot down Iran Air Flight 655 over the Persian Gulf. All 290 passengers were killed. The US claimed it mistook the airliner for a fighter jet. The ship's captain received a medal. The US never formally apologized but paid $61.8 million in compensation.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Iran_Air_Flight_655_702702.png&width=200",
      },
      {
        country: "uk",
        title: { fa: "بمبگذاری لاکربی - سقوط پن‌ام ۱۰۳", en: "Lockerbie Bombing - Pan Am 103 Crash" },
        description: { fa: "بمبگذاری هواپیمای پن‌ام بر فراز اسکاتلند - ۲۷۰ کشته", en: "Pan Am plane bombed over Scotland - 270 killed" },
        details: {
          fa: "در ۲۱ دسامبر ۱۹۸۸ هواپیمای پن‌ام پرواز ۱۰۳ بر فراز لاکربی اسکاتلند منفجر شد. ۲۷۰ نفر (۲۵۹ سرنشین و ۱۱ نفر زمینی) کشته شدند. لیبی مسئول شناخته شد و عبدالباست المقراحی مأمور اطلاعات لیبی محکوم گردید. لیبی در ۲۰۰۳ مسئولیت را پذیرفت و غرامت پرداخت.",
          en: "On December 21, 1988, Pan Am Flight 103 exploded over Lockerbie, Scotland. 270 people (259 on board and 11 on the ground) were killed. Libya was found responsible and Libyan intelligence agent Abdelbaset al-Megrahi was convicted. Libya accepted responsibility in 2003 and paid compensation.",
        },
      },
      {
        country: "russia",
        title: { fa: "خروج شوروی از افغانستان", en: "Soviet Withdrawal from Afghanistan" },
        description: { fa: "آخرین سربازان شوروی افغانستان را ترک کردند", en: "Last Soviet soldiers leave Afghanistan" },
        details: {
          fa: "شوروی پس از ۹ سال جنگ شروع به خروج از افغانستان کرد (تکمیل در فوریه ۱۹۸۹). بیش از ۱۵ هزار سرباز شوروی و ۱ میلیون افغان کشته شدند. این شکست «ویتنام شوروی» نامیده شد و نقش مهمی در فروپاشی اتحاد جماهیر شوروی داشت.",
          en: "The USSR began withdrawing from Afghanistan after 9 years of war (completed February 1989). Over 15,000 Soviet soldiers and 1 million Afghans were killed. This defeat was called the 'Soviet Vietnam' and played a major role in the USSR's collapse.",
        },
      },
    ],
  },
  {
    year: 1989,
    shamsiYear: "۱۳۶۸",
    iran: {
      title: { fa: "درگذشت خمینی - خامنه‌ای رهبر شد", en: "Khomeini Dies - Khamenei Becomes Supreme Leader" },
      description: { fa: "رفسنجانی رئیس‌جمهور شد - دوران بازسازی اقتصادی", en: "Rafsanjani becomes president - Economic reconstruction era" },
      details: {
        fa: "خمینی در ۱۴ خرداد ۱۳۶۸ درگذشت. میلیون‌ها نفر در تشییع جنازه شرکت کردند. مجلس خبرگان علی خامنه‌ای (رئیس‌جمهور وقت) را به عنوان رهبر انتخاب کرد. رفسنجانی با شعار «سازندگی» رئیس‌جمهور شد. دوران بازسازی پس از جنگ آغاز شد. تنش بین اصلاح‌طلبان و محافظه‌کاران شکل گرفت.",
        en: "Khomeini died on June 3, 1989. Millions attended his funeral. The Assembly of Experts chose Ali Khamenei (then president) as Supreme Leader. Rafsanjani became president with a 'construction' platform. Post-war reconstruction began. Tensions between reformists and conservatives took shape.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Roollah-Khomeini.jpg&width=200",
    },
    world: [
      {
        country: "germany",
        title: { fa: "سقوط دیوار برلین", en: "Fall of the Berlin Wall" },
        description: { fa: "۹ نوامبر: مردم دیوار برلین را شکستند - پایان جنگ سرد", en: "Nov 9: People tear down Berlin Wall - End of Cold War" },
        details: {
          fa: "در ۹ نوامبر ۱۹۸۹ مقامات آلمان شرقی اجازه عبور از دیوار را دادند. هزاران نفر با چکش و کلنگ به سراغ دیوار رفتند. صحنه‌های هیجان‌انگیز بازگشایی دروازه براندنبورگ در سراسر جهان پخش شد. دیوار ۲۸ سال برلین را تقسیم کرده بود. این لحظه نماد پایان جنگ سرد شد.",
          en: "On November 9, 1989, East German officials opened the border. Thousands attacked the wall with hammers and picks. Exciting scenes at the Brandenburg Gate were broadcast worldwide. The wall had divided Berlin for 28 years. This moment became the symbol of the end of the Cold War.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg&width=200",
      },
      {
        country: "world",
        title: { fa: "کشتار میدان تیان‌آنمن", en: "Tiananmen Square Massacre" },
        description: { fa: "ارتش چین معترضان دموکراسی‌خواه را سرکوب کرد - صدها کشته", en: "Chinese army crushes democracy protesters - Hundreds killed" },
        details: {
          fa: "اعتراضات دانشجویی دموکراسی‌خواه از آوریل ۱۹۸۹ آغاز شد و تصویر نمادین «مرد تانک» به نماد مقاومت تبدیل شد. بین ۳۰۰ تا ۳,۰۰۰ نفر کشته شدند و حکومت چین سرکوب گسترده‌ای انجام داد. چین مسیر اصلاحات اقتصادی بدون آزادی سیاسی را انتخاب کرد که تا امروز ادامه دارد.",
          en: "Student-led pro-democracy protests began in April 1989, and the iconic 'Tank Man' image became a global symbol of resistance. Between 300 and 3,000 people were estimated killed as the government launched a brutal crackdown. China chose the path of economic reform without political freedom, a model it maintains to this day.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tianasquare.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "سقوط تاچر - پایان تاچریسم", en: "Thatcher's Fall - End of Thatcherism" },
        description: { fa: "مالیات سرانه و اختلافات اروپایی تاچر را تضعیف کرد", en: "Poll tax and European disputes weaken Thatcher" },
        details: {
          fa: "مارگارت تاچر با بحران‌های متعدد مواجه شد: مالیات سرانه (Poll Tax) شورش‌های خیابانی ایجاد کرد و مخالفت تاچر با ادغام اروپایی حزب محافظه‌کار را تقسیم کرد. در نوامبر ۱۹۹۰ تاچر پس از ۱۱ سال نخست‌وزیری استعفا داد و جان میجر جانشین او شد.",
          en: "Margaret Thatcher faced multiple crises: the Poll Tax sparked street riots and her opposition to European integration divided the Conservative Party. In November 1990, Thatcher resigned after 11 years as PM and John Major succeeded her.",
        },
      },
      {
        country: "france",
        title: { fa: "انقلاب‌های مخملین اروپای شرقی", en: "Velvet Revolutions in Eastern Europe" },
        description: { fa: "دویست‌سالگی انقلاب فرانسه همزمان با سقوط کمونیسم در اروپا", en: "Bicentennial of French Revolution coincides with fall of communism in Europe" },
        details: {
          fa: "فرانسه دویست‌سالگی انقلاب ۱۷۸۹ را جشن گرفت در حالی که اروپای شرقی آزادی خود را به دست می‌آورد. میتران نقش فعالی در حمایت از وحدت آلمان و ادغام اروپایی داشت. فرانسه و آلمان موتور اتحادیه اروپا شدند.",
          en: "France celebrated the bicentennial of the 1789 Revolution while Eastern Europe was gaining its freedom. Mitterrand played an active role in supporting German reunification and European integration. France and Germany became the engine of the European Union.",
        },
      },
    ],
  },
  {
    year: 1990,
    shamsiYear: "۱۳۶۹",
    iran: {
      title: { fa: "بازسازی پس از جنگ - زلزله منجیل", en: "Post-War Reconstruction - Manjil Earthquake" },
      description: { fa: "رفسنجانی بازسازی را آغاز کرد - زلزله ۷.۴ ریشتر ۴۰,۰۰۰ کشته", en: "Rafsanjani starts reconstruction - 7.4 earthquake kills 40,000" },
      details: {
        fa: "رفسنجانی دوران سازندگی را آغاز کرد: خصوصی‌سازی، آزادسازی اقتصادی و تلاش برای بازسازی زیرساخت‌های ویران‌شده جنگ. در خرداد ۱۳۶۹ زلزله ویرانگر ۷.۴ ریشتری منجیل-رودبار ۴۰,۰۰۰ نفر را کشت و ۵۰۰,۰۰۰ نفر را بی‌خانمان کرد.",
        en: "Rafsanjani launched the construction era: privatization, economic liberalization and efforts to rebuild war-damaged infrastructure. In June 1990, a devastating 7.4-magnitude earthquake in Manjil-Rudbar killed 40,000 and left 500,000 homeless.",
      },
    },
    world: [
      {
        country: "germany",
        title: { fa: "اتحاد مجدد آلمان", en: "German Reunification" },
        description: { fa: "آلمان شرقی و غربی پس از ۴۵ سال متحد شدند", en: "East and West Germany unite after 45 years" },
        details: {
          fa: "در ۳ اکتبر ۱۹۹۰ آلمان رسماً متحد شد. هلموت کهل «صدراعظم وحدت» لقب گرفت. هزینه بازسازی آلمان شرقی تریلیون‌ها مارک بود. NATO به شرق گسترش یافت. آلمان به بزرگترین اقتصاد اروپا تبدیل شد.",
          en: "On October 3, 1990, Germany officially reunified. Helmut Kohl was dubbed 'Chancellor of Unity.' Rebuilding East Germany cost trillions of marks. NATO expanded eastward. Germany became Europe's largest economy.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg&width=200",
      },
      {
        country: "world",
        title: { fa: "حمله عراق به کویت", en: "Iraq Invades Kuwait" },
        description: { fa: "صدام کویت را اشغال کرد - ائتلاف جهانی شکل گرفت", en: "Saddam occupies Kuwait - Global coalition forms" },
        details: {
          fa: "صدام حسین در ۲ اوت ۱۹۹۰ کویت را اشغال کرد و آن را استان نوزدهم عراق خواند. شورای امنیت قطعنامه‌های متعددی صادر و تحریم‌های اقتصادی اعمال کرد. ائتلاف ۳۵ کشوری به رهبری آمریکا برای آزادسازی کویت شکل گرفت.",
          en: "Saddam Hussein invaded Kuwait on August 2, 1990, declaring it Iraq's 19th province. The Security Council issued multiple resolutions and imposed economic sanctions. A 35-nation coalition led by the US was formed to liberate Kuwait.",
        },
      },
      {
        country: "russia",
        title: { fa: "فروپاشی بلوک شرق - بحران شوروی", en: "Eastern Bloc Collapse - Soviet Crisis" },
        description: { fa: "جمهوری‌های شوروی خواستار استقلال شدند", en: "Soviet republics demand independence" },
        details: {
          fa: "جمهوری‌های بالتیک (لیتوانی، لتونی، استونی) اعلام استقلال کردند. گورباچف نمی‌توانست فروپاشی شوروی را متوقف کند. اقتصاد شوروی در بحران عمیق بود. بوریس یلتسین رئیس‌جمهور روسیه شد و به رقیب اصلی گورباچف تبدیل گردید.",
          en: "Baltic republics (Lithuania, Latvia, Estonia) declared independence. Gorbachev couldn't stop the USSR's disintegration. The Soviet economy was in deep crisis. Boris Yeltsin became Russia's president and became Gorbachev's main rival.",
        },
      },
    ],
  },
  {
    year: 1991,
    shamsiYear: "۱۳۷۰",
    iran: {
      title: { fa: "آغاز دوران سازندگی رفسنجانی", en: "Rafsanjani's Reconstruction Era Begins" },
      description: { fa: "رفسنجانی بازسازی پس از جنگ و خصوصی‌سازی را آغاز کرد", en: "Rafsanjani launches post-war reconstruction and privatization" },
      details: {
        fa: "اکبر هاشمی رفسنجانی در دور اول ریاست‌جمهوری خود دوران «سازندگی» را آغاز کرد. برنامه تعدیل اقتصادی شامل خصوصی‌سازی، آزادسازی تجاری و وام از بانک جهانی بود. ایران از فروپاشی شوروی برای گسترش نفوذ در آسیای مرکزی و قفقاز بهره برد. روابط با اروپا بهبود یافت اما تنش با آمریکا ادامه داشت.",
        en: "Akbar Hashemi Rafsanjani began his 'construction era' in his first presidential term. The economic adjustment program included privatization, trade liberalization, and World Bank loans. Iran benefited from the Soviet collapse to expand influence in Central Asia and the Caucasus. Relations with Europe improved but tensions with the US continued.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "فروپاشی شوروی - پایان جنگ سرد", en: "Collapse of Soviet Union - End of Cold War" },
        description: { fa: "۱۵ جمهوری مستقل شدند - آمریکا تنها ابرقدرت جهان", en: "15 republics gain independence - USA becomes sole superpower" },
        details: {
          fa: "در ۲۵ دسامبر ۱۹۹۱ گورباچف استعفا داد و پرچم شوروی از کرملین پایین آمد. ۱۵ جمهوری مستقل شدند. آمریکا تنها ابرقدرت جهان شد. «پایان تاریخ» فوکویاما محبوب شد. اما بی‌ثباتی، جنگ‌های قومی و ظهور الیگارش‌ها دنبال آمد.",
          en: "On December 25, 1991, Gorbachev resigned and the Soviet flag came down from the Kremlin. 15 republics became independent. The US became the sole superpower. Fukuyama's 'End of History' became popular. But instability, ethnic wars, and the rise of oligarchs followed.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Soviet_flag_red.svg&width=200",
      },
      {
        country: "usa",
        title: { fa: "جنگ اول خلیج فارس", en: "First Gulf War" },
        description: { fa: "آمریکا عراق را از کویت بیرون راند - «نظم نوین جهانی»", en: "US expels Iraq from Kuwait - 'New World Order'" },
        details: {
          fa: "ائتلاف ۳۵ کشوری به رهبری آمریکا عراق را در عرض ۴۲ روز از کویت بیرون راند. بوش پدر از «نظم نوین جهانی» سخن گفت. عراق تحت تحریم‌های شدید قرار گرفت. صدام در قدرت ماند. بمباران زیرساخت‌های عراق جان هزاران غیرنظامی را گرفت.",
          en: "A 35-nation coalition led by the US expelled Iraq from Kuwait in 42 days. Bush Sr. spoke of a 'New World Order.' Iraq was placed under severe sanctions. Saddam remained in power. Bombing of Iraqi infrastructure killed thousands of civilians.",
        },
      },
      {
        country: "russia",
        title: { fa: "فروپاشی اتحاد جماهیر شوروی", en: "Collapse of the Soviet Union" },
        description: { fa: "گورباچف استعفا داد - ۱۵ جمهوری مستقل شدند", en: "Gorbachev resigns - 15 republics gain independence" },
        details: {
          fa: "کودتای ناموفق اوت ۱۹۹۱ علیه گورباچف فروپاشی شوروی را تسریع کرد. یلتسین بر تانک ایستاد و کودتا را شکست داد. در ۲۵ دسامبر گورباچف استعفا داد و پرچم شوروی از کرملین پایین آمد. ۱۵ جمهوری مستقل شدند. بزرگترین امپراتوری دنیا بدون شلیک یک گلوله فروپاشید.",
          en: "The failed August 1991 coup against Gorbachev accelerated the Soviet collapse. Yeltsin stood on a tank and defeated the coup. On December 25, Gorbachev resigned and the Soviet flag came down from the Kremlin. 15 republics became independent. The world's largest empire collapsed without a shot being fired.",
        },
      },
    ],
  },
  {
    year: 1992,
    shamsiYear: "۱۳۷۱",
    iran: {
      title: { fa: "بازسازی پس از جنگ ادامه دارد", en: "Post-War Reconstruction Continues" },
      description: { fa: "رفسنجانی سیاست تعدیل اقتصادی - بازسازی زیرساخت‌ها", en: "Rafsanjani's economic adjustment policy - Infrastructure rebuilding" },
      details: {
        fa: "رفسنجانی برنامه تعدیل اقتصادی و خصوصی‌سازی را ادامه داد. بازسازی مناطق جنگ‌زده (خوزستان و غرب) در جریان بود. اما تورم بالا و بیکاری مردم را ناراضی می‌کرد. انتخابات مجلس چهارم برگزار شد و محافظه‌کاران اکثریت را به دست آوردند.",
        en: "Rafsanjani continued his economic adjustment and privatization program. Reconstruction of war-torn areas (Khuzestan and western Iran) was ongoing. But high inflation and unemployment bred public dissatisfaction. Fourth parliament elections were held and conservatives won the majority.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ‌های یوگسلاوی - فروپاشی رسمی شوروی", en: "Yugoslav Wars - USSR Formally Dissolved" },
        description: { fa: "جنگ داخلی خونین در بوسنی - شوروی رسماً منحل شد", en: "Bloody civil war in Bosnia - USSR formally dissolved" },
        details: {
          fa: "جنگ‌های یوگسلاوی با حمله صرب‌ها به بوسنی شدت گرفت. محاصره سارایوو آغاز شد و پاکسازی قومی صورت گرفت. شوروی که در ۱۹۹۱ فروپاشیده بود رسماً منحل شد و جامعه کشورهای مستقل (CIS) جایگزین آن شد.",
          en: "The Yugoslav Wars intensified with the Serbian attack on Bosnia. The siege of Sarajevo began and ethnic cleansing took place. The USSR, which had collapsed in 1991, was formally dissolved and replaced by the Commonwealth of Independent States (CIS).",
        },
      },
      {
        country: "usa",
        title: { fa: "انتخاب بیل کلینتون", en: "Bill Clinton Elected" },
        description: { fa: "کلینتون با شعار «اقتصاد، احمق» بر بوش پیروز شد", en: "Clinton defeats Bush with 'It's the economy, stupid' slogan" },
        details: {
          fa: "بیل کلینتون با شعار «مسئله اقتصاد است، احمق» بر جرج بوش پدر پیروز شد. کلینتون وعده اصلاحات بهداشتی و اقتصادی داد. دوران ریاست‌جمهوری او همراه با رونق اقتصادی و انقلاب اینترنت بود.",
          en: "Bill Clinton defeated George H.W. Bush with the slogan 'It's the economy, stupid.' Clinton promised healthcare and economic reforms. His presidency coincided with economic boom and the internet revolution.",
        },
      },
      {
        country: "uk",
        title: { fa: "چهارشنبه سیاه - بحران ارزی بریتانیا", en: "Black Wednesday - British Currency Crisis" },
        description: { fa: "پوند از مکانیسم نرخ ارز اروپا خارج شد - جرج سوروس ۱ میلیارد دلار سود کرد", en: "Pound forced out of European Exchange Rate Mechanism - George Soros makes $1 billion" },
        details: {
          fa: "در ۱۶ سپتامبر ۱۹۹۲ (چهارشنبه سیاه) پوند بریتانیا از مکانیسم نرخ ارز اروپا (ERM) خارج شد. بانک مرکزی بریتانیا میلیاردها پوند برای دفاع از ارزش پوند خرج کرد اما شکست خورد. جرج سوروس سوداگر ارز ۱ میلیارد دلار سود کرد. این بحران اعتبار حزب محافظه‌کار را نابود کرد.",
          en: "On September 16, 1992 (Black Wednesday), the British pound was forced out of the European Exchange Rate Mechanism (ERM). The Bank of England spent billions defending the pound but failed. Currency speculator George Soros made $1 billion. This crisis destroyed the Conservative Party's economic credibility.",
        },
      },
    ],
  },
  {
    year: 1993,
    shamsiYear: "۱۳۷۲",
    iran: {
      title: { fa: "خصوصی‌سازی رفسنجانی - بحران اقتصادی", en: "Rafsanjani's Privatization - Economic Crisis" },
      description: { fa: "سیاست تعدیل اقتصادی با مقاومت مواجه شد - تورم و بدهی خارجی", en: "Economic adjustment policy faces resistance - Inflation and foreign debt" },
      details: {
        fa: "رفسنجانی در دور دوم ریاست‌جمهوری خود تلاش برای خصوصی‌سازی و آزادسازی اقتصادی را ادامه داد اما با مقاومت محافظه‌کاران و بنیادها مواجه شد. ایران با بدهی خارجی سنگین و تورم بالا دست و پنجه نرم می‌کرد. سطح زندگی مردم نسبت به قبل از انقلاب پایین‌تر بود.",
        en: "Rafsanjani in his second term continued efforts at privatization and economic liberalization but faced resistance from conservatives and foundations. Iran struggled with heavy foreign debt and high inflation. Living standards were lower than pre-revolution levels.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "توافقات اسلو - صلح اسرائیل و فلسطین", en: "Oslo Accords - Israel-PLO Peace" },
        description: { fa: "اسرائیل و سازمان آزادی‌بخش فلسطین صلح کردند", en: "Israel and PLO make peace" },
        details: {
          fa: "در سپتامبر ۱۹۹۳ اسحاق رابین (اسرائیل) و یاسر عرفات (فلسطین) با میانجیگری نروژ توافقات اسلو را امضا و در کاخ سفید دست دادند. اسرائیل موجودیت فلسطین و فلسطین موجودیت اسرائیل را به رسمیت شناخت. این توافق امید صلح ایجاد کرد اما در نهایت با ترور رابین و گسترش شهرک‌سازی شکست خورد.",
          en: "In September 1993, Yitzhak Rabin (Israel) and Yasser Arafat (Palestine) signed the Oslo Accords with Norway's mediation and shook hands at the White House. Israel recognized Palestinian existence and Palestine recognized Israel. The agreement created hope for peace but ultimately failed with Rabin's assassination and settlement expansion.",
        },
      },
      {
        country: "world",
        title: { fa: "پیمان ماستریخت - تشکیل اتحادیه اروپا", en: "Maastricht Treaty - EU Formed" },
        description: { fa: "اتحادیه اروپا رسماً تشکیل شد", en: "European Union officially established" },
        details: {
          fa: "پیمان ماستریخت در نوامبر ۱۹۹۳ اجرایی شد و اتحادیه اروپا رسماً تشکیل شد. این پیمان همکاری اقتصادی اروپا را به اتحادیه سیاسی تبدیل کرد و زمینه را برای یورو، شهروندی مشترک و سیاست خارجی مشترک فراهم کرد.",
          en: "The Maastricht Treaty came into effect in November 1993 and the European Union was officially established. This treaty transformed European economic cooperation into a political union and laid the groundwork for the euro, common citizenship, and common foreign policy.",
        },
      },
      {
        country: "russia",
        title: { fa: "بحران پارلمانی روسیه - یلتسین پارلمان را بمباران کرد", en: "Russian Parliamentary Crisis - Yeltsin Bombards Parliament" },
        description: { fa: "تانک‌های یلتسین ساختمان پارلمان (خانه سفید) را گلوله‌باران کردند", en: "Yeltsin's tanks shell parliament building (White House)" },
        details: {
          fa: "بحران قدرت بین یلتسین و پارلمان روسیه به خشونت کشید. یلتسین پارلمان را منحل کرد و نمایندگان مخالف در ساختمان مقاومت کردند. تانک‌ها ساختمان پارلمان را بمباران کردند و بیش از ۱۰۰ نفر کشته شدند. یلتسین قانون اساسی جدیدی نوشت که قدرت ریاست‌جمهوری را تقویت کرد.",
          en: "The power struggle between Yeltsin and Russia's parliament turned violent. Yeltsin dissolved parliament and opposing deputies barricaded themselves inside. Tanks shelled the parliament building, killing over 100 people. Yeltsin wrote a new constitution strengthening presidential power.",
        },
      },
    ],
  },

  {
    year: 1994,
    shamsiYear: "۱۳۷۳",
    iran: {
      title: { fa: "بحران اقتصادی و شورش‌های شهری", en: "Economic Crisis & Urban Riots" },
      description: { fa: "شورش در اسلامشهر و مشهد - تورم و بیکاری بالا", en: "Riots in Islamshahr & Mashhad - High inflation and unemployment" },
      details: {
        fa: "سیاست‌های تعدیل اقتصادی رفسنجانی منجر به افزایش شدید قیمت‌ها شد. شورش‌های شهری در اسلامشهر، قزوین و مشهد رخ داد. نرخ ارز سقوط کرد. طبقه متوسط فقیرتر شد. فساد گسترده اقتصادی اعتماد مردم را کاهش داد.",
        en: "Rafsanjani's economic adjustment policies led to sharp price increases. Urban riots erupted in Islamshahr, Qazvin and Mashhad. The exchange rate collapsed. The middle class grew poorer. Widespread economic corruption eroded public trust.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "نسل‌کشی رواندا - ۸۰۰,۰۰۰ کشته در ۱۰۰ روز", en: "Rwandan Genocide - 800,000 Killed in 100 Days" },
        description: { fa: "هوتوها توتسی‌ها را قتل‌عام کردند - جهان نظاره‌گر بود", en: "Hutus massacre Tutsis - World watches" },
        details: {
          fa: "در عرض ۱۰۰ روز حدود ۸۰۰ هزار نفر از قوم توتسی و هوتوهای میانه‌رو توسط شبه‌نظامیان هوتو با ماچت قتل‌عام شدند. سازمان ملل و جامعه بین‌المللی علی‌رغم آگاهی از وقایع، مداخله مؤثری نکردند و این نسل‌کشی به نمادی از شکست جامعه جهانی تبدیل شد.",
          en: "In 100 days, approximately 800,000 Tutsis and moderate Hutus were massacred by Hutu militia using machetes. The UN and international community failed to intervene effectively despite awareness of events, making this genocide a symbol of the world's failure to act.",
        },
      },
      {
        country: "russia",
        title: { fa: "جنگ اول چچن", en: "First Chechen War" },
        description: { fa: "روسیه به چچن حمله کرد - شکست تحقیرآمیز", en: "Russia invades Chechnya - Humiliating defeat" },
        details: {
          fa: "یلتسین نیروهای روسیه را برای سرکوب جنبش استقلال‌طلبانه چچن فرستاد. گروزنی به ویرانه تبدیل شد اما جنگجویان چچنی مقاومت سرسختانه‌ای کردند. ارتش روسیه شکست تحقیرآمیزی خورد و جنگ با توافق صلح ۱۹۹۶ پایان یافت.",
          en: "Yeltsin sent Russian forces to crush the Chechen independence movement. Grozny was reduced to rubble but Chechen fighters mounted fierce resistance. The Russian army suffered a humiliating defeat and the war ended with a 1996 peace agreement.",
        },
      },
      {
        country: "uk",
        title: { fa: "افتتاح تونل مانش - اتصال بریتانیا به قاره اروپا", en: "Channel Tunnel Opens - Britain Connected to Europe" },
        description: { fa: "بریتانیا و فرانسه با تونل زیر کانال مانش متصل شدند", en: "Britain and France connected by tunnel under English Channel" },
        details: {
          fa: "تونل مانش (یوروتانل) در ۶ مه ۱۹۹۴ رسماً افتتاح شد. ملکه الیزابت دوم و فرانسوا میتران تونل را افتتاح کردند. این پروژه ۵۰ کیلومتری بزرگترین پروژه عمرانی اروپا بود. قطار یوروستار لندن را در ۲ ساعت و ۱۵ دقیقه به پاریس متصل کرد.",
          en: "The Channel Tunnel (Chunnel) officially opened on May 6, 1994. Queen Elizabeth II and François Mitterrand inaugurated it. This 50 km project was Europe's largest construction project. The Eurostar train connected London to Paris in 2 hours and 15 minutes.",
        },
      },
    ],
  },
  {
    year: 1995,
    shamsiYear: "۱۳۷۴",
    iran: {
      title: { fa: "تحریم کامل تجاری آمریکا", en: "US Total Trade Embargo" },
      description: { fa: "کلینتون تحریم کامل تجاری و سرمایه‌گذاری علیه ایران را اعلام کرد", en: "Clinton announces total trade and investment sanctions against Iran" },
      details: {
        fa: "بیل کلینتون در مه ۱۹۹۵ تحریم کامل تجاری و سرمایه‌گذاری علیه ایران را اعلام کرد. قرارداد نفتی کونوکو با ایران لغو شد. آمریکا ایران را متهم به حمایت از تروریسم و تلاش برای ساخت سلاح هسته‌ای کرد. این تحریم‌ها اقتصاد ایران را تحت فشار شدید قرار داد و تا امروز با شدت بیشتر ادامه دارد.",
        en: "Bill Clinton announced total trade and investment sanctions against Iran in May 1995. The Conoco oil deal with Iran was canceled. The US accused Iran of supporting terrorism and pursuing nuclear weapons. These sanctions put severe pressure on Iran's economy and continue with greater intensity today.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "بمبگذاری اوکلاهاما سیتی", en: "Oklahoma City Bombing" },
        description: { fa: "بمبگذاری تروریستی ساختمان فدرال - ۱۶۸ کشته", en: "Terrorist bombing of federal building - 168 killed" },
        details: {
          fa: "تیموتی مک‌وی در ۱۹ آوریل ۱۹۹۵ ساختمان فدرال آلفرد مورا در اوکلاهاما سیتی را با بمب منفجر کرد. ۱۶۸ نفر از جمله ۱۹ کودک کشته شدند. این بزرگترین حمله تروریستی داخلی در تاریخ آمریکا تا آن زمان بود.",
          en: "Timothy McVeigh detonated a bomb at the Alfred P. Murrah Federal Building in Oklahoma City on April 19, 1995. 168 people including 19 children were killed. It was the deadliest domestic terrorist attack in US history at that time.",
        },
      },
      {
        country: "world",
        title: { fa: "توافقات دیتون - پایان جنگ بوسنی", en: "Dayton Agreement - End of Bosnian War" },
        description: { fa: "پایان جنگ خونین بوسنی - تأسیس سازمان تجارت جهانی", en: "End of bloody Bosnian war - WTO founded" },
        details: {
          fa: "توافقات دیتون در نوامبر ۱۹۹۵ جنگ سه‌ونیم‌ساله بوسنی را پایان داد. بیش از ۱۰۰,۰۰۰ نفر کشته و ۲ میلیون آواره شده بودند. نسل‌کشی سربرنیتسا (ژوئیه ۱۹۹۵) بدترین کشتار اروپا پس از جنگ جهانی دوم بود. همچنین سازمان تجارت جهانی (WTO) در ژانویه ۱۹۹۵ تأسیس شد.",
          en: "The Dayton Agreement in November 1995 ended the three-and-a-half-year Bosnian War. Over 100,000 were killed and 2 million displaced. The Srebrenica genocide (July 1995) was Europe's worst massacre since WWII. Also, the WTO was founded in January 1995.",
        },
      },
      {
        country: "france",
        title: { fa: "ژاک شیراک رئیس‌جمهور فرانسه شد", en: "Jacques Chirac Becomes French President" },
        description: { fa: "شیراک با وعده اصلاحات اقتصادی بر ژوسپن پیروز شد", en: "Chirac defeats Jospin with economic reform promises" },
        details: {
          fa: "ژاک شیراک در انتخابات ۱۹۹۵ بر لیونل ژوسپن پیروز شد و رئیس‌جمهور فرانسه شد. شیراک آزمایش‌های اتمی فرانسه در اقیانوس آرام را از سر گرفت که اعتراضات بین‌المللی گسترده‌ای برانگیخت. همچنین برای اولین بار مسئولیت فرانسه در جمع‌آوری یهودیان در جنگ دوم را پذیرفت.",
          en: "Jacques Chirac defeated Lionel Jospin in the 1995 election to become French president. Chirac resumed French nuclear tests in the Pacific, sparking widespread international protests. He also acknowledged for the first time France's responsibility in the roundup of Jews during WWII.",
        },
      },
    ],
  },
  {
    year: 1996,
    shamsiYear: "۱۳۷۵",
    iran: {
      title: { fa: "عامل خاتمی در حال ظهور", en: "Khatami Factor Emerging" },
      description: { fa: "نارضایتی از وضع موجود - جامعه خواهان تغییر", en: "Dissatisfaction with status quo - Society demands change" },
      details: {
        fa: "انتخابات مجلس پنجم با پیروزی محافظه‌کاران برگزار شد اما نارضایتی عمومی رو به افزایش بود. محمد خاتمی که مشاور فرهنگی خاتمی بود و کتابخانه ملی را اداره می‌کرد، به عنوان نامزد اصلاحات مطرح شد. فضای فکری جامعه در حال تغییر بود و نسل جوان خواهان آزادی بیشتر بود.",
        en: "Fifth parliament elections were held with conservative victory, but public dissatisfaction was growing. Mohammad Khatami, who served as cultural advisor and headed the National Library, emerged as a reform candidate. Society's intellectual atmosphere was changing and the young generation demanded more freedom.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "طالبان کابل را فتح کردند", en: "Taliban Take Kabul" },
        description: { fa: "طالبان حکومت اسلامی افغانستان را تأسیس کردند", en: "Taliban establish Islamic government in Afghanistan" },
        details: {
          fa: "طالبان در سپتامبر ۱۹۹۶ کابل را فتح کردند و امارت اسلامی افغانستان را تأسیس نمودند. نجیب‌الله رئیس‌جمهور سابق را اعدام کردند. طالبان شریعت سختگیرانه اعمال کردند و به القاعده پناه دادند. ایران با طالبان رابطه خصمانه داشت.",
          en: "The Taliban captured Kabul in September 1996 and established the Islamic Emirate of Afghanistan. They executed former president Najibullah. The Taliban imposed strict Sharia law and harbored al-Qaeda. Iran had hostile relations with the Taliban.",
        },
      },
      {
        country: "usa",
        title: { fa: "انتخاب مجدد کلینتون", en: "Clinton Re-elected" },
        description: { fa: "کلینتون با پیروزی بر باب دول رئیس‌جمهور ماند", en: "Clinton stays president with victory over Bob Dole" },
        details: {
          fa: "بیل کلینتون با رونق اقتصادی و کاهش بیکاری در انتخابات ۱۹۹۶ بر باب دول جمهوری‌خواه پیروز شد. دوره دوم او با رسوایی مونیکا لوینسکی و استیضاح (ولی عدم برکناری) همراه بود. اقتصاد آمریکا بهترین دوران خود را تجربه می‌کرد.",
          en: "Bill Clinton won re-election over Republican Bob Dole in 1996 with economic prosperity and declining unemployment. His second term was marked by the Monica Lewinsky scandal and impeachment (but not removal). The US economy was experiencing its best period.",
        },
      },
      {
        country: "russia",
        title: { fa: "بازانتخاب یلتسین - الیگارش‌ها و خصوصی‌سازی", en: "Yeltsin Re-elected - Oligarchs & Privatization" },
        description: { fa: "یلتسین با کمک الیگارش‌ها بر کمونیست‌ها پیروز شد", en: "Yeltsin defeats communists with oligarchs' help" },
        details: {
          fa: "یلتسین بیمار و نامحبوب با کمک مالی و رسانه‌ای الیگارش‌ها (بورودوفسکی، خودورکوفسکی و دیگران) در انتخابات ۱۹۹۶ بر زیوگانوف کمونیست پیروز شد. خصوصی‌سازی «وام در برابر سهام» ثروت ملی را به چند الیگارش واگذار کرد و فساد گسترده‌ای ایجاد شد.",
          en: "Yeltsin, sick and unpopular, defeated communist Zyuganov in 1996 elections with financial and media support from oligarchs (Berezovsky, Khodorkovsky, and others). The 'loans for shares' privatization transferred national wealth to a few oligarchs, creating widespread corruption.",
        },
      },
    ],
  },

  {
    year: 1997,
    shamsiYear: "۱۳۷۶",
    iran: {
      title: { fa: "دوم خرداد - خاتمی و اصلاحات", en: "May 23 - Khatami & Reform Movement" },
      description: { fa: "خاتمی با ۲۰ میلیون رأی رئیس‌جمهور شد - آزادی مطبوعات", en: "Khatami wins with 20 million votes - Press freedom" },
      details: {
        fa: "محمد خاتمی با شعار «جامعه مدنی» و «گفتگوی تمدن‌ها» با ۲۰ میلیون رأی (۶۹.۶٪) رئیس‌جمهور شد. صدها روزنامه و مجله آزاد منتشر شدند. جامعه مدنی شکوفا شد. اما «فشار از پایین، چانه‌زنی از بالا» با مقاومت محافظه‌کاران و نهادهای امنیتی روبرو شد. قتل‌های زنجیره‌ای روشنفکران در ۱۳۷۷ آشکار شد.",
        en: "Mohammad Khatami won with 20 million votes (69.6%) on a platform of 'civil society' and 'dialogue of civilizations.' Hundreds of free newspapers and magazines were published. Civil society flourished. But 'pressure from below, bargaining from above' met resistance from conservatives and security apparatus. The chain murders of intellectuals were revealed in 1998.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mohammad_Khatami_-_August_26%2C_2003.jpg&width=200",
    },
    world: [
      {
        country: "uk",
        title: { fa: "تونی بلر نخست‌وزیر - نیو لیبر", en: "Tony Blair PM - New Labour" },
        description: { fa: "پایان ۱۸ سال حکومت محافظه‌کاران", en: "End of 18 years of Conservative rule" },
        details: {
          fa: "بلر با پیروزی بزرگ انتخاباتی ۱۸ سال حکومت محافظه‌کاران را پایان داد. مهم‌ترین دستاوردش توافق‌نامه آدینه نیک برای صلح ایرلند شمالی بود. بلر همچنین مداخله نظامی در کوزوو را رهبری کرد که از نسل‌کشی جلوگیری کرد.",
          en: "Blair won a landslide victory ending 18 years of Conservative rule. His most significant achievement was the Good Friday Agreement bringing peace to Northern Ireland. Blair also led military intervention in Kosovo, which prevented ethnic cleansing.",
        },
      },
      {
        country: "china",
        title: { fa: "بازگشت هنگ‌کنگ به چین", en: "Hong Kong Returns to China" },
        description: { fa: "بریتانیا هنگ‌کنگ را پس از ۱۵۶ سال به چین بازگرداند", en: "Britain returns Hong Kong to China after 156 years" },
        details: {
          fa: "بریتانیا در ۱ ژوئیه ۱۹۹۷ حاکمیت هنگ‌کنگ را پس از ۱۵۶ سال به چین بازگرداند. چین سیستم «یک کشور، دو نظام» را برای ۵۰ سال تضمین کرد. هنگ‌کنگ به عنوان مرکز مالی بین‌المللی باقی ماند اما نگرانی‌ها درباره آزادی‌ها رشد کرد.",
          en: "Britain returned Hong Kong's sovereignty to China on July 1, 1997 after 156 years. China guaranteed the 'One Country, Two Systems' model for 50 years. Hong Kong remained an international financial center but concerns about freedoms grew.",
        },
      },
      {
        country: "usa",
        title: { fa: "رونق اقتصاد دیجیتال آمریکا", en: "US Digital Economy Boom" },
        description: { fa: "حباب داتکام و رشد اینترنت اقتصاد آمریکا را متحول کرد", en: "Dotcom bubble and internet growth transform US economy" },
        details: {
          fa: "اقتصاد آمریکا دوره رشد بی‌سابقه‌ای را تجربه می‌کرد. شرکت‌های اینترنتی مانند آمازون، یاهو و ای‌بی ارزش‌های نجومی یافتند. بیکاری به پایین‌ترین سطح در ۳۰ سال رسید. بودجه فدرال برای اولین بار در دهه‌ها مازاد داشت. اما حباب داتکام در ۲۰۰۰ ترکید.",
          en: "The US economy experienced unprecedented growth. Internet companies like Amazon, Yahoo, and eBay reached astronomical valuations. Unemployment hit its lowest level in 30 years. The federal budget had a surplus for the first time in decades. But the dotcom bubble burst in 2000.",
        },
      },
    ],
  },
  {
    year: 1998,
    shamsiYear: "۱۳۷۷",
    iran: {
      title: { fa: "اصلاحات خاتمی زیر حمله - قتل‌های زنجیره‌ای", en: "Khatami's Reforms Under Attack - Chain Murders" },
      description: { fa: "قتل روشنفکران و نویسندگان توسط عوامل وزارت اطلاعات", en: "Murder of intellectuals and writers by Intelligence Ministry agents" },
      details: {
        fa: "در پاییز ۱۳۷۷ قتل‌های زنجیره‌ای رخ داد: داریوش و پروانه فروهر، محمد مختاری، محمدجعفر پوینده و دیگران توسط عوامل وزارت اطلاعات ترور شدند. خاتمی این قتل‌ها را افشا کرد و سعید امامی معاون وزارت اطلاعات متهم شد. این رویداد نشان داد اصلاحات با مقاومت خشن نهادهای امنیتی مواجه است.",
        en: "In autumn 1998, chain murders occurred: Dariush and Parvaneh Forouhar, Mohammad Mokhtari, Mohammad Jafar Pouyandeh and others were assassinated by Intelligence Ministry agents. Khatami exposed these murders and Saeed Emami, deputy intelligence minister, was accused. This showed reforms faced violent resistance from security institutions.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "استیضاح کلینتون", en: "Clinton Impeachment" },
        description: { fa: "مجلس نمایندگان کلینتون را به دلیل رسوایی لوینسکی استیضاح کرد", en: "House impeaches Clinton over Lewinsky scandal" },
        details: {
          fa: "بیل کلینتون در دسامبر ۱۹۹۸ به اتهام شهادت دروغ و ممانعت از اجرای عدالت در رابطه با رسوایی مونیکا لوینسکی توسط مجلس نمایندگان استیضاح شد. سنا او را تبرئه کرد و کلینتون تا پایان دوره در قدرت ماند.",
          en: "Bill Clinton was impeached by the House of Representatives in December 1998 on charges of perjury and obstruction of justice related to the Monica Lewinsky scandal. The Senate acquitted him and Clinton remained in power until the end of his term.",
        },
      },
      {
        country: "world",
        title: { fa: "آزمایش‌های اتمی هند و پاکستان", en: "India and Pakistan Nuclear Tests" },
        description: { fa: "هند و پاکستان آزمایش‌های اتمی انجام دادند", en: "India and Pakistan conduct nuclear tests" },
        details: {
          fa: "هند در مه ۱۹۹۸ پنج آزمایش اتمی انجام داد و پاکستان در پاسخ شش آزمایش اتمی انجام داد. دو رقیب منطقه‌ای هر دو رسماً قدرت اتمی شدند. جهان نگران جنگ اتمی در شبه‌قاره بود و تحریم‌هایی علیه هر دو کشور اعمال شد.",
          en: "India conducted five nuclear tests in May 1998 and Pakistan responded with six nuclear tests. Two regional rivals both officially became nuclear powers. The world worried about nuclear war in the subcontinent and sanctions were imposed on both countries.",
        },
      },
      {
        country: "russia",
        title: { fa: "بحران مالی روسیه و ورشکستگی", en: "Russian Financial Crisis & Default" },
        description: { fa: "روسیه بدهی‌های خود را نکول کرد - روبل سقوط کرد", en: "Russia defaults on its debts - Ruble collapses" },
        details: {
          fa: "روسیه در اوت ۱۹۹۸ بدهی‌های خود را نکول کرد و روبل ۷۵ درصد ارزش خود را از دست داد. میلیون‌ها روس پس‌اندازهای خود را از دست دادند. بحران مالی آسیایی ۱۹۹۷ زنجیره‌ای ایجاد کرد که روسیه را هم درگیر کرد. بی‌ثباتی اقتصادی و فساد الیگارش‌ها زمینه‌ساز ظهور پوتین شد.",
          en: "Russia defaulted on its debts in August 1998 and the ruble lost 75% of its value. Millions of Russians lost their savings. The 1997 Asian financial crisis created a chain reaction that engulfed Russia. Economic instability and oligarch corruption set the stage for Putin's rise.",
        },
      },
    ],
  },
  {
    year: 1999,
    shamsiYear: "۱۳۷۸",
    iran: {
      title: { fa: "اعتراضات دانشجویی تیر ۱۳۷۸", en: "Student Protests of July 1999" },
      description: { fa: "حمله به کوی دانشگاه تهران - بزرگترین اعتراضات از زمان انقلاب", en: "Attack on Tehran University dormitory - Largest protests since revolution" },
      details: {
        fa: "در ۱۸ تیر ۱۳۷۸ (۹ ژوئیه ۱۹۹۹) نیروهای انتظامی و لباس‌شخصی‌ها به خوابگاه دانشجویان دانشگاه تهران حمله کردند. چندین دانشجو کشته و صدها نفر زخمی و بازداشت شدند. اعتراضات به سراسر کشور گسترش یافت و ۶ روز ادامه داشت. این بزرگترین اعتراضات از زمان انقلاب بود و نشان‌دهنده شکاف عمیق بین نسل جوان و حکومت.",
        en: "On July 9, 1999, security forces and plainclothes agents attacked Tehran University student dormitories. Several students were killed and hundreds wounded and arrested. Protests spread nationwide and lasted 6 days. These were the largest protests since the revolution, showing the deep gap between the young generation and the government.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ کوزوو - بمباران ناتو", en: "Kosovo War - NATO Bombing" },
        description: { fa: "ناتو صربستان را بمباران کرد - مداخله بشردوستانه", en: "NATO bombs Serbia - Humanitarian intervention" },
        details: {
          fa: "ناتو از مارس تا ژوئن ۱۹۹۹ صربستان را به دلیل پاکسازی قومی مسلمانان کوزوو بمباران کرد. میلوشویچ عقب‌نشینی کرد و کوزوو تحت مدیریت سازمان ملل قرار گرفت. این اولین مداخله نظامی ناتو بدون مجوز شورای امنیت بود.",
          en: "NATO bombed Serbia from March to June 1999 over ethnic cleansing of Kosovo's Muslims. Milosevic withdrew and Kosovo came under UN administration. This was NATO's first military intervention without UN Security Council authorization.",
        },
      },
      {
        country: "russia",
        title: { fa: "پوتین نخست‌وزیر شد", en: "Putin Appointed Prime Minister" },
        description: { fa: "ولادیمیر پوتین نخست‌وزیر روسیه شد و جنگ دوم چچن را آغاز کرد", en: "Vladimir Putin becomes Russian PM and launches Second Chechen War" },
        details: {
          fa: "بوریس یلتسین ولادیمیر پوتین را در اوت ۱۹۹۹ به نخست‌وزیری منصوب کرد. پوتین با شروع جنگ دوم چچن محبوبیت زیادی کسب کرد. در ۳۱ دسامبر یلتسین استعفا داد و پوتین رئیس‌جمهور موقت شد. دوران ۲۵ ساله حکومت پوتین آغاز شد.",
          en: "Boris Yeltsin appointed Vladimir Putin as Prime Minister in August 1999. Putin gained great popularity by starting the Second Chechen War. On December 31, Yeltsin resigned and Putin became acting president. Putin's 25-year rule began.",
        },
      },
      {
        country: "germany",
        title: { fa: "آغاز یورو - واحد پول مشترک اروپا", en: "Euro Launched - Common European Currency" },
        description: { fa: "یورو به عنوان واحد پول ۱۱ کشور اروپایی آغاز به کار کرد", en: "Euro begins as currency for 11 European countries" },
        details: {
          fa: "یورو در ژانویه ۱۹۹۹ به عنوان واحد پول الکترونیکی ۱۱ کشور اروپایی آغاز به کار کرد (اسکناس و سکه در ۲۰۰۲). آلمان موتور اصلی این پروژه بود و مارک آلمان قربانی شد. یورو دومین ارز ذخیره جهان پس از دلار شد. پایتخت آلمان از بن به برلین منتقل گردید.",
          en: "The euro was launched in January 1999 as an electronic currency for 11 European nations (banknotes and coins followed in 2002). Germany was the main driver of this project, sacrificing the Deutsche Mark. The euro became the world's second reserve currency after the dollar. Germany also moved its capital from Bonn to Berlin.",
        },
      },
    ],
  },

  {
    year: 2000,
    shamsiYear: "۱۳۷۹",
    iran: {
      title: { fa: "پیروزی اصلاح‌طلبان در مجلس ششم", en: "Reformists Win Sixth Parliament" },
      description: { fa: "اصلاح‌طلبان اکثریت مجلس را گرفتند - مقاومت محافظه‌کاران", en: "Reformists win parliamentary majority - Conservative resistance" },
      details: {
        fa: "اصلاح‌طلبان در انتخابات مجلس ششم پیروزی بزرگی کسب کردند و اکثریت کرسی‌ها را به دست آوردند. اما شورای نگهبان و قوه قضاییه مانع تصویب قوانین اصلاحی شدند. روزنامه‌های اصلاح‌طلب یکی پس از دیگری توقیف شدند و فضای سیاسی بسته‌تر شد.",
        en: "Reformists won a major victory in the Sixth Parliament elections, gaining the majority of seats. But the Guardian Council and judiciary blocked reform legislation. Reformist newspapers were shut down one after another, and the political space narrowed further.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "انتخابات جنجالی بوش و گور", en: "Controversial Bush vs Gore Election" },
        description: { fa: "دیوان عالی بوش را رئیس‌جمهور کرد - بحران دموکراسی", en: "Supreme Court makes Bush president - Democracy crisis" },
        details: {
          fa: "انتخابات ریاست‌جمهوری ۲۰۰۰ به بحرانی بی‌سابقه تبدیل شد. نتیجه فلوریدا مورد مناقشه بود و بازشماری آرا هفته‌ها ادامه داشت. دیوان عالی آمریکا با رأی ۵ به ۴ بازشماری را متوقف کرد و جرج دبلیو بوش با وجود کسب آرای مردمی کمتر رئیس‌جمهور شد.",
          en: "The 2000 presidential election became an unprecedented crisis. Florida's result was disputed and the recount lasted weeks. The Supreme Court stopped the recount in a 5-4 decision, making George W. Bush president despite winning fewer popular votes than Al Gore.",
        },
      },
      {
        country: "russia",
        title: { fa: "پوتین رئیس‌جمهور روسیه شد", en: "Putin Becomes President of Russia" },
        description: { fa: "آغاز عصر پوتین - تمرکز قدرت در کرملین", en: "Putin era begins - Power centralized in Kremlin" },
        details: {
          fa: "ولادیمیر پوتین پس از استعفای یلتسین در شب سال نو ۱۹۹۹ سرپرست ریاست‌جمهوری شد و در مارس ۲۰۰۰ انتخابات را برد. او با وعده بازگرداندن ثبات و قدرت روسیه به محبوبیت رسید. جنگ دوم چچن و سرکوب الیگارش‌ها از اولین اقدامات او بود.",
          en: "Vladimir Putin became acting president after Yeltsin's New Year's Eve 1999 resignation and won the March 2000 election. He gained popularity by promising to restore stability and Russian power. The Second Chechen War and crackdown on oligarchs were among his first actions.",
        },
      },
      {
        country: "world",
        title: { fa: "ترکیدن حباب دات‌کام", en: "Dot-Com Bubble Bursts" },
        description: { fa: "سقوط بازارهای فناوری - تریلیون‌ها دلار از بین رفت", en: "Tech market crash - Trillions of dollars wiped out" },
        details: {
          fa: "حباب شرکت‌های اینترنتی که از اواسط دهه ۱۹۹۰ شکل گرفته بود ترکید و شاخص نزدک ۷۸ درصد سقوط کرد. تریلیون‌ها دلار ارزش سهام از بین رفت و هزاران شرکت فناوری ورشکست شدند. این بحران نشان داد که هیجان سرمایه‌گذاری بدون پایه اقتصادی واقعی پایدار نیست.",
          en: "The internet company bubble that had formed since the mid-1990s burst, and the NASDAQ index fell 78%. Trillions of dollars in stock value were wiped out and thousands of tech companies went bankrupt. The crisis showed that investment hype without real economic fundamentals is unsustainable.",
        },
      },
      {
        country: "uk",
        title: { fa: "توافقنامه صلح ایرلند شمالی", en: "Northern Ireland Power-Sharing" },
        description: { fa: "بحران تعلیق دولت خودمختار ایرلند شمالی", en: "Crisis and suspension of Northern Ireland Assembly" },
        details: {
          fa: "دولت خودمختار ایرلند شمالی به دلیل اختلاف بر سر خلع سلاح IRA معلق شد. تونی بلر تلاش‌های دیپلماتیک برای نجات توافقنامه جمعه نیک را ادامه داد.",
          en: "The Northern Ireland Assembly was suspended due to disputes over IRA decommissioning. Tony Blair continued diplomatic efforts to save the Good Friday Agreement.",
        },
      },
      {
        country: "germany",
        title: { fa: "رسوایی مالی حزب دموکرات مسیحی", en: "CDU Donations Scandal" },
        description: { fa: "کُل در رسوایی مالی و شرودر در قدرت", en: "Kohl embroiled in finance scandal, Schroeder in power" },
        details: {
          fa: "هلموت کُل به دلیل رسوایی کمک‌های مالی غیرقانونی به حزب CDU از ریاست افتخاری کناره‌گیری کرد. صدراعظم شرودر اصلاحات اقتصادی و مدرن‌سازی آلمان را پیش برد.",
          en: "Helmut Kohl resigned as honorary CDU chairman over illegal party donations scandal. Chancellor Schroeder pushed economic reforms and modernization of Germany.",
        },
      },
      {
        country: "france",
        title: { fa: "همه‌پرسی کاهش دوره ریاست‌جمهوری", en: "Presidential Term Reduced to 5 Years" },
        description: { fa: "فرانسه دوره ریاست‌جمهوری را از ۷ به ۵ سال کاهش داد", en: "France reduced presidential term from 7 to 5 years" },
        details: {
          fa: "در همه‌پرسی، مردم فرانسه به کاهش دوره ریاست‌جمهوری از ۷ به ۵ سال رأی دادند. این تغییر قانون اساسی بزرگ‌ترین اصلاح نهاد ریاست‌جمهوری پنجم بود.",
          en: "In a referendum, the French voted to reduce the presidential term from 7 to 5 years. This constitutional change was the most significant reform of the Fifth Republic presidency.",
        },
      },
      {
        country: "china",
        title: { fa: "پیوستن چین به سازمان تجارت جهانی", en: "China's WTO Accession Negotiations" },
        description: { fa: "مذاکرات نهایی پیوستن به WTO و رشد اقتصادی سریع", en: "Final WTO accession talks and rapid economic growth" },
        details: {
          fa: "چین مذاکرات نهایی برای عضویت در سازمان تجارت جهانی را پیش برد. اقتصاد چین با نرخ ۸ درصد رشد کرد و سرمایه‌گذاری خارجی به‌طور چشمگیری افزایش یافت.",
          en: "China advanced final negotiations for WTO membership. The Chinese economy grew at 8% and foreign investment increased dramatically.",
        },
      }],
  },
  {
    year: 2001,
    shamsiYear: "۱۳۸۰",
    yearInfo: {
      fa: "حملات ۱۱ سپتامبر جهان را تغییر داد. آمریکا به افغانستان حمله کرد. بوش ایران را در «محور شرارت» قرار داد.",
      en: "9/11 attacks change the world. US invades Afghanistan. Bush places Iran in the 'Axis of Evil.'",
    },
    iran: {
      title: { fa: "ایران در «محور شرارت» بوش", en: "Iran Named in Bush's 'Axis of Evil'" },
      description: { fa: "علی‌رغم کمک ایران در افغانستان، بوش ایران را تهدید خواند", en: "Despite Iran's help in Afghanistan, Bush labels Iran a threat" },
      details: {
        fa: "ایران پس از ۱۱ سپتامبر به آمریکا در جنگ افغانستان کمک کرد (اطلاعات درباره طالبان، هماهنگی با ائتلاف شمال). اما بوش در ژانویه ۲۰۰۲ ایران را همراه عراق و کره شمالی در «محور شرارت» قرار داد. این اقدام اصلاح‌طلبان ایران را تضعیف و تندروها را تقویت کرد.",
        en: "After 9/11, Iran helped the US in the Afghanistan war (intelligence on Taliban, coordination with Northern Alliance). But Bush placed Iran alongside Iraq and North Korea in the 'Axis of Evil' in January 2002. This weakened Iranian reformists and empowered hardliners.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "حملات ۱۱ سپتامبر", en: "September 11 Attacks" },
        description: { fa: "القاعده ۴ هواپیما را ربود - ۲,۹۷۷ کشته - برج‌های دوقلو فروریخت", en: "Al-Qaeda hijacks 4 planes - 2,977 killed - Twin Towers collapse" },
        details: {
          fa: "در ۱۱ سپتامبر ۲۰۰۱ تروریست‌های القاعده ۴ هواپیما را ربودند. دو هواپیما به برج‌های دوقلو مرکز تجارت جهانی نیویورک، یکی به پنتاگون و یکی در پنسیلوانیا سقوط کردند. ۲,۹۷۷ نفر کشته شدند. آمریکا «جنگ علیه ترور» را آغاز کرد و به افغانستان حمله کرد.",
          en: "On September 11, 2001, Al-Qaeda terrorists hijacked 4 planes. Two hit the World Trade Center Twin Towers in New York, one hit the Pentagon, and one crashed in Pennsylvania. 2,977 people were killed. The US launched the 'War on Terror' and invaded Afghanistan.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/WTC_smoking_on_9-11.jpeg&width=200",
      },
      {
        country: "uk",
        title: { fa: "بحران پا و دهان و انتخابات عمومی", en: "Foot-and-Mouth Crisis & General Election" },
        description: { fa: "بلر برای دومین بار پیروز شد - بحران کشاورزی", en: "Blair wins second term - Agricultural crisis" },
        details: {
          fa: "اپیدمی تب برفکی میلیون‌ها دام را در بریتانیا از بین برد و خسارات میلیاردی به بار آورد. بلر با وجود بحران، انتخابات عمومی را به تعویق انداخت و سپس با اکثریت بزرگ پیروز شد.",
          en: "The foot-and-mouth epidemic destroyed millions of livestock in Britain causing billions in damage. Blair delayed the general election due to the crisis but won with a large majority.",
        },
      },
      {
        country: "germany",
        title: { fa: "آلمان در ائتلاف ضد تروریسم", en: "Germany Joins Anti-Terror Coalition" },
        description: { fa: "شرودر همبستگی نامحدود با آمریکا اعلام کرد", en: "Schroeder declared unlimited solidarity with USA" },
        details: {
          fa: "پس از حملات ۱۱ سپتامبر، شرودر «همبستگی نامحدود» با آمریکا اعلام کرد. آلمان نیروهای نظامی به افغانستان فرستاد و قوانین ضد تروریسم جدیدی تصویب کرد.",
          en: "After the 9/11 attacks, Schroeder declared 'unlimited solidarity' with the USA. Germany deployed military forces to Afghanistan and passed new anti-terrorism laws.",
        },
      },
      {
        country: "france",
        title: { fa: "انفجار کارخانه AZF تولوز", en: "AZF Factory Explosion in Toulouse" },
        description: { fa: "فاجعه صنعتی با ۳۱ کشته و هزاران زخمی", en: "Industrial disaster killing 31 and injuring thousands" },
        details: {
          fa: "انفجار مهیب در کارخانه شیمیایی AZF در تولوز ۳۱ نفر را کشت و بیش از ۲۵۰۰ نفر را زخمی کرد. فرانسه همچنین در ائتلاف ضد تروریسم به افغانستان نیرو فرستاد.",
          en: "A massive explosion at the AZF chemical plant in Toulouse killed 31 and injured over 2,500. France also deployed troops to Afghanistan as part of the anti-terror coalition.",
        },
      },
      {
        country: "russia",
        title: { fa: "نزدیکی پوتین به غرب پس از ۱۱ سپتامبر", en: "Putin's Rapprochement with West After 9/11" },
        description: { fa: "روسیه از جنگ علیه تروریسم حمایت کرد", en: "Russia backed the War on Terror" },
        details: {
          fa: "پوتین اولین رهبری بود که پس از ۱۱ سپتامبر با بوش تماس گرفت. روسیه اجازه عبور نظامی آمریکا از آسیای مرکزی را داد و از عملیات افغانستان حمایت کرد.",
          en: "Putin was the first leader to call Bush after 9/11. Russia allowed US military transit through Central Asia and supported the Afghanistan operation.",
        },
      },
      {
        country: "china",
        title: { fa: "پذیرش چین در سازمان تجارت جهانی", en: "China Joins WTO" },
        description: { fa: "عضویت رسمی چین در WTO پس از ۱۵ سال مذاکره", en: "China officially joins WTO after 15 years of negotiation" },
        details: {
          fa: "چین رسماً عضو سازمان تجارت جهانی شد و این نقطه عطفی در ادغام اقتصادی آن با جهان بود. این عضویت راه را برای تبدیل چین به بزرگ‌ترین صادرکننده جهان هموار کرد.",
          en: "China officially joined the WTO, marking a turning point in its economic integration with the world. This membership paved the way for China to become the world's largest exporter.",
        },
      }],
  },
  {
    year: 2002,
    shamsiYear: "۱۳۸۱",
    iran: {
      title: { fa: "پیامدهای سخنرانی «محور شرارت» در ایران", en: "Aftermath of 'Axis of Evil' Speech in Iran" },
      description: { fa: "تقویت تندروها - تضعیف اصلاح‌طلبان - تشدید برنامه هسته‌ای", en: "Hardliners empowered - Reformists weakened - Nuclear program accelerates" },
      details: {
        fa: "سخنرانی «محور شرارت» بوش ضربه سنگینی به جنبش اصلاحات زد. تندروها استدلال کردند که آمریکا قابل اعتماد نیست و باید برنامه هسته‌ای تقویت شود. افشای تأسیسات مخفی نطنز و اراک توسط مجاهدین خلق بحران هسته‌ای را آغاز کرد.",
        en: "Bush's 'Axis of Evil' speech dealt a heavy blow to Iran's reform movement. Hardliners argued America couldn't be trusted and the nuclear program must be strengthened. The MEK's revelation of secret Natanz and Arak facilities launched the nuclear crisis.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "تأسیس وزارت امنیت داخلی", en: "Department of Homeland Security Created" },
        description: { fa: "بزرگترین بازسازی دولت آمریکا از ۱۹۴۷ - امنیتی شدن جامعه", en: "Largest US government reorganization since 1947 - Society securitized" },
        details: {
          fa: "پس از ۱۱ سپتامبر، وزارت امنیت داخلی با ادغام ۲۲ آژانس فدرال تأسیس شد. قانون پاتریوت به دولت اختیارات گسترده نظارتی داد. آزادی‌های مدنی محدود شد و فضای امنیتی بر جامعه آمریکا حاکم شد.",
          en: "After 9/11, the Department of Homeland Security was created by merging 22 federal agencies. The Patriot Act gave the government broad surveillance powers. Civil liberties were curtailed and a security mentality dominated American society.",
        },
      },
      {
        country: "world",
        title: { fa: "بمب‌گذاری بالی", en: "Bali Bombings" },
        description: { fa: "حمله تروریستی در اندونزی - ۲۰۲ کشته", en: "Terrorist attack in Indonesia - 202 killed" },
        details: {
          fa: "بمب‌گذاری در کلوب‌های شبانه بالی توسط گروه جماعه اسلامیه ۲۰۲ نفر را کشت که اکثراً گردشگران استرالیایی بودند. این حمله نشان داد که تروریسم اسلام‌گرا به جنوب شرقی آسیا نیز گسترش یافته است.",
          en: "Bombings at Bali nightclubs by Jemaah Islamiyah killed 202 people, mostly Australian tourists. This attack showed that Islamist terrorism had spread to Southeast Asia as well.",
        },
      },
      {
        country: "russia",
        title: { fa: "بحران گروگان‌گیری تئاتر مسکو", en: "Moscow Theater Hostage Crisis" },
        description: { fa: "جنگجویان چچنی ۸۵۰ تماشاگر را گروگان گرفتند", en: "Chechen fighters take 850 theatergoers hostage" },
        details: {
          fa: "جنگجویان چچنی تئاتر دوبروفکا در مسکو را اشغال و ۸۵۰ نفر را گروگان گرفتند. نیروهای ویژه روسیه با استفاده از گاز شیمیایی وارد ساختمان شدند. ۱۳۰ گروگان بر اثر گاز جان باختند. این بحران قدرت پوتین را تقویت و سرکوب چچن را تشدید کرد.",
          en: "Chechen fighters seized the Dubrovka Theater in Moscow and took 850 hostages. Russian special forces used chemical gas to storm the building. 130 hostages died from the gas. The crisis strengthened Putin's power and intensified the crackdown on Chechnya.",
        },
      },
      {
        country: "uk",
        title: { fa: "بلر و پرونده عراق", en: "Blair and the Case for Iraq War" },
        description: { fa: "انتشار دوسیه سلاح‌های کشتار جمعی عراق", en: "Publication of Iraq WMD dossier" },
        details: {
          fa: "دولت بلر دوسیه‌ای درباره سلاح‌های کشتار جمعی عراق منتشر کرد که بعدها «دوسیه آراسته‌شده» نام گرفت. بحث درباره مداخله نظامی در عراق شدت گرفت.",
          en: "Blair's government published a dossier on Iraq's WMDs, later dubbed the 'dodgy dossier.' Debate over military intervention in Iraq intensified.",
        },
      },
      {
        country: "germany",
        title: { fa: "پیروزی مجدد شرودر و مخالفت با جنگ عراق", en: "Schroeder Re-elected, Opposes Iraq War" },
        description: { fa: "شرودر با وعده مخالفت با جنگ انتخابات را برد", en: "Schroeder won election pledging to oppose Iraq war" },
        details: {
          fa: "گرهارد شرودر با وعده مخالفت قاطع با جنگ عراق در انتخابات فدرال پیروز شد. این موضع باعث بحران در روابط آلمان و آمریکا شد.",
          en: "Gerhard Schroeder won the federal election by firmly opposing the Iraq war. This stance caused a crisis in German-American relations.",
        },
      },
      {
        country: "france",
        title: { fa: "شوک انتخاباتی: لوپن در دور دوم", en: "Election Shock: Le Pen in Runoff" },
        description: { fa: "ژان-ماری لوپن راست‌گرای افراطی به دور دوم رسید", en: "Far-right Jean-Marie Le Pen reached runoff" },
        details: {
          fa: "در شوک بزرگ سیاسی، ژان-ماری لوپن رهبر راست افراطی به دور دوم انتخابات ریاست‌جمهوری رسید. شیراک با ۸۲ درصد آرا در دور دوم پیروز شد.",
          en: "In a major political shock, far-right leader Jean-Marie Le Pen reached the presidential runoff. Chirac won the second round with 82% of the vote.",
        },
      },
      {
        country: "china",
        title: { fa: "انتقال قدرت به هو جین‌تائو", en: "Power Transition to Hu Jintao" },
        description: { fa: "هو جین‌تائو دبیرکل حزب کمونیست شد", en: "Hu Jintao became CCP General Secretary" },
        details: {
          fa: "هو جین‌تائو در شانزدهمین کنگره حزب کمونیست به عنوان دبیرکل انتخاب شد و جانشین جیانگ زمین شد. این انتقال منظم قدرت نشانه بلوغ نظام سیاسی چین بود.",
          en: "Hu Jintao was elected CCP General Secretary at the 16th Party Congress, succeeding Jiang Zemin. This orderly power transition signaled the maturation of China's political system.",
        },
      }],
  },
  {
    year: 2003,
    shamsiYear: "۱۳۸۲",
    iran: {
      title: { fa: "بحران هسته‌ای ایران", en: "Iran Nuclear Crisis Begins" },
      description: { fa: "افشای تأسیسات هسته‌ای نطنز و اراک - فشار بین‌المللی", en: "Natanz and Arak nuclear facilities revealed - International pressure" },
      details: {
        fa: "گروه مجاهدین خلق تأسیسات غنی‌سازی نطنز و آب سنگین اراک را افشا کرد. آژانس بین‌المللی انرژی اتمی بازرسی‌ها را تشدید کرد. ایران ادعای صلح‌آمیز بودن برنامه را تکرار کرد. دولت خاتمی موقتاً غنی‌سازی را متوقف کرد اما فشار آمریکا و اروپا ادامه یافت.",
        en: "The MEK revealed the Natanz enrichment and Arak heavy water facilities. The IAEA intensified inspections. Iran repeated claims of a peaceful program. The Khatami government temporarily suspended enrichment but US and European pressure continued.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "حمله آمریکا به عراق - سقوط صدام", en: "US Invasion of Iraq - Fall of Saddam" },
        description: { fa: "بوش بر اساس ادعای سلاح کشتار جمعی دروغین حمله کرد", en: "Bush invades based on false WMD claims" },
        details: {
          fa: "آمریکا و بریتانیا در ۲۰ مارس ۲۰۰۳ به عراق حمله کردند. بهانه: سلاح‌های کشتار جمعی که هرگز پیدا نشدند. صدام سرنگون و بعداً اعدام شد. اما اشغال عراق به جنگ داخلی، ظهور داعش و بی‌ثباتی منطقه‌ای منجر شد. بیش از ۱۰۰,۰۰۰ غیرنظامی عراقی کشته شدند.",
          en: "The US and Britain invaded Iraq on March 20, 2003. Pretext: WMDs that were never found. Saddam was toppled and later executed. But the occupation led to civil war, the rise of ISIS, and regional instability. Over 100,000 Iraqi civilians were killed.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Baghdad_etaoux.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "بریتانیا وارد جنگ عراق شد", en: "UK Enters Iraq War" },
        description: { fa: "بلر در کنار بوش عراق را حمله کرد", en: "Blair joined Bush in invading Iraq" },
        details: {
          fa: "بریتانیا ۴۵ هزار سرباز به عراق فرستاد و بصره را تصرف کرد. مخالفت گسترده مردمی با جنگ بود و بزرگ‌ترین تظاهرات تاریخ بریتانیا در لندن برگزار شد.",
          en: "Britain sent 45,000 troops to Iraq and captured Basra. There was massive public opposition and the largest protest in British history took place in London.",
        },
      },
      {
        country: "germany",
        title: { fa: "مخالفت آلمان با جنگ عراق", en: "Germany Opposes Iraq War" },
        description: { fa: "شرودر و شیراک جبهه ضد جنگ تشکیل دادند", en: "Schroeder and Chirac formed anti-war front" },
        details: {
          fa: "آلمان و فرانسه در شورای امنیت علیه جنگ عراق ایستادند. شرودر گفت آلمان تحت هیچ شرایطی در جنگ شرکت نمی‌کند. روابط با واشنگتن به پایین‌ترین سطح رسید.",
          en: "Germany and France stood against the Iraq war in the Security Council. Schroeder said Germany would not participate under any circumstances. Relations with Washington hit their lowest point.",
        },
      },
      {
        country: "france",
        title: { fa: "مخالفت شیراک با جنگ عراق", en: "Chirac Opposes Iraq War" },
        description: { fa: "فرانسه حق وتو را علیه قطعنامه جنگ تهدید کرد", en: "France threatened veto against war resolution" },
        details: {
          fa: "شیراک اعلام کرد فرانسه هر قطعنامه‌ای برای مجوز جنگ را وتو خواهد کرد. سخنرانی دومینیک دوویلپن در شورای امنیت تشویق حضار را برانگیخت.",
          en: "Chirac declared France would veto any resolution authorizing war. Dominique de Villepin's speech at the Security Council drew applause from the audience.",
        },
      },
      {
        country: "russia",
        title: { fa: "مخالفت روسیه با جنگ عراق", en: "Russia Opposes Iraq War" },
        description: { fa: "پوتین همراه با فرانسه و آلمان علیه جنگ ایستاد", en: "Putin stood with France and Germany against war" },
        details: {
          fa: "روسیه در کنار فرانسه و آلمان علیه حمله به عراق ایستاد. پوتین این جنگ را نقض حقوق بین‌الملل خواند. همزمان جنگ دوم چچن ادامه داشت.",
          en: "Russia stood alongside France and Germany against the Iraq invasion. Putin called the war a violation of international law. Meanwhile, the Second Chechen War continued.",
        },
      },
      {
        country: "china",
        title: { fa: "شیوع سارس در چین", en: "SARS Outbreak in China" },
        description: { fa: "اپیدمی سارس بحران بهداشتی بزرگی ایجاد کرد", en: "SARS epidemic created major health crisis" },
        details: {
          fa: "شیوع ویروس سارس از گوانگدونگ آغاز شد و به بحران جهانی تبدیل شد. دولت چین ابتدا اطلاعات را پنهان کرد اما سپس قرنطینه گسترده اعمال کرد.",
          en: "The SARS virus outbreak started in Guangdong and became a global crisis. The Chinese government initially concealed information but then imposed extensive quarantines.",
        },
      }],
  },
  {
    year: 2004,
    shamsiYear: "۱۳۸۳",
    iran: {
      title: { fa: "محافظه‌کاران مجلس هفتم را تصرف کردند", en: "Conservatives Sweep Seventh Parliament" },
      description: { fa: "رد صلاحیت گسترده اصلاح‌طلبان - پایان مجلس اصلاح‌طلب", en: "Mass disqualification of reformists - End of reformist parliament" },
      details: {
        fa: "شورای نگهبان صلاحیت بیش از ۲۰۰۰ نامزد اصلاح‌طلب از جمله ۸۰ نماینده فعلی مجلس را رد کرد. محافظه‌کاران اکثریت مجلس هفتم را به دست آوردند. این اقدام عملاً جنبش اصلاحات خاتمی را مهار کرد و زمینه را برای ریاست‌جمهوری احمدی‌نژاد فراهم ساخت.",
        en: "The Guardian Council disqualified over 2,000 reformist candidates including 80 sitting MPs. Conservatives won the majority in the Seventh Parliament. This effectively contained Khatami's reform movement and paved the way for Ahmadinejad's presidency.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "بوش دوباره انتخاب شد - عراق در بحران", en: "Bush Re-elected - Iraq in Crisis" },
        description: { fa: "جنگ عراق به باتلاق تبدیل شد - ابوغریب افشا شد", en: "Iraq war becomes quagmire - Abu Ghraib revealed" },
        details: {
          fa: "بوش جان کری را شکست داد و دوباره رئیس‌جمهور شد. اما تصاویر شکنجه زندانیان عراقی در زندان ابوغریب جهان را تکان داد و اعتبار آمریکا را خدشه‌دار کرد. شورشیان عراقی قدرتمندتر شدند و جنگ داخلی فرقه‌ای آغاز شد.",
          en: "Bush defeated John Kerry and won re-election. But images of torture of Iraqi prisoners at Abu Ghraib prison shocked the world and damaged American credibility. Iraqi insurgents grew stronger and sectarian civil war began.",
        },
      },
      {
        country: "russia",
        title: { fa: "فاجعه گروگان‌گیری مدرسه بسلان", en: "Beslan School Siege Tragedy" },
        description: { fa: "جنگجویان چچنی ۱۱۰۰ نفر را در مدرسه گروگان گرفتند - ۳۳۴ کشته", en: "Chechen fighters take 1,100 hostage in school - 334 killed" },
        details: {
          fa: "جنگجویان چچنی مدرسه‌ای در بسلان اوستیای شمالی را اشغال و ۱۱۰۰ نفر شامل صدها کودک را گروگان گرفتند. عملیات نجات فاجعه‌بار بود و ۳۳۴ نفر از جمله ۱۸۶ کودک کشته شدند. پوتین از این فاجعه برای تمرکز بیشتر قدرت استفاده کرد.",
          en: "Chechen fighters seized a school in Beslan, North Ossetia, taking 1,100 hostages including hundreds of children. The rescue operation was disastrous and 334 people including 186 children were killed. Putin used the tragedy to further centralize power.",
        },
      },
      {
        country: "world",
        title: { fa: "سونامی اقیانوس هند", en: "Indian Ocean Tsunami" },
        description: { fa: "زلزله ۹.۱ ریشتری و سونامی ۲۳۰,۰۰۰ کشته", en: "9.1-magnitude earthquake and tsunami kills 230,000" },
        details: {
          fa: "زلزله ۹.۱ ریشتری در سواحل سوماترا سونامی ویرانگری ایجاد کرد که ۱۴ کشور را درنوردید. بیش از ۲۳۰,۰۰۰ نفر کشته و میلیون‌ها نفر بی‌خانمان شدند. این بزرگترین کمک‌رسانی بین‌المللی تاریخ را به دنبال داشت.",
          en: "A 9.1-magnitude earthquake off Sumatra's coast generated a devastating tsunami that struck 14 countries. Over 230,000 were killed and millions displaced. It triggered the largest international relief effort in history.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحران بلر و گزارش باتلر", en: "Blair Crisis and Butler Report" },
        description: { fa: "گزارش باتلر اطلاعات جنگ عراق را زیر سؤال برد", en: "Butler Report questioned Iraq war intelligence" },
        details: {
          fa: "گزارش باتلر نشان داد اطلاعات درباره سلاح‌های کشتار جمعی عراق نادرست بوده است. اعتبار بلر آسیب جدی دید اما او از استعفا امتناع کرد.",
          en: "The Butler Report showed intelligence about Iraq's WMDs was flawed. Blair's credibility was seriously damaged but he refused to resign.",
        },
      },
      {
        country: "germany",
        title: { fa: "اصلاحات هارتس ۴ و اعتراضات", en: "Hartz IV Reforms and Protests" },
        description: { fa: "اصلاحات رفاهی شرودر اعتراضات گسترده برانگیخت", en: "Schroeder's welfare reforms sparked mass protests" },
        details: {
          fa: "اصلاحات هارتس ۴ مزایای بیکاری را کاهش داد و اعتراضات گسترده‌ای در شرق آلمان برپا شد. این اصلاحات اگرچه دردناک بود اما اقتصاد آلمان را رقابتی‌تر کرد.",
          en: "Hartz IV reforms cut unemployment benefits and triggered mass protests in eastern Germany. Though painful, these reforms made the German economy more competitive.",
        },
      },
      {
        country: "france",
        title: { fa: "قانون منع حجاب در مدارس", en: "Headscarf Ban in Schools" },
        description: { fa: "فرانسه نمادهای دینی آشکار را در مدارس دولتی ممنوع کرد", en: "France banned conspicuous religious symbols in public schools" },
        details: {
          fa: "قانون منع نمادهای دینی آشکار در مدارس دولتی تصویب شد که عمدتاً حجاب مسلمانان را هدف گرفت. این قانون بحث گسترده‌ای درباره لائیسیته و آزادی مذهبی ایجاد کرد.",
          en: "A law banning conspicuous religious symbols in public schools was passed, primarily targeting Muslim headscarves. This sparked widespread debate about laicite and religious freedom.",
        },
      },
      {
        country: "china",
        title: { fa: "رشد اقتصادی ۱۰ درصدی چین", en: "China's 10% Economic Growth" },
        description: { fa: "چین به چهارمین اقتصاد بزرگ جهان تبدیل شد", en: "China became world's fourth-largest economy" },
        details: {
          fa: "اقتصاد چین با نرخ بیش از ۱۰ درصد رشد کرد. سرمایه‌گذاری در زیرساخت‌ها و صادرات به شدت افزایش یافت و چین به کارخانه جهان تبدیل شد.",
          en: "China's economy grew at over 10%. Investment in infrastructure and exports surged, and China became the factory of the world.",
        },
      }],
  },
  {
    year: 2005,
    shamsiYear: "۱۳۸۴",
    iran: {
      title: { fa: "احمدی‌نژاد رئیس‌جمهور شد", en: "Ahmadinejad Elected President" },
      description: { fa: "پایان اصلاحات - تشدید بحران هسته‌ای - شعارهای تند ضد اسرائیل", en: "End of reform era - Nuclear crisis escalates - Fierce anti-Israel rhetoric" },
      details: {
        fa: "احمدی‌نژاد شهردار تهران با شعار عدالت و مبارزه با فساد رئیس‌جمهور شد. غنی‌سازی اورانیوم را از سر گرفت. سخنرانی «اسرائیل باید از صفحه روزگار محو شود» واکنش جهانی برانگیخت. طرح مسکن مهر و یارانه‌ها محبوبیت موقتی آورد اما تورم و فساد تشدید شد.",
        en: "Ahmadinejad, Tehran's mayor, won presidency on justice and anti-corruption platform. Resumed uranium enrichment. His speech about 'wiping Israel off the map' provoked global reaction. Mehr housing project and subsidies brought temporary popularity but inflation and corruption worsened.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mahmoud_Ahmadinejad_2009.jpg&width=200",
    },
    world: [
      {
        country: "germany",
        title: { fa: "آنگلا مرکل اولین صدراعظم زن آلمان", en: "Angela Merkel First Female German Chancellor" },
        description: { fa: "شروع ۱۶ سال رهبری مرکل", en: "Start of Merkel's 16-year leadership" },
        details: {
          fa: "آنگلا مرکل به عنوان اولین زن و اولین شخص از آلمان شرقی سابق صدراعظم شد. او ۱۶ سال آلمان را رهبری کرد و به قدرتمندترین زن جهان تبدیل شد. مرکل بحران‌های متعددی از جمله بحران مالی ۲۰۰۸ و بحران مهاجرت ۲۰۱۵ را مدیریت کرد.",
          en: "Angela Merkel became the first woman and first person from former East Germany to serve as Chancellor. She led Germany for 16 years and became the world's most powerful woman. Merkel managed multiple crises including the 2008 financial crisis and the 2015 migration crisis.",
        },
      },
      {
        country: "china",
        title: { fa: "چین دومین اقتصاد بزرگ جهان می‌شود", en: "China Rises to 2nd Largest Economy" },
        description: { fa: "رشد اقتصادی ۱۰٪ سالانه - کارخانه جهان", en: "10% annual growth - Factory of the world" },
        details: {
          fa: "چین با رشد اقتصادی ۱۰ درصدی سالانه به «کارخانه جهان» تبدیل شد. صدها میلیون نفر از فقر خارج شدند و چین به دومین اقتصاد بزرگ جهان تبدیل شد. اما نابرابری، آلودگی محیط زیست و سرکوب سیاسی همچنان چالش‌های اصلی باقی ماندند.",
          en: "China became the 'factory of the world' with 10% annual economic growth. Hundreds of millions were lifted out of poverty and China became the world's second-largest economy. But inequality, environmental pollution, and political repression remained major challenges.",
        },
      },
      {
        country: "usa",
        title: { fa: "طوفان کاترینا و بحران مدیریت", en: "Hurricane Katrina and Management Crisis" },
        description: { fa: "طوفان کاترینا نیواورلئان را ویران کرد", en: "Hurricane Katrina devastated New Orleans" },
        details: {
          fa: "طوفان کاترینا بیش از ۱۸۰۰ نفر را کشت و نیواورلئان را زیر آب برد. مدیریت ضعیف بحران توسط دولت بوش انتقادات شدیدی برانگیخت.",
          en: "Hurricane Katrina killed over 1,800 people and flooded New Orleans. The Bush administration's poor crisis management drew severe criticism.",
        },
      },
      {
        country: "uk",
        title: { fa: "بمب‌گذاری‌های لندن ۷ ژوئیه", en: "London 7/7 Bombings" },
        description: { fa: "حملات تروریستی در متروی لندن ۵۲ نفر را کشت", en: "Terror attacks on London Underground killed 52" },
        details: {
          fa: "چهار بمب‌گذار انتحاری در متروی لندن و اتوبوس ۵۲ نفر را کشتند و بیش از ۷۰۰ نفر زخمی شدند. این بدترین حمله تروریستی در خاک بریتانیا بود.",
          en: "Four suicide bombers on the London Underground and a bus killed 52 people and injured over 700. This was the worst terrorist attack on British soil.",
        },
      },
      {
        country: "france",
        title: { fa: "شورش‌های حومه‌های فرانسه", en: "French Suburban Riots" },
        description: { fa: "سه هفته شورش در حومه‌های مهاجرنشین", en: "Three weeks of riots in immigrant suburbs" },
        details: {
          fa: "مرگ دو نوجوان در حومه پاریس سه هفته شورش در سراسر فرانسه برانگیخت. حالت فوق‌العاده اعلام شد و بیش از ۹۰۰۰ خودرو آتش زده شد.",
          en: "The death of two teenagers in a Paris suburb triggered three weeks of riots across France. A state of emergency was declared and over 9,000 cars were burned.",
        },
      },
      {
        country: "russia",
        title: { fa: "سرکوب سیاسی و بحران یوکوس", en: "Political Crackdown and Yukos Crisis" },
        description: { fa: "خودورکوفسکی زندانی شد و یوکوس تجزیه شد", en: "Khodorkovsky imprisoned and Yukos dismantled" },
        details: {
          fa: "میخائیل خودورکوفسکی مالک یوکوس به ۹ سال زندان محکوم شد. دارایی‌های یوکوس به شرکت دولتی روس‌نفت منتقل شد و پوتین کنترل بر انرژی را تثبیت کرد.",
          en: "Mikhail Khodorkovsky, owner of Yukos, was sentenced to 9 years in prison. Yukos assets were transferred to state-owned Rosneft, and Putin consolidated control over energy.",
        },
      }],
  },
  {
    year: 2006,
    shamsiYear: "۱۳۸۵",
    iran: {
      title: { fa: "احمدی‌نژاد برنامه هسته‌ای را تسریع کرد", en: "Ahmadinejad Accelerates Nuclear Program" },
      description: { fa: "غنی‌سازی اورانیوم از سر گرفته شد - قطعنامه‌های شورای امنیت", en: "Uranium enrichment resumed - UN Security Council resolutions" },
      details: {
        fa: "ایران در ژانویه ۲۰۰۶ مُهر آژانس بین‌المللی انرژی اتمی را از تأسیسات نطنز برداشت و غنی‌سازی اورانیوم را از سر گرفت. شورای امنیت اولین قطعنامه تحریمی را علیه ایران تصویب کرد. احمدی‌نژاد اعلام کرد «هسته‌ای حق مسلم ماست» و از سازش امتناع کرد.",
        en: "Iran broke IAEA seals at Natanz in January 2006 and resumed uranium enrichment. The Security Council passed its first sanctions resolution against Iran. Ahmadinejad declared 'nuclear energy is our inalienable right' and refused to compromise.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ لبنان - اسرائیل و حزب‌الله", en: "Lebanon War - Israel vs Hezbollah" },
        description: { fa: "جنگ ۳۴ روزه - ۱۲۰۰ کشته لبنانی - مقاومت حزب‌الله", en: "34-day war - 1,200 Lebanese killed - Hezbollah resistance" },
        details: {
          fa: "حزب‌الله دو سرباز اسرائیلی را ربود و اسرائیل حمله گسترده‌ای به لبنان آغاز کرد. جنگ ۳۴ روزه بیش از ۱۲۰۰ لبنانی و ۱۶۰ اسرائیلی را کشت. حزب‌الله با موشک‌باران شمال اسرائیل مقاومت کرد و ایران از متحد اصلی خود حمایت کرد.",
          en: "Hezbollah kidnapped two Israeli soldiers and Israel launched a massive attack on Lebanon. The 34-day war killed over 1,200 Lebanese and 160 Israelis. Hezbollah resisted by rocketing northern Israel, and Iran supported its key ally.",
        },
      },
      {
        country: "usa",
        title: { fa: "دموکرات‌ها کنگره را بردند", en: "Democrats Win Congress" },
        description: { fa: "شکست جمهوری‌خواهان در انتخابات میان‌دوره‌ای - مخالفت با جنگ عراق", en: "Republicans lose midterms - Opposition to Iraq war" },
        details: {
          fa: "دموکرات‌ها هم مجلس نمایندگان و هم سنا را از جمهوری‌خواهان گرفتند. نانسی پلوسی اولین زن رئیس مجلس نمایندگان شد. نارضایتی عمومی از جنگ عراق و رسوایی‌های فساد دلیل اصلی شکست حزب بوش بود.",
          en: "Democrats took both the House and Senate from Republicans. Nancy Pelosi became the first female Speaker of the House. Public dissatisfaction with the Iraq war and corruption scandals were the main reasons for Bush's party defeat.",
        },
      },
      {
        country: "uk",
        title: { fa: "فشار بر بلر برای استعفا", en: "Pressure on Blair to Resign" },
        description: { fa: "شورش درون حزبی علیه بلر", en: "Internal party revolt against Blair" },
        details: {
          fa: "اعضای ارشد حزب کارگر از بلر خواستند جدول زمانی استعفا اعلام کند. بلر اعلام کرد ظرف یک سال کناره‌گیری خواهد کرد.",
          en: "Senior Labour members demanded Blair announce a resignation timeline. Blair announced he would step down within a year.",
        },
      },
      {
        country: "germany",
        title: { fa: "مرکل و جام جهانی فوتبال", en: "Merkel and Football World Cup" },
        description: { fa: "آلمان میزبان جام جهانی شد - مرکل در صحنه جهانی", en: "Germany hosted World Cup - Merkel on world stage" },
        details: {
          fa: "آلمان میزبان موفق جام جهانی فوتبال شد و تصویر جدیدی از خود به جهان ارائه داد. مرکل در اولین سال صدراعظمی خود روابط با آمریکا را بهبود بخشید.",
          en: "Germany successfully hosted the FIFA World Cup, projecting a new image to the world. Merkel in her first year as chancellor improved relations with the US.",
        },
      },
      {
        country: "france",
        title: { fa: "قانون کار جوانان و اعتراضات", en: "Youth Employment Law and Protests" },
        description: { fa: "قانون CPE اعتراضات میلیونی برانگیخت", en: "CPE law triggered million-strong protests" },
        details: {
          fa: "دولت دوویلپن قانون قرارداد اولین استخدام (CPE) را تصویب کرد که اعتراضات گسترده دانشجویی و کارگری برانگیخت. شیراک مجبور به لغو قانون شد.",
          en: "The de Villepin government passed the First Employment Contract (CPE) law, triggering massive student and worker protests. Chirac was forced to withdraw the law.",
        },
      },
      {
        country: "russia",
        title: { fa: "ترور آنا پولیتکوفسکایا", en: "Murder of Anna Politkovskaya" },
        description: { fa: "روزنامه‌نگار منتقد کرملین ترور شد", en: "Journalist critical of Kremlin assassinated" },
        details: {
          fa: "آنا پولیتکوفسکایا روزنامه‌نگار منتقد جنگ چچن در مسکو به ضرب گلوله کشته شد. روسیه همچنین صادرات گاز به اوکراین را قطع کرد و از انرژی به عنوان سلاح استفاده کرد.",
          en: "Anna Politkovskaya, journalist critical of the Chechen war, was shot dead in Moscow. Russia also cut gas exports to Ukraine, using energy as a weapon.",
        },
      },
      {
        country: "china",
        title: { fa: "سد سه دره تکمیل شد", en: "Three Gorges Dam Completed" },
        description: { fa: "بزرگ‌ترین سد جهان به بهره‌برداری رسید", en: "World's largest dam became operational" },
        details: {
          fa: "سد سه دره بزرگ‌ترین پروژه برق‌آبی جهان تکمیل شد. این سد ۱.۴ میلیون نفر را جابجا کرد اما ظرفیت عظیم تولید برق ایجاد کرد.",
          en: "The Three Gorges Dam, the world's largest hydroelectric project, was completed. It displaced 1.4 million people but created enormous power generation capacity.",
        },
      }],
  },
  {
    year: 2007,
    shamsiYear: "۱۳۸۶",
    iran: {
      title: { fa: "تشدید تحریم‌های سازمان ملل علیه ایران", en: "UN Sanctions Against Iran Intensified" },
      description: { fa: "قطعنامه‌های جدید شورای امنیت - فشار اقتصادی و دیپلماتیک", en: "New Security Council resolutions - Economic and diplomatic pressure" },
      details: {
        fa: "شورای امنیت قطعنامه ۱۷۴۷ را با تحریم‌های تشدید شده علیه ایران تصویب کرد. صادرات سلاح از ایران ممنوع و دارایی‌های افراد مرتبط با برنامه هسته‌ای مسدود شد. احمدی‌نژاد در مجمع عمومی سازمان ملل تحریم‌ها را «کاغذ پاره» خواند.",
        en: "The Security Council passed Resolution 1747 with intensified sanctions against Iran. Arms exports from Iran were banned and assets of individuals linked to the nuclear program were frozen. Ahmadinejad called the sanctions 'worthless paper' at the UN General Assembly.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "افزایش نیرو در عراق (سرج)", en: "Troop Surge in Iraq" },
        description: { fa: "بوش ۳۰,۰۰۰ سرباز اضافی به عراق فرستاد", en: "Bush sends 30,000 additional troops to Iraq" },
        details: {
          fa: "بوش استراتژی «سرج» را اعلام کرد و ۳۰ هزار سرباز اضافی به عراق فرستاد. ژنرال پترائوس فرماندهی را بر عهده گرفت و با ترکیبی از عملیات نظامی و جلب همکاری قبایل سنی (بیداری انبار)، خشونت را کاهش داد.",
          en: "Bush announced the 'surge' strategy and sent 30,000 additional troops to Iraq. General Petraeus took command and reduced violence through a combination of military operations and enlisting Sunni tribal cooperation (Anbar Awakening).",
        },
      },
      {
        country: "uk",
        title: { fa: "بلر رفت، براون نخست‌وزیر شد", en: "Blair Out, Brown Becomes PM" },
        description: { fa: "پایان ۱۰ سال نخست‌وزیری بلر - میراث جنگ عراق", en: "End of Blair's 10-year premiership - Iraq war legacy" },
        details: {
          fa: "تونی بلر پس از ۱۰ سال از نخست‌وزیری کناره‌گیری کرد و گوردون براون جانشین او شد. میراث بلر به شدت تحت تأثیر جنگ عراق و اتهام دروغ‌گویی درباره سلاح‌های کشتار جمعی بود. براون با بحران مالی ۲۰۰۸ مواجه شد.",
          en: "Tony Blair resigned after 10 years and Gordon Brown succeeded him. Blair's legacy was heavily overshadowed by the Iraq war and accusations of lying about WMDs. Brown would soon face the 2008 financial crisis.",
        },
      },
      {
        country: "france",
        title: { fa: "سارکوزی رئیس‌جمهور فرانسه شد", en: "Sarkozy Elected French President" },
        description: { fa: "راست‌گرایی جدید در فرانسه - وعده اصلاحات اقتصادی", en: "New right-wing in France - Promises of economic reform" },
        details: {
          fa: "نیکلا سارکوزی از حزب UMP با وعده اصلاحات اقتصادی و سخت‌گیری در مهاجرت رئیس‌جمهور شد. او سبک رهبری پرانرژی و جنجال‌برانگیزی داشت و نقش فعالی در سیاست خارجی از جمله مداخله در لیبی ایفا کرد.",
          en: "Nicolas Sarkozy of the UMP party won the presidency with promises of economic reform and tough immigration policies. He had an energetic and controversial leadership style and played an active role in foreign policy including intervention in Libya.",
        },
      },
      {
        country: "germany",
        title: { fa: "آلمان ریاست اتحادیه اروپا و G8", en: "Germany Heads EU and G8" },
        description: { fa: "مرکل ریاست اتحادیه اروپا و گروه ۸ را بر عهده گرفت", en: "Merkel took over EU and G8 presidencies" },
        details: {
          fa: "مرکل ریاست دوره‌ای اتحادیه اروپا و G8 را بر عهده گرفت. او اعلامیه برلین درباره آینده اتحادیه اروپا را هدایت کرد و مذاکرات پیمان لیسبون را پیش برد.",
          en: "Merkel held the rotating EU and G8 presidencies. She led the Berlin Declaration on the EU's future and advanced Lisbon Treaty negotiations.",
        },
      },
      {
        country: "russia",
        title: { fa: "سخنرانی تهاجمی پوتین در مونیخ", en: "Putin's Aggressive Munich Speech" },
        description: { fa: "پوتین نظم تک‌قطبی آمریکا را به چالش کشید", en: "Putin challenged US unipolar order" },
        details: {
          fa: "پوتین در کنفرانس امنیتی مونیخ نظم تک‌قطبی جهان به رهبری آمریکا را به شدت انتقاد کرد. این سخنرانی نقطه عطفی در سیاست خارجی تهاجمی روسیه بود.",
          en: "Putin sharply criticized the US-led unipolar world order at the Munich Security Conference. This speech marked a turning point in Russia's aggressive foreign policy.",
        },
      },
      {
        country: "china",
        title: { fa: "رسوایی محصولات چینی", en: "Chinese Product Safety Scandals" },
        description: { fa: "بحران ایمنی محصولات صادراتی چین", en: "Crisis over safety of Chinese export products" },
        details: {
          fa: "رسوایی‌های متعدد درباره ایمنی محصولات چینی از شیر خشک آلوده تا اسباب‌بازی‌های سمی باعث نگرانی جهانی شد. اقتصاد چین با رشد ۱۴ درصدی داغ‌ترین دوره خود را تجربه کرد.",
          en: "Multiple scandals over Chinese product safety, from contaminated milk powder to toxic toys, caused global concern. China's economy experienced its hottest period with 14% growth.",
        },
      }],
  },
  {
    year: 2008,
    shamsiYear: "۱۳۸۷",
    iran: {
      title: { fa: "آزمایش‌های موشکی ایران", en: "Iran's Missile Tests" },
      description: { fa: "آزمایش موشک شهاب-۳ - نمایش قدرت نظامی", en: "Shahab-3 missile test - Military power display" },
      details: {
        fa: "ایران موشک‌های شهاب-۳ و سجیل را با موفقیت آزمایش کرد و برد موشکی خود را به ۲۰۰۰ کیلومتر رساند. این آزمایش‌ها اسرائیل و کشورهای خلیج فارس را نگران کرد. تحریم‌های جدید اتحادیه اروپا و آمریکا اعمال شد اما ایران به توسعه برنامه موشکی ادامه داد.",
        en: "Iran successfully tested Shahab-3 and Sejjil missiles, extending its missile range to 2,000 km. These tests alarmed Israel and Persian Gulf states. New EU and US sanctions were imposed but Iran continued developing its missile program.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "اوباما انتخاب شد - بحران مالی", en: "Obama Elected - Financial Crisis" },
        description: { fa: "اولین رئیس‌جمهور آفریقایی-آمریکایی - فروپاشی وال استریت", en: "First African-American president - Wall Street collapses" },
        details: {
          fa: "باراک اوباما با شعار «تغییر» جان مک‌کین را شکست داد و اولین رئیس‌جمهور آفریقایی-آمریکایی تاریخ شد. او در بحبوحه بدترین بحران مالی از ۱۹۲۹ به قدرت رسید. فروپاشی لمن برادرز و بحران وام‌های مسکن اقتصاد جهان را فلج کرد.",
          en: "Barack Obama defeated John McCain with a message of 'change' and became the first African-American president. He took office amid the worst financial crisis since 1929. The collapse of Lehman Brothers and the subprime mortgage crisis paralyzed the global economy.",
        },
      },
      {
        country: "world",
        title: { fa: "بحران مالی جهانی - فروپاشی بانک‌ها", en: "Global Financial Meltdown - Banks Collapse" },
        description: { fa: "لمن برادرز ورشکست شد - رکود جهانی", en: "Lehman Brothers collapses - Global recession" },
        details: {
          fa: "فروپاشی لمن برادرز در سپتامبر ۲۰۰۸ بحران مالی جهانی را رقم زد. حباب مسکن ترکید، بانک‌های بزرگ به ورشکستگی نزدیک شدند و دولت‌ها تریلیون‌ها دلار بسته نجات تصویب کردند. بیکاری جهانی به شدت افزایش یافت و اقتصاد جهان وارد بدترین رکود از زمان ۱۹۲۹ شد.",
          en: "The collapse of Lehman Brothers in September 2008 triggered a global financial crisis. The housing bubble burst, major banks neared bankruptcy, and governments passed trillion-dollar bailout packages. Global unemployment surged and the world economy entered its worst recession since 1929.",
        },
      },
      {
        country: "russia",
        title: { fa: "جنگ روسیه و گرجستان", en: "Russia-Georgia War" },
        description: { fa: "روسیه به گرجستان حمله کرد - اشغال اوستیای جنوبی و آبخازیا", en: "Russia invades Georgia - Occupies South Ossetia and Abkhazia" },
        details: {
          fa: "روسیه در اوت ۲۰۰۸ به گرجستان حمله کرد و اوستیای جنوبی و آبخازیا را اشغال نظامی کرد. این اولین جنگ روسیه در خارج از مرزهایش از زمان فروپاشی شوروی بود و هشداری درباره بلندپروازی‌های نظامی پوتین بود که بعداً در اوکراین تکرار شد.",
          en: "Russia invaded Georgia in August 2008 and militarily occupied South Ossetia and Abkhazia. This was Russia's first war outside its borders since the Soviet collapse and a warning about Putin's military ambitions that would later be repeated in Ukraine.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحران مالی و ملی‌سازی بانک‌ها", en: "Financial Crisis and Bank Nationalizations" },
        description: { fa: "براون بانک‌های بزرگ را ملی کرد", en: "Brown nationalized major banks" },
        details: {
          fa: "دولت براون بانک‌های نورترن راک، RBS و لویدز را ملی یا نجات مالی داد. بریتانیا وارد شدیدترین رکود اقتصادی از دهه ۱۹۳۰ شد.",
          en: "Brown's government nationalized or bailed out Northern Rock, RBS, and Lloyds banks. Britain entered its worst recession since the 1930s.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران مالی جهانی و واکنش آلمان", en: "Global Financial Crisis and German Response" },
        description: { fa: "آلمان بسته نجات ۵۰۰ میلیارد یورویی تصویب کرد", en: "Germany approved 500 billion euro rescue package" },
        details: {
          fa: "آلمان بسته نجات مالی ۵۰۰ میلیارد یورویی برای بانک‌ها تصویب کرد. مرکل ابتدا با طرح نجات مشترک اروپایی مخالفت کرد اما سپس هماهنگی اروپایی را پذیرفت.",
          en: "Germany approved a 500 billion euro bank rescue package. Merkel initially opposed a joint European rescue plan but later accepted European coordination.",
        },
      },
      {
        country: "france",
        title: { fa: "سارکوزی و ریاست اتحادیه اروپا", en: "Sarkozy and EU Presidency" },
        description: { fa: "سارکوزی بحران مالی و جنگ گرجستان را مدیریت کرد", en: "Sarkozy managed financial crisis and Georgia war" },
        details: {
          fa: "سارکوزی در ریاست دوره‌ای اتحادیه اروپا میانجی آتش‌بس جنگ روسیه و گرجستان شد. همچنین نشست سران اروپا برای هماهنگی مقابله با بحران مالی را برگزار کرد.",
          en: "Sarkozy during the EU presidency mediated a ceasefire in the Russia-Georgia war. He also held a European summit to coordinate the response to the financial crisis.",
        },
      },
      {
        country: "china",
        title: { fa: "المپیک پکن و زلزله سیچوان", en: "Beijing Olympics and Sichuan Earthquake" },
        description: { fa: "چین المپیک برگزار کرد اما زلزله ۷۰ هزار کشته داشت", en: "China hosted Olympics but earthquake killed 70,000" },
        details: {
          fa: "المپیک پکن با مراسم افتتاحیه باشکوه قدرت چین را به نمایش گذاشت. اما زلزله سیچوان ۷۰ هزار نفر را کشت و ساخت‌وسازهای بی‌کیفیت مدارس افشا شد.",
          en: "The Beijing Olympics showcased China's power with a spectacular opening ceremony. But the Sichuan earthquake killed 70,000 and exposed shoddy school construction.",
        },
      }],
  },
  {
    year: 2009,
    shamsiYear: "۱۳۸۸",
    yearInfo: {
      fa: "جنبش سبز ایران بزرگترین اعتراضات پس از انقلاب بود. میلیون‌ها نفر با شعار «رأی من کو؟» به خیابان آمدند.",
      en: "Iran's Green Movement was the largest protest since the revolution. Millions took to the streets asking 'Where is my vote?'",
    },
    iran: {
      title: { fa: "جنبش سبز - «رأی من کجاست؟»", en: "Green Movement - 'Where Is My Vote?'" },
      description: { fa: "اعتراض به تقلب در انتخابات - کشته شدن ندا آقاسلطان نماد جنبش شد", en: "Protest against election fraud - Neda Agha-Soltan's death becomes symbol" },
      details: {
        fa: "پس از اعلام پیروزی احمدی‌نژاد با ۶۳ درصد آرا، میلیون‌ها نفر در شهرهای مختلف به خیابان‌ها آمدند. میرحسین موسوی و مهدی کروبی نتیجه انتخابات را زیر سؤال بردند. ندا آقاسلطان در ۳۰ خرداد در جریان اعتراضات جان باخت و تصاویر او بازتاب جهانی یافت. در پی اعتراضات، بازداشت‌های گسترده، محاکمات و اعترافات تلویزیونی صورت گرفت. موسوی و کروبی از سال ۱۳۸۹ در حصر خانگی به سر می‌برند.",
        en: "After Ahmadinejad was declared winner with 63% of the vote, millions took to the streets across multiple cities. Mir-Hossein Mousavi and Mehdi Karroubi contested the election results. Neda Agha-Soltan was killed during the protests on June 20 and footage of her death spread globally. The unrest was followed by widespread arrests, trials, and televised confessions. Mousavi and Karroubi have been under house arrest since 2010.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/5th_day_-_765.jpg&width=200",
    },
    world: [
      {
        country: "usa",
        title: { fa: "اوباما رئیس‌جمهور - تغییر رویکرد", en: "Obama Inaugurated - Change of Approach" },
        description: { fa: "اولین رئیس‌جمهور آفریقایی-آمریکایی - پیام نوروزی به ایران", en: "First African-American president - Nowruz message to Iran" },
        details: {
          fa: "باراک اوباما به عنوان اولین رئیس‌جمهور آفریقایی-آمریکایی تاریخ آمریکا سوگند یاد کرد. او پیام نوروزی به مردم ایران فرستاد و دست دوستی دراز کرد. اوباما سیاست تعامل با ایران را در پیش گرفت که سرانجام به مذاکرات هسته‌ای و توافق برجام منجر شد.",
          en: "Barack Obama was inaugurated as the first African-American president in US history. He sent a Nowruz message to the Iranian people extending a hand of friendship. Obama pursued a policy of engagement with Iran that eventually led to nuclear negotiations and the JCPOA deal.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/President_Barack_Obama.jpg&width=200",
      },
      {
        country: "world",
        title: { fa: "بحران مالی جهانی", en: "Global Financial Crisis" },
        description: { fa: "بزرگترین رکود اقتصادی پس از ۱۹۲۹ - سقوط بانک‌ها", en: "Worst recession since 1929 - Bank collapses" },
        details: {
          fa: "فروپاشی لمن برادرز در ۲۰۰۸ بحران مالی جهانی را آغاز کرد که ریشه در حباب مسکن و وام‌های بی‌پشتوانه داشت. دولت آمریکا ۷۰۰ میلیارد دلار بسته نجات (TARP) تصویب کرد و بیکاری به ۱۰٪ رسید. این بدترین رکود اقتصادی از زمان رکود بزرگ ۱۹۲۹ بود.",
          en: "The collapse of Lehman Brothers in 2008 triggered a global financial crisis rooted in the housing bubble and subprime mortgages. The US government passed a $700 billion TARP bailout and unemployment hit 10%. It was the worst recession since the Great Depression of 1929.",
        },
      },
      {
        country: "uk",
        title: { fa: "رسوایی هزینه‌های پارلمان", en: "MPs' Expenses Scandal" },
        description: { fa: "افشای سوءاستفاده مالی نمایندگان پارلمان", en: "Exposure of MPs' financial abuse" },
        details: {
          fa: "روزنامه تلگراف هزینه‌های نامشروع نمایندگان پارلمان را افشا کرد. این رسوایی اعتماد عمومی به سیاستمداران را به شدت تضعیف کرد و چند وزیر استعفا دادند.",
          en: "The Telegraph exposed MPs' illegitimate expenses claims. This scandal severely undermined public trust in politicians and several ministers resigned.",
        },
      },
      {
        country: "germany",
        title: { fa: "پیروزی مجدد مرکل و ائتلاف با لیبرال‌ها", en: "Merkel Re-elected with Liberal Coalition" },
        description: { fa: "مرکل با حزب لیبرال ائتلاف جدید تشکیل داد", en: "Merkel formed new coalition with Liberal party" },
        details: {
          fa: "مرکل در انتخابات فدرال پیروز شد و با حزب دموکرات آزاد ائتلاف تشکیل داد. اقتصاد آلمان در رکود عمیق بود و GDP بیش از ۵ درصد کاهش یافت.",
          en: "Merkel won the federal election and formed a coalition with the Free Democrats. The German economy was in deep recession with GDP dropping over 5%.",
        },
      },
      {
        country: "france",
        title: { fa: "فرانسه به فرماندهی نظامی ناتو بازگشت", en: "France Returns to NATO Military Command" },
        description: { fa: "سارکوزی فرانسه را پس از ۴۳ سال به ساختار نظامی ناتو بازگرداند", en: "Sarkozy returned France to NATO military structure after 43 years" },
        details: {
          fa: "سارکوزی تصمیم تاریخی دوگل را لغو کرد و فرانسه را به ساختار فرماندهی نظامی ناتو بازگرداند. این تصمیم مخالفت چپ‌ها و گلیست‌ها را برانگیخت.",
          en: "Sarkozy reversed de Gaulle's historic decision and returned France to NATO's military command structure. This move drew opposition from the left and Gaullists.",
        },
      },
      {
        country: "russia",
        title: { fa: "بحران گاز روسیه-اوکراین", en: "Russia-Ukraine Gas Crisis" },
        description: { fa: "روسیه گاز اوکراین و اروپا را قطع کرد", en: "Russia cut gas to Ukraine and Europe" },
        details: {
          fa: "روسیه صادرات گاز به اوکراین را قطع کرد و بخش بزرگی از اروپا در زمستان سرد بدون گاز ماند. این بحران آسیب‌پذیری اروپا در برابر انرژی روسیه را آشکار کرد.",
          en: "Russia cut gas exports to Ukraine, leaving much of Europe without gas during a cold winter. This crisis exposed Europe's vulnerability to Russian energy.",
        },
      },
      {
        country: "china",
        title: { fa: "سرکوب اویغورها در شین‌جیانگ", en: "Uyghur Crackdown in Xinjiang" },
        description: { fa: "درگیری‌های خونین اورومچی و سرکوب گسترده", en: "Bloody Urumqi clashes and mass crackdown" },
        details: {
          fa: "درگیری‌های قومی در اورومچی دست‌کم ۲۰۰ نفر را کشت. دولت چین سرکوب گسترده‌ای در شین‌جیانگ آغاز کرد و اینترنت منطقه را ماه‌ها قطع کرد.",
          en: "Ethnic clashes in Urumqi killed at least 200 people. The Chinese government launched a massive crackdown in Xinjiang and cut internet access for months.",
        },
      }],
  },
  {
    year: 2010,
    shamsiYear: "۱۳۸۹",
    iran: {
      title: { fa: "سرکوب جنبش سبز - استاکس‌نت", en: "Green Movement Crushed - Stuxnet" },
      description: { fa: "حصر موسوی و کروبی - حمله سایبری استاکس‌نت به تأسیسات هسته‌ای", en: "Mousavi & Karroubi under house arrest - Stuxnet cyberattack on nuclear facilities" },
      details: {
        fa: "حکومت با سرکوب کامل جنبش سبز، رهبران آن موسوی و کروبی را در حصر خانگی قرار داد. همزمان ویروس رایانه‌ای استاکس‌نت (ساخت مشترک آمریکا و اسرائیل) به سانتریفیوژهای نطنز آسیب جدی وارد کرد. این اولین سلاح سایبری تاریخ بود که زیرساخت فیزیکی را هدف قرار داد.",
        en: "The regime fully crushed the Green Movement and placed its leaders Mousavi and Karroubi under house arrest. Simultaneously, the Stuxnet computer virus (a joint US-Israeli creation) seriously damaged Natanz centrifuges. This was the first cyberweapon in history to target physical infrastructure.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "تصویب اوباماکر", en: "Obamacare Passed" },
        description: { fa: "بزرگترین اصلاح بهداشتی آمریکا در نیم قرن", en: "Largest US healthcare reform in half a century" },
        details: {
          fa: "اوباما قانون مراقبت مقرون به صرفه (اوباماکر) را تصویب کرد که ۲۰ میلیون آمریکایی بدون بیمه را تحت پوشش قرار داد. جمهوری‌خواهان شدیداً مخالف بودند و تلاش‌های متعددی برای لغو آن انجام دادند. این قانون بزرگترین تغییر در سیستم بهداشتی آمریکا از زمان مدیکر بود.",
          en: "Obama passed the Affordable Care Act (Obamacare), covering 20 million previously uninsured Americans. Republicans fiercely opposed it and made multiple attempts to repeal it. This was the largest change to the US healthcare system since Medicare.",
        },
      },
      {
        country: "world",
        title: { fa: "زمینه‌های بهار عربی - نارضایتی گسترده", en: "Arab Spring Prelude - Widespread Discontent" },
        description: { fa: "خودسوزی بوعزیزی در تونس - آغاز موج انقلاب‌ها", en: "Bouazizi self-immolation in Tunisia - Wave of revolutions begins" },
        details: {
          fa: "خودسوزی محمد بوعزیزی دست‌فروش تونسی در دسامبر ۲۰۱۰ جرقه انقلاب‌های بهار عربی را زد. نارضایتی از فساد، بیکاری و استبداد در سراسر خاورمیانه و شمال آفریقا گسترش یافت و موجی از اعتراضات آغاز شد که دیکتاتورها را سرنگون کرد.",
          en: "The self-immolation of Tunisian street vendor Mohamed Bouazizi in December 2010 sparked the Arab Spring revolutions. Discontent with corruption, unemployment, and authoritarianism spread across the Middle East and North Africa, launching a wave of protests that toppled dictators.",
        },
      },
      {
        country: "china",
        title: { fa: "چین دومین اقتصاد بزرگ جهان", en: "China Becomes 2nd Largest Economy" },
        description: { fa: "چین از ژاپن سبقت گرفت - تغییر توازن قدرت جهانی", en: "China surpasses Japan - Global power balance shifts" },
        details: {
          fa: "تولید ناخالص داخلی چین از ژاپن پیشی گرفت و چین رسماً دومین اقتصاد بزرگ جهان شد. رشد اقتصادی ۱۰ درصدی، سرمایه‌گذاری عظیم در زیرساخت‌ها و صادرات گسترده چین را به قدرت اقتصادی غالب آسیا تبدیل کرد.",
          en: "China's GDP surpassed Japan's, making China officially the world's second-largest economy. 10% economic growth, massive infrastructure investment, and extensive exports made China the dominant economic power in Asia.",
        },
      },
      {
        country: "uk",
        title: { fa: "ائتلاف کامرون و کلگ", en: "Cameron-Clegg Coalition" },
        description: { fa: "دولت ائتلافی محافظه‌کار-لیبرال تشکیل شد", en: "Conservative-Liberal Democrat coalition formed" },
        details: {
          fa: "دیوید کامرون با تشکیل ائتلاف با لیبرال دموکرات‌ها نخست‌وزیر شد. برنامه ریاضت اقتصادی شدید اعلام شد و هزینه‌های دولتی به شدت کاهش یافت.",
          en: "David Cameron became PM by forming a coalition with Liberal Democrats. A severe austerity program was announced and government spending was drastically cut.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران بدهی یونان و نقش آلمان", en: "Greek Debt Crisis and Germany's Role" },
        description: { fa: "مرکل بسته نجات مالی یونان را با اکراه پذیرفت", en: "Merkel reluctantly accepted Greek bailout" },
        details: {
          fa: "آلمان به عنوان بزرگ‌ترین اقتصاد اروپا نقش اصلی در بسته نجات مالی یونان ایفا کرد. مرکل بر سیاست‌های ریاضتی سخت‌گیرانه برای دریافت‌کنندگان کمک اصرار ورزید.",
          en: "Germany as Europe's largest economy played the lead role in Greece's bailout. Merkel insisted on strict austerity policies for aid recipients.",
        },
      },
      {
        country: "france",
        title: { fa: "اصلاح بازنشستگی و اعتصابات", en: "Pension Reform and Strikes" },
        description: { fa: "سارکوزی سن بازنشستگی را افزایش داد", en: "Sarkozy raised the retirement age" },
        details: {
          fa: "دولت سارکوزی سن بازنشستگی را از ۶۰ به ۶۲ سال افزایش داد. میلیون‌ها نفر در اعتصابات و تظاهرات شرکت کردند اما قانون تصویب شد.",
          en: "Sarkozy's government raised the retirement age from 60 to 62. Millions participated in strikes and protests but the law was passed.",
        },
      },
      {
        country: "russia",
        title: { fa: "مدرن‌سازی مدودف و پیمان استارت نو", en: "Medvedev's Modernization and New START" },
        description: { fa: "مدودف پیمان کاهش تسلیحات هسته‌ای امضا کرد", en: "Medvedev signed nuclear arms reduction treaty" },
        details: {
          fa: "مدودف و اوباما پیمان استارت نو برای کاهش تسلیحات هسته‌ای امضا کردند. مدودف برنامه مدرن‌سازی اقتصادی را مطرح کرد اما سایه پوتین همچنان بر سیاست حاکم بود.",
          en: "Medvedev and Obama signed the New START treaty for nuclear arms reduction. Medvedev proposed economic modernization but Putin's shadow still loomed over politics.",
        },
      }],
  },
  {
    year: 2011,
    shamsiYear: "۱۳۹۰",
    iran: {
      title: { fa: "سرکوب جنبش سبز و تشدید تحریم‌ها", en: "Green Movement Crushed & Sanctions Intensified" },
      description: { fa: "موسوی و کروبی در حصر خانگی - تحریم‌های جدید علیه برنامه هسته‌ای", en: "Mousavi and Karroubi under house arrest - New sanctions against nuclear program" },
      details: {
        fa: "میرحسین موسوی و مهدی کروبی رهبران جنبش سبز در بهمن ۱۳۸۹ در حصر خانگی قرار گرفتند. رژیم بهار عربی را «بیداری اسلامی» نامید اما اجازه هیچ اعتراض داخلی نداد. تحریم‌های بین‌المللی علیه برنامه هسته‌ای ایران تشدید شد. ویروس استاکس‌نت (ساخت آمریکا و اسرائیل) به سانتریفیوژهای نطنز آسیب جدی زد. ترور دانشمندان هسته‌ای ایران ادامه یافت.",
        en: "Green Movement leaders Mir-Hossein Mousavi and Mehdi Karroubi were placed under house arrest in February 2011. The regime called the Arab Spring an 'Islamic Awakening' but allowed no domestic protests. International sanctions against Iran's nuclear program intensified. The Stuxnet virus (US-Israeli creation) severely damaged Natanz centrifuges. Assassinations of Iranian nuclear scientists continued.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "بهار عربی - سقوط دیکتاتورها", en: "Arab Spring - Dictators Fall" },
        description: { fa: "تونس، مصر، لیبی، یمن، سوریه - موج انقلاب‌ها", en: "Tunisia, Egypt, Libya, Yemen, Syria - Wave of revolutions" },
        details: {
          fa: "خودسوزی محمد بوعزیزی در تونس جرقه انقلاب‌ها را زد. بن‌علی در تونس، مبارک در مصر و قذافی در لیبی سرنگون شدند. جنگ داخلی سوریه آغاز شد. یمن به بحران فرو رفت. این موج به ایران نرسید اما رهبران ایران آن را «بیداری اسلامی» نامیدند.",
          en: "Mohamed Bouazizi's self-immolation in Tunisia sparked revolutions. Ben Ali in Tunisia, Mubarak in Egypt, and Gaddafi in Libya were overthrown. Syrian civil war began. Yemen descended into crisis. The wave didn't reach Iran but Iranian leaders called it an 'Islamic Awakening.'",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Tahrir_Square_on_February11.png&width=200",
      },
      {
        country: "usa",
        title: { fa: "کشته شدن بن لادن", en: "Killing of Bin Laden" },
        description: { fa: "عملیات نیروهای ویژه آمریکا در پاکستان", en: "US special forces operation in Pakistan" },
        details: {
          fa: "نیروهای ویژه آمریکا اسامه بن لادن را در ابوت‌آباد پاکستان کشتند. اوباما این عملیات را بزرگ‌ترین دستاورد در مبارزه با تروریسم خواند.",
          en: "US special forces killed Osama bin Laden in Abbottabad, Pakistan. Obama called this operation the greatest achievement in the fight against terrorism.",
        },
      },
      {
        country: "uk",
        title: { fa: "شورش‌های لندن", en: "London Riots" },
        description: { fa: "شورش‌های گسترده پس از کشته شدن مارک داگان", en: "Widespread riots after Mark Duggan shooting" },
        details: {
          fa: "کشته شدن مارک داگان توسط پلیس شورش‌های گسترده‌ای در لندن و شهرهای دیگر برانگیخت. پنج نفر کشته و خسارات میلیون پوندی وارد شد.",
          en: "The police shooting of Mark Duggan triggered widespread riots in London and other cities. Five people died and millions of pounds in damage occurred.",
        },
      },
      {
        country: "germany",
        title: { fa: "آلمان انرژی هسته‌ای را کنار گذاشت", en: "Germany Abandons Nuclear Energy" },
        description: { fa: "مرکل پس از فوکوشیما خروج از انرژی هسته‌ای را اعلام کرد", en: "Merkel announced nuclear phase-out after Fukushima" },
        details: {
          fa: "پس از فاجعه فوکوشیما، مرکل تصمیم به خاموشی تمام نیروگاه‌های هسته‌ای آلمان تا ۲۰۲۲ گرفت. این چرخش سیاستی بزرگ آلمان را به سمت انرژی‌های تجدیدپذیر سوق داد.",
          en: "After the Fukushima disaster, Merkel decided to shut down all German nuclear plants by 2022. This major policy reversal pushed Germany toward renewable energy.",
        },
      },
      {
        country: "france",
        title: { fa: "مداخله نظامی فرانسه در لیبی", en: "French Military Intervention in Libya" },
        description: { fa: "سارکوزی حمله به لیبی را رهبری کرد", en: "Sarkozy led the attack on Libya" },
        details: {
          fa: "فرانسه نقش پیشرو در عملیات نظامی ناتو علیه قذافی داشت. سارکوزی اولین حملات هوایی را فرمان داد و قذافی در اکتبر کشته شد.",
          en: "France took the lead role in NATO's military operation against Gaddafi. Sarkozy ordered the first airstrikes, and Gaddafi was killed in October.",
        },
      },
      {
        country: "russia",
        title: { fa: "اعتراضات گسترده علیه پوتین", en: "Mass Protests Against Putin" },
        description: { fa: "بزرگ‌ترین اعتراضات از زمان فروپاشی شوروی", en: "Largest protests since Soviet collapse" },
        details: {
          fa: "پس از انتخابات پارلمانی متقلبانه، صدها هزار نفر در مسکو و شهرهای دیگر علیه پوتین تظاهرات کردند. این بزرگ‌ترین اعتراضات از دوران فروپاشی شوروی بود.",
          en: "After fraudulent parliamentary elections, hundreds of thousands protested against Putin in Moscow and other cities. These were the largest protests since the Soviet collapse.",
        },
      },
      {
        country: "china",
        title: { fa: "چین دومین اقتصاد جهان شد", en: "China Becomes World's Second Economy" },
        description: { fa: "چین از ژاپن گذشت و دومین اقتصاد بزرگ شد", en: "China surpassed Japan as second-largest economy" },
        details: {
          fa: "چین رسماً از ژاپن به عنوان دومین اقتصاد بزرگ جهان پیشی گرفت. قطار سریع‌السیر پکن-شانگهای افتتاح شد اما حادثه قطار ونژو ۴۰ نفر را کشت.",
          en: "China officially surpassed Japan as the world's second-largest economy. The Beijing-Shanghai high-speed rail opened but the Wenzhou train crash killed 40.",
        },
      }],
  },
  {
    year: 2012,
    shamsiYear: "۱۳۹۱",
    iran: {
      title: { fa: "تحریم‌های نفتی ایران را فلج کرد", en: "Oil Sanctions Cripple Iran" },
      description: { fa: "تحریم نفت و بانک مرکزی - سقوط ارزش ریال - تورم شدید", en: "Oil and central bank sanctions - Rial crashes - Severe inflation" },
      details: {
        fa: "اتحادیه اروپا واردات نفت ایران را تحریم کرد و آمریکا بانک مرکزی ایران را هدف قرار داد. صادرات نفت ایران از ۲.۵ میلیون بشکه به ۱ میلیون کاهش یافت. ارزش ریال ۸۰ درصد سقوط کرد و تورم به ۴۰ درصد رسید. طبقه متوسط ایران شدیداً آسیب دید.",
        en: "The EU embargoed Iranian oil and the US targeted Iran's central bank. Iran's oil exports dropped from 2.5 million to 1 million barrels. The Rial lost 80% of its value and inflation hit 40%. Iran's middle class was severely impacted.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "اوباما دوباره انتخاب شد", en: "Obama Re-elected" },
        description: { fa: "اوباما رامنی را شکست داد - ادامه سیاست تعامل با ایران", en: "Obama defeats Romney - Continues Iran engagement policy" },
        details: {
          fa: "اوباما میت رامنی را شکست داد و برای دومین دوره انتخاب شد. او مذاکرات محرمانه با ایران از طریق کانال عمان را آغاز کرد که بعداً به مذاکرات هسته‌ای رسمی منجر شد. سیاست خارجی اوباما بر دیپلماسی و پرهیز از جنگ تمرکز داشت.",
          en: "Obama defeated Mitt Romney and was elected for a second term. He initiated secret talks with Iran through the Oman channel that later led to formal nuclear negotiations. Obama's foreign policy focused on diplomacy and avoiding war.",
        },
      },
      {
        country: "china",
        title: { fa: "شی جین‌پینگ به قدرت رسید", en: "Xi Jinping Rises to Power" },
        description: { fa: "شی دبیرکل حزب کمونیست شد - آغاز عصر جدید چین", en: "Xi becomes CPC General Secretary - New era for China begins" },
        details: {
          fa: "شی جین‌پینگ در کنگره هجدهم حزب کمونیست به دبیرکلی رسید و قدرتمندترین رهبر چین از زمان مائو شد. او کمپین گسترده ضدفساد راه انداخت و سیاست خارجی تهاجمی‌تری در پیش گرفت. «رؤیای چینی» شعار اصلی او بود.",
          en: "Xi Jinping became General Secretary at the 18th Party Congress, emerging as China's most powerful leader since Mao. He launched a massive anti-corruption campaign and pursued a more assertive foreign policy. The 'Chinese Dream' was his signature slogan.",
        },
      },
      {
        country: "russia",
        title: { fa: "پوتین دوباره رئیس‌جمهور شد", en: "Putin Returns as President" },
        description: { fa: "بازگشت پوتین به کرملین - اعتراضات مخالفان", en: "Putin returns to Kremlin - Opposition protests" },
        details: {
          fa: "پوتین پس از یک دوره نخست‌وزیری (با مدودف رئیس‌جمهور) دوباره به ریاست‌جمهوری بازگشت. اعتراضات گسترده‌ای در مسکو علیه تقلب انتخاباتی صورت گرفت اما سرکوب شد. پوتین سرکوب مخالفان و رسانه‌های مستقل را تشدید کرد.",
          en: "Putin returned to the presidency after a term as PM (with Medvedev as president). Widespread protests erupted in Moscow against election fraud but were suppressed. Putin intensified crackdowns on opposition and independent media.",
        },
      },
      {
        country: "uk",
        title: { fa: "المپیک لندن ۲۰۱۲", en: "London 2012 Olympics" },
        description: { fa: "بریتانیا میزبان موفق المپیک شد", en: "Britain successfully hosted the Olympics" },
        details: {
          fa: "المپیک لندن با مراسم افتتاحیه باشکوه دنی بویل موفقیت بزرگی بود. تیم بریتانیا سومین مقام جدول مدال‌ها را کسب کرد.",
          en: "The London Olympics with Danny Boyle's spectacular opening ceremony was a great success. Team GB finished third in the medal table.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران بدهی اروپا و ریاضت آلمانی", en: "Eurozone Debt Crisis and German Austerity" },
        description: { fa: "مرکل بر ریاضت اصرار ورزید و سیاست اروپا را شکل داد", en: "Merkel insisted on austerity and shaped EU policy" },
        details: {
          fa: "مرکل بر سیاست‌های ریاضتی در بحران بدهی اروپا اصرار ورزید. پیمان مالی اروپا با رهبری آلمان تصویب شد و بانک مرکزی اروپا وعده نجات یورو را داد.",
          en: "Merkel insisted on austerity policies in the eurozone debt crisis. The European Fiscal Compact was adopted under German leadership and the ECB pledged to save the euro.",
        },
      },
      {
        country: "france",
        title: { fa: "اولاند رئیس‌جمهور شد", en: "Hollande Becomes President" },
        description: { fa: "سوسیالیست‌ها پس از ۱۷ سال به قدرت بازگشتند", en: "Socialists returned to power after 17 years" },
        details: {
          fa: "فرانسوا اولاند سارکوزی را شکست داد و رئیس‌جمهور شد. او وعده رشد اقتصادی به جای ریاضت و مالیات ۷۵ درصدی بر ثروتمندان داد.",
          en: "Francois Hollande defeated Sarkozy and became president. He promised economic growth over austerity and a 75% tax on the wealthy.",
        },
      }],
  },
  {
    year: 2013,
    shamsiYear: "۱۳۹۲",
    iran: {
      title: { fa: "روحانی رئیس‌جمهور شد - امید به گشایش", en: "Rouhani Elected - Hope for Opening" },
      description: { fa: "دولت تدبیر و امید - آغاز مذاکرات هسته‌ای جدی", en: "Government of Prudence and Hope - Serious nuclear talks begin" },
      details: {
        fa: "حسن روحانی با شعار تعامل با جهان و رفع تحریم‌ها رئیس‌جمهور شد. ظریف وزیر خارجه شد و مذاکرات محرمانه با آمریکا (کانال عمان) به مذاکرات رسمی تبدیل شد. اوباما و روحانی تماس تلفنی تاریخی داشتند. امید به بهبود اقتصادی افزایش یافت.",
        en: "Hassan Rouhani won presidency on engagement with the world and sanctions relief. Zarif became FM and secret talks with the US (Oman channel) became formal negotiations. Obama and Rouhani had a historic phone call. Hope for economic improvement grew.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "بحران اوکراین - الحاق کریمه", en: "Ukraine Crisis - Crimea Annexed" },
        description: { fa: "روسیه کریمه را ضمیمه کرد - تحریم‌های غربی", en: "Russia annexes Crimea - Western sanctions" },
        details: {
          fa: "پس از انقلاب میدان در اوکراین، روسیه کریمه را با همه‌پرسی مورد مناقشه ضمیمه کرد. غرب تحریم‌های اقتصادی علیه روسیه اعمال کرد و روسیه از گروه هشت اخراج شد. جنگ در شرق اوکراین (دونباس) آغاز شد که زمینه‌ساز حمله تمام‌عیار ۲۰۲۲ شد.",
          en: "After the Maidan revolution in Ukraine, Russia annexed Crimea through a disputed referendum. The West imposed economic sanctions on Russia, and Russia was expelled from the G8. War erupted in eastern Ukraine (Donbas), setting the stage for the full-scale 2022 invasion.",
        },
      },
      {
        country: "world",
        title: { fa: "ظهور داعش در عراق و سوریه", en: "Rise of ISIS in Iraq & Syria" },
        description: { fa: "داعش خلافت اعلام کرد - ایران در جنگ علیه داعش شرکت کرد", en: "ISIS declares caliphate - Iran joins war against ISIS" },
        details: {
          fa: "داعش در ژوئن ۲۰۱۴ موصل را تصرف کرد و ابوبکر بغدادی خلافت اسلامی اعلام کرد. ایران نیروهای شبه‌نظامی و مستشاران نظامی به عراق و سوریه فرستاد. ائتلاف بین‌المللی به رهبری آمریکا بمباران مواضع داعش را آغاز کرد و داعش تا ۲۰۱۹ شکست نظامی خورد.",
          en: "ISIS captured Mosul in June 2014 and Abu Bakr al-Baghdadi declared an Islamic caliphate. Iran sent militias and military advisors to Iraq and Syria. A US-led international coalition began bombing ISIS positions, and ISIS was militarily defeated by 2019.",
        },
      },
      {
        country: "usa",
        title: { fa: "افشاگری‌های اسنودن", en: "Snowden Revelations" },
        description: { fa: "ادوارد اسنودن برنامه‌های جاسوسی NSA را افشا کرد", en: "Edward Snowden exposed NSA surveillance programs" },
        details: {
          fa: "ادوارد اسنودن برنامه‌های جاسوسی گسترده NSA از جمله شنود تلفنی میلیون‌ها آمریکایی را افشا کرد. او به هنگ‌کنگ و سپس روسیه گریخت.",
          en: "Edward Snowden exposed massive NSA surveillance programs including phone monitoring of millions of Americans. He fled to Hong Kong and then Russia.",
        },
      },
      {
        country: "uk",
        title: { fa: "بحث برگزیت آغاز شد", en: "Brexit Debate Begins" },
        description: { fa: "کامرون وعده همه‌پرسی اتحادیه اروپا داد", en: "Cameron promised EU referendum" },
        details: {
          fa: "کامرون در سخنرانی بلومبرگ وعده برگزاری همه‌پرسی درباره عضویت بریتانیا در اتحادیه اروپا داد. حزب استقلال بریتانیا (UKIP) در انتخابات محلی قدرت گرفت.",
          en: "Cameron in his Bloomberg speech promised a referendum on Britain's EU membership. UKIP gained strength in local elections.",
        },
      },
      {
        country: "germany",
        title: { fa: "پیروزی سوم مرکل", en: "Merkel's Third Victory" },
        description: { fa: "مرکل برای سومین بار صدراعظم شد", en: "Merkel became chancellor for the third time" },
        details: {
          fa: "مرکل با پیروزی قاطع در انتخابات فدرال برای سومین بار صدراعظم شد. CDU به ائتلاف بزرگ با سوسیال‌دموکرات‌ها روی آورد.",
          en: "Merkel won a decisive victory in federal elections, becoming chancellor for the third time. CDU formed a grand coalition with the Social Democrats.",
        },
      },
      {
        country: "france",
        title: { fa: "مداخله فرانسه در مالی", en: "French Intervention in Mali" },
        description: { fa: "عملیات سروال علیه جهادگرایان در مالی", en: "Operation Serval against jihadists in Mali" },
        details: {
          fa: "فرانسه عملیات نظامی سروال را برای مقابله با پیشروی گروه‌های جهادی در مالی آغاز کرد. نیروهای فرانسوی شمال مالی را آزاد کردند.",
          en: "France launched Operation Serval to counter the advance of jihadist groups in Mali. French forces liberated northern Mali.",
        },
      },
      {
        country: "china",
        title: { fa: "ابتکار کمربند و راه", en: "Belt and Road Initiative" },
        description: { fa: "شی جین‌پینگ بزرگ‌ترین طرح زیرساختی جهان را اعلام کرد", en: "Xi Jinping announced world's largest infrastructure plan" },
        details: {
          fa: "شی جین‌پینگ ابتکار کمربند و راه را اعلام کرد که بزرگ‌ترین پروژه زیرساختی تاریخ بود. این طرح شامل ساخت جاده، بندر و راه‌آهن در آسیا، آفریقا و اروپا بود.",
          en: "Xi Jinping announced the Belt and Road Initiative, the largest infrastructure project in history. The plan included building roads, ports, and railways across Asia, Africa, and Europe.",
        },
      }],
  },
  {
    year: 2014,
    shamsiYear: "۱۳۹۳",
    iran: {
      title: { fa: "پیشرفت مذاکرات هسته‌ای", en: "Nuclear Talks Progress" },
      description: { fa: "توافق موقت ژنو - مذاکرات فشرده برای توافق نهایی", en: "Geneva interim deal - Intense negotiations for final agreement" },
      details: {
        fa: "مذاکرات هسته‌ای ایران و ۱+۵ پس از توافق موقت ژنو (۲۰۱۳) وارد مرحله حساسی شد. ایران غنی‌سازی ۲۰ درصد را متوقف کرد و بازرسان آژانس دسترسی بیشتری یافتند. ضرب‌الاجل‌ها چندین بار تمدید شد اما امید به توافق نهایی بالا بود.",
        en: "Iran-P5+1 nuclear talks entered a critical phase after the Geneva interim deal (2013). Iran halted 20% enrichment and IAEA inspectors gained greater access. Deadlines were extended several times but hope for a final deal remained high.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "الحاق کریمه - آغاز جنگ اوکراین", en: "Crimea Annexation - Ukraine War Begins" },
        description: { fa: "روسیه کریمه را ضمیمه کرد - جنگ در دونباس آغاز شد", en: "Russia annexes Crimea - War begins in Donbas" },
        details: {
          fa: "پس از سرنگونی دولت یانوکوویچ در انقلاب میدان، روسیه کریمه را با همه‌پرسی مورد مناقشه ضمیمه کرد. جنگ در شرق اوکراین (دونباس) با حمایت روسیه آغاز شد. غرب تحریم‌های سنگینی علیه روسیه اعمال کرد و روسیه از گروه هشت اخراج شد.",
          en: "After the Maidan revolution toppled the Yanukovych government, Russia annexed Crimea through a disputed referendum. War began in eastern Ukraine (Donbas) with Russian support. The West imposed heavy sanctions on Russia and expelled it from the G8.",
        },
      },
      {
        country: "world",
        title: { fa: "داعش خلافت اعلام کرد", en: "ISIS Declares Caliphate" },
        description: { fa: "تصرف موصل و رقه - ائتلاف بین‌المللی علیه داعش", en: "Mosul and Raqqa captured - International coalition against ISIS" },
        details: {
          fa: "داعش موصل دومین شهر بزرگ عراق را تصرف کرد و ابوبکر بغدادی خلافت اسلامی اعلام کرد. ائتلاف بین‌المللی به رهبری آمریکا بمباران مواضع داعش را آغاز کرد. ایران نیروهای شبه‌نظامی و سپاه قدس را به عراق فرستاد. صدها هزار نفر آواره شدند.",
          en: "ISIS captured Mosul, Iraq's second-largest city, and Abu Bakr al-Baghdadi declared an Islamic caliphate. A US-led international coalition began bombing ISIS positions. Iran sent militias and the Quds Force to Iraq. Hundreds of thousands were displaced.",
        },
      },
      {
        country: "usa",
        title: { fa: "جمهوری‌خواهان سنا را بردند", en: "Republicans Win Senate" },
        description: { fa: "پیروزی بزرگ جمهوری‌خواهان در انتخابات میان‌دوره‌ای", en: "Major Republican victory in midterm elections" },
        details: {
          fa: "جمهوری‌خواهان در انتخابات میان‌دوره‌ای ۲۰۱۴ کنترل سنا را به دست آوردند و اکثریت مجلس نمایندگان را تقویت کردند. این پیروزی توانایی اوباما برای تصویب قوانین را محدود کرد و زمینه را برای ظهور ترامپ فراهم ساخت.",
          en: "Republicans won control of the Senate in the 2014 midterms and strengthened their House majority. This victory limited Obama's ability to pass legislation and set the stage for Trump's rise.",
        },
      },
      {
        country: "uk",
        title: { fa: "همه‌پرسی استقلال اسکاتلند", en: "Scottish Independence Referendum" },
        description: { fa: "اسکاتلند به ماندن در بریتانیا رأی داد", en: "Scotland voted to stay in the UK" },
        details: {
          fa: "در همه‌پرسی تاریخی، ۵۵ درصد مردم اسکاتلند به ماندن در بریتانیا رأی دادند. کامرون قول اختیارات بیشتر به اسکاتلند داد.",
          en: "In a historic referendum, 55% of Scots voted to remain in the UK. Cameron promised more devolved powers to Scotland.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران اوکراین و تحریم روسیه", en: "Ukraine Crisis and Russia Sanctions" },
        description: { fa: "مرکل نقش اصلی در تحریم‌ها و دیپلماسی داشت", en: "Merkel played lead role in sanctions and diplomacy" },
        details: {
          fa: "مرکل نقش پیشرو در تحریم‌های اروپا علیه روسیه و مذاکرات مینسک ایفا کرد. روابط آلمان و روسیه که بر پایه انرژی بود به شدت آسیب دید.",
          en: "Merkel played the leading role in EU sanctions against Russia and Minsk negotiations. Germany-Russia relations, built on energy, were severely damaged.",
        },
      },
      {
        country: "france",
        title: { fa: "اولاند در بحران محبوبیت", en: "Hollande's Popularity Crisis" },
        description: { fa: "محبوبیت اولاند به پایین‌ترین حد تاریخ رسید", en: "Hollande's approval rating hit historic low" },
        details: {
          fa: "محبوبیت اولاند به ۱۳ درصد سقوط کرد. رسوایی شخصی رئیس‌جمهور و اقتصاد ضعیف به اعتبار سوسیالیست‌ها آسیب زد.",
          en: "Hollande's approval dropped to 13%. The president's personal scandal and weak economy damaged Socialist credibility.",
        },
      },
      {
        country: "china",
        title: { fa: "اعتراضات هنگ‌کنگ (انقلاب چتر)", en: "Hong Kong Protests (Umbrella Revolution)" },
        description: { fa: "تظاهرات گسترده برای دموکراسی در هنگ‌کنگ", en: "Mass protests for democracy in Hong Kong" },
        details: {
          fa: "دانشجویان و شهروندان هنگ‌کنگ هفته‌ها خیابان‌ها را اشغال کردند و خواستار انتخابات آزاد شدند. پکن از عقب‌نشینی امتناع کرد و اعتراضات سرانجام پایان یافت.",
          en: "Students and citizens of Hong Kong occupied streets for weeks demanding free elections. Beijing refused to back down and the protests eventually ended.",
        },
      }],
  },
  {
    year: 2015,
    shamsiYear: "۱۳۹۴",
    iran: {
      title: { fa: "توافق هسته‌ای برجام", en: "JCPOA Nuclear Deal Signed" },
      description: { fa: "توافق ایران با ۱+۵ در وین - رفع تحریم‌ها در ازای محدودیت هسته‌ای", en: "Iran deal with P5+1 in Vienna - Sanctions relief for nuclear limits" },
      details: {
        fa: "پس از ۲ سال مذاکره فشرده، ایران و ۱+۵ (آمریکا، بریتانیا، فرانسه، روسیه، چین + آلمان) در ۱۴ ژوئیه ۲۰۱۵ در وین به توافق رسیدند. ایران متعهد شد غنی‌سازی را به ۳.۶۷٪ محدود کند، ذخایر اورانیوم را کاهش دهد و بازرسی‌های آژانس را بپذیرد. در عوض تحریم‌های اقتصادی برداشته شد. جان کری و ظریف چهره‌های کلیدی مذاکرات بودند.",
        en: "After 2 years of intense negotiations, Iran and P5+1 (US, UK, France, Russia, China + Germany) reached a deal on July 14, 2015 in Vienna. Iran committed to limit enrichment to 3.67%, reduce uranium stockpile, and accept IAEA inspections. In return, economic sanctions were lifted. John Kerry and Zarif were key negotiators.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Iran_Talks_14_July_2015_%2819680862152%29.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "بحران مهاجرت اروپا", en: "European Migrant Crisis" },
        description: { fa: "میلیون‌ها پناهجوی سوری و عراقی به اروپا سرازیر شدند", en: "Millions of Syrian & Iraqi refugees flood into Europe" },
        details: {
          fa: "بیش از ۱ میلیون پناهجو عمدتاً از سوریه و عراق در ۲۰۱۵ وارد اروپا شدند. واکنش سیاسی علیه مهاجرت به تقویت جنبش برگزیت و ظهور احزاب راست افراطی در سراسر اروپا منجر شد. این بحران اتحادیه اروپا را عمیقاً تقسیم کرد و سیاست اروپا را برای سال‌ها تحت تأثیر قرار داد.",
          en: "Over 1 million refugees, mainly from Syria and Iraq, arrived in Europe in 2015. The political backlash against immigration fueled the Brexit movement and the rise of far-right parties across Europe. The crisis deeply divided the EU and shaped European politics for years to come.",
        },
      },
      {
        country: "usa",
        title: { fa: "توافق هسته‌ای و قانونی شدن ازدواج همجنس‌ها", en: "Iran Nuclear Deal and Same-Sex Marriage Legalized" },
        description: { fa: "برجام امضا شد و دیوان عالی ازدواج همجنس‌ها را قانونی کرد", en: "JCPOA signed and Supreme Court legalized same-sex marriage" },
        details: {
          fa: "توافق هسته‌ای برجام با ایران امضا شد. دیوان عالی آمریکا ازدواج همجنس‌گرایان را در سراسر کشور قانونی کرد. ترامپ نامزدی ریاست‌جمهوری را اعلام کرد.",
          en: "The JCPOA nuclear deal with Iran was signed. The Supreme Court legalized same-sex marriage nationwide. Trump announced his presidential candidacy.",
        },
      },
      {
        country: "uk",
        title: { fa: "پیروزی غیرمنتظره کامرون", en: "Cameron's Unexpected Victory" },
        description: { fa: "محافظه‌کاران اکثریت مطلق به دست آوردند", en: "Conservatives won outright majority" },
        details: {
          fa: "حزب محافظه‌کار برخلاف نظرسنجی‌ها اکثریت مطلق پارلمان را به دست آورد. کامرون وعده برگزاری همه‌پرسی اتحادیه اروپا تا ۲۰۱۷ را تأیید کرد.",
          en: "The Conservatives unexpectedly won a parliamentary majority. Cameron confirmed the promise to hold an EU referendum by 2017.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران مهاجران و سیاست درهای باز مرکل", en: "Migrant Crisis and Merkel's Open Door Policy" },
        description: { fa: "آلمان بیش از یک میلیون پناهنده پذیرفت", en: "Germany accepted over one million refugees" },
        details: {
          fa: "مرکل با عبارت معروف «ما از پسش بر می‌آییم» بیش از یک میلیون پناهنده سوری را پذیرفت. این تصمیم محبوبیت مرکل را کاهش و حزب AfD را تقویت کرد.",
          en: "Merkel's famous 'Wir schaffen das' welcomed over one million Syrian refugees. This decision reduced Merkel's popularity and strengthened the AfD party.",
        },
      },
      {
        country: "france",
        title: { fa: "حملات تروریستی پاریس", en: "Paris Terrorist Attacks" },
        description: { fa: "حمله به شارلی ابدو و حملات نوامبر ۱۳۰ کشته", en: "Charlie Hebdo attack and November attacks killed 130" },
        details: {
          fa: "حمله به دفتر شارلی ابدو ۱۲ کشته داشت. در نوامبر حملات هماهنگ داعش در پاریس ۱۳۰ نفر را کشت. فرانسه حالت فوق‌العاده اعلام کرد.",
          en: "The Charlie Hebdo attack killed 12. In November, coordinated ISIS attacks in Paris killed 130. France declared a state of emergency.",
        },
      },
      {
        country: "russia",
        title: { fa: "مداخله نظامی روسیه در سوریه", en: "Russian Military Intervention in Syria" },
        description: { fa: "روسیه حملات هوایی در سوریه آغاز کرد", en: "Russia began airstrikes in Syria" },
        details: {
          fa: "روسیه حملات هوایی در سوریه را برای حمایت از بشار اسد آغاز کرد. این مداخله نظامی بزرگ‌ترین عملیات روسیه خارج از مرزهایش از زمان شوروی بود.",
          en: "Russia began airstrikes in Syria to support Bashar al-Assad. This was Russia's largest military operation outside its borders since the Soviet era.",
        },
      },
      {
        country: "china",
        title: { fa: "سقوط بازار سهام چین", en: "Chinese Stock Market Crash" },
        description: { fa: "بازارهای مالی چین یک‌سوم ارزش خود را از دست دادند", en: "Chinese financial markets lost a third of their value" },
        details: {
          fa: "بازار سهام چین بیش از ۳۰ درصد سقوط کرد و تریلیون‌ها دلار ارزش از بین رفت. دولت مداخلات بی‌سابقه‌ای برای مهار بحران انجام داد.",
          en: "China's stock market crashed over 30%, wiping out trillions of dollars in value. The government undertook unprecedented interventions to contain the crisis.",
        },
      }],
  },
  {
    year: 2016,
    shamsiYear: "۱۳۹۵",
    iran: {
      title: { fa: "اجرای برجام - رفع تحریم‌ها", en: "JCPOA Implementation - Sanctions Lifted" },
      description: { fa: "تحریم‌های هسته‌ای برداشته شد - امید به گشایش اقتصادی", en: "Nuclear sanctions lifted - Hope for economic opening" },
      details: {
        fa: "در ژانویه ۲۰۱۶ برجام رسماً اجرایی شد و تحریم‌های هسته‌ای برداشته شد. دارایی‌های منجمد ایران آزاد شد و صادرات نفت افزایش یافت. شرکت‌های اروپایی به ایران بازگشتند. اما بانک‌های بین‌المللی به دلیل ریسک تحریم‌های آمریکایی از معامله با ایران خودداری کردند.",
        en: "In January 2016 the JCPOA was officially implemented and nuclear sanctions were lifted. Iran's frozen assets were released and oil exports increased. European companies returned to Iran. But international banks avoided dealing with Iran due to the risk of US secondary sanctions.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترامپ انتخاب شد - شوک سیاسی", en: "Trump Elected - Political Shock" },
        description: { fa: "ترامپ کلینتون را شکست داد - پوپولیسم پیروز شد", en: "Trump defeats Clinton - Populism triumphs" },
        details: {
          fa: "دونالد ترامپ با شعار «آمریکا را دوباره بزرگ کنید» هیلاری کلینتون را در انتخابات شکست داد. با وجود کسب رأی مردمی کمتر، ترامپ کالج الکتورال را برد. انتخاب او شوکی به نظام سیاسی جهان وارد کرد و پایان دوره تعامل با ایران و چندجانبه‌گرایی را نشان داد.",
          en: "Donald Trump defeated Hillary Clinton with the slogan 'Make America Great Again.' Despite winning fewer popular votes, Trump won the Electoral College. His election shocked the global political order and signaled the end of engagement with Iran and multilateralism.",
        },
      },
      {
        country: "uk",
        title: { fa: "رأی برگزیت - خروج از اتحادیه اروپا", en: "Brexit Vote - Leaving the EU" },
        description: { fa: "۵۲٪ بریتانیایی‌ها به خروج رأی دادند - بحران سیاسی", en: "52% vote to leave - Political crisis" },
        details: {
          fa: "در همه‌پرسی ۲۳ ژوئن ۲۰۱۶، ۵۲ درصد بریتانیایی‌ها به خروج از اتحادیه اروپا رأی دادند. دیوید کامرون استعفا داد و ترزا می جانشین او شد. برگزیت بزرگترین بحران سیاسی بریتانیا در دهه‌های اخیر بود و اتحادیه اروپا را نیز تکان داد.",
          en: "In the June 23, 2016 referendum, 52% of Britons voted to leave the EU. David Cameron resigned and Theresa May succeeded him. Brexit was Britain's biggest political crisis in decades and also shook the European Union.",
        },
      },
      {
        country: "world",
        title: { fa: "اوج جنگ سوریه - سقوط حلب", en: "Syria War Peak - Fall of Aleppo" },
        description: { fa: "نیروهای اسد با حمایت روسیه و ایران حلب را گرفتند", en: "Assad forces with Russian & Iranian support take Aleppo" },
        details: {
          fa: "نیروهای بشار اسد با حمایت هوایی روسیه و نیروهای زمینی ایران و حزب‌الله شرق حلب را پس از محاصره طولانی تصرف کردند. صدها غیرنظامی کشته و هزاران نفر آواره شدند. این پیروزی نقطه عطف جنگ سوریه به نفع اسد بود.",
          en: "Assad's forces, with Russian air support and Iranian and Hezbollah ground forces, captured eastern Aleppo after a long siege. Hundreds of civilians were killed and thousands displaced. This victory was a turning point in the Syrian war in Assad's favor.",
        },
      },
      {
        country: "germany",
        title: { fa: "حملات تروریستی و تقویت راست افراطی", en: "Terror Attacks and Rise of Far Right" },
        description: { fa: "حملات تروریستی متعدد و رشد AfD", en: "Multiple terror attacks and AfD growth" },
        details: {
          fa: "حمله با کامیون به بازار کریسمس برلین ۱۲ نفر را کشت. حزب راست‌گرای AfD در انتخابات ایالتی قدرت گرفت و مخالفت با سیاست مهاجرتی مرکل شدت یافت.",
          en: "A truck attack on a Berlin Christmas market killed 12. The far-right AfD gained strength in state elections and opposition to Merkel's migration policy intensified.",
        },
      },
      {
        country: "france",
        title: { fa: "حمله تروریستی نیس", en: "Nice Terrorist Attack" },
        description: { fa: "حمله با کامیون در روز ملی فرانسه ۸۶ نفر را کشت", en: "Truck attack on Bastille Day killed 86" },
        details: {
          fa: "در روز ملی فرانسه، حمله با کامیون در نیس ۸۶ نفر را کشت. فرانسه در حالت فوق‌العاده باقی ماند و فضای سیاسی به سمت راست چرخید.",
          en: "On Bastille Day, a truck attack in Nice killed 86 people. France remained in a state of emergency and the political climate shifted to the right.",
        },
      },
      {
        country: "russia",
        title: { fa: "مداخله روسیه در انتخابات آمریکا", en: "Russian Interference in US Election" },
        description: { fa: "روسیه متهم به مداخله سایبری در انتخابات آمریکا شد", en: "Russia accused of cyber interference in US election" },
        details: {
          fa: "سازمان‌های اطلاعاتی آمریکا روسیه را به هک ایمیل‌های حزب دموکرات و مداخله در انتخابات ریاست‌جمهوری متهم کردند. روابط روسیه و آمریکا بیشتر تیره شد.",
          en: "US intelligence agencies accused Russia of hacking Democratic Party emails and interfering in the presidential election. Russia-US relations further deteriorated.",
        },
      },
      {
        country: "china",
        title: { fa: "اختلاف چین در دریای جنوب", en: "China's South China Sea Dispute" },
        description: { fa: "دیوان لاهه علیه ادعاهای چین رأی داد", en: "Hague tribunal ruled against China's claims" },
        details: {
          fa: "دیوان دائمی داوری لاهه ادعاهای ارضی چین در دریای جنوبی چین را رد کرد. پکن حکم را نپذیرفت و جزایر مصنوعی نظامی ساخت.",
          en: "The Permanent Court of Arbitration rejected China's territorial claims in the South China Sea. Beijing rejected the ruling and built militarized artificial islands.",
        },
      }],
  },
  {
    year: 2017,
    shamsiYear: "۱۳۹۶",
    iran: {
      title: { fa: "اعتراضات دی‌ماه ۹۶", en: "December 2017 Protests" },
      description: { fa: "اعتراضات اقتصادی در ۱۰۰+ شهر - شعار علیه کل نظام", en: "Economic protests in 100+ cities - Slogans against entire system" },
      details: {
        fa: "اعتراضات از مشهد با شعارهای اقتصادی آغاز شد اما به سرعت به ۱۰۰ شهر گسترش یافت و شعارها سیاسی شد. «مرگ بر دیکتاتور» و «اصلاح‌طلب، اصول‌گرا، دیگه تمومه ماجرا» فریاد زده شد. حکومت با بازداشت هزاران نفر اعتراضات را سرکوب کرد. حداقل ۲۵ نفر کشته شدند.",
        en: "Protests started in Mashhad with economic slogans but quickly spread to 100 cities and turned political. 'Death to the dictator' and slogans rejecting both reformists and conservatives were chanted. The regime suppressed protests by arresting thousands. At least 25 were killed.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترامپ رئیس‌جمهور شد", en: "Trump Inaugurated" },
        description: { fa: "سیاست «آمریکا اول» - تهدید به خروج از برجام", en: "'America First' policy - Threats to exit JCPOA" },
        details: {
          fa: "ترامپ در ژانویه ۲۰۱۷ سوگند یاد کرد و بلافاصله سیاست‌های ضد مهاجرتی و حمایتگرایانه را پیش گرفت. ممنوعیت سفر شهروندان ۷ کشور مسلمان (شامل ایران) اعلام شد. ترامپ بارها برجام را «بدترین توافق تاریخ» خواند و تهدید به خروج کرد.",
          en: "Trump was inaugurated in January 2017 and immediately pursued anti-immigration and protectionist policies. A travel ban on citizens of 7 Muslim countries (including Iran) was announced. Trump repeatedly called the JCPOA the 'worst deal ever' and threatened to withdraw.",
        },
      },
      {
        country: "france",
        title: { fa: "مکرون رئیس‌جمهور فرانسه شد", en: "Macron Elected French President" },
        description: { fa: "جوان‌ترین رئیس‌جمهور فرانسه - شکست احزاب سنتی", en: "Youngest French president - Traditional parties defeated" },
        details: {
          fa: "امانوئل مکرون ۳۹ ساله با حزب نوپای «جمهوری در حرکت» مارین لوپن راست افراطی را شکست داد. او جوان‌ترین رئیس‌جمهور فرانسه شد و وعده اصلاحات اقتصادی و تقویت اتحادیه اروپا داد. پیروزی او شکست سنگینی برای احزاب سنتی چپ و راست بود.",
          en: "39-year-old Emmanuel Macron and his new 'En Marche' party defeated far-right Marine Le Pen. He became France's youngest president, promising economic reforms and strengthening the EU. His victory was a heavy defeat for traditional left and right parties.",
        },
      },
      {
        country: "china",
        title: { fa: "ابتکار کمربند و جاده", en: "Belt and Road Initiative" },
        description: { fa: "بزرگترین پروژه زیرساختی تاریخ - نفوذ جهانی چین", en: "Largest infrastructure project in history - China's global influence" },
        details: {
          fa: "شی جین‌پینگ اولین مجمع کمربند و جاده را در پکن برگزار کرد. این پروژه عظیم شامل سرمایه‌گذاری تریلیون دلاری در زیرساخت‌های ۶۰+ کشور بود. منتقدان آن را «دیپلماسی تله بدهی» و ابزار گسترش نفوذ ژئوپلیتیکی چین خواندند.",
          en: "Xi Jinping hosted the first Belt and Road Forum in Beijing. This massive project involved trillion-dollar investments in infrastructure across 60+ countries. Critics called it 'debt-trap diplomacy' and a tool for expanding China's geopolitical influence.",
        },
      },
      {
        country: "uk",
        title: { fa: "ترزا می و آغاز برگزیت", en: "Theresa May and Brexit Trigger" },
        description: { fa: "ماده ۵۰ فعال شد و انتخابات زودهنگام برگزار شد", en: "Article 50 triggered and snap election held" },
        details: {
          fa: "ترزا می ماده ۵۰ را فعال کرد و انتخابات زودهنگام برگزار کرد اما اکثریت خود را از دست داد. حمله تروریستی منچستر ۲۲ نفر را کشت.",
          en: "Theresa May triggered Article 50 and called a snap election but lost her majority. The Manchester terror attack killed 22 people.",
        },
      },
      {
        country: "germany",
        title: { fa: "مرکل برای چهارمین بار پیروز شد", en: "Merkel Wins Fourth Term" },
        description: { fa: "پیروزی مرکل اما AfD وارد پارلمان شد", en: "Merkel wins but AfD enters parliament" },
        details: {
          fa: "مرکل برای چهارمین بار صدراعظم شد اما حزب راست‌گرای AfD برای اولین بار وارد پارلمان فدرال شد. تشکیل دولت ائتلافی ماه‌ها طول کشید.",
          en: "Merkel became chancellor for the fourth time but the far-right AfD entered the federal parliament for the first time. Coalition formation took months.",
        },
      },
      {
        country: "russia",
        title: { fa: "صدمین سالگرد انقلاب و پوتین قوی‌تر", en: "Revolution Centenary and Stronger Putin" },
        description: { fa: "روسیه صدمین سالگرد انقلاب اکتبر را بدون جشن برگزار کرد", en: "Russia marked October Revolution centenary without celebration" },
        details: {
          fa: "صدمین سالگرد انقلاب اکتبر بدون جشن رسمی گذشت. پوتین قدرت خود را تثبیت کرد و روسیه در سوریه دستاوردهای نظامی بزرگی به دست آورد.",
          en: "The October Revolution centenary passed without official celebration. Putin consolidated power and Russia achieved major military gains in Syria.",
        },
      }],
  },
  {
    year: 2018,
    shamsiYear: "۱۳۹۷",
    iran: {
      title: { fa: "خروج ترامپ از برجام - فشار حداکثری", en: "Trump Exits JCPOA - Maximum Pressure" },
      description: { fa: "بازگشت تحریم‌ها - سقوط ریال - فشار اقتصادی بی‌سابقه", en: "Sanctions return - Rial crashes - Unprecedented economic pressure" },
      details: {
        fa: "ترامپ در ۸ مه ۲۰۱۸ از برجام خارج شد و سخت‌ترین تحریم‌های تاریخ را علیه ایران اعمال کرد. ریال از ۳,۵۰۰ به ۳۰۰,۰۰۰ تومان در برابر دلار سقوط کرد. صادرات نفت ایران از ۲.۵ میلیون بشکه به زیر ۵۰۰ هزار رسید. تورم به ۵۰٪ و فقر افزایش یافت. اقتصاد ایران وارد بحران شدید شد.",
        en: "Trump withdrew from the JCPOA on May 8, 2018 and imposed the harshest sanctions in history on Iran. The Rial crashed from 3,500 to 300,000 per dollar. Iran's oil exports dropped from 2.5 million barrels to under 500,000. Inflation hit 50% and poverty surged. Iran's economy entered severe crisis.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترامپ: «بدترین توافق تاریخ»", en: "Trump: 'Worst Deal in History'" },
        description: { fa: "خروج از برجام و اعمال تحریم‌های فلج‌کننده", en: "Exits JCPOA and imposes crippling sanctions" },
        details: {
          fa: "ترامپ در ۸ مه ۲۰۱۸ از برجام خارج شد و تمام تحریم‌ها را بازگرداند. سیاست «فشار حداکثری» اقتصاد ایران را فلج کرد و ارزش ریال سقوط کرد. این تصمیم یک‌جانبه آمریکا متحدان اروپایی را نیز ناامید کرد و دیپلماسی هسته‌ای را به بن‌بست کشاند.",
          en: "Trump withdrew from the JCPOA on May 8, 2018 and reimposed all sanctions. The 'maximum pressure' campaign crippled Iran's economy and the rial crashed. This unilateral US decision frustrated European allies and drove nuclear diplomacy into a deadlock.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Donald_Trump_official_portrait.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "بحران برگزیت و مسمومیت اسکریپال", en: "Brexit Crisis and Skripal Poisoning" },
        description: { fa: "مسمومیت جاسوس روس و بن‌بست برگزیت", en: "Russian spy poisoning and Brexit deadlock" },
        details: {
          fa: "مسمومیت سرگئی اسکریپال جاسوس سابق روس در سالزبری بحران دیپلماتیک بزرگی ایجاد کرد. مذاکرات برگزیت در بن‌بست قرار گرفت و کابینه می شکاف خورد.",
          en: "The poisoning of former Russian spy Sergei Skripal in Salisbury created a major diplomatic crisis. Brexit negotiations reached deadlock and May's cabinet fractured.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران ائتلاف و مهاجرت", en: "Coalition Crisis and Migration" },
        description: { fa: "دولت مرکل بر سر سیاست مهاجرت دچار بحران شد", en: "Merkel's government hit by migration policy crisis" },
        details: {
          fa: "اختلاف بر سر سیاست مهاجرت تقریباً دولت ائتلافی مرکل را سرنگون کرد. مرکل اعلام کرد این آخرین دوره صدراعظمی اوست.",
          en: "Disputes over migration policy nearly toppled Merkel's coalition government. Merkel announced this would be her last term as chancellor.",
        },
      },
      {
        country: "france",
        title: { fa: "جنبش جلیقه‌زردها", en: "Yellow Vests Movement" },
        description: { fa: "اعتراضات گسترده علیه سیاست‌های اقتصادی ماکرون", en: "Mass protests against Macron's economic policies" },
        details: {
          fa: "افزایش مالیات سوخت اعتراضات جلیقه‌زردها را در سراسر فرانسه برانگیخت. خشونت‌ها شدید بود و ماکرون مجبور به عقب‌نشینی و اعطای امتیازات شد.",
          en: "Fuel tax increases triggered the Yellow Vests protests across France. Violence was severe and Macron was forced to retreat and grant concessions.",
        },
      },
      {
        country: "russia",
        title: { fa: "جام جهانی و بازنشستگی اجباری", en: "World Cup and Pension Reform" },
        description: { fa: "روسیه میزبان جام جهانی شد اما اصلاح بازنشستگی خشم برانگیخت", en: "Russia hosted World Cup but pension reform angered public" },
        details: {
          fa: "روسیه جام جهانی فوتبال را با موفقیت برگزار کرد. اما اصلاح سن بازنشستگی خشم عمومی گسترده‌ای برانگیخت و محبوبیت پوتین کاهش یافت.",
          en: "Russia successfully hosted the FIFA World Cup. But pension age reform provoked widespread public anger and Putin's popularity declined.",
        },
      },
      {
        country: "china",
        title: { fa: "جنگ تجاری چین و آمریکا", en: "US-China Trade War" },
        description: { fa: "ترامپ تعرفه‌های سنگین بر کالاهای چینی وضع کرد", en: "Trump imposed heavy tariffs on Chinese goods" },
        details: {
          fa: "ترامپ تعرفه‌های سنگینی بر صدها میلیارد دلار کالای چینی وضع کرد. شی جین‌پینگ ریاست مادام‌العمر را تضمین کرد و محدودیت دو دوره حذف شد.",
          en: "Trump imposed heavy tariffs on hundreds of billions of dollars of Chinese goods. Xi Jinping secured lifelong presidency as term limits were removed.",
        },
      }],
  },
  {
    year: 2019,
    shamsiYear: "۱۳۹۸",
    iran: {
      title: { fa: "اعتراضات آبان ۹۸ - قطع اینترنت", en: "November 2019 Protests - Internet Shutdown" },
      description: { fa: "اعتراض به گرانی بنزین - سرکوب خونین - ۱۵۰۰+ کشته", en: "Fuel price protests - Bloody crackdown - 1,500+ killed" },
      details: {
        fa: "در ۲۴ آبان ۱۳۹۸ دولت ناگهان قیمت بنزین را ۳ برابر کرد. اعتراضات گسترده در ۱۰۰+ شهر آغاز شد. حکومت اینترنت را به مدت یک هفته کاملاً قطع کرد. بر اساس گزارش رویترز بیش از ۱۵۰۰ نفر کشته شدند. سازمان عفو بین‌الملل ۳۰۴ کشته تأیید کرد. هزاران نفر بازداشت شدند. خامنه‌ای معترضان را «اشرار» خواند.",
        en: "On November 15, 2019, the government suddenly tripled fuel prices. Mass protests erupted in 100+ cities. The regime completely shut down the internet for a week. Reuters reported over 1,500 killed. Amnesty International confirmed 304 deaths. Thousands were arrested. Khamenei called protesters 'thugs.'",
      },
    },
    world: [
      {
        country: "uk",
        title: { fa: "بحران برگزیت - بن‌بست سیاسی", en: "Brexit Crisis - Political Deadlock" },
        description: { fa: "بوریس جانسون نخست‌وزیر شد - «برگزیت را انجام می‌دهیم»", en: "Boris Johnson becomes PM - 'Get Brexit Done'" },
        details: {
          fa: "سه بار رأی‌گیری در پارلمان بر سر توافق ترزا می شکست خورد. بوریس جانسون پارلمان را تعلیق کرد که دادگاه عالی آن را غیرقانونی اعلام کرد. در نهایت توافق خروج تصویب شد و بریتانیا در ژانویه ۲۰۲۰ رسماً از اتحادیه اروپا خارج شد.",
          en: "Three failed votes on Theresa May's deal paralyzed parliament. Boris Johnson prorogued parliament, which the Supreme Court ruled unlawful. The withdrawal agreement was finally passed and Britain officially left the EU in January 2020.",
        },
      },
      {
        country: "usa",
        title: { fa: "استیضاح اول ترامپ", en: "First Trump Impeachment" },
        description: { fa: "مجلس نمایندگان ترامپ را به دلیل فشار بر اوکراین استیضاح کرد", en: "House impeached Trump over Ukraine pressure" },
        details: {
          fa: "مجلس نمایندگان ترامپ را به اتهام فشار بر اوکراین برای تحقیق درباره بایدن استیضاح کرد. سنا او را تبرئه کرد.",
          en: "The House impeached Trump for pressuring Ukraine to investigate Biden. The Senate acquitted him.",
        },
      },
      {
        country: "germany",
        title: { fa: "AKK جانشین مرکل در حزب", en: "AKK Succeeds Merkel in Party" },
        description: { fa: "آنه‌گرت کرمپ-کارنباوئر رهبر CDU شد", en: "Annegret Kramp-Karrenbauer became CDU leader" },
        details: {
          fa: "آنه‌گرت کرمپ-کارنباوئر رهبری CDU را از مرکل تحویل گرفت. اقتصاد آلمان کند شد و صنعت خودروسازی با چالش تحول الکتریکی مواجه شد.",
          en: "Annegret Kramp-Karrenbauer took over CDU leadership from Merkel. The German economy slowed and the auto industry faced the electric transition challenge.",
        },
      },
      {
        country: "france",
        title: { fa: "آتش‌سوزی نوتردام", en: "Notre-Dame Fire" },
        description: { fa: "کلیسای نوتردام پاریس دچار آتش‌سوزی شد", en: "Notre-Dame Cathedral caught fire" },
        details: {
          fa: "آتش‌سوزی مهیب کلیسای نوتردام مناره و سقف آن را ویران کرد. ماکرون قول بازسازی ظرف پنج سال داد و میلیاردها یورو کمک جمع‌آوری شد.",
          en: "A devastating fire destroyed Notre-Dame's spire and roof. Macron promised reconstruction within five years and billions of euros in donations were raised.",
        },
      },
      {
        country: "russia",
        title: { fa: "اعتراضات مسکو و سرکوب مخالفان", en: "Moscow Protests and Opposition Crackdown" },
        description: { fa: "اعتراضات گسترده در مسکو سرکوب شد", en: "Mass protests in Moscow suppressed" },
        details: {
          fa: "هزاران نفر در مسکو علیه رد صلاحیت نامزدهای مخالف در انتخابات محلی تظاهرات کردند. پلیس صدها نفر را بازداشت کرد.",
          en: "Thousands protested in Moscow against the disqualification of opposition candidates in local elections. Police detained hundreds.",
        },
      },
      {
        country: "china",
        title: { fa: "اعتراضات هنگ‌کنگ و سرکوب اویغورها", en: "Hong Kong Protests and Uyghur Repression" },
        description: { fa: "اعتراضات میلیونی در هنگ‌کنگ و افشای اردوگاه‌های شین‌جیانگ", en: "Million-strong Hong Kong protests and Xinjiang camp revelations" },
        details: {
          fa: "میلیون‌ها نفر در هنگ‌کنگ علیه لایحه استرداد تظاهرات کردند. اسناد محرمانه اردوگاه‌های بازداشت اویغورها در شین‌جیانگ افشا شد.",
          en: "Millions protested in Hong Kong against the extradition bill. Classified documents revealed Uyghur detention camps in Xinjiang.",
        },
      }],
  },
  {
    year: 2020,
    shamsiYear: "۱۳۹۸",
    iran: {
      title: { fa: "ترور سلیمانی - سقوط هواپیمای اوکراینی - کرونا", en: "Soleimani Killed - Ukraine Plane Crash - COVID" },
      description: { fa: "سه بحران پیاپی ایران را تکان داد", en: "Three consecutive crises shake Iran" },
      details: {
        fa: "۱۳ دی: ترامپ دستور ترور قاسم سلیمانی (فرمانده سپاه قدس) را در بغداد داد. ایران پاسخ موشکی به پایگاه عین‌الاسد زد. ۱۸ دی: سپاه «به اشتباه» هواپیمای اوکراینی PS752 را ساقط کرد (۱۷۶ کشته). حکومت ۳ روز دروغ گفت. سپس کرونا ایران را شدیداً درگیر کرد. قم کانون اولیه بود. حکومت آمار واقعی را پنهان کرد.",
        en: "Jan 3: Trump ordered the assassination of Qasem Soleimani (Quds Force commander) in Baghdad. Iran responded with missiles at Ain al-Asad base. Jan 8: IRGC 'mistakenly' shot down Ukraine Airlines PS752 (176 killed). The regime lied for 3 days. Then COVID severely hit Iran. Qom was the initial epicenter. The regime hid the real numbers.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Qasem_Soleimani_with_Ayatollah_Ali_Khamenei.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "پاندمی کووید-۱۹ - قرنطینه جهانی", en: "COVID-19 Pandemic - Global Lockdown" },
        description: { fa: "۷+ میلیون مرگ رسمی - اقتصاد جهان فلج شد", en: "7+ million official deaths - World economy paralyzed" },
        details: {
          fa: "ویروس SARS-CoV-2 از ووهان چین در دسامبر ۲۰۱۹ شیوع یافت و به پاندمی جهانی تبدیل شد. قرنطینه‌های سراسری، بسته شدن مرزها، و بحران اقتصادی جهانی. بیش از ۷ میلیون مرگ رسمی (تخمین واقعی: ۱۵-۲۵ میلیون). واکسن‌ها در رکورد زمانی توسعه یافتند.",
          en: "The SARS-CoV-2 virus spread from Wuhan, China in December 2019 and became a global pandemic. Worldwide lockdowns, border closures, and global economic crisis. Over 7 million official deaths (real estimate: 15-25 million). Vaccines were developed in record time.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/SARS-CoV-2_scanning_electron_microscope_image.jpg&width=200",
      },
      {
        country: "usa",
        title: { fa: "کووید، فلوید و انتخابات بایدن", en: "COVID, Floyd and Biden Election" },
        description: { fa: "پاندمی، اعتراضات نژادی و پیروزی بایدن", en: "Pandemic, racial protests and Biden victory" },
        details: {
          fa: "کووید-۱۹ آمریکا را فلج کرد و بیش از ۳۰۰ هزار نفر کشته شد. قتل جورج فلوید اعتراضات گسترده‌ای برانگیخت. بایدن در انتخابات ترامپ را شکست داد.",
          en: "COVID-19 paralyzed America killing over 300,000. George Floyd's murder sparked massive protests. Biden defeated Trump in the election.",
        },
      },
      {
        country: "uk",
        title: { fa: "برگزیت نهایی و کووید", en: "Final Brexit and COVID" },
        description: { fa: "بریتانیا از اتحادیه اروپا خارج شد و کووید ضربه زد", en: "Britain left EU and COVID struck" },
        details: {
          fa: "بریتانیا رسماً از اتحادیه اروپا خارج شد. کووید-۱۹ بیش از ۷۰ هزار نفر را کشت و جانسون خود به بیمارستان منتقل شد.",
          en: "Britain officially left the EU. COVID-19 killed over 70,000 and Johnson himself was hospitalized.",
        },
      },
      {
        country: "germany",
        title: { fa: "مدیریت موفق کووید توسط مرکل", en: "Merkel's Successful COVID Management" },
        description: { fa: "آلمان با مدیریت مرکل از بحران کووید بهتر عبور کرد", en: "Germany managed COVID crisis better under Merkel" },
        details: {
          fa: "آلمان در مقایسه با همسایگان اروپایی بحران کووید را بهتر مدیریت کرد. مرکل با ارتباط علمی شفاف اعتماد عمومی را حفظ کرد.",
          en: "Germany managed the COVID crisis better than its European neighbors. Merkel maintained public trust through clear scientific communication.",
        },
      },
      {
        country: "france",
        title: { fa: "قرنطینه سخت و ترور معلم", en: "Strict Lockdown and Teacher Murder" },
        description: { fa: "فرانسه قرنطینه سخت اعمال کرد و معلمی سر بریده شد", en: "France imposed strict lockdown and teacher beheaded" },
        details: {
          fa: "فرانسه از سخت‌ترین قرنطینه‌های اروپا را اعمال کرد. ساموئل پتی معلم به دلیل نمایش کاریکاتور پیامبر سر بریده شد و بحث لائیسیته شدت گرفت.",
          en: "France imposed one of Europe's strictest lockdowns. Teacher Samuel Paty was beheaded for showing prophet cartoons, intensifying the laicite debate.",
        },
      },
      {
        country: "russia",
        title: { fa: "مسمومیت ناوالنی و اصلاح قانون اساسی", en: "Navalny Poisoning and Constitutional Reform" },
        description: { fa: "ناوالنی مسموم شد و پوتین قانون اساسی را تغییر داد", en: "Navalny poisoned and Putin changed constitution" },
        details: {
          fa: "الکسی ناوالنی رهبر مخالفان با نوویچوک مسموم شد. پوتین قانون اساسی را اصلاح کرد تا بتواند تا ۲۰۳۶ در قدرت بماند.",
          en: "Opposition leader Alexei Navalny was poisoned with Novichok. Putin reformed the constitution to potentially stay in power until 2036.",
        },
      },
      {
        country: "china",
        title: { fa: "شیوع کووید از ووهان", en: "COVID Outbreak from Wuhan" },
        description: { fa: "ویروس کرونا از ووهان جهان‌گیر شد", en: "Coronavirus pandemic spread from Wuhan" },
        details: {
          fa: "ویروس کرونا از ووهان شروع شد و به پاندمی جهانی تبدیل شد. چین قرنطینه شدید اعمال کرد و سپس بهبود سریع اقتصادی را تجربه کرد.",
          en: "The coronavirus started in Wuhan and became a global pandemic. China imposed severe lockdowns and then experienced rapid economic recovery.",
        },
      }],
  },
  {
    year: 2021,
    shamsiYear: "۱۴۰۰",
    iran: {
      title: { fa: "ابراهیم رئیسی رئیس‌جمهور شد", en: "Ebrahim Raisi Elected President" },
      description: { fa: "انتخابات مهندسی‌شده - کمترین مشارکت تاریخ - تندروها همه قوا را گرفتند", en: "Engineered election - Lowest turnout ever - Hardliners control all branches" },
      details: {
        fa: "شورای نگهبان تمام رقبای جدی رئیسی را رد صلاحیت کرد. مشارکت به ۴۸.۸ درصد (کمترین تاریخ جمهوری اسلامی) سقوط کرد. رئیسی با سوابق حقوق بشری مناقشه‌برانگیز (عضویت در هیئت مرگ ۱۳۶۷) رئیس‌جمهور شد. تندروها قوه مجریه، مقننه و قضاییه را در دست گرفتند.",
        en: "The Guardian Council disqualified all serious rivals to Raisi. Turnout fell to 48.8% (lowest in Islamic Republic history). Raisi, with controversial human rights record (membership in 1988 death committee), became president. Hardliners took control of executive, legislative, and judicial branches.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "حمله به کنگره - بایدن رئیس‌جمهور شد", en: "Capitol Attack - Biden Becomes President" },
        description: { fa: "هواداران ترامپ به کنگره حمله کردند - بایدن سوگند یاد کرد", en: "Trump supporters storm Capitol - Biden inaugurated" },
        details: {
          fa: "در ۶ ژانویه ۲۰۲۱ هواداران ترامپ به ساختمان کنگره آمریکا حمله کردند تا تأیید پیروزی بایدن را متوقف کنند. ۵ نفر کشته شدند و دموکراسی آمریکا تکان خورد. ترامپ برای دومین بار استیضاح شد. بایدن در ۲۰ ژانویه سوگند یاد کرد.",
          en: "On January 6, 2021, Trump supporters stormed the US Capitol to stop certification of Biden's victory. 5 people died and American democracy was shaken. Trump was impeached for a second time. Biden was inaugurated on January 20.",
        },
      },
      {
        country: "world",
        title: { fa: "خروج از افغانستان - بازگشت طالبان", en: "Afghanistan Withdrawal - Taliban Returns" },
        description: { fa: "سقوط کابل - فرار هرج‌ومرج‌آمیز - پایان ۲۰ سال جنگ", en: "Fall of Kabul - Chaotic evacuation - End of 20-year war" },
        details: {
          fa: "آمریکا و متحدان پس از ۲۰ سال افغانستان را ترک کردند و طالبان در عرض چند هفته کابل را تصرف کرد. صحنه‌های فرار هرج‌ومرج‌آمیز از فرودگاه کابل جهان را تکان داد. ۱۳ سرباز آمریکایی در حمله انتحاری کشته شدند. خروج آمریکا بزرگترین شکست سیاست خارجی آن از ویتنام بود.",
          en: "The US and allies withdrew after 20 years and the Taliban captured Kabul within weeks. Chaotic evacuation scenes at Kabul airport shocked the world. 13 US soldiers were killed in a suicide bombing. The US withdrawal was its biggest foreign policy failure since Vietnam.",
        },
      },
      {
        country: "china",
        title: { fa: "سرکوب فناوری و بحران اورگرند", en: "Tech Crackdown & Evergrande Crisis" },
        description: { fa: "شی علیه شرکت‌های فناوری - بحران بدهی مسکن", en: "Xi cracks down on tech firms - Housing debt crisis" },
        details: {
          fa: "دولت چین سرکوب گسترده‌ای علیه شرکت‌های فناوری بزرگ مانند علی‌بابا و تنسنت آغاز کرد. جک ما ماه‌ها ناپدید شد. همزمان بحران بدهی شرکت اورگرند (بزرگترین توسعه‌دهنده مسکن) بازارهای جهانی را تکان داد و ضعف مدل رشد اقتصادی چین را نشان داد.",
          en: "China's government launched a massive crackdown on major tech companies like Alibaba and Tencent. Jack Ma disappeared for months. Meanwhile, the Evergrande debt crisis (largest property developer) shook global markets and exposed weaknesses in China's economic growth model.",
        },
      },
      {
        country: "uk",
        title: { fa: "واکسیناسیون سریع و بحران‌های جانسون", en: "Fast Vaccination and Johnson's Crises" },
        description: { fa: "بریتانیا در واکسیناسیون پیشرو بود اما رسوایی پارتی‌گیت آغاز شد", en: "UK led in vaccination but Partygate scandal began" },
        details: {
          fa: "بریتانیا یکی از سریع‌ترین برنامه‌های واکسیناسیون جهان را اجرا کرد. اما افشای مهمانی‌های داونینگ استریت در دوران قرنطینه رسوایی پارتی‌گیت را آغاز کرد.",
          en: "Britain ran one of the world's fastest vaccination programs. But revelations of Downing Street parties during lockdown started the Partygate scandal.",
        },
      },
      {
        country: "germany",
        title: { fa: "پایان دوران مرکل و صدراعظم شولتس", en: "End of Merkel Era and Chancellor Scholz" },
        description: { fa: "مرکل پس از ۱۶ سال رفت و شولتس جانشین شد", en: "Merkel left after 16 years and Scholz succeeded" },
        details: {
          fa: "آنگلا مرکل پس از ۱۶ سال صدراعظمی بازنشسته شد. اولاف شولتس از حزب سوسیال‌دموکرات با ائتلاف سه‌حزبی صدراعظم شد.",
          en: "Angela Merkel retired after 16 years as chancellor. Olaf Scholz from the Social Democrats became chancellor with a three-party coalition.",
        },
      },
      {
        country: "france",
        title: { fa: "تنش‌های ماکرون با AUKUS و انتخابات", en: "Macron's AUKUS Tensions and Elections" },
        description: { fa: "بحران زیردریایی با آمریکا و استرالیا", en: "Submarine crisis with US and Australia" },
        details: {
          fa: "فرانسه از پیمان AUKUS خشمگین شد زیرا استرالیا قرارداد زیردریایی فرانسوی را لغو کرد. ماکرون سفیر فرانسه را از واشنگتن فراخواند.",
          en: "France was furious over the AUKUS pact as Australia cancelled the French submarine deal. Macron recalled France's ambassador from Washington.",
        },
      },
      {
        country: "russia",
        title: { fa: "زندانی شدن ناوالنی و تهدید اوکراین", en: "Navalny Imprisoned and Ukraine Threat" },
        description: { fa: "ناوالنی زندانی شد و روسیه نیرو در مرز اوکراین جمع کرد", en: "Navalny jailed and Russia amassed troops on Ukraine border" },
        details: {
          fa: "ناوالنی پس از بازگشت به روسیه دستگیر و زندانی شد. روسیه نیروهای نظامی عظیمی در مرز اوکراین جمع کرد و تنش‌ها افزایش یافت.",
          en: "Navalny was arrested and imprisoned after returning to Russia. Russia amassed massive military forces on Ukraine's border, escalating tensions.",
        },
      }],
  },
  {
    year: 2022,
    shamsiYear: "۱۴۰۱",
    yearInfo: {
      fa: "سال زن، زندگی، آزادی. مرگ مهسا امینی بزرگترین چالش جمهوری اسلامی را رقم زد. روسیه به اوکراین حمله کرد.",
      en: "Year of Woman, Life, Freedom. Mahsa Amini's death creates the biggest challenge to the Islamic Republic. Russia invades Ukraine.",
    },
    iran: {
      title: { fa: "جنبش مهسا (ژینا) امینی - زن، زندگی، آزادی", en: "Mahsa (Zhina) Amini Movement - Woman, Life, Freedom" },
      description: { fa: "مرگ مهسا در بازداشت گشت ارشاد - اعتراضات سراسری ۱۶۰+ شهر", en: "Mahsa dies in morality police custody - Protests in 160+ cities" },
      details: {
        fa: "مهسا (ژینا) امینی ۲۲ ساله کُرد در ۲۵ شهریور ۱۴۰۱ (۱۶ سپتامبر ۲۰۲۲) پس از بازداشت توسط گشت ارشاد به دلیل «حجاب نامناسب» درگذشت. اعتراضات از کردستان آغاز شد و به بیش از ۱۶۰ شهر و ۱۳۱ دانشگاه گسترش یافت. شعار «زن، زندگی، آزادی» بازتاب جهانی پیدا کرد. در جریان مقابله با اعتراضات، بیش از ۲۰ هزار نفر بازداشت شدند و بر اساس گزارش‌ها بیش از ۵۰۰ نفر جان خود را از دست دادند.",
        en: "Mahsa (Zhina) Amini, a 22-year-old Kurdish woman, died on September 16, 2022 after being detained by morality police for 'improper hijab.' Protests started in Kurdistan and spread to 160+ cities and 131 universities. The slogan 'Woman, Life, Freedom' (Jin, Jiyan, Azadi) resonated globally. In the ensuing crackdown, over 20,000 were detained and according to reports over 500 people lost their lives.",
      },
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mahsa_Amini%2C_during_a_visit_to_Istanbul_in_2022.jpg&width=200",
    },
    world: [
      {
        country: "world",
        title: { fa: "حمله روسیه به اوکراین", en: "Russia Invades Ukraine" },
        description: { fa: "پوتین دستور حمله تمام‌عیار داد - بزرگترین جنگ اروپا از ۱۹۴۵", en: "Putin orders full-scale invasion - Largest European war since 1945" },
        details: {
          fa: "در ۲۴ فوریه ۲۰۲۲ روسیه به اوکراین حمله کرد. تلاش برای تصرف کی‌یف شکست خورد. جنگ فرسایشی آغاز شد. غرب تحریم‌های شدید علیه روسیه اعمال کرد و سلاح به اوکراین فرستاد. بحران انرژی و غذایی جهانی ایجاد شد. ایران پهپادهای شاهد را به روسیه فروخت.",
          en: "On February 24, 2022, Russia invaded Ukraine. The attempt to capture Kyiv failed. A war of attrition began. The West imposed severe sanctions on Russia and sent weapons to Ukraine. Global energy and food crises erupted. Iran sold Shahed drones to Russia.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Mykolaiv_after_Russian_shelling%2C_2022-07-31_%2802%29.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "درگذشت ملکه الیزابت دوم", en: "Death of Queen Elizabeth II" },
        description: { fa: "پایان ۷۰ سال سلطنت - چارلز سوم پادشاه شد", en: "End of 70-year reign - Charles III becomes King" },
        details: {
          fa: "ملکه الیزابت دوم در ۸ سپتامبر ۲۰۲۲ در سن ۹۶ سالگی درگذشت و ۷۰ سال سلطنت طولانی‌ترین دوره حکومت در تاریخ بریتانیا به پایان رسید. چارلز سوم به عنوان پادشاه جدید تاج‌گذاری کرد. مراسم تشییع ملکه با شرکت رهبران جهان از بزرگترین رویدادهای تلویزیونی تاریخ بود.",
          en: "Queen Elizabeth II died on September 8, 2022 at age 96, ending the longest reign in British history at 70 years. Charles III was crowned as the new King. The Queen's funeral, attended by world leaders, was one of the most-watched television events in history.",
        },
      },
      {
        country: "usa",
        title: { fa: "حمایت از اوکراین و تورم", en: "Ukraine Support and Inflation" },
        description: { fa: "آمریکا میلیاردها دلار به اوکراین کمک کرد", en: "US sent billions in aid to Ukraine" },
        details: {
          fa: "آمریکا بیش از ۴۰ میلیارد دلار کمک نظامی و اقتصادی به اوکراین فرستاد. تورم به بالاترین سطح ۴۰ ساله رسید و فدرال رزرو نرخ بهره را به شدت افزایش داد.",
          en: "The US sent over $40 billion in military and economic aid to Ukraine. Inflation reached a 40-year high and the Fed aggressively raised interest rates.",
        },
      },
      {
        country: "germany",
        title: { fa: "چرخش تاریخی سیاست دفاعی آلمان", en: "Germany's Historic Defense Policy Shift" },
        description: { fa: "شولتس ۱۰۰ میلیارد یورو بودجه دفاعی اعلام کرد", en: "Scholz announced 100 billion euro defense fund" },
        details: {
          fa: "شولتس «نقطه عطف» (Zeitenwende) اعلام کرد و ۱۰۰ میلیارد یورو بودجه ویژه دفاعی تصویب شد. آلمان تلاش کرد وابستگی به گاز روسیه را کاهش دهد.",
          en: "Scholz declared a 'Zeitenwende' (turning point) and a 100 billion euro special defense fund was approved. Germany struggled to reduce dependence on Russian gas.",
        },
      },
      {
        country: "france",
        title: { fa: "انتخاب مجدد ماکرون", en: "Macron Re-elected" },
        description: { fa: "ماکرون در برابر لوپن دوباره پیروز شد", en: "Macron defeated Le Pen again" },
        details: {
          fa: "ماکرون در دور دوم مارین لوپن را شکست داد اما فاصله کمتر از ۲۰۱۷ بود. در انتخابات پارلمانی اکثریت خود را از دست داد.",
          en: "Macron defeated Marine Le Pen in the runoff but the margin was smaller than in 2017. He lost his majority in parliamentary elections.",
        },
      },
      {
        country: "russia",
        title: { fa: "حمله روسیه به اوکراین", en: "Russia Invades Ukraine" },
        description: { fa: "پوتین تهاجم تمام‌عیار به اوکراین را آغاز کرد", en: "Putin launched full-scale invasion of Ukraine" },
        details: {
          fa: "روسیه در ۲۴ فوریه تهاجم تمام‌عیار به اوکراین را آغاز کرد. تحریم‌های بی‌سابقه غربی اعمال شد و جنگ بزرگ‌ترین درگیری اروپا از جنگ دوم بود.",
          en: "Russia launched a full-scale invasion of Ukraine on February 24. Unprecedented Western sanctions were imposed and the war became Europe's largest conflict since WWII.",
        },
      },
      {
        country: "china",
        title: { fa: "دوره سوم شی و سیاست کووید صفر", en: "Xi's Third Term and Zero-COVID" },
        description: { fa: "شی برای سومین بار انتخاب شد و اعتراضات کووید رخ داد", en: "Xi elected for third term and COVID protests erupted" },
        details: {
          fa: "شی جین‌پینگ در بیستمین کنگره حزب برای دوره سوم بی‌سابقه انتخاب شد. اعتراضات «کاغذ سفید» علیه سیاست کووید صفر دولت را مجبور به عقب‌نشینی کرد.",
          en: "Xi Jinping was elected for an unprecedented third term at the 20th Party Congress. 'White paper' protests against zero-COVID policy forced the government to retreat.",
        },
      }],
  },
  {
    year: 2023,
    shamsiYear: "۱۴۰۲",
    iran: {
      title: { fa: "تداوم بحران پس از اعتراضات - اعدام‌ها", en: "Post-Protest Crisis Continues - Executions" },
      description: { fa: "اعدام محسن شکاری و مجیدرضا رهنورد - تشدید قوانین حجاب", en: "Execution of Shekari & Rahnavard - Stricter hijab enforcement" },
      details: {
        fa: "پس از جنبش ژینا، فضای امنیتی تشدید شد. محسن شکاری و مجیدرضا رهنورد در ارتباط با اعتراضات اعدام شدند. دوربین‌های هوشمند برای نظارت بر رعایت حجاب نصب شد. تحریم‌های جدید غربی علیه ایران اعمال شد. همکاری نظامی ایران با روسیه از جمله فروش پهپاد شاهد، انزوای بین‌المللی ایران را افزایش داد.",
        en: "After the Zhina movement, the security atmosphere intensified. Mohsen Shekari and Majidreza Rahnavard were executed in connection with the protests. Smart cameras were installed to monitor hijab compliance. New Western sanctions were imposed on Iran. Iran's military cooperation with Russia, including Shahed drone sales, increased its international isolation.",
      },
    },
    world: [
      {
        country: "world",
        title: { fa: "جنگ اسرائیل و حماس - ۷ اکتبر", en: "Israel-Hamas War - October 7" },
        description: { fa: "حمله حماس به اسرائیل - حمله اسرائیل به غزه - ۴۰,۰۰۰+ کشته", en: "Hamas attacks Israel - Israel attacks Gaza - 40,000+ killed" },
        details: {
          fa: "در ۷ اکتبر ۲۰۲۳ حماس حمله غافلگیرانه به اسرائیل کرد و ۱۲۰۰ نفر را کشت و ۲۴۰ نفر را گروگان گرفت. اسرائیل بمباران گسترده و حمله زمینی به غزه را آغاز کرد. بیش از ۴۰,۰۰۰ فلسطینی کشته شدند. بحران انسانی شدید در غزه. ایران از «محور مقاومت» حمایت کرد.",
          en: "On October 7, 2023, Hamas launched a surprise attack on Israel, killing 1,200 and taking 240 hostages. Israel began massive bombing and ground invasion of Gaza. Over 40,000 Palestinians were killed. Severe humanitarian crisis in Gaza. Iran supported the 'Axis of Resistance.'",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Damage_in_Gaza_Strip_during_the_October_2023_-_15.jpg&width=200",
      },
      {
        country: "usa",
        title: { fa: "کیفرخواست ترامپ و هوش مصنوعی", en: "Trump Indictments and AI Boom" },
        description: { fa: "ترامپ چندین بار کیفرخواست شد و ChatGPT جهان را تغییر داد", en: "Trump indicted multiple times and ChatGPT changed the world" },
        details: {
          fa: "ترامپ برای اولین بار در تاریخ آمریکا به عنوان رئیس‌جمهور سابق کیفرخواست شد. انقلاب هوش مصنوعی با ChatGPT صنایع را متحول کرد.",
          en: "Trump became the first former US president to be indicted. The AI revolution with ChatGPT transformed industries.",
        },
      },
      {
        country: "uk",
        title: { fa: "سوناک و بحران اقتصادی", en: "Sunak and Economic Crisis" },
        description: { fa: "ریشی سوناک با چالش‌های اقتصادی و مهاجرت دست و پنجه نرم کرد", en: "Rishi Sunak grappled with economic and migration challenges" },
        details: {
          fa: "سوناک تلاش کرد تورم را مهار کند و طرح انتقال پناهجویان به رواندا را پیش برد. اعتصابات گسترده بخش عمومی بریتانیا را فلج کرد.",
          en: "Sunak tried to curb inflation and pushed the Rwanda asylum seeker plan. Widespread public sector strikes paralyzed Britain.",
        },
      },
      {
        country: "germany",
        title: { fa: "بحران ائتلاف شولتس", en: "Scholz Coalition Crisis" },
        description: { fa: "ائتلاف سه‌حزبی با اختلافات شدید مواجه شد", en: "Three-party coalition faced severe disagreements" },
        details: {
          fa: "ائتلاف شولتس با اختلافات عمیق بر سر بودجه و سیاست انرژی دست و پنجه نرم کرد. اقتصاد آلمان وارد رکود شد و مهاجرت مسئله داغ سیاسی شد.",
          en: "Scholz's coalition struggled with deep disagreements over budget and energy policy. The German economy entered recession and migration became a hot political issue.",
        },
      },
      {
        country: "france",
        title: { fa: "اصلاح بازنشستگی و شورش‌ها", en: "Pension Reform and Riots" },
        description: { fa: "ماکرون سن بازنشستگی را بدون رأی پارلمان بالا برد", en: "Macron raised retirement age without parliamentary vote" },
        details: {
          fa: "ماکرون با استفاده از ماده ۴۹.۳ سن بازنشستگی را از ۶۲ به ۶۴ سال افزایش داد. اعتراضات و شورش‌های گسترده ماه‌ها فرانسه را فلج کرد.",
          en: "Macron used Article 49.3 to raise the retirement age from 62 to 64. Massive protests and riots paralyzed France for months.",
        },
      },
      {
        country: "russia",
        title: { fa: "شورش واگنر و مرگ ناوالنی", en: "Wagner Mutiny" },
        description: { fa: "شورش پریگوژین تهدید بزرگی برای پوتین بود", en: "Prigozhin's mutiny was a major threat to Putin" },
        details: {
          fa: "یوگنی پریگوژین رهبر واگنر شورش کرد و نیروهایش به سمت مسکو حرکت کردند. شورش خاموش شد اما دو ماه بعد پریگوژین در سقوط هواپیما کشته شد.",
          en: "Yevgeny Prigozhin, Wagner leader, mutinied and his forces marched toward Moscow. The mutiny was quelled but two months later Prigozhin died in a plane crash.",
        },
      },
      {
        country: "china",
        title: { fa: "بحران اقتصادی و حذف وزیران", en: "Economic Crisis and Minister Purges" },
        description: { fa: "بحران بخش مسکن و ناپدید شدن مقامات ارشد", en: "Housing sector crisis and disappearance of senior officials" },
        details: {
          fa: "بحران بخش مسکن با ورشکستگی اورگرند ادامه یافت. وزیر دفاع و وزیر خارجه ناپدید و سپس برکنار شدند. شی کمپین ضد فساد را شدت بخشید.",
          en: "The housing sector crisis continued with the Evergrande bankruptcy. The defense and foreign ministers disappeared and were later removed. Xi intensified the anti-corruption campaign.",
        },
      }],
  },
  {
    year: 2024,
    shamsiYear: "۱۴۰۳",
    iran: {
      title: { fa: "سقوط بالگرد رئیسی - انتخاب پزشکیان", en: "Raisi Helicopter Crash - Pezeshkian Elected" },
      description: { fa: "رئیسی در سانحه هوایی کشته شد - انتخابات زودهنگام - پزشکیان رئیس‌جمهور شد", en: "Raisi killed in helicopter crash - Snap election - Pezeshkian becomes president" },
      details: {
        fa: "در ۳۰ اردیبهشت ۱۴۰۳ (۱۹ مه ۲۰۲۴) بالگرد حامل ابراهیم رئیسی، وزیر خارجه امیرعبداللهیان و چند مقام دیگر در آذربایجان شرقی سقوط کرد و همه سرنشینان جان باختند. انتخابات زودهنگام برگزار شد و مسعود پزشکیان با وعده تعامل با جهان رئیس‌جمهور شد. همچنین در این سال تنش نظامی بین ایران و اسرائیل به اوج رسید و دو کشور حملات موشکی و پهپادی متقابل انجام دادند.",
        en: "On May 19, 2024, a helicopter carrying President Ebrahim Raisi, Foreign Minister Amir-Abdollahian, and other officials crashed in East Azerbaijan, killing all aboard. Snap elections were held and Masoud Pezeshkian won the presidency with promises of engagement with the world. Tensions between Iran and Israel also peaked this year, with both countries conducting reciprocal missile and drone strikes.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "انتخاب دوباره ترامپ", en: "Trump Elected Again" },
        description: { fa: "ترامپ هریس را شکست داد - بازگشت به سیاست فشار حداکثری", en: "Trump defeats Harris - Return to maximum pressure policy" },
        details: {
          fa: "ترامپ کامالا هریس را شکست داد و با وعده بازگشت به فشار حداکثری بر ایران و جنگ‌های تعرفه‌ای به کاخ سفید بازگشت. سیاست «آمریکا اول ۲.۰» شامل تقویت تحریم‌ها و کاهش تعهدات بین‌المللی بود. این انتخاب تأثیر عمیقی بر سیاست خاورمیانه و روابط ایران و آمریکا گذاشت.",
          en: "Trump beat Kamala Harris and returned to the White House promising maximum pressure on Iran and tariff wars. His 'America First 2.0' policy included strengthening sanctions and reducing international commitments. This election had profound implications for Middle East policy and US-Iran relations.",
        },
        image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Donald_Trump_official_portrait.jpg&width=200",
      },
      {
        country: "uk",
        title: { fa: "استارمر نخست‌وزیر شد - پیروزی لیبر", en: "Starmer Becomes PM - Labour Victory" },
        description: { fa: "حزب کارگر پس از ۱۴ سال به قدرت بازگشت", en: "Labour returns to power after 14 years" },
        details: {
          fa: "حزب کارگر در ژوئیه ۲۰۲۴ با پیروزی عظیم انتخاباتی ۱۴ سال حکومت محافظه‌کاران را پایان داد. حزب محافظه‌کار بدترین نتیجه تاریخ خود را تجربه کرد. استارمر با وعده ثبات اقتصادی و بازسازی خدمات عمومی به قدرت رسید.",
          en: "Labour won a massive landslide in July 2024, ending 14 years of Tory rule. The Conservatives suffered their worst result in history. Starmer came to power promising economic stability and rebuilding public services.",
        },
      },
      {
        country: "germany",
        title: { fa: "فروپاشی ائتلاف شولتس", en: "Collapse of Scholz Coalition" },
        description: { fa: "ائتلاف سه‌حزبی فروپاشید و انتخابات زودهنگام اعلام شد", en: "Three-party coalition collapsed and snap elections called" },
        details: {
          fa: "شولتس وزیر دارایی لیندنر را اخراج کرد و ائتلاف فروپاشید. انتخابات زودهنگام برای فوریه ۲۰۲۵ اعلام شد. AfD در نظرسنجی‌ها قدرت گرفت.",
          en: "Scholz fired Finance Minister Lindner and the coalition collapsed. Snap elections were called for February 2025. AfD gained strength in polls.",
        },
      },
      {
        country: "france",
        title: { fa: "بحران سیاسی و انتخابات زودهنگام", en: "Political Crisis and Snap Elections" },
        description: { fa: "ماکرون پارلمان را منحل کرد و بحران سیاسی ایجاد شد", en: "Macron dissolved parliament creating political crisis" },
        details: {
          fa: "ماکرون پس از شکست در انتخابات اروپایی پارلمان را منحل کرد. ائتلاف چپ پیروز شد اما تشکیل دولت ماه‌ها طول کشید و فرانسه در بی‌ثباتی سیاسی فرو رفت.",
          en: "Macron dissolved parliament after losing European elections. The left-wing coalition won but government formation took months and France plunged into political instability.",
        },
      },
      {
        country: "russia",
        title: { fa: "انتخابات فرمایشی و جنگ ادامه‌دار", en: "Sham Election and Ongoing War" },
        description: { fa: "پوتین با ۸۷ درصد انتخاب شد و جنگ اوکراین ادامه یافت", en: "Putin elected with 87% and Ukraine war continued" },
        details: {
          fa: "پوتین در انتخابات بدون رقیب واقعی با ۸۷ درصد آرا «پیروز» شد. جنگ اوکراین با تلفات سنگین ادامه یافت و ناوالنی در زندان درگذشت.",
          en: "Putin 'won' elections without real opposition with 87% of the vote. The Ukraine war continued with heavy casualties and Navalny died in prison.",
        },
      },
      {
        country: "china",
        title: { fa: "تنش با تایوان و رکود اقتصادی", en: "Taiwan Tensions and Economic Slowdown" },
        description: { fa: "رزمایش نظامی اطراف تایوان و کاهش رشد اقتصادی", en: "Military exercises around Taiwan and declining growth" },
        details: {
          fa: "چین پس از انتخاب رئیس‌جمهور جدید تایوان رزمایش نظامی برگزار کرد. بحران مسکن ادامه یافت و رشد اقتصادی به کمتر از ۵ درصد رسید.",
          en: "China held military exercises after Taiwan's new president was elected. The housing crisis continued and economic growth fell below 5%.",
        },
      }],
  },
  {
    year: 2025,
    shamsiYear: "۱۴۰۳",
    iran: {
      title: { fa: "فشار حداکثری ترامپ دور دوم", en: "Trump's Second-Term Maximum Pressure" },
      description: { fa: "تشدید تحریم‌ها - مذاکرات هسته‌ای جدید - بحران اقتصادی ادامه دارد", en: "Escalating sanctions - New nuclear talks - Economic crisis continues" },
      details: {
        fa: "ترامپ در دور دوم ریاست‌جمهوری سیاست «فشار حداکثری» را تشدید کرد. تحریم‌های جدید علیه برنامه هسته‌ای و موشکی ایران اعمال شد. پزشکیان تلاش کرد مذاکرات هسته‌ای جدیدی را آغاز کند. اقتصاد ایران همچنان در بحران بود. ارزش ریال به پایین‌ترین سطح تاریخ رسید.",
        en: "Trump intensified 'maximum pressure' in his second term. New sanctions targeted Iran's nuclear and missile programs. Pezeshkian tried to initiate new nuclear negotiations. Iran's economy remained in crisis. The Rial reached its lowest level in history.",
      },
    },
    world: [
      {
        country: "usa",
        title: { fa: "ترامپ دور دوم - تعرفه‌های تجاری", en: "Trump Second Term - Trade Tariffs" },
        description: { fa: "جنگ تجاری با چین و اروپا - سیاست «آمریکا اول»", en: "Trade war with China & Europe - 'America First' policy" },
        details: {
          fa: "ترامپ در دور دوم ریاست‌جمهوری تعرفه‌های سنگینی بر واردات از چین و اروپا اعمال کرد. سیاست «آمریکا اول» باعث تنش‌های تجاری گسترده با متحدان و رقبا شد. بازارهای جهانی با نوسانات شدید مواجه شدند و زنجیره‌های تأمین بین‌المللی مختل شد.",
          en: "Trump imposed heavy tariffs on imports from China and Europe in his second term. The 'America First' policy caused widespread trade tensions with allies and rivals alike. Global markets experienced sharp volatility and international supply chains were disrupted.",
        },
      },
      {
        country: "germany",
        title: { fa: "فردریش مرتس صدراعظم شد", en: "Friedrich Merz Becomes Chancellor" },
        description: { fa: "CDU به قدرت بازگشت - چالش بحران اقتصادی و مهاجرت", en: "CDU returns to power - Economic and migration crisis challenges" },
        details: {
          fa: "فردریش مرتس از حزب دموکرات مسیحی (CDU) پس از دوره شولتز صدراعظم آلمان شد. آلمان با بحران اقتصادی ناشی از جنگ اوکراین، قطع گاز روسیه و رکود صنعتی مواجه بود. مهاجرت نیز به چالش اصلی سیاست داخلی تبدیل شده بود.",
          en: "Friedrich Merz of the CDU became Germany's Chancellor after the Scholz era. Germany faced economic crisis from the Ukraine war, Russian gas cutoff, and industrial recession. Immigration had also become a major domestic policy challenge.",
        },
      },
      {
        country: "uk",
        title: { fa: "دولت کارگری استارمر", en: "Starmer's Labour Government" },
        description: { fa: "استارمر با چالش‌های اقتصادی و مهاجرت مواجه شد", en: "Starmer faced economic and migration challenges" },
        details: {
          fa: "کیر استارمر پس از پیروزی قاطع در انتخابات ۲۰۲۴ با چالش‌های اقتصادی و بحران مهاجرت دست و پنجه نرم کرد. بودجه ریاضتی جدید اعلام شد.",
          en: "Keir Starmer, after a landslide victory in 2024 elections, grappled with economic challenges and the migration crisis. A new austerity budget was announced.",
        },
      },
      {
        country: "france",
        title: { fa: "بی‌ثباتی سیاسی ادامه‌دار", en: "Ongoing Political Instability" },
        description: { fa: "فرانسه با دولت‌های کوتاه‌مدت مواجه شد", en: "France faced short-lived governments" },
        details: {
          fa: "بی‌ثباتی سیاسی فرانسه ادامه یافت و دولت‌های متعدد سقوط کردند. ماکرون قدرت اجرایی محدودی داشت و اصلاحات اقتصادی متوقف شد.",
          en: "France's political instability continued with multiple governments falling. Macron had limited executive power and economic reforms stalled.",
        },
      },
      {
        country: "russia",
        title: { fa: "جنگ اوکراین و انزوای بیشتر", en: "Ukraine War and Further Isolation" },
        description: { fa: "جنگ وارد سال چهارم شد و تحریم‌ها ادامه یافت", en: "War entered fourth year and sanctions continued" },
        details: {
          fa: "جنگ اوکراین وارد سال چهارم شد با تلفات سنگین دو طرف. اقتصاد روسیه تحت فشار تحریم‌ها بود اما درآمد نفتی از طریق واسطه‌ها ادامه داشت.",
          en: "The Ukraine war entered its fourth year with heavy casualties on both sides. Russia's economy was under sanctions pressure but oil revenues continued through intermediaries.",
        },
      },
      {
        country: "china",
        title: { fa: "رقابت فناوری با آمریکا", en: "Tech Competition with US" },
        description: { fa: "جنگ تراشه و هوش مصنوعی بین چین و آمریکا شدت گرفت", en: "Chip and AI war between China and US intensified" },
        details: {
          fa: "رقابت فناوری چین و آمریکا بر سر تراشه‌ها و هوش مصنوعی شدت گرفت. چین موفقیت‌هایی در تولید تراشه بومی داشت اما محدودیت‌های آمریکایی فشار آورد.",
          en: "The US-China tech competition over chips and AI intensified. China had some success in domestic chip production but US restrictions applied pressure.",
        },
      }],
  },
  {
    year: 2026,
    shamsiYear: "۱۴۰۵",
    iran: {
      title: { fa: "جنگ ایران و اسرائیل - بحران منطقه‌ای", en: "Iran-Israel War - Regional Crisis" },
      description: { fa: "درگیری نظامی مستقیم ایران و اسرائیل - تشدید تحریم‌ها - بحران اقتصادی", en: "Direct Iran-Israel military confrontation - Escalating sanctions - Economic crisis" },
      details: {
        fa: "تنش‌های ایران و اسرائیل که از سال ۲۰۲۴ با حملات متقابل موشکی و پهپادی آغاز شده بود، در سال ۲۰۲۶ به درگیری نظامی گسترده‌تری تبدیل شد. اسرائیل حملاتی به تأسیسات نظامی ایران انجام داد و ایران نیز با موشک‌های بالستیک پاسخ داد. این تنش‌ها همراه با سیاست فشار حداکثری دولت ترامپ و تحریم‌های جدید، اقتصاد ایران را تحت فشار شدیدتری قرار داد. مذاکرات هسته‌ای متوقف ماند و ایران غنی‌سازی اورانیوم را ادامه داد.",
        en: "Iran-Israel tensions, which began with reciprocal missile and drone strikes in 2024, escalated into broader military confrontation in 2026. Israel struck Iranian military facilities and Iran responded with ballistic missiles. These tensions, combined with Trump's maximum pressure policy and new sanctions, put further strain on Iran's economy. Nuclear negotiations remained stalled as Iran continued uranium enrichment.",
      },
    },
    world: [
      {
        country: "russia",
        title: { fa: "ادامه جنگ اوکراین", en: "Ukraine War Continues" },
        description: { fa: "سومین سال جنگ - فرسایش دو طرف - مذاکرات بی‌نتیجه", en: "Third year of war - Attrition on both sides - Stalled negotiations" },
        details: {
          fa: "جنگ اوکراین وارد سومین سال خود شد و هر دو طرف با فرسایش نیرو و منابع مواجه شدند. تلاش‌های دیپلماتیک برای آتش‌بس بی‌نتیجه ماند. اروپا با بحران انرژی و افزایش هزینه‌های نظامی دست و پنجه نرم کرد و ناتو گسترش یافت.",
          en: "The Ukraine war entered its third year with both sides facing attrition of forces and resources. Diplomatic efforts for a ceasefire remained fruitless. Europe grappled with an energy crisis and rising military costs while NATO continued to expand.",
        },
      },
      {
        country: "world",
        title: { fa: "انقلاب هوش مصنوعی - تحول جهانی", en: "AI Revolution - Global Transformation" },
        description: { fa: "هوش مصنوعی صنایع را متحول کرد - بحث‌های اخلاقی و مقررات‌گذاری", en: "AI transforms industries - Ethics debates and regulation" },
        details: {
          fa: "هوش مصنوعی به سرعت صنایع مختلف را متحول کرد و میلیون‌ها شغل را تحت تأثیر قرار داد. دولت‌ها برای مقررات‌گذاری و کنترل این فناوری تلاش کردند. رقابت بین آمریکا و چین بر سر تسلط بر هوش مصنوعی به ابعاد ژئوپلیتیکی جنگ سرد فناوری رسید.",
          en: "AI rapidly transformed industries and affected millions of jobs worldwide. Governments scrambled to regulate and control this technology. The competition between the US and China for AI dominance took on geopolitical dimensions of a technological cold war.",
        },
      },
      {
        country: "world",
        title: { fa: "تنش‌های خاورمیانه - بحران ادامه دارد", en: "Middle East Tensions - Crisis Continues" },
        description: { fa: "درگیری‌های گسترده - بحران انسانی - تغییرات ژئوپلیتیکی", en: "Widespread conflicts - Humanitarian crisis - Geopolitical shifts" },
        details: {
          fa: "تنش‌ها در خاورمیانه با ادامه درگیری‌ها در غزه و لبنان و تهدید جنگ گسترده‌تر تشدید شد. بحران انسانی در منطقه عمیق‌تر شد و میلیون‌ها آواره ایجاد کرد. تغییرات ژئوپلیتیکی شامل نزدیکی ایران و روسیه و چین و دور شدن برخی کشورهای عربی از غرب بود.",
          en: "Middle East tensions intensified with ongoing conflicts in Gaza and Lebanon and the threat of wider war. The humanitarian crisis in the region deepened, displacing millions. Geopolitical shifts included the rapprochement of Iran, Russia, and China, and some Arab states distancing themselves from the West.",
        },
      },
      {
        country: "usa",
        title: { fa: "دوره دوم ترامپ و سیاست‌های جنجالی", en: "Trump's Second Term and Controversial Policies" },
        description: { fa: "ترامپ سیاست‌های تعرفه‌ای و مهاجرتی سخت‌گیرانه اعمال کرد", en: "Trump imposed strict tariff and immigration policies" },
        details: {
          fa: "ترامپ تعرفه‌های سنگین بر واردات اعمال کرد و سیاست‌های مهاجرتی سخت‌گیرانه‌ای پیش برد. اختلافات با متحدان اروپایی و چین شدت گرفت.",
          en: "Trump imposed heavy tariffs on imports and pursued strict immigration policies. Disputes with European allies and China intensified.",
        },
      },
      {
        country: "uk",
        title: { fa: "استارمر و چالش‌های داخلی", en: "Starmer and Domestic Challenges" },
        description: { fa: "دولت کارگری با بحران خدمات بهداشتی مواجه شد", en: "Labour government faced healthcare crisis" },
        details: {
          fa: "دولت استارمر با بحران NHS و لیست‌های انتظار طولانی دست و پنجه نرم کرد. اصلاحات بخش عمومی و سیاست مهاجرت چالش‌های اصلی بودند.",
          en: "Starmer's government grappled with the NHS crisis and long waiting lists. Public sector reforms and immigration policy were the main challenges.",
        },
      },
      {
        country: "germany",
        title: { fa: "دولت جدید مرتس", en: "New Merz Government" },
        description: { fa: "فریدریش مرتس صدراعظم شد و سیاست‌های جدید اعلام کرد", en: "Friedrich Merz became chancellor and announced new policies" },
        details: {
          fa: "فریدریش مرتس از CDU پس از پیروزی در انتخابات صدراعظم شد. او سیاست‌های سخت‌تر مهاجرتی و افزایش بودجه دفاعی را پیش برد.",
          en: "Friedrich Merz of CDU became chancellor after winning elections. He pursued stricter migration policies and increased defense spending.",
        },
      },
      {
        country: "france",
        title: { fa: "بحران اقتصادی و اجتماعی", en: "Economic and Social Crisis" },
        description: { fa: "فرانسه با بدهی بالا و نارضایتی اجتماعی مواجه شد", en: "France faced high debt and social discontent" },
        details: {
          fa: "بدهی ملی فرانسه به بیش از ۱۱۰ درصد تولید ناخالص داخلی رسید. نارضایتی اجتماعی ادامه داشت و ماکرون در سال‌های پایانی ریاست‌جمهوری ضعیف‌تر شد.",
          en: "France's national debt exceeded 110% of GDP. Social discontent continued and Macron grew weaker in the final years of his presidency.",
        },
      },
      {
        country: "china",
        title: { fa: "توسعه نظامی و فشار اقتصادی", en: "Military Expansion and Economic Pressure" },
        description: { fa: "چین بودجه نظامی را افزایش داد اما رشد اقتصادی کند شد", en: "China increased military budget but economic growth slowed" },
        details: {
          fa: "چین بودجه نظامی را به بیش از ۲۰۰ میلیارد دلار افزایش داد. بحران بخش مسکن ادامه داشت و رشد اقتصادی به کمترین میزان سه دهه اخیر رسید.",
          en: "China increased its military budget to over $200 billion. The housing sector crisis continued and economic growth hit its lowest level in three decades.",
        },
      }],
  },
];
