// app/portfolio/page.tsx
import { portfolioItems } from '@/lib/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';

export default function PortfolioPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Portfolio"
            title="Real work from real projects"
            text="Use this page to make the proof unavoidable. Weak sites hide the work. Strong sites lead with it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
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
    </>
  );
}