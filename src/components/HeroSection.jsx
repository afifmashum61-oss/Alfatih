import React from 'react';
import { Play, ArrowUpRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onOpenTrial }) {
  return (
    <section id="beranda" className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Bracket Tag matching reference image */}
            <div className="bracket-tag">
              <span>Assalamu'alaikum! 👋</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A241F] leading-[1.15] mb-6 tracking-tight">
              Belajar <span className="text-[#EB9414] underline decoration-[#EB9414]/30 decoration-wavy decoration-2">Tahsin & Makhraj</span>, <br className="hidden sm:inline" />
              Platform Kursus Ngaji Online Terpercaya.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#57655E] mb-8 max-w-2xl leading-relaxed font-normal">
              Bimbingan Al-Qur'an interaktif 1-on-1 bersama Ustadz & Ustadzah bersertifikat Sanad Al-Qur'an. Waktu belajar sangat fleksibel dari rumah khusus anak-anak, remaja, hingga dewasa.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button 
                onClick={onOpenTrial}
                className="btn btn-primary px-7 py-3.5 text-base shadow-lg w-full sm:w-auto justify-center"
              >
                <span>Daftar Trial Gratis</span>
                <span className="arrow-badge">
                  <ArrowUpRight size={16} />
                </span>
              </button>
              
              <a 
                href="#program" 
                className="btn btn-outline px-6 py-3.5 text-base w-full sm:w-auto justify-center"
              >
                <span>Lihat Program Belajar</span>
              </a>
            </div>

            {/* Social Trust Indicators */}
            <div className="pt-4 border-t border-emerald-900/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#57655E]">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 size={18} className="text-[#EB9414]" />
                <span>100% Privat 1-on-1</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck size={18} className="text-[#1B4332]" />
                <span>Pengajar Bersanad</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Star size={18} className="text-[#EB9414] fill-[#EB9414]" />
                <span>Rating 4.9/5 (2,500+ Santri)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait Composition matching Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Warm Gold Blob Circle */}
            <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#EB9414] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 shadow-2xl opacity-95"></div>
            
            {/* Soft backdrop glow */}
            <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#F4A261]/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 blur-xl"></div>

            {/* Hero Image frame with new Students Qur'an Photo */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full overflow-hidden border-[6px] border-[#EB9414] bg-[#EB9414] shadow-2xl flex items-center justify-center">
              <img 
                src="/assets/hero_students.jpg" 
                alt="Santri Belajar Al-Qur'an Al-Fatih Academy" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Circular Rotating Badge Top Right (HIRE ME badge counterpart) */}
            <div className="absolute -top-3 right-0 sm:right-4 bg-[#1B4332] text-[#EB9414] w-20 h-20 rounded-full p-2 border-2 border-white shadow-xl flex flex-col items-center justify-center text-center leading-none z-20 transform rotate-12 hover:rotate-0 transition-transform">
              <span className="text-[10px] font-bold text-white uppercase">Sanad</span>
              <span className="text-xs font-black text-[#EB9414]">100%</span>
              <span className="text-[9px] font-semibold text-gray-200 uppercase">Certified</span>
            </div>

            {/* Floating Badge 1: Orange pill right */}
            <div className="floating-badge gold-badge top-1/3 -right-2 sm:-right-6">
              <span>📖 Tahsin Interaktif</span>
            </div>

            {/* Floating Badge 2: Green pill bottom */}
            <div className="floating-badge bottom-4 left-2 sm:-left-4">
              <span>👤 Privat 1-on-1</span>
            </div>

            {/* Floating Badge 3: Small pill top left */}
            <div className="floating-badge top-8 left-0 sm:-left-6">
              <span>⚡ Ba'da Maghrib s/d Selesai</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
