const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export type Vehicle = {
  id: number;
  slug: string;
  name: string;
  line: string;
  bodyType: string;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  coverPath: string;
  certified: boolean;
};

export type Dealer = {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
};

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(path);
  return res.json() as Promise<T>;
}

export async function getVehicles(bodyType?: string, certified?: boolean) {
  const q = new URLSearchParams();
  if (bodyType) q.set("bodyType", bodyType);
  if (certified !== undefined) q.set("certified", String(certified));
  const s = q.toString();
  return get<Vehicle[]>(`/vehicles${s ? `?${s}` : ""}`);
}

export async function getVehicle(slug: string) {
  return get<Vehicle>(`/vehicles/${slug}`);
}

export async function getDealers() {
  return get<Dealer[]>("/dealers");
}

export async function getContent(slug: string) {
  return get<{ title: string; body: string }>(`/content/${slug}`);
}

export async function getAccessories(line?: string) {
  const q = line ? `?line=${line}` : "";
  return get<{ id: number; name: string; category: string; priceHint: string }[]>(
    `/accessories${q}`,
  );
}

export async function postInquiry(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  modelId?: number;
}) {
  const res = await fetch(`${API}/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("inquiry failed");
  return res.json();
}

export async function postAppointment(data: {
  dealerId: number;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
}) {
  const res = await fetch(`${API}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("appointment failed");
  return res.json();
}

export async function getAdminLeads(token: string) {
  const res = await fetch(`${API}/admin/leads`, {
    headers: { "x-admin-token": token },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("unauthorized");
  return res.json();
}
