import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export default function AboutDarkSection({ onOpenTrial }) {
  const stats = [
    { number: '2,500+', label: 'Santri Aktif Terdaftar' },
    { number: '85+', label: 'Ustadz & Ustadzah Bersanad' },
    { number: '99%', label: 'Tingkat Kepuasan Belajar' },
  ];

  return (
    <section id="mengapa-kami" className="py-12 bg-[#F9FAF6]">
      <div className="container">
        
        {/* Dark Emerald Container matching reference image */}
        <div className="bg-[#1B4332] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D6A4F]/30 rounded-full blur-3xl -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Yellow Circle Portrait with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-6">
              
              {/* Vibrant Yellow Backdrop Circle Frame */}
              <div className="w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full bg-[#EB9414] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 shadow-2xl animate-pulse"></div>
              
              {/* Male Tutor Image Container with Yellow Border */}
              <div className="relative w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] rounded-full overflow-hidden border-[6px] border-[#EB9414] bg-[#EB9414] shadow-2xl flex items-center justify-center">
                <img 
                  src="/assets/tutor_male.jpg" 
                  alt="Ustadz Pengajar Al-Fatih" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Pill Badges around circle matching image */}
              <div className="absolute top-4 left-0 bg-[#EB9414] text-white px-3 py-1.5 rounded-full text-xs font-extrabold shadow-lg">
                Tahsin Standar Nasional
              </div>

              <div className="absolute bottom-6 left-2 bg-white text-[#1B4332] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                Sanad Al-Qur'an Mujawwad
              </div>

              <div className="absolute top-1/2 -right-4 bg-white/95 text-[#1B4332] px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-lg backdrop-blur-sm">
                Bimbingan Sabar
              </div>

            </div>

            {/* Right Column: Information & Stats */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="section-subtag text-[#EB9414]">
                <span>— Tentang Al-Fatih</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Mengapa Harus Belajar di <span className="text-[#EB9414]">Al-Fatih Academy?</span>
              </h2>

              <p className="text-gray-200 text-sm sm:text-base mb-8 leading-relaxed font-normal">
                Al-Fatih Academy lahir untuk memudahkan setiap muslim membaca, menghafal, dan memahami Al-Qur'an dari mana saja. Kami memadukan metode pengajaran tradisional bersanad dengan teknologi interaktif modern untuk kenyamanan belajar maksimal.
              </p>

              {/* 3 Counter Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full mb-10 border-y border-white/15 py-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#EB9414] tracking-tight">
                      {stat.number}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button & Signature */}
              <div className="flex flex-wrap items-center gap-6 w-full">
                <button 
                  onClick={onOpenTrial}
                  className="btn btn-gold px-7 py-3.5 text-base shadow-xl"
                >
                  <span>Mulai Konsultasi Gratis</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#1B4332] flex items-center justify-center ml-1">
                    <ArrowUpRight size={16} />
                  </span>
                </button>

                {/* Calligraphy Signature Decorative Element */}
                <div className="font-arabic text-[#EB9414] text-2xl font-bold tracking-widest opacity-90">
                  الفاتح أكاديمي
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
