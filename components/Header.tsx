export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        {/* DSEC horizontal logo — desktop */}
        <a
          href="/"
          aria-label="DAESOUNG ELECTRIC COMPONENTS home"
          className="hidden md:block"
        >
          <svg
            width="360"
            height="76"
            viewBox="0 0 720 152"
            role="img"
            aria-labelledby="dsec-logo-title"
            className="h-[76px] w-[360px]"
          >
            <title id="dsec-logo-title">DAESOUNG ELECTRIC COMPONENTS — DSEC</title>

            {/* Outer logo frame */}
            <rect
              x="8"
              y="8"
              width="704"
              height="136"
              rx="68"
              fill="#ffffff"
              stroke="#087f3d"
              strokeWidth="7"
            />

            {/* DSEC green oval */}
            <ellipse
              cx="108"
              cy="76"
              rx="91"
              ry="48"
              fill="#087f3d"
            />
            <text
              x="108"
              y="94"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="56"
              fontWeight="800"
              letterSpacing="2"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DSEC
            </text>

            {/* Company name */}
            <text
              x="225"
              y="70"
              fill="#173f8f"
              fontSize="30"
              fontWeight="800"
              letterSpacing="1.2"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DAESOUNG ELECTRIC
            </text>

            {/* Components subtitle */}
            <line
              x1="225"
              y1="86"
              x2="292"
              y2="86"
              stroke="#6f7f9b"
              strokeWidth="2"
            />
            <text
              x="306"
              y="94"
              fill="#6f7f9b"
              fontSize="17"
              fontWeight="700"
              letterSpacing="5"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              COMPONENTS
            </text>
            <line
              x1="493"
              y1="86"
              x2="560"
              y2="86"
              stroke="#6f7f9b"
              strokeWidth="2"
            />
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
            <ellipse
              cx="92"
              cy="46"
              rx="84"
              ry="38"
              fill="#087f3d"
            />
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
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-slate-800 transition hover:text-green-700">
            HOME
          </a>
          <a href="/about" className="text-sm font-medium text-slate-800 transition hover:text-green-700">
            ABOUT
          </a>
          <a href="/products" className="text-sm font-medium text-slate-800 transition hover:text-green-700">
            PRODUCTS
          </a>
          <a href="/quality" className="text-sm font-medium text-slate-800 transition hover:text-green-700">
            QUALITY
          </a>
          <a href="/contact" className="text-sm font-medium text-slate-800 transition hover:text-green-700">
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
