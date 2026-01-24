"use client";
import { motion } from "framer-motion";

export const AppShowcase = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Don't post. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Resonate.</span>
        </h2>
        <p className="text-white/50 max-w-lg mx-auto">
          Select a mood. Write your thought. Let it float into the void.
        </p>
      </div>

      {/* The CSS Phone Mockup */}
      <motion.div 
        initial={{ rotate: 10, y: 100, opacity: 0 }}
        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-[300px] h-[600px] bg-black border-8 border-neutral-900 rounded-[3rem] shadow-2xl shadow-purple-900/20 overflow-hidden"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20" />

        {/* Screen Content */}
        <div className="absolute inset-0 bg-neutral-900 flex flex-col">
          {/* Header */}
          <div className="h-20 bg-gradient-to-b from-black/80 to-transparent p-6 pt-10 flex justify-between items-center text-white/80">
            <span className="text-xs font-bold tracking-widest">ANONME</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>

          {/* The Feed */}
          <div className="flex-1 p-4 space-y-4">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-[10px] rounded-full uppercase tracking-wider font-bold">Overthinking</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Does anyone else feel like they are just waiting for something to happen?
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-white/10 rounded-2xl p-5 backdrop-blur-md scale-105 shadow-xl">
               <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-red-500/20 text-red-300 text-[10px] rounded-full uppercase tracking-wider font-bold">Chaos Energy</span>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                I want to quit my job and move to a cabin. Right. Now.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-red-500/50" />
                </div>
              </div>
            </div>

             {/* Card 3 */}
             <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md opacity-50">
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-[10px] rounded-full uppercase tracking-wider font-bold">Chill</span>
              </div>
              <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2" />
              <div className="h-2 w-1/2 bg-white/20 rounded-full" />
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="h-20 bg-black/50 backdrop-blur-lg flex justify-around items-center px-6">
             <div className="w-6 h-6 rounded-full border-2 border-white/20" />
             <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl pb-1">+</div>
             <div className="w-6 h-6 rounded-full border-2 border-white/20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};