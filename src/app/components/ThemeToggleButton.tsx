"use client";

import { useThemeContext } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "./icons/Icons";

import Button from "./Button";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      onClick={toggleTheme}
      className="z-10"
      aria-label="Toggle theme"
      variant="icon"
      leadingIcon={
        theme === "light" ? (
          <SunIcon className="w-6 md:w-8 h-6 md:h-8 fill-white" />
        ) : (
          <MoonIcon className="w-6 md:w-8 h-6 md:h-8 fill-white" />
        )
      }
    />
  );
}

export default ThemeToggleButton;
