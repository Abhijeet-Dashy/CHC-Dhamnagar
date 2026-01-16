import React, { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { X } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // <--- Import this
import { useLanguage } from '../contexts/LanguageContext';

export const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Generate Schema for Google Images
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "CHC Dhamnagar Photo Gallery",
    "description": "Photos of medical facilities, health camps, and events at Community Health Center Dhamnagar.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "CHC Dhamnagar",
      "url": "https://chcdhamnagar.in"
    },
    "image": GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      "url": item.src,
      "caption": item.alt,
      "description": item.description
    }))
  };

  return (
    <>
      {/* --- SEO START --- */}
      <Helmet>
        <title>Photo Gallery | CHC Dhamnagar Facilities & Events</title>
        <meta
          name="description"
          content="View our gallery featuring CHC Dhamnagar's medical wards, operation theaters, recent health camps, and community outreach programs in Bhadrak, Odisha."
        />
        <meta name="keywords" content="CHC Dhamnagar photos, hospital gallery Bhadrak, medical camp photos Odisha, government hospital facilities" />
        <link rel="canonical" href="https://chcdhamnagar.in/gallery" />

        {/* Open Graph for Social Media Preview */}
        <meta property="og:title" content="CHC Dhamnagar - Photo Gallery" />
        <meta property="og:description" content="Explore photos of our hospital facilities, doctors, and recent events." />
        <meta property="og:image" content={GALLERY_ITEMS[0]?.src} /> {/* Uses the first image as preview */}
        <meta property="og:url" content="https://chcdhamnagar.in/gallery" />
        <meta property="og:type" content="website" />

        {/* Inject JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(gallerySchema)}
        </script>
      </Helmet>
      {/* --- SEO END --- */}

      <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900">
        <Section id="full-gallery" title={t.gallery.pageTitle} subtitle={t.gallery.pageSubtitle} bg="gray">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width="400"  // Explicit width/height helps prevent layout shift (CLS)
                    height="300"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-grow border-t border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{item.alt}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Zoomed Image */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain bg-slate-100 dark:bg-slate-950"
                  />
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{selectedImage.alt}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
    </>
  );
};