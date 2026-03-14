"use strict";

// ============================================================
//  DATA
// ============================================================
const WORDS = [
  // SUCCESS
  { word: "Triumph",    cat: "Success",    meaning: "A great victory or achievement earned through persistent effort.", quote: "Success is not final; failure is not fatal: It is the courage to continue that counts." },
  { word: "Excellence", cat: "Success",    meaning: "The quality of being outstanding or extremely good in what you do.", quote: "We are what we repeatedly do. Excellence, then, is not an act but a habit." },
  { word: "Achieve",    cat: "Success",    meaning: "To successfully reach a desired objective through effort.", quote: "The secret of getting ahead is getting started." },
  { word: "Victory",    cat: "Success",    meaning: "The act of defeating an opponent or overcoming an obstacle.", quote: "Victory is sweetest when you've known defeat." },
  { word: "Prosper",    cat: "Success",    meaning: "To succeed and flourish, especially financially.", quote: "Opportunities don't happen. You create them." },
  { word: "Ascend",     cat: "Success",    meaning: "To rise to a higher level, position, or great purpose.", quote: "Aim for the moon. If you miss, you may hit a star." },

  // MOTIVATION
  { word: "Drive",      cat: "Motivation", meaning: "An inner urge or strong ambition that pushes you to act.", quote: "Push yourself, because no one else is going to do it for you." },
  { word: "Ignite",     cat: "Motivation", meaning: "To arouse or kindle a passion, emotion, or desire within.", quote: "The harder you work for something, the greater you'll feel when you achieve it." },
  { word: "Persist",    cat: "Motivation", meaning: "To continue firmly despite difficulty or opposition.", quote: "Don't stop when you're tired. Stop when you're done." },
  { word: "Strive",     cat: "Motivation", meaning: "To make great efforts to achieve or obtain something.", quote: "Dream big, start small, act now." },
  { word: "Hustle",     cat: "Motivation", meaning: "Focused, relentless energy directed toward your goals.", quote: "Work hard in silence, let success make the noise." },
  { word: "Forge",      cat: "Motivation", meaning: "To create something strong through sustained effort.", quote: "A little progress each day adds up to big results." },

  // LEARNING
  { word: "Curious",    cat: "Learning",   meaning: "Eager to know or learn something new about the world.", quote: "The more that you read, the more things you will know." },
  { word: "Wisdom",     cat: "Learning",   meaning: "The quality of having experience, knowledge, and good judgment.", quote: "Knowledge is power. Wisdom is knowing how to use it." },
  { word: "Grow",       cat: "Learning",   meaning: "To develop and expand in ability, understanding, or character.", quote: "If it doesn't challenge you, it won't change you." },
  { word: "Explore",    cat: "Learning",   meaning: "To travel into or range over for discovery.", quote: "The world is a book and those who do not travel read only one page." },
  { word: "Master",     cat: "Learning",   meaning: "To acquire complete knowledge or skill in a subject.", quote: "An investment in knowledge pays the best interest." },
  { word: "Discover",   cat: "Learning",   meaning: "To find something or someone unexpected or hidden.", quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." },

  // POSITIVITY
  { word: "Radiate",    cat: "Positivity", meaning: "To emit light, warmth, or a positive quality outward.", quote: "Wherever you go, no matter what the weather, always bring your own sunshine." },
  { word: "Bloom",      cat: "Positivity", meaning: "To flourish and develop in a healthy way.", quote: "You are never too old to set another goal or to dream a new dream." },
  { word: "Gratitude",  cat: "Positivity", meaning: "The quality of being thankful and appreciating what you have.", quote: "Gratitude turns what we have into enough." },
  { word: "Bright",     cat: "Positivity", meaning: "Full of hope, promise, and cheerful energy.", quote: "Keep your face always toward the sunshine, and shadows will fall behind you." },
  { word: "Thrive",     cat: "Positivity", meaning: "To grow vigorously and be healthy in mind, body, and spirit.", quote: "Life isn't about finding yourself. It's about creating yourself." },
  { word: "Flourish",   cat: "Positivity", meaning: "To grow or develop in a healthy or vigorous way.", quote: "The present moment is the only moment available to us, and it is the door to all moments." },

  // COURAGE
  { word: "Brave",      cat: "Courage",    meaning: "Ready to face and endure danger or pain without retreating.", quote: "Courage is not the absence of fear, but the triumph over it." },
  { word: "Bold",       cat: "Courage",    meaning: "Showing a willingness to take risks and act innovatively.", quote: "Fortune favors the bold." },
  { word: "Dauntless",  cat: "Courage",    meaning: "Showing fearlessness and determination.", quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face." },
  { word: "Resolve",    cat: "Courage",    meaning: "Firm determination to do something despite obstacles.", quote: "It does not matter how slowly you go as long as you do not stop." },
  { word: "Endure",     cat: "Courage",    meaning: "To suffer or experience difficulty, pain, or hardship patiently.", quote: "The most beautiful people are those who have known defeat, suffering, and struggle." },
  { word: "Fearless",   cat: "Courage",    meaning: "Lacking fear; brave and willing to face anything.", quote: "Don't be afraid to fail. Be afraid not to try." },
];

const ALL_QUOTES = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "The harder you work, the luckier you get.",
  "Success doesn't just find you. You have to go out and get it.",
  "Dream big, start small, act now.",
  "Do something today that your future self will thank you for.",
  "Believe you can and you're halfway there.",
  "Difficult roads often lead to beautiful destinations.",
  "Stay positive, work hard, make it happen.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Don't wait for opportunity. Create it.",
  "Doubt kills more dreams than failure ever will.",
  "Your limitation—it's only your imagination.",
  "Push harder than yesterday if you want a different tomorrow.",
  "If it doesn't challenge you, it won't change you.",
  "The key to success is to focus on goals, not obstacles.",
  "Work hard in silence, let success make the noise.",
  "A little progress each day adds up to big results.",
  "Sometimes later becomes never. Do it now.",
  "Don't be afraid to fail. Be afraid not to try.",
];

// ============================================================
//  STATE
// ============================================================
let favorites = JSON.parse(localStorage.getItem("wti_favorites") || "[]");
let currentFilter = "all";
let currentSearch  = "";
let currentWord    = null;
let currentQuote   = "";

// ============================================================
//  PARTICLES
// ============================================================
(function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx    = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.o  = Math.random() * 0.6 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset(false);
    }
    draw() {
      const color = isDark() ? `rgba(200,169,110,${this.o})` : `rgba(160,120,58,${this.o * 0.6})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  init();
  loop();
})();

// ============================================================
//  TYPING HERO
// ============================================================
(function initTyping() {
  const phrases = [
    "Words That Inspire You.",
    "Find Your Daily Spark.",
    "Live. Learn. Grow.",
    "Dare to Be Remarkable.",
  ];
  const el = document.getElementById("typingText");
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 2000); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 45 : 85);
  }
  type();
})();

// ============================================================
//  QUOTE OF THE MOMENT
// ============================================================
function getRandomQuote() {
  return ALL_QUOTES[Math.floor(Math.random() * ALL_QUOTES.length)];
}

function setQuote() {
  const q = getRandomQuote();
  currentQuote = q;
  const el = document.getElementById("quoteText");
  el.style.opacity = "0";
  setTimeout(() => {
    el.textContent = `"${q}"`;
    el.style.opacity = "1";
  }, 200);
}

document.getElementById("refreshQuote").addEventListener("click", () => {
  document.getElementById("refreshQuote").style.transform = "rotate(360deg)";
  setTimeout(() => document.getElementById("refreshQuote").style.transform = "", 400);
  setQuote();
});

// ============================================================
//  RENDER WORD GRID
// ============================================================
function filteredWords() {
  return WORDS.filter(w => {
    const matchCat    = currentFilter === "all" || w.cat === currentFilter;
    const matchSearch = w.word.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        w.meaning.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });
}

function isFav(word) { return favorites.includes(word); }

function renderGrid(gridId, words, noResultsId) {
  const grid = document.getElementById(gridId);
  const noR  = document.getElementById(noResultsId);
  grid.innerHTML = "";

  if (words.length === 0) {
    noR.classList.remove("hidden");
    return;
  }
  noR.classList.add("hidden");

  words.forEach((w, i) => {
    const card = document.createElement("div");
    card.className = "word-card";
    card.dataset.cat = w.cat;
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <button class="card-fav-btn ${isFav(w.word) ? "active" : ""}" data-word="${w.word}" aria-label="Favorite">
        ${isFav(w.word) ? "♥" : "♡"}
      </button>
      <span class="card-cat-badge">${w.cat}</span>
      <div class="card-word">${w.word}</div>
      <p class="card-snippet">${w.meaning}</p>
    `;

    // Fav toggle
    card.querySelector(".card-fav-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleFav(w.word);
      renderWords();
      renderFavorites();
    });

    // Open modal
    card.addEventListener("click", () => openWordModal(w));

    grid.appendChild(card);

    // Intersection Observer for animation
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(card);
  });
}

