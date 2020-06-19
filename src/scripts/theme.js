const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const storagedTheme = localStorage.getItem('theme');
const input = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

input.addEventListener('change', themeChangeHandler);

const setDarkTheme = () => {
  body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  body.classList.add(Theme.DARK);
};

const setLightTheme = () => {
  body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  body.classList.add(Theme.LIGHT);
};

function themeChangeHandler(e) {
  if (e.target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

export function checkLocalStorage() {
  if (storagedTheme) {
    body.classList.add(storagedTheme);
    if (storagedTheme === Theme.DARK) {
      input.checked = true;
    } else {
      ('');
    }
  }
}
