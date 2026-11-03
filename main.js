(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DANG_SITE = api;
  if (root.document) {
    const start = () => api.mountSite(root.document, root.localStorage, root.navigator);
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  function getInitialLocale(savedLanguage, browserLanguage) {
    if (savedLanguage === 'zh' || savedLanguage === 'en') return savedLanguage;
    return /^zh(?:-|$)/i.test(browserLanguage || '') ? 'zh' : 'en';
  }

  function sectionHeading(section, id, showIntro = true) {
    return `<div class="section-heading"><p class="eyebrow">${escapeHTML(section.kicker)}</p><h2 id="${escapeHTML(id)}-title">${escapeHTML(section.title)}</h2>${showIntro && section.body ? `<p class="section-intro">${escapeHTML(section.body)}</p>` : ''}</div>`;
  }

  function renderTimeline(items) {
    return items.map((item) => `<li class="timeline-item"><p class="timeline-date">${escapeHTML(item.date)}</p><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></div></li>`).join('');
  }

  function renderResearch(items) {
    return items.map((item) => `<article class="research-item"><span class="research-number">${escapeHTML(item.number)}</span><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.detail)}</p></div>${item.image ? `<img class="research-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.alt)}" loading="lazy" width="900" height="520">` : ''}</article>`).join('');
  }

  function renderPublications(items, labels) {
    return items.map((item) => `<li class="publication-item"><div class="publication-year">${escapeHTML(item.year)}</div><div class="publication-copy"><h3>${escapeHTML(item.title)}</h3><p class="publication-authors">${escapeHTML(item.authors || '')}</p><p class="publication-venue">${escapeHTML(item.venue)}</p></div><a class="text-link publication-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(labels.link)}: ${escapeHTML(item.title)}">${escapeHTML(item.urlLabel || labels.link)} <span aria-hidden="true">↗</span></a></li>`).join('');
  }

  function renderAwards(items) {
    return items.map((item) => `<li class="award-item"><span class="award-year">${escapeHTML(item.year)}</span><p>${escapeHTML(item.title)}</p></li>`).join('');
  }

  function renderSite(locale, content) {
    const data = content || (typeof window !== 'undefined' ? window.SITE_CONTENT : null);
    if (!data || !data[locale]) throw new Error(`Missing site content for locale: ${locale}`);
    const copy = data[locale];
    const links = Object.entries(copy.nav).map(([section, label]) => `<a href="#${escapeHTML(section)}">${escapeHTML(label)}</a>`).join('');
    const aboutBody = escapeHTML(copy.about.body).replace(/\n/g, '<br>');
    const contactBody = escapeHTML(copy.contact.body).replace(/\n/g, '<br>');

    return `
      <a class="skip-link" href="#top">${escapeHTML(copy.labels.skip)}</a>
      <header class="site-header">
        <a class="wordmark" href="#top" aria-label="${escapeHTML(copy.hero.title)} — ${escapeHTML(copy.hero.eyebrow)}"><span class="wordmark-mark" aria-hidden="true">YD</span><span class="wordmark-text">${escapeHTML(copy.hero.title)}</span></a>
        <nav class="site-nav" aria-label="${escapeHTML(copy.labels.navigation)}">${links}</nav>
        <button class="language-toggle" id="language-toggle" type="button" aria-label="${escapeHTML(copy.labels.language)}">${locale === 'zh' ? 'EN' : '中文'}</button>
      </header>
      <main id="top">
        <section class="hero-section" aria-labelledby="hero-title">
          <div class="hero-copy"><p class="hero-eyebrow">${escapeHTML(copy.hero.eyebrow)}</p><h1 id="hero-title">${escapeHTML(copy.hero.title)}</h1><p class="hero-role">${escapeHTML(copy.hero.role)}</p><p class="hero-summary">${escapeHTML(copy.hero.summary)}</p><div class="hero-actions"><a class="button button-primary" href="#publications">${escapeHTML(copy.hero.primary)} <span aria-hidden="true">↘</span></a><a class="button button-quiet" href="#contact">${escapeHTML(copy.hero.secondary)}</a></div></div>
          <img class="hero-portrait" src="assets/portrait.jpg" alt="${escapeHTML(copy.hero.portraitAlt)}" width="210" height="270">
        </section>
        <section class="content-section about-section" id="about" aria-labelledby="about-title">
          ${sectionHeading(copy.about, 'about', false)}
          <div class="about-grid"><p class="about-body">${aboutBody}</p><ol class="timeline">${renderTimeline(copy.about.timeline)}</ol></div>
        </section>
        <section class="content-section research-section" id="research" aria-labelledby="research-title">
          ${sectionHeading(copy.research, 'research')}
          <div class="research-list">${renderResearch(copy.research.items)}</div>
          <p class="research-figure-note">${escapeHTML(copy.research.figureLabel)}</p>
        </section>
        <section class="content-section publications-section" id="publications" aria-labelledby="publications-title">
          ${sectionHeading(copy.publicationsHeading, 'publications')}
          <ol class="publication-list">${renderPublications(data.publications, copy.labels)}</ol>
          <div class="publication-sources"><a class="text-link scholar-link" href="${escapeHTML(copy.contact.scholarUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.contact.scholarLabel)} <span aria-hidden="true">↗</span></a><a class="text-link scholar-link" href="${escapeHTML(copy.contact.dblpUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.contact.dblpLabel)} <span aria-hidden="true">↗</span></a></div>
        </section>
        <section class="content-section awards-section" id="awards" aria-labelledby="awards-title">
          ${sectionHeading(copy.awards, 'awards')}
          <ol class="award-list">${renderAwards(copy.awards.items)}</ol>
        </section>
        <section class="contact-section" id="contact" aria-labelledby="contact-title">
          <div><p class="eyebrow">${escapeHTML(copy.contact.kicker)}</p><h2 id="contact-title">${escapeHTML(copy.contact.title)}</h2><p class="contact-body">${contactBody}</p></div>
          <div class="contact-links"><a class="email-link" href="mailto:${escapeHTML(copy.contact.email)}">${escapeHTML(copy.contact.email)} <span aria-hidden="true">↗</span></a><a href="${escapeHTML(copy.contact.scholarUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.contact.scholarLabel)} ↗</a><a href="${escapeHTML(copy.contact.dblpUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.contact.dblpLabel)} ↗</a><a href="${escapeHTML(copy.contact.institutionUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.contact.institutionLabel)} ↗</a></div>
        </section>
      </main>
      <footer class="site-footer"><a class="footer-name" href="#top">${escapeHTML(copy.hero.title)}</a><p>${escapeHTML(copy.contact.footer)}</p><a href="CONTENT_SOURCES.md">${escapeHTML(copy.labels.source)}</a></footer>
    `;
  }

  function mountSite(documentRef, storage, navigatorRef) {
    const app = documentRef.querySelector('#site-root');
    if (!app) return;
    let saved = null;
    try { saved = storage && storage.getItem('dang-site-language'); } catch (_) { saved = null; }
    let locale = getInitialLocale(saved, navigatorRef && navigatorRef.language);
    const draw = () => {
      documentRef.documentElement.lang = locale;
      app.innerHTML = renderSite(locale);
      const toggle = app.querySelector('#language-toggle');
      if (toggle) toggle.addEventListener('click', () => {
        locale = locale === 'zh' ? 'en' : 'zh';
        try { if (storage) storage.setItem('dang-site-language', locale); } catch (_) { /* storage is optional */ }
        draw();
        app.querySelector('#language-toggle').focus();
      });
    };
    draw();
  }

  return { escapeHTML, getInitialLocale, renderSite, mountSite };
});
