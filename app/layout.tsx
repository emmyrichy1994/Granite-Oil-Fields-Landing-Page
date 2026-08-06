import type { Metadata } from 'next';
import './globals.css';
import './extra.css';
import './brand.css';
export const metadata: Metadata = { title: { default: 'Granite Oil Fields Services', template: '%s | Granite Oil Fields Services' }, description: 'Experienced drilling, completions, frac monitoring and well plugging support.', metadataBase: new URL('https://graniteoilfields.com'), openGraph: { title: 'Granite Oil Fields Services', description: 'Practical expertise for dependable field operations.', type: 'website' } };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
