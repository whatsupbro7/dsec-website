export default function About() {
  return (
    <main className="bg-white text-gray-800">
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <img src="/images/factory.jpg" alt="Daesoung Electric Components manufacturing facility" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Since 2000</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">About Daesoung</h1>
          <p className="mt-5 max-w-3xl text-xl font-light tracking-[0.18em] text-white/90 md:text-3xl">ELECTRIC COMPONENTS</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
            DAESOUNG ELECTRIC COMPONENTS is a manufacturing company specializing in wire harnesses and electrical component solutions, with a commitment to quality, reliability and continuous improvement.
          </p>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Our Story</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Building Trust Through Quality</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-gray-600 md:text-lg">
                <p>
                  Established in October 2000, DAESOUNG ELECTRIC COMPONENTS has specialized in the manufacturing of wire harnesses and electrical components.
                </p>
                <p>
                  Since our establishment, we have continuously strengthened our manufacturing capabilities and quality management systems, providing reliable products and responsive service to our customers.
                </p>
                <p>
                  We value trust and long-term partnerships with our customers and business partners. Through continuous improvement in our people, processes and manufacturing capabilities, we strive to grow together and deliver lasting value.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
              <img src="/images/factory/factory1.png" alt="Daesoung Electric Components manufacturing floor" className="aspect-[16/7] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INFORMATION */}
      <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Company Information</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">A Reliable Manufacturing Partner</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              We are committed to dependable manufacturing, consistent quality and long-term partnerships with our customers and business partners.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">ESTABLISHED</p>
              <p className="mt-3 text-2xl font-bold text-gray-900">October 2000</p>
              <p className="mt-2 text-gray-500">Established manufacturing company</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">EMPLOYEES</p>
              <p className="mt-3 text-2xl font-bold text-gray-900">300+</p>
              <p className="mt-2 text-gray-500">People working together for quality</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">CERTIFICATIONS</p>
              <p className="mt-3 text-2xl font-bold text-gray-900">ISO 9001</p>
              <p className="mt-1 text-xl font-semibold text-gray-700">ISO 14001</p>
              <p className="mt-2 text-gray-500">Quality and environmental management</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">PRODUCTS</p>
              <p className="mt-3 text-xl font-bold text-gray-900">Home Appliance Harness</p>
              <p className="mt-1 text-xl font-bold text-gray-900">Automotive Harness</p>
              <p className="mt-2 text-gray-500">Wire harness and electrical components</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">MAIN CUSTOMERS</p>
              <div className="mt-3 space-y-1 text-lg font-bold text-gray-900"><p>LG Electronics</p><p>POLYTRON</p><p>MIDEA</p></div>
              <p className="mt-2 text-gray-500">Long-term business partnerships</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-semibold text-green-700">LOCATION</p>
              <p className="mt-3 leading-7 text-gray-700">Kawasan Industri dan Pergudangan Cikupa Mas<br />Jl. Telaga Mas IV/10<br />Cikupa – Tangerang<br />Banten, Indonesia 15710</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">What We Stand For</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">Quality, Safety & Customer Satisfaction</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">✓</div><h3 className="mt-6 text-xl font-bold text-gray-900">Reliable Quality</h3><p className="mt-3 leading-7 text-gray-600">Consistent manufacturing processes and quality control support dependable products for our customers.</p></div>
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">+</div><h3 className="mt-6 text-xl font-bold text-gray-900">Continuous Improvement</h3><p className="mt-3 leading-7 text-gray-600">We continuously improve our people, processes and manufacturing capabilities to meet changing customer needs.</p></div>
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">→</div><h3 className="mt-6 text-xl font-bold text-gray-900">Growing Together</h3><p className="mt-3 leading-7 text-gray-600">We value long-term partnerships and aim to grow together with our customers, employees and business partners.</p></div>
          </div>
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="bg-green-800 px-6 py-16 text-center text-white md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">DAESOUNG ELECTRIC COMPONENTS</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Growing Together, Moving Forward</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">We are committed to becoming a reliable manufacturing partner through quality, technology and continuous improvement.</p>
          <a href="/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
