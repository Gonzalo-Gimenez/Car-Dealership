import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { getVehicle } from "@/lib/api";
import { CATALOG } from "@/lib/catalog";

export function generateStaticParams() {
  return CATALOG.map((v) => ({ slug: v.slug }));
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let v;
  try {
    v = await getVehicle(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <section className="relative min-h-[70vh]">
        <Image
          src={v.coverPath}
          alt={v.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-5xl px-6 pb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{v.line}</p>
          <h1 className="mt-2 font-serif text-5xl text-white md:text-6xl">{v.name}</h1>
          <p className="mt-3 text-xl text-zinc-300">{v.tagline}</p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="max-w-2xl text-zinc-400">{v.description}</p>
        <dl className="mt-10 grid gap-2 text-sm sm:grid-cols-2">
          {Object.entries(v.specs).map(([k, val]) => (
            <div key={k} className="flex justify-between border-b border-white/10 py-3">
              <dt className="capitalize text-zinc-500">{k}</dt>
              <dd className="text-white">{val}</dd>
            </div>
          ))}
        </dl>
        <Link
          href={`/consulta?modelo=${v.slug}`}
          className="mt-10 inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest"
        >
          Realizar consulta
        </Link>
        <InquiryForm modelId={v.id} />
      </div>
    </div>
  );
}
