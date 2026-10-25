(function () {
  'use strict';

  const translations = {
    ar: {
      header_brand_name: "ڤيرونا",
      brand_name: "عيادة ڤيرونا",
      brand_tagline: "لطب وتجميل وزراعة الأسنان",
      nav_home: "الرئيسية",
      nav_tech: "التقنيات المتطورة",
      nav_reviews: "التقييمات",
      nav_about: "من نحن والكادر",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "اتصل بنا والحجز",
      hero_eyebrow: "عيادة ڤيرونا التخصصية • كركوك",
      hero_title_main: "عيادة ڤيرونا لطب وتجميل وزراعة الأسنان",
      hero_lead: "وجهتكم الأولى لطب الأسنان الرقمي الحديث في كركوك. تجربة علاجية استثنائية وبدون ألم مع جهاز البنج الإلكتروني STA وتقنية تنظيف الأسنان السويسرية المتطورة GBT، بإشراف نخبة من 6 أطباء استشاريين ضمن نظام حجوزات مسبقة لراحتكم التامة وبدون انتظار.",
      hero_critical_cta: "حالة حرجة",
      hero_book_cta: "حجز موعد استشارة مسبق",
      stat_google_rate: "تقييم خرائط جوجل",
      stat_reviews_count: "مراجعة معتمدة",
      stat_consultants: "أطباء استشاريين",
      stat_painless: "بدون ألم (STA & GBT)",
      tech_tag: "ريادة التكنولوجيا الطبية",
      tech_title: "تقنيات استثنائية لراحة لا تُضاهى وبدون ألم",
      tech_desc: "تعتمد عيادة ڤيرونا أرقى المعدات الطبية العالمية المعتمدة لتقديم تجربة علاجية تحول زيارة طبيب الأسنان إلى راحة وأمان كامل.",
      tech_sta_tag: "تخدير محوسب بدون ألم",
      tech_sta_name: "جهاز البنج الإلكتروني الذكي STA",
      tech_sta_quote: '"ما يحتاج بنج عام حليناها مع جهاز البنج الإلكتروني"',
      tech_sta_desc: "نظام البنج المحوسب المتطور الحاصل على براءة اختراع Dynamic Pressure Sensing Technology من Milestone Scientific. يتحكم الجهاز بدقة بالغة في ضغط وتدفق مادة التخدير قطرة بقطرة وبسرعة تسبق الإحساس العصبي، مما يوفر تخديراً موضعياً تاماً للسن المطلوب فقط دون تخدير الشفاه أو اللسان أو الوجه، ويخلصك تماماً من رهبة الإبر التقليدية.",
      tech_sta_b1: "تخدير فوري ومخصص للسن المستهدف فقط",
      tech_sta_b2: "لا يسبب خدر الوجه أو الشفاه بعد الانتهاء من الجلسة",
      tech_sta_b3: "مثالي للأطفال والبالغين الذين يعانون من فوبيا الإبر",
      btn_book_device_session: "احجز جلسة علاجية مريحة ←",
      tech_gbt_tag: "البروتوكول السويسري المعتمد عالمياً",
      tech_gbt_name: "تقنية GBT : تنظيف وعلاج اللثة المتطور",
      tech_gbt_quote: '"الجهاز المعتمد لتطبيق هذا البروتوكول عالمياً هو AIRFLOW® Prophylaxis Master من شركة EMS Dental السويسرية، ويُعد أحدث نقلة نوعية في تنظيف الأسنان وعلاج أمراض اللثة."',
      tech_gbt_desc: "بروتوكول Guided Biofilm Therapy (GBT) السويسري يمثل المعيار الذهبي الجديد في طب الأسنان الوقائي. يزيل البلاك، التصبغات الصعبة، والطبقة الحيوية الضارة بدقة فائقة وبدرجة حرارة ماء دافئة لطيفة تحمي طبقة المينا واللثة وعدسات الأسنان والزرعات دون أي احتكاك مؤلم أو خدوش.",
      tech_gbt_b1: "تنظيف فائق النعومة بدون حساسية للأسنان أو نزف للثة",
      tech_gbt_b2: "حماية ممتازة لابتسامة هوليوود وزراعة الأسنان والتقويم",
      tech_gbt_b3: "تطبيق معايير الدقة السويسرية الأكثر أماناً عالمياً",
      btn_book_gbt_session: "احجز جلسة تنظيف GBT ←",
      reviews_eyebrow: "WHAT PATIENTS SAY",
      reviews_headline: "Real reviews from our community.",
      rev_name_1: "أحمد الكركوكي",
      rev_text_1: '"تجربة مريحة جداً، سويت زراعة أسنان عند د. أسامة الحسين. استخدام جهاز البنج الإلكتروني STA ما حسيت بأي وخزة أو ألم نهائياً! نظافة العيادة والتعقيم 10/10."',
      rev_name_2: "سارة خليل",
      rev_text_2: '"جربت جلسة تنظيف الأسنان بجهاز AIRFLOW GBT السويسري الجديد، فرق هائل عن التنظيف القديم! بدون أي حساسية بالأسنان وماء دافئ مريح جداً. أفضل عيادة بكركوك."',
      rev_name_3: "ڕێبین قادر",
      rev_text_3: '"نظام المواعيد المسبقة ممتاز جداً وتدخل بوقتك بدون أي انتظار. تعامل الكادر الطبي والاستقبال راقي ومحترف لأبعد الحدود. أنصح بهم بشدة."',
      rev_name_4: "د. هديل البياتي",
      rev_text_4: '"سويت تيجان زركون وعدسات تجميلية، النتيجة طبيعية للغاية وتطابق لون الأسنان الحقيقي بدون مبالغة أو بروز. إتقان ودقة عالية جداً."',
      rev_name_5: "شوان محمد",
      rev_text_5: '"علاج عصب لضرس معقد عند د. محمد بجلسة واحدة وبدون أي إحساس بالألم. أجهزة دقيقة وأشعة حديثة وتوضيح كامل للحالة قبل البدء."',
      rev_name_6: "مريم الجبوري",
      rev_text_6: '"أخذت بنتي لعند دكتورة آية لأسنان الأطفال، أسلوبها هادئ ومحبب جداً وخلا بنتي تتعالج بدون خوف أو بكاء. شكراً عيادة ڤيرونا على كادركم المميز."',
      rev_name_7: "عمر طارق",
      rev_text_7: '"قلع جراحي لضرس عقل مدفون عند د. زيد، ما حسيت بشيء واستغرقت العملية وقت قياسي بدون أي ورم بعد الجلسة. كادر استشاري يستحق الثقة."',
      rev_name_8: "ژیان عەلی",
      rev_text_8: '"ڕێکخستنەوەی دانەکانم بە تەلی شەفاف لای دکتۆرە نور، لە ٤ مانگدا گۆڕانکاری گەورەم بینی. مامەڵە و خزمەتگوزاری سەردەمیانە و نموونەییە."',
      about_eyebrow: "من نحن والكادر الطبي",
      about_headline: "صرح طبي تخصصي يجمع أرقى الخبرات وأحدث التقنيات",
      about_desc: "تأسست عيادة ڤيرونا في كركوك لتكون الوجهة الرائدة لطب الأسنان التخصصي الرقمي. نعتمد معايير تعقيم عالمية، ونظام مواعيد دقيق بدون انتظار، وكادراً يضم 6 استشاريين متميزين.",
      cv_dropdown_label: "اختر الطبيب لعرض السيرة المهنية والتخصص الدقيق:",
      cv_qualifications_label: "المؤهلات والخبرات:",
      cv_specialties_label: "مجالات التخصص الدقيقة:",
      btn_book_with_doc: "حجز موعد مع الطبيب ←",
      doc_opt_any: "أي طبيب متاح حسب الحالة (استشارة عامة)",
      doc_opt_osama: "د. أسامة الحسين - زراعة وتجميل الأسنان",
      doc_opt_noor: "د. نور نصرالله - تقويم وتجميل الأسنان",
      doc_opt_zaid: "د. زيد - جراحة الفم والفكين والزراعة",
      doc_opt_mohammed: "د. محمد - علاج العصب والترميم المجهري",
      doc_opt_anas: "د. أنس - ابتسامة هوليوود والعدسات",
      doc_opt_aya: "د. آية أياد - طب أسنان الأطفال",
      faq_eyebrow: "COMMON QUESTIONS",
      faq_headline: "Frequently Asked Questions",
      faq_q1: "ما هي أوقات العمل الرسمية في عيادة ڤيرونا؟",
      faq_a1: "نستقبل مراجعينا من السبت إلى الخميس من الساعة 1:00 ظهراً وحتى 9:00 مساءً بنظام المواعيد المسبقة. يوم الجمعة عطلة رسمية وتُستقبل الحالات الطارئة بالحجز المسبق فقط.",
      faq_q2: "كيف يضمن جهاز STA جلسة علاج وتخدير بدون ألم؟",
      faq_a2: "يتحكم جهاز STA الأمريكي المحوسب بتدفق سائل التخدير قطرة بقطرة وبسرعة تسبق الإحساس العصبي، مما يوفر تخديراً موضعياً تاماً للسن المطلوب فقط بدون إبر مؤلمة وبدون تنميل للشفاه أو الوجه.",
      faq_q3: "ما هو بروتوكول تنظيف الأسنان السويسري GBT وما مميزاته؟",
      faq_a3: "هو المعيار السويسري الأحدث عالمياً لتنظيف الأسنان وإزالة البلاك والجير والتصبغات باستخدام جهاز AIRFLOW® Prophylaxis Master برذاذ دافئ ولطيف يحمي المينا واللثة وعدسات الأسنان بدون أي كشط أو حساسية.",
      faq_q4: "هل يجب حجز موعد مسبق قبل الحضور للعيادة؟",
      faq_a4: "نعم، تعمل عيادة ڤيرونا بنظام المواعيد المسبقة الدقيقة لضمان عدم وجود أي وقت ضائع في صالة الانتظار وتخصيص كامل وقت الطبيب لحالتك.",
      faq_q5: "ما هي التخصصات الطبية المتوفرة في عيادة ڤيرونا؟",
      faq_a5: "يضم كادرنا 6 أطباء استشاريين يغطون: زراعة الأسنان الرقمية، ابتسامة هوليوود والتركيبات، تقويم الأسنان والفكين، جراحة الفم والفكين، علاج العصب المجهري، وطب أسنان الأطفال.",
      end_cta_title: "حجز موعد استشارة مسبق",
      end_cta_desc: "نعمل بنظام الحجوزات المسبقة لراحتكم وتخصيص الوقت الكافي لكل مراجع بدون أي انتظار.",
      btn_end_book: "احجز موعدك الآن",
      contact_page_tag: "التواصل والمواعيد المسبقة",
      contact_page_title: "حجز استشارة خاصة وموقع عيادة ڤيرونا",
      contact_page_sub: "نعمل بنظام المواعيد المسبقة لتخصيص الوقت الكامل لكل مراجع وضمان عدم وجود أي وقت ضائع في صالة الانتظار.",
      wizard_step_badge: "الخطوة 1 من 3",
      step1_title: "هل زرت عيادة ڤيرونا من قبل؟",
      step1_sub: "اختر صفتك للمساعدة في تحديد أسرع موعد مناسب لحالتك",
      opt_new_patient: "مريض جديد (أول زيارة للعيادة)",
      opt_new_patient_desc: "سنقوم بإنشاء ملف رقمي وتحديد أولويات الرعاية",
      opt_returning_patient: "مريض سابق (لدي ملف بالعيادة)",
      opt_returning_patient_desc: "متابعة خطة علاجك أو فحصك الدوري السريع",
      care_emergency: "حالة طارئة وألم مستعجل",
      care_emergency_desc: "أولوية عاجلة اليوم، سنقترح أقرب وقت فوري",
      care_child: "طب أسنان الأطفال",
      care_child_desc: "جلسة لطيفة ومخصصة مع د. آية أياد بدون خوف",
      care_recare: "فحص دوري وتنظيف روتيني (GBT)",
      care_recare_desc: "بروتوكول التنظيف السويسري الناعم لحماية الأسنان",
      care_general: "استشارة عامة وتجميل وزراعة",
      care_general_desc: "زراعة فورية، ابتسامة هوليوود، أو تقويم الأسنان",
      suggested_slot_label: "الموعد المقترح الأسرع لحالتك:",
      btn_accept_suggested: "نعم، تأكيد هذا الموعد",
      btn_choose_custom: "اختيار تاريخ ووقت آخر",
      custom_picker_heading: "اختر التاريخ والفترة المناسبة (أوقات العمل 1:00 ظهراً - 9:00 مساءً)",
      custom_date_label: "اختر التاريخ المطلوب (السبت - الخميس)",
      custom_time_label: "اختر الوقت المفضل",
      btn_continue_to_details: "متابعة لتأكيد بيانات المريض ←",
      btn_back: "← الرجوع للخلف",
      summary_badge: "ملخص الحجز:",
      form_name_label: "اسم المراجع الكامل *",
      form_phone_label: "رقم الهاتف (الواتساب) *",
      form_doctor_label: "الطبيب المعالج المفضل",
      form_notes_label: "ملاحظات إضافية أو وصف الحالة (اختياري)",
      btn_confirm_whatsapp: "تأكيد وإرسال الحجز عبر الواتساب فوراً",
      form_disclaimer: "سيتم توجيهكم مباشرة لمحادثة الواتساب الرسمية مع منسق المواعيد بالعيادة. بياناتكم مشفرة ومحمية بالكامل.",
      location_tag: "موقع العيادة وساعات العمل",
      location_title: "تفضلوا بزيارتنا في عيادة ڤيرونا بكركوك",
      location_desc: "موقع استراتيجي متميز يسهل الوصول إليه، مع مواقف سيارات مريحة وتجهيزات استقبال متكاملة.",
      location_clinic_title: "عيادة ڤيرونا لطب وتجميل وزراعة الاسنان",
      location_clinic_city: "كركوك، العراق",
      loc_address_label: "العنوان:",
      loc_address_val: "كركوك، طريق بغداد / المجمع الطبي التخصصي، بالقرب من مركز المدينة",
      loc_phone_label: "الهاتف والحجوزات:",
      loc_hours_label: "أوقات العمل (نظام الحجوزات المسبقة):",
      hours_days: "السبت - الخميس:",
      hours_friday: "الجمعة:",
      hours_fri_val: "عطلة رسمية (الحالات الطارئة بالحجز المسبق)",
      loc_parking_label: "مواقف السيارات:",
      loc_parking_val: "تتوفر مواقف سيارات مجانية ومريحة لمرضى العيادة ومرافقيهم.",
      btn_open_google_maps: "فتح الاتجاهات المباشرة في خرائط جوجل",
      footer_desc: "العيادة التخصصية الأولى في كركوك لطب وتجميل وزراعة الأسنان. نعمل بنظام الحجوزات المسبقة لتجربة علاجية مريحة وبدون ألم.",
      footer_nav_title: "أقسام الموقع",
      footer_contact_title: "الاتصال والحجز",
      footer_privacy: "سياسة الخصوصية وسرية بيانات المرضى",
      privacy_title: "سياسة الخصوصية وسرية بيانات المرضى",
      privacy_intro: "نلتزم في عيادة ڤيرونا التزاماً صارماً بأعلى معايير الأمانة الطبية وسرية بيانات مراجعينا الكرام.",
      privacy_point_1: "المعلومات الطبية والشخصية (الاسم، رقم الهاتف، التشخيص، صور الأشعة) تُعامل بسرية مهنية تامة ومحفوظة ضمن السجلات الطبية للعيادة فقط.",
      privacy_point_2: "يتم استخدام رقم الهاتف للتواصل عبر الواتساب لتنسيق مواعيد الجلسات وإرسال التذكيرات والاستشارات الطبية المتعلقة بعلاجك فقط.",
      privacy_point_3: "نضمن عدم بيع أو تأجير أو مشاركة بيانات مراجعينا مع أي طرف ثالث أو شركات إعلانية تحت أي ظرف.",
      privacy_point_4: "حقوق المراجع: يحق لك في أي وقت تعديل بياناتك أو إلغاء مواعيدك أو طلب حذف بياناتك من خلال التواصل المباشر مع إدارة العيادة.",
      privacy_close_btn: "إغلاق نافذة الخصوصية",
      wa_quick_label: "حجز سريع عبر واتساب"
    },

    en: {
      header_brand_name: "Verona",
      brand_name: "Verona Clinic",
      brand_tagline: "Dental Care, Aesthetics & Implantology",
      nav_home: "Home",
      nav_tech: "Advanced Tech",
      nav_reviews: "Reviews",
      nav_about: "About & Staff",
      nav_faq: "FAQ",
      nav_contact: "Contact & Booking",
      hero_eyebrow: "Verona Dental Clinic • Kirkuk",
      hero_title_main: "Verona Dental Care, Aesthetics & Implants",
      hero_lead: "Your premier destination for modern digital dentistry in Kirkuk. Experience completely painless care with the STA computerized anesthesia and Swiss GBT hygiene technology, backed by 6 senior dental consultants and a strictly timed pre-booking system.",
      hero_critical_cta: "Critical Case",
      hero_book_cta: "Book Consultation",
      stat_google_rate: "Google Rating",
      stat_reviews_count: "Verified Reviews",
      stat_consultants: "Specialist Doctors",
      stat_painless: "Pain-Free Care",
      tech_tag: "Clinical Innovation",
      tech_title: "State-of-the-Art Technology for Pain-Free Comfort",
      tech_desc: "Verona Dental Clinic integrates the world's finest medical equipment to turn your dental visit into a relaxing, anxiety-free journey.",
      tech_sta_tag: "Painless Computerized Anesthesia",
      tech_sta_name: "Milestone STA Single Tooth Anesthesia System",
      tech_sta_quote: '"No general anesthesia needed, pain eliminated with the STA electronic system."',
      tech_sta_desc: "Featuring patented Dynamic Pressure Sensing (DPS™) technology from Milestone Scientific (USA). The computer precisely meters anesthetic drop-by-drop below patient pain threshold, numbing strictly the single intended tooth without collateral numbing of the lips, tongue, or face.",
      tech_sta_b1: "Immediate, isolated numbness strictly for the target tooth",
      tech_sta_b2: "No awkward lip or facial droop after your appointment",
      tech_sta_b3: "Ideal for patients and children with dental needle anxiety",
      btn_book_device_session: "Book Painless Session →",
      tech_gbt_tag: "Certified Swiss Hygiene Protocol",
      tech_gbt_name: "Guided Biofilm Therapy (GBT) by EMS Dental",
      tech_gbt_quote: '"The internationally certified system for this protocol is the AIRFLOW® Prophylaxis Master from Swiss EMS Dental, representing the latest breakthrough in dental cleaning and periodontal therapy."',
      tech_gbt_desc: "The Swiss GBT protocol is the global gold standard in preventive dentistry. It gently lifts away stubborn biofilm, stains, and calculus using warm water and ultra-fine erythritol powder without scratching enamel, veneers, or implants.",
      tech_gbt_b1: "Ultra-gentle cleaning with zero enamel scraping or tooth sensitivity",
      tech_gbt_b2: "Safeguards Hollywood veneers, restorations, and dental implants",
      tech_gbt_b3: "Authentic Swiss precision engineering for maximum hygiene",
      btn_book_gbt_session: "Book GBT Session →",
      reviews_eyebrow: "WHAT PATIENTS SAY",
      reviews_headline: "Real reviews from our community.",
      rev_name_1: "Ahmed Al-Kirkuki",
      rev_text_1: '"Very comfortable experience, had dental implants with Dr. Osama. Using the STA computer anesthesia, I felt zero pain or pricks! Cleanliness and sterilization 10/10."',
      rev_name_2: "Sarah Khalil",
      rev_text_2: '"Tried the new Swiss AIRFLOW GBT cleaning session, huge difference from old cleaning! No tooth sensitivity and pleasantly warm water. Best clinic in Kirkuk."',
      rev_name_3: "Rebin Qadir",
      rev_text_3: '"Strict appointment scheduling, you enter right on time with zero delay. Very professional reception and doctors. Highly recommended."',
      rev_name_4: "Dr. Hadeel Al-Bayati",
      rev_text_4: '"Had zirconia crowns and veneers done, remarkably natural shade matching real tooth translucency. Excellent precision and craft."',
      rev_name_5: "Shwan Mohammed",
      rev_text_5: '"Single-visit complex root canal with Dr. Mohammed with zero pain. Advanced digital radiography and thorough explanation before starting."',
      rev_name_6: "Maryam Al-Jubouri",
      rev_text_6: '"Brought my daughter to Dr. Aya for pediatric care. Her calming approach made my child receive treatment without any tears. Thank you Verona."',
      rev_name_7: "Omar Tariq",
      rev_text_7: '"Surgical wisdom tooth extraction with Dr. Zaid, felt nothing and the procedure took minimal time with no postoperative swelling. Top tier consultants."',
      rev_name_8: "Zhiyan Ali",
      rev_text_8: '"Clear aligner treatment with Dr. Noor, saw tremendous alignment in 4 months. Exceptional modern clinical care."',
      about_eyebrow: "ABOUT VERONA & MEDICAL TEAM",
      about_headline: "A Specialized Center Uniting Elite Expertise and Modern Tech",
      about_desc: "Established in Kirkuk as the premier hub for modern digital dentistry. We adhere to rigorous global sterilization standards, strict pre-scheduled timings, and a team of 6 distinguished consultants.",
      cv_dropdown_label: "Select Doctor to View Credentials & Specialty:",
      cv_qualifications_label: "Credentials & Qualifications:",
      cv_specialties_label: "Clinical Focus Areas:",
      btn_book_with_doc: "Schedule Visit with Doctor →",
      doc_opt_any: "Any available doctor (General consultation)",
      doc_opt_osama: "Dr. Osama Al-Hussein - Implants & Aesthetics",
      doc_opt_noor: "Dr. Noor Nasrallah - Orthodontics & Aesthetics",
      doc_opt_zaid: "Dr. Zaid - Oral & Maxillofacial Surgery",
      doc_opt_mohammed: "Dr. Mohammed - Endodontics & Micro-Restoration",
      doc_opt_anas: "Dr. Anas - Hollywood Smile & Veneers",
      doc_opt_aya: "Dr. Aya Ayad - Pediatric Dentistry",
      faq_eyebrow: "COMMON QUESTIONS",
      faq_headline: "Frequently Asked Questions",
      faq_q1: "What are the clinic's operating hours?",
      faq_a1: "We welcome patients Saturday through Thursday from 1:00 PM to 9:00 PM by prior appointment. Friday is closed, with emergency cases accepted strictly by advance arrangement.",
      faq_q2: "How does the STA system ensure painless treatment?",
      faq_a2: "The Milestone STA computer meters anesthetic drop-by-drop ahead of the needle path, numbing strictly the single tooth without facial, lip, or tongue numbness.",
      faq_q3: "What is the Swiss GBT hygiene protocol and its advantages?",
      faq_a3: "Guided Biofilm Therapy is the Swiss gold standard by EMS Dental, using warm water and micro-powder to remove biofilm and stains without scratching enamel or hurting gums.",
      faq_q4: "Is prior booking required before visiting?",
      faq_a4: "Yes, Verona Clinic operates on a strictly timed appointment schedule to ensure zero waiting time in the reception lounge and dedicated doctor focus.",
      faq_q5: "What specialties are available at Verona Clinic?",
      faq_a5: "Our team consists of 6 board-certified specialists covering: digital implants, Hollywood veneers, orthodontics, oral maxillofacial surgery, micro-endodontics, and pediatric dentistry.",
      end_cta_title: "Book Your Consultation",
      end_cta_desc: "Strictly scheduled appointments to respect your time with guaranteed zero waiting.",
      btn_end_book: "Book Your Visit Now",
      contact_page_tag: "Contact & Appointments",
      contact_page_title: "Appointment Booking & Clinic Location",
      contact_page_sub: "Prior appointment system designed for your utmost comfort with zero waiting time.",
      wizard_step_badge: "Step 1 of 3",
      step1_title: "Have you visited Verona Clinic before?",
      step1_sub: "Select your patient status to determine the fastest available slot",
      opt_new_patient: "New Patient (First Visit)",
      opt_new_patient_desc: "We will establish your digital file and clinical care priority",
      opt_returning_patient: "Returning Patient (Have a File)",
      opt_returning_patient_desc: "Follow-up on your treatment plan or routine hygiene",
      care_emergency: "Emergency / Acute Toothache",
      care_emergency_desc: "Immediate priority today, earliest prompt slot suggested",
      care_child: "Pediatric Dental Care",
      care_child_desc: "Gentle child appointment with Dr. Aya without fear",
      care_recare: "Routine Checkup & Hygiene (GBT)",
      care_recare_desc: "Gentle Swiss prophylaxis for preventive oral health",
      care_general: "Consultation & Aesthetics",
      care_general_desc: "Digital implants, Hollywood smile, or orthodontics",
      suggested_slot_label: "Recommended Earliest Available Slot:",
      btn_accept_suggested: "Yes, Confirm This Slot",
      btn_choose_custom: "Choose Another Date & Time",
      custom_picker_heading: "Select Preferred Date & Timeslot (Working Hours 1:00 PM - 9:00 PM)",
      custom_date_label: "Select Date (Saturday - Thursday)",
      custom_time_label: "Select Preferred Time",
      btn_continue_to_details: "Continue to Patient Details →",
      btn_back: "← Go Back",
      summary_badge: "Booking Summary:",
      form_name_label: "Full Patient Name *",
      form_phone_label: "Phone Number (WhatsApp) *",
      form_doctor_label: "Preferred Doctor",
      form_notes_label: "Additional Notes or Symptoms (Optional)",
      btn_confirm_whatsapp: "Confirm & Send via WhatsApp Now",
      form_disclaimer: "You will be connected directly with our official clinic appointment coordinator on WhatsApp.",
      location_tag: "Clinic Location & Hours",
      location_title: "Visit Verona Dental Clinic in Kirkuk",
      location_desc: "Strategic accessible location with ample parking and comfortable facilities.",
      location_clinic_title: "Verona Dental Care, Aesthetics & Implants",
      location_clinic_city: "Kirkuk, Iraq",
      loc_address_label: "Address:",
      loc_address_val: "Kirkuk, Baghdad Road / Specialized Medical Complex, near city center",
      loc_phone_label: "Phone & Appointments:",
      loc_hours_label: "Working Hours (Pre-Booking System):",
      hours_days: "Saturday - Thursday:",
      hours_friday: "Friday:",
      hours_fri_val: "Official Holiday (Emergencies by appointment)",
      loc_parking_label: "Parking:",
      loc_parking_val: "Free and convenient parking available for patients and companions.",
      btn_open_google_maps: "Open Direct Directions in Google Maps",
      footer_desc: "Kirkuk's leading specialized clinic for aesthetic dentistry, implants, and orthodontics. Prior appointment system for a comfortable, pain-free patient experience.",
      footer_nav_title: "Quick Navigation",
      footer_contact_title: "Contact & Booking",
      footer_privacy: "Privacy Policy & Patient Confidentiality",
      privacy_title: "Privacy Policy & Patient Confidentiality",
      privacy_intro: "At Verona Dental Clinic, we strictly adhere to international medical ethics and utmost confidentiality for all our patients.",
      privacy_point_1: "Medical & personal information (full name, phone, diagnosis, X-rays) are kept strictly confidential within the clinic's secure medical records.",
      privacy_point_2: "Your phone number is used exclusively for official WhatsApp appointment coordination, schedule reminders, and direct medical follow-up.",
      privacy_point_3: "We guarantee never selling, renting, or sharing your data with any third parties or marketing networks under any circumstances.",
      privacy_point_4: "Patient Rights: You retain the right to modify, reschedule, cancel, or request data removal at any time by contacting our front desk.",
      privacy_close_btn: "Close Privacy Notice",
      wa_quick_label: "Quick WhatsApp Booking"
    },

    ku: {
      header_brand_name: "ڤیرۆنا",
      brand_name: "کلینیکی ڤیرۆنا",
      brand_tagline: "بۆ پزیشکی و جوانکاری و چاندنی ددان",
      nav_home: "سەرەکی",
      nav_tech: "تەکنەلۆژیای پێشکەوتوو",
      nav_reviews: "هەڵسەنگاندنەکان",
      nav_about: "دەربارە و کادیر",
      nav_faq: "پرسیارە باوەکان",
      nav_contact: "پەیوەندی و نۆرەگرتن",
      hero_eyebrow: "کلینیکی پسپۆڕی ڤیرۆنا • کەرکووک",
      hero_title_main: "کلینیکی ڤیرۆنا بۆ جوانکاری و چاندنی ددان",
      hero_lead: "یەکەمین مەکۆی پزیشکی ددانی پێشکەوتوو لە کەرکووک. ئەزموونێکی بێ ئازار بە ئامێری بەنجی ئەلیکترۆنی STA و سیستەمی پاککردنەوەی سویسری GBT، بە سەرپەرشتی 6 پزیشکی پسپۆڕ بە سیستەمی نۆرەی پێشوەختە بێ چاوەڕوانی.",
      hero_critical_cta: "حاڵەتی بەپەلە",
      hero_book_cta: "وەرگرتنی نۆرەی پێشوەختە",
      stat_google_rate: "هەڵسەنگاندنی گووگڵ",
      stat_reviews_count: "پێداچوونەوەی ڕاستەقینە",
      stat_consultants: "پزیشکی پسپۆڕ",
      stat_painless: "بێ ئازار (STA و GBT)",
      tech_tag: "پێشەنگی تەکنەلۆژیای پزیشکی",
      tech_title: "تەکنەلۆژیای بێوێنە بۆ ئارامی و بەبێ ئازار",
      tech_desc: "کلینیکی ڤیرۆنا پێشکەوتووترین ئامێرە جیهانییەکان بەکاردەهێنێت تا سەردانی پزیشکی ددان ببێتە ئەزموونێکی ئارامبەخش.",
      tech_sta_tag: "تەزاندنی کۆمپیوتەری بێ ئازار",
      tech_sta_name: "ئامێری بەنجی ئەلیکترۆنی STA",
      tech_sta_quote: '"پێویست بە بەنجی گشتی ناکات، بە ئامێری بەنجی ئەلیکترۆنی چارەسەرمان کرد"',
      tech_sta_desc: "سیستەمی پێشکەوتووی بەنجی کۆمپیوتەری لە کۆمپانیای Milestone Scientificی ئەمریکی. کۆنترۆڵی پەستان و ڕژانی دەرمانی بەنج دەکات دڵۆپ بە دڵۆپ، تەنها ئەو ددانەی پێویستە دەسڕێت بێ ئەوەی لێو و زمان و دەموچاو سڕ ببن.",
      tech_sta_b1: "تەزاندنی خێرا و تایبەت بە یەک ددان",
      tech_sta_b2: "دەموچاو و لێو سڕ نابێت پاش تەواوبوونی دانیشتنەکە",
      tech_sta_b3: "گونجاوە بۆ منداڵ و گەورە کە لە دەرزی دەترسن",
      btn_book_device_session: "وەرگرتنی نۆرەی بێ ئازار ←",
      tech_gbt_tag: "پرۆتۆکۆلی پەسەندکراوی سویسری",
      tech_gbt_name: "تەکنەلۆژیای GBT : پاککردنەوەی پێشکەوتوو",
      tech_gbt_quote: '"ئامێری پەسەندکراو بۆ ئەم پرۆتۆکۆلە بریتییە لە AIRFLOW® Prophylaxis Master لە کۆمپانیای EMS Dentalی سویسری."',
      tech_gbt_desc: "پرۆتۆکۆلی Guided Biofilm Therapy (GBT) ستانداردی زێڕینی سویسرییە لە پاککردنەوەی ددان. تەواوی زەردیی و بەکتریا لادەبات بە ئاوی شلەتێن بێ بریندارکردنی مینای ددان یان پووک.",
      tech_gbt_b1: "پاککردنەوەی زۆر نەرم بەبێ هەستیاری یان خوێنبەربوونی پووک",
      tech_gbt_b2: "پاراستنی تەواوی زەردەخەنەی هۆلیوود و چاندنی ددان",
      tech_gbt_b3: "تەکنەلۆژیای ئەندازیاری وردی سویسری",
      btn_book_gbt_session: "وەرگرتنی نۆرەی پاککردنەوەی GBT ←",
      reviews_eyebrow: "WHAT PATIENTS SAY",
      reviews_headline: "Real reviews from our community.",
      rev_name_1: "ئەحمەد کەرکووکی",
      rev_text_1: '"ئەزموونێکی زۆر ئارامبەخش، چاندنی ددانم لای د. ئوسامە کرد. بە ئامێری بەنجی ئەلیکترۆنی STA هیچ ئازارێکم هەست پێنەکرد! پاکوخاوێنی کلینیک 10/10."',
      rev_name_2: "سارە خەلیل",
      rev_text_2: '"دانیشتنی پاککردنەوەی ددانم بە ئامێری سویسری GBT کرد، جیاوازییەکی زۆر گەورە بوو بە ئاوی شلەتێن و بێ هەستیاری. باشترین کلینیکی کەرکووک."',
      rev_name_3: "ڕێبین قادر",
      rev_text_3: '"سیستەمی نۆرەی پێشوەختە ناوازەیە و ڕێک لە کاتی خۆتدا دەچیتە ژوورەوە بێ چاوەڕوانی. مامەڵەی تیمی پزیشکی نموونەییە."',
      rev_name_4: "د. هدیل ئەلبەیاتی",
      rev_text_4: '"تاجی زرکۆن و هاوێنەی جوانکاریم کرد، دەرئەنجامەکەی زۆر سروشتی و تەواو هاوشێوەی ددانی ڕاستەقینەیە."',
      rev_name_5: "شوان محەممەد",
      rev_text_5: '"چارەسەری دەماری ددان لە یەک دانیشتندا لای د. محەممەد بەبێ هیچ هەستکردن بە ئازار. ئامێری پێشکەوتوو و ڕوونکردنەوەی تەواو."',
      rev_name_6: "مەریەم ئەلجبوری",
      rev_text_6: '"کچەکەم بردە لای دکتۆرە ئایە بۆ ددانی منداڵان، شێوازی لەسەرخۆی وایکرد کچەکەم بێ ترس چارەسەر وەربگرێت."',
      rev_name_7: "عومەر تاریق",
      rev_text_7: '"کێشانی ددانی ژیری بە نەشتەرگەری لای د. زەید بە کاتێکی کەم و بێ هیچ ئازار یان هەڵئاوسان. کادیرێکی جێگای متمانە."',
      rev_name_8: "ژیان عەلی",
      rev_text_8: '"ڕێکخستنەوەی دانەکانم بە تەلی شەفاف لای دکتۆرە نور، لە ٤ مانگدا گۆڕانکاری گەورەم بینی. خزمەتگوزاری سەردەمیانە."',
      about_eyebrow: "دەربارەی کلینیک و تیمی پزیشکی",
      about_headline: "سەنتەرێکی پسپۆڕی پێشکەوتوو بە کادیرێکی لێهاتوو",
      about_desc: "کلینیکی ڤیرۆنا لە کەرکووک دامەزراوە بۆ پێشکەشکردنی نوێترین چارەسەری دیجیتاڵی ددان بە ستانداردی جیهانی، سیستەمی بێ چاوەڕوانی، و 6 پزیشکی پسپۆڕ.",
      cv_dropdown_label: "پزیشکێک هەڵبژێرە بۆ بینینی سیڤی و بڕوانامەکان:",
      cv_qualifications_label: "بڕوانامە و ئەزموون:",
      cv_specialties_label: "بواری پسپۆڕی ورد:",
      btn_book_with_doc: "وەرگرتنی نۆرە لەگەڵ پزیشک ←",
      doc_opt_any: "هەر پزیشکێکی بەردەست (ڕاوێژی گشتی)",
      doc_opt_osama: "د. ئوسامە ئەلحوسێن - چاندن و جوانکاری ددان",
      doc_opt_noor: "د. نوور نەسرەڵڵا - تەلی ددان و جوانکاری",
      doc_opt_zaid: "د. زەید - نەشتەرگەری دەم و شەویلگە و چاندن",
      doc_opt_mohammed: "د. محەممەد - چارەسەری دەمار و پڕکردنەوەی ورد",
      doc_opt_anas: "د. ئەنەس - زەردەخەنەی هۆلیوود و هاوێنە",
      doc_opt_aya: "د. ئایە ئەیاد - پزیشکی ددانی منداڵان",
      faq_eyebrow: "COMMON QUESTIONS",
      faq_headline: "Frequently Asked Questions",
      faq_q1: "کاتەکانی کارکردنی کلینیک کەییە؟",
      faq_a1: "شەممە تا پێنجشەممە لە کاتژمێر 1:00ی پاشنیوەڕۆ تا 9:00ی شەو بە نۆرەی پێشوەختە مراجعین وەردەگرین. هەینی داخراوە و تەنیا حاڵەتی بەپەلە بە نۆرەی پێشوەختە وەردەگیرێت.",
      faq_q2: "چۆن ئامێری STA چارەسەری بێ ئازار دەستەبەر دەکات؟",
      faq_a2: "ئامێری ئەلیکترۆنی STA بە شێوازی کۆمپیوتەری دڵۆپ بە دڵۆپ دەرمانی بەنج دەڕژێنێت پێش هەستپێکردنی دەمار، تەنها ددانی مەبەست دەسڕێت بێ سڕبوونی لێو و دەموچاو.",
      faq_q3: "پرۆتۆکۆلی پاککردنەوەی سویسری GBT چییە؟",
      faq_a3: "نوێترین ستانداردی سویسرییە لە پاککردنەوەی ددان بە ئامێری AIRFLOW Prophylaxis Master بە ئاوی شلەتێن بێ بریندارکردنی مینا و پووک.",
      faq_q4: "ئایا وەرگرتنی نۆرەی پێشوەختە پێویستە؟",
      faq_a4: "بەڵێ، کلینیکی ڤیرۆنا بە نۆرەی پێشوەختە کار دەکات بۆ ئەوەی هیچ چاوەڕوانی لە هۆڵدا نەبێت و کاتی تەواو بۆ نەخۆش تەرخان بکرێت.",
      faq_q5: "چ پسپۆڕییەکی پزیشکی لە کلینیک بەردەستە؟",
      faq_a5: "تیمی پزیشکیمان لە 6 پسپۆڕ پێکدێت: چاندنی دیجیتاڵی، زەردەخەنەی هۆلیوود، تەلی ددان، نەشتەرگەری شەویلگە، دەماری ددان، و ددانی منداڵان.",
      end_cta_title: "وەرگرتنی نۆرەی پێشوەختە",
      end_cta_desc: "بە سیستەمی نۆرەی پێشوەختە کار دەکەین بۆ ئارامی و کاتی تایبەت بەبێ چاوەڕوانی.",
      btn_end_book: "ئێستا نۆرەکەت تۆمار بکە",
      contact_page_tag: "پەیوەندی و نۆرەگرتن",
      contact_page_title: "وەرگرتنی نۆرە و شوێنی کلینیکی ڤیرۆنا",
      contact_page_sub: "بە سیستەمی نۆرەی پێشوەختە کار دەکەین بۆ دەستەبەرکردنی کاتی تەواو بەبێ چاوەڕوانی.",
      wizard_step_badge: "هەنگاوی 1 لە 3",
      step1_title: "ئایا پێشتر سەردانی کلینیکی ڤیرۆنات کردووە؟",
      step1_sub: "بۆ ئەوەی زووترین کاتی گونجاوت بۆ دیاریبکەین",
      opt_new_patient: "نەخۆشی نوێ (یەکەم سەردان)",
      opt_new_patient_desc: "فایلی دیجیتاڵیت بۆ دروست دەکەین و پێشینەی چارەسەر دیاریدەکەین",
      opt_returning_patient: "نەخۆشی پێشوو (فایلم هەیە)",
      opt_returning_patient_desc: "بەردەوامی بە پلانی چارەسەر یان پشکنینی خولی دەدەین",
      care_emergency: "حاڵەتی بەپەلە و ئازاری کتوپڕ",
      care_emergency_desc: "ئەمڕۆ لە پێشینەیە، زووترین کاتی بەردەست پێشنیار دەکەین",
      care_child: "پزیشکی ددانی منداڵان",
      care_child_desc: "دانیشتنێکی نەرم لەگەڵ د. ئایە بەبێ ترس",
      care_recare: "پشکنینی خولی و پاککردنەوە (GBT)",
      care_recare_desc: "پرۆتۆکۆلی پاککردنەوەی سویسری بۆ پاراستنی ددان",
      care_general: "ڕاوێژی گشتی و جوانکاری و چاندن",
      care_general_desc: "چاندنی ددان، زەردەخەنەی هۆلیوود، یان تەلی ددان",
      suggested_slot_label: "زووترین کاتی پێشنیارکراو بۆ تۆ:",
      btn_accept_suggested: "بەڵێ، ئەم کاتە پەسەندە",
      btn_choose_custom: "هەڵبژاردنی بەروار و کاتێکی تر",
      custom_picker_heading: "بەروار و کاتی گونجاو دیاریبکە (کاتەکانی کار 1:00 پ.ن - 9:00 پ.ن)",
      custom_date_label: "بەرواری دڵخواز (شەممە - پێنجشەممە)",
      custom_time_label: "کاتی دڵخواز دیاریبکە",
      btn_continue_to_details: "بەردەوامبوون بۆ زانیاری نەخۆش ←",
      btn_back: "← گەڕانەوە",
      summary_badge: "کورتەی نۆرە:",
      form_name_label: "ناوی سیانی نەخۆش *",
      form_phone_label: "ژمارەی مۆبایل (واتسئەپ) *",
      form_doctor_label: "پزیشکی دڵخواز",
      form_notes_label: "تێبینی یان وەسفی کێشەی ددان (ئارەزوومەندانە)",
      btn_confirm_whatsapp: "ناردن و پەسەندکردن لە واتسئەپ",
      form_disclaimer: "ڕاستەوخۆ دەگوازرێیتەوە بۆ گفتوگۆی واتسئەپی فەرمی کلینیک لەگەڵ بەرپرسی نۆرەکان.",
      location_tag: "شوێنی کلینیک و کاتەکانی کار",
      location_title: "سەردانمان بکەن لە کلینیکی ڤیرۆنا لە کەرکووک",
      location_desc: "شوێنێکی گونجاو و ئاسان، لەگەڵ شوێنی ڕاگرتنی ئۆتۆمبێل و پێشوازییەکی شایستە.",
      location_clinic_title: "کلینیکی ڤیرۆنا بۆ پزیشکی و جوانکاری و چاندنی ددان",
      location_clinic_city: "کەرکووک، عێراق",
      loc_address_label: "ناونیشان:",
      loc_address_val: "کەرکووک، ڕێگای بەغدا / کۆمەڵگەی پزیشکی پسپۆڕی، نزیک ناوەندی شار",
      loc_phone_label: "تەلەفۆن و نۆرەگرتن:",
      loc_hours_label: "کاتەکانی کارکردن (سیستەمی نۆرەی پێشوەختە):",
      hours_days: "شەممە - پێنجشەممە:",
      hours_friday: "هەینی:",
      hours_fri_val: "داخراوە (حاڵەتی بەپەلە بە نۆرەی پێشوەختە)",
      loc_parking_label: "شوێنی ئۆتۆمبێل:",
      loc_parking_val: "شوێنی بێبەرامبەر و فراوانی ئۆتۆمبێل لە بەردەم کلینیک دابینکراوە.",
      btn_open_google_maps: "کردنەوەی ئاراستەکان لە نەخشەی گووگڵ",
      footer_desc: "یەکەمین کلینیکی پسپۆڕی لە کەرکووک بۆ جوانکاری و چاندنی ددان. کارکردن بە سیستەمی نۆرەی پێشوەختە بۆ ئەزموونێکی بەرز و بێ ئازار.",
      footer_nav_title: "بەشەکانی ماڵپەڕ",
      footer_contact_title: "پەیوەندی و نۆرەگرتن",
      footer_privacy: "سیاسەتی تایبەتمەندی و پاراستنی زانیاری نەخۆش",
      privacy_title: "سیاسەتی تایبەتمەندی و نهێنی زانیارییەکانی نەخۆش",
      privacy_intro: "لە کلینیکی ڤیرۆنا، بە تەواوی پابەندین بە بەرزترین ستانداردەکانی پاراستنی نهێنی و زانیارییە پزیشکییەکانی مراجعینمان.",
      privacy_point_1: "زانیارییە پزیشکی و کەسییەکان (ناو، مۆبایل، دەستنیشانکردنی نەخۆشی، تیشک) بە تەواوی نهێنی دەمێننەوە لە تۆمارەکانی کلینیکدا.",
      privacy_point_2: "ژمارەی مۆبایل تەنها بۆ نۆبەگرتن لە واتسئەپ، بیرخستنەوەی کاتەکان و بەدواداچوونی چارەسەر بەکاردەهێنرێت.",
      privacy_point_3: "دڵنیایی دەدەین کە بە هیچ شێوەیەک زانیارییەکانت لەگەڵ هیچ لایەنێکی سێیەم یان کۆمپانیای ڕیکلام هاوبەش ناکرێت.",
      privacy_point_4: "مافی نەخۆش: مافی ئەوەت هەیە لە هەر کاتێکدا داوای دەستکاریکردن یان هەڵوەشاندنەوەی نۆبەکەت بکەیت.",
      privacy_close_btn: "داخستنی پەنجەرەی تایبەتمەندی",
      wa_quick_label: "نۆرەگرتنی خێرا لە واتسئەپ"
    }
  };

  const doctorsData = {
    osama: {
      name: "د. أسامة الحسين",
      nameEn: "Dr. Osama Al-Hussein",
      nameKu: "د. ئوسامە ئەلحوسێن",
      role: "أخصائي زراعة الأسنان والتركيبات التجميلية الرقمية",
      roleEn: "Dental Implants & Digital Aesthetic Restorations Specialist",
      roleKu: "پسپۆڕی چاندنی ددان و پێکهاتەی جوانکاری دیجیتاڵی",
      badge: "استشاري زراعة وتجميل الأسنان",
      badgeEn: "Consultant Implantologist & Aesthetic Dentist",
      badgeKu: "ڕاوێژکاری چاندن و جوانکاری ددان",
      img: "assets/staff/dr-osama.webp",
      qualifications: "خبير زراعة الأسنان الفورية وتصميم ابتسامة هوليوود الرقمية. حاصل على شهادات تخصصية متقدمة في أنظمة الزرع العالمية والتركيبات الثابتة.",
      qualificationsEn: "Expert in immediate dental implants and digital Hollywood smile design. Advanced certifications in international implantology systems and fixed prosthodontics.",
      qualificationsKu: "شارەزای چاندنی دەستبەجێی ددان و دیزاینی دیجیتاڵی زەردەخەنەی هۆلیوود. بڕوانامەی پێشکەوتووی سیستەمە جیهانییەکانی چاندن.",
      specialties: [
        "زراعة الأسنان الفورية بنظام التوجيه الرقمي الثلاثي",
        "تصميم وتركيب عدسات الفينير واللومينير وزركونيا عالية الشفافية",
        "إعادة تأهيل الابتسامة الكاملة وتناسق خط الابتسامة"
      ]
    },
    noor: {
      name: "د. نور نصرالله",
      nameEn: "Dr. Noor Nasrallah",
      nameKu: "د. نوور نەسرەڵڵا",
      role: "أخصائية تقويم وتجميل الأسنان والفكين",
      roleEn: "Orthodontics & Dentofacial Orthopedics Specialist",
      roleKu: "پسپۆڕی تەلی ددان و جوانکاری شەویلگە",
      badge: "استشارية تقويم الأسنان",
      badgeEn: "Consultant Orthodontist",
      badgeKu: "ڕاوێژکاری تەلی ددان",
      img: "assets/staff/dr-noor.webp",
      qualifications: "خبرة سريرية واسعة في علاج كافة حالات اعوجاج وتراكب الأسنان للبالغين والأطفال، واستخدام أحدث أجهزة التقويم الشفاف غير المرئي.",
      qualificationsEn: "Extensive clinical experience in treating malocclusion and crowded teeth for adults and teens using latest clear aligner technology.",
      qualificationsKu: "ئەزموونی فراوان لە چارەسەری ناڕێکی دانەکان بۆ گەورە و هەرزەکار بە تەلی شەفاف و کلاسیك.",
      specialties: [
        "التقويم الشفاف غير المرئي (Clear Aligners)",
        "التقويم الكلاسيكي والمعدني الدقيق للأطفال والبالغين",
        "تعديل وتناسق الإطباق الوظيفي والجمالي للفكين"
      ]
    },
    zaid: {
      name: "د. زيد",
      nameEn: "Dr. Zaid",
      nameKu: "د. زەید",
      role: "أخصائي جراحة الفم والفكين وزراعة الأسنان المتقدمة",
      roleEn: "Oral & Maxillofacial Surgery & Advanced Implants",
      roleKu: "پسپۆڕی نەشتەرگەری دەم و شەویلگە و چاندن",
      badge: "استشاري جراحة الفم والفكين",
      badgeEn: "Consultant Oral & Maxillofacial Surgeon",
      badgeKu: "ڕاوێژکاری نەشتەرگەری شەویلگە",
      img: "assets/staff/dr-zaid.webp",
      qualifications: "متخصص في الإجراءات الجراحية الفموية الدقيقة وزراعة العظم ورفع الجيوب الأنفية، وقلع أضراس العقل المطمورة بدون ألم.",
      qualificationsEn: "Specialized in precise oral surgical procedures, bone grafting, sinus lifts, and painless impacted wisdom teeth extractions.",
      qualificationsKu: "پسپۆڕ لە نەشتەرگەرییە وردەکانی دەم، چاندنی ئێسک، و کێشانی ددانی ژیری بێ ئازار.",
      specialties: [
        "قلع أضراس العقل المطمورة جراحياً بأعلى درجات الأمان",
        "زراعة العظم الفكي ورفع الجيب الفكي التمهيدي للزراعة",
        "معالجة آفات وأكياس الفكين وجراحة الأنسجة الداعمة"
      ]
    },
    mohammed: {
      name: "د. محمد",
      nameEn: "Dr. Mohammed",
      nameKu: "د. محەممەد",
      role: "أخصائي علاج جذور الأسنان والترميم التجميلي المجهري",
      roleEn: "Micro-Endodontics & Aesthetic Restoration Specialist",
      roleKu: "پسپۆڕی چارەسەری دەمار و پڕکردنەوەی ورد",
      badge: "استشاري علاج العصب المجهري",
      badgeEn: "Consultant Endodontist",
      badgeKu: "ڕاوێژکاری دەماری ددان",
      img: "assets/staff/dr-mohammed.webp",
      qualifications: "ريادة في علاج وحشو عصب الأسنان بأحدث الأجهزة الآلية الدوارة والتصوير الرقمي، مع إنقاذ الأسنان الطبيعية وحمايتها.",
      qualificationsEn: "Pioneer in rotary micro-endodontic canal therapy, saving compromised natural teeth with microscopic accuracy.",
      qualificationsKu: "شارەزا لە چارەسەری دەماری ددان بە ئامێری ڕۆتەری لە یەک دانیشتندا بۆ پاراستنی ددانی سروشتی.",
      specialties: [
        "علاج وحشو جذور الأسنان المعقدة بجلسة واحدة",
        "إعادة معالجة القنوات الجذرية التالفة والحشوات القديمة",
        "الترميم التجميلي المجهري بالحشوات الضوئية النانوية"
      ]
    },
    anas: {
      name: "د. أنس",
      nameEn: "Dr. Anas",
      nameKu: "د. ئەنەس",
      role: "أخصائي تجميل الأسنان وابتسامة هوليوود والتركيبات",
      roleEn: "Aesthetic Dentistry & Hollywood Smile Specialist",
      roleKu: "پسپۆڕی جوانکاری ددان و زەردەخەنەی هۆلیوود",
      badge: "استشاري التركيبات التجميلية",
      badgeEn: "Consultant Aesthetic Prosthodontist",
      badgeKu: "ڕاوێژکاری پێکهاتەی جوانکاری",
      img: "assets/staff/dr-anas.webp",
      qualifications: "خبير تصميم الابتسامة المخصصة للوجه وعدسات الإيماكس والفينير والزركون، بأعلى معايير التناسق مع الملامح والابتسامة الطبيعية.",
      qualificationsEn: "Expert in custom facial smile aesthetics, ultra-thin E-max veneers, and natural biomimetic tooth restorations.",
      qualificationsKu: "دیزاینەری زەردەخەنەی تایبەت بە ڕوخسار، هاوێنەی ئیمەکس و فینیر بە دەرکەوتنی تەواو سروشتی.",
      specialties: [
        "تصميم ابتسامة هوليوود المتناسقة بدون حفر جائر للأسنان",
        "عدسات الفينير واللومينير فائقة الرقة والدقة",
        "التيجان والجسور الخزفية الحديثة عالية المتانة"
      ]
    },
    aya: {
      name: "د. آية أياد",
      nameEn: "Dr. Aya Ayad",
      nameKu: "د. ئایە ئەیاد",
      role: "طبيبة أسنان متخصصة في طب أسنان الأطفال والتأهيل السلوكي",
      roleEn: "Pediatric Dentistry & Behavioral Dental Care",
      roleKu: "پزیشکی ددانی منداڵان و ڕاهێنانی ڕەفتاری",
      badge: "أخصائية طب أسنان الأطفال",
      badgeEn: "Pediatric Dental Specialist",
      badgeKu: "پسپۆڕی ددانی منداڵان",
      img: "assets/staff/dr-aya.webp",
      qualifications: "أسلوب تربوي نفسي لطيف لتحويل علاج أسنان الأطفال إلى تجربة ممتعة بدون خوف، حماية الأسنان اللبنية والوقاية المبكرة.",
      qualificationsEn: "Compassionate behavioral approach transforming child dental visits into a fear-free experience, preventive pediatric protocols.",
      qualificationsKu: "شێوازێکی پەروەردەیی ئارام تا سەردانی منداڵ بۆ پزیشک ببێتە ئەزموونێکی خۆش بەبێ ترس و گریان.",
      specialties: [
        "علاج تسوس الأسنان اللبنية وتطبيق الفلورايد الوقائي",
        "حافظات المسافات للأسنان وسدادات الشقوق الوقائية",
        "التأهيل السلوكي للأطفال وإزالة الخوف من عيادة الأسنان"
      ]
    }
  };

  let currentLang = 'ar';

  function initNavigation() {
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navbar = document.getElementById('navbar');

    scrollButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        const targetId = this.getAttribute('data-scroll');
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          e.preventDefault();
          const navOffset = navbar ? navbar.offsetHeight : 76;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          if (mobileDrawer && mobileDrawer.classList.contains('open')) {
            mobileDrawer.classList.remove('open');
          }
        }
      });
    });

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', function () {
        mobileDrawer.classList.toggle('open');
      });
    }

    window.addEventListener('scroll', updateActiveNavState, { passive: true });
  }

  function updateActiveNavState() {
    const sections = ['hero', 'tech', 'reviews', 'about', 'faq'];
    const navOffset = (document.getElementById('navbar')?.offsetHeight || 76) + 40;
    const scrollPos = window.pageYOffset;

    let currentSection = 'hero';

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const top = el.offsetTop - navOffset;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          currentSection = sections[i];
          break;
        }
      }
    }

    const navButtons = document.querySelectorAll('.nav-menu button.nav-item');
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-scroll');
      if (target === currentSection) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function initLanguageEngine() {
    const savedLang = localStorage.getItem('verona_lang') || 'ar';
    setLanguage(savedLang);

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        setLanguage(selectedLang);
      });
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('verona_lang', lang);

    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const elements = document.querySelectorAll('[data-i18n]');
    const dict = translations[lang];

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    const docSelect = document.getElementById('doctorCvSelect');
    if (docSelect) {
      updateCvCard(docSelect.value);
    }
  }

  function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('verona_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('verona_theme', newTheme);
      });
    }
  }

  function initReviewsOceanCarousel() {
    const track = document.getElementById('oceanTrack');
    const container = document.getElementById('oceanTrackContainer');
    const prevBtn = document.getElementById('prevOceanBtn');
    const nextBtn = document.getElementById('nextOceanBtn');
    const dotsContainer = document.getElementById('oceanDots');

    if (!track || !container || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.ocean-review-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    function getVisibleCount() {
      return window.innerWidth <= 768 ? 1 : 2;
    }

    function getMaxIndex() {
      return Math.max(0, totalCards - getVisibleCount());
    }

    function renderDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const maxIndex = getMaxIndex();
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `ocean-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Review Slide ${i + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateTrack();
          resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateTrack() {
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      const card = cards[0];
      if (!card) return;

      const cardWidth = card.getBoundingClientRect().width;
      const gap = 24;
      const moveDistance = currentIndex * (cardWidth + gap);
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const sign = isRtl ? 1 : -1;

      track.style.transform = `translateX(${sign * moveDistance}px)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.ocean-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }
    }

    function nextSlide() {
      const maxIndex = getMaxIndex();
      currentIndex = (currentIndex >= maxIndex) ? 0 : currentIndex + 1;
      updateTrack();
    }

    function prevSlide() {
      const maxIndex = getMaxIndex();
      currentIndex = (currentIndex <= 0) ? maxIndex : currentIndex - 1;
      updateTrack();
    }

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    window.addEventListener('resize', () => {
      renderDots();
      updateTrack();
    });

    renderDots();
    updateTrack();
    startAutoPlay();
  }

  function initDoctorCvSelector() {
    const select = document.getElementById('doctorCvSelect');
    const pills = document.querySelectorAll('.doc-pill-btn');

    if (!select) return;

    select.addEventListener('change', function () {
      const val = this.value;
      updateCvCard(val);
      pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-doc') === val));
    });

    pills.forEach(pill => {
      pill.addEventListener('click', function () {
        const val = this.getAttribute('data-doc');
        select.value = val;
        updateCvCard(val);
        pills.forEach(p => p.classList.toggle('active', p === this));
      });
    });

    updateCvCard(select.value || 'osama');
  }

  function updateCvCard(key) {
    const doc = doctorsData[key];
    if (!doc) return;

    const img = document.getElementById('cvDoctorImg');
    const badge = document.getElementById('cvDoctorBadge');
    const name = document.getElementById('cvDoctorName');
    const role = document.getElementById('cvDoctorRole');
    const qual = document.getElementById('cvDoctorQualifications');
    const specs = document.getElementById('cvDoctorSpecialties');
    const bookBtn = document.getElementById('cvBookBtn');

    if (img) {
      img.src = doc.img;
      img.alt = doc.name;
    }

    if (badge) badge.textContent = currentLang === 'en' ? doc.badgeEn : (currentLang === 'ku' ? doc.badgeKu : doc.badge);
    if (name) name.textContent = currentLang === 'en' ? doc.nameEn : (currentLang === 'ku' ? doc.nameKu : doc.name);
    if (role) role.textContent = currentLang === 'en' ? doc.roleEn : (currentLang === 'ku' ? doc.roleKu : doc.role);
    if (qual) qual.textContent = currentLang === 'en' ? doc.qualificationsEn : (currentLang === 'ku' ? doc.qualificationsKu : doc.qualifications);

    if (specs) {
      specs.innerHTML = '';
      doc.specialties.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        specs.appendChild(li);
      });
    }

    if (bookBtn) {
      bookBtn.href = `contact.html?doc=${encodeURIComponent(doc.name)}#booking`;
    }
  }

  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      if (btn) {
        btn.addEventListener('click', function () {
          const isActive = item.classList.contains('active');
          items.forEach(other => {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });

          if (!isActive) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  }

  function initSmartBookingWizard() {
    const form = document.getElementById('smartBookingForm');
    if (!form) return;

    const panePatientType = document.getElementById('panePatientType');
    const paneCareReason = document.getElementById('paneCareReason');
    const paneSlotSelection = document.getElementById('paneSlotSelection');
    const panePatientDetails = document.getElementById('panePatientDetails');

    const badge = document.getElementById('wizardStepBadge');
    const title = document.getElementById('wizardTitle');
    const sub = document.getElementById('wizardSub');

    let bookingState = {
      patientType: 'new',
      careCategory: 'emergency',
      selectedDate: '',
      selectedTime: '1:30 PM',
      isSuggestedSlot: true
    };

    const typeButtons = document.querySelectorAll('[data-patient-type]');
    typeButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const type = this.getAttribute('data-patient-type');
        bookingState.patientType = type;

        if (type === 'new') {
          showPane(paneCareReason, 'الخطوة 2 من 3', 'ما هو نوع الرعاية المطلوبة؟', 'حدد احتياجك لتخصيص الوقت المناسب والأولوية الطبية');
        } else {
          bookingState.careCategory = 'returning_visit';
          setupSuggestedSlot('returning');
          showPane(paneSlotSelection, 'الخطوة 2 من 3', 'اختيار الموعد المناسب', 'نظام المواعيد المسبقة لراحتكم وبدون انتظار');
        }
      });
    });

    const reasonButtons = document.querySelectorAll('[data-care-category]');
    reasonButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const cat = this.getAttribute('data-care-category');
        bookingState.careCategory = cat;
        setupSuggestedSlot(cat);
        showPane(paneSlotSelection, 'الخطوة 2 من 3', 'تأكيد الموعد المناسب', 'نقترح أسرع موعد متاح ومناسب لأولوية حالتك');
      });
    });

    function setupSuggestedSlot(category) {
      const slotText = document.getElementById('suggestedSlotText');
      const slotNote = document.getElementById('suggestedSlotNote');
      const today = new Date().toLocaleDateString('ar-EG', { weekday: 'long', month: 'short', day: 'numeric' });

      if (category === 'emergency') {
        bookingState.selectedTime = '1:30 PM';
        bookingState.selectedDate = 'اليوم';
        if (slotText) slotText.textContent = `اليوم (${today}) - 1:30 ظهراً (أولوية طوارئ عاجلة)`;
        if (slotNote) slotNote.textContent = 'تم حجز أولوية طوارئ فورية لك لمنع تفاقم الألم بدون أي انتظار.';
      } else if (category === 'child') {
        bookingState.selectedTime = '3:00 PM';
        bookingState.selectedDate = 'غداً';
        if (slotText) slotText.textContent = 'غداً - 3:00 عصراً (عيادة طب أسنان الأطفال)';
        if (slotNote) slotNote.textContent = 'موعد هادئ ومخصص للأطفال مع د. آية أياد لضمان راحة الطفل التامة.';
      } else if (category === 'recare') {
        bookingState.selectedTime = '4:30 PM';
        bookingState.selectedDate = 'غداً';
        if (slotText) slotText.textContent = 'غداً - 4:30 عصراً (جلسة تنظيف GBT السويسرية)';
        if (slotNote) slotNote.textContent = 'موعد مريح لتنظيف الأسنان الناعم بالبروتوكول السويسري.';
      } else {
        bookingState.selectedTime = '6:00 PM';
        bookingState.selectedDate = 'غداً';
        if (slotText) slotText.textContent = 'غداً - 6:00 مساءً (استشارة تخصصية شاملة)';
        if (slotNote) slotNote.textContent = 'موعد مخصص للفحص الشامل وتحديد خطة العلاج المناسبة.';
      }
    }

    const btnAcceptSuggested = document.getElementById('btnAcceptSuggested');
    if (btnAcceptSuggested) {
      btnAcceptSuggested.addEventListener('click', function () {
        bookingState.isSuggestedSlot = true;
        updateSummary();
        showPane(panePatientDetails, 'الخطوة 3 من 3', 'بيانات المراجع والتأكيد', 'املأ الاسم ورقم الواتساب لإرسال تذكرة الموعد فوراً');
      });
    }

    const btnShowCustomSlot = document.getElementById('btnShowCustomSlot');
    const customSlotPicker = document.getElementById('customSlotPicker');
    if (btnShowCustomSlot && customSlotPicker) {
      btnShowCustomSlot.addEventListener('click', function () {
        customSlotPicker.removeAttribute('hidden');
        const dateInput = document.getElementById('bookingCustomDate');
        if (dateInput && !dateInput.value) {
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          dateInput.min = new Date().toISOString().split('T')[0];
          dateInput.value = tomorrow.toISOString().split('T')[0];
        }
      });
    }

    const btnConfirmCustomSlot = document.getElementById('btnConfirmCustomSlot');
    if (btnConfirmCustomSlot) {
      btnConfirmCustomSlot.addEventListener('click', function () {
        const dateInput = document.getElementById('bookingCustomDate');
        const timeSelect = document.getElementById('bookingCustomTime');
        if (dateInput && dateInput.value) bookingState.selectedDate = dateInput.value;
        if (timeSelect) bookingState.selectedTime = timeSelect.value;
        bookingState.isSuggestedSlot = false;
        updateSummary();
        showPane(panePatientDetails, 'الخطوة 3 من 3', 'بيانات المراجع والتأكيد', 'املأ الاسم ورقم الواتساب لإرسال تذكرة الموعد فوراً');
      });
    }

    const backButtons = document.querySelectorAll('.wizard-back-btn');
    backButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetPaneId = this.getAttribute('data-back-to');
        if (targetPaneId === 'panePatientType') {
          showPane(panePatientType, 'الخطوة 1 من 3', 'هل زرت عيادة ڤيرونا من قبل؟', 'اختر صفتك للمساعدة في تحديد أسرع موعد مناسب لحالتك');
        } else if (targetPaneId === 'paneSlotSelection') {
          showPane(paneSlotSelection, 'الخطوة 2 من 3', 'تأكيد الموعد المناسب', 'نقترح أسرع موعد متاح ومناسب لأولوية حالتك');
        } else if (this.id === 'btnBackFromSlot') {
          if (bookingState.patientType === 'returning') {
            showPane(panePatientType, 'الخطوة 1 من 3', 'هل زرت عيادة ڤيرونا من قبل؟', 'اختر صفتك للمساعدة في تحديد أسرع موعد مناسب لحالتك');
          } else {
            showPane(paneCareReason, 'الخطوة 2 من 3', 'ما هو نوع الرعاية المطلوبة؟', 'حدد احتياجك لتخصيص الوقت المناسب والأولوية الطبية');
          }
        }
      });
    });

    function showPane(paneEl, stepTxt, titleTxt, subTxt) {
      [panePatientType, paneCareReason, paneSlotSelection, panePatientDetails].forEach(p => {
        if (p) p.classList.remove('active');
      });
      if (paneEl) paneEl.classList.add('active');
      if (badge) badge.textContent = stepTxt;
      if (title) title.textContent = titleTxt;
      if (sub) sub.textContent = subTxt;
    }

    function updateSummary() {
      const summaryText = document.getElementById('summaryText');
      if (!summaryText) return;

      const pType = bookingState.patientType === 'new' ? 'مريض جديد' : 'مريض سابق';
      let cName = 'استشارة عامة';
      if (bookingState.careCategory === 'emergency') cName = 'حالة طارئة وألم مستعجل';
      else if (bookingState.careCategory === 'child') cName = 'طب أسنان الأطفال';
      else if (bookingState.careCategory === 'recare') cName = 'فحص وتنظيف GBT';

      summaryText.textContent = `${pType} • ${cName} • ${bookingState.selectedDate} (${bookingState.selectedTime})`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const preselectedDoc = urlParams.get('doc');
    if (preselectedDoc) {
      const docSelect = document.getElementById('wizardDoctorSelect');
      if (docSelect) {
        for (let i = 0; i < docSelect.options.length; i++) {
          if (docSelect.options[i].value.includes(preselectedDoc.split(' ')[1] || preselectedDoc)) {
            docSelect.selectedIndex = i;
            break;
          }
        }
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('wizardPatientName')?.value.trim();
      const phone = document.getElementById('wizardPatientPhone')?.value.trim();
      const doctor = document.getElementById('wizardDoctorSelect')?.value;
      const notes = document.getElementById('wizardNotes')?.value.trim();

      if (!name || !phone) {
        alert(currentLang === 'en' ? 'Please enter your name and phone number.' : 'يرجى إدخال الاسم ورقم الهاتف.');
        return;
      }

      const randomTicket = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `VRN-BK-${randomTicket}`;

      const pType = bookingState.patientType === 'new' ? 'مريض جديد (أول زيارة)' : 'مريض سابق (لديه ملف)';
      let cName = 'استشارة عامة';
      if (bookingState.careCategory === 'emergency') cName = 'حالة طارئة وألم مستعجل';
      else if (bookingState.careCategory === 'child') cName = 'طب أسنان الأطفال';
      else if (bookingState.careCategory === 'recare') cName = 'فحص دوري وتنظيف GBT';

      let message = '';
      if (currentLang === 'en') {
        message = `*Appointment Booking Request - Verona Dental Clinic*\n` +
          `Ticket Ref: #${ticketId}\n\n` +
          `Patient: ${name}\n` +
          `Phone: ${phone}\n` +
          `Status: ${pType}\n` +
          `Category: ${cName}\n` +
          `Doctor: ${doctor}\n` +
          `Date: ${bookingState.selectedDate}\n` +
          `Time: ${bookingState.selectedTime}\n` +
          (notes ? `Notes: ${notes}\n` : '') +
          `\nKindly confirm the appointment slot. Thank you!`;
      } else if (currentLang === 'ku') {
        message = `*داواکاری وەرگرتنی نۆرە - کلینیکی ڤیرۆنا*\n` +
          `ژمارەی نۆرە: #${ticketId}\n\n` +
          `ناوی نەخۆش: ${name}\n` +
          `مۆبایل: ${phone}\n` +
          `دۆخ: ${pType}\n` +
          `جۆری چارەسەر: ${cName}\n` +
          `پزیشک: ${doctor}\n` +
          `بەروار: ${bookingState.selectedDate}\n` +
          `کات: ${bookingState.selectedTime}\n` +
          (notes ? `تێبینی: ${notes}\n` : '') +
          `\nسوپاس بۆ پشتڕاستکردنەوەی نۆرەکە.`;
      } else {
        message = `*طلب حجز موعد مسبق - عيادة ڤيرونا لطب الأسنان*\n` +
          `رقم الحجز: #${ticketId}\n\n` +
          `اسم المراجع: ${name}\n` +
          `رقم الهاتف: ${phone}\n` +
          `صفة المراجع: ${pType}\n` +
          `نوع الرعاية: ${cName}\n` +
          `الطبيب المعالج: ${doctor}\n` +
          `التاريخ: ${bookingState.selectedDate}\n` +
          `الوقت: ${bookingState.selectedTime}\n` +
          (notes ? `ملاحظات: ${notes}\n` : '') +
          `\nبانتظار تأكيد الموعد مع التقدير.`;
      }

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/9647745490770?text=${encoded}`, '_blank');
    });
  }

  function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    function handleVideoPlayback() {
      if (window.innerWidth < 1100) {
        if (!video.paused) video.pause();
      } else {
        if (video.paused) {
          const p = video.play();
          if (p !== undefined) p.catch(() => {});
        }
      }
    }

    handleVideoPlayback();
    window.addEventListener('resize', handleVideoPlayback);
  }

  function initYear() {
    const yr = document.getElementById('currentYear');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  function initPrivacyModal() {
    const modal = document.getElementById('privacyModal');
    const openBtn = document.getElementById('privacyPolicyBtn');
    const closeX = document.getElementById('privacyCloseX');
    const closeBtn = document.getElementById('privacyCloseBtn');
    const backdrop = document.getElementById('privacyBackdrop');

    if (!modal || !openBtn) return;

    function openModal() {
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    if (closeX) closeX.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguageEngine();
    initTheme();
    initNavigation();
    initHeroVideo();
    initReviewsOceanCarousel();
    initDoctorCvSelector();
    initFaqAccordion();
    initSmartBookingWizard();
    initYear();
    initPrivacyModal();
  });

})();
