import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Heart, Crown, Church, Upload, Image as ImageIcon, Trash2, Plus, Check } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { WEDDING_CONFIG } from '../data/weddingData';

import img4J0A5154 from '../assets/images/4J0A5154.JPG';
import img4J0A5194 from '../assets/images/4J0A5194.JPG';
import img4J0A5225 from '../assets/images/4J0A5225.JPG';
import img4J0A5288 from '../assets/images/4J0A5288.JPG';
import img7U7A4655 from '../assets/images/7U7A4655.JPG';
import img7U7A4737 from '../assets/images/7U7A4737.JPG';
import img7U7A4749 from '../assets/images/7U7A4749.JPG';
import img7U7A4762 from '../assets/images/7U7A4762.JPG';
import img7U7A5090 from '../assets/images/7U7A5090.JPG';
import img7U7A5109 from '../assets/images/7U7A5109.JPG';
import goldSealImg from '../assets/images/gold_wax_seal_1787753772029.jpg';

const DEFAULT_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: '1',
    src: img4J0A5154,
    alt: `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} Portrait`,
    caption: '“In your embrace, I have found my forever home and holy partner for life.”',
    orientation: 'portrait',
  },
  {
    id: '2',
    src: img4J0A5194,
    alt: 'Love is Patient, Love is Kind',
    caption: '“The tender moments and joyful smiles that defined our path toward marriage.”',
    orientation: 'portrait',
  },
  {
    id: '3',
    src: img4J0A5225,
    alt: 'Laughter & Romantic Moments',
    caption: '“Every day with you is a blessing and a joyous adventure.”',
    orientation: 'landscape',
  },
  {
    id: '4',
    src: img4J0A5288,
    alt: `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`,
    caption: '“A glimpse into our future and the love we share.”',
    orientation: 'landscape',
  },
  {
    id: '5',
    src: img7U7A4655,
    alt: 'Cherished Memories',
    caption: '“Building our lives together with faith and devotion.”',
    orientation: 'landscape',
  },
  {
    id: '6',
    src: img7U7A4737,
    alt: 'Forever in Love',
    caption: '“Our eternal foundation in prayer, heritage, and boundless faith.”',
    orientation: 'square',
  },
  {
    id: '7',
    src: img7U7A4749,
    alt: 'Together Always',
    caption: '“Walking hand in hand toward our shared destiny.”',
    orientation: 'square',
  },
  {
    id: '8',
    src: img7U7A4762,
    alt: 'Engagement Joy',
    caption: '“The beginning of our forever and ever.”',
    orientation: 'portrait',
  },
  {
    id: '9',
    src: img7U7A5090,
    alt: 'A Beautiful Moment',
    caption: '“A love that grows deeper with every passing day.”',
    orientation: 'landscape',
  },
  {
    id: '10',
    src: img7U7A5109,
    alt: 'Hand in Hand',
    caption: '“Two souls united in love and grace.”',
    orientation: 'portrait',
  }
];

