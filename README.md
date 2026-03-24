# ERP ZENITH

Sistema ERP Profesional para Venezuela - Monorepo con NestJS + Next.js

## 🚀 Quick Start

### Prerrequisitos

- Node.js 18+
- PostgreSQL (Neon, Supabase o local)
- npm 10+

### Instalación

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd erpzenith

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno del backend
cp apps/backend/.env.example apps/backend/.env
# Editar apps/backend/.env con tus credenciales reales

# 4. Configurar variables de entorno del frontend (opcional)
cp .env.example .env.local
# Editar .env.local si usas Firebase u otros servicios
```

### Desarrollo

```bash
# Ambos servicios en paralelo (desde la raíz)
npm run dev

# O por separado:
# Backend (puerto 3001)
cd apps/backend
npm run dev

# Frontend (puerto 3000)
cd apps/frontend
npm run dev
```

### URLs de Acceso

| Servicio | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:3001 |
| Swagger Docs | http://localhost:3001/api/docs |

## 📁 Estructura del Proyecto

```
erpzenith/
├── apps/
│   ├── backend/          # NestJS API
│   │   ├── prisma/       # Schema y migraciones
│   │   └── src/
│   │       ├── common/   # Guards, decorators, filters
│   │       ├── modules/  # Módulos por dominio
│   │       └── prisma/   # Servicio Prisma con middleware
│   └── frontend/         # Next.js App
│       └── src/
│           ├── app/      # Rutas y páginas
│           ├── components/
│           ├── hooks/
│           ├── lib/      # Utilidades y config
│           ├── stores/   # Zustand stores
│           └── stores/   # Estado global
├── packages/             # (futuro) Paquetes compartidos
├── .env.example          # Template de variables globales
└── turbo.json            # Configuración Turborepo
```

## 🗄️ Base de Datos

### Migraciones

```bash
cd apps/backend

# Crear nueva migración (desarrollo)
npm run migrate:dev -- --name descripcion_del_cambio

# Aplicar migraciones en producción
npm run migrate:deploy

# Ver estado de migraciones
npm run migrate:status

# Resetear DB (⚠️ borra todos los datos)
npm run migrate:reset
```

### Prisma Studio (GUI)

```bash
cd apps/backend
npm run db:studio
```

## 🔐 Seguridad

### Variables de Entorno Críticas

Nunca commitees archivos `.env` reales. El proyecto incluye:

- `.env.example` - Template sin valores sensibles
- `.gitignore` - Configurado para excluir `.env*`

### Rotar Credenciales

Si commiteaste credenciales por accidente:

1. Rotar inmediatamente todas las contraseñas/keys
2. Eliminar el archivo sensible del historial:
   ```bash
   git rm --cached <archivo>
   git commit -m "security: eliminar credenciales expuestas"
   ```

## 📝 Convenciones de Git

### Commits Convencionales

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[pie opcional]
```

#### Tipos

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Formato, punto y coma, etc. (sin cambio de lógica) |
| `refactor` | Refactorización (sin cambio de funcionalidad) |
| `perf` | Mejora de rendimiento |
| `test` | Agregar/modificar tests |
| `chore` | Cambios en build, dependencias, etc. |
| `security` | Cambios relacionados con seguridad |

#### Ejemplos

```bash
# Nueva funcionalidad
git commit -m "feat(auth): agregar autenticación de dos factores"

# Corrección de bug
git commit -m "fix(inventario): corregir cálculo de stock negativo"

# Refactor
git commit -m "refactor(prisma): implementar soft delete middleware"

# Seguridad
git commit -m "security: rotar credenciales de Firebase"

# Docs
git commit -m "docs: actualizar README con guía de migraciones"
```

### Ramas

```
main          # Producción
develop       # Desarrollo (integración)
feature/*     # Nuevas funcionalidades
fix/*         # Correcciones
hotfix/*      # Correcciones urgentes a producción
```

## 🛠️ Comandos Disponibles

### Raíz del Proyecto

```bash
npm run dev      # Iniciar ambos servicios en desarrollo
npm run build    # Build de producción
npm run lint     # Linting en todos los paquetes
```

### Backend

```bash
npm run generate        # Generar Prisma Client
npm run setup           # Ejecutar migraciones + seed
npm run dev             # Desarrollo con watch
npm run build           # Compilar a dist/
npm run start:prod      # Producción
npm run migrate:dev     # Crear migración
npm run migrate:deploy  # Aplicar migraciones
npm run db:studio       # Abrir Prisma Studio
npm run lint            # ESLint
```

### Frontend

```bash
npm run dev     # Desarrollo en puerto 3000
npm run build   # Build de producción
npm run start   # Start en producción
npm run lint    # ESLint + Next.js lint
```

## 📦 Módulos del Sistema

| Módulo | Descripción |
|--------|-------------|
| `auth` | Autenticación JWT, roles, permisos |
| `usuarios` | Gestión de usuarios |
| `empresas` | Multi-tenant (empresas) |
| `inventario` | Productos, almacenes, stock |
| `compras` | Órdenes de compra, proveedores |
| `ventas` | Facturas, clientes |
| `rrhh` | Empleados, nómina |
| `produccion` | Órdenes de producción |
| `geo` | Geografía Venezuela |
| `configuracion` | Configuración global, tasas BCV |
| `dashboard` | Métricas y reportes |

## 🔧 Configuración

### Backend (.env)

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="tu-secreto-seguro"
JWT_EXPIRES_IN="7d"
PORT=3001
FRONTEND_URL="http://localhost:3000"
```

### Frontend (.env.local - opcional)

```env
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
```

## 🚨 Solución de Problemas

### Error: "Can't reach database server"

1. Verificar que DATABASE_URL sea correcta
2. Asegurar que PostgreSQL esté corriendo
3. Verificar conexión: `psql <DATABASE_URL>`

### Error: "Prisma Client no generado"

```bash
cd apps/backend
npm run generate
```

### Error: "Migraciones pendientes"

```bash
cd apps/backend
npm run migrate:deploy
```

## 📄 Licencia

Propietario - Todos los derechos reservados

## 🤝 Contribuyendo

1. Crear rama desde `develop`: `git checkout -b feature/mi-feature develop`
2. Commit siguiendo convenciones: `git commit -m "feat: descripción"`
3. Push: `git push origin feature/mi-feature`
4. Crear Pull Request a `develop`

---

**Hecho en Venezuela** 🇻🇪
