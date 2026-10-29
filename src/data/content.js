/* ═══════════════════════════════════════════════════════════
   Every string and every project lives here, in both languages.
   Add a project → its card, mockup, screenshot and filter follow.
   ═══════════════════════════════════════════════════════════ */

export const PROJECTS = [
  {
    id: 'ella', name: 'Ella Jewellery', url: 'https://ella-eg.com/',
    cat: 'shopify', mock: 'shop',
    logo: 'ELLA', kicker: '18K gold plated · Egypt',
    h1: 'Wear the', h2: 'light',
    cta: 'Discover', shapes: ['hoop', 'neck', 'ring', 'bar'],
    theme: { bg: '#f7f2ea', ink: '#1d1811', accent: '#a8843c', prod: 'rgba(29,24,17,.055)', hero: '#efe6d8', line: 'rgba(29,24,17,.09)', btnInk: '#fff' },
    tags: ['Shopify', 'Liquid', 'Custom theme', 'Shop the look'],
    desc: {
      en: 'An 18K gold-plated jewellery store on a custom Liquid theme — a hero slider, a shop-the-look section with tappable hotspots, and WhatsApp one tap away on every page.',
      ar: 'متجر مجوهرات مطلية دهب عيار 18 على ثيم Liquid مخصص — سلايدر في الهيرو، سكشن "شوف اللوك" بنقط تضغط عليها تكتشف كل قطعة، وواتساب على بعد ضغطة من أي صفحة.',
    },
  },
  {
    id: 'zeezee', name: "Zeezee's Accessories", url: 'https://zeezee-accessories.com/',
    cat: 'shopify', mock: 'shop',
    logo: "ZEEZEE'S", kicker: 'The Elements of Style',
    h1: 'The elements', h2: 'of style',
    cta: 'Shop', shapes: ['ring', 'neck', 'hoop', 'bar'],
    theme: { bg: '#ffffff', ink: '#101010', accent: '#c9a227', prod: 'rgba(16,16,16,.05)', hero: '#f5f3ef', line: 'rgba(16,16,16,.08)', btnInk: '#fff' },
    tags: ['Shopify', 'Liquid', 'Video hero'],
    desc: {
      en: 'Bracelets, necklaces, rings and earrings with a video-led homepage and a collection grid built to keep browsing fast.',
      ar: 'أساور وسلاسل وخواتم وحلق، بهوم بيدج فيديو وشبكة كوليكشن مبنية عشان التصفح يفضل سريع.',
    },
  },
  {
    id: 'stella', name: 'Stella Accessories', url: 'https://stella-accessories.com/',
    cat: 'shopify', mock: 'shop',
    logo: 'STELLA', kicker: 'Made to shine everyday',
    h1: 'Jewelry that', h2: 'lives with you',
    cta: 'Discover', shapes: ['neck', 'ring', 'hoop', 'bar'],
    theme: { bg: '#fafafa', ink: '#0d0d0d', accent: '#0d0d0d', prod: 'rgba(13,13,13,.05)', hero: '#eeeeee', line: 'rgba(13,13,13,.08)', btnInk: '#fff' },
    tags: ['Shopify', 'Liquid', 'COD checkout'],
    desc: {
      en: 'Minimal, waterproof everyday jewellery. Seven collections, cash-on-delivery flow, and trust signals placed where they actually get read.',
      ar: 'مجوهرات يومية بسيطة ومقاومة للمياه. سبع كوليكشنز، دفع عند الاستلام، وعناصر ثقة موضوعة في المكان اللي بيتقرا فعلاً.',
    },
  },
  {
    id: 'gmj', name: 'G.M.J', url: 'https://gmj-eg.com/',
    cat: 'shopify', mock: 'shop',
    logo: 'G.M.J', kicker: 'The Pharaoh Collection',
    h1: 'Wear the', h2: 'civilization',
    cta: 'Shop', shapes: ['neck', 'stone', 'ring', 'hoop'],
    theme: { bg: '#0d1330', ink: '#f1e9d8', accent: '#d4ad5a', prod: 'rgba(241,233,216,.05)', hero: '#121a3d', line: 'rgba(241,233,216,.1)', btnInk: '#0d1330' },
    tags: ['Shopify', 'Liquid', 'Custom theme', 'EN / AR'],
    desc: {
      en: 'Egyptian-inspired jewellery sold inside the Grand Egyptian Museum and NMEC. A custom Liquid theme built like a museum — every collection a chamber, every piece an object card, in English and Arabic.',
      ar: 'مجوهرات مستوحاة من الحضارة المصرية بتتباع جوه المتحف المصري الكبير ومتحف الحضارة. ثيم Liquid مخصص معمول زي المتحف — كل كوليكشن قاعة، وكل قطعة ليها كارت زي القطع الأثرية، بالعربي والإنجليزي.',
    },
  },
  {
    id: 'tnh', name: 'TNH Jewelry', url: 'https://tnh-jewelry.shop/',
    cat: 'wordpress', mock: 'shop',
    logo: 'TNH', kicker: 'Made by soul & stone',
    h1: 'Handmade,', h2: 'never twice',
    cta: 'Explore', shapes: ['stone', 'neck', 'ring', 'bag'],
    theme: { bg: '#f4eee4', ink: '#2b241c', accent: '#b08d57', prod: 'rgba(43,36,28,.06)', hero: '#e9dfd0', line: 'rgba(43,36,28,.1)', btnInk: '#fff' },
    tags: ['WordPress', 'WooCommerce', 'Multi-currency', '3 languages'],
    desc: {
      en: 'Handmade stone, wood and leather pieces sold into the US, Germany and Japan — three languages and three currencies on one WooCommerce build.',
      ar: 'قطع يدوية من الحجر والخشب والجلد بتتباع لأمريكا وألمانيا واليابان — تلات لغات وتلات عملات على بناء WooCommerce واحد.',
    },
  },
  {
    id: 'limitless', name: 'Limitless Agency', url: 'https://limitless-marketing-agency.vercel.app/',
    cat: 'code', mock: 'agency',
    logo: 'LIMITLESS', kicker: 'Cinematic agency',
    h1: 'Stories that', h2: 'do not fade',
    theme: { bg: '#08080b', ink: '#f4f1ea', accent: '#e8b44a', line: 'rgba(255,255,255,.08)' },
    tags: ['React', 'JavaScript', 'Vercel', 'Built from scratch'],
    desc: {
      en: 'A cinematic marketing agency site written from scratch in React — scroll-driven sections, showreel treatment, and no template underneath any of it.',
      ar: 'موقع وكالة تسويق سينمائي مكتوب من الصفر بـ React — سكاشن بتتحرك مع السكرول، عرض شو ريل، ومفيش أي تمبليت تحته.',
    },
  },
  {
    id: 'media', name: 'Limited Media Production', url: 'https://media-production-ekma.vercel.app/',
    cat: 'code', mock: 'agency',
    logo: 'LIMITED', kicker: 'Production house',
    h1: 'Frame by', h2: 'frame',
    theme: { bg: '#0a0a0d', ink: '#f0eee8', accent: '#d6c39a', line: 'rgba(255,255,255,.08)' },
    tags: ['React', 'JavaScript', 'Vercel'],
    desc: {
      en: 'A production-house site in React. Reusable components, a reel-first layout, and transitions that carry the film feel across pages.',
      ar: 'موقع شركة إنتاج بـ React. كومبوننتس بتتعاد في كل الصفحات، لاي أوت الريل هو البطل، وترانزيشنز بتنقل الإحساس السينمائي بين الصفحات.',
    },
  },
];

