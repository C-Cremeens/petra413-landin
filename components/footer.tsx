import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-200">Chris Cremeens</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <Link href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
