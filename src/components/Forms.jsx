import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function Input({ label, id, type = 'text', required, ...props }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-widest text-[#9C9C9C] mb-2">{label}{required ? ' *' : ''}</span>
      <input id={id} name={id} type={type} required={required} aria-required={required}
        className="w-full bg-[#121212] border border-white/10 rounded-sm px-3 py-2 text-white placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#E11D2A]/50"
        {...props}
      />
    </label>
  );
}

function Textarea({ label, id, required, ...props }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-widest text-[#9C9C9C] mb-2">{label}{required ? ' *' : ''}</span>
      <textarea id={id} name={id} required={required} aria-required={required}
        className="w-full min-h-[120px] bg-[#121212] border border-white/10 rounded-sm px-3 py-2 text-white placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#E11D2A]/50"
        {...props}
      />
    </label>
  );
}

function Button({ children, variant='primary', ...props }) {
  const base = 'inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#E11D2A]/40';
  const styles = variant === 'primary'
    ? 'bg-[#E11D2A] text-white hover:brightness-110 shadow-[0_0_20px_rgba(225,29,42,0.3)]'
    : 'bg-[#1F1F1F] text-white hover:bg-white/10';
  return <button className={`${base} ${styles}`} {...props}>{children}</button>;
}

export function BriefForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.consent = !!payload.consent;
    try {
      const res = await fetch(`${API_BASE}/api/brief-requests`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
      if(!res.ok) throw new Error('Failed');
      setDone(true);
      e.currentTarget.reset();
    } catch(err){
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="brand_name" label="Brand / Artist" required placeholder="Name" />
        <Input id="contact_name" label="Contact Name" required placeholder="Your name" />
        <Input id="email" label="Email" type="email" required placeholder="you@domain.com" />
        <Input id="instagram" label="Instagram" placeholder="@handle" />
        <Input id="website" label="Website" type="url" placeholder="https://" />
        <Input id="budget_range" label="Budget Range" placeholder="$2k - $10k" />
        <Input id="timeline" label="Timeline" placeholder="2-4 weeks" />
      </div>
      <Textarea id="brief" label="Project Brief" required placeholder="Tell us what you need, the vibe, the deliverables." />
      <label className="flex items-center gap-2 text-xs text-[#9C9C9C]">
        <input type="checkbox" name="consent" defaultChecked className="accent-[#E11D2A]" /> I agree to be contacted by DSM.
      </label>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Submit Brief'}</Button>
        {done && <span className="text-[#FFC857] text-xs">Thanks — we’ll get back fast.</span>}
      </div>
    </form>
  );
}

export function CreatorForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch(`${API_BASE}/api/creator-applications`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
      if(!res.ok) throw new Error('Failed');
      setDone(true);
      e.currentTarget.reset();
    } catch(err){
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="name" label="Name / Alias" required placeholder="Your name" />
        <Input id="email" label="Email" type="email" required placeholder="you@domain.com" />
        <Input id="discipline" label="Discipline" required placeholder="Film / Photo / Design / Edit / etc." />
        <Input id="location" label="Location" placeholder="City, Country" />
        <Input id="portfolio_url" label="Portfolio URL" type="url" placeholder="https://" />
        <Input id="socials" label="Key Socials" placeholder="@ig, @tiktok" />
      </div>
      <Textarea id="bio" label="Short Bio" placeholder="Who are you and what do you want to build?" />
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Apply to DSM'}</Button>
        {done && <span className="text-[#FFC857] text-xs">Got it — we’ll review and reply.</span>}
      </div>
    </form>
  );
}

export function SubscribeForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch(`${API_BASE}/api/subscribers`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
      if(!res.ok) throw new Error('Failed');
      setDone(true);
      e.currentTarget.reset();
    } catch(err){
      alert('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex gap-3">
      <input type="email" name="email" required placeholder="Email address" aria-label="Email address"
        className="flex-1 bg-[#121212] border border-white/10 rounded-sm px-3 py-2 text-white placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#E11D2A]/50" />
      <button type="submit" disabled={loading} className="px-4 py-2 rounded-sm bg-[#FFC857] text-black font-semibold hover:brightness-110">{loading ? '…' : 'Join'}</button>
      {done && <span className="self-center text-[#9C9C9C] text-xs">Welcome to DSM.</span>}
    </form>
  );
}
