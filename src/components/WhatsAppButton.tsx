import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/luxco-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp[0].replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contacter sur WhatsApp"
      style={{
        boxShadow: "0 0 0 0 rgba(37,211,102,0.7)",
        animation: "pulse-green 2s infinite",
      }}
    >
      <MessageCircle size={28} fill="currentColor" />
      <style>{`
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </a>
  );
}
