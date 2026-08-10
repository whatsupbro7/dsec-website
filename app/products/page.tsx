export default function Products() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* PRODUCTS HERO */}
      <section className="bg-green-800 px-6 py-32 text-white">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">
            OUR PRODUCTS
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Wire Harness Solutions
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
            DAESOUNG ELECTRIC COMPONENTS provides
            reliable wire harness and electrical component
            solutions designed around customer requirements.
          </p>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">
            PRODUCT RANGE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Reliable Components,
            <br />
            Built for Your Requirements
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We manufacture wire harness and electrical component
            assemblies for various applications. Our production
            approach focuses on quality, consistency and customer
            specifications.
          </p>


          {/* PRODUCT CARDS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Wire Harness */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-xl font-bold text-green-700">
                01
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Wire Harness
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Various wire harness assemblies manufactured
                for electrical and electronic applications.
              </p>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm font-semibold text-green-700">
                  KEY FEATURES
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>• Reliable wiring assemblies</li>
                  <li>• Consistent manufacturing quality</li>
                  <li>• Customer-specific configurations</li>
                </ul>
              </div>

            </div>


            {/* Electrical Components */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-xl font-bold text-green-700">
                02
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Electrical Components
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Electrical component assemblies produced
                according to customer drawings and specifications.
              </p>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm font-semibold text-green-700">
                  KEY FEATURES
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>• Specification-based production</li>
                  <li>• Stable assembly processes</li>
                  <li>• Quality-focused manufacturing</li>
                </ul>
              </div>

            </div>


            {/* Custom Solutions */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-xl font-bold text-green-700">
                03
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                Custom Solutions
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Customized manufacturing solutions based on
                customer requirements and product specifications.
              </p>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-sm font-semibold text-green-700">
                  KEY FEATURES
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>• Customer-specific solutions</li>
                  <li>• Flexible production support</li>
                  <li>• Long-term manufacturing partnership</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MANUFACTURING APPROACH */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">
              OUR APPROACH
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Focused on Quality
              <br />
              and Consistency
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From material preparation and assembly to inspection,
              we focus on maintaining stable manufacturing processes
              and consistent product quality.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-widest text-green-700">
                01
              </p>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Customer Requirements
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We review customer drawings, specifications
                and production requirements carefully.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-widest text-green-700">
                02
              </p>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Manufacturing
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Products are manufactured through controlled
                and consistent production processes.
              </p>
            </div>


            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-widest text-green-700">
                03
              </p>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Quality Assurance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Finished products are inspected to ensure
                they meet defined customer requirements.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CONTACT CTA */}
      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-green-300">
                CUSTOM INQUIRY
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Looking for a Custom Solution?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-green-50">
                Contact us to discuss your wire harness and
                electrical component requirements.
              </p>
            </div>


            <a
              href="/contact"
              className="inline-flex w-fit rounded-full bg-white px-8 py-4 font-semibold text-green-800 transition hover:bg-green-50"
            >
              CONTACT US
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}