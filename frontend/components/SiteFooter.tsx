import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-sm text-zinc-500">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 max-w-2xl">
          Aurelia es una marca y vehículos ficticios para demostración. No afiliado a
          Mercedes-Benz, Prestige Auto ni importadores reales.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/politica">Aviso legal</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/admin">Admin</Link>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Aurelia Argentina (demo)</p>
      </div>
    </footer>
  );
}
