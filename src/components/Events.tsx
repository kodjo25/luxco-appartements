import { SectionHeader } from "./SectionHeader";
import { contact } from "@/lib/luxco-data";
import { eventPhotos } from "@/lib/assets";

export function Events() {
  return (
    <section id="evenements" className="section-padding bg-black">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Fêtes"
          title={
            <>
              La <span className="text-gold">Place des Fêtes</span> LUXCO
            </>
          }
          description="L'espace événementiel signature de LUXCO APPARTEMENTS, où le luxe se vit, se ressent et se célèbre."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4">
            {eventPhotos.map((img, index) => (
              <div
                key={img}
                className="aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Place des Fêtes LUXCO ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="lg:pl-10">
            <h3 className="font-display text-2xl font-light text-white md:text-3xl">
              Un cadre <span className="text-gold">exceptionnel</span> pour vos
              événements
            </h3>
            <p className="mt-6 text-lux-gray-light leading-relaxed">
              Que ce soit pour un anniversaire, une réception, un séminaire ou
              une célébration familiale, notre Place des Fêtes offre un cadre
              élégant, spacieux et entièrement aménageable selon vos besoins.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Espace extérieur couvert et aéré",
                "Capacité modulable selon l'événement",
                "Accessibilité et parking sécurisé",
                "Disponible avec ou sans prestation complète",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}?text=${encodeURIComponent(
                  "Bonjour, je souhaite réserver la Place des Fêtes."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:bg-gold-light hover:shadow-gold-glow"
              >
                📱 Réserver sur WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(
                  "Réservation Place des Fêtes"
                )}`}
                className="inline-flex items-center justify-center rounded border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-gold hover:text-gold"
              >
                ✉️ Demander un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
