// components/CtaBanner.tsx
import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-red-200 bg-gradient-to-br from-red-500 to-red-600 p-10 shadow-[0_24px_80px_rgba(220,38,38,0.22)] lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-50">Ready to level up?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
              Make your business look more established before the customer ever calls.
            </h2>
            <p className="mt-5 text-lg leading-8 text-red-50/90">
              Better branding, cleaner presentation, and stronger proof help trust happen faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-red-700">
                Request a Quote
              </Link>
              <Link href="/portfolio" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}