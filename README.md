# 🏢 ERP ZENITH

**Sistema ERP Profesional para Venezuela** | Versión 2.0 | 2026

[![License](https://img.shields.io/badge/license-PROPRIETARY-red.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10-red.svg)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![Skills](https://img.shields.io/badge/Skills-763-blue.svg)](SKILLS_INTEGRATION.md)

---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Características Principales](#características-principales)
3. [Arquitectura](#arquitectura)
4. [Skills Integration](#-skills-integration)
5. [Módulos del Sistema](#módulos-del-sistema)
6. [Instalación](#instalación)
7. [Uso](#uso)
8. [Documentación](#documentación)

---

## 🎯 Introducción

ERP ZENITH es un sistema ERP empresarial completo diseñado específicamente para el mercado venezolano, cumpliendo con todas las normativas legales locales (LOTTT, IVA, ISLR, SENIAT).

### Principios de Diseño

- ✅ **Segregación por Roles (RBAC)**: Control de acceso granular por módulo
- ✅ **Dashboards Independientes**: Cada módulo tiene sus propios reportes y KPIs
- ✅ **Configuración Centralizada**: Personalización completa del sistema
- ✅ **IA Integrada**: Funciones de inteligencia artificial en todos los módulos
- ✅ **UI Premium**: Interfaz moderna con componentes visuales avanzados
- ✅ **Skills Registry**: 763+ skills de automatización e IA

---

## ⭐ Características Principales

### 🔐 Sistema de Roles y Permisos

- **RBAC Granular**: Permisos por módulo, acción y recurso
- **Roles Predefinidos**: ADMIN, CONTADOR, RRHH, VENDEDOR, ALMACENISTA, etc.
- **Sidebar Dinámico**: Navegación adaptada al rol del usuario
- **Guards de Permisos**: Protección backend con decoradores

### 🤖 Skills Integration

El sistema incluye un **Unified Skills Registry** con 763+ skills:

| Categoría | Skills | Descripción |
|-----------|--------|-------------|
| **Automation** | 96 | Flujos de trabajo, n8n, integraciones |
| **AI-ML** | 58 | Agentes IA, LLMs, computer vision |
| **Backend** | 112 | APIs, patrones, frameworks |
| **DevOps** | 154 | CI/CD, Docker, Kubernetes |
| **Frontend** | 130 | React, Vue, UI/UX |
| **Business** | 40 | Lógica de negocio |
| **Database** | 38 | ORMs, migraciones |
| **Security** | 28 | Seguridad, pentesting |
| **Marketing** | 35 | Automatización, CRM |
| **SEO** | 25 | Optimización SEO |

### 🇻🇪 BCV Exchange Rate Automation

**Featured Skill**: `tasa-bcv`

- 🕷️ **Web Scraping**: Captura automática desde BCV
- 🖼️ **Generación PNG**: Reportes visuales profesionales
- 🤖 **OCR**: Procesamiento con Tesseract.js
- 📊 **Tasas por Banco**: Comparativa de tasas informativas
- 🔄 **Automatización**: Ejecución diaria programada

---

## 🏗️ Arquitectura

### Monorepo Structure

```
erpzenith/
├── apps/
│   ├── frontend/                 # Next.js 14 (App Router)
│   │   ├── app/
│   │   │   ├── (auth)/           # Login, registro
│   │   │   ├── (dashboard)/      # Layout principal
│   │   │   │   ├── configuracion/
│   │   │   │   │   └── tasas-bcv/    # ⭐ BCV Rates UI
│   │   │   │   ├── administrativo/
│   │   │   │   ├── operativo/
│   │   │   │   └── comercial/
│   │   ├── components/
│   │   └── lib/
│   │
│   └── backend/                  # NestJS 10
│       ├── src/
│       │   ├── modules/
│       │   │   ├── skills/           # ⭐ Skills Module
│       │   │   ├── auth/
│       │   │   ├── administrativo/
│       │   │   ├── operativo/
│       │   │   └── comercial/
│       │   └── prisma/
│       └── prisma/
│
├── packages/
│   ├── shared-types/             # Tipos compartidos
│   ├── ui/                       # Componentes UI
│   └── skills/                   # ⭐ Skills Registry (763+)
│       ├── automation/
│       │   └── tasa-bcv/
│       ├── ai-ml/
│       ├── backend/
│       └── ...
│
├── n8n-workflows/                # ⭐ Automatizaciones
│   └── bcv-tasa-automation.json
│
└── scripts/                      # Scripts de utilidad
```

---

## 🚀 Skills Integration

### API Endpoints

```bash
# List all skills
GET /api/skills

# Execute tasa-bcv
GET /api/skills/tasa-bcv

# Get official USD rate
GET /api/skills/tasa-bcv/official?currency=USD

# Get bank rates
GET /api/skills/tasa-bcv/banks

# Get generated image
GET /api/skills/tasa-bcv/image/tasa_1

# Health check
GET /api/skills/health
```

### Frontend Routes

```
/configuracion/tasas-bcv    # BCV Exchange Rates UI
```

### n8n Automation

**Workflow**: `bcv-tasa-automation`

- **Schedule**: Lunes a Viernes, 8:00 AM (America/Caracas)
- **Actions**: Execute → Save to DB → Notify Slack

### Manual Execution

```bash
# From project root
npm run skills:tasa-bcv

# With watch mode
npm run skills:tasa-bcv:watch

# Install dependencies
npm run skills:install
```

---

## 📦 Módulos del Sistema

### Módulo Administrativo (01)

- **Contabilidad**: Plan de cuentas, asientos, libros legales
- **Finanzas**: Estados financieros, análisis financiero
- **Tesorería**: Cuentas bancarias, conciliación, flujo de caja
- **Presupuesto**: Control presupuestario, centros de costo
- **Activos Fijos**: Depreciación, bajas, mantenimiento

### Módulo Operativo (02)

- **Inventarios**: Control de stock, almacenes, movimientos
- **Compras**: Órdenes de compra, proveedores
- **Producción**: Órdenes de producción, MRP, BOM
- **Mantenimiento**: Gestión de activos, órdenes de trabajo
- **Calidad**: Control de calidad, trazabilidad

### Módulo Comercial (03)

- **Ventas**: Facturación, pedidos, cotizaciones
- **CRM**: Gestión de clientes, leads, pipeline
- **POS**: Punto de venta táctil, sesiones de caja
- **Marketing**: Campañas, email marketing

### Módulo Recursos Humanos

- **Empleados**: Expedientes, contratos
- **Nómina**: Cálculo, recibos, provisiones
- **Asistencia**: Control de horarios, vacaciones
- **Capacitación**: Cursos, evaluaciones

### Módulo Configuración (05)

- **Empresa**: Datos fiscales, configuración general
- **Usuarios**: Gestión de usuarios, roles, permisos
- **Tablas**: Catálogos, listas, parámetros
- **Seguridad**: Auditoría, logs, políticas
- **Integraciones**: APIs, webhooks, conexiones

---

## 🔧 Instalación

### Requisitos Previos

- Node.js >= 18.0.0
- npm >= 10.0.0
- PostgreSQL >= 14
- Prisma CLI

### Pasos de Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/erpzenith/erpzenith.git
cd erpzenith

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Generar Prisma client
npm run db:generate

# 5. Ejecutar migraciones
npm run db:migrate

# 6. Iniciar desarrollo
npm run dev
```

### Skills Setup

```bash
# Instalar dependencias de skills
npm run skills:install

# Verificar instalación
GET /api/skills/health
```

---

## 📖 Uso

### Desarrollo

```bash
# Iniciar backend (puerto 3001)
cd apps/backend && npm run dev

# Iniciar frontend (puerto 3000)
cd apps/frontend && npm run dev
```

### Producción

```bash
# Build completo
npm run build

# Iniciar en producción
npm run start:prod
```

### Ejecutar Skills

```bash
# Ejecutar tasa-bcv manualmente
npm run skills:tasa-bcv

# Ver logs de ejecución
tail -f apps/backend/logs/*.log
```

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [SKILLS_INTEGRATION.md](SKILLS_INTEGRATION.md) | Guía completa de integración de skills |
| [INSTALLATION_SUMMARY.md](INSTALLATION_SUMMARY.md) | Resumen de instalación |
| [packages/skills/README.md](packages/skills/README.md) | Skills registry documentation |
| [packages/skills/SKILLS_INDEX.md](packages/skills/SKILLS_INDEX.md) | Índice de skills |
| [n8n-workflows/bcv-tasa-automation.json](n8n-workflows/bcv-tasa-automation.json) | Workflow n8n |

---

## 🛠️ Tecnologías

### Backend

- **NestJS 10**: Framework Node.js
- **Prisma**: ORM moderno
- **PostgreSQL**: Base de datos
- **Passport**: Autenticación
- **JWT**: Tokens de sesión

### Frontend

- **Next.js 14**: React framework
- **TypeScript**: Tipado estático
- **shadcn/ui**: Componentes UI
- **Tailwind CSS**: Estilos
- **Zustand**: State management

### Automation

- **n8n**: Workflow automation
- **Puppeteer**: Browser automation
- **Tesseract.js**: OCR
- **Canvas**: Generación de imágenes

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Total Skills | 763 |
| API Endpoints | 10+ |
| Módulos ERP | 25+ |
| Roles Predefinidos | 10 |
| Permisos por Rol | ~50 |

---

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/my-feature`)
3. Commit tus cambios (`git commit -m 'Add my feature'`)
4. Push a la rama (`git push origin feature/my-feature`)
5. Abre un Pull Request

---

## 📄 Licencia

**PROPRIETARY** - ERP ZENITH Team

Todos los derechos reservados.

---

## 👥 Equipo

- **ERP ZENITH Team** - Desarrollo principal
- **José Piedra** - BCV Automation (tasa-bcv)
- **Contributors** - Ver [contributors](../../graphs/contributors)

---

## 🔗 Enlaces

- **Website**: [erpzenith.com](https://erpzenith.com)
- **Documentation**: [docs.erphenith.com](https://docs.erphenith.com)
- **Skills Registry**: [packages/skills](packages/skills)
- **API Reference**: [apps/backend](apps/backend)

---

**Hecho con ❤️ en Venezuela** | © 2026 ERP ZENITH
