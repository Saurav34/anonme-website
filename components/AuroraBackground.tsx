"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import { MOODS, MoodKey } from "@/constants/moods";

export const AuroraBackground = ({ currentMood }: { currentMood: MoodKey }) => {
  const colors = MOODS[currentMood].colors;
  
  // Motion values allow us to interpolate between colors smoothly
  const color1 = useMotionValue(colors[0]);
  const color2 = useMotionValue(colors[1] || colors[0]);
  const color3 = useMotionValue(colors[2] || colors[0]);

  useEffect(() => {
    // When mood changes, slowly morph to the new colors over 1.5 seconds
    animate(color1, colors[0], { duration: 1.5 });
    animate(color2, colors[1] || colors[0], { duration: 1.5 });
    animate(color3, colors[2] || colors[0], { duration: 1.5 });
  }, [currentMood, colors, color1, color2, color3]);

  // Create a radial gradient that moves slightly
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 10%, #000 40%, ${color1} 60%, ${color2} 80%, ${color3} 100%)`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-black"
    >
      {/* This div adds the 'film grain' texture if you have noise.png, 
          otherwise it just adds a subtle dark overlay */}
      <div className="absolute inset-0 opacity-20 bg-black/20 pointer-events-none" />
    </motion.section>
  );
};