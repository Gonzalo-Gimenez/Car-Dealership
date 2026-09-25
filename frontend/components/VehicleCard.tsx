import Image from "next/image";
import Link from "next/link";
import { LINE_LABEL, type Vehicle } from "@/lib/catalog";

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/modelos/${v.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
          <Image
            src={v.coverPath}
            alt={`${v.name} ${v.tagline}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          {LINE_LABEL[v.line] ?? v.line}
        </p>
        <h3 className="mt-1 font-serif text-2xl text-white">{v.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">{v.tagline}</p>
      </Link>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href={`/modelos/${v.slug}`} className="text-white underline-offset-4 hover:underline">
          Más información
        </Link>
        <Link href={`/consulta?modelo=${v.slug}`} className="text-zinc-400 underline-offset-4 hover:underline">
          Realizar consulta
        </Link>
      </div>
    </article>
  );
}
