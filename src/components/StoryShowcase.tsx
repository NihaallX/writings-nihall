"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Story = {
  title: string;
  preview: string;
  content: string;
};

interface StoryShowcaseProps {
  stories: Story[];
}

export default function StoryShowcase({ stories }: StoryShowcaseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (openIndex !== null) {
    // Split view: left = TOC, right = story content
    return (
      <section className="w-full max-w-4xl mx-auto mt-12 flex flex-row gap-8 min-h-[60vh]">
        <aside className="w-1/3 min-w-[200px] border-r border-foreground/10 pr-4">
          <h2 className="font-serif text-2xl mb-6 text-left text-foreground/90 pl-2">Stories</h2>
          <ul className="space-y-2">
            {stories.map((story, idx) => {
              const key = story.title && story.preview ? `${story.title}-${story.preview}` : String(idx);
              return (
                <li key={key}>
                  <button
                    className={`w-full text-left rounded px-3 py-2 transition-colors ${openIndex === idx ? "bg-foreground/10 font-bold" : "hover:bg-foreground/5"}`}
                    onClick={() => setOpenIndex(idx)}
                  >
                    <span className="font-serif text-base text-foreground">
                      {story.title || <span className="italic text-foreground/40">Untitled</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="mt-8 text-xs text-foreground/60 hover:underline" onClick={() => setOpenIndex(null)}>&larr; Back to all stories</button>
        </aside>
        <article className="flex-1 pl-4">
          <h2 className="font-serif text-3xl mb-4 text-foreground">{stories[openIndex].title}</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: stories[openIndex].content }} />
        </article>
      </section>
    );
  }

  // Default: centered list
  return (
    <section className="w-full max-w-2xl mx-auto mt-12 flex flex-col items-center">
      <h2 className="font-serif text-3xl mb-8 text-center text-foreground/90">Stories</h2>
      <ul className="space-y-4 w-full">
        {stories.map((story, idx) => {
          const key = story.title && story.preview ? `${story.title}-${story.preview}` : String(idx);
          return (
            <li key={key} className="">
              <motion.button
                className={`w-full text-left rounded-lg px-4 py-3 bg-background/80 shadow-md hover:shadow-lg transition-all border border-foreground/10 hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/30 flex flex-col items-start ${openIndex === idx ? "ring-2 ring-foreground/20" : ""}`}
                onClick={() => setOpenIndex(idx)}
                whileHover={{ scale: 1.01, boxShadow: "0 0 16px #e0e0e0" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <span className="font-serif text-lg font-semibold text-foreground mb-1">
                  {story.title || <span className="italic text-foreground/40">Untitled</span>}
                </span>
                <span className="font-cursive text-foreground/70 text-base">
                  {story.preview || <span className="italic text-foreground/40">No preview available</span>}
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
