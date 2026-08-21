import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const tutors = [
    {
      name: "Ustadz Afif Ma'shum, M.Pd",
      role: "Pengajar Tahsin & Fashohah",
      exp: "12+ Tahun Pengalaman",
      spec: "Sanad KH. Dahlan Salim Zarkasy & KH. Imam Syafi'i, S.Pd., M.M",
      img: "/assets/tutor_male.jpg"
    },
    {
      name: "Ustadzah Iva Makhmudah, S.Pd",
      role: "Spesialis Ngaji Anak & Iqro",
      exp: "8+ Tahun Pengalaman",
      spec: "Sanad Hj. Umi Salamah Yahya & KH. Arwani Amin Kudus",
      img: "/assets/tutor_female.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "Alhamdulillah, anak saya usia 7 tahun sekarang membaca Al-Qur'an dengan sangat lancar dan bersemangat. Ustadzah mengajarnya sabar sekali!",
      author: "Ibu Rahmawati",
      role: "Orang Tua Santri (Kelas Anak)",
      program: "Ngaji Ceria Anak",
      rating: 5
    },
    {
      quote: "Dulu saya malu belajar ngaji di usia 35 tahun karena takut salah. Di Al-Fatih privat 1-on-1, Ustadz membimbing dari awal tanpa dihakimi.",
      author: "Pak Hendra Wijaya",
      role: "Karyawan Swasta",
      program: "Privat Dewasa dari Nol",
      rating: 5
    },
    {
      quote: "Jadwal belajar sangat flexibel mengikuti waktu luang kuliah saya. Bacaan tajwid & makhraj saya berkembang pesat hanya dalam 2 bulan.",
      author: "Aisyah Nurul",
      role: "Mahasiswi",
      program: "Tahsin & Tajwid Intensif",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-[#F9FAF6]">
      <div className="container">
        
        {/* Tutors Section Header */}
        <div id="pengajar" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-subtag">
                <span>— Pengajar Bersertifikat</span>
              </div>
              <h2 className="section-title">
                Ustadz & Ustadzah <span className="text-[#EB9414]">Al-Fatih</span>
              </h2>
            </div>
            <p className="text-sm text-[#57655E] max-w-md">
              Seluruh pengajar sudah melalui seleksi dan mempunyai syahadah tahsin dalam membaca Al-Qur'an mujawwad.
            </p>
          </div>

          {/* Tutors Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tutors.map((tutor, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border border-emerald-950/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-[#EB9414] bg-[#EB9414] shadow-md group-hover:scale-105 transition-transform flex items-center justify-center p-1">
                  <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover object-center rounded-full" />
                </div>

                <span className="px-3 py-1 bg-[#FFF5E5] text-[#EB9414] text-xs font-bold rounded-full mb-2">
                  {tutor.exp}
                </span>

                <h3 className="text-lg font-extrabold text-[#1A241F] mb-1">
                  {tutor.name}
                </h3>

                <p className="text-xs text-[#57655E] font-semibold mb-3">
                  {tutor.role}
                </p>

                <div className="text-[11px] text-[#1B4332] bg-[#E8F5E9] px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#EB9414]" />
                  <span>{tutor.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-subtag justify-center">
              <span>— Kisah Sukses Santri</span>
            </div>
            <h2 className="section-title">
              Apa Kata <span className="text-[#EB9414]">Santri & Orang Tua?</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <div 
                key={idx}
                className="bg-[#F3F4ED] p-8 rounded-3xl border border-emerald-950/5 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote size={36} className="text-[#EB9414] opacity-20 absolute top-6 right-6" />
                
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#EB9414] mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#EB9414]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#1A241F] font-medium leading-relaxed mb-6 italic">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="border-t border-gray-200/80 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1A241F]">
                      {testi.author}
                    </h4>
                    <p className="text-xs text-[#57655E]">
                      {testi.role}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold text-[#1B4332] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                    {testi.program}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
