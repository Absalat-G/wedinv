import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import goldCrossImg from '../assets/images/ethiopian_gold_cross_1787811589160.jpg';

export const LocationSection: React.FC = () => {
  return (
    <section id="location-section" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto z-20">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Getting There
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">Location</span>
        </h2>


        {/* Decorative divider with Cross */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-4 h-4 rounded-full overflow-hidden border border-[#D4AF37]">
            <img src={goldCrossImg} alt="Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Church Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-[#0C1B36] to-[#060F20] rounded-2xl p-8 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col h-full"
        >
          <div className="flex-grow">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#FAF6EE] mb-4">
              Church Ceremony
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-cinzel text-sm text-[#D4AF37] font-semibold mb-1">Venue</h4>
                <p className="font-sans-clean text-stone-300">
                  {WEDDING_CONFIG.churchVenue.name}
                </p>
              </div>
              <div>
                <h4 className="font-cinzel text-sm text-[#D4AF37] font-semibold mb-1">Address</h4>
                <p className="font-sans-clean text-stone-300 flex items-start gap-2">
                  <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{WEDDING_CONFIG.churchVenue.fullAddress}</span>
                </p>
              </div>

            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
            <a
              href={WEDDING_CONFIG.churchVenue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-sm font-bold tracking-wider hover:brightness-110 shadow-md transition-all"
            >
              <Navigation size={16} />
              <span>Get Directions to Church</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};
