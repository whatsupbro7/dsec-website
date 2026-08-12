export default function KoreanProducts() {
  const highlights = [
    { number: "01", title: "와이어 하네스 조립", text: "커넥터 및 관련 부품을 포함한 전기·전자용 와이어 하네스 조립품을 생산합니다." },
    { number: "02", title: "전기 부품", text: "고객의 도면과 기술 사양에 따라 전기 부품 조립품을 생산합니다." },
    { number: "03", title: "맞춤 제조", text: "제품 요구사항에 따른 고객 맞춤형 구성과 제조를 지원합니다." },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-green-800 px-6 py-28 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-green-300">제품</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">와이어 하네스 솔루션</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-green-50">대성전자는 고객의 요구사항과 제품 사양에 맞춘 와이어 하네스 및 전기 부품 솔루션을 제공합니다.</p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">제품 포트폴리오</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">실제 제품,<br />고객 요구사항에 맞춘 제조</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">아래 제품은 대성전자에서 실제 생산하는 와이어 하네스 및 전기 부품입니다. 고객의 도면, 사양 및 적용 조건에 따라 맞춤 생산이 가능합니다.</p>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl md:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <img src="/images/products/products.png" alt="대성전자 실제 제품" className="h-auto w-full object-contain" />
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-slate-500">대성전자 실제 제품 샘플</p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.number} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-lg font-bold text-green-700">{item.number}</div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-green-700">제조 방식</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">품질과 일관성에 집중합니다</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">자재 준비와 조립부터 검사까지 안정적인 생산공정과 일관된 제품 품질을 유지하는 데 집중합니다.</p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card n="01" title="고객 요구사항 검토" text="고객의 도면, 사양 및 생산 요구사항을 세심하게 검토합니다." />
            <Card n="02" title="제조" text="관리되고 일관된 생산공정을 통해 제품을 제조합니다." />
            <Card n="03" title="품질보증" text="완제품을 검사하여 고객이 정의한 요구사항을 충족하도록 관리합니다." />
          </div>
        </div>
      </section>

      <section className="bg-green-800 px-6 py-24 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-green-300">맞춤 문의</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">맞춤형 솔루션이 필요하신가요?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-green-50">와이어 하네스 및 전기 부품 요구사항을 상담해 주세요.</p>
          </div>
          <a href="/ko/contact" className="inline-flex w-fit rounded-full bg-white px-8 py-4 font-semibold text-green-800 transition hover:bg-green-50">문의하기</a>
        </div>
      </section>
    </main>
  );
}

function Card({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold tracking-widest text-green-700">{n}</p>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
