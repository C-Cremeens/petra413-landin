import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://field2fab.petra413.com'),
  title: 'Chris Cremeens | Builder of Field2Fab and practical construction software',
  description:
    'Portfolio site for Chris Cremeens, featuring practical software concepts like Field2Fab for HVAC field-to-fabrication ordering workflows.',
  keywords: [
    'Chris Cremeens',
    'Application Engineer',
    'Developer',
    'Field2Fab',
    'HVAC Software',
    'Sheet Metal',
    'Construction Technology',
  ],
  openGraph: {
    title: 'Chris Cremeens | Builder of Field2Fab and practical construction software',
    description:
      'Practical software, automation, and HVAC fabrication workflow concepts built for real-world teams.',
    url: 'https://field2fab.petra413.com',
    siteName: 'Chris Cremeens Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Cremeens | Builder of Field2Fab and practical construction software',
    description:
      'Practical software, automation, and HVAC fabrication workflow concepts built for real-world teams.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
