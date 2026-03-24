# Convención de Commits - ERP ZENITH

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de git claro y útil.

## Estructura del Commit

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional - explica el QUÉ y POR QUÉ]

[pie opcional - referencia a issues, BREAKING CHANGE]
```

## Tipos de Commit

| Tipo | Cuándo usar | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(auth): agregar MFA` |
| `fix` | Corrección de bug | `fix(ventas): calcular IVA correcto` |
| `docs` | Documentación | `docs: actualizar README` |
| `style` | Formato (sin lógica) | `style: formato prettier` |
| `refactor` | Refactor (sin funcionalidad nueva) | `refactor(prisma): soft delete` |
| `perf` | Mejora de rendimiento | `perf: index en consultas lentas` |
| `test` | Tests | `test(auth): agregar unit tests` |
| `chore` | Build, deps, config | `chore: actualizar dependencias` |
| `security` | Seguridad | `security: rotar JWT_SECRET` |
| `ci` | CI/CD | `ci: agregar GitHub Actions` |

## Alcances Comunes

- `auth` - Autenticación y autorización
- `usuarios` - Gestión de usuarios
- `empresas` - Multi-tenant
- `inventario` - Productos, stock, almacenes
- `compras` - Órdenes de compra, proveedores
- `ventas` - Facturas, clientes
- `rrhh` - Empleados, nómina
- `produccion` - Órdenes de producción
- `dashboard` - Métricas, reportes
- `configuracion` - Configuración global
- `prisma` - Schema, migraciones
- `frontend` - UI, componentes
- `backend` - API, controllers

## Ejemplos

### Feature nueva
```bash
git commit -m "feat(auth): agregar autenticación de dos factores

- Implementar TOTP con speakeasy
- Agregar endpoints de verificación
- Actualizar modelo User con campos MFA

Closes #42"
```

### Fix de bug
```bash
git commit -m "fix(inventario): corregir cálculo de stock negativo

El stock permitía valores negativos al recibir múltiples
movimientos simultáneos. Se agregó validación transaccional.

Fixes #127"
```

### Refactor
```bash
git commit -m "refactor(prisma): implementar middleware de soft delete

- Agregar campo deletedAt a modelos principales
- Middleware automático para filtrar registros eliminados
- Actualizar todas las queries para respetar soft delete

BREAKING CHANGE: Las queries ahora excluyen registros con deletedAt != null"
```

### Security
```bash
git commit -m "security: rotar credenciales de base de datos

- Nueva DATABASE_URL en .env
- Eliminar credenciales expuestas del historial
- Actualizar documentación de seguridad"
```

### Chore
```bash
git commit -m "chore: actualizar dependencias de NestJS

- @nestjs/common: 10.3.10 → 10.4.0
- @nestjs/core: 10.3.10 → 10.4.0
- @nestjs/platform-express: 10.3.10 → 10.4.0"
```

## Comandos Útiles

```bash
# Ver últimos commits
git log --oneline -10

# Ver commits con formato bonito
git log --pretty=format:"%h - %s" -10

# Ver commits por tipo
git log --grep="^feat" --oneline
git log --grep="^fix" --oneline
```

## Reglas

1. ✅ **SIEMPRE** usar tipo en minúsculas
2. ✅ **SIEMPRE** descripción en presente ("agregar" no "agregué")
3. ✅ **NO** usar punto al final del asunto
4. ✅ **MÁXIMO** 72 caracteres en el asunto
5. ✅ **SEPARAR** asunto del cuerpo con línea en blanco
6. ✅ **REFERENCIAR** issues cuando aplique (Closes #123)

## Anti-patrones (❌ NO HACER)

```bash
# Malos ejemplos:
git commit -m "subir"
git commit -m "arreglar cosas"
git commit -m "WIP"
git commit -m "fix: typo. fix: another typo. fix: one more"
git commit -m "Feat: Add New Feature"  # Tipo en mayúscula
```

## Herramientas

### Commitlint (opcional)

Para validar commits automáticamente:

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

Configurar `commitlint.config.js`:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'security', 'ci'
    ]],
  },
}
```

### Husky (opcional)

Para ejecutar validaciones pre-commit:

```bash
npm install -D husky
npx husky install
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

---

**Un buen commit cuenta una historia. Un mal commit crea misterio.** 👻
