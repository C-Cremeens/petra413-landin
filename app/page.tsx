import { Button } from '@/components/button';
import { FeaturedProjectPanel } from '@/components/featured-project-panel';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { SectionWrapper } from '@/components/section-wrapper';

const skillGroups = [
  {
    title: 'Development',
    skills: ['C#', '.NET', 'Blazor', 'APIs'],
  },
  {
    title: 'Tools',
    skills: ['Azure DevOps', 'SQL Server', 'Autodesk APIs'],
  },
  {
    title: 'Other',
    skills: ['Automation', 'IoT', 'Process Improvement'],
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
  {
    title: 'IoT / ESP32 Projects',
    description:
      'Hands-on connected device experiments that blend software, hardware, and practical problem solving in the field.',
    tag: 'Embedded + IoT',
  },
];

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
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="section-border animate-float rounded-[2rem] p-8 shadow-glow">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Practical systems thinking
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Building software that supports field operations, engineering teams, and continuous improvement.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Background</p>
                  <p className="mt-2 font-medium text-white">Construction + fabrication</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Stack</p>
                  <p className="mt-2 font-medium text-white">.NET, Blazor, automation</p>
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
        description="The Bellin Training Tracker is the current flagship project, with additional tooling and automation work ready to be expanded here over time."
      >
        <FeaturedProjectPanel />
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
                  placeholder="A short note about the problem, project, or workflow you want to improve."
                />
              </label>
              <Button href="mailto:chris@example.com?subject=Project%20Inquiry">Send by email</Button>
            </div>
          </form>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
