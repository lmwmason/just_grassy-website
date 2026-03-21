"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 h-9 w-9" />; // Placeholder to prevent jump
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-xl p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 overflow-hidden h-9 w-9 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center h-5 w-5">
        <Sun className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? "-translate-y-10 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`} />
        <Moon className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-10 -rotate-90 opacity-0"}`} />
      </div>
    </button>
  );
}
