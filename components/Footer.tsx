export default function Footer() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=PT.Daesoung+Electric+Components%2C+Jl.+Telaga+Mas+Raya+No.10%2C+Talaga%2C+Cikupa%2C+Tangerang%2C+Banten+15710%2C+Indonesia";

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="/" className="text-2xl font-bold tracking-wide text-green-500">DSEC</a>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              DAESOUNG ELECTRIC COMPONENTS
              <br />
              Precision Wire Harness Solutions
            </p>
            <p className="mt-5 text-sm text-slate-500">Trusted Manufacturing Partner Since 2000</p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-green-500">NAVIGATION</p>
            <nav className="mt-5 flex flex-col gap-3">
              <a href="/" className="text-slate-400 transition hover:text-white">HOME</a>
              <a href="/about" className="text-slate-400 transition hover:text-white">ABOUT</a>
              <a href="/products" className="text-slate-400 transition hover:text-white">PRODUCTS</a>
              <a href="/quality" className="text-slate-400 transition hover:text-white">QUALITY</a>
              <a href="/contact" className="text-slate-400 transition hover:text-white">CONTACT</a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-green-500">CONTACT</p>
            <div className="mt-5 space-y-4 text-slate-400">
              <p className="leading-6">PT.Daesoung Electric Components<br />Jl. Telaga Mas Raya No.10<br />Talaga, Kec. Cikupa<br />Kabupaten Tangerang, Banten 15710<br />Indonesia</p>
              <p><span className="text-slate-500">TEL</span><br /><a href="tel:+622159401278" className="transition hover:text-white">+62 21 59401278</a></p>
              <p><span className="text-slate-500">EMAIL</span><br /><a href="mailto:daesoungcs@daesoung.com" className="transition hover:text-white">daesoungcs@daesoung.com</a></p>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center font-semibold text-green-400 transition hover:text-green-300">VIEW ON GOOGLE MAPS ↗</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 DAESOUNG ELECTRIC COMPONENTS. All rights reserved.</p>
            <p>DSEC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}