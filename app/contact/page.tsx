import { SubPage } from '@/components/sub-page';
import { ContactForm } from '@/components/contact-form';
import { Navigation } from '@/components/navigation';
export default function ContactPage() { return <main><Navigation/><section className="subhero"><p className="eyebrow">GRANITE OIL FIELDS</p><h1>Contact Us</h1><p>Tell us about your upcoming project. Our team is ready to help.</p></section><section className="contactSection"><div><p className="eyebrow">START A CONVERSATION</p><h2>Let’s plan the work ahead.</h2><p>Submit your enquiry and your email application will open with the message addressed to the Granite Oil Fields team.</p><a className="textLink" href="mailto:info@graniteoilfieldsinc.com">info@graniteoilfieldsinc.com</a></div><ContactForm/></section></main>; }
