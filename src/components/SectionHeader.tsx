interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, description, light }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-light leading-tight tracking-wide text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-0.5 w-16 bg-gold" />
      {description && (
        <p className={`mt-6 text-base leading-relaxed ${light ? "text-white/80" : "text-lux-gray"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