export const LAB = [
  ['Century Cinema Cafe', 'https://centurycinemacafe.vercel.app', 'HTML / CSS'],
  ['Analytics Dashboard', 'https://my-world-dashboard.vercel.app', 'Dashboard'],
  ['Movie Watchlist', 'https://movie-watclist.vercel.app', 'API / JS'],
  ['Color Scheme Generator', 'https://color-scheme-generator-omega.vercel.app', 'API / JS'],
  ['Restaurant Ordering App', 'https://resturant-ordering-app-eight.vercel.app', 'Cart / State'],
  ['Twimba', 'https://twimba-iota.vercel.app', 'DOM / JS'],
  ['NFT Landing Site', 'https://nft-site-rho.vercel.app', 'CSS'],
  ['Learning Journal', 'https://learning-journal-six.vercel.app', 'Blog UI'],
  ['Meme Picker', 'https://meme-picker-tau.vercel.app', 'API / JS'],
  ['Oldagram', 'https://oldagram-two.vercel.app', 'DOM / JS'],
  ['URL Tracker', 'https://url-tracker-app.vercel.app', 'Storage'],
  ['Basketball Tracker', 'https://basketball-dashboard-tracker.vercel.app', 'State'],
  ['Password Generator', 'https://password-generator-nine-delta-74.vercel.app', 'JS'],
  ['Unit Converter', 'https://unit-converter-five-sigma.vercel.app', 'JS'],
  ['Splash Page', 'https://splash-page-peach-delta.vercel.app', 'CSS'],
  ['Home Town Page', 'https://home-town-home-page.vercel.app', 'CSS'],
  ['Business Card', 'https://buisness-card-iota.vercel.app', 'CSS'],
];

