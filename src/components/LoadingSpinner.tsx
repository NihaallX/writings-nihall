import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-white/20 border-t-white rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function LoadingStories() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
      {[...Array(6)].map((_, idx) => (
        <motion.div
          key={idx}
          className="rounded-3xl bg-gradient-to-br from-[#232323] via-[#18181a] to-[#101012] aspect-[4/3] flex flex-col justify-between p-6 border border-white/5"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
        >
          <div className="flex-1 flex flex-col justify-between">
            <div className="h-6 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse" />
            </div>
          </div>
          <div className="mt-auto h-8 bg-white/5 rounded-full animate-pulse" />
        </motion.div>
      ))}
    </div>
  );
}