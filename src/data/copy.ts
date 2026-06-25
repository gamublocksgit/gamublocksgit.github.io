export type Language = {
  key: string;
  label: string;
  name: string;
  htmlLang: string;
};

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  a11y: {
    skip: string;
    brandHome: string;
    language: string;
    playStore: string;
    appCard: string;
    footerLinks: string;
    googlePlayBadge: string;
    appStoreBadge: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    chips: string[];
  };
  apps: {
    eyebrow: string;
    h2: string;
    p: string;
  };
  mikenchi: AppCopy;
  journal: AppCopy;
  baby: AppCopy;
  neko: AppCopy;
  about: {
    eyebrow: string;
    h2: string;
    p: string;
    facts: string[];
    play: string;
  };
  footer: {
    tagline: string;
    copy: string;
    links: string[];
    contact: string;
  };
};

type AppCopy = {
  tag: string;
  tagline: string;
  p: string;
  summary: string;
  platforms: string;
  cta: string;
};

export const languages: Language[] = [
  { key: "en", label: "English", name: "English", htmlLang: "en" },
  { key: "ja", label: "日本語", name: "日本語", htmlLang: "ja" },
  { key: "pt_BR", label: "Português (Brasil)", name: "Português (Brasil)", htmlLang: "pt-BR" },
  { key: "ru", label: "Русский", name: "Русский", htmlLang: "ru" },
  { key: "fr", label: "Français", name: "Français", htmlLang: "fr" },
  { key: "ko", label: "한국어", name: "한국어", htmlLang: "ko" },
];

const en: SiteCopy = {
  meta: {
    title: "Gamu Blocks - Apps built for calm",
    description:
      "An indie studio making small, focused apps that respect your attention and protect your privacy. Gamu Journal, Gamu Baby, Gamu Nemu.",
    ogTitle: "Gamu Blocks - Apps built for calm",
    ogDescription: "Small, focused apps that respect your attention.",
  },
  a11y: {
    skip: "Skip to content",
    brandHome: "Gamu Blocks home",
    language: "Language",
    playStore: "Gamu Blocks on Google Play",
    appCard: "App details",
    footerLinks: "Footer links",
    googlePlayBadge: "Get it on Google Play",
    appStoreBadge: "Download on the App Store",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "Apps built for calm.",
    sub: "We make small, focused apps that respect your attention and protect your privacy.",
    chips: ["No subscriptions", "Privacy-first", "No ads"],
  },
  apps: {
    eyebrow: "/ Our apps",
    h2: "Four projects. One philosophy.",
    p: "Each Gamu project is made with care, focus, and respect for your attention.",
  },
  mikenchi: {
    tag: "Story",
    tagline: "A gentle slice-of-life story.",
    p: "Follow Mikenchi through small everyday moments, quiet humor, and warm encounters.",
    summary:
      "A cozy slice-of-life story about Mikenchi's everyday adventures, quiet humor, and the small moments that make ordinary days special.",
    platforms: "Read online",
    cta: "Learn more",
  },
  journal: {
    tag: "Diary & Mood",
    tagline: "A private diary that stays on your device.",
    p: "Write, reflect, and track your mood in an offline journal. No accounts. AES-256 encryption. Your data, your device.",
    summary:
      "Private offline diary app for Android & iOS. AES-256 encrypted. Write, reflect, and track mood — with 200+ journaling prompts, photo & voice capture, full-text search, and one-time Pro unlock. No account. No cloud. No ads.",
    platforms: "Android & iOS",
    cta: "View app",
  },
  baby: {
    tag: "Baby Tracker",
    tagline: "Track your baby's moments, simply.",
    p: "Log feeds, sleep, and milestones in a clean, calm app. No cloud sync. No accounts. Built for tired parents.",
    summary:
      "Offline baby tracker for Android. Log feeding, sleep, diapers, and 142 developmental milestones from birth to 60 months. Shareable milestone cards, PDF export, and a journey timeline — no account, no cloud sync, one-time purchase.",
    platforms: "Android",
    cta: "View app",
  },
  neko: {
    tag: "Focus Timer",
    tagline: "Stay focused with a cat by your side.",
    p: "A calm focus timer with a sleeping cat that wakes when you lose focus. Simple. Effective. No distractions.",
    summary:
      "Pomodoro focus timer with a sleeping cat companion for Android & iOS. Works fully offline. Cat wakes when you lose focus. Customizable intervals, productivity diary, seasonal backgrounds, and cozy cat packs. No account. No ads. Free to start.",
    platforms: "Android & iOS",
    cta: "View app",
  },
  about: {
    eyebrow: "/ The studio",
    h2: "Independently built.",
    p: "Gamu Blocks is a small independent studio. We make small, focused apps: quietly designed, respectful of your time, and honest about what they do.",
    facts: ["Indie studio", "No VC funding", "Building since 2022"],
    play: "See all apps on Google Play",
  },
  footer: {
    tagline: "Small apps. Honest design.",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "Contact Us",
  },
};

