"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { key: "home", en: "HOME", ko: "홈", enPath: "/", koPath: "/ko" },
  { key: "about", en: "ABOUT", ko: "회사소개", enPath: "/about", koPath: "/ko/about" },
  { key: "products", en: "PRODUCTS", ko: "제품", enPath: "/products", koPath: "/ko/products" },
  { key: "quality", en: "QUALITY", ko: "품질", enPath: "/quality", koPath: "/ko/quality" },
  { key: "contact", en: "CONTACT", ko: "문의", enPath: "/contact", koPath: "/ko/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isKorean = pathname === "/ko" || pathname.startsWith("/ko/");
  const currentKey = navItems.find((item) => isKorean ? pathname === item.koPath : pathname === item.enPath)?.key ?? "home";
  const currentItem = navItems.find((item) => item.key === currentKey) ?? navItems[0];

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1460px] items-center justify-between gap-3 px-4 py-3 sm:min-h-[90px] sm:gap-5 sm:px-7 lg:min-h-[96px] lg:gap-6 lg:px-9">
        <a href={isKorean ? "/ko" : "/"} aria-label="DAESOUNG ELECTRIC COMPONENTS home" className="min-w-0 shrink">
          <img
            src="/dsec-logo-balanced.svg"
            alt="DAESOUNG ELECTRIC COMPONENTS — DSEC"
            width={1030}
            height={210}
            className="block h-auto w-[220px] sm:w-[300px] lg:w-[380px] xl:w-[460px]"
          />
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
            {navItems.map((item) => {
              const active = currentKey === item.key;
              return <a key={item.key} href={isKorean ? item.koPath : item.enPath} className={`px-1 py-4 text-[15px] font-medium transition xl:text-[17px] ${active ? "border-b-2 border-green-600 text-green-700" : "text-slate-800 hover:text-green-700"}`}>{isKorean ? item.ko : item.en}</a>;
            })}
          </nav>

          <div className="hidden items-center gap-2 text-sm font-semibold lg:flex">
            <a href={currentItem.enPath} className={!isKorean ? "text-green-700" : "text-slate-400 hover:text-green-700"}>EN</a>
            <span className="text-slate-300">|</span>
            <a href={currentItem.koPath} className={isKorean ? "text-green-700" : "text-slate-400 hover:text-green-700"}>KO</a>
          </div>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800">MENU</summary>
            <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
              <nav className="flex flex-col">
                {navItems.map((item) => <a key={item.key} href={isKorean ? item.koPath : item.enPath} className="rounded-lg px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-green-700">{isKorean ? item.ko : item.en}</a>)}
                <div className="mt-2 flex items-center gap-2 border-t border-slate-100 px-4 pt-3 text-sm font-semibold">
                  <a href={currentItem.enPath} className={!isKorean ? "text-green-700" : "text-slate-400"}>EN</a>
                  <span className="text-slate-300">|</span>
                  <a href={currentItem.koPath} className={isKorean ? "text-green-700" : "text-slate-400"}>KO</a>
                </div>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
