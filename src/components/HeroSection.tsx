import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles, ChevronDown, Clock, Heart, Send, FileText, Crown, Church } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

// Image references
import blueRosesBg from '../assets/images/blue_roses_bg_1787753639132.jpg';
import floralSpray from '../assets/images/blue_floral_spray_1787753700793.png';
import ethiopianCoupleImg from '../assets/images/4J0A5154.JPG';
import goldCrossImg from '../assets/images/ethiopian_gold_cross_1787811589160.jpg';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onResetEnvelope?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onResetEnvelope }) => {
  // Countdown Timer calculation to wedding date
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(WEDDING_CONFIG.date.isoDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-invitation-suite"
      className="relative min-h-screen w-full py-16 sm:py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(5, 11, 24, 0.75) 0%, rgba(3, 7, 18, 0.96) 100%), url(${blueRosesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Re-seal envelope button top right */}
      {onResetEnvelope && (
        <div className="absolute top-6 right-6 z-40">
          <button
            onClick={onResetEnvelope}
            className="text-xs font-sans-clean tracking-wider text-[#FAF6EE]/70 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 bg-[#050B18]/70 backdrop-blur px-3 py-1.5 rounded-full border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
            title="View envelope opening again"
          >
            <span>✉️ View Envelope</span>
          </button>
        </div>
      )}

      {/* Main Wedding Stationery Suite Spread */}
      <div className="relative w-full max-w-5xl mx-auto z-20">

        {/* Top Floating Header with Ge'ez Scripture */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          {/* Ge'ez & English Scripture Banner */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0A1931]/85 border border-[#D4AF37]/45 backdrop-blur mb-4 shadow-xl">
            <div className="w-5 h-5 rounded-full overflow-hidden border border-[#D4AF37] shrink-0">
              <img src={goldCrossImg} alt="Meskel Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#F3E5AB] uppercase font-semibold">
              {WEDDING_CONFIG.couple.amharicBlessing}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#FAF6EE] font-light tracking-wide">
            The Holy Crowning of <br className="sm:hidden" />
            <span className="font-vibes text-4xl sm:text-7xl lg:text-8xl text-gold-light mx-2">
              {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride}
            </span>
          </h1>

          <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mt-2">
            {WEDDING_CONFIG.couple.amharicBlessingTranslation}
          </p>

          <p className="font-cinzel text-[11px] tracking-[0.25em] text-[#C5A059] uppercase mt-1">
            ETHIOPIAN ORTHODOX TEWAHEDO SACRAMENT OF MATRIMONY
          </p>
        </motion.div>

        {/* Stationery Cards Collage Grid (Layered Composition from reference) */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center justify-center my-6">

          {/* Card 1: Midnight Navy Gold Foil Wedding Card (Left side) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -1.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative bg-gradient-to-br from-[#091730] via-[#050C1B] to-[#02050D] text-[#FAF6EE] rounded-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/50 gold-shimmer-card text-center"
          >
            {/* Corner floral spray embellishments */}
            <div className="absolute -top-6 -left-6 w-24 sm:w-32 pointer-events-none opacity-90 drop-shadow-xl">
              <img
                src={floralSpray}
                alt="Floral Spray"
                className="w-full h-auto -scale-x-100 rotate-45"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 pointer-events-none opacity-90 drop-shadow-xl">
              <img
                src={floralSpray}
                alt="Floral Spray"
                className="w-full h-auto -rotate-45"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Inner Double Gold Frame */}
            <div className="absolute inset-3.5 border border-[#D4AF37]/40 rounded-lg pointer-events-none" />
            <div className="absolute inset-5 border border-[#D4AF37]/20 rounded-md pointer-events-none" />

            <div className="relative z-10 space-y-4 py-4">
              <div className="w-12 h-12 mx-auto rounded-full overflow-hidden border border-[#D4AF37] shadow-lg">
                <img src={goldCrossImg} alt="Ethiopian Orthodox Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                SACRED CROWNING SERVICE ·
              </p>
              <p className="font-cinzel text-[9px] sm:text-[11px] tracking-[0.2em] text-[#C5A059] uppercase -mt-2">
                TOGETHER WITH THEIR FAMILIES
              </p>

              <div className="py-2">
                <h2 className="font-vibes text-5xl sm:text-7xl text-gold-gradient leading-tight">
                  {WEDDING_CONFIG.couple.groom}
                </h2>
                <span className="font-serif-luxury font-light text-2xl sm:text-4xl text-[#E8CE7E] block -my-2">
                  &
                </span>
                <h2 className="font-vibes text-5xl sm:text-7xl text-gold-gradient leading-tight">
                  {WEDDING_CONFIG.couple.bride}
                </h2>
              </div>

              <div className="w-16 h-[1px] bg-[#D4AF37]/60 mx-auto my-2" />

              <p className="font-serif-luxury text-sm sm:text-base text-stone-300 italic">
                Request the honor of your presence and prayers as they are crowned King & Queen under God's holy covenant.
              </p>

              <div className="pt-2 text-xs font-cinzel text-[#F3E5AB]/90 space-y-1">
                <p className="tracking-wider leading-relaxed px-2">{WEDDING_CONFIG.churchVenue.name}</p>
                <p className="text-[10px] text-stone-400 font-sans-clean">
                  Wedding Liturgy · Sunday, Sept 13, 2026 (መስከረም 3, 2019)
                </p>
                <p className="text-[10px] text-[#D4AF37] font-cinzel">
                  Breakfast Reception (ቁርስ) · Sunday, Sept 13, 2026 (መስከረም 3, 2019)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Elegant Ivory Arch Invitation Card (Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 1.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-[#F5EEDB] text-[#050B18] rounded-t-[140px] rounded-b-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/60 text-center"
          >
            {/* Gold foil arch frame */}
            <div className="absolute inset-3 border border-[#D4AF37]/50 rounded-t-[130px] rounded-b-lg pointer-events-none" />
            <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-t-[120px] rounded-b-md pointer-events-none" />

            {/* Floral Spray Accent along bottom */}
            <div className="absolute -bottom-8 -left-8 w-28 sm:w-36 pointer-events-none opacity-90 drop-shadow-xl z-20">
              <img
                src={floralSpray}
                alt="Floral Spray"
                className="w-full h-auto rotate-12"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="relative z-10 space-y-4 sm:space-y-5 py-4">
              <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-tr from-[#9B720D] to-[#F3E5AB] flex items-center justify-center text-[#050B18] shadow-md">
                <Crown size={18} className="text-[#050B18]" />
              </div>

              <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#634703] uppercase font-bold">
                {WEDDING_CONFIG.date.dayName}
              </p>

              {/* Ethiopian Calendar */}
              <div className="py-1 pb-0">
                <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#AA7C11] uppercase block">
                  Ethiopian Calendar
                </span>
                <span className="font-vibes text-3xl sm:text-4xl text-[#634703] block leading-tight">
                  መስከረም 3, 2019
                </span>
              </div>

              <div className="w-10 h-[1px] bg-[#D4AF37]/50 mx-auto my-1.5" />

              {/* Big Day Number (Gregorian) */}
              <div className="py-1 pt-0">
                <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#AA7C11] uppercase block">
                  Gregorian Calendar
                </span>
                <span className="font-serif-luxury text-5xl sm:text-7xl font-normal text-[#0A1931] tracking-tight block">
                  {WEDDING_CONFIG.date.dayNumber}
                </span>
                <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-[#634703] font-semibold block -mt-2">
                  {WEDDING_CONFIG.date.monthYear}
                </span>
              </div>
              <div className="py-1">
                <span className="font-serif-luxury text-6xl sm:text-8xl font-normal text-[#0A1931] tracking-tight block">
                  {WEDDING_CONFIG.date.dayNumber}
                </span>
                <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-[#634703] font-semibold block -mt-2">
                  {WEDDING_CONFIG.date.monthYear}
                </span>
              </div>
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-2" />

              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-serif-luxury font-bold text-sm sm:text-base text-[#0A1931]">
                    ሌሊት 9:00  · የጋብቻ ሥነ-ስርዓት
                  </p>
                  <p className="font-sans-clean text-[11px] text-stone-600 leading-snug px-2">
                    {WEDDING_CONFIG.churchVenue.name}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-stone-300 mx-auto" />
                <div>
                  <p className="font-serif-luxury font-bold text-sm sm:text-base text-[#0A1931]">
                    ጠዋት 4፡00  · የቁርስ መርሃግብር
                  </p>
                  <p className="font-sans-clean text-[11px] text-stone-600">
                    {WEDDING_CONFIG.venue.name}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-[#D4AF37]/40 mx-auto" />
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0A1931]/10 text-[#634703] font-cinzel text-[10px] font-bold tracking-wider">
                    BREAKFAST (ቁርስ): Sunday, Sept 13, 2026 (መስከረም 3, 2019)
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <button
                  id="hero-view-location-btn"
                  onClick={() => onNavigate('wedding-details')}
                  className="px-4 py-2 rounded-full bg-[#0A1931] text-[#FAF6EE] font-cinzel text-xs tracking-wider hover:bg-[#1E3A8A] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <MapPin size={14} className="text-[#D4AF37]" />
                  <span>Venues & Etiquette</span>
                </button>
                <button
                  id="hero-rsvp-btn"
                  onClick={() => onNavigate('rsvp-section')}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Send size={14} />
                  <span>Kindly RSVP</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Stationery Accent Cards (The Details Medallion & RSVP Envelope & Ethiopian Polaroid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 z-20">

          {/* Item 1: Ornate Circular Medallion "THE Details" */}
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            onClick={() => onNavigate('wedding-details')}
            className="cursor-pointer bg-[#0A1931]/90 backdrop-blur border border-[#D4AF37]/50 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center group hover:border-[#D4AF37] transition-all"
          >
            <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-[#D4AF37] p-1 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#122547] to-[#060F1E] flex flex-col items-center justify-center text-center">
                <span className="font-cinzel text-[8px] tracking-widest text-[#D4AF37]">THE</span>
                <span className="font-vibes text-2xl text-gold-gradient -mt-1">Details</span>
              </div>
            </div>
            <h3 className="font-serif-luxury text-lg text-[#FAF6EE] font-medium">
              Cathedral & Breakfast
            </h3>
            <p className="font-sans-clean text-xs text-stone-400 mt-1">
              Breakfast & Map Directions
            </p>
            <span className="mt-3 font-cinzel text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase group-hover:underline">
              VIEW EVENT DETAILS →
            </span>
          </motion.div>

          {/* Item 2: Ivory RSVP Envelope Card */}
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            onClick={() => onNavigate('rsvp-section')}
            className="cursor-pointer bg-[#FAF6EE] text-[#050B18] rounded-2xl p-6 shadow-xl border border-[#D4AF37]/50 flex flex-col items-center justify-center text-center group hover:border-[#D4AF37] transition-all relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-gold-seal shadow-md flex items-center justify-center mb-3 border border-[#F3E5AB]/40">
              <span className="font-cinzel text-[10px] font-bold text-[#4A3403]">RSVP</span>
            </div>
            <h3 className="font-vibes text-3xl text-[#0A1931]">
              Kindly RSVP
            </h3>
            <p className="font-sans-clean text-xs text-stone-600 mt-0.5">
              Breakfast & Traditional Feast Selection
            </p>
            <span className="mt-3 font-cinzel text-[10px] tracking-[0.2em] text-[#8E6A12] uppercase font-bold group-hover:underline">
              SUBMIT RSVP →
            </span>
          </motion.div>

          {/* Item 3: Couple in Traditional Kaba Cape Polaroid Photo */}
          <motion.div
            whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
            onClick={() => onNavigate('story-section')}
            className="cursor-pointer bg-[#FAF6EE] text-[#050B18] rounded-xl p-3 pb-4 shadow-xl border border-[#D4AF37]/40 flex flex-col items-center text-center group transition-all transform rotate-1"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden shadow-md z-10 border border-[#D4AF37]">
              <img src={goldSealImg} alt="Wax seal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 mt-2 mb-2">
              <img
                src={ethiopianCoupleImg}
                alt={`${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride} in Royal Kaba`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-script text-2xl text-[#0A1931]">
              Our Sacred Union
            </p>
            <span className="font-cinzel text-[9px] tracking-[0.2em] text-[#8E6A12] uppercase font-semibold">
              READ OUR STORY & BLESSINGS →
            </span>
          </motion.div>
        </div>

        {/* Live Countdown Timer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#081326]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-[#D4AF37]">
            <Clock size={16} />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#F3E5AB]">
              COUNTDOWN TO OUR SACRED CROWNING
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-xl mx-auto">
            {[
              { label: 'DAYS', val: timeLeft.days },
              { label: 'HOURS', val: timeLeft.hours },
              { label: 'MINUTES', val: timeLeft.minutes },
              { label: 'SECONDS', val: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#050B18] rounded-xl p-3 sm:p-4 border border-[#D4AF37]/30 shadow-inner flex flex-col items-center"
              >
                <span className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-gold-light">
                  {String(item.val).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[9px] sm:text-xs tracking-widest text-stone-400 mt-1 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Calendar Export Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122547] text-[#FAF6EE] text-xs font-cinzel tracking-wider border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#1A3464] transition-all"
            >
              <Calendar size={14} className="text-[#D4AF37]" />
              <span>Google Calendar</span>
            </a>
            <button
              onClick={downloadIcsFile}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122547] text-[#FAF6EE] text-xs font-cinzel tracking-wider border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#1A3464] transition-all"
            >
              <FileText size={14} className="text-[#D4AF37]" />
              <span>Apple / Outlook (.ics)</span>
            </button>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('story-section')}
            className="text-stone-400 hover:text-[#D4AF37] transition-colors inline-flex flex-col items-center gap-1 font-cinzel text-xs tracking-widest uppercase"
          >
            <span>DISCOVER OUR STORY</span>
            <ChevronDown size={20} className="animate-bounce text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
