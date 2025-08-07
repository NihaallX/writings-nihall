"use client";
import { motion } from "framer-motion";

export default function AnimatedIntro() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-serif text-5xl md:text-7xl font-bold mb-4 text-center drop-shadow-lg mt-16"
      >
        Seigfried
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="font-cursive text-xl md:text-2xl text-center text-foreground/80 max-w-2xl mb-12"
      >
        &quot;Where stories drift like rain on glass, and words glow softly in the dusk.&quot;
      </motion.p>
    </>
  );
}
