import { filterAccessories, type Accessory } from "@/lib/accessories";
import { filterCatalog, findCatalog, type Vehicle } from "@/lib/catalog";
import { getLocalContent, type ContentPage } from "@/lib/content";
import { DEALERS, type Dealer } from "@/lib/dealers";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export type { Vehicle, Accessory, ContentPage, Dealer };

export async function getVehicles(bodyType?: string, certified?: boolean) {
  return filterCatalog(bodyType, certified);
}

export async function getVehicle(slug: string) {
  const local = findCatalog(slug);
  if (!local) throw new Error(`unknown model ${slug}`);
  return local;
}

export async function getDealers(): Promise<Dealer[]> {
  return DEALERS;
}

export async function getContent(slug: string): Promise<ContentPage> {
  const local = getLocalContent(slug);
  if (local) return local;
  return {
    slug,
    title: slug,
    kicker: "",
    body: "Contenido de demostración no disponible.",
    image: "/content/showroom.png",
    imageAlt: slug,
  };
}

export async function getAccessories(line?: string): Promise<Accessory[]> {
  return filterAccessories(line);
}

export async function postInquiry(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  modelId?: number;
}) {
  try {
    const res = await fetch(`${API}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) return res.json();
  } catch {
    /* demo succeeds locally */
  }
  return { ok: true, local: true };
}

export async function postAppointment(data: {
  dealerId: number;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
}) {
  try {
    const res = await fetch(`${API}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) return res.json();
  } catch {
    /* demo succeeds locally */
  }
  return { ok: true, local: true };
}

export async function getAdminLeads(token: string) {
  const res = await fetch(`${API}/admin/leads`, {
    headers: { "x-admin-token": token },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("unauthorized");
  return res.json();
}
