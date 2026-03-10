import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useState, useEffect } from "react";
import "./Breadcrumb.css";

const routeNames = {
  "/": "Home",
  "/about": "About Us",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/technologies": "Technologies",
  "/gallery": "Gallery",
  "/blogs": "Blogs",
  "/careers": "Careers",
  "/contact-us": "Contact Us",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [theme, setTheme] = useState("light");

  // Detect theme changes
  useEffect(() => {
    const detectTheme = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark-mode") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    };

    detectTheme();

    // Watch for theme changes
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen to system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", detectTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", detectTheme);
    };
  }, []);

  // Don't show breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className={`breadcrumb-container breadcrumb-${theme}`}>
      <div className="breadcrumb-wrapper">
        {/* Home Link */}
        <Link to="/" className="breadcrumb-item breadcrumb-home">
          <Home className="breadcrumb-icon" />
          <span>Home</span>
        </Link>

        {/* Path segments */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const routeName =
            routeNames[to] ||
            value
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

          return (
            <div key={to} className="breadcrumb-segment">
              <ChevronRight className="breadcrumb-separator" />
              {isLast ? (
                <span className="breadcrumb-item breadcrumb-current">
                  {routeName}
                </span>
              ) : (
                <Link to={to} className="breadcrumb-item breadcrumb-link">
                  {routeName}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
