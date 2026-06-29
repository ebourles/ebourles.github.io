/* ============================================================
   MAIN.JS — Curseur, langue, utilitaires partagés
   ============================================================ */

// ---- Langue ----
let currentLang = localStorage.getItem('lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Boutons actifs
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (btn) btn.classList.add('active');

  // Textes data-fr / data-en
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });

  // Placeholders
  document.querySelectorAll('[data-fr-placeholder]').forEach(el => {
    el.placeholder = el.getAttribute('data-' + lang + '-placeholder') || '';
  });

  // Hero bg (index.html uniquement)
  const heroBg = document.getElementById('heroBgText');
  if (heroBg) heroBg.textContent = lang === 'fr' ? 'ÉTUDIANT' : 'STUDENT';

  document.documentElement.lang = lang;
}

// ---- Curseur personnalisé ----
function initCursor() {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  if (!cursor || !cursorRing) return;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    setTimeout(() => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top  = e.clientY + 'px';
    }, 60);
  });

  const hoverTargets = 'a, button, .project-card, .veille-theme-card, .skill-tag, .veille-article-row';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorRing.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorRing.classList.remove('hover'); });
  });
}

// ---- Marquer le lien actif dans la nav ----
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---- Submit formulaire contact ----
function handleSubmit(btn) {
  const span = btn.querySelector('span');
  span.textContent = currentLang === 'fr' ? 'ENVOYÉ ✓' : 'SENT ✓';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    span.textContent = currentLang === 'fr' ? 'ENVOYER' : 'SEND';
    btn.style.background = '';
  }, 3000);
}

// ---- Init au chargement ----
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  setActiveNav();
  setLang(currentLang); // applique la langue sauvegardée
});
