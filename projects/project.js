(() => {
  'use strict';

  const catalog = {
    adawati: {
      name: { en: 'Adawati', ar: 'أدواتي' },
      category: { en: 'Featured project · Tool rental platform', ar: 'مشروع مميز · منصة لتأجير الأدوات' },
      platform: { en: 'Flutter mobile application · Laravel administration', ar: 'تطبيق جوال بـFlutter · إدارة عبر Laravel' },
      focus: { en: 'Rental marketplace, bookings, trust, and operations', ar: 'سوق تأجير وحجوزات وثقة وتشغيل' },
      overview: {
        en: 'A role-based tool-rental marketplace connecting tool owners with renters through trusted bookings, payments, and communication.',
        ar: 'سوق لتأجير الأدوات قائم على الأدوار، يربط مالكي الأدوات بالمستأجرين عبر حجوزات ومدفوعات وتواصل موثوق.'
      },
      problem: {
        en: 'After the war in Gaza, construction and industrial tools became difficult to obtain and expensive to purchase because border crossings were closed.',
        ar: 'بعد الحرب في غزة، أصبح الحصول على أدوات البناء والصناعة صعباً وشراؤها مكلفاً بسبب إغلاق المعابر.'
      },
      solution: {
        en: 'Adawati supports a community-driven rental marketplace so people can access tools they need without purchasing them outright, with local digital payment support.',
        ar: 'تدعم أدواتي سوق تأجير مجتمعي يتيح للناس الوصول إلى الأدوات التي يحتاجونها دون شرائها، مع دعم وسائل الدفع الرقمية المحلية.'
      },
      features: {
        en: ['Role-based system', 'Owner and customer dashboards', 'Booking calendar', 'Nearby search', 'Tool listings and categories', 'Identity verification', 'Wallet and online payments', 'Jawwal Pay and Apple Pay', 'Chat and notifications', 'Rental approval workflow', 'Analytics and monitoring', 'Admin dashboard'],
        ar: ['نظام قائم على الأدوار', 'لوحات المالك والعميل', 'تقويم الحجز', 'البحث القريب', 'قوائم الأدوات وفئاتها', 'التحقق من الهوية', 'المحفظة والمدفوعات الإلكترونية', 'Jawwal Pay وApple Pay', 'الدردشة والإشعارات', 'سير الموافقة على التأجير', 'التحليلات والمراقبة', 'لوحة الإدارة']
      },
      tech: ['Flutter', 'Firebase', 'Firestore', 'Firebase Authentication', 'GetX', 'Laravel', 'Firebase Admin SDK', 'Clean Architecture'],
      architecture: {
        en: 'Clean Architecture with role-aware feature modules, repository boundaries, Firebase services, and Laravel-powered administration.',
        ar: 'بنية نظيفة بوحدات ميزات تراعي الأدوار وحدود مستودعات وخدمات Firebase وإدارة مدعومة بـLaravel.'
      },
      database: {
        en: 'Firestore provides real-time tool, booking, and chat data; wallet and administrative concerns are designed for auditable server-side control.',
        ar: 'يوفر Firestore بيانات الأدوات والحجوزات والدردشة في الوقت الفعلي، مع تصميم المحفظة والإدارة لرقابة قابلة للتدقيق من جهة الخادم.'
      },
      integrations: {
        en: 'Firebase Admin SDK, Laravel admin dashboard, notifications, local digital payments, Jawwal Pay, and Apple Pay.',
        ar: 'Firebase Admin SDK ولوحة إدارة Laravel والإشعارات والمدفوعات الرقمية المحلية وJawwal Pay وApple Pay.'
      },
      challenges: {
        en: 'Creating trust in a peer-to-peer marketplace while coordinating identity checks, bookings, payment states, chat, and administrative monitoring.',
        ar: 'بناء الثقة في سوق بين الأفراد مع تنسيق التحقق من الهوية والحجوزات وحالات الدفع والدردشة والرقابة الإدارية.'
      },
      design: {
        en: 'Role-aware navigation, legible booking status, clear approval states, and visible trust cues keep a complex marketplace understandable for owners and renters.',
        ar: 'يساعد التنقل الواعي بالأدوار وحالة الحجز المقروءة ومراحل الموافقة الواضحة وإشارات الثقة الظاهرة على إبقاء السوق مفهوماً للمالكين والمستأجرين.'
      },
      lessons: {
        en: 'Community infrastructure needs both human-centred flows and rigorous operational safeguards.',
        ar: 'البنية التحتية المجتمعية تحتاج إلى تدفقات تتمحور حول الإنسان وضمانات تشغيلية صارمة معاً.'
      },
      future: {
        en: 'Insurance flows, richer availability intelligence, dispute management, and expansion to more local service categories.',
        ar: 'مسارات تأمين ومعلومات أذكى عن التوفر وإدارة النزاعات والتوسع إلى فئات خدمات محلية إضافية.'
      }
    },
    'fresh-fruits': {
      name: { en: 'Fresh Fruits', ar: 'Fresh Fruits' },
      category: { en: 'Commerce · Flutter', ar: 'تجارة إلكترونية · Flutter' },
      platform: { en: 'Flutter mobile application', ar: 'تطبيق جوال بـFlutter' },
      focus: { en: 'Product discovery, cart, and local persistence', ar: 'اكتشاف المنتجات والسلة والتخزين المحلي' },
      overview: { en: 'A polished Flutter grocery experience for browsing fresh fruit and managing shopping digitally.', ar: 'تجربة تسوق مصقولة بـFlutter لتصفح الفواكه الطازجة وإدارة التسوق رقمياً.' },
      problem: { en: 'Customers need a simple, modern way to explore grocery products and keep track of favorites and purchases.', ar: 'يحتاج العملاء إلى طريقة بسيطة وحديثة لاستكشاف منتجات البقالة ومتابعة المفضلة والمشتريات.' },
      solution: { en: 'The app combines authentication, categories, wishlist, cart, and profile management in a quick, friendly shopping flow.', ar: 'يجمع التطبيق بين المصادقة والفئات والمفضلة والسلة وإدارة الملف الشخصي ضمن تدفق تسوق سريع وودود.' },
      features: { en: ['Authentication', 'Product categories', 'Wishlist', 'Shopping cart', 'Profile', 'Responsive UI', 'Local persistence'], ar: ['المصادقة', 'فئات المنتجات', 'المفضلة', 'سلة التسوق', 'الملف الشخصي', 'واجهة متجاوبة', 'تخزين محلي دائم'] },
      tech: ['Flutter', 'Dart', 'GetX', 'Shared Preferences', 'Firebase', 'Local Storage', 'State Management'],
      architecture: { en: 'Feature-oriented Flutter structure with GetX for predictable state and presentation logic.', ar: 'بنية Flutter موجّهة بالميزات مع GetX لإدارة حالة ومنطق عرض يمكن توقعهما.' },
      database: { en: 'Local storage and Shared Preferences support persistence; Firebase provides cloud-ready services.', ar: 'يدعم التخزين المحلي وShared Preferences استمرارية البيانات، فيما يوفر Firebase خدمات جاهزة للسحابة.' },
      integrations: { en: 'Firebase authentication and local-device persistence.', ar: 'مصادقة Firebase والتخزين الدائم على الجهاز.' },
      challenges: { en: 'Balancing immediate cart feedback with resilient local state across app sessions.', ar: 'موازنة الاستجابة الفورية للسلة مع حالة محلية مرنة عبر جلسات التطبيق.' },
      design: { en: 'Friendly product hierarchy, visible prices, useful favorites, and immediate cart feedback keep the grocery journey quick without losing clarity.', ar: 'يحافظ تسلسل المنتجات الودود والأسعار الواضحة والمفضلة المفيدة والاستجابة الفورية للسلة على سرعة رحلة التسوق ووضوحها.' },
      lessons: { en: 'Small interaction details and clear product hierarchy significantly improve commerce usability.', ar: 'تفاصيل التفاعل الصغيرة والتسلسل الواضح للمنتجات يحسّنان سهولة استخدام التجارة الإلكترونية بوضوح.' },
      future: { en: 'Payments, inventory sync, order tracking, and personalized recommendations.', ar: 'المدفوعات ومزامنة المخزون وتتبع الطلبات والتوصيات المخصصة.' }
    },
    'hotel-booking': {
      name: { en: 'Hotel Booking & Events', ar: 'حجز الفنادق والفعاليات' },
      shortName: { en: 'Hotel Booking', ar: 'حجز الفنادق' },
      category: { en: 'Travel · Flutter', ar: 'سفر · Flutter' },
      platform: { en: 'Flutter mobile application', ar: 'تطبيق جوال بـFlutter' },
      focus: { en: 'Guest access, reservations, events, and localization', ar: 'دخول الضيوف والحجوزات والفعاليات والتوطين' },
      overview: { en: 'A complete Flutter booking application designed around flexible guest access, reservations, and events.', ar: 'تطبيق حجز متكامل بـFlutter مصمم حول وصول مرن للضيوف والحجوزات والفعاليات.' },
      problem: { en: 'Hotel reservation journeys often feel complicated and do not give guests enough flexibility before committing.', ar: 'غالباً ما تبدو رحلات حجز الفنادق معقدة ولا تمنح الضيوف مرونة كافية قبل التأكيد.' },
      solution: { en: 'A focused flow makes it easy to browse, book, apply coupons, and manage reservations, with localization and theme support.', ar: 'يجعل التدفق المركّز التصفح والحجز وتطبيق القسائم وإدارة الحجوزات سهلاً، مع دعم التوطين والسمات.' },
      features: { en: ['Guest mode', 'Authentication', 'Booking and reservations', 'Coupons', 'Localization', 'Theme switching', 'Profile'], ar: ['وضع الضيف', 'المصادقة', 'الحجز وإدارة الحجوزات', 'القسائم', 'التوطين', 'تبديل السمات', 'الملف الشخصي'] },
      tech: ['Flutter', 'GetX', 'Localization', 'Theme Management', 'Shared Preferences', 'Responsive UI'],
      architecture: { en: 'Clean presentation and state-management layers built with GetX and reusable themed components.', ar: 'طبقات عرض وإدارة حالة نظيفة مبنية بـGetX ومكوّنات سمات قابلة لإعادة الاستخدام.' },
      database: { en: 'Shared Preferences persists the selected theme and guest-facing preferences.', ar: 'يحفظ Shared Preferences السمة المختارة وتفضيلات تجربة الضيف.' },
      integrations: { en: 'Localization services and reservation-ready booking workflows.', ar: 'خدمات التوطين وسير عمل حجز جاهز لإدارة الحجوزات.' },
      challenges: { en: 'Maintaining a coherent booking journey across guest mode, signed-in mode, coupons, and localized content.', ar: 'الحفاظ على رحلة حجز متماسكة بين وضع الضيف وتسجيل الدخول والقسائم والمحتوى الموطّن.' },
      design: { en: 'Dates, availability, coupon state, and reservation details need a calm hierarchy that works equally well for guests, signed-in users, and both language directions.', ar: 'تحتاج التواريخ والتوفر وحالة القسيمة وتفاصيل الحجز إلى تسلسل هادئ يعمل بوضوح للضيف والمستخدم المسجل وفي اتجاهي اللغة.' },
      lessons: { en: 'Flexible access should never create a confusing information architecture.', ar: 'الوصول المرن يجب ألا ينتج بنية معلومات مربكة.' },
      future: { en: 'Availability API, payment gateway, calendar sync, and event recommendations.', ar: 'واجهة لتوفر الغرف وبوابة دفع ومزامنة التقويم وتوصيات الفعاليات.' }
    },
    'recipe-book': {
      name: { en: 'Recipe Book', ar: 'كتاب الوصفات' },
      category: { en: 'Food · Android', ar: 'طعام · Android' },
      platform: { en: 'Native Android application', ar: 'تطبيق Android أصلي' },
      focus: { en: 'Recipe discovery, publishing, media, and profiles', ar: 'اكتشاف الوصفات ونشرها والوسائط والملفات الشخصية' },
      overview: { en: 'An Android application developed with Java and Firebase that helps people discover, create, organize, and share cooking recipes.', ar: 'تطبيق Android مطوّر باستخدام Java وFirebase يساعد الناس على اكتشاف وصفات الطبخ وإنشائها وتنظيمها ومشاركتها.' },
      problem: { en: 'Personal recipes are often private, scattered across social platforms, or difficult to organize into something reusable.', ar: 'غالباً ما تبقى الوصفات الشخصية خاصة أو موزعة عبر المنصات الاجتماعية أو يصعب تنظيمها بصورة قابلة لإعادة الاستخدام.' },
      solution: { en: 'Recipe Book creates one clear place for users to publish recipes, attach media, categorize content, and follow tutorials through video links.', ar: 'يوفر كتاب الوصفات مكاناً واضحاً لنشر الوصفات وإرفاق الوسائط وتصنيف المحتوى ومتابعة الشروحات عبر روابط الفيديو.' },
      features: { en: ['User authentication', 'Recipe discovery', 'Categories and search', 'Ingredients and cooking steps', 'Video links', 'Create, edit, and delete recipes', 'Profile management', 'Cloudinary image upload'], ar: ['مصادقة المستخدم', 'اكتشاف الوصفات', 'الفئات والبحث', 'المكونات وخطوات الطبخ', 'روابط الفيديو', 'إنشاء الوصفات وتعديلها وحذفها', 'إدارة الملف الشخصي', 'رفع الصور عبر Cloudinary'] },
      tech: ['Java', 'Android SDK', 'Firebase Authentication', 'Firestore', 'Cloudinary', 'RecyclerView', 'Material Design', 'CRUD'],
      architecture: { en: 'MVC with Firebase-backed data flows. UI, application logic, and cloud data responsibilities remain clear and maintainable.', ar: 'بنية MVC مع تدفقات بيانات مدعومة بـFirebase، تبقي مسؤوليات الواجهة ومنطق التطبيق والبيانات السحابية واضحة وقابلة للصيانة.' },
      database: { en: 'Cloud Firestore stores recipes, user content, and categories. Cloudinary manages optimized recipe imagery.', ar: 'يخزن Cloud Firestore الوصفات ومحتوى المستخدم والفئات، فيما يدير Cloudinary صور الوصفات.' },
      integrations: { en: 'Firebase Authentication, Firestore, Cloudinary image storage, and external cooking-video links.', ar: 'Firebase Authentication وFirestore وتخزين الصور عبر Cloudinary وروابط فيديو الطبخ الخارجية.' },
      challenges: { en: 'Keeping recipe CRUD flows responsive while coordinating authenticated ownership, media uploads, and searchable content.', ar: 'الحفاظ على استجابة عمليات إنشاء الوصفات وتعديلها وحذفها مع تنسيق الملكية الموثقة ورفع الوسائط والمحتوى القابل للبحث.' },
      design: { en: 'Readable ingredients and steps, strong media states, searchable categories, and clear ownership actions help content stay useful rather than merely decorative.', ar: 'تساعد المكونات والخطوات المقروءة وحالات الوسائط الواضحة والفئات القابلة للبحث وإجراءات الملكية على إبقاء المحتوى مفيداً لا زخرفياً.' },
      lessons: { en: 'Designing data models around real user actions and thoughtful media states makes content products feel more trustworthy.', ar: 'إن تصميم نماذج البيانات حول أفعال المستخدم الحقيقية وحالات الوسائط المدروسة يجعل منتجات المحتوى أكثر موثوقية.' },
      future: { en: 'Recipe collections, reviews, offline reading, and richer creator profiles.', ar: 'مجموعات الوصفات والمراجعات والقراءة دون اتصال وملفات أغنى لصنّاع المحتوى.' }
    },
    'beauty-store': {
      name: { en: 'Beauty Store', ar: 'متجر التجميل' },
      category: { en: 'Commerce · Kotlin', ar: 'تجارة إلكترونية · Kotlin' },
      platform: { en: 'Native Android application', ar: 'تطبيق Android أصلي' },
      focus: { en: 'Cosmetics discovery and personal shopping', ar: 'اكتشاف مستحضرات التجميل والتسوق الشخصي' },
      overview: { en: 'A modern cosmetics shopping application built with Kotlin and Jetpack Compose.', ar: 'تطبيق حديث لتسوق مستحضرات التجميل مبني باستخدام Kotlin وJetpack Compose.' },
      problem: { en: 'Beauty shoppers need a calm, easy-to-navigate way to compare products and manage a personal shopping journey.', ar: 'يحتاج متسوقو مستحضرات التجميل إلى طريقة هادئة وسهلة للتنقل ومقارنة المنتجات وإدارة رحلة تسوق شخصية.' },
      solution: { en: 'The app combines elegant Compose UI with intuitive categories, favorites, cart, and history features.', ar: 'يجمع التطبيق بين واجهة Compose أنيقة وفئات بديهية ومفضلة وسلة وسجل مشتريات.' },
      features: { en: ['Authentication', 'Categories', 'Favorites', 'Cart', 'Purchase history', 'Profile'], ar: ['المصادقة', 'الفئات', 'المفضلة', 'السلة', 'سجل المشتريات', 'الملف الشخصي'] },
      tech: ['Kotlin', 'Jetpack Compose', 'Material Design 3', 'State Management', 'Modern Android Development'],
      architecture: { en: 'Composable, state-driven UI using modern Android development practices and clear screen-level responsibilities.', ar: 'واجهة قابلة للتركيب تقودها الحالة، تستخدم ممارسات Android الحديثة ومسؤوليات واضحة على مستوى الشاشة.' },
      database: { en: 'Local application state supports a responsive personal shopping experience.', ar: 'تدعم حالة التطبيق المحلية تجربة تسوق شخصية وسريعة الاستجابة.' },
      integrations: { en: 'Material Design 3 component system and Android platform services.', ar: 'نظام مكوّنات Material Design 3 وخدمات منصة Android.' },
      challenges: { en: 'Maintaining visual sophistication while keeping browsing and purchasing flows effortless.', ar: 'الحفاظ على رقي بصري مع إبقاء التصفح والشراء سلسين.' },
      design: { en: 'A restrained palette, consistent product cards, legible category movement, and visible favorites keep the visual tone refined without slowing the purchase path.', ar: 'تحافظ لوحة الألوان الهادئة وبطاقات المنتجات المتسقة وحركة الفئات الواضحة والمفضلة الظاهرة على رقي التجربة دون إبطاء مسار الشراء.' },
      lessons: { en: 'A strong design system makes complex commerce screens feel smaller and more coherent.', ar: 'نظام التصميم القوي يجعل شاشات التجارة المعقدة أبسط وأكثر ترابطاً.' },
      future: { en: 'Payments, personalized routines, product reviews, and inventory integration.', ar: 'المدفوعات والروتينات المخصصة ومراجعات المنتجات وتكامل المخزون.' }
    },
    'quiz-app': {
      name: { en: 'Quiz Platform', ar: 'منصة الاختبارات' },
      category: { en: 'Education · Android', ar: 'تعليم · Android' },
      platform: { en: 'Native Android application and management platform', ar: 'تطبيق Android أصلي ومنصة إدارة' },
      focus: { en: 'Assessments, review, statistics, and question management', ar: 'التقييم والمراجعة والإحصاءات وإدارة الأسئلة' },
      overview: { en: 'A quiz application and management platform for creating assessments, completing random quizzes, and reviewing outcomes.', ar: 'تطبيق ومنصة إدارة لإنشاء التقييمات وحل اختبارات عشوائية ومراجعة النتائج.' },
      problem: { en: 'Teachers need a simple way to manage quiz content while students need clear assessment and review experiences.', ar: 'يحتاج المعلمون إلى طريقة بسيطة لإدارة محتوى الاختبارات، فيما يحتاج الطلاب إلى تجربة تقييم ومراجعة واضحة.' },
      solution: { en: 'The Android application provides random questions, score history, review, statistics, and question management.', ar: 'يوفر تطبيق Android أسئلة عشوائية وسجل نتائج ومراجعة وإحصاءات وإدارة للأسئلة.' },
      features: { en: ['Random questions', 'Quiz engine', 'Score history', 'Answer review', 'Statistics', 'Question management'], ar: ['أسئلة عشوائية', 'محرك الاختبارات', 'سجل النتائج', 'مراجعة الإجابات', 'الإحصاءات', 'إدارة الأسئلة'] },
      tech: ['Java', 'Room Database', 'MongoDB', 'Shared Preferences', 'SQLite'],
      architecture: { en: 'MVC-style Android structure with local persistence for responsive quiz sessions and structured data boundaries.', ar: 'بنية Android بأسلوب MVC مع تخزين محلي لجلسات اختبار سريعة وحدود بيانات منظمة.' },
      database: { en: 'Room and SQLite support local quiz data and history; MongoDB is suited for broader managed question content.', ar: 'يدعم Room وSQLite بيانات الاختبارات وسجلها محلياً، فيما يناسب MongoDB إدارة محتوى أسئلة أوسع.' },
      integrations: { en: 'Local persistence and database-backed quiz management.', ar: 'تخزين محلي وإدارة اختبارات مدعومة بقاعدة بيانات.' },
      challenges: { en: 'Ensuring randomization remains fair and that reviewing answers feels clear after a completed session.', ar: 'ضمان عدالة الاختيار العشوائي ووضوح مراجعة الإجابات بعد إكمال الجلسة.' },
      design: { en: 'Visible progress, unambiguous answer states, accessible feedback, and a calm results review help learners understand both the outcome and what to revisit.', ar: 'يساعد التقدم الظاهر وحالات الإجابة غير الملتبسة والتغذية الراجعة سهلة الوصول ومراجعة النتائج الهادئة المتعلم على فهم النتيجة وما يحتاج إلى مراجعته.' },
      lessons: { en: 'Educational flows need transparency: users should understand both their result and the path to improve it.', ar: 'التدفقات التعليمية تحتاج إلى الشفافية؛ ينبغي أن يفهم المستخدم نتيجته والطريق لتحسينها.' },
      future: { en: 'Teacher portal, timed exams, classroom reports, and question import tools.', ar: 'بوابة للمعلم واختبارات مؤقتة وتقارير صفية وأدوات لاستيراد الأسئلة.' }
    },
    'rest-api-explorer': {
      name: { en: 'REST API Explorer', ar: 'مستكشف REST API' },
      category: { en: 'Learning · Android', ar: 'تعلّم · Android' },
      platform: { en: 'Native Android application', ar: 'تطبيق Android أصلي' },
      focus: { en: 'Networking, related resources, and structured data', ar: 'الاتصال الشبكي والموارد المترابطة والبيانات المنظمة' },
      overview: { en: 'An Android application created to strengthen REST API integration, networking, and structured data handling.', ar: 'تطبيق Android أُنشئ لتعزيز مهارات تكامل REST API والاتصال الشبكي ومعالجة البيانات المنظمة.' },
      problem: { en: 'Learning API concepts is more valuable when users can explore connected datasets through a real, navigable product.', ar: 'يصبح تعلم مفاهيم API أكثر قيمة عندما يستكشف المستخدمون مجموعات بيانات مترابطة عبر منتج حقيقي قابل للتنقل.' },
      solution: { en: 'The app presents users, posts, comments, albums, and photos through nested navigation and reliable JSON handling.', ar: 'يعرض التطبيق المستخدمين والمنشورات والتعليقات والألبومات والصور عبر تنقل متداخل ومعالجة موثوقة لـJSON.' },
      features: { en: ['Users', 'Posts', 'Comments', 'Albums', 'Photos', 'Nested navigation'], ar: ['المستخدمون', 'المنشورات', 'التعليقات', 'الألبومات', 'الصور', 'تنقل متداخل'] },
      tech: ['Java', 'Retrofit', 'REST APIs', 'JSON', 'Postman', 'Networking'],
      architecture: { en: 'Layered networking approach using Retrofit, model mapping, and screen-level responsibilities for predictable data presentation.', ar: 'نهج اتصال شبكي متعدد الطبقات يستخدم Retrofit وربط النماذج ومسؤوليات مستوى الشاشة لعرض بيانات يمكن توقعه.' },
      database: { en: 'The app focuses on network-provided JSON data rather than a local primary database.', ar: 'يركز التطبيق على بيانات JSON القادمة من الشبكة بدلاً من قاعدة بيانات محلية أساسية.' },
      integrations: { en: 'REST endpoints, Retrofit networking, and Postman validation.', ar: 'نقاط REST واتصال Retrofit والتحقق عبر Postman.' },
      challenges: { en: 'Safely mapping related JSON resources and presenting network states clearly in the interface.', ar: 'ربط موارد JSON المترابطة بأمان وعرض حالات الشبكة بوضوح في الواجهة.' },
      design: { en: 'Clear resource hierarchy, explicit loading and error states, and consistent nested navigation turn an integration exercise into a product that is easier to inspect and understand.', ar: 'يحوّل تسلسل الموارد الواضح وحالات التحميل والخطأ الصريحة والتنقل المتداخل المتسق تمرين التكامل إلى منتج أسهل للفحص والفهم.' },
      lessons: { en: 'Clear models, resilient loading states, and deliberate API testing are foundational integration skills.', ar: 'النماذج الواضحة وحالات التحميل المرنة واختبار API المقصود هي مهارات أساسية للتكامل.' },
      future: { en: 'Caching, pagination, richer error states, and an API request inspector.', ar: 'التخزين المؤقت وتقسيم الصفحات وحالات خطأ أغنى وأداة لفحص طلبات API.' }
    }
  };

  const order = ['adawati', 'fresh-fruits', 'hotel-booking', 'recipe-book', 'beauty-store', 'quiz-app', 'rest-api-explorer'];
  const projectKey = document.body.dataset.project;
  const project = catalog[projectKey];
  const root = document.getElementById('project-root');
  if (!project || !root) return;

  const language = () => window.PortfolioI18n?.getLanguage() || document.documentElement.lang || 'en';
  const local = (item, field, lang = language()) => item[field]?.[lang] ?? item[field]?.en ?? item[field] ?? '';
  const shortName = (item, lang = language()) => item.shortName?.[lang] ?? item.shortName?.en ?? local(item, 'name', lang);
  const escapeHTML = value => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const index = order.indexOf(projectKey);
  const previousKey = order[(index - 1 + order.length) % order.length];
  const nextKey = order[(index + 1) % order.length];

  function renderHeroArt(key) {
    const features = project.features.en;
    const feature = i => escapeHTML(features[i % features.length]);

    if (key === 'rest-api-explorer') {
      return `<div class="case-art case-art-api" aria-hidden="true"><div class="case-code-top"><span>GET</span><b>/users/1/posts</b><i>200 OK</i></div><pre>{
  "resource": "posts",
  "state": "loaded",
  "items": [ ... ]
}</pre><div class="case-code-tree"><i></i><i></i><i></i></div></div>`;
    }

    if (key === 'beauty-store') {
      return `<div class="case-art case-art-beauty" aria-hidden="true"><div class="case-bottle one"><i></i></div><div class="case-bottle two"><i></i></div><div class="case-bottle three"><i></i></div><span class="case-orbit"></span></div>`;
    }

    if (key === 'quiz-app') {
      return `<div class="case-art case-art-quiz" aria-hidden="true"><div class="case-quiz-progress"><i></i></div><span>08 / 10</span><b data-hero-feature-index="0">${feature(0)}</b><div class="case-answers"><i></i><i></i><i></i></div><div class="case-result">86<small>%</small></div></div>`;
    }

    if (key === 'recipe-book') {
      return `<div class="case-art case-art-recipe" aria-hidden="true"><div class="case-recipe-copy"><span data-i18n="popularLabel">Popular</span><b data-hero-feature-index="1">${feature(1)}</b><i></i><i></i></div><div class="case-plate"><i></i><i></i><i></i></div></div>`;
    }

    return `<div class="case-art case-art-phone" aria-hidden="true">
      <div class="case-device">
        <div class="case-device-status"><span>9:41</span><i></i></div>
        <small data-hero-category>${escapeHTML(local(project, 'category', 'en').split('·')[0].trim())}</small>
        <b data-hero-feature-index="0">${feature(0)}</b>
        <div class="case-device-search"></div>
        <div class="case-device-grid"><i></i><i></i><i></i></div>
        <div class="case-device-card"><i></i><span></span></div>
        <div class="case-device-nav"><i></i><i></i><i></i></div>
      </div>
      <div class="case-float-card"><span>01</span><b data-hero-feature-index="1">${feature(1)}</b><i></i></div>
    </div>`;
  }

  function renderConceptPanels() {
    const features = project.features.en;
    const label = i => escapeHTML(features[i % features.length]);
    return `
      <figure class="concept-panel concept-interface">
        <figcaption><span data-i18n="interfaceConcept">Interface concept</span><b>01</b></figcaption>
        <div class="concept-screen" aria-hidden="true">
          <div class="concept-screen-head"><i></i><span></span></div>
          <b data-feature-index="0">${label(0)}</b>
          <div class="concept-screen-search"></div>
          <div class="concept-screen-cards"><i></i><i></i><i></i></div>
          <div class="concept-screen-row"><i></i><span></span></div>
        </div>
      </figure>
      <figure class="concept-panel concept-flow">
        <figcaption><span data-i18n="flowConcept">Flow concept</span><b>02</b></figcaption>
        <div class="concept-flow-map" aria-hidden="true">
          <div><span>01</span><b data-feature-index="1">${label(1)}</b></div><i></i>
          <div><span>02</span><b data-feature-index="2">${label(2)}</b></div><i></i>
          <div><span>03</span><b data-feature-index="3">${label(3)}</b></div>
        </div>
      </figure>
      <figure class="concept-panel concept-system">
        <figcaption><span data-i18n="systemConcept">System concept</span><b>03</b></figcaption>
        <div class="concept-layers" aria-hidden="true">
          <div><span data-i18n="systemUi">UI</span><b>${escapeHTML(project.tech[0])}</b></div>
          <div><span data-i18n="systemState">State</span><b>${escapeHTML(project.tech[2] || project.tech[1])}</b></div>
          <div><span data-i18n="systemData">Data</span><b>${escapeHTML(project.tech[4] || project.tech[project.tech.length - 1])}</b></div>
        </div>
      </figure>`;
  }

  function render() {
    const lang = language();
    const name = local(project, 'name', lang);
    const category = local(project, 'category', lang);
    const features = project.features[lang] ?? project.features.en;
    const previous = catalog[previousKey];
    const next = catalog[nextKey];

    root.innerHTML = `
      <div class="reading-progress" role="progressbar" aria-label="Reading progress" data-i18n-aria="readingProgress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-reading-progress><i></i></div>
      <a class="skip-link" href="#main" data-i18n="skipContent">Skip to content</a>
      <header class="site-header case-header" data-header>
        <a class="brand" href="../index.html" aria-label="Mahmoud Abu Karim — home" data-i18n-aria="homeLabel"><span class="brand-mark" aria-hidden="true">M<span>N</span></span><span class="brand-name">Mahmoud <b>Abu Karim</b></span></a>
        <a class="case-back" href="../index.html#work"><i aria-hidden="true">←</i><span data-i18n="backPortfolio">Back to portfolio</span></a>
        <div class="header-actions">
          <button class="icon-button lang-toggle" type="button" aria-label="Switch to Arabic" data-lang-toggle data-i18n-aria="switchArabic"><span aria-hidden="true" data-lang-label>AR</span></button>
          <button class="icon-button theme-toggle" type="button" aria-label="Switch to light mode" data-theme-toggle data-i18n-aria="switchLight"><span class="theme-glyph" aria-hidden="true"></span></button>
        </div>
      </header>

      <main id="main">
        <section class="case-hero" aria-labelledby="case-title">
          <div class="case-hero-grid" aria-hidden="true"></div>
          <div class="case-hero-copy">
            <p class="case-eyebrow reveal-item"><span data-i18n="caseStudy">Case study</span><i></i><span data-project-field="category">${escapeHTML(category)}</span></p>
            <h1 id="case-title" class="reveal-item" data-project-field="name">${escapeHTML(name)}</h1>
            <p class="case-summary reveal-item" data-project-field="overview">${escapeHTML(local(project, 'overview', lang))}</p>
            <div class="case-hero-meta reveal-item"><span data-project-field="platform">${escapeHTML(local(project, 'platform', lang))}</span><span>${String(index + 1).padStart(2, '0')} / ${String(order.length).padStart(2, '0')}</span></div>
          </div>
          <div class="case-hero-art reveal-item">
            ${renderHeroArt(projectKey)}
            <p><span data-i18n="conceptLabel">Product interface concept</span><b data-i18n="conceptNotScreenshot">Not a client screenshot</b></p>
          </div>
        </section>

        <div class="case-layout">
          <aside class="case-sidebar">
            <nav aria-label="Case study navigation" data-i18n-aria="caseNavigation" data-case-nav>
              <a href="#overview"><span>01</span><b data-i18n="overview">Overview</b></a>
              <a href="#challenge"><span>02</span><b data-i18n="challenge">Challenge</b></a>
              <a href="#product"><span>03</span><b data-i18n="product">Product</b></a>
              <a href="#engineering"><span>04</span><b data-i18n="engineering">Engineering</b></a>
              <a href="#reflection"><span>05</span><b data-i18n="reflection">Reflection</b></a>
            </nav>
          </aside>

          <article class="case-content">
            <section class="case-section case-overview" id="overview" data-reveal>
              <p class="section-kicker" data-i18n="overviewKicker">Product overview</p>
              <h2 data-i18n="overviewTitle">A focused response to a specific need.</h2>
              <p class="case-lead" data-project-field="overview">${escapeHTML(local(project, 'overview', lang))}</p>
              <dl class="case-facts">
                <div><dt data-i18n="platform">Platform</dt><dd data-project-field="platform">${escapeHTML(local(project, 'platform', lang))}</dd></div>
                <div><dt data-i18n="focus">Product focus</dt><dd data-project-field="focus">${escapeHTML(local(project, 'focus', lang))}</dd></div>
                <div><dt data-i18n="status">Repository</dt><dd><span class="unavailable"><i aria-hidden="true"></i><span data-i18n="repositoryUnavailable">Private / link unavailable</span></span></dd></div>
              </dl>
            </section>

            <section class="case-section case-challenge" id="challenge" data-reveal>
              <div><span>01</span><h2 data-i18n="problemTitle">The problem</h2><p data-project-field="problem">${escapeHTML(local(project, 'problem', lang))}</p></div>
              <div><span>02</span><h2 data-i18n="solutionTitle">The product response</h2><p data-project-field="solution">${escapeHTML(local(project, 'solution', lang))}</p></div>
            </section>

            <section class="case-section" id="product" data-reveal>
              <div class="case-section-head"><div><p class="section-kicker" data-i18n="product">Product</p><h2 data-i18n="capabilitiesTitle">Core product capabilities</h2></div><p data-i18n="capabilitiesIntro">The known product scope, presented without invented outcomes or usage metrics.</p></div>
              <div class="feature-grid">
                ${features.map((feature, featureIndex) => `<article><span>${String(featureIndex + 1).padStart(2, '0')}</span><h3 data-feature-index="${featureIndex}">${escapeHTML(feature)}</h3><i aria-hidden="true"></i></article>`).join('')}
              </div>
            </section>

            <section class="case-section concept-section" data-reveal>
              <div class="case-section-head"><div><p class="section-kicker" data-i18n="conceptCollection">Product interface concepts</p><h2 data-i18n="designTitle">Design considerations</h2></div><p data-i18n="notRealScreens">Conceptual views — not published screenshots</p></div>
              <p class="concept-description" data-project-field="design">${escapeHTML(local(project, 'design', lang))}</p>
              <div class="concept-gallery">${renderConceptPanels()}</div>
            </section>

            <section class="case-section" id="engineering" data-reveal>
              <p class="section-kicker" data-i18n="buildKicker">How it is put together</p>
              <h2 data-i18n="buildTitle">Structure behind the screens.</h2>
              <div class="tech-cloud">${project.tech.map(item => `<span>${escapeHTML(item)}</span>`).join('')}</div>
              <div class="engineering-grid">
                <article><span>01</span><h3 data-i18n="architectureTitle">Architecture</h3><p data-project-field="architecture">${escapeHTML(local(project, 'architecture', lang))}</p></article>
                <article><span>02</span><h3 data-i18n="databaseTitle">Data strategy</h3><p data-project-field="database">${escapeHTML(local(project, 'database', lang))}</p></article>
                <article><span>03</span><h3 data-i18n="integrationsTitle">APIs and integrations</h3><p data-project-field="integrations">${escapeHTML(local(project, 'integrations', lang))}</p></article>
                <article><span>04</span><h3 data-i18n="challengesTitle">Engineering challenge</h3><p data-project-field="challenges">${escapeHTML(local(project, 'challenges', lang))}</p></article>
              </div>
            </section>

            <section class="case-section case-reflection" id="reflection" data-reveal>
              <p class="section-kicker" data-i18n="reflectionKicker">Looking forward</p>
              <h2 data-i18n="reflectionTitle">Lessons and next decisions.</h2>
              <div>
                <article><span>01</span><h3 data-i18n="lessonsTitle">Lesson learned</h3><p data-project-field="lessons">${escapeHTML(local(project, 'lessons', lang))}</p></article>
                <article><span>02</span><h3 data-i18n="futureTitle">Future improvements</h3><p data-project-field="future">${escapeHTML(local(project, 'future', lang))}</p></article>
              </div>
            </section>

            <nav class="next-projects" aria-label="Project navigation" data-i18n-aria="projectNavigation">
              <a href="${previousKey}.html"><span data-i18n="previousProject">Previous project</span><b data-project-nav="${previousKey}">${escapeHTML(shortName(previous, lang))}</b><i aria-hidden="true">←</i></a>
              <a href="${nextKey}.html"><span data-i18n="nextProject">Next project</span><b data-project-nav="${nextKey}">${escapeHTML(shortName(next, lang))}</b><i aria-hidden="true">→</i></a>
            </nav>
          </article>
        </div>
      </main>

      <footer class="case-footer">
        <p>© <span data-year></span> Mahmoud Naser Abu Karim</p>
        <span data-i18n="caseFooter">Mobile product case study by Mahmoud Naser Abu Karim</span>
        <a href="../index.html#work"><span data-i18n="returnPortfolio">Return to selected work</span><i aria-hidden="true">↗</i></a>
      </footer>
      <div class="toast" role="status" aria-live="polite" aria-atomic="true" data-toast></div>`;

    window.PortfolioI18n?.apply(root);
    localizeProject();
  }

  function localizeProject() {
    const lang = language();
    root.querySelectorAll('[data-project-field]').forEach(element => {
      const field = element.dataset.projectField;
      element.textContent = local(project, field, lang);
    });
    root.querySelectorAll('[data-feature-index]').forEach(element => {
      const featureIndex = Number(element.dataset.featureIndex);
      element.textContent = (project.features[lang] ?? project.features.en)[featureIndex] ?? '';
    });
    root.querySelectorAll('[data-hero-feature-index]').forEach(element => {
      const featureIndex = Number(element.dataset.heroFeatureIndex);
      element.textContent = (project.features[lang] ?? project.features.en)[featureIndex] ?? '';
    });
    root.querySelectorAll('[data-hero-category]').forEach(element => {
      element.textContent = local(project, 'category', lang).split('·')[0].trim();
    });
    root.querySelectorAll('[data-project-nav]').forEach(element => {
      const item = catalog[element.dataset.projectNav];
      if (item) element.textContent = shortName(item, lang);
    });

    const projectName = local(project, 'name', lang);
    document.title = `${projectName} — ${lang === 'ar' ? 'دراسة حالة من محمود أبو كريم' : 'Case study by Mahmoud Abu Karim'}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = local(project, 'overview', lang);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = local(project, 'overview', lang);
  }

  render();
  document.addEventListener('portfolio:languagechange', localizeProject);
})();
