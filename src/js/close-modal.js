(() => {
  const menuNavLink = document.querySelector('[data-menu-link]');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuNavLink.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
  });
})();
