const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const japanEvents = {
  1905: {
    title: { fa: "پیروزی ژاپن در جنگ روسیه و ژاپن", en: "Japan Wins Russo-Japanese War" },
    description: { fa: "ژاپن روسیه را شکست داد و به اولین قدرت آسیایی پیروز بر یک قدرت اروپایی تبدیل شد", en: "Japan defeats Russia, becoming the first Asian power to defeat a European power" },
    details: {
      fa: "جنگ روسیه و ژاپن (۱۹۰۴-۱۹۰۵) با پیروزی قاطع ژاپن پایان یافت. نبرد دریایی تسوشیما ناوگان روسیه را نابود کرد. پیمان پورتسموث با میانجی‌گری آمریکا امضا شد. این پیروزی ژاپن را به قدرت اصلی شرق آسیا تبدیل کرد و سلطه کره و منچوری جنوبی را برای ژاپن تضمین نمود.",
      en: "The Russo-Japanese War (1904-1905) ended with a decisive Japanese victory. The Battle of Tsushima destroyed the Russian fleet. The Treaty of Portsmouth, mediated by the US, was signed. This victory established Japan as the dominant power in East Asia and secured Japanese control over Korea and southern Manchuria.",
    },
  },
  1910: {
    title: { fa: "الحاق کره به امپراتوری ژاپن", en: "Japan Annexes Korea" },
    description: { fa: "ژاپن شبه‌جزیره کره را رسماً ضمیمه امپراتوری خود کرد", en: "Japan formally annexes the Korean Peninsula" },
    details: {
      fa: "در سال ۱۹۱۰ ژاپن با پیمان الحاق، شبه‌جزیره کره را رسماً ضمیمه امپراتوری خود نمود و سلسله چوسان را منحل کرد. حکومت استعماری ژاپن شامل سرکوب فرهنگ و زبان کره‌ای، مصادره زمین‌ها و بهره‌کشی اقتصادی بود. دوره استعمار ۳۵ سال ادامه یافت.",
      en: "In 1910, Japan formally annexed the Korean Peninsula through the Japan-Korea Annexation Treaty, dissolving the Joseon dynasty. Japanese colonial rule included suppression of Korean culture and language, land confiscation, and economic exploitation. The colonial period lasted 35 years.",
    },
  },
  1912: {
    title: { fa: "پایان دوره مِیجی و آغاز دوره تایشو", en: "End of Meiji Era, Start of Taisho Era" },
    description: { fa: "امپراتور مِیجی درگذشت و دوره تایشو آغاز شد", en: "Emperor Meiji dies, Taisho era begins" },
    details: {
      fa: "امپراتور مِیجی در ۳۰ ژوئیه ۱۹۱۲ درگذشت و پسرش یوشیهیتو به عنوان امپراتور تایشو بر تخت نشست. دوره مِیجی (۱۸۶۸-۱۹۱۲) ژاپن را از یک کشور فئودالی منزوی به قدرت صنعتی و نظامی مدرن تبدیل کرده بود. دوره تایشو شاهد رشد دموکراسی و آزادی‌های سیاسی بود.",
      en: "Emperor Meiji died on July 30, 1912, and his son Yoshihito ascended the throne as Emperor Taisho. The Meiji era (1868-1912) had transformed Japan from an isolated feudal country into a modern industrial and military power. The Taisho era saw the growth of democracy and political freedoms.",
    },
  },
  1914: {
    title: { fa: "ورود ژاپن به جنگ جهانی اول", en: "Japan Enters World War I" },
    description: { fa: "ژاپن به متفقین پیوست و مستعمرات آلمان در اقیانوس آرام را تصرف کرد", en: "Japan joins the Allies, seizes German colonies in the Pacific" },
    details: {
      fa: "ژاپن در اوت ۱۹۱۴ به بهانه اتحاد با بریتانیا به آلمان اعلان جنگ داد و مستعمرات آلمان در چین (شبه‌جزیره شاندونگ) و جزایر اقیانوس آرام را تصرف کرد. ژاپن همچنین «بیست‌ویک خواسته» را به چین تحمیل کرد که نفوذ ژاپن در چین را گسترش داد.",
      en: "Japan declared war on Germany in August 1914, citing its alliance with Britain, and seized German colonies in China (Shandong Peninsula) and Pacific islands. Japan also imposed the 'Twenty-One Demands' on China, expanding Japanese influence in China.",
    },
  },
  1918: {
    title: { fa: "شورش‌های برنج در ژاپن", en: "Rice Riots in Japan" },
    description: { fa: "شورش‌های گسترده مردمی علیه گرانی برنج در سراسر ژاپن رخ داد", en: "Widespread popular riots against rice price increases across Japan" },
    details: {
      fa: "در تابستان ۱۹۱۸ افزایش شدید قیمت برنج باعث شورش‌های گسترده در سراسر ژاپن شد. بیش از دو میلیون نفر در ۳۶ شهر شرکت کردند. این شورش‌ها بزرگ‌ترین ناآرامی مدنی در تاریخ مدرن ژاپن بود و منجر به سقوط دولت ترائوچی و روی کار آمدن اولین نخست‌وزیر حزبی شد.",
      en: "In the summer of 1918, sharp increases in rice prices triggered widespread riots across Japan. Over two million people participated in 36 cities. These riots were the largest civil unrest in modern Japanese history, leading to the fall of the Terauchi cabinet and the appointment of the first party-based prime minister.",
    },
  },
  1923: {
    title: { fa: "زلزله بزرگ کانتو", en: "Great Kanto Earthquake" },
    description: { fa: "زلزله ویرانگر توکیو و یوکوهاما را نابود کرد و بیش از ۱۰۰ هزار نفر کشته شدند", en: "Devastating earthquake destroys Tokyo and Yokohama, killing over 100,000" },
    details: {
      fa: "در اول سپتامبر ۱۹۲۳ زلزله‌ای با بزرگی ۷٫۹ ریشتر توکیو و یوکوهاما را ویران کرد. آتش‌سوزی‌های گسترده پس از زلزله ویرانی را تشدید نمود. بیش از ۱۰۰ هزار نفر کشته و میلیون‌ها نفر بی‌خانمان شدند. در جریان هرج‌ومرج، خشونت‌هایی علیه کره‌ای‌ها و چینی‌های مقیم ژاپن صورت گرفت.",
      en: "On September 1, 1923, a magnitude 7.9 earthquake devastated Tokyo and Yokohama. Widespread fires after the quake compounded the destruction. Over 100,000 people were killed and millions left homeless. Amid the chaos, violence was perpetrated against Korean and Chinese residents of Japan.",
    },
  },
  1925: {
    title: { fa: "قانون حق رأی عمومی مردان و قانون حفظ نظم عمومی", en: "Universal Male Suffrage & Peace Preservation Law" },
    description: { fa: "حق رأی به همه مردان بالای ۲۵ سال داده شد اما آزادی‌های سیاسی محدود گردید", en: "Voting rights extended to all men over 25, but political freedoms restricted" },
    details: {
      fa: "در سال ۱۹۲۵ مجلس ژاپن دو قانون متضاد تصویب کرد: قانون حق رأی عمومی که به همه مردان بالای ۲۵ سال حق رأی داد، و قانون حفظ نظم عمومی که فعالیت‌های سوسیالیستی و کمونیستی را جرم اعلام کرد. این دوگانگی نشان‌دهنده تنش میان دموکراسی و اقتدارگرایی در ژاپن تایشو بود.",
      en: "In 1925, the Japanese Diet passed two contradictory laws: the Universal Male Suffrage Act granting voting rights to all men over 25, and the Peace Preservation Law criminalizing socialist and communist activities. This duality reflected the tension between democracy and authoritarianism in Taisho Japan.",
    },
  },
  1926: {
    title: { fa: "آغاز دوره شووا - جلوس امپراتور هیروهیتو", en: "Showa Era Begins - Emperor Hirohito Ascends" },
    description: { fa: "هیروهیتو امپراتور ژاپن شد و دوره شووا آغاز گردید", en: "Hirohito becomes Emperor of Japan, beginning the Showa era" },
    details: {
      fa: "پس از درگذشت امپراتور تایشو در ۲۵ دسامبر ۱۹۲۶، پسرش هیروهیتو به عنوان امپراتور صد و بیست و چهارم ژاپن بر تخت نشست. دوره شووا (۱۹۲۶-۱۹۸۹) طولانی‌ترین دوره سلطنتی در تاریخ ژاپن شد و شاهد نظامی‌گری، جنگ جهانی دوم، شکست، اشغال و معجزه اقتصادی بود.",
      en: "After Emperor Taisho's death on December 25, 1926, his son Hirohito ascended the throne as the 124th Emperor of Japan. The Showa era (1926-1989) became the longest imperial reign in Japanese history, witnessing militarism, World War II, defeat, occupation, and the economic miracle.",
    },
  },
  1931: {
    title: { fa: "حمله ژاپن به منچوری", en: "Japan Invades Manchuria" },
    description: { fa: "ارتش ژاپن منچوری را اشغال و دولت دست‌نشانده مانچوکوئو را تأسیس کرد", en: "Japanese army occupies Manchuria and establishes puppet state of Manchukuo" },
    details: {
      fa: "در سپتامبر ۱۹۳۱ ارتش کوانتونگ ژاپن با ساختن حادثه موکدن، به منچوری حمله کرد. ارتش بدون مجوز دولت مرکزی عمل کرد. دولت دست‌نشانده مانچوکوئو با پوئی، آخرین امپراتور چین، به عنوان رئیس تأسیس شد. جامعه ملل حمله را محکوم کرد و ژاپن از این سازمان خارج شد.",
      en: "In September 1931, Japan's Kwantung Army fabricated the Mukden Incident to invade Manchuria. The army acted without authorization from the central government. The puppet state of Manchukuo was established with Puyi, the last Chinese emperor, as figurehead. The League of Nations condemned the invasion and Japan withdrew from the organization.",
    },
  },
  1933: {
    title: { fa: "خروج ژاپن از جامعه ملل", en: "Japan Withdraws from League of Nations" },
    description: { fa: "ژاپن در اعتراض به محکومیت اشغال منچوری از جامعه ملل خارج شد", en: "Japan leaves League of Nations after condemnation of Manchuria occupation" },
    details: {
      fa: "در مارس ۱۹۳۳ ژاپن رسماً از جامعه ملل خارج شد پس از آنکه گزارش لیتون اشغال منچوری را غیرقانونی اعلام کرد. خروج ژاپن از جامعه ملل نشان‌دهنده انزوای فزاینده بین‌المللی ژاپن و تقویت جناح نظامی‌گرا در سیاست داخلی بود.",
      en: "In March 1933, Japan officially withdrew from the League of Nations after the Lytton Report declared the occupation of Manchuria illegal. Japan's departure signaled its growing international isolation and the strengthening of the militarist faction in domestic politics.",
    },
  },
  1936: {
    title: { fa: "کودتای نافرجام ۲۶ فوریه", en: "February 26 Incident - Failed Coup" },
    description: { fa: "افسران جوان ارتش کودتای نافرجامی انجام دادند اما نظامی‌گری تقویت شد", en: "Young army officers stage failed coup, but militarism strengthens" },
    details: {
      fa: "در ۲۶ فوریه ۱۹۳۶ گروهی از افسران جوان ارتش ژاپن کودتایی ترتیب دادند و چند سیاستمدار ارشد را ترور کردند. کودتا پس از سه روز سرکوب شد اما نتیجه معکوس داشت: نفوذ ارتش بر سیاست افزایش یافت و ژاپن بیش از پیش به سمت نظامی‌گری و توسعه‌طلبی حرکت کرد.",
      en: "On February 26, 1936, a group of young army officers staged a coup, assassinating several senior politicians. The coup was suppressed after three days but had the paradoxical effect of increasing military influence over politics, pushing Japan further toward militarism and expansionism.",
    },
  },
  1937: {
    title: { fa: "حمله ژاپن به چین - آغاز جنگ دوم چین و ژاپن", en: "Japan Invades China - Second Sino-Japanese War" },
    description: { fa: "ژاپن حمله تمام‌عیار به چین را آغاز کرد و جنگ هشت‌ساله شروع شد", en: "Japan launches full-scale invasion of China, beginning an eight-year war" },
    details: {
      fa: "در ژوئیه ۱۹۳۷ پس از حادثه پل مارکو پولو، ژاپن حمله تمام‌عیار به چین را آغاز کرد. ارتش ژاپن پکن، شانگهای و نانجینگ را تصرف کرد. در دسامبر ۱۹۳۷ ارتش ژاپن در نانجینگ قتل‌عام وحشتناکی انجام داد که صدها هزار غیرنظامی کشته شدند. این جنگ تا ۱۹۴۵ ادامه یافت.",
      en: "In July 1937, following the Marco Polo Bridge Incident, Japan launched a full-scale invasion of China. The Japanese army captured Beijing, Shanghai, and Nanjing. In December 1937, the Japanese army committed the horrific Nanjing Massacre, killing hundreds of thousands of civilians. The war continued until 1945.",
    },
  },
  1940: {
    title: { fa: "پیمان سه‌گانه ژاپن، آلمان و ایتالیا", en: "Tripartite Pact - Japan, Germany, Italy" },
    description: { fa: "ژاپن با آلمان نازی و ایتالیای فاشیست پیمان نظامی سه‌گانه بست", en: "Japan signs military alliance with Nazi Germany and Fascist Italy" },
    details: {
      fa: "در ۲۷ سپتامبر ۱۹۴۰ ژاپن، آلمان نازی و ایتالیای فاشیست پیمان سه‌گانه را امضا کردند و محور رم-برلین-توکیو را تشکیل دادند. این پیمان هر یک از طرفین را ملزم به کمک در صورت حمله قدرت سومی می‌کرد. ژاپن همچنین هندوچین فرانسه را اشغال کرد که منجر به تحریم نفتی آمریکا شد.",
      en: "On September 27, 1940, Japan, Nazi Germany, and Fascist Italy signed the Tripartite Pact, forming the Rome-Berlin-Tokyo Axis. The pact obligated each party to assist the others if attacked by a third power. Japan also occupied French Indochina, leading to a US oil embargo.",
    },
  },
  1941: {
    title: { fa: "حمله به پرل هاربر - ژاپن وارد جنگ جهانی دوم شد", en: "Attack on Pearl Harbor - Japan Enters WWII" },
    description: { fa: "ژاپن به پایگاه دریایی پرل هاربر حمله کرد و آمریکا وارد جنگ شد", en: "Japan attacks Pearl Harbor naval base, bringing the US into the war" },
    details: {
      fa: "در ۷ دسامبر ۱۹۴۱ نیروی هوایی دریایی ژاپن به پایگاه نیروی دریایی آمریکا در پرل هاربر هاوایی حمله غافلگیرانه کرد. ۲٬۴۰۳ آمریکایی کشته و ۸ کشتی جنگی غرق یا آسیب دید. روز بعد آمریکا به ژاپن اعلان جنگ داد. ژاپن همزمان به فیلیپین، مالایا، هنگ‌کنگ و دیگر مناطق حمله کرد.",
      en: "On December 7, 1941, the Japanese naval air force launched a surprise attack on the US naval base at Pearl Harbor, Hawaii. 2,403 Americans were killed and 8 battleships were sunk or damaged. The next day, the US declared war on Japan. Japan simultaneously attacked the Philippines, Malaya, Hong Kong, and other territories.",
    },
  },
  1942: {
    title: { fa: "نبرد میدوی - نقطه عطف جنگ اقیانوس آرام", en: "Battle of Midway - Turning Point in the Pacific" },
    description: { fa: "شکست ژاپن در نبرد میدوی برتری دریایی را به آمریکا منتقل کرد", en: "Japan's defeat at Midway shifts naval superiority to the US" },
    details: {
      fa: "در ژوئن ۱۹۴۲ نیروی دریایی آمریکا در نبرد میدوی چهار ناو هواپیمابر ژاپن را غرق کرد. این نبرد نقطه عطف جنگ اقیانوس آرام بود و برتری دریایی ژاپن را از بین برد. پس از میدوی، ژاپن در موضع دفاعی قرار گرفت و آمریکا حمله متقابل جزیره به جزیره را آغاز کرد.",
      en: "In June 1942, the US Navy sank four Japanese aircraft carriers at the Battle of Midway. This battle was the turning point of the Pacific War, destroying Japanese naval superiority. After Midway, Japan was on the defensive and the US began its island-hopping counteroffensive.",
    },
  },
  1945: {
    title: { fa: "بمباران اتمی هیروشیما و ناگازاکی و تسلیم ژاپن", en: "Atomic Bombings of Hiroshima & Nagasaki, Japan Surrenders" },
    description: { fa: "آمریکا دو بمب اتمی بر ژاپن انداخت و ژاپن تسلیم شد", en: "US drops two atomic bombs on Japan; Japan surrenders" },
    details: {
      fa: "در ۶ اوت ۱۹۴۵ آمریکا اولین بمب اتمی تاریخ را بر هیروشیما انداخت و حدود ۸۰ هزار نفر فوراً کشته شدند. سه روز بعد بمب دوم بر ناگازاکی ریخته شد و ۴۰ هزار نفر کشته شدند. در ۱۵ اوت امپراتور هیروهیتو تسلیم ژاپن را اعلام کرد. اشغال آمریکا تحت فرماندهی ژنرال مک‌آرتور آغاز شد.",
      en: "On August 6, 1945, the US dropped the first atomic bomb on Hiroshima, killing approximately 80,000 people instantly. Three days later, the second bomb was dropped on Nagasaki, killing 40,000. On August 15, Emperor Hirohito announced Japan's surrender. American occupation under General MacArthur began.",
    },
  },
  1946: {
    title: { fa: "قانون اساسی جدید ژاپن", en: "Japan's New Constitution" },
    description: { fa: "قانون اساسی جدید صلح‌طلبانه ژاپن با نظارت آمریکا تدوین شد", en: "Japan's new pacifist constitution drafted under US oversight" },
    details: {
      fa: "قانون اساسی جدید ژاپن در نوامبر ۱۹۴۶ تصویب و در مه ۱۹۴۷ اجرایی شد. اصل نهم جنگ‌افروزی و نگهداری نیروی نظامی را ممنوع کرد. امپراتور به نماد تشریفاتی تبدیل شد و حاکمیت به مردم منتقل گردید. زنان حق رأی گرفتند و آزادی‌های اساسی تضمین شد.",
      en: "Japan's new constitution was adopted in November 1946 and took effect in May 1947. Article 9 renounced war and the maintenance of military forces. The emperor became a ceremonial symbol and sovereignty was transferred to the people. Women gained suffrage and fundamental freedoms were guaranteed.",
    },
  },
  1947: {
    title: { fa: "اصلاحات ارضی و آموزشی دوره اشغال", en: "Land Reform & Education Reform Under Occupation" },
    description: { fa: "اصلاحات گسترده اقتصادی و آموزشی در دوره اشغال آمریکا انجام شد", en: "Sweeping economic and educational reforms during US occupation" },
    details: {
      fa: "در دوره اشغال آمریکا (۱۹۴۵-۱۹۵۲) اصلاحات بنیادینی در ژاپن انجام شد. اصلاحات ارضی زمین‌های فئودال‌ها را میان کشاورزان توزیع کرد. نظام آموزشی بر اساس مدل آمریکایی بازسازی شد. زایباتسوها (شرکت‌های بزرگ خانوادگی) منحل گردیدند. اتحادیه‌های کارگری آزاد شدند.",
      en: "During the US occupation (1945-1952), fundamental reforms were carried out in Japan. Land reform redistributed feudal estates to farmers. The education system was restructured on the American model. Zaibatsu (family-owned conglomerates) were dissolved. Labor unions were legalized.",
    },
  },
  1951: {
    title: { fa: "پیمان صلح سانفرانسیسکو", en: "San Francisco Peace Treaty" },
    description: { fa: "ژاپن پیمان صلح با متفقین امضا کرد و استقلال خود را بازیافت", en: "Japan signs peace treaty with Allies, regaining sovereignty" },
    details: {
      fa: "در سپتامبر ۱۹۵۱ ژاپن با ۴۸ کشور پیمان صلح سانفرانسیسکو را امضا کرد. ژاپن مستعمرات خود شامل کره، تایوان و ساخالین جنوبی را واگذار نمود. همزمان پیمان امنیتی ژاپن-آمریکا امضا شد که پایگاه‌های نظامی آمریکا در ژاپن را تضمین کرد. اشغال در آوریل ۱۹۵۲ پایان یافت.",
      en: "In September 1951, Japan signed the San Francisco Peace Treaty with 48 nations. Japan relinquished its colonies including Korea, Taiwan, and southern Sakhalin. The US-Japan Security Treaty was signed simultaneously, guaranteeing US military bases in Japan. The occupation ended in April 1952.",
    },
  },
  1952: {
    title: { fa: "پایان اشغال آمریکا و استقلال ژاپن", en: "End of US Occupation, Japanese Sovereignty Restored" },
    description: { fa: "اشغال هفت‌ساله آمریکا پایان یافت و ژاپن حاکمیت خود را بازیافت", en: "Seven-year US occupation ends, Japan regains full sovereignty" },
    details: {
      fa: "در ۲۸ آوریل ۱۹۵۲ با اجرایی شدن پیمان صلح سانفرانسیسکو، اشغال آمریکا از ژاپن پایان یافت و ژاپن استقلال خود را بازیافت. با این حال پایگاه‌های نظامی آمریکا طبق پیمان امنیتی در ژاپن باقی ماندند. اوکیناوا تا ۱۹۷۲ تحت اداره آمریکا بود.",
      en: "On April 28, 1952, the San Francisco Peace Treaty took effect, ending the US occupation and restoring Japanese sovereignty. However, US military bases remained in Japan under the security treaty. Okinawa remained under US administration until 1972.",
    },
  },
  1954: {
    title: { fa: "تأسیس نیروی دفاع شخصی ژاپن", en: "Japan Self-Defense Forces Established" },
    description: { fa: "نیروی دفاع شخصی ژاپن تأسیس شد، نه ارتش رسمی بلکه نیروی دفاعی", en: "Japan Self-Defense Forces established as defensive force, not formal military" },
    details: {
      fa: "در ژوئیه ۱۹۵۴ نیروی دفاع شخصی ژاپن تأسیس شد. با وجود اصل نهم قانون اساسی که جنگ‌افروزی را ممنوع کرده بود، دولت ژاپن تفسیر جدیدی ارائه داد و حق دفاع از خود را مجاز دانست. این نیروها نقش مهمی در جنگ سرد داشتند و ژاپن به متحد کلیدی آمریکا در آسیا تبدیل شد.",
      en: "In July 1954, the Japan Self-Defense Forces were established. Despite Article 9 of the constitution renouncing war, the Japanese government offered a new interpretation allowing the right of self-defense. These forces played an important role in the Cold War as Japan became a key US ally in Asia.",
    },
  },
  1956: {
    title: { fa: "پیوستن ژاپن به سازمان ملل متحد", en: "Japan Joins the United Nations" },
    description: { fa: "ژاپن پس از عادی‌سازی روابط با شوروی به سازمان ملل پیوست", en: "Japan joins the UN after normalizing relations with the Soviet Union" },
    details: {
      fa: "در دسامبر ۱۹۵۶ ژاپن به عنوان هشتادمین عضو به سازمان ملل متحد پیوست. پیش از آن در اکتبر ۱۹۵۶ اعلامیه مشترک ژاپن و شوروی امضا شده بود که حالت جنگ را پایان داد. عضویت در سازمان ملل نماد بازگشت ژاپن به جامعه بین‌المللی بود.",
      en: "In December 1956, Japan joined the United Nations as its 80th member. Prior to this, the Japan-Soviet Joint Declaration had been signed in October 1956, ending the state of war. UN membership symbolized Japan's return to the international community.",
    },
  },
  1960: {
    title: { fa: "اعتراضات آنپو علیه پیمان امنیتی ژاپن و آمریکا", en: "Anpo Protests Against US-Japan Security Treaty" },
    description: { fa: "اعتراضات گسترده علیه تمدید پیمان امنیتی با آمریکا ژاپن را لرزاند", en: "Mass protests against renewal of US security treaty shake Japan" },
    details: {
      fa: "در سال ۱۹۶۰ تمدید پیمان امنیتی ژاپن و آمریکا موجی از اعتراضات عظیم را در ژاپن برانگیخت. صدها هزار نفر در توکیو تظاهرات کردند. نخست‌وزیر کیشی نوبوسوکه مجبور به استعفا شد. اعتراضات آنپو بزرگ‌ترین جنبش اجتماعی ژاپن پس از جنگ بود.",
      en: "In 1960, the renewal of the US-Japan Security Treaty triggered massive protests across Japan. Hundreds of thousands demonstrated in Tokyo. Prime Minister Kishi Nobusuke was forced to resign. The Anpo protests were Japan's largest postwar social movement.",
    },
  },
  1964: {
    title: { fa: "المپیک توکیو ۱۹۶۴", en: "1964 Tokyo Olympics" },
    description: { fa: "ژاپن میزبان المپیک تابستانی شد و نوسازی خود را به جهان نشان داد", en: "Japan hosts Summer Olympics, showcasing its modernization to the world" },
    details: {
      fa: "بازی‌های المپیک تابستانی ۱۹۶۴ در توکیو برگزار شد و ژاپن نوین را به جهان معرفی کرد. قطار پرسرعت شینکانسن (گلوله‌ای) در آستانه المپیک افتتاح شد. بزرگراه‌های جدید و استادیوم‌های مدرن ساخته شدند. این المپیک نماد بازسازی ژاپن از ویرانه‌های جنگ بود.",
      en: "The 1964 Summer Olympics were held in Tokyo, introducing modern Japan to the world. The Shinkansen (bullet train) was inaugurated on the eve of the Olympics. New highways and modern stadiums were built. These Olympics symbolized Japan's reconstruction from wartime devastation.",
    },
  },
  1968: {
    title: { fa: "ژاپن دومین اقتصاد بزرگ جهان شد", en: "Japan Becomes World's Second-Largest Economy" },
    description: { fa: "تولید ناخالص داخلی ژاپن از آلمان غربی پیشی گرفت", en: "Japan's GDP surpasses West Germany" },
    details: {
      fa: "در سال ۱۹۶۸ ژاپن با پیشی گرفتن از آلمان غربی به دومین اقتصاد بزرگ جهان تبدیل شد. «معجزه اقتصادی» ژاپن با رشد سالانه بیش از ۱۰ درصد از اوایل دهه ۱۹۵۰ آغاز شده بود. صنایع خودروسازی، الکترونیک و فولاد ژاپن به رقبای جدی جهانی تبدیل شدند.",
      en: "In 1968, Japan surpassed West Germany to become the world's second-largest economy. Japan's 'economic miracle' had begun in the early 1950s with annual growth exceeding 10%. Japan's automobile, electronics, and steel industries became formidable global competitors.",
    },
  },
  1970: {
    title: { fa: "نمایشگاه جهانی اوزاکا", en: "Osaka World Expo" },
    description: { fa: "ژاپن میزبان نمایشگاه جهانی شد و پیشرفت فناوری خود را به نمایش گذاشت", en: "Japan hosts World Expo, showcasing its technological progress" },
    details: {
      fa: "نمایشگاه جهانی ۱۹۷۰ در اوزاکا با شعار «پیشرفت و هماهنگی برای بشریت» برگزار شد. ۶۴ میلیون نفر بازدید کردند و ژاپن فناوری‌های پیشرفته خود را به نمایش گذاشت. این نمایشگاه اولین اکسپوی جهانی در آسیا بود و جایگاه ژاپن به عنوان قدرت فناوری جهانی را تثبیت کرد.",
      en: "The 1970 World Expo in Osaka, themed 'Progress and Harmony for Mankind,' attracted 64 million visitors. Japan showcased its advanced technology. This was the first World Expo held in Asia and cemented Japan's position as a global technological power.",
    },
  },
  1972: {
    title: { fa: "بازگشت اوکیناوا و عادی‌سازی روابط با چین", en: "Okinawa Reversion & Normalization with China" },
    description: { fa: "اوکیناوا به ژاپن بازگردانده شد و ژاپن روابط دیپلماتیک با چین برقرار کرد", en: "Okinawa returned to Japan; Japan establishes diplomatic relations with China" },
    details: {
      fa: "در مه ۱۹۷۲ اوکیناوا پس از ۲۷ سال اداره آمریکا به حاکمیت ژاپن بازگردانده شد، هرچند پایگاه‌های نظامی آمریکا باقی ماندند. در سپتامبر نخست‌وزیر تاناکا کاکوئی به پکن سفر کرد و ژاپن روابط دیپلماتیک با جمهوری خلق چین را برقرار کرد.",
      en: "In May 1972, Okinawa was returned to Japanese sovereignty after 27 years of US administration, though US military bases remained. In September, Prime Minister Tanaka Kakuei visited Beijing and Japan established diplomatic relations with the People's Republic of China.",
    },
  },
  1973: {
    title: { fa: "بحران نفتی و پایان رشد سریع اقتصادی ژاپن", en: "Oil Crisis Ends Japan's Rapid Economic Growth" },
    description: { fa: "بحران نفتی ۱۹۷۳ دوره رشد اقتصادی سریع ژاپن را به پایان رساند", en: "1973 oil crisis ends Japan's period of rapid economic growth" },
    details: {
      fa: "تحریم نفتی اوپک در ۱۹۷۳ ضربه سنگینی به اقتصاد ژاپن وارد کرد. ژاپن که ۹۹ درصد نفت مصرفی خود را وارد می‌کرد، با بحران انرژی شدیدی مواجه شد. رشد اقتصادی از ۱۰ درصد به ۴ درصد کاهش یافت. ژاپن سیاست تنوع منابع انرژی و صرفه‌جویی انرژی را آغاز کرد.",
      en: "The 1973 OPEC oil embargo dealt a heavy blow to Japan's economy. Japan, which imported 99% of its oil, faced a severe energy crisis. Economic growth dropped from 10% to 4%. Japan began policies of energy diversification and conservation.",
    },
  },
  1976: {
    title: { fa: "رسوایی لاکهید - فساد سیاسی", en: "Lockheed Scandal - Political Corruption" },
    description: { fa: "نخست‌وزیر سابق تاناکا به اتهام دریافت رشوه از شرکت لاکهید دستگیر شد", en: "Former PM Tanaka arrested for taking bribes from Lockheed Corporation" },
    details: {
      fa: "در ۱۹۷۶ رسوایی لاکهید ژاپن را لرزاند. کشف شد که شرکت هواپیماسازی لاکهید آمریکا به مقامات ژاپنی از جمله نخست‌وزیر سابق تاناکا کاکوئی رشوه پرداخت کرده بود. تاناکا دستگیر و محاکمه شد. این رسوایی اعتماد عمومی به نظام سیاسی ژاپن را به شدت تضعیف کرد.",
      en: "In 1976, the Lockheed scandal rocked Japan. It was revealed that the American Lockheed aircraft company had paid bribes to Japanese officials including former Prime Minister Tanaka Kakuei. Tanaka was arrested and tried. The scandal severely damaged public trust in Japan's political system.",
    },
  },
  1978: {
    title: { fa: "پیمان صلح و دوستی ژاپن و چین", en: "Japan-China Peace and Friendship Treaty" },
    description: { fa: "ژاپن و چین پیمان صلح و دوستی امضا کردند", en: "Japan and China sign Treaty of Peace and Friendship" },
    details: {
      fa: "در اوت ۱۹۷۸ ژاپن و جمهوری خلق چین پیمان صلح و دوستی را امضا کردند. این پیمان روابط اقتصادی و فرهنگی دو کشور را تقویت کرد. ژاپن سرمایه‌گذاری‌های کلانی در چین انجام داد و تجارت دوجانبه به سرعت رشد کرد.",
      en: "In August 1978, Japan and the People's Republic of China signed the Treaty of Peace and Friendship. This treaty strengthened economic and cultural relations between the two countries. Japan made major investments in China and bilateral trade grew rapidly.",
    },
  },
  1985: {
    title: { fa: "توافق پلازا - تقویت ین ژاپن", en: "Plaza Accord - Yen Appreciation" },
    description: { fa: "توافق پلازا ارزش ین را به شدت بالا برد و اقتصاد ژاپن را متحول کرد", en: "Plaza Accord sharply appreciates the yen, transforming Japan's economy" },
    details: {
      fa: "در سپتامبر ۱۹۸۵ پنج قدرت اقتصادی بزرگ توافق پلازا را در نیویورک امضا کردند تا ارزش دلار را کاهش دهند. ارزش ین ژاپن در دو سال دو برابر شد. بانک مرکزی ژاپن نرخ بهره را کاهش داد که منجر به حباب دارایی دهه ۱۹۸۰ شد.",
      en: "In September 1985, five major economic powers signed the Plaza Accord in New York to depreciate the US dollar. The value of the Japanese yen doubled in two years. The Bank of Japan lowered interest rates, leading to the asset bubble of the late 1980s.",
    },
  },
  1989: {
    title: { fa: "مرگ امپراتور هیروهیتو و ترکیدن حباب اقتصادی", en: "Emperor Hirohito Dies, Economic Bubble Bursts" },
    description: { fa: "دوره شووا با مرگ هیروهیتو پایان یافت و حباب بورس ژاپن ترکید", en: "Showa era ends with Hirohito's death; Japan's stock market bubble bursts" },
    details: {
      fa: "امپراتور هیروهیتو در ۷ ژانویه ۱۹۸۹ درگذشت و پسرش آکیهیتو دوره هِیسِی را آغاز کرد. شاخص نیکِی در دسامبر ۱۹۸۹ به اوج ۳۸٬۹۱۵ واحد رسید و سپس سقوط کرد. ترکیدن حباب بورس و املاک آغاز «دهه‌های از دست رفته» اقتصادی ژاپن بود.",
      en: "Emperor Hirohito died on January 7, 1989, and his son Akihito began the Heisei era. The Nikkei index peaked at 38,915 in December 1989, then crashed. The bursting of the stock and real estate bubbles marked the beginning of Japan's economic 'Lost Decades.'",
    },
  },
  1991: {
    title: { fa: "آغاز دهه‌های از دست رفته اقتصاد ژاپن", en: "Japan's Lost Decades Begin" },
    description: { fa: "سقوط بازار املاک و رکود اقتصادی بلندمدت ژاپن آغاز شد", en: "Real estate market collapse and prolonged economic stagnation begin" },
    details: {
      fa: "در اوایل دهه ۱۹۹۰ حباب قیمت املاک و سهام ژاپن ترکید. بانک‌ها با حجم عظیمی از وام‌های معوق مواجه شدند. رشد اقتصادی به نزدیک صفر رسید و تورم منفی (کاهش قیمت‌ها) فراگیر شد. ژاپن وارد دوره‌ای از رکود طولانی شد که به «دهه‌های از دست رفته» معروف گردید.",
      en: "In the early 1990s, Japan's real estate and stock price bubbles burst. Banks were left with massive non-performing loans. Economic growth fell to near zero and deflation became widespread. Japan entered a prolonged period of stagnation known as the 'Lost Decades.'",
    },
  },
  1993: {
    title: { fa: "پایان ۳۸ سال حاکمیت حزب لیبرال دموکرات", en: "End of 38-Year LDP Rule" },
    description: { fa: "حزب لیبرال دموکرات برای اولین بار پس از ۳۸ سال قدرت را از دست داد", en: "Liberal Democratic Party loses power for the first time in 38 years" },
    details: {
      fa: "در سال ۱۹۹۳ حزب لیبرال دموکرات (ال‌دی‌پی) که از ۱۹۵۵ بر ژاپن حکومت کرده بود، برای اولین بار قدرت را از دست داد. دولت ائتلافی تحت رهبری هوسوکاوا موریهیرو تشکیل شد. با این حال ال‌دی‌پی در ۱۹۹۴ دوباره به قدرت بازگشت.",
      en: "In 1993, the Liberal Democratic Party (LDP), which had ruled Japan since 1955, lost power for the first time. A coalition government was formed under Hosokawa Morihiro. However, the LDP returned to power in 1994.",
    },
  },
  1995: {
    title: { fa: "زلزله کوبه و حمله گاز سارین در متروی توکیو", en: "Kobe Earthquake & Tokyo Subway Sarin Attack" },
    description: { fa: "زلزله ویرانگر کوبه و حمله شیمیایی فرقه آئوم شینریکیو ژاپن را لرزاند", en: "Devastating Kobe earthquake and Aum Shinrikyo's chemical attack shake Japan" },
    details: {
      fa: "در ۱۷ ژانویه ۱۹۹۵ زلزله‌ای با بزرگی ۶٫۹ ریشتر شهر کوبه را ویران کرد و بیش از ۶ هزار نفر کشته شدند. در ۲۰ مارس فرقه آئوم شینریکیو گاز اعصاب سارین را در متروی توکیو پخش کرد و ۱۳ نفر کشته و هزاران نفر مسموم شدند. این دو فاجعه اعتماد مردم ژاپن به امنیت جامعه خود را تکان داد.",
      en: "On January 17, 1995, a magnitude 6.9 earthquake devastated Kobe, killing over 6,000 people. On March 20, the Aum Shinrikyo cult released sarin nerve gas in the Tokyo subway, killing 13 and injuring thousands. These two disasters shook Japanese confidence in the safety of their society.",
    },
  },
  1997: {
    title: { fa: "بحران مالی آسیا و بحران بانکی ژاپن", en: "Asian Financial Crisis & Japan's Banking Crisis" },
    description: { fa: "بحران مالی آسیا بحران بانکی ژاپن را تشدید کرد", en: "Asian financial crisis exacerbates Japan's banking crisis" },
    details: {
      fa: "بحران مالی آسیا در ۱۹۹۷ ضربه‌ای دیگر به اقتصاد ضعیف ژاپن وارد کرد. چندین بانک و شرکت مالی بزرگ ژاپن ورشکست شدند از جمله بانک یاماایچی و بانک هوکایدو تاکوشوکو. دولت مجبور به تزریق پول عمومی به سیستم بانکی شد.",
      en: "The 1997 Asian financial crisis dealt another blow to Japan's weak economy. Several major Japanese banks and financial firms went bankrupt, including Yamaichi Securities and Hokkaido Takushoku Bank. The government was forced to inject public funds into the banking system.",
    },
  },
  2001: {
    title: { fa: "نخست‌وزیری کوئیزومی و اصلاحات ساختاری", en: "PM Koizumi & Structural Reforms" },
    description: { fa: "کوئیزومی جونیچیرو نخست‌وزیر شد و اصلاحات اقتصادی آغاز کرد", en: "Koizumi Junichiro becomes PM and launches economic reforms" },
    details: {
      fa: "در آوریل ۲۰۰۱ کوئیزومی جونیچیرو با وعده اصلاحات ساختاری نخست‌وزیر ژاپن شد. او خصوصی‌سازی پست ژاپن، کاهش مخارج دولتی و آزادسازی اقتصادی را دنبال کرد. کوئیزومی محبوب‌ترین نخست‌وزیر دهه‌های اخیر بود و تا ۲۰۰۶ بر سر کار ماند.",
      en: "In April 2001, Koizumi Junichiro became Prime Minister promising structural reforms. He pursued privatization of Japan Post, spending cuts, and economic liberalization. Koizumi was the most popular PM in recent decades and served until 2006.",
    },
  },
  2002: {
    title: { fa: "جام جهانی فوتبال مشترک ژاپن و کره جنوبی", en: "FIFA World Cup Co-Hosted by Japan and South Korea" },
    description: { fa: "ژاپن و کره جنوبی میزبان مشترک جام جهانی فوتبال شدند", en: "Japan and South Korea co-host the FIFA World Cup" },
    details: {
      fa: "در سال ۲۰۰۲ ژاپن و کره جنوبی میزبان مشترک اولین جام جهانی فوتبال در آسیا شدند. این رویداد به بهبود روابط دو کشور کمک کرد. برزیل قهرمان شد. میزبانی مشترک نماد همکاری دو همسایه سابقاً متخاصم بود.",
      en: "In 2002, Japan and South Korea co-hosted the first FIFA World Cup held in Asia. The event helped improve relations between the two countries. Brazil won the championship. The co-hosting symbolized cooperation between two formerly hostile neighbors.",
    },
  },
  2003: {
    title: { fa: "اعزام نیروی ژاپن به عراق", en: "Japan Deploys Troops to Iraq" },
    description: { fa: "ژاپن برای اولین بار پس از جنگ جهانی دوم نیرو به منطقه جنگی اعزام کرد", en: "Japan deploys troops to a combat zone for the first time since WWII" },
    details: {
      fa: "در ۲۰۰۳ ژاپن تصمیم بحث‌برانگیز اعزام نیروی دفاع شخصی به عراق را اتخاذ کرد. این اولین اعزام نظامی ژاپن به منطقه جنگی پس از جنگ جهانی دوم بود. نیروهای ژاپنی مأموریت بازسازی و کمک‌های بشردوستانه داشتند نه مأموریت جنگی.",
      en: "In 2003, Japan made the controversial decision to deploy Self-Defense Forces to Iraq. This was Japan's first military deployment to a combat zone since World War II. Japanese forces had reconstruction and humanitarian missions, not combat roles.",
    },
  },
  2006: {
    title: { fa: "اولین دوره نخست‌وزیری آبه شینزو", en: "Shinzo Abe's First Term as PM" },
    description: { fa: "آبه شینزو جوان‌ترین نخست‌وزیر ژاپن پس از جنگ شد", en: "Shinzo Abe becomes Japan's youngest postwar prime minister" },
    details: {
      fa: "در سپتامبر ۲۰۰۶ آبه شینزو در ۵۲ سالگی جوان‌ترین نخست‌وزیر ژاپن پس از جنگ جهانی دوم شد. آبه خواستار بازنگری قانون اساسی و تقویت نقش نظامی ژاپن بود. اما رسوایی‌های سیاسی و مشکلات سلامتی او را مجبور به استعفا در ۲۰۰۷ کردند.",
      en: "In September 2006, Shinzo Abe became Japan's youngest postwar prime minister at age 52. Abe sought constitutional revision and a stronger military role for Japan. However, political scandals and health issues forced his resignation in 2007.",
    },
  },
  2009: {
    title: { fa: "پیروزی تاریخی حزب دموکراتیک ژاپن", en: "Historic Victory for Democratic Party of Japan" },
    description: { fa: "حزب دموکراتیک ژاپن با پیروزی قاطع قدرت را از ال‌دی‌پی گرفت", en: "Democratic Party of Japan takes power from LDP in landslide victory" },
    details: {
      fa: "در اوت ۲۰۰۹ حزب دموکراتیک ژاپن با پیروزی قاطع در انتخابات قدرت را به دست گرفت و دومین بار در تاریخ پس از جنگ، ال‌دی‌پی را از قدرت کنار زد. هاتویاما یوکیو نخست‌وزیر شد. اما حزب دموکراتیک به دلیل ناتوانی در مدیریت بحران‌ها در ۲۰۱۲ قدرت را از دست داد.",
      en: "In August 2009, the Democratic Party of Japan won a landslide victory, ousting the LDP from power for only the second time in postwar history. Hatoyama Yukio became prime minister. However, the DPJ lost power in 2012 due to its inability to manage crises.",
    },
  },
  2011: {
    title: { fa: "زلزله و سونامی توهوکو و فاجعه هسته‌ای فوکوشیما", en: "Tohoku Earthquake, Tsunami & Fukushima Nuclear Disaster" },
    description: { fa: "زلزله ۹ ریشتری، سونامی ویرانگر و بحران هسته‌ای فوکوشیما ژاپن را فراگرفت", en: "Magnitude 9 earthquake, devastating tsunami, and Fukushima nuclear crisis hit Japan" },
    details: {
      fa: "در ۱۱ مارس ۲۰۱۱ زلزله‌ای با بزرگی ۹ ریشتر ساحل شمال‌شرق ژاپن را لرزاند و سونامی عظیمی ایجاد کرد. بیش از ۱۸ هزار نفر کشته یا مفقود شدند. سونامی به نیروگاه هسته‌ای فوکوشیما دایی‌چی برخورد کرد و بدترین فاجعه هسته‌ای پس از چرنوبیل رخ داد. ژاپن تمام نیروگاه‌های هسته‌ای خود را تعطیل کرد.",
      en: "On March 11, 2011, a magnitude 9.0 earthquake struck Japan's northeast coast, generating a massive tsunami. Over 18,000 people were killed or missing. The tsunami hit the Fukushima Daiichi nuclear plant, causing the worst nuclear disaster since Chernobyl. Japan shut down all its nuclear reactors.",
    },
  },
  2012: {
    title: { fa: "بازگشت آبه شینزو و آبه‌نومیکس", en: "Shinzo Abe Returns, Abenomics Launched" },
    description: { fa: "آبه شینزو دوباره نخست‌وزیر شد و سیاست اقتصادی آبه‌نومیکس را آغاز کرد", en: "Shinzo Abe becomes PM again, launches Abenomics economic policy" },
    details: {
      fa: "در دسامبر ۲۰۱۲ آبه شینزو با پیروزی قاطع ال‌دی‌پی دوباره نخست‌وزیر شد. او سیاست اقتصادی «آبه‌نومیکس» را با سه رکن معرفی کرد: سیاست پولی تهاجمی، محرک مالی و اصلاحات ساختاری. آبه طولانی‌ترین دوره نخست‌وزیری در تاریخ ژاپن را تا ۲۰۲۰ رقم زد.",
      en: "In December 2012, Shinzo Abe became prime minister again following a landslide LDP victory. He introduced 'Abenomics' with three pillars: aggressive monetary policy, fiscal stimulus, and structural reforms. Abe went on to serve the longest tenure as PM in Japanese history, until 2020.",
    },
  },
  2014: {
    title: { fa: "تفسیر جدید اصل نهم - دفاع جمعی", en: "Reinterpretation of Article 9 - Collective Self-Defense" },
    description: { fa: "کابینه آبه اصل نهم را بازتفسیر کرد و حق دفاع جمعی را مجاز دانست", en: "Abe cabinet reinterprets Article 9 to allow collective self-defense" },
    details: {
      fa: "در ژوئیه ۲۰۱۴ کابینه آبه شینزو تصمیم تاریخی بازتفسیر اصل نهم قانون اساسی را اتخاذ کرد و حق «دفاع جمعی از خود» را برای ژاپن مجاز دانست. این بدان معنا بود که نیروهای دفاع شخصی می‌توانستند به متحدان مورد حمله کمک نظامی کنند. این تصمیم اعتراضات گسترده‌ای را برانگیخت.",
      en: "In July 2014, the Abe cabinet made the historic decision to reinterpret Article 9 of the constitution, allowing Japan's right to 'collective self-defense.' This meant the Self-Defense Forces could militarily assist allies under attack. The decision sparked widespread protests.",
    },
  },
  2016: {
    title: { fa: "سفر اوباما به هیروشیما", en: "Obama Visits Hiroshima" },
    description: { fa: "باراک اوباما اولین رئیس‌جمهور آمریکا شد که از هیروشیما بازدید کرد", en: "Barack Obama becomes first sitting US president to visit Hiroshima" },
    details: {
      fa: "در مه ۲۰۱۶ باراک اوباما رئیس‌جمهور آمریکا از بنای یادبود صلح هیروشیما بازدید کرد و اولین رئیس‌جمهور آمریکا شد که از این شهر دیدن می‌کرد. اوباما بدون عذرخواهی رسمی، پیام صلح و خلع سلاح هسته‌ای داد. این بازدید نماد آشتی تاریخی دو کشور بود.",
      en: "In May 2016, US President Barack Obama visited the Hiroshima Peace Memorial, becoming the first sitting US president to visit the city. Without offering a formal apology, Obama delivered a message of peace and nuclear disarmament. The visit symbolized historic reconciliation between the two countries.",
    },
  },
  2019: {
    title: { fa: "آغاز دوره رِیوا - جلوس امپراتور ناروهیتو", en: "Reiwa Era Begins - Emperor Naruhito Ascends" },
    description: { fa: "امپراتور آکیهیتو کناره‌گیری کرد و ناروهیتو امپراتور جدید ژاپن شد", en: "Emperor Akihito abdicates; Naruhito becomes new Emperor of Japan" },
    details: {
      fa: "در ۳۰ آوریل ۲۰۱۹ امپراتور آکیهیتو از تخت کناره‌گیری کرد، اولین کناره‌گیری در ۲۰۰ سال اخیر. پسرش ناروهیتو در اول مه امپراتور شد و دوره رِیوا آغاز گردید. مراسم انتقال قدرت با جشن‌های ملی همراه بود.",
      en: "On April 30, 2019, Emperor Akihito abdicated the throne, the first abdication in 200 years. His son Naruhito became Emperor on May 1, beginning the Reiwa era. The transition was accompanied by national celebrations.",
    },
  },
  2020: {
    title: { fa: "تعویق المپیک توکیو به دلیل کووید-۱۹", en: "Tokyo Olympics Postponed Due to COVID-19" },
    description: { fa: "المپیک تابستانی توکیو به دلیل همه‌گیری کرونا یک سال به تعویق افتاد", en: "Tokyo Summer Olympics postponed one year due to coronavirus pandemic" },
    details: {
      fa: "در مارس ۲۰۲۰ المپیک تابستانی توکیو ۲۰۲۰ به دلیل همه‌گیری کووید-۱۹ یک سال به تعویق افتاد. این اولین تعویق المپیک در تاریخ بازی‌ها بود. ژاپن با وجود سرمایه‌گذاری عظیم، مجبور شد برنامه‌های خود را بازنگری کند.",
      en: "In March 2020, the Tokyo 2020 Summer Olympics were postponed one year due to the COVID-19 pandemic. This was the first postponement in Olympic history. Japan, despite massive investment, was forced to revise its plans.",
    },
  },
  2021: {
    title: { fa: "برگزاری المپیک توکیو بدون تماشاگر", en: "Tokyo Olympics Held Without Spectators" },
    description: { fa: "المپیک توکیو ۲۰۲۰ با یک سال تأخیر و بدون تماشاگر برگزار شد", en: "Tokyo 2020 Olympics held after one-year delay with no spectators" },
    details: {
      fa: "بازی‌های المپیک توکیو از ۲۳ ژوئیه تا ۸ اوت ۲۰۲۱ بدون حضور تماشاگر برگزار شد. ژاپن بیش از ۱۵ میلیارد دلار هزینه کرده بود. با وجود محدودیت‌های شدید بهداشتی، مسابقات با موفقیت برگزار شدند. ورزشکاران ژاپنی ۲۷ مدال طلا کسب کردند.",
      en: "The Tokyo Olympics were held from July 23 to August 8, 2021, without spectators. Japan had spent over $15 billion. Despite strict health measures, the games were held successfully. Japanese athletes won 27 gold medals.",
    },
  },
  2022: {
    title: { fa: "ترور آبه شینزو", en: "Shinzo Abe Assassinated" },
    description: { fa: "آبه شینزو نخست‌وزیر سابق ژاپن در جریان سخنرانی انتخاباتی ترور شد", en: "Former PM Shinzo Abe assassinated during campaign speech" },
    details: {
      fa: "در ۸ ژوئیه ۲۰۲۲ آبه شینزو نخست‌وزیر سابق ژاپن در حین سخنرانی انتخاباتی در نارا توسط مردی مسلح به ضرب گلوله کشته شد. آبه طولانی‌ترین دوره نخست‌وزیری در تاریخ ژاپن را داشت. ترور او شوک بزرگی به جامعه ژاپن وارد کرد و ارتباط ضارب با فرقه «کلیسای اتحاد» رسوایی سیاسی ایجاد نمود.",
      en: "On July 8, 2022, former Prime Minister Shinzo Abe was shot and killed during a campaign speech in Nara. Abe had served the longest tenure as PM in Japanese history. His assassination was a major shock to Japanese society, and the assailant's ties to the Unification Church created a political scandal.",
    },
  },
  2023: {
    title: { fa: "افزایش بودجه نظامی ژاپن", en: "Japan's Historic Military Spending Increase" },
    description: { fa: "ژاپن بودجه نظامی خود را به طور تاریخی افزایش داد", en: "Japan historically increases its defense budget" },
    details: {
      fa: "در سال ۲۰۲۳ ژاپن بزرگ‌ترین افزایش بودجه نظامی خود از زمان جنگ جهانی دوم را اعلام کرد. هدف رسیدن به ۲ درصد تولید ناخالص داخلی تا ۲۰۲۷ بود. تهدیدات چین، کره شمالی و روسیه دلایل اصلی این تصمیم بودند. ژاپن توانایی ضدحمله و موشک‌های دوربرد را توسعه داد.",
      en: "In 2023, Japan announced its largest military spending increase since World War II. The goal was to reach 2% of GDP by 2027. Threats from China, North Korea, and Russia were the main reasons. Japan developed counterstrike capabilities and long-range missiles.",
    },
  },
  2024: {
    title: { fa: "بحران کاهش جمعیت و ضعف ین ژاپن", en: "Japan's Population Decline Crisis & Weak Yen" },
    description: { fa: "ژاپن با بحران شدید کاهش جمعیت و ضعف تاریخی ین مواجه شد", en: "Japan faces severe population decline and historic yen weakness" },
    details: {
      fa: "در ۲۰۲۴ جمعیت ژاپن به کمتر از ۱۲۴ میلیون نفر کاهش یافت و نرخ زاد و ولد به پایین‌ترین سطح تاریخ رسید. ین ژاپن به ضعیف‌ترین سطح ۳۴ ساله در برابر دلار سقوط کرد. دولت سیاست‌های تشویق فرزندآوری و جذب نیروی کار خارجی را تشدید کرد.",
      en: "In 2024, Japan's population fell below 124 million and the birth rate hit a historic low. The yen fell to its weakest level against the dollar in 34 years. The government intensified policies to encourage childbirth and attract foreign workers.",
    },
  },
  2025: {
    title: { fa: "نمایشگاه جهانی اوزاکا ۲۰۲۵", en: "Osaka World Expo 2025" },
    description: { fa: "ژاپن میزبان نمایشگاه جهانی اوزاکا با محوریت آینده جامعه شد", en: "Japan hosts Osaka World Expo focused on the future of society" },
    details: {
      fa: "نمایشگاه جهانی ۲۰۲۵ در اوزاکا با شعار «طراحی جامعه آینده برای زندگی ما» برگزار شد. ژاپن فناوری‌های آینده شامل هوش مصنوعی، روباتیک و انرژی پاک را به نمایش گذاشت. با وجود نگرانی‌ها درباره هزینه‌های بالا و بحران جمعیت، این رویداد نماد عزم ژاپن برای نوآوری بود.",
      en: "The 2025 World Expo in Osaka was held with the theme 'Designing Future Society for Our Lives.' Japan showcased future technologies including AI, robotics, and clean energy. Despite concerns about high costs and the population crisis, the event symbolized Japan's commitment to innovation.",
    },
  },
};

