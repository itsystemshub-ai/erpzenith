# 📋 Checklist de Deploy - ERP ZENITH

## ✅ Pre-Deploy

### 1. Verificar cuenta de Supabase
- [ ] Ir a https://supabase.com/dashboard
- [ ] Verificar proyecto: `nmhxxmvvbgqnodlfetil`
- [ ] Ir a **Database** → **Configuration**
- [ ] Habilitar **Connection pooler** (si no está habilitado)
- [ ] Copiar **Connection String** (Pooler mode, puerto 6543)

### 2. Verificar cuenta de Render
- [ ] Ir a https://render.com/dashboard
- [ ] Tener cuenta creada (gratis)

### 3. Verificar cuenta de Vercel
- [ ] Ir a https://vercel.com/dashboard
- [ ] Tener cuenta creada (gratis)

---

## 🚀 Deploy Paso a Paso

### PASO 1: Database (Supabase) - 5 minutos

```bash
# 1. Desde tu computadora, conecta a Supabase
cd c:\Users\ET\Documents\GitHub\erpzenith\apps\backend

# 2. Actualiza el .env con tu connection string de Supabase
# Edita apps/backend/.env con:
DATABASE_URL="postgresql://postgres.nmhxxmvvbgqnodlfetil:F6xQmhVBA879qkf4@aws-0-us-west-2.pooler.supabase.com:6543/postgres"

# 3. Ejecuta el script para crear tablas
node scripts/push-db.js
```

**✅ Verificación:**
- [ ] Script se ejecutó sin errores
- [ ] Todas las tablas fueron creadas

---

### PASO 2: Backend (Render) - 10 minutos

```bash
# 1. Ve a https://render.com/dashboard

# 2. Click en "New +" → "Web Service"

# 3. Conecta tu repositorio de GitHub
- Selecciona: itsystemshub-ai/erpzenith

# 4. Configura el servicio:
- Name: erpzenith-backend
- Region: Oregon (us-west-2)
- Branch: main
- Root Directory: apps/backend
- Runtime: Node
- Build Command: cd apps/backend && npm install && npm run generate && npm run build
- Start Command: cd apps/backend && npm run start:render

# 5. Variables de Entorno (Environment):
DATABASE_URL=postgresql://postgres.nmhxxmvvbgqnodlfetil:F6xQmhVBA879qkf4@aws-0-us-west-2.pooler.supabase.com:6543/postgres
JWT_SECRET=a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3001
CORS_ORIGIN=*

# 6. Click en "Create Web Service"
```

**⏳ Espera 5-10 minutos mientras Render hace el deploy**

**✅ Verificación:**
- [ ] Deploy completado (status: "Live")
- [ ] Health check responde: `https://erpzenith-backend.onrender.com/api/health`
- [ ] Swagger disponible: `https://erpzenith-backend.onrender.com/api/docs`

---

### PASO 3: Frontend (Vercel) - 5 minutos

```bash
# 1. Ve a https://vercel.com/dashboard

# 2. Click en "Add New Project"

# 3. Importa desde GitHub
- Selecciona: itsystemshub-ai/erpzenith

# 4. Configura el proyecto:
- Framework Preset: Next.js
- Root Directory: apps/frontend

# 5. Variables de Entorno (Environment Variables):
NEXT_PUBLIC_API_URL=/api
BACKEND_URL=https://erpzenith-backend.onrender.com
NODE_ENV=production

# 6. Click en "Deploy"
```

**⏳ Espera 3-5 minutos mientras Vercel hace el build**

**✅ Verificación:**
- [ ] Build completado sin errores
- [ ] Frontend accesible: `https://erpzenith.vercel.app`
- [ ] Login funciona correctamente

---

## 🔍 Post-Deploy

### Verificaciones Finales

```bash
# 1. Testear health endpoint del backend
curl https://erpzenith-backend.onrender.com/api/health

# 2. Testear frontend
# Abre en tu navegador: https://erpzenith.vercel.app

# 3. Testear login
# Intenta hacer login con tus credenciales
```

**✅ Checklist Final:**
- [ ] Backend responde en Render
- [ ] Frontend responde en Vercel
- [ ] Login funciona
- [ ] Dashboard carga
- [ ] Datos se guardan en Supabase

---

## 🐛 Troubleshooting

### Backend no responde en Render
1. Verificar logs en Render Dashboard
2. Verificar DATABASE_URL está correcta
3. Verificar Supabase permite conexiones externas

### Frontend no conecta al backend
1. Verificar BACKEND_URL en Vercel Environment Variables
2. Verificar CORS en backend está habilitado
3. Verificar backend está "Live" en Render

### Error de base de datos
1. Verificar connection string es correcto
2. Verificar pooler está habilitado en Supabase
3. Ejecutar `node scripts/push-db.js` localmente

---

## 📞 URLs de Referencia

| Servicio | URL |
|----------|-----|
| Supabase Dashboard | https://supabase.com/dashboard/project/nmhxxmvvbgqnodlfetil |
| Render Dashboard | https://dashboard.render.com |
| Vercel Dashboard | https://vercel.com/dashboard |
| Backend (prod) | https://erpzenith-backend.onrender.com |
| Frontend (prod) | https://erpzenith.vercel.app |

---

**Hecho en Venezuela** 🇻🇪
