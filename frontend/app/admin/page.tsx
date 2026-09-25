"use client";

import { useState } from "react";
import { getAdminLeads } from "@/lib/api";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [data, setData] = useState<unknown>(null);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    try {
      setData(await getAdminLeads(token));
    } catch {
      setErr("Token inválido o API caído");
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-24 pt-32">
      <h1 className="font-serif text-3xl">Admin leads</h1>
      <div className="mt-6 flex gap-2">
        <input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="ADMIN_TOKEN"
          className="field flex-1"
        />
        <button type="button" onClick={load} className="rounded bg-white px-4 py-2 text-black">
          Cargar
        </button>
      </div>
      {err ? <p className="mt-4 text-amber-400">{err}</p> : null}
      {data ? (
        <pre className="mt-6 overflow-auto rounded bg-zinc-950 p-4 text-xs text-zinc-400">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : null}
    </div>
  );
}
