const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const southKoreaEvents = {
  1910: {
    title: { fa: "الحاق کره به ژاپن", en: "Korea Annexed by Japan" },
    description: { fa: "کره رسماً مستعمره ژاپن شد و استقلال خود را از دست داد", en: "Korea formally becomes a Japanese colony, losing sovereignty" },
    details: {
      fa: "در سال ۱۹۱۰ ژاپن با پیمان الحاق، شبه‌جزیره کره را رسماً ضمیمه امپراتوری خود کرد و سلسله پادشاهی چوسان را منحل نمود. این الحاق پایان بیش از پانصد سال حاکمیت مستقل کره بود. ژاپن سیاست‌های استعماری شدیدی شامل سرکوب زبان و فرهنگ کره‌ای، مصادره زمین‌ها و بهره‌کشی اقتصادی را اعمال کرد. دوره استعمار ژاپن تا ۱۹۴۵ ادامه یافت.",
      en: "In 1910, Japan formally annexed the Korean Peninsula through the Japan-Korea Annexation Treaty, dissolving the Joseon dynasty. This ended over five centuries of Korean sovereignty. Japan imposed harsh colonial policies including suppression of the Korean language and culture, land confiscation, and economic exploitation. Japanese colonial rule lasted until 1945.",
    },
  },
  1945: {
    title: { fa: "آزادی کره از استعمار ژاپن و تقسیم شبه‌جزیره", en: "Korea Liberated from Japan, Peninsula Divided" },
    description: { fa: "کره از استعمار ژاپن آزاد شد اما در مدار ۳۸ درجه تقسیم گردید", en: "Korea freed from Japanese rule but divided at the 38th parallel" },
    details: {
      fa: "با تسلیم ژاپن در اوت ۱۹۴۵، شبه‌جزیره کره پس از ۳۵ سال از استعمار آزاد شد. اما آمریکا و شوروی توافق کردند کره را در مدار ۳۸ درجه شمالی تقسیم کنند: شمال تحت اشغال شوروی و جنوب تحت اشغال آمریکا. این تقسیم که قرار بود موقت باشد، به جدایی دائمی شبه‌جزیره انجامید و زمینه‌ساز جنگ کره شد.",
      en: "With Japan's surrender in August 1945, the Korean Peninsula was liberated after 35 years of colonial rule. However, the US and Soviet Union agreed to divide Korea at the 38th parallel: the north under Soviet occupation and the south under American occupation. This division, intended to be temporary, led to the permanent separation of the peninsula and set the stage for the Korean War.",
    },
  },
  1948: {
    title: { fa: "تأسیس جمهوری کره", en: "Republic of Korea Founded" },
    description: { fa: "کره جنوبی رسماً به عنوان جمهوری کره اعلام موجودیت کرد", en: "South Korea officially established as the Republic of Korea" },
    details: {
      fa: "در ۱۵ اوت ۱۹۴۸ جمهوری کره (کره جنوبی) با ریاست‌جمهوری لی سونگ‌مان رسماً تأسیس شد. انتخابات تحت نظارت سازمان ملل در جنوب برگزار شد اما شمال از شرکت امتناع کرد. شمال نیز جمهوری دموکراتیک خلق کره را تحت رهبری کیم ایل‌سونگ اعلام نمود. تقسیم رسمی شبه‌جزیره بدین ترتیب نهادینه شد.",
      en: "On August 15, 1948, the Republic of Korea (South Korea) was officially established with Syngman Rhee as president. Elections were held in the south under UN supervision, but the north refused to participate. The north declared the Democratic People's Republic of Korea under Kim Il-sung. The formal division of the Korean Peninsula was thus institutionalized.",
    },
  },
  1950: {
    title: { fa: "آغاز جنگ کره", en: "Korean War Begins" },
    description: { fa: "کره شمالی به کره جنوبی حمله کرد و جنگ خونین سه‌ساله آغاز شد", en: "North Korea invades South Korea, beginning a devastating three-year war" },
    details: {
      fa: "در ۲۵ ژوئن ۱۹۵۰ ارتش کره شمالی با حمایت شوروی و چین از مدار ۳۸ درجه گذشت و به کره جنوبی حمله کرد. سئول در سه روز سقوط کرد. آمریکا و متحدانش تحت پرچم سازمان ملل وارد جنگ شدند. جنگ کره اولین درگیری نظامی مستقیم جنگ سرد بود و تا ۱۹۵۳ ادامه یافت. بیش از سه میلیون نفر کشته شدند و شبه‌جزیره ویران گردید.",
      en: "On June 25, 1950, the North Korean army, backed by the Soviet Union and China, crossed the 38th parallel and invaded South Korea. Seoul fell within three days. The US and allies entered the war under the UN flag. The Korean War was the first direct military conflict of the Cold War and lasted until 1953. Over three million people were killed and the peninsula was devastated.",
    },
  },
  1953: {
    title: { fa: "آتش‌بس جنگ کره", en: "Korean War Armistice Signed" },
    description: { fa: "پس از سه سال جنگ، آتش‌بس امضا شد اما پیمان صلح هرگز منعقد نگردید", en: "After three years of war, armistice signed but peace treaty never concluded" },
    details: {
      fa: "در ۲۷ ژوئیه ۱۹۵۳ موافقت‌نامه آتش‌بس در پانمونجوم امضا شد و جنگ کره متوقف گردید. مرز جدید تقریباً همان مدار ۳۸ درجه بود و منطقه غیرنظامی ایجاد شد. هیچ پیمان صلحی امضا نشد و دو کره از نظر فنی همچنان در حالت جنگ باقی ماندند. جنگ بیش از سه میلیون کشته بر جای گذاشت.",
      en: "On July 27, 1953, the armistice agreement was signed at Panmunjom, halting the Korean War. The new border was roughly the same 38th parallel, and a demilitarized zone was established. No peace treaty was ever signed, and the two Koreas technically remained in a state of war. The war left over three million dead.",
    },
  },
  1960: {
    title: { fa: "انقلاب آوریل - سقوط لی سونگ‌مان", en: "April Revolution - Syngman Rhee Ousted" },
    description: { fa: "قیام دانشجویان حکومت اقتدارگرای لی سونگ‌مان را سرنگون کرد", en: "Student uprising overthrows Syngman Rhee's authoritarian government" },
    details: {
      fa: "در آوریل ۱۹۶۰ دانشجویان کره جنوبی در اعتراض به تقلب در انتخابات و حکومت اقتدارگرای لی سونگ‌مان قیام کردند. پلیس به تظاهرکنندگان شلیک کرد و صدها نفر کشته شدند. فشار مردمی لی سونگ‌مان را مجبور به استعفا و تبعید به هاوایی کرد. این انقلاب نشان‌دهنده خواست مردم کره جنوبی برای دموکراسی بود.",
      en: "In April 1960, South Korean students rose up against election fraud and Syngman Rhee's authoritarian rule. Police fired on demonstrators, killing hundreds. Popular pressure forced Rhee to resign and go into exile in Hawaii. This revolution demonstrated the Korean people's desire for democracy.",
    },
  },
  1961: {
    title: { fa: "کودتای نظامی پارک چونگ‌هی", en: "Park Chung-hee Military Coup" },
    description: { fa: "ژنرال پارک چونگ‌هی با کودتا قدرت را به دست گرفت", en: "General Park Chung-hee seizes power through military coup" },
    details: {
      fa: "در ۱۶ مه ۱۹۶۱ ژنرال پارک چونگ‌هی با کودتای نظامی حکومت دموکراتیک کوتاه‌مدت کره جنوبی را سرنگون کرد. پارک دولت نظامی تشکیل داد و سیاست صنعتی‌سازی سریع را آغاز نمود. او تا ۱۹۷۹ بر کره جنوبی حکومت کرد و کشور را از یکی از فقیرترین کشورهای جهان به قدرت صنعتی تبدیل نمود، هرچند با سرکوب آزادی‌های سیاسی.",
      en: "On May 16, 1961, General Park Chung-hee overthrew South Korea's short-lived democratic government through a military coup. Park formed a military government and launched a policy of rapid industrialization. He ruled until 1979, transforming the country from one of the world's poorest into an emerging industrial power, though with severe suppression of political freedoms.",
    },
  },
  1965: {
    title: { fa: "پیمان عادی‌سازی روابط ژاپن و کره", en: "Japan-Korea Normalization Treaty" },
    description: { fa: "کره جنوبی و ژاپن پس از ۱۴ سال مذاکره روابط دیپلماتیک برقرار کردند", en: "South Korea and Japan establish diplomatic relations after 14 years of talks" },
    details: {
      fa: "در ژوئن ۱۹۶۵ کره جنوبی و ژاپن پیمان عادی‌سازی روابط را امضا کردند. ژاپن ۸۰۰ میلیون دلار کمک مالی و وام به کره جنوبی پرداخت کرد. این پیمان با مخالفت شدید مردم کره جنوبی مواجه شد اما سرمایه ژاپنی نقش مهمی در صنعتی‌سازی سریع کره جنوبی ایفا نمود.",
      en: "In June 1965, South Korea and Japan signed the Treaty on Basic Relations. Japan provided $800 million in grants and loans. The treaty faced fierce opposition from South Koreans but Japanese capital played an important role in South Korea's rapid industrialization.",
    },
  },
  1972: {
    title: { fa: "قانون اساسی یوشین - حکومت اقتدارگرا", en: "Yushin Constitution - Authoritarian Rule" },
    description: { fa: "پارک چونگ‌هی قانون اساسی جدید تصویب کرد و قدرت مطلقه به دست آورد", en: "Park Chung-hee enacts new constitution, gaining absolute power" },
    details: {
      fa: "در اکتبر ۱۹۷۲ پارک چونگ‌هی حکومت نظامی اعلام کرد و قانون اساسی یوشین را تصویب نمود. این قانون اساسی به رئیس‌جمهور اختیارات نامحدود داد و آزادی‌های مدنی را محدود ساخت. اقتصاد کره جنوبی به سرعت رشد کرد اما سرکوب سیاسی نیز تشدید شد.",
      en: "In October 1972, Park Chung-hee declared martial law and enacted the Yushin Constitution. This constitution gave the president unlimited powers and restricted civil liberties. South Korea's economy grew rapidly but political repression also intensified.",
    },
  },
  1979: {
    title: { fa: "ترور پارک چونگ‌هی", en: "Park Chung-hee Assassinated" },
    description: { fa: "رئیس‌جمهور پارک چونگ‌هی توسط رئیس سازمان اطلاعات ترور شد", en: "President Park Chung-hee assassinated by intelligence chief" },
    details: {
      fa: "در ۲۶ اکتبر ۱۹۷۹ پارک چونگ‌هی رئیس‌جمهور کره جنوبی توسط کیم جائه‌گیو، رئیس سازمان اطلاعات مرکزی کره، ترور شد. پارک ۱۸ سال بر کره جنوبی حکومت کرده بود. ترور او امید به دموکراسی را زنده کرد اما ژنرال چون دوهوان با کودتای نظامی دوباره قدرت را به دست گرفت.",
      en: "On October 26, 1979, President Park Chung-hee was assassinated by Kim Jae-gyu, the director of the Korean Central Intelligence Agency. Park had ruled for 18 years. His assassination raised hopes for democracy, but General Chun Doo-hwan seized power through a military coup.",
    },
  },
  1980: {
    title: { fa: "قیام گوانگجو", en: "Gwangju Uprising" },
    description: { fa: "قیام مردمی در گوانگجو توسط ارتش به خاک و خون کشیده شد", en: "Popular uprising in Gwangju brutally suppressed by military" },
    details: {
      fa: "در مه ۱۹۸۰ شهروندان و دانشجویان شهر گوانگجو در اعتراض به حکومت نظامی ژنرال چون دوهوان قیام کردند. ارتش با نیروی بی‌رحمانه قیام را سرکوب کرد و صدها نفر کشته شدند. قیام گوانگجو به نماد مبارزه برای دموکراسی در کره جنوبی تبدیل شد.",
      en: "In May 1980, citizens and students in Gwangju rose up against General Chun Doo-hwan's martial law. The military brutally suppressed the uprising, killing hundreds. The Gwangju Uprising became a symbol of the struggle for democracy in South Korea.",
    },
  },
  1987: {
    title: { fa: "جنبش دموکراسی ژوئن", en: "June Democracy Movement" },
    description: { fa: "اعتراضات گسترده مردمی حکومت نظامی را مجبور به پذیرش دموکراسی کرد", en: "Mass protests force military government to accept democracy" },
    details: {
      fa: "در ژوئن ۱۹۸۷ میلیون‌ها کره‌ای جنوبی علیه حکومت نظامی تظاهرات کردند و خواستار انتخابات آزاد شدند. فشار مردمی حکومت را مجبور به پذیرش «اعلامیه ۲۹ ژوئن» کرد که انتخابات مستقیم ریاست‌جمهوری و آزادی‌های مدنی را تضمین نمود. این نقطه عطف گذار کره جنوبی به دموکراسی بود.",
      en: "In June 1987, millions of South Koreans protested against military rule, demanding free elections. Popular pressure forced the government to accept the 'June 29 Declaration,' guaranteeing direct presidential elections and civil liberties. This was the turning point in South Korea's transition to democracy.",
    },
  },
  1988: {
    title: { fa: "المپیک سئول", en: "Seoul Olympics" },
    description: { fa: "کره جنوبی میزبان بازی‌های المپیک تابستانی شد", en: "South Korea hosts the Summer Olympic Games" },
    details: {
      fa: "بازی‌های المپیک تابستانی ۱۹۸۸ در سئول برگزار شد و کره جنوبی را به عنوان کشوری مدرن و صنعتی به جهان معرفی کرد. ۱۶۰ کشور شرکت کردند. المپیک سئول نماد تحول اقتصادی و سیاسی کره جنوبی از دیکتاتوری به دموکراسی و از فقر به رفاه بود.",
      en: "The 1988 Summer Olympic Games were held in Seoul, introducing South Korea to the world as a modern, industrialized nation. 160 countries participated. The Seoul Olympics symbolized South Korea's transformation from dictatorship to democracy and from poverty to prosperity.",
    },
  },
  1997: {
    title: { fa: "بحران مالی آسیا و کمک صندوق بین‌المللی پول", en: "Asian Financial Crisis & IMF Bailout" },
    description: { fa: "بحران مالی آسیا اقتصاد کره جنوبی را فلج کرد و دولت از IMF کمک خواست", en: "Asian financial crisis paralyzes South Korea's economy, government seeks IMF bailout" },
    details: {
      fa: "بحران مالی آسیا در ۱۹۹۷ اقتصاد کره جنوبی را به شدت ضربه زد. ارزش وون سقوط کرد، شرکت‌های بزرگ ورشکست شدند و بیکاری افزایش یافت. کره جنوبی مجبور شد ۵۷ میلیارد دلار وام از صندوق بین‌المللی پول دریافت کند. این بحران اصلاحات ساختاری عمیقی در اقتصاد کره جنوبی ایجاد کرد.",
      en: "The 1997 Asian financial crisis severely hit South Korea's economy. The won plummeted, major conglomerates went bankrupt, and unemployment surged. South Korea was forced to accept a $57 billion IMF bailout. The crisis led to deep structural reforms in South Korea's economy.",
    },
  },
  2000: {
    title: { fa: "نشست سران دو کره", en: "Inter-Korean Summit" },
    description: { fa: "اولین نشست سران کره شمالی و جنوبی برگزار شد", en: "First-ever summit between North and South Korean leaders" },
    details: {
      fa: "در ژوئن ۲۰۰۰ کیم دائه‌جونگ رئیس‌جمهور کره جنوبی و کیم جونگ‌ایل رهبر کره شمالی در پیونگ‌یانگ دیدار کردند. کیم دائه‌جونگ به خاطر «سیاست آفتاب» و تلاش برای آشتی با کره شمالی جایزه صلح نوبل دریافت کرد.",
      en: "In June 2000, South Korean President Kim Dae-jung and North Korean leader Kim Jong-il met in Pyongyang. Kim Dae-jung received the Nobel Peace Prize for his 'Sunshine Policy' and efforts to reconcile with North Korea.",
    },
  },
  2002: {
    title: { fa: "میزبانی مشترک جام جهانی فوتبال", en: "FIFA World Cup Co-Host" },
    description: { fa: "کره جنوبی و ژاپن میزبان جام جهانی فوتبال شدند", en: "South Korea and Japan co-host the FIFA World Cup" },
    details: {
      fa: "کره جنوبی و ژاپن در سال ۲۰۰۲ میزبان مشترک جام جهانی فوتبال شدند. تیم ملی کره جنوبی به طرز شگفت‌انگیزی به مرحله نیمه‌نهایی رسید و میلیون‌ها هوادار در خیابان‌ها جشن گرفتند.",
      en: "South Korea and Japan co-hosted the 2002 FIFA World Cup. The South Korean national team sensationally reached the semi-finals, with millions of fans celebrating in the streets.",
    },
  },
  2014: {
    title: { fa: "فاجعه کشتی سوول", en: "Sewol Ferry Disaster" },
    description: { fa: "غرق شدن کشتی سوول ۳۰۴ نفر را کشت و بحران اعتماد عمومی ایجاد کرد", en: "Sinking of Sewol ferry kills 304, sparking public trust crisis" },
    details: {
      fa: "در ۱۶ آوریل ۲۰۱۴ کشتی مسافربری سوول با ۴۷۶ سرنشین در مسیر جزیره جه‌جو غرق شد و ۳۰۴ نفر جان باختند. عملیات نجات ناکارآمد و دروغ‌گویی مقامات خشم عمومی گسترده‌ای برانگیخت. این فاجعه زمینه‌ساز استیضاح رئیس‌جمهور پارک گون‌هه در ۲۰۱۶ گردید.",
      en: "On April 16, 2014, the passenger ferry Sewol sank en route to Jeju Island with 476 people aboard, killing 304. The botched rescue operation and officials' lies sparked widespread public outrage. The disaster laid the groundwork for President Park Geun-hye's impeachment in 2016.",
    },
  },
  2016: {
    title: { fa: "استیضاح پارک گون‌هه", en: "Park Geun-hye Impeached" },
    description: { fa: "رئیس‌جمهور کره جنوبی به دلیل رسوایی فساد استیضاح و برکنار شد", en: "South Korean president impeached and removed over corruption scandal" },
    details: {
      fa: "در دسامبر ۲۰۱۶ پارک گون‌هه رئیس‌جمهور کره جنوبی در پی رسوایی فساد بزرگ توسط مجلس ملی استیضاح شد. میلیون‌ها نفر هفته‌ها با شمع تظاهرات مسالمت‌آمیز کردند. پارک دستگیر و به ۲۵ سال زندان محکوم شد. این رویداد قدرت دموکراسی کره جنوبی را به جهان نشان داد.",
      en: "In December 2016, President Park Geun-hye was impeached by the National Assembly following a massive corruption scandal. Millions held peaceful candlelight protests for weeks. Park was arrested and sentenced to 25 years in prison. This event demonstrated the strength of South Korean democracy to the world.",
    },
  },
  2018: {
    title: { fa: "نشست سران دو کره و المپیک زمستانی پیونگ‌چانگ", en: "Inter-Korean Summit & Pyeongchang Winter Olympics" },
    description: { fa: "المپیک زمستانی پیونگ‌چانگ و نشست تاریخی سران دو کره برگزار شد", en: "Pyeongchang Winter Olympics and historic inter-Korean summit held" },
    details: {
      fa: "کره جنوبی المپیک زمستانی ۲۰۱۸ را در پیونگ‌چانگ برگزار کرد. در آوریل مون جائه‌این و کیم جونگ‌اون در پانمونجوم دیدار کردند و «اعلامیه پانمونجوم» را امضا نمودند و قول خلع سلاح هسته‌ای و صلح دائمی دادند.",
      en: "South Korea hosted the 2018 Winter Olympics in Pyeongchang. In April, President Moon Jae-in and Kim Jong-un met at Panmunjom and signed the 'Panmunjom Declaration,' pledging denuclearization and permanent peace.",
    },
  },
  2020: {
    title: { fa: "جایزه اسکار فیلم انگل و موج فرهنگی کره", en: "Parasite Wins Oscar & Korean Cultural Wave" },
    description: { fa: "فیلم انگل اسکار بهترین فیلم را برد و موج فرهنگی کره جهانی شد", en: "Film Parasite wins Best Picture Oscar, Korean cultural wave goes global" },
    details: {
      fa: "فیلم «انگل» ساخته بونگ جون‌هو در فوریه ۲۰۲۰ جایزه اسکار بهترین فیلم را برد و اولین فیلم غیرانگلیسی‌زبان در تاریخ اسکار بود که این جایزه را دریافت کرد. این دستاورد نماد گسترش موج فرهنگی کره (هالیو) بود.",
      en: "Bong Joon-ho's 'Parasite' won the Academy Award for Best Picture in February 2020, becoming the first non-English-language film in Oscar history to receive this award. This symbolized the expansion of the Korean Wave (Hallyu).",
    },
  },
  2022: {
    title: { fa: "فاجعه ازدحام ایته‌وان و انتخاب یون سوک‌یول", en: "Itaewon Crowd Crush & Yoon Suk-yeol Elected" },
    description: { fa: "ازدحام جمعیت در جشن هالووین ایته‌وان ۱۵۹ نفر را کشت و یون رئیس‌جمهور شد", en: "Halloween crowd crush in Itaewon kills 159; Yoon elected president" },
    details: {
      fa: "در اکتبر ۲۰۲۲ ازدحام جمعیت در جشن هالووین در محله ایته‌وان سئول ۱۵۹ نفر را کشت. پیش‌تر در مارس یون سوک‌یول نامزد محافظه‌کار با اختلاف اندک رئیس‌جمهور شده بود.",
      en: "In October 2022, a crowd crush during Halloween celebrations in Seoul's Itaewon district killed 159 people. Earlier in March, conservative candidate Yoon Suk-yeol had won the presidency by a narrow margin.",
    },
  },
  2024: {
    title: { fa: "بحران حکومت نظامی یون سوک‌یول", en: "Yoon Suk-yeol Martial Law Crisis" },
    description: { fa: "رئیس‌جمهور یون حکومت نظامی اعلام کرد اما مجلس آن را لغو نمود", en: "President Yoon declares martial law but parliament overturns it" },
    details: {
      fa: "در دسامبر ۲۰۲۴ رئیس‌جمهور یون سوک‌یول به طور غیرمنتظره حکومت نظامی اعلام کرد. نمایندگان مجلس حکومت نظامی را در عرض چند ساعت لغو کردند. یون مجبور به عقب‌نشینی شد و فرآیند استیضاح آغاز گردید. این بحران شدیدترین تهدید علیه دموکراسی کره جنوبی از دهه ۱۹۸۰ بود.",
      en: "In December 2024, President Yoon Suk-yeol unexpectedly declared martial law. Lawmakers voted to overturn martial law within hours. Yoon was forced to back down and impeachment proceedings began. This crisis was the most serious threat to South Korean democracy since the 1980s.",
    },
  },
};

