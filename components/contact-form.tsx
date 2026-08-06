'use client';
import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [notice, setNotice] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get('subject') || 'Granite Oil Fields enquiry');
    const body = [`Name: ${form.get('name')}`, `Email: ${form.get('email')}`, `Phone: ${form.get('phone') || 'Not provided'}`, `Company: ${form.get('company') || 'Not provided'}`, '', String(form.get('message'))].join('\n');
    window.location.href = `mailto:info@graniteoilfieldsinc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice('Your email application is opening with your enquiry prepared.');
  }
  return <form className="contactForm" onSubmit={submit}><div className="formGrid"><label>Full name<input name="name" required autoComplete="name" /></label><label>Email address<input name="email" type="email" required autoComplete="email" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label><label>Company<input name="company" autoComplete="organization" /></label></div><label>Subject<input name="subject" required placeholder="How can we help?" /></label><label>Message<textarea name="message" required rows={6} placeholder="Tell us about your project or requirement." /></label><button className="button dark" type="submit">Send Enquiry <Send size={17}/></button>{notice&&<p className="formNotice" role="status">{notice}</p>}</form>;
}
