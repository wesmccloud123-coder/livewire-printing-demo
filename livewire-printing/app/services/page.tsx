// app/services/page.tsx
import { services } from '@/lib/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBanner } from '@/components/CtaBanner';

export default function ServicesPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Printing and branding services built to make customers take you seriously"
            text="This page should make the business feel capable, organized, and worth contacting."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}