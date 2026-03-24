// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/70">
      <div className="container-shell grid gap-8 py-10 text-sm text-zinc-600 lg:grid-cols-4">
        <div>
          <div className="text-base font-black uppercase tracking-[0.2em] text-zinc-900">Live Wire Printing</div>
          <p className="mt-4 leading-7">
            Custom printing, wraps, decals, signage, and apparel built to make brands look more established.
          </p>
        </div>
        <div>
          <div className="font-semibold text-zinc-900">Services</div>
          <div className="mt-4 space-y-2">
            <div>Vehicle Wraps</div>
            <div>Screen Printing</div>
            <div>Signs & Banners</div>
            <div>Decals & Labels</div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-zinc-900">Navigation</div>
          <div className="mt-4 space-y-2 flex flex-col">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold text-zinc-900">Contact</div>
          <div className="mt-4 space-y-2">
            <div>(606) 000-0000</div>
            <div>info@livewireprinting.com</div>
            <div>Maysville, Kentucky</div>
          </div>
        </div>
      </div>
    </footer>
  );
}