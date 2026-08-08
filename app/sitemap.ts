import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/about', '/services', '/careers', '/faq', '/contact'].map(path => ({ url: `https://graniteoilfieldsinc.com${path}`, lastModified: new Date() })); }
