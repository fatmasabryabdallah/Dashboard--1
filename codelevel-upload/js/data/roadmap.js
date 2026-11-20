/* ============================================
   CodeLevel — Roadmap / Learning Path Structure
   ============================================ */

const TOPICS = [
  {
    id: 'internet',
    title: 'Internet & Web',
    titleKey: 'topicInternet',
    descKey: 'topicInternetDesc',
    icon: '🌐',
    color: 'var(--internet-color)',
    bgColor: 'var(--internet-bg)',
    totalLevels: 6,
    requiredTopic: null, // First topic, no prerequisite
    status: 'unlocked'
  },
  {
    id: 'html',
    title: 'HTML',
    titleKey: 'topicHTML',
    descKey: 'topicHTMLDesc',
    icon: '🏗️',
    color: 'var(--html-color)',
    bgColor: 'var(--html-bg)',
    totalLevels: 15,
    requiredTopic: null, // Can start independently
    status: 'unlocked'
  },
  {
    id: 'css',
    title: 'CSS',
    titleKey: 'topicCSS',
    descKey: 'topicCSSDesc',
    icon: '🎨',
    color: 'var(--css-color)',
    bgColor: 'var(--css-bg)',
    totalLevels: 15, // Phase 1 starter set
    requiredTopic: 'html', // Must complete some HTML first
    requiredLevel: 10,
    status: 'locked'
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    titleKey: 'topicTailwind',
    descKey: 'topicTailwindDesc',
    icon: '🌀',
    color: 'var(--tailwind-color)',
    bgColor: 'var(--tailwind-bg)',
    totalLevels: 15,
    requiredTopic: 'css',
    requiredLevel: 10,
    status: 'locked'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    titleKey: 'topicJS',
    descKey: 'topicJSDesc',
    icon: '⚡',
    color: 'var(--js-color)',
    bgColor: 'var(--js-bg)',
    totalLevels: 50,
    requiredTopic: 'html',
    requiredLevel: 15,
    status: 'locked'
  },
  {
    id: 'react',
    title: 'React',
    titleKey: 'topicReact',
    descKey: 'topicReactDesc',
    icon: '⚛️',
    color: 'var(--react-color)',
    bgColor: 'var(--react-bg)',
    totalLevels: 30,
    requiredTopic: 'javascript',
    requiredLevel: 20,
    status: 'locked'
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    titleKey: 'topicGit',
    descKey: 'topicGitDesc',
    icon: '🐙',
    color: 'var(--git-color)',
    bgColor: 'var(--git-bg)',
    totalLevels: 10,
    requiredTopic: null,
    status: 'unlocked'
  }
];

// Badge definitions
const BADGES = [
  { id: 'first_step', name: 'First Step', icon: '👶', description: 'Complete your first level' },
  { id: 'html_beginner', name: 'HTML Beginner', icon: '📄', description: 'Complete 5 HTML levels' },
  { id: 'html_intermediate', name: 'HTML Builder', icon: '🏠', description: 'Complete 15 HTML levels' },
  { id: 'html_master', name: 'HTML Master', icon: '🏗️', description: 'Complete all HTML levels' },
  { id: 'css_beginner', name: 'CSS Stylist', icon: '🎨', description: 'Complete 5 CSS levels' },
  { id: 'css_master', name: 'CSS Wizard', icon: '✨', description: 'Complete all CSS levels' },
  { id: 'js_beginner', name: 'JS Learner', icon: '📝', description: 'Complete 5 JavaScript levels' },
  { id: 'js_master', name: 'JS Ninja', icon: '⚡', description: 'Complete all JavaScript levels' },
  { id: 'perfect_score', name: 'Perfectionist', icon: '💯', description: 'Get 100% on any level' },
  { id: 'streak_3', name: 'On Fire', icon: '🔥', description: '3 day streak' },
  { id: 'streak_7', name: 'Week Warrior', icon: '⚔️', description: '7 day streak' },
  { id: 'streak_30', name: 'Dedicated', icon: '🏆', description: '30 day streak' },
  { id: 'xp_1000', name: 'Rising Star', icon: '⭐', description: 'Earn 1000 XP' },
  { id: 'xp_5000', name: 'Knowledge Seeker', icon: '🌟', description: 'Earn 5000 XP' },
  { id: 'xp_10000', name: 'Code Legend', icon: '👑', description: 'Earn 10000 XP' },
  { id: 'all_topics', name: 'Full Stack', icon: '🚀', description: 'Start all topics' },
  { id: 'net_explorer', name: 'Net Explorer', icon: '🌐', description: 'Complete Internet & Web' },
  { id: 'code_writer', name: 'Code Writer', icon: '⌨️', description: 'Complete 10 code challenges' },
  { id: 'quick_learner', name: 'Quick Learner', icon: '🏃', description: 'Complete 5 levels in one day' },
  { id: 'comeback', name: 'Comeback Kid', icon: '💪', description: 'Retry and pass a failed level' },
];

// Helper to check if a topic is unlocked
function isTopicUnlocked(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  if (!topic) return false;
  if (!topic.requiredTopic) return true;

  const requiredProgress = Storage.getTopicProgress(topic.requiredTopic);
  return requiredProgress.currentLevel >= (topic.requiredLevel || 1);
}

// Helper to get topic completion percentage
function getTopicCompletion(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  if (!topic) return 0;
  const progress = Storage.getTopicProgress(topicId);
  return Math.round((progress.completedLevels.length / topic.totalLevels) * 100);
}

// Get questions for a specific topic and level
function getQuestionsForLevel(topicId, level) {
  let questions = [];

  switch (topicId) {
    case 'internet':
      if (typeof INTERNET_QUESTIONS !== 'undefined') {
        questions = INTERNET_QUESTIONS.filter(q => (q.level || q.levelId) === level);
      }
      break;
    case 'html':
      if (typeof HTML_QUESTIONS !== 'undefined') {
        questions = HTML_QUESTIONS.filter(q => (q.level || q.levelId) === level);
      }
      break;
    case 'css':
      if (typeof CSS_QUESTIONS !== 'undefined') {
        questions = CSS_QUESTIONS.filter(q => (q.level || q.levelId) === level);
      }
      break;
    default:
      questions = [];
  }

  return questions;
}

// Get level info for a topic
function getLevelsForTopic(topicId) {
  switch (topicId) {
    case 'internet':
      return typeof INTERNET_LEVELS !== 'undefined' ? INTERNET_LEVELS : [];
    case 'html':
      return typeof HTML_LEVELS !== 'undefined' ? HTML_LEVELS : [];
    case 'css':
      return typeof CSS_LEVELS !== 'undefined' ? CSS_LEVELS : [];
    default:
      return [];
  }
}
