import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "light" ? "#f8f5f0" : "#16120f"
    );
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("uduak-theme", next);
    } catch {
      // Switching still works when the browser disallows persistent storage.
    }
  }

  const label = theme === "dark" ? "Switch to day mode" : "Switch to night mode";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      data-testid="button-theme-toggle"
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-border px-3 text-foreground hover:border-primary hover:text-primary transition-colors"
    >
      {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
      <span className="hidden lg:inline">{theme === "dark" ? "day mode" : "night mode"}</span>
    </button>
  );
}
