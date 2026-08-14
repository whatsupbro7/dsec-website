export default function KoreanHome() {
  return (
    <>
      {/* HERO */}
      <main
        className="relative min-h-[calc(100vh-136px)] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/factory.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex min-h-[calc(100vh-136px)] items-center justify-center px-6 pb-12 text-center text-white">
          <div className="-mt-2">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-green-300 md:text-base">2000년 설립</p>
            <h1 className="text-5xl font-bold tracking-[0.18em] md:text-[76px] md:leading-none">대 성 전 자</h1>
            <h2 className="mt-5 text-2xl font-light tracking-[0.16em] md:text-[40px] md:leading-tight">ELECTRIC COMPONENTS</h2>
            <div className="mx-auto mt-5 h-[2px] w-16 bg-green-400" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100 md:text-[22px]">정밀 와이어 하네스 및 전기 부품 솔루션</p>
            <p className="mt-2 text-sm text-gray-200 md:text-base">2000년부터 이어온 신뢰할 수 있는 제조 파트너</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
              <a href="/ko/about" className="min-w-[190px] rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white transition hover:bg-green-500">회사소개</a>
              <a href="/ko/products" className="min-w-[190px] rounded-full border border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800">제품보기</a>
              <a href="/ko/contact" className="min-w-[190px] rounded-full border border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-green-800">문의하기</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-white">
          <p className="text-xs uppercase tracking-[0.28em] opacity-90">SCROLL TO EXPLORE</p>
          <div className="mx-auto mt-3 h-9 w-px bg-white/70" />
          <div className="mx-auto -mt-1 h-2 w-2 rotate-45 border-b border-r border-white/80" />
        </div>
      </main>

      {/* COMPANY INTRODUCTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">회사소개</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">품질을 통한 신뢰 구축</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">대성전자는 와이어 하네스와 전기 부품을 전문적으로 생산하는 제조기업입니다.</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">2000년 설립 이후 안정적인 생산과 품질관리 역량을 지속적으로 강화하며, 고객 및 파트너사와의 장기적인 협력 관계를 바탕으로 신뢰받는 제조 파트너로 성장하고 있습니다.</p>
              <a href="/ko/about" className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">자세히 보기</a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src="/images/factory.jpg" alt="대성전자 제조 공장" className="h-full min-h-[360px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">주요 제품</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">와이어 하네스 솔루션</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">고객의 요구사항과 제품 사양에 맞춘 신뢰성 높은 와이어 하네스 및 전기 부품 솔루션을 제공합니다.</p>
          </div>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <img src="/images/products/products.png" alt="대성전자 와이어 하네스 및 전기 부품 제품 포트폴리오" className="h-auto w-full rounded-2xl object-contain" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">01</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">와이어 하네스</h3>
              <p className="mt-4 leading-7 text-slate-600">전기·전자 제품 및 다양한 적용 분야에 사용되는 와이어 하네스 조립품을 생산합니다.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">02</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">전기 부품</h3>
              <p className="mt-4 leading-7 text-slate-600">고객의 도면과 기술 사양에 따라 다양한 전기 부품 및 조립품을 생산합니다.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold tracking-widest text-green-700">03</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">맞춤형 솔루션</h3>
              <p className="mt-4 leading-7 text-slate-600">고객의 제품 요구사항과 사양에 맞춘 맞춤형 제조 및 생산 솔루션을 제공합니다.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/ko/products" className="inline-block rounded-full border border-green-700 px-8 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">전체 제품 보기</a>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">품질 및 신뢰성</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">품질을 최우선으로 합니다</h2>
              <p className="mt-6 text-lg leading-8 text-green-50">원자재 입고부터 생산공정 관리, 최종검사 및 출하까지 전 과정에서 일관된 품질을 유지하기 위해 체계적으로 관리합니다.</p>
              <a href="/ko/quality" className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-green-800 transition hover:bg-green-50">품질관리 보기</a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6"><p className="text-3xl font-bold">01</p><p className="mt-2 font-semibold">입고검사</p></div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6"><p className="text-3xl font-bold">02</p><p className="mt-2 font-semibold">공정관리</p></div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6"><p className="text-3xl font-bold">03</p><p className="mt-2 font-semibold">최종검사</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">함께 일하는 파트너</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">신뢰할 수 있는 제조 파트너</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">대성전자에 와이어 하네스, 전기 부품 및 맞춤형 제조 솔루션에 대해 문의해 주세요.</p>
        <a href="/ko/contact" className="mt-8 inline-block rounded-full bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800">문의하기</a>
      </section>
    </>
  );
}
