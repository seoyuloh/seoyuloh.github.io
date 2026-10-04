(() => {
  const header = document.querySelector('.site-header');
  const navigation = document.querySelector('.section-nav');
  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  let scheduled = false;

  // Keep the entire focused link visible in the horizontally scrollable menu.
  navigation?.addEventListener('focusin', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const visible = navigation.getBoundingClientRect();
    const target = link.getBoundingClientRect();
    if (target.left < visible.left) navigation.scrollLeft += target.left - visible.left;
    else if (target.right > visible.right) navigation.scrollLeft += target.right - visible.right;
  });

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

  const copyEmail = document.querySelector('.copy-email');
  if (copyEmail) {
    const email = copyEmail.dataset.email;
    const fallback = document.querySelector('.copy-fallback');
    const status = document.querySelector('.copy-status');
    let resetTimer;
    let copying = false;

    function showCopyFeedback(copied) {
      copyEmail.classList.toggle('is-copied', copied);
      copyEmail.title = copied ? 'Copied!' : 'Copy email address';
      copyEmail.setAttribute('aria-label', copied ? 'Email address copied' : 'Copy email address');
    }

    copyEmail.hidden = false;
    copyEmail.addEventListener('click', async () => {
      if (copying) return;
      copying = true;
      clearTimeout(resetTimer);
      showCopyFeedback(false);
      status.textContent = '';
      try {
        await navigator.clipboard.writeText(email);
        fallback.hidden = true;
        showCopyFeedback(true);
        status.textContent = 'Email address copied';
        resetTimer = setTimeout(() => showCopyFeedback(false), 2000);
      } catch {
        fallback.hidden = false;
        const input = fallback.querySelector('input');
        input.focus();
        input.select();
        status.textContent = 'Copy the email address from the selected text';
      } finally {
        copying = false;
      }
    });
  }

  function syncHeaderHeight() {
    if (header) document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  }

  if (header) {
    syncHeaderHeight();
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
