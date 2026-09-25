import Link from "next/link";
import { getVehicles } from "@/lib/api";

export default async function FichasPage() {
  const vehicles = await getVehicles(undefined, false).catch(() => []);
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 pt-32">
      <h1 className="font-serif text-4xl">Fichas técnicas</h1>
      <table className="mt-10 w-full text-left text-sm">
        <thead className="text-zinc-500">
          <tr>
            <th className="pb-2">Modelo</th>
            <th className="pb-2">Carrocería</th>
            <th className="pb-2" />
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id} className="border-t border-white/10">
              <td className="py-3">{v.name}</td>
              <td className="py-3">{v.bodyType}</td>
              <td className="py-3">
                <Link href={`/modelos/${v.slug}`} className="underline">
                  Ver ficha
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
