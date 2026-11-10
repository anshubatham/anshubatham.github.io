const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  links.classList.toggle('open', !open);
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
