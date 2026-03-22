// ===== THEME =====
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let isDark = localStorage.getItem('theme') !== 'light';
function applyTheme() {
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
applyTheme();
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });

// ===== READING PROGRESS =====
const readingProgress = document.getElementById('readingProgress');
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
  readingProgress.style.width = pct + '%';
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  updateActiveNav();
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => { hamburger.classList.remove('open'); navLinks.classList.remove('open'); });
});

// ===== ACTIVE NAV =====
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*4+2}px;height:${Math.random()*4+2}px;animation-delay:${Math.random()*4}s;animation-duration:${Math.random()*3+2}s;background:${['#6c63ff','#06b6d4','#f43f5e','#22c55e'][Math.floor(Math.random()*4)]};`;
    container.appendChild(p);
  }
}
createParticles();

// ===== CODE ANIMATION =====
const codeLines = [
  '<span style="color:#ff79c6">fun</span> <span style="color:#50fa7b">main</span>() {',
  '  <span style="color:#ff79c6">val</span> app = <span style="color:#8be9fd">App</span>()',
  '  app.<span style="color:#50fa7b">start</span>()','}','',
  '<span style="color:#ff79c6">class</span> <span style="color:#8be9fd">MainActivity</span>',
  '  : <span style="color:#8be9fd">AppCompatActivity</span>() {',
  '  <span style="color:#ffb86c">override fun</span>',
  '  <span style="color:#50fa7b">onCreate</span>(...) {',
  '    <span style="color:#50fa7b">setContentView</span>(',
  '      R.layout.main)','  }','}','',
  '<span style="color:#6272a4">// Kotlin ❤️ Android</span>',
];
let lineIdx = 0;
const codeAnim = document.getElementById('codeAnim');
function animateCode() {
  if (!codeAnim) return;
  if (lineIdx >= codeLines.length) { lineIdx = 0; codeAnim.innerHTML = ''; }
  codeAnim.innerHTML += codeLines[lineIdx] + '<br>';
  lineIdx++;
  setTimeout(animateCode, 300);
}
animateCode();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== PROGRESS TRACKER =====
function getProgress() { return JSON.parse(localStorage.getItem('progress') || '[]'); }
function getBookmarks() { return JSON.parse(localStorage.getItem('bookmarks') || '[]'); }
function saveProgress(arr) { localStorage.setItem('progress', JSON.stringify(arr)); }
function saveBookmarks(arr) { localStorage.setItem('bookmarks', JSON.stringify(arr)); }

function updateProgressUI() {
  const done = getProgress();
  const total = allExamples.length;
  const pct = total > 0 ? Math.round((done.length / total) * 100) : 0;
  document.getElementById('progressText').textContent = `${done.length} / ${total} examples completed`;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('statProgress').textContent = pct + '%';
  document.getElementById('bookmarkCount').textContent = getBookmarks().length;
}

document.getElementById('btnResetProgress').addEventListener('click', () => {
  if (confirm('Reset all progress and bookmarks?')) {
    localStorage.removeItem('progress');
    localStorage.removeItem('bookmarks');
    updateProgressUI();
    renderExamples(allExamples);
  }
});

document.getElementById('btnBookmarks').addEventListener('click', () => {
  const bm = getBookmarks();
  const filtered = allExamples.filter(e => bm.includes(e.id));
  if (filtered.length === 0) { alert('No bookmarks yet! Click the bookmark icon on any example card.'); return; }
  document.querySelector('#examples').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => renderExamples(filtered), 400);
});

// ===== KOTLIN TABS =====
function buildKotlinTabs() {
  const tabButtons = document.getElementById('kotlinTabs');
  const tabContent = document.getElementById('kotlinContent');
  if (!tabButtons || !tabContent) return;
  kotlinTutorial.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<i class="${tab.icon}" style="margin-right:6px"></i>${tab.label}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + tab.id).classList.add('active');
    });
    tabButtons.appendChild(btn);
    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (i === 0 ? ' active' : '');
    panel.id = 'panel-' + tab.id;
    panel.innerHTML = tab.content;
    tabContent.appendChild(panel);
  });
}
buildKotlinTabs();

// ===== FILTER BAR =====
const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const diffColors = { Beginner: '#22c55e', Intermediate: '#f59e0b', Advanced: '#ef4444' };
let activeFilter = 'All';
let searchQuery = '';

function buildFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  categories.forEach(cat => {
    const count = cat === 'All' ? allExamples.length : allExamples.filter(e => e.category === cat).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.innerHTML = `${cat} <span class="filter-count">${count}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = cat;
      applyFilters();
    });
    bar.appendChild(btn);
  });
}
buildFilterBar();

