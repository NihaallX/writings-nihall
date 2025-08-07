"use client";

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
export default function NavBar() {
  return (
    <header className="w-full flex items-center justify-between py-6 px-8 bg-black/90 rounded-t-3xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] sticky top-0 z-40">
      <h1
        className={`cozy-header text-4xl md:text-5xl tracking-tight text-white drop-shadow-sm ${pacifico.className}`}
        style={{ fontWeight: 400 }}
      >
        Seigfried
      </h1>
      <nav className="flex items-center gap-6">
        {/* Notifications */}
        <button className="text-white/70 hover:text-white transition-colors text-2xl relative" aria-label="Show notifications" onClick={() => alert('No new notifications!')}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        </button>
        {/* Groups */}
        <button className="text-white/70 hover:text-white transition-colors text-2xl relative" aria-label="Show group info" onClick={() => alert('Groups feature coming soon!')}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </button>
        {/* Profile */}
        <button className="rounded-full bg-black border-2 border-white/10 w-10 h-10 flex items-center justify-center shadow hover:shadow-lg transition-all duration-300" aria-label="Go to profile" onClick={() => window.location.href = '/about'}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className=""><circle cx="12" cy="12" r="10" fill="#fff" opacity="0.1"/><circle cx="12" cy="10" r="4" fill="#fff"/><circle cx="12" cy="18" r="5" fill="#fff" opacity="0.2"/></svg>
        </button>
      </nav>
    </header>
  );
}
