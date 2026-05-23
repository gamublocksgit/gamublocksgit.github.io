import type { Language, SiteCopy } from "../data/copy";

const LANG_KEY = "gamu-blocks-lang";

const getPath = (source: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);

const normalizeLocale = (raw: string | null | undefined, languages: Language[]) => {
  if (!raw) return null;
  const normalized = String(raw).trim().replace("-", "_");
  const lower = normalized.toLowerCase();
  if (lower === "pt" || lower === "pt_br") return "pt_BR";

  const exact = languages.find((language) => language.key.toLowerCase() === lower);
  if (exact) return exact.key;

  const base = lower.split("_")[0];
  const match = languages.find((language) => language.key.toLowerCase() === base);
  return match?.key ?? null;
};

const setMeta = (selector: string, value: string | undefined) => {
  const element = document.querySelector<HTMLMetaElement>(`meta[${selector}]`);
  if (element && value) element.setAttribute("content", value);
};

const applyDataAttributes = (t: SiteCopy) => {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const value = getPath(t, element.dataset.i18n ?? "");
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr?.split(";").forEach((entry) => {
      const [attr, path] = entry.split(":");
      const value = getPath(t, path);
      if (attr && typeof value === "string") element.setAttribute(attr, value);
    });
  });
};

const updateIndexedText = (selector: string, values: string[]) => {
  document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
};

const updateJsonLd = (t: SiteCopy) => {
  const element = document.getElementById("org-jsonld");
  if (!element) return;

  element.textContent = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gamu Blocks",
      url: "https://www.gamublocks.com",
      logo: "https://www.gamublocks.com/assets/logo.png",
      sameAs: ["https://play.google.com/store/apps/dev?id=8831894198403002159"],
      description: t.meta.description,
    },
    null,
    2,
  );
};

const resolveInitialLocale = (languages: Language[]) => {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = normalizeLocale(params.get("lang"), languages);
  if (fromQuery) return fromQuery;

  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const candidate of browserLocales) {
    const resolved = normalizeLocale(candidate, languages);
    if (resolved) return resolved;
  }

  try {
    const fromStorage = normalizeLocale(localStorage.getItem(LANG_KEY), languages);
    if (fromStorage) return fromStorage;
  } catch {
    // Storage can be blocked; default locale still works.
  }

  return "en";
};

const renderLanguageSwitcher = (current: string, languages: Language[]) => {
  const select = document.querySelector<HTMLSelectElement>(".lang-switcher");
  if (!select) return;

  if (!select.options.length) {
    languages.forEach((language) => {
      const option = document.createElement("option");
      option.value = language.key;
      option.textContent = language.name;
      option.title = language.name;
      option.lang = language.htmlLang;
      select.appendChild(option);
    });
  }

  select.value = current;
};

export const initLanguage = (copy: Record<string, SiteCopy>, languages: Language[]) => {
  const langByKey = Object.fromEntries(languages.map((language) => [language.key, language]));

  const renderLocale = (locale: string, persist = false) => {
    const lang = normalizeLocale(locale, languages) ?? "en";
    const t = copy[lang] ?? copy.en;
    const meta = langByKey[lang] ?? langByKey.en;

    document.documentElement.lang = meta.htmlLang || lang;
    document.title = t.meta.title;
    setMeta('name="description"', t.meta.description);
    setMeta('property="og:title"', t.meta.ogTitle);
    setMeta('property="og:description"', t.meta.ogDescription);

    renderLanguageSwitcher(lang, languages);
    applyDataAttributes(t);
    updateIndexedText(".hero-chips .chip", t.hero.chips);
    updateIndexedText(".about-facts li", t.about.facts);
    updateJsonLd(t);

    if (persist) {
      try {
        localStorage.setItem(LANG_KEY, lang);
      } catch {
        // Storage can be blocked; visible locale still changes.
      }
    }
  };

  renderLocale(resolveInitialLocale(languages), false);

  document.querySelector<HTMLSelectElement>(".lang-switcher")?.addEventListener("change", (event) => {
    renderLocale((event.target as HTMLSelectElement).value, true);
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};
