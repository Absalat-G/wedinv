import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Menu, X, Sparkles, Send } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';

interface LuxuryNavbarProps {
  onNavigate: (sectionId: string) => void;
  isEnvelopeOpen: boolean;
}

export const LuxuryNavbar: React.FC<LuxuryNavbarProps> = ({ onNavigate, isEnvelopeOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Invitation', id: 'hero-invitation-suite' },
    { label: 'Our Story', id: 'story-section' },
    { label: 'Details', id: 'wedding-details' },
    { label: 'Schedule', id: 'schedule-section' },
    // { label: 'Dress Code', id: 'dress-code-section' },
    { label: 'Gallery', id: 'gallery-section' },
    // { label: 'Registry', id: 'registry-section' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  if (!isEnvelopeOpen && !isScrolled) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-2xl py-3'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* Logo / Monogram */}
        <button
          onClick={() => handleLinkClick('hero-invitation-suite')}
          className="flex items-center gap-2 text-left group"
        >
          <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors">
            {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride}
          </span>
          <span className="hidden md:inline font-cinzel text-[10px] tracking-[0.25em] text-[#C5A059] uppercase pl-2 border-l border-[#D4AF37]/30">
            {WEDDING_CONFIG.date.monthYear} {WEDDING_CONFIG.date.dayNumber}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="font-cinzel text-xs tracking-widest text-stone-300 hover:text-[#D4AF37] transition-colors uppercase py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('rsvp-section')}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 shadow-lg flex items-center gap-1.5 transition-all"
          >
            <Send size={12} />
            <span>RSVP</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0A1931] border border-[#D4AF37]/40 text-[#FAF6EE] hover:text-[#D4AF37]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050B18]/95 backdrop-blur-xl border-b border-[#D4AF37]/40 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="font-cinzel text-sm tracking-widest text-stone-200 hover:text-[#D4AF37] text-left py-2 border-b border-[#D4AF37]/10"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('rsvp-section')}
                className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-widest uppercase shadow-md"
              >
                Kindly RSVP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
