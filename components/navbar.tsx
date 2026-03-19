'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#content" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
          Chris Cremeens
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-steel-400/40 hover:bg-white/10 md:inline-flex"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm text-white md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
