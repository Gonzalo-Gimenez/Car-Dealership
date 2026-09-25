# Car-Dealership — Aurelia (fictional brand)

Full-stack luxury dealership inspired by typical OEM site structure. **Aurelia** is a fictional marque; not affiliated with Mercedes-Benz or any real importer.

## Stack

- **Backend:** NestJS, Prisma, PostgreSQL
- **Frontend:** Next.js 15, Tailwind 4

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

## Repo

https://github.com/Gonzalo-Gimenez/Car-Dealership
