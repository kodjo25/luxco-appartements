import { useState, useEffect, useCallback } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { contact } from "@/lib/luxco-data";
import { heroSlides } from "@/lib/assets";

export function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide})`,
              opacity: index === current ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="container-lux relative z-10 pt-24 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          ★★★★★ Luxe & Confort
        </span>

        <h1 className="font-display text-5xl font-light leading-tight tracking-wide text-white md:text-6xl lg:text-7xl">
          <span className="font-semibold text-gold">LUXCO</span> APPARTEMENT
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-wide text-white/90 md:text-xl">
          Appartements meublés de standing — 1 à 3 chambres
        </p>

        <p className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-sm font-medium text-gold md:text-base">
          <MapPin size={18} />
          Kégué, Togo — Disponible 24h/24
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:bg-gold-light hover:shadow-gold-glow"
          >
            📱 Réserver sur WhatsApp
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-gold hover:text-gold"
          >
            ✉️ Réserver par Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#presentation"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 hidden gap-2 md:flex">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === current ? "w-8 bg-gold" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