function applyFilters() {
  let filtered = allExamples;
  if (activeFilter !== 'All') filtered = filtered.filter(e => e.category === activeFilter);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.desc.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q)) ||
      e.category.toLowerCase().includes(q)
    );
  }
  const noResults = document.getElementById('noResults');
  noResults.style.display = filtered.length === 0 ? 'flex' : 'none';
  renderExamples(filtered);
}

// ===== SEARCH =====
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  searchClear.classList.toggle('visible', searchQuery.length > 0);
  applyFilters();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  applyFilters();
});

// ===== EXAMPLES GRID =====
function renderExamples(examples) {
  const grid = document.getElementById('examplesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const done = getProgress();
  const bookmarks = getBookmarks();
  examples.forEach((ex, i) => {
    const isDone = done.includes(ex.id);
    const isBookmarked = bookmarks.includes(ex.id);
    const card = document.createElement('div');
    card.className = 'example-card reveal' + (isDone ? ' done' : '');
    card.style.transitionDelay = `${Math.min(i * 0.04, 0.4)}s`;
    card.innerHTML = `
      <div class="card-done"></div>
      <button class="card-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${ex.id}" title="Bookmark"><i class="fas fa-bookmark"></i></button>
      <i class="fas fa-arrow-right card-arrow"></i>
      <div class="card-icon" style="background:${ex.color}22;color:${ex.color}"><i class="${ex.icon}"></i></div>
      <div class="card-num">Example ${ex.id} · <i class="fas fa-clock" style="font-size:0.65rem"></i> ${ex.time}</div>
      <div class="card-title">${ex.title}</div>
      <div class="card-desc">${ex.desc}</div>
      <div class="card-tags">
        ${ex.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        <span class="tag" style="background:${diffColors[ex.difficulty]}22;color:${diffColors[ex.difficulty]};border-color:${diffColors[ex.difficulty]}44">
          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${diffColors[ex.difficulty]};margin-right:4px;vertical-align:middle"></span>${ex.difficulty}
        </span>
      </div>`;
    // Bookmark click
    card.querySelector('.card-bookmark').addEventListener('click', (e) => {
      e.stopPropagation();
      const bm = getBookmarks();
      const idx = bm.indexOf(ex.id);
      if (idx === -1) bm.push(ex.id); else bm.splice(idx, 1);
      saveBookmarks(bm);
      e.currentTarget.classList.toggle('bookmarked', bm.includes(ex.id));
      updateProgressUI();
    });
    card.addEventListener('click', () => openModal(ex));
    grid.appendChild(card);
    setTimeout(() => revealObserver.observe(card), 10);
  });
}
renderExamples(allExamples);
updateProgressUI();

// ===== MODAL =====
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(ex) {
  const done = getProgress();
  const isDone = done.includes(ex.id);
  const stepsHtml = ex.steps.map((step, i) => `
    <div class="step">
      <div class="step-num">Step ${i + 1}</div>
      <h4>${step.title}</h4>
      <p>${step.body}</p>
      ${step.code ? `<div class="code-block"><div class="code-header"><span class="code-lang">Kotlin / XML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre>${step.code}</pre></div>` : ''}
      ${step.output ? `<div class="output-block"><div class="output-header"><i class="fas fa-mobile-alt"></i> Screen Preview</div><div class="phone-mockup-wrap"><div class="phone-mockup"><div class="phone-notch"></div><div class="phone-screen"><div class="phone-statusbar"><span>9:41</span><span><i class="fas fa-signal"></i> <i class="fas fa-wifi"></i> <i class="fas fa-battery-full"></i></span></div><div class="phone-appbar"><i class="fab fa-android"></i> My App</div><div class="phone-body">${step.output}</div></div><div class="phone-home-bar"></div></div></div></div>` : ''}
    </div>`).join('');

  modalContent.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
      <div class="card-icon" style="background:${ex.color}22;color:${ex.color};width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem"><i class="${ex.icon}"></i></div>
      <div>
        <h2>${ex.title}</h2>
        <div class="modal-meta">
          <span><i class="fas fa-signal"></i> ${ex.difficulty}</span>
          <span><i class="fas fa-clock"></i> ${ex.time}</span>
          <span><i class="fas fa-tag"></i> ${ex.category}</span>
        </div>
      </div>
    </div>
    <p style="color:var(--text-muted);margin-bottom:20px;line-height:1.7">${ex.desc}</p>
    <div class="card-tags" style="margin-bottom:28px">${ex.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <h3 style="margin-bottom:16px;font-size:1.1rem">Step-by-Step Solution</h3>
    ${stepsHtml}
    <div class="modal-actions">
      <button class="btn-done ${isDone ? 'done' : ''}" id="btnMarkDone" data-id="${ex.id}">
        <i class="fas fa-check-circle"></i> ${isDone ? 'Completed!' : 'Mark as Done'}
      </button>
      <button class="btn-share" onclick="shareExample(${ex.id})"><i class="fas fa-share-alt"></i> Share</button>
    </div>`;

  document.getElementById('btnMarkDone').addEventListener('click', function() {
    const progress = getProgress();
    const id = parseInt(this.dataset.id);
    const idx = progress.indexOf(id);
    if (idx === -1) { progress.push(id); this.textContent = ''; this.innerHTML = '<i class="fas fa-check-circle"></i> Completed!'; this.classList.add('done'); }
    else { progress.splice(idx, 1); this.innerHTML = '<i class="fas fa-check-circle"></i> Mark as Done'; this.classList.remove('done'); }
    saveProgress(progress);
    updateProgressUI();
    renderExamples(activeFilter === 'All' ? allExamples : allExamples.filter(e => e.category === activeFilter));
  });

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }

function shareExample(id) {
  const ex = allExamples.find(e => e.id === id);
  if (!ex) return;
  const text = `Check out "${ex.title}" on AndroidKotlin Academy!`;
  if (navigator.share) { navigator.share({ title: ex.title, text }); }
  else { navigator.clipboard.writeText(text); alert('Link copied to clipboard!'); }
}

// ===== COPY CODE =====
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = 'Copied!'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// ===== ROADMAP =====
const roadmapData = [
  { phase: "Phase 1", title: "Setup & Basics", color: "#22c55e", icon: "fas fa-seedling", desc: "Get your environment ready and learn Kotlin fundamentals.", topics: ["Install Android Studio", "Kotlin Variables & Types", "Functions & Lambdas", "Hello World App", "Button & EditText"] },
  { phase: "Phase 2", title: "UI Components", color: "#06b6d4", icon: "fas fa-palette", desc: "Master Android's core UI building blocks.", topics: ["TextView, ImageView", "RecyclerView", "CardView & Material", "ScrollView", "Dialogs & Menus"] },
  { phase: "Phase 3", title: "Navigation & State", color: "#f59e0b", icon: "fas fa-compass", desc: "Build multi-screen apps with proper state management.", topics: ["Navigation Component", "ViewPager2 & Tabs", "ViewModel & LiveData", "Fragment Lifecycle", "SharedPreferences"] },
  { phase: "Phase 4", title: "Data & Networking", color: "#8b5cf6", icon: "fas fa-database", desc: "Persist data locally and fetch from remote APIs.", topics: ["Room Database", "Retrofit + Coroutines", "DataStore", "Paging 3", "Glide Image Loading"] },
  { phase: "Phase 5", title: "Advanced Topics", color: "#ef4444", icon: "fas fa-rocket", desc: "Level up with modern Android architecture patterns.", topics: ["StateFlow & SharedFlow", "Clean Architecture", "Hilt DI", "WorkManager", "Jetpack Compose"] },
  { phase: "Phase 6", title: "Production Ready", color: "#f43f5e", icon: "fas fa-trophy", desc: "Ship real apps with Firebase, Maps, and testing.", topics: ["Firebase Auth", "Google Maps", "Unit Testing", "Performance", "Play Store Deploy"] }
];

function buildRoadmap() {
  const container = document.getElementById('roadmapContainer');
  if (!container) return;
  roadmapData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'roadmap-item reveal';
    el.style.transitionDelay = `${i * 0.1}s`;
    el.innerHTML = `
      <div class="roadmap-card">
        <div style="font-size:0.72rem;font-weight:700;color:${item.color};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">${item.phase}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="roadmap-topics">${item.topics.map(t => `<span class="roadmap-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="roadmap-dot" style="background:${item.color}22;color:${item.color}"><i class="${item.icon}"></i></div>
      <div class="roadmap-card" style="visibility:hidden"></div>`;
    container.appendChild(el);
    setTimeout(() => revealObserver.observe(el), 10);
  });
}
buildRoadmap();

// ===== QUIZ =====
let quizState = { topic: null, qIndex: 0, score: 0, answered: false };

function buildQuizTopics() {
  const container = document.getElementById('quizTopics');
  if (!container) return;
  quizData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'quiz-topic-card reveal';
    card.innerHTML = `
      <div class="quiz-topic-icon" style="color:${topic.color}"><i class="${topic.icon}"></i></div>
      <h4>${topic.topic}</h4>
      <p>${topic.questions.length} questions</p>`;
    card.addEventListener('click', () => startQuiz(topic));
    container.appendChild(card);
    setTimeout(() => revealObserver.observe(card), 10);
  });
}
buildQuizTopics();

