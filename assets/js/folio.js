(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const toggle = document.querySelector('.theme-toggle');
  const updateThemeLabel = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${next} theme`);
    toggle.title = `Switch to ${next} theme`;
    document.querySelector('meta[name="theme-color"]').content = next === 'light' ? '#141819' : '#f4f3ed';
  };
  if (toggle) {
    toggle.hidden = false;
    updateThemeLabel();
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('yr-theme', root.dataset.theme); } catch (error) { /* Theme still works if storage is unavailable. */ }
      updateThemeLabel();
    });
  }

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menu && nav) {
    menu.hidden = false;
    const closeMenu = () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
    });
    document.addEventListener('click', event => { if (!event.target.closest('.header-controls')) closeMenu(); });
    window.matchMedia('(max-width: 720px)').addEventListener('change', closeMenu);
  }

  const dialog = document.querySelector('.photo-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    let trigger = null;
    document.querySelectorAll('.photo-link').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        trigger = link;
        const image = dialog.querySelector('img');
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        dialog.querySelector('figcaption').textContent = link.dataset.caption || '';
        dialog.showModal();
        document.body.classList.add('photo-open');
      });
    });
    dialog.querySelector('.photo-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('photo-open');
      if (trigger) trigger.focus();
    });
  }
})();
