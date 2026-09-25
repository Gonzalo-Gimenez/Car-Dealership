import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { getVehicle } from "@/lib/api";

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = await getVehicle(slug);

  return (
    <div className="px-6 py-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="aspect-[21/9] rounded-lg bg-gradient-to-r from-zinc-800 to-black" />
        <p className="mt-8 text-xs uppercase tracking-widest text-zinc-500">{v.line}</p>
        <h1 className="font-serif text-5xl text-white">{v.name}</h1>
        <p className="mt-4 text-xl text-zinc-400">{v.tagline}</p>
        <p className="mt-6 text-zinc-500">{v.description}</p>
        <dl className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
          {Object.entries(v.specs as Record<string, string>).map(([k, val]) => (
            <div key={k} className="flex justify-between border-b border-white/10 py-2">
              <dt className="text-zinc-500">{k}</dt>
              <dd>{val}</dd>
            </div>
          ))}
        </dl>
        <Link href="/consulta" className="mt-8 inline-block text-sm underline">
          Realizar consulta
        </Link>
        <InquiryForm modelId={v.id} />
      </div>
    </div>
  );
}
