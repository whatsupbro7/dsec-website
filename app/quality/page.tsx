const qualityImages = {
  main: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.55.png",
  line: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.03.png",
  equipment: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.54.png",
  detail: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.00.png",
};

export default function Quality() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-green-800 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">QUALITY</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Quality & Reliability</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">
            DAESOUNG ELECTRIC COMPONENTS is committed to delivering reliable products through strict quality control and continuous improvement.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">OUR QUALITY</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-slate-900 md:text-5xl">Quality Comes First</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We maintain consistent quality throughout the entire manufacturing process, from incoming materials to final inspection and delivery.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
            <img src={qualityImages.main} alt="DAESOUNG detailed quality inspection" className="h-[300px] w-full object-cover md:h-[480px]" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <QualityPhoto src={qualityImages.line} title="Inspection Line" text="Structured inspection stations support stable and repeatable quality checks." />
            <QualityPhoto src={qualityImages.equipment} title="Test Equipment" text="Dedicated quality equipment supports material and component verification." />
            <QualityPhoto src={qualityImages.detail} title="ISO Certification & Quality System" text="ISO-certified management systems support consistent quality control and continual improvement." />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <QualityCard number="01" title="Incoming Inspection" text="Materials and components are carefully inspected before entering the production process." />
            <QualityCard number="02" title="Process Control" text="Manufacturing processes are continuously monitored to maintain stable and consistent product quality." />
            <QualityCard number="03" title="Final Inspection" text="Finished products are inspected before shipment to ensure they meet customer requirements." />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-green-700">QUALITY MANAGEMENT</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Consistent Quality<br />Through Every Process</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our quality approach focuses on preventing problems before they occur and maintaining consistent manufacturing standards throughout production.
              </p>
              <p className="mt-5 leading-7 text-slate-600">
                From material inspection and production control to final inspection, each stage is managed with attention to quality and customer requirements.
              </p>
            </div>
            <div className="space-y-4">
              <QualityInfo number="01" title="Material Quality" text="Careful control of incoming materials and components before production." />
              <QualityInfo number="02" title="Production Stability" text="Continuous process monitoring helps maintain stable and consistent production." />
              <QualityInfo number="03" title="Customer Requirements" text="Products are managed according to customer specifications and quality expectations." />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-green-800 px-8 py-16 text-white md:px-16">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-300">CONTINUOUS IMPROVEMENT</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Improving Today for a Better Tomorrow</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
              We continuously review our manufacturing processes and work to improve quality, efficiency and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">OUR COMMITMENT</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Building Long-Term Trust</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our goal is not simply to manufacture products. We aim to become a reliable long-term manufacturing partner for every customer.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Through consistent quality, reliable production and continuous improvement, DAESOUNG ELECTRIC COMPONENTS strives to build lasting relationships with our customers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-300">DAESOUNG ELECTRIC COMPONENTS</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Quality You Can Rely On</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">We are committed to providing reliable products and dependable manufacturing solutions for our customers.</p>
        </div>
      </section>
    </main>
  );
}

function QualityPhoto({ src, title, text }: { src: string; title: string; text: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img src={src} alt={title} className="h-52 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function QualityCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold tracking-[0.2em] text-green-700">{number}</p>
      <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
      <div className="mt-8 h-px w-10 bg-green-700 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}

function QualityInfo({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">{number}</span>
        <div><h3 className="text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 leading-6 text-slate-600">{text}</p></div>
      </div>
    </div>
  );
}
