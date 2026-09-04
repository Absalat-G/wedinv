import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, MapPin, Calendar, Quote, Crown } from 'lucide-react';
import { STORY_MILESTONES, WEDDING_CONFIG } from '../data/weddingData';

// Images
import ethiopianCoupleImg from '../assets/images/4J0A5154.JPG';
import cathedralImg from '../assets/images/ethiopian_orthodox_church_1787811623729.jpg';
import goldCrossImg from '../assets/images/ethiopian_gold_cross_1787811589160.jpg';
import floralSpray from '../assets/images/blue_floral_spray_1787753700793.png';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';

export const StorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="story-section"
      className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto z-20"
    >
      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            A Journey of Faith, Love & Heritage
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <div className="relative inline-block">
          <span className="font-vibes text-4xl sm:text-6xl text-[#E8CE7E] block -mb-4">
            Our
          </span>
          <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-gold-gradient uppercase">
            STORY
          </h2>
        </div>

        <p className="font-serif-luxury italic text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
          "United under God's grace and the sacred tradition of the Ethiopian Orthodox Tewahedo Church."
        </p>

        {/* Decorative divider with Cross */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-5 h-5 rounded-full overflow-hidden border border-[#D4AF37]">
            <img src={goldCrossImg} alt="Cross" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Main Content: Desktop 2-Column Stationery Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Layered Polaroid Collage */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-md min-h-[520px]">

            {/* Background Floral Spray behind collage */}
            <div className="absolute -top-10 -left-10 w-44 pointer-events-none opacity-80 z-0">
              <img
                src={floralSpray}
                alt="Floral Spray"
                className="w-full h-auto -rotate-12"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Photo 1: Large Main Portrait (Left tilt) showing Kaba and Crowns */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03, zIndex: 30 }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-4 w-[70%] bg-[#FAF6EE] p-3 pb-6 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.7)] border border-[#D4AF37]/40 z-10"
            >
              {/* Wax Seal Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden shadow-md z-20 border border-[#D4AF37]">
                <img src={goldSealImg} alt="Wax Seal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="w-full aspect-[3/4] rounded bg-stone-900 overflow-hidden mt-1 shadow-inner">
                <img
                  src={ethiopianCoupleImg}
                  alt={`${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} in Royal Kaba`}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-script text-xl text-[#0A1931] text-center mt-2.5">
                Crowned King & Queen ·
              </p>
            </motion.div>

            {/* Photo 2: Top Right Small Polaroid (Right tilt) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 6 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 2, scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 top-0 w-[52%] bg-[#FAF6EE] p-2.5 pb-4 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.7)] border border-[#D4AF37]/40 z-20"
            >
              <div className="w-full aspect-square rounded bg-stone-900 overflow-hidden shadow-inner">
                <img
                  src={cathedralImg}
                  alt="Cathedral Sanctuary"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-script text-lg text-[#0A1931] text-center mt-1.5">
                Holy Cathedral Sanctuary
              </p>
            </motion.div>

            {/* Photo 3: Bottom Right Polaroid */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-2 bottom-2 w-[54%] bg-[#FAF6EE] p-2.5 pb-4 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.8)] border border-[#D4AF37]/40 z-20"
            >
              <div className="w-full aspect-[4/3] rounded bg-stone-900 overflow-hidden shadow-inner">
                <img
                  src={goldCrossImg}
                  alt="The Holy Matrimonial Covenant"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-script text-lg text-[#0A1931] text-center mt-1.5">
                Sacred Covenant (ቃል ኪዳን)
              </p>
            </motion.div>

          </div>
        </div>

        {/* Right Column: Romantic Story Letter & Milestone Timeline */}
        <div className="lg:col-span-6 space-y-8">

          {/* Romantic Paper Letter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#FAF6EE] text-[#050B18] p-8 sm:p-10 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6)] border border-[#D4AF37]/50 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 pointer-events-none opacity-40">
              <img src={floralSpray} alt="Bouquet" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>

            <div className="flex items-center gap-2 mb-3 text-[#AA7C11]">
              <Crown size={20} />
              <span className="font-cinzel text-xs tracking-widest uppercase font-bold">
                A Divine Union · የተቀደሰ ጋብቻ
              </span>
            </div>

            <div className="space-y-4 font-serif-luxury text-base sm:text-lg leading-relaxed text-[#1A263D]">
              <p className="first-letter:font-vibes first-letter:text-5xl first-letter:text-[#8E6A12] first-letter:float-left first-letter:mr-2">
                Every love story is unique, and ours began in an unexpected way. In February 2024, we met on a video call volunteering for a Pan-African organization; living in Jimma and Addis Ababa. Distance didn't stop late night calls, messages, and long conversations.
              </p>
              <p>
                Friendship turned into love, and one day we met in person outside the gates of St. Gorge church at Piyassa. From that day on, we built our relationship on faith, trust, and unwavering support. We celebrated each other's victories and stood together through challenges.
              </p>
              <p>
                As our dreams grew, we chose our wedding rings, bought our first bed, and furnished our future home, piece by piece. Looking back, we're grateful for every step that led here. We've encouraged each other to grow into better people.
              </p>
              <p className="font-script text-2xl sm:text-3xl text-[#0A1931] pt-2">
                Today, we're filled with gratitude as we begin this next chapter. And we are so thankful to have you with us as we say, "I do."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
              <span className="font-cinzel text-xs tracking-widest text-[#634703] uppercase">
                {WEDDING_CONFIG.couple.monogram}
              </span>
              <span className="font-script text-2xl text-[#8E6A12]">
                With prayer & love, {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride}
              </span>
            </div>
          </motion.div>

          {/* Interactive Milestone Timeline */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-[#F3E5AB] uppercase flex items-center gap-2">
              <Calendar size={16} className="text-[#D4AF37]" />
              <span>Milestones of Faith & Love</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STORY_MILESTONES.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${activeTab === idx
                    ? 'bg-[#0E2247] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : 'bg-[#081429]/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-cinzel text-[10px] tracking-wider text-[#D4AF37] font-semibold">
                      {milestone.year}
                    </span>
                    <Heart
                      size={12}
                      className={activeTab === idx ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-stone-500'}
                    />
                  </div>
                  <h4 className="font-serif-luxury font-bold text-base text-[#FAF6EE]">
                    {milestone.title}
                  </h4>
                  <p className="font-sans-clean text-xs text-stone-300 line-clamp-2 mt-1">
                    {milestone.description}
                  </p>
                  {milestone.location && (
                    <div className="flex items-center gap-1 mt-2 text-[10px] font-sans-clean text-[#C5A059]">
                      <MapPin size={10} />
                      <span>{milestone.location}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
