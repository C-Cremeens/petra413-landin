import { Button } from '@/components/button';
import { ContactForm } from '@/components/contact-form';
import { FeaturedProjectPanel } from '@/components/featured-project-panel';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { SectionWrapper } from '@/components/section-wrapper';

const skillGroups = [
  {
    title: 'Development',
    skills: ['C#', '.NET', 'Blazor', 'Next.js'],
  },
  {
    title: 'Tools',
    skills: ['Azure DevOps', 'SQL Server', 'Autodesk APIs', 'Vercel'],
  },
  {
    title: 'Other',
    skills: ['Automation', 'IoT', 'Process Improvement', 'Field workflows'],
  },
];

const projects = [
  {
    title: 'TG-Tools / Internal Tools',
    description:
      'A growing set of internal utilities aimed at reducing repetitive tasks, improving visibility, and supporting day-to-day engineering work.',
    tag: 'Internal systems',
  },
  {
    title: 'Automation Tools',
    description:
      'Workflow helpers for turning manual steps into repeatable processes, saving time and reducing avoidable friction for teams.',
    tag: 'Process automation',
  },
];

const field2FabHighlights = [
  'Live preview for a focused HVAC fitting ordering flow',
  'Early scope centered on straights, elbows, and square-to-round transitions',
  'Built around cleaner field-to-shop communication and handoff speed',
];

const quickFacts = [
  { label: 'Focus', value: 'Workflow automation' },
  { label: 'Industry context', value: 'Construction + fabrication' },
  { label: 'Primary goal', value: 'Useful software that ships' },
];

const contactPoints = [
  'Talk through an internal tool idea or process bottleneck',
  'Review a workflow that needs better visibility or fewer manual steps',
  'Prototype a practical app for a field, shop, or office team',
];

export default function HomePage() {
  return (
    <main id="content">
      <Navbar />

      <section className="px-6 pb-20 pt-14 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fadeUp">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">
              Application Engineer & Developer
            </p>
            <h1 className="text-balance mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Chris Cremeens
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-slate-300 sm:text-2xl">
              I build tools that simplify workflows, automate processes, and solve real-world problems in construction and fabrication.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="secondary">
                Start a Conversation
              </Button>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickFacts.map((item) => (
                <div key={item.label} className="section-border rounded-3xl p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</dt>
                  <dd className="mt-3 text-sm font-medium leading-6 text-slate-100">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="section-border animate-float rounded-[2rem] p-8 shadow-glow">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
              Now planning
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-400">Next launch concept</p>
                <p className="mt-2 text-lg font-medium leading-8 text-white">
                  Field2Fab, a preview ordering app for HVAC duct fittings built around field-to-shop communication.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Live preview</p>
                  <p className="mt-2 font-medium text-white">field2fab.petra413.com</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Initial scope</p>
                  <p className="mt-2 font-medium text-white">Straights, elbows, square-to-rounds</p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-steel-400/20 bg-steel-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-steel-200">Why it matters</p>
                <p className="mt-3 leading-7 text-slate-200">
                  The concept stays intentionally narrow so the experience feels fast, clear, and directly aligned with real handoff pain points between the field and the shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper
        id="about"
        eyebrow="About"
        title="Engineering perspective, developer mindset"
        description="I work at the intersection of application engineering, software development, and practical field experience. That mix helps me build tools that are grounded in how people actually work."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            'My experience in construction and fabrication gives me a direct view of the bottlenecks, handoffs, and communication gaps that slow work down.',
            'On the software side, I use .NET, Blazor, APIs, and automation to turn those pain points into usable internal tools and cleaner workflows.',
            'I care about practical solutions, steady improvement, and staying curious enough to keep learning better ways to solve the next problem.',
          ].map((item) => (
            <div key={item} className="section-border rounded-3xl p-6 text-base leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        eyebrow="Portfolio"
        title="Featured work and what’s next"
        description="Bellin Training Tracker remains the flagship project, while Field2Fab is highlighted once here as the current concept preview alongside other internal and automation work."
      >
        <FeaturedProjectPanel />
        <article className="section-border relative mt-8 overflow-hidden rounded-[2rem] p-8 shadow-glow sm:p-10">
          <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-20" aria-hidden="true" />
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-steel-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Concept Preview</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Field2Fab</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A field-to-fabrication ordering concept for HVAC teams that reduces friction between the job site and the shop with a simple, focused ordering flow.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="https://field2fab.petra413.com" external>
                  View Project
                </Button>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Key Highlights</p>
              <ul className="mt-5 space-y-4">
                {field2FabHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-slate-200">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-steel-400" aria-hidden="true" />
                    <span className="leading-7">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="skills"
        eyebrow="Expertise"
        title="Technical strengths built around useful outcomes"
        description="I focus on technologies that help teams move faster, reduce friction, and create systems that are easier to maintain and improve."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="section-border rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-steel-400" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="approach"
        eyebrow="Approach"
        title="Build the thing that actually helps"
        description="The best tools are not the flashiest ones. They are the ones that reduce friction, fit into real workflows, and make people’s jobs easier without getting in the way."
      >
        <div className="section-border rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Solve real problems</h3>
              <p className="mt-3 leading-7 text-slate-300">
                I start with the operational problem first, then design the software around the people and process it needs to support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Bridge field and technology</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Understanding both the shop-floor reality and the technical implementation helps me make better decisions on what to build and how to ship it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Keep improving</h3>
              <p className="mt-3 leading-7 text-slate-300">
                I value iteration, feedback, and continuous learning so each release becomes more useful, more stable, and easier to maintain.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>


      <SectionWrapper
        id="heart"
        eyebrow="Personal"
        title="The Heart of the Dev"
        description="What I build is shaped by more than just tools and workflows."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Faith',
              body:
                'My faith keeps me grounded. It shapes how I approach work, how I treat people, and how I think about responsibility in what I build and contribute.',
            },
            {
              title: 'Family',
              body:
                'Family is the reason behind the work. It’s a reminder to build things that matter, use time well, and keep perspective on what’s actually important.',
            },
            {
              title: 'Fun',
              body:
                'I enjoy building outside of work too—whether that’s side projects, experimenting with new ideas, or just staying curious. That mindset carries into everything I create.',
            },
          ].map((item) => (
            <article key={item.title} className="section-border rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        eyebrow="Contact"
        title="Let’s build something useful"
        description="If you have a workflow that needs cleanup, a manual process that should be automated, or an idea worth prototyping, I’d be glad to talk."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-border rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Good fit if you want to</p>
            <ul className="mt-6 space-y-4">
              {contactPoints.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-steel-400" aria-hidden="true" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Best next step</p>
              <p className="mt-3 leading-7 text-slate-200">
                Share a little context in the form and I can get a better sense of the workflow, bottleneck, or tool idea you have in mind.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
