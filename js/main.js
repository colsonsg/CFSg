// Colson Fellows Singapore — shared site behaviour
// Deliberately minimal: a mobile nav toggle, nothing more.
// No animation beyond simple CSS transitions, which respect
// prefers-reduced-motion via css/style.css.

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
