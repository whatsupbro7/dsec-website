function Icon({ children }: { children: React.ReactNode }) {
  return <span className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-300">{children}</span>;
}

function HomeIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="m3 10 9-7 9 7v10H5V10" /><path d="M9 20v-6h6v6" /></svg>; }
function BuildingIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="M4 21V5h10v16M14 9h6v12M7 8h4M7 12h4M7 16h4M17 13h1M17 17h1" /></svg>; }
function BoxIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></svg>; }
function ShieldIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="M12 3 20 6v5c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="M3 5h18v14H3z" /><path d="m3 6 9 7 9-7" /></svg>; }
function PinIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="9" r="2.2" /></svg>; }
function PhoneIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M6.6 10.8c1.5 3 3.6 4.9 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 3.9.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.2 21 3 12.8 3 2.5c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.9.1.4 0 .9-.3 1.2l-2.1 2.2Z" /></svg>; }

export default function Footer() {
  const placeId = "ChIJr8Kfc8UAQi4RPBeOlv4Rq6g";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=PT.Daesoung+Electric+Components&query_place_id=${placeId}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="/" className="text-2xl font-bold tracking-wide text-green-500">DSEC</a>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">DAESOUNG ELECTRIC COMPONENTS<br />Precision Wire Harness Solutions</p>
            <p className="mt-5 text-sm text-slate-500">Trusted Manufacturing Partner Since 2000</p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-green-500">SITE MENU</p>
            <nav className="mt-5 flex flex-col gap-3">
              <a href="/" className="flex items-center gap-2 text-slate-400 transition hover:text-white"><Icon><HomeIcon /></Icon><span>HOME</span></a>
              <a href="/about" className="flex items-center gap-2 text-slate-400 transition hover:text-white"><Icon><BuildingIcon /></Icon><span>ABOUT</span></a>
              <a href="/products" className="flex items-center gap-2 text-slate-400 transition hover:text-white"><Icon><BoxIcon /></Icon><span>PRODUCTS</span></a>
              <a href="/quality" className="flex items-center gap-2 text-slate-400 transition hover:text-white"><Icon><ShieldIcon /></Icon><span>QUALITY</span></a>
              <a href="/contact" className="flex items-center gap-2 text-slate-400 transition hover:text-white"><Icon><MailIcon /></Icon><span>CONTACT</span></a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-green-500">CONTACT</p>
            <div className="mt-5 space-y-4 text-slate-400">
              <div className="flex items-start gap-3"><PinIcon /><p className="leading-6">PT.Daesoung Electric Components<br />Jl. Telaga Mas Raya No.10<br />Talaga, Kec. Cikupa<br />Kabupaten Tangerang, Banten 15710<br />Indonesia</p></div>
              <div className="flex items-start gap-3"><PhoneIcon /><p><span className="text-slate-500">TEL</span><br /><a href="tel:+622159401278" className="transition hover:text-white">+62 21 59401278</a></p></div>
              <div className="flex items-start gap-3"><MailIcon /><p><span className="text-slate-500">EMAIL</span><br /><a href="mailto:daesoungcs@daesoung.com" className="whitespace-nowrap transition hover:text-white">daesoungcs@daesoung.com</a></p></div>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center font-semibold text-green-400 transition hover:text-green-300">VIEW ON GOOGLE MAPS ↗</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6"><div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"><p>© 2026 DAESOUNG ELECTRIC COMPONENTS. All rights reserved.</p><p>DSEC</p></div></div>
      </div>
    </footer>
  );
}
