"use client";

export const StoreLinks = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 opacity-80">
      <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
        Coming soon to
      </p>
      <div className="flex gap-4">
        
        {/* Apple Store Button (Official Icon) */}
        <button className="group relative flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl hover:bg-white/10 transition-all active:scale-95">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
             <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.8-143-61.7-162.7zM247.6 89.6C263.6 70.5 273.5 45.4 272 19c-27 1.2-57.6 15.6-76.8 39.6-16.1 19.9-25.5 45.6-24.1 72 30.1 2.3 58-16.4 76.5-41z" />
          </svg>
          <div className="text-left">
            <div className="text-[9px] text-white/60 uppercase leading-none mb-0.5">Download on the</div>
            <div className="text-sm font-bold text-white leading-none font-sans">App Store</div>
          </div>
          <div className="absolute -top-2 -right-2 bg-white text-black text-[8px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            SOON
          </div>
        </button>

        {/* Google Play Button (Official Icon) */}
        <button className="group relative flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl hover:bg-white/10 transition-all active:scale-95">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
          <div className="text-left">
            <div className="text-[9px] text-white/60 uppercase leading-none mb-0.5">Get it on</div>
            <div className="text-sm font-bold text-white leading-none font-sans">Google Play</div>
          </div>
           <div className="absolute -top-2 -right-2 bg-white text-black text-[8px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            SOON
          </div>
        </button>
      </div>
    </div>
  );
};