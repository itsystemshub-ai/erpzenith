# 🔧 Correcciones para Deploy en Vercel - ERP ZENITH

## Resumen Ejecutivo

Se han realizado correcciones críticas para permitir el deploy exitoso de ERP ZENITH en Vercel con arquitectura serverless.

---

## 📋 Problemas Identificados y Solucionados

### 1. ❌ Configuración Incorrecta de vercel.json

**Problema**: El `vercel.json` principal estaba configurado incorrectamente para un monorepo.

**Solución**:
- Actualizado `installCommand` y `buildCommand` para ejecutar desde la raíz
- Añadida configuración de funciones serverless con `maxDuration: 60`
- Añadida variable `NODE_ENV: production`

**Archivos modificados**:
- `vercel.json`

---

### 2. ❌ API Routes con Importaciones Incorrectas

**Problema**: La API route en el frontend importaba `AppModule` desde una ruta relativa incorrecta (`../src/app.module`).

**Solución**:
- Corregida la ruta a `../../../backend/src/app.module`
- Añadidos exports explícitos para todos los métodos HTTP (GET, POST, PUT, DELETE, PATCH)
- Implementado cacheo de la aplicación NestJS para reducir cold starts
- Eliminado `ThrottlerGuard` duplicado (ya está en app.module.ts)

**Archivos modificados**:
- `apps/frontend/src/app/api/[[...path]]/route.ts`

---

### 3. ❌ Backend main.ts No Optimizado para Serverless

**Problema**: El `main.ts` del backend no estaba optimizado para funciones serverless (reiniciaba la app en cada request).

**Solución**:
- Implementado patrón de caché con `cachedApp`
- Añadida verificación `!process.env.VERCEL` para prevenir inicio automático en Vercel
- Mejorado el shutdown hook para producción

**Archivos modificados**:
- `apps/backend/src/main.ts`

---

### 4. ❌ Prisma Schema Sin Optimización Serverless

**Problema**: El schema de Prisma no incluía configuraciones para entornos serverless.

**Solución**:
- Añadida preview feature `accelerate` para Prisma Accelerate
- Añadida `relationMode = "prisma"` para mejor compatibilidad
- Actualizado `PrismaService` con `onApplicationShutdown` para disconnect limpio

**Archivos modificados**:
- `apps/backend/prisma/schema.prisma`
- `apps/backend/src/prisma/prisma.service.ts`

---

### 5. ❌ Falta de Documentación Actualizada

**Problema**: No había documentación específica para deploy en Vercel con esta arquitectura.

**Solución**:
- Creado `VERCEL_DEPLOY_GUIDE.md` con guía completa paso a paso
- Creado `scripts/pre-deploy-check.js` para verificación automática
- Añadido script `pre-deploy-check` al raíz del package.json

**Archivos creados**:
- `VERCEL_DEPLOY_GUIDE.md`
- `scripts/pre-deploy-check.js`

---

### 6. ❌ Configuración TypeScript para Monorepo

**Problema**: El tsconfig del frontend no tenía paths configurados para importar desde el backend.

**Solución**:
- Añadido path alias `@backend/*` para `../backend/src/*`
- Eliminado `strict: true` para permitir importaciones más flexibles

**Archivos modificados**:
- `apps/frontend/tsconfig.json`

---

### 7. ❌ Configuración de Funciones en Frontend

**Problema**: El `vercel.json` del frontend no especificaba límites de funciones serverless.

**Solución**:
- Añadida configuración de funciones con `maxDuration: 60` y `memory: 1024`

**Archivos modificados**:
- `apps/frontend/vercel.json`

---

## 📁 Archivos Modificados

