const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Additional Japan events to reach 50+
const japanExtra = {
  1900: {
    title: { fa: "ژاپن در شورش بوکسورها شرکت کرد", en: "Japan Participates in Boxer Rebellion" },
    description: { fa: "ژاپن بزرگ‌ترین سهم نیروی نظامی را در سرکوب شورش بوکسورها داشت", en: "Japan contributes the largest military contingent to suppress Boxer Rebellion" },
    details: {
      fa: "در ۱۹۰۰ ژاپن بیشترین نیروی نظامی را در ائتلاف هشت کشوری برای سرکوب شورش بوکسورها در چین اعزام کرد. این مشارکت نقش ژاپن را به عنوان قدرت نظامی آسیا تقویت کرد و احترام قدرت‌های غربی را جلب نمود.",
      en: "In 1900, Japan sent the largest military contingent in the eight-nation coalition to suppress the Boxer Rebellion in China. This participation strengthened Japan's role as Asia's military power and earned Western respect.",
    },
  },
  1918: {
    title: { fa: "شورش برنج در ژاپن", en: "Rice Riots in Japan" },
    description: { fa: "شورش‌های گسترده مردمی به دلیل گرانی برنج سراسر ژاپن را فرا گرفت", en: "Widespread popular riots over rice prices sweep across Japan" },
    details: {
      fa: "در تابستان ۱۹۱۸ افزایش شدید قیمت برنج موجب شورش‌های گسترده در سراسر ژاپن شد. بیش از یک میلیون نفر در ۳۶ شهر شرکت کردند. دولت ارتش را برای سرکوب اعزام کرد. این شورش‌ها ناتوانی نظام سیاسی الیگارشی را آشکار ساخت و زمینه گسترش دموکراسی تایشو را فراهم کرد.",
      en: "In summer 1918, sharp rice price increases triggered widespread riots across Japan. Over one million people participated in 36 cities. The government deployed the army for suppression. These riots exposed the oligarchic political system's inadequacy and paved the way for expanded Taisho democracy.",
    },
  },
  1927: {
    title: { fa: "بحران مالی شووا و سقوط بانک‌ها", en: "Showa Financial Crisis & Bank Failures" },
    description: { fa: "بحران مالی موجب ورشکستگی بانک‌ها و تقویت ملی‌گرایان شد", en: "Financial crisis causes bank failures and strengthens nationalists" },
    details: {
      fa: "در ۱۹۲۷ بحران مالی شووا موجب ورشکستگی ده‌ها بانک در ژاپن شد. مردم برای برداشت سپرده‌ها هجوم آوردند. این بحران اعتماد به نظام سرمایه‌داری لیبرال را تضعیف کرد و زمینه را برای رشد ملی‌گرایان و نظامیان فراهم ساخت.",
      en: "In 1927, the Showa Financial Crisis caused the failure of dozens of banks in Japan. People rushed to withdraw deposits. The crisis weakened confidence in the liberal capitalist system and paved the way for the rise of nationalists and militarists.",
    },
  },
  1932: {
    title: { fa: "ترور نخست‌وزیر اینوکای و پایان دموکراسی حزبی", en: "PM Inukai Assassinated & End of Party Democracy" },
    description: { fa: "افسران جوان نخست‌وزیر را ترور کردند و دموکراسی حزبی پایان یافت", en: "Young officers assassinate PM, ending party-based democracy" },
    details: {
      fa: "در ۱۵ مه ۱۹۳۲ افسران جوان نیروی دریایی نخست‌وزیر اینوکای تسویوشی را ترور کردند. او آخرین نخست‌وزیری بود که از یک حزب سیاسی برخاسته بود. پس از او دولت‌های بروکراتیک و نظامی تشکیل شد و ژاپن به سوی میلیتاریسم تمام‌عیار حرکت کرد.",
      en: "On May 15, 1932, young naval officers assassinated PM Tsuyoshi Inukai. He was the last prime minister to come from a political party. After him, bureaucratic and military governments were formed, and Japan moved toward full militarism.",
    },
  },
  1938: {
    title: { fa: "قانون بسیج ملی و اقتصاد جنگی ژاپن", en: "National Mobilization Law & Japan's War Economy" },
    description: { fa: "ژاپن قانون بسیج ملی تصویب کرد و تمام اقتصاد برای جنگ بسیج شد", en: "Japan passes National Mobilization Law, entire economy mobilized for war" },
    details: {
      fa: "در ۱۹۳۸ ژاپن قانون بسیج ملی را تصویب کرد که به دولت اختیار کامل بر اقتصاد، صنعت و نیروی کار داد. تمام منابع کشور برای جنگ با چین بسیج شد. آزادی‌های مدنی محدود و رسانه‌ها تحت سانسور قرار گرفتند. ژاپن عملاً به دولت نظامی تبدیل شده بود.",
      en: "In 1938, Japan passed the National Mobilization Law, giving the government complete control over the economy, industry, and labor. All national resources were mobilized for the war with China. Civil liberties were restricted and media censored. Japan had effectively become a military state.",
    },
  },
  1944: {
    title: { fa: "حملات کامیکازه و نبرد لیته", en: "Kamikaze Attacks & Battle of Leyte Gulf" },
    description: { fa: "ژاپن حملات انتحاری کامیکازه را آغاز کرد و در بزرگ‌ترین نبرد دریایی تاریخ شکست خورد", en: "Japan launches kamikaze suicide attacks and is defeated in the largest naval battle in history" },
    details: {
      fa: "در اکتبر ۱۹۴۴ نبرد خلیج لیته بزرگ‌ترین نبرد دریایی تاریخ بود و نیروی دریایی ژاپن عملاً نابود شد. ژاپن حملات انتحاری کامیکازه را آغاز کرد که در آن خلبانان هواپیماهای پر از بمب را عمداً به کشتی‌های آمریکایی می‌کوبیدند. این حملات نماد ناامیدی نظامی ژاپن بود.",
      en: "In October 1944, the Battle of Leyte Gulf, the largest naval battle in history, effectively destroyed the Japanese navy. Japan launched kamikaze suicide attacks, in which pilots deliberately crashed bomb-laden planes into American ships. These attacks symbolized Japan's military desperation.",
    },
  },
  2013: {
    title: { fa: "انتخاب توکیو برای میزبانی المپیک ۲۰۲۰", en: "Tokyo Selected to Host 2020 Olympics" },
    description: { fa: "توکیو میزبان بازی‌های المپیک ۲۰۲۰ انتخاب شد", en: "Tokyo selected to host the 2020 Olympic Games" },
    details: {
      fa: "در سپتامبر ۲۰۱۳ کمیته بین‌المللی المپیک توکیو را به عنوان میزبان بازی‌های المپیک ۲۰۲۰ انتخاب کرد. این دومین بار بود که توکیو میزبان المپیک می‌شد. ژاپن امیدوار بود المپیک محرک بازسازی پس از فاجعه فوکوشیما و احیای اقتصادی باشد.",
      en: "In September 2013, the International Olympic Committee selected Tokyo to host the 2020 Olympic Games. This was the second time Tokyo would host the Olympics. Japan hoped the Games would drive reconstruction after the Fukushima disaster and economic revival.",
    },
  },
};

