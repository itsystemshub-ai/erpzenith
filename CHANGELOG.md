# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere a [Versionado Semántico](https://semver.org/lang/es/).

---

## [No lanzada]

### Agregado
- Sistema de tests con Jest para backend
- Sistema de tests con React Testing Library para frontend
- Configuración de cobertura de código
- Tests E2E para backend
- Documentación de verificación de Swagger API
- Configuración de Vercel Analytics
- Scripts de versionado semántico

### Cambiado
- Scripts de test en `package.json` de backend y frontend

---

## [6.0.0] - 2026-03-24

### Agregado
- Sistema ERP completo para Venezuela
- Módulo de Autenticación con JWT y MFA ready
- Módulo de Usuarios y Roles con permisos
- Módulo de Empresas (Multi-tenant)
- Módulo de Inventario con gestión de stock y almacenes
- Módulo de Compras con proveedores y órdenes
- Módulo de Ventas con clientes y facturación
- Módulo de RRHH y Nómina
- Módulo de Producción con órdenes de producción
- Módulo de Geografía de Venezuela (estados, municipios)
- Módulo de Configuración con tasas BCV
- Dashboard con métricas y reportes
- Backend con NestJS + Prisma + PostgreSQL
- Frontend con Next.js 15 + React 19 + TypeScript
- UI con Tailwind CSS + Framer Motion + Recharts
- Documentación Swagger API
- Deploy configurado para Vercel

### Seguridad
- Autenticación JWT con refresh
- MFA preparado (campos en base de datos)
- Permisos basados en roles
- Helmet middleware para seguridad HTTP
- Rate limiting (10 requests/segundo)
- Soft delete en todos los modelos

### Base de Datos
- 20 modelos con indexación apropiada
- Multi-tenant vía `empresaId`
- Flujo de recuperación de contraseña con aprobación
- Localización venezolana completa

---

## [5.0.0] - 2024-10-01

### Agregado
- Estructura inicial del monorepo con Turborepo
- Configuración de workspaces con npm
- Integración con Supabase/PostgreSQL
- Migraciones de Prisma

---

## Convenciones de Versionado

### Tipos de cambios

- **Agregado** - Nuevas funcionalidades
- **Cambiado** - Cambios en funcionalidad existente
- **Obsoleto** - Funcionalidades que serán removidas
- **Removido** - Funcionalidades eliminadas
- **Corregido** - Corrección de bugs
- **Seguridad** - Cambios relacionados con seguridad

### Versiones

- **MAJOR** (X.0.0) - Cambios incompatibles hacia atrás
- **MINOR** (x.X.0) - Nuevas funcionalidades compatibles
- **PATCH** (x.x.X) - Correcciones compatibles

---

## Enlaces

- [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
- [Versionado Semántico](https://semver.org/lang/es/)
- [Convencional Commits](https://www.conventionalcommits.org/es/)

---

**Hecho en Venezuela** 🇻🇪
