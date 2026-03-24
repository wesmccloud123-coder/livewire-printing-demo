// components/Header.tsx
import Link from 'next/link';
import { navLinks } from '@/lib/site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="block">
          <div className="text-xl font-black uppercase tracking-[0.22em] text-zinc-900">Live Wire Printing</div>
          <div className="text-xs text-zinc-500">Printing • Wraps • Signs • Apparel</div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-zinc-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-red-700"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}