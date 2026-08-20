import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenTrial }) {
  return (
    <footer className="bg-[#123023] text-white pt-16 pb-8 border-t border-emerald-900/30">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#1B4332] text-[#EB9414] px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-md">
                <div className="w-7 h-7 rounded-full bg-[#EB9414] text-white flex items-center justify-center font-bold text-sm">
                  <BookOpen size={16} />
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  Al-Fatih<span className="text-[#EB9414]">.</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Platform kursus ngaji dan belajar Al-Qur'an online terpercaya di Indonesia. Membantu setiap muslim membaca Al-Qur'an secara fasih dan benar sesuai kaidah tajwid bersanad.
            </p>

            <div className="flex items-center gap-3 text-white">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB9414] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB9414] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EB9414] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Program Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-[#EB9414] uppercase tracking-wider mb-4">
              Program Belajar
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#program" className="hover:text-white transition-colors">Tahsin & Makhrajul Huruf</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Ngaji Ceria Anak (Iqro)</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Privat Dewasa dari Nol</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Tahfizh & Hafalan Al-Qur'an</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Bahasa Arab Qur'ani</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-[#EB9414] uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#mengapa-kami" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#tajwid-interaktif" className="hover:text-white transition-colors">Tajwid Interaktif</a></li>
              <li><a href="#pengajar" className="hover:text-white transition-colors">Tim Pengajar</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni Santri</a></li>
            </ul>
          </div>

          {/* Col 4: Contact CTA */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-sm font-extrabold text-[#EB9414] uppercase tracking-wider mb-4">
              Hubungi Kami
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300 mb-6">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#EB9414]" />
                <span>+62 858-1545-5474</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#EB9414]" />
                <span>afifmashum61@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[#EB9414]" />
                <span>Plandi Jombang, Jawa Timur</span>
              </div>
            </div>

            <button
              onClick={onOpenTrial}
              className="btn btn-gold text-xs px-5 py-2.5 w-full justify-center"
            >
              <span>Jadwal Trial Gratis</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Al-Fatih Academy. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
