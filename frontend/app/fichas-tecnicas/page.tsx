import Image from "next/image";
import Link from "next/link";
import { getVehicles } from "@/lib/api";
import { BODY_GROUPS } from "@/lib/catalog";

export default async function FichasPage() {
  const vehicles = await getVehicles(undefined, false);
  const label = (bodyType: string) =>
    BODY_GROUPS.find((g) => g.bodyType === bodyType)?.label ?? bodyType;

  return (
    <div className="mx-auto max-w-5xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl">Fichas técnicas</h1>
      <ul className="mt-10 divide-y divide-white/10">
        {vehicles.map((v) => (
          <li key={v.id}>
            <Link href={`/modelos/${v.slug}`} className="flex items-center gap-4 py-4 hover:bg-white/5">
              <span className="relative h-16 w-28 shrink-0 overflow-hidden bg-zinc-950">
                <Image src={v.coverPath} alt="" fill className="object-cover" sizes="112px" />
              </span>
              <span className="flex-1">
                <span className="block text-white">{v.name}</span>
                <span className="text-sm text-zinc-500">{label(v.bodyType)}</span>
              </span>
              <span className="text-sm text-zinc-400">Ver ficha</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
