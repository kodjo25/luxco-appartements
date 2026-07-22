import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Rooms } from "@/components/Rooms";
import { Events } from "@/components/Events";
import { Storage } from "@/components/Storage";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "LUXCO APPARTEMENT — Luxe & Confort à Kégué" },
      {
        name: "description",
        content:
          "LUXCO APPARTEMENT — Appartements meublés de standing 1 à 3 chambres à Kégué. Luxe, confort et élégance. Réservez par WhatsApp ou Email.",
      },
      {
        property: "og:title",
        content: "LUXCO APPARTEMENT — Luxe & Confort à Kégué",
      },
      {
        property: "og:description",
        content:
          "Appartements meublés de standing 1 à 3 chambres à Kégué. Réservez par WhatsApp ou Email.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function IndexPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Events />
      <Storage />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