function renderWords() {
  renderGrid("wordGrid", filteredWords(), "noResults");
}

function renderFavorites() {
  const favWords = WORDS.filter(w => isFav(w.word));
  renderGrid("favGrid", favWords, "noFavs");
  // always show noFavs if empty
  if (favWords.length === 0) {
    document.getElementById("noFavs").classList.remove("hidden");
  }
}

// ============================================================
//  FAVORITES
// ============================================================
function toggleFav(word) {
  if (isFav(word)) {
    favorites = favorites.filter(f => f !== word);
    showToast(`Removed "${word}" from favorites`);
  } else {
    favorites.push(word);
    showToast(`Saved "${word}" to favorites ♥`);
  }
  localStorage.setItem("wti_favorites", JSON.stringify(favorites));
}

// ============================================================
//  SEARCH & FILTER
// ============================================================
document.getElementById("searchInput").addEventListener("input", e => {
  currentSearch = e.target.value.trim();
  renderWords();
});

document.getElementById("filterTabs").addEventListener("click", e => {
  const btn = e.target.closest(".filter-tab");
  if (!btn) return;
  document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.cat;
  renderWords();
});

// ============================================================
//  WORD DETAIL MODAL
// ============================================================
function openWordModal(w) {
  currentWord = w;
  document.getElementById("modalCategory").textContent = w.cat;
  document.getElementById("modalWord").textContent     = w.word;
  document.getElementById("modalMeaning").textContent  = w.meaning;
  document.getElementById("modalQuote").textContent    = `"${w.quote}"`;

  const favBtn = document.getElementById("favModalBtn");
  favBtn.textContent = isFav(w.word) ? "♥ Saved to Favorites" : "♡ Save to Favorites";
  favBtn.classList.toggle("active", isFav(w.word));

  document.getElementById("wordModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeWordModal() {
  document.getElementById("wordModal").classList.add("hidden");
  document.body.style.overflow = "";
  currentWord = null;
}

document.getElementById("modalClose").addEventListener("click", closeWordModal);
document.getElementById("wordModal").addEventListener("click", e => {
  if (e.target === document.getElementById("wordModal")) closeWordModal();
});

document.getElementById("favModalBtn").addEventListener("click", () => {
  if (!currentWord) return;
  toggleFav(currentWord.word);
  const btn = document.getElementById("favModalBtn");
  btn.textContent = isFav(currentWord.word) ? "♥ Saved to Favorites" : "♡ Save to Favorites";
  btn.classList.toggle("active", isFav(currentWord.word));
  renderWords();
  renderFavorites();
});

// Share from word modal
function makeShareText(w) {
  return `"${w.quote}" — inspired by the word: ${w.word} | Words to Inspire`;
}
document.getElementById("shareTwitter").addEventListener("click", () => {
  if (!currentWord) return;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(makeShareText(currentWord))}`, "_blank");
});
document.getElementById("shareFacebook").addEventListener("click", () => {
  if (!currentWord) return;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}&quote=${encodeURIComponent(makeShareText(currentWord))}`, "_blank");
});
document.getElementById("shareWhatsapp").addEventListener("click", () => {
  if (!currentWord) return;
  window.open(`https://wa.me/?text=${encodeURIComponent(makeShareText(currentWord))}`, "_blank");
});

