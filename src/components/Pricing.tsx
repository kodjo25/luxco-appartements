import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { pricing } from "@/lib/luxco-data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price);
}

export function Pricing() {
  const [active, setActive] = useState(pricing[0].id);
  const activeCategory = pricing.find((p) => p.id === active) ?? pricing[0];

  const rows = [
    { label: "Nuitée", value: activeCategory.nightly, save: null },
    { label: "1 Semaine", value: activeCategory.weekly, save: activeCategory.nightly * 7 - activeCategory.weekly },
    { label: "2 Semaines", value: activeCategory.biweekly, save: activeCategory.nightly * 14 - activeCategory.biweekly },
    { label: "3 Semaines", value: activeCategory.threeWeeks, save: activeCategory.nightly * 21 - activeCategory.threeWeeks },
    { label: "1 Mois", value: activeCategory.monthly, save: activeCategory.nightly * 30 - activeCategory.monthly },
  ];

  return (
    <section id="tarifs" className="section-padding bg-black">
      <div className="container-lux">
        <SectionHeader
          eyebrow="Tarifs"
          title={
            <>
              Tarifs détaillés par catégorie{" "}
              <span className="text-gold">d'appartement</span>
            </>
          }
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {pricing.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                active === category.id
                  ? "bg-gold text-black"
                  : "border border-white/10 bg-black-card text-lux-gray hover:border-gold/50 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-black-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-black-light">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gold">
                  Durée
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest text-gold">
                  Prix
                </th>
                <th className="hidden px-6 py-4 text-right text-xs font-bold uppercase tracking-widest text-gold md:table-cell">
                  Économie
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`transition-colors hover:bg-gold/5 ${
                    index !== rows.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-white/90">{row.label}</td>
                  <td className="px-6 py-4 text-right text-lg font-bold text-gold">
                    {formatPrice(row.value)} F
                  </td>
                  <td className="hidden px-6 py-4 text-right text-lux-gray md:table-cell">
                    {row.save && row.save > 0 ? `${formatPrice(row.save)} F` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
