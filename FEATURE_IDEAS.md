# FliccPicker — Feature Ideas

Ten recruiter-impressive features that would make FliccPicker stand out in a portfolio.
All are achievable in the current **static HTML / CSS / jQuery / vanilla JS** stack — no backend required.

---

### 1. Persistent Favorites with Rich Cards
Upgrade the localStorage favorites from plain titles to full movie cards (poster, year, genre, Netflix link) that persist across sessions.
**Demonstrates:** localStorage data modeling, JSON serialization, dynamic DOM rendering.

### 2. Live Search & Multi-Filter
Add an instant search box plus combinable genre/year/rating filters that update the results grid in real time as the user types.
**Demonstrates:** array filtering, debounced input handling, reactive UI updates without a framework.

### 3. "Surprise Me" Random Picker with Animation
A button that spins through movie posters slot-machine style before landing on one random pick.
**Demonstrates:** CSS keyframe animation, `requestAnimationFrame`, randomization UX.

### 4. Dark / Light Theme Toggle
A theme switch using CSS custom properties (variables) that remembers the user's choice in localStorage.
**Demonstrates:** CSS variables, `prefers-color-scheme`, persisted user preferences.

### 5. Watchlist vs. Watched Tracking
Let users mark movies as "Want to Watch" or "Watched," with separate views and progress counts.
**Demonstrates:** state management in localStorage, derived/computed views, clean data separation.

### 6. Responsive Masonry / Grid Layout with Skeleton Loaders
A polished, responsive card grid with shimmering skeleton placeholders while data loads.
**Demonstrates:** modern CSS Grid/Flexbox, perceived-performance UX, loading states.

### 7. Movie Detail Modal with TMDB API Enrichment
Click a card to open a modal that fetches richer details (cast, runtime, trailer) from a public movie API.
**Demonstrates:** async `fetch`, third-party REST API integration, modal UX, error handling.

### 8. Shareable Filter Links
Encode the active genre/filter state into the URL so users can copy and share a link that restores the exact view.
**Demonstrates:** `URLSearchParams`, deep-linking, stateless shareable state.

### 9. Keyboard-Navigable & Accessible UI
Full keyboard navigation, ARIA roles, focus management, and visible focus rings across all interactive elements.
**Demonstrates:** web accessibility (a11y), semantic HTML, inclusive design — a strong recruiter signal.

### 10. Rating & Mood-Based Recommendations
Let users rate movies (stars) and suggest similar picks based on shared genres and a simple client-side scoring algorithm.
**Demonstrates:** algorithmic thinking, weighted scoring, personalization logic entirely client-side.

---

*All features are intentionally backend-free: they rely on `localStorage`, the existing local JSON data, public read-only APIs, and modern browser APIs — keeping FliccPicker fully deployable on GitHub Pages.*
