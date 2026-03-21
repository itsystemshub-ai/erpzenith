# ERP ZENITH — Setup

## Instalación

```bash
npm install
```

## Backend

```bash
cd apps/backend
# Configura DATABASE_URL en .env (Neon o PostgreSQL local)
npx prisma migrate dev --name init
npx prisma generate
npm run start:dev
```

## Frontend

```bash
cd apps/frontend
npm run dev
```

## Ambos en paralelo (desde raíz)

```bash
npm run dev
```

URLs:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Swagger: http://localhost:3001/api/docs
