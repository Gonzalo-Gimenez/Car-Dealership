# Car-Dealership — Aurelia (fictional brand)

Luxury dealership demo inspired by typical OEM site structure. **Aurelia** is a fictional marque: original cars and copy, not affiliated with Mercedes-Benz or any real importer.

Live site: deploy the **frontend** on Vercel. The Next.js app ships with a local catalog, so model pages, content, dealers, and forms work without Nest or Postgres.

## Stack

- **Frontend:** Next.js 15, Tailwind 4, Three.js pasarela
- **Backend (optional):** NestJS, Prisma, PostgreSQL

## Quick start

```powershell
docker compose up -d
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run start:dev
```

API: http://localhost:3000

```powershell
cd frontend
npm install
npm run dev
```

Site: http://localhost:3001

## Deploy on Vercel

The site lives in `frontend/`. If you import the GitHub repo as-is, Vercel looks at the root, does not find Next.js, and ships an empty/black page (hero images 404).

**One project only** — [car-dealership-henna](https://car-dealership-henna.vercel.app/) — no backend project.

1. Vercel → that project → **Settings → Build and Deployment**.
2. **Root Directory** → Edit → `frontend` → Save.
3. Framework Preset: **Next.js** (auto).
4. **Deployments → ⋮ on the latest → Redeploy** (Production), from branch `main`.

Do not override Install/Build. Leave `NEXT_PUBLIC_API_URL` empty.

The hashed `*-….vercel.app` URL that asks for a Vercel login is a preview with Deployment Protection. Use the Production domain and turn off **Vercel Authentication** if you want it public.

### Optional API project

A second Vercel project for Nest (`car-dealership-a8p7`) **needs a Postgres database**. Vercel does not include PostgreSQL. Without `DATABASE_URL` the Nest function will start, but vehicle/content routes fail.

If you still want the API:

1. Create a Postgres (Neon, Supabase, or Vercel Postgres).
2. New Vercel project → same GitHub repo → **Root Directory = `backend`**.
3. Environment variables:
   - `DATABASE_URL` — pooled connection string
   - `ADMIN_TOKEN` — admin leads token
   - `CORS_ORIGIN` — the frontend production URL, e.g. `https://your-app.vercel.app`
4. After first deploy, run migrations once: `npx prisma migrate deploy` against that database (from a machine with the URL), then `npx prisma db seed`.
5. On the **frontend** project, set `NEXT_PUBLIC_API_URL` to the backend URL if you want forms to persist on the API. Leave it unset to keep the local demo.

## Repo

https://github.com/Gonzalo-Gimenez/Car-Dealership
