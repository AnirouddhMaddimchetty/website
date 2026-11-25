const STORAGE_THEME_KEY = 'color-scheme';
const STORAGE_LANG_KEY = 'site-lang';
const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');

function getOsTheme() {
  return darkMedia.matches ? 'dark' : 'light';
}

function getEffectiveTheme() {
  const stored = localStorage.getItem(STORAGE_THEME_KEY);
  return stored === 'light' || stored === 'dark' ? stored : getOsTheme();
}

function applyThemeMeta(themeChoice) {
  const meta = document.head.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.setAttribute('content', themeChoice || 'light dark');
  }
  syncThemeToggleButtons();
}

function syncThemeToggleButtons() {
  const effective = getEffectiveTheme();
  const isDark = effective === 'dark';
  const lang = document.documentElement.dataset.lang === 'en' ? 'en' : 'fr';

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(isDark));
    const label =
      lang === 'en'
        ? isDark
          ? 'Switch to light theme'
          : 'Switch to dark theme'
        : isDark
          ? 'Passer au thème clair'
          : 'Passer au thème sombre';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });
}

function toggleTheme() {
  const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
  if (next === getOsTheme()) {
    localStorage.removeItem(STORAGE_THEME_KEY);
    applyThemeMeta(null);
  } else {
    localStorage.setItem(STORAGE_THEME_KEY, next);
    applyThemeMeta(next);
  }
}

function applyLanguage(lang, { syncUrl = false } = {}) {
  const normalized = lang === 'en' ? 'en' : 'fr';
  const root = document.documentElement;
  root.lang = normalized;
  root.dataset.lang = normalized;
  localStorage.setItem(STORAGE_LANG_KEY, normalized);

  const title = normalized === 'en' ? root.dataset.titleEn : root.dataset.titleFr;
  if (title) {
    document.title = title;
  }

  const desc = normalized === 'en' ? root.dataset.descEn : root.dataset.descFr;
  const metaDesc = document.head.querySelector('meta[name="description"]');
  if (desc && metaDesc) {
    metaDesc.setAttribute('content', desc);
  }

  document.querySelectorAll('[data-alt-fr][data-alt-en]').forEach((img) => {
    img.setAttribute('alt', normalized === 'en' ? img.dataset.altEn : img.dataset.altFr);
  });

  document.querySelectorAll('[data-aria-fr][data-aria-en]').forEach((el) => {
    el.setAttribute('aria-label', normalized === 'en' ? el.dataset.ariaEn : el.dataset.ariaFr);
  });

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.setLang === normalized));
  });

  if (syncUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', normalized);
    window.history.replaceState(null, '', url);
  }

  syncThemeToggleButtons();
}

function initHeaderResize() {
  const header = document.querySelector('.site-header');
  const inner = header?.querySelector('.header-inner');
  const nav = header?.querySelector('.primary-nav');
  const navList = header?.querySelector('.nav-list');
  const brand = header?.querySelector('.brand');
  const controls = header?.querySelector('.header-controls');
  const popover = document.getElementById('mobile-nav');
  if (!header || !inner || !nav || !navList || !brand || !controls) return;

  let requiredWideWidth = 0;

  const measureRequiredWidth = () => {
    const wasWide = header.classList.contains('is-wide');
    header.classList.add('is-wide');
    const style = getComputedStyle(inner);
    const paddingInline = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    requiredWideWidth =
      Math.ceil(brand.getBoundingClientRect().width) +
      Math.ceil(navList.getBoundingClientRect().width) +
      Math.ceil(controls.getBoundingClientRect().width) +
      paddingInline +
      72;
    if (!wasWide) header.classList.remove('is-wide');
  };

  const updateNavLayout = () => {
    if (!requiredWideWidth) measureRequiredWidth();
    const available = inner.getBoundingClientRect().width;
    const fitsWide = available >= requiredWideWidth;
    header.classList.toggle('is-wide', fitsWide);
    if (fitsWide && popover && popover.matches(':popover-open')) {
      popover.hidePopover();
    }
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      measureRequiredWidth();
      updateNavLayout();
    });
  }

  const ro = new ResizeObserver(updateNavLayout);
  ro.observe(inner);
  updateNavLayout();

  if (popover) {
    popover.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (popover.matches(':popover-open')) popover.hidePopover();
      });
    });
  }
}

function initLightbox() {
  const dialog = document.getElementById('shot-lightbox');
  if (!dialog) return;

  const sourceAvif = dialog.querySelector('[data-lightbox-avif]');
  const sourceWebp = dialog.querySelector('[data-lightbox-webp]');
  const img = dialog.querySelector('[data-lightbox-img]');
  const titleEl = dialog.querySelector('[data-lightbox-title]');
  const captionEl = dialog.querySelector('[data-lightbox-caption]');
  const closeBtn = dialog.querySelector('[data-lightbox-close]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const closeDialog = () => {
    if (!dialog.open) return;
    if (reducedMotion || dialog.dataset.closing === 'true') {
      delete dialog.dataset.closing;
      dialog.close();
      return;
    }
    dialog.dataset.closing = 'true';
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      delete dialog.dataset.closing;
      dialog.close();
    };
    dialog.addEventListener('transitionend', done, { once: true });
    window.setTimeout(done, 260);
  };

  document.querySelectorAll('[data-lightbox-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const lang = document.documentElement.dataset.lang === 'en' ? 'en' : 'fr';
      const stem = trigger.dataset.shotStem;
      const alt = lang === 'en' ? trigger.dataset.altEn : trigger.dataset.altFr;
      const label = lang === 'en' ? trigger.dataset.titleEn : trigger.dataset.titleFr;
      const caption = lang === 'en' ? trigger.dataset.captionEn : trigger.dataset.captionFr;

      if (sourceAvif) sourceAvif.setAttribute('srcset', `/assets/images/thetelugu/${stem}-780.avif`);
      if (sourceWebp) sourceWebp.setAttribute('srcset', `/assets/images/thetelugu/${stem}-780.webp`);
      if (img) {
        img.setAttribute('src', `/assets/images/thetelugu/${stem}-780.png`);
        img.setAttribute('alt', alt || '');
      }
      if (titleEl) titleEl.textContent = label || '';
      if (captionEl) captionEl.textContent = caption || '';

      delete dialog.dataset.closing;
      dialog.showModal();
    });
  });

  closeBtn?.addEventListener('click', closeDialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener('cancel', (event) => {
    if (!reducedMotion) {
      event.preventDefault();
      closeDialog();
    }
  });
}

function initScrollRevealFallback() {
  if (
    CSS.supports('animation-timeline: view()') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
}

function init() {
  const initialStoredTheme = localStorage.getItem(STORAGE_THEME_KEY);
  applyThemeMeta(initialStoredTheme === 'light' || initialStoredTheme === 'dark' ? initialStoredTheme : null);

  const initialLang = document.documentElement.dataset.lang === 'en' ? 'en' : 'fr';
  applyLanguage(initialLang, { syncUrl: false });

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.setLang, { syncUrl: true });
    });
  });

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_THEME_KEY) {
      applyThemeMeta(event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null);
    }
    if (event.key === STORAGE_LANG_KEY && event.newValue) {
      applyLanguage(event.newValue, { syncUrl: false });
    }
  });

  darkMedia.addEventListener('change', () => {
    syncThemeToggleButtons();
  });

  initHeaderResize();
  initLightbox();
  document.documentElement.classList.add('has-js');
  initScrollRevealFallback();
}

init();
