import Image from "next/image";
import { VehicleCard } from "@/components/VehicleCard";
import { getVehicles } from "@/lib/api";
import { getLocalContent } from "@/lib/content";

export default async function CertifiedPage() {
  const vehicles = await getVehicles(undefined, true).catch(() => []);
  const page = getLocalContent("certified");
  return (
    <div>
      {page?.image ? (
        <div className="relative isolate min-h-[46vh] overflow-hidden pt-16">
          <Image
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
          <div className="relative mx-auto flex min-h-[46vh] max-w-7xl items-end px-6 pb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">{page.kicker}</p>
              <h1 className="mt-3 font-serif text-4xl text-white md:text-6xl">{page.title}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-6 pt-32">
          <h1 className="font-serif text-4xl">Aurelia Certified</h1>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6 py-16 pb-24">
        <p className="max-w-2xl text-zinc-400">
          {page?.body ?? "Usados certificados ficticios."}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </div>
    </div>
  );
}
