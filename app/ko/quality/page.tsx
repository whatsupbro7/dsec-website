const qualityImages = {
  main: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.55.png",
  line: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.03.png",
  equipment: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.54.png",
  detail: "/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.00.png",
};

export default function KoreanQuality() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-green-800 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">품질</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">품질과 신뢰성</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">대성전자는 엄격한 품질관리와 지속적인 개선을 통해 신뢰할 수 있는 제품을 제공하기 위해 노력합니다.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">품질관리</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-slate-900 md:text-5xl">품질은 최우선입니다</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">입고 자재부터 최종검사와 출하까지 전체 제조과정에서 일관된 품질을 유지합니다.</p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
            <img src={qualityImages.main} alt="대성전자 정밀 품질검사" className="h-[300px] w-full object-cover md:h-[480px]" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <QualityPhoto src={qualityImages.line} title="검사 라인" text="체계적으로 구성된 검사 설비를 통해 안정적이고 반복 가능한 품질검사를 수행합니다." />
            <QualityPhoto src={qualityImages.equipment} title="품질 검사장비" text="전용 검사장비를 활용해 자재와 부품의 품질 상태를 확인하고 관리합니다." />
            <QualityPhoto src={qualityImages.detail} title="ISO 인증 및 품질관리 시스템" text="ISO 인증을 기반으로 체계적인 품질관리 시스템을 운영하고 지속적으로 개선합니다." />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <QualityCard number="01" title="입고검사" text="자재와 부품을 생산공정에 투입하기 전에 세심하게 검사합니다." />
            <QualityCard number="02" title="공정관리" text="생산공정을 지속적으로 모니터링하여 안정적이고 일관된 제품 품질을 유지합니다." />
            <QualityCard number="03" title="최종검사" text="출하 전 완제품을 검사하여 고객 요구사항을 충족하는지 확인합니다." />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-green-700">품질경영</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">모든 공정에서<br />일관된 품질</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">문제가 발생한 후 대응하기보다 사전에 예방하고, 생산 전 과정에서 일관된 제조 기준을 유지하는 것을 목표로 합니다.</p>
              <p className="mt-5 leading-7 text-slate-600">자재검사와 생산공정 관리부터 최종검사까지 각 단계에서 품질과 고객 요구사항을 세심하게 관리합니다.</p>
            </div>
            <div className="space-y-4">
              <QualityInfo number="01" title="자재 품질" text="생산 전 입고 자재와 부품을 철저하게 관리합니다." />
              <QualityInfo number="02" title="생산 안정성" text="공정 모니터링을 통해 안정적이고 일관된 생산을 유지합니다." />
              <QualityInfo number="03" title="고객 요구사항" text="고객의 사양과 품질 기대수준에 맞춰 제품을 관리합니다." />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-green-800 px-8 py-16 text-white md:px-16">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-300">지속적인 개선</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">더 나은 내일을 위한 오늘의 개선</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">제조공정을 지속적으로 검토하고 품질, 효율성 및 고객만족도를 높이기 위해 노력합니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-green-700">품질에 대한 약속</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">장기적인 신뢰 구축</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">우리의 목표는 단순히 제품을 생산하는 데 그치지 않습니다. 모든 고객에게 신뢰할 수 있는 장기적인 제조 파트너가 되는 것을 목표로 합니다.</p>
            <p className="mt-5 leading-7 text-slate-600">일관된 품질, 안정적인 생산 및 지속적인 개선을 통해 고객과 오래 지속되는 신뢰 관계를 구축해 나가겠습니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-300">DAESOUNG ELECTRIC COMPONENTS</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">믿고 맡길 수 있는 품질</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">신뢰할 수 있는 제품과 안정적인 제조 솔루션을 제공하기 위해 최선을 다하겠습니다.</p>
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