const BE = 'https://www.behance.net/gallery/';
export const DESIGN = [
  { slug: 'media', title: 'Media Production Web Design', url: BE + '242885821/Media-Production-Web-Design', sub: { en: 'Web design', ar: 'تصميم ويب' }, bg: '#1b1b26', g1: 'rgba(232,180,74,.5)', g2: 'rgba(90,70,190,.42)' },
  { slug: 'agency', title: 'Marketing Agency Home Page', url: BE + '242881299/Marketing-Agency-Home-Page', sub: { en: 'Landing page', ar: 'صفحة هبوط' }, bg: '#141a20', g1: 'rgba(90,190,220,.42)', g2: 'rgba(232,180,74,.4)' },
  { slug: 'hamleys', title: 'Hamleys Web Design', url: BE + '233029567/Hamleys-Webdesign', sub: { en: 'E-commerce · Toys', ar: 'تجارة إلكترونية' }, bg: '#20141a', g1: 'rgba(232,90,120,.45)', g2: 'rgba(250,200,90,.4)' },
  { slug: 'bingo', title: 'Bingo Website Design', url: BE + '191810921/Bingo-Website-Design', sub: { en: 'Entertainment', ar: 'ترفيه' }, bg: '#161f1a', g1: 'rgba(90,220,150,.42)', g2: 'rgba(232,180,74,.35)' },
  { slug: 'realestate', title: 'Real Estate Company', url: BE + '191809943/Real-Estate-Company-Website', sub: { en: 'Corporate', ar: 'عقارات' }, bg: '#12161f', g1: 'rgba(120,150,230,.42)', g2: 'rgba(232,180,74,.32)' },
  { slug: 'hotel', title: 'Hotel Website Design', url: BE + '191808493/Hotel-Website-Design', sub: { en: 'Hospitality', ar: 'فنادق' }, bg: '#1e1a14', g1: 'rgba(232,180,74,.5)', g2: 'rgba(200,120,80,.4)' },
  { slug: 'curva', title: 'Curva Landing Page', url: BE + '191806481/Curva-Landing-Page', sub: { en: 'Product landing', ar: 'صفحة منتج' }, bg: '#181422', g1: 'rgba(160,110,230,.45)', g2: 'rgba(232,180,74,.34)' },
  { slug: 'digital', title: 'Digital Marketing Agency', url: BE + '191806131/Digital-Marketing-Agency-Landing-Page', sub: { en: 'Landing page', ar: 'صفحة هبوط' }, bg: '#101a1c', g1: 'rgba(80,200,200,.42)', g2: 'rgba(232,180,74,.35)' },
];

/* Certificates. Drop the image in public/assets/certs/ and add an entry.
   The section removes itself while this is empty. */
