import { VehicleCard } from "@/components/VehicleCard";
import { getVehicles } from "@/lib/api";

export default async function ModelosPage({
  searchParams,
}: {
  searchParams: Promise<{ bodyType?: string }>;
}) {
  const { bodyType } = await searchParams;
  const vehicles = await getVehicles(bodyType, false).catch(() => []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl text-white">Modelos</h1>
      <p className="mt-2 text-zinc-500">
        {bodyType ? `Filtro: ${bodyType}` : "Catálogo completo"}
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <VehicleCard key={v.id} v={v} />
        ))}
      </div>
    </div>
  );
}
