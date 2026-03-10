import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <div className="theme-toggle-track">
        <div
          className={`theme-toggle-thumb ${theme === "dark" ? "active" : ""}`}
        >
          {theme === "light" ? (
            <Sun className="theme-icon" />
          ) : (
            <Moon className="theme-icon" />
          )}
        </div>
      </div>
    </button>
  );
}
