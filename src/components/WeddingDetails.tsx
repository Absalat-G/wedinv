import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Sparkles, Navigation, Car, Heart, ExternalLink, Compass, Church, Crown, Shield } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

// Images
import venueEstate from '../assets/images/venue_estate_1787753753430.jpg';
import cathedralImg from '../assets/images/ethiopian_orthodox_church_1787811623729.jpg';
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
                  PART ONE · 9:00 ለሊት
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

              <div className="p-4 rounded-xl bg-[#071329] border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#F3E5AB] font-cinzel font-semibold">
                  <Shield size={14} className="text-[#D4AF37]" />
                  <span>Sacred Crowning Etiquette:</span>
                </div>
                <p className="text-stone-300 font-sans-clean leading-relaxed">
                  {WEDDING_CONFIG.churchVenue.note}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4AF37]/20 mt-4">
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
          </div>
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
                  PART TWO · 4:30 PM TO 7:00 PM
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

              <div className="p-4 rounded-xl bg-[#071329] border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#F3E5AB] font-cinzel font-semibold">
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <span>Breakfast Reception Program:</span>
                </div>
                <p className="text-stone-300 font-sans-clean leading-relaxed">
                  Join us for a beautiful morning-style feast, traditional coffee, and heartfelt blessings in the church hall as we break bread together.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4AF37]/20 mt-4">
            <span className="font-serif-luxury italic text-xs text-stone-400">
              Complimentary White Glove Valet Provided
            </span>
            <a
              href={WEDDING_CONFIG.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 shadow-md flex items-center gap-1.5 transition-all"
            >
              <Navigation size={13} />
              <span>Reception Map</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Part Three: Highlight Banner for Traditional Melse Celebration (Sept 20, 2026) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0E2246] via-[#122A54] to-[#0A1931] border border-[#D4AF37] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FAF6EE] text-xs font-cinzel tracking-widest font-semibold">
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span>TRADITIONAL BREAKFAST FEAST · የቁርስ ሥነ-ሥርዓት</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FAF6EE]">
              {WEDDING_CONFIG.melsVenue.eventTitle}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-cinzel text-[#F3E5AB]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#D4AF37]" />
                {WEDDING_CONFIG.melsVenue.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#D4AF37]" />
                {WEDDING_CONFIG.melsVenue.time}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#D4AF37]" />
                {WEDDING_CONFIG.melsVenue.name}
              </span>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-stone-300 max-w-3xl pt-1">
              {WEDDING_CONFIG.melsVenue.note}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={WEDDING_CONFIG.melsVenue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 shadow-lg flex items-center gap-2 transition-all whitespace-nowrap"
            >
              <Navigation size={14} />
              <span>Breakfast Directions</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Guest Logistics & Parking Amenities Box */}
      <div className="bg-[#081429]/90 backdrop-blur-md rounded-xl p-6 border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#122547] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
            <Car size={22} />
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#F3E5AB] uppercase">
              Shuttle & Valet Transportation
            </h4>
            <p className="font-sans-clean text-xs text-stone-300 mt-1 max-w-xl">
              {WEDDING_CONFIG.venue.valetNote} Dedicated private luxury motorcoaches will also transport guests from the church to The Rosewood Manor following the holy crowning liturgy.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={downloadIcsFile}
            className="px-4 py-2 rounded-full bg-[#122547] border border-[#D4AF37]/40 text-[#FAF6EE] font-cinzel text-xs tracking-wider hover:bg-[#1E3A8A] transition-all flex items-center gap-1.5"
          >
            <Calendar size={14} className="text-[#D4AF37]" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>

    </section>
  );
};
