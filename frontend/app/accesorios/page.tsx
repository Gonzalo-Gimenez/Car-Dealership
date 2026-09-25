import { getAccessories } from "@/lib/api";

export default async function AccesoriosPage() {
  const items = await getAccessories("accessories").catch(() => []);
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl">Accesorios</h1>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map((a) => (
          <li key={a.id} className="border border-white/10 p-4">
            <p className="text-white">{a.name}</p>
            <p className="text-sm text-zinc-500">{a.category}</p>
            <p className="text-sm text-zinc-400">{a.priceHint}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
