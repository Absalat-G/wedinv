import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Heart, Sparkles, Copy, Check, Plane, Home, Coffee } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';

export const RegistrySection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const registryItems = [
    {
      title: 'Honeymoon & Pilgrimage Journey',
      category: 'Experiences & Travel',
      description: 'Contributions toward our romantic getaway and holy sites pilgrimage, cliffside dining, and memorable experiences.',
      accountName: `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`,
      accountNumber: 'Zelle: celebrate@absalatandyehasab.com',
      copyValue: 'celebrate@absalatandyehasab.com',
      icon: Plane,
    },
    {
      title: 'Our First Home Nest & Foundation Fund',
      category: 'Future Foundation',
      description: 'Helping us furnish our home with Ethiopian artisan woodwork, botanical plantings, and heirloom cookware.',
      accountName: `${WEDDING_CONFIG.couple.groom} & ${WEDDING_CONFIG.couple.bride}`,
      accountNumber: 'Venmo: @Absalat-Yehasab-Wedding',
      copyValue: '@Absalat-Yehasab-Wedding',
      icon: Home,
    },
    {
      title: 'Curated Wedding Registry at Williams Sonoma & Bloomingdale\'s',
      category: 'Home & Dining',
      description: 'Browse our curated collection of fine diningware, traditional coffee service sets, and kitchen essentials.',
      accountName: 'Registry ID: 892019-AY',
      accountNumber: 'Online Registry Link',
      copyValue: 'https://www.williams-sonoma.com/registry/absalat-yehasab-2026',
      icon: Coffee,
      isExternal: true,
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="registry-section" className="relative py-24 px-4 sm:px-8 max-w-5xl mx-auto z-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Wishing Well & Registry
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Gift <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">& Registry</span>
        </h2>

        <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
          "Your presence and shared laughter are the greatest gifts we could ever receive. For those wishing to honor us with a gift, our wishing well is below."
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {registryItems.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FAF6EE] text-[#050B18] p-6 rounded-2xl shadow-xl border border-[#D4AF37]/50 flex flex-col justify-between relative group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#0A1931] text-[#D4AF37] flex items-center justify-center mb-4 shadow-md">
                  <IconComp size={22} />
                </div>

                <span className="font-cinzel text-[10px] tracking-wider text-[#634703] uppercase font-bold">
                  {item.category}
                </span>

                <h3 className="font-serif-luxury text-xl font-bold text-[#0A1931] mt-1 mb-2">
                  {item.title}
                </h3>

                <p className="font-sans-clean text-xs text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/30">
                <p className="font-serif-luxury text-xs text-stone-500 font-medium">
                  {item.accountName}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2 bg-stone-100 p-2 rounded-lg border border-stone-200">
                  <span className="font-sans-clean text-[11px] text-[#0A1931] truncate font-medium">
                    {item.accountNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(item.copyValue, idx)}
                    className="p-1.5 rounded-md bg-[#0A1931] text-[#FAF6EE] hover:bg-[#1E3A8A] transition-colors shrink-0"
                    title="Copy details"
                  >
                    {copiedIndex === idx ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} className="text-[#D4AF37]" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
