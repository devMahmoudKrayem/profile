(() => {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const translate = key => window.PortfolioI18n?.t(key) || key;

  document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    initTheme();
    initHeader();
    initMobileMenu();
    initActiveNavigation();
    initSkillBrowser();
    initReveals();
    initCopyEmail();
    initPortraitFallback();
    initReadingProgress();
    initCaseNavigation();
    initVisibilityState();
  });

  function setCurrentYear() {
    selectAll('[data-year]').forEach(element => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function initTheme() {
    const toggles = selectAll('[data-theme-toggle]');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (!toggles.length) return;

    const sync = () => {
      const dark = root.dataset.theme !== 'light';
      const labelKey = dark ? 'switchLight' : 'switchDark';
      const modeKey = dark ? 'lightMode' : 'darkMode';
      toggles.forEach(toggle => {
        toggle.setAttribute('aria-label', translate(labelKey));
        toggle.setAttribute('aria-pressed', String(dark));
      });
      selectAll('[data-theme-label]').forEach(label => {
        label.textContent = translate(modeKey);
      });
      if (themeColor) themeColor.content = dark ? '#090c11' : '#f2f0eb';
    };

    const setTheme = (theme, persist) => {
      root.dataset.theme = theme === 'light' ? 'light' : 'dark';
      if (persist) {
        try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Preference remains session-only. */ }
      }
      sync();
    };

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    });

    document.addEventListener('portfolio:languagechange', sync);
    sync();
  }

  function initHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    let scheduled = false;
    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
      scheduled = false;
    };

    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  function initMobileMenu() {
    const header = document.querySelector('[data-header]');
    const button = document.querySelector('[data-menu-button]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!header || !button || !menu) return;

    let returnFocus = null;
    const menuLinks = () => selectAll('a, button:not([disabled])', menu).filter(element => element.offsetParent !== null);

    const setOpen = open => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', translate(open ? 'closeMenu' : 'openMenu'));
      menu.setAttribute('aria-hidden', String(!open));
      header.classList.toggle('menu-visible', open);
      document.body.classList.toggle('menu-open', open);

      if (open) {
        returnFocus = document.activeElement;
        requestAnimationFrame(() => menu.querySelector('nav a')?.focus());
      } else if (returnFocus instanceof HTMLElement && document.contains(returnFocus)) {
        returnFocus.focus();
      }
    };

    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', event => {
      if (button.getAttribute('aria-expanded') !== 'true') return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = [button, ...menuLinks()];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980 && button.getAttribute('aria-expanded') === 'true') setOpen(false);
    }, { passive: true });

    document.addEventListener('portfolio:languagechange', () => {
      button.setAttribute('aria-label', translate(button.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu'));
    });
  }

  function initActiveNavigation() {
    const links = selectAll('[data-nav-link]');
    const sections = selectAll('[data-section]').filter(section => section.id);
    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

    const byId = new Map(links.map(link => [link.getAttribute('href')?.slice(1), link]));
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => link.removeAttribute('aria-current'));
      byId.get(visible.target.id)?.setAttribute('aria-current', 'true');
    }, { rootMargin: '-30% 0px -58%', threshold: [0, .15, .4] });

    sections.forEach(section => observer.observe(section));
  }

  function initSkillBrowser() {
    const browser = document.querySelector('[data-skill-browser]');
    if (!browser) return;

    const buttons = selectAll('[data-skill-filter]', browser);
    const cards = selectAll('[data-skill-category]', browser);
    const intros = selectAll('[data-skill-intro]', browser);
    const count = browser.querySelector('[data-skill-count]');

    const activate = category => {
      buttons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.skillFilter === category));
      });
      const visibleCards = cards.filter(card => card.dataset.skillCategory === category);
      cards.forEach(card => {
        card.hidden = card.dataset.skillCategory !== category;
        card.classList.remove('is-entering');
      });
      visibleCards.forEach((card, cardIndex) => {
        card.style.setProperty('--skill-order', String(cardIndex));
      });
      requestAnimationFrame(() => {
        visibleCards.forEach(card => card.classList.add('is-entering'));
      });
      intros.forEach(intro => { intro.hidden = intro.dataset.skillIntro !== category; });
      if (count) count.textContent = String(visibleCards.length).padStart(2, '0');
      browser.dataset.activeCategory = category;
    };

    buttons.forEach((button, buttonIndex) => {
      button.addEventListener('click', () => activate(button.dataset.skillFilter));
      button.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const direction = root.dir === 'rtl' ? -1 : 1;
        let nextIndex = buttonIndex;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = buttons.length - 1;
        if (event.key === 'ArrowRight') nextIndex = (buttonIndex + direction + buttons.length) % buttons.length;
        if (event.key === 'ArrowLeft') nextIndex = (buttonIndex - direction + buttons.length) % buttons.length;
        buttons[nextIndex].focus();
        activate(buttons[nextIndex].dataset.skillFilter);
      });
    });

    activate(buttons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.skillFilter || 'mobile');
  }

  function initReveals() {
    const heroItems = selectAll('.hero .reveal-item, .case-hero .reveal-item');
    const revealItems = selectAll('[data-reveal]');

    requestAnimationFrame(() => {
      heroItems.forEach((item, index) => {
        window.setTimeout(() => item.classList.add('is-visible'), reducedMotion.matches ? 0 : index * 70);
      });
    });

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10%', threshold: .08 });

    revealItems.forEach(item => observer.observe(item));
  }

  function initCopyEmail() {
    const buttons = selectAll('[data-copy-email]');
    const toast = document.querySelector('[data-toast]');
    if (!buttons.length) return;
    let toastTimer;

    const showToast = message => {
      if (!toast) return;
      window.clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add('is-visible');
      toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
    };

    const copyFallback = value => {
      const input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      return copied;
    };

    buttons.forEach(button => {
      button.addEventListener('click', async () => {
        const email = button.dataset.email;
        if (!email) return;
        let copied = false;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(email);
            copied = true;
          } else {
            copied = copyFallback(email);
          }
        } catch {
          copied = copyFallback(email);
        }
        showToast(translate(copied ? 'emailCopied' : 'copyFailed'));
      });
    });
  }

  function initPortraitFallback() {
    selectAll('[data-portrait]').forEach(image => {
      image.addEventListener('error', () => {
        image.closest('.portrait-stage')?.classList.add('image-error');
      }, { once: true });
    });
  }

  function initReadingProgress() {
    const progress = document.querySelector('[data-reading-progress]');
    if (!progress) return;

    let scheduled = false;
    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.setProperty('--progress', `${Math.min(100, Math.max(0, window.scrollY / max * 100))}%`);
      progress.setAttribute('aria-valuenow', String(Math.round(window.scrollY / max * 100)));
      scheduled = false;
    };
    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  function initCaseNavigation() {
    const navLinks = selectAll('[data-case-nav] a');
    if (!navLinks.length || !('IntersectionObserver' in window)) return;
    const targets = navLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.removeAttribute('aria-current'));
      navLinks.find(link => link.hash === `#${visible.target.id}`)?.setAttribute('aria-current', 'true');
    }, { rootMargin: '-25% 0px -60%', threshold: [0, .15] });
    targets.forEach(target => observer.observe(target));
  }

  function initVisibilityState() {
    document.addEventListener('visibilitychange', () => {
      document.body.classList.toggle('document-hidden', document.hidden);
    });
  }
})();
