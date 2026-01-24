"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MOODS, MoodKey } from "@/constants/moods";
import { Loader2, ArrowRight } from "lucide-react";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { StoreLinks } from "@/components/StoreLinks";

export const Hero = ({ 
  currentMood, 
  setMood 
}: { 
  currentMood: MoodKey; 
  setMood: (m: MoodKey) => void 
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    
    // Simulating delay for "Premium" feel if keys aren't set up yet
    try {
      // await addDoc(collection(db, "waitlist"), { email, createdAt: serverTimestamp() }); 
      // ^ Uncomment above line when real keys are in lib/firebase.ts
      await new Promise(r => setTimeout(r, 1500)); 
      setJoined(true);
      setEmail("");
    } catch (error) {
      console.error("Error joining waitlist:", error);
    } finally {
      setLoading(false);
    }
  };

  const activeColor = MOODS[currentMood].colors[0];

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      
      {/* 1. The Pulsing Particle (Brand Identity) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.4, 1, 0.4],
          boxShadow: `0 0 30px ${activeColor}` 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-3 h-3 rounded-full mb-12"
        style={{ backgroundColor: activeColor }}
      />

      {/* 2. Kinetic Headline (Staggered Reveal) */}
      <h1 className="max-w-5xl text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
        <span className="block mb-4 text-2xl md:text-4xl font-normal text-white/50 tracking-wide">
          Social media is a performance.
        </span>
        <motion.span 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block text-white"
        >
          This is a quiet room.
        </motion.span>
      </h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed"
      >
        The world’s first emotion-based, ephemeral social app. <br />
        <span className="text-white/80">No profiles. No permanence. Just resonance.</span>
      </motion.p>

      {/* 3. Waitlist Input (Glassmorphism) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 w-full max-w-md"
      >
        {joined ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white flex items-center justify-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
            You are on the list. We will signal you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleJoin} className="relative group">
            {/* The glow effect behind the input */}
            <div 
              className="absolute -inset-1 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000" 
              style={{ background: `linear-gradient(to right, ${activeColor}, transparent)` }}
            />
            
            <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 focus-within:border-white/30 transition-colors">
              <input 
                type="email" 
                placeholder="enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-neutral-500 h-10"
              />
              <button 
                disabled={loading}
                className="h-10 px-6 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* 4. ADD THIS: Store Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-16"
      >
        <StoreLinks />
      </motion.div>
    </div>
  );
};