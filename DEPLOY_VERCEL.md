# 🚀 Deploy en Vercel - ERP ZENITH

## Configuración en 5 pasos

### Paso 1: Instalar Vercel CLI (opcional)

```bash
npm i -g vercel
```

---

### Paso 2: Conectar tu repositorio a Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Selecciona el proyecto `erpzenith`

---

### Paso 3: Configurar Variables de Entorno

En Vercel Dashboard → **Settings** → **Environment Variables**, agrega:

| Variable | Valor (Development) | Valor (Production) |
|----------|---------------------|-------------------|
| `DATABASE_URL` | `postgresql://postgres:TU_PASSWORD@db.nmhxxmvvbgqnodlfetil.supabase.co:5432/postgres` | Mismo valor |
| `JWT_SECRET` | `a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1` | Genera uno nuevo |
| `JWT_EXPIRES_IN` | `7d` | `7d` |
| `FRONTEND_URL` | `http://localhost:3000` | `https://tu-proyecto.vercel.app` |
| `NEXT_PUBLIC_API_URL` | `/api` | `/api` |

---

### Paso 4: Deploy

```bash
# Desde la raíz del proyecto
vercel

# O haz push a GitHub y Vercel deployará automáticamente
git push origin main
```

---

### Paso 5: Verificar

Una vez completado el deploy:

- **Frontend**: `https://tu-proyecto.vercel.app`
- **API**: `https://tu-proyecto.vercel.app/api`
- **Swagger**: `https://tu-proyecto.vercel.app/api/docs`

---

## 📁 Estructura del Deploy

```
ERP ZENITH en Vercel
├── Frontend (Next.js) → tucuenta.vercel.app
└── API Routes (NestJS) → tucuenta.vercel.app/api
    └── Todos los endpoints del backend
```

---

## 🔧 Comandos Útiles

```bash
# Deploy a preview
vercel

# Deploy a producción
vercel --prod

# Ver logs
vercel logs

# Listar deployments
vercel ls
```

---

## ⚠️ Consideraciones

### Serverless Limits

Vercel tiene límites en funciones serverless:

| Límite | Valor |
|--------|-------|
| Timeout | 10s (Hobby), 60s (Pro) |
| Memoria | 1024 MB |
| Body size | 4.5 MB |

### Si necesitas más tiempo:

1. Upgrade a Vercel Pro ($20/mes)
2. O mueve el backend a **Render** o **Railway**

---

## 🐛 Solución de Problemas

### Error: "Module not found: @nestjs/*"

```bash
# Asegúrate de que las dependencias estén en package.json raíz
npm install
```

### Error: "DATABASE_URL no definida"

Verifica que las variables de entorno estén en Vercel Dashboard.

### Error: "Timeout exceeded"

Optimiza las queries de base de datos o considera mover el backend a Render.

---

## 📊 Monitoreo

- **Vercel Analytics**: Dashboard → Analytics
- **Logs**: `vercel logs` o Dashboard → Deployments → Logs
- **Errores**: Dashboard → Deployments → Click en deployment → Function Logs

---

**Hecho en Venezuela** 🇻🇪
