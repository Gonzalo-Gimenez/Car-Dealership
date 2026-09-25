import Link from "next/link";
import type { Vehicle } from "@/lib/api";

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <Link
      href={`/modelos/${v.slug}`}
      className="group block overflow-hidden rounded-lg border border-white/10 bg-zinc-950"
    >
      <div
        className="aspect-[16/10] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black transition group-hover:from-zinc-700"
      />
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest text-zinc-500">{v.line}</p>
        <h3 className="text-lg font-medium text-white">{v.name}</h3>
        <p className="text-sm text-zinc-400">{v.tagline}</p>
      </div>
    </Link>
  );
}
