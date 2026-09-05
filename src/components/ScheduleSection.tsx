import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Wine, HeartHandshake, GlassWater, UtensilsCrossed, Music, Flame, Crown, Church } from 'lucide-react';
import { SCHEDULE_EVENTS, WEDDING_CONFIG } from '../data/weddingData';

export const ScheduleSection: React.FC = () => {
  const getEventIcon = (name: string) => {
    switch (name) {
      case 'Church':
        return <Church size={18} className="text-[#D4AF37]" />;
      case 'Crown':
        return <Crown size={18} className="text-[#D4AF37]" />;
      case 'Wine':
        return <Wine size={18} className="text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake size={18} className="text-[#D4AF37]" />;
      case 'GlassWater':
        return <GlassWater size={18} className="text-[#D4AF37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={18} className="text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles size={18} className="text-[#D4AF37]" />;
      case 'Music':
        return <Music size={18} className="text-[#D4AF37]" />;
      case 'Flame':
        return <Flame size={18} className="text-[#D4AF37]" />;
      default:
        return <Clock size={18} className="text-[#D4AF37]" />;
    }
  };

  return (
    <section id="schedule-section" className="relative py-24 px-4 sm:px-8 max-w-5xl mx-auto z-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Order of Events
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Wedding <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">Schedule</span>
        </h2>



        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Center Vertical Gold Line on Desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

        <div className="space-y-8">
          {SCHEDULE_EVENTS.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-[#FAF6EE] text-[#050B18] p-6 rounded-2xl shadow-xl border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all relative group overflow-hidden">
                    {/* Inner subtle frame */}
                    <div className="absolute inset-2 border border-[#D4AF37]/20 rounded-xl pointer-events-none" />

                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#0A1931] text-[#FAF6EE] font-cinzel text-xs tracking-widest font-semibold">
                        {event.time}
                      </span>
                      <span className="font-cinzel text-[10px] tracking-wider text-[#634703] uppercase">
                        {event.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0A1931] mt-2">
                      {event.title}
                    </h3>


                  </div>
                </div>

                {/* Center Node / Wax Seal / Icon */}
                <div className="my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#122547] to-[#060F1E] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center">
                    {getEventIcon(event.iconName)}
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
