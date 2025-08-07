"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface NowReadingModalProps {
  story: {
    title: string;
    content: string;
  };
  onClose: () => void;
}

export default function NowReadingModal({ story, onClose }: NowReadingModalProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Delay to allow animation
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-serif mb-4">{story.title}</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: story.content }} />
        <button
          className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}