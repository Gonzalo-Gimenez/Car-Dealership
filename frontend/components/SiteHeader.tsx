"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/nav";

const groups = [
  ["Modelos", NAV.modelos],
  ["Asesorate", NAV.asesorate],
  ["Servicios", NAV.servicios],
  ["Nuestras marcas", NAV.marcas],
  ["Tecnología", NAV.tecnologia],
  ["Empresa", NAV.empresa],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-[0.2em] text-white">
          AURELIA
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {groups.map(([title, links]) => (
            <div
              key={title}
              className="relative"
              onMouseEnter={() => setOpen(title)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white"
              >
                {title}
              </button>
              {open === title ? (
                <div className="absolute left-0 top-full min-w-[200px] pt-2">
                  <div className="rounded border border-white/10 bg-zinc-950 py-2 shadow-xl">
                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          href="/consulta"
          className="hidden rounded border border-white/30 px-4 py-2 text-xs uppercase tracking-wider text-white lg:inline-block"
        >
          Consulta
        </Link>
      </div>
    </header>
  );
}
