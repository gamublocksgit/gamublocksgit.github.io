/* Gamu Blocks — studio landing page interactions
   Vanilla JS. No framework. No build step. */

(function () {
  "use strict";

  const LANG_KEY   = "gamu-blocks-lang";
  const languages  = window.LANGUAGES || [{ key: "en", label: "EN", name: "English", htmlLang: "en" }];
  const copy       = window.COPY || {};
  const langByKey  = Object.fromEntries(languages.map((l) => [l.key, l]));

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const getPath = (source, path) =>
    path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), source);

  const setText = (sel, value, root = document) => {
    const el = typeof sel === "string" ? $(sel, root) : sel;
    if (el && value != null) el.textContent = value;
  };

  const setMeta = (selector, value) => {
    const el = $(`meta[${selector}]`);
    if (el && value != null) el.setAttribute("content", value);
  };

  const normalizeLocale = (raw) => {
    if (!raw) return null;
    const norm  = String(raw).trim().replace("-", "_");
    const lower = norm.toLowerCase();
    if (lower === "pt" || lower === "pt_br") return "pt_BR";
    const exact = languages.find((l) => l.key.toLowerCase() === lower);
    if (exact) return exact.key;
    const base  = lower.split("_")[0];
    const match = languages.find((l) => l.key.toLowerCase() === base);
    return match ? match.key : null;
  };

  const resolveInitialLocale = () => {
    const params    = new URLSearchParams(window.location.search);
    const fromQuery = normalizeLocale(params.get("lang"));
    if (fromQuery) return fromQuery;
    const browserLocales = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language];
    for (const candidate of browserLocales) {
      const resolved = normalizeLocale(candidate);
      if (resolved) return resolved;
    }
    try {
      const fromStorage = normalizeLocale(localStorage.getItem(LANG_KEY));
      if (fromStorage) return fromStorage;
    } catch (_) {}
    return "en";
  };

  const renderLanguageSwitcher = (current) => {
    const select = $(".lang-switcher");
    if (!select) return;
    if (!select.options.length) {
      languages.forEach((lang) => {
        const opt = document.createElement("option");
        opt.value       = lang.key;
        opt.textContent = lang.name || lang.label;
        opt.title       = lang.name;
        opt.lang        = lang.htmlLang || lang.key;
        select.appendChild(opt);
      });
    }
    select.value = current;
  };

  const applyDataAttributes = (t) => {
    $$("[data-i18n]").forEach((el) => {
      const value = getPath(t, el.dataset.i18n);
      if (value != null) el.textContent = value;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((entry) => {
        const [attr, path] = entry.split(":");
        const value = getPath(t, path);
        if (attr && value != null) el.setAttribute(attr, value);
      });
    });
  };

  const updateJsonLd = (t) => {
    const el = $("#org-jsonld");
    if (!el) return;
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type":    "Organization",
      "name":     "Gamu Blocks",
      "url":      "https://gamublocks.github.io",
      "logo":     "https://gamublocks.github.io/assets/logo.png",
      "sameAs":   ["https://play.google.com/store/apps/dev?id=8831894198403002159"],
      "description": t.meta.description,
    }, null, 2);
  };

  const renderLocale = (locale, persist = false) => {
    const lang = normalizeLocale(locale) || "en";
    const t    = copy[lang] || copy.en;
    const meta = langByKey[lang] || langByKey.en;

    document.documentElement.lang = meta.htmlLang || lang;
    document.title = t.meta.title;
    setMeta('name="description"',        t.meta.description);
    setMeta('property="og:title"',       t.meta.ogTitle);
    setMeta('property="og:description"', t.meta.ogDescription);

    renderLanguageSwitcher(lang);
    applyDataAttributes(t);
    updateJsonLd(t);

    /* hero chips */
    const chips = $$(".hero-chips .chip");
    chips.forEach((chip, i) => {
      if (t.hero.chips[i] != null) chip.textContent = t.hero.chips[i];
    });

    /* about facts */
    const facts = $$(".about-facts li");
    facts.forEach((li, i) => {
      if (t.about.facts[i] != null) li.textContent = t.about.facts[i];
    });

    /* store badge alt texts per card */
    $$(".app-card").forEach((card) => {
      const app = card.dataset.app;
      if (!app || !t[app]) return;
      const gpImg  = $(".store-link[data-store='play'] img",  card);
      const appImg = $(".store-link[data-store='apple'] img", card);
      if (gpImg)  gpImg.alt  = t.a11y.googlePlayBadge;
      if (appImg) appImg.alt = t.a11y.appStoreBadge;
    });

    if (persist) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
    }
  };

  /* ── init ─────────────────────────────────────────────────────── */
  const initialLocale = resolveInitialLocale();
  renderLocale(initialLocale, false);

  $(".lang-switcher")?.addEventListener("change", (e) => {
    renderLocale(e.target.value, true);
  });

  /* smooth scroll for any in-page anchor links */
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : document.body;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

}());
