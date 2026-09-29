// Restore the square loading animation, then fade out the full overlay.
(() => {
  const overlay = document.getElementById('overlay');
  if (!overlay) return;
  let dismissed = false;
  function dismissLoader() {
    if (dismissed) return;
    dismissed = true;
    overlay.classList.add('fade-out');
    overlay.setAttribute('aria-hidden', 'true');
    // Complete cleanup even if the browser does not emit transitionend.
    setTimeout(() => overlay.classList.add('hidden'), 400);
  }
  function onLoaded() {
    setTimeout(dismissLoader, 800);
  }
  if (document.readyState === 'complete') onLoaded();
  else window.addEventListener('load', onLoaded, { once: true });
  // A stalled external font or image must not leave the page covered.
  setTimeout(dismissLoader, 8000);
})();

const bar = document.querySelector('.topbar');
    const menuButton = document.getElementById('pullButton');
    function closeMenu() {
      bar.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
    menuButton.addEventListener('click', () => {
      const open = bar.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    document.getElementById('primaryNav').addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('click', event => {
      if (!bar.contains(event.target)) closeMenu();
    });
    const emailOverlay = document.getElementById('emailOverlay');
    const emailContent = document.getElementById('emailPopupContent');
    document.getElementById('emailIcon').addEventListener('click', event => {
      event.preventDefault();
      closeMenu();
      emailOverlay.style.display = 'flex';
      emailContent.classList.add('show');
    });
    function closeEmail() {
      emailOverlay.style.display = 'none';
      emailContent.classList.remove('show');
    }
    emailOverlay.addEventListener('click', event => {
      if (event.target === emailOverlay) closeEmail();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { closeMenu(); closeEmail(); }
    });
