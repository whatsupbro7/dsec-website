"use client";

import { FormEvent, useState } from "react";

const ADDRESS = "Jl. Telaga Mas Raya No.10, Talaga, Kec. Cikupa, Kabupaten Tangerang, Banten 15710, Indonesia";
const MAP_EMBED = "https://www.google.com/maps?q=Jl.%20Telaga%20Mas%20Raya%20No.10%2C%20Talaga%2C%20Kec.%20Cikupa%2C%20Kabupaten%20Tangerang%2C%20Banten%2015710%2C%20Indonesia&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=PT.Daesoung+Electric+Components%2C+Jl.+Telaga+Mas+Raya+No.10%2C+Talaga%2C+Cikupa%2C+Tangerang%2C+Banten+15710%2C+Indonesia";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);
    setSending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      inquiry: String(data.get("inquiry") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your inquiry.");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not send your inquiry. Please try again later.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-green-800 px-6 py-32 text-white"><div className="mx-auto max-w-6xl"><p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">CONTACT</p><h1 className="text-5xl font-bold tracking-tight md:text-6xl">Get In Touch</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">We welcome your inquiries regarding wire harness, electrical components and customized manufacturing solutions.</p></div></section>

      <section className="px-6 py-24"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold tracking-[0.25em] text-green-700">CONTACT US</p><h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">DAESOUNG ELECTRIC COMPONENTS</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Please contact us for product inquiries, quotations, manufacturing partnerships or any other business questions.</p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-8"><p className="text-sm font-semibold tracking-[0.2em] text-green-700">ADDRESS</p><h3 className="mt-4 text-2xl font-bold text-slate-900">Indonesia Facility</h3><p className="mt-4 leading-7 text-slate-600">{ADDRESS}</p></div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-8"><p className="text-sm font-semibold tracking-[0.2em] text-green-700">PHONE</p><a href="tel:+622159401278" className="mt-4 block text-xl font-bold text-slate-900 hover:text-green-700">+62 21 59401278</a></div>
              <div className="rounded-2xl border border-slate-200 p-8"><p className="text-sm font-semibold tracking-[0.2em] text-green-700">EMAIL</p><a href="mailto:daesoungcs@daesoung.com" className="mt-4 block break-all text-lg font-bold text-slate-900 hover:text-green-700">daesoungcs@daesoung.com</a></div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-8"><p className="text-sm font-semibold tracking-[0.2em] text-green-700">BUSINESS</p><p className="mt-4 leading-7 text-slate-600">Wire Harness<br />Electrical Components<br />Custom Solutions</p></div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <iframe title="DAESOUNG ELECTRIC COMPONENTS location on Google Maps" src={MAP_EMBED} className="h-[520px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-5"><p className="text-sm text-slate-600">Find our facility on Google Maps.</p><a href={MAP_LINK} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800">Open Google Maps ↗</a></div>
          </div>
        </div>
      </div></section>

      <section className="bg-slate-50 px-6 py-24"><div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-semibold tracking-[0.25em] text-green-700">INQUIRY</p><h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Send Us a Message</h2><p className="mt-5 text-slate-600">Please provide your information and inquiry details below.</p></div><form onSubmit={handleSubmit} className="mt-14 space-y-6" noValidate><div className="grid gap-6 md:grid-cols-2"><div><label className="mb-2 block text-sm font-semibold text-slate-700">Name <span className="text-green-700">*</span></label><input required type="text" name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700" /></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">Company</label><input type="text" name="company" placeholder="Company name" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700" /></div></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">Email <span className="text-green-700">*</span></label><input required type="email" name="email" placeholder="your@email.com" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700" /></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">Phone</label><input type="tel" name="phone" placeholder="Phone number" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700" /></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">Inquiry Type <span className="text-green-700">*</span></label><select required name="inquiry" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"><option value="" disabled>Please select</option><option value="Wire Harness">Wire Harness</option><option value="Electrical Components">Electrical Components</option><option value="Custom Solution">Custom Solution</option><option value="Other">Other</option></select></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">Message <span className="text-green-700">*</span></label><textarea required name="message" rows={7} placeholder="Please tell us about your requirements." className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700" /></div>{error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">{error}</div>}{sent && <div role="status" className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800">Your inquiry has been sent successfully to DAESOUNG ELECTRIC COMPONENTS.</div>}<div className="pt-4 text-center"><button disabled={sending} type="submit" className="rounded-full bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60">{sending ? "SENDING..." : "SEND INQUIRY"}</button></div></form></div></section>
      <section className="bg-green-800 px-6 py-20 text-white"><div className="mx-auto max-w-6xl text-center"><p className="text-sm font-semibold tracking-[0.25em] text-green-300">DAESOUNG ELECTRIC COMPONENTS</p><h2 className="mt-4 text-3xl font-bold md:text-4xl">Your Reliable Manufacturing Partner</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">We look forward to discussing your requirements and building a long-term business relationship.</p></div></section>
    </main>
  );
}
