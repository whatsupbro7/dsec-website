export default function KoreanHome() {
  return (
    <main className="text-slate-800">
      <section className="relative min-h-[calc(100vh-96px)] bg-cover bg-center" style={{ backgroundImage: "url('/images/factory.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pb-16 text-center text-white">
          <div className="-mt-4">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-green-300 md:text-base">2000년 설립</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-[76px]">대성전자</h1>
            <h2 className="mt-5 text-2xl font-light tracking-[0.16em] md:text-[40px]">전기 부품 전문기업</h2>
            <div className="mx-auto mt-5 h-[2px] w-16 bg-green-400" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-100 md:text-[22px]">정밀 와이어 하네스 및 전기 부품 솔루션</p>
            <p className="mt-2 text-sm text-gray-200 md:text-base">신뢰할 수 있는 제조 파트너</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
              <a href="/ko/about" className="min-w-[190px] rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white hover:bg-green-500">회사소개</a>
              <a href="/ko/products" className="min-w-[190px] rounded-full border border-white px-8 py-3.5 font-semibold text-white hover:bg-white hover:text-green-800">제품보기</a>
              <a href="/ko/contact" className="min-w-[190px] rounded-full border border-white/70 px-8 py-3.5 font-semibold text-white hover:bg-white hover:text-green-800">문의하기</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-white">
          <p className="text-xs uppercase tracking-[0.28em] opacity-90">SCROLL TO EXPLORE</p>
          <div className="mx-auto mt-3 h-9 w-px bg-white/70" />
          <div className="mx-auto -mt-1 h-2 w-2 rotate-45 border-b border-r border-white/80" />
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">회사소개</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">품질을 통한 신뢰 구축</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">대성전기부품은 와이어 하네스와 전기 부품을 전문적으로 생산하는 제조기업입니다.</p>
            <p className="mt-5 text-lg leading-8 text-slate-600">2000년 설립 이후 안정적인 생산과 품질관리, 고객과의 장기적인 파트너십을 바탕으로 지속적으로 성장하고 있습니다.</p>
            <a href="/ko/about" className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800">자세히 보기</a>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl"><img src="/images/factory.jpg" alt="대성전기부품 공장" className="h-full min-h-[360px] w-full object-cover" /></div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">주요 제품</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">와이어 하네스 솔루션</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">고객의 도면과 사양, 적용 환경에 맞춘 와이어 하네스 및 전기 부품을 생산합니다.</p>
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"><img src="/images/products/products.png" alt="대성전기부품 실제 제품" className="h-auto w-full rounded-2xl object-contain" /></div>
          <a href="/ko/products" className="mt-10 inline-block rounded-full border border-green-700 px-8 py-3 font-semibold text-green-700 hover:bg-green-700 hover:text-white">전체 제품 보기</a>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">품질경영</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">품질은 최우선입니다</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50">입고검사부터 공정관리, 최종검사까지 전 생산과정에서 안정적인 품질을 관리합니다.</p>
          <a href="/ko/quality" className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-green-800 hover:bg-green-50">품질관리 보기</a>
        </div>
      </section>
    </main>
  );
}
