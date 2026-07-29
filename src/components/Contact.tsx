import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { contact } from "@/lib/luxco-data";
import { whatsappQr } from "@/lib/assets";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    guests: "",
    arrival: "",
    departure: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Demande de réservation — LUXCO APPARTEMENT");
    const body = encodeURIComponent(
      `Nom : ${form.name}\nTéléphone : ${form.phone}\nType d'appartement : ${form.type}\nNombre de personnes : ${form.guests}\nDate d'arrivée : ${form.arrival}\nDate de départ : ${form.departure}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-black-light">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Nous sommes à votre écoute{" "}
              <span className="text-gold">24h/24</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-white md:text-3xl">
              Contactez-<span className="text-gold">nous</span>
            </h3>
            <p className="mt-4 text-lux-gray-light">
              Une question, une réservation ou un devis ? Notre équipe vous
              répond rapidement par WhatsApp ou Email.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                    Adresse
                  </h4>
                  <p className="mt-1 text-white/90">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                    WhatsApp
                  </h4>
                  <div className="mt-1 space-y-1">
                    {contact.whatsappDisplay.map((num, i) => (
                      <a
                        key={i}
                        href={`https://wa.me/${contact.whatsapp[i].replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/90 transition-colors hover:text-gold"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                    Email
                  </h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-white/90 transition-colors hover:text-gold"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                    Horaires
                  </h4>
                  <p className="mt-1 text-white/90">Disponible 24h/24 — 7j/7</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-black-card p-6 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="https://wa.me/22890856826"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scanner pour discuter sur WhatsApp"
                className="rounded-xl bg-white p-3 transition-transform hover:scale-105"
              >
                <img
                  src={whatsappQr}
                  alt="Code QR WhatsApp LUXCO +228 90 85 68 26"
                  className="h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60"
                />
              </a>
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
                  Scannez pour discuter
                </h4>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-black-card p-8"
          >
            <h3 className="mb-6 text-center font-display text-xl text-white">
              Demande de <span className="text-gold">réservation</span>
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Nom complet
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Téléphone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                  placeholder="Votre téléphone"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Type d'appartement
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white transition-colors focus:border-gold focus:outline-none"
                >
                  <option value="">Choisir...</option>
                  <option>Chambre Salon Deluxe Duplex</option>
                  <option>Chambre Salon Standard</option>
                  <option>Trois Chambres Salon Duplex VIP</option>
                  <option>Deux Chambres Salon Duplex VIP</option>
                  <option>Trois Chambres Salon Deluxe</option>
                  <option>Deux Chambres Salon Deluxe</option>
                  <option>Place des Fêtes</option>
                  <option>Stockage</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Nombre de personnes
                </label>
                <input
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  type="number"
                  min={1}
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                  placeholder="Ex: 2"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Date d'arrivée
                </label>
                <input
                  name="arrival"
                  value={form.arrival}
                  onChange={handleChange}
                  required
                  type="date"
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white transition-colors focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                  Date de départ
                </label>
                <input
                  name="departure"
                  value={form.departure}
                  onChange={handleChange}
                  required
                  type="date"
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white transition-colors focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lux-gray">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:bg-gold-light hover:shadow-gold-glow"
            >
              <Send size={18} />
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
