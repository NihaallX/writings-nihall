"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      className="w-full max-w-xl mx-auto mt-20 mb-24 flex flex-col items-center gap-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="font-playfair italic text-3xl sm:text-4xl text-center text-foreground/90 tracking-tight mb-2">
        About Me
      </h2>
      <p className="font-manrope italic text-lg sm:text-xl text-center text-foreground/80 leading-relaxed max-w-lg">
        Hey, I’m Nihall -
        <br />
        Every piece you’ll find here is stitched together from moments, memories,
        and sometimes, messes. I use “and” a lot.
        <br />
        Somehow, from all of that, something beautiful finds its way out.
        <br />
        Welcome to Seigfried, my writing nook. You’re safe here.
      </p>
      <blockquote className="relative bg-white/80 dark:bg-black/40 rounded-xl shadow-md px-6 py-5 mt-4 max-w-lg mx-auto border-l-4 border-rose-200 italic text-base sm:text-lg text-foreground/70 font-playfair">
        <span className="block mb-2">
          “If it’s raw, it’s real. And that’s enough for me.”
        </span>
        <span className="block text-right not-italic text-sm text-foreground/50">
          — ryan gosling probably
        </span>
      </blockquote>
    </motion.section>
  );
}
