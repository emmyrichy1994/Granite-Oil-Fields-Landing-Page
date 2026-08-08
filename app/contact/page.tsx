import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { Navigation } from '@/components/navigation';

export default function ContactPage() {
  return <main><Navigation/><section className="subhero"><p className="eyebrow">GRANITE OILFIELD SERVICES</p><h1>Contact Us</h1><p>Tell us about your drilling, completion, frac monitoring or plugging requirement.</p></section><section className="contactSection"><div className="contactCopy"><p className="eyebrow">START A CONVERSATION</p><h2>Let’s discuss your field requirements.</h2><p>Share the scope, location and timing of your project. Granite Oilfield Services will prepare a response around the support your operation needs.</p><a className="textLink" href="mailto:info@graniteoilfieldsinc.com">info@graniteoilfieldsinc.com</a><p className="contactAddress">Granite Oilfield Services, Inc.<br/>3773 STATE HWY 374<br/>Green River, WY 82935</p></div><div className="contactVisual"><div className="contactImage"><Image src="/images/hero-pumpjacks-sunset.jpg" fill sizes="(min-width:760px) 45vw, 100vw" alt="Oilfield operation"/></div><ContactForm/></div></section></main>;
}
