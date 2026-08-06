import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Navigation } from './navigation';
import { services } from '@/data/services';

const pageCopy: Record<string, { title: string; intro: string; label: string; heading: string; body: string }> = {
  about: { title: 'About Us', intro: 'A service partner built for the pace, risk and responsibility of oilfield operations.', label: 'WHO WE ARE', heading: 'Experienced support for the work that matters.', body: 'Granite Oil Fields Services supports operators with experienced field leadership, practical planning and responsive communication. We focus on the details that keep projects safe, productive and aligned with the plan.' },
  careers: { title: 'Careers', intro: 'Join a team that respects field experience, accountability and a job done right.', label: 'WORK WITH US', heading: 'Build your career in the field.', body: 'We are looking for dependable people who take ownership, value safety and enjoy solving real operational challenges. Granite Oil Fields Services offers a collaborative workplace where field knowledge is respected.' },
  faq: { title: 'Frequently Asked Questions', intro: 'Straightforward answers for operators planning drilling, completions, frac monitoring or plugging work.', label: 'HOW WE HELP', heading: 'Clear communication from the first call.', body: 'Every field program is different. Our team works with you to understand the scope, identify the right level of support and provide a practical path forward before operations begin.' },
};

export function SubPage({ page }: { page: string }) {
  const isServices = page === 'services';
  const copy = pageCopy[page] ?? pageCopy.about;
  return <main><Navigation/><section className="subhero"><p className="eyebrow">GRANITE OIL FIELDS SERVICES</p><h1>{isServices ? 'Our Services' : copy.title}</h1><p>{isServices ? 'Operational support for drilling, completions, frac monitoring and well plugging.' : copy.intro}</p></section>{isServices ? <section className="serviceDetails">{services.map((service,index)=><article id={service.id} key={service.id}><div className="serviceDetailVisual"><span>0{index+1}</span><h2>{service.title}</h2></div><div className="serviceDetailCopy"><p className="eyebrow">GRANITE OIL FIELDS SERVICES</p><h2>{service.title} support for well-planned operations.</h2><p>{service.summary}</p><ul>{service.features.map(feature=><li key={feature}><Check size={18}/>{feature}</li>)}</ul><Link href="/contact" className="textLink">Talk with our team <ArrowRight size={17}/></Link></div></article>)}</section> : <section className="pageContent"><p className="eyebrow">{copy.label}</p><h2>{copy.heading}</h2><p>{copy.body}</p><Link href="/contact" className="button dark">Contact Our Team</Link></section>}</main>;
}
