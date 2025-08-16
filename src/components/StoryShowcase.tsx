"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export type Story = {
  title: string;
  preview: string;
  content: string;
  date?: Date;
  readingTime?: number;
};

interface StoryShowcaseProps {
  stories: Story[];
}

export default function StoryShowcase({ stories }: StoryShowcaseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (openIndex !== null) {
    return (
      <section className="w-full max-w-4xl mx-auto mt-12 flex flex-row gap-8 min-h-[60vh]">
        <aside className="w-1/3 min-w-[200px] border-r border-white/10 pr-4">
          <h2 className="font-serif text-2xl mb-6 text-left text-white pl-2">Stories</h2>
          <ul className="space-y-2">
            {stories.map((story, idx) => {
              const key = story.title && story.preview ? `${story.title}-${story.preview}` : String(idx);
              return (
                <li key={key}>
                  <button
                    className={`w-full text-left rounded px-3 py-2 transition-colors ${openIndex === idx ? "bg-white/10 font-bold" : "hover:bg-white/5"}`}
                    onClick={() => setOpenIndex(idx)}
                  >
                    <span className="font-serif text-base text-white">
                      {story.title || <span className="italic text-white/40">Untitled</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="mt-8 text-xs text-white/60 hover:underline" onClick={() => setOpenIndex(null)}>&larr; Back to all stories</button>
        </aside>
        <motion.article
          className="flex-1 pl-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl mb-4 text-white">{stories[openIndex].title}</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: stories[openIndex].content }} />
        </motion.article>
      </section>
    );
  }

  // Default: centered list
  return (
    <section className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
      {stories.map((story, idx) => {
        const key = story.title && story.preview ? `${story.title}-${story.preview}` : String(idx);
        return (
          <motion.div
            key={key}
            className="rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#232323] via-[#18181a] to-[#101012] hover:from-[#29293a] hover:to-[#18181a] transition-all duration-300 aspect-[4/3] flex flex-col justify-between p-6 group cursor-pointer border border-white/5 backdrop-blur-sm hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.08)]"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-rose-200 transition-colors duration-200">{story.title || <span className="italic text-white/40">Untitled</span>}</h3>
                {story.readingTime && (
                  <span className="text-xs text-white/50 mb-2 block">
                    {story.readingTime} min read
                  </span>
                )}
              </div>
              <p className="text-base text-white/70 mb-4 line-clamp-3">{story.preview || "No preview available."}</p>
            </div>
            <button
              className="mt-auto flex items-center gap-2 text-xs font-medium text-white/70 group-hover:text-rose-200 transition-colors duration-200 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm shadow hover:shadow-lg"
              onClick={() => setOpenIndex(idx)}
            >
              Read more
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 9h8M11 5l4 4-4 4"/></svg>
            </button>
          </motion.div>
        );
      })}
    </section>
  );
}
