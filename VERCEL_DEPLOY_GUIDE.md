# 🚀 Guía de Deploy en Vercel - ERP ZENITH

Esta guía documenta el proceso completo para desplegar ERP ZENITH en Vercel con la arquitectura serverless.

---

## 📋 Prerrequisitos

1. **Cuenta en Vercel**: [vercel.com](https://vercel.com)
2. **Base de datos PostgreSQL**: Supabase, Neon, o cualquier PostgreSQL accesible desde internet
3. **Node.js 18+** instalado localmente

---

## 🏗️ Arquitectura del Deploy

ERP ZENITH usa una arquitectura **monorepo** con:

```
erpzenith/
├── apps/
│   ├── backend/       # NestJS API (se ejecuta como API Routes en Vercel)
│   └── frontend/      # Next.js (se ejecuta como Vercel Function)
├── vercel.json        # Configuración principal de Vercel
└── turbo.json         # Configuración Turborepo
```

### ¿Cómo funciona?

- **Frontend**: Next.js se despliega nativamente en Vercel
- **Backend**: NestJS se ejecuta dentro de las API Routes de Next.js
- **Base de datos**: PostgreSQL externo (Supabase/Neon)
- **Prisma**: Conectado con Prisma Accelerate para serverless

---

## 📝 Paso 1: Configurar Variables de Entorno en Vercel

En Vercel Dashboard → **Settings** → **Environment Variables**, agrega:

| Variable | Valor (Development) | Valor (Production) |
|----------|---------------------|-------------------|
| `DATABASE_URL` | `postgresql://usuario:password@host:5432/dbname` | Mismo valor |
| `JWT_SECRET` | `a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1` | Genera uno nuevo más seguro |
| `JWT_EXPIRES_IN` | `7d` | `7d` |
| `FRONTEND_URL` | `http://localhost:3000` | `https://tu-proyecto.vercel.app` |
| `NEXT_PUBLIC_API_URL` | `/api` | `/api` |
| `NODE_ENV` | `development` | `production` |

### ⚠️ Importante

- Las variables deben estar disponibles en **todos los entornos** (Development, Preview, Production)
- Para agregar una variable: **Settings** → **Environment Variables** → **Add New**

---

## 🔧 Paso 2: Configurar Base de Datos

### Opción A: Supabase (Recomendado)

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Ir a **Settings** → **Database**
3. Copiar **Connection String** (Pooler mode para serverless)
4. Usar este valor en `DATABASE_URL`

### Opción B: Neon

1. Crear proyecto en [neon.tech](https://neon.tech)
2. Copiar **Connection String** del dashboard
3. Usar este valor en `DATABASE_URL`

### Ejecutar Migraciones

```bash
# Localmente, antes del deploy
cd apps/backend
npm run generate
npm run migrate:deploy
```

---

## 🚀 Paso 3: Deploy

### Método 1: GitHub (Recomendado)

1. **Conectar repositorio a Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Selecciona el proyecto `erpzenith`

2. **Configurar Build**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/frontend`
   - **Build Command**: `cd ../.. && npm run build`
   - **Install Command**: `cd ../.. && npm install`
   - **Output Directory**: `.next`

3. **Deploy**:
   - Click en **Deploy**
   - Vercel construirá y desplegará automáticamente

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

---

## 📁 Archivos de Configuración Clave

### `vercel.json` (Raíz)

```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && npm install",
  "buildCommand": "cd ../.. && npm run build",
  "outputDirectory": "apps/frontend/.next",
  "functions": {
    "apps/frontend/src/app/api/[[...path]]/route.ts": {
      "maxDuration": 60
    }
  }
}
```

### `apps/frontend/vercel.json`

```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && npm install",
  "buildCommand": "cd ../.. && npm run build",
  "functions": {
    "src/app/api/[[...path]]/route.ts": {
      "maxDuration": 60,
      "memory": 1024
    }
  }
}
```

---

## ✅ Paso 4: Verificar Deploy

Una vez completado el deploy:

### URLs de Acceso

| Servicio | URL |
|----------|-----|
| **Frontend** | `https://tu-proyecto.vercel.app` |
| **API** | `https://tu-proyecto.vercel.app/api` |
| **Swagger Docs** | `https://tu-proyecto.vercel.app/api/docs` |
| **Health Check** | `https://tu-proyecto.vercel.app/api/health` |

