# ✦ Words to Inspire

> A premium inspirational web experience — discover words that move you, save them, and share them with the world.

![Words to Inspire — Dark Mode](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-gold?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-yellow?style=flat-square&logo=javascript)
![Responsive](https://img.shields.io/badge/Mobile-Responsive-brightgreen?style=flat-square)
![No Frameworks](https://img.shields.io/badge/Frameworks-None-blue?style=flat-square)

---

## 🌐 Live Demo

👉 [Click Here to Visit](https://tanvirahammad-007.github.io/Words-to-Inspire/)

---

## ✨ Features

### 🎨 Design
- **Glassmorphism cards** with animated glow effects
- **Animated particle background** (canvas-based floating lights)
- **Hero typing animation** — rotating inspirational phrases
- **Ambient orbs** with floating gradient effects
- **Playfair Display + DM Sans** typography pairing

### 🌙 Dark / Light Mode
Toggle between dark and light themes. Your preference is saved in `localStorage`.

### 💬 Quote of the Moment
- Random inspirational quote on every visit
- **Refresh button** to get a new quote instantly
- **Share button** to share to Twitter, Facebook, or WhatsApp

### 🃏 Word Cards
- 30 carefully curated words across 5 categories
- Each card shows: **word**, **category badge**, and **meaning snippet**
- Hover glow effects unique to each category
- Scroll-triggered reveal animation via Intersection Observer

### 🔍 Search
Live search filters words instantly by name or meaning.

### 🗂️ Category Filters
Filter words by:
- **All**
- **Success**
- **Motivation**
- **Learning**
- **Positivity**
- **Courage**

### ❤️ Favorites
- Click `♡` on any card to save a word
- Favorites are stored in `localStorage` and persist across sessions
- Dedicated **Favorites section** at the bottom of the page

### 🔍 Word Detail Popup
Click any word card to open a full modal with:
- Word and category
- Full meaning
- Inspirational quote
- Social share buttons
- Save to Favorites button

### 📤 Social Sharing
Share words and quotes to:
- **Twitter / X**
- **Facebook**
- **WhatsApp**

### 📱 Fully Responsive
Optimized for:
- 📱 Mobile (320px+)
- 📲 Tablet
- 🖥️ Desktop

---

## 🗂️ Project Structure

```
words-to-inspire/
├── index.html      # Semantic HTML structure
├── style.css       # Full CSS with custom properties, animations, glassmorphism
├── script.js       # All JS features: particles, typing, grid, search, modals, share
└── README.md       # This file
```

---

## 🛠️ Tech Stack

| Technology        | Usage                                      |
|-------------------|--------------------------------------------|
| HTML5             | Semantic structure, accessibility          |
| CSS3              | Custom properties, Grid, Flexbox, Animations |
| Vanilla JavaScript| All interactivity, no dependencies         |
| Canvas API        | Floating particle background               |
| Intersection Observer | Scroll-triggered animations            |
| localStorage      | Favorites + theme persistence              |
| Google Fonts      | Playfair Display + DM Sans                 |

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanvirahammad-007/Words-to-Inspire.git
   cd Words-to-Inspire
   ```

2. **Open in your browser:**
   ```bash
   # Simply open index.html — no build step required
   open index.html
   ```

---

## 🎯 Key Design Decisions

- **No frameworks** — pure HTML/CSS/JS for zero dependencies and fast load times
- **CSS custom properties** (`var(--*)`) power both dark and light themes with a single toggle
- **Intersection Observer** handles all scroll animations without scroll event listeners
- **Canvas particles** run on `requestAnimationFrame` and adapt to theme automatically
- **localStorage** persists favorites and theme choice across sessions

---

## 📌 Changelog

### v2.0 — Premium Redesign
- Complete visual overhaul with glassmorphism design language
- Added particle canvas background
- Added typing hero animation
- Added 30 curated word cards with category system
- Added live search and category filters
- Added word detail popup modal
- Added social sharing (Twitter, Facebook, WhatsApp)
- Added favorites with localStorage persistence
- Added dark/light mode toggle
- Full mobile responsiveness

### v1.0 — Initial Release
- Basic modal with motivational, funny, and dark humor quotes

---

## 👤 Author

**Tanvir Ahammad**
- GitHub: [@tanvirahammad-007](https://github.com/tanvirahammad-007)

---

> *"Words have the power to both destroy and heal. When words are both true and kind, they can change the world."*