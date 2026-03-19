import { Button } from '@/components/button';
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
    title: 'Field2Fab Preview',
    description:
      'A preview duct fitting ordering app concept for HVAC field teams, scoped around straights, elbows, and square-to-round transitions before expanding further.',
    tag: 'New concept',
    href: '#field2fab',
  },
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

const previewScope = [
  'Straight duct in square and round configurations',
  'Elbows for square and round duct',
  'Square-to-round transitions',
  'Connector selection for each end of the fitting',
  'Material selection, gauge/pressure class, and notes',
  'Email-ready order summary sent to the address entered by the user',
];

const codexPrompt = `Build a preview-first web application called Field2Fab for the HVAC sheet metal industry. The deployment target is Vercel and the production URL will be https://field2Fab.petra413.com. The application is intended for field personnel who need a fast way to order standard duct fittings from a phone, tablet, or desktop browser.

Primary goal:
Create a polished MVP that lets a user configure a fitting, review the order details, and submit the order so the app emails the order summary to the email address the user entered.

Preview-only scope for this first release:
- Straight duct: square and round
- Elbows: square and round
- Square-to-round fittings
- No full catalog yet; position the app clearly as a preview/beta

Core UX requirements:
- Mobile-first responsive design suitable for field use
- Clear step-by-step fitting selection flow
- Fast entry with large tap targets and minimal friction
- A persistent preview badge or messaging that this is a limited preview
- Review screen showing all selected options before submit

Per-item configuration requirements:
- Fitting type
- Shape/category (square, round, square-to-round where applicable)
- Dimensions appropriate to the fitting type
- Connector type for each end independently
- Material type
- Pressure class
- Quantity
- Optional job name, tag/mark number, and install notes
- Requestor name, company, and email address

Business rules:
- Show only fields relevant to the selected fitting type
- Connector options should support common HVAC fabrication workflows
- Validation should prevent incomplete or impossible submissions
- Submitted orders should generate a clean email summary that is easy for a fabrication shop to read
- Include clear messaging that orders are preview/demo requests unless the backend is later connected to production systems

Technical direction:
- Use Next.js with TypeScript and a clean component-based architecture
- Prepare the app for Vercel deployment
- Prefer server actions or API routes for submission handling
- Structure data so more fitting families can be added later
- Add placeholder/mock email handling for now if live email credentials are not present
- Include sensible seed data/constants for fitting options, connector types, materials, and pressure classes

Suggested pages/sections:
- Landing page with concise explanation of the preview
- Order builder page/form
- Review/confirmation state
- Optional admin-friendly order summary layout/component for future reuse

Visual direction:
- Professional industrial feel
- Clean typography, strong contrast, and obvious form hierarchy
- Interface should feel practical, fast, and trustworthy rather than flashy

Please generate the project structure, UI, validation, seed option data, and submission flow for this preview release, and leave comments where production integrations such as transactional email or ERP/shop system connections would be added later.`;

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />

      <section className="px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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
              <Button href="#field2fab" variant="secondary">
                New app concept
              </Button>
            </div>
          </div>

          <div className="section-border animate-float rounded-[2rem] p-8 shadow-glow">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
              Now planning
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-400">Next launch concept</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Field2Fab, a preview ordering app for HVAC duct fittings built around field-to-shop communication.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">URL</p>
                  <p className="mt-2 font-medium text-white">field2Fab.petra413.com</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Initial scope</p>
                  <p className="mt-2 font-medium text-white">Straights, elbows, square-to-rounds</p>
                </div>
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
        description="The Bellin Training Tracker is the current flagship project, and Field2Fab is now framed as the next focused concept in the pipeline."
      >
        <FeaturedProjectPanel />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="field2fab"
        eyebrow="New Feature"
        title="Field2Fab preview concept"
        description="This new section turns your rough idea into a launch-ready concept brief and a Codex prompt you can reuse when creating the Vercel project."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="section-border rounded-[2rem] p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Preview app</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">field2Fab.petra413.com</h3>
              </div>
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                Preview only
              </span>
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              A focused ordering experience for HVAC field personnel to request common duct fittings and send a clean order summary to the email address they provide.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Initial release scope</p>
              <ul className="mt-5 space-y-4 text-slate-200">
                {previewScope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-steel-400" aria-hidden="true" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="section-border rounded-[2rem] p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Prompt for Codex</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Project brief, refined</h3>
              </div>
              <Button href="mailto:?subject=Field2Fab%20Codex%20Prompt&body=Use%20the%20prompt%20from%20field2Fab.petra413.com%20to%20generate%20the%20preview%20app." variant="secondary">
                Email idea
              </Button>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
              <div className="border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Ready to paste into Codex
              </div>
              <pre className="max-h-[38rem] overflow-auto whitespace-pre-wrap px-4 py-5 text-sm leading-7 text-slate-200">{codexPrompt}</pre>
            </div>
          </article>
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
        id="contact"
        eyebrow="Contact"
        title="Let’s build something useful"
        description="If you have a workflow that needs cleanup, a manual process that should be automated, or an idea worth prototyping, I’d be glad to talk."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="section-border rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-steel-400">Reach out</p>
            <a href="mailto:chris@example.com" className="mt-4 inline-block text-2xl font-semibold text-white hover:text-steel-400">
              chris@example.com
            </a>
            <p className="mt-4 leading-7 text-slate-300">
              Replace the email, GitHub, LinkedIn, and project URL placeholders with your real links before going live.
            </p>
          </div>
          <form className="section-border rounded-[2rem] p-8" action="#" method="post">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                What are you working on?
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
                  placeholder="A rough idea, a workflow problem, or a tool you want to build"
                />
              </label>
              <Button href="mailto:chris@example.com">Start the conversation</Button>
            </div>
          </form>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
