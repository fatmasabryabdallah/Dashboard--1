/* ============================================
   CodeLevel — Storage Manager
   Handles all localStorage persistence
   ============================================ */

const Storage = {
  PREFIX: 'codelevel_',

  // Core CRUD
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(this.PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn('Storage.get error:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Storage.set error:', e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(this.PREFIX + key);
  },

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.PREFIX))
      .forEach(k => localStorage.removeItem(k));
  },

  // ---- User Profile ----
  getProfile() {
    return this.get('profile', {
      name: 'Fatma Sabry Abdallah',
      createdAt: new Date().toISOString(),
      theme: 'dark',
      lang: 'en',
      soundEnabled: true
    });
  },

  setProfile(profile) {
    this.set('profile', profile);
  },

  // ---- XP & Level ----
  getXP() {
    return this.get('xp', 0);
  },

  addXP(amount) {
    const current = this.getXP();
    const newXP = current + amount;
    this.set('xp', newXP);
    return newXP;
  },

  getLevel() {
    const xp = this.getXP();
    return Math.floor(xp / 500) + 1;
  },

  getLevelProgress() {
    const xp = this.getXP();
    const currentLevelXP = xp % 500;
    return {
      current: currentLevelXP,
      required: 500,
      percentage: Math.round((currentLevelXP / 500) * 100)
    };
  },

  // ---- Streaks ----
  getStreak() {
    const streak = this.get('streak', {
      current: 0,
      best: 0,
      lastDate: null
    });
    return streak;
  },

  updateStreak() {
    const streak = this.getStreak();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (streak.lastDate === today) {
      return streak; // Already counted today
    }

    if (streak.lastDate === yesterday) {
      streak.current += 1;
    } else if (streak.lastDate !== today) {
      streak.current = 1; // Reset streak
    }

    streak.lastDate = today;
    streak.best = Math.max(streak.best, streak.current);
    this.set('streak', streak);
    return streak;
  },

  // ---- Hearts ----
  getHearts() {
    const hearts = this.get('hearts', {
      current: 5,
      max: 5,
      lastRefill: new Date().toISOString()
    });

    // Auto-refill after 4 hours
    const lastRefill = new Date(hearts.lastRefill);
    const hoursSince = (Date.now() - lastRefill.getTime()) / (1000 * 60 * 60);
    if (hoursSince >= 4 && hearts.current < hearts.max) {
      hearts.current = hearts.max;
      hearts.lastRefill = new Date().toISOString();
      this.set('hearts', hearts);
    }

    return hearts;
  },

  loseHeart() {
    const hearts = this.getHearts();
    if (hearts.current > 0) {
      hearts.current -= 1;
      this.set('hearts', hearts);
    }
    return hearts;
  },

  refillHearts() {
    const hearts = this.getHearts();
    hearts.current = hearts.max;
    hearts.lastRefill = new Date().toISOString();
    this.set('hearts', hearts);
    return hearts;
  },

  // ---- Topic Progress ----
  getTopicProgress(topicId) {
    return this.get(`progress_${topicId}`, {
      completedLevels: [],
      currentLevel: 1,
      totalCorrect: 0,
      totalWrong: 0,
      totalQuestions: 0,
      levelScores: {}, // { levelNum: { score, stars, bestScore } }
      startedAt: null,
      lastPlayedAt: null
    });
  },

  updateTopicProgress(topicId, updates) {
    const progress = this.getTopicProgress(topicId);
    Object.assign(progress, updates);
    progress.lastPlayedAt = new Date().toISOString();
    if (!progress.startedAt) {
      progress.startedAt = new Date().toISOString();
    }
    this.set(`progress_${topicId}`, progress);
    return progress;
  },

  completeLevelForTopic(topicId, levelNum, score, totalQuestions) {
    const progress = this.getTopicProgress(topicId);

    if (!progress.completedLevels.includes(levelNum)) {
      progress.completedLevels.push(levelNum);
      progress.completedLevels.sort((a, b) => a - b);
    }

    // Calculate stars (3 stars system)
    const percentage = Math.round((score / totalQuestions) * 100);
    let stars = 0;
    if (percentage >= 90) stars = 3;
    else if (percentage >= 70) stars = 2;
    else if (percentage >= 50) stars = 1;

    const existingScore = progress.levelScores[levelNum];
    if (!existingScore || percentage > existingScore.bestScore) {
      progress.levelScores[levelNum] = {
        score,
        stars,
        bestScore: percentage,
        completedAt: new Date().toISOString()
      };
    }

    // Advance to next level
    if (levelNum >= progress.currentLevel && percentage >= 50) {
      progress.currentLevel = levelNum + 1;
    }

    this.updateTopicProgress(topicId, progress);
    return { stars, percentage, progress };
  },

  // ---- Question History ----
  addQuestionHistory(topicId, questionId, isCorrect) {
    const history = this.get('question_history', []);
    history.push({
      topicId,
      questionId,
      isCorrect,
      timestamp: new Date().toISOString()
    });
    // Keep last 1000 entries
    if (history.length > 1000) {
      history.splice(0, history.length - 1000);
    }
    this.set('question_history', history);
  },

  getQuestionHistory(topicId = null) {
    const history = this.get('question_history', []);
    if (topicId) {
      return history.filter(h => h.topicId === topicId);
    }
    return history;
  },

  // ---- Badges ----
  getBadges() {
    return this.get('badges', []);
  },

  earnBadge(badgeId) {
    const badges = this.getBadges();
    if (!badges.includes(badgeId)) {
      badges.push(badgeId);
      this.set('badges', badges);
      return true; // New badge earned
    }
    return false;
  },

  // ---- Review Queue ----
  addToReviewQueue(topicId, questionId) {
    const queue = this.get('review_queue', []);
    const entry = { topicId, questionId, addedAt: new Date().toISOString() };
    if (!queue.some(q => q.questionId === questionId)) {
      queue.push(entry);
      this.set('review_queue', queue);
    }
  },

  getReviewQueue(topicId = null) {
    const queue = this.get('review_queue', []);
    if (topicId) {
      return queue.filter(q => q.topicId === topicId);
    }
    return queue;
  },

  removeFromReviewQueue(questionId) {
    const queue = this.get('review_queue', []);
    const filtered = queue.filter(q => q.questionId !== questionId);
    this.set('review_queue', filtered);
  },

  // ---- Statistics ----
  getOverallStats() {
    const topics = ['internet', 'html', 'css', 'tailwind', 'javascript', 'react', 'git'];
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalCompleted = 0;
    const topicStats = {};

    topics.forEach(topic => {
      const progress = this.getTopicProgress(topic);
      totalCorrect += progress.totalCorrect;
      totalWrong += progress.totalWrong;
      totalCompleted += progress.completedLevels.length;
      topicStats[topic] = {
        completedLevels: progress.completedLevels.length,
        accuracy: progress.totalQuestions > 0
          ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100)
          : 0
      };
    });

    return {
      xp: this.getXP(),
      level: this.getLevel(),
      streak: this.getStreak(),
      hearts: this.getHearts(),
      totalCorrect,
      totalWrong,
      totalQuestions: totalCorrect + totalWrong,
      totalCompletedLevels: totalCompleted,
      accuracy: (totalCorrect + totalWrong) > 0
        ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100)
        : 0,
      topicStats,
      badges: this.getBadges()
    };
  }
};
