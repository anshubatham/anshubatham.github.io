/**
 * Math Hopper – script.js
 * Author: Anshu Batham
 * Features: Theme toggle, mobile menu, hero canvas, scroll animations,
 *           FAQ accordion, contact form validation, navbar scroll effects
 */

'use strict';

/* ── UTILITY ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── FOOTER YEAR ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================
   1. THEME TOGGLE (Dark / Light)
   ========================================================= */
(function initTheme() {
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const icon   = btn ? btn.querySelector('.theme-icon') : null;

  const stored = localStorage.getItem('mh-theme') || 'dark';
  html.setAttribute('data-theme', stored);
  if (icon) icon.textContent = stored === 'dark' ? '☀️' : '🌙';

  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('mh-theme', next);
    if (icon) icon.textContent = next === 'dark' ? '☀️' : '🌙';
  });
})();

/* =========================================================
   2. NAVBAR – scroll effect + active link
   ========================================================= */
(function initNavbar() {
  const navbar = $('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Highlight active section in nav
  const sections   = $$('section[id]');
  const navLinks   = $$('.nav-links a');
  const offset     = 120;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = navLinks.find(a => a.getAttribute('href') === `#${entry.target.id}`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: `-${offset}px 0px -60% 0px` });

  sections.forEach(s => observer.observe(s));
})();

/* =========================================================
   3. MOBILE MENU
   ========================================================= */
(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const menu       = document.getElementById('mobileMenu');
  const mobileLinks = $$('.mobile-link');
  if (!hamburger || !menu) return;

  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    toggleMenu(!isOpen);
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });
})();

/* =========================================================
   4. HERO CANVAS – animated particle network
   ========================================================= */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx  = canvas.getContext('2d');
  let W, H, particles, animId;
  const COUNT = window.innerWidth < 768 ? 40 : 80;
  const MAX_DIST = 120;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomColor() {
    // Sky blue, yellow-gold, orange, teal – matching the app palette
    const colors = ['255,255,255', '249,196,35', '255,140,0', '62,207,178'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createParticles() {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      color: randomColor(),
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},0.5)`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  function start() {
    resize();
    createParticles();
    draw();
  }

  const ro = new ResizeObserver(() => {
    resize();
    createParticles();
  });
  ro.observe(canvas);

  // Pause animation when not visible (performance)
  const ioCanvas = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!animId) draw();
    } else {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });
  ioCanvas.observe(canvas);

  // Respect reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    start();
  }
})();

/* =========================================================
   5. SCROLL REVEAL ANIMATIONS
   ========================================================= */
(function initReveal() {
  const targets = [
    '.feature-card', '.why-point', '.why-stat-card',
    '.screenshot-card', '.faq-item', '.contact-item',
    '.about-card', '.cta-card', '.section-header',
    '.third-party-card', '.purpose-card'
  ];

  const els = $$(targets.join(', '));
  els.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings within the same parent
        const siblings = $$('.reveal', entry.target.parentElement);
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* =========================================================
   6. FAQ ACCORDION
   ========================================================= */
(function initFAQ() {
  const items = $$('.faq-item');

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      items.forEach(other => {
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherBtn && otherAnswer && otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.hidden = true;
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  });
})();

/* =========================================================
   7. CONTACT FORM VALIDATION
   ========================================================= */
(function initContactForm() {
  const form        = document.getElementById('contactForm');
  if (!form) return;

  const nameInput   = document.getElementById('contactName');
  const emailInput  = document.getElementById('contactEmail');
  const msgInput    = document.getElementById('contactMessage');
  const nameError   = document.getElementById('nameError');
  const emailError  = document.getElementById('emailError');
  const msgError    = document.getElementById('messageError');
  const successMsg  = document.getElementById('formSuccess');

  function setError(input, errorEl, message) {
    input.closest('.form-group').classList.toggle('error', !!message);
    errorEl.textContent = message || '';
  }

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  // Live validation on blur
  nameInput.addEventListener('blur', () => {
    setError(nameInput, nameError,
      nameInput.value.trim().length < 2 ? 'Please enter your name (at least 2 characters).' : '');
  });

  emailInput.addEventListener('blur', () => {
    setError(emailInput, emailError,
      !validateEmail(emailInput.value.trim()) ? 'Please enter a valid email address.' : '');
  });

  msgInput.addEventListener('blur', () => {
    setError(msgInput, msgError,
      msgInput.value.trim().length < 10 ? 'Message must be at least 10 characters.' : '');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    if (nameInput.value.trim().length < 2) {
      setError(nameInput, nameError, 'Please enter your name (at least 2 characters).');
      valid = false;
    } else {
      setError(nameInput, nameError, '');
    }

    if (!validateEmail(emailInput.value.trim())) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(emailInput, emailError, '');
    }

    if (msgInput.value.trim().length < 10) {
      setError(msgInput, msgError, 'Message must be at least 10 characters.');
      valid = false;
    } else {
      setError(msgInput, msgError, '');
    }

    if (!valid) return;

    // Simulate successful submission (replace with real endpoint / EmailJS / Formspree)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      successMsg.hidden = false;
      submitBtn.textContent = 'Send Message →';
      submitBtn.disabled = false;
      successMsg.focus();

      setTimeout(() => { successMsg.hidden = true; }, 6000);
    }, 1200);
  });
})();

/* =========================================================
   8. SMOOTH ANCHOR SCROLLING (fallback for older browsers)
   ========================================================= */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Push to history for accessibility
      history.pushState(null, '', `#${id}`);
    });
  });
})();

/* =========================================================
   9. ACTIVE NAV LINK STYLE (CSS companion)
   ========================================================= */
// Injected dynamically so the active style works with the existing CSS cascade
const activeStyle = document.createElement('style');
activeStyle.textContent = `.nav-links a.active { color: #fff; background: rgba(255,255,255,0.2); }`;
document.head.appendChild(activeStyle);

/* =========================================================
   10. SKIP LINK INJECTION (Accessibility)
   ========================================================= */
(function injectSkipLink() {
  if (document.querySelector('.skip-link')) return;
  const skip = document.createElement('a');
  skip.href = '#home';
  skip.className = 'skip-link';
  skip.textContent = 'Skip to main content';
  document.body.prepend(skip);
})();
