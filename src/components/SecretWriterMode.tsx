"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOST_STORIES = [
  {
    title: "Lost Story #1",
    content: "A fragment of a dream, never finished. The words flicker, half-remembered, half-lost..."
  },
  {
    title: "Lost Story #2",
    content: "A letter never sent, a poem never read. Here, in the hush, they wait for a reader."
  }
];

export default function SecretWriterMode() {
  const [active, setActive] = useState(false);
  const buffer = useRef("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      buffer.current += e.key.toLowerCase();
      if (buffer.current.endsWith("seigfried")) {
        setActive(true);
        buffer.current = "";
        // Play typewriter sound
        const audio = new Audio("/typewriter.mp3");
        audio.volume = 0.4;
        audio.play();
      }
      if (buffer.current.length > 16) buffer.current = buffer.current.slice(-16);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ filter: "brightness(0.7) blur(2px)" }}
            animate={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h2 className="font-serif text-3xl text-rose-200 mb-2 text-center">Lost Stories</h2>
            <p className="text-center text-foreground/70 mb-6">Raw, experimental, never meant to be seen... but here they are.</p>
            <div className="space-y-6 max-w-lg mx-auto">
              {LOST_STORIES.map((story, idx) => (
                <div key={story.title + idx} className="bg-background/90 rounded-lg p-6 shadow-lg border border-foreground/10">
                  <h3 className="font-serif text-xl mb-2 text-rose-400">{story.title}</h3>
                  <p className="text-foreground/80 font-cursive">{story.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <button
            className="mt-8 px-6 py-2 rounded bg-rose-300 text-white font-semibold shadow hover:bg-rose-400 transition-colors"
            onClick={() => setActive(false)}
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
