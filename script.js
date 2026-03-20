// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('active');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('active');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () => navLinks.classList.contains('open') ? closeMenu() : openMenu());
navOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));

// ===== Scroll Progress Bar =====
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + '%';
});

// ===== Navbar shrink =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const pad = window.scrollY > 50 ? '0.7rem' : '1rem';
  const side = window.innerWidth >= 768 ? '3rem' : '1.5rem';
  navbar.style.padding = `${pad} ${side}`;
});

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Dark / Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') { document.body.classList.add('light'); themeToggle.textContent = '☀️'; }

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ===== Active Nav on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===== Scroll Reveal =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Typewriter Effect =====
const roles = ['Assistant Professor', 'Android Developer', 'Project Coordinator', 'Tech Mentor'];
let roleIndex = 0, charIndex = 0, deleting = false;
const tw = document.getElementById('typewriter');
function type() {
  const current = roles[roleIndex];
  if (!deleting) {
    tw.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    tw.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

// ===== Skill Bar Animation =====
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => bar.classList.add('animated'));
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-group').forEach(el => barObserver.observe(el));

// ===== Count-Up Animation =====
function countUp(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(current);
  }, 16);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count-up').forEach(countUp);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) countObserver.observe(statsEl);
