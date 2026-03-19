import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-200">Chris Cremeens</p>
          <p>Practical software for field, shop, and operations workflows.</p>
          <p>petra413 stands for Petra, Greek for rock like God, and 413 from Philippians 4:13.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="#content" className="hover:text-white">
            Back to top
          </Link>
          <Link href="https://github.com/C-Cremeens" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/chris-cremeens-45865a226/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
