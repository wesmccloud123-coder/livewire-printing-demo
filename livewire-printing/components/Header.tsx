"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 👇 CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="block">
          <div className="text-xl font-black uppercase tracking-[0.22em] text-zinc-900">
            Live Wire Printing
          </div>
          <div className="text-xs text-zinc-500">
            Printing • Wraps • Signs • Apparel
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-950">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-900 text-2xl"
        >
          ☰
        </button>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Request a Quote
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-black/5 bg-white px-6 py-4 space-y-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg text-zinc-800"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block w-full text-center rounded-full bg-red-600 px-6 py-3 text-white font-semibold"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}