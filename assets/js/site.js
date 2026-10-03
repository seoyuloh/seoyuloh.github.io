(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.header-navigation');
  const toggle = document.querySelector('.menu-toggle');
  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const mobile = window.matchMedia('(max-width: 1000px)');
  let scheduled = false;

  const profileLinks = [...document.querySelectorAll('.profile-links a')];
  for (const link of profileLinks) {
    const resetTooltip = () => link.classList.remove('tooltip-dismissed');
    link.addEventListener('pointerenter', resetTooltip);
    link.addEventListener('focus', resetTooltip);
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      for (const link of profileLinks) link.classList.add('tooltip-dismissed');
    }
  });

  function syncHeaderHeight() {
    if (header) document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  }

  function closeMenu(returnFocus = false) {
    if (!menu || !toggle) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    syncHeaderHeight();
    if (returnFocus) toggle.focus();
  }

  if (header && menu && toggle) {
    header.classList.add('has-js');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      syncHeaderHeight();
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    mobile.addEventListener('change', () => closeMenu());
    new ResizeObserver(syncHeaderHeight).observe(header);
  }

  function updateNavigation() {
    const offset = header.getBoundingClientRect().height + 32;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      // Several final sections can share the viewport. Honor a visible section
      // chosen by its navigation link when scrolling cannot move any farther.
      const linkedSection = sections.find(section => `#${section.id}` === window.location.hash);
      current = linkedSection && linkedSection.getBoundingClientRect().top >= header.getBoundingClientRect().height
        ? linkedSection
        : sections[sections.length - 1];
    }
    for (const link of links) {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }

  if (header && sections.length) {
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    window.addEventListener('load', updateNavigation);
    updateNavigation();
  }

  // Keep links from the original website working across redesigns.
  const legacyAnchors = {
    '#about-me': '#about',
    '#-news': '#news',
    '#-publications': '#publications',
    '#-education': '#education',
    '#-work-experience': '#experience',
    '#-honors-and-awards': '#awards'
  };
  function restoreAnchor() {
    const target = legacyAnchors[window.location.hash];
    if (target) {
      window.history.replaceState(null, '', target);
      document.querySelector(target)?.scrollIntoView();
    }
  }
  window.addEventListener('hashchange', restoreAnchor);
  restoreAnchor();
})();
