import Image from "next/image";
import { getAccessories } from "@/lib/api";

export default async function AccesoriosPage() {
  const items = await getAccessories("accessories");
  return (
    <div>
      <div className="relative isolate min-h-[46vh] overflow-hidden pt-16">
        <Image
          src="/content/collection.png"
          alt="Accesorios Aurelia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-5xl items-end px-6 pb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">Servicios</p>
            <h1 className="mt-3 font-serif text-4xl text-white md:text-6xl">Accesorios</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-16 pb-24">
        <p className="max-w-2xl text-zinc-400">
          Recambios y extras de catálogo. Los precios se cotizan en concesionario; no hay stock
          real.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((a) => (
            <li key={a.id} className="overflow-hidden border border-white/10">
              <div className="relative aspect-[16/9]">
                <Image
                  src={a.image ?? "/content/collection.png"}
                  alt={a.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <p className="text-white">{a.name}</p>
                <p className="text-sm text-zinc-500">{a.category}</p>
                <p className="text-sm text-zinc-400">{a.priceHint}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
