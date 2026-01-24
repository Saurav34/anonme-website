"use client";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="space-y-6 text-white/70 font-light leading-relaxed">
          <p>Last Updated: January 1, 2026</p>
          
          <h2 className="text-2xl text-white font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using AnonMe, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
          </p>

          <h2 className="text-2xl text-white font-bold mt-8 mb-4">2. User Conduct</h2>
          <p>
            You agree not to use the app to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. We maintain a zero-tolerance policy for hate speech.
          </p>

          <h2 className="text-2xl text-white font-bold mt-8 mb-4">3. Content Moderation</h2>
          <p>
            We reserve the right to remove any content that violates these terms or that we find objectionable for any reason, without prior notice.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}