const ja: SiteCopy = {
  meta: {
    title: "Gamu Blocks - 穏やかなアプリ",
    description:
      "集中を尊重し、プライバシーを守る小さなアプリをつくるインディー開発スタジオ。Gamu Journal、Gamu Baby、Gamu Nemu。",
    ogTitle: "Gamu Blocks - 穏やかなアプリ",
    ogDescription: "集中を尊重する、小さく丁寧なアプリ。",
  },
  a11y: {
    skip: "本文へ移動",
    brandHome: "Gamu Blocks ホーム",
    language: "言語",
    playStore: "Google Play で Gamu Blocks を見る",
    appCard: "アプリの詳細",
    footerLinks: "フッターリンク",
    googlePlayBadge: "Google Play で手に入れよう",
    appStoreBadge: "App Store からダウンロード",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "穏やかなアプリを。",
    sub: "集中を尊重し、プライバシーを守る、小さく目的のはっきりしたアプリをつくっています。",
    chips: ["サブスクリプションなし", "プライバシー重視", "広告なし"],
  },
  apps: {
    eyebrow: "/ アプリ",
    h2: "4つのプロジェクト。ひとつの想い。",
    p: "Gamu のプロジェクトは、心を込め、集中を大切にし、あなたの時間を尊重して作られています。",
  },
  mikenchi: {
    tag: "ストーリー",
    tagline: "やさしい日常を描く物語。",
    p: "ミケンチの小さな日常、静かなユーモア、あたたかな出会いをお楽しみください。",
    summary:
      "ミケンチの日々の冒険と静かなユーモア、何気ない一日を特別にする小さな瞬間を描く、心あたたまる日常の物語。",
    platforms: "オンラインで読む",
    cta: "詳しく見る",
  },
  journal: {
    tag: "日記・気分",
    tagline: "端末に残る、プライベートな日記。",
    p: "オフラインの日記で、書き、振り返り、気分を記録できます。アカウントなし。AES-256暗号化。データはあなたの端末に。",
    summary:
      "Android・iOS向けのプライベートなオフライン日記アプリ。AES-256で暗号化。200以上のジャーナリングプロンプト、写真・音声記録、全文検索、買い切りのProアンロックで、書く・振り返る・気分を記録できます。アカウントなし。クラウドなし。広告なし。",
    platforms: "Android・iOS",
    cta: "アプリを見る",
  },
  baby: {
    tag: "育児記録",
    tagline: "赤ちゃんの大切な瞬間を、シンプルに記録。",
    p: "授乳、睡眠、成長の節目を、落ち着いた画面で記録できます。クラウド同期なし。アカウントなし。疲れた親のために。",
    summary:
      "Android向けのオフライン育児記録アプリ。授乳、睡眠、おむつ、生後0～60か月の142の発達マイルストーンを記録。共有できるマイルストーンカード、PDF書き出し、成長タイムラインを備え、アカウントなし、クラウド同期なし、買い切りです。",
    platforms: "Android",
    cta: "アプリを見る",
  },
  neko: {
    tag: "集中タイマー",
    tagline: "猫と一緒に集中しましょう。",
    p: "集中が切れると眠っていた猫が目を覚ます、穏やかな集中タイマー。シンプルで効果的。余計なものはありません。",
    summary:
      "Android・iOS向け、眠る猫と一緒に使うポモドーロ集中タイマー。完全オフラインで動作。集中が途切れると猫が目を覚まします。時間設定、集中日記、季節の背景、心地よい猫パックに対応。アカウントなし。広告なし。無料で開始。",
    platforms: "Android・iOS",
    cta: "アプリを見る",
  },
  about: {
    eyebrow: "/ スタジオ",
    h2: "独立して開発しています。",
    p: "Gamu Blocks は小さな独立スタジオです。静かに設計され、時間を尊重し、できることを正直に伝えるアプリをつくっています。",
    facts: ["インディー開発", "VC資金なし", "2022年から開発"],
    play: "Google Play ですべてのアプリを見る",
  },
  footer: {
    tagline: "小さなアプリ。誠実なデザイン。",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "お問い合わせ",
  },
};

