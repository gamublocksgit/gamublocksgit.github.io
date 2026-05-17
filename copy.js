/* Gamu Blocks studio landing page — localization data. */

(function () {
  "use strict";

  const LANGUAGES = [
    { key: "en",    label: "English",            name: "English",            htmlLang: "en"    },
    { key: "ja",    label: "日本語",              name: "日本語",              htmlLang: "ja"    },
    { key: "pt_BR", label: "Português (Brasil)", name: "Português (Brasil)", htmlLang: "pt-BR" },
    { key: "ru",    label: "Русский",             name: "Русский",             htmlLang: "ru"    },
    { key: "fr",    label: "Français",            name: "Français",            htmlLang: "fr"    },
    { key: "ko",    label: "한국어",              name: "한국어",              htmlLang: "ko"    },
  ];

  const COPY = {

    /* ─── ENGLISH ─────────────────────────────────────────────────── */
    en: {
      meta: {
        title:         "Gamu Blocks — Apps built for calm",
        description:   "An indie studio making small, focused apps that respect your attention and protect your privacy. Gamu Journal, Gamu Baby, Gamu Neko.",
        ogTitle:       "Gamu Blocks — Apps built for calm",
        ogDescription: "Small, focused apps that respect your attention.",
      },
      a11y: {
        skip:      "Skip to content",
        brandHome: "Gamu Blocks home",
        language:  "Language",
        playStore: "Gamu Blocks on Google Play",
        appCard:   "App details",
        googlePlayBadge: "Get it on Google Play",
        appStoreBadge:   "Download on the App Store",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "Apps built for calm.",
        sub:     "We make small, focused apps that respect your attention and protect your privacy.",
        chips:   ["No subscriptions", "Privacy-first", "No ads"],
      },
      apps: {
        eyebrow: "/ Our apps",
        h2:      "Three apps. One philosophy.",
        p:       "Each Gamu app does one thing well. No ads, no tracking, no dark patterns.",
      },
      journal: {
        tag:       "Diary & Mood",
        tagline:   "A private diary that stays on your device.",
        p:         "Write, reflect, and track your mood in an offline journal. No accounts. AES-256 encryption. Your data, your device.",
        platforms: "Android & iOS",
        cta:       "View app",
      },
      baby: {
        tag:       "Baby Tracker",
        tagline:   "Track your baby's moments, simply.",
        p:         "Log feeds, sleep, and milestones in a clean, calm app. No cloud sync. No accounts. Built for tired parents.",
        platforms: "Android",
        cta:       "View app",
      },
      neko: {
        tag:       "Focus Timer",
        tagline:   "Stay focused with a cat by your side.",
        p:         "A calm focus timer with a sleeping cat that wakes when you lose focus. Simple. Effective. No distractions.",
        platforms: "Android & iOS",
        cta:       "View app",
      },
      about: {
        eyebrow: "/ The studio",
        h2:      "Independently built.",
        p:       "Gamu Blocks is a small independent studio. We make small, focused apps: quietly designed, respectful of your time, and honest about what they do.",
        facts:   ["Indie studio", "No VC funding", "Building since 2022"],
        play:    "See all apps on Google Play",
      },
      footer: {
        tagline: "Small apps. Honest design.",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

    /* ─── 日本語 ───────────────────────────────────────────────────── */
    ja: {
      meta: {
        title:         "Gamu Blocks — 静かさのためのアプリ",
        description:   "独立スタジオが、あなたの集中力を尊重し、プライバシーを守るアプリをつくっています。Gamu Journal、Gamu Baby、Gamu Neko。",
        ogTitle:       "Gamu Blocks — 静かさのためのアプリ",
        ogDescription: "集中力を尊重する、小さくて丁寧なアプリ。",
      },
      a11y: {
        skip:      "メインコンテンツへスキップ",
        brandHome: "Gamu Blocksホーム",
        language:  "言語",
        playStore: "Google PlayでGamu Blocksを見る",
        appCard:   "アプリの詳細",
        googlePlayBadge: "Google Playで手に入れよう",
        appStoreBadge:   "App Storeからダウンロード",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "静かさのためのアプリ。",
        sub:     "あなたの集中力を尊重し、プライバシーを守る、小さくて丁寧なアプリをつくっています。",
        chips:   ["サブスク不要", "プライバシー優先", "広告なし"],
      },
      apps: {
        eyebrow: "/ アプリ一覧",
        h2:      "3つのアプリ。1つの哲学。",
        p:       "各Gamuアプリは一つのことを丁寧に行います。広告なし、追跡なし、ダークパターンなし。",
      },
      journal: {
        tag:       "日記・ムードトラッカー",
        tagline:   "端末に残る、プライベートな日記。",
        p:         "オフラインジャーナルで書いて、振り返り、ムードを記録。アカウント不要。AES-256暗号化。データはあなたの端末に。",
        platforms: "Android・iOS",
        cta:       "詳細を見る",
      },
      baby: {
        tag:       "育児記録",
        tagline:   "赤ちゃんの大切な瞬間を、シンプルに記録。",
        p:         "授乳、睡眠、成長のマイルストーンをすっきりとした穏やかなアプリで記録。クラウド同期なし。アカウント不要。疲れた親御さんのために。",
        platforms: "Android",
        cta:       "詳細を見る",
      },
      neko: {
        tag:       "フォーカスタイマー",
        tagline:   "猫と一緒に集中しよう。",
        p:         "集中力が切れると眠っていた猫が目を覚ます、穏やかなフォーカスタイマー。シンプルで効果的。気が散るものなし。",
        platforms: "Android・iOS",
        cta:       "詳細を見る",
      },
      about: {
        eyebrow: "/ スタジオについて",
        h2:      "独立してつくっています。",
        p:       "Gamu Blocksは小さな独立系スタジオです。小さく集中したアプリをつくっています。静かに設計され、あなたの時間を尊重し、何をするかについて正直に。",
        facts:   ["独立スタジオ", "VC資金なし", "2022年から開発中"],
        play:    "Google Playで全アプリを見る",
      },
      footer: {
        tagline: "小さなアプリ。誠実なデザイン。",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

    /* ─── PORTUGUÊS (BRASIL) ────────────────────────────────────────── */
    pt_BR: {
      meta: {
        title:         "Gamu Blocks — Apps feitos para a calma",
        description:   "Um estúdio independente fazendo apps pequenos e focados que respeitam sua atenção e protegem sua privacidade. Gamu Journal, Gamu Baby e Gamu Neko.",
        ogTitle:       "Gamu Blocks — Apps feitos para a calma",
        ogDescription: "Apps pequenos e focados que respeitam sua atenção.",
      },
      a11y: {
        skip:      "Pular para o conteúdo",
        brandHome: "Início do Gamu Blocks",
        language:  "Idioma",
        playStore: "Gamu Blocks no Google Play",
        appCard:   "Detalhes do app",
        googlePlayBadge: "Disponível no Google Play",
        appStoreBadge:   "Baixar na App Store",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "Apps feitos para a calma.",
        sub:     "Fazemos apps pequenos e focados que respeitam sua atenção e protegem sua privacidade.",
        chips:   ["Sem assinaturas", "Privacidade em primeiro lugar", "Sem anúncios"],
      },
      apps: {
        eyebrow: "/ Nossos apps",
        h2:      "Três apps. Uma filosofia.",
        p:       "Cada app Gamu faz uma coisa bem. Sem anúncios, sem rastreamento, sem dark patterns.",
      },
      journal: {
        tag:       "Diário e Humor",
        tagline:   "Um diário privado que fica no seu dispositivo.",
        p:         "Escreva, reflita e acompanhe seu humor em um diário offline. Sem conta. Criptografia AES-256. Seus dados, seu dispositivo.",
        platforms: "Android e iOS",
        cta:       "Ver app",
      },
      baby: {
        tag:       "Acompanhamento do Bebê",
        tagline:   "Acompanhe os momentos do seu bebê, de forma simples.",
        p:         "Registre amamentações, sono e marcos em um app limpo e calmo. Sem sincronização na nuvem. Sem conta. Feito para pais cansados.",
        platforms: "Android",
        cta:       "Ver app",
      },
      neko: {
        tag:       "Temporizador de Foco",
        tagline:   "Mantenha o foco com um gato ao seu lado.",
        p:         "Um temporizador de foco calmo com um gato dormindo que acorda quando você perde o foco. Simples. Eficaz. Sem distrações.",
        platforms: "Android e iOS",
        cta:       "Ver app",
      },
      about: {
        eyebrow: "/ O estúdio",
        h2:      "Feito de forma independente.",
        p:       "Gamu Blocks é um pequeno estúdio independente. Fazemos apps pequenos e focados: projetados silenciosamente, respeitosos com seu tempo e honestos sobre o que fazem.",
        facts:   ["Estúdio independente", "Sem financiamento de VC", "Desenvolvendo desde 2022"],
        play:    "Ver todos os apps no Google Play",
      },
      footer: {
        tagline: "Apps pequenos. Design honesto.",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

    /* ─── РУССКИЙ ───────────────────────────────────────────────────── */
    ru: {
      meta: {
        title:         "Gamu Blocks — Приложения для спокойствия",
        description:   "Независимая студия, создающая небольшие целенаправленные приложения, уважающие ваше внимание и защищающие конфиденциальность. Gamu Journal, Gamu Baby и Gamu Neko.",
        ogTitle:       "Gamu Blocks — Приложения для спокойствия",
        ogDescription: "Небольшие, целенаправленные приложения, уважающие ваше внимание.",
      },
      a11y: {
        skip:      "Перейти к содержимому",
        brandHome: "Главная Gamu Blocks",
        language:  "Язык",
        playStore: "Gamu Blocks в Google Play",
        appCard:   "Подробнее о приложении",
        googlePlayBadge: "Загрузить в Google Play",
        appStoreBadge:   "Загрузить в App Store",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "Приложения для спокойствия.",
        sub:     "Мы создаём небольшие, целенаправленные приложения, уважающие ваше внимание и защищающие вашу конфиденциальность.",
        chips:   ["Без подписок", "Конфиденциальность прежде всего", "Без рекламы"],
      },
      apps: {
        eyebrow: "/ Наши приложения",
        h2:      "Три приложения. Одна философия.",
        p:       "Каждое приложение Gamu делает одну вещь хорошо. Без рекламы, без слежки, без тёмных паттернов.",
      },
      journal: {
        tag:       "Дневник и настроение",
        tagline:   "Личный дневник, который остаётся на вашем устройстве.",
        p:         "Пишите, размышляйте и отслеживайте настроение в офлайн-дневнике. Без аккаунтов. Шифрование AES-256. Ваши данные — ваше устройство.",
        platforms: "Android и iOS",
        cta:       "Подробнее",
      },
      baby: {
        tag:       "Трекер ребёнка",
        tagline:   "Отслеживайте моменты вашего малыша — просто.",
        p:         "Записывайте кормления, сон и вехи развития в чистом и спокойном приложении. Без облачной синхронизации. Без аккаунтов. Создано для уставших родителей.",
        platforms: "Android",
        cta:       "Подробнее",
      },
      neko: {
        tag:       "Таймер фокусировки",
        tagline:   "Сохраняйте концентрацию с котом рядом.",
        p:         "Спокойный таймер фокусировки со спящим котом, который просыпается, когда вы теряете концентрацию. Простой. Эффективный. Без отвлечений.",
        platforms: "Android и iOS",
        cta:       "Подробнее",
      },
      about: {
        eyebrow: "/ О студии",
        h2:      "Создано независимо.",
        p:       "Gamu Blocks — небольшая независимая студия. Мы создаём небольшие, целенаправленные приложения: тихо спроектированные, уважающие ваше время и честные в том, что они делают.",
        facts:   ["Независимая студия", "Без венчурного финансирования", "Разрабатываем с 2022 года"],
        play:    "Все приложения в Google Play",
      },
      footer: {
        tagline: "Маленькие приложения. Честный дизайн.",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

    /* ─── FRANÇAIS ──────────────────────────────────────────────────── */
    fr: {
      meta: {
        title:         "Gamu Blocks — Des apps faites pour la sérénité",
        description:   "Un studio indépendant créant de petites applications ciblées qui respectent votre attention et protègent votre vie privée. Gamu Journal, Gamu Baby et Gamu Neko.",
        ogTitle:       "Gamu Blocks — Des apps faites pour la sérénité",
        ogDescription: "De petites applications ciblées qui respectent votre attention.",
      },
      a11y: {
        skip:      "Passer au contenu",
        brandHome: "Accueil Gamu Blocks",
        language:  "Langue",
        playStore: "Gamu Blocks sur Google Play",
        appCard:   "Détails de l'application",
        googlePlayBadge: "Disponible sur Google Play",
        appStoreBadge:   "Télécharger dans l'App Store",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "Des apps faites pour la sérénité.",
        sub:     "Nous créons de petites applications ciblées qui respectent votre attention et protègent votre vie privée.",
        chips:   ["Sans abonnement", "Vie privée d'abord", "Sans publicités"],
      },
      apps: {
        eyebrow: "/ Nos applications",
        h2:      "Trois apps. Une philosophie.",
        p:       "Chaque app Gamu fait une chose bien. Sans publicités, sans pistage, sans dark patterns.",
      },
      journal: {
        tag:       "Journal et Humeur",
        tagline:   "Un journal privé qui reste sur votre appareil.",
        p:         "Écrivez, réfléchissez et suivez votre humeur dans un journal hors-ligne. Sans compte. Chiffrement AES-256. Vos données, votre appareil.",
        platforms: "Android et iOS",
        cta:       "Voir l'app",
      },
      baby: {
        tag:       "Suivi Bébé",
        tagline:   "Suivez les moments de votre bébé, simplement.",
        p:         "Enregistrez les tétées, le sommeil et les étapes dans une app propre et calme. Sans sync cloud. Sans compte. Fait pour les parents fatigués.",
        platforms: "Android",
        cta:       "Voir l'app",
      },
      neko: {
        tag:       "Minuteur de Concentration",
        tagline:   "Restez concentré avec un chat à vos côtés.",
        p:         "Un minuteur de concentration calme avec un chat endormi qui se réveille quand vous perdez le fil. Simple. Efficace. Sans distractions.",
        platforms: "Android et iOS",
        cta:       "Voir l'app",
      },
      about: {
        eyebrow: "/ Le studio",
        h2:      "Fait de façon indépendante.",
        p:       "Gamu Blocks est un petit studio indépendant. Nous fabriquons de petites apps ciblées: conçues silencieusement, respectueuses de votre temps et honnêtes sur ce qu'elles font.",
        facts:   ["Studio indépendant", "Sans financement VC", "En développement depuis 2022"],
        play:    "Toutes nos apps sur Google Play",
      },
      footer: {
        tagline: "Petites apps. Design honnête.",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

    /* ─── 한국어 ───────────────────────────────────────────────────── */
    ko: {
      meta: {
        title:         "Gamu Blocks — 고요함을 위한 앱들",
        description:   "독립 스튜디오가 당신의 집중력을 존중하고 개인 정보를 보호하는 작고 집중된 앱을 만들고 있습니다. Gamu Journal, Gamu Baby, Gamu Neko.",
        ogTitle:       "Gamu Blocks — 고요함을 위한 앱들",
        ogDescription: "당신의 집중력을 존중하는 작고 집중된 앱들.",
      },
      a11y: {
        skip:      "본문으로 건너뛰기",
        brandHome: "Gamu Blocks 홈",
        language:  "언어",
        playStore: "Google Play에서 Gamu Blocks 보기",
        appCard:   "앱 상세 정보",
        googlePlayBadge: "Google Play에서 다운로드",
        appStoreBadge:   "App Store에서 다운로드",
      },
      hero: {
        eyebrow: "/ Gamu Blocks",
        h1:      "고요함을 위한 앱들.",
        sub:     "당신의 집중력을 존중하고 개인 정보를 보호하는 작고 집중된 앱을 만듭니다.",
        chips:   ["구독 없음", "프라이버시 우선", "광고 없음"],
      },
      apps: {
        eyebrow: "/ 앱 소개",
        h2:      "세 개의 앱. 하나의 철학.",
        p:       "각 Gamu 앱은 한 가지를 잘 합니다. 광고 없음, 추적 없음, 다크 패턴 없음.",
      },
      journal: {
        tag:       "일기 & 기분 추적",
        tagline:   "기기에 남는 프라이빗 일기.",
        p:         "오프라인 일기에서 쓰고, 성찰하고, 기분을 추적하세요. 계정 없음. AES-256 암호화. 당신의 데이터, 당신의 기기.",
        platforms: "Android & iOS",
        cta:       "앱 보기",
      },
      baby: {
        tag:       "육아 기록",
        tagline:   "아기의 소중한 순간을 간단하게 기록하세요.",
        p:         "수유, 수면, 성장 이정표를 깔끔하고 차분한 앱으로 기록하세요. 클라우드 동기화 없음. 계정 없음. 지친 부모를 위해 만들어졌습니다.",
        platforms: "Android",
        cta:       "앱 보기",
      },
      neko: {
        tag:       "집중 타이머",
        tagline:   "고양이와 함께 집중하세요.",
        p:         "집중력을 잃으면 잠자던 고양이가 깨어나는 차분한 집중 타이머. 간단하고 효과적입니다. 방해 없음.",
        platforms: "Android & iOS",
        cta:       "앱 보기",
      },
      about: {
        eyebrow: "/ 스튜디오 소개",
        h2:      "독립적으로 만들었습니다.",
        p:       "Gamu Blocks는 작은 독립 스튜디오입니다. 작고 집중된 앱을 만듭니다: 조용하게 설계되고, 당신의 시간을 존중하며, 무엇을 하는지에 대해 솔직합니다.",
        facts:   ["독립 스튜디오", "VC 투자 없음", "2022년부터 개발 중"],
        play:    "Google Play에서 모든 앱 보기",
      },
      footer: {
        tagline: "작은 앱들. 솔직한 디자인.",
        copy:    "© 2025 Gamu Blocks",
        links:   ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
      },
    },

  };

  window.LANGUAGES = LANGUAGES;
  window.COPY = COPY;
}());
