import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { galleryImages } from "@/lib/luxco-data";
import { getAssetUrl } from "@/lib/assets";
import { X } from "lucide-react";

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galerie" className="section-padding bg-black-light">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Galerie"
          title={
            <>
              Découvrez nos espaces en{" "}
              <span className="text-gold">images</span>
            </>
          }
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, index) => (
            <button
              key={img}
              onClick={() => setLightbox(img)}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 6 ? "aspect-[4/5] md:row-span-2" : "aspect-square"
              }`}
            >
              <img
                src={getAssetUrl(img)}
                alt={`Galerie LUXCO ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-3xl text-gold">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            aria-label="Fermer"
          >
            <X size={36} />
          </button>
          <img
            src={getAssetUrl(lightbox)}
            alt="Aperçu galerie"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
