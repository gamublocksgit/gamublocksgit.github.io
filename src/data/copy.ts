export type Language = {
  key: string;
  label: string;
  name: string;
  htmlLang: string;
};

export type SiteCopy = typeof englishCopy;

export const languages: Language[] = [
  { key: "en", label: "English", name: "English", htmlLang: "en" },
  { key: "ja", label: "日本語", name: "日本語", htmlLang: "ja" },
  { key: "pt_BR", label: "Português (Brasil)", name: "Português (Brasil)", htmlLang: "pt-BR" },
  { key: "ru", label: "Русский", name: "Русский", htmlLang: "ru" },
  { key: "fr", label: "Français", name: "Français", htmlLang: "fr" },
  { key: "ko", label: "한국어", name: "한국어", htmlLang: "ko" },
];

const englishCopy = {
  meta: {
    title: "Gamu Blocks - Apps built for calm",
    description:
      "An indie studio making small, focused apps that respect your attention and protect your privacy. Gamu Journal, Gamu Baby, Gamu Neko.",
    ogTitle: "Gamu Blocks - Apps built for calm",
    ogDescription: "Small, focused apps that respect your attention.",
  },
  a11y: {
    skip: "Skip to content",
    brandHome: "Gamu Blocks home",
    language: "Language",
    playStore: "Gamu Blocks on Google Play",
    appCard: "App details",
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
    h2: "Three apps. One philosophy.",
    p: "Each Gamu app does one thing well. No ads, no tracking, no subscriptions.",
  },
  journal: {
    tag: "Diary & Mood",
    tagline: "A private diary that stays on your device.",
    p: "Write, reflect, and track your mood in an offline journal. No accounts. AES-256 encryption. Your data, your device.",
    platforms: "Android & iOS",
    cta: "View app",
  },
  baby: {
    tag: "Baby Tracker",
    tagline: "Track your baby's moments, simply.",
    p: "Log feeds, sleep, and milestones in a clean, calm app. No cloud sync. No accounts. Built for tired parents.",
    platforms: "Android",
    cta: "View app",
  },
  neko: {
    tag: "Focus Timer",
    tagline: "Stay focused with a cat by your side.",
    p: "A calm focus timer with a sleeping cat that wakes when you lose focus. Simple. Effective. No distractions.",
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
    copy: "© 2025 Gamu Blocks",
    links: ["Gamu Journal", "Gamu Baby", "Gamu Neko"],
  },
};

export const copy: Record<string, SiteCopy> = Object.fromEntries(
  languages.map((language) => [language.key, englishCopy]),
) as Record<string, SiteCopy>;

export const defaultCopy = englishCopy;
