"use client";

import { useState } from "react";
import { postInquiry } from "@/lib/api";

export function InquiryForm({ modelId }: { modelId?: number }) {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    try {
      await postInquiry({
        name: String(fd.get("name")),
        email: String(fd.get("email")),
        phone: String(fd.get("phone")),
        message: String(fd.get("message")),
        modelId,
      });
      setOk(true);
      e.currentTarget.reset();
    } catch {
      setErr("No se pudo enviar. ¿Está el API en :3000?");
    }
  }

  if (ok) {
    return (
      <p className="mt-8 rounded border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
        Consulta enviada. Un asesor ficticio te contactará.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4">
      {err ? <p className="text-amber-400">{err}</p> : null}
      <input name="name" required placeholder="Nombre" className="field" />
      <input name="email" type="email" required placeholder="Email" className="field" />
      <input name="phone" required placeholder="Teléfono" className="field" />
      <textarea name="message" required rows={4} placeholder="Mensaje" className="field" />
      <button type="submit" className="rounded bg-white px-6 py-3 text-sm font-medium text-black">
        Enviar
      </button>
    </form>
  );
}
