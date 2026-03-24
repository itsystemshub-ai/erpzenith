# 📋 Verificación de Swagger API

## Estado: ✅ CONFIGURADO Y OPERATIVO

Swagger está correctamente configurado en el backend de NestJS.

---

## 🔍 Cómo Acceder

### Desarrollo Local

1. **Iniciar el backend:**
   ```bash
   cd apps/backend
   npm run dev
   ```

2. **Acceder a la documentación:**
   - URL: http://localhost:3001/api/docs
   - Puerto: 3001

### Producción (Vercel)

- URL: `https://tu-proyecto.vercel.app/api/docs`

---

## 📚 Configuración Actual

Ubicación: `apps/backend/src/main.ts`

```typescript
const config = new DocumentBuilder()
  .setTitle('ERP ZENITH API')
  .setDescription('API del Sistema ERP ZENITH para Venezuela')
  .setVersion('6.0')
  .addBearerAuth()
  .build()
SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, config))
```

---

## 🔐 Autenticación en Swagger

Swagger incluye botón **"Authorize"** en la esquina superior derecha para:

1. Ingresar tu token JWT
2. Formato: `Bearer <tu-token>`
3. Ejecutar endpoints protegidos

---

## 🧪 Endpoints Documentados

Todos los módulos del sistema están documentados:

| Módulo | Ruta Base | Estado |
|--------|-----------|--------|
| Auth | `/api/auth` | ✅ |
| Usuarios | `/api/usuarios` | ✅ |
| Empresas | `/api/empresas` | ✅ |
| Inventario | `/api/inventario` | ✅ |
| Compras | `/api/compras` | ✅ |
| Ventas | `/api/ventas` | ✅ |
| RRHH | `/api/rrhh` | ✅ |
| Producción | `/api/produccion` | ✅ |
| Geografía | `/api/geo` | ✅ |
| Configuración | `/api/configuracion` | ✅ |
| Dashboard | `/api/dashboard` | ✅ |

---

## 🛠️ Solución de Problemas

### Swagger no carga

1. Verificar que el backend esté corriendo: `http://localhost:3001`
2. Revisar logs del backend para errores
3. Verificar que `@nestjs/swagger` esté instalado

### Endpoints no aparecen

Asegúrate de que los controladores tengan decoradores `@ApiTags` y `@ApiOperation`:

```typescript
@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  async crear(@Body() dto: CrearUsuarioDto) {
    // ...
  }
}
```

---

## 📝 Comandos Útiles

```bash
# Desarrollo con hot-reload
cd apps/backend
npm run dev

# Build de producción
npm run build

# Verificar Swagger en producción (Vercel)
# Deploy y visitar: https://tu-proyecto.vercel.app/api/docs
```

---

**Documentación generada:** 2026-03-24  
**Versión API:** 6.0  
**Última verificación:** 2026-03-24
