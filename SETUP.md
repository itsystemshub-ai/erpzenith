# ERP ZENITH — Setup Rápido

## 📋 Prerrequisitos

- Node.js 18+
- PostgreSQL (Neon, Supabase o local)
- npm 10+

## 🚀 Instalación

```bash
# 1. Clonar y instalar dependencias
git clone <repo-url>
cd erpzenith
npm install

# 2. Configurar backend
cp apps/backend/.env.example apps/backend/.env
# ⚠️ EDITAR apps/backend/.env con tus credenciales reales
```

## 🗄️ Base de Datos

```bash
cd apps/backend

# Aplicar migraciones y seed inicial
npm run setup

# O manualmente:
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed
```

## ▶️ Desarrollo

### Opción A: Ambos servicios (desde raíz)

```bash
npm run dev
```

### Opción B: Por separado

```bash
# Terminal 1 - Backend
cd apps/backend
npm run dev

# Terminal 2 - Frontend
cd apps/frontend
npm run dev
```

## 🌐 URLs

| Servicio | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:3001 |
| Swagger Docs | http://localhost:3001/api/docs |

## 📚 Más Información

- [README.md](./README.md) - Documentación completa
- [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md) - Guía de commits
- [SECURITY.md](./SECURITY.md) - Políticas de seguridad

## ⚠️ IMPORTANTE: Seguridad

- **NUNCA** commitees archivos `.env`
- **NUNCA** commitees credenciales reales
- Si expones credenciales: rotar inmediatamente

---

**¿Problemas?** Revisa el [README.md](./README.md) sección "Solución de Problemas"
