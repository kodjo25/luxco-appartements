import { SectionHeader } from "./SectionHeader";
import { features } from "@/lib/luxco-data";
import { logoUrl } from "@/lib/assets";
import { Wifi, Snowflake, Utensils, Shield, Tv, Car } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  snowflake: Snowflake,
  utensils: Utensils,
  shield: Shield,
  tv: Tv,
  car: Car,
};

export function About() {
  return (
    <section id="presentation" className="section-padding bg-black">
      <div className="container-lux">
        <SectionHeader
          eyebrow="LUXCO"
          title={
            <>
              L'élégance et le confort au cœur de{" "}
              <span className="text-gold">Kégué</span>
            </>
          }
          description="LUXCO APPARTEMENTS propose des appartements meublés haut de gamme conçus pour offrir une expérience de vie exceptionnelle alliant luxe, confort et praticité."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden rounded-lg border border-gold/20 bg-black-card p-12">
              <img
                src={logoUrl}
                alt="Logo LUXCO APPARTEMENTS"
                className="max-h-full w-full max-w-sm object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg border-2 border-gold" />
          </div>

          <div>
            <h3 className="font-display text-2xl font-light text-white md:text-3xl">
              Une expérience de séjour{" "}
              <span className="text-gold">unique</span>
            </h3>
            <p className="mt-6 text-lux-gray-light leading-relaxed">
              Animé par une vision de croissance régionale, LUXCO APPARTEMENTS
              ambitionne d'étendre ses activités dans les pays voisins tels que
              le Ghana, le Bénin et la Côte d'Ivoire dans un avenir proche.
            </p>
            <p className="mt-4 text-lux-gray-light leading-relaxed">
              Chaque appartement est pensé pour vous offrir un cadre de vie
              serein, moderne et entièrement équipé, que vous soyez en déplacement
              professionnel, en vacances ou en transition.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="group rounded-lg border border-white/10 bg-black-card p-5 text-center transition-all hover:-translate-y-1 hover:border-gold/50"
                  >
                    <div className="mb-3 inline-flex text-gold">
                      {Icon ? <Icon className="h-7 w-7" /> : <span className="text-2xl">✦</span>}
                    </div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {feature.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
