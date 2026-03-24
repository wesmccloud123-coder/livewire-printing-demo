import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Live Wire Printing',
  description: 'Custom printing, wraps, decals, signage, and apparel for businesses, teams, and events.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.10),transparent_28%),linear-gradient(to_bottom,#ffffff,#fafafa)]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}