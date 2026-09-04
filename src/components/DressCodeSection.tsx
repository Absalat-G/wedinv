import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shirt, Sparkle, Check } from 'lucide-react';
import { DRESS_CODE_INFO } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dress-code-section" className="relative py-24 px-4 sm:px-8 max-w-5xl mx-auto z-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Guest Attire & Elegance
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Dress <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">Code</span>
        </h2>

        <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
          {DRESS_CODE_INFO.title}
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#FAF6EE] text-[#050B18] rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#D4AF37]/50 relative overflow-hidden"
      >
        {/* Inner border */}
        <div className="absolute inset-3 border border-[#D4AF37]/30 rounded-2xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <p className="font-serif-luxury text-lg sm:text-xl text-[#1A263D] leading-relaxed">
            {DRESS_CODE_INFO.description}
          </p>
        </div>

        {/* Color Swatches Palette */}
        <div className="relative z-10 mb-12">
          <div className="text-center mb-4">
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#634703] uppercase font-bold">
              SUGGESTED COLOR PALETTE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {DRESS_CODE_INFO.colors.map((color, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 ${color.border} transform transition-transform group-hover:scale-110 flex items-center justify-center`}
                  style={{ backgroundColor: color.hex }}
                >
                  <Sparkle size={14} className="text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="font-cinzel text-[10px] sm:text-xs text-[#0A1931] tracking-wider text-center font-medium">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Attire Columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#D4AF37]/30">
          {DRESS_CODE_INFO.guidelines.map((guide, idx) => (
            <div key={idx} className="bg-[#FAF6EE] border border-[#D4AF37]/40 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0A1931] text-[#D4AF37] flex items-center justify-center">
                  <Check size={16} />
                </div>
                <h4 className="font-cinzel text-sm font-bold tracking-widest text-[#0A1931] uppercase">
                  For {guide.target}
                </h4>
              </div>
              <p className="font-sans-clean text-xs sm:text-sm text-stone-600 leading-relaxed pl-10">
                {guide.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center mt-8 pt-4">
          <p className="font-serif-luxury italic text-stone-500 text-xs sm:text-sm">
            Kindly note: We politely request that guests refrain from wearing solid white or ivory dresses.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