// Additional Turkey events to reach 50+
const turkeyExtra = {
  1900: {
    title: { fa: "بحران امپراتوری عثمانی و نفوذ اروپا", en: "Ottoman Empire Crisis & European Influence" },
    description: { fa: "عثمانی با بدهی‌های سنگین و فشار قدرت‌های اروپایی دست و پنجه نرم می‌کرد", en: "Ottoman Empire grapples with heavy debts and pressure from European powers" },
    details: {
      fa: "در آغاز قرن بیستم امپراتوری عثمانی «مرد بیمار اروپا» نامیده می‌شد. بدهی‌های سنگین خارجی، از دست رفتن سرزمین‌ها در بالکان و شمال آفریقا، و فشار اصلاح‌طلبان داخلی امپراتوری را در وضعیت بحرانی قرار داده بود. سلطان عبدالحمید دوم با حکومت استبدادی بر تخت بود.",
      en: "At the beginning of the 20th century, the Ottoman Empire was called the 'sick man of Europe.' Heavy foreign debts, loss of territories in the Balkans and North Africa, and pressure from domestic reformers had placed the empire in crisis. Sultan Abdul Hamid II ruled with an authoritarian hand.",
    },
  },
  1911: {
    title: { fa: "جنگ ایتالیا و عثمانی و از دست رفتن لیبی", en: "Italo-Ottoman War & Loss of Libya" },
    description: { fa: "ایتالیا به عثمانی حمله کرد و لیبی را تصرف نمود", en: "Italy attacks Ottoman Empire and seizes Libya" },
    details: {
      fa: "در سپتامبر ۱۹۱۱ ایتالیا به طرابلس حمله کرد و جنگ با عثمانی آغاز شد. عثمانی که نیروی دریایی کافی نداشت نتوانست لیبی را حفظ کند. در ۱۹۱۲ پیمان صلح امضا شد و لیبی، آخرین سرزمین عثمانی در شمال آفریقا، به ایتالیا واگذار گردید.",
      en: "In September 1911, Italy attacked Tripoli and war with the Ottoman Empire began. The Ottomans, lacking sufficient naval power, could not defend Libya. A peace treaty was signed in 1912 and Libya, the last Ottoman territory in North Africa, was ceded to Italy.",
    },
  },
  1917: {
    title: { fa: "سقوط بغداد و اورشلیم به دست بریتانیا", en: "Fall of Baghdad & Jerusalem to Britain" },
    description: { fa: "بریتانیا بغداد و اورشلیم را از عثمانی تصرف کرد", en: "Britain captures Baghdad and Jerusalem from the Ottomans" },
    details: {
      fa: "در ۱۹۱۷ نیروهای بریتانیایی بغداد را در مارس و اورشلیم را در دسامبر از عثمانی تصرف کردند. امپراتوری عثمانی در حال فروپاشی بود. همزمان اعلامیه بالفور حمایت بریتانیا از تأسیس وطن یهود در فلسطین را اعلام کرد که تبعات عمیقی برای منطقه داشت.",
      en: "In 1917, British forces captured Baghdad in March and Jerusalem in December from the Ottomans. The Ottoman Empire was collapsing. Meanwhile, the Balfour Declaration announced British support for a Jewish homeland in Palestine, with profound consequences for the region.",
    },
  },
  1921: {
    title: { fa: "نبرد ساکاریا و پیروزی ملی‌گرایان", en: "Battle of Sakarya & Nationalist Victory" },
    description: { fa: "ارتش ملی‌گرا در نبرد ساکاریا یونان را شکست داد", en: "Nationalist army defeats Greece at the Battle of Sakarya" },
    details: {
      fa: "در اوت-سپتامبر ۱۹۲۱ نبرد ساکاریا یکی از سرنوشت‌سازترین نبردهای جنگ استقلال بود. ارتش ملی‌گرا به فرماندهی مصطفی کمال پس از ۲۲ روز جنگ ارتش یونان را شکست داد و از پیشروی به سوی آنکارا جلوگیری کرد. مجلس ملی لقب «غازی» و درجه مارشالی به مصطفی کمال اعطا نمود.",
      en: "In August-September 1921, the Battle of Sakarya was one of the most decisive battles of the War of Independence. The nationalist army under Mustafa Kemal defeated the Greek army after 22 days of fighting, preventing the advance toward Ankara. The National Assembly bestowed the title 'Ghazi' and the rank of Marshal on Mustafa Kemal.",
    },
  },
  1930: {
    title: { fa: "تأسیس و انحلال سریع حزب جمهوری‌خواه آزاد", en: "Free Republican Party Founded & Quickly Dissolved" },
    description: { fa: "آتاتورک آزمایش چندحزبی را انجام داد اما حزب مخالف به سرعت منحل شد", en: "Ataturk experiments with multi-party politics but opposition party quickly dissolved" },
    details: {
      fa: "در ۱۹۳۰ آتاتورک از فتحی اوکیار خواست حزب مخالف تأسیس کند تا دموکراسی چندحزبی آزمایش شود. حزب جمهوری‌خواه آزاد تأسیس شد اما به سرعت پایگاه مردمی گسترده یافت و مخالفان حکومت به آن پیوستند. آتاتورک نگران شد و حزب پس از سه ماه منحل گردید.",
      en: "In 1930, Ataturk asked Fethi Okyar to found an opposition party to test multi-party democracy. The Free Republican Party was established but quickly gained broad popular support and attracted government opponents. Ataturk grew concerned and the party was dissolved after three months.",
    },
  },
  1936: {
    title: { fa: "کنوانسیون مونترو و کنترل تنگه‌ها", en: "Montreux Convention & Control of the Straits" },
    description: { fa: "ترکیه کنترل نظامی تنگه‌های بسفر و داردانل را بازیافت", en: "Turkey regains military control of the Bosphorus and Dardanelles straits" },
    details: {
      fa: "در ژوئیه ۱۹۳۶ کنوانسیون مونترو امضا شد و ترکیه کنترل نظامی کامل تنگه‌های بسفر و داردانل را بازیافت. این پیروزی دیپلماتیک بزرگی برای ترکیه بود زیرا تنگه‌ها از پایان جنگ جهانی اول تحت نظارت بین‌المللی بودند. کنوانسیون مونترو هنوز معتبر است.",
      en: "In July 1936, the Montreux Convention was signed and Turkey regained full military control of the Bosphorus and Dardanelles straits. This was a major diplomatic victory for Turkey as the straits had been under international supervision since the end of WWI. The Montreux Convention remains in force.",
    },
  },
  1946: {
    title: { fa: "اولین انتخابات چندحزبی ترکیه", en: "Turkey's First Multi-Party Elections" },
    description: { fa: "اولین انتخابات چندحزبی ترکیه برگزار شد اما با تقلب همراه بود", en: "Turkey's first multi-party elections held but marred by fraud" },
    details: {
      fa: "در ژوئیه ۱۹۴۶ اولین انتخابات چندحزبی ترکیه برگزار شد. حزب جمهوری‌خواه خلق پیروز شد اما حزب دموکرات اتهام تقلب گسترده مطرح کرد. رأی‌گیری علنی و شمارش مخفی بود. با وجود مشکلات، این انتخابات گام مهمی در مسیر دموکراسی ترکیه محسوب شد.",
      en: "In July 1946, Turkey's first multi-party elections were held. The Republican People's Party won but the Democrat Party alleged widespread fraud. Voting was open and counting was secret. Despite problems, these elections were an important step on Turkey's path to democracy.",
    },
  },
  1955: {
    title: { fa: "یورش استانبول علیه اقلیت‌های یونانی", en: "Istanbul Pogrom Against Greek Minorities" },
    description: { fa: "حملات سازمان‌یافته علیه یونانیان، ارامنه و یهودیان استانبول رخ داد", en: "Organized attacks against Greeks, Armenians, and Jews in Istanbul" },
    details: {
      fa: "در ۶-۷ سپتامبر ۱۹۵۵ حملات سازمان‌یافته علیه اقلیت‌های یونانی، ارمنی و یهودی استانبول رخ داد. هزاران مغازه، خانه و کلیسا تخریب شد. شواهد نشان داد این حملات با هماهنگی عناصر دولتی انجام شده بود. پوگروم استانبول مهاجرت گسترده یونانیان را تسریع کرد.",
      en: "On September 6-7, 1955, organized attacks against Greek, Armenian, and Jewish minorities in Istanbul took place. Thousands of shops, homes, and churches were destroyed. Evidence showed these attacks were coordinated with government elements. The Istanbul pogrom accelerated the mass emigration of Greeks.",
    },
  },
};

