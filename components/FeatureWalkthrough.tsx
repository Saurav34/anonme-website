"use client";
import { motion } from "framer-motion";

export const FeatureWalkthrough = () => {
  return (
    <section className="relative z-10 text-white py-32 overflow-hidden">
      
      {/* --- STEP 1: DEFINE THE VIBE (Left Text, Right Phone) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Side (Slide In) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
               <span className="font-bold text-purple-300 text-lg">01</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
              Define the Vibe.
            </h3>
            <p className="text-xl text-white/50 leading-relaxed max-w-lg">
              The internet is loud. Filter the noise by choosing exactly how you feel right now. No algorithms, just resonance.
            </p>
          </motion.div>

          {/* Phone Side (Floating Animation) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="relative flex justify-center md:justify-end"
          >
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] -z-10" />
             
             {/* Continuous Floating Motion */}
             <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
               <PhoneFrame>
                  <ScreenStep1 />
               </PhoneFrame>
             </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- STEP 2: SCREAM INTO VOID (Right Text, Left Phone) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          
          {/* Phone Side (Floating Animation) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="relative flex justify-center md:justify-start order-last md:order-first"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[120px] -z-10" />
             
             <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                <PhoneFrame>
                    <ScreenStep2 />
                </PhoneFrame>
             </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:pl-10"
          >
            <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
               <span className="font-bold text-red-300 text-lg">02</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
              The Quiet Feed.
            </h3>
            <p className="text-xl text-white/50 leading-relaxed max-w-lg">
              See what others are feeling in real-time. Raw, unfiltered thoughts. No profile pictures, no names—just pure human emotion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- STEP 3: FADE AWAY (Left Text, Right Phone) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
               <span className="font-bold text-blue-300 text-lg">03</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
              Fade Away.
            </h3>
            <p className="text-xl text-white/50 leading-relaxed max-w-lg">
              Nothing lasts forever. Every post self-destructs in 24 hours. No history. No digital footprint. Just peace.
            </p>
          </motion.div>

          {/* Phone Side */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="relative flex justify-center md:justify-end"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] -z-10" />
             
             <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             >
                <PhoneFrame>
                    <ScreenStep3 />
                </PhoneFrame>
             </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

/* --- REUSABLE PHONE FRAME --- */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] shadow-2xl border-[8px] border-neutral-800 ring-1 ring-white/20 overflow-hidden transform-gpu">
     {/* Notch */}
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-neutral-900 rounded-b-2xl z-30" />
     {/* Content */}
     <div className="w-full h-full bg-neutral-950 flex flex-col pt-10">
       {children}
     </div>
  </div>
);

/* --- ANIMATED SCREENS --- */

const PhoneHeader = ({ activeMood }: { activeMood?: string }) => (
  <div className="px-5 pb-4 z-20">
    <div className="flex justify-between items-center mb-5">
      <span className="font-bold text-xl tracking-tight text-white">AnonMe</span>
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
         <div className="w-4 h-4 border-2 border-white/50 rounded-full" />
      </div>
    </div>
    <div className="flex gap-2 overflow-hidden mask-image-linear-gradient">
       {["Sanctuary", "Chaos", "Heartbreak", "Void"].map((mood) => (
          <motion.div 
            key={mood} 
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-wider border cursor-pointer ${mood === activeMood ? "bg-white text-black border-white" : "bg-white/5 text-white/40 border-white/10"}`}
          >
            {mood}
          </motion.div>
       ))}
    </div>
  </div>
);

// SCREEN 1: Pulsing Orb
function ScreenStep1() {
  return (
    <div className="flex-1 flex flex-col relative">
      <PhoneHeader activeMood="Chaos" />
      <div className="flex-1 flex flex-col items-center justify-center text-center opacity-100 p-6">
         
         <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            {/* Spinning Rings */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-purple-500/30 rounded-full border-dashed"
            />
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute inset-2 border border-white/10 rounded-full"
            />
            {/* Breathing Core */}
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"
            />
         </div>
         
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
         >
            <p className="text-white text-base font-bold tracking-widest uppercase">Select a Vibe</p>
            <p className="text-white/40 text-sm mt-2 leading-relaxed">Filter the noise. <br/>Enter the room.</p>
         </motion.div>
      </div>
    </div>
  );
}

// SCREEN 2: Auto-Scrolling Feed
function ScreenStep2() {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <PhoneHeader activeMood="Chaos" />
      
      {/* Infinite Scroll Container */}
      <div className="flex-1 relative overflow-hidden">
         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-neutral-950 to-transparent z-10" />
         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-950 to-transparent z-10" />

         <motion.div 
            className="px-4 space-y-4 pt-2"
            animate={{ y: [0, -140] }} // Scrolls up
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // Loops forever
         >
            {/* Card 1 */}
            <div className="bg-neutral-800 border border-purple-500/40 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 bg-purple-500 text-white text-[9px] font-bold uppercase rounded-full">Chaos</span>
                <span className="text-[10px] text-white/50">Just now</span>
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                My brain has 40 tabs open and 3 are playing music I can't find.
                </p>
            </div>
            {/* Card 2 */}
            <div className="bg-neutral-900 border border-white/10 p-5 rounded-2xl opacity-80">
                <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[9px] font-bold uppercase rounded-full">Chill</span>
                <span className="text-[10px] text-white/30">5m ago</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                Sitting on the roof. The city is actually quiet at 3am.
                </p>
            </div>
            {/* Card 3 (Duplicate for loop smoothness) */}
            <div className="bg-neutral-900 border border-white/10 p-5 rounded-2xl opacity-60">
                <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 bg-red-500/20 text-red-300 text-[9px] font-bold uppercase rounded-full">Overthinking</span>
                <span className="text-[10px] text-white/30">12m ago</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                Why did I say that one thing 5 years ago?
                </p>
            </div>
             {/* Card 4 (Duplicate for loop smoothness) */}
             <div className="bg-neutral-800 border border-purple-500/40 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 bg-purple-500 text-white text-[9px] font-bold uppercase rounded-full">Chaos</span>
                <span className="text-[10px] text-white/50">Just now</span>
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                My brain has 40 tabs open and 3 are playing music I can't find.
                </p>
            </div>
         </motion.div>
      </div>
    </div>
  );
}

// SCREEN 3: Disintegrating/Loading
function ScreenStep3() {
  return (
    <div className="flex-1 flex flex-col relative">
      <PhoneHeader activeMood="Chaos" />
      <div className="flex-1 flex flex-col items-center justify-center relative p-6 text-center">
         
         <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
            {/* Loading Bar Animation */}
            <motion.div 
               className="absolute bottom-0 left-0 right-0 bg-white/20"
               animate={{ height: ["0%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
            <div className="w-10 h-0.5 bg-white/50 relative z-10" />
         </div>

         <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
         >
            <p className="text-white/60 text-lg font-serif italic">"Your feed has cleared."</p>
            <p className="text-white/30 text-xs mt-3 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full inline-block">24h Limit Reached</p>
         </motion.div>
      </div>
    </div>
  );
}