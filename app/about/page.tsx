export default function About() {
  return (
    <main className="bg-white text-gray-800">

      {/* ABOUT HERO */}
      <section className="relative bg-green-800 px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
            About Daesoung
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            DAESOUNG
          </h1>

          <p className="mt-4 text-2xl font-light tracking-widest md:text-3xl">
            ELECTRIC COMPONENTS
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
            A trusted manufacturing partner providing
            high-quality wire harness solutions since 2000.
          </p>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Our Story
              </p>

              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Building Trust Through Quality
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">

                <p>
                  DAESOUNG ELECTRIC COMPONENTS has been
                  operating as an established manufacturing company
                  for many years, continuously working to provide
                  the best quality for our customers.
                </p>

                <p>
                  Since our establishment in October 2000,
                  we have continuously developed our manufacturing
                  capabilities and built long-term relationships
                  with our customers and partners.
                </p>

                <p>
                  We strive to create a better company together
                  with our employees while maintaining a culture
                  that contributes to a good working environment
                  and safety.
                </p>

              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/factory.jpg"
                alt="Daesoung Electric Components factory"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* COMPANY INFORMATION */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Company Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              DAESOUNG ELECTRIC COMPONENTS
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* ESTABLISHED */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                ESTABLISHED
              </p>

              <p className="mt-3 text-2xl font-bold text-gray-900">
                October 2000
              </p>
            </div>

            {/* EMPLOYEES */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                EMPLOYEES
              </p>

              <p className="mt-3 text-2xl font-bold text-gray-900">
                300+
              </p>
            </div>

            {/* CERTIFICATIONS */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                CERTIFICATIONS
              </p>

              <p className="mt-3 text-2xl font-bold text-gray-900">
                ISO 9001
              </p>

              <p className="text-lg font-semibold text-gray-700">
                ISO 14001
              </p>
            </div>

            {/* PRODUCTS */}
            <div className="rounded-2xl bg-white p-8 shadow-sm sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-semibold text-green-700">
                PRODUCTS
              </p>

              <p className="mt-3 text-xl font-bold text-gray-900">
                Home Appliance Harness
              </p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                Automotive Harness
              </p>
            </div>

            {/* MAIN CUSTOMERS */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                MAIN CUSTOMERS
              </p>

              <p className="mt-3 text-lg font-bold text-gray-900">
                LG Electronics
              </p>

              <p className="text-lg font-bold text-gray-900">
                POLYTRON
              </p>

              <p className="text-lg font-bold text-gray-900">
                MIDEA
              </p>
            </div>

            {/* LOCATION */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                LOCATION
              </p>

              <p className="mt-3 leading-7 text-gray-700">
                Kawasan Industri dan Pergudangan Cikupa Mas
                <br />
                Jl. Telaga Mas IV/10
                <br />
                Cikupa – Tangerang
                <br />
                Banten, Indonesia 15710
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
            Our Commitment
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Quality, Safety & Customer Satisfaction
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We understand our customers' needs and strive to
            provide the highest quality products and services.
            With our continuous commitment and best efforts,
            DAESOUNG ELECTRIC COMPONENTS will continue to
            move forward together with our customers and partners.
          </p>

        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="bg-green-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Growing Together, Moving Forward
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-green-100">
          DAESOUNG ELECTRIC COMPONENTS is committed to
          becoming a reliable partner through quality,
          technology and continuous improvement.
        </p>
      </section>

    </main>
  );
}