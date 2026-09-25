import Image from "next/image";
import { getDealers } from "@/lib/api";

export default async function ConcesionariosPage() {
  const dealers = await getDealers();
  return (
    <div>
      <div className="relative isolate min-h-[46vh] overflow-hidden pt-16">
        <Image
          src="/content/showroom.png"
          alt="Red de concesionarios Aurelia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-5xl items-end px-6 pb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">Asesorate</p>
            <h1 className="mt-3 font-serif text-4xl text-white md:text-6xl">Concesionarios</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-16 pb-24">
        <p className="max-w-2xl text-zinc-400">
          Cuatro puntos de la red ficticia en Argentina. Horario de salón en la demo: lunes a
          sábado. Coordiná una visita por el formulario de consulta.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {dealers.map((d) => (
            <li key={d.id} className="overflow-hidden rounded border border-white/10">
              <div className="relative h-40">
                <Image
                  src="/content/showroom.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg text-white">{d.name}</h2>
                <p className="mt-1 text-zinc-400">{d.address}</p>
                <p className="text-zinc-500">{d.city}</p>
                <a href={`tel:${d.phone}`} className="mt-3 inline-block text-sm underline">
                  {d.phone}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
