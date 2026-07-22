import { useState, useEffect, useCallback } from "react";
import { SectionHeader } from "./SectionHeader";
import { testimonials } from "@/lib/luxco-data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-black">
      <div className="container-lux">
        <SectionHeader
          eyebrow="LUXCO"
          title={
            <>
              L'avis de nos clients{" "}
              <span className="text-gold">satisfaits</span>
            </>
          }
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-black-card p-8 text-center md:p-12">
            <Quote className="mx-auto h-10 w-10 text-gold/40" />
            <div className="my-4 flex justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg italic leading-relaxed text-white/90 md:text-xl">
              "{testimonial.text}"
            </p>
            <div className="mt-8">
              <p className="font-display text-lg font-semibold text-gold">
                {testimonial.author}
              </p>
              <p className="text-sm text-lux-gray">{testimonial.role}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-black"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-black"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
