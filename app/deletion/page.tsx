"use client";
import { Footer } from "@/components/Footer";
import { Mail, Smartphone } from "lucide-react"; // Using icons for better visuals

export default function Deletion() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-6 tracking-tight">Account Deletion Request</h1>
        <p className="text-white/60 mb-12">
          We respect your privacy. To delete your AnonMe account, please choose one of the following methods.
        </p>
        
        {/* Method Cards */}
        <div className="grid gap-6 text-left mb-12">
          
          {/* Method 1: In-App */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
               <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Option 1: In-App</h3>
              <p className="text-white/60 text-sm">
                Open the Profile Drawer in the app and tap <strong>"Delete Account"</strong>.
              </p>
            </div>
          </div>

          {/* Method 2: Email */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
               <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Option 2: Email Request</h3>
              <p className="text-white/60 text-sm mb-2">
                Send an email from your registered email address to:
              </p>
              <code className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-sm select-all">
                ssinghh9820@gmail.com
              </code>
            </div>
          </div>

        </div>

        {/* Warning Note */}
        <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-xl inline-block">
          <p className="text-red-200/80 text-sm">
            <strong>Note:</strong> Your data will be frozen for 30 days and then permanently wiped from our systems.
          </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}