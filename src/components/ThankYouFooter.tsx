import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ChevronUp } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';

// Images
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';
import floralSpray from '../assets/images/blue_floral_spray_1787753700793.png';

export const ThankYouFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="thank-you-footer" className="relative pt-20 pb-16 px-4 sm:px-8 border-t border-[#D4AF37]/30 bg-[#030712] text-center z-20 overflow-hidden">

      {/* Background Floral Spray Corner */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 pointer-events-none opacity-25">
        <img src={floralSpray} alt="Floral ornament" className="w-full h-auto" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">

        {/* Monogram Seal */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden shadow-2xl border-2 border-[#D4AF37] relative">
          <img src={goldSealImg} alt="Gold Wax Seal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center text-[#4A3403] font-cinzel text-xs font-bold">
            <span>{WEDDING_CONFIG.couple.monogram}</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-bold">
            WITH ETERNAL GRATITUDE
          </p>
          <h2 className="font-vibes text-5xl sm:text-7xl text-[#FAF6EE] leading-tight">
            {WEDDING_CONFIG.couple.bride} & {WEDDING_CONFIG.couple.groom}
          </h2>
          <p className="font-serif-luxury italic text-stone-300 text-lg sm:text-xl max-w-xl mx-auto">
            "Thank you for surrounding us with your blessing, prayers, and heartfelt love as we embark on this sacred journey of marriage."
          </p>
        </div>

        <div className="pt-2">
          <span className="font-sans-clean text-xs tracking-widest text-[#C5A059] uppercase px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0A1931]/60">
            {WEDDING_CONFIG.couple.hashtag}
          </span>
        </div>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-2" />

        <div className="flex flex-col items-center justify-center gap-4 text-xs font-sans-clean text-stone-400">
          <p>
            {WEDDING_CONFIG.date.fullDate} · {WEDDING_CONFIG.venue.name}
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#FAF6EE] transition-colors py-2 px-4 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#0A1931]"
          >
            <span>BACK TO TOP</span>
            <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
