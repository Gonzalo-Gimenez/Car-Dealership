import Link from "next/link";
import { VehicleCard } from "@/components/VehicleCard";
import { getVehicles } from "@/lib/api";

export default async function Home() {
  const vehicles = await getVehicles().catch(() => []);
  const featured = vehicles.filter((v) => !v.certified).slice(0, 6);

  return (
    <>
      <section className="relative flex min-h-[85vh] items-end px-6 pb-24 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">140 años de innovación</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl text-white md:text-7xl">
            El futuro de la movilidad, reinventado.
          </h1>
          <p className="mt-6 max-w-xl text-zinc-400">
            Descubrí los modelos Aurelia, Aurelia Sport y Aurelia Atelier. Vehículos ficticios
            para demostración.
          </p>
          <Link
            href="/modelos"
            className="mt-10 inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest"
          >
            Nuestros modelos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl text-white">Destacados</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </section>
    </>
  );
}
