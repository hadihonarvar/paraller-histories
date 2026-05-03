const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// ============================================================
// STEP 1: Move existing Iraq-related events from iran[] to world[]
// ============================================================

// 1a. Move the 1963 Ba'athist coup event from iran[] to world[] with country: "iraq"
const baathCoup1963 = `    {
      title: { fa: "کودتای بعثی‌ها در عراق و قتل عبدالکریم قاسم", en: "Ba'athist Coup in Iraq & Execution of Abdel Karim Qasim" },
      description: { fa: "بعثی‌ها با حمایت سیا رئیس‌جمهور عراق را سرنگون و اعدام کردند", en: "Ba'athists, with CIA support, overthrow and execute Iraqi president" },`;

// Remove from iran array
if (content.includes(baathCoup1963)) {
  // Find and remove the entire event block from iran array
  const startIdx = content.indexOf(baathCoup1963);
  // Find the closing of this event object - look for the next "},\n" or "}]\n"
  let endSearch = content.substring(startIdx);
  // Find end of details block then end of object
  const detailsEndMatch = endSearch.match(/\n    },\n/);
  if (detailsEndMatch) {
    const removeEnd = startIdx + detailsEndMatch.index + detailsEndMatch[0].length;
    // Check what comes after - if it's "    ]," then we remove differently
    const removed = content.substring(startIdx, removeEnd);
    content = content.substring(0, startIdx) + content.substring(removeEnd);
    console.log("Removed 1963 Ba'athist coup from iran array");
  }
}

// 1b. Move the 1979 Saddam coup event from iran[] to world[] with country: "iraq"
const saddamCoup1979 = `    {
      title: { fa: "کودتای صدام حسین و تصفیه خونین حزب بعث عراق", en: "Saddam Hussein's Coup & Bloody Ba'ath Party Purge" },
      description: { fa: "صدام حسین رئیس‌جمهور عراق را کنار زد و رقبا را اعدام کرد", en: "Saddam Hussein ousts Iraqi president and executes rivals" },`;

if (content.includes(saddamCoup1979)) {
  const startIdx = content.indexOf(saddamCoup1979);
  // Find end - this one ends with "}],"
  let endSearch = content.substring(startIdx);
  const detailsEndMatch = endSearch.match(/\n    \}\]\,/);
  if (detailsEndMatch) {
    // Remove the event but keep the "]," closing of iran array
    // Actually let's find the exact pattern
    const objEndMatch = endSearch.match(/\n    \}/);
    if (objEndMatch) {
      const removeEnd = startIdx + objEndMatch.index + objEndMatch[0].length;
      content = content.substring(0, startIdx) + content.substring(removeEnd);
      console.log("Removed 1979 Saddam coup from iran array");
    }
  }
}

// ============================================================
// STEP 2: Define all Iraq events to add to world[] arrays
// ============================================================

