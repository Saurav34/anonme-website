"use client";
import { Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-black pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tighter">AnonMe</h3>
          <p className="text-white/40 text-sm mt-2 max-w-xs">
            The world's first emotion-based ephemeral social network.
            Built for everyone.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12 text-sm text-white/60">
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">Legal</span>
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="/deletion" className="hover:text-purple-400 transition-colors">Data Deletion</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Community Guidelines</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">Connect</span>
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
        © 2026 AnonMe Inc. All rights reserved.
      </div>
    </footer>
  );
};