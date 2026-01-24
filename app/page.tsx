"use client";
import { useState } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { FeatureWalkthrough } from "@/components/FeatureWalkthrough"; // <--- CHANGED THIS IMPORT
import { Spotlight } from "@/components/Spotlight";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";
import { MoodKey } from "@/constants/moods";

export default function Home() {
  const [mood, setMood] = useState<MoodKey>("default");

  return (
    <main className="relative min-h-screen w-full overflow-hidden selection:bg-white/30">
      <Spotlight>
        <AuroraBackground currentMood={mood} />
        
        <Dock currentMood={mood} setMood={setMood} />

        {/* HERO */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen pt-10 pb-20 gap-8">
          <Hero currentMood={mood} setMood={setMood} />
          <div className="w-full opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
             <Marquee currentMood={mood} />
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="relative z-20">
           <Manifesto />
        </div>

        {/* NEW ZIG-ZAG WALKTHROUGH (Replaces old ProductStory) */}
        <div className="relative z-20 border-t border-white/10 bg-black/50 backdrop-blur-lg">
           <FeatureWalkthrough />
        </div>

        {/* BENTO FEATURES */}
        <div className="relative z-20 bg-black border-t border-white/5">
          <Features />
        </div>
        
        <Footer />
        
      </Spotlight>
    </main>
  );
}