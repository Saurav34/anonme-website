"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const STORY_STEPS = [
  {
    id: 1,
    title: "Define the Vibe",
    description: "Don't doomscroll. Filter the noise by tapping a mood. You control the room.",
    screen: <ScreenStep1 />
  },
  {
    id: 2,
    title: "Scream into the Void",
    description: "See what others are feeling in real-time. Raw, unfiltered thoughts. No profiles, just resonance.",
    screen: <ScreenStep2 />
  },
  {
    id: 3,
    title: "Fade Away",
    description: "The 'Quiet Room' promise. Every post self-destructs in 24 hours. No history. No footprint. Peace.",
    screen: <ScreenStep3 />
  }
];

export const ProductStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ROBUST SWITCHING LOGIC: Updates the phone screen based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide scroll into 3 equal parts
      if (latest < 0.33) {
        setActiveStep(0);
      } else if (latest < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative z-10 text-white py-20"> 
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN: THE STICKY PHONE */}
        <div className="relative h-[300vh] hidden md:block"> 
          <div className="sticky top-10 h-screen flex items-center justify-center">
             
            {/* Ambient Blur */}
            <div className={`absolute w-[300px] h-[500px] rounded-full blur-[80px] -z-10 transition-colors duration-1000 ${
                activeStep === 0 ? "bg-purple-900/20" : 
                activeStep === 1 ? "bg-red-900/20" : 
                "bg-blue-900/20"
            }`} />

            {/* THE PHONE HARDWARE */}
            <div className="relative w-[320px] h-[650px] bg-black/95 backdrop-blur-2xl rounded-[3.5rem] shadow-2xl border-[8px] border-neutral-800 ring-1 ring-white/20 overflow-hidden z-10">
              
              {/* Dynamic Screen Content Wrapper */}
              <div className="absolute inset-0 flex flex-col relative bg-neutral-950">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-xl z-30" />
                 
                 {/* Status Bar */}
                 <div className="absolute top-3 right-6 flex gap-1 z-30 opacity-50">
                    <div className="w-4 h-2 bg-white rounded-sm" />
                    <div className="w-0.5 h-2 bg-white rounded-sm" />
                 </div>

                 {/* SCREEN SWITCHER (Uses AnimatePresence for smooth crossfade) */}
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-10 flex flex-col pt-12 h-full w-full"
                    >
                        {STORY_STEPS[activeStep].screen}
                    </motion.div>
                 </AnimatePresence>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE SCROLLING TEXT */}
        <div className="relative"> 
          {STORY_STEPS.map((step, index) => (
            <div key={step.id} className="h-screen flex items-center justify-center md:justify-start">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }} 
                transition={{ duration: 0.8 }}
                className={`max-w-md p-8 rounded-3xl backdrop-blur-md border shadow-xl transition-all duration-500 ${
                    activeStep === index 
                    ? "bg-white/10 border-white/20 opacity-100 scale-100" 
                    : "bg-black/40 border-white/5 opacity-50 scale-95"
                }`}
              >
                <div className="text-sm font-bold text-white/30 uppercase tracking-widest mb-4">
                  0{step.id}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg">
                  {step.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- SHARED HEADER --- */
const PhoneHeader = ({ activeMood }: { activeMood?: string }) => (
  <div className="px-4 pb-4 pt-2 z-20 bg-gradient-to-b from-neutral-900 to-transparent">
    <div className="flex justify-between items-center mb-4">
      <span className="font-bold text-lg tracking-tight text-white">AnonMe</span>
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
         <div className="w-4 h-4 border-2 border-white/50 rounded-full" />
      </div>
    </div>
    
    {/* Instagram Style Mood Pills */}
    <div className="flex gap-2 overflow-hidden">
       {["Sanctuary", "Chaos", "Heartbreak", "Void"].map((mood) => (
          <div 
            key={mood}
            className={`px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider border transition-colors ${
              mood === activeMood 
              ? "bg-white text-black border-white" 
              : "bg-white/5 text-white/40 border-white/10"
            }`}
          >
            {mood}
          </div>
       ))}
    </div>
  </div>
);

/* --- STEP 1: DEFINE VIBE --- */
function ScreenStep1() {
  return (
    <div className="h-full w-full flex flex-col bg-transparent relative">
      <PhoneHeader activeMood="Chaos" />
      <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70">
         <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
         </div>
         <p className="text-white/40 text-xs tracking-widest uppercase">
            Select a vibe<br/>to filter the feed
         </p>
      </div>
    </div>
  );
}

/* --- STEP 2: FEED (High Contrast Cards) --- */
function ScreenStep2() {
  return (
    <div className="h-full w-full flex flex-col bg-transparent relative">
      <PhoneHeader activeMood="Chaos" />
      <div className="flex-1 px-4 space-y-3 pt-4 overflow-hidden">
         {/* Chaos Card - BRIGHTER BACKGROUND */}
         <div className="bg-neutral-800 border border-purple-500/50 p-4 rounded-2xl shadow-lg relative">
            <div className="flex justify-between items-start mb-2">
               <span className="px-2 py-0.5 bg-purple-500 text-white text-[9px] font-bold uppercase rounded-full">Chaos</span>
               <span className="text-[9px] text-white/50">Just now</span>
            </div>
            <p className="text-sm font-medium text-white leading-relaxed">
               My brain has 40 tabs open and 3 are playing music I can't find.
            </p>
         </div>

         {/* Chill Card */}
         <div className="bg-neutral-900 border border-white/10 p-4 rounded-2xl">
             <div className="flex justify-between items-start mb-2">
               <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[9px] font-bold uppercase rounded-full">Chill</span>
               <span className="text-[9px] text-white/30">5m ago</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
               Sitting on the roof. The city is actually quiet at 3am.
            </p>
         </div>
      </div>
    </div>
  );
}

/* --- STEP 3: FADE AWAY --- */
function ScreenStep3() {
  return (
    <div className="h-full w-full flex flex-col bg-transparent relative">
      <PhoneHeader activeMood="Chaos" />
      <div className="flex-1 flex flex-col items-center justify-center relative">
         {/* Visible "Empty" Icon */}
         <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-white/20" />
         </div>
         <p className="text-white/50 text-sm font-serif italic">
            "Your feed has cleared."
         </p>
      </div>
    </div>
  );
}