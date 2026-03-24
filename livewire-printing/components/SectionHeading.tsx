// components/SectionHeading.tsx
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-zinc-600">{text}</p> : null}
    </div>
  );
}