import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-brand-surface border-b border-brand-navy/5 overflow-hidden">
      <div className="container-page relative py-14 md:py-20">
        <div className="max-w-3xl animate-reveal">
          {eyebrow && (
            <span className="inline-block text-brand-green text-xs font-bold mb-6">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy leading-[1.12] text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-brand-navy/60 leading-relaxed max-w-2xl text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
