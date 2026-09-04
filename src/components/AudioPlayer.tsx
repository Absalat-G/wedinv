import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import v1Audio from '../assets/audio/V1.mp3';

export const AudioPlayer: React.FC<{ autoStartPrompt?: boolean }> = ({ autoStartPrompt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => console.log("Autoplay prevented or error:", err));
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (autoStartPrompt && !hasInteracted) {
      startAudio();
    }
  }, [autoStartPrompt, hasInteracted]);

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  // Sync state if audio ends or pauses externally
  const handlePause = () => setIsPlaying(false);
  const handlePlay = () => setIsPlaying(true);

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={v1Audio}
        loop
        onPause={handlePause}
        onPlay={handlePlay}
        preload="auto"
      />

      <div id="wedding-audio-player" className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <div className="group relative flex items-center bg-[#07132B]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-full px-3.5 py-2 shadow-2xl transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          {/* Spinning Gold Music Seal or Notes */}
          <button
            id="audio-toggle-button"
            onClick={toggleAudio}
            className="flex items-center gap-2 text-xs font-sans-clean tracking-wider text-[#FAF6EE] focus:outline-none"
            title={isPlaying ? 'ደስ አለን — ድምፅ ዝጋ' : 'Play መዝሙር'}
            aria-label="Toggle Wedding Music"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#9B720D] to-[#F3E5AB] text-[#050B18] shadow-sm transition-transform duration-700 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }}>
              <Music size={14} className={isPlaying ? 'text-[#050B18]' : 'text-[#2A1E02]'} />
            </div>

            <span className="hidden sm:inline font-serif-luxury italic text-sm text-[#F3E5AB]">
              {isPlaying ? 'ደስ አለን' : 'Play መዝሙር'}
            </span>

            {isPlaying ? (
              <Volume2 size={16} className="text-[#D4AF37] animate-pulse" />
            ) : (
              <VolumeX size={16} className="text-stone-400" />
            )}
          </button>

          {/* Floating Mini Volume slider on hover */}
          <div className="hidden group-hover:flex items-center pl-2 border-l border-[#D4AF37]/30 ml-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 h-1 bg-[#162A50] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              title="Music Volume"
            />
          </div>
        </div>
      </div>
    </>
  );
};