const pt_BR: SiteCopy = {
  meta: {
    title: "Gamu Blocks - Apps feitos para a calma",
    description:
      "Um estúdio independente criando apps pequenos e focados que respeitam sua atenção e protegem sua privacidade. Gamu Journal, Gamu Baby, Gamu Nemu.",
    ogTitle: "Gamu Blocks - Apps feitos para a calma",
    ogDescription: "Apps pequenos e focados que respeitam sua atenção.",
  },
  a11y: {
    skip: "Pular para o conteúdo",
    brandHome: "Início do Gamu Blocks",
    language: "Idioma",
    playStore: "Gamu Blocks no Google Play",
    appCard: "Detalhes do app",
    footerLinks: "Links do rodapé",
    googlePlayBadge: "Disponível no Google Play",
    appStoreBadge: "Baixar na App Store",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "Apps feitos para a calma.",
    sub: "Criamos apps pequenos e focados que respeitam sua atenção e protegem sua privacidade.",
    chips: ["Sem assinaturas", "Privacidade em primeiro lugar", "Sem anúncios"],
  },
  apps: {
    eyebrow: "/ Nossos apps",
    h2: "Quatro projetos. Uma filosofia.",
    p: "Cada projeto Gamu é feito com cuidado, foco e respeito pela sua atenção.",
  },
  mikenchi: {
    tag: "História",
    tagline: "Uma história leve sobre a vida cotidiana.",
    p: "Acompanhe Mikenchi em pequenos momentos do dia a dia, humor tranquilo e encontros acolhedores.",
    summary:
      "Uma história aconchegante sobre as aventuras diárias de Mikenchi, humor tranquilo e os pequenos momentos que tornam dias comuns especiais.",
    platforms: "Leia online",
    cta: "Saiba mais",
  },
  journal: {
    tag: "Diário e Humor",
    tagline: "Um diário privado que fica no seu dispositivo.",
    p: "Escreva, reflita e acompanhe seu humor em um diário offline. Sem contas. Criptografia AES-256. Seus dados, seu dispositivo.",
    summary:
      "App de diário privado offline para Android e iOS. Criptografia AES-256. Escreva, reflita e acompanhe o humor com mais de 200 sugestões de escrita, captura de foto e voz, busca em texto completo e desbloqueio Pro por compra única. Sem conta. Sem nuvem. Sem anúncios.",
    platforms: "Android e iOS",
    cta: "Ver app",
  },
  baby: {
    tag: "Acompanhamento do Bebê",
    tagline: "Registre os momentos do seu bebê com simplicidade.",
    p: "Registre mamadas, sono e marcos em um app limpo e calmo. Sem sincronização em nuvem. Sem contas. Feito para pais cansados.",
    summary:
      "App offline para acompanhar o bebê no Android. Registre mamadas, sono, fraldas e 142 marcos de desenvolvimento do nascimento aos 60 meses. Cartões de marcos compartilháveis, exportação em PDF e linha do tempo da jornada - sem conta, sem sincronização em nuvem, compra única.",
    platforms: "Android",
    cta: "Ver app",
  },
  neko: {
    tag: "Temporizador de Foco",
    tagline: "Mantenha o foco com um gato ao seu lado.",
    p: "Um temporizador de foco calmo, com um gato dormindo que acorda quando você perde o foco. Simples. Eficaz. Sem distrações.",
    summary:
      "Temporizador Pomodoro de foco com um gato dormindo como companheiro para Android e iOS. Funciona totalmente offline. O gato acorda quando você perde o foco. Intervalos personalizáveis, diário de produtividade, fundos sazonais e pacotes de gatos aconchegantes. Sem conta. Sem anúncios. Grátis para começar.",
    platforms: "Android e iOS",
    cta: "Ver app",
  },
  about: {
    eyebrow: "/ O estúdio",
    h2: "Criado de forma independente.",
    p: "Gamu Blocks é um pequeno estúdio independente. Criamos apps pequenos e focados: discretos, respeitosos com seu tempo e honestos sobre o que fazem.",
    facts: ["Estúdio indie", "Sem investimento de VC", "Criando desde 2022"],
    play: "Ver todos os apps no Google Play",
  },
  footer: {
    tagline: "Apps pequenos. Design honesto.",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "Fale conosco",
  },
};

