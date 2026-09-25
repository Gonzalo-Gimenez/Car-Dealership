import Image from "next/image";
import { ModelPasarela } from "@/components/ModelPasarela";
import { PasarelaStars } from "@/components/pasarela/PasarelaStars";
import { CATALOG } from "@/lib/catalog";
import { CONTENT } from "@/lib/content";

export function LineShowcase({
  title,
  body,
  line,
}: {
  title: string;
  body: string;
  line: string;
}) {
  const vehicles = CATALOG.filter((v) => v.line === line && !v.certified);
  const page = CONTENT[line];

  return (
    <div>
      {page?.image ? (
        <div className="relative isolate min-h-[46vh] w-full overflow-hidden pt-16">
          <Image
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/50 to-black/25" />
          <div className="relative mx-auto flex min-h-[46vh] max-w-7xl items-end px-6 pb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">{page.kicker}</p>
              <h1 className="mt-3 font-serif text-4xl text-white md:text-6xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-zinc-300">{body}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-6 pt-32">
          <h1 className="font-serif text-4xl text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">{body}</p>
        </div>
      )}
      <section className="pasarela-stage relative overflow-hidden pb-8">
        <PasarelaStars />
        <div className="relative z-10 w-full">
          {vehicles.length ? (
            <ModelPasarela vehicles={vehicles} label={title} showStars={false} />
          ) : (
            <p className="mx-auto max-w-7xl px-6 py-16 text-zinc-500">
              Todavía no hay modelos publicados en esta línea.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
