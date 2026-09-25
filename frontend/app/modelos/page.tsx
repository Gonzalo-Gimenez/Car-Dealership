import { ModelPasarela } from "@/components/ModelPasarela";
import { ModelRange } from "@/components/ModelRange";
import { PasarelaStars } from "@/components/pasarela/PasarelaStars";
import { getVehicles } from "@/lib/api";
import { BODY_GROUPS } from "@/lib/catalog";

export default async function ModelosPage({
  searchParams,
}: {
  searchParams: Promise<{ bodyType?: string }>;
}) {
  const { bodyType } = await searchParams;
  const vehicles = await getVehicles(bodyType, false).catch(() => []);
  const label = BODY_GROUPS.find((g) => g.bodyType === bodyType)?.label;

  if (!bodyType) {
    return (
      <div className="pt-16">
        <ModelRange vehicles={vehicles} />
      </div>
    );
  }

  return (
    <section className="pasarela-stage relative overflow-hidden pt-16">
      <PasarelaStars />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
        <h1 className="font-serif text-4xl text-white">{label ?? "Nuestros modelos"}</h1>
        <p className="mt-2 text-zinc-500">
          {vehicles.length} modelos en {label}
        </p>
      </div>
      <div className="relative z-10 w-full">
        <ModelPasarela
          vehicles={vehicles.filter((v) => !v.certified)}
          label={label ?? "Modelos"}
          showStars={false}
        />
      </div>
    </section>
  );
}
