document.addEventListener('DOMContentLoaded', () => {
  const categories = {
    allgemein: 'Allgemein',
    kuenstlersozialkasse: 'Künstlersozialkasse',
    recht: 'Recht',
    steuern: 'Steuern',
    versicherung: 'Versicherung'
  };
  const posts = [
    { category: 'allgemein', title: 'Sozialversicherungspflicht für Honorar-Lehrkräfte: Übergangsregelung bis Ende 2027 verlängert', date: '13. Juli 2026', excerpt: 'Was Bildungsträger und freiberufliche Lehrkräfte jetzt wissen sollten.', image: '../assets/home-hero-team.webp', href: 'blog-honorar-lehrkraefte.html' },
    { category: 'allgemein', title: 'Das Überwiegensprinzip: Einkünfte erzielen, ohne den KSK-Schutz zu verlieren', date: '3. September 2024', excerpt: 'Wie zusätzliche Einkünfte eingeordnet werden und wann die künstlerische Tätigkeit wirtschaftlich überwiegen muss.', image: '../assets/AdobeStock_422978452-1920w.jpg', href: 'blog-ueberwiegensprinzip.html' },
    { category: 'kuenstlersozialkasse', title: 'Sozialversicherungspflicht für Honorar-Lehrkräfte: Übergangsregelung bis Ende 2027 verlängert', date: '13. Juli 2026', excerpt: 'Was Bildungsträger und freiberufliche Lehrkräfte jetzt wissen sollten.', image: '../assets/home-hero-team.webp', href: 'blog-honorar-lehrkraefte.html' },
    { category: 'kuenstlersozialkasse', title: 'Das Überwiegensprinzip: Einkünfte erzielen, ohne den KSK-Schutz zu verlieren', date: '3. September 2024', excerpt: 'Wann die künstlerische Tätigkeit wirtschaftlich überwiegen muss.', image: '../assets/AdobeStock_422978452-1920w.jpg', href: 'blog-ueberwiegensprinzip.html' },
    { category: 'kuenstlersozialkasse', title: 'Pflegeversicherungsbeitrag senken: Kinder bei KSK melden', date: '1. Juli 2026', excerpt: 'So lassen sich Kinder korrekt nachmelden und Beitragsnachlässe sichern.', image: '../assets/AdobeStock_96150722-1920w.jpg', href: 'blog-pflegeversicherungsbeitrag.html' },
    { category: 'kuenstlersozialkasse', title: 'Künstlersozialabgabe: Warum jetzt auch Musik-Aggregatoren zahlen', date: '23. April 2026', excerpt: 'Ein aktuelles Urteil verändert die Einordnung technischer Dienstleister.', image: '../assets/kuenstlersozialkasse-fotograf-freie-wildbahn-1920w.jpg', href: 'blog-musik-aggregatoren.html' },
    { category: 'recht', title: 'Schaufensterdekoration ist keine Kunst – ein Urteil mit Signalwirkung', date: '26. März 2026', excerpt: 'Die Grenze zwischen künstlerischer Tätigkeit und Handwerk.', image: '../assets/kuenstlersozialkasse-maskenbildner-freie-wildbahn-1920w.jpg', href: '#' },
    { category: 'recht', title: 'Die DSGVO und die gewerbliche Nutzung von WhatsApp', date: '7. Juni 2018', excerpt: 'Welche Datenschutzfragen Unternehmen bei Messenger-Diensten beachten müssen.', image: '../assets/pexels-linkedin-sales-navigator-1251850-1920w.jpg', href: 'blog-dsgvo-whatsapp.html' },
    { category: 'recht', title: 'Neue Datenschutzgrundverordnung: Sind Sie darauf vorbereitet?', date: '18. Mai 2018', excerpt: 'Ein historischer Überblick zum Inkrafttreten der DSGVO.', image: '../assets/home-hero-team.webp', href: 'blog-dsgvo-vorbereitung.html' },
    { category: 'recht', title: 'Honorarkraft als arbeitnehmerähnliche Person sozialversicherungsfrei', date: '12. April 2018', excerpt: 'Zur rechtlichen Einordnung von Honorarkräften und arbeitnehmerähnlichen Personen.', image: '../assets/kuenstlersozialkasse-fotograf-freie-wildbahn-1920w.jpg', href: 'blog-honorarkraft-sozialversicherungsfrei.html' },
    { category: 'steuern', title: 'Senkung der Mehrwertsteuer auf 16% ab 01.07.2020', date: '23. Juni 2020', excerpt: 'Was die zeitlich begrenzte Steuersenkung für Rechnungen, Gutscheine und Anzahlungen bedeutete.', image: '../assets/AdobeStock_499643425-1920w.jpg', href: 'blog-mehrwertsteuer-16-prozent.html' },
    { category: 'steuern', title: 'Alles zum Elterngeld für werdende Eltern', date: '9. März 2020', excerpt: 'Damit kein Geld verschenkt wird: Grundlagen, Fristen und Gestaltungsmöglichkeiten.', image: '../assets/home-hero-team.webp', href: 'blog-elterngeld.html' },
    { category: 'steuern', title: 'Steueränderungen in der Elektromobilität und im Klimaschutzpaket', date: '27. Januar 2020', excerpt: 'Die wichtigsten steuerlichen Neuerungen rund um Mobilität und Klimaschutz.', image: '../assets/pexels-linkedin-sales-navigator-1251850-1920w.jpg', href: 'blog-steueraenderungen-elektromobilitaet.html' },
    { category: 'versicherung', title: 'Keine Rückkehr in die GKV für ältere Versicherte', date: '1. April 2026', excerpt: 'Warum der Wechsel aus der PKV in die GKV künftig schwieriger wird.', image: '../assets/thumbnail-vorteile-ksk-freie-wildbahn.jpg', href: 'blog-keine-rueckkehr-gkv.html' },
    { category: 'versicherung', title: 'Krankengeld für Künstler: Absicherung bei Arbeitsunfähigkeit', date: '7. April 2021', excerpt: 'Gesetzlicher Basisschutz und mögliche Versorgungslücken.', image: '../assets/thumbnail-ksk-beratung.jpg', href: 'blog-krankengeld-kuenstler.html' },
    ,{ category: 'versicherung', title: 'Grundrente für Künstler – Welche Probleme gibt es dabei?', date: '2. Juli 2020', excerpt: 'Warum viele geringverdienende Künstler trotz langer Versicherungszeiten benachteiligt sein können.', image: '../assets/thumbnail-vorteile-ksk-freie-wildbahn.jpg', href: 'blog-grundrente-kuenstler.html' }
  ];
  const requested = new URLSearchParams(window.location.search).get('kategorie');
  const key = Object.hasOwn(categories, requested) ? requested : 'allgemein';
  const title = categories[key];
  document.title = `${title} – Blog | Freie Wildbahn e.V.`;
  document.getElementById('category-title').textContent = title;
  document.querySelector(`[data-category-link="${key}"]`)?.classList.add('active');
  const results = posts.filter(post => post.category === key);
  const grid = document.getElementById('category-grid');
  results.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.innerHTML = `<a class="blog-card-image" href="${post.href}"><img src="${post.image}" alt=""></a><div class="blog-card-body"><span class="blog-category">${title}</span><p class="blog-meta">${post.date} · Lesezeit wird geprüft</p><h3><a href="${post.href}">${post.title}</a></h3><p>${post.excerpt}</p><a class="blog-read-more" href="${post.href}">Weiterlesen →</a></div>`;
    grid.appendChild(article);
  });
  document.getElementById('category-empty').hidden = results.length > 0;
});
