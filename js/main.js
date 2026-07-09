// Colson Fellows Singapore — shared site behaviour
// Deliberately minimal: a mobile nav toggle, plus reading
// js/config.js so dates and prices only need editing in one
// place. No animation beyond simple CSS transitions, which
// respect prefers-reduced-motion via css/style.css.

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.contains('open');
    if (isOpen) { closeNav(); } else { openNav(); }
  });

  // Close the mobile menu after choosing a link
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape for keyboard users
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // If the viewport is widened past the mobile breakpoint while
  // the menu is open, reset state so it doesn't stick open.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) closeNav();
  });
})();

// ------------------------------------------------------------
// Config-driven content. Reads js/config.js (loaded before this
// file) and (a) fills in every [data-field] element with the
// matching value, and (b) shows/hides [data-before-deadline]
// vs [data-after-deadline] blocks depending on today's date —
// so the same page reads correctly whether it's visited three
// months before the deadline or three months after it, forever,
// as long as SITE_CONFIG gets updated once a year.
// ------------------------------------------------------------
(function () {
  if (typeof SITE_CONFIG === 'undefined') return;

  document.querySelectorAll('[data-field]').forEach(function (el) {
    const key = el.getAttribute('data-field');
    if (SITE_CONFIG[key] !== undefined) {
      el.textContent = SITE_CONFIG[key];
    }
  });

  if (SITE_CONFIG.applicationDeadlineISO) {
    const deadline = new Date(SITE_CONFIG.applicationDeadlineISO + 'T23:59:59+08:00');
    const isPast = new Date() > deadline;
    if (isPast) {
      document.querySelectorAll('[data-before-deadline]').forEach(function (el) {
        el.style.display = 'none';
      });
      document.querySelectorAll('[data-after-deadline]').forEach(function (el) {
        // Explicit value, not '' — clearing an inline style falls back to the
        // stylesheet rule that hides these by default, which would leave
        // the element hidden even though we want to reveal it here.
        el.style.display = (el.tagName === 'SPAN') ? 'inline' : 'block';
      });
    }
  }
})();