function startQuiz(topic) {
  quizState = { topic, qIndex: 0, score: 0, answered: false };
  document.getElementById('quizArena').style.display = 'block';
  document.getElementById('quizArena').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  renderQuestion();
}

function renderQuestion() {
  const { topic, qIndex } = quizState;
  const q = topic.questions[qIndex];
  const total = topic.questions.length;
  const arena = document.getElementById('quizArena');
  arena.innerHTML = `
    <div class="quiz-header">
      <h3><i class="${topic.icon}" style="color:${topic.color};margin-right:8px"></i>${topic.topic}</h3>
      <span style="font-size:0.85rem;color:var(--text-muted)">${qIndex + 1} / ${total}</span>
    </div>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((qIndex)/total)*100}%"></div></div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt}</button>`).join('')}
    </div>`;

  arena.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', function() {
      if (quizState.answered) return;
      quizState.answered = true;
      const chosen = parseInt(this.dataset.idx);
      arena.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
      if (chosen === q.answer) { this.classList.add('correct'); quizState.score++; }
      else {
        this.classList.add('wrong');
        arena.querySelectorAll('.quiz-option')[q.answer].classList.add('correct');
      }
      setTimeout(() => {
        quizState.qIndex++;
        quizState.answered = false;
        if (quizState.qIndex < total) renderQuestion();
        else showQuizResult();
      }, 1200);
    });
  });
}

function showQuizResult() {
  const { score, topic } = quizState;
  const total = topic.questions.length;
  const pct = Math.round((score / total) * 100);
  const msg = pct === 100 ? '🎉 Perfect score!' : pct >= 75 ? '👍 Great job!' : pct >= 50 ? '📚 Keep practicing!' : '💪 Review the topic!';
  document.getElementById('quizArena').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-score">${score}/${total}</div>
      <p>${msg} You scored ${pct}%</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="startQuiz(quizState.topic)"><i class="fas fa-redo"></i> Try Again</button>
        <button class="btn btn-outline" onclick="document.getElementById('quizArena').style.display='none'"><i class="fas fa-times"></i> Close</button>
      </div>
    </div>`;
}

