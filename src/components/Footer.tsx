import { navLinks, contact } from "@/lib/luxco-data";
import { logoUrl } from "@/lib/assets";
import { MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src={logoUrl}
              alt="LUXCO APPARTEMENT"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-lux-gray">
              LUXCO APPARTEMENT — Luxe & Confort à Kégué. Appartements meublés
              1 à 3 chambres, disponibles 24h/24.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lux-gray transition-all hover:border-gold hover:bg-gold hover:text-black"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lux-gray transition-all hover:border-gold hover:bg-gold hover:text-black"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-lux-gray transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Nos Atouts
            </h4>
            <ul className="space-y-3">
              {["Wi-Fi", "Climatisation", "Cuisine équipée", "Sécurité 24h/24"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-lux-gray">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-lux-gray">
              {contact.whatsappDisplay.map((num, i) => (
                <li key={num}>
                  <a
                    href={`https://wa.me/${contact.whatsapp[i].replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    {num}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-lux-gray">
          © {new Date().getFullYear()} LUXCO APPARTEMENT — Luxe & Confort. Tous
          droits réservés.
        </div>
      </div>
    </footer>
  );
}
