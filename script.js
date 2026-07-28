window.renderGlobalHeader = function renderGlobalHeader() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const inPages = window.location.pathname.toLowerCase().includes('/pages/');
  const root = inPages ? '../' : '';
  const pageLink = name => `${inPages ? '' : 'pages/'}${name}`;
  const active = names => names.includes(page) ? ' active' : '';
  const kskPages = ['kuenstlersozialkasse.html', 'antrag-und-aufnahme.html', 'kuenstlersozialabgabe.html', 'ksk-beratung.html'];
  const vereinPages = ['team.html', 'kontakt.html', 'vorteile.html'];
  const blogPages = page.startsWith('blog');

  document.querySelectorAll('.mobile-drawer-overlay, .mobile-menu-drawer').forEach(element => element.remove());

  const currentHeader = document.querySelector('body > header');
  if (!currentHeader) return;

  const shell = document.createElement('div');
  shell.innerHTML = `
    <div class="mobile-drawer-overlay" id="drawerOverlay"></div>
    <div class="mobile-menu-drawer" id="mobileDrawer">
      <div class="mobile-drawer-header"><a class="mobile-logo" href="${root}index.html"><img src="${root}assets/logo.png" alt="Freie Wildbahn e.V."></a><button class="close-drawer" id="closeDrawer" aria-label="Menü schließen">×</button></div>
      <ul class="mobile-menu-list">
        <li><a href="${root}index.html">Startseite</a></li><li><a href="${pageLink('ksk-pruefung-versicherte.html')}">KSK-Prüfung</a></li><li><a href="${pageLink('ksk-beitragsrechner.html')}">KSK-Rechner</a></li><li><a href="${pageLink('ksk-beitraege-kosten.html')}">KSK-Beiträge und Kosten</a></li><li><a href="${pageLink('kuenstlersozialkasse.html')}">Künstlersozialkasse (KSK)</a></li><li><a href="${pageLink('antrag-und-aufnahme.html')}">Antrag und Aufnahme</a></li><li><a href="${pageLink('kuenstlersozialabgabe.html')}">Künstlersozialabgabe</a></li><li><a href="${pageLink('ksk-beitragsrechner.html')}">KSK-Beitragsrechner</a></li><li><a href="${pageLink('ksk-beitraege-kosten.html')}">KSK-Beiträge und Kosten</a></li><li><a href="${pageLink('ksk-pruefung-versicherte.html')}">KSK-Prüfung der Versicherten</a></li><li><a href="${pageLink('ksk-beratung.html')}">KSK-Beratung</a></li><li><a href="${pageLink('team.html')}">Verein</a></li><li><a href="${pageLink('vorteile.html')}">Vorteile</a></li><li><a href="${pageLink('blog.html')}">Blog</a></li><li><a href="${pageLink('kontakt.html')}">Kontakt</a></li><li><a href="https://login.freie-wildbahn.de/login">Login</a></li>
      </ul>
    </div>
    <header>
      <div class="top-bar"><div class="container top-bar-container"><nav aria-label="Hilfsnavigation"><ul class="top-nav-list"><li><a href="${pageLink('kontakt.html')}">Kontakt</a></li><li><a href="${pageLink('ksk-beratung.html')}">Beratung</a></li><li><a href="${pageLink('vorteile.html')}">Mitgliedschaft</a></li><li><a href="https://login.freie-wildbahn.de/login">Login</a></li></ul></nav></div></div>
      <div class="main-nav"><div class="container main-nav-container">
        <a href="${root}index.html" class="logo"><img src="${root}assets/logo.png" alt="Freie Wildbahn e.V."></a>
        <nav aria-label="Hauptnavigation"><ul class="menu-list">
          <li class="menu-item${active(['index.html', ''])}"><a href="${root}index.html" class="home-icon" aria-label="Startseite"><svg viewBox="0 0 576 512" aria-hidden="true"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32-.1.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7l-32 .1c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"/></svg></a></li>
          <li class="menu-item${active(['ksk-pruefung-versicherte.html'])}"><a href="${pageLink('ksk-pruefung-versicherte.html')}">KSK-Prüfung</a></li>
          <li class="menu-item${active(['ksk-beitragsrechner.html', 'ksk-beitraege-kosten.html'])}"><a href="${pageLink('ksk-beitragsrechner.html')}">KSK-Rechner</a><ul class="dropdown-menu"><li><a href="${pageLink('ksk-beitragsrechner.html')}">KSK-Beitragsrechner</a></li><li><a href="${pageLink('ksk-beitraege-kosten.html')}">KSK-Beiträge und Kosten</a></li></ul></li>
          <li class="menu-item${kskPages.includes(page) ? ' active' : ''}"><a href="${pageLink('kuenstlersozialkasse.html')}">Künstlersozialkasse</a><ul class="dropdown-menu"><li><a href="${pageLink('kuenstlersozialkasse.html')}">Künstlersozialkasse (KSK)</a></li><li><a href="${pageLink('antrag-und-aufnahme.html')}">Antrag und Aufnahme</a></li><li><a href="${pageLink('kuenstlersozialabgabe.html')}">Künstlersozialabgabe</a></li><li><a href="${pageLink('ksk-beitragsrechner.html')}">KSK-Beitragsrechner</a></li><li><a href="${pageLink('ksk-beitraege-kosten.html')}">KSK-Beiträge und Kosten</a></li><li><a href="${pageLink('ksk-pruefung-versicherte.html')}">KSK-Prüfung der Versicherten</a></li><li><a href="${pageLink('ksk-beratung.html')}">KSK-Beratung</a></li></ul></li>
          <li class="menu-item${vereinPages.includes(page) ? ' active' : ''}"><a href="${pageLink('team.html')}">Verein</a><ul class="dropdown-menu"><li><a href="${pageLink('team.html')}">Team</a></li><li><a href="${pageLink('vorteile.html')}">Vorteile</a></li><li><a href="${pageLink('kontakt.html')}">Kontakt</a></li></ul></li>
          <li class="menu-item${blogPages ? ' active' : ''}"><a href="${pageLink('blog.html')}">Blog</a><ul class="dropdown-menu"><li><a href="${pageLink('blog-kategorie.html')}?kategorie=allgemein">Allgemein</a></li><li><a href="${pageLink('blog-kategorie.html')}?kategorie=kuenstlersozialkasse">Künstlersozialkasse</a></li><li><a href="${pageLink('blog-kategorie.html')}?kategorie=recht">Recht</a></li><li><a href="${pageLink('blog-kategorie.html')}?kategorie=steuern">Steuern</a></li><li><a href="${pageLink('blog-kategorie.html')}?kategorie=versicherung">Versicherung</a></li></ul></li>
        </ul></nav>
        <div class="nav-right-group"><a href="${pageLink('ksk-beratung.html')}" class="btn btn-orange">KSK-Beratung</a></div>
      </div></div>
      <div class="mobile-header"><a href="${root}index.html" class="mobile-logo"><img src="${root}assets/logo.png" alt="Freie Wildbahn e.V."></a><div class="mobile-nav-actions"><a href="${pageLink('ksk-beratung.html')}" class="btn btn-orange">KSK-Beratung</a><button class="mobile-nav-toggle" id="layout-drawer-hamburger" aria-label="Menü öffnen" aria-controls="mobileDrawer" aria-expanded="false"><span></span><span></span><span></span></button></div></div>
    </header>`;

  currentHeader.before(...shell.childNodes);
  currentHeader.remove();
};