let insertCount = 0;

for (const [year, event] of Object.entries(southKoreaEvents)) {
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
  if (worldArrayStart === -1) {
    // No world array - need to add one
    // Find the closing of the iran array: last "],\n  }," before searchEnd
    const blockEnd = content.lastIndexOf('],', searchEnd);
    if (blockEnd === -1 || blockEnd < yearIndex) {
      console.log(`WARNING: Could not find iran array closing for year ${year}, skipping.`);
      continue;
    }
    // Insert world array after the iran array closing "],"
    const insertPos = blockEnd + 2; // after "],"
    const worldBlock = `\n    world: [\n      {\n        country: "south_korea",\n        title: { fa: "${event.title.fa}", en: "${event.title.en}" },\n        description: { fa: "${event.description.fa}", en: "${event.description.en}" },\n        details: {\n          fa: "${event.details.fa}",\n          en: "${event.details.en}",\n        },\n      },\n    ],`;
    content = content.substring(0, insertPos) + worldBlock + content.substring(insertPos);
    insertCount++;
    console.log(`Inserted South Korea event for year ${year} (new world array)`);
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

  const eventStr = `
      {
        country: "south_korea",
        title: { fa: "${event.title.fa}", en: "${event.title.en}" },
        description: { fa: "${event.description.fa}", en: "${event.description.en}" },
        details: {
          fa: "${event.details.fa}",
          en: "${event.details.en}",
        },
      },`;

  content = content.substring(0, insertPos) + eventStr + content.substring(insertPos);
  insertCount++;
  console.log(`Inserted South Korea event for year ${year}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone! Inserted ${insertCount} South Korea events.`);
