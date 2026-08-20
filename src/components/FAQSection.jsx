import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Bagaimana sistem pelaksanaan kelas ngaji online?",
      a: "Kelas dilaksanakan secara interaktif tatap muka 1-on-1 melalui Zoom atau Google Meet. Pengajar dan santri dapat saling menyimak bacaan Al-Qur'an secara langsung dengan modul digital."
    },
    {
      q: "Apakah jadwal belajar bisa disesuaikan dengan aktivitas saya?",
      a: "Sangat bisa! Anda bebas menentukan hari dan jam belajar (Pagi, Siang, Sore, maupun Malam). Jika ada halangan, jadwal bisa di-reschedule 24 jam sebelum kelas."
    },
    {
      q: "Saya sama sekali belum bisa membaca Al-Qur'an, apakah bisa mendaftar?",
      a: "Tentu saja! Kami memiliki program Privat Dewasa dari Nol yang membimbing pembacaan huruf Hijaiyah dan Iqro secara bertahap dan ramah tanpa rasa canggung."
    },
    {
      q: "Berapa lama durasi per satu kali pertemuan kelas?",
      a: "Durasi standar kelas privat adalah 45 - 60 menit per sesi, yang dinilai paling efektif untuk fokus bimbingan makhraj dan hafalan."
    },
    {
      q: "Bagaimana cara mendaftar trial gratis 1-on-1?",
      a: "Klik tombol 'Daftar Trial Gratis' pada website ini, isi formulir singkat nama & nomor WhatsApp, lalu tim kami akan menghubungi Anda untuk konfirmasi jadwal trial pilihan Anda."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-emerald-950/5">
      <div className="container max-w-4xl">
        
        <div className="text-center mb-12">
          <div className="section-subtag justify-center">
            <span>— Pertanyaan Populer</span>
          </div>
          <h2 className="section-title">
            Pertanyaan Yang Sering <span className="text-[#EB9414]">Diajukan (FAQ)</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === idx 
                  ? 'bg-[#F3F4ED] border-[#EB9414]' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-[#1A241F] text-base sm:text-lg"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className={openIndex === idx ? "text-[#EB9414]" : "text-gray-400"} />
                  <span>{faq.q}</span>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform text-[#1B4332] ${openIndex === idx ? 'rotate-180 text-[#EB9414]' : ''}`} 
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-sm text-[#57655E] leading-relaxed border-t border-gray-200/60 mt-2">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
