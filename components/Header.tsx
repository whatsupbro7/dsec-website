export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-wide text-green-700"
        >
          DSEC
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-800 transition hover:text-green-700"
          >
            HOME
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-slate-800 transition hover:text-green-700"
          >
            ABOUT
          </a>

          <a
            href="/products"
            className="text-sm font-medium text-slate-800 transition hover:text-green-700"
          >
            PRODUCTS
          </a>

          <a
            href="/quality"
            className="text-sm font-medium text-slate-800 transition hover:text-green-700"
          >
            QUALITY
          </a>

          <a
            href="/contact"
            className="text-sm font-medium text-slate-800 transition hover:text-green-700"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">
            MENU
          </summary>

          <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
            <nav className="flex flex-col">
              <a
                href="/"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700"
              >
                HOME
              </a>

              <a
                href="/about"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700"
              >
                ABOUT
              </a>

              <a
                href="/products"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700"
              >
                PRODUCTS
              </a>

              <a
                href="/quality"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700"
              >
                QUALITY
              </a>

              <a
                href="/contact"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700"
              >
                CONTACT
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}