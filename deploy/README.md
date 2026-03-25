# 🚀 Deploy Guide - ERP ZENITH

## Estructura del Monorepo

```
erpzenith/
├── apps/
│   ├── backend/       # NestJS API → Render
│   └── frontend/      # Next.js → Vercel
├── deploy/
│   ├── vercel/        # Config para Vercel
│   ├── render/        # Config para Render
│   └── supabase/      # Scripts para Supabase
├── packages/          # (futuro) Paquetes compartidos
└── ...
```

---

## 📦 Deploy en 3 Pasos

### 1️⃣ Database - Supabase

**Ubicación:** `deploy/supabase/`

```bash
# 1. Ir a Supabase Dashboard
https://supabase.com/dashboard

# 2. Crear nuevo proyecto o usar existente
Project Ref: nmhxxmvvbgqnodlfetil

# 3. Habilitar Connection Pooler
Database → Configuration → Connection poolers → Enable

# 4. Copiar Connection String
postgresql://postgres.nmhxxmvvbgqnodlfetil:[PASSWORD]@aws-0-us-west-2.pooler.supabase.com:6543/postgres

# 5. Ejecutar migraciones desde local
cd apps/backend
npm run generate
npx prisma db push
```

---

### 2️⃣ Backend - Render

**Ubicación:** `deploy/render/render.yaml`

```bash
# 1. Ir a Render Dashboard
https://render.com/dashboard

# 2. Crear nuevo Web Service
- Conectar repositorio de GitHub
- Root Directory: apps/backend
- Build Command: npm install && npm run generate && npm run build
- Start Command: npm run start:prod

# 3. Variables de Entorno:
DATABASE_URL=<connection-string-de-supabase>
JWT_SECRET=<generar-secreto-seguro>
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3001
CORS_ORIGIN=*

# 4. Deploy automático
Render deployará automáticamente al hacer push a main
```

**URL del Backend:** `https://erpzenith-backend.onrender.com`

---

### 3️⃣ Frontend - Vercel

**Ubicación:** `deploy/vercel/vercel.json`

```bash
# 1. Ir a Vercel Dashboard
https://vercel.com/dashboard

# 2. Importar proyecto de GitHub
- Seleccionar repositorio: erpzenith
- Framework: Next.js (auto-detectado)

# 3. Configurar Build:
- Root Directory: apps/frontend
- Build Command: cd ../.. && npm install && cd apps/frontend && npm run build
- Output Directory: .next

# 4. Variables de Entorno:
NEXT_PUBLIC_API_URL=/api
BACKEND_URL=https://erpzenith-backend.onrender.com
NODE_ENV=production

# 5. Deploy automático
Vercel deployará automáticamente al hacer push a main
```

**URL del Frontend:** `https://erpzenith.vercel.app`

---

## 🔗 URLs Finales

| Servicio | URL | Plataforma |
|----------|-----|------------|
| Frontend | `https://erpzenith.vercel.app` | Vercel |
| Backend API | `https://erpzenith-backend.onrender.com/api` | Render |
| Swagger Docs | `https://erpzenith-backend.onrender.com/api/docs` | Render |
| Database | Supabase Cloud | Supabase |

---

## 🛠️ Comandos Locales

```bash
# Desarrollo (ambos servicios)
npm run dev

# Solo backend
cd apps/backend && npm run dev

# Solo frontend  
cd apps/frontend && npm run dev

# Build de producción
npm run build

# Database migrations
cd apps/backend
npm run generate
npx prisma db push

# Database seed
cd apps/backend
npm run db:seed
```

---

## ⚠️ Consideraciones Importantes

### Vercel (Frontend)
- ✅ Build automático con Next.js
- ✅ Serverless functions para API routes
- ⚠️ Límite de 10s timeout (Hobby)
- ⚠️ No usar NestJS en API routes

### Render (Backend)
- ✅ Node.js tradicional (no serverless)
- ✅ Soporta NestJS completo
- ⚠️ Free tier se duerme después de 15min inactivo
- 💡 Upgrade a Pro ($7/mes) para evitar sleep

### Supabase (Database)
- ✅ PostgreSQL gestionado
- ✅ Connection pooler incluido
- ✅ Backups automáticos
- ⚠️ Free tier: 500MB storage

---

## 🐛 Troubleshooting

### Error: "Module not found" en Vercel
- Verificar que la API route NO importe NestJS
- Usar solo `fetch()` para llamar al backend

### Error: "DATABASE_URL not defined" en Render
- Verificar variables de entorno en Render Dashboard
- Asegurar que Supabase permita conexiones externas

### Error: "Timeout exceeded" en Vercel
- El backend en Render puede tardar en despertar (free tier)
- Considerar upgrade a Render Pro

---

**Hecho en Venezuela** 🇻🇪
