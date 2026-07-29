import { SectionHeader } from "./SectionHeader";
import { storageItem, contact } from "@/lib/luxco-data";

import { Package } from "lucide-react";

export function Storage() {
  return (
    <section id="stockage" className="section-padding bg-black-light">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Stockage"
          title={
            <>
              Grands espaces de stockage{" "}
              <span className="text-gold">sécurisés</span>
            </>
          }
          description="Des espaces de stockage disponibles à la location pour vos marchandises, matériel ou archives."
        />

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black-card">
          <div>
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Package size={24} />
              </div>
              <h3 className="font-display text-2xl text-white">
                {storageItem.title}
              </h3>
              <p className="mt-2 text-3xl font-bold text-gold">
                {new Intl.NumberFormat("fr-FR").format(storageItem.price)} F
                <span className="text-base font-normal text-lux-gray"> / mois</span>
              </p>
              <p className="mt-4 text-lux-gray-light leading-relaxed">
                {storageItem.description}
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}?text=${encodeURIComponent(
                    "Bonjour, je suis intéressé par le service de stockage."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-gold-light"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Demande d'information stockage"
                  )}`}
                  className="inline-flex items-center justify-center rounded border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
