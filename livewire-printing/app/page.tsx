// app/page.tsx
import Link from 'next/link';
import { services, portfolioItems, faqs } from '@/lib/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <section className="section-space soft-grid">
        <div className="container-shell hero-grid items-center gap-14">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
              Built to help a word-of-mouth business look ready for the next level
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-zinc-950 sm:text-6xl">
              Custom Printing, Wraps & Signs That Make Your Brand Look Legit
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Screen printing, vehicle graphics, decals, signage, and branded apparel for businesses, teams, events, and organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                Get a Quote
              </Link>
              <Link href="/portfolio" className="rounded-full border border-black/10 bg-white px-6 py-3 font-semibold text-zinc-900 hover:border-black/20">
                View Our Work
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-700">
              {['Vehicle Wraps', 'Screen Printing', 'Signs & Banners', 'Stickers & Decals', 'Promo Products'].map((item) => (
                <span key={item} className="rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-10">
              <img src="/livewire/hero-1.jpg" alt="Apparel" className="h-64 w-full rounded-3xl object-cover shadow-xl" />
              <img src="/livewire/hero-2.jpg" alt="Signs" className="h-80 w-full rounded-3xl object-cover shadow-xl" />
            </div>
            <div className="space-y-4">
              <img src="/livewire/hero-3.jpg" alt="Wraps" className="h-80 w-full rounded-3xl object-cover shadow-xl" />
              <img src="/livewire/hero-4.jpg" alt="Decals" className="h-64 w-full rounded-3xl object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/60 py-6">
        <div className="container-shell grid gap-4 text-center text-sm font-medium text-zinc-700 sm:grid-cols-2 lg:grid-cols-5">
          <div>Vehicle Wraps</div>
          <div>Screen Printing</div>
          <div>Signs & Banners</div>
          <div>Stickers & Decals</div>
          <div>Promo Products</div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Everything customers need to build a stronger brand presence"
            text="The business already has the work. The site should present it like a serious operator, not a small generic template."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Work"
            title="Proof should carry the sale"
            text="Use real project photos here. This is what kills doubt and makes the business feel established."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.slice(0, 6).map((item) => (
              <div key={item.title} className="card-surface overflow-hidden">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-red-500">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-zinc-950">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Questions customers usually have before they reach out" />
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="card-surface p-6">
                  <h3 className="text-lg font-bold text-zinc-950">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">Let’s talk about your next project</h2>
            <p className="mt-4 text-zinc-600">Replace these placeholders with the real business details and quote handling.</p>
            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
              <input type="email" placeholder="Email" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
              <input type="text" placeholder="Phone" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
              <textarea placeholder="Tell us what you need" rows={5} className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
              <button type="button" className="w-full rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}