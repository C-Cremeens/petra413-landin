import { Button } from '@/components/button';

const features = [
  'Tracks training activity across participants and teams',
  'Leaderboards for miles and minutes to keep momentum visible',
  'Encourages accountability and engagement with a clear, friendly interface',
];

export function FeaturedProjectPanel() {
  return (
    <article className="section-border relative overflow-hidden rounded-[2rem] p-8 shadow-glow sm:p-10">
      <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-30" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-steel-500/15 blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Featured Project</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bellin Training Tracker
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A focused training dashboard designed to make progress visible, motivate participation, and give teams a simple way to stay accountable during training cycles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://bellin.petra413.com/" external>
              View Project
            </Button>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Key Features</p>
          <ul className="mt-5 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-slate-200">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-steel-400" aria-hidden="true" />
                <span className="leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
