import { useEffect } from "react";
import { create } from "zustand";

type AppModeType = "dark" | "light";
interface ThemeState {
  theme: AppModeType;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    });
  },
  setSystemTheme: () => {
    set((state) => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        return { theme: "dark" };
      } else {
        document.documentElement.classList.remove("dark");
        return { theme: "light" };
      }
    });
  },
}));

export const useThemeToggle = () => {
  const { setSystemTheme, theme, toggleTheme } = useThemeStore();
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(theme);
  }, [theme]);

  return { setSystemTheme, theme, toggleTheme };
};
