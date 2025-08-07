"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "For me, life started after I turned 15.",
  "real, raw experiences with a hint of nostalgia.",
  "i love to have a moment in which i know i will miss it.",
  "no one has influenced me but the things that happened to me.",
  "its not about what its about how."
];

export default function QuoteRotator() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-center mt-8"
      key={currentQuote}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="italic text-lg text-foreground/70">{quotes[currentQuote]}</p>
    </motion.div>
  );
}