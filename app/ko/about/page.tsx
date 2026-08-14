export default function KoreanAbout() {
  return (
    <main className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <img src="/images/factory.jpg" alt="대성전자 공장" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-green-300">2000년 설립</p>
          <h1 className="text-5xl font-bold md:text-7xl">회사소개</h1>
          <p className="mt-5 text-xl font-light tracking-[0.18em] text-white/90 md:text-3xl">DAESOUNG ELECTRIC COMPONENTS</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">대성전자는 와이어 하네스 및 전기 부품 솔루션을 전문적으로 생산하는 제조기업으로서 품질, 신뢰성 및 지속적인 개선을 중요하게 생각합니다.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">회사 이야기</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">품질을 통한 신뢰 구축</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600 md:text-lg">
              <p>대성전자는 2000년 10월 설립 이후 와이어 하네스 및 전기 부품을 전문적으로 생산해 왔습니다.</p>
              <p>설립 이후 안정적인 생산 시스템과 체계적인 품질관리 역량을 지속적으로 강화하며, 고객의 요구에 부응하는 신뢰할 수 있는 제품과 서비스를 제공하고 있습니다.</p>
              <p>또한 고객 및 파트너사와의 신뢰와 장기적인 협력 관계를 중요하게 생각합니다. 임직원과 공정, 제조 역량의 지속적인 개선을 통해 함께 성장하고 더 나은 가치를 제공하는 기업이 되겠습니다.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200"><img src="/images/factory.jpg" alt="대성전자 공장" className="aspect-[4/3] w-full object-cover" /></div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">회사 정보</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">신뢰할 수 있는 제조 파트너</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">안정적인 생산과 일관된 품질, 그리고 고객 및 파트너사와의 장기적인 협력을 바탕으로 신뢰받는 제조기업을 만들어가고 있습니다.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Info title="설립" value="2000년 10월" text="제조기업 설립" />
            <Info title="임직원" value="300+" text="품질을 위해 함께하는 사람들" />
            <Info title="인증" value="ISO 9001 / ISO 14001" text="품질 및 환경경영" />
            <Info title="제품" value="가전·자동차 와이어 하네스" text="와이어 하네스 및 전기 부품" />
            <Info title="주요 고객" value="LG Electronics · POLYTRON · MIDEA" text="장기적인 비즈니스 파트너십" />
            <Info title="위치" value="Cikupa, Tangerang" text="Banten, Indonesia 15710" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">핵심 가치</p><h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">품질 · 안전 · 고객만족</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            <Value title="신뢰할 수 있는 품질" text="안정적인 제조공정과 체계적인 품질관리를 통해 고객이 신뢰할 수 있는 제품을 제공합니다." />
            <Value title="지속적인 개선" text="임직원, 공정 및 제조 역량을 지속적으로 개선하여 변화하는 고객의 요구에 능동적으로 대응합니다." />
            <Value title="함께 성장" text="고객, 임직원 및 파트너사와 장기적인 협력 관계를 구축하고 함께 성장하는 기업을 지향합니다." />
          </div>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-5xl">함께 성장하고, 함께 앞으로 나아갑니다</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">품질과 기술, 지속적인 개선을 통해 고객과 파트너사가 신뢰할 수 있는 제조 파트너가 되겠습니다.</p>
        <a href="/ko/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-green-800 transition hover:bg-green-50">문의하기</a>
      </section>
    </main>
  );
}
function Info({ title, value, text }: { title: string; value: string; text: string }) { return <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"><p className="text-sm font-semibold text-green-700">{title}</p><p className="mt-3 text-2xl font-bold text-gray-900">{value}</p><p className="mt-2 text-gray-500">{text}</p></div>; }
function Value({ title, text }: { title: string; text: string }) { return <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">✓</div><h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3><p className="mt-3 leading-7 text-gray-600">{text}</p></div>; }
