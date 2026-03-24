// app/about/page.tsx
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A real business with real work deserves a site that looks the part"
              text="Live Wire Printing already has the kind of work and local credibility many businesses spend years trying to build. The website should reflect that."
            />
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              The goal of this site direction is to present the company like a serious branding partner for businesses, teams, events, and organizations.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              That means stronger presentation, clearer proof, better structure, and more confidence for people who were not referred personally.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-6">
              <div className="text-3xl font-black text-red-500">200K+</div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">Already moving real revenue through reputation and word of mouth.</p>
            </div>
            <div className="card-surface p-6">
              <div className="text-3xl font-black text-red-500">Multi-Service</div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">Wraps, signs, apparel, decals, and promo items create strong cross-sell potential.</p>
            </div>
            <div className="card-surface p-6 sm:col-span-2">
              <div className="text-xl font-bold text-zinc-950">Who this business can serve well</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Local businesses', 'Contractors', 'Teams', 'Schools', 'Events', 'Churches'].map((item) => (
                  <span key={item} className="rounded-full border border-black/5 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}