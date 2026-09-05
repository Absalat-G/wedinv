import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Sparkles, Navigation, Car, Heart, ExternalLink, Compass, Church, Crown, Shield } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

// Images
import venueEstate from '../assets/images/venue_estate_1787753753430.png';
import cathedralImg from '../assets/images/ethiopian_orthodox_church_1787811623729.png';
import goldCrossImg from '../assets/images/ethiopian_gold_cross_1787811589160.jpg';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';

export const WeddingDetails: React.FC = () => {
  return (
    <section id="wedding-details" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto z-20">

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full overflow-hidden border border-[#D4AF37]">
            <img src={goldCrossImg} alt="Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase font-semibold">
            Sacred Sacrament & Celebration
          </span>
          <div className="w-4 h-4 rounded-full overflow-hidden border border-[#D4AF37]">
            <img src={goldCrossImg} alt="Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Venues & <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">Celebration</span> Details
        </h2>

        <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mt-3">
          "From the sacred chants of the Ethiopian Orthodox Cathedral to the joyous royal banquet under crystal chandeliers."
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Dual Venues Split Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

        {/* Venue 1: Church Monastery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-[#0C1B36] to-[#060F20] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
        >
          <div>
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-900">
              <img
                src={cathedralImg}
                alt={WEDDING_CONFIG.churchVenue.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B36] via-[#0C1B36]/30 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B18]/85 border border-[#D4AF37] backdrop-blur text-[#FAF6EE] text-xs font-cinzel tracking-wider">
                <Church size={14} className="text-[#D4AF37]" />
                <span>SACRED MATRIMONY</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                  PART ONE · 9:00 ሌሊት
                </span>
                <span className="font-cinzel text-xs text-[#FAF6EE]/80">
                  {WEDDING_CONFIG.date.dayName}, {WEDDING_CONFIG.date.fullDate}
                </span>
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAF6EE] leading-snug">
                {WEDDING_CONFIG.churchVenue.name}
              </h3>

              <p className="font-sans-clean text-xs sm:text-sm text-stone-300 flex items-start gap-2">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{WEDDING_CONFIG.churchVenue.fullAddress}</span>
              </p>

              {/* <div className="p-4 rounded-xl bg-[#071329] border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#F3E5AB] font-cinzel font-semibold">
                  <Shield size={14} className="text-[#D4AF37]" />
                  <span>Sacred Crowning Etiquette:</span>
                </div>
                <p className="text-stone-300 font-sans-clean leading-relaxed">
                  {WEDDING_CONFIG.churchVenue.note}
                </p>
              </div> */}
            </div>
          </div>

          {/* <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4AF37]/20 mt-4">
            <span className="font-serif-luxury italic text-xs text-stone-400">
              Priestly Crowning Blessing & Liturgical Chants
            </span>
            <a
              href={WEDDING_CONFIG.churchVenue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 shadow-md flex items-center gap-1.5 transition-all"
            >
              <Navigation size={13} />
              <span>Church Map</span>
              <ExternalLink size={11} />
            </a>
          </div> */}
        </motion.div>

        {/* Venue 2: The Rosewood Manor & Royal Ballroom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-b from-[#0C1B36] to-[#060F20] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
        >
          <div>
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-900">
              <img
                src={venueEstate}
                alt="The Rosewood Manor & Royal Ballroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B36] via-[#0C1B36]/30 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B18]/85 border border-[#D4AF37] backdrop-blur text-[#FAF6EE] text-xs font-cinzel tracking-wider">
                <Crown size={14} className="text-[#D4AF37]" />
                <span>BREAKFAST RECEPTION</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                  PART TWO · 4:00 ጠዋት -  7:00 ከሰዓት
                </span>
                <span className="font-cinzel text-xs text-[#FAF6EE]/80">
                  {WEDDING_CONFIG.date.dayName}, {WEDDING_CONFIG.date.fullDate}
                </span>
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAF6EE]">
                {WEDDING_CONFIG.venue.name}
              </h3>

              <p className="font-sans-clean text-xs sm:text-sm text-stone-300 flex items-start gap-2">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{WEDDING_CONFIG.venue.fullAddress}</span>
              </p>

              {/* <div className="p-4 rounded-xl bg-[#071329] border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#F3E5AB] font-cinzel font-semibold">
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <span>Breakfast Reception Program:</span>
                </div>
                <p className="text-stone-300 font-sans-clean leading-relaxed">
                  Join us for a beautiful morning-style feast, traditional coffee, and heartfelt blessings in the church hall as we break bread together.
                </p>
              </div> */}
            </div>
          </div>

          {/*  */}
        </motion.div>

      </div>
    </section>
  );
};
