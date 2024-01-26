const themeSelection: HTMLInputElement | null =
  document.querySelector("#light-theme");

const storeTheme = function (isLightMode: string) {
  localStorage.setItem("light mode", isLightMode);
};

if (themeSelection) {
  themeSelection.addEventListener("click", () => {
    storeTheme(themeSelection.checked.toString());
  });
}

const retrieveTheme = function () {
  const activeTheme: string | null = localStorage.getItem("light mode");
  const isLightMode = (): boolean =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  if (themeSelection != null) {
    if (activeTheme) {
      themeSelection.checked = activeTheme == "true";
    } else if (isLightMode()) {
      themeSelection.checked = true;
    } else {
      themeSelection.checked = false;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  retrieveTheme();
});
