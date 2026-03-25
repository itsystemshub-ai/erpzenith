# 🚀 Deploy - ERP ZENITH

## Arquitectura

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Frontend       │────▶│  Backend NestJS  │────▶│  Supabase   │
│  (Vercel)       │     │  (Render)        │     │  (PostgreSQL)│
└─────────────────┘     └──────────────────┘     └─────────────┘
```

---

## 1️⃣ Backend en Render

### Pasos:

1. **Crear cuenta en Render**: https://render.com

2. **Crear nuevo Web Service**:
   - Conectar repositorio de GitHub
   - Root Directory: `apps/backend`
   - Build Command: `npm install && npm run generate && npm run build`
   - Start Command: `npm run start:prod`

3. **Variables de Entorno en Render**:

```
DATABASE_URL=postgresql://postgres:password@db.nmhxxmvvbgqnodlfetil.supabase.co:5432/postgres
JWT_SECRET=tu-secreto-seguro-minimo-32-caracteres
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3001
```

4. **Desplegar**:
   - Render hará el deploy automáticamente
   - URL resultante: `https://erpzenith-backend.onrender.com`

---

## 2️⃣ Frontend en Vercel

### Pasos:

1. **Conectar repositorio a Vercel**: https://vercel.com/new

2. **Configurar Build**:
   - Framework: Next.js
   - Root Directory: `apps/frontend`
   - Build Command: `cd ../.. && npm run build`
   - Install Command: `cd ../.. && npm install`

3. **Variables de Entorno en Vercel**:

```
NEXT_PUBLIC_API_URL=/api
BACKEND_URL=https://erpzenith-backend.onrender.com
NODE_ENV=production
```

4. **Desplegar**:
   - Vercel hará el deploy automáticamente
   - URL resultante: `https://erpzenith.vercel.app`

---

## 3️⃣ Base de Datos en Supabase

### Configuración Actual:

```
Host: db.nmhxxmvvbgqnodlfetil.supabase.co
Port: 5432
Database: postgres
User: postgres
Password: SrQEHOrlU9I5qDd2
```

### ⚠️ Importante:

1. **Habilitar conexiones externas** en Supabase:
   - Ir a Database → Configuration
   - Activar "External connections"
   - Copiar el connection string

2. **Ejecutar migraciones**:
```bash
cd apps/backend
npm run migrate:deploy
```

3. **Hacer seed** (datos iniciales):
```bash
cd apps/backend
npm run db:seed
```

---

## 🔗 URLs Finales

| Servicio | URL |
|----------|-----|
| Frontend | `https://erpzenith.vercel.app` |
| Backend API | `https://erpzenith-backend.onrender.com/api` |
| Swagger Docs | `https://erpzenith-backend.onrender.com/api/docs` |
| Health Check | `https://erpzenith-backend.onrender.com/api/health` |

---

## 🛠️ Comandos Útiles

### Local (Desarrollo)

```bash
# Instalar dependencias
npm install

# Ejecutar ambos servicios
npm run dev

# Solo backend
cd apps/backend && npm run dev

# Solo frontend
cd apps/frontend && npm run dev
```

### Producción

```bash
# Backend - Render
# El deploy es automático al hacer push a GitHub

# Frontend - Vercel
# El deploy es automático al hacer push a GitHub
```

---

## 🐛 Solución de Problemas

### Error: "Cannot connect to backend"

**Frontend (Vercel)**:
1. Verificar `BACKEND_URL` en variables de entorno
2. Asegurar que el backend esté desplegado en Render
3. Verificar logs en Vercel Dashboard → Functions

### Error: "DATABASE_URL no definida"

**Backend (Render)**:
1. Verificar variables de entorno en Render Dashboard
2. Asegurar que Supabase permita conexiones externas
3. Verificar logs en Render Dashboard

### Error: "CORS"

1. El backend ya permite todos los orígenes en producción
2. Si hay problemas, verificar `NODE_ENV=production` en Render

### Backend se duerme en Render (Free tier)

El plan free de Render duerme el servicio después de 15 min de inactividad.

**Solución**:
- Upgrade a Render Pro ($7/mes)
- O usar un servicio de uptime como https://cron-job.org

---

## 📝 Checklist Pre-Deploy

- [ ] Base de datos en Supabase con conexiones externas habilitadas
- [ ] Migraciones ejecutadas (`npm run migrate:deploy`)
- [ ] Seed ejecutado (`npm run db:seed`)
- [ ] Backend desplegado en Render
- [ ] Variables de entorno configuradas en Render
- [ ] Frontend desplegado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Health check responde: `/api/health`
- [ ] Login funciona correctamente

---

**Hecho en Venezuela** 🇻🇪
