// app/contact/page.tsx
import { SectionHeading } from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your next project"
            text="This page should make it dead simple for someone to reach out and request a quote."
          />
          <div className="mt-8 space-y-5 text-zinc-700">
            <div>
              <div className="text-zinc-500">Phone</div>
              <div className="mt-1 text-lg font-semibold text-zinc-950">(606) 000-0000</div>
            </div>
            <div>
              <div className="text-zinc-500">Email</div>
              <div className="mt-1 text-lg font-semibold text-zinc-950">info@livewireprinting.com</div>
            </div>
            <div>
              <div className="text-zinc-500">Hours</div>
              <div className="mt-1 text-lg font-semibold text-zinc-950">Mon–Fri • 9:00 AM – 5:00 PM</div>
            </div>
            <div>
              <div className="text-zinc-500">Location</div>
              <div className="mt-1 text-lg font-semibold text-zinc-950">Maysville, Kentucky</div>
            </div>
          </div>
        </div>

        <div className="card-surface p-8">
          <h2 className="text-3xl font-black tracking-tight text-zinc-950">Request a Quote</h2>
          <p className="mt-4 text-zinc-600">Replace this static form with Formspree, Resend, or your preferred handler.</p>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Name" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
            <input type="email" placeholder="Email" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
            <input type="text" placeholder="Phone" className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
            <select className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3">
              <option>Project Type</option>
              <option>Vehicle Wraps</option>
              <option>Screen Printing</option>
              <option>Signs & Banners</option>
              <option>Stickers & Decals</option>
              <option>Promo Products</option>
            </select>
            <textarea placeholder="Tell us what you need" rows={6} className="w-full rounded-2xl border border-black/5 bg-zinc-50 px-4 py-3" />
            <button type="button" className="w-full rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}