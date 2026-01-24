"use client";
import { motion } from "framer-motion";
import { MOODS, MoodKey } from "@/constants/moods";

const MOCK_POSTS = [
  { mood: "overthinkers", text: "It's okay not to have it all figured out at 28." },
  { mood: "chaos_energy", text: "I want to scream but I have a meeting in 5 minutes." },
  { mood: "heartbreak_hotel", text: "I miss who I was before I met you." },
  { mood: "sanctuary", text: "Finally, a place to rest." },
  { mood: "chill_exist", text: "Just vibrating on a different frequency today." },
  { mood: "optimists", text: "The comeback is always stronger than the setback." },
];

export const Marquee = ({ currentMood }: { currentMood: MoodKey }) => {
  return (
    <div className="relative flex w-full overflow-hidden py-10">
      {/* Gradient masks to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-black to-transparent" />

      {/* The Moving Track */}
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {/* We duplicate the posts to create a seamless loop */}
        {[...MOCK_POSTS, ...MOCK_POSTS, ...MOCK_POSTS].map((post, i) => (
          <GlassCard key={i} text={post.text} mood={post.mood as MoodKey} currentMood={currentMood} />
        ))}
      </motion.div>
    </div>
  );
};

const GlassCard = ({ text, mood, currentMood }: { text: string; mood: MoodKey; currentMood: MoodKey }) => {
  const isActive = currentMood === mood;
  const colors = MOODS[mood].colors;

  return (
    <div
      className={`relative w-[280px] h-[160px] flex-shrink-0 rounded-2xl p-6 flex flex-col justify-between border transition-all duration-500 ${
        isActive
          ? "bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-105"
          : "bg-white/5 border-white/5 opacity-50 hover:opacity-100 hover:border-white/20"
      }`}
    >
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-20"
        style={{ backgroundColor: colors[0] }}
      />

      <p className="text-sm font-medium text-white/90 whitespace-normal leading-relaxed">
        {text}
      </p>

      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: colors[0] }}
        />
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          {MOODS[mood].label}
        </span>
      </div>
    </div>
  );
};