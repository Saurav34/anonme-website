"use client";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { MouseEvent } from "react";

export const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none fixed -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};