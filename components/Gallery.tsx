import React, { useState } from "react";
import { Section } from "./Section";
import { GALLERY_ITEMS, GalleryItem } from "../data/galleryData";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { t } = useLanguage();

  // Show only first 4 items on the home page
  const displayItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <Section
      id="gallery"
      title={t.gallery.title}
      subtitle={t.gallery.subtitle}
      bg="gray"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {displayItems.map((item) => (
          <figure // 1. Semantic Tag: Tells Google this is a self-contained content unit
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full m-0"
          >
            <button // 2. Accessibility: Makes the image focusable via Keyboard (Tab key)
              type="button"
              className="relative aspect-[4/3] overflow-hidden cursor-pointer w-full p-0 border-0"
              onClick={() => setSelectedImage(item)}
              aria-label={`View larger image of ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width="400" // 3. CLS Prevention: Reserves space to stop layout shift
                height="300"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </button>

            <figcaption className="p-4 flex-grow border-t border-slate-100 dark:border-slate-700"> {/* 4. Semantic Tag: Links text to image */}
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                {item.alt}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Modal for Zoomed Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog" // Accessibility: Tells screen readers this is a popup
          aria-modal="true"
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
              aria-label="Close Gallery Modal"
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
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {selectedImage.alt}
              </h3>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <Link
          to="/gallery"
          title="View Full Gallery" // Tooltip for SEO
          className="inline-flex items-center space-x-2 bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <span>{t.gallery.title}</span> {/* Consider changing this text to "View All Photos" for better clarity */}
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
};