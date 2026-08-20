import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';

export default function TajwidInteractive() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const lessons = [
    {
      title: "Makhraj Huruf Hijaiyah",
      arabic: "مَخَارِجُ الْحُرُوفِ",
      category: "Dasar & Urgen",
      desc: "Mengetahui tempat keluar bunyi 17 makhraj huruf (Tenggorokan, Lidah, Dua Bibir, Rongga Mulut, Hidung).",
      exampleArabic: "أَنْعَمْتَ عَلَيْهِمْ",
      latin: "An'amta 'Alaihim",
      tips: "Perhatikan tekanan huruf 'Ain (ع) keluar dari tengah tenggorokan (Wasathul Halq).",
      color: "#1B4332"
    },
    {
      title: "Hukum Nun Mati & Tanwin",
      arabic: "إِظْهَارْ • إِدْغَامْ • إِخْفَاءْ • إِقْلَابْ",
      category: "Tajwid Utama",
      desc: "4 Hukum bacaan utama saat Nun Sukun (نْ) bertemu huruf-huruf hijaiyah.",
      exampleArabic: "مِنْ رَبِّهِمْ — مَنْ يَقُولُ",
      latin: "Mir-Rabbihim — May-Yaqulu",
      tips: "Idgham Bilaghunnah dibaca melebur tanpa dengung pada huruf Ra (ر) dan Lam (ل).",
      color: "#EB9414"
    },
    {
      title: "Hukum Mad (Panjang Bacaan)",
      arabic: "أَحْكَامُ الْمَدِّ",
      category: "Irama & Ketukan",
      desc: "Aturan memanjangkan suara dari 2 harakat (Mad Asli) hingga 6 harakat (Mad Lazim).",
      exampleArabic: "جَاءَ — وَلَا الضَّالِّينَ",
      latin: "Jaa'a — Waladh-Dhaalliin",
      tips: "Mad Jaiz Munfashil dibaca 4-5 harakat saat mad bertemu hamzah di lain kata.",
      color: "#2D6A4F"
    },
    {
      title: "Ghunnah & Sifat Huruf",
      arabic: "صِفَاتُ الْحُرُوفِ",
      category: "Keindahan Bacaan",
      desc: "Mengenal sifat huruf seperti Qalqalah (memantul), Hams (berdesis), dan Isti'la (tebal).",
      exampleArabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۚ",
      latin: "Qul Huwallahu Ahad",
      tips: "Huruf Dal (د) pada akhir ayat dibaca Qalqalah Kubra dengan pantulan yang jelas.",
      color: "#E76F51"
    }
  ];

  const handlePlayAudio = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  const current = lessons[activeLesson];

  return (
    <section id="tajwid-interaktif" className="py-20 bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-subtag justify-center">
            <span>— Fitur Interaktif</span>
          </div>
          <h2 className="section-title mb-4">
            Simulasi <span className="text-[#EB9414]">Tajwid & Makhraj</span> Online
          </h2>
          <p className="text-[#57655E] text-base">
            Cobalah fitur bimbingan tajwid visual interaktif kami. Santri dapat mendengarkan audio pengucapan Ustadz dan mendapat koreksi langsung saat kelas berlangsung.
          </p>
        </div>

        {/* Interactive Layout Box */}
        <div className="bg-[#F3F4ED] rounded-3xl p-6 sm:p-10 border border-emerald-950/10 shadow-lg">
          
          {/* Tab Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {lessons.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLesson(idx)}
                className={`p-4 rounded-2xl text-left transition-all ${
                  activeLesson === idx
                    ? 'bg-[#1B4332] text-white shadow-md transform -translate-y-1'
                    : 'bg-white text-[#1A241F] hover:bg-gray-100'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                  activeLesson === idx ? 'text-[#EB9414]' : 'text-gray-500'
                }`}>
                  {item.category}
                </span>
                <span className="text-sm font-extrabold line-clamp-1">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Lesson Display Board */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-gray-100">
            
            {/* Left Info */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="px-3.5 py-1 rounded-full bg-[#FFF5E5] text-[#EB9414] text-xs font-extrabold mb-3">
                {current.category}
              </span>
              <h3 className="text-2xl font-extrabold text-[#1A241F] mb-2">
                {current.title}
              </h3>
              <p className="text-sm text-[#57655E] mb-6 leading-relaxed">
                {current.desc}
              </p>

              {/* Arabic Sample Box */}
              <div className="w-full bg-[#F9FAF6] p-6 rounded-2xl border border-dashed border-[#EB9414] mb-6 text-center">
                <div className="font-arabic text-3xl sm:text-4xl font-bold text-[#1B4332] mb-2 dir-rtl">
                  {current.exampleArabic}
                </div>
                <div className="text-xs font-bold text-[#EB9414] italic">
                  "{current.latin}"
                </div>
              </div>

              {/* Tips Box */}
              <div className="flex items-start gap-3 bg-[#E8F5E9] p-4 rounded-xl text-xs font-semibold text-[#1B4332] w-full">
                <Sparkles size={18} className="text-[#EB9414] shrink-0 mt-0.5" />
                <span><strong className="text-[#1B4332]">Catatan Ustadz:</strong> {current.tips}</span>
              </div>
            </div>

            {/* Right Audio Player Interactive Component */}
            <div className="lg:col-span-5 bg-[#1B4332] text-white p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
              
              <div className="font-arabic text-2xl text-[#EB9414] mb-4">
                {current.arabic}
              </div>

              {/* Animated Waveform Indicator */}
              <div className="flex items-center gap-1.5 h-12 mb-6">
                {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: isPlaying ? `${h}%` : '20%' }}
                    className="w-1.5 bg-[#EB9414] rounded-full transition-all duration-300"
                  ></div>
                ))}
              </div>

              <button
                onClick={handlePlayAudio}
                className="btn btn-gold w-full py-3.5 shadow-lg flex items-center justify-center gap-2"
              >
                {isPlaying ? (
                  <>
                    <Volume2 size={20} className="animate-bounce" />
                    <span>Memutar Audio Pengajar...</span>
                  </>
                ) : (
                  <>
                    <PlayCircle size={20} />
                    <span>Dengarkan Contoh Makhraj</span>
                  </>
                )}
              </button>

              <span className="text-[11px] text-gray-300 mt-3 flex items-center gap-1">
                <CheckCircle2 size={12} className="text-[#EB9414]" /> Suara jernih Ustadz bersanad
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