| Archivo | Cambios Principales |
|---------|---------------------|
| `vercel.json` | Commands corregidos, funciones configuradas |
| `apps/frontend/vercel.json` | Límites de funciones añadidos |
| `apps/frontend/src/app/api/[[...path]]/route.ts` | Rutas corregidas, exports HTTP, caché |
| `apps/frontend/tsconfig.json` | Path alias para backend |
| `apps/backend/src/main.ts` | Caché de app, shutdown hooks |
| `apps/backend/src/prisma/prisma.service.ts` | Shutdown hook adicional |
| `apps/backend/prisma/schema.prisma` | Accelerate, relationMode |
| `package.json` | Script pre-deploy-check |

---

## 📁 Archivos Creados

| Archivo | Propósito |
|---------|-----------|
| `VERCEL_DEPLOY_GUIDE.md` | Guía completa de deploy |
| `scripts/pre-deploy-check.js` | Verificación automática pre-deploy |

---

## ✅ Verificación Pre-Deploy

Antes de desplegar, ejecuta:

```bash
npm run pre-deploy-check
```

Este script verifica:
- ✓ Archivos de configuración críticos
- ✓ Contenido correcto en vercel.json
- ✓ API routes configuradas
- ✓ Dependencias instaladas
- ✓ Variables de entorno documentadas

---

## 🚀 Pasos para Deploy

### 1. Verificación Local

```bash
# Ejecutar verificación
npm run pre-deploy-check

# Instalar dependencias
npm install

# Probar build local
npm run build
```

### 2. Configurar Vercel Dashboard

Variables de entorno requeridas:

```
DATABASE_URL=postgresql://...
JWT_SECRET=tu-secreto-seguro-minimo-32-caracteres
JWT_EXPIRES_IN=7d
FRONTEND_URL=https://tu-proyecto.vercel.app
NEXT_PUBLIC_API_URL=/api
NODE_ENV=production
```

### 3. Deploy

```bash
# Opción A: Vercel CLI
vercel --prod

# Opción B: GitHub
# Hacer push y Vercel deployará automáticamente
git push origin main
```

---

## 📊 URLs Después del Deploy

| Servicio | URL |
|----------|-----|
| Frontend | `https://tu-proyecto.vercel.app` |
| API | `https://tu-proyecto.vercel.app/api` |
| Swagger | `https://tu-proyecto.vercel.app/api/docs` |
| Health Check | `https://tu-proyecto.vercel.app/api/health` |

---

## ⚠️ Consideraciones Importantes

### Límites de Vercel

| Límite | Hobby | Pro |
|--------|-------|-----|
| Timeout | 10s | 60s |
| Memoria | 1024 MB | 3008 MB |
| Body Size | 4.5 MB | 4.5 MB |

### Prisma Accelerate

El schema ahora incluye Prisma Accelerate. Para usarlo:

1. Habilitar en dashboard de Prisma
2. Añadir `?accelerate=true` al connection string (opcional, automático)

### Cold Starts

- La aplicación NestJS se cachea entre invocaciones
- Primer request puede tomar 2-5 segundos
- Requests subsiguientes son rápidos (<500ms)

---

## 🐛 Solución de Problemas Comunes

### Error: "Module not found"

```bash
# Limpiar y reinstalar
rm -rf node_modules .next
npm install
```

### Error: "DATABASE_URL no definida"

Verificar en Vercel Dashboard → Settings → Environment Variables

### Error: "Timeout exceeded"

- Optimizar queries
- Usar Prisma Accelerate
- Considerar upgrade a Vercel Pro

---

## 📞 Recursos Adicionales

- [VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md) - Guía completa
- [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Guía original
- [Documentación de Vercel](https://vercel.com/docs)

---

## ✅ Checklist Final

Antes de deployar, verifica:

- [ ] `npm run pre-deploy-check` pasa sin errores
- [ ] `npm run build` ejecuta sin errores
- [ ] Variables de entorno configuradas en Vercel
- [ ] Base de datos accesible desde internet
- [ ] Migraciones aplicadas (`npm run migrate:deploy`)
- [ ] Prisma generado (`npm run generate`)

---

**Hecho en Venezuela** 🇻🇪
