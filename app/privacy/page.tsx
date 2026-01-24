"use client";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last Updated: January 2026</p>

        {/* Highlight Box (Your SSL Section) */}
        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl mb-12">
          <h3 className="text-purple-300 font-bold mb-2 flex items-center gap-2">
            Encryption & Security
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            All data transmitted between your device and our servers is protected using industry-standard <strong>SSL/TLS encryption (Encryption in Transit)</strong>. This ensures that your thoughts and messages remain private from third-party interception.
          </p>
        </div>
        
        <div className="space-y-12 text-white/70 font-light leading-relaxed">
          
          <section>
            <h2 className="text-2xl text-white font-bold mb-4">1. Data Collection & Hashing</h2>
            <p>
              To maintain your anonymity, we do not store your raw email address or phone number. Instead, we use <strong>SHA-256 cryptographic hashing</strong>. This process turns your identifier into a unique string of characters that cannot be reversed, protecting your identity even in our database.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4">2. Device Information</h2>
            <p>
              We collect a unique hash of your Device ID. This is used strictly for security purposes, such as rate-limiting to prevent spam and ensuring the integrity of our anonymous community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4">3. Data Retention & Deletion</h2>
            <p className="mb-4">
              All posts on AnonMe are ephemeral. You have the right to delete your account at any time. When you request deletion:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/60">
              <li>Your account enters a 30-day "frozen" state.</li>
              <li>After 30 days, all associated data is permanently purged from our active systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-4">4. Third-Party Services</h2>
            <p>
              We utilize Google Firebase for push notifications and authentication services. These providers may process data as necessary to perform their functions under strict privacy guidelines.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}