const iraqEvents = {
  1908: {
    title: { fa: "انقلاب ترک‌های جوان و تأثیر آن بر عراق", en: "Young Turks Revolution & Its Impact on Iraq" },
    description: { fa: "انقلاب ترک‌های جوان امید اصلاحات در ولایات عراقی عثمانی ایجاد کرد", en: "Young Turks revolution raises hopes for reform in Ottoman Iraqi provinces" },
    details: {
      fa: "انقلاب ترک‌های جوان در ۱۹۰۸ قانون اساسی عثمانی را احیا کرد و امید به آزادی و اصلاحات در ولایات عربی از جمله بغداد، بصره و موصل ایجاد نمود. روشنفکران عراقی در فعالیت‌های سیاسی مشارکت بیشتری یافتند اما سیاست‌های ترکی‌سازی ترک‌های جوان به زودی مخالفت عرب‌ها را برانگیخت و جنبش‌های ناسیونالیستی عربی تقویت شد.",
      en: "The Young Turks revolution of 1908 restored the Ottoman constitution and raised hopes for freedom and reform in Arab provinces including Baghdad, Basra, and Mosul. Iraqi intellectuals became more politically active, but the Young Turks' Turkification policies soon provoked Arab opposition and strengthened Arab nationalist movements.",
    },
  },
  1914: {
    title: { fa: "اشغال بصره توسط بریتانیا", en: "British Occupation of Basra" },
    description: { fa: "نیروهای بریتانیا در آغاز جنگ جهانی اول بصره را اشغال کردند", en: "British forces occupy Basra at the start of World War I" },
    details: {
      fa: "در نوامبر ۱۹۱۴ با ورود امپراتوری عثمانی به جنگ جهانی اول در کنار آلمان، نیروهای بریتانیا از هند به خلیج فارس حمله کردند و بصره را اشغال نمودند. هدف اصلی بریتانیا حفاظت از منافع نفتی و مسیرهای دریایی به هند بود. این اشغال آغاز حضور نظامی طولانی‌مدت بریتانیا در عراق شد.",
      en: "In November 1914, as the Ottoman Empire entered World War I on Germany's side, British forces from India attacked the Persian Gulf and occupied Basra. Britain's main goal was protecting oil interests and sea routes to India. This occupation marked the beginning of Britain's long military presence in Iraq.",
    },
  },
  1916: {
    title: { fa: "محاصره کوت و شکست بریتانیا", en: "Siege of Kut & British Defeat" },
    description: { fa: "نیروهای عثمانی ارتش بریتانیا را در کوت محاصره و مجبور به تسلیم کردند", en: "Ottoman forces besiege and force surrender of British army at Kut" },
    details: {
      fa: "در آوریل ۱۹۱۶ پس از پنج ماه محاصره، ژنرال تاونزند بریتانیایی با حدود ۱۳ هزار سرباز در کوت‌العماره تسلیم نیروهای عثمانی شد. این یکی از بزرگ‌ترین شکست‌های نظامی بریتانیا در جنگ جهانی اول بود. هزاران اسیر بریتانیایی و هندی در راهپیمایی مرگ‌بار به سمت آناتولی جان باختند.",
      en: "In April 1916, after a five-month siege, British General Townshend surrendered with about 13,000 soldiers at Kut al-Amara to Ottoman forces. This was one of Britain's greatest military defeats in World War I. Thousands of British and Indian prisoners died on the death march to Anatolia.",
    },
  },
  1917: {
    title: { fa: "سقوط بغداد به دست بریتانیا", en: "Fall of Baghdad to Britain" },
    description: { fa: "ارتش بریتانیا بغداد را از عثمانی‌ها تصرف کرد", en: "British army captures Baghdad from the Ottomans" },
    details: {
      fa: "در ۱۱ مارس ۱۹۱۷ نیروهای بریتانیا به فرماندهی ژنرال مود بغداد را تصرف کردند و ژنرال مود اعلامیه معروف خود را صادر کرد: «ما به عنوان آزادکننده آمده‌ایم نه فاتح.» اما واقعیت حکومت استعماری بود. بریتانیا تا ۱۹۲۰ تمام عراق امروزی را تحت کنترل خود درآورد.",
      en: "On March 11, 1917, British forces under General Maude captured Baghdad, and Maude issued his famous proclamation: 'We come as liberators, not conquerors.' But the reality was colonial rule. By 1920, Britain controlled all of modern-day Iraq.",
    },
  },
  1920: {
    title: { fa: "انقلاب ۱۹۲۰ عراق علیه بریتانیا", en: "Iraqi Revolt of 1920 Against Britain" },
    description: { fa: "قبایل و مردم عراق علیه حکومت استعماری بریتانیا قیام کردند", en: "Iraqi tribes and people revolt against British colonial rule" },
    details: {
      fa: "در تابستان ۱۹۲۰ قیام گسترده‌ای علیه اشغال بریتانیا در سراسر عراق آغاز شد. قبایل شیعه و سنی متحد شدند و بخش‌های وسیعی از جنوب و مرکز عراق را آزاد کردند. بریتانیا با استفاده از نیروی هوایی و تقویت نظامی قیام را سرکوب کرد. بیش از ده هزار عراقی کشته شدند. این قیام بریتانیا را مجبور کرد به جای حکومت مستقیم، سلطنت دست‌نشانده تأسیس کند.",
      en: "In the summer of 1920, a widespread revolt against British occupation erupted across Iraq. Shia and Sunni tribes united and liberated large areas of southern and central Iraq. Britain suppressed the revolt using air power and military reinforcements. Over ten thousand Iraqis were killed. This revolt forced Britain to establish a client monarchy instead of direct rule.",
    },
  },
  1921: {
    title: { fa: "تأسیس پادشاهی عراق تحت قیمومت بریتانیا", en: "Establishment of Iraqi Monarchy Under British Mandate" },
    description: { fa: "فیصل اول با حمایت بریتانیا پادشاه عراق شد", en: "Faisal I becomes King of Iraq with British support" },
    details: {
      fa: "در کنفرانس قاهره ۱۹۲۱ وینستون چرچیل تصمیم گرفت فیصل بن حسین، پسر شریف مکه، را بر تخت پادشاهی عراق بنشاند. فیصل در یک همه‌پرسی نمایشی با ۹۶ درصد آرا پادشاه شد. عراق تحت قیمومت جامعه ملل و عملاً تحت کنترل بریتانیا قرار داشت. این آغاز پادشاهی هاشمی عراق بود که تا ۱۹۵۸ ادامه یافت.",
      en: "At the 1921 Cairo Conference, Winston Churchill decided to place Faisal bin Hussein, son of the Sharif of Mecca, on the Iraqi throne. Faisal became king in a staged referendum with 96% of votes. Iraq was under a League of Nations mandate and effectively under British control. This began the Hashemite monarchy that lasted until 1958.",
    },
  },
  1927: {
    title: { fa: "کشف نفت کرکوک", en: "Discovery of Oil in Kirkuk" },
    description: { fa: "نفت در بابا گرگر کرکوک کشف شد و سرنوشت عراق را تغییر داد", en: "Oil discovered at Baba Gurgur in Kirkuk, changing Iraq's destiny" },
    details: {
      fa: "در ۱۴ اکتبر ۱۹۲۷ چاه نفت بابا گرگر در نزدیکی کرکوک فوران کرد و یکی از بزرگ‌ترین ذخایر نفتی جهان کشف شد. شرکت نفت ترکیه (بعداً شرکت نفت عراق) که متعلق به کنسرسیوم بریتانیایی-آمریکایی-فرانسوی بود، امتیاز بهره‌برداری را در اختیار داشت. کشف نفت عراق را به یکی از مهم‌ترین کشورهای نفت‌خیز جهان تبدیل کرد.",
      en: "On October 14, 1927, the Baba Gurgur oil well near Kirkuk gushed, revealing one of the world's largest oil reserves. The Turkish Petroleum Company (later Iraq Petroleum Company), owned by a British-American-French consortium, held the exploitation concession. The discovery transformed Iraq into one of the world's most important oil-producing countries.",
    },
  },
  1932: {
    title: { fa: "استقلال رسمی عراق", en: "Formal Independence of Iraq" },
    description: { fa: "عراق به عضویت جامعه ملل پذیرفته شد و رسماً مستقل اعلام گردید", en: "Iraq admitted to League of Nations, formally declared independent" },
    details: {
      fa: "در ۳ اکتبر ۱۹۳۲ عراق به عنوان عضو مستقل به جامعه ملل پذیرفته شد و قیمومت بریتانیا رسماً پایان یافت. اما بریتانیا همچنان پایگاه‌های نظامی و نفوذ سیاسی قابل توجهی در عراق حفظ کرد. ملک فیصل اول پادشاه بود اما یک سال بعد درگذشت و پسرش غازی جانشین او شد.",
      en: "On October 3, 1932, Iraq was admitted to the League of Nations as an independent member and the British mandate formally ended. However, Britain maintained military bases and significant political influence in Iraq. King Faisal I was the monarch but died a year later and was succeeded by his son Ghazi.",
    },
  },
  1933: {
    title: { fa: "کشتار آشوری‌ها در سمیل", en: "Simele Massacre of Assyrians" },
    description: { fa: "ارتش عراق آشوری‌های مسیحی را در شمال عراق قتل‌عام کرد", en: "Iraqi army massacres Assyrian Christians in northern Iraq" },
    details: {
      fa: "در اوت ۱۹۳۳ ارتش عراق به فرماندهی ژنرال بکر صدقی آشوری‌های مسیحی را در منطقه سمیل و روستاهای اطراف قتل‌عام کرد. صدها تا سه هزار غیرنظامی کشته شدند. این کشتار واکنش به درخواست خودمختاری آشوری‌ها بود. رافائل لمکین از این واقعه به عنوان یکی از نمونه‌هایی که او را به تعریف «نسل‌کشی» رساند نام برده است.",
      en: "In August 1933, the Iraqi army under General Bakr Sidqi massacred Assyrian Christians in the Simele region and surrounding villages. Hundreds to three thousand civilians were killed. The massacre was a response to Assyrian demands for autonomy. Raphael Lemkin cited this event as one of the examples that led him to define 'genocide.'",
    },
  },
  1936: {
    title: { fa: "اولین کودتای نظامی در تاریخ عراق", en: "First Military Coup in Iraqi History" },
    description: { fa: "ژنرال بکر صدقی اولین کودتای نظامی جهان عرب را انجام داد", en: "General Bakr Sidqi stages the first military coup in the Arab world" },
    details: {
      fa: "در ۲۹ اکتبر ۱۹۳۶ ژنرال بکر صدقی اولین کودتای نظامی در تاریخ عراق و جهان عرب را انجام داد. او حکومت یاسین الهاشمی را سرنگون کرد و حکمت سلیمان را به نخست‌وزیری نشاند. این کودتا الگویی برای کودتاهای نظامی متعدد آینده در عراق و جهان عرب شد.",
      en: "On October 29, 1936, General Bakr Sidqi staged the first military coup in Iraqi and Arab world history. He overthrew the government of Yasin al-Hashimi and installed Hikmat Sulayman as prime minister. This coup became a model for numerous future military coups in Iraq and the Arab world.",
    },
  },
  1941: {
    title: { fa: "کودتای رشید عالی گیلانی و حمله بریتانیا", en: "Rashid Ali Coup & British Intervention" },
    description: { fa: "کودتای ملی‌گرایانه عراقی توسط بریتانیا سرکوب شد", en: "Iraqi nationalist coup suppressed by British military intervention" },
    details: {
      fa: "در آوریل ۱۹۴۱ رشید عالی گیلانی با حمایت افسران ملی‌گرا (جنبش مربع طلایی) کودتا کرد و حکومت طرفدار بریتانیا را سرنگون نمود. رشید عالی با آلمان نازی تماس گرفت اما بریتانیا سریعاً وارد عمل شد و طی جنگ کوتاه عراق را دوباره اشغال کرد. فرهود (آشوب ضد یهودی) در بغداد رخ داد و بیش از ۱۸۰ یهودی کشته شدند.",
      en: "In April 1941, Rashid Ali al-Gaylani, backed by nationalist officers (the Golden Square movement), staged a coup and overthrew the pro-British government. Rashid Ali contacted Nazi Germany, but Britain quickly intervened and reoccupied Iraq in a brief war. The Farhud (anti-Jewish pogrom) occurred in Baghdad, killing over 180 Jews.",
    },
  },
  1948: {
    title: { fa: "وثبه: قیام مردمی علیه پیمان پورتسموث", en: "Al-Wathbah: Popular Uprising Against Portsmouth Treaty" },
    description: { fa: "اعتراضات خیابانی مردم عراق پیمان نظامی جدید با بریتانیا را لغو کرد", en: "Iraqi street protests cancel new military treaty with Britain" },
    details: {
      fa: "در ژانویه ۱۹۴۸ مردم عراق در اعتراض به پیمان پورتسموث که نفوذ نظامی بریتانیا را تمدید می‌کرد به خیابان‌ها ریختند. پلیس به تظاهرکنندگان شلیک کرد و ده‌ها نفر کشته شدند. فشار مردمی حکومت را مجبور به لغو پیمان کرد. این قیام نشان‌دهنده رشد ناسیونالیسم عراقی و مخالفت با نفوذ استعماری بود.",
      en: "In January 1948, Iraqis took to the streets protesting the Portsmouth Treaty that would extend British military influence. Police fired on demonstrators, killing dozens. Popular pressure forced the government to cancel the treaty. This uprising demonstrated the growth of Iraqi nationalism and opposition to colonial influence.",
    },
  },
  1955: {
    title: { fa: "پیمان بغداد", en: "Baghdad Pact" },
    description: { fa: "عراق به پیمان نظامی غربی پیوست و مخالفت‌های داخلی شدت گرفت", en: "Iraq joins Western military alliance, sparking domestic opposition" },
    details: {
      fa: "در ۱۹۵۵ عراق پیمان بغداد (سنتو) را با ترکیه، ایران، پاکستان و بریتانیا امضا کرد. این پیمان دفاعی ضدشوروی بود و آمریکا نیز از آن حمایت می‌کرد. نوری سعید نخست‌وزیر عراق معمار اصلی این پیمان بود. پیمان بغداد مخالفت شدید ناصر رئیس‌جمهور مصر و ناسیونالیست‌های عربی را برانگیخت و یکی از دلایل کودتای ۱۹۵۸ بود.",
      en: "In 1955, Iraq signed the Baghdad Pact (CENTO) with Turkey, Iran, Pakistan, and Britain. This anti-Soviet defense alliance was also supported by the US. Iraqi Prime Minister Nuri al-Said was the pact's main architect. The Baghdad Pact provoked fierce opposition from Egypt's President Nasser and Arab nationalists and was one of the causes of the 1958 coup.",
    },
  },
  1958: {
    title: { fa: "انقلاب ۱۴ تموز - سقوط سلطنت عراق", en: "July 14 Revolution - Fall of Iraqi Monarchy" },
    description: { fa: "کودتای نظامی سلطنت هاشمی را سرنگون و جمهوری عراق را تأسیس کرد", en: "Military coup overthrows Hashemite monarchy, establishes Republic of Iraq" },
    details: {
      fa: "در ۱۴ ژوئیه ۱۹۵۸ عبدالکریم قاسم و عبدالسلام عارف با کودتای نظامی سلطنت هاشمی عراق را سرنگون کردند. ملک فیصل دوم و خانواده سلطنتی کشته شدند. نوری سعید نخست‌وزیر در حال فرار شناسایی و کشته شد. جمهوری عراق اعلام شد. این انقلاب تأثیر عمیقی بر کل منطقه خاورمیانه گذاشت و شاه ایران را به شدت نگران کرد.",
      en: "On July 14, 1958, Abdul Karim Qasim and Abdul Salam Arif overthrew the Hashemite monarchy in a military coup. King Faisal II and the royal family were killed. Prime Minister Nuri al-Said was identified and killed while fleeing. The Republic of Iraq was proclaimed. This revolution profoundly impacted the entire Middle East and deeply alarmed the Shah of Iran.",
    },
  },
  1961: {
    title: { fa: "آغاز جنگ کردستان عراق", en: "Start of the Iraqi Kurdish War" },
    description: { fa: "ملا مصطفی بارزانی قیام مسلحانه کردها علیه حکومت مرکزی را آغاز کرد", en: "Mulla Mustafa Barzani launches Kurdish armed revolt against central government" },
    details: {
      fa: "در سپتامبر ۱۹۶۱ ملا مصطفی بارزانی رهبر حزب دموکرات کردستان عراق قیام مسلحانه علیه حکومت عبدالکریم قاسم را آغاز کرد. کردها خواستار خودمختاری بودند. این آغاز جنگ‌های کردی بود که با وقفه‌هایی تا دهه‌ها ادامه یافت. حکومت مرکزی بارها مناطق کردنشین را بمباران کرد اما نتوانست شورش را به طور کامل سرکوب کند.",
      en: "In September 1961, Mulla Mustafa Barzani, leader of the Kurdistan Democratic Party, launched an armed revolt against Abdul Karim Qasim's government. The Kurds demanded autonomy. This began the Kurdish wars that continued intermittently for decades. The central government repeatedly bombed Kurdish areas but could not fully suppress the insurgency.",
    },
  },
  1963: {
    title: { fa: "کودتای بعثی‌ها و قتل عبدالکریم قاسم", en: "Ba'athist Coup & Execution of Abdel Karim Qasim" },
    description: { fa: "حزب بعث با حمایت سیا قدرت را گرفت و قاسم را اعدام کرد", en: "Ba'ath Party seizes power with CIA support and executes Qasim" },
    details: {
      fa: "در ۸ فوریه ۱۹۶۳ حزب بعث عراق با حمایت سیا کودتا کرد و ژنرال عبدالکریم قاسم رئیس‌جمهور عراق را سرنگون نمود. قاسم بلافاصله محاکمه صحرایی شد و در برابر دوربین تلویزیون اعدام گردید. جسد او بارها در تلویزیون نمایش داده شد. صدام حسین که در سال ۱۹۵۹ در ترور ناموفق قاسم شرکت کرده بود، نقش مهمی در سرکوب پس از کودتا ایفا کرد. قاسم روابط نسبتاً معتدلی با ایران داشت و سقوط او با روی کار آمدن بعثی‌های تندرو، زمینه‌ساز تنش‌های آینده ایران و عراق شد.",
      en: "On February 8, 1963, Iraq's Ba'ath Party, with CIA backing, staged a coup and overthrew President Abdel Karim Qasim. Qasim was immediately given a summary trial and executed on television. His body was repeatedly shown on TV. Saddam Hussein, who had participated in a failed assassination attempt on Qasim in 1959, played a significant role in the post-coup repression. Qasim had maintained relatively moderate relations with Iran, and his fall and the rise of hardline Ba'athists set the stage for future Iran-Iraq tensions.",
    },
  },
  1968: {
    title: { fa: "کودتای ۱۷ تموز - بازگشت حزب بعث به قدرت", en: "July 17 Coup - Ba'ath Party Returns to Power" },
    description: { fa: "حزب بعث برای بار دوم با کودتا قدرت را در عراق به دست گرفت", en: "Ba'ath Party seizes power in Iraq for the second time through a coup" },
    details: {
      fa: "در ۱۷ ژوئیه ۱۹۶۸ حزب بعث به رهبری احمد حسن البکر با کودتای نظامی دوباره به قدرت رسید. صدام حسین به عنوان معاون البکر نقش کلیدی در تثبیت حکومت ایفا کرد. بعثی‌ها دستگاه امنیتی گسترده‌ای ایجاد کردند و مخالفان را به شدت سرکوب نمودند. این کودتا آغاز ۳۵ سال حکومت بعث بر عراق بود.",
      en: "On July 17, 1968, the Ba'ath Party under Ahmed Hassan al-Bakr returned to power through a military coup. Saddam Hussein, as al-Bakr's deputy, played a key role in consolidating the regime. The Ba'athists created an extensive security apparatus and brutally repressed opponents. This coup began 35 years of Ba'ath rule over Iraq.",
    },
  },
  1972: {
    title: { fa: "ملی‌سازی نفت عراق", en: "Nationalization of Iraqi Oil" },
    description: { fa: "عراق صنعت نفت را از شرکت‌های غربی ملی‌سازی کرد", en: "Iraq nationalizes oil industry from Western companies" },
    details: {
      fa: "در ۱ ژوئن ۱۹۷۲ حکومت بعث عراق شرکت نفت عراق (IPC) متعلق به کنسرسیوم غربی را ملی‌سازی کرد. صدام حسین معمار اصلی این تصمیم بود. ملی‌سازی نفت درآمدهای هنگفتی در اختیار حکومت قرار داد و امکان مدرن‌سازی سریع زیرساخت‌ها، آموزش و بهداشت را فراهم ساخت. دهه ۱۹۷۰ دوره طلایی اقتصادی عراق بود.",
      en: "On June 1, 1972, Iraq's Ba'ath government nationalized the Iraq Petroleum Company (IPC) owned by a Western consortium. Saddam Hussein was the main architect of this decision. Oil nationalization gave the government enormous revenues and enabled rapid modernization of infrastructure, education, and healthcare. The 1970s were Iraq's economic golden age.",
    },
  },
  1974: {
    title: { fa: "تشدید جنگ کردستان و حمایت ایران از کردها", en: "Escalation of Kurdish War & Iranian Support for Kurds" },
    description: { fa: "شاه ایران از کردهای عراق حمایت نظامی کرد و جنگ تشدید شد", en: "Shah of Iran provides military support to Iraqi Kurds, war escalates" },
    details: {
      fa: "در ۱۹۷۴ جنگ بین حکومت بعث و کردهای عراق به رهبری ملا مصطفی بارزانی به شدت تشدید شد. ایران به دستور شاه و با حمایت آمریکا و اسرائیل تسلیحات و کمک‌های نظامی به کردها ارسال می‌کرد. ارتش عراق با وجود استفاده از نیروی هوایی و توپخانه سنگین نتوانست شورش را سرکوب کند. این وضعیت صدام را به پای میز مذاکره با شاه کشاند.",
      en: "In 1974, the war between the Ba'ath government and Iraqi Kurds led by Mulla Mustafa Barzani intensified dramatically. Iran, on the Shah's orders and with US and Israeli support, supplied arms and military aid to the Kurds. The Iraqi army, despite using air power and heavy artillery, could not suppress the insurgency. This situation drove Saddam to the negotiating table with the Shah.",
    },
  },
  1975: {
    title: { fa: "توافقنامه الجزایر و سرکوب کردها", en: "Algiers Agreement & Crushing of Kurdish Revolt" },
    description: { fa: "ایران حمایت از کردها را قطع کرد و قیام کردی فروپاشید", en: "Iran cuts support for Kurds, Kurdish revolt collapses" },
    details: {
      fa: "در مارس ۱۹۷۵ شاه ایران و صدام حسین توافقنامه الجزایر را امضا کردند. ایران در ازای تعیین مرز آبی اروندرود بر اساس خط تالوگ، تمام حمایت خود از کردهای عراق را قطع کرد. قیام کردی بلافاصله فروپاشید و صدها هزار کرد آواره شدند. بارزانی به ایران گریخت و در تبعید درگذشت. این خیانت به کردها زخمی عمیق در حافظه جمعی آنها بر جای گذاشت.",
      en: "In March 1975, the Shah of Iran and Saddam Hussein signed the Algiers Agreement. In exchange for determining the Shatt al-Arab water boundary based on the thalweg line, Iran cut all support for Iraqi Kurds. The Kurdish revolt immediately collapsed and hundreds of thousands of Kurds were displaced. Barzani fled to Iran and died in exile. This betrayal of the Kurds left a deep scar in their collective memory.",
    },
  },
  1979: {
    title: { fa: "کودتای صدام حسین و تصفیه خونین حزب بعث", en: "Saddam Hussein's Coup & Bloody Ba'ath Party Purge" },
    description: { fa: "صدام حسین رئیس‌جمهور عراق را کنار زد و رقبا را اعدام کرد", en: "Saddam Hussein ousts Iraqi president and executes rivals" },
    details: {
      fa: "در تیر ۱۳۵۸ (ژوئیه ۱۹۷۹) صدام حسین رئیس‌جمهور احمد حسن البکر را مجبور به استعفا کرد و خود قدرت را به دست گرفت. صدام بلافاصله جلسه‌ای در حزب بعث ترتیب داد و در حالی که سیگار می‌کشید، نام ده‌ها عضو ارشد حزب را به عنوان «خائن» خواند. آنها یکی‌یکی از جلسه بیرون برده و اعدام شدند. این تصفیه خونین قدرت مطلق صدام را تثبیت کرد و زمینه‌ساز حمله عراق به ایران در سال بعد شد.",
      en: "In July 1979, Saddam Hussein forced President Ahmed Hassan al-Bakr to resign and seized power. Saddam immediately convened a Ba'ath Party meeting where, while smoking a cigar, he read out the names of dozens of senior party members as 'traitors.' They were taken out one by one and executed. This bloody purge consolidated Saddam's absolute power and set the stage for Iraq's invasion of Iran the following year.",
    },
  },
  1980: {
    title: { fa: "حمله عراق به ایران - آغاز جنگ هشت‌ساله", en: "Iraq Invades Iran - Eight-Year War Begins" },
    description: { fa: "صدام حسین به ایران حمله کرد و طولانی‌ترین جنگ متعارف قرن بیستم آغاز شد", en: "Saddam Hussein invades Iran, starting the longest conventional war of the 20th century" },
    details: {
      fa: "در ۲۲ سپتامبر ۱۹۸۰ ارتش عراق با حمله هوایی و زمینی گسترده به ایران حمله کرد. صدام از آشفتگی پس از انقلاب ایران سوءاستفاده کرد و خوزستان را هدف اصلی قرار داد. عراق از حمایت مالی عربستان و کویت و تسلیحات غربی و شرقی بهره‌مند بود. جنگ هشت سال طول کشید و حدود یک میلیون کشته و دو میلیون زخمی بر جای گذاشت.",
      en: "On September 22, 1980, the Iraqi army launched a massive air and ground attack on Iran. Saddam exploited the post-revolution turmoil and targeted Khuzestan as the main objective. Iraq benefited from Saudi and Kuwaiti financial support and Western and Eastern weapons. The war lasted eight years, leaving approximately one million dead and two million wounded.",
    },
  },
  1982: {
    title: { fa: "عقب‌نشینی عراق از خاک ایران", en: "Iraqi Withdrawal from Iranian Territory" },
    description: { fa: "ایران خرمشهر را آزاد کرد و عراق پیشنهاد آتش‌بس داد", en: "Iran liberates Khorramshahr, Iraq offers ceasefire" },
    details: {
      fa: "در خرداد ۱۳۶۱ ایران خرمشهر را آزاد کرد و نیروهای عراقی از بیشتر خاک ایران عقب‌نشینی کردند. صدام پیشنهاد آتش‌بس داد اما ایران آن را رد کرد و تصمیم به ادامه جنگ تا سقوط صدام گرفت. از این پس عراق در موضع تدافعی قرار گرفت و جنگ شش سال دیگر با تلفات سنگین هر دو طرف ادامه یافت.",
      en: "In May-June 1982, Iran liberated Khorramshahr and Iraqi forces withdrew from most Iranian territory. Saddam offered a ceasefire but Iran rejected it, deciding to continue the war until Saddam's fall. From this point, Iraq was on the defensive, and the war continued for six more years with heavy casualties on both sides.",
    },
  },
  1986: {
    title: { fa: "رسوایی ایران‌گیت و حمایت غرب از عراق", en: "Iran-Contra Scandal & Western Support for Iraq" },
    description: { fa: "آمریکا مخفیانه به ایران سلاح فروخت و آشکارا از عراق حمایت کرد", en: "US secretly sells arms to Iran while openly supporting Iraq" },
    details: {
      fa: "در ۱۹۸۶ رسوایی ایران‌گیت فاش شد: آمریکا مخفیانه به ایران سلاح فروخته بود. اما در همان زمان آمریکا و غرب آشکارا از عراق حمایت می‌کردند. آمریکا اطلاعات ماهواره‌ای در اختیار صدام قرار می‌داد. فرانسه جنگنده و آلمان مواد شیمیایی به عراق می‌فروختند. این حمایت غربی نقش کلیدی در ادامه جنگ و استفاده عراق از سلاح شیمیایی داشت.",
      en: "In 1986, the Iran-Contra scandal was exposed: the US had secretly sold arms to Iran. Yet the US and West were openly supporting Iraq. The US provided Saddam with satellite intelligence. France sold fighter jets and Germany sold chemical precursors to Iraq. This Western support played a key role in prolonging the war and Iraq's use of chemical weapons.",
    },
  },
  1988: {
    title: { fa: "حمله شیمیایی حلبچه و پایان جنگ ایران و عراق", en: "Halabja Chemical Attack & End of Iran-Iraq War" },
    description: { fa: "عراق شهر کرد حلبچه را با سلاح شیمیایی بمباران کرد و جنگ با قطعنامه ۵۹۸ پایان یافت", en: "Iraq bombs Kurdish city of Halabja with chemical weapons; war ends with Resolution 598" },
    details: {
      fa: "در مارس ۱۹۸۸ ارتش عراق شهر کردنشین حلبچه را با بمب‌های شیمیایی حاوی گاز خردل و سیانور بمباران کرد و حدود ۵۰۰۰ غیرنظامی کشته شدند. این بزرگ‌ترین حمله شیمیایی علیه غیرنظامیان در تاریخ بود. در ژوئیه ۱۹۸۸ ایران قطعنامه ۵۹۸ شورای امنیت را پذیرفت و جنگ هشت‌ساله پایان یافت. خمینی پذیرش آتش‌بس را «نوشیدن جام زهر» خواند.",
      en: "In March 1988, the Iraqi army bombed the Kurdish city of Halabja with chemical bombs containing mustard gas and cyanide, killing about 5,000 civilians. This was the largest chemical attack against civilians in history. In July 1988, Iran accepted UN Security Council Resolution 598 and the eight-year war ended. Khomeini called accepting the ceasefire 'drinking the chalice of poison.'",
    },
  },
  1990: {
    title: { fa: "اشغال کویت توسط عراق", en: "Iraqi Invasion of Kuwait" },
    description: { fa: "صدام حسین کویت را اشغال کرد و آن را استان نوزدهم عراق خواند", en: "Saddam Hussein invades Kuwait, declaring it Iraq's 19th province" },
    details: {
      fa: "در ۲ اوت ۱۹۹۰ ارتش عراق به کویت حمله کرد و آن را در عرض چند ساعت اشغال نمود. صدام کویت را استان نوزدهم عراق اعلام کرد. او ادعا می‌کرد کویت بخشی تاریخی از عراق است و از کویت به دلیل تولید بیش از حد نفت و پایین آوردن قیمت شکایت داشت. شورای امنیت سازمان ملل تحریم‌های فراگیر علیه عراق وضع کرد و ائتلاف ۳۵ کشوری برای آزادسازی کویت شکل گرفت.",
      en: "On August 2, 1990, the Iraqi army invaded Kuwait and occupied it within hours. Saddam declared Kuwait Iraq's 19th province. He claimed Kuwait was historically part of Iraq and complained about Kuwait's excessive oil production driving down prices. The UN Security Council imposed comprehensive sanctions on Iraq and a 35-nation coalition formed to liberate Kuwait.",
    },
  },
  1991: {
    title: { fa: "جنگ خلیج فارس و قیام‌های شعبانیه", en: "Gulf War & Sha'ban Intifada" },
    description: { fa: "ائتلاف عراق را از کویت بیرون راند و قیام شیعیان و کردها به خاک و خون کشیده شد", en: "Coalition expels Iraq from Kuwait; Shia and Kurdish uprisings brutally crushed" },
    details: {
      fa: "در ژانویه ۱۹۹۱ عملیات طوفان صحرا آغاز شد و ائتلاف به رهبری آمریکا عراق را در ۴۲ روز از کویت بیرون راند. پس از شکست، شیعیان جنوب و کردهای شمال عراق قیام کردند (انتفاضه شعبانیه). صدام قیام را با خشونت وحشیانه سرکوب کرد. گورهای دسته‌جمعی و صدها هزار کشته. آمریکا که بوش پدر مردم عراق را به قیام تشویق کرده بود، هیچ کمکی نکرد.",
      en: "In January 1991, Operation Desert Storm began and the US-led coalition expelled Iraq from Kuwait in 42 days. After the defeat, Shia in the south and Kurds in the north revolted (Sha'ban Intifada). Saddam crushed the uprising with brutal violence. Mass graves and hundreds of thousands killed. The US, despite President Bush having encouraged Iraqis to rise up, provided no assistance.",
    },
  },
  1995: {
    title: { fa: "تحریم‌های فلج‌کننده و بحران انسانی عراق", en: "Crippling Sanctions & Iraqi Humanitarian Crisis" },
    description: { fa: "تحریم‌های سازمان ملل فاجعه انسانی در عراق ایجاد کرد", en: "UN sanctions create humanitarian catastrophe in Iraq" },
    details: {
      fa: "تحریم‌های فراگیر سازمان ملل علیه عراق که از ۱۹۹۰ آغاز شده بود، در اواسط دهه ۱۹۹۰ به فاجعه انسانی تبدیل شد. سیستم بهداشت فروپاشید، سوءتغذیه کودکان گسترش یافت و تورم اقتصاد را فلج کرد. یونیسف تخمین زد بیش از ۵۰۰ هزار کودک عراقی بر اثر تحریم‌ها جان باختند. برنامه «نفت در برابر غذا» در ۱۹۹۶ آغاز شد اما نتوانست بحران را حل کند.",
      en: "The comprehensive UN sanctions against Iraq, imposed since 1990, had become a humanitarian catastrophe by the mid-1990s. The health system collapsed, child malnutrition spread, and inflation paralyzed the economy. UNICEF estimated over 500,000 Iraqi children died due to sanctions. The Oil-for-Food program began in 1996 but failed to resolve the crisis.",
    },
  },
  1998: {
    title: { fa: "عملیات روباه صحرا - بمباران عراق", en: "Operation Desert Fox - Bombing of Iraq" },
    description: { fa: "آمریکا و بریتانیا عراق را به بهانه عدم همکاری با بازرسان بمباران کردند", en: "US and Britain bomb Iraq over non-cooperation with weapons inspectors" },
    details: {
      fa: "در دسامبر ۱۹۹۸ آمریکا و بریتانیا عملیات روباه صحرا را اجرا کردند و مواضع نظامی و حکومتی عراق را چهار روز بمباران نمودند. بهانه: عدم همکاری عراق با بازرسان تسلیحاتی سازمان ملل. این عملیات نتوانست حکومت صدام را ساقط کند اما زیرساخت‌های عراق را بیشتر تخریب نمود.",
      en: "In December 1998, the US and Britain launched Operation Desert Fox, bombing Iraqi military and government targets for four days. Pretext: Iraq's non-cooperation with UN weapons inspectors. The operation failed to topple Saddam's regime but further destroyed Iraq's infrastructure.",
    },
  },
  2003: {
    title: { fa: "حمله آمریکا به عراق و سقوط صدام حسین", en: "US Invasion of Iraq & Fall of Saddam Hussein" },
    description: { fa: "آمریکا بر اساس ادعای دروغین سلاح کشتار جمعی به عراق حمله کرد", en: "US invades Iraq based on false WMD claims" },
    details: {
      fa: "در ۲۰ مارس ۲۰۰۳ آمریکا و بریتانیا بدون مجوز شورای امنیت به عراق حمله کردند. بهانه: وجود سلاح‌های کشتار جمعی که هرگز پیدا نشدند. بغداد در ۹ آوریل سقوط کرد و مجسمه صدام فروریخت. صدام مخفی شد و در دسامبر در یک مخفیگاه زیرزمینی دستگیر گردید. اشغال عراق به هرج‌ومرج، غارت موزه‌ها و فروپاشی نهادهای دولتی منجر شد.",
      en: "On March 20, 2003, the US and Britain invaded Iraq without UN Security Council authorization. Pretext: WMDs that were never found. Baghdad fell on April 9 and Saddam's statue was toppled. Saddam went into hiding and was captured in December in an underground bunker. The occupation led to chaos, museum looting, and collapse of state institutions.",
    },
  },
  2004: {
    title: { fa: "رسوایی ابوغریب و آغاز مقاومت مسلحانه", en: "Abu Ghraib Scandal & Start of Armed Insurgency" },
    description: { fa: "تصاویر شکنجه زندانیان عراقی در ابوغریب جهان را شوکه کرد", en: "Images of torture of Iraqi prisoners at Abu Ghraib shock the world" },
    details: {
      fa: "در آوریل ۲۰۰۴ تصاویر شکنجه و تحقیر زندانیان عراقی توسط سربازان آمریکایی در زندان ابوغریب منتشر شد و رسوایی جهانی ایجاد کرد. همزمان مقاومت مسلحانه سنی و شیعی علیه اشغال تشدید شد. مقتدی صدر رهبر جریان صدر در نجف و فلوجه صحنه نبردهای خونین شد.",
      en: "In April 2004, images of torture and humiliation of Iraqi prisoners by US soldiers at Abu Ghraib prison were published, creating a global scandal. Simultaneously, Sunni and Shia armed resistance against the occupation intensified. Muqtada al-Sadr's movement and battles in Najaf and Fallujah became scenes of bloody fighting.",
    },
  },
  2005: {
    title: { fa: "اولین انتخابات آزاد و قانون اساسی جدید عراق", en: "First Free Elections & New Iraqi Constitution" },
    description: { fa: "عراقی‌ها برای اولین بار در انتخابات آزاد شرکت کردند", en: "Iraqis participate in free elections for the first time" },
    details: {
      fa: "در ژانویه ۲۰۰۵ اولین انتخابات آزاد عراق برگزار شد. شیعیان و کردها مشارکت گسترده داشتند اما سنی‌ها عمدتاً تحریم کردند. در اکتبر قانون اساسی جدید در همه‌پرسی تصویب شد. سیستم فدرال با منطقه خودمختار کردستان ایجاد گردید. اما تنش‌های فرقه‌ای شدت گرفت و عراق به سمت جنگ داخلی حرکت کرد.",
      en: "In January 2005, Iraq's first free elections were held. Shia and Kurds participated widely but Sunnis largely boycotted. In October, a new constitution was approved by referendum. A federal system with an autonomous Kurdistan region was established. However, sectarian tensions intensified and Iraq moved toward civil war.",
    },
  },
  2006: {
    title: { fa: "بمباران مسجد العسکری و جنگ فرقه‌ای", en: "Al-Askari Mosque Bombing & Sectarian War" },
    description: { fa: "بمباران مسجد شیعیان در سامرا جنگ فرقه‌ای خونین را آغاز کرد", en: "Bombing of Shia mosque in Samarra triggers bloody sectarian war" },
    details: {
      fa: "در ۲۲ فوریه ۲۰۰۶ مسجد امامین عسکریین در سامرا که یکی از مقدس‌ترین زیارتگاه‌های شیعیان است، توسط القاعده عراق بمباران شد. گنبد طلایی مسجد ویران گردید. این حادثه جنگ فرقه‌ای تمام‌عیار بین شیعه و سنی را آغاز کرد. جوخه‌های مرگ، قتل‌عام‌ها و پاک‌سازی قومی بغداد و شهرهای دیگر را فراگرفت. ده‌ها هزار غیرنظامی کشته شدند.",
      en: "On February 22, 2006, the al-Askari Mosque in Samarra, one of Shia Islam's holiest shrines, was bombed by al-Qaeda in Iraq. The golden dome was destroyed. This triggered an all-out sectarian war between Shia and Sunni. Death squads, massacres, and ethnic cleansing engulfed Baghdad and other cities. Tens of thousands of civilians were killed.",
    },
  },
  2006.5: {
    year: 2006,
    title: { fa: "اعدام صدام حسین", en: "Execution of Saddam Hussein" },
    description: { fa: "صدام حسین پس از محاکمه به جرم جنایت علیه بشریت اعدام شد", en: "Saddam Hussein executed after trial for crimes against humanity" },
    details: {
      fa: "در ۳۰ دسامبر ۲۰۰۶ صدام حسین پس از محاکمه در دادگاه ویژه عراق به جرم کشتار دجیل (قتل ۱۴۸ شیعه در ۱۹۸۲) به اعدام محکوم و به دار آویخته شد. ویدیوی غیررسمی اعدام که توهین‌های حاضران را نشان می‌داد، جنجال جهانی ایجاد کرد. مرگ صدام خشونت فرقه‌ای را بیشتر تشدید نمود.",
      en: "On December 30, 2006, Saddam Hussein was hanged after being convicted of crimes against humanity by the Iraqi Special Tribunal for the Dujail massacre (killing 148 Shia in 1982). Unofficial video of the execution showing attendees' taunts created a global controversy. Saddam's death further intensified sectarian violence.",
    },
  },
  2007: {
    title: { fa: "موج نیرو آمریکا و اوج خشونت فرقه‌ای", en: "US Troop Surge & Peak of Sectarian Violence" },
    description: { fa: "آمریکا ۳۰ هزار نیرو اضافی فرستاد و شوراهای بیداری سنی تشکیل شد", en: "US sends 30,000 additional troops, Sunni Awakening Councils formed" },
    details: {
      fa: "در ژانویه ۲۰۰۷ بوش تصمیم به افزایش نیرو (سرج) گرفت و ۳۰ هزار سرباز اضافی به عراق فرستاد. همزمان قبایل سنی استان الانبار که از خشونت القاعده خسته شده بودند، شوراهای بیداری (صحوات) تشکیل دادند و با آمریکا همکاری کردند. خشونت به تدریج کاهش یافت اما بهای انسانی جنگ عراق همچنان سنگین بود.",
      en: "In January 2007, Bush decided on the troop surge, sending 30,000 additional soldiers to Iraq. Simultaneously, Sunni tribes in Anbar province, weary of al-Qaeda's violence, formed Awakening Councils (Sahwa) and cooperated with the US. Violence gradually decreased but the human cost of the Iraq war remained staggering.",
    },
  },
  2008: {
    title: { fa: "توافق خروج نیروهای آمریکا از عراق", en: "US-Iraq Status of Forces Agreement" },
    description: { fa: "عراق و آمریکا توافق‌نامه وضعیت نیروها و جدول خروج امضا کردند", en: "Iraq and US sign Status of Forces Agreement and withdrawal timeline" },
    details: {
      fa: "در نوامبر ۲۰۰۸ عراق و آمریکا توافق‌نامه وضعیت نیروها (SOFA) را امضا کردند. بر اساس این توافق، نیروهای آمریکایی باید تا پایان ۲۰۱۱ عراق را ترک می‌کردند. نوری مالکی نخست‌وزیر عراق که با فشار ایران و مقتدی صدر مواجه بود، بر خروج نیروها اصرار داشت. این توافق پایان رسمی اشغال نظامی آمریکا را رقم زد.",
      en: "In November 2008, Iraq and the US signed the Status of Forces Agreement (SOFA). Under this agreement, US forces were to leave Iraq by the end of 2011. Iraqi PM Nouri al-Maliki, facing pressure from Iran and Muqtada al-Sadr, insisted on troop withdrawal. This agreement marked the formal end of US military occupation.",
    },
  },
  2010: {
    title: { fa: "بحران تشکیل دولت و بن‌بست سیاسی عراق", en: "Government Formation Crisis & Iraqi Political Deadlock" },
    description: { fa: "انتخابات پارلمانی به بن‌بست سیاسی ۹ ماهه منجر شد", en: "Parliamentary elections lead to 9-month political deadlock" },
    details: {
      fa: "انتخابات مارس ۲۰۱۰ با پیروزی اندک ائتلاف العراقیه به رهبری ایاد علاوی همراه بود اما نوری مالکی با حمایت ایران و ائتلاف شیعی موفق شد پس از ۹ ماه بن‌بست سیاسی، حکومت تشکیل دهد. مالکی به تدریج قدرت را متمرکز کرد و سنی‌ها را از حکومت حذف نمود. این سیاست‌های فرقه‌ای زمینه‌ساز ظهور داعش شد.",
      en: "The March 2010 elections resulted in a narrow victory for Ayad Allawi's Iraqiya coalition, but Nouri al-Maliki, with Iranian support and a Shia coalition, managed to form a government after a 9-month political deadlock. Maliki gradually centralized power and marginalized Sunnis. These sectarian policies laid the groundwork for the rise of ISIS.",
    },
  },
  2011: {
    title: { fa: "خروج نیروهای آمریکا از عراق", en: "US Forces Withdraw from Iraq" },
    description: { fa: "آخرین نیروهای رزمی آمریکا عراق را ترک کردند", en: "Last US combat forces leave Iraq" },
    details: {
      fa: "در دسامبر ۲۰۱۱ آخرین نیروهای رزمی آمریکا عراق را ترک کردند و نزدیک به ۹ سال اشغال نظامی پایان یافت. بیش از ۴۵۰۰ سرباز آمریکایی و صدها هزار عراقی در جنگ کشته شده بودند. اوباما خروج را موفقیت خواند اما منتقدان هشدار دادند که عراق هنوز ثبات نیافته و خروج زودهنگام خلأ امنیتی ایجاد می‌کند.",
      en: "In December 2011, the last US combat forces left Iraq, ending nearly 9 years of military occupation. Over 4,500 US soldiers and hundreds of thousands of Iraqis had been killed. Obama called the withdrawal a success, but critics warned that Iraq was still unstable and premature withdrawal would create a security vacuum.",
    },
  },
  2013: {
    title: { fa: "اعتراضات سنی‌ها و تشدید خشونت", en: "Sunni Protests & Escalation of Violence" },
    description: { fa: "سنی‌های عراق علیه تبعیض حکومت مالکی تظاهرات گسترده کردند", en: "Iraqi Sunnis stage mass protests against Maliki government discrimination" },
    details: {
      fa: "از دسامبر ۲۰۱۲ تظاهرات گسترده سنی‌ها در استان‌های الانبار، صلاح‌الدین و نینوا علیه سیاست‌های فرقه‌ای مالکی آغاز شد. معترضان خواستار پایان بازداشت‌های خودسرانه، حذف قانون ضد بعث و مشارکت سیاسی عادلانه بودند. مالکی تظاهرات را با زور سرکوب کرد. نارضایتی سنی‌ها زمینه مناسبی برای نفوذ داعش فراهم ساخت.",
      en: "From December 2012, mass Sunni protests erupted in Anbar, Salah ad-Din, and Nineveh provinces against Maliki's sectarian policies. Protesters demanded an end to arbitrary arrests, repeal of the de-Ba'athification law, and fair political participation. Maliki suppressed the protests by force. Sunni grievances created fertile ground for ISIS infiltration.",
    },
  },
  2014: {
    title: { fa: "سقوط موصل و ظهور داعش", en: "Fall of Mosul & Rise of ISIS" },
    description: { fa: "داعش موصل دومین شهر بزرگ عراق را تصرف کرد", en: "ISIS captures Mosul, Iraq's second-largest city" },
    details: {
      fa: "در ۱۰ ژوئن ۲۰۱۴ داعش (دولت اسلامی عراق و شام) موصل را با نیرویی بسیار کمتر از ارتش عراق تصرف کرد. سه لشکر ارتش عراق بدون مقاومت فرار کردند. ابوبکر البغدادی در مسجد النوری موصل «خلافت اسلامی» اعلام کرد. داعش بخش وسیعی از شمال و غرب عراق را تصرف کرد. آیت‌الله سیستانی فتوای جهاد صادر کرد و نیروهای حشد الشعبی تشکیل شدند.",
      en: "On June 10, 2014, ISIS (Islamic State of Iraq and Syria) captured Mosul with a force far smaller than the Iraqi army. Three Iraqi army divisions fled without resistance. Abu Bakr al-Baghdadi declared an 'Islamic Caliphate' at Mosul's al-Nuri Mosque. ISIS seized vast areas of northern and western Iraq. Grand Ayatollah Sistani issued a jihad fatwa and the Popular Mobilization Forces were formed.",
    },
  },
  2016: {
    title: { fa: "آغاز عملیات آزادسازی موصل", en: "Start of Mosul Liberation Operation" },
    description: { fa: "ارتش عراق عملیات بازپس‌گیری موصل از داعش را آغاز کرد", en: "Iraqi army launches operation to retake Mosul from ISIS" },
    details: {
      fa: "در ۱۷ اکتبر ۲۰۱۶ ارتش عراق، نیروهای حشد الشعبی، پیشمرگه کردستان و ائتلاف بین‌المللی عملیات آزادسازی موصل را آغاز کردند. نبرد برای شرق موصل سه ماه و برای غرب موصل ۹ ماه طول کشید. داعش از غیرنظامیان به عنوان سپر انسانی استفاده کرد. هزاران غیرنظامی کشته و بخش بزرگی از شهر قدیمی موصل ویران شد.",
      en: "On October 17, 2016, the Iraqi army, Popular Mobilization Forces, Kurdistan Peshmerga, and the international coalition launched the Mosul liberation operation. The battle for eastern Mosul took three months and western Mosul nine months. ISIS used civilians as human shields. Thousands of civilians were killed and much of Mosul's old city was destroyed.",
    },
  },
  2017: {
    title: { fa: "آزادسازی موصل و همه‌پرسی استقلال کردستان", en: "Mosul Liberation & Kurdistan Independence Referendum" },
    description: { fa: "موصل آزاد شد و کردها همه‌پرسی استقلال برگزار کردند اما با واکنش بغداد مواجه شدند", en: "Mosul liberated; Kurds hold independence referendum but face Baghdad's backlash" },
    details: {
      fa: "در ژوئیه ۲۰۱۷ نخست‌وزیر حیدر العبادی پیروزی نهایی در موصل را اعلام کرد. اما در سپتامبر اقلیم کردستان به رهبری مسعود بارزانی همه‌پرسی استقلال برگزار کرد که ۹۳ درصد به استقلال رأی دادند. بغداد، ایران و ترکیه شدیداً مخالفت کردند. ارتش عراق کرکوک و مناطق مورد مناقشه را بازپس گرفت و کردها بخش قابل توجهی از قلمرو خود را از دست دادند.",
      en: "In July 2017, PM Haider al-Abadi declared final victory in Mosul. But in September, the Kurdistan Region under Masoud Barzani held an independence referendum where 93% voted for independence. Baghdad, Iran, and Turkey strongly opposed it. The Iraqi army retook Kirkuk and disputed territories, and the Kurds lost a significant portion of their territory.",
    },
  },
  2018: {
    title: { fa: "اعلام پیروزی بر داعش و انتخابات پارلمانی", en: "Victory Over ISIS Declared & Parliamentary Elections" },
    description: { fa: "عراق پیروزی بر داعش را اعلام کرد و انتخابات با مشارکت پایین برگزار شد", en: "Iraq declares victory over ISIS; elections held with low turnout" },
    details: {
      fa: "در دسامبر ۲۰۱۷ حیدر العبادی پیروزی کامل بر داعش در عراق را اعلام کرد. اما در انتخابات مه ۲۰۱۸ مشارکت مردم تنها ۴۴ درصد بود که نارضایتی عمیق از طبقه سیاسی را نشان می‌داد. ائتلاف سائرون مقتدی صدر با ائتلاف فتح (حشد الشعبی) رقابت کرد. عادل عبدالمهدی نخست‌وزیر سازشی شد.",
      en: "In December 2017, Haider al-Abadi declared complete victory over ISIS in Iraq. However, in the May 2018 elections, voter turnout was only 44%, reflecting deep public dissatisfaction with the political class. Muqtada al-Sadr's Sairoon coalition competed with the Fatah Alliance (PMF). Adel Abdul-Mahdi became a compromise prime minister.",
    },
  },
  2019: {
    title: { fa: "انقلاب اکتبر - اعتراضات گسترده مردمی", en: "October Revolution - Mass Popular Protests" },
    description: { fa: "جوانان عراقی علیه فساد، بیکاری و نفوذ ایران به خیابان‌ها ریختند", en: "Iraqi youth take to streets against corruption, unemployment, and Iranian influence" },
    details: {
      fa: "در اکتبر ۲۰۱۹ اعتراضات گسترده‌ای در بغداد و شهرهای جنوب عراق آغاز شد. جوانان خواستار اصلاحات، مبارزه با فساد، ایجاد اشتغال و پایان نفوذ ایران بودند. نیروهای امنیتی و شبه‌نظامیان وابسته به ایران بیش از ۶۰۰ معترض را کشتند و ۲۰ هزار نفر زخمی شدند. عبدالمهدی استعفا داد. این بزرگ‌ترین جنبش اعتراضی تاریخ عراق مدرن بود.",
      en: "In October 2019, massive protests erupted in Baghdad and southern Iraqi cities. Young people demanded reforms, anti-corruption measures, jobs, and an end to Iranian influence. Security forces and Iran-backed militias killed over 600 protesters and wounded 20,000. Abdul-Mahdi resigned. This was the largest protest movement in modern Iraqi history.",
    },
  },
  2020: {
    title: { fa: "ترور سلیمانی و ابومهدی المهندس در بغداد", en: "Assassination of Soleimani & Abu Mahdi al-Muhandis in Baghdad" },
    description: { fa: "آمریکا فرماندهان ایرانی و عراقی را در فرودگاه بغداد ترور کرد", en: "US assassinates Iranian and Iraqi commanders at Baghdad airport" },
    details: {
      fa: "در ۳ ژانویه ۲۰۲۰ آمریکا با حمله پهپادی قاسم سلیمانی فرمانده نیروی قدس سپاه پاسداران و ابومهدی المهندس معاون فرمانده حشد الشعبی عراق را در فرودگاه بغداد ترور کرد. پارلمان عراق خواستار اخراج نیروهای آمریکایی شد. ایران با موشک‌باران پایگاه عین‌الاسد پاسخ داد. این رویداد تنش ایران و آمریکا را به آستانه جنگ رساند.",
      en: "On January 3, 2020, the US assassinated Qassem Soleimani, commander of Iran's IRGC Quds Force, and Abu Mahdi al-Muhandis, deputy commander of Iraq's Popular Mobilization Forces, in a drone strike at Baghdad airport. The Iraqi parliament demanded the expulsion of US forces. Iran retaliated by striking Ain al-Asad base. This event brought Iran-US tensions to the brink of war.",
    },
  },
  2021: {
    title: { fa: "انتخابات زودهنگام و پیروزی صدری‌ها", en: "Early Elections & Sadrist Victory" },
    description: { fa: "جریان صدر در انتخابات پارلمانی پیروز شد اما تشکیل دولت به بن‌بست رسید", en: "Sadrist movement wins parliamentary elections but government formation deadlocked" },
    details: {
      fa: "در اکتبر ۲۰۲۱ انتخابات زودهنگام پارلمانی با مشارکت پایین ۴۱ درصد برگزار شد. جریان صدر بیشترین کرسی‌ها را کسب کرد اما چارچوب هماهنگی شیعی (وابسته به ایران) مانع تشکیل دولت شد. بن‌بست سیاسی ماه‌ها ادامه یافت و مقتدی صدر سرانجام نمایندگانش را از پارلمان خارج کرد.",
      en: "In October 2021, early parliamentary elections were held with a low 41% turnout. The Sadrist movement won the most seats, but the Iran-backed Coordination Framework blocked government formation. The political deadlock lasted months, and Muqtada al-Sadr ultimately withdrew his representatives from parliament.",
    },
  },
  2022: {
    title: { fa: "درگیری‌های منطقه سبز و بحران سیاسی", en: "Green Zone Clashes & Political Crisis" },
    description: { fa: "هواداران مقتدی صدر منطقه سبز بغداد را اشغال کردند و درگیری‌های خونین رخ داد", en: "Muqtada al-Sadr supporters storm Baghdad's Green Zone, bloody clashes erupt" },
    details: {
      fa: "در اوت ۲۰۲۲ هواداران مقتدی صدر ساختمان پارلمان در منطقه سبز بغداد را اشغال کردند. درگیری‌های مسلحانه بین صدری‌ها و شبه‌نظامیان چارچوب هماهنگی رخ داد و ده‌ها نفر کشته و زخمی شدند. صدر سرانجام از هوادارانش خواست عقب‌نشینی کنند. محمد شیاع السودانی از چارچوب هماهنگی نخست‌وزیر شد.",
      en: "In August 2022, Muqtada al-Sadr's supporters stormed the parliament building in Baghdad's Green Zone. Armed clashes erupted between Sadrists and Coordination Framework militias, killing and wounding dozens. Sadr eventually asked his supporters to withdraw. Mohammed Shia al-Sudani from the Coordination Framework became prime minister.",
    },
  },
  2023: {
    title: { fa: "بازسازی و ثبات نسبی عراق", en: "Reconstruction & Relative Stability in Iraq" },
    description: { fa: "عراق دوره‌ای از ثبات نسبی و تلاش برای بازسازی را تجربه کرد", en: "Iraq experiences period of relative stability and reconstruction efforts" },
    details: {
      fa: "در ۲۰۲۳ عراق تحت دولت السودانی دوره‌ای از ثبات نسبی را تجربه کرد. درآمد نفت افزایش یافت و بودجه ۱۵۳ میلیارد دلاری سه‌ساله تصویب شد. پروژه‌های بازسازی موصل و مناطق تخریب‌شده ادامه یافت. اما فساد گسترده، بیکاری جوانان و نفوذ شبه‌نظامیان همچنان چالش‌های اساسی بودند.",
      en: "In 2023, Iraq under the Sudani government experienced a period of relative stability. Oil revenues increased and a $153 billion three-year budget was approved. Reconstruction projects in Mosul and destroyed areas continued. However, widespread corruption, youth unemployment, and militia influence remained fundamental challenges.",
    },
  },
  2024: {
    title: { fa: "تنش شبه‌نظامیان عراقی با آمریکا", en: "Iraqi Militia Tensions with the US" },
    description: { fa: "شبه‌نظامیان عراقی وابسته به ایران پایگاه‌های آمریکایی را هدف حمله قرار دادند", en: "Iran-backed Iraqi militias target US bases with attacks" },
    details: {
      fa: "در اوایل ۲۰۲۴ در پی جنگ غزه، شبه‌نظامیان عراقی وابسته به ایران حملات پهپادی و موشکی متعددی به پایگاه‌های آمریکایی در عراق و سوریه انجام دادند. حمله به برج ۲۲ در اردن سه سرباز آمریکایی را کشت. آمریکا تلافی کرد و رهبران شبه‌نظامی را ترور نمود. این تنش‌ها بار دیگر عراق را در میانه رقابت ایران و آمریکا قرار داد.",
      en: "In early 2024, following the Gaza war, Iran-backed Iraqi militias launched numerous drone and missile attacks on US bases in Iraq and Syria. An attack on Tower 22 in Jordan killed three US soldiers. The US retaliated by assassinating militia leaders. These tensions once again placed Iraq at the center of the Iran-US rivalry.",
    },
  },
};

