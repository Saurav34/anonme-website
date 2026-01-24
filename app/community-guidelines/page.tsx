"use client";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          Community Guidelines
        </h1>
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          AnonMe is a quiet room in a noisy world. To keep this space safe and resonant, we ask you to follow these core principles.
        </p>

        <div className="space-y-12">
          
          {/* Rule 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Resonance Over Reaction</h2>
            <p className="text-gray-400 leading-relaxed">
              We are here to share feelings, not to start wars. If a post doesn't resonate with you, simply scroll past it. Aggressive debates, trolling, and "rage-baiting" have no place here.
            </p>
          </section>

          {/* Rule 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Anonymity is a Shield, Not a Weapon</h2>
            <p className="text-gray-400 leading-relaxed">
              We protect your identity so you can be vulnerable, not so you can be cruel. 
              <br /><br />
              <strong className="text-white">Do Not:</strong> Use anonymity to bully, harass, or intimidate others.
              <br />
              <strong className="text-white">Do Not:</strong> Reveal another person's real identity ("doxing") or share private contact info.
            </p>
          </section>

          {/* Rule 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Zero Tolerance for Hate</h2>
            <p className="text-gray-400 leading-relaxed">
              We have an absolute zero-tolerance policy towards hate speech. Any content promoting violence or hatred against individuals or groups based on race, ethnicity, religion, disability, gender, age, or sexual orientation will result in an immediate permanent ban.
            </p>
          </section>

          {/* Rule 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Self-Harm and Safety</h2>
            <p className="text-gray-400 leading-relaxed">
              While we encourage sharing difficult emotions, we prioritize safety. Content that encourages self-harm, suicide, or eating disorders will be removed. If you see someone in immediate danger, please report the content so we can provide resources.
            </p>
          </section>

          {/* Rule 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. NSFW & Illegal Content</h2>
            <p className="text-gray-400 leading-relaxed">
              AnonMe is not for sexual content, nudity, or illegal activities. We cooperate with law enforcement when necessary to protect our community.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
            <h3 className="text-lg font-bold text-white mb-2">Enforcement</h3>
            <p className="text-sm text-gray-400">
              Violating these guidelines results in content removal and account suspension. We reserve the right to ban any device or IP address to protect the sanctity of the quiet room.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}