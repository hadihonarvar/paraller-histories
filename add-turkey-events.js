const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const turkeyEvents = {
  1908: {
    title: { fa: "انقلاب ترک‌های جوان", en: "Young Turk Revolution" },
    description: { fa: "انقلاب ترک‌های جوان سلطان عبدالحمید دوم را مجبور به بازگرداندن مشروطه کرد", en: "Young Turk Revolution forces Sultan Abdul Hamid II to restore the constitution" },
    details: {
      fa: "در ژوئیه ۱۹۰۸ جنبش ترک‌های جوان (کمیته اتحاد و ترقی) با شورش نظامی در مقدونیه سلطان عبدالحمید دوم را مجبور به بازگرداندن قانون اساسی ۱۸۷۶ و تشکیل مجلس کرد. این انقلاب امید به آزادی و برابری در سراسر امپراتوری عثمانی ایجاد نمود اما در نهایت به حکومت اقتدارگرای سه پاشا انجامید.",
      en: "In July 1908, the Young Turk movement (Committee of Union and Progress) forced Sultan Abdul Hamid II to restore the 1876 constitution and reconvene parliament through a military revolt in Macedonia. The revolution raised hopes of liberty and equality across the Ottoman Empire but eventually led to the authoritarian rule of the Three Pashas.",
    },
  },
  1909: {
    title: { fa: "خلع سلطان عبدالحمید دوم", en: "Sultan Abdul Hamid II Deposed" },
    description: { fa: "سلطان عبدالحمید دوم پس از کودتای نافرجام ضدانقلابی خلع شد", en: "Sultan Abdul Hamid II deposed after failed counter-revolutionary coup" },
    details: {
      fa: "در آوریل ۱۹۰۹ پس از شکست کودتای ضدانقلابی (حادثه ۳۱ مارس)، ترک‌های جوان سلطان عبدالحمید دوم را خلع و برادرش محمد پنجم را به سلطنت رساندند. عبدالحمید به تسالونیکی تبعید شد. قدرت واقعی در دست کمیته اتحاد و ترقی قرار گرفت.",
      en: "In April 1909, following the failure of the counter-revolutionary coup (the 31 March Incident), the Young Turks deposed Sultan Abdul Hamid II and replaced him with his brother Mehmed V. Abdul Hamid was exiled to Thessaloniki. Real power passed to the Committee of Union and Progress.",
    },
  },
  1911: {
    title: { fa: "جنگ عثمانی-ایتالیا و از دست دادن لیبی", en: "Italo-Turkish War & Loss of Libya" },
    description: { fa: "ایتالیا به لیبی عثمانی حمله کرد و آن را تصرف نمود", en: "Italy invades and seizes Ottoman Libya" },
    details: {
      fa: "در سپتامبر ۱۹۱۱ ایتالیا به طرابلس و برقه (لیبی امروزی) حمله کرد. امپراتوری عثمانی پس از یک سال جنگ مجبور به واگذاری لیبی شد. این جنگ ضعف نظامی عثمانی را آشکار ساخت و زمینه جنگ‌های بالکان را فراهم کرد.",
      en: "In September 1911, Italy invaded Tripolitania and Cyrenaica (modern Libya). After a year of war, the Ottoman Empire was forced to cede Libya. The war exposed Ottoman military weakness and set the stage for the Balkan Wars.",
    },
  },
  1912: {
    title: { fa: "جنگ اول بالکان", en: "First Balkan War" },
    description: { fa: "اتحاد بالکان بخش اعظم سرزمین‌های اروپایی عثمانی را تصرف کرد", en: "Balkan League captures most of Ottoman European territories" },
    details: {
      fa: "در اکتبر ۱۹۱۲ صربستان، یونان، بلغارستان و مونته‌نگرو به امپراتوری عثمانی حمله کردند. عثمانی شکست سنگینی خورد و بخش اعظم سرزمین‌های اروپایی خود شامل مقدونیه، تراکیه و آلبانی را از دست داد. این شکست ضربه بزرگی به اعتبار امپراتوری بود.",
      en: "In October 1912, Serbia, Greece, Bulgaria, and Montenegro attacked the Ottoman Empire. The Ottomans suffered a devastating defeat, losing most of their European territories including Macedonia, Thrace, and Albania. This defeat was a major blow to imperial prestige.",
    },
  },
  1913: {
    title: { fa: "کودتای ۱۹۱۳ و حکومت سه پاشا", en: "1913 Coup & Rule of the Three Pashas" },
    description: { fa: "انور پاشا با کودتا قدرت را قبضه کرد و حکومت سه پاشا آغاز شد", en: "Enver Pasha seizes power in a coup, beginning the Three Pashas era" },
    details: {
      fa: "در ژانویه ۱۹۱۳ انور پاشا با حمله به باب عالی (دفتر صدراعظم) کودتا کرد. حکومت سه پاشا (انور، طلعت و جمال) قدرت مطلق را در دست گرفت. این سه‌نفر امپراتوری عثمانی را به جنگ جهانی اول کشاندند و مسئول سیاست‌های فاجعه‌بار از جمله نسل‌کشی ارمنیان بودند.",
      en: "In January 1913, Enver Pasha staged a coup by raiding the Sublime Porte. The Three Pashas (Enver, Talat, and Cemal) seized absolute power. They led the Ottoman Empire into World War I and were responsible for catastrophic policies including the Armenian Genocide.",
    },
  },
  1914: {
    title: { fa: "ورود عثمانی به جنگ جهانی اول", en: "Ottoman Empire Enters World War I" },
    description: { fa: "امپراتوری عثمانی در کنار آلمان و اتریش وارد جنگ جهانی اول شد", en: "Ottoman Empire enters WWI allied with Germany and Austria-Hungary" },
    details: {
      fa: "در نوامبر ۱۹۱۴ امپراتوری عثمانی با بمباران بنادر روسیه در دریای سیاه رسماً وارد جنگ جهانی اول شد. انور پاشا این تصمیم را بدون مشورت کامل با کابینه گرفت. عثمانی در چندین جبهه از جمله قفقاز، گالیپولی، بین‌النهرین و فلسطین جنگید.",
      en: "In November 1914, the Ottoman Empire officially entered World War I by bombarding Russian Black Sea ports. Enver Pasha made this decision without full cabinet consultation. The Ottomans fought on multiple fronts including the Caucasus, Gallipoli, Mesopotamia, and Palestine.",
    },
  },
  1915: {
    title: { fa: "نبرد گالیپولی و نسل‌کشی ارمنیان", en: "Battle of Gallipoli & Armenian Genocide" },
    description: { fa: "دفاع موفق عثمانی در گالیپولی و آغاز نسل‌کشی ارمنیان", en: "Successful Ottoman defense at Gallipoli and beginning of the Armenian Genocide" },
    details: {
      fa: "در ۱۹۱۵ نیروهای عثمانی به فرماندهی مصطفی کمال در گالیپولی از حمله متفقین دفاع کردند و پیروزی بزرگی به دست آوردند. همزمان دولت عثمانی فرمان تبعید ارمنیان را صادر کرد که به نسل‌کشی ارمنیان انجامید و حدود ۱.۵ میلیون ارمنی جان باختند. گالیپولی مصطفی کمال را به قهرمان ملی تبدیل کرد.",
      en: "In 1915, Ottoman forces under Mustafa Kemal's command successfully defended against the Allied invasion at Gallipoli, achieving a major victory. Simultaneously, the Ottoman government issued deportation orders for Armenians, leading to the Armenian Genocide in which approximately 1.5 million Armenians perished. Gallipoli made Mustafa Kemal a national hero.",
    },
  },
  1918: {
    title: { fa: "شکست عثمانی در جنگ جهانی اول و آتش‌بس مودروس", en: "Ottoman Defeat in WWI & Armistice of Mudros" },
    description: { fa: "امپراتوری عثمانی شکست خورد و آتش‌بس مودروس امضا شد", en: "Ottoman Empire defeated, Armistice of Mudros signed" },
    details: {
      fa: "در ۳۰ اکتبر ۱۹۱۸ امپراتوری عثمانی آتش‌بس مودروس را امضا کرد و از جنگ جهانی اول خارج شد. سه پاشا از کشور گریختند. متفقین استانبول و بخش‌های مهمی از آناتولی را اشغال کردند. امپراتوری عثمانی عملاً تجزیه شد و سرزمین‌های عربی از دست رفت.",
      en: "On October 30, 1918, the Ottoman Empire signed the Armistice of Mudros, exiting World War I. The Three Pashas fled the country. The Allies occupied Istanbul and significant parts of Anatolia. The Ottoman Empire was effectively dismembered and its Arab territories were lost.",
    },
  },
  1919: {
    title: { fa: "آغاز جنگ استقلال ترکیه", en: "Turkish War of Independence Begins" },
    description: { fa: "مصطفی کمال جنبش مقاومت ملی را در آناتولی آغاز کرد", en: "Mustafa Kemal launches the national resistance movement in Anatolia" },
    details: {
      fa: "در مه ۱۹۱۹ مصطفی کمال به سامسون رفت و جنبش مقاومت ملی را آغاز کرد. کنگره‌های ارزروم و سیواس برگزار شد و میثاق ملی تصویب گردید. این جنبش در برابر اشغالگران یونانی، فرانسوی، ایتالیایی و بریتانیایی و همچنین دولت ضعیف سلطنتی در استانبول شکل گرفت.",
      en: "In May 1919, Mustafa Kemal traveled to Samsun and launched the national resistance movement. The Congresses of Erzurum and Sivas were held and the National Pact was adopted. This movement formed against Greek, French, Italian, and British occupiers as well as the weak sultanate government in Istanbul.",
    },
  },
  1920: {
    title: { fa: "تأسیس مجلس بزرگ ملی ترکیه و پیمان سور", en: "Grand National Assembly Founded & Treaty of Sèvres" },
    description: { fa: "مجلس بزرگ ملی ترکیه در آنکارا تشکیل شد و عثمانی پیمان سور را امضا کرد", en: "Turkish Grand National Assembly convenes in Ankara; Ottomans sign Treaty of Sèvres" },
    details: {
      fa: "در ۲۳ آوریل ۱۹۲۰ مجلس بزرگ ملی ترکیه در آنکارا تأسیس شد و مصطفی کمال رئیس آن شد. در اوت دولت عثمانی پیمان سور را امضا کرد که آناتولی را تقسیم می‌کرد، اما دولت آنکارا این پیمان را رد نمود. جنگ استقلال با شدت بیشتری ادامه یافت.",
      en: "On April 23, 1920, the Grand National Assembly of Turkey was established in Ankara with Mustafa Kemal as its president. In August, the Ottoman government signed the Treaty of Sèvres which partitioned Anatolia, but the Ankara government rejected it. The War of Independence continued with greater intensity.",
    },
  },
  1921: {
    title: { fa: "نبرد ساکاریا", en: "Battle of Sakarya" },
    description: { fa: "ارتش ترکیه در نبرد ساکاریا پیشروی یونان را متوقف کرد", en: "Turkish army halts Greek advance at the Battle of Sakarya" },
    details: {
      fa: "در اوت-سپتامبر ۱۹۲۱ نبرد ساکاریا بین ارتش ترکیه به فرماندهی مصطفی کمال و ارتش یونان در نزدیکی آنکارا درگرفت. پس از ۲۲ روز نبرد، ارتش یونان عقب‌نشینی کرد. این پیروزی نقطه عطف جنگ استقلال بود و مجلس لقب «غازی» را به مصطفی کمال اعطا کرد.",
      en: "In August-September 1921, the Battle of Sakarya was fought between the Turkish army under Mustafa Kemal and the Greek army near Ankara. After 22 days of fighting, the Greek army retreated. This victory was the turning point of the War of Independence, and the Assembly awarded Mustafa Kemal the title of 'Ghazi.'",
    },
  },
  1922: {
    title: { fa: "پیروزی در جنگ استقلال و لغو سلطنت", en: "Victory in War of Independence & Abolition of Sultanate" },
    description: { fa: "ارتش ترکیه یونانیان را شکست داد و سلطنت عثمانی لغو شد", en: "Turkish army defeats Greeks; Ottoman sultanate abolished" },
    details: {
      fa: "در اوت ۱۹۲۲ ارتش ترکیه در حمله بزرگ، ارتش یونان را شکست داده و ازمیر را آزاد کرد. در نوامبر مجلس بزرگ ملی ترکیه سلطنت عثمانی را لغو کرد. آخرین سلطان محمد ششم با یک ناوشکن بریتانیایی از استانبول گریخت. امپراتوری ۶۰۰ ساله عثمانی پایان یافت.",
      en: "In August 1922, the Turkish army defeated the Greek forces in the Great Offensive and liberated Izmir. In November, the Grand National Assembly abolished the Ottoman sultanate. The last sultan, Mehmed VI, fled Istanbul on a British warship. The 600-year-old Ottoman Empire came to an end.",
    },
  },
  1923: {
    title: { fa: "تأسیس جمهوری ترکیه", en: "Republic of Turkey Proclaimed" },
    description: { fa: "مصطفی کمال آتاتورک جمهوری ترکیه را اعلام و آنکارا را پایتخت کرد", en: "Mustafa Kemal Atatürk proclaims the Republic of Turkey with Ankara as capital" },
    details: {
      fa: "در ۲۹ اکتبر ۱۹۲۳ جمهوری ترکیه رسماً اعلام شد و مصطفی کمال اولین رئیس‌جمهور شد. پیش از آن پیمان لوزان در ژوئیه مرزهای ترکیه مدرن را تعیین کرده بود. آنکارا به جای استانبول پایتخت شد. این نقطه آغاز دوران جدیدی در تاریخ ترکیه بود.",
      en: "On October 29, 1923, the Republic of Turkey was officially proclaimed and Mustafa Kemal became its first president. Earlier, the Treaty of Lausanne in July had established modern Turkey's borders. Ankara replaced Istanbul as the capital. This marked the beginning of a new era in Turkish history.",
    },
  },
  1924: {
    title: { fa: "لغو خلافت عثمانی", en: "Abolition of the Caliphate" },
    description: { fa: "خلافت عثمانی لغو شد و خاندان عثمانی از ترکیه تبعید گردید", en: "Ottoman Caliphate abolished, Ottoman dynasty exiled from Turkey" },
    details: {
      fa: "در ۳ مارس ۱۹۲۴ مجلس بزرگ ملی ترکیه خلافت عثمانی را لغو کرد و تمام اعضای خاندان عثمانی را از کشور تبعید نمود. این اقدام بخشی از اصلاحات سکولار آتاتورک بود و پایان خلافت اسلامی را رقم زد که از ۱۲۹۹ برقرار بود. قانون اساسی جدید نیز تصویب شد.",
      en: "On March 3, 1924, the Grand National Assembly abolished the Ottoman Caliphate and exiled all members of the Ottoman dynasty from the country. This was part of Atatürk's secular reforms and ended the Islamic caliphate that had existed since 1299. A new constitution was also adopted.",
    },
  },
  1925: {
    title: { fa: "اصلاحات کلاه و پوشاک آتاتورک", en: "Atatürk's Hat and Dress Reforms" },
    description: { fa: "آتاتورک پوشیدن فز و لباس سنتی را ممنوع و لباس غربی را اجباری کرد", en: "Atatürk bans fez and traditional dress, mandates Western clothing" },
    details: {
      fa: "در ۱۹۲۵ آتاتورک قانون کلاه را تصویب کرد که فز و عمامه را ممنوع و کلاه لبه‌دار غربی را اجباری نمود. شورش شیخ سعید کُرد نیز در شرق ترکیه سرکوب شد. این اصلاحات بخشی از برنامه غرب‌گرایی و سکولاریسم آتاتورک بود و با مقاومت سنت‌گرایان مواجه گردید.",
      en: "In 1925, Atatürk passed the Hat Law banning the fez and turban, mandating Western-style hats. The Sheikh Said Kurdish rebellion in eastern Turkey was also suppressed. These reforms were part of Atatürk's Westernization and secularism program and faced resistance from traditionalists.",
    },
  },
  1926: {
    title: { fa: "تصویب قانون مدنی جدید ترکیه", en: "Adoption of New Turkish Civil Code" },
    description: { fa: "ترکیه قانون مدنی سوئیس را الگو قرار داد و شریعت اسلامی را کنار گذاشت", en: "Turkey adopts Swiss-based civil code, replacing Islamic Sharia law" },
    details: {
      fa: "در ۱۹۲۶ ترکیه قانون مدنی جدید را بر اساس قانون مدنی سوئیس تصویب کرد. چندهمسری ممنوع شد، حق طلاق برابر به زنان داده شد و ازدواج مدنی اجباری گردید. این اصلاح یکی از رادیکال‌ترین تغییرات در جهان اسلام بود و سیستم حقوقی ترکیه را کاملاً سکولار کرد.",
      en: "In 1926, Turkey adopted a new civil code based on the Swiss Civil Code. Polygamy was banned, equal divorce rights were granted to women, and civil marriage was made mandatory. This was one of the most radical reforms in the Muslim world and completely secularized Turkey's legal system.",
    },
  },
  1928: {
    title: { fa: "تغییر الفبا از عربی به لاتین", en: "Alphabet Reform: Arabic to Latin Script" },
    description: { fa: "آتاتورک خط عربی را لغو و الفبای لاتین ترکی را جایگزین کرد", en: "Atatürk replaces Arabic script with new Turkish Latin alphabet" },
    details: {
      fa: "در نوامبر ۱۹۲۸ مجلس ترکیه قانون تغییر الفبا را تصویب کرد. خط عربی-عثمانی با الفبای لاتین جدید ترکی جایگزین شد. آتاتورک شخصاً در سراسر کشور سفر کرد و الفبای جدید را تدریس نمود. این تغییر ارتباط فرهنگی ترکیه با گذشته عثمانی را قطع کرد.",
      en: "In November 1928, the Turkish parliament passed the alphabet reform law. The Ottoman Arabic script was replaced with a new Turkish Latin alphabet. Atatürk personally traveled across the country teaching the new alphabet. This change severed Turkey's cultural connection to its Ottoman past.",
    },
  },
  1934: {
    title: { fa: "قانون نام خانوادگی و حق رأی زنان", en: "Surname Law & Women's Suffrage" },
    description: { fa: "قانون نام خانوادگی تصویب شد و مصطفی کمال لقب آتاتورک گرفت؛ زنان حق رأی یافتند", en: "Surname Law adopted, Mustafa Kemal given title 'Atatürk'; women gain voting rights" },
    details: {
      fa: "در ۱۹۳۴ قانون نام خانوادگی تصویب شد و هر شهروند ترک مکلف به انتخاب نام خانوادگی شد. مجلس لقب «آتاتورک» (پدر تُرک‌ها) را به مصطفی کمال اعطا کرد. همچنین زنان ترکیه حق رأی دادن و نامزد شدن در انتخابات پارلمانی را به دست آوردند.",
      en: "In 1934, the Surname Law was adopted requiring all Turkish citizens to choose a surname. Parliament bestowed the title 'Atatürk' (Father of the Turks) upon Mustafa Kemal. Turkish women also gained the right to vote and stand as candidates in parliamentary elections.",
    },
  },
  1938: {
    title: { fa: "درگذشت مصطفی کمال آتاتورک", en: "Death of Mustafa Kemal Atatürk" },
    description: { fa: "بنیان‌گذار جمهوری ترکیه در سن ۵۷ سالگی درگذشت", en: "Founder of the Republic of Turkey dies at age 57" },
    details: {
      fa: "در ۱۰ نوامبر ۱۹۳۸ مصطفی کمال آتاتورک در کاخ دلمه‌باغچه استانبول در سن ۵۷ سالگی بر اثر سیروز کبدی درگذشت. عصمت اینونو جانشین او شد. آتاتورک ترکیه مدرن را از خاکستر امپراتوری عثمانی بنا نهاد و اصلاحات بنیادین سکولار، حقوقی و فرهنگی را اجرا کرد.",
      en: "On November 10, 1938, Mustafa Kemal Atatürk died of liver cirrhosis at Dolmabahçe Palace in Istanbul at age 57. İsmet İnönü succeeded him. Atatürk had built modern Turkey from the ashes of the Ottoman Empire and implemented fundamental secular, legal, and cultural reforms.",
    },
  },
  1939: {
    title: { fa: "الحاق هاتای به ترکیه و بی‌طرفی در جنگ جهانی دوم", en: "Hatay Annexed & Turkish Neutrality in WWII" },
    description: { fa: "استان هاتای به ترکیه ملحق شد و ترکیه در جنگ جهانی دوم بی‌طرف ماند", en: "Hatay province annexed to Turkey; Turkey remains neutral in WWII" },
    details: {
      fa: "در ۱۹۳۹ استان هاتای (سنجق اسکندرون) پس از همه‌پرسی به ترکیه ملحق شد. با آغاز جنگ جهانی دوم، ترکیه تحت رهبری عصمت اینونو سیاست بی‌طرفی را در پیش گرفت. ترکیه تا فوریه ۱۹۴۵ وارد جنگ نشد و اعلان جنگ آن تنها جنبه نمادین داشت.",
      en: "In 1939, Hatay Province (Sanjak of Alexandretta) was annexed to Turkey following a referendum. With the outbreak of World War II, Turkey under İsmet İnönü adopted a policy of neutrality. Turkey did not enter the war until February 1945, and its declaration of war was largely symbolic.",
    },
  },
  1945: {
    title: { fa: "ورود ترکیه به سازمان ملل و گذار به چندحزبی", en: "Turkey Joins UN & Transition to Multi-Party System" },
    description: { fa: "ترکیه عضو سازمان ملل شد و سیستم چندحزبی آغاز گردید", en: "Turkey becomes UN member and begins transition to multi-party politics" },
    details: {
      fa: "در ۱۹۴۵ ترکیه از اعضای مؤسس سازمان ملل شد. تحت فشارهای داخلی و بین‌المللی، عصمت اینونو اجازه تأسیس احزاب مخالف را داد. حزب دموکرات به رهبری عدنان مندرس و جلال بایار تأسیس شد. این آغاز گذار ترکیه از نظام تک‌حزبی به دموکراسی چندحزبی بود.",
      en: "In 1945, Turkey became a founding member of the United Nations. Under domestic and international pressure, İsmet İnönü permitted the establishment of opposition parties. The Democrat Party was founded under Adnan Menderes and Celal Bayar. This marked the beginning of Turkey's transition from single-party rule to multi-party democracy.",
    },
  },
  1950: {
    title: { fa: "پیروزی حزب دموکرات و پایان حکومت تک‌حزبی", en: "Democrat Party Victory & End of Single-Party Rule" },
    description: { fa: "حزب دموکرات در انتخابات آزاد پیروز شد و ۲۷ سال حکومت حزب جمهوری‌خواه خلق پایان یافت", en: "Democrat Party wins free elections, ending 27 years of CHP single-party rule" },
    details: {
      fa: "در مه ۱۹۵۰ حزب دموکرات به رهبری عدنان مندرس در انتخابات آزاد پیروزی قاطع به دست آورد و ۲۷ سال حکومت تک‌حزبی حزب جمهوری‌خواه خلق پایان یافت. جلال بایار رئیس‌جمهور و مندرس نخست‌وزیر شد. این اولین انتقال مسالمت‌آمیز قدرت در تاریخ ترکیه بود.",
      en: "In May 1950, the Democrat Party led by Adnan Menderes won a decisive victory in free elections, ending 27 years of CHP single-party rule. Celal Bayar became president and Menderes became prime minister. This was the first peaceful transfer of power in Turkish history.",
    },
  },
  1952: {
    title: { fa: "عضویت ترکیه در ناتو", en: "Turkey Joins NATO" },
    description: { fa: "ترکیه به عضویت پیمان ناتو درآمد", en: "Turkey becomes a member of NATO" },
    details: {
      fa: "در فوریه ۱۹۵۲ ترکیه رسماً به عضویت سازمان پیمان آتلانتیک شمالی (ناتو) درآمد. شرکت ترکیه در جنگ کره (۱۹۵۰-۱۹۵۳) نقش مهمی در پذیرش عضویتش داشت. عضویت در ناتو ترکیه را در اردوگاه غرب قرار داد و امنیت آن را در برابر تهدید شوروی تضمین کرد.",
      en: "In February 1952, Turkey officially joined the North Atlantic Treaty Organization (NATO). Turkey's participation in the Korean War (1950-1953) played an important role in its admission. NATO membership placed Turkey firmly in the Western camp and guaranteed its security against the Soviet threat.",
    },
  },
  1955: {
    title: { fa: "فاجعه استانبول (پوگروم سپتامبر)", en: "Istanbul Pogrom (September Events)" },
    description: { fa: "حملات سازمان‌یافته به اقلیت‌های یونانی، ارمنی و یهودی استانبول", en: "Organized attacks on Greek, Armenian, and Jewish minorities in Istanbul" },
    details: {
      fa: "در ۶-۷ سپتامبر ۱۹۵۵ حملات سازمان‌یافته‌ای علیه اقلیت‌های یونانی، ارمنی و یهودی استانبول صورت گرفت. هزاران مغازه، خانه و کلیسا تخریب شد. این حوادث که با تحریک دولت مندرس همراه بود، مهاجرت گسترده اقلیت‌ها از ترکیه را تسریع کرد.",
      en: "On September 6-7, 1955, organized attacks targeted Greek, Armenian, and Jewish minorities in Istanbul. Thousands of shops, homes, and churches were destroyed. These events, instigated with government complicity under Menderes, accelerated the mass emigration of minorities from Turkey.",
    },
  },
  1960: {
    title: { fa: "کودتای نظامی ۱۹۶۰ و اعدام مندرس", en: "1960 Military Coup & Execution of Menderes" },
    description: { fa: "ارتش ترکیه کودتا کرد و نخست‌وزیر عدنان مندرس اعدام شد", en: "Turkish military stages coup; Prime Minister Adnan Menderes executed" },
    details: {
      fa: "در ۲۷ مه ۱۹۶۰ ارتش ترکیه با کودتا حکومت عدنان مندرس را سرنگون کرد. مندرس، رئیس‌جمهور بایار و وزرای کابینه بازداشت و محاکمه شدند. مندرس در سپتامبر ۱۹۶۱ اعدام شد. قانون اساسی جدیدی تصویب گردید که آزادی‌های مدنی بیشتری تضمین می‌کرد.",
      en: "On May 27, 1960, the Turkish military overthrew the government of Adnan Menderes. Menderes, President Bayar, and cabinet ministers were arrested and tried. Menderes was executed in September 1961. A new constitution was adopted guaranteeing greater civil liberties.",
    },
  },
  1963: {
    title: { fa: "آغاز مذاکرات عضویت ترکیه در بازار مشترک اروپا", en: "Turkey Begins EEC Association" },
    description: { fa: "ترکیه قرارداد همکاری با بازار مشترک اروپا (جامعه اقتصادی اروپا) امضا کرد", en: "Turkey signs association agreement with the European Economic Community" },
    details: {
      fa: "در ۱۲ سپتامبر ۱۹۶۳ ترکیه قرارداد آنکارا را با جامعه اقتصادی اروپا (بازار مشترک) امضا کرد. این قرارداد هدف عضویت نهایی ترکیه در بازار مشترک را تعیین نمود. روند الحاق ترکیه به اتحادیه اروپا بعدها به یکی از طولانی‌ترین و بحث‌برانگیزترین فرآیندهای عضویت تبدیل شد.",
      en: "On September 12, 1963, Turkey signed the Ankara Agreement with the European Economic Community (Common Market). The agreement set the goal of Turkey's eventual membership. Turkey's EU accession process later became one of the longest and most contentious membership bids in history.",
    },
  },
  1971: {
    title: { fa: "کودتای نظامی ۱۹۷۱ (کودتای یادداشتی)", en: "1971 Military Coup (Coup by Memorandum)" },
    description: { fa: "ارتش با صدور یادداشت، دولت سلیمان دمیرل را مجبور به استعفا کرد", en: "Military issues memorandum forcing Prime Minister Süleyman Demirel to resign" },
    details: {
      fa: "در ۱۲ مارس ۱۹۷۱ ارتش ترکیه با صدور یادداشتی (مموراندوم) دولت سلیمان دمیرل را مجبور به استعفا کرد. این کودتا بدون خونریزی مستقیم انجام شد اما حکومت نظامی اعلام گردید، احزاب چپ ممنوع شدند و هزاران نفر بازداشت شدند. آزادی‌های مطبوعاتی و دانشگاهی محدود شد.",
      en: "On March 12, 1971, the Turkish military issued a memorandum forcing Prime Minister Süleyman Demirel to resign. This coup was carried out without direct bloodshed but martial law was declared, leftist parties were banned, and thousands were arrested. Press and academic freedoms were curtailed.",
    },
  },
  1974: {
    title: { fa: "حمله ترکیه به قبرس", en: "Turkish Invasion of Cyprus" },
    description: { fa: "ترکیه شمال قبرس را اشغال کرد و جزیره تقسیم شد", en: "Turkey invades northern Cyprus, dividing the island" },
    details: {
      fa: "در ژوئیه ۱۹۷۴ پس از کودتای نظامی در قبرس که با حمایت یونان انجام شد، ترکیه بخش شمالی جزیره قبرس را اشغال کرد. جزیره به دو بخش تقسیم شد: قبرس یونانی‌نشین در جنوب و قبرس ترک‌نشین در شمال. جمهوری ترک قبرس شمالی در ۱۹۸۳ اعلام شد اما تنها ترکیه آن را به رسمیت شناخت.",
      en: "In July 1974, following a military coup in Cyprus backed by Greece, Turkey invaded the northern part of the island. Cyprus was divided into two parts: the Greek Cypriot south and the Turkish Cypriot north. The Turkish Republic of Northern Cyprus was declared in 1983 but only recognized by Turkey.",
    },
  },
  1980: {
    title: { fa: "کودتای نظامی ۱۹۸۰", en: "1980 Military Coup" },
    description: { fa: "ارتش ترکیه سومین کودتا را انجام داد و حکومت نظامی سه‌ساله آغاز شد", en: "Turkish military stages third coup, beginning three years of military rule" },
    details: {
      fa: "در ۱۲ سپتامبر ۱۹۸۰ ارتش ترکیه به رهبری ژنرال کنعان اورن کودتا کرد. خشونت‌های سیاسی چپ و راست که روزانه ده‌ها کشته می‌داد بهانه کودتا بود. تمام احزاب سیاسی منحل، پارلمان تعطیل و هزاران نفر بازداشت شدند. قانون اساسی ۱۹۸۲ تصویب شد که آزادی‌ها را محدودتر کرد.",
      en: "On September 12, 1980, the Turkish military under General Kenan Evren staged a coup. Political violence between left and right factions killing dozens daily was the pretext. All political parties were dissolved, parliament was shut down, and thousands were arrested. The 1982 constitution was adopted with more restricted freedoms.",
    },
  },
  1984: {
    title: { fa: "آغاز شورش پ.ک.ک", en: "PKK Insurgency Begins" },
    description: { fa: "حزب کارگران کردستان (پ.ک.ک) جنگ مسلحانه علیه دولت ترکیه را آغاز کرد", en: "Kurdistan Workers' Party (PKK) launches armed insurgency against the Turkish state" },
    details: {
      fa: "در اوت ۱۹۸۴ حزب کارگران کردستان (پ.ک.ک) به رهبری عبدالله اوجالان حمله مسلحانه به پادگان‌های نظامی در جنوب‌شرق ترکیه را آغاز کرد. این آغاز درگیری مسلحانه‌ای بود که تا امروز ادامه دارد و بیش از ۴۰ هزار نفر در آن کشته شده‌اند.",
      en: "In August 1984, the Kurdistan Workers' Party (PKK) led by Abdullah Öcalan launched armed attacks on military garrisons in southeastern Turkey. This began an armed conflict that continues to the present day and has killed over 40,000 people.",
    },
  },
  1993: {
    title: { fa: "تنسو چیلر اولین زن نخست‌وزیر ترکیه", en: "Tansu Çiller Becomes First Female PM" },
    description: { fa: "تنسو چیلر اولین زن نخست‌وزیر در تاریخ ترکیه شد", en: "Tansu Çiller becomes the first female prime minister in Turkish history" },
    details: {
      fa: "در ژوئن ۱۹۹۳ تنسو چیلر پس از مرگ ناگهانی تورگوت اوزال رئیس‌جمهور، به نخست‌وزیری رسید و اولین زن نخست‌وزیر ترکیه شد. دوران نخست‌وزیری او با بحران اقتصادی، تشدید درگیری با پ.ک.ک و بی‌ثباتی سیاسی همراه بود.",
      en: "In June 1993, Tansu Çiller became prime minister following the sudden death of President Turgut Özal, becoming Turkey's first female prime minister. Her tenure was marked by economic crisis, intensified conflict with the PKK, and political instability.",
    },
  },
  1996: {
    title: { fa: "نخست‌وزیری نجم‌الدین اربکان (اولین نخست‌وزیر اسلام‌گرا)", en: "Necmettin Erbakan Becomes PM (First Islamist PM)" },
    description: { fa: "اربکان اولین نخست‌وزیر اسلام‌گرای ترکیه شد", en: "Erbakan becomes Turkey's first Islamist prime minister" },
    details: {
      fa: "در ژوئن ۱۹۹۶ نجم‌الدین اربکان رهبر حزب رفاه اسلام‌گرا نخست‌وزیر ترکیه شد. او اولین نخست‌وزیر اسلام‌گرا در تاریخ جمهوری سکولار ترکیه بود. اربکان روابط با ایران و لیبی را گسترش داد که تنش با ارتش سکولار را افزایش داد.",
      en: "In June 1996, Necmettin Erbakan, leader of the Islamist Welfare Party, became prime minister. He was the first Islamist prime minister in the history of secular Republican Turkey. Erbakan expanded relations with Iran and Libya, increasing tensions with the secular military.",
    },
  },
  1997: {
    title: { fa: "کودتای پست‌مدرن ۱۹۹۷ (فرآیند ۲۸ فوریه)", en: "1997 Postmodern Coup (February 28 Process)" },
    description: { fa: "ارتش با فشار سیاسی دولت اسلام‌گرای اربکان را سرنگون کرد", en: "Military forces Islamist government of Erbakan out through political pressure" },
    details: {
      fa: "در ۲۸ فوریه ۱۹۹۷ شورای امنیت ملی ترکیه یک سری مصوبات ضداسلام‌گرایی صادر کرد و ارتش عملاً دولت نجم‌الدین اربکان را مجبور به استعفا کرد. حزب رفاه ممنوع شد. این رویداد به «کودتای پست‌مدرن» معروف شد زیرا بدون تانک اما با فشار نظامی انجام گرفت.",
      en: "On February 28, 1997, Turkey's National Security Council issued a series of anti-Islamist resolutions, effectively forcing PM Necmettin Erbakan to resign. The Welfare Party was subsequently banned. This event became known as the 'postmodern coup' as it was carried out through military pressure rather than tanks.",
    },
  },
  1999: {
    title: { fa: "دستگیری اوجالان و زلزله مرمره", en: "Capture of Öcalan & Marmara Earthquake" },
    description: { fa: "عبدالله اوجالان رهبر پ.ک.ک دستگیر شد و زلزله ویرانگر مرمره رخ داد", en: "PKK leader Abdullah Öcalan captured; devastating Marmara earthquake strikes" },
    details: {
      fa: "در فوریه ۱۹۹۹ عبدالله اوجالان رهبر پ.ک.ک در کنیا دستگیر و به ترکیه منتقل شد. او به اعدام محکوم شد که بعداً به حبس ابد تبدیل گردید. در اوت زلزله ۷.۶ ریشتری مرمره بیش از ۱۷ هزار نفر را کشت و ضعف زیرساخت‌های ترکیه را آشکار ساخت.",
      en: "In February 1999, PKK leader Abdullah Öcalan was captured in Kenya and brought to Turkey. He was sentenced to death, later commuted to life imprisonment. In August, a 7.6 magnitude earthquake in Marmara killed over 17,000 people and exposed Turkey's infrastructure weaknesses.",
    },
  },
  2002: {
    title: { fa: "پیروزی حزب عدالت و توسعه (آ.ک.پ)", en: "AKP Victory in Elections" },
    description: { fa: "حزب عدالت و توسعه به رهبری رجب طیب اردوغان در انتخابات پیروز شد", en: "Justice and Development Party (AKP) led by Recep Tayyip Erdoğan wins elections" },
    details: {
      fa: "در نوامبر ۲۰۰۲ حزب عدالت و توسعه (آ.ک.پ) به رهبری رجب طیب اردوغان در انتخابات پارلمانی پیروزی قاطع به دست آورد. اردوغان به دلیل محکومیت قبلی ابتدا نتوانست نخست‌وزیر شود اما در مارس ۲۰۰۳ پس از تغییر قانون نخست‌وزیر گردید. آ.ک.پ وعده دموکراسی، رشد اقتصادی و عضویت در اتحادیه اروپا داد.",
      en: "In November 2002, the Justice and Development Party (AKP) led by Recep Tayyip Erdoğan won a decisive parliamentary election victory. Erdoğan initially could not become PM due to a prior conviction but became prime minister in March 2003 after a legal change. The AKP promised democracy, economic growth, and EU membership.",
    },
  },
  2003: {
    title: { fa: "امتناع ترکیه از اجازه حمله آمریکا از خاک ترکیه به عراق", en: "Turkey Refuses US Use of Turkish Territory for Iraq Invasion" },
    description: { fa: "مجلس ترکیه اجازه استفاده آمریکا از خاک ترکیه برای حمله به عراق را رد کرد", en: "Turkish parliament rejects US request to use Turkish soil for Iraq invasion" },
    details: {
      fa: "در مارس ۲۰۰۳ مجلس بزرگ ملی ترکیه درخواست آمریکا برای استفاده از خاک ترکیه جهت حمله زمینی به عراق از شمال را رد کرد. این رأی‌گیری تاریخی روابط ترکیه و آمریکا را تحت تأثیر قرار داد و نشان‌دهنده استقلال سیاسی ترکیه در منطقه بود.",
      en: "In March 2003, the Turkish Grand National Assembly rejected the US request to use Turkish territory for a northern ground invasion of Iraq. This historic vote strained Turkish-American relations and demonstrated Turkey's political independence in the region.",
    },
  },
  2004: {
    title: { fa: "آغاز مذاکرات عضویت ترکیه در اتحادیه اروپا", en: "Turkey Begins EU Accession Negotiations" },
    description: { fa: "اتحادیه اروپا مذاکرات رسمی عضویت ترکیه را آغاز کرد", en: "EU officially begins accession negotiations with Turkey" },
    details: {
      fa: "در دسامبر ۲۰۰۴ اتحادیه اروپا تصمیم گرفت مذاکرات عضویت با ترکیه را آغاز کند و مذاکرات رسمی در اکتبر ۲۰۰۵ شروع شد. دولت اردوغان اصلاحات قانونی و حقوقی گسترده‌ای انجام داد. اما مذاکرات در سال‌های بعد به دلیل مسئله قبرس و نگرانی‌های حقوق بشری متوقف شد.",
      en: "In December 2004, the EU decided to open accession negotiations with Turkey, with formal talks beginning in October 2005. The Erdoğan government implemented extensive legal reforms. However, negotiations later stalled due to the Cyprus issue and human rights concerns.",
    },
  },
  2007: {
    title: { fa: "بحران انتخاب رئیس‌جمهور و انتخابات زودهنگام", en: "Presidential Election Crisis & Early Elections" },
    description: { fa: "ارتش به انتخاب عبدالله گُل اعتراض کرد اما آ.ک.پ در انتخابات زودهنگام پیروز شد", en: "Military objects to Abdullah Gül's election; AKP wins snap elections" },
    details: {
      fa: "در ۲۰۰۷ ارتش ترکیه با صدور بیانیه‌ای اینترنتی (کودتای الکترونیکی) به نامزدی عبدالله گُل اسلام‌گرا برای ریاست‌جمهوری اعتراض کرد. آ.ک.پ انتخابات زودهنگام برگزار کرد و با ۴۷ درصد آرا پیروز شد. گُل رئیس‌جمهور شد و تسلط ارتش بر سیاست ترکیه کاهش یافت.",
      en: "In 2007, the Turkish military issued an online statement (e-coup) objecting to Islamist Abdullah Gül's presidential candidacy. The AKP called snap elections and won with 47% of the vote. Gül became president, and the military's dominance over Turkish politics diminished.",
    },
  },
  2010: {
    title: { fa: "همه‌پرسی اصلاح قانون اساسی", en: "Constitutional Referendum" },
    description: { fa: "مردم ترکیه به اصلاحات قانون اساسی شامل محدود کردن قدرت ارتش رأی دادند", en: "Turkish voters approve constitutional amendments limiting military power" },
    details: {
      fa: "در سپتامبر ۲۰۱۰ همه‌پرسی اصلاح قانون اساسی با ۵۸ درصد آرای موافق تصویب شد. اصلاحات شامل تغییر ترکیب دادگاه قانون اساسی، محدود کردن صلاحیت دادگاه‌های نظامی و امکان محاکمه رهبران کودتای ۱۹۸۰ بود. منتقدان هشدار دادند این اصلاحات قدرت اردوغان را افزایش می‌دهد.",
      en: "In September 2010, a constitutional referendum was approved with 58% of the vote. Reforms included changing the composition of the Constitutional Court, limiting military court jurisdiction, and enabling prosecution of 1980 coup leaders. Critics warned the reforms would increase Erdoğan's power.",
    },
  },
  2013: {
    title: { fa: "اعتراضات پارک گزی", en: "Gezi Park Protests" },
    description: { fa: "اعتراضات محیط‌زیستی به جنبش ضددولتی گسترده تبدیل شد", en: "Environmental protests escalate into widespread anti-government movement" },
    details: {
      fa: "در مه ۲۰۱۳ اعتراض به طرح ساخت‌وساز در پارک گزی استانبول به جنبش اعتراضی گسترده‌ای علیه سیاست‌های اقتدارگرایانه اردوغان تبدیل شد. میلیون‌ها نفر در ۸۰ شهر تظاهرات کردند. پلیس با گاز اشک‌آور و توپ آب سرکوب کرد. این بزرگ‌ترین چالش مردمی در برابر حکومت اردوغان بود.",
      en: "In May 2013, protests against a construction project in Istanbul's Gezi Park escalated into a widespread movement against Erdoğan's authoritarian policies. Millions protested in 80 cities. Police responded with tear gas and water cannons. This was the largest popular challenge to Erdoğan's rule.",
    },
  },
  2014: {
    title: { fa: "اردوغان اولین رئیس‌جمهور منتخب مستقیم مردم", en: "Erdoğan Elected First Directly-Chosen President" },
    description: { fa: "اردوغان در اولین انتخابات مستقیم ریاست‌جمهوری ترکیه پیروز شد", en: "Erdoğan wins Turkey's first direct presidential election" },
    details: {
      fa: "در اوت ۲۰۱۴ رجب طیب اردوغان در اولین انتخابات مستقیم ریاست‌جمهوری ترکیه با ۵۲ درصد آرا پیروز شد. او پس از ۱۱ سال نخست‌وزیری به ریاست‌جمهوری رسید. اردوغان از ابتدا به دنبال تبدیل نظام پارلمانی به ریاست‌جمهوری بود.",
      en: "In August 2014, Recep Tayyip Erdoğan won Turkey's first direct presidential election with 52% of the vote. After 11 years as prime minister, he became president. Erdoğan had long sought to transform the parliamentary system into a presidential one.",
    },
  },
  2015: {
    title: { fa: "بحران پناهندگان سوری و از سرگیری درگیری با پ.ک.ک", en: "Syrian Refugee Crisis & Resumption of PKK Conflict" },
    description: { fa: "ترکیه بزرگ‌ترین میزبان پناهندگان سوری شد و آتش‌بس با پ.ک.ک شکست", en: "Turkey becomes largest host of Syrian refugees; ceasefire with PKK collapses" },
    details: {
      fa: "در ۲۰۱۵ ترکیه با بیش از ۲ میلیون پناهنده سوری بزرگ‌ترین کشور میزبان پناهندگان جهان شد. آتش‌بس دوساله با پ.ک.ک در ژوئیه فروپاشید و عملیات نظامی گسترده در جنوب‌شرق ترکیه آغاز شد. انفجارهای تروریستی داعش در سوروچ و آنکارا صدها نفر را کشت.",
      en: "In 2015, Turkey became the world's largest refugee-hosting country with over 2 million Syrian refugees. The two-year ceasefire with the PKK collapsed in July and large-scale military operations began in southeastern Turkey. ISIS bombings in Suruç and Ankara killed hundreds.",
    },
  },
  2016: {
    title: { fa: "کودتای نافرجام ۱۵ ژوئیه", en: "Failed Coup Attempt of July 15" },
    description: { fa: "کودتای نظامی نافرجام علیه اردوغان با مقاومت مردمی شکست خورد", en: "Failed military coup against Erdoğan defeated by popular resistance" },
    details: {
      fa: "در ۱۵ ژوئیه ۲۰۱۶ بخشی از ارتش ترکیه کودتا کرد. تانک‌ها پل‌های استانبول و مجلس آنکارا را هدف قرار دادند. اردوغان از طریق فیس‌تایم مردم را به مقاومت فراخواند. بیش از ۲۵۰ نفر کشته شدند. دولت جنبش فتح‌الله گولن را مسئول دانست. حالت فوق‌العاده اعلام شد و بیش از ۱۵۰ هزار نفر بازداشت یا اخراج شدند.",
      en: "On July 15, 2016, a faction of the Turkish military attempted a coup. Tanks targeted Istanbul bridges and the Ankara parliament. Erdoğan called on citizens to resist via FaceTime. Over 250 people were killed. The government blamed the Fethullah Gülen movement. A state of emergency was declared and over 150,000 people were detained or dismissed.",
    },
  },
  2017: {
    title: { fa: "همه‌پرسی تغییر نظام به ریاست‌جمهوری", en: "Referendum on Presidential System" },
    description: { fa: "مردم ترکیه با اکثریت اندک به تغییر نظام پارلمانی به ریاست‌جمهوری رأی دادند", en: "Turkish voters narrowly approve switch from parliamentary to presidential system" },
    details: {
      fa: "در آوریل ۲۰۱۷ همه‌پرسی تغییر قانون اساسی با ۵۱.۴ درصد آرای موافق تصویب شد. نظام پارلمانی به ریاست‌جمهوری تغییر یافت و اختیارات گسترده‌ای به رئیس‌جمهور داده شد. مقام نخست‌وزیری حذف شد. مخالفان این تغییر را گامی به سوی اقتدارگرایی دانستند.",
      en: "In April 2017, a constitutional referendum was approved with 51.4% of the vote. The parliamentary system was changed to a presidential system with sweeping powers granted to the president. The office of prime minister was eliminated. Opponents called the change a step toward authoritarianism.",
    },
  },
  2018: {
    title: { fa: "عملیات نظامی شاخه زیتون در عفرین سوریه", en: "Operation Olive Branch in Afrin, Syria" },
    description: { fa: "ارتش ترکیه منطقه عفرین سوریه را از نیروهای کُرد تصرف کرد", en: "Turkish military captures Afrin region in Syria from Kurdish forces" },
    details: {
      fa: "در ژانویه ۲۰۱۸ ترکیه عملیات «شاخه زیتون» را علیه نیروهای مسلح کُرد (ی.پ.گ) در عفرین سوریه آغاز کرد. پس از دو ماه عملیات، ارتش ترکیه و نیروهای مخالف سوری عفرین را تصرف کردند. این عملیات بخشی از تلاش ترکیه برای جلوگیری از تشکیل منطقه خودمختار کُرد در شمال سوریه بود.",
      en: "In January 2018, Turkey launched Operation Olive Branch against Kurdish YPG forces in Afrin, Syria. After two months, the Turkish military and Syrian opposition forces captured Afrin. This operation was part of Turkey's effort to prevent the formation of an autonomous Kurdish region in northern Syria.",
    },
  },
  2019: {
    title: { fa: "عملیات چشمه صلح در شمال‌شرق سوریه", en: "Operation Peace Spring in Northeastern Syria" },
    description: { fa: "ترکیه به شمال‌شرق سوریه حمله کرد و منطقه امن ایجاد نمود", en: "Turkey invades northeastern Syria, establishing a buffer zone" },
    details: {
      fa: "در اکتبر ۲۰۱۹ پس از عقب‌نشینی نیروهای آمریکایی، ترکیه عملیات «چشمه صلح» را در شمال‌شرق سوریه آغاز کرد. هدف ایجاد منطقه امن ۳۰ کیلومتری و بازگرداندن پناهندگان سوری بود. این عملیات با محکومیت بین‌المللی گسترده‌ای مواجه شد.",
      en: "In October 2019, following the withdrawal of US forces, Turkey launched Operation Peace Spring in northeastern Syria. The goal was to create a 30-kilometer safe zone and resettle Syrian refugees. The operation faced widespread international condemnation.",
    },
  },
  2020: {
    title: { fa: "تبدیل ایاصوفیه به مسجد", en: "Hagia Sophia Converted Back to Mosque" },
    description: { fa: "اردوغان ایاصوفیه را پس از ۸۶ سال موزه بودن دوباره به مسجد تبدیل کرد", en: "Erdoğan converts Hagia Sophia back to a mosque after 86 years as a museum" },
    details: {
      fa: "در ژوئیه ۲۰۲۰ دادگاه عالی ترکیه تبدیل ایاصوفیه به موزه در ۱۹۳۴ را لغو کرد و اردوغان فرمان تبدیل آن به مسجد را صادر نمود. اولین نماز جمعه پس از ۸۶ سال در ۲۴ ژوئیه برگزار شد. این تصمیم واکنش‌های بین‌المللی گسترده‌ای برانگیخت. یونان و بسیاری از کشورها این اقدام را محکوم کردند.",
      en: "In July 2020, Turkey's top court annulled the 1934 conversion of Hagia Sophia into a museum, and Erdoğan issued a decree converting it back to a mosque. The first Friday prayers in 86 years were held on July 24. The decision sparked widespread international reaction, with Greece and many countries condemning the move.",
    },
  },
  2021: {
    title: { fa: "خروج ترکیه از پیمان استانبول", en: "Turkey Withdraws from Istanbul Convention" },
    description: { fa: "ترکیه از پیمان بین‌المللی مبارزه با خشونت علیه زنان خارج شد", en: "Turkey withdraws from international convention on combating violence against women" },
    details: {
      fa: "در ژوئیه ۲۰۲۱ ترکیه رسماً از پیمان استانبول (کنوانسیون شورای اروپا برای مبارزه با خشونت علیه زنان) خارج شد. اردوغان با فرمان ریاست‌جمهوری این خروج را اعلام کرد. جنبش‌های زنان و جامعه بین‌المللی این تصمیم را به شدت محکوم کردند. ترکیه اولین کشور امضاکننده این پیمان بود.",
      en: "In July 2021, Turkey officially withdrew from the Istanbul Convention (Council of Europe Convention on preventing violence against women). Erdoğan announced the withdrawal by presidential decree. Women's movements and the international community strongly condemned the decision. Turkey had been the first signatory of the convention.",
    },
  },
  2022: {
    title: { fa: "بحران تورم اقتصادی ترکیه", en: "Turkey's Inflation Crisis" },
    description: { fa: "تورم ترکیه به بالای ۸۰ درصد رسید و لیر ترکیه سقوط کرد", en: "Turkish inflation exceeds 80%, Turkish lira collapses" },
    details: {
      fa: "در ۲۰۲۲ تورم ترکیه به بیش از ۸۵ درصد رسید، بالاترین میزان در ۲۴ سال اخیر. لیر ترکیه بیش از ۴۰ درصد ارزش خود را از دست داد. اردوغان با وجود فشارها بر کاهش نرخ بهره اصرار داشت و رئیس بانک مرکزی را چندین بار تغییر داد. قدرت خرید مردم به شدت کاهش یافت.",
      en: "In 2022, Turkey's inflation exceeded 85%, the highest in 24 years. The Turkish lira lost over 40% of its value. Despite pressures, Erdoğan insisted on lowering interest rates and replaced the central bank governor multiple times. People's purchasing power severely declined.",
    },
  },
  2023: {
    title: { fa: "زلزله ویرانگر ترکیه و سوریه و انتخابات ریاست‌جمهوری", en: "Devastating Turkey-Syria Earthquake & Presidential Election" },
    description: { fa: "زلزله ۷.۸ ریشتری بیش از ۵۰ هزار نفر را کشت و اردوغان دوباره رئیس‌جمهور شد", en: "7.8 magnitude earthquake kills over 50,000; Erdoğan re-elected president" },
    details: {
      fa: "در ۶ فوریه ۲۰۲۳ دو زلزله ویرانگر ۷.۸ و ۷.۵ ریشتری جنوب‌شرق ترکیه و شمال سوریه را لرزاند. بیش از ۵۰ هزار نفر در ترکیه کشته شدند و میلیون‌ها نفر بی‌خانمان گردیدند. با این حال اردوغان در مه ۲۰۲۳ در دور دوم انتخابات ریاست‌جمهوری پیروز شد و برای سومین دهه به حکومت ادامه داد.",
      en: "On February 6, 2023, two devastating earthquakes of 7.8 and 7.5 magnitude struck southeastern Turkey and northern Syria. Over 50,000 people died in Turkey and millions were left homeless. Nevertheless, Erdoğan won the presidential runoff in May 2023 and continued governing into his third decade in power.",
    },
  },
  2024: {
    title: { fa: "پیروزی مخالفان در انتخابات شهرداری‌ها", en: "Opposition Wins Municipal Elections" },
    description: { fa: "حزب جمهوری‌خواه خلق در انتخابات شهرداری‌ها از جمله استانبول و آنکارا پیروز شد", en: "CHP wins municipal elections including Istanbul and Ankara" },
    details: {
      fa: "در مارس ۲۰۲۴ حزب جمهوری‌خواه خلق (ج.ه.پ) در انتخابات شهرداری‌های ترکیه پیروزی گسترده‌ای به دست آورد. اکرم ایمام‌اوغلو دوباره شهردار استانبول شد و حزب مخالف در اکثر شهرهای بزرگ پیروز گردید. این انتخابات بزرگ‌ترین شکست انتخاباتی اردوغان در دو دهه حکومتش بود.",
      en: "In March 2024, the Republican People's Party (CHP) won a sweeping victory in Turkey's municipal elections. Ekrem İmamoğlu was re-elected mayor of Istanbul and the opposition won most major cities. This was Erdoğan's biggest electoral defeat in two decades of rule.",
    },
  },
  2025: {
    title: { fa: "بازداشت اکرم ایمام‌اوغلو شهردار استانبول", en: "Arrest of Istanbul Mayor Ekrem İmamoğlu" },
    description: { fa: "شهردار استانبول و رهبر اصلی مخالفان اردوغان بازداشت شد", en: "Istanbul mayor and leading opposition figure arrested" },
    details: {
      fa: "در مارس ۲۰۲۵ اکرم ایمام‌اوغلو شهردار استانبول و چهره اصلی مخالفان اردوغان به اتهامات فساد و ارتباط با سازمان‌های تروریستی بازداشت شد. این بازداشت اعتراضات گسترده‌ای را در ترکیه و واکنش‌های بین‌المللی شدیدی برانگیخت. منتقدان آن را تلاش اردوغان برای حذف رقیب اصلی‌اش دانستند.",
      en: "In March 2025, Istanbul Mayor Ekrem İmamoğlu, the leading opposition figure against Erdoğan, was arrested on charges of corruption and links to terrorist organizations. The arrest triggered widespread protests in Turkey and strong international reactions. Critics called it Erdoğan's attempt to eliminate his main rival.",
    },
  },
};

let insertCount = 0;

for (const [year, event] of Object.entries(turkeyEvents)) {
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
    const worldBlock = `\n    world: [\n      {\n        country: "turkey",\n        title: { fa: "${event.title.fa}", en: "${event.title.en}" },\n        description: { fa: "${event.description.fa}", en: "${event.description.en}" },\n        details: {\n          fa: "${event.details.fa}",\n          en: "${event.details.en}",\n        },\n      },\n    ],`;
    content = content.substring(0, insertPos) + worldBlock + content.substring(insertPos);
    insertCount++;
    console.log(`Inserted Turkey event for year ${year} (new world array)`);
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
        country: "turkey",
        title: { fa: "${event.title.fa}", en: "${event.title.en}" },
        description: { fa: "${event.description.fa}", en: "${event.description.en}" },
        details: {
          fa: "${event.details.fa}",
          en: "${event.details.en}",
        },
      },`;

  content = content.substring(0, insertPos) + eventStr + content.substring(insertPos);
  insertCount++;
  console.log(`Inserted Turkey event for year ${year}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone! Inserted ${insertCount} Turkey events.`);