const ru: SiteCopy = {
  meta: {
    title: "Gamu Blocks - приложения для спокойствия",
    description:
      "Независимая студия, которая создает небольшие сфокусированные приложения, уважающие ваше внимание и приватность. Gamu Journal, Gamu Baby, Gamu Nemu.",
    ogTitle: "Gamu Blocks - приложения для спокойствия",
    ogDescription: "Небольшие приложения, которые уважают ваше внимание.",
  },
  a11y: {
    skip: "Перейти к содержимому",
    brandHome: "Главная Gamu Blocks",
    language: "Язык",
    playStore: "Gamu Blocks в Google Play",
    appCard: "Сведения о приложении",
    footerLinks: "Ссылки в подвале",
    googlePlayBadge: "Доступно в Google Play",
    appStoreBadge: "Загрузить в App Store",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "Приложения для спокойствия.",
    sub: "Мы создаем небольшие сфокусированные приложения, которые уважают ваше внимание и защищают приватность.",
    chips: ["Без подписок", "Приватность прежде всего", "Без рекламы"],
  },
  apps: {
    eyebrow: "/ Наши приложения",
    h2: "Четыре проекта. Одна философия.",
    p: "Каждый проект Gamu создается с заботой, вниманием и уважением к вашему времени.",
  },
  mikenchi: {
    tag: "История",
    tagline: "Добрая история о повседневной жизни.",
    p: "Следите за маленькими повседневными моментами Микэнти, тихим юмором и теплыми встречами.",
    summary:
      "Уютная история о повседневных приключениях Микэнти, тихом юморе и маленьких моментах, которые делают обычные дни особенными.",
    platforms: "Читать онлайн",
    cta: "Узнать больше",
  },
  journal: {
    tag: "Дневник и настроение",
    tagline: "Личный дневник, который остается на вашем устройстве.",
    p: "Пишите, размышляйте и отслеживайте настроение в офлайн-дневнике. Без аккаунтов. Шифрование AES-256. Ваши данные на вашем устройстве.",
    summary:
      "Личный офлайн-дневник для Android и iOS. Шифрование AES-256. Пишите, размышляйте и отслеживайте настроение с помощью более 200 подсказок для записей, фото и голосовых заметок, полнотекстового поиска и однократной покупки Pro. Без аккаунта. Без облака. Без рекламы.",
    platforms: "Android и iOS",
    cta: "Смотреть приложение",
  },
  baby: {
    tag: "Трекер малыша",
    tagline: "Просто записывайте важные моменты малыша.",
    p: "Записывайте кормления, сон и этапы развития в чистом спокойном приложении. Без облачной синхронизации. Без аккаунтов. Для уставших родителей.",
    summary:
      "Офлайн-трекер малыша для Android. Записывайте кормления, сон, подгузники и 142 этапа развития от рождения до 60 месяцев. Карточки достижений для публикации, экспорт в PDF и лента взросления - без аккаунта, без облачной синхронизации, с однократной покупкой.",
    platforms: "Android",
    cta: "Смотреть приложение",
  },
  neko: {
    tag: "Таймер фокуса",
    tagline: "Сосредоточьтесь вместе с котом.",
    p: "Спокойный таймер фокуса со спящим котом, который просыпается, когда вы теряете концентрацию. Просто. Эффективно. Без отвлечений.",
    summary:
      "Pomodoro-таймер фокуса со спящим котом-компаньоном для Android и iOS. Полностью работает офлайн. Кот просыпается, когда вы теряете концентрацию. Настраиваемые интервалы, дневник продуктивности, сезонные фоны и уютные наборы котов. Без аккаунта. Без рекламы. Начать можно бесплатно.",
    platforms: "Android и iOS",
    cta: "Смотреть приложение",
  },
  about: {
    eyebrow: "/ Студия",
    h2: "Независимая разработка.",
    p: "Gamu Blocks - небольшая независимая студия. Мы создаем приложения, которые хотели бы видеть сами: спокойные, уважительные к вашему времени и честные в описании.",
    facts: ["Инди-студия", "Без венчурного финансирования", "Разрабатываем с 2022 года"],
    play: "Смотреть все приложения в Google Play",
  },
  footer: {
    tagline: "Небольшие приложения. Честный дизайн.",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "Связаться с нами",
  },
};