export const GallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(DEFAULT_GALLERY_PHOTOS);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [customCaption, setCustomCaption] = useState<string>('');
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom photos from localStorage on mount
  useEffect(() => {
    try {
      const savedCustom = localStorage.getItem('ay_wedding_custom_photos');
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPhotos([...parsed, ...DEFAULT_GALLERY_PHOTOS]);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const newPhoto: GalleryPhoto = {
          id: `custom-${Date.now()}`,
          src: event.target.result as string,
          alt: `${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} - Uploaded Photo`,
          caption: customCaption.trim() || `“Forever in love — ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}”`,
          orientation: 'portrait',
        };

        const updated = [newPhoto, ...photos];
        setPhotos(updated);
        setIsUploading(false);
        setCustomCaption('');
        setUploadSuccessMsg('Your photo was added to the gallery!');
        setTimeout(() => setUploadSuccessMsg(''), 4000);

        try {
          const customOnly = updated.filter((p) => p.id.startsWith('custom-'));
          localStorage.setItem('ay_wedding_custom_photos', JSON.stringify(customOnly));
        } catch {
          // Ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const removeCustomPhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    try {
      const customOnly = updated.filter((p) => p.id.startsWith('custom-'));
      localStorage.setItem('ay_wedding_custom_photos', JSON.stringify(customOnly));
    } catch {
      // Ignore
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery-section" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto z-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#C5A059] uppercase">
            Cherished Moments & Portraits
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF6EE] font-light">
          Moments <span className="font-vibes text-5xl sm:text-7xl text-gold-gradient mx-2">& Gallery</span>
        </h2>

        <p className="font-serif-luxury italic text-stone-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
          "A glimpse into the laughter, holy crowning, and memories celebrating {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride}."
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Upload Custom Photo Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            id="gallery-upload-photo-toggle"
            onClick={() => setIsUploading(!isUploading)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E8CE7E] text-[#050B18] font-cinzel text-xs font-bold tracking-wider shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
          >
            <Upload size={14} />
            {isUploading ? 'Close Uploader' : 'Add / Upload Photos'}
          </button>
        </div>

        {uploadSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#6EE7B7] text-xs font-cinzel"
          >
            <Check size={14} /> {uploadSuccessMsg}
          </motion.div>
        )}

        {/* Upload Modal / Drawer Area */}
        <AnimatePresence>
          {isUploading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden max-w-lg mx-auto mt-6"
            >
              <div className="bg-[#0B1A33] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-2xl text-left">
                <h3 className="font-serif-luxury text-lg text-[#FAF6EE] flex items-center gap-2">
                  <ImageIcon size={18} className="text-[#D4AF37]" /> Upload Your Own Photo
                </h3>
                <p className="font-sans-clean text-xs text-stone-300 mt-1 mb-4">
                  Select a photo from your computer or phone to feature directly in the gallery.
                </p>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  id="gallery-file-input"
                />

                <div className="space-y-3">
                  <div>
                    <label className="block font-cinzel text-[10px] tracking-wider text-[#C5A059] uppercase mb-1">
                      Optional Caption
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={customCaption}
                      onChange={(e) => setCustomCaption(e.target.value)}
                      className="w-full bg-[#050C1B] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-xs text-[#FAF6EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#D4AF37]/50 rounded-xl p-6 text-center cursor-pointer hover:bg-[#D4AF37]/5 transition-colors"
                  >
                    <Upload size={28} className="mx-auto text-[#D4AF37] mb-2" />
                    <p className="font-cinzel text-xs text-[#FAF6EE] font-semibold">
                      Click to Browse or Drag Image Here
                    </p>
                    <p className="font-sans-clean text-[10px] text-stone-400 mt-1">
                      Supports JPG, PNG, WEBP, and HEIC files
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Masonry / Bento Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => setSelectedPhotoIndex(idx)}
            className={`group cursor-pointer bg-[#FAF6EE] p-3 pb-5 rounded-2xl shadow-xl border border-[#D4AF37]/40 relative overflow-hidden transition-all ${idx === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
          >
            {/* Wax Seal in corner */}
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full overflow-hidden shadow-md z-10 opacity-70 group-hover:opacity-100 transition-opacity">
              <img src={goldSealImg} alt="Wax Seal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            {photo.id.startsWith('custom-') && (
              <button
                onClick={(e) => removeCustomPhoto(photo.id, e)}
                title="Remove photo"
                className="absolute top-2 left-2 z-20 p-1.5 rounded-full bg-red-600/80 text-white hover:bg-red-600 transition-colors shadow"
              >
                <Trash2 size={12} />
              </button>
            )}

            <div className="w-full h-full min-h-[240px] rounded-xl overflow-hidden bg-stone-900 relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter group-hover:contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-left">
                  <p className="font-serif-luxury italic text-sm text-[#F3E5AB]">
                    {photo.caption}
                  </p>
                  <span className="font-cinzel text-[10px] tracking-widest text-[#D4AF37] uppercase flex items-center gap-1 mt-1">
                    <Eye size={12} /> CLICK TO ENLARGE
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <p className="font-script text-xl text-[#0A1931]">
                {photo.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 bg-[#050B18]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 text-stone-300 hover:text-[#D4AF37] p-2 rounded-full bg-[#122547] border border-[#D4AF37]/30 transition-colors z-50"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 text-stone-300 hover:text-[#D4AF37] p-3 rounded-full bg-[#122547]/80 border border-[#D4AF37]/30 transition-colors z-50"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 text-stone-300 hover:text-[#D4AF37] p-3 rounded-full bg-[#122547]/80 border border-[#D4AF37]/30 transition-colors z-50"
            >
              <ChevronRight size={24} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] bg-[#FAF6EE] p-4 sm:p-6 rounded-2xl shadow-2xl border border-[#D4AF37]/60 flex flex-col items-center"
            >
              <div className="max-h-[65vh] overflow-hidden rounded-xl bg-stone-900 flex items-center justify-center">
                <img
                  src={photos[selectedPhotoIndex].src}
                  alt={photos[selectedPhotoIndex].alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-serif-luxury italic text-lg sm:text-xl text-[#0A1931]">
                  {photos[selectedPhotoIndex].caption}
                </p>
                <span className="font-cinzel text-xs tracking-widest text-[#634703] uppercase mt-1 block">
                  {photos[selectedPhotoIndex].alt} · Photo {selectedPhotoIndex + 1} of {photos.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

