"use client";

import { useThemeContext } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "./icons/Icons";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex justify-center items-center absolute md:right-8 md:top-8 top-48 right-8 w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 cursor-pointer z-10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <SunIcon className="absolute w-6 md:w-8 h-6 md:h-8 fill-white" />
      ) : (
        <MoonIcon className="absolute w-6 md:w-8 h-6 md:h-8 fill-white" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