const fr: SiteCopy = {
  meta: {
    title: "Gamu Blocks - Des apps conçues pour le calme",
    description:
      "Un studio indépendant qui crée de petites apps ciblées, respectueuses de votre attention et de votre vie privée. Gamu Journal, Gamu Baby, Gamu Nemu.",
    ogTitle: "Gamu Blocks - Des apps conçues pour le calme",
    ogDescription: "De petites apps ciblées qui respectent votre attention.",
  },
  a11y: {
    skip: "Aller au contenu",
    brandHome: "Accueil Gamu Blocks",
    language: "Langue",
    playStore: "Gamu Blocks sur Google Play",
    appCard: "Détails de l’app",
    footerLinks: "Liens de pied de page",
    googlePlayBadge: "Disponible sur Google Play",
    appStoreBadge: "Télécharger dans l’App Store",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "Des apps conçues pour le calme.",
    sub: "Nous créons de petites apps ciblées qui respectent votre attention et protègent votre vie privée.",
    chips: ["Sans abonnements", "Priorité à la vie privée", "Sans publicité"],
  },
  apps: {
    eyebrow: "/ Nos apps",
    h2: "Quatre projets. Une philosophie.",
    p: "Chaque projet Gamu est créé avec soin, concentration et respect de votre attention.",
  },
  mikenchi: {
    tag: "Histoire",
    tagline: "Une douce histoire tranche de vie.",
    p: "Suivez Mikenchi dans de petits moments du quotidien, un humour discret et des rencontres chaleureuses.",
    summary:
      "Une histoire chaleureuse sur les aventures quotidiennes de Mikenchi, son humour discret et les petits moments qui rendent les journées ordinaires spéciales.",
    platforms: "Lire en ligne",
    cta: "En savoir plus",
  },
  journal: {
    tag: "Journal et humeur",
    tagline: "Un journal privé qui reste sur votre appareil.",
    p: "Écrivez, réfléchissez et suivez votre humeur dans un journal hors ligne. Sans compte. Chiffrement AES-256. Vos données, votre appareil.",
    summary:
      "Application de journal intime privé hors ligne pour Android et iOS. Chiffrement AES-256. Écrivez, réfléchissez et suivez votre humeur avec plus de 200 invites d'écriture, la capture photo et vocale, la recherche plein texte et un déblocage Pro par achat unique. Sans compte. Sans cloud. Sans publicité.",
    platforms: "Android et iOS",
    cta: "Voir l’app",
  },
  baby: {
    tag: "Suivi bébé",
    tagline: "Suivez simplement les moments de votre bébé.",
    p: "Notez les repas, le sommeil et les étapes dans une app claire et calme. Pas de synchronisation cloud. Pas de compte. Pensée pour les parents fatigués.",
    summary:
      "Application de suivi de bébé hors ligne pour Android. Notez les repas, le sommeil, les couches et 142 étapes du développement de la naissance à 60 mois. Cartes d'étapes partageables, export PDF et chronologie du parcours - sans compte, sans synchronisation cloud, achat unique.",
    platforms: "Android",
    cta: "Voir l’app",
  },
  neko: {
    tag: "Minuteur de concentration",
    tagline: "Restez concentré avec un chat à vos côtés.",
    p: "Un minuteur de concentration apaisant, avec un chat endormi qui se réveille quand vous perdez le fil. Simple. Efficace. Sans distractions.",
    summary:
      "Minuteur Pomodoro de concentration avec un chat endormi pour compagnon sur Android et iOS. Fonctionne entièrement hors ligne. Le chat se réveille lorsque vous perdez le fil. Intervalles personnalisables, journal de productivité, arrière-plans saisonniers et packs de chats douillets. Sans compte. Sans publicité. Gratuit pour commencer.",
    platforms: "Android et iOS",
    cta: "Voir l’app",
  },
  about: {
    eyebrow: "/ Le studio",
    h2: "Conçu indépendamment.",
    p: "Gamu Blocks est un petit studio indépendant. Nous créons de petites apps ciblées : discrètes, respectueuses de votre temps et honnêtes sur ce qu’elles font.",
    facts: ["Studio indépendant", "Sans financement VC", "En développement depuis 2022"],
    play: "Voir toutes les apps sur Google Play",
  },
  footer: {
    tagline: "Petites apps. Design honnête.",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "Nous contacter",
  },
};