// ===== CHEAT SHEET =====
function buildCheatSheet() {
  const grid = document.getElementById('cheatsheetGrid');
  if (!grid) return;
  cheatSheets.forEach((sheet, i) => {
    const card = document.createElement('div');
    card.className = 'cheatsheet-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="cheatsheet-header">
        <div class="cheatsheet-header-icon" style="background:${sheet.color}22;color:${sheet.color}"><i class="${sheet.icon}"></i></div>
        <h3>${sheet.category}</h3>
        <i class="fas fa-chevron-down cheatsheet-toggle"></i>
      </div>
      <div class="cheatsheet-body">
        ${sheet.items.map(item => `
          <div class="cheat-item">
            <div class="cheat-item-title">${item.title}</div>
            <div class="code-block"><div class="code-header"><span class="code-lang">Kotlin</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre>${item.code}</pre></div>
          </div>`).join('')}
      </div>`;
    card.querySelector('.cheatsheet-header').addEventListener('click', () => card.classList.toggle('open'));
    grid.appendChild(card);
    setTimeout(() => revealObserver.observe(card), 10);
  });
}
buildCheatSheet();

// ===== RESOURCES =====
function buildResources() {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;
  resources.forEach(r => {
    const card = document.createElement('div');
    card.className = 'resource-card reveal';
    card.innerHTML = `
      <div class="resource-icon"><i class="${r.icon}"></i></div>
      <h4>${r.title}</h4>
      <p>${r.desc}</p>
      <a href="${r.link}" target="_blank" rel="noopener" class="resource-link"><i class="fas fa-external-link-alt"></i> ${r.label}</a>`;
    grid.appendChild(card);
    setTimeout(() => revealObserver.observe(card), 10);
  });
}
buildResources();
