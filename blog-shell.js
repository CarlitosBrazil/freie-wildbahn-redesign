if (!document.querySelector('script[src*="script.js?v=8"]')) {
  const globalScript = document.createElement('script');
  globalScript.src = '../script.js?v=8';
  globalScript.onload = () => {
    if (document.readyState !== 'loading') {
      window.renderGlobalHeader?.();
      window.bindGlobalHeader?.();
      window.renderGlobalReviews?.();
      window.applyGlobalRegistrationLinks?.();
      window.applyGlobalContentCtas?.();
    }
  };
  document.head.appendChild(globalScript);
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.concept-header');
  if (header && typeof window.renderGlobalHeader !== 'function') {
    header.outerHTML = `<header>
      <div class="top-bar"><div class="container top-bar-container"><nav aria-label="Hilfsnavigation"><ul class="top-nav-list"><li><a href="kontakt.html">Kontakt</a></li><li><a href="ksk-beratung.html">Beratung</a></li><li><a href="#">Mitgliedschaft</a></li><li><a href="https://login.freie-wildbahn.de/login">Login</a></li></ul></nav></div></div>
      <div class="main-nav"><div class="container main-nav-container"><a href="../index.html" class="logo"><img src="../assets/logo.png" alt="Freie Wildbahn e.V."></a><nav aria-label="Hauptnavigation"><ul class="menu-list"><li class="menu-item"><a href="../index.html">Startseite</a></li><li class="menu-item"><a href="ksk-pruefung-versicherte.html">KSK-Prüfung</a></li><li class="menu-item"><a href="ksk-beitragsrechner.html">KSK-Rechner</a><ul class="dropdown-menu"><li><a href="ksk-beitragsrechner.html">KSK-Beitragsrechner</a></li><li><a href="ksk-beitraege-kosten.html">KSK-Beiträge und Kosten</a></li></ul></li><li class="menu-item"><a href="kuenstlersozialkasse.html">Künstlersozialkasse</a></li><li class="menu-item"><a href="team.html">Verein</a></li><li class="menu-item active"><a href="blog.html">Blog</a><ul class="dropdown-menu"><li><a href="blog-kategorie.html?kategorie=allgemein">Allgemein</a></li><li><a href="blog-kategorie.html?kategorie=kuenstlersozialkasse">Künstlersozialkasse</a></li><li><a href="blog-kategorie.html?kategorie=recht">Recht</a></li><li><a href="blog-kategorie.html?kategorie=steuern">Steuern</a></li><li><a href="blog-kategorie.html?kategorie=versicherung">Versicherung</a></li></ul></li></ul></nav><div class="nav-right-group"><a href="ksk-beratung.html" class="btn btn-orange">KSK-Beratung</a></div></div></div>
      <div class="mobile-header"><a href="../index.html" class="mobile-logo"><img src="../assets/logo.png" alt="Freie Wildbahn e.V."></a><div class="mobile-nav-actions"><a href="ksk-beratung.html" class="btn btn-orange">KSK-Beratung</a></div></div>
    </header>`;
    document.querySelectorAll('header .nav-right-group .btn-orange, header .mobile-nav-actions .btn-orange')
      .forEach(link => {
        link.textContent = 'KSK-Beratung';
        link.setAttribute('href', 'ksk-beratung.html');
      });
  }
  const footer = document.querySelector('.concept-footer');
  if (footer) {
    footer.outerHTML = `<footer class="site-footer"><div class="footer-upper"><div class="container footer-upper-grid"><div class="footer-brand-col"><a href="../index.html" class="footer-logo"><img src="../assets/logo.png" alt="Freie Wildbahn e.V."></a><p class="footer-tagline">Schnell und einfach auf dem neuesten Stand rund um Künstler und Künstlersozialkasse.</p></div><div class="footer-col"><h6 class="footer-col-heading">Unsere Themen</h6><ul class="footer-col-links"><li><a href="ksk-pruefung-versicherte.html">KSK-Prüfung</a></li><li><a href="ksk-beitragsrechner.html">KSK-Rechner</a></li><li><a href="kuenstlersozialkasse.html">Künstlersozialkasse</a></li></ul></div><div class="footer-col"><h6 class="footer-col-heading">Über uns</h6><ul class="footer-col-links"><li><a href="kontakt.html">Kontakt</a></li><li><a href="team.html">Team</a></li><li><a href="blog.html">Blog</a></li></ul></div><div class="footer-col"><h6 class="footer-col-heading">Konto</h6><ul class="footer-col-links"><li><a href="https://login.freie-wildbahn.de/login">Login</a></li><li><a href="#">Registrieren</a></li></ul></div></div></div><div class="footer-lower"><div class="container footer-lower-inner"><nav class="footer-legal-nav"><a href="#">Impressum</a><a href="#">Datenschutzinformation</a><a href="#">Quellenangaben</a></nav><div class="footer-copy"><p>© 2026 Freie Wildbahn e.V. | Alle Rechte vorbehalten</p><p><a href="https://digitallanders.de">Website &amp; Marketing: digitallanders</a></p></div><div class="footer-right-group"><a href="#" class="footer-back-top">↑ Zurück nach oben</a></div></div></div></footer>`;
  }
  const articlePage = document.querySelector('.article-page');
  const articleCta = articlePage?.querySelector('.article-cta');
  if (articlePage && articleCta && !articlePage.querySelector('.article-prev-next')) {
    articleCta.insertAdjacentHTML('beforebegin', `<nav class="article-prev-next article-shell-narrow"><a href="blog.html"><span>Älterer Beitrag</span>Weitere Beiträge im Blog</a><a href="blog.html"><span>Neuerer Beitrag</span>Aktuelle Artikel entdecken</a></nav><section class="article-related"><div class="container"><span class="dachzeile">Das könnte Sie auch interessieren</span><h2>Ähnliche Beiträge</h2><div class="blog-grid"><article class="blog-card"><div class="blog-card-body"><span class="blog-category">Künstlersozialkasse</span><h3><a href="blog-ueberwiegensprinzip.html">Das Überwiegensprinzip</a></h3><p>Zusätzliche Einkünfte und KSK-Schutz verständlich erklärt.</p></div></article><article class="blog-card"><div class="blog-card-body"><span class="blog-category">Versicherung</span><h3><a href="blog-krankengeld-kuenstler.html">Krankengeld für Künstler</a></h3><p>So sichern sich Selbstständige bei Arbeitsunfähigkeit ab.</p></div></article><article class="blog-card"><div class="blog-card-body"><span class="blog-category">Allgemein</span><h3><a href="blog-honorar-lehrkraefte.html">Honorar-Lehrkräfte</a></h3><p>Was die Übergangsregelung bis Ende 2027 bedeutet.</p></div></article></div></div></section>`);
  }
  const categoryDestinations = {
    'Alle Artikel': 'blog.html',
    'Allgemein': 'blog-kategorie.html?kategorie=allgemein',
    'Künstlersozialkasse': 'blog-kategorie.html?kategorie=kuenstlersozialkasse',
    'Recht': 'blog-kategorie.html?kategorie=recht',
    'Steuern': 'blog-kategorie.html?kategorie=steuern',
    'Versicherung': 'blog-kategorie.html?kategorie=versicherung'
  };
  document.querySelectorAll('.blog-categories a').forEach(link => {
    const destination = categoryDestinations[link.textContent.trim()];
    if (destination) link.href = destination;
  });
  if (document.querySelector('.article-hero h1')?.textContent.includes('Honorar-Lehrkräfte')) {
    const categoryLabel = document.querySelector('.article-hero .blog-category');
    if (categoryLabel) categoryLabel.textContent = 'Künstlersozialkasse';
  }
  window.applyGlobalRegistrationLinks?.();
  window.applyGlobalContentCtas?.();
});
