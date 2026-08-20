import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ArrowUpRight, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Program Kursus', href: '#program' },
    { name: 'Mengapa Kami', href: '#mengapa-kami' },
    { name: 'Tajwid Interaktif', href: '#tajwid-interaktif' },
    { name: 'Pengajar', href: '#pengajar' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-glass py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* Pill Logo matching reference image */}
        <a href="#beranda" className="flex items-center gap-2 group text-decoration-none">
          <div className="bg-[#1B4332] text-[#EB9414] px-4 py-2 rounded-full flex items-center gap-2 shadow-md transition-transform group-hover:scale-105">
            <div className="w-7 h-7 rounded-full bg-[#EB9414] text-white flex items-center justify-center font-bold text-sm">
              <BookOpen size={16} />
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight">
              Al-Fatih<span className="text-[#EB9414]">.</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-emerald-950/5 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1A241F] font-semibold text-sm hover:text-[#EB9414] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={onOpenTrial}
            className="btn btn-primary text-sm shadow-md"
          >
            <span>Daftar Trial Gratis</span>
            <span className="arrow-badge">
              <ArrowUpRight size={14} />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenTrial}
            className="btn btn-gold text-xs px-3 py-2"
          >
            Trial Gratis
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-white border border-gray-200 text-[#1B4332] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-white border-b border-gray-200 shadow-xl px-6 py-6 transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1A241F] font-bold text-base hover:text-[#EB9414] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles size={16} className="text-[#EB9414]" />
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="btn btn-primary w-full py-3 text-center justify-center"
              >
                <span>Daftar Trial Gratis</span>
                <span className="arrow-badge">
                  <ArrowUpRight size={16} />
                </span>
              </button>
              
              <a 
                href="https://wa.me/6285815455474" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline w-full py-3 text-center justify-center"
              >
                <PhoneCall size={16} />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
