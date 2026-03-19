import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.vercel.app'),
  title: 'Chris Cremeens | Application Engineer & Developer',
  description:
    'Portfolio site for Chris Cremeens, an application engineer and developer building practical tools for construction, fabrication, and process improvement.',
  keywords: [
    'Chris Cremeens',
    'Application Engineer',
    'Developer',
    '.NET',
    'Blazor',
    'Automation',
    'Construction Technology',
  ],
  openGraph: {
    title: 'Chris Cremeens | Application Engineer & Developer',
    description:
      'Practical software, automation, and engineering solutions for real-world workflows.',
    url: 'https://example.vercel.app',
    siteName: 'Chris Cremeens Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Cremeens | Application Engineer & Developer',
    description:
      'Practical software, automation, and engineering solutions for real-world workflows.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
