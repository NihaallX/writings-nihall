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
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gradient-to-br from-[#fdfcfb] via-[#e7d6ce] to-[#f6efe8] dark:from-[#0d0d0d] dark:via-[#1a1a1a] dark:to-[#2a2a2a] shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark/light mode"
    >
      {dark ? (
        <span className="text-white" role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span className="text-black" role="img" aria-label="Dark mode">🌙</span>
      )}
    </motion.button>
  );
}