### Verificaciones

1. **Frontend carga correctamente**: Visita la URL principal
2. **API responde**: `GET /api/health` debe devolver `{ "status": "ok" }`
3. **Swagger disponible**: `/api/docs` muestra la documentación
4. **Autenticación funciona**: Login crea token JWT válido

---

## 🐛 Solución de Problemas

### Error: "Module not found: @nestjs/*"

**Causa**: Dependencias no instaladas correctamente

**Solución**:
```bash
# Limpiar caché y reinstalar
rm -rf node_modules .next
npm install
```

### Error: "DATABASE_URL no definida"

**Causa**: Variables de entorno faltantes

**Solución**:
1. Verificar en Vercel Dashboard → Settings → Environment Variables
2. Asegurar que `DATABASE_URL` esté definida en **Production**
3. Redeployar después de agregar variables

### Error: "Timeout exceeded"

**Causa**: Funciones serverless exceden el límite de tiempo

**Solución**:
1. Optimizar queries de base de datos
2. Usar Prisma Accelerate para conexiones más rápidas
3. Considerar upgrade a Vercel Pro ($20/mes) para 60s de timeout

### Error: "Prisma Client no generado"

**Causa**: Prisma Client necesita regenerarse

**Solución**:
```bash
cd apps/backend
npm run generate
```

### Error: "Cannot find module '../../../backend/src/app.module'"

**Causa**: Ruta incorrecta en API route

**Solución**: Verificar que el archivo existe en `apps/frontend/src/app/api/[[...path]]/route.ts`

---

## 📊 Monitoreo y Logs

### Vercel Dashboard

- **Deployments**: Dashboard → Deployments → Click en deployment
- **Function Logs**: Deployment → Function Logs
- **Analytics**: Dashboard → Analytics

### CLI Logs

```bash
# Ver logs en tiempo real
vercel logs --follow

# Ver logs de una función específica
vercel logs --follow /api
```

---

## 🔐 Mejores Prácticas de Seguridad

### 1. Rotar Credenciales Regularmente

```bash
# Generar nuevo JWT_SECRET
openssl rand -hex 32
```

### 2. Usar Secrets de Vercel

En lugar de variables de entorno planas:

```bash
vercel secrets add database-url postgresql://...
vercel secrets add jwt-secret $(openssl rand -hex 32)
```

### 3. Habilitar Rate Limiting

El sistema ya incluye rate limiting con `@nestjs/throttler`:
- 10 requests por segundo por IP
- Configurable en `app.module.ts`

### 4. HTTPS Forzado

Vercel fuerza HTTPS automáticamente en producción.

---

## 📈 Optimización para Serverless

### Prisma Accelerate

El schema incluye Prisma Accelerate para:
- Connection pooling automático
- Latencia reducida
- Mejor manejo de cold starts

### Cacheo de Aplicación

Las API routes cachean la instancia de NestJS para:
- Reducir cold starts
- Reutilizar conexiones de base de datos
- Mejor rendimiento general

### Límites de Vercel

| Límite | Hobby | Pro |
|--------|-------|-----|
| Timeout | 10s | 60s |
| Memoria | 1024 MB | 3008 MB |
| Body Size | 4.5 MB | 4.5 MB |
| Serverless Functions | 100 | 100 |

---

## 🔄 CI/CD Automático

### Deploy Automático

Vercel despliega automáticamente cuando:

1. **Push a `main`**: Deploy a Production
2. **Push a otras ramas**: Deploy a Preview
3. **Pull Request**: Deploy a URL temporal

### Configurar en GitHub

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Importar repositorio
3. Configurar **Deploy Hooks** si se necesita integración personalizada

---

## 📞 Soporte

### Recursos

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de Prisma](https://www.prisma.io/docs)

### Comunidad

- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

**Hecho en Venezuela** 🇻🇪