window.bindGlobalHeader = function bindGlobalHeader() {
  const menuToggle = document.getElementById('layout-drawer-hamburger');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  if (!menuToggle || !closeDrawerBtn || !mobileDrawer || !drawerOverlay || menuToggle.dataset.bound === 'true') return;
  menuToggle.dataset.bound = 'true';
  const setDrawer = open => {
    mobileDrawer.classList.toggle('open', open);
    drawerOverlay.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  menuToggle.addEventListener('click', () => setDrawer(!mobileDrawer.classList.contains('open')));
  closeDrawerBtn.addEventListener('click', () => setDrawer(false));
  drawerOverlay.addEventListener('click', () => setDrawer(false));
  mobileDrawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setDrawer(false)));
};

window.renderGlobalReviews = function renderGlobalReviews() {
  if (document.querySelector('.global-reviews')) return;
  const footer = document.querySelector('body > footer');
  if (!footer) return;
  const reviews = [
    ['IL', 'Inka Lambertz', '9.07.2026', 'Sehr kompetente und umfangreiche Beratung. Alle Fragen wurden beantwortet und meine Sorgen ernst genommen. Ich fühlte mich gut aufgehoben. Gerne immer wieder. Beste Entscheidung für mich. Klare Empfehlung!!', 'lime'],
    ['SK', 'S Klim', '1.07.2026', 'Super qualifizierte Beratung. Perfekte und reibungslose Kommunikation. In meinem Fall hat es viel geholfen.', 'blue'],
    ['KD', 'Katrin Deffte', '28.06.2026', 'Ich kann Freie Wildbahn e.V. absolut empfehlen! Dank der perfekten Beratung und Unterstützung weiß ich, dass mir bei Fragen schnell, klar, freundlich und kompetent geholfen wird.', 'red'],
    ['MF', 'Matthias Freiling', '13.06.2026', 'Kann die Freie Wildbahn nur empfehlen. Super nette und kompetente Beratung. Dank der Hilfe bin ich jetzt endlich in der KSK.', 'green'],
    ['JN', 'Janina Nadler', '1.06.2026', 'Absolute Empfehlung für alle Kreativen, die Unterstützung bei der Aufnahme in die Künstlersozialkasse suchen! Ich habe mich von Anfang an sehr gut beraten gefühlt.', 'orange'],
    ['MO', 'M O', '19.05.2026', 'Die Beratung durch die Freie Wildbahn e.V. war sehr kompetent und unkompliziert. Ich fühlte und fühle mich sehr gut aufgehoben!', 'lime']
  ];
  const section = document.createElement('section');
  section.className = 'global-reviews';
  section.setAttribute('aria-labelledby', 'global-reviews-heading');
  section.innerHTML = `<div class="container"><div class="reviews-heading-row"><div class="reviews-title"><span>Feedback unserer Mitglieder</span><h2 id="global-reviews-heading">Andere sagen über uns ...</h2></div><div class="reviews-summary"><div class="review-platform"><strong><i class="google-logo">G</i> Google</strong><div><b>4.9</b><span>★★★★★</span></div><a href="#">287 Bewertungen insgesamt</a></div><div class="review-platform"><strong><i class="facebook-logo">f</i> Facebook</strong><div><b>5.0</b><span>★★★★★</span></div><a href="#">7 Bewertungen insgesamt</a></div></div></div><div class="reviews-grid">${reviews.map(review => `<article class="review-card"><div class="review-card-head"><span class="review-avatar review-avatar-${review[4]}">${review[0]}</span><div class="review-person"><strong>${review[1]}</strong><span class="review-stars">★★★★★</span><time>${review[2]}</time></div><span class="review-google" aria-label="Google-Bewertung">G</span></div><p>${review[3]}</p></article>`).join('')}</div></div>`;
  footer.before(section);
};

window.applyGlobalRegistrationLinks = function applyGlobalRegistrationLinks() {
  const registrationUrl = 'https://login.freie-wildbahn.de/auth/advice/antragsstrecke?step=registration';
  document.querySelectorAll('a').forEach(link => {
    const label = link.textContent.trim();
    if (label === 'Registrieren' || label === 'KSK-Beratung buchen' || label === 'Vorteile KSK-Beratung') {
      link.setAttribute('href', registrationUrl);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.renderGlobalHeader();
  window.bindGlobalHeader();
  window.renderGlobalReviews();
  window.applyGlobalRegistrationLinks();
  // Prevent placeholder parent menu links from jumping to the top.
  // Real destination links are left untouched.
  const parentMenuLinks = document.querySelectorAll('.menu-item > a[href="#"]');
  parentMenuLinks.forEach(link => {
    const submenu = link.nextElementSibling;
    if (submenu && submenu.classList.contains('dropdown-menu')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
