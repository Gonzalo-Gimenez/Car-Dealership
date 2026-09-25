import { getDealers } from "@/lib/api";

export default async function ConcesionariosPage() {
  const dealers = await getDealers().catch(() => []);
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl">Concesionarios</h1>
      <ul className="mt-10 space-y-6">
        {dealers.map((d) => (
          <li key={d.id} className="rounded border border-white/10 p-6">
            <h2 className="text-lg text-white">{d.name}</h2>
            <p className="text-zinc-400">{d.address}</p>
            <p className="text-zinc-500">{d.city}</p>
            <a href={`tel:${d.phone}`} className="mt-2 inline-block text-sm underline">
              {d.phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
