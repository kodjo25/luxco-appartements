import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, contact } from "@/lib/luxco-data";
import { logoUrl } from "@/lib/assets";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 py-3 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-lux flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="LUXCO APPARTEMENT"
            className={`h-12 w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-10" : "h-12"
            }`}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-gold-glow lg:inline-flex"
        >
          Réserver
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center text-gold lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-lux flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-black"
            >
              Réserver
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
