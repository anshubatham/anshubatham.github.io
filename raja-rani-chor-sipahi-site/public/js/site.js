const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
}));
document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
const dialog = document.querySelector('.lightbox');
const dialogImage = dialog?.querySelector('img');
document.querySelectorAll('[data-gallery] a').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault(); dialogImage.src = link.href; dialogImage.alt = link.querySelector('img').alt; dialog.showModal();
}));
dialog?.querySelector('button').addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
