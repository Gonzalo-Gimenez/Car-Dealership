import Image from "next/image";
import Link from "next/link";
import { ModelRange } from "@/components/ModelRange";
import { getVehicles } from "@/lib/api";
import { FEATURED_PROMOS } from "@/lib/catalog";

export default async function Home() {
  const vehicles = await getVehicles().catch(() => []);

  return (
    <>
      <section className="relative flex min-h-[100dvh] items-end px-6 pb-20 pt-24">
        <Image
          src="/vehicles/hero-home.png"
          alt="Aurelia S en una avenida nocturna"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">140 años de innovación</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl text-white md:text-7xl">
            El futuro de la movilidad, reinventado.
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300">
            Aurelia sigue impulsando el futuro de la movilidad.
          </p>
          <Link
            href="/historia"
            className="mt-8 inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest text-white"
          >
            Más información
          </Link>
        </div>
      </section>

      <ModelRange vehicles={vehicles} />

      <section className="border-t border-white/10">
        {FEATURED_PROMOS.map((promo) => (
          <Link
            key={promo.slug}
            href={`/modelos/${promo.slug}`}
            className="group relative block min-h-[70vh] overflow-hidden"
          >
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-16">
              <p className="text-zinc-300">{promo.kicker}</p>
              <h2 className="mt-2 font-serif text-4xl text-white md:text-6xl">{promo.title}</h2>
              <span className="mt-6 inline-block border border-white px-6 py-2 text-xs uppercase tracking-widest">
                Más información
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <Link href="/turno" className="border border-white/15 p-10 hover:bg-white/5">
          <h2 className="font-serif text-3xl text-white">Agendar turno</h2>
          <p className="mt-3 text-zinc-400">Service oficial en la red de concesionarios demo.</p>
        </Link>
        <Link href="/consulta" className="border border-white/15 p-10 hover:bg-white/5">
          <h2 className="font-serif text-3xl text-white">Realizar consulta</h2>
          <p className="mt-3 text-zinc-400">Un asesor ficticio responde sobre el modelo que te interesa.</p>
        </Link>
      </section>
    </>
  );
}
