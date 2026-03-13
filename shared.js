// Shared navigation HTML - injected by each page
const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="logo">BRAM<span>KO</span><small>Semice</small></a>
    <ul class="nav-links">
      <li><a href="index.html" data-page="home">Úvod</a></li>
      <li><a href="o-firme.html" data-page="o-firme">O firmě</a></li>
      <li class="has-drop">
        <a href="produkty.html" data-page="produkty">Produkty</a>
        <div class="dropdown">
          <a href="produkty.html#brambory"><span class="di">🥔</span> Brambory</a>
          <a href="produkty.html#zelenina"><span class="di">🥕</span> Kořenová zelenina</a>
          <a href="produkty.html#listova"><span class="di">🥬</span> Listová zelenina</a>
          <a href="produkty.html#dalsi"><span class="di">🧅</span> Cibule & česnek</a>
        </div>
      </li>
      <li><a href="certifikaty.html" data-page="certifikaty">Certifikáty</a></li>
      <li><a href="galerie.html" data-page="galerie">Galerie</a></li>
      <li><a href="kariera.html" data-page="kariera">Kariéra</a></li>
      <li><a href="kontakt.html" data-page="kontakt" class="nav-cta">Kontakt</a></li>
    </ul>
    <div class="nav-lang">
      <a href="#" class="active-lang">CZ</a><span>|</span>
      <a href="#">EN</a><span>|</span>
      <a href="#">DE</a><span>|</span>
      <a href="#">IT</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo" style="font-family:'DM Serif Display',serif;font-size:1.4rem;color:white;text-decoration:none">BRAM<span style="color:#7ab648">KO</span></a>
      <p style="margin-top:.8rem">Největší pěstitel a dodavatel brambor a zeleniny v ČR. Kvalita a tradice ze Semic od roku 1992.</p>
    </div>
    <div class="footer-col">
      <h4>Navigace</h4>
      <a href="o-firme.html">O firmě</a>
      <a href="produkty.html">Produkty</a>
      <a href="certifikaty.html">Certifikáty</a>
      <a href="galerie.html">Galerie</a>
    </div>
    <div class="footer-col">
      <h4>Společnost</h4>
      <a href="kariera.html">Kariéra</a>
      <a href="kontakt.html">Kontakt</a>
      <a href="#">Ochrana dat</a>
      <a href="#">IČO: 27592413</a>
    </div>
    <div class="footer-col">
      <h4>Kontakt</h4>
      <a href="tel:+420325517411">+420 325 517 411</a>
      <a href="mailto:bramko@bramko.cz">bramko@bramko.cz</a>
      <a href="#">Semice 43, 289 17</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Družstvo BRAMKO CZ</span>
    <span>Semice 43, 289 17 Semice · Středočeský kraj</span>
  </div>
</footer>`;

function initPage(activePage) {
  // Inject nav
  const navEl = document.createElement('div');
  navEl.innerHTML = NAV_HTML;
  document.body.prepend(navEl.firstElementChild);

  // Inject footer
  const footerEl = document.createElement('div');
  footerEl.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerEl.firstElementChild);

  // Mark active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  // Nav CTA style
  document.querySelectorAll('.nav-cta').forEach(a => {
    a.style.cssText = 'background:var(--green-fresh);color:white!important;padding:.4rem 1.1rem;border-radius:2rem;';
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

}
