"use client";
import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="relative z-10 py-32 px-4 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base font-bold text-purple-400 uppercase tracking-widest mb-6">
            The Philosophy
          </h2>
          
          <p className="text-2xl md:text-5xl font-serif text-white/80 leading-relaxed md:leading-tight">
            "We are tired of the noise. 
            <span className="text-white/30"> Of the algorithm telling us how to feel. Of the pressure to be perfect. </span>
            AnonMe is a return to the raw. 
            <span className="text-white/30"> A place where you can be anyone, by being no one."</span>
          </p>

          <div className="mt-12 flex justify-center gap-2">
            <div className="h-16 w-[1px] bg-gradient-to-b from-purple-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};