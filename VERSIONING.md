# 🏷️ Guía de Versionado y Releases

## Estado: ✅ CONFIGURADO

Sistema de versionado semántico automatizado implementado.

---

## 📋 Scripts Disponibles

Todos los comandos se ejecutan desde la **raíz del proyecto**:

### Versionado

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `npm run version:patch` | Incrementa PATCH (x.x.X) | 6.0.0 → 6.0.1 |
| `npm run version:minor` | Incrementa MINOR (x.X.0) | 6.0.0 → 6.1.0 |
| `npm run version:major` | Incrementa MAJOR (X.0.0) | 6.0.0 → 7.0.0 |

### Releases (Versionado + Git Tag)

| Comando | Descripción |
|---------|-------------|
| `npm run release:patch` | Patch + commit + tag git |
| `npm run release:minor` | Minor + commit + tag git |
| `npm run release:major` | Major + commit + tag git |

### Tests

| Comando | Descripción |
|---------|-------------|
| `npm run test` | Ejecuta tests en todos los paquetes |
| `npm run test:cov` | Ejecuta tests con cobertura |

---

## 🎯 Versionado Semántico (SemVer)

Formato: **MAJOR.MINOR.PATCH** (ej: 6.0.0)

### Cuándo usar cada uno

#### MAJOR (X.0.0)
Cambios incompatibles hacia atrás:
- Eliminar funcionalidades existentes
- Cambios breaking en la API
- Refactorización mayor

```bash
npm run release:major
```

#### MINOR (x.X.0)
Nuevas funcionalidades compatibles:
- Agregar nuevos módulos
- Nuevos endpoints en API
- Mejoras de rendimiento

```bash
npm run release:minor
```

#### PATCH (x.x.X)
Correcciones compatibles:
- Bug fixes
- Correcciones de seguridad
- Mejoras menores

```bash
npm run release:patch
```

---

## 🚀 Flujo de Release

### Release Rápido (Patch)

```bash
# 1. Hacer cambios y commit
git add .
git commit -m "fix: corregir cálculo de IVA en facturas"

# 2. Crear release
npm run release:patch

# 3. Push con tags
git push origin main --tags
```

### Release con Nueva Funcionalidad (Minor)

```bash
# 1. Completar feature en develop
git checkout develop
git merge feature/nuevo-modulo

# 2. Merge a main
git checkout main
git merge develop

# 3. Crear release
npm run release:minor

# 4. Push con tags
git push origin main --tags
```

### Major Release (Breaking Changes)

```bash
# 1. Asegurar que todos los cambios estén en main
git checkout main
git pull origin main

# 2. Crear major release
npm run release:major

# 3. Push con tags
git push origin main --tags

# 4. Actualizar CHANGELOG.md
# Editar CHANGELOG.md con los cambios breaking
```

---

## 📝 Qué hace cada script

### `version:patch`
1. Incrementa versión PATCH en package.json raíz
2. Sincroniza versión con backend y frontend

### `version:minor`
1. Incrementa versión MINOR en package.json raíz
2. Sincroniza versión con backend y frontend

### `version:major`
1. Incrementa versión MAJOR en package.json raíz
2. Sincroniza versión con backend y frontend

### `release:*`
1. Ejecuta el versionado correspondiente
2. Crea commit con mensaje convencional
3. Crea tag anotado en git

---

## 🔄 Sincronización de Versiones

El sistema mantiene sincronizadas las versiones:

```
package.json (raíz)     → 6.0.0
├── apps/backend/package.json    → 6.0.0
└── apps/frontend/package.json   → 6.0.0
```

---

## 📊 Convencional Commits

Los commits de release usan mensajes automáticos:

```
chore: release v6.0.1
```

### Para commits normales

Seguir usando [Conventional Commits](./README.md#commits-convencionales):

```bash
# Features
git commit -m "feat(ventas): agregar exportación a PDF"

# Fixes
git commit -m "fix(inventario): corregir stock negativo"

# Refactor
git commit -m "refactor(auth): mejorar validación de tokens"
```

---

## 🏷️ Tags de Git

Los tags se crean automáticamente:

```bash
# Ver todos los tags
git tag -l

# Ver tag específico
git show v6.0.0

# Push de tags
git push origin --tags

# Eliminar tag local
git tag -d v6.0.0

# Eliminar tag remoto
git push origin :refs/tags/v6.0.0
```

---

## 📈 Ejemplo de Flujo Completo

```bash
# 1. Trabajar en una feature
git checkout -b feature/reportes-excel develop

# 2. Hacer commits
git add .
git commit -m "feat(reportes): agregar exportación Excel"

# 3. Merge a develop
git checkout develop
git merge feature/reportes-excel

# 4. Eventual merge a main
git checkout main
git merge develop

# 5. Crear release
npm run release:minor

# 6. Push
git push origin main --tags

# 7. Vercel deploya automáticamente
```

---

## 🛠️ Comandos Útiles

```bash
# Ver versión actual
node -p "require('./package.json').version"

# Ver historial de tags
git tag -l --sort=-version:refname

# Ver cambios desde último release
git log $(git describe --tags --abbrev=0)..HEAD --oneline

# Verificar sincronización de versiones
cat package.json | grep version
cat apps/backend/package.json | grep version
cat apps/frontend/package.json | grep version
```

---

## ⚠️ Consideraciones

### Antes de hacer release

- ✅ Todos los tests pasan
- ✅ CHANGELOG.md actualizado
- ✅ Documentación actualizada
- ✅ No hay errores de build
- ✅ Revisar `git status`

### Después del release

- ✅ Push a main completado
- ✅ Tags subidos a GitHub
- ✅ Vercel deploya correctamente
- ✅ Verificar en producción

---

## 📚 Recursos

- [Versionado Semántico](https://semver.org/lang/es/)
- [Conventional Commits](https://www.conventionalcommits.org/es/)
- [Git Tags](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Etiquetado)

---

**Configurado:** 2026-03-24  
**Versión actual:** 6.0.0  
**Estado:** ✅ Listo para usar

**Hecho en Venezuela** 🇻🇪
