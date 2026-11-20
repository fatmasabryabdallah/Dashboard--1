/* ============================================
   CodeLevel — Quiz Engine
   Handles all quiz logic, scoring, and flow
   ============================================ */

const QuizEngine = {
  // State
  currentTopic: null,
  currentLevel: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  totalXPEarned: 0,
  answers: [], // { questionId, selectedAnswer, isCorrect }
  isAnswered: false,
  quizFinished: false,
  previewFrame: null,

  // Initialize quiz for a specific level
  start(topicId, level) {
    this.currentTopic = topicId;
    this.currentLevel = level;
    this.questions = getQuestionsForLevel(topicId, level);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.totalXPEarned = 0;
    this.answers = [];
    this.isAnswered = false;
    this.quizFinished = false;

    if (this.questions.length === 0) {
      this.renderNoQuestions();
      return;
    }

    // Shuffle questions for variety
    this.questions = this.shuffleArray([...this.questions]);

    Storage.updateStreak();
    this.render();
  },

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Main render
  render() {
    const container = document.getElementById('main-content');
    const question = this.questions[this.currentQuestionIndex];
    const hearts = Store.state.hearts;
    const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;

    let questionHTML = '';

    switch (question.type) {
      case 'mcq':
        questionHTML = this.renderMCQ(question);
        break;
      case 'true_false':
        questionHTML = this.renderTrueFalse(question);
        break;
      case 'code':
        questionHTML = this.renderCodeChallenge(question);
        break;
      case 'build':
        questionHTML = this.renderBuildChallenge(question);
        break;
      case 'essay':
        questionHTML = this.renderEssay(question);
        break;
      default:
        questionHTML = this.renderMCQ(question);
    }

    container.innerHTML = `
      <div class="quiz-container animate-fadeIn">
        <!-- Anti-cheat banner -->
        <div class="anti-cheat-banner">
          <span class="banner-icon">⚠️</span>
          <span>${i18n.t('antiCheat')}</span>
        </div>

        <!-- Quiz Header -->
        <div class="quiz-header">
          <button class="quiz-close-btn" onclick="QuizEngine.confirmExit()" title="${i18n.t('closeBtn')}">✕</button>
          <div class="quiz-progress">
            <div class="progress-bar">
              <div class="progress-bar-fill" style="width: ${progress}%"></div>
            </div>
          </div>
          <div class="quiz-question-counter">
            ${this.currentQuestionIndex + 1} / ${this.questions.length}
          </div>
        </div>

        <!-- Hearts Display -->
        <div class="hearts-display" style="justify-content: center; margin-bottom: var(--space-lg);">
          ${Array.from({ length: hearts.max }, (_, i) =>
            `<span class="heart ${i < hearts.current ? 'active' : 'lost'}">${i < hearts.current ? '❤️' : '🖤'}</span>`
          ).join('')}
        </div>

        <!-- Question -->
        ${questionHTML}

        <!-- Feedback Panel (hidden initially) -->
        <div id="feedback-panel" class="hidden"></div>

        <!-- Action Buttons -->
        <div id="quiz-actions" class="flex justify-center gap-md" style="margin-top: var(--space-xl);">
          ${this.isAnswered ? `
            <button class="btn btn-primary btn-lg" onclick="QuizEngine.nextQuestion()">
              ${this.currentQuestionIndex < this.questions.length - 1 ? i18n.t('quizNext') + ' →' : i18n.t('quizFinish') + ' 🎉'}
            </button>
          ` : `
            ${question.type === 'code' || question.type === 'build' ? `
              <button class="btn btn-success btn-lg" onclick="QuizEngine.submitCodeAnswer()">
                ${i18n.t('quizSubmitCode')} ▶
              </button>
            ` : question.type === 'essay' ? `
              <button class="btn btn-success btn-lg" onclick="QuizEngine.submitEssayAnswer()">
                ${i18n.t('quizCheckAnswer')} ✓
              </button>
            ` : ''}
            <button class="btn btn-ghost btn-sm" onclick="QuizEngine.skipQuestion()">
              ${i18n.t('quizSkip')} ⏭
            </button>
          `}
        </div>
      </div>
    `;

    // Update code preview if needed
    if (question.type === 'code' || question.type === 'build') {
      this.setupCodePreview();
    }
  },

  // Render MCQ question
  renderMCQ(question) {
    // Find correct index: support both old format (correctAnswer) and new format (isCorrect on option)
    let correctIndex = question.correctAnswer;
    if (correctIndex === undefined && question.options) {
      correctIndex = question.options.findIndex(opt => opt.isCorrect === true);
    }

    const options = question.options.map((opt, index) => {
      const letter = String.fromCharCode(65 + index); // A, B, C, D
      // Extract option text: could be a string, or a bilingual {en, ar, isCorrect} object
      let optText = '';
      if (typeof opt === 'string') {
        optText = opt;
      } else if (typeof opt === 'object') {
        optText = i18n.tObj(opt);
      }
      return `
        <div class="option-item ${this.isAnswered ? 'disabled' : ''} ${this.isAnswered && index === correctIndex ? 'correct' : ''}"
             onclick="QuizEngine.selectMCQAnswer(${index})"
             data-index="${index}"
             id="option-${index}">
          <span class="option-letter">${letter}</span>
          <span class="option-text">${this.escapeHTML(optText)}</span>
          <span class="option-result-icon">
            ${index === correctIndex ? '\u2713' : '\u2717'}
          </span>
        </div>
      `;
    }).join('');

    return `
      <div class="question-card">
        <span class="question-type-badge mcq">\ud83d\udcdd Multiple Choice</span>
        <h2 class="question-text">${this.escapeHTML(i18n.tObj(question.question))}</h2>
        ${question.codeSnippet ? `<div class="question-code-snippet"><pre>${this.escapeHTML(question.codeSnippet)}</pre></div>` : ''}
        <div class="options-list">
          ${options}
        </div>
      </div>
    `;
  },

  // Render True/False question
  renderTrueFalse(question) {
    return `
      <div class="question-card">
        <span class="question-type-badge true-false">⚖️ True or False</span>
        <h2 class="question-text">${this.escapeHTML(i18n.tObj(question.question))}</h2>
        ${question.codeSnippet ? `<div class="question-code-snippet"><pre>${this.escapeHTML(question.codeSnippet)}</pre></div>` : ''}
        <div class="tf-options">
          <button class="tf-btn true-btn ${this.isAnswered ? 'disabled' : ''}"
                  onclick="QuizEngine.selectTFAnswer(true)"
                  id="tf-true">
            <span class="tf-icon">✓</span>
            ${i18n.t('quizTrue')}
          </button>
          <button class="tf-btn false-btn ${this.isAnswered ? 'disabled' : ''}"
                  onclick="QuizEngine.selectTFAnswer(false)"
                  id="tf-false">
            <span class="tf-icon">✗</span>
            ${i18n.t('quizFalse')}
          </button>
        </div>
      </div>
    `;
  },

  // Render Code Challenge
  renderCodeChallenge(question) {
    return `
      <div class="question-card">
        <span class="question-type-badge code">💻 Code Challenge</span>
        <h2 class="question-text">${this.escapeHTML(i18n.tObj(question.question))}</h2>
        ${(question.hints && question.hints.length > 0) || question.hint ? `
          <div class="hint-bar">
            <button class="btn btn-ghost btn-sm" onclick="QuizEngine.showHint()">
              💡 ${i18n.t('quizHint')}
            </button>
            <span id="hint-text" class="text-secondary hidden" style="font-size: var(--fs-sm);"></span>
          </div>
        ` : ''}
      </div>

      <div class="code-challenge-container">
        <div class="code-editor-wrapper">
          <div class="code-editor-header">
            <span class="editor-title">${i18n.t('editorTitle')}</span>
            <div class="editor-dots">
              <span class="editor-dot"></span>
              <span class="editor-dot"></span>
              <span class="editor-dot"></span>
            </div>
          </div>
          <div id="monaco-editor-container" style="width: 100%; flex: 1; min-height: 0; border: none; border-radius: 0 0 8px 8px; overflow: hidden;"></div>
        </div>
        <div class="code-preview-wrapper">
          <div class="code-preview-header">
            <span class="preview-title">${i18n.t('previewTitle')}</span>
          </div>
          <iframe class="code-preview-iframe" id="code-preview" sandbox="allow-scripts"></iframe>
        </div>
      </div>
    `;
  },

  // Render Build Challenge (similar to code but larger)
  renderBuildChallenge(question) {
    return this.renderCodeChallenge(question); // Same UI, different validation
  },

  // Render Essay Question
  renderEssay(question) {
    return `
      <div class="question-card">
        <span class="question-type-badge essay">✍️ Essay</span>
        <h2 class="question-text">${this.escapeHTML(i18n.tObj(question.question))}</h2>
        ${(question.hints && question.hints.length > 0) || question.hint ? `
          <div class="hint-bar">
            <button class="btn btn-ghost btn-sm" onclick="QuizEngine.showHint()">
              💡 ${i18n.t('quizHint')}
            </button>
            <span id="hint-text" class="text-secondary hidden" style="font-size: var(--fs-sm);"></span>
          </div>
        ` : ''}
      </div>
      <div class="essay-container" style="margin-top: var(--space-md);">
        <textarea id="essay-answer" class="code-textarea" style="width: 100%; min-height: 150px; font-family: var(--font-main);" placeholder="Type your answer here..."></textarea>
      </div>
    `;
  },

  // Setup code preview iframe & Monaco Editor
  setupCodePreview() {
    const question = this.questions[this.currentQuestionIndex];
    const container = document.getElementById('monaco-editor-container');
    if (!container) return;

    // Use specific language or fallback to html
    const lang = question.language || 'html';

    if (window.monaco) {
      this.initMonaco(container, question.starterCode || question.startingCode || '', lang);
    } else {
      // Wait for Monaco to load via require.js config set in index.html
      window.require(['vs/editor/editor.main'], () => {
        this.initMonaco(container, question.starterCode || question.startingCode || '', lang);
      });
    }
  },

  initMonaco(container, code, language) {
    // Clear previous instance if exists
    if (this.monacoEditor) {
      this.monacoEditor.dispose();
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    this.monacoEditor = monaco.editor.create(container, {
      value: code,
      language: language,
      theme: isDark ? 'vs-dark' : 'vs',
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize: 14,
      scrollBeyondLastLine: false,
      padding: { top: 16 }
    });

    this.monacoEditor.onDidChangeModelContent(() => {
      this.updatePreview();
    });

    this.updatePreview();
  },

  // Update live preview
  updatePreview() {
    const preview = document.getElementById('code-preview');
    if (!this.monacoEditor || !preview) return;

    const code = this.monacoEditor.getValue();
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Inter', sans-serif; padding: 16px; margin: 0; }
          * { box-sizing: border-box; }
        </style>
      </head>
      <body>${code}</body>
      </html>
    `;

    preview.srcdoc = html;
  },

  // MCQ answer selection
  selectMCQAnswer(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const question = this.questions[this.currentQuestionIndex];

    // Support both old format (correctAnswer index) and new format (isCorrect on options)
    let correctIndex = question.correctAnswer;
    if (correctIndex === undefined && question.options) {
      correctIndex = question.options.findIndex(opt => opt.isCorrect === true);
    }

    const isCorrect = selectedIndex === correctIndex;

    // Highlight selected option
    const selectedEl = document.getElementById(`option-${selectedIndex}`);
    if (selectedEl) {
      selectedEl.classList.add(isCorrect ? 'correct' : 'wrong');
      selectedEl.classList.add('selected');
    }

    // Show correct answer
    const correctEl = document.getElementById(`option-${correctIndex}`);
    if (correctEl && !isCorrect) {
      correctEl.classList.add('correct');
    }

    // Disable all options
    document.querySelectorAll('.option-item').forEach(el => el.classList.add('disabled'));

    this.processAnswer(isCorrect, question);
  },

  // True/False answer selection
  selectTFAnswer(selected) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const question = this.questions[this.currentQuestionIndex];
    const isCorrect = selected === question.correctAnswer;

    const trueBtn = document.getElementById('tf-true');
    const falseBtn = document.getElementById('tf-false');

    if (selected) {
      trueBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    } else {
      falseBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    // Show correct answer
    if (!isCorrect) {
      if (question.correctAnswer) {
        trueBtn.classList.add('correct');
      } else {
        falseBtn.classList.add('correct');
      }
    }

    trueBtn.classList.add('disabled');
    falseBtn.classList.add('disabled');

    this.processAnswer(isCorrect, question);
  },

  // Code answer submission
  submitCodeAnswer() {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const question = this.questions[this.currentQuestionIndex];
    const code = this.monacoEditor ? this.monacoEditor.getValue().trim() : '';

    let isCorrect = false;

    // Advanced Validation Logic using DOMParser
    if (question.validations && question.validations.length > 0) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(code, 'text/html');
        
        // Assume correct until a validation fails
        isCorrect = true;

        for (const rule of question.validations) {
          const el = doc.querySelector(rule.selector);
          
          if (!el) {
            isCorrect = false;
            break; // Missing element
          }

          if (rule.hasAttribute && !el.hasAttribute(rule.hasAttribute)) {
            isCorrect = false;
            break;
          }

          if (rule.checkContent) {
             const text = el.textContent || el.innerText;
             if (!text.toLowerCase().includes(rule.checkContent.toLowerCase())) {
               isCorrect = false; 
               break;
             }
          }

          if (rule.checkStyle) {
            const style = el.getAttribute('style') || '';
            const styleRule = `${rule.checkStyle.property}:\\s*${rule.checkStyle.value}`;
            const regex = new RegExp(styleRule, 'i');
            
            // Also check inner <style> block for internal CSS
            const styleBlocks = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join(' ');

            if (!regex.test(style) && !regex.test(styleBlocks)) {
               isCorrect = false; 
               break;
            }
          }
        }
      } catch (e) {
        console.error("Validation error:", e);
        isCorrect = false;
      }
    } else if (question.validationKeywords && question.validationKeywords.length > 0) {
      // Fallback: Keyword matching
      const codeLC = code.toLowerCase();
      const matchCount = question.validationKeywords.filter(kw =>
        codeLC.includes(kw.toLowerCase())
      ).length;
      isCorrect = matchCount >= Math.ceil(question.validationKeywords.length * 0.7);
    } else {
      // Basic check
      isCorrect = code.length > 10;
    }

    this.processAnswer(isCorrect, question);
  },

  // Essay answer submission
  submitEssayAnswer() {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const question = this.questions[this.currentQuestionIndex];
    const answerEl = document.getElementById('essay-answer');
    const answer = answerEl ? answerEl.value.trim() : '';

    let isCorrect = false;

    // Lenient validation based on keywords
    if (answer.length > 10) { // Needs some text at least
      // Resolve keywords: could be {en: [...], ar: [...]} or a plain array
      let keywordsArr = [];
      if (question.keywords) {
        if (Array.isArray(question.keywords)) {
          keywordsArr = question.keywords;
        } else if (typeof question.keywords === 'object') {
          // Bilingual object: pick current language, fallback to en
          keywordsArr = question.keywords[i18n.currentLang] || question.keywords.en || [];
        }
      }

      if (keywordsArr.length > 0) {
        const textLC = answer.toLowerCase();
        let matchedKeywords = 0;
        
        keywordsArr.forEach(kw => {
          // If translation object, check the current lang
          const keyword = typeof kw === 'object' ? (kw[i18n.currentLang] || kw.en || Object.values(kw)[0]) : kw;
          if (textLC.includes(keyword.toLowerCase())) {
            matchedKeywords++;
          }
        });

        // E.g., user must hit at least 40% of the keywords (lenient)
        const threshold = Math.ceil(keywordsArr.length * 0.4);
        isCorrect = matchedKeywords >= threshold;
      } else {
        // If no keywords provided, any reasonable length answer is accepted
        isCorrect = answer.length > 20;
      }
    }

    if (answerEl) {
      answerEl.disabled = true;
      answerEl.style.borderColor = isCorrect ? 'var(--success)' : 'var(--danger)';
    }

    this.processAnswer(isCorrect, question);
  },

  // Process answer (common logic)
  processAnswer(isCorrect, question) {
    this.answers.push({
      questionId: question.id,
      isCorrect,
      selectedAnswer: null
    });

    if (isCorrect) {
      this.score++;
      const xp = question.xp || 10;
      this.totalXPEarned += xp;
      
      Store.dispatch('ADD_XP', xp); // Use Store instead of Storage directly
      this.showXPPopup(xp);

      Storage.addQuestionHistory(this.currentTopic, question.id, true);

      // Update progress
      const progress = Storage.getTopicProgress(this.currentTopic);
      progress.totalCorrect += 1;
      progress.totalQuestions += 1;
      Storage.updateTopicProgress(this.currentTopic, progress);
    } else {
      Store.dispatch('LOSE_HEART'); // Use Store instead of Storage directly
      Storage.addQuestionHistory(this.currentTopic, question.id, false);
      Storage.addToReviewQueue(this.currentTopic, question.id);

      const progress = Storage.getTopicProgress(this.currentTopic);
      progress.totalWrong += 1;
      progress.totalQuestions += 1;
      Storage.updateTopicProgress(this.currentTopic, progress);
    }

    this.showFeedback(isCorrect, question);
    this.checkBadges();

    // Update action buttons without full re-render
    this.renderActionButtons();
  },

  // Update action buttons to show "Next" or "Finish"
  renderActionButtons() {
    const actions = document.getElementById('quiz-actions');
    if (!actions) return;
    
    actions.innerHTML = `
      <button class="btn btn-primary btn-lg" onclick="QuizEngine.nextQuestion()">
        ${this.currentQuestionIndex < this.questions.length - 1 ? i18n.t('quizNext') + ' →' : i18n.t('quizFinish') + ' 🎉'}
      </button>
    `;
  },

  // Show feedback panel
  showFeedback(isCorrect, question) {
    const panel = document.getElementById('feedback-panel');
    if (!panel) return;

    const resourceLinks = (question.resources || []).map(r => `
      <a href="${r.url}" target="_blank" class="resource-link">
        <span class="resource-icon">${r.type === 'mdn' ? '📘' : r.type === 'w3schools' ? '🟢' : '▶️'}</span>
        <span>${this.escapeHTML(i18n.tObj(r.title))}</span>
        <span style="margin-left: auto; color: var(--text-tertiary);">↗</span>
      </a>
    `).join('');

    panel.className = `feedback-panel ${isCorrect ? 'correct' : 'wrong'} animate-slideUp`;
    panel.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-icon">${isCorrect ? '🎉' : '❌'}</span>
        <span class="feedback-title">${isCorrect ? i18n.t('quizCorrect') : i18n.t('quizWrong')}</span>
      </div>
      <p class="feedback-explanation">
        <strong>${i18n.t('quizExplanation')}:</strong> ${this.escapeHTML(i18n.tObj(question.explanation) || 'No explanation available.')}
      </p>
      ${question.type === 'essay' && !isCorrect ? `
        <div style="margin-top: var(--space-md); padding: var(--space-sm); background: rgba(255,255,255,0.05); border-radius: var(--radius-sm);">
          <strong>Hint:</strong> Make sure your answer covers: ${question.keywords ? question.keywords.map(kw => i18n.tObj(kw)).join(', ') : 'more details'}
        </div>
      ` : ''}
      ${!isCorrect && resourceLinks ? `
        <div class="feedback-resources">
          <h4>📚 ${i18n.t('quizResources')}</h4>
          ${resourceLinks}
        </div>
      ` : ''}
    `;
  },

  // Show hint
  showHint() {
    const question = this.questions[this.currentQuestionIndex];
    const hintEl = document.getElementById('hint-text');
    if (!hintEl) return;

    // Support both `hints` (array) and `hint` (single string/object)
    let hintText = '';
    if (question.hints && question.hints.length > 0) {
      const randomHint = question.hints[Math.floor(Math.random() * question.hints.length)];
      hintText = i18n.tObj(randomHint);
    } else if (question.hint) {
      hintText = i18n.tObj(question.hint);
    }

    if (hintText) {
      hintEl.textContent = '💡 ' + hintText;
      hintEl.classList.remove('hidden');
    }
  },

  // XP popup animation
  showXPPopup(xp) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.textContent = `+${xp} XP`;
    popup.style.left = (window.innerWidth / 2) + 'px';
    popup.style.top = (window.innerHeight / 2) + 'px';
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1200);
  },

  // Skip question
  skipQuestion() {
    if (this.isAnswered) return;
    const question = this.questions[this.currentQuestionIndex];
    this.answers.push({
      questionId: question.id,
      isCorrect: false,
      skipped: true
    });

    Storage.addToReviewQueue(this.currentTopic, question.id);
    Store.dispatch('LOSE_HEART'); // Use Store instead of Storage directly

    const progress = Storage.getTopicProgress(this.currentTopic);
    progress.totalWrong += 1;
    progress.totalQuestions += 1;
    Storage.updateTopicProgress(this.currentTopic, progress);

    this.nextQuestion();
  },

  // Next question
  nextQuestion() {
    // Check hearts
    const hearts = Store.state.hearts;
    if (hearts.current <= 0) {
      this.showNoHeartsScreen();
      return;
    }

    this.currentQuestionIndex++;
    this.isAnswered = false;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResults();
    } else {
      this.render();
    }
  },

  // Show results screen
  showResults() {
    this.quizFinished = true;
    const container = document.getElementById('main-content');
    const percentage = Math.round((this.score / this.questions.length) * 100);
    const circumference = 2 * Math.PI * 70; // radius 70
    const offset = circumference - (percentage / 100) * circumference;

    // Complete level in storage
    const { stars } = Storage.completeLevelForTopic(
      this.currentTopic, this.currentLevel, this.score, this.questions.length
    );

    let message = '';
    if (percentage === 100) message = i18n.t('resultsPerfect');
    else if (percentage >= 80) message = i18n.t('resultsGreat');
    else if (percentage >= 50) message = i18n.t('resultsGood');
    else message = i18n.t('resultsKeepTrying');

    // Check for perfect score badge
    if (percentage === 100) {
      Storage.earnBadge('perfect_score');
    }
    if (this.score > 0 && Storage.getOverallStats().totalCompletedLevels === 1) {
      Storage.earnBadge('first_step');
    }

    // Confetti for passing
    if (percentage >= 50) {
      this.showConfetti();
    }

    const starsHTML = Array.from({ length: 3 }, (_, i) =>
      `<span style="font-size: 2rem; ${i < stars ? '' : 'opacity: 0.2;'}">${i < stars ? '⭐' : '☆'}</span>`
    ).join('');

    container.innerHTML = `
      <div class="results-container animate-bounceIn">
        <h2 style="font-size: var(--fs-3xl); margin-bottom: var(--space-lg);">
          ${i18n.t('resultsTitle')}
        </h2>

        <div class="results-circle">
          <svg viewBox="0 0 160 160">
            <circle class="circle-bg" cx="80" cy="80" r="70"></circle>
            <circle class="circle-progress" cx="80" cy="80" r="70"
                    stroke-dasharray="${circumference}"
                    stroke-dashoffset="${offset}"
                    style="stroke: ${percentage >= 50 ? 'var(--success)' : 'var(--danger)'}"></circle>
          </svg>
          <div class="circle-text">${percentage}%</div>
        </div>

        <div style="margin-bottom: var(--space-lg);">
          ${starsHTML}
        </div>

        <div class="results-xp">+${this.totalXPEarned} XP</div>
        <div class="results-message">${message}</div>

        <div style="margin-bottom: var(--space-lg); color: var(--text-secondary); font-size: var(--fs-sm);">
          ${this.score} / ${this.questions.length} ${i18n.t('quizCorrect').toLowerCase()}
        </div>

        <div class="flex justify-center gap-md flex-wrap">
          <button class="btn btn-outline btn-lg" onclick="QuizEngine.start('${this.currentTopic}', ${this.currentLevel})">
            🔄 ${i18n.t('resultsRetry')}
          </button>
          ${percentage >= 50 ? `
            <button class="btn btn-primary btn-lg" onclick="App.showLevels('${this.currentTopic}')">
              ${i18n.t('resultsNextLevel')} →
            </button>
          ` : `
            <button class="btn btn-primary btn-lg" onclick="App.showLevels('${this.currentTopic}')">
              ${i18n.t('resultsBackToLevels')}
            </button>
          `}
        </div>
      </div>
    `;
  },

  // Show no hearts screen
  showNoHeartsScreen() {
    const container = document.getElementById('main-content');
    const hearts = Store.state.hearts;

    container.innerHTML = `
      <div class="results-container animate-bounceIn" style="padding-top: var(--space-3xl);">
        <div style="font-size: 5rem; margin-bottom: var(--space-lg);">💔</div>
        <h2 style="font-size: var(--fs-2xl); margin-bottom: var(--space-md);">
          ${i18n.t('quizNoHearts')}
        </h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-2xl);">
          Hearts refill automatically every 4 hours. Use this time to review your mistakes!
        </p>
        <div class="flex justify-center gap-md">
          <button class="btn btn-outline btn-lg" onclick="App.showDashboard()">
            ${i18n.t('resultsBackToLevels')}
          </button>
          <button class="btn btn-success btn-lg" onclick="Store.dispatch('REFILL_HEARTS'); App.showLevels('${this.currentTopic}');">
            ❤️ Refill Hearts (Free)
          </button>
        </div>
      </div>
    `;
  },

  // Show confetti
  showConfetti() {
    const colors = ['#6C5CE7', '#00B894', '#FDCB6E', '#FF6B6B', '#74B9FF', '#A29BFE'];
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = (Math.random() * 50 + 50) + 'vh';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDelay = (Math.random() * 0.5) + 's';
      particle.style.animationDuration = (1 + Math.random()) + 's';
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 2000);
    }
  },

  // Confirm exit quiz
  confirmExit() {
    if (confirm('Are you sure you want to exit? Your progress on this level will be lost.')) {
      const topic = this.currentTopic;
      this.quizFinished = true;
      this.questions = [];
      this.currentTopic = null;
      App.showLevels(topic || 'html');
    }
  },

  // No questions available
  renderNoQuestions() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <div class="empty-state-text">No questions available for this level yet.</div>
        <button class="btn btn-primary" onclick="App.showLevels('${this.currentTopic}')">
          ${i18n.t('backBtn')}
        </button>
      </div>
    `;
  },

  // Check and award badges
  checkBadges() {
    const stats = Storage.getOverallStats();

    // XP badges
    if (stats.xp >= 1000) Storage.earnBadge('xp_1000');
    if (stats.xp >= 5000) Storage.earnBadge('xp_5000');
    if (stats.xp >= 10000) Storage.earnBadge('xp_10000');

    // Streak badges
    if (stats.streak.current >= 3) Storage.earnBadge('streak_3');
    if (stats.streak.current >= 7) Storage.earnBadge('streak_7');
    if (stats.streak.current >= 30) Storage.earnBadge('streak_30');

    // Topic badges
    const htmlProgress = Storage.getTopicProgress('html');
    if (htmlProgress.completedLevels.length >= 5) Storage.earnBadge('html_beginner');
    if (htmlProgress.completedLevels.length >= 15) Storage.earnBadge('html_intermediate');
    if (htmlProgress.completedLevels.length >= 32) Storage.earnBadge('html_master');

    const cssProgress = Storage.getTopicProgress('css');
    if (cssProgress.completedLevels.length >= 5) Storage.earnBadge('css_beginner');

    const internetProgress = Storage.getTopicProgress('internet');
    if (internetProgress.completedLevels.length >= 6) Storage.earnBadge('net_explorer');
  },

  // Escape HTML to prevent XSS
  escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