// ============================================================
// STEP 3: Insert events into the file
// ============================================================

let insertCount = 0;

for (const [key, event] of Object.entries(iraqEvents)) {
  const year = event.year || Math.floor(Number(key));

  // Find the year entry
  const yearPattern = `year: ${year},`;
  const yearIndex = content.indexOf(yearPattern);

  if (yearIndex === -1) {
    console.log(`WARNING: Year ${year} not found in file, skipping.`);
    continue;
  }

  // Find the next year entry to limit our search scope
  const nextYearMatch = content.substring(yearIndex + yearPattern.length).match(/\n  \{[\s\S]*?year: \d{4},/);
  const searchEnd = nextYearMatch
    ? yearIndex + yearPattern.length + nextYearMatch.index
    : content.length;

  const yearBlock = content.substring(yearIndex, searchEnd);

  // Find `world: [` in this year block
  const worldArrayStart = yearBlock.indexOf('world: [');

  // Escape special chars for the event strings
  const titleFa = event.title.fa;
  const titleEn = event.title.en;
  const descFa = event.description.fa;
  const descEn = event.description.en;
  const detailsFa = event.details.fa;
  const detailsEn = event.details.en;

  if (worldArrayStart === -1) {
    // No world array - need to add one
    // Find the closing of the iran array: look for "],\n" before searchEnd
    const blockEnd = content.lastIndexOf('],', searchEnd);
    if (blockEnd === -1 || blockEnd < yearIndex) {
      console.log(`WARNING: Could not find iran array closing for year ${year}, skipping.`);
      continue;
    }
    // Insert world array after the iran array closing "],"
    const insertPos = blockEnd + 2; // after "],"
    const worldBlock = `\n    world: [\n      {\n        country: "iraq",\n        title: { fa: "${titleFa}", en: "${titleEn}" },\n        description: { fa: "${descFa}", en: "${descEn}" },\n        details: {\n          fa: "${detailsFa}",\n          en: "${detailsEn}",\n        },\n      },\n    ],`;
    content = content.substring(0, insertPos) + worldBlock + content.substring(insertPos);
    insertCount++;
    console.log(`Inserted Iraq event for year ${year} (new world array)`);
    continue;
  }

  // Has world array - find its closing `]`
  const worldStart = yearIndex + worldArrayStart + 'world: ['.length;
  let depth = 1;
  let pos = worldStart;
  while (depth > 0 && pos < searchEnd + 5000) {
    if (content[pos] === '[') depth++;
    if (content[pos] === ']') depth--;
    if (depth > 0) pos++;
  }

  // pos is now at the closing `]` of world array
  const insertPos = pos;

  const eventStr = `\n      {\n        country: "iraq",\n        title: { fa: "${titleFa}", en: "${titleEn}" },\n        description: { fa: "${descFa}", en: "${descEn}" },\n        details: {\n          fa: "${detailsFa}",\n          en: "${detailsEn}",\n        },\n      },`;

  content = content.substring(0, insertPos) + eventStr + content.substring(insertPos);
  insertCount++;
  console.log(`Inserted Iraq event for year ${year}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone! Inserted ${insertCount} Iraq events.`);
console.log(`Also removed Ba'athist coup 1963 and Saddam coup 1979 from iran arrays (now added as iraq world events).`);
