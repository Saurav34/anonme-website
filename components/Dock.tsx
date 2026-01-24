"use client";
import { motion } from "framer-motion";
import { MOODS, MoodKey } from "@/constants/moods";

export const Dock = ({ currentMood, setMood }: { currentMood: MoodKey, setMood: (m: MoodKey) => void }) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-x-auto max-w-full no-scrollbar"
      >
        {/* Label */}
        <div className="hidden md:flex items-center px-4 border-r border-white/10 mr-2">
          <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
            Vibe Shift
          </span>
        </div>

        {/* The Mood Buttons */}
        {(Object.keys(MOODS) as MoodKey[]).map((mood) => {
           if (mood === 'premium_gold') return null;
           const isActive = currentMood === mood;
           
           return (
            <button
              key={mood}
              onClick={() => setMood(mood)}
              className={`
                relative px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex-shrink-0
                ${isActive ? "text-black bg-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white/40 hover:text-white hover:bg-white/10"}
              `}
            >
              {mood === "default" ? "RESET" : MOODS[mood].label}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};