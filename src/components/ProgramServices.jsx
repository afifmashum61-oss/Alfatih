import React, { useState } from 'react';
import { BookOpen, Mic, Award, Languages, Users, UserCheck, ArrowUpRight, ArrowRight, Check } from 'lucide-react';

export default function ProgramServices({ onSelectProgram }) {
  const [activeTab, setActiveTab] = useState('semua');

  const categories = [
    { id: 'semua', label: 'Semua Program' },
    { id: 'anak', label: 'Anak-Anak' },
    { id: 'dewasa', label: 'Dewasa / Mulai Nol' },
    { id: 'privat', label: 'Privat 1-on-1' },
    { id: 'tahfizh', label: 'Tahfizh & Sanad' },
  ];

  const programs = [
    {
      id: 1,
      category: 'dewasa',
      icon: Mic,
      title: "Tahsin & Makhrajul Huruf",
      desc: "Perbaiki pengucapan huruf Al-Qur'an sesuai kaidah tajwid secara mendalam dari tingkat dasar hingga fasih.",
      level: "Pemula & Menengah",
      duration: "12 Sesi / Bulan",
      features: ["Bimbingan Privat 1-on-1", "Modul Makhraj Visual", "Rekaman Evaluasi Sesi"]
    },
    {
      id: 2,
      category: 'anak',
      icon: BookOpen,
      title: "Ngaji Ceria Anak (Iqro' & Juz Amma)",
      desc: "Metode belajar seru dan ramah anak. Melatih kemampuan membaca dari Iqro 1 hingga lancar membaca Al-Qur'an.",
      level: "Anak (Usia 4-12 Thn)",
      duration: "8 - 12 Sesi / Bulan",
      features: ["Pengajar Ustadzah Sabar", "Kartu Flashcard Hijaiyah", "Laporan Perkembangan Pekanan"]
    },
    {
      id: 3,
      category: 'tahfizh',
      icon: Award,
      title: "Tahfizh & Hafalan Al-Qur'an",
      desc: "Program bimbingan setoran hafalan Al-Qur'an dengan metode muraja'ah terstruktur dan bimbingan pengajar hafidz 30 juz.",
      level: "Semua Tingkat",
      duration: "Fleksibel",
      features: ["Setoran Harian / Pekanan", "Metode Muraja'ah Efektif", "Ujian Mutqin & Sertifikat"]
    },
    {
      id: 4,
      category: 'dewasa',
      icon: Languages,
      title: "Bahasa Arab & Fahmul Qur'an",
      desc: "Memahami arti dan kaidah bahasa Al-Qur'an secara bertahap agar lebih khusyuk saat salat dan mengaji.",
      level: "Menengah",
      duration: "16 Sesi",
      features: ["Kosa Kata Qur'an Populer", "Tata Bahasa Nahwu Shorof", "Praktek Tadabbur Ayat"]
    },
    {
      id: 5,
      category: 'privat',
      icon: UserCheck,
      title: "Kelas Privat Intensif Dewasa",
      desc: "Khusus bagi yang sibuk atau ingin belajar dari nol tanpa rasa canggung. Bimbingan private privat personal.",
      level: "Mulai dari Nol (Iqro)",
      duration: "Jadwal Custom",
      features: ["Bisa Jam Malam / Weekend", "Privasi Terjamin", "Kurikulum Disesuaikan"]
    },
    {
      id: 6,
      category: 'privat',
      icon: Users,
      title: "Ngaji Keluarga & Kelompok Kecil",
      desc: "Belajar Al-Qur'an bersama anggota keluarga atau sahabat dalam satu ruangan virtual interaktif.",
      level: "Semua Usia",
      duration: "10 Sesi / Bulan",
      features: ["Hemat Paket Keluarga", "Interaksi Diskusi", "Jadwal Disepakati Bersama"]
    }
  ];

  const filteredPrograms = activeTab === 'semua' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  return (
    <section id="program" className="py-20 bg-[#F9FAF6]">
      <div className="container">
        
        {/* Section Header Row matching Image Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="section-subtag">
              <span>— Program & Layanan</span>
            </div>
            <h2 className="section-title">
              Program Kursus <span className="text-[#EB9414]">Al-Fatih</span>
            </h2>
          </div>

          <a 
            href="#tajwid-interaktif"
            className="btn btn-primary text-sm self-start md:self-auto"
          >
            <span>Lihat Semua Program</span>
            <span className="arrow-badge">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1B4332] text-white shadow-md'
                  : 'bg-[#F3F4ED] text-[#57655E] hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid (Matching reference image soft card style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div 
                key={prog.id}
                className="bg-[#F3F4ED] p-8 rounded-3xl border border-emerald-950/5 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box matching image design */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#1B4332] mb-6 group-hover:bg-[#EB9414] group-hover:text-white transition-colors">
                    <IconComponent size={26} />
                  </div>

                  <span className="inline-block px-3 py-1 bg-white text-[#1B4332] text-xs font-bold rounded-full mb-3 shadow-2xs">
                    {prog.level}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#1A241F] mb-3 group-hover:text-[#1B4332] transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-[#57655E] leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  {/* Program Features checklist */}
                  <div className="space-y-2 mb-8 border-t border-gray-200/60 pt-4">
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1A241F]">
                        <Check size={14} className="text-[#EB9414]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <button
                  onClick={() => onSelectProgram(prog.title)}
                  className="flex items-center gap-2 text-sm font-extrabold text-[#1A241F] group-hover:text-[#EB9414] transition-colors pt-2"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
