// components/ServiceCard.tsx
export function ServiceCard({
  title,
  description,
  bullets,
  image,
}: {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}) {
  return (
    <div className="card-surface overflow-hidden">
      <img src={image} alt={title} className="h-72 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-zinc-950">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {bullets.map((bullet) => (
            <span key={bullet} className="rounded-full border border-black/5 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}