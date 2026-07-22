import { useRef } from "react";
import { ChevronLeft, ChevronRight, Bed, Sofa, LayoutGrid, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { rooms, contact } from "@/lib/luxco-data";
import { getAssetUrl } from "@/lib/assets";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bed: Bed,
  sofa: Sofa,
  layout: LayoutGrid,
  users: Users,
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price);
}

export function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="chambres" className="section-padding bg-black-light">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Appartements"
          title={
            <>
              Du studio au 3 chambres, trouvez{" "}
              <span className="text-gold">l'espace</span> qui vous correspond
            </>
          }
        />

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-black/90 text-gold transition-all hover:bg-gold hover:text-black lg:-left-14"
            aria-label="Précédent"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-thin scrollbar-track-black-card scrollbar-thumb-gold"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group w-[300px] flex-shrink-0 scroll-snap-align-start overflow-hidden rounded-xl border border-white/10 bg-black-card transition-all hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl sm:w-[340px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getAssetUrl(room.image)}
                    alt={room.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    {room.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-white">
                    {room.title}
                  </h3>
                  <p className="mt-2 text-sm text-gold font-bold">
                    {formatPrice(room.price)} F
                    <span className="text-lux-gray text-xs font-normal"> / nuit</span>
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm text-lux-gray-light">
                    {room.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {room.specs.map((spec) => {
                      const Icon = iconMap[spec.icon];
                      return (
                        <span
                          key={spec.label}
                          className="flex items-center gap-1 text-xs text-lux-gray"
                        >
                          {Icon ? <Icon className="h-3.5 w-3.5" /> : "•"}
                          {spec.label}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}?text=${encodeURIComponent(
                        `Bonjour, je suis intéressé par le ${room.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center rounded bg-gold py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-gold-light"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(
                        `Réservation - ${room.title}`
                      )}`}
                      className="flex flex-1 items-center justify-center rounded border border-white/20 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-black/90 text-gold transition-all hover:bg-gold hover:text-black lg:-right-14"
            aria-label="Suivant"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
