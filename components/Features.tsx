"use client";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Ghost, Clock, HeartPulse, ShieldOff } from "lucide-react";

const features = [
  {
    title: "Zero Identity",
    description: "No usernames. No profile pictures. You are just a voice in the dark.",
    icon: <Ghost className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Ephemeral by Design",
    description: "Every thought vanishes in 24 hours. Don't carry the weight of your past.",
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Resonance over Likes",
    description: "We don't have 'Like' buttons. We have 'Resonance'. Connect through emotion.",
    icon: <HeartPulse className="w-6 h-6 text-pink-400" />,
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "The Quiet Room",
    description: "A sanctuary free from algorithms. Just pure human feeling.",
    icon: <ShieldOff className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-teal-500/20"
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;
    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <TiltCard
            key={index}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
          >
            {/* 3D Depth Effect */}
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3 ring-1 ring-white/20 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
            
            {/* Inner Glow */}
            <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`} />
          </TiltCard>
        ))}
      </div>
    </section>
  );
};