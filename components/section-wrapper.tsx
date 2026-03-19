import { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, eyebrow, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
