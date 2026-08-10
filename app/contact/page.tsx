export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* CONTACT HERO */}
      <section className="bg-green-800 px-6 py-32 text-white">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">
            CONTACT
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Get In Touch
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
            We welcome your inquiries regarding wire harness,
            electrical components and customized manufacturing solutions.
          </p>

        </div>
      </section>


      {/* CONTACT INFORMATION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">
            CONTACT US
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Please contact us for product inquiries, quotations,
            manufacturing partnerships or any other business questions.
          </p>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* LOCATION */}
            <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-md">

              <p className="text-sm font-semibold tracking-[0.2em] text-green-700">
                LOCATION
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Our Facility
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                DAESOUNG ELECTRIC COMPONENTS
                <br />
                Indonesia
              </p>

            </div>


            {/* BUSINESS */}
            <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-md">

              <p className="text-sm font-semibold tracking-[0.2em] text-green-700">
                BUSINESS
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Business Inquiries
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Wire Harness
                <br />
                Electrical Components
                <br />
                Custom Solutions
              </p>

            </div>


            {/* RESPONSE */}
            <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-md">

              <p className="text-sm font-semibold tracking-[0.2em] text-green-700">
                INQUIRY
              </p>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Request Information
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Contact us with your requirements and
                our team will review your inquiry.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* INQUIRY FORM */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">
              INQUIRY
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Send Us a Message
            </h2>

            <p className="mt-5 text-slate-600">
              Please provide your information and inquiry details below.
            </p>

          </div>


          <form className="mt-14 space-y-6">

            {/* NAME / COMPANY */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
                />
              </div>

            </div>


            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
              />
            </div>


            {/* PHONE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
              />
            </div>


            {/* INQUIRY TYPE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Inquiry Type
              </label>

              <select
                name="inquiry"
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
              >
                <option value="" disabled>
                  Please select
                </option>

                <option value="wire-harness">
                  Wire Harness
                </option>

                <option value="electrical-components">
                  Electrical Components
                </option>

                <option value="custom-solution">
                  Custom Solution
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>


            {/* MESSAGE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                rows={7}
                placeholder="Please tell us about your requirements."
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
              />
            </div>


            {/* BUTTON */}
            <div className="pt-4 text-center">

              <button
                type="submit"
                className="rounded-full bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                SEND INQUIRY
              </button>

            </div>

          </form>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-green-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-semibold tracking-[0.25em] text-green-300">
            DAESOUNG ELECTRIC COMPONENTS
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Your Reliable Manufacturing Partner
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">
            We look forward to discussing your requirements
            and building a long-term business relationship.
          </p>

        </div>
      </section>

    </main>
  );
}