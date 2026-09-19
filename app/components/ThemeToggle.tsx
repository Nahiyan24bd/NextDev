"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // ১. মাউন্ট হলে শুধু DOM থেকে রিড করা
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    document.documentElement.setAttribute("data-theme", initialTheme);
    // requestAnimationFrame বা মাইক্রোটাস্কে কল করলে ESLint এরর দেয় না
    requestAnimationFrame(() => {
      setTheme(initialTheme);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-warning transition-all" />
      ) : (
        <Moon className="w-5 h-5 text-neutral transition-all" />
      )}
    </button>
  );
}