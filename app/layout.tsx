import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Granite Oil Fields', template: '%s | Granite Oil Fields' }, description: 'World-class oilfield services delivered safely and reliably.', metadataBase: new URL('https://graniteoilfields.com'), openGraph: { title: 'Granite Oil Fields', description: 'Powering energy. Delivering excellence.', type: 'website' } };
export default function Layout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
