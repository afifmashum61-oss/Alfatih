import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, Calendar, User, Phone } from 'lucide-react';

export default function TrialModal({ isOpen, onClose, selectedProgramDefault }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: selectedProgramDefault || 'Tahsin & Makhrajul Huruf',
    time: 'Malam (19.30 - 21.00 WIB)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameEnc = encodeURIComponent(formData.name);
    const phoneEnc = encodeURIComponent(formData.phone);
    const progEnc = encodeURIComponent(formData.program);
    const timeEnc = encodeURIComponent(formData.time);
    
    const text = `Assalamu'alaikum Al-Fatih Academy,%0A%0ASaya ingin mendaftar *Trial Gratis 1-on-1*:%0A- *Nama*: ${nameEnc}%0A- *No WA*: ${phoneEnc}%0A- *Program*: ${progEnc}%0A- *Pilihan Waktu*: ${timeEnc}`;
    const waUrl = `https://api.whatsapp.com/send?phone=6285815455474&text=${text}`;
    
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-emerald-950/10 transform transition-all">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#EB9414] font-extrabold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={16} />
              <span>Pendaftaran Trial Gratis</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1A241F] mb-2">
              Jadwalkan <span className="text-[#EB9414]">Sesi Trial 1-on-1</span>
            </h3>

            <p className="text-xs text-[#57655E] mb-6">
              Cobalah pengalaman mengaji interaktif bersama Ustadz/Ustadzah bersanad selama 30 menit tanpa biaya!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-[#1A241F] mb-1.5">
                  Nama Lengkap Santri / Orang Tua
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ahmad Abdullah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1A241F] mb-1.5">
                  Nomor WhatsApp (Aktif)
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A241F] mb-1.5">
                    Program Pilihan
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200 text-xs font-semibold focus:border-[#1B4332] outline-none"
                  >
                    <option value="Tahsin & Makhrajul Huruf">Tahsin & Tajwid</option>
                    <option value="Ngaji Ceria Anak (Iqro)">Ngaji Anak (Iqro)</option>
                    <option value="Privat Dewasa dari Nol">Privat Dewasa (Nol)</option>
                    <option value="Tahfizh & Hafalan">Tahfizh 30 Juz</option>
                    <option value="Bahasa Arab Qur'an">Bahasa Arab</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A241F] mb-1.5">
                    Waktu Belajar
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-gray-200 text-xs font-semibold focus:border-[#1B4332] outline-none"
                  >
                    <option value="Ba'da Maghrib s/d Selesai">Ba'da Maghrib s/d Selesai</option>
                    <option value="Pagi (08.00 - 11.00 WIB)">Pagi (08.00 - 11.00)</option>
                    <option value="Siang (13.00 - 15.00 WIB)">Siang (13.00 - 15.00)</option>
                    <option value="Sore (16.00 - 17.30 WIB)">Sore (16.00 - 17.30)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-3.5 text-base shadow-lg justify-center mt-2"
              >
                <span>Kirim & Hubungi via WhatsApp</span>
                <Send size={16} />
              </button>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#1B4332] flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-extrabold text-[#1A241F] mb-2">
              Pendaftaran Berhasil!
            </h3>
            <p className="text-xs text-[#57655E]">
              Mengalihkan Anda ke WhatsApp Admin Al-Fatih untuk konfirmasi jadwal...
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
