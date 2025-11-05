const toggleButton = document.getElementById('themeToggle');
const html = document.documentElement;

// read saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  html.setAttribute('data-bs-theme', savedTheme);
  updateButtonText(savedTheme);
} else {
  // detect system preference by default
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = systemDark ? 'dark' : 'light';
  html.setAttribute('data-bs-theme', theme);
  updateButtonText(theme);
}

toggleButton.addEventListener('click', () => {
  const current = html.getAttribute('data-bs-theme');
  const next = current === 'light' ? 'dark' : 'light';

  html.setAttribute('data-bs-theme', next);
  localStorage.setItem('theme', next);
  updateButtonText(next);
});

function updateButtonText(theme) {
  toggleButton.textContent = theme === 'light' ? '🌙 Dark mode' : '🌞 Light mode';
}
