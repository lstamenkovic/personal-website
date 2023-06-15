//themes
const body = document.body;
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

function themeSwitch(themeName) {
  body.classList.remove(...body.classList);
  body.classList.add(themeName);
  localStorage.setItem("theme", themeName);
}

