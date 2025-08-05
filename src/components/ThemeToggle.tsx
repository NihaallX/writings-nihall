"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <motion.button
      className="fixed top-4 right-4 z-50 bg-background/80 border border-foreground/10 rounded-full p-2 shadow hover:shadow-lg transition-colors"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark/light mode"
    >
      {dark ? (
        <span className="text-2xl" role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span className="text-2xl" role="img" aria-label="Dark mode">🌙</span>
      )}
    </motion.button>
  );
}
