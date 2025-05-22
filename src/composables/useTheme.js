import { ref } from "vue";

const isDark = ref(false);

const setTheme = (theme) => {
  if (theme === "dracula") {
    document.documentElement.setAttribute("data-theme", "dracula");
    localStorage.setItem("color-theme", "dracula");
    isDark.value = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("color-theme", "light");
    isDark.value = false;
  }
};

const initTheme = () => {
  const stored = localStorage.getItem("color-theme");

  if (stored === "dracula" || stored === null) {
    setTheme("dracula");
  } else {
    setTheme("light");
  }
};

export function useTheme() {
  return { isDark, setTheme, initTheme };
}
