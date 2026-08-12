export default function Products() {
  const highlights = [
    {
      number: "01",
      title: "Wire Harness Assemblies",
      text: "Wiring assemblies with connectors and related components for electrical and electronic applications.",
    },
    {
      number: "02",
      title: "Electrical Components",
      text: "Electrical component assemblies produced according to customer drawings and technical specifications.",
    },
    {
      number: "03",
      title: "Custom Manufacturing",
      text: "Customer-specific configurations and manufacturing support based on product requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-green-800 px-6 py-28 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">OUR PRODUCTS</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Wire Harness Solutions</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
            DAESOUNG ELECTRIC COMPONENTS provides reliable wire harness and electrical component solutions designed around customer requirements.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">PRODUCT PORTFOLIO</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Real Products,
              <br />
              Built to Customer Requirements
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The product portfolio below presents actual DAESOUNG ELECTRIC COMPONENTS wire harnesses and electrical component assemblies. Products can be manufactured according to customer drawings, specifications and application requirements.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl md:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <img
                src="/images/products/products.png"
                alt="Actual DAESOUNG ELECTRIC COMPONENTS wire harness and electrical component products"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-slate-500">Actual product samples from DAESOUNG ELECTRIC COMPONENTS</p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.number} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-lg font-bold text-green-700">
                  {item.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">OUR APPROACH</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Focused on Quality and Consistency</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              From material preparation and assembly to inspection, we focus on stable manufacturing processes and consistent product quality.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ProcessCard number="01" title="Customer Requirements" text="We review customer drawings, specifications and production requirements carefully." />
            <ProcessCard number="02" title="Manufacturing" text="Products are manufactured through controlled and consistent production processes." />
            <ProcessCard number="03" title="Quality Assurance" text="Finished products are inspected to ensure they meet defined customer requirements." />
          </div>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-green-300">CUSTOM INQUIRY</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Looking for a Custom Solution?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-green-50">Contact us to discuss your wire harness and electrical component requirements.</p>
            </div>
            <a href="/contact" className="inline-flex w-fit rounded-full bg-white px-8 py-4 font-semibold text-green-800 transition hover:bg-green-50">CONTACT US</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProcessCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold tracking-widest text-green-700">{number}</p>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
