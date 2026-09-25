"use client";

import { useState } from "react";
import { ModelPasarela } from "@/components/ModelPasarela";
import { PasarelaStars } from "@/components/pasarela/PasarelaStars";
import { BODY_GROUPS, type Vehicle } from "@/lib/catalog";

export function ModelRange({ vehicles }: { vehicles: Vehicle[] }) {
  const sections = BODY_GROUPS.map((g) => ({
    ...g,
    items: vehicles.filter((v) => v.bodyType === g.bodyType && !v.certified),
  })).filter((g) => g.items.length);

  const [active, setActive] = useState(sections[0]?.bodyType ?? "sedan");
  const current = sections.find((g) => g.bodyType === active) ?? sections[0];

  if (!current) return null;

  return (
    <section className="pasarela-stage relative overflow-hidden py-20">
      <PasarelaStars />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl text-white md:text-4xl">Nuestros modelos</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Descubrí los modelos Aurelia, Aurelia Sport y Aurelia Atelier.
        </p>
        <div
          role="tablist"
          aria-label="Carrocería"
          className="mt-10 flex gap-6 overflow-x-auto border-b border-white/10 pb-px"
        >
          {sections.map((g) => {
            const selected = g.bodyType === active;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(g.bodyType)}
                className={`shrink-0 pb-3 text-sm transition ${
                  selected
                    ? "border-b-2 border-white text-white"
                    : "border-b-2 border-transparent text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="relative z-10 w-full">
        <ModelPasarela
          key={current.id}
          vehicles={current.items}
          label={current.label}
          showStars={false}
        />
      </div>
    </section>
  );
}
