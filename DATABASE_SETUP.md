# 🗄️ Configuración de Base de Datos - Supabase

## Estado: ⚠️ REQUIERE CONFIGURACIÓN

La base de datos de Supabase actual no es accesible. Sigue estos pasos para configurarla.

---

## 📋 Pasos para Configurar Supabase

### Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Click en **"Start your project"** o **"New Project"**
3. Completa los datos:
   - **Name**: erpzenith-dev (o el que prefieras)
   - **Database Password**: Elige una contraseña segura (guárdala!)
   - **Region**: Elige la más cercana (us-east-1 para Venezuela/Caribe)
4. Click en **"Create new project"**

### Paso 2: Obtener Connection String

1. En tu dashboard de Supabase:
2. Ve a **Settings** (engranaje abajo a la izquierda)
3. Click en **Database**
4. En **Connection string**, selecciona **URI**
5. Copia el string que se ve así:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxx.supabase.co:5432/postgres
   ```

### Paso 3: Actualizar .env del Backend

1. Abre `apps/backend/.env`
2. Reemplaza `DATABASE_URL` con tu nuevo connection string:

```env
DATABASE_URL="postgresql://postgres:TuContraseñaSegura@db.xxxxxx.supabase.co:5432/postgres"
```

**Ejemplo:**
```env
DATABASE_URL="postgresql://postgres:MyP@ssw0rd123@db.abcdefghijk.supabase.co:5432/postgres"
```

### Paso 4: Verificar Conexión

```bash
cd apps/backend
npm run generate
```

Deberías ver:
```
✔ Generated Prisma Client (v6.x.x)
```

### Paso 5: Ejecutar Migraciones

```bash
npm run migrate:dev
```

Esto creará las tablas en tu base de datos.

### Paso 6: Correr el Sistema

Desde la raíz del proyecto:
```bash
npm run dev
```

---

## 🔍 Verificar Conexión

```bash
cd apps/backend
node -e "const { PrismaClient } = require('@prisma/client'); const p = new PrismaClient(); p.$connect().then(() => console.log('✅ Conexión exitosa')).catch(e => console.log('❌ Error:', e.message)).finally(() => p.$disconnect())"
```

---

## ⚠️ Problemas Comunes

### Error: "Can't reach database server"

1. Verifica que el proyecto esté activo en Supabase
2. Revisa que el password sea correcto
3. Asegúrate de que la región sea correcta

### Error: "Authentication failed"

1. El password es incorrecto
2. Copia y pega el connection string directamente desde Supabase
3. Asegúrate de que no haya espacios extras

### Error: "Database does not exist"

1. Asegúrate de usar `postgres` como nombre de database
2. El connection string debe terminar en `/postgres`

---

## 📝 Connection String Format

```
postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
                   │          │       │
                   │          │       └─ Host de Supabase (db.xxxxxx.supabase.co)
                   │          └─ Tu contraseña
                   └─ Usuario (siempre es postgres en Supabase)
```

---

## 🔐 Seguridad

**Nunca commitees el archivo `.env` real!**

El proyecto ya incluye:
- `.env.example` - Template sin valores reales
- `.gitignore` - Excluye `.env` automáticamente

---

## 🚀 Una vez configurado

```bash
# Desde la raíz del proyecto
npm run dev
```

Esto ejecutará:
1. Backend en http://localhost:3001
2. Frontend en http://localhost:3000
3. Swagger docs en http://localhost:3001/api/docs

---

**Hecho en Venezuela** 🇻🇪
