"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        
        {/* Brand Logo -> Click to Go Home */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-white tracking-tighter hover:text-white/80 transition-opacity"
        >
          AnonMe
        </Link>

        {/* Optional: You can add a 'Join Waitlist' button here later if you want */}
      </div>
    </nav>
  );
};