export const CERTS = [
  { file: 'scrimba-frontend-path.png', issuer: 'Scrimba', year: 'Apr 2026',
    title: { en: 'The Frontend Developer Path', ar: 'مسار مطوّر الواجهات' },
    note: { en: '81.6 hours · 1,492 lessons', ar: '81.6 ساعة · 1,492 درس' } },
  { file: 'meta-advanced-react.png', issuer: 'Meta · Coursera', year: 'Aug 2023',
    title: { en: 'Advanced React', ar: 'رياكت متقدم' } },
  { file: 'meta-react-basics.png', issuer: 'Meta · Coursera', year: 'Aug 2023',
    title: { en: 'React Basics', ar: 'أساسيات رياكت' } },
  { file: 'meta-html-css.png', issuer: 'Meta · Coursera', year: 'Jul 2023',
    title: { en: 'HTML and CSS in Depth', ar: 'HTML و CSS بتعمّق' } },
  { file: 'meta-javascript.png', issuer: 'Meta · Coursera', year: 'Jul 2023',
    title: { en: 'Programming with JavaScript', ar: 'البرمجة بـ JavaScript' } },
  { file: 'meta-version-control.png', issuer: 'Meta · Coursera', year: 'Jul 2023',
    title: { en: 'Version Control', ar: 'التحكم في الإصدارات' } },
  { file: 'meta-intro-frontend.png', issuer: 'Meta · Coursera', year: 'Jul 2023',
    title: { en: 'Introduction to Front-End Development', ar: 'مقدمة في تطوير الواجهات' } },
  { file: 'ibm-web-dev-fundamentals.png', issuer: 'IBM SkillsBuild', year: '',
    title: { en: 'Web Development Fundamentals', ar: 'أساسيات تطوير الويب' } },
];

export const SERVICES = [
  {
    art: 'shop',
    title: { en: 'Shopify storefronts', ar: 'متاجر شوبيفاي' },
    body: {
      en: 'Custom Liquid themes, product pages that convert, speed & SEO tuning, and a checkout path with nothing in the way.',
      ar: 'ثيمات مخصصة بـ Liquid، صفحات منتج تبيع، سرعة و SEO، ودفع سلس لحد الأوردر.',
    },
  },
  {
    art: 'code',
    title: { en: 'React apps', ar: 'تطبيقات رياكت' },
    body: {
      en: 'Sites, dashboards and internal tools built from zero — clean components, real animation, and performance that holds up.',
      ar: 'مواقع و داشبوردات مبنية من الصفر — كومبوننتس نضيفة، أنيميشن، وأداء عالي.',
    },
  },
  {
    art: 'img',
    title: { en: 'Product image retouch', ar: 'صور منتجات ستوديو' },
    body: {
      en: 'Phone shots turned studio-grade — clean backdrops, corrected lighting and one consistent look across the whole catalogue.',
      ar: 'من صورة موبايل لصورة ستوديو — خلفيات نضيفة، إضاءة، وألوان متسقة عبر الكاتالوج كله.',
    },
  },
  {
    art: 'dsn',
    title: { en: 'UI & web design', ar: 'تصميم واجهات' },
    body: {
      en: 'Wireframe to final comp — a visual system that stays consistent, handed over ready to build.',
      ar: 'من الـ wireframe للتصميم النهائي — هوية بصرية متسقة، وتسليم جاهز للبرمجة.',
    },
  },
];

export const PROCESS = [
  {
    title: { en: 'Understand the brand', ar: 'فهم البراند' },
    body: {
      en: 'Who buys, what sells, and what stops them. Every decision after this points back to it.',
      ar: 'مين العميل، إيه اللي بيبيع، وإيه اللي بيوقف الشراء. ده اللي بيحدد كل قرار بعد كده.',
    },
  },
  {
    title: { en: 'Design the flow', ar: 'التصميم' },
    body: {
      en: 'Pages drawn around the purchase — home, collection, product, checkout. Nothing decorative that costs a sale.',
      ar: 'صفحات مرسومة حول الشراء — الهوم، الكوليكشن، صفحة المنتج، والشيك أوت.',
    },
  },
  {
    title: { en: 'Build it properly', ar: 'البناء' },
    body: {
      en: 'Clean, fast, responsive on every screen, and structured so the client can keep editing it without me.',
      ar: 'كود نضيف، سريع، ريسبونسيف على كل الشاشات، وسهل يتظبط بعدين.',
    },
  },
  {
    title: { en: 'Launch & sharpen', ar: 'الإطلاق و التحسين' },
    body: {
      en: 'Ship, watch the numbers, then fix what the numbers point at.',
      ar: 'نطلق، نتابع الأرقام، ونحسّن اللي محتاج تحسين.',
    },
  },
];