const ko: SiteCopy = {
  meta: {
    title: "Gamu Blocks - 차분함을 위한 앱",
    description:
      "사용자의 집중과 개인정보를 존중하는 작고 명확한 앱을 만드는 인디 스튜디오입니다. Gamu Journal, Gamu Baby, Gamu Nemu.",
    ogTitle: "Gamu Blocks - 차분함을 위한 앱",
    ogDescription: "사용자의 집중을 존중하는 작고 명확한 앱.",
  },
  a11y: {
    skip: "본문으로 이동",
    brandHome: "Gamu Blocks 홈",
    language: "언어",
    playStore: "Google Play에서 Gamu Blocks 보기",
    appCard: "앱 세부 정보",
    footerLinks: "푸터 링크",
    googlePlayBadge: "Google Play에서 받기",
    appStoreBadge: "App Store에서 다운로드",
  },
  hero: {
    eyebrow: "/ Gamu Blocks",
    h1: "차분함을 위한 앱.",
    sub: "우리는 사용자의 집중과 개인정보를 존중하는 작고 명확한 앱을 만듭니다.",
    chips: ["구독 없음", "개인정보 우선", "광고 없음"],
  },
  apps: {
    eyebrow: "/ 앱",
    h2: "네 개의 프로젝트. 하나의 철학.",
    p: "모든 Gamu 프로젝트는 정성과 집중, 사용자의 시간을 존중하는 마음으로 만듭니다.",
  },
  mikenchi: {
    tag: "이야기",
    tagline: "따뜻한 일상 속 이야기를 담은 작품.",
    p: "미켄치의 소소한 일상과 잔잔한 유머, 따뜻한 만남을 함께하세요.",
    summary:
      "미켄치의 일상 속 모험과 잔잔한 유머, 평범한 하루를 특별하게 만드는 작은 순간들을 담은 포근한 일상 이야기.",
    platforms: "온라인에서 읽기",
    cta: "자세히 보기",
  },
  journal: {
    tag: "일기와 기분",
    tagline: "기기 안에 머무는 비공개 일기.",
    p: "오프라인 일기에서 글을 쓰고, 되돌아보고, 기분을 기록하세요. 계정 없음. AES-256 암호화. 당신의 데이터는 당신의 기기에.",
    summary:
      "Android 및 iOS용 비공개 오프라인 일기 앱입니다. AES-256으로 암호화됩니다. 200개 이상의 저널링 프롬프트, 사진 및 음성 기록, 전체 텍스트 검색, 일회성 Pro 잠금 해제로 글을 쓰고 되돌아보며 기분을 기록하세요. 계정 없음. 클라우드 없음. 광고 없음.",
    platforms: "Android 및 iOS",
    cta: "앱 보기",
  },
  baby: {
    tag: "아기 기록",
    tagline: "아기의 소중한 순간을 간단하게 기록하세요.",
    p: "수유, 수면, 성장 순간을 깔끔하고 차분한 앱에 기록하세요. 클라우드 동기화 없음. 계정 없음. 지친 부모를 위해 만들었습니다.",
    summary:
      "Android용 오프라인 아기 기록 앱입니다. 출생부터 60개월까지의 수유, 수면, 기저귀와 142개 발달 이정표를 기록하세요. 공유 가능한 이정표 카드, PDF 내보내기, 성장 타임라인을 제공합니다. 계정 없음. 클라우드 동기화 없음. 일회성 구매.",
    platforms: "Android",
    cta: "앱 보기",
  },
  neko: {
    tag: "집중 타이머",
    tagline: "고양이와 함께 집중하세요.",
    p: "집중이 흐트러지면 잠든 고양이가 깨어나는 차분한 집중 타이머입니다. 단순하고 효과적이며 방해가 없습니다.",
    summary:
      "Android 및 iOS용 잠든 고양이 동반 Pomodoro 집중 타이머입니다. 완전히 오프라인으로 작동합니다. 집중력을 잃으면 고양이가 깨어납니다. 사용자 지정 시간 간격, 생산성 일기, 계절 배경, 포근한 고양이 팩을 제공합니다. 계정 없음. 광고 없음. 무료로 시작.",
    platforms: "Android 및 iOS",
    cta: "앱 보기",
  },
  about: {
    eyebrow: "/ 스튜디오",
    h2: "독립적으로 만들고 있습니다.",
    p: "Gamu Blocks는 작은 인디 스튜디오입니다. 조용하게 설계되고, 시간을 존중하며, 무엇을 하는지 솔직하게 말하는 앱을 만듭니다.",
    facts: ["인디 스튜디오", "VC 투자 없음", "2022년부터 개발"],
    play: "Google Play에서 모든 앱 보기",
  },
  footer: {
    tagline: "작은 앱. 정직한 디자인.",
    copy: "© 2026 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Nemu"],
    contact: "문의하기",
  },
};

export const copy: Record<string, SiteCopy> = {
  en,
  ja,
  pt_BR,
  ru,
  fr,
  ko,
};

export const defaultCopy = en;
