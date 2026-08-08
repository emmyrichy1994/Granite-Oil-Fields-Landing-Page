import type { Metadata } from 'next';
import './globals.css';
import './extra.css';
import './brand.css';
export const metadata: Metadata = { title: { default: 'Granite Oilfield Services', template: '%s | Granite Oilfield Services' }, description: 'Experienced drilling, completions, frac monitoring and well plugging support.', metadataBase: new URL('https://graniteoilfieldsinc.com'), openGraph: { title: 'Granite Oilfield Services', description: 'Practical expertise for dependable field operations.', type: 'website' } };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
