/* ============================================
   CodeLevel — Mini State Manager (Store)
   A Vanilla JS implementation of the Pub/Sub pattern
   ============================================ */

const Store = {
  // Centralized State
  state: {
    xp: 0,
    level: 1,
    streak: 0,
    hearts: { current: 5, max: 5 },
    badgesCount: 0
  },

  // Observers list
  listeners: [],

  // Initialize state from Storage
  init() {
    const stats = Storage.getOverallStats();
    this.state = {
      xp: stats.xp,
      level: stats.level,
      streak: stats.streak.current,
      hearts: Storage.getHearts(),
      badgesCount: stats.badges.length
    };
  },

  // Subscribe to state changes
  subscribe(callback) {
    this.listeners.push(callback);
    // Return an unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  },

  // Notify all subscribers
  notify() {
    this.listeners.forEach(callback => callback(this.state));
  },

  // Dispatch actions to update state (similar to Redux)
  dispatch(action, payload = null) {
    switch (action) {
      case 'ADD_XP':
        Storage.addXP(payload);
        this.state.xp = Storage.getXP();
        this.state.level = Storage.getLevel();
        break;

      case 'LOSE_HEART':
        Storage.loseHeart();
        this.state.hearts = Storage.getHearts();
        break;

      case 'REFILL_HEARTS':
        Storage.refillHearts();
        this.state.hearts = Storage.getHearts();
        break;

      case 'UPDATE_STREAK':
        Storage.updateStreak();
        this.state.streak = Storage.getStreak().current;
        break;
        
      case 'SYNC_STATE':
        this.init();
        break;

      default:
        console.warn(`Action type "${action}" is not handled.`);
        return;
    }

    // Notify UI after state change
    this.notify();
  }
};
