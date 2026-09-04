import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, Sparkles, User, Mail, MessageSquare, Utensils, Music, Users, MessageCircle } from 'lucide-react';
import { RsvpEntry } from '../types';
import { WEDDING_CONFIG } from '../data/weddingData';

// Images
import floralSpray from '../assets/images/blue_floral_spray_1787753700793.png';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes' as 'yes' | 'no',
    eventsAttending: 'Both Church Ceremony & Breakfast',
    guestsCount: 1,
    guestNames: '',
    mealPreference: 'Traditional Royal Ethiopian Feast (Doro Wat, Beef Sega Wat, Injera & Sides)',
    dietaryRestrictions: '',
    songRequest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guestbook, setGuestbook] = useState<Array<{ name: string; message: string; date: string }>>([]);

  // Load persisted guestbook from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_guestbook');
      if (saved) {
        setGuestbook(JSON.parse(saved));
      }
    } catch {

    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    // Trigger celebratory gold and sapphire confetti burst
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#FAF6EE', '#1E3A8A', '#F3E5AB', '#0A1931'],
      ticks: 250,
    });

    setTimeout(() => {
      const newEntry: RsvpEntry = {
        id: Date.now().toString(),
        ...formData,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      // Add to guestbook if they left a message
      if (formData.message.trim()) {
        const updated = [
          {
            name: formData.name,
            message: formData.message,
            date: newEntry.submittedAt,
          },
          ...guestbook,
        ];
        setGuestbook(updated);
        try {
          localStorage.setItem('wedding_rsvp_guestbook', JSON.stringify(updated));
        } catch {
          // ignore
        }
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      eventsAttending: 'Both Church Ceremony & Breakfast',
      guestsCount: 1,
      guestNames: '',
      mealPreference: 'Traditional Royal Ethiopian Feast (Doro Wat, Beef Sega Wat, Injera & Sides)',
      dietaryRestrictions: '',
      songRequest: '',
      message: '',
    });
  };

  return (
    <section id="rsvp-section" className="relative py-24 px-4 sm:px-8 max-w-5xl mx-auto z-20">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Répondez S'il Vous Plaît
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Kindly <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">RSVP</span>
        </h2>

        <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
          Please let us know your response by <span className="text-[#D4AF37] font-semibold">{WEDDING_CONFIG.date.rsvpDeadline}</span>
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* RSVP Card / Envelope Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-[#FAF6EE] text-[#050B18] rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/60 relative overflow-hidden"
        >
          {/* Top Envelope Stamp / Wax Seal design */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full overflow-hidden shadow-md border border-[#D4AF37] pointer-events-none hidden sm:block">
            <img src={goldSealImg} alt="Gold Seal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Floral Spray in bottom left */}
          <div className="absolute -bottom-8 -left-8 w-28 pointer-events-none opacity-40">
            <img src={floralSpray} alt="Floral" className="w-full h-auto rotate-45" referrerPolicy="no-referrer" />
          </div>

          <div className="relative z-10">

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#9B720D] to-[#F3E5AB] flex items-center justify-center text-[#050B18] shadow-xl">
                    <CheckCircle2 size={40} className="text-[#050B18]" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-cinzel text-xs tracking-widest text-[#634703] uppercase">
                      CONFIRMATION RECEIVED
                    </span>
                    <h3 className="font-vibes text-4xl sm:text-5xl text-[#0A1931]">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="font-serif-luxury text-lg text-stone-700 max-w-md mx-auto">
                      {formData.attending === 'yes'
                        ? 'We are thrilled and deeply honored to celebrate our special day with you!'
                        : 'You will be warmly missed. Thank you for sending your love and blessings.'}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#0A1931] text-[#FAF6EE] font-cinzel text-xs tracking-wider hover:bg-[#1E3A8A] transition-all"
                    >
                      Update RSVP or Submit Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="rsvp-form" onSubmit={handleSubmit} className="space-y-6">

                  <div className="text-center mb-6">
                    <p className="font-cinzel text-xs tracking-[0.25em] text-[#634703] uppercase font-bold">
                      THE HONOR OF YOUR PRESENCE
                    </p>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0A1931] mt-1">
                      Will you be joining us?
                    </h3>
                  </div>

                  {/* Attendance Selector Radio Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${formData.attending === 'yes'
                        ? 'bg-[#0A1931] text-[#FAF6EE] border-[#D4AF37] shadow-md'
                        : 'bg-white text-[#0A1931] border-stone-300 hover:border-[#D4AF37]'
                        }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={() => setFormData({ ...formData, attending: 'yes' })}
                        className="sr-only"
                      />
                      <Heart
                        size={20}
                        className={formData.attending === 'yes' ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-stone-400'}
                      />
                      <span className="font-serif-luxury font-bold text-base mt-1">
                        Joyfully Accept
                      </span>
                      <span className="font-sans-clean text-[10px] opacity-75">
                        Can't wait to celebrate!
                      </span>
                    </label>

                    <label
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${formData.attending === 'no'
                        ? 'bg-[#0A1931] text-[#FAF6EE] border-[#D4AF37] shadow-md'
                        : 'bg-white text-[#0A1931] border-stone-300 hover:border-[#D4AF37]'
                        }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={() => setFormData({ ...formData, attending: 'no' })}
                        className="sr-only"
                      />
                      <span className="text-xl">💌</span>
                      <span className="font-serif-luxury font-bold text-base mt-1">
                        Regretfully Decline
                      </span>
                      <span className="font-sans-clean text-[10px] opacity-75">
                        Will celebrate in spirit
                      </span>
                    </label>
                  </div>

                  {/* Guest Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                        <User size={13} className="text-[#8E6A12]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-[#050B18] placeholder:text-stone-400 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                        <Mail size={13} className="text-[#8E6A12]" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@vance.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm text-[#050B18] placeholder:text-stone-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {formData.attending === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 pt-2"
                    >
                      {/* Events Attending Selector */}
                      <div className="space-y-1.5">
                        <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                          <Sparkles size={13} className="text-[#8E6A12]" />
                          <span>Events You Will Attend</span>
                        </label>
                        <select
                          value={formData.eventsAttending}
                          onChange={(e) => setFormData({ ...formData, eventsAttending: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] outline-none"
                        >
                          <option value="Both Church Ceremony & Breakfast">
                            ✨ Both Church Ceremony & Breakfast
                          </option>
                          <option value="Church Ceremony Only">
                            ⛪ Church Ceremony Only
                          </option>
                          <option value="Breakfast Celebration Only">
                            👑 Breakfast Celebration Only
                          </option>
                        </select>
                      </div>

                      {/* Number of Guests */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                            <Users size={13} className="text-[#8E6A12]" />
                            <span>Total Attending</span>
                          </label>
                          <select
                            value={formData.guestsCount}
                            onChange={(e) => setFormData({ ...formData, guestsCount: parseInt(e.target.value) })}
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] outline-none"
                          >
                            <option value={1}>1 Guest (Just Me)</option>
                            <option value={2}>2 Guests (Me + Plus One)</option>
                            <option value={3}>3 Guests (Family)</option>
                            <option value={4}>4 Guests</option>
                          </select>
                        </div>

                        {formData.guestsCount > 1 && (
                          <div className="space-y-1.5">
                            <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold">
                              Additional Guest Names
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Charles Vance"
                              value={formData.guestNames}
                              onChange={(e) => setFormData({ ...formData, guestNames: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] placeholder:text-stone-400 outline-none"
                            />
                          </div>
                        )}
                      </div>

                      {/* Gourmet Meal Selection */}
                      <div className="space-y-1.5">
                        <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                          <Utensils size={13} className="text-[#8E6A12]" />
                          <span>Entrée & Banquet Preference</span>
                        </label>
                        <select
                          value={formData.mealPreference}
                          onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] outline-none"
                        >
                          <option value="Traditional Royal Ethiopian Feast (Doro Wat, Beef Sega Wat, Injera & Sides)">
                            Traditional Royal Feast (Doro Wat, Beef Sega Wat, Ayib, Injera)
                          </option>
                          <option value="Ethiopian Vegetarian/Vegan Fasting Feast (Yetsom Beyaynetu on Injera)">
                            Vegan Tsom Feast (Yetsom Beyaynetu, Misir, Gomen, Shiro, Injera)
                          </option>
                          <option value="Prime Filet Mignon with Truffle Demi-Glace">
                            Prime Filet Mignon (Truffle demi-glace, dauphinoise potatoes)
                          </option>
                          <option value="Pan-Seared Chilean Sea Bass with Saffron Beurre Blanc">
                            Pan-Seared Chilean Sea Bass (Saffron beurre blanc, asparagus)
                          </option>
                        </select>
                      </div>

                      {/* Song Request for DJ */}
                      <div className="space-y-1.5">
                        <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                          <Music size={13} className="text-[#8E6A12]" />
                          <span>Eskista & Dance Song Request</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Favorite Ethiopian (Teddy Afro, Aster Aweke...) or dance track"
                          value={formData.songRequest}
                          onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] placeholder:text-stone-400 outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Blessings Message */}
                  <div className="space-y-1.5">
                    <label className="font-cinzel text-xs tracking-wider text-[#0A1931] uppercase font-bold flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-[#8E6A12]" />
                      <span>Message for the Bride & Groom</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share a sweet memory, congratulations, or marriage advice..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-stone-300 focus:border-[#D4AF37] text-sm text-[#050B18] placeholder:text-stone-400 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-rsvp-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#9B720D] text-[#050B18] font-cinzel text-sm font-bold tracking-[0.2em] uppercase hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING RSVP...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SEND WEDDING RSVP</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Right Column: Live Guestbook & Warm Wishes */}
        <div className="lg:col-span-5 space-y-6">

          <div className="bg-[#0A1931]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl text-[#FAF6EE]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-[#D4AF37]" />
                <h3 className="font-cinzel text-sm tracking-widest text-[#F3E5AB] uppercase font-bold">
                  Guest Wishes & Guestbook
                </h3>
              </div>
              <span className="text-xs font-sans-clean text-stone-400">
                {guestbook.length} Messages
              </span>
            </div>

            <p className="font-serif-luxury italic text-xs sm:text-sm text-stone-300 mb-6">
              Messages left in the RSVP form are preserved here for {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride} to treasure forever.
            </p>

            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
              {guestbook.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#050B18] p-4 rounded-xl border border-[#D4AF37]/20 relative"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif-luxury font-bold text-sm text-[#F3E5AB]">
                      {item.name}
                    </span>
                    <span className="font-sans-clean text-[10px] text-stone-400">
                      {item.date}
                    </span>
                  </div>
                  <p className="font-serif-luxury italic text-xs text-stone-200 leading-relaxed">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Inquiries */}
          <div className="bg-[#07132B]/70 rounded-2xl p-6 border border-[#D4AF37]/20 text-center space-y-2">
            <p className="font-cinzel text-xs tracking-wider text-[#D4AF37] uppercase">
              HAVE QUESTIONS OR SPECIAL REQUESTS?
            </p>
            <p className="font-serif-luxury text-sm text-stone-300">
              Reach out to our wedding concierge at{' '}
              <a href={`mailto:${WEDDING_CONFIG.contact.email}`} className="text-[#F3E5AB] underline">
                {WEDDING_CONFIG.contact.email}
              </a>
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
