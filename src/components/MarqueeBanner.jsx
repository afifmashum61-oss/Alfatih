import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeBanner() {
  const tickerItems = [
    "Tahsin Al-Qur'an",
    "Tajwid & Makhraj Interaktif",
    "Tahfizh Hafalan Online",
    "Bahasa Arab Qur'ani",
    "Bimbingan Anak & Dewasa",
    "Kelas Privat 1-on-1",
    "Pengajar Bersertifikat Sanad",
    "Kurikulum Standar Nasional"
  ];

  return (
    <div className="bg-[#EB9414] text-white py-4 overflow-hidden shadow-inner relative z-20 transform -rotate-1 scale-105 my-4 border-y-2 border-[#1B4332]/10">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {/* Repeat list twice for seamless infinite scrolling loop */}
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 mx-4">
            <span className="text-base sm:text-lg font-extrabold tracking-wide uppercase font-main drop-shadow-xs">
              {item}
            </span>
            <Sparkles size={18} className="text-[#1B4332] opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
