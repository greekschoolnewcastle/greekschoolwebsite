// Language switcher utility
// Supports English (en) and Greek (el)

const STORAGE_KEY = 'preferred-language';
const DEFAULT_LANG = 'en';

// Get stored language or default
function getLanguage() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

// Set language and update page
function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLanguage(lang);
}

// Toggle between languages
function toggleLanguage() {
  const current = getLanguage();
  const next = current === 'en' ? 'el' : 'en';
  setLanguage(next);
}

// Apply language to the page
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  // Update toggle button text
  const toggleBtns = document.querySelectorAll('[data-lang-toggle]');
  toggleBtns.forEach(btn => {
    btn.textContent = lang === 'en' ? 'EL' : 'EN';
    btn.setAttribute('title', lang === 'en' ? 'Αλλαγή σε Ελληνικά' : 'Switch to English');
  });
}

// Initialize on page load
function initLanguage() {
  const lang = getLanguage();
  applyLanguage(lang);
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}

// Export for use in components
window.langUtils = {
  getLanguage,
  setLanguage,
  toggleLanguage
};
