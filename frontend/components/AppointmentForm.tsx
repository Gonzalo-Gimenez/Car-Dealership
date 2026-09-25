"use client";

import { useEffect, useState } from "react";
import { getDealers, postAppointment, type Dealer } from "@/lib/api";

export function AppointmentForm() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    getDealers()
      .then(setDealers)
      .catch(() => setDealers([]));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    try {
      await postAppointment({
        dealerId: Number(fd.get("dealerId")),
        contactName: String(fd.get("contactName")),
        email: String(fd.get("email")),
        phone: String(fd.get("phone")),
        serviceType: String(fd.get("serviceType")),
        date: String(fd.get("date")),
      });
      setOk(true);
    } catch {
      setErr("No se pudo agendar. Probá de nuevo.");
    }
  }

  if (ok) {
    return <p className="mt-6 text-emerald-300">Turno registrado (demo).</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4">
      {err ? <p className="text-amber-400">{err}</p> : null}
      <select name="dealerId" required className="field">
        {dealers.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name} — {d.city}
          </option>
        ))}
      </select>
      <input name="contactName" required placeholder="Nombre" className="field" />
      <input name="email" type="email" required placeholder="Email" className="field" />
      <input name="phone" required placeholder="Teléfono" className="field" />
      <input name="serviceType" required placeholder="Tipo de servicio" className="field" />
      <input name="date" type="datetime-local" required className="field" />
      <button type="submit" className="rounded bg-white px-6 py-3 text-sm text-black">
        Agendar
      </button>
    </form>
  );
}
