/* ============================================
   CodeLevel — Main App Controller & Router
   ============================================ */

const App = {
  currentPage: 'dashboard',

  // Initialize the application
  init() {
    // Init subsystems
    i18n.init();
    Store.init();
    Storage.updateStreak();

    // Subscribe to state changes to automatically update UI elements
    Store.subscribe(() => this.updateHeaderStats());

    // Apply saved theme
    const profile = Storage.getProfile();
    document.documentElement.setAttribute('data-theme', profile.theme || 'dark');

    // Render the app shell
    this.renderShell();
    this.showDashboard();

    console.log('🎮 CodeLevel initialized!');
  },

  // Render the main app shell (sidebar + header + content area)
  renderShell() {
    const app = document.getElementById('app');
    const stats = Storage.getOverallStats();
    const hearts = Storage.getHearts();
    const profile = Storage.getProfile();

    app.innerHTML = `
      <!-- Sidebar -->
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <a class="sidebar-logo" href="#" onclick="App.showDashboard(); return false;">
            <span class="logo-icon">🚀</span>
            <span class="logo-text"><span>Code</span>Level</span>
          </a>
        </div>

        <nav class="sidebar-nav">
          <!-- Main nav -->
          <button class="sidebar-nav-item active" id="nav-dashboard" onclick="App.showDashboard()">
            <span class="nav-icon">🏠</span>
            <span>${i18n.t('navDashboard')}</span>
          </button>

          <button class="sidebar-nav-item" id="nav-stats" onclick="App.showStats()">
            <span class="nav-icon">📊</span>
            <span>${i18n.t('navStats')}</span>
          </button>

          <button class="sidebar-nav-item" id="nav-badges" onclick="App.showBadges()">
            <span class="nav-icon">🏅</span>
            <span>${i18n.t('navBadges')}</span>
            ${stats.badges.length > 0 ? `<span class="nav-badge">${stats.badges.length}</span>` : ''}
          </button>

          <!-- Topics -->
          <div class="sidebar-section-title">${i18n.t('navTopics')}</div>

          ${TOPICS.map(topic => {
            const unlocked = isTopicUnlocked(topic.id);
            const completion = getTopicCompletion(topic.id);
            return `
              <button class="sidebar-nav-item ${!unlocked ? 'locked' : ''}" 
                      id="nav-${topic.id}"
                      onclick="${unlocked ? `App.showLevels('${topic.id}')` : 'return false;'}"
                      ${!unlocked ? 'disabled' : ''}>
                <span class="nav-icon">${topic.icon}</span>
                <span>${i18n.t(topic.titleKey)}</span>
                ${unlocked && completion > 0 ? `<span class="nav-badge">${completion}%</span>` : ''}
                ${!unlocked ? '<span class="nav-badge" style="background: var(--text-tertiary)">🔒</span>' : ''}
              </button>
            `;
          }).join('')}
        </nav>

        <div class="sidebar-footer">
          <div class="xp-bar-container">
            <div class="xp-level-badge">${stats.level}</div>
            <div class="xp-bar-info">
              <div class="xp-bar-text">
                <span>Level ${stats.level}</span>
                <span>${Storage.getLevelProgress().current} / 500 XP</span>
              </div>
              <div class="progress-bar" style="height: 6px;">
                <div class="progress-bar-fill" style="width: ${Storage.getLevelProgress().percentage}%"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div class="sidebar-overlay" id="sidebar-overlay" onclick="App.closeSidebar()"></div>

      <!-- Header -->
      <header class="top-header">
        <div class="header-left">
          <button class="menu-toggle" onclick="App.toggleSidebar()" aria-label="Toggle menu">☰</button>
          <h1 id="page-title" style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">
            ${i18n.t('navDashboard')}
          </h1>
        </div>
        <div class="header-right">
          <!-- Streak -->
          <div class="header-stat" title="${i18n.t('dashStreak')}">
            <span class="stat-icon ${stats.streak.current > 0 ? 'animate-streakFire' : ''}">🔥</span>
            <span class="stat-value" id="header-streak">${stats.streak.current}</span>
          </div>

          <!-- XP -->
          <div class="header-stat" title="${i18n.t('dashXP')}">
            <span class="stat-icon">⚡</span>
            <span class="stat-value" id="header-xp">${stats.xp}</span>
          </div>

          <!-- Hearts -->
          <div class="hearts-display" id="header-hearts">
            ${Array.from({ length: hearts.max }, (_, i) =>
              `<span class="heart ${i < hearts.current ? 'active' : 'lost'}">${i < hearts.current ? '❤️' : '🖤'}</span>`
            ).join('')}
          </div>

          <!-- Theme toggle -->
          <button class="theme-toggle" onclick="App.toggleTheme()" title="${profile.theme === 'dark' ? i18n.t('lightMode') : i18n.t('darkMode')}">
            ${profile.theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <!-- Language toggle -->
          <button class="lang-toggle" onclick="App.toggleLanguage()">
            ${i18n.currentLang === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content" id="main-content">
        <!-- Content injected by router -->
      </main>

      <!-- Toast Container -->
      <div class="toast-container" id="toast-container"></div>
    `;
  },

  // ---- Navigation ----
  setActiveNav(navId) {
    document.querySelectorAll('.sidebar-nav-item').forEach(el => el.classList.remove('active'));
    const el = document.getElementById(navId);
    if (el) el.classList.add('active');
  },

  setPageTitle(title) {
    const el = document.getElementById('page-title');
    if (el) el.textContent = title;
  },

  // ---- Sidebar Toggle ----
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  },

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
  },

  // ---- Theme Toggle ----
  toggleTheme() {
    const profile = Storage.getProfile();
    const newTheme = profile.theme === 'dark' ? 'light' : 'dark';
    profile.theme = newTheme;
    Storage.setProfile(profile);
    document.documentElement.setAttribute('data-theme', newTheme);
    this.renderShell();
    this.navigate(this.currentPage);
  },

  // ---- Language Toggle ----
  toggleLanguage() {
    const newLang = i18n.toggleLang();
    this.renderShell();
    // If quiz is active, re-render quiz instead of navigating away
    if (QuizEngine.currentTopic && QuizEngine.questions.length > 0 && !QuizEngine.quizFinished) {
      QuizEngine.render();
    } else {
      this.navigate(this.currentPage);
    }
    this.showToast(`Language changed to ${newLang === 'en' ? 'English' : 'العربية'}`, 'info');
  },

  // ---- Router ----
  navigate(page) {
    this.currentPage = page;
    switch (page) {
      case 'dashboard': this.showDashboard(); break;
      case 'stats': this.showStats(); break;
      case 'badges': this.showBadges(); break;
      default:
        if (page.startsWith('levels:')) {
          this.showLevels(page.split(':')[1]);
        }
    }
  },

  // ---- Dashboard Page ----
  showDashboard() {
    this.currentPage = 'dashboard';
    this.setActiveNav('nav-dashboard');
    this.setPageTitle(i18n.t('navDashboard'));
    this.closeSidebar();

    const container = document.getElementById('main-content');
    const stats = Storage.getOverallStats();
    const streak = stats.streak;
    const profile = Storage.getProfile();

    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Welcome -->
        <div style="margin-bottom: var(--space-2xl);">
          <h2 class="page-title">Welcome back, ${profile.name || 'Fatma Sabry Abdallah'} 👋</h2>
          <p class="page-subtitle">Ready to level up your frontend skills?</p>
          <div class="contact-details">
            <a class="phone-link" href="tel:+201285949284">📞 01285949284</a>
            <a class="whatsapp-link" href="https://wa.me/201285949284" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3A13 13 0 0 0 4.7 22.8L3 29l6.4-1.7A13 13 0 1 0 16 3zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.2.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.2-.1-.4-.2-.7-.3z"/></svg>
            </a>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="dashboard-stats stagger-children">
          <div class="stat-card">
            <div class="stat-card-icon">⚡</div>
            <div class="stat-card-value">${stats.xp.toLocaleString()}</div>
            <div class="stat-card-label">${i18n.t('dashXP')}</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-icon">🎯</div>
            <div class="stat-card-value">${stats.level}</div>
            <div class="stat-card-label">${i18n.t('dashLevel')}</div>
          </div>

          <div class="stat-card streak-card">
            <div class="stat-card-icon">${streak.current > 0 ? '🔥' : '❄️'}</div>
            <div class="stat-card-value">${streak.current}</div>
            <div class="stat-card-label">${i18n.t('dashStreak')}</div>
          </div>

          <div class="stat-card">
            <div class="stat-card-icon">🎯</div>
            <div class="stat-card-value">${stats.accuracy}%</div>
            <div class="stat-card-label">${i18n.t('dashAccuracy')}</div>
          </div>
        </div>

        <!-- Topic Cards -->
        <div class="section-title">${i18n.t('dashYourTopics')}</div>
        <div class="topic-grid stagger-children">
          ${TOPICS.map(topic => {
            const unlocked = isTopicUnlocked(topic.id);
            const completion = getTopicCompletion(topic.id);
            const progress = Storage.getTopicProgress(topic.id);

            return `
              <div class="topic-card ${!unlocked ? 'locked' : ''}" 
                   data-topic="${topic.id}"
                   onclick="${unlocked ? `App.showLevels('${topic.id}')` : ''}">
                <div class="topic-card-icon">${topic.icon}</div>
                <div class="topic-card-title">${i18n.t(topic.titleKey)}</div>
                <div class="topic-card-description">${i18n.t(topic.descKey)}</div>
                <div class="topic-card-footer">
                  <span class="topic-card-levels">
                    ${unlocked
                      ? `${progress.completedLevels.length} / ${topic.totalLevels} ${i18n.t('levels')}`
                      : `🔒 ${i18n.t('locked')}`
                    }
                  </span>
                </div>
                ${unlocked ? `
                  <div class="topic-card-progress">
                    <div class="progress-bar">
                      <div class="progress-bar-fill" style="width: ${completion}%; background: linear-gradient(90deg, ${topic.color}, ${topic.color}88);"></div>
                    </div>
                    <div class="progress-text">${completion}% ${i18n.t('completed')}</div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // ---- Levels / Roadmap Page ----
  showLevels(topicId) {
    this.currentPage = `levels:${topicId}`;
    this.setActiveNav(`nav-${topicId}`);
    this.closeSidebar();

    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    this.setPageTitle(i18n.t(topic.titleKey));

    const container = document.getElementById('main-content');
    const progress = Storage.getTopicProgress(topicId);
    const levels = getLevelsForTopic(topicId);
    const completion = getTopicCompletion(topicId);

    // Build level nodes
    let levelsHTML = '';

    if (levels.length > 0) {
      levelsHTML = levels.map((lvl, index) => {
        const levelNum = lvl.level || lvl.id;
        const isCompleted = progress.completedLevels.includes(levelNum);
        const isCurrent = levelNum === progress.currentLevel;
        const isLocked = levelNum > progress.currentLevel;
        const levelScore = progress.levelScores[levelNum];

        let circleClass = 'locked';
        let circleContent = '🔒';
        if (isCompleted) {
          circleClass = 'completed';
          circleContent = '✓';
        } else if (isCurrent) {
          circleClass = 'current';
          circleContent = levelNum;
        } else if (isLocked) {
          circleClass = 'locked';
          circleContent = '🔒';
        }

        const starsHTML = isCompleted && levelScore ? 
          Array.from({ length: 3 }, (_, i) => 
            `<span class="star ${i < levelScore.stars ? 'earned' : ''}">★</span>`
          ).join('') : '';

        const questionsAvailable = getQuestionsForLevel(topicId, levelNum).length;

        return `
          <div class="level-node ${isLocked && !isCurrent ? '' : 'hover-lift'}" 
               style="cursor: ${isLocked && !isCurrent ? 'not-allowed' : 'pointer'}; opacity: ${isLocked && !isCurrent ? '0.4' : '1'};"
               onclick="${!isLocked || isCurrent ? `QuizEngine.start('${topicId}', ${levelNum})` : ''}">
            <div class="level-circle ${circleClass}">
              ${circleContent}
            </div>
            <div class="level-info">
              <div class="level-title">${lvl.icon || ''} ${i18n.tObj(lvl.title)}</div>
              <div class="level-subtitle">
                ${i18n.tObj(lvl.description) || ''}
                ${questionsAvailable > 0 ? ` • ${questionsAvailable} questions` : ''}
              </div>
              ${starsHTML ? `<div class="level-stars">${starsHTML}</div>` : ''}
              ${levelScore ? `<div class="level-subtitle" style="color: var(--success);">Best: ${levelScore.bestScore}%</div>` : ''}
            </div>
          </div>
        `;
      }).join('');
    } else {
      // Generate generic levels if no level data exists
      levelsHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🚧</div>
          <div class="empty-state-text">${i18n.t('comingSoon')}</div>
          <p style="color: var(--text-tertiary);">Questions for this topic are being prepared.</p>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="animate-fadeIn">
        <!-- Topic Header -->
        <div style="margin-bottom: var(--space-2xl); text-align: center;">
          <div style="font-size: 3rem; margin-bottom: var(--space-md);">${topic.icon}</div>
          <h2 class="page-title">${i18n.t(topic.titleKey)}</h2>
          <p class="page-subtitle">${i18n.t(topic.descKey)}</p>
          <div style="max-width: 300px; margin: var(--space-lg) auto 0;">
            <div class="progress-bar" style="height: 10px;">
              <div class="progress-bar-fill" style="width: ${completion}%; background: linear-gradient(90deg, ${topic.color}, ${topic.color}88);"></div>
            </div>
            <div class="progress-text">${completion}% ${i18n.t('completed')} • ${progress.completedLevels.length} / ${topic.totalLevels} ${i18n.t('levels')}</div>
          </div>
        </div>

        <!-- Back Button -->
        <div style="margin-bottom: var(--space-xl);">
          <button class="btn btn-ghost" onclick="App.showDashboard()">
            ← ${i18n.t('backBtn')}
          </button>
        </div>

        <!-- Level Path -->
        <div class="levels-container">
          <div class="level-path stagger-children">
            ${levelsHTML}
          </div>
        </div>
      </div>
    `;
  },

  // ---- Statistics Page ----
  showStats() {
    this.currentPage = 'stats';
    this.setActiveNav('nav-stats');
    this.setPageTitle(i18n.t('navStats'));
    this.closeSidebar();

    const container = document.getElementById('main-content');
    const stats = Storage.getOverallStats();

    const topicBars = TOPICS.filter(t => isTopicUnlocked(t.id)).map(topic => {
      const topicStat = stats.topicStats[topic.id];
      const completion = getTopicCompletion(topic.id);
      return `
        <div class="bar-item">
          <span class="bar-label">${topic.icon} ${topic.title}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${completion}%; background: ${topic.color};">
              <span class="bar-value">${completion}%</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const accuracyBars = TOPICS.filter(t => {
      const s = stats.topicStats[t.id];
      return s && s.accuracy > 0;
    }).map(topic => {
      const acc = stats.topicStats[topic.id].accuracy;
      return `
        <div class="bar-item">
          <span class="bar-label">${topic.icon} ${topic.title}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${acc}%; background: ${acc >= 70 ? 'var(--success)' : acc >= 50 ? 'var(--warning)' : 'var(--danger)'};">
              <span class="bar-value">${acc}%</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="animate-fadeIn">
        <h2 class="page-title">📊 ${i18n.t('statsTitle')}</h2>
        <p class="page-subtitle">Track your learning progress and identify areas for improvement</p>

        <!-- Overview Stats -->
        <div class="dashboard-stats stagger-children" style="margin-bottom: var(--space-2xl);">
          <div class="stat-card">
            <div class="stat-card-icon">📝</div>
            <div class="stat-card-value">${stats.totalQuestions}</div>
            <div class="stat-card-label">Questions Answered</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">✅</div>
            <div class="stat-card-value">${stats.totalCorrect}</div>
            <div class="stat-card-label">Correct Answers</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">📚</div>
            <div class="stat-card-value">${stats.totalCompletedLevels}</div>
            <div class="stat-card-label">Levels Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">🎯</div>
            <div class="stat-card-value">${stats.accuracy}%</div>
            <div class="stat-card-label">Overall Accuracy</div>
          </div>
        </div>

        <!-- Charts -->
        <div class="stats-grid">
          <div class="chart-card">
            <div class="chart-title">📈 ${i18n.t('statsOverall')}</div>
            <div class="bar-chart">
              ${topicBars || '<p style="color: var(--text-tertiary);">Start learning to see your progress!</p>'}
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-title">🎯 ${i18n.t('statsAccuracy')}</div>
            <div class="bar-chart">
              ${accuracyBars || '<p style="color: var(--text-tertiary);">Answer some questions to see accuracy!</p>'}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ---- Badges Page ----
  showBadges() {
    this.currentPage = 'badges';
    this.setActiveNav('nav-badges');
    this.setPageTitle(i18n.t('navBadges'));
    this.closeSidebar();

    const container = document.getElementById('main-content');
    const earned = Storage.getBadges();

    const badgesHTML = BADGES.map(badge => `
      <div class="badge-item ${earned.includes(badge.id) ? 'earned' : ''}">
        <span class="badge-icon">${badge.icon}</span>
        <span class="badge-name">${badge.name}</span>
        <span style="font-size: var(--fs-xs); color: var(--text-tertiary);">${badge.description}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="animate-fadeIn">
        <h2 class="page-title">🏅 ${i18n.t('badgesTitle')}</h2>
        <p class="page-subtitle">${earned.length} / ${BADGES.length} achievements unlocked</p>

        <div class="badges-grid stagger-children">
          ${badgesHTML}
        </div>
      </div>
    `;
  },

  // ---- Toast Notifications ----
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
      <span class="toast-message">${message}</span>
      <span class="toast-close" onclick="this.parentElement.remove()">✕</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // ---- Update Header Stats ----
  updateHeaderStats() {
    // Read from Store state instead of Storage
    const { xp, streak, hearts } = Store.state;

    const xpEl = document.getElementById('header-xp');
    const streakEl = document.getElementById('header-streak');
    const heartsEl = document.getElementById('header-hearts');

    if (xpEl) xpEl.textContent = xp;
    if (streakEl) streakEl.textContent = streak;
    if (heartsEl) {
      heartsEl.innerHTML = Array.from({ length: hearts.max }, (_, i) =>
        `<span class="heart ${i < hearts.current ? 'active' : 'lost'}">${i < hearts.current ? '❤️' : '🖤'}</span>`
      ).join('');
    }
  }
};

// ---- Initialize on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
