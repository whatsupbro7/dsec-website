export default function KoreanHome() {
  const strengths = [
    ["최우선 품질", "입고검사부터 공정관리, 최종검사까지 체계적으로 품질을 관리합니다."],
    ["생산 역량", "와이어 하네스와 전자 부품 조립을 중심으로 안정적인 생산체계를 운영합니다."],
    ["숙련된 인력", "숙련된 작업자와 표준화된 공정을 통해 일관된 생산 품질을 유지합니다."],
    ["신뢰할 수 있는 납기", "생산계획과 공정관리를 통해 안정적인 납기 대응을 추구합니다."],
    ["인도네시아 생산", "인도네시아 현지 공장을 기반으로 고객의 생산 요구에 대응합니다."],
  ];

  return (
    <>
      {/* HERO */}
      <main className="relative overflow-hidden bg-white">
        <div className="grid min-h-[620px] lg:grid-cols-[42%_58%]">
          <div className="relative z-10 flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-green-700">2000년 설립</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                전선을 연결하고<br />
                <span className="text-green-700">가능성을 연결합니다</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                대성전자는 와이어 하네스와 전자 부품을 전문적으로 생산하며, 품질과 안정적인 생산을 바탕으로 고객과의 장기적인 파트너십을 만들어갑니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/ko/about" className="rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800">자세히 보기 →</a>
                <a href="/ko/products" className="rounded-lg border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-green-700 hover:text-green-700">제품 보기</a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <img src="/images/factory/factory1.png" alt="대성전자 제조 현장" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-white via-white/75 to-transparent lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </main>

      {/* QUICK CAPABILITY CARDS */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <a href="/ko/products" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-36 overflow-hidden bg-white"><img src="/images/products/이미지 2026. 8. 15. 오전 11.11.png" alt="와이어 하네스 제품" className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105" /></div>
            <div className="p-5"><h2 className="font-bold text-slate-950">Wire Harness</h2><p className="mt-1 text-sm text-slate-500">와이어 하네스</p></div>
          </a>
          <a href="/ko/products" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-36 overflow-hidden bg-white"><img src="/images/products/이미지 2026. 8. 15. 오전 11.27.png" alt="전자 부품" className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105" /></div>
            <div className="p-5"><h2 className="font-bold text-slate-950">Electronic Components</h2><p className="mt-1 text-sm text-slate-500">전자 부품</p></div>
          </a>
          <a href="/ko/about" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-36 overflow-hidden"><img src="/images/factory/factory1.png" alt="생산 공정" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" /></div>
            <div className="p-5"><h2 className="font-bold text-slate-950">Manufacturing Process</h2><p className="mt-1 text-sm text-slate-500">생산공정</p></div>
          </a>
          <a href="/ko/quality" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-36 overflow-hidden bg-white"><img src="/images/quality/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%202026.%208.%2018.%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.03.png" alt="품질 검사 라인" className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105" /></div>
            <div className="p-5"><h2 className="font-bold text-slate-950">Quality Management</h2><p className="mt-1 text-sm text-slate-500">품질관리</p></div>
          </a>
          <a href="/ko/contact" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-36 overflow-hidden"><img src="/images/factory/factory0.png" alt="인도네시아 공장" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" /></div>
            <div className="p-5"><h2 className="font-bold text-slate-950">Indonesia Factory</h2><p className="mt-1 text-sm text-slate-500">인도네시아 공장</p></div>
          </a>
        </div>
      </section>

      {/* OUR STRENGTH */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">Our Strength</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">대성전자의 경쟁력</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map(([title, body], index) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-800">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">회사소개</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">품질을 통한 신뢰 구축</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">대성전자는 와이어 하네스와 전자 부품을 전문적으로 생산하는 제조기업입니다.</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">2000년 설립 이후 안정적인 생산과 품질관리 역량을 지속적으로 강화하며, 고객 및 파트너사와의 장기적인 협력 관계를 바탕으로 신뢰받는 제조 파트너로 성장하고 있습니다.</p>
              <a href="/ko/about" className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">자세히 보기</a>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img src="/images/factory/factory1.png" alt="대성전자 생산 현장" className="h-full min-h-[360px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">주요 제품</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">와이어 하네스 솔루션</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">고객의 요구사항과 제품 사양에 맞춘 신뢰성 높은 와이어 하네스 및 전자 부품 솔루션을 제공합니다.</p>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"><img src="/images/products/products.png" alt="대성전자 와이어 하네스 및 전자 부품 제품 포트폴리오" className="h-auto w-full rounded-2xl object-contain" /></div>
          <a href="/ko/products" className="mt-10 inline-block rounded-full border border-green-700 px-8 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">전체 제품 보기</a>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">품질 및 신뢰성</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">품질을 최우선으로 합니다</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">원자재 입고부터 생산공정 관리, 최종검사 및 출하까지 전 과정에서 일관된 품질을 유지하기 위해 체계적으로 관리합니다.</p><a href="/ko/quality" className="mt-8 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-500">품질관리 보기</a></div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">{["입고검사", "공정관리", "최종검사"].map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="text-green-400">0{index + 1}</span><p className="mt-2 font-semibold">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">함께 일하는 파트너</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">신뢰할 수 있는 제조 파트너</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">대성전자에 와이어 하네스, 전자 부품 및 맞춤형 제조 솔루션에 대해 문의해 주세요.</p>
        <a href="/ko/contact" className="mt-8 inline-block rounded-full bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800">문의하기</a>
      </section>
    </>
  );
}
