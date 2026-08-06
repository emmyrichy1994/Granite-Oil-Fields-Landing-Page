import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/about', '/services', '/careers', '/faq', '/contact'].map(path => ({ url: `https://graniteoilfields.com${path}`, lastModified: new Date() })); }
