import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Crown } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';

// Image references
import blueRosesBg from '../assets/images/blue_roses_bg_1787753639132.jpg';
import floralSpray from '../assets/images/blue_floral_spray_1787753700793.png';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';
import ethiopianCrossImg from '../assets/images/ethiopian_gold_cross_1787811589160.jpg';

interface OpeningEnvelopeProps {
  isOpened: boolean;
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ isOpened, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openingState, setOpeningState] = useState(isOpened ? 'opened' : 'closed');

  const handleEnvelopeClick = () => {
    if (openingState !== 'closed') return;

    // Trigger celebratory gold and sapphire confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FAF6EE', '#1E3A8A', '#F3E5AB', '#0A1931'],
      ticks: 200,
    });

    setOpeningState('opening');
    setTimeout(() => {
      setOpeningState('opened');
      onOpen();
    }, 6000); // Increased from 3000ms to 6000ms to let user see the opened envelope and letter before transitioning
  };

  return (
    <div
      id="opening-envelope-section"
      className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(5, 11, 24, 0.75) 0%, rgba(5, 11, 24, 0.95) 100%), url(${blueRosesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative ambient gold glow background */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none -top-20 -left-20" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/20 blur-[130px] pointer-events-none -bottom-20 -right-20" />

      {/* Main Container framed like the luxury invitation suite */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#050B18] rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-[#D4AF37]/40 p-6 sm:p-12 z-30 overflow-hidden text-center"
      >
        {/* Subtle gold ornamental border inside the card */}
        <div className="absolute inset-3 border border-[#D4AF37]/30 rounded-xl pointer-events-none" />
        <div className="absolute inset-4 border border-[#D4AF37]/15 rounded-lg pointer-events-none" />

        {/* Top Header Typography with Ge'ez invocation */}
        <div className="relative z-10 space-y-2 mb-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-[#D4AF37] shadow-sm">
              <img src={ethiopianCrossImg} alt="Ethiopian Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#634703] uppercase font-bold">
              በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ
            </p>
          </div>

          <p className="font-cinzel text-xs tracking-[0.35em] text-[#AA7C11] uppercase font-semibold">
            THE HOLY CROWNING & WEDDING CELEBRATION
          </p>

          <h1 className="font-vibes text-4xl sm:text-6xl text-[#0A1931] tracking-wide py-1 drop-shadow-sm">
            {WEDDING_CONFIG.couple.groom} <span className="font-serif-luxury font-light text-3xl sm:text-5xl text-[#C5A059] mx-1">&</span> {WEDDING_CONFIG.couple.bride}
          </h1>

          <div className="flex items-center justify-center gap-2 text-stone-500 font-cinzel text-xs">
            <span>{WEDDING_CONFIG.couple.groomAmharic}</span>
            <span>·</span>
            <Crown size={12} className="text-[#D4AF37]" />
            <span>·</span>
            <span>{WEDDING_CONFIG.couple.brideAmharic}</span>
          </div>

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
        </div>

        {/* Interactive Luxury Navy Envelope */}
        <div className="relative mx-auto my-6 w-full max-w-md aspect-[1.5/1] flex items-center justify-center">
          {/* Floral Spray Corner Decoration */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-36 sm:w-48 z-40 pointer-events-none drop-shadow-2xl"
          >
            <img
              src={floralSpray}
              alt="Blue roses and gold floral bouquet"
              className="w-full h-auto object-contain transform rotate-12"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Envelope Body Container */}
          <div
            id="interactive-envelope-box"
            onClick={handleEnvelopeClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-full h-full rounded-lg cursor-pointer select-none transition-transform duration-500 perspective-1000 ${isHovered && openingState === 'closed' ? 'scale-[1.02]' : ''
              }`}
          >
            {/* Envelope Back Base */}
            <div className="absolute inset-0 bg-[#09152B] rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-[#D4AF37]/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-[#FAF6EE]/20 to-[#D4AF37]/40 opacity-90" />
            </div>

            {/* Letter Inside Envelope that Slides Up when opened */}
            <motion.div
              animate={{
                y: openingState === 'closed' ? 0 : -145,
                opacity: openingState === 'closed' ? 0.9 : 1,
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="absolute inset-x-4 inset-y-2 bg-[#FDFBF7] rounded-md border border-[#D4AF37]/40 p-4 shadow-md flex flex-col items-center justify-center text-center z-10"
            >
              <div className="flex items-center gap-1 text-[#AA7C11] mb-0.5">
                <Crown size={12} />
                <span className="font-cinzel text-[10px] tracking-widest uppercase">
                  Sacred Crowning ·
                </span>
                <Crown size={12} />
              </div>
              <p className="font-cinzel text-lg sm:text-xl font-bold text-[#0A1931] tracking-wide mb-1">
                {new URLSearchParams(window.location.search).get('to') || new URLSearchParams(window.location.search).get('guest')
                  ? `ለ ${new URLSearchParams(window.location.search).get('to') || new URLSearchParams(window.location.search).get('guest')}`
                  : 'You are Cordially Invited'}
              </p>
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0A1931]">
                {WEDDING_CONFIG.date.fullDate}
              </span>
              <span className="font-cinzel text-[9px] text-stone-500 tracking-wider truncate max-w-[280px]">
                {WEDDING_CONFIG.churchVenue.name}
              </span>
            </motion.div>

            {/* Envelope Front Flaps */}
            <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-2xl">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
                {/* Left Flap */}
                <polygon points="0,0 50,55 0,100" fill="#0A1931" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" />
                {/* Right Flap */}
                <polygon points="100,0 50,55 100,100" fill="#0C1D38" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" />
                {/* Bottom Flap */}
                <polygon points="0,100 50,55 100,100" fill="#081226" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" />
              </svg>
            </div>

            {/* Envelope Top Flap (Folds Open) */}
            <motion.div
              animate={{
                rotateX: openingState === 'closed' ? 0 : -180,
                zIndex: openingState === 'closed' ? 30 : 5,
                filter: openingState === 'closed' ? 'drop-shadow(0 15px 15px rgba(0,0,0,0.5))' : 'drop-shadow(0 0px 0px rgba(0,0,0,0))',
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
                <defs>
                  <linearGradient id="topFlapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f2347" />
                    <stop offset="100%" stopColor="#081225" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 100,0 50,55" fill="url(#topFlapGrad)" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" />
              </svg>

              <div
                className="relative z-10 w-full h-full flex flex-col items-center pt-2 sm:pt-4 px-4"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 55%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="text-center">
                  <p className="font-script text-lg sm:text-2xl text-[#E8CE7E] drop-shadow">
                    The <span className="font-cinzel text-xs tracking-widest text-[#F3E5AB]">BEGINNING</span> of
                  </p>
                  <p className="font-vibes text-xl sm:text-2xl text-[#E8CE7E] -mt-1">
                    OUR Forever
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Antique Gold Wax Seal with Monogram */}
            <motion.div
              animate={{
                scale: openingState === 'closed' ? (isHovered ? 1.08 : 1) : 0,
                opacity: openingState === 'closed' ? 1 : 0,
                rotate: openingState === 'closed' ? (isHovered ? 5 : 0) : 45,
              }}
              transition={{ duration: 0.4 }}
              className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
            >
              <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden border-2 border-[#AA7C11]/50 shadow-[inset_0_2px_6px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.6)]">
                <img
                  src={goldSealImg}
                  alt={`Gold Monogram Wax Seal ${WEDDING_CONFIG.couple.monogram}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A3403] font-cinzel text-xs sm:text-sm font-bold tracking-tighter drop-shadow-sm">
                  <span>{WEDDING_CONFIG.couple.monogram}</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/60 animate-ping opacity-30 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Click to Open Prompt */}
        <div className="relative z-10 mt-6">
          <motion.button
            id="click-to-open-btn"
            onClick={handleEnvelopeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0A1931] via-[#122A54] to-[#0A1931] text-[#FAF6EE] border border-[#D4AF37]/50 shadow-lg hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300"
          >
            <Sparkles size={16} className="text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#F3E5AB]">
              {openingState === 'closed' ? 'OPEN INVITATION · ክፈት' : 'OPENING INVITATION...'}
            </span>
            <Heart size={14} className="text-[#D4AF37] fill-[#D4AF37]/40" />
          </motion.button>

          <p className="font-serif-luxury italic text-xs sm:text-sm text-stone-500 mt-2">
            Touch the wax seal or tap button to enter our wedding celebration
          </p>
        </div>
      </motion.div>
    </div>
  );
};