let insertCount = 0;

function insertEvents(events, countryName) {
  for (const [year, event] of Object.entries(events)) {
    const yearPattern = `year: ${year},`;
    const yearIndex = content.indexOf(yearPattern);

    if (yearIndex === -1) {
      console.log(`WARNING: Year ${year} not found in file, skipping.`);
      continue;
    }

    const nextYearMatch = content.substring(yearIndex + yearPattern.length).match(/\n  \{[\s\S]*?year: \d{4},/);
    const searchEnd = nextYearMatch
      ? yearIndex + yearPattern.length + nextYearMatch.index
      : content.length;

    const yearBlock = content.substring(yearIndex, searchEnd);

    const worldArrayStart = yearBlock.indexOf('world: [');
    if (worldArrayStart === -1) {
      const blockEnd = content.lastIndexOf('],', searchEnd);
      if (blockEnd === -1 || blockEnd < yearIndex) {
        console.log(`WARNING: Could not find array closing for year ${year}, skipping.`);
        continue;
      }
      const insertPos = blockEnd + 2;
      const worldBlock = `\n    world: [\n      {\n        country: "${countryName}",\n        title: { fa: "${event.title.fa}", en: "${event.title.en}" },\n        description: { fa: "${event.description.fa}", en: "${event.description.en}" },\n        details: {\n          fa: "${event.details.fa}",\n          en: "${event.details.en}",\n        },\n      },\n    ],`;
      content = content.substring(0, insertPos) + worldBlock + content.substring(insertPos);
      insertCount++;
      console.log(`Inserted ${countryName} event for year ${year} (new world array)`);
      continue;
    }

    const worldStart = yearIndex + worldArrayStart + 'world: ['.length;
    let depth = 1;
    let pos = worldStart;
    while (depth > 0 && pos < searchEnd + 5000) {
      if (content[pos] === '[') depth++;
      if (content[pos] === ']') depth--;
      if (depth > 0) pos++;
    }

    const insertPos = pos;

    const eventStr = `
      {
        country: "${countryName}",
        title: { fa: "${event.title.fa}", en: "${event.title.en}" },
        description: { fa: "${event.description.fa}", en: "${event.description.en}" },
        details: {
          fa: "${event.details.fa}",
          en: "${event.details.en}",
        },
      },`;

    content = content.substring(0, insertPos) + eventStr + content.substring(insertPos);
    insertCount++;
    console.log(`Inserted ${countryName} event for year ${year}`);
  }
}

insertEvents(japanExtra, "japan");
insertEvents(turkeyExtra, "turkey");

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone! Inserted ${insertCount} extra events.`);
