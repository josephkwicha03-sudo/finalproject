type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeader({ eyebrow, title, description, id }: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 id={id} className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </header>
  );
}

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`px-4 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
