import Link from "next/link";
import { NAV_GROUPS } from "@/lib/nav";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-sm text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="font-serif text-2xl tracking-[0.22em] text-white">
              AURELIA
            </Link>
            <p className="mt-4 leading-relaxed">
              Concesionaria de lujo ficticia para demostración de portafolio. Vehículos e
              imágenes originales. No afiliada a Mercedes-Benz, Prestige Auto ni importadores
              reales.
            </p>
          </div>
          <Link
            href="/consulta"
            className="inline-flex w-fit border border-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Realizar consulta
          </Link>
        </div>

        <nav
          aria-label="Mapa del sitio"
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-200">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-zinc-500 underline-offset-4 transition hover:text-white hover:underline focus-visible:text-white focus-visible:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Aurelia Argentina. Demo de portafolio.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/politica" className="hover:text-white">
              Aviso legal
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
            <Link href="/concesionarios" className="hover:text-white">
              Concesionarios
            </Link>
            <Link href="/admin" className="hover:text-white">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
