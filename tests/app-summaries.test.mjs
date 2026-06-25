import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const rootUrl = new URL("../", import.meta.url);

test("renders one localized summary row for each app", async () => {
  const html = await readFile(new URL("dist/index.html", rootUrl), "utf8");

  assert.match(html, /class="app-summaries"/);
  assert.equal((html.match(/class="app-summary"/g) ?? []).length, 4);
  assert.match(html, /data-i18n="mikenchi\.summary"/);
  assert.match(html, /data-i18n="journal\.summary"/);
  assert.match(html, /data-i18n="baby\.summary"/);
  assert.match(html, /data-i18n="neko\.summary"/);
  assert.ok(html.indexOf('data-i18n="mikenchi.summary"') < html.indexOf('data-i18n="journal.summary"'));
});

test("renders the Mikenchi tile with its destination and supplied branding", async () => {
  const html = await readFile(new URL("dist/index.html", rootUrl), "utf8");

  assert.match(html, /data-app="mikenchi"/);
  assert.match(html, /href="https:\/\/mikenchi\.gamublocks\.com\/?"/);
  assert.match(html, /src="\/assets\/mikenchi-avatar\.png"/);
  assert.match(html, /src="\/assets\/mikenchi-logotype\.png"/);
});

test("describes Mikenchi as a story with a flexible call to action", async () => {
  const html = await readFile(new URL("dist/index.html", rootUrl), "utf8");
  const copySource = await readFile(new URL("src/data/copy.ts", rootUrl), "utf8");

  assert.match(html, /data-i18n="mikenchi\.tag">Story</);
  assert.match(html, /data-i18n="mikenchi\.cta">Learn more</);
  assert.doesNotMatch(copySource, /webtoon|ウェブトゥーン|вебтун|웹툰/i);
});

test("supplies translated summary copy for every app and locale", async () => {
  const copySource = await readFile(new URL("src/data/copy.ts", rootUrl), "utf8");

  assert.match(copySource, /\bsummary:\s*string;/);
  assert.equal((copySource.match(/\bsummary:\s*\n?\s*"/g) ?? []).length, 24);
});

test("summary list styles use existing design tokens", async () => {
  const css = await readFile(new URL("src/styles/styles.css", rootUrl), "utf8");

  assert.match(css, /\.app-summaries\s*\{/);
  assert.match(css, /\.app-summary-desc\s*\{[^}]*var\(--bone-2\)/s);
  assert.doesNotMatch(css, /--space-xl|--text-sm|--color-text-muted/);
});

test("renders a localized footer email contact link", async () => {
  const html = await readFile(new URL("dist/index.html", rootUrl), "utf8");
  const copySource = await readFile(new URL("src/data/copy.ts", rootUrl), "utf8");

  assert.match(html, /data-i18n-attr="aria-label:a11y\.footerLinks"/);
  assert.match(html, /href="mailto:gamublocks@gmail\.com"[^>]*data-i18n="footer\.contact">Contact Us<\/a>/);
  assert.match(copySource, /\bfooterLinks:\s*string;/);
  assert.match(copySource, /\bcontact:\s*string;/);
  assert.equal((copySource.match(/\bcontact:\s*"/g) ?? []).length, 6);
});
