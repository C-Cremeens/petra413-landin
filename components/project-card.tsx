import { Button } from '@/components/button';

type ProjectCardProps = {
  title: string;
  description: string;
  tag: string;
  href?: string;
};

export function ProjectCard({ title, description, tag, href }: ProjectCardProps) {
  return (
    <article className="section-border group flex h-full flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-400/40 hover:bg-white/[0.07]">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel-400">{tag}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      </div>
      <div className="mt-8">
        {href ? <Button href={href}>View concept</Button> : <span className="text-sm text-slate-400">Coming soon</span>}
      </div>
    </article>
  );
}
