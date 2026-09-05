import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingPetals } from './components/FloatingPetals';
import { AudioPlayer } from './components/AudioPlayer';
import { LuxuryNavbar } from './components/LuxuryNavbar';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { WeddingDetails } from './components/WeddingDetails';
import { ScheduleSection } from './components/ScheduleSection';
import { DressCodeSection } from './components/DressCodeSection';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { RegistrySection } from './components/RegistrySection';
import { ThankYouFooter } from './components/ThankYouFooter';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  // Show admin dashboard if ?admin is in the URL
  const isAdminRoute = new URLSearchParams(window.location.search).has('admin');
  if (isAdminRoute) return <AdminDashboard />;

  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true);
    // Ensure we start at the top of the hero section
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleResetEnvelope = () => {
    setIsEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="wedding-invitation-app" className="min-h-screen bg-[#050B18] text-[#E8ECF2] relative selection:bg-[#D4AF37] selection:text-[#050B18]">
      {/* Background Floating Petals & Gold Sparkles */}
      <FloatingPetals />

      {/* Acoustic Piano Ambient Synthesizer / Audio Player */}
      <AudioPlayer autoStartPrompt={isEnvelopeOpened} />

      {/* Floating Header Navbar */}
      <LuxuryNavbar
        onNavigate={handleNavigate}
        isEnvelopeOpen={isEnvelopeOpened}
      />

      <main className="relative z-10 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {!isEnvelopeOpened ? (
            <motion.div
              key="envelope-section"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <OpeningEnvelope
                isOpened={isEnvelopeOpened}
                onOpen={handleOpenEnvelope}
              />
            </motion.div>
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-0"
            >
              {/* Hero Invitation Stationery Suite */}
              <HeroSection
                onNavigate={handleNavigate}
                onResetEnvelope={handleResetEnvelope}
              />

              {/* Our Story Collage & Timeline */}
              <StorySection />

              {/* Wedding Details & Venue */}
              <WeddingDetails />

              {/* Hourly Schedule */}
              <ScheduleSection />

              {/* Dress Code & Color Swatches
              <DressCodeSection /> */}

              {/* Moments Gallery & Lightbox */}
              <GallerySection />

              {/* RSVP Form & Live Guestbook */}
              <RsvpSection />

              {/* Gift Registry & Wishing Well
              <RegistrySection /> */}

              {/* Final Thank You Footer */}
              <ThankYouFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
