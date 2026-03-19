import Link from 'next/link';
import { ReactNode } from 'react';

const variants = {
  primary:
    'bg-steel-500 text-slate-950 hover:bg-steel-400 focus-visible:ring-steel-400/70',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-steel-400/40 hover:bg-white/10 focus-visible:ring-white/40',
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
};

export function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
