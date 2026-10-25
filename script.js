

(function () {
  'use strict';

  const translations = {
    ar: {
      brand_name: "عيادة ڤيرونا",
      brand_tagline: "لطب وتجميل وزراعة الأسنان",
      top_google_rating: "على خرائط جوجل",
      top_reviews_count: "تقييماً معتمداً",
      nav_home: "الرئيسية",
      nav_tech: "التقنيات المتطورة",
      nav_reviews: "التقييمات",
      nav_staff: "الكادر الطبي",
      nav_location: "الموقع",
      nav_book_btn: "حجز موعد",
      hero_verified_badge: "تقييم موثق على خرائط جوجل (121 تقييماً)",
      hero_title_sub: "الرعاية السنية الحديثة والمتقدمة في كركوك",
      hero_title_main: "عيادة ڤيرونا لطب وتجميل وزراعة الأسنان",
      hero_lead: "وجهتكم الأولى لطب الأسنان الرقمي الحديث في كركوك. تجربة علاجية استثنائية وبدون ألم مع جهاز البنج الإلكتروني STA وتقنية تنظيف الأسنان السويسرية المتطورة GBT، بإشراف نخبة من 6 أطباء استشاريين ضمن نظام حجوزات مسبقة لراحتكم التامة وبدون انتظار.",
      hero_book_cta: "حجز موعد استشارة مسبق",
      hero_whatsapp_cta: "تواصل عبر الواتساب",
      stat_google_rate: "تقييم خرائط جوجل",
      stat_reviews_count: "مراجعة معتمدة",
      stat_consultants: "أطباء استشاريين",
      stat_painless: "بدون ألم (STA & GBT)",
      hero_sta_pill_title: "البنج الإلكتروني الذكي STA",
      hero_sta_pill_sub: "تخدير بدون إبر مؤلمة وبدون تنميل الوجه",
      hero_gbt_pill_title: "بروتوكول تنظيف GBT السويسري",
      hero_gbt_pill_sub: "جهاز EMS AIRFLOW® Prophylaxis Master",
      tech_tag: "ريادة التكنولوجيا الطبية",
      tech_title: "تقنيات استثنائية لراحة لا تُضاهى وبدون ألم",
      tech_desc: "تعتمد عيادة ڤيرونا أرقى المعدات الطبية العالمية المعتمدة لتقديم تجربة علاجية تحول زيارة طبيب الأسنان إلى راحة وأمان كامل.",
      tech_sta_tag: "تخدير محوسب بدون ألم",
      tech_sta_name: "جهاز البنج الإلكتروني الذكي STA",
      tech_sta_quote: '"مايحتاج بنج عام حليناها ويا جهاز البنج الالكتروني 😍💪"',
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
      reviews_tag: "ثقة مئات المرضى في كركوك",
      reviews_title: "تقييمات معتمدة 4.9 نجوم على خرائط جوجل",
      reviews_desc: "نفخر بثقة مراجعينا وامتنانهم للرعاية الفائقة والنتائج الدقيقة التي يقدمها كادرنا الطبي الاستشاري.",
      google_map_verified: "تقييم موثق رسمياً",
      reviews_word: "تقييماً",
      google_banner_text: "عيادة ڤيرونا لطب وتجميل وزراعة الأسنان في كركوك حاصلة على أعلى التقييمات لجودة التعقيم، مهارة الكادر الطبي، ودقة المواعيد المسبقة.",
      btn_view_google_reviews: "عرض كافة التقييمات على جوجل",
      rev_name_1: "أحمد الكركوكي",
      rev_date_1: "قبل شهر",
      rev_text_1: '"تجربة مريحة جداً، سويت زراعة أسنان عند د. أسامة الحسين. استخدام جهاز البنج الإلكتروني STA ما حسيت بأي وخزة أو ألم نهائياً! نظافة العيادة والتعقيم 10/10."',
      rev_name_2: "سارة خليل",
      rev_date_2: "قبل أسبوعين",
      rev_text_2: '"جربت جلسة تنظيف الأسنان بجهاز AIRFLOW GBT السويسري الجديد، فرق هائل عن التنظيف القديم! بدون أي حساسية بالأسنان وماء دافئ مريح جداً. أفضل عيادة بكركوك."',
      rev_name_3: "ڕێبین قادر",
      rev_date_3: "قبل 3 أسابيع",
      rev_text_3: '"نظام المواعيد المسبقة ممتاز جداً وتدخل بوقتك بدون أي انتظار. تعامل الكادر الطبي والاستقبال راقي ومحترف لأبعد الحدود. أنصح بهم بشدة."',
      rev_name_4: "د. هديل البياتي",
      rev_date_4: "قبل شهر",
      rev_text_4: '"سويت تيجان زركون وعدسات تجميلية، النتيجة طبيعية للغاية وتطابق لون الأسنان الحقيقي بدون مبالغة أو بروز. إتقان ودقة عالية جداً."',
      rev_name_5: "شوان محمد",
      rev_date_5: "قبل شهرين",
      rev_text_5: '"علاج عصب لضرس معقد عند د. محمد بجلسة واحدة وبدون أي إحساس بالألم. أجهزة دقيقة وأشعة حديثة وتوضيح كامل للحالة قبل البدء."',
      rev_name_6: "مريم الجبوري",
      rev_date_6: "قبل 3 أسابيع",
      rev_text_6: '"أخذت بنتي لعند دكتورة آية لأسنان الأطفال، أسلوبها هادئ ومحبب جداً وخلا بنتي تتعالج بدون خوف أو بكاء. شكراً عيادة ڤيرونا على كادركم المميز."',
      rev_name_7: "عمر طارق",
      rev_date_7: "قبل شهر",
      rev_text_7: '"قلع جراحي لضرس عقل مدفون عند د. زيد، ما حسيت بشيء واستغرقت العملية وقت قياسي بدون أي ورم بعد الجلسة. كادر استشاري يستحق الثقة."',
      rev_name_8: "ژیان عەلی",
      rev_date_8: "قبل أسبوعين",
      rev_text_8: '"ڕێکخستنەوەی دانەکانم بە تەلی شەفاف لای دکتۆرە نور، لە ٤ مانگدا گۆڕانکاری گەورەم بینی. مامەڵە و خزمەتگوزاری سەردەمیانە و نموونەییە."',
      rev_name_9: "مصطفى النعيمي",
      rev_date_9: "قبل شهرين",
      rev_text_9: '"أهم نقطة بالنسبة لي كانت التعقيم. أجهزة التعقيم الحديثة وتغليف الأدوات أمام المراجع تعطي راحة نفسية واطمئنان كامل. مستوى عالمي بكركوك."',
      rev_name_10: "دیلان بەرزان",
      rev_date_10: "قبل شهر",
      rev_text_10: '"دیزاینی زەردەخەنەی هۆلیوود لای د. ئەنەس، بەڕاستی زۆر سروشتی و بێ کێشەیە. هەمووان دەپرسن لە کوێ چاکم کردووە! سوپاس بۆ ماندووبوونتان."',
      rev_name_11: "كرار حيدر",
      rev_date_11: "قبل 3 أسابيع",
      rev_text_11: '"حجزت عن طريق الواتساب وتم الرد وتحديد الموعد خلال دقائق. الدخول بالموعد تماماً ومتابعة بعد العلاج للاطمئنان على الحالة. عيادة محترفة بكل المقاييس."',
      rev_name_12: "نور الهدى",
      rev_date_12: "قبل 4 أسابيع",
      rev_text_12: '"عندي فوبيا شديدة من إبر البنج، لكن جهاز البنج الإلكتروني عندهم غير فكرتي تماماً! ما حسيت بأي شيء أبداً وتخدر السن بدون خدر الشفاه. تجربة ممتازة."',
      verified_patient: "مريض موثق عبر خرائط جوجل",
      smile_tag: "نتائج سريرية واقعية",
      smile_title: "التحول الرقمي للابتسامة في عيادة ڤيرونا",
      smile_sub: "اسحب المقبض لمشاهدة الفرق بين حالة الأسنان قبل العلاج والنتيجة المتناسقة بعد تجميل وزراعة الأسنان.",
      label_after: "بعد العلاج (After)",
      label_before: "قبل العلاج (Before)",
      preset_before: "عرض قبل العلاج 100%",
      preset_split: "مقارنة نصف بنصف 50/50",
      preset_after: "عرض النتيجة بعد العلاج 100%",
      staff_tag: "الكفاءات الطبية المتميزة",
      staff_title: "الكادر الطبي التخصصي في عيادة ڤيرونا",
      staff_desc: "يضم فريقنا 6 أطباء استشاريين وأخصائيين في مختلف مجالات زراعة وتجميل وتقويم وجراحة الأسنان وطب أسنان الأطفال لتقديم رعاية متكاملة تحت سقف واحد.",
      filter_all: "كافة الأطباء (6)",
      filter_implant: "الزراعة والتجميل",
      filter_ortho: "تقويم الأسنان",
      filter_surgery: "الجراحة والترميم",
      filter_pediatric: "طب أسنان الأطفال",
      doc_osama_badge: "زراعة وتجميل الأسنان",
      doc_osama_name: "د. أسامة الحسين",
      doc_osama_role: "أخصائي زراعة الأسنان والتركيبات التجميلية الرقمية",
      doc_osama_bio: "خبير زراعة الأسنان الفورية وتصميم ابتسامة هوليوود المتناسقة باستخدام أحدث التقنيات الرقمية وأنظمة الزرع العالمية.",
      doc_noor_badge: "تقويم وتجميل الأسنان",
      doc_noor_name: "د. نور نصرالله",
      doc_noor_role: "أخصائية تقويم وتجميل الأسنان والفكين",
      doc_noor_bio: "علاج كافة حالات اعوجاج الأسنان، التقويم الشفاف غير المرئي والتقويم الكلاسيكي للبالغين واليافعين لتحقيق إطباق مثالي.",
      doc_zaid_badge: "جراحة الفم والزراعة",
      doc_zaid_name: "د. زيد",
      doc_zaid_role: "أخصائي جراحة الفم والفكين وزراعة الأسنان المتقدمة",
      doc_zaid_bio: "قلع أضراس العقل المطمورة جراحياً بدون ألم، زراعة العظم ورفع الجيوب الأنفية، وإجراءات الجراحة الفموية الدقيقة.",
      doc_mohammed_badge: "علاج العصب والترميم",
      doc_mohammed_name: "د. محمد",
      doc_mohammed_role: "أخصائي علاج جذور الأسنان والترميم التجميلي المجهري",
      doc_mohammed_bio: "علاج العصب بأحدث الأجهزة الدوارة في جلسة واحدة، والحشوات التجميلية الضوئية الدقيقة لحماية الأسنان الطبيعية.",
      doc_anas_badge: "العدسات التجميلية والفينير",
      doc_anas_name: "د. أنس",
      doc_anas_role: "أخصائي تجميل الأسنان وابتسامة هوليوود والتركيبات الثابتة",
      doc_anas_bio: "تصميم الفينير والزركون واللومينير بأعلى معايير التناسق مع ملامح الوجه وشفافية الأسنان الطبيعية.",
      doc_aya_badge: "طب أسنان الأطفال",
      doc_aya_name: "د. آية أياد",
      doc_aya_role: "طبيبة أسنان متخصصة في طب أسنان الأطفال والتأهيل السلوكي",
      doc_aya_bio: "أسلوب تربوي لطيف لعلاج أسنان الأطفال بدون خوف، حماية الأسنان اللبنية والوقاية بالفلورايد وسدادات الشقوق.",
      btn_book_with_doc: "حجز استشارة مع الطبيب ←",
      location_tag: "موقع العيادة وساعات العمل",
      location_title: "تفضلوا بزيارتنا في عيادة ڤيرونا بكركوك",
      location_desc: "موقع استراتيجي متميز يسهل الوصول إليه، مع مواقف سيارات مريحة وتجهيزات استقبال مريحة ومتكاملة.",
      location_clinic_title: "عيادة ڤيرونا لطب وتجميل وزراعة الاسنان",
      location_clinic_city: "كركوك، العراق",
      loc_address_label: "العنوان:",
      loc_address_val: "كركوك، طريق بغداد / المجمع الطبي التخصصي، بالقرب من مركز المدينة",
      loc_phone_label: "الهاتف والحجوزات:",
      loc_hours_label: "أوقات العمل (نظام الحجوزات المسبقة):",
      hours_days: "السبت - الخميس:",
      hours_friday: "الجمعة:",
      hours_fri_val: "مغلق",
      loc_parking_label: "مواقف السيارات:",
      loc_parking_val: "تتوفر مواقف سيارات مجانية ومريحة لمرضى العيادة ومرافقيهم.",
      btn_open_google_maps: "فتح الاتجاهات المباشرة في خرائط جوجل",
      booking_tag: "حجز استشارة خاصة",
      booking_title: "احجز موعدك المسبق في عيادة ڤيرونا",
      booking_lead: "نعمل بنظام الحجوزات المسبقة لضمان راحتكم الكاملة وتخصيص الوقت الكافي لكل مراجع بدون أي انتظار. املأ البيانات وسنقوم بتأكيد موعدكم فوراً.",
      b_feature_1_title: "دقة تامة في المواعيد",
      b_feature_1_desc: "جلسات محددة بوقت مسبق لراحتكم وبدون تأخير.",
      b_feature_2_title: "أحدث التقنيات بدون ألم",
      b_feature_2_desc: "جهاز البنج الإلكتروني STA وبروتوكول GBT السويسري.",
      b_feature_3_title: "تأكيد مباشر عبر الواتساب",
      b_feature_3_desc: "إشعار فوري وتذكير مسبق قبل الموعد المحدد.",
      prefer_call_text: "تفضل الاتصال المباشر؟",
      form_heading: "بيانات حجز الموعد",
      form_name_label: "اسم المراجع الكامل *",
      form_phone_label: "رقم الهاتف (الواتساب) *",
      form_doctor_label: "اختر الطبيب المعالج / التخصص",
      form_service_label: "الخدمة المطلوبة",
      form_date_label: "اليوم المفضل",
      form_time_label: "الفترة المفضلة",
      time_opt_afternoon: "عصراً (1:00 م - 5:00 م)",
      time_opt_evening: "مساءً (5:00 م - 9:00 م)",
      time_opt_any: "أي وقت متاح (1:00 م - 9:00 م)",
      form_notes_label: "ملاحظات إضافية أو وصف الحالة (اختياري)",
      btn_submit_appointment: "إرسال وتأكيد الحجز عبر الواتساب فوراً",
      form_disclaimer: "🔒 سيتم توجيهكم مباشرة لمحادثة الواتساب الرسمية مع منسق المواعيد بالعيادة. بياناتكم مشفرة ومحمية بالكامل.",
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
      wa_quick_label: "حجز سريع عبر واتساب",
      nav_pathways: "خيارات الرعاية",
      hero_eyebrow: "عيادة ڤيرونا التخصصية • كركوك",
      hero_title_main: "ابتسامة متناسقة وعلاج أسنان متطور بدون ألم بأحدث التقنيات السويسرية",
      hero_lead: "تخلص من رهبة إبر التخدير وألم الأسنان نهائياً. نوفر لك علاجاً محوسباً بجهاز STA بدون ألم وبروتوكول تنظيف GBT السويسري على أيدي 6 أطباء استشاريين، بمواعيد محددة بدون أي انتظار.",
      hero_book_cta: "احجز استشارتك بدون ألم وبدون انتظار",
      hero_cta_reassurance: "✓ تأكيد فوري عبر واتساب • 0 دقائق انتظار • خصوصية تامة",
      hero_assessment_link: "أو أجرِ تقييم الابتسامة المجاني (30 ثانية)",
      top_google_trust: "تقييم موثق رسمياً على خرائط جوجل (121 مراجعاً)",
      top_trust_review_quote: '"ما حسيت بأي ألم مع جهاز البنج الإلكتروني STA.. أفضل تجربة عيادة أسنان بكركوك" — أحمد الكركوكي (مراجع موثق)',
      top_trust_badge_sta: "تخدير محوسب بدون ألم (STA)",
      top_trust_badge_gbt: "تنظيف سويسري معتمد (EMS GBT)",
      top_trust_badge_zero_wait: "0 دقائق انتظار (مواعيد مسبقة)",
      ladder_tag: "بوابات الرعاية السريعة",
      ladder_title: "كيف يمكننا مساعدتك اليوم؟ اختر الباب الأنسب لاحتياجك",
      ladder_subtitle: "سواء كنت ترغب بتقييم أولي مجاني، أو علاج ألم عاجل، أو استشارة مع طبيب استشاري، نوفر لك خيارات مريحة ومباشرة.",
      card_assessment_tag: "تقييم مجاني في 30 ثانية",
      card_assessment_title: "فحص الابتسامة وحالة الأسنان الرقمي",
      card_assessment_desc: "أجب عن 3 أسئلة سريعة لمعرفة خطة العلاج التقديرية والتكلفة المناسبة لحالتك مع توصية الطبيب الاستشاري.",
      btn_start_assessment: "ابدأ التقييم الفوري مجاناً ←",
      card_emergency_tag: "ألم عاجل أو طارئ",
      card_emergency_title: "خط الطوارئ والألم السريع عبر واتساب",
      card_emergency_desc: "هل تعاني من ألم أسنان مفاجئ أو كسر في الحشوة؟ تواصل مباشرة مع فريق الطوارئ لتوجيهك بدون تأخير.",
      btn_emergency_chat: "تواصل مع طوارئ الأسنان فوراً ⚡",
      card_guide_tag: "دليل رقمي مجاني",
      card_guide_title: "دليل ڤيرونا الشامل للابتسامة والعناية",
      card_guide_desc: "احصل على نسختك المجانية من الدليل الطبي الإرشادي للتعرف على أسرار بياض الأسنان وتقنيات التخدير بدون ألم.",
      btn_get_guide: "احصل على الدليل المجاني الآن 📥",
      card_direct_tag: "حجز موعد مسبق",
      card_direct_title: "حجز استشارة شاملة مع استشاري",
      card_direct_desc: "اختر طبيبك المفضل وموعدك الملائم بدون أي وقت ضائع في صالة الانتظار.",
      btn_book_direct_path: "الانتقال إلى استمارة الحجز 📅",
      cta_transformation_title: "هل ترغب بالحصول على نتيجة متناسقة وطبيعية لابتسامتك؟",
      cta_transformation_sub: "استشر أطباءنا الاستشاريين واكتشف كيف يمكن لتصميم الابتسامة الرقمي تغيير مظهر أسنانك بأمان وبدون ألم.",
      btn_transformation_cta: "احجز فحص الابتسامة الشامل الآن ←",
      btn_slider_assess: "تقييم مجاني (30 ثانية)",
      assess_modal_title: "تقييم الابتسامة وعلاج الأسنان الرقمي (30 ثانية)",
      assess_step1_title: "الخطوة 1: ما هو هدفك الأساسي لأسنانك؟",
      opt_goal_implant: "زراعة أسنان فورية وتعويض الأسنان المفقودة",
      opt_goal_smile: "ابتسامة هوليوود وتجميل وتبييض الأسنان",
      opt_goal_pain: "علاج عصب الأسنان والتخلص من الألم",
      opt_goal_gbt: "تنظيف الأسنان وإزالة الجير والتصبغات بجهاز GBT",
      opt_goal_ortho: "تقويم الأسنان وتعديل اعوجاج الفكين",
      assess_step2_title: "الخطوة 2: ما هو أكثر ما يهمك أثناء العلاج؟",
      opt_concern_pain: "تجنب ألم الإبر والتخدير (نوفر جهاز STA بدون ألم)",
      opt_concern_natural: "مظهر جمالي طبيعي ومتناسق مع ملامح الوجه",
      opt_concern_time: "سرعة الإنجاز ودقة المواعيد بدون انتظار",
      opt_concern_cost: "معرفة الخطة العلاجية والخيارات التقديرية مسبقاً",
      assess_step3_title: "الخطوة 3: أين تود استلام تقرير تقييم حالتك المجاني؟",
      btn_submit_assessment: "إرسال التقييم واستلام استشارة الطبيب مجاناً عبر واتساب",
      assess_disclaimer: "🔒 يتم إرسال إجاباتك مباشرة إلى الفريق الطبي الاستشاري في عيادة ڤيرونا لتقديم تقرير تقديري مجاني وسري تماماً.",
      sticky_call: "اتصال",
      sticky_whatsapp: "واتساب",
      sticky_assess: "تقييم مجاني",
      sticky_book: "حجز موعد",
      doc_opt_any: "أي طبيب متاح حسب الحالة (استشارة عامة)",
      doc_opt_osama: "د. أسامة الحسين - زراعة وتجميل الأسنان",
      doc_opt_noor: "د. نور نصرالله - تقويم وتجميل الأسنان",
      doc_opt_zaid: "د. زيد - جراحة الفم والفكين والزراعة",
      doc_opt_mohammed: "د. محمد - علاج العصب والترميم المجهري",
      doc_opt_anas: "د. أنس - ابتسامة هوليوود والعدسات",
      doc_opt_aya: "د. آية أياد - طب أسنان الأطفال",
      serv_opt_consult: "فحص واستشارة أولية شاملة",
      serv_opt_sta: "جلسة علاج بجهاز البنج الإلكتروني STA",
      serv_opt_gbt: "تنظيف الأسنان ببروتوكول GBT السويسري (EMS AIRFLOW®)",
      serv_opt_implant: "زراعة الأسنان الرقمية الفورية",
      serv_opt_smile: "ابتسامة هوليوود والعدسات الخزفية",
      serv_opt_ortho: "تقويم الأسنان (معدني أو شفاف Invisalign)",
      serv_opt_root: "علاج العصب والحشوات التجميلية",
      serv_opt_pedia: "معالجة أسنان الأطفال والوقاية السلوكية",
    },

    en: {
      brand_name: "Verona",
      brand_tagline: "Dental Care, Aesthetics & Implantology",
      top_google_rating: "on Google Maps",
      top_reviews_count: "verified reviews",
      nav_home: "Home",
      nav_tech: "Advanced Tech",
      nav_reviews: "Reviews",
      nav_staff: "Medical Staff",
      nav_location: "Location",
      nav_book_btn: "Schedule Visit",
      hero_verified_badge: "Verified on Google Maps (121 Reviews)",
      hero_title_sub: "Modern Dental Excellence in Kirkuk",
      hero_title_main: "Verona Dental Care, Aesthetics & Implants",
      hero_lead: "Your premier destination for modern digital dentistry in Kirkuk. Experience completely painless care with the STA Computerized Wand Anesthesia system and Swiss GBT AIRFLOW® hygiene technology, backed by 6 senior dental consultants and a strictly timed pre-booking system.",
      hero_book_cta: "Schedule Consultation",
      hero_whatsapp_cta: "Chat on WhatsApp",
      stat_google_rate: "Google Rating",
      stat_reviews_count: "Verified Reviews",
      stat_consultants: "Specialist Doctors",
      stat_painless: "Pain-Free Care",
      hero_sta_pill_title: "STA Computerized Anesthesia",
      hero_sta_pill_sub: "Painless single-tooth numbing without facial numbness",
      hero_gbt_pill_title: "Swiss GBT Hygiene Protocol",
      hero_gbt_pill_sub: "EMS AIRFLOW® Prophylaxis Master",
      tech_tag: "Clinical Innovation",
      tech_title: "State-of-the-Art Technology for Pain-Free Comfort",
      tech_desc: "Verona Dental Clinic integrates the world's finest medical equipment to turn your dental visit into a relaxing, anxiety-free journey.",
      tech_sta_tag: "Painless Computerized Anesthesia",
      tech_sta_name: "Milestone STA Single Tooth Anesthesia System",
      tech_sta_quote: '"No need for general anesthesia, we eliminated pain with the electronic STA system! 💪✨"',
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
      btn_book_gbt_session: "Book Swiss GBT Session →",
      reviews_tag: "Trusted by Hundreds of Patients",
      reviews_title: "4.9-Star Verified Rating on Google Maps",
      reviews_desc: "We take immense pride in our patients' satisfaction, high clinical precision, and warm patient experience in Kirkuk.",
      google_map_verified: "Official Google Rating",
      reviews_word: "reviews",
      google_banner_text: "Verona Dental Clinic in Kirkuk holds top patient satisfaction scores for sterile clinical hygiene, consultant expertise, and punctual appointment scheduling.",
      btn_view_google_reviews: "View All Reviews on Google",
      rev_name_1: "Ahmed Al-Kirkuki",
      rev_date_1: "1 month ago",
      rev_text_1: '"A truly smooth and painless dental implant procedure with Dr. Osama Al-Hussein. The STA computerized anesthesia device was incredible—I felt no prick whatsoever! 10/10 cleanliness."',
      rev_name_2: "Sara Khalil",
      rev_date_2: "2 weeks ago",
      rev_text_2: '"I had my teeth cleaned with the new Swiss EMS AIRFLOW GBT system. Worlds apart from traditional scraping! Warm water, no discomfort, and sparkling results."',
      rev_name_3: "Rebin Qader",
      rev_date_3: "3 weeks ago",
      rev_text_3: '"The pre-booking system is strictly respected—you are attended right on time without wait times. Welcoming staff and first-class professionalism."',
      rev_name_4: "Dr. Hadeel Al-Bayati",
      rev_date_4: "1 month ago",
      rev_text_4: '"I got zirconia crowns and aesthetic veneers. The outcome is remarkably natural, matching real tooth translucency without any artificial bulk. True mastery."',
      rev_name_5: "Shwan Mohammed",
      rev_date_5: "2 months ago",
      rev_text_5: '"Complex root canal treatment with Dr. Mohammed completed in a single session without any pain. Modern equipment, digital X-rays, and thorough explanation."',
      rev_name_6: "Maryam Al-Jubouri",
      rev_date_6: "3 weeks ago",
      rev_text_6: '"Took my daughter to Dr. Aya for pediatric care. Her gentle, warm approach made my child feel completely safe without fear or tears. Thank you Verona!"',
      rev_name_7: "Omar Tariq",
      rev_date_7: "1 month ago",
      rev_text_7: '"Surgical extraction of an impacted wisdom tooth with Dr. Zaid. Felt nothing, completed in record time with zero postoperative swelling. A trustworthy team."',
      rev_name_8: "Zhiyan Ali",
      rev_date_8: "2 weeks ago",
      rev_text_8: '"Clear aligner orthodontic treatment with Dr. Noor. Noticed huge improvements within just 4 months. Exceptional clinic care and modern atmosphere."',
      rev_name_9: "Mustafa Al-Nuaimi",
      rev_date_9: "2 months ago",
      rev_text_9: '"My highest priority was hygiene. Medical-grade autoclaves and opening sealed instrument packages in front of the patient provides absolute peace of mind."',
      rev_name_10: "Dilan Barzan",
      rev_date_10: "1 month ago",
      rev_text_10: '"Hollywood smile design with Dr. Anas—looks so natural and elegant. Everyone keeps asking where I got it done! Warmest appreciation to the entire team."',
      rev_name_11: "Karrar Haider",
      rev_date_11: "3 weeks ago",
      rev_text_11: '"Booked via WhatsApp and received a confirmed slot within minutes. Punctual entry, clear pricing, and caring post-treatment follow-up. Highly recommended."',
      rev_name_12: "Noor Al-Huda",
      rev_date_12: "4 weeks ago",
      rev_text_12: '"I had severe needle phobia, but their STA computerized injection changed everything! Completely painless and only numbed the tooth without facial droop."',
      verified_patient: "Verified Patient via Google Maps",
      smile_tag: "Clinical Smile Results",
      smile_title: "Digital Smile Transformation at Verona",
      smile_sub: "Drag the slider to compare the patient smile before treatment with the harmonic aesthetic result following restorative and implant care.",
      label_after: "After Treatment",
      label_before: "Before Treatment",
      preset_before: "View Before (100%)",
      preset_split: "Split View (50/50)",
      preset_after: "View After (100%)",
      staff_tag: "Distinguished Medical Team",
      staff_title: "Specialist Dental Consultants at Verona",
      staff_desc: "Our multidisciplinary clinic unites 6 specialist consultants covering implants, orthodontics, surgery, endodontics, cosmetic veneers, and pediatric dentistry under one roof.",
      filter_all: "All Specialists (6)",
      filter_implant: "Implants & Aesthetics",
      filter_ortho: "Orthodontics",
      filter_surgery: "Oral Surgery",
      filter_pediatric: "Pediatric Dentistry",
      doc_osama_badge: "Implants & Aesthetics",
      doc_osama_name: "Dr. Osama Al-Hussein",
      doc_osama_role: "Specialist in Implantology & Digital Restorative Dentistry",
      doc_osama_bio: "Expert in immediate dental implant placement and digital Hollywood smile design with leading international implant systems.",
      doc_noor_badge: "Orthodontics & Aesthetics",
      doc_noor_name: "Dr. Noor Nasrallah",
      doc_noor_role: "Specialist in Dentofacial Orthodontics & Alignment",
      doc_noor_bio: "Comprehensive malocclusion care, clear aligners (Invisalign), and modern aesthetic braces for adults and adolescents.",
      doc_zaid_badge: "Oral Surgery & Implants",
      doc_zaid_name: "Dr. Zaid",
      doc_zaid_role: "Specialist in Oral & Maxillofacial Surgery and Implants",
      doc_zaid_bio: "Painless surgical extraction of impacted wisdom teeth, bone grafting, sinus lifts, and advanced surgical implantology.",
      doc_mohammed_badge: "Endodontics & Restorations",
      doc_mohammed_name: "Dr. Mohammed",
      doc_mohammed_role: "Specialist in Microscopic Endodontics & Tooth Preservation",
      doc_mohammed_bio: "Advanced single-visit rotary root canal treatments and microscopic composite aesthetic restorations to preserve natural teeth.",
      doc_anas_badge: "Cosmetic Veneers",
      doc_anas_name: "Dr. Anas",
      doc_anas_role: "Specialist in Cosmetic Dentistry & Hollywood Smile Design",
      doc_anas_bio: "Custom ultra-thin porcelain veneers, zirconia crowns, and aesthetic laminates tailored to your unique facial aesthetics.",
      doc_aya_badge: "Pediatric Dentistry",
      doc_aya_name: "Dr. Aya Ayad",
      doc_aya_role: "Specialist in Pediatric Dentistry & Child Behavioral Care",
      doc_aya_bio: "Gentle child-friendly approach for stress-free dental visits, preventive fluoride sealants, and primary tooth restorations.",
      btn_book_with_doc: "Schedule With Doctor →",
      location_tag: "Clinic Location & Hours",
      location_title: "Visit Verona Dental Clinic in Kirkuk",
      location_desc: "Centrally located with convenient dedicated parking and a welcoming, comfortable reception lounge.",
      location_clinic_title: "Verona Dental Care, Aesthetics & Implants",
      location_clinic_city: "Kirkuk, Iraq",
      loc_address_label: "Address:",
      loc_address_val: "Kirkuk, Baghdad Road / Specialized Medical Complex, Near City Center",
      loc_phone_label: "Phone & Appointments:",
      loc_hours_label: "Working Hours (Pre-Booking System):",
      hours_days: "Saturday - Thursday:",
      hours_friday: "Friday:",
      hours_fri_val: "Closed",
      loc_parking_label: "Patient Parking:",
      loc_parking_val: "Free, spacious parking available right at the clinic entrance.",
      btn_open_google_maps: "Get Directions on Google Maps",
      booking_tag: "Specialized Consultation",
      booking_title: "Schedule Your Appointment at Verona",
      booking_lead: "We operate on a strictly managed pre-booking schedule to guarantee personalized attention with zero waiting times. Fill in your details below for instant confirmation.",
      b_feature_1_title: "Strict Punctuality",
      b_feature_1_desc: "Reserved timeslots with zero lobby wait time.",
      b_feature_2_title: "Pain-Free Innovation",
      b_feature_2_desc: "STA computerized anesthesia and Swiss GBT cleaning.",
      b_feature_3_title: "Instant WhatsApp Confirmation",
      b_feature_3_desc: "Direct appointment ticket with SMS & WhatsApp reminders.",
      prefer_call_text: "Prefer a direct telephone call?",
      form_heading: "Appointment Details",
      form_name_label: "Patient Full Name *",
      form_phone_label: "Phone Number (WhatsApp) *",
      form_doctor_label: "Select Doctor / Specialty",
      form_service_label: "Required Treatment",
      form_date_label: "Preferred Date",
      form_time_label: "Preferred Timeslot",
      time_opt_afternoon: "Afternoon (1:00 PM - 5:00 PM)",
      time_opt_evening: "Evening (5:00 PM - 9:00 PM)",
      time_opt_any: "Any available time (1:00 PM - 9:00 PM)",
      form_notes_label: "Additional Notes or Symptoms (Optional)",
      btn_submit_appointment: "Confirm & Send via WhatsApp Now",
      form_disclaimer: "🔒 You will be connected directly with our official clinic appointment coordinator on WhatsApp.",
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
      wa_quick_label: "Quick WhatsApp Booking",
      nav_pathways: "Care Pathways",
      hero_eyebrow: "Verona Dental Clinic • Kirkuk",
      hero_title_main: "Get Your Flawless, Pain-Free Smile With Swiss Dental Precision",
      hero_lead: "Eliminate dental pain and needle anxiety once and for all. Experience computer-controlled STA anesthesia and Swiss GBT hygiene delivered by 6 senior dental consultants with zero waiting time.",
      hero_book_cta: "Book Your Painless Consultation",
      hero_cta_reassurance: "✓ Instant WhatsApp confirmation • Zero waiting • Full confidentiality",
      hero_assessment_link: "Or take the Free 30-Sec Smile Assessment",
      top_google_trust: "Officially verified rating on Google Maps (121 reviews)",
      top_trust_review_quote: '"I felt zero pain with the electronic STA anesthesia.. best dental experience in Kirkuk!" — Ahmed Al-Kirkuki (Verified Patient)',
      top_trust_badge_sta: "Painless STA Anesthesia",
      top_trust_badge_gbt: "Swiss Certified EMS GBT",
      top_trust_badge_zero_wait: "Zero Waiting (Strict Schedule)",
      ladder_tag: "Care Pathways",
      ladder_title: "How Can We Help You Today? Choose Your Ideal Starting Point",
      ladder_subtitle: "Whether you need a free initial self-assessment, urgent toothache relief, or a direct specialist consultation, we have the right path for you.",
      card_assessment_tag: "Free 30-Sec Assessment",
      card_assessment_title: "Digital Smile & Dental Self-Assessment",
      card_assessment_desc: "Answer 3 quick questions to discover your personalized treatment options, estimated plan, and doctor's advice.",
      btn_start_assessment: "Start Free Assessment →",
      card_emergency_tag: "Urgent Dental Pain",
      card_emergency_title: "Direct Emergency Toothache Support",
      card_emergency_desc: "Experiencing acute toothache or broken restoration? Chat instantly with our clinic team for immediate priority assistance.",
      btn_emergency_chat: "Chat with Emergency Support ⚡",
      card_guide_tag: "Free Patient Guide",
      card_guide_title: "The Comprehensive Guide to Pain-Free Smile Care",
      card_guide_desc: "Download your complimentary digital guide explaining whitening secrets, veneer types, and needle-free anesthesia.",
      btn_get_guide: "Get Free Guide Now 📥",
      card_direct_tag: "Direct Consultation",
      card_direct_title: "Schedule In-Clinic Consultation",
      card_direct_desc: "Select your preferred specialist and exact appointment slot with guaranteed zero waiting time.",
      btn_book_direct_path: "Go to Booking Form 📅",
      cta_transformation_title: "Ready for a Naturally Balanced Smile Transformation?",
      cta_transformation_sub: "Consult our board specialists and explore how digital smile design can comfortably reshape your teeth with zero pain.",
      btn_transformation_cta: "Book Your Smile Consultation Now →",
      btn_slider_assess: "Free Assessment (30s)",
      assess_modal_title: "Free Digital Smile & Dental Assessment (30s)",
      assess_step1_title: "Step 1: What is your primary dental goal?",
      opt_goal_implant: "Dental Implants & Missing Teeth Replacement",
      opt_goal_smile: "Hollywood Smile, Veneers & Whitening",
      opt_goal_pain: "Root Canal Therapy & Toothache Relief",
      opt_goal_gbt: "Deep Cleaning & Stain Removal with Swiss GBT",
      opt_goal_ortho: "Orthodontics & Teeth Alignment",
      assess_step2_title: "Step 2: What matters most during your treatment?",
      opt_concern_pain: "Completely painless treatment (Zero needle pain via STA)",
      opt_concern_natural: "Natural-looking aesthetic results matching my face",
      opt_concern_time: "Fast completion with strictly zero waiting time",
      opt_concern_cost: "Understanding estimated treatment options & budget",
      assess_step3_title: "Step 3: Where should we send your free assessment summary?",
      btn_submit_assessment: "Send Assessment & Receive Free Advice on WhatsApp",
      assess_disclaimer: "🔒 Your responses are sent directly to Verona Dental Clinic's consultants for a complimentary, confidential evaluation.",
      sticky_call: "Call",
      sticky_whatsapp: "WhatsApp",
      sticky_assess: "Assessment",
      sticky_book: "Book Visit",
      doc_opt_any: "Any available doctor (General consultation)",
      doc_opt_osama: "Dr. Osama Al-Hussein - Implants & Aesthetics",
      doc_opt_noor: "Dr. Noor Nasrallah - Orthodontics & Aesthetics",
      doc_opt_zaid: "Dr. Zaid - Oral & Maxillofacial Surgery",
      doc_opt_mohammed: "Dr. Mohammed - Endodontics & Micro-Restoration",
      doc_opt_anas: "Dr. Anas - Hollywood Smile & Veneers",
      doc_opt_aya: "Dr. Aya Ayad - Pediatric Dentistry",
      serv_opt_consult: "Comprehensive Initial Consultation",
      serv_opt_sta: "STA Painless Computerized Anesthesia Session",
      serv_opt_gbt: "Swiss GBT Hygiene & Biofilm Removal (EMS AIRFLOW®)",
      serv_opt_implant: "Immediate Digital Dental Implants",
      serv_opt_smile: "Hollywood Smile & Porcelain Veneers",
      serv_opt_ortho: "Orthodontics (Metal Braces or Clear Aligners)",
      serv_opt_root: "Root Canal Therapy & Cosmetic Fillings",
      serv_opt_pedia: "Pediatric Dental Care & Prevention",
    },

    ku: {
      brand_name: "کلینیکی ڤیرۆنا",
      brand_tagline: "بۆ پزیشکی و جوانکاری و چاندنی ددان",
      top_google_rating: "لە نەخشەی گووگڵ",
      top_reviews_count: "هەڵسەنگاندنی پەسەندکراو",
      nav_home: "سەرەکی",
      nav_tech: "تەکنەلۆژیای پێشکەوتوو",
      nav_reviews: "هەڵسەنگاندنەکان",
      nav_staff: "تیمی پزیشکی",
      nav_location: "شوێن",
      nav_book_btn: "وەرگرتنی نۆرە",
      hero_verified_badge: "پلەی پەسەندکراو لە گووگڵ مەپس (121 هەڵسەنگاندن)",
      hero_title_sub: "چاودێری سەردەمیانەی ددان لە کەرکووک",
      hero_title_main: "کلینیکی ڤیرۆنا بۆ جوانکاری و چاندنی ددان",
      hero_lead: "یەکەمین مەکۆی پزیشکی ددانی پێشکەوتوو لە کەرکووک. ئەزموونێکی بێ ئازار بە ئامێری بەنجی ئەلیکترۆنی STA و سیستەمی پاککردنەوەی سویسری GBT، بە سەرپەرشتی 6 پزیشکی پسپۆڕ بە سیستەمی نۆرەی پێشوەختە بێ چاوەڕوانی.",
      hero_book_cta: "وەرگرتنی نۆرەی پێشوەختە",
      hero_whatsapp_cta: "پەیوەندی لە ڕێگەی واتسئەپ",
      stat_google_rate: "هەڵسەنگاندنی گووگڵ",
      stat_reviews_count: "پێداچوونەوەی ڕاستەقینە",
      stat_consultants: "پزیشکی پسپۆڕ",
      stat_painless: "بێ ئازار (STA و GBT)",
      hero_sta_pill_title: "بەنجی ئەلیکترۆنی زیرەک STA",
      hero_sta_pill_sub: "تەزاندنی تەنیا یەک ددان بێ دەرزی و سڕبوونی دەم و چاو",
      hero_gbt_pill_title: "پرۆتۆکۆلی پاککردنەوەی سویسری GBT",
      hero_gbt_pill_sub: "ئامێری EMS AIRFLOW® Prophylaxis Master",
      tech_tag: "پێشەنگی تەکنەلۆژیای پزیشکی",
      tech_title: "تەکنەلۆژیای بێوێنە بۆ ئارامی و بەبێ ئازار",
      tech_desc: "کلینیکی ڤیرۆنا پێشکەوتووترین ئامێرە جیهانییەکان بەکاردەهێنێت تا سەردانی پزیشکی ددان ببێتە ئەزموونێکی ئارامبەخش.",
      tech_sta_tag: "تەزاندنی کۆمپیوتەری بێ ئازار",
      tech_sta_name: "ئامێری بەنجی ئەلیکترۆنی STA",
      tech_sta_quote: '"پێویست بە بەنجی گشتی ناکات، بە ئامێری بەنجی ئەلیکترۆنی چارەسەرمان کرد 😍💪"',
      tech_sta_desc: "سیستەمی پێشکەوتووی بەنجی کۆمپیوتەری لە کۆمپانیای Milestone Scientificی ئەمریکی. کۆنترۆڵی پەستان و ڕژانی دەرمانی بەنج دەکات دڵۆپ بە دڵۆپ، تەنها ئەو ددانەی پێویستە دەسڕێت بێ ئەوەی لێو و زمان و دەموچاو سڕ ببن.",
      tech_sta_b1: "سڕکردنی دەستبەجێ تایبەت بە ددانی مەبەست",
      tech_sta_b2: "هیچ سڕبوونێکی لێو یان دەموچاو نامێنێت دوای دانیشتنەکە",
      tech_sta_b3: "زۆر گونجاوە بۆ منداڵان و ئەو کەسانەی لە دەرزی دەترسن",
      btn_book_device_session: "نۆرەی چارەسەری بێ ئازار دابنێ ←",
      tech_gbt_tag: "پرۆتۆکۆلی پەسەندکراوی سویسری",
      tech_gbt_name: "تەکنەلۆژیای GBT: پاککردنەوەی پێشکەوتووی پووک و ددان",
      tech_gbt_quote: '"ئامێری پەسەندکراوی ئەم پرۆتۆکۆلە لە ئاستی جیهاندا AIRFLOW® Prophylaxis Masterە لە کۆمپانیای EMS Dentalی سویسری، کە نوێترین وەرچەرخانە لە پاککردنەوەی ددان."',
      tech_gbt_desc: "پرۆتۆکۆلی سویسری Guided Biofilm Therapy باشترین ستانداردە بۆ پاککردنەوە و پاراستنی ددان. پەڵە و بەکتریا زیانبەخشەکان لادەبات بە ئاوی شلەتێن بێ ئەوەی زیان بە مینای ددان و ڕووکەش و چاندنەکان بگەیەنێت.",
      tech_gbt_b1: "پاککردنەوەی زۆر نەرم بەبێ هەستیاری یان خوێنبەربوونی پووک",
      tech_gbt_b2: "پارێزگاری لە پێکەنینی هۆڵیوود و چاندنی ددان و تەل دەکات",
      tech_gbt_b3: "جێبەجێکردنی ستانداردە بەرزەکانی سویسرا",
      btn_book_gbt_session: "نۆرەی پاککردنەوەی GBT دابنێ ←",
      reviews_tag: "متمانەی سەدان نەخۆش لە کەرکووک",
      reviews_title: "هەڵسەنگاندنی 4.9 ئەستێرە لە نەخشەی گووگڵ",
      reviews_desc: "شانازی دەکەین بە متمانەی سەردانکەرانمان بۆ چاودێری و ئەنجامی وردی تیمی پزیشکیمان.",
      google_map_verified: "هەڵسەنگاندنی فەرمی گووگڵ",
      reviews_word: "هەڵسەنگاندن",
      google_banner_text: "کلینیکی ڤیرۆنا لە کەرکووک بەرزترین پلەی ڕەزامەندی نەخۆشەکانی بەدەستهێناوە بۆ پاکوخاوێنی و شارەزایی پزیشکان و وردی لە کاتدا.",
      btn_view_google_reviews: "بینینی تەواوی هەڵسەنگاندنەکان لە گووگڵ",
      rev_name_1: "ئەحمەد کەرکووکی",
      rev_date_1: "مانگێک لەمەوبەر",
      rev_text_1: '"ئەزموونێکی زۆر ئارام بوو، چاندنی ددانم لای د. ئوسامە ئەلحوسێن ئەنجامدا. ئامێری بەنجی ئەلیکترۆنی STA بێ وێنە بوو، هیچ هەستم بە ئازاری دەرزی نەکرد! پاکوخاوێنی 10/10."',
      rev_name_2: "سارە خەلیل",
      rev_date_2: "دوو هەفتە لەمەوبەر",
      rev_text_2: '"ددانم بە ئامێری AIRFLOW GBT سویسری پاککردەوە، زۆر جیاواز بوو لە ڕێگای کۆن! ئاوی گەرم و بێ هیچ هەستیارییەک. باشترین کلینیکی کەرکووک."',
      rev_name_3: "ڕێبین قادر",
      rev_date_3: "سێ هەفتە لەمەوبەر",
      rev_text_3: '"سیستەمی نۆرەی پێشوەختەیان بێ وێنەیە و لە کاتی دیاریکراوی خۆتدا دەچیتە ژوورەوە بێ چاوەڕوانی. مامەڵەی کارمەندان زۆر بەڕێزانەیە."',
      rev_name_4: "د. هەدیل بەیاتی",
      rev_date_4: "مانگێک لەمەوبەر",
      rev_text_4: '"تاجی زێرکۆن و ڤینێرم لێرە دانا، ئەنجامەکەی زۆر سروشتی و بێ کەموکوڕییە، تەواو هاوشێوەی ددانی ڕاستەقینەیە بەبێ زەقبوون."',
      rev_name_5: "شوان محەممەد",
      rev_date_5: "دوو مانگ لەمەوبەر",
      rev_text_5: '"دەماربڕینی ددانێکی ئاڵۆز لای د. محەممەد لە یەک دانیشتندا و بێ هیچ ئازارێک. ئامێری ورد و ڕوونکردنەوەی تەواو پێش دەستپێکردن."',
      rev_name_6: "مەریەم جبووری",
      rev_date_6: "سێ هەفتە لەمەوبەر",
      rev_text_6: '"کچەکەم بردە لای دکتۆرە ئایە بۆ ددانی منداڵان، مامەڵەی هێندە نەرم و میهرەبان بوو کچەکەم بێ گریان و ترس چارەسەرکرا. سوپاس ڤیرۆنا."',
      rev_name_7: "عومەر تاریق",
      rev_date_7: "مانگێک لەمەوبەر",
      rev_text_7: '"کێشانی نەشتەرگەری ددانی ژیری لای د. زەید بەبێ ئازار لە کاتێکی کەمدا تەواو بوو بێ هیچ ئاوسانێک دوای چارەسەر."',
      rev_name_8: "ژیان عەلی",
      rev_date_8: "دوو هەفتە لەمەوبەر",
      rev_text_8: '"ڕێکخستنەوەی دانەکانم بە تەلی شەفاف لای دکتۆرە نور، لە ٤ مانگدا گۆڕانکاری گەورەم بینی. مامەڵە و خزمەتگوزاری سەردەمیانە و نموونەییە."',
      rev_name_9: "مستەفا نەعیمی",
      rev_date_9: "دوو مانگ لەمەوبەر",
      rev_text_9: '"گرنگترین شت بۆ من پاکوخاوێنی بوو. ئامێری ستەریلیزەیشن و کردنەوەی کەلوپەلەکان لە بەردەم نەخۆشدا متمانەی تەواو دەبەخشێت."',
      rev_name_10: "دیلان بەرزان",
      rev_date_10: "مانگێک لەمەوبەر",
      rev_text_10: '"دیزاینی زەردەخەنەی هۆلیوود لای د. ئەنەس، بەڕاستی زۆر سروشتی و بێ کێشەیە. هەمووان دەپرسن لە کوێ چاکم کردووە! سوپاس بۆ ماندووبوونتان."',
      rev_name_11: "کەڕاڕ حەیدەر",
      rev_date_11: "سێ هەفتە لەمەوبەر",
      rev_text_11: '"لە واتسئەپەوە نۆرەم گرت و لە چەند خولەکێکدا وەڵامدرامەوە. چوونە ژوورەوە بە تەواوی لە کاتی خۆیدا و بەدواداچوونی دڵسۆزانە."',
      rev_name_12: "نوور ئەلهودا",
      rev_date_12: "چوار هەفتە لەمەوبەر",
      rev_text_12: '"ترسی زۆرم لە دەرزی بەنج هەبوو، بەڵام بەنجی ئەلیکترۆنی STA لەم کلینیکە بیرکردنەوەمی گۆڕی! هیچ هەستم پێی نەکرد."',
      verified_patient: "نەخۆشی پەسەندکراو لە ڕێگەی نەخشەی گووگڵ",
      smile_tag: "ئەنجامی ڕاستەقینە",
      smile_title: "گۆڕانکاری دیجیتاڵی پێکەنین لە کلینیکی ڤیرۆنا",
      smile_sub: "دەستەک بەکاربهێنە بۆ بینینی جیاوازی ددان پێش چارەسەر و پاش چارەسەرکردن و چاندنی ددان.",
      label_after: "پاش چارەسەر (After)",
      label_before: "پێش چارەسەر (Before)",
      preset_before: "پێش چارەسەر 100%",
      preset_split: "نیوە بە نیوە 50/50",
      preset_after: "پاش چارەسەر 100%",
      staff_tag: "پزیشکانی شارەزا و پسپۆڕ",
      staff_title: "تیمی پزیشکی پسپۆڕی کلینیکی ڤیرۆنا",
      staff_desc: "تیمەکەمان 6 پزیشکی ڕاوێژکار و پسپۆڕ لەخۆدەگرێت لە تەواوی بوارەکانی چاندن، ڕێککردنەوە، نەشتەرگەری و پزیشکی ددانی منداڵان.",
      filter_all: "تەواوی پزیشکان (6)",
      filter_implant: "چاندن و جوانکاری",
      filter_ortho: "تەلی ددان",
      filter_surgery: "نەشتەرگەری و دەمار",
      filter_pediatric: "ددانی منداڵان",
      doc_osama_badge: "چاندن و جوانکاری ددان",
      doc_osama_name: "د. ئوسامە ئەلحوسێن",
      doc_osama_role: "پسپۆڕی چاندنی ددان و جوانکاری دیجیتاڵی",
      doc_osama_bio: "شارەزا لە چاندنی دەستبەجێی ددان و نەخشاندنی پێکەنینی هۆڵیوود بە نوێترین تەکنەلۆژیای جیهانی.",
      doc_noor_badge: "ڕێککردنەوە و جوانکاری ددان",
      doc_noor_name: "د. نوور نەسروڵڵا",
      doc_noor_role: "پسپۆڕی تەلی ددان و ڕێککردنەوەی شەویلگە",
      doc_noor_bio: "چارەسەری هەموو جۆرەکانی ناڕێکی ددان بە تەلی نەبینراو و ئاسایی بۆ گەورە و هەرزەکاران.",
      doc_zaid_badge: "نەشتەرگەری دەم و چاندن",
      doc_zaid_name: "د. زەید",
      doc_zaid_role: "پسپۆڕی نەشتەرگەری دەم و شەویلگە و چاندنی پێشکەوتوو",
      doc_zaid_bio: "کێشانی ددانی ژیری بەبێ ئازار، چاندنی ئێسک و بەرزکردنەوەی جیوبی لووت و نەشتەرگەری دەم.",
      doc_mohammed_badge: "دەماربڕین و پڕکردنەوە",
      doc_mohammed_name: "د. محەممەد",
      doc_mohammed_role: "پسپۆڕی دەماربڕین و پڕکردنەوەی جوانکاری بە وردبین",
      doc_mohammed_bio: "دەماربڕینی ددان لە یەک دانیشتندا بە ئامێری خێرا و پڕکردنەوەی پێشکەوتوو بۆ پاراستنی ددانی سروشتی.",
      doc_anas_badge: "ڕووکەش و ڤینێر",
      doc_anas_name: "د. ئەنەس",
      doc_anas_role: "پسپۆڕی جوانکاری ددان و پێکەنینی هۆڵیوود",
      doc_anas_bio: "نەخشاندنی ڤینێر و زێرکۆن بە شێوازێکی سروشتی و گونجاو لەگەڵ ڕووخساردا.",
      doc_aya_badge: "ددانی منداڵان",
      doc_aya_name: "د. ئایە ئەیاد",
      doc_aya_role: "پزیشکی پسپۆڕی ددانی منداڵان و مامەڵەی نەرم",
      doc_aya_bio: "چارەسەرکردنی ددانی منداڵان بەبێ ترس و دڵەڕاوکێ، پاراستنی ددانە شیرییەکان و بەکارهێنانی فلۆراید.",
      btn_book_with_doc: "وەرگرتنی نۆرە لای ئەم پزیشکە ←",
      location_tag: "شوێنی کلینیک و کاتەکانی کارکردن",
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
      hours_fri_val: "داخراوە",
      loc_parking_label: "شوێنی ئۆتۆمبێل:",
      loc_parking_val: "شوێنی بێبەرامبەر و فراوانی ئۆتۆمبێل لە بەردەم کلینیک دابینکراوە.",
      btn_open_google_maps: "کردنەوەی ئاراستەکان لە نەخشەی گووگڵ",
      booking_tag: "وەرگرتنی نۆرەی تایبەت",
      booking_title: "نۆرەی پێشوەختە وەربگرە لە کلینیکی ڤیرۆنا",
      booking_lead: "بە سیستەمی نۆرەی پێشوەختە کار دەکەین بۆ دەستەبەرکردنی کاتی تەواو بۆ هەر نەخۆشێک بێ چاوەڕوانی. زانیارییەکان بنووسە بۆ دڵنیابوونەوە لە نۆرەکەت.",
      b_feature_1_title: "وردی تەواو لە کاتدا",
      b_feature_1_desc: "کاتێکی دیاریکراو بەبێ چاوەڕوانی لە هۆڵدا.",
      b_feature_2_title: "ئامێری پێشکەوتوو بێ ئازار",
      b_feature_2_desc: "بەنجی ئەلیکترۆنی STA و پاککردنەوەی سویسری GBT.",
      b_feature_3_title: "پەسەندکردنی دەستبەجێ بە واتسئەپ",
      b_feature_3_desc: "ناردنی کارتی نۆرە و بیرخستنەوە پێش کات دیاریکراو.",
      prefer_call_text: "پەیوەندی تەلەفۆنی ڕاستەوخۆت پێ باشترە؟",
      form_heading: "زانیاری وەرگرتنی نۆرە",
      form_name_label: "ناوی سیانی نەخۆش *",
      form_phone_label: "ژمارەی مۆبایل (واتسئەپ) *",
      form_doctor_label: "پزیشک / پسپۆڕی دیاریبکە",
      form_service_label: "جۆری چارەسەری داواکراو",
      form_date_label: "ڕۆژی دڵخواز",
      form_time_label: "کاتی دڵخواز",
      time_opt_afternoon: "پاشنیوەڕۆ (1:00 پ.ن - 5:00 پ.ن)",
      time_opt_evening: "ئێواران (5:00 پ.ن - 9:00 پ.ن)",
      time_opt_any: "هەر کاتێکی بەردەست (1:00 پ.ن - 9:00 پ.ن)",
      form_notes_label: "تێبینی یان وەسفی کێشەی ددان (ئارەزوومەندانە)",
      btn_submit_appointment: "ناردن و پەسەندکردن لە واتسئەپ",
      form_disclaimer: "🔒 ڕاستەوخۆ دەگوازرێیتەوە بۆ گفتوگۆی واتسئەپی فەرمی کلینیک لەگەڵ بەرپرسی نۆرەکان.",
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
      wa_quick_label: "نۆرەگرتنی خێرا لە واتسئەپ",
      nav_pathways: "ڕێگاکانی چارەسەر",
      hero_eyebrow: "کلینیکی پسپۆڕی ڤیرۆنا • کەرکووک",
      hero_title_main: "زەردەخەنەیەکی بێوێنە و چارەسەری ددان بەبێ هیچ ئازارێک بە تەکنەلۆژیای سویسری",
      hero_lead: "ترسی دەرزی بەنج و ئازاری ددان لەبیر بکە. چارەسەری پێشکەوتوو بە بەنجی ئەلیکترۆنی STA و پاککردنەوەی سویسری GBT بە سەرپەرشتی 6 پزیشکی پسپۆڕ بە نۆرەی پێشوەختە بێ چاوەڕوانی.",
      hero_book_cta: "وەرگرتنی نۆرەی بێ ئازار و بێ چاوەڕوانی",
      hero_cta_reassurance: "✓ پەسەندکردنی دەستبەجێ بە واتسئەپ • بێ چاوەڕوانی • نهێنی پارێزراو",
      hero_assessment_link: "یان هەڵسەنگاندنی بێبەرامبەری زەردەخەنە بکە (30 چرکە)",
      top_google_trust: "هەڵسەنگاندنی پەسەندکراو لە نەخشەی گووگڵ (121 هەڵسەنگاندن)",
      top_trust_review_quote: '"هیچ ئازارم هەست پێنەکرد بە ئامێری بەنجی ئەلیکترۆنی STA.. باشترین ئەزموون لە کەرکووک" — ئەحمەد کەرکووکی (پەسەندکراو)',
      top_trust_badge_sta: "تەزاندنی کۆمپیوتەری بێ ئازار (STA)",
      top_trust_badge_gbt: "پاککردنەوەی سویسری پەسەندکراو (GBT)",
      top_trust_badge_zero_wait: "٠ خولەک چاوەڕوانی (نۆرەی پێشوەختە)",
      ladder_tag: "دەروازەکانی خزمەتگوزاری",
      ladder_title: "ئەمڕۆ چۆن دەتوانین هاوکاریت بکەین؟ باشترین ڕێگا هەڵبژێرە",
      ladder_subtitle: "جا دەتەوێت هەڵسەنگاندنی بێبەرامبەر بکەیت، یان چارەسەری بەپەلەی ئازار، یان ڕاوێژ لەگەڵ پزیشکی پسپۆڕ، ڕێگای گونجاومان ئامادەیە.",
      card_assessment_tag: "هەڵسەنگاندنی بێبەرامبەر لە 30 چرکەدا",
      card_assessment_title: "پشکنینی دیجیتاڵی زەردەخەنە و ددان",
      card_assessment_desc: "وەڵامی 3 پرسیاری خێرا بدەرەوە بۆ دەستکەوتنی پلانی چارەسەر و ڕاوێژی پزیشک بۆ حاڵەتەکەت.",
      btn_start_assessment: "دەستپێکردنی هەڵسەنگاندنی بێبەرامبەر ←",
      card_emergency_tag: "ئازاری بەپەلەی ددان",
      card_emergency_title: "هێڵی بەپەلەی ئازاری ددان لە واتسئەپ",
      card_emergency_desc: "تووشی ئازاری کتوپڕ بوویت یان ددانت شکاوە؟ دەستبەجێ پەیوەندی بە تیمی فریاگوزاری بکە بۆ چارەسەری بێ دواکەوتن.",
      btn_emergency_chat: "پەیوەندی بە فریاگوزاری بکە ⚡",
      card_guide_tag: "ڕێبەری دیجیتاڵی بێبەرامبەر",
      card_guide_title: "ڕێبەری ڤیرۆنا بۆ پاراستن و جوانکاری بێ ئازار",
      card_guide_desc: "ڕێبەری پزیشکی بێبەرامبەر وەربگرە بۆ فێربوونی شێوازی پاراستنی ددان و تەکنیکەکانی تەزاندنی بێ ئازار.",
      btn_get_guide: "وەرگرتنی ڕێبەری بێبەرامبەر 📥",
      card_direct_tag: "وەرگرتنی نۆرەی ڕاستەوخۆ",
      card_direct_title: "وەرگرتنی نۆرەی پشکنینی گشتی",
      card_direct_desc: "پزیشکی دڵخواز و کاتی گونجاو دیاریبکە بەبێ بەفیڕۆدانی هیچ کاتێک لە هۆڵی چاوەڕوانیدا.",
      btn_book_direct_path: "بڕۆ بۆ فۆڕمی وەرگرتنی نۆرە 📅",
      cta_transformation_title: "دەتەوێت زەردەخەنەیەکی سروشتی و ڕێک بەدەستبهێنیت؟",
      cta_transformation_sub: "ڕاوێژ لەگەڵ پزیشکانی پسپۆڕمان بکە بۆ ئەوەی بزانیت دیزاینی دیجیتاڵی چۆن دەتوانێت شێوەی ددانت بگۆڕێت بەبێ ئازار.",
      btn_transformation_cta: "ئێستا نۆرەی پشکنینی زەردەخەنە وەربگرە ←",
      btn_slider_assess: "هەڵسەنگاندنی بێبەرامبەر (30 چرکە)",
      assess_modal_title: "هەڵسەنگاندنی دیجیتاڵی بێبەرامبەری زەردەخەنە (30 چرکە)",
      assess_step1_title: "هەنگاوی 1: ئامانجی سەرەکیت بۆ ددانەکانت چییە؟",
      opt_goal_implant: "چاندنی ددان و قەرەبووکردنەوەی ددانی لەدەستچوو",
      opt_goal_smile: "زەردەخەنەی هۆلیوود و سپیکردنەوە و جوانکاری",
      opt_goal_pain: "چارەسەری دەمار و نەهێشتنی ئازاری ددان",
      opt_goal_gbt: "پاککردنەوە و لێکردنەوەی زەردیی بە ئامێری GBT",
      opt_goal_ortho: "تەلی ددان و ڕێکخستنەوەی شەویلگە",
      assess_step2_title: "هەنگاوی 2: گرنگترین خاڵ بۆ تۆ لە کاتی چارەسەردا چییە؟",
      opt_concern_pain: "چارەسەری تەواو بێ ئازار (بەبێ دەرزی بەهۆی STA)",
      opt_concern_natural: "دەرکەوتنێکی سروشتی و گونجاو لەگەڵ ڕوخساردا",
      opt_concern_time: "خێرایی لە کارکردن و ڕێک لە کاتدا بێ چاوەڕوانی",
      opt_concern_cost: "زانینی پلانی چارەسەر و تێچووی خەمڵێنراو لە پێشوەختەدا",
      assess_step3_title: "هەنگاوی 3: ڕاپۆرتی هەڵسەنگاندنەکەت بۆ کوێ بنێرین؟",
      btn_submit_assessment: "ناردنی هەڵسەنگاندن و وەرگرتنی ڕاوێژ لە واتسئەپ",
      assess_disclaimer: "🔒 وەڵامەکانت ڕاستەوخۆ دەنێردرێت بۆ پزیشکانی پسپۆڕی کلینیکی ڤیرۆنا بۆ پێشکەشکردنی ڕاوێژ و هەڵسەنگاندنی بێبەرامبەر.",
      sticky_call: "پەیوەندی",
      sticky_whatsapp: "واتسئەپ",
      sticky_assess: "هەڵسەنگاندن",
      sticky_book: "وەرگرتنی نۆرە",
      doc_opt_any: "هەر پزیشکێکی بەردەست (ڕاوێژی گشتی)",
      doc_opt_osama: "د. ئوسامە ئەلحوسێن - چاندن و جوانکاری ددان",
      doc_opt_noor: "د. نوور نەسرەڵڵا - تەلی ددان و جوانکاری",
      doc_opt_zaid: "د. زەید - نەشتەرگەری دەم و شەویلگە و چاندن",
      doc_opt_mohammed: "د. محەممەد - چارەسەری دەمار و پڕکردنەوەی ورد",
      doc_opt_anas: "د. ئەنەس - زەردەخەنەی هۆلیوود و هاوێنە",
      doc_opt_aya: "د. ئایە ئەیاد - پزیشکی ددانی منداڵان",
      serv_opt_consult: "پشکنین و ڕاوێژی سەرەتایی گشتگیر",
      serv_opt_sta: "چارەسەر بە ئامێری بەنجی ئەلیکترۆنی STA",
      serv_opt_gbt: "پاککردنەوەی ددان بە پرۆتۆکۆلی سویسری GBT",
      serv_opt_implant: "چاندنی دەستبەجێ و دیجیتاڵی ددان",
      serv_opt_smile: "زەردەخەنەی هۆلیوود و هاوێنەی پۆرسلین",
      serv_opt_ortho: "تەلی ددان (کانزایی یان شەفاف)",
      serv_opt_root: "چارەسەری دەمار و پڕکردنەوەی جوانکاری",
      serv_opt_pedia: "چارەسەری ددانی منداڵان و خۆپاراستن",
    }
  };

  function initNavigation() {
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navbar = document.getElementById('navbar');

    scrollButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-scroll');
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
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

          const docName = this.getAttribute('data-doctor-name');
          if (docName) {
            const selectEl = document.getElementById('doctorSelect');
            if (selectEl) {
              for (let i = 0; i < selectEl.options.length; i++) {
                if (selectEl.options[i].value.includes(docName.split(' ')[1] || docName)) {
                  selectEl.selectedIndex = i;
                  break;
                }
              }
            }
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
    const sections = ['hero', 'trustAnchors', 'valueLadder', 'tech', 'reviews', 'staff', 'location', 'booking'];
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

    const navButtons = document.querySelectorAll('.nav-item');
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-scroll');
      if (target === currentSection) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  let currentLang = 'ar';

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

    const nameInput = document.getElementById('patientName');
    const notesInput = document.getElementById('patientNotes');

    if (lang === 'en') {
      if (nameInput) nameInput.placeholder = "e.g. John Smith";
      if (notesInput) notesInput.placeholder = "Describe symptoms or questions (optional)...";
    } else if (lang === 'ku') {
      if (nameInput) nameInput.placeholder = "نموونە: ئارام ئەحمەد";
      if (notesInput) notesInput.placeholder = "تێبینی یان وەسفی کێشەکە (ئارەزوومەندانە)...";
    } else {
      if (nameInput) nameInput.placeholder = "مثال: أحمد عبد الله";
      if (notesInput) notesInput.placeholder = "هل تعاني من ألم؟ أو لديك رغبة ببروتوكول معين؟";
    }

        const leadNameInp = document.getElementById('leadName');
    if (leadNameInp) {
      if (lang === 'en') leadNameInp.placeholder = "e.g. John Smith";
      else if (lang === 'ku') leadNameInp.placeholder = "نموونە: ئارام ئەحمەد";
      else leadNameInp.placeholder = "مثال: أحمد عبد الله";
    }

    if (typeof updateReviewsCarousel === 'function') {
      updateReviewsCarousel();
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

  function initStaffFilters() {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const doctorCards = document.querySelectorAll('.doctor-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        doctorCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  function initComparisonSlider() {
    const container = document.getElementById('comparisonSlider');
    const clipped = document.getElementById('clippedBefore');
    const handle = document.getElementById('sliderHandle');
    const presetButtons = document.querySelectorAll('.preset-btn');

    if (!container || !clipped || !handle) return;

    let isDragging = false;

    function setPosition(percentage) {
      const clamped = Math.max(0, Math.min(100, percentage));
      clipped.style.setProperty('--clip-pos', clamped + '%');
      clipped.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
      clipped.style.webkitClipPath = `inset(0 ${100 - clamped}% 0 0)`;
      handle.style.left = clamped + '%';
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const offsetX = clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;
      setPosition(percent);
    }

    function startDrag(e) {
      isDragging = true;
      onPointerMove(e);
      document.addEventListener('mousemove', onPointerMove);
      document.addEventListener('touchmove', onPointerMove, { passive: true });
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);
    }

    function stopDrag() {
      isDragging = false;
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
    }

    container.addEventListener('mousedown', startDrag);
    container.addEventListener('touchstart', startDrag, { passive: true });

    presetButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        presetButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const val = parseFloat(this.getAttribute('data-val'));
        setPosition(val);
      });
    });
  }

  function initBookingForm() {
    const form = document.getElementById('appointmentForm');
    if (!form) return;

    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('patientName')?.value.trim();
      const phone = document.getElementById('patientPhone')?.value.trim();
      const doctor = document.getElementById('doctorSelect')?.value;
      const service = document.getElementById('serviceSelect')?.value;
      const date = document.getElementById('preferredDate')?.value;
      const time = document.getElementById('preferredTime')?.value;
      const notes = document.getElementById('patientNotes')?.value.trim();

      if (!name || !phone) {
        alert(currentLang === 'en' ? 'Please fill in your name and phone number.' : 'يرجى إدخال الاسم ورقم الهاتف.');
        return;
      }

      const randomTicket = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `VRN-${randomTicket}`;

      let message = '';

      if (currentLang === 'en') {
        message = `*Appointment Request - Verona Dental Clinic* 🦷\n` +
          `Ref: #${ticketId}\n\n` +
          `👤 *Patient:* ${name}\n` +
          `📱 *Phone:* ${phone}\n` +
          `👨‍⚕️ *Doctor/Specialty:* ${doctor}\n` +
          `🔬 *Service:* ${service}\n` +
          `📅 *Preferred Date:* ${date || 'First available'}\n` +
          `⏰ *Timeslot:* ${time}\n` +
          (notes ? `📝 *Notes:* ${notes}\n` : '') +
          `\nLooking forward to confirmation. Thank you!`;
      } else if (currentLang === 'ku') {
        message = `*داواکاری وەرگرتنی نۆرە - کلینیکی ڤیرۆنا* 🦷\n` +
          `ژمارەی نۆرە: #${ticketId}\n\n` +
          `👤 *ناوی نەخۆش:* ${name}\n` +
          `📱 *مۆبایل:* ${phone}\n` +
          `👨‍⚕️ *پزیشک:* ${doctor}\n` +
          `🔬 *جۆری چارەسەر:* ${service}\n` +
          `📅 *ڕۆژی دڵخواز:* ${date || 'زووترین کات'}\n` +
          `⏰ *کاتی دڵخواز:* ${time}\n` +
          (notes ? `📝 *تێبینی:* ${notes}\n` : '') +
          `\nسوپاس بۆ پشتڕاستکردنەوە.`;
      } else {
        message = `*طلب حجز موعد مسبق - عيادة ڤيرونا لطب الأسنان* 🦷\n` +
          `رقم الحجز: #${ticketId}\n\n` +
          `👤 *اسم المراجع:* ${name}\n` +
          `📱 *رقم الهاتف:* ${phone}\n` +
          `👨‍⚕️ *الطبيب / التخصص:* ${doctor}\n` +
          `🔬 *الخدمة المطلوبة:* ${service}\n` +
          `📅 *التاريخ المفضل:* ${date || 'أقرب موعد متاح'}\n` +
          `⏰ *الفترة المفضلة:* ${time}\n` +
          (notes ? `📝 *ملاحظات إضافية:* ${notes}\n` : '') +
          `\nبانتظار تأكيد الموعد مع التقدير.`;
      }

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/9647745490770?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
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
        if (!video.paused) {
          video.pause();
        }
      } else {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        }
      }
    }

    handleVideoPlayback();
    window.addEventListener('resize', handleVideoPlayback);

    let isFading = false;
    video.addEventListener('timeupdate', function () {
      if (window.innerWidth < 1100) return;
      const duration = video.duration || 32;
      const current = video.currentTime;

      if (duration > 2 && current >= duration - 0.8 && !isFading) {
        isFading = true;
        video.classList.add('video-looping-fade');
      } else if (current < 1 && isFading) {
        isFading = false;
        video.classList.remove('video-looping-fade');
      }
    });
  }

  let updateReviewsCarousel = null;

  function initReviewsCarousel() {
    const track = document.getElementById('reviewsCarouselTrack');
    const container = document.getElementById('reviewsTrackContainer');
    const prevBtn = document.getElementById('prevReviewBtn');
    const nextBtn = document.getElementById('nextReviewBtn');
    const dotsContainer = document.getElementById('reviewsCarouselDots');

    if (!track || !container || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.review-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    function getVisibleCount() {
      const width = window.innerWidth;
      if (width <= 640) return 1;
      if (width <= 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, totalCards - getVisibleCount());
    }

    function renderDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const maxIndex = getMaxIndex();
      const count = maxIndex + 1;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `مراجعة ${i + 1}`);
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
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }
    }

    updateReviewsCarousel = updateTrack;

    function nextSlide() {
      const maxIndex = getMaxIndex();
      if (currentIndex >= maxIndex) {
        currentIndex = 0; 
      } else {
        currentIndex++;
      }
      updateTrack();
    }

    function prevSlide() {
      const maxIndex = getMaxIndex();
      if (currentIndex <= 0) {
        currentIndex = maxIndex; 
      } else {
        currentIndex--;
      }
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
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
    container.addEventListener('touchstart', stopAutoPlay, { passive: true });
    container.addEventListener('touchend', startAutoPlay, { passive: true });

    window.addEventListener('resize', () => {
      renderDots();
      updateTrack();
    });

    renderDots();
    updateTrack();
    startAutoPlay();
  }

  function initYear() {
    const yr = document.getElementById('currentYear');
    if (yr) {
      yr.textContent = new Date().getFullYear();
    }
  }

  function initAssessmentModal() {
    const modal = document.getElementById('assessmentModal');
    const openBtn = document.getElementById('openAssessmentBtn');
    const heroBtn = document.getElementById('heroAssessmentTrigger');
    const sliderBtn = document.getElementById('sliderAssessBtn');
    const stickyBtn = document.getElementById('stickyAssessBtn');
    const closeX = document.getElementById('assessmentCloseX');
    const backdrop = document.getElementById('assessmentBackdrop');
    const form = document.getElementById('assessmentForm');

    if (!modal) return;

    function openModal() {
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      const nameInp = document.getElementById('leadName');
      if (nameInp) setTimeout(() => nameInp.focus(), 100);
    }

    function closeModal() {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (heroBtn) heroBtn.addEventListener('click', openModal);
    if (sliderBtn) sliderBtn.addEventListener('click', openModal);
    if (stickyBtn) stickyBtn.addEventListener('click', openModal);
    if (closeX) closeX.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const goalEl = form.querySelector('input[name="dental_goal"]:checked');
        const priorityEl = form.querySelector('input[name="dental_priority"]:checked');
        const name = document.getElementById('leadName')?.value.trim();
        const phone = document.getElementById('leadPhone')?.value.trim();

        if (!name || !phone) {
          alert(currentLang === 'en' ? 'Please enter your name and phone number.' : 'يرجى إدخال الاسم ورقم الهاتف.');
          return;
        }

        const goal = goalEl ? goalEl.value : 'استشارة عامة';
        const priority = priorityEl ? priorityEl.value : 'رعاية دقيقة بدون ألم';
        const randomTicket = Math.floor(1000 + Math.random() * 9000);
        const ticketId = `VRN-EVAL-${randomTicket}`;

        let message = '';
        if (currentLang === 'en') {
          message = `*Free Smile Assessment - Verona Dental Clinic* 💎\n` +
            `Ref: #${ticketId}\n\n` +
            `👤 *Patient:* ${name}\n` +
            `📱 *WhatsApp:* ${phone}\n` +
            `🎯 *Primary Goal:* ${goal}\n` +
            `🛡️ *Main Priority:* ${priority}\n\n` +
            `I would like to receive my free estimated treatment plan and advice from the clinic specialist. Thank you!`;
        } else if (currentLang === 'ku') {
          message = `*هەڵسەنگاندنی بێبەرامبەری زەردەخەنە - کلینیکی ڤیرۆنا* 💎\n` +
            `ژمارەی فۆڕم: #${ticketId}\n\n` +
            `👤 *ناوی نەخۆش:* ${name}\n` +
            `📱 *واتسئەپ:* ${phone}\n` +
            `🎯 *ئامانجی سەرەکی:* ${goal}\n` +
            `🛡️ *گرنگترین خاڵ:* ${priority}\n\n` +
            `دەخوازم ڕاپۆرتی خەمڵێنراو و ڕاوێژی پزیشکی پسپۆڕم پێبگات. سوپاس!`;
        } else {
          message = `*طلب تقييم الابتسامة المجاني - عيادة ڤيرونا لطب الأسنان* 💎\n` +
            `رقم التقييم: #${ticketId}\n\n` +
            `👤 *اسم المراجع:* ${name}\n` +
            `📱 *رقم الواتساب:* ${phone}\n` +
            `🎯 *الهدف الأساسي:* ${goal}\n` +
            `🛡️ *الأولوية والتخوف:* ${priority}\n\n` +
            `أرغب بالحصول على التقرير التقديري المجاني وتوصية الطبيب الاستشاري لحالتي. مع التقدير!`;
        }

        closeModal();
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/9647745490770?text=${encoded}`, '_blank');
      });
    }
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
    initStaffFilters();
    initComparisonSlider();
    initBookingForm();
    initHeroVideo();
    initReviewsCarousel();
    initYear();
    initPrivacyModal();
    initAssessmentModal();
  });

})();
