import { VehicleCard } from "@/components/VehicleCard";
import { getVehicles } from "@/lib/api";

export default async function CertifiedPage() {
  const vehicles = await getVehicles(undefined, true).catch(() => []);
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl">Aurelia Certified</h1>
      <p className="mt-2 text-zinc-500">Usados certificados ficticios</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v) => (
          <VehicleCard key={v.id} v={v} />
        ))}
      </div>
    </div>
  );
}