// ============================================================
//  SHARE QUOTE MODAL
// ============================================================
document.getElementById("shareQuoteBtn").addEventListener("click", () => {
  document.getElementById("shareModalQuote").textContent = currentQuote;
  document.getElementById("shareModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
});
document.getElementById("shareModalClose").addEventListener("click", () => {
  document.getElementById("shareModal").classList.add("hidden");
  document.body.style.overflow = "";
});
document.getElementById("shareModal").addEventListener("click", e => {
  if (e.target === document.getElementById("shareModal")) {
    document.getElementById("shareModal").classList.add("hidden");
    document.body.style.overflow = "";
  }
});

function quoteShareText() { return `"${currentQuote}" — Words to Inspire`; }
document.getElementById("sqTwitter").addEventListener("click", () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteShareText())}`, "_blank"));
document.getElementById("sqFacebook").addEventListener("click", () => window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quoteShareText())}`, "_blank"));
document.getElementById("sqWhatsapp").addEventListener("click", () => window.open(`https://wa.me/?text=${encodeURIComponent(quoteShareText())}`, "_blank"));

// ============================================================
//  DARK / LIGHT MODE
// ============================================================
const html       = document.documentElement;
const themeBtn   = document.getElementById("themeToggle");
const themeIcon  = themeBtn.querySelector(".theme-icon");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("wti_theme", theme);
}

themeBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Load saved theme
const savedTheme = localStorage.getItem("wti_theme");
if (savedTheme) applyTheme(savedTheme);

// ============================================================
//  ESCAPE KEY
// ============================================================
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  closeWordModal();
  document.getElementById("shareModal").classList.add("hidden");
  document.body.style.overflow = "";
});

// ============================================================
//  TOAST
// ============================================================
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.textContent = msg;
  clearTimeout(toastTimeout);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add("show"));
  });
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 2500);
}

// ============================================================
//  INTERSECTION OBSERVER — REVEAL
// ============================================================
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

// ============================================================
//  INIT
// ============================================================
setQuote();
renderWords();
renderFavorites();