let insertCount = 0;

for (const [year, event] of Object.entries(japanEvents)) {
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
  if (worldArrayStart === -1) {
    // No world array - need to add one
    const blockEnd = content.lastIndexOf('],', searchEnd);
    if (blockEnd === -1 || blockEnd < yearIndex) {
      console.log(`WARNING: Could not find iran array closing for year ${year}, skipping.`);
      continue;
    }
    const insertPos = blockEnd + 2;
    const worldBlock = `\n    world: [\n      {\n        country: "japan",\n        title: { fa: "${event.title.fa}", en: "${event.title.en}" },\n        description: { fa: "${event.description.fa}", en: "${event.description.en}" },\n        details: {\n          fa: "${event.details.fa}",\n          en: "${event.details.en}",\n        },\n      },\n    ],`;
    content = content.substring(0, insertPos) + worldBlock + content.substring(insertPos);
    insertCount++;
    console.log(`Inserted Japan event for year ${year} (new world array)`);
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

  const insertPos = pos;

  const eventStr = `
      {
        country: "japan",
        title: { fa: "${event.title.fa}", en: "${event.title.en}" },
        description: { fa: "${event.description.fa}", en: "${event.description.en}" },
        details: {
          fa: "${event.details.fa}",
          en: "${event.details.en}",
        },
      },`;

  content = content.substring(0, insertPos) + eventStr + content.substring(insertPos);
  insertCount++;
  console.log(`Inserted Japan event for year ${year}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone! Inserted ${insertCount} Japan events.`);
