export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* DSEC logo — desktop */}
        <a href="/" aria-label="DAESOUNG ELECTRIC COMPONENTS home" className="hidden md:block">
          <svg
            width="250"
            height="66"
            viewBox="0 0 500 132"
            role="img"
            aria-labelledby="dsec-logo-title"
            className="h-[66px] w-[250px]"
          >
            <title id="dsec-logo-title">DAESOUNG ELECTRIC COMPONENTS — DSEC</title>
            <defs>
              <linearGradient id="dsecGreen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#087f3d" />
              </linearGradient>
            </defs>

            <rect
              x="8"
              y="8"
              width="484"
              height="116"
              rx="58"
              fill="#ffffff"
              stroke="#087f3d"
              strokeWidth="7"
            />

            <text
              x="47"
              y="57"
              fill="#087f3d"
              fontSize="25"
              fontWeight="700"
              letterSpacing="2.5"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DAESOUNG
            </text>

            <text
              x="453"
              y="57"
              textAnchor="end"
              fill="#087f3d"
              fontSize="25"
              fontWeight="700"
              letterSpacing="2.5"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              ELECTRIC
            </text>

            <ellipse
              cx="250"
              cy="65"
              rx="112"
              ry="42"
              fill="url(#dsecGreen)"
            />

            <text
              x="250"
              y="83"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="54"
              fontWeight="800"
              letterSpacing="3"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              DSEC
            </text>

            <text
              x="250"
              y="113"
              textAnchor="middle"
              fill="#087f3d"
              fontSize="19"
              fontWeight="700"
              letterSpacing="4"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              COMPONENTS
            </text>
          </svg>
        </a>

        {/* Compact logo — mobile */}
        <a href="/" aria-label="DSEC home" className="md:hidden">
          <svg
            width="92"
            height="46"
            viewBox="0 0 184 92"
            role="img"
            aria-label="DSEC"
            className="h-[46px] w-[92px]"
          >
            <defs>
              <linearGradient id="dsecGreenMobile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#087f3d" />
              </linearGradient>
            </defs>
            <ellipse
              cx="92"
              cy="46"
              rx="84"
              ry="38"
              fill="url(#dsecGreenMobile)"
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
