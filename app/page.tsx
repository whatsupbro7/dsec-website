export default function Home() {
  return (
    <>
      {/* HERO */}
      <main
        className="relative min-h-[calc(100vh-136px)] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/factory.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Main Message */}
        <div className="relative z-10 flex min-h-[calc(100vh-136px)] items-center justify-center px-6 pb-12 text-center text-white">
          <div className="-mt-2">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-green-300 md:text-base">
              Since 2000
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-[76px] md:leading-none">
              DAESOUNG
            </h1>

            <h2 className="mt-5 text-2xl font-light tracking-[0.16em] md:text-[40px] md:leading-tight">
              ELECTRIC COMPONENTS
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-16 bg-green-400" />

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100 md:text-[22px]">
              Precision Wire Harness Solutions
            </p>

            <p className="mt-2 text-sm text-gray-200 md:text-base">
              Trusted Manufacturing Partner Since 2000
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="/about"
                className="min-w-[190px] rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white transition hover:bg-green-500"
              >
                ABOUT US
              </a>

              <a
                href="/products"
                className="min-w-[190px] rounded-full border border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
              >
                OUR PRODUCTS
              </a>

              <a
                href="/contact"
                className="min-w-[190px] rounded-full border border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-white">
          <p className="text-xs uppercase tracking-[0.28em] opacity-90">
            Scroll to explore
          </p>

          <div className="mx-auto mt-3 h-9 w-px bg-white/70" />
          <div className="mx-auto -mt-1 h-2 w-2 rotate-45 border-b border-r border-white/80" />
        </div>
      </main>

      {/* WHO WE ARE */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Who We Are
              </p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Building Trust Through Quality
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                DAESOUNG ELECTRIC COMPONENTS is a manufacturing company specializing in wire harnesses and electrical component solutions.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Established in October 2000, we have continuously strengthened our manufacturing capabilities while building long-term partnerships with customers and business partners.
              </p>
              <a
                href="/about"
                className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                LEARN MORE
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/factory.jpg"
                alt="DAESOUNG ELECTRIC COMPONENTS factory"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Our Products
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Wire Harness Solutions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Reliable electrical component solutions designed
              around customer requirements and product specifications.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <img
              src="/images/products/products.png"
              alt="DAESOUNG ELECTRIC COMPONENTS product portfolio"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">01</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Wire Harness</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Various wire harness assemblies designed for
                electrical and electronic applications.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">02</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Electrical Components</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Electrical component assemblies manufactured
                according to customer specifications.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">03</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Custom Solutions</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Customized manufacturing solutions based on
                customer requirements and product specifications.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/products"
              className="inline-block rounded-full border border-green-700 px-8 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              VIEW ALL PRODUCTS
            </a>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
                Quality & Reliability
              </p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Quality Comes First</h2>
              <p className="mt-6 text-lg leading-8 text-green-50">
                We maintain consistent quality throughout the
                manufacturing process, from incoming materials
                to final inspection and delivery.
              </p>
              <a
                href="/quality"
                className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-green-800 transition hover:bg-green-50"
              >
                OUR QUALITY
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-3xl font-bold">01</p>
                <p className="mt-2 font-semibold">Incoming Inspection</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-3xl font-bold">02</p>
                <p className="mt-2 font-semibold">Process Control</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-3xl font-bold">03</p>
                <p className="mt-2 font-semibold">Final Inspection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Let&apos;s Work Together
        </p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Your Reliable Manufacturing Partner
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Contact DAESOUNG ELECTRIC COMPONENTS for wire harness,
          electrical component and customized manufacturing solutions.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-full bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800"
        >
          CONTACT US
        </a>
      </section>
    </>
  );
}
