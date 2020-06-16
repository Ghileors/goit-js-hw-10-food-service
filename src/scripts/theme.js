const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const storagedTheme = localStorage.getItem("theme");
const input = document.querySelector(".js-switch-input");
const body = document.querySelector("body");

input.addEventListener("change", themeChangeHandler);

function themeChangeHandler(e) {
  if (e.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

export function checkLocalStorage() {
  if (storagedTheme) {
    body.classList.add(storagedTheme);
    storagedTheme === Theme.DARK ? (input.checked = true) : "";
  }
}
