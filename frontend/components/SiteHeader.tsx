"use client";

import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { NAV_GROUPS } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-[0.2em] text-white">
          AURELIA
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {NAV_GROUPS.map(({ title, links }) => (
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
        <div className="flex items-center gap-3">
          <Link
            href="/consulta"
            className="hidden rounded border border-white/30 px-4 py-2 text-xs uppercase tracking-wider text-white lg:inline-block"
          >
            Consulta
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label={mobile ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>
      {mobile ? (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          {NAV_GROUPS.map(({ title, links }) => (
            <div key={title} className="mb-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">{title}</p>
              <div className="mt-2 grid gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobile(false)}
                    className="py-1.5 text-sm text-zinc-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/consulta"
            onClick={() => setMobile(false)}
            className="mt-2 inline-block border border-white px-4 py-2 text-xs uppercase tracking-wider"
          >
            Consulta
          </Link>
        </div>
      ) : null}
    </header>
  );
}
