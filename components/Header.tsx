export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[136px] w-full max-w-[1460px] items-center justify-between px-8 lg:px-9">
        {/* Final DSEC horizontal logo */}
        <a
          href="/"
          aria-label="DAESOUNG ELECTRIC COMPONENTS home"
          className="hidden shrink-0 md:block"
        >
          <svg
            width="520"
            height="100"
            viewBox="0 0 680 144"
            role="img"
            aria-labelledby="dsec-logo-title"
            className="h-[100px] w-[520px]"
          >
            <title id="dsec-logo-title">DAESOUNG ELECTRIC COMPONENTS — DSEC</title>

            {/* Balanced rounded frame */}
            <rect
              x="7"
              y="7"
              width="666"
              height="130"
              rx="65"
              fill="#ffffff"
              stroke="#087f3d"
              strokeWidth="6"
            />

            {/* DSEC green oval */}
            <ellipse cx="101" cy="72" rx="86" ry="45" fill="#087f3d" />
            <text
              x="101"
              y="89"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="53"
              fontWeight="800"
              letterSpacing="2"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DSEC
            </text>

            {/* Company name */}
            <text
              x="206"
              y="67"
              fill="#173f8f"
              fontSize="28"
              fontWeight="800"
              letterSpacing="1"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DAESOUNG ELECTRIC
            </text>

            {/* Components subtitle */}
            <line x1="206" y1="84" x2="271" y2="84" stroke="#6f7f9b" strokeWidth="2" />
            <text
              x="284"
              y="92"
              fill="#6f7f9b"
              fontSize="16"
              fontWeight="700"
              letterSpacing="4.5"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              COMPONENTS
            </text>
            <line x1="466" y1="84" x2="531" y2="84" stroke="#6f7f9b" strokeWidth="2" />
          </svg>
        </a>

        {/* Compact DSEC mark — mobile */}
        <a href="/" aria-label="DSEC home" className="md:hidden">
          <svg
            width="92"
            height="46"
            viewBox="0 0 184 92"
            role="img"
            aria-label="DSEC"
            className="h-[46px] w-[92px]"
          >
            <ellipse cx="92" cy="46" rx="84" ry="38" fill="#087f3d" />
            <text
              x="92"
              y="62"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="43"
              fontWeight="800"
              letterSpacing="2"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DSEC
            </text>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="/"
            className="border-b-2 border-green-600 px-1 py-5 text-[17px] font-medium text-green-700 transition hover:text-green-800"
          >
            HOME
          </a>
          <a href="/about" className="px-1 py-5 text-[17px] font-medium text-slate-800 transition hover:text-green-700">
            ABOUT
          </a>
          <a href="/products" className="px-1 py-5 text-[17px] font-medium text-slate-800 transition hover:text-green-700">
            PRODUCTS
          </a>
          <a href="/quality" className="px-1 py-5 text-[17px] font-medium text-slate-800 transition hover:text-green-700">
            QUALITY
          </a>
          <a href="/contact" className="px-1 py-5 text-[17px] font-medium text-slate-800 transition hover:text-green-700">
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
              <a href="/" className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">HOME</a>
              <a href="/about" className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">ABOUT</a>
              <a href="/products" className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">PRODUCTS</a>
              <a href="/quality" className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">QUALITY</a>
              <a href="/contact" className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">CONTACT</a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