export const STATS = [
  { to: 7, label: { en: 'Live stores shipped', ar: 'متجر لايف' } },
  { to: 28, label: { en: 'Public repos on GitHub', ar: 'مستودع على جيتهب' } },
  { to: 8, label: { en: 'Web design projects', ar: 'مشروع تصميم ويب' } },
  { to: 6, suffix: '+', label: { en: 'Years building for web', ar: 'سنين في الويب' } },
];

export const SKILLS = [
  {
    head: { en: 'CODE', ar: 'البرمجة' },
    items: ['React', 'JavaScript (ES6+)', 'Liquid', 'HTML5 / CSS3', 'Tailwind', 'SCSS'],
  },
  {
    head: { en: 'COMMERCE', ar: 'التجارة الإلكترونية' },
    items: ['Shopify Themes', 'Shopify Apps setup', 'WooCommerce', 'WordPress', 'Speed & Core Web Vitals', 'Conversion UX'],
  },
  {
    head: { en: 'DESIGN & TOOLS', ar: 'التصميم و الأدوات' },
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Product retouching', 'Git / GitHub', 'Vercel'],
  },
];

export const LINKS = [
  { k: 'EMAIL', v: 'mf596390@gmail.com', href: 'mailto:mf596390@gmail.com' },
  { k: 'LINKEDIN', v: 'mohamed-farag12', href: 'https://www.linkedin.com/in/mohamed-farag12/' },
  { k: 'GITHUB', v: 'faragello12', href: 'https://github.com/faragello12' },
  { k: 'BEHANCE', v: 'mohamedfarag31', href: 'https://www.behance.net/mohamedfarag31' },
  { k: 'INSTAGRAM', v: '@mohamed.dev404', href: 'https://www.instagram.com/mohamed.dev404' },
];

export const FILTERS = [
  { id: 'all', label: { en: 'All', ar: 'الكل' } },
  { id: 'shopify', label: { en: 'Shopify', ar: 'شوبيفاي' } },
  { id: 'code', label: { en: 'Pure Code', ar: 'برمجة' } },
  { id: 'wordpress', label: { en: 'WordPress', ar: 'ووردبريس' } },
];

export const ROTOR = ['Shopify', 'React', 'JavaScript', 'Liquid', 'WooCommerce', 'GSAP', 'Tailwind'];

/* UI copy */
export const T = {
  navWork: { en: 'Work', ar: 'الأعمال' },
  navLab: { en: 'Playground', ar: 'المعمل' },
  navDesign: { en: 'Design', ar: 'التصميم' },
  navCerts: { en: 'Certificates', ar: 'الشهادات' },
  navAbout: { en: 'About', ar: 'عني' },
  navContact: { en: 'Contact', ar: 'تواصل' },
  tagline: { en: 'Frontend · E-commerce', ar: 'مطور واجهات · تجارة إلكترونية' },
  talk: { en: "Let's talk", ar: 'خلينا نتكلم' },
  loading: { en: 'LOADING EXPERIENCE', ar: 'جارٍ التحميل' },
  available: { en: 'Available for work · Cairo, Egypt', ar: 'متاح لمشاريع جديدة · القاهرة، مصر' },
  heroSub: {
    en: 'I turn brands into storefronts that perform — Shopify & React builds with fast loads, clean UX and conversion baked in. Seven stores live right now.',
    ar: 'بحوّل البراندات لمتاجر تشتغل — شوبيفاي و رياكت، سرعة عالية، تجربة نظيفة، ومبيعات أعلى. سبع متاجر لايف دلوقتي.',
  },
  seeWork: { en: 'See the work', ar: 'شوف الشغل' },
  startProject: { en: 'Start a project', ar: 'ابدأ مشروع' },
  workWith: { en: 'I work with', ar: 'بشتغل بـ' },
  scroll: { en: 'SCROLL', ar: 'انزل' },
  workTitle1: { en: 'Selected', ar: 'مختارات' },
  workTitle2: { en: 'work', ar: 'من شغلي' },
  workLead: {
    en: 'Stores and platforms currently live in production — from full Shopify builds to agency sites written from scratch.',
    ar: 'متاجر و منصات لايف دلوقتي — من متجر شوبيفاي كامل لموقع وكالة مبني من الصفر.',
  },
  visitLive: { en: 'Visit live', ar: 'زور الموقع' },
  svcTitle1: { en: 'What', ar: 'اللي' },
  svcTitle2: { en: 'I do', ar: 'بعمله' },
  procTitle1: { en: 'How it', ar: 'إزاي' },
  procTitle2: { en: 'runs', ar: 'بشتغل' },
  labTitle1: { en: 'The', ar: '' },
  labTitle2: { en: 'playground', ar: 'المعمل' },
  labLead: {
    en: 'Small builds I made to learn, test an idea, or just because. All live, all open source.',
    ar: 'مشاريع صغيرة بنيتها عشان أتعلم و أجرب. كلها لايف و الكود مفتوح على جيتهب.',
  },
  labAll: { en: 'All 28 repos on GitHub', ar: 'كل الريبوهات على جيتهب' },
  dsnTitle1: { en: 'Web', ar: 'تصميم' },
  dsnTitle2: { en: 'design', ar: 'ويب' },
  dsnLead: {
    en: 'Before any of it gets written, it gets drawn. Full case studies live on Behance.',
    ar: 'قبل ما الكود يتكتب — التصميم. المشاريع دي كلها على بيهانس.',
  },
  dsnAll: { en: 'Open Behance profile', ar: 'افتح بروفايل بيهانس' },
  certTitle1: { en: 'Certificates', ar: 'الشهادات' },
  certTitle2: { en: 'earned', ar: 'و الكورسات' },
  certLead: {
    en: 'Courses and credentials completed along the way. Click any one to see it full size.',
    ar: 'الكورسات و الشهادات اللي خدتها في البرمجة و التصميم. اضغط على أي شهادة تشوفها كاملة.',
  },
  aboutTitle1: { en: 'About', ar: '' },
  aboutTitle2: { en: 'me', ar: 'عني' },
  aboutP1: {
    en: "I'm Mohamed Farag, a frontend developer based in Cairo. I started in web design back in 2019, moved into code, and have been sitting on the line between the two ever since: sites that genuinely look good and genuinely work.",
    ar: 'أنا محمد فرج، مطور واجهات من القاهرة. بدأت تصميم ويب سنة 2019، وبعدها دخلت البرمجة — ومن ساعتها وأنا بشتغل على النقطة اللي بين الاتنين: مواقع شكلها حلو فعلاً، وبتشتغل صح فعلاً.',
  },
  aboutP2: {
    en: "Most of my work now is e-commerce. I've built full Shopify storefronts for Egyptian jewellery and accessories brands, React sites from scratch for agencies, and internal dashboards. What I actually enjoy is the moment a store gets faster, clearer, and starts selling more.",
    ar: 'شغلي الأساسي دلوقتي في التجارة الإلكترونية. بنيت متاجر شوبيفاي كاملة لبراندات إكسسوارات و مجوهرات في مصر، ومواقع رياكت من الصفر لوكالات. وبحب النقطة اللي المتجر فيها بيبقى أسرع، أوضح، وبيبيع أكتر.',
  },
  cta1: { en: "Let's", ar: 'يلا' },
  cta2: { en: 'build', ar: 'نبني' },
  cta3: { en: 'something', ar: 'حاجة' },
  cta4: { en: 'good.', ar: 'تفرق.' },
  contactLead: {
    en: 'Got a brand that needs a storefront that works? Send me a line — I usually reply the same day.',
    ar: 'عندك براند و محتاج متجر يشتغل صح؟ ابعتلي، بيتردّ عادةً في نفس اليوم.',
  },
  backToTop: { en: 'BACK TO TOP ↑', ar: 'لفوق ↑' },
};
