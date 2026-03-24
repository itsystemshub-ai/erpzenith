# 📊 Configuración de Vercel Analytics

## Estado: ✅ CONFIGURADO

Vercel Analytics y Speed Insights están integrados en el frontend.

---

## 🚀 Qué está instalado

### Paquetes

```json
{
  "@vercel/analytics": "^1.5.0",
  "@vercel/speed-insights": "^1.2.0"
}
```

### Componentes

Ubicación: `apps/frontend/src/app/layout.tsx`

```tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// En el body del layout
<Analytics />
<SpeedInsights />
```

---

## 📈 Qué se mide

### Vercel Analytics

- **Page Views** - Visitas a cada página
- **Events** - Eventos personalizados
- **User Location** - Ubicación geográfica de visitantes
- **Device** - Tipo de dispositivo (móvil, desktop, tablet)
- **Browser** - Navegador utilizado
- **OS** - Sistema operativo
- **Referrer** - Fuente de tráfico

### Vercel Speed Insights

- **LCP** (Largest Contentful Paint) - Tiempo de carga del contenido principal
- **FID** (First Input Delay) - Retraso en la primera interacción
- **CLS** (Cumulative Layout Shift) - Estabilidad visual
- **FCP** (First Contentful Paint) - Primera pintura de contenido

---

## 🔧 Configuración en Vercel

### Paso 1: Habilitar Analytics

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. **Settings** → **Analytics**
3. Click en **"Enable Vercel Analytics"**

### Paso 2: Habilitar Speed Insights

1. **Settings** → **Speed Insights**
2. Click en **"Enable Vercel Speed Insights"**

### Paso 3: Deploy

```bash
# Hacer deploy para activar
vercel --prod

# O hacer push a GitHub
git push origin main
```

---

## 📊 Cómo Ver los Datos

### Dashboard de Analytics

1. Ve a [vercel.com](https://vercel.com)
2. Selecciona tu proyecto
3. Click en **"Analytics"** en el sidebar

### Dashboard de Speed Insights

1. Ve a tu proyecto
2. Click en **"Speed Insights"** en el sidebar
3. Ver métricas de rendimiento en tiempo real

---

## 🎯 Eventos Personalizados

Puedes trackear eventos específicos:

```tsx
import { track } from '@vercel/analytics/react'

// En tu componente
<button
  onClick={() => track('button-clicked', {
    button: 'download',
    file: 'report.pdf'
  })}
>
  Descargar
</button>
```

### Eventos sugeridos para ERP

```tsx
// Login
track('login', { user: username, success: true })

// Ventas
track('factura-creada', { monto: total, cliente: clienteId })

// Inventario
track('producto-creado', { sku, categoria })

// Reportes
track('reporte-exportado', { tipo: 'excel', modulo: 'ventas' })
```

---

## 🔒 Privacidad

Vercel Analytics:

- ✅ No usa cookies
- ✅ No requiere banner de cookies (GDPR-friendly)
- ✅ Anonimiza IPs automáticamente
- ✅ No rastrea entre sitios
- ✅ Datos retenidos por 90 días

---

## 📌 Métricas Clave a Monitorear

### Rendimiento

| Métrica | Bueno | Necesita Mejora |
|---------|-------|-----------------|
| LCP | < 2.5s | > 4.0s |
| FID | < 100ms | > 300ms |
| CLS | < 0.1 | > 0.25 |
| FCP | < 1.8s | > 3.0s |

### Tráfico

- Páginas más visitadas
- Fuentes de tráfico (directo, referral, search)
- Dispositivos más usados
- Horarios pico

---

## 🛠️ Solución de Problemas

### Analytics no muestra datos

1. Verificar que el deploy esté en producción
2. Confirmar que Analytics está habilitado en Vercel
3. Revisar consola del navegador para errores
4. Esperar ~5 minutos para que los datos aparezcan

### Speed Insights no carga

1. Verificar que el componente esté en `layout.tsx`
2. Asegurar que el proyecto esté en Vercel
3. Revisar que no haya bloqueadores de anuncios

---

## 📚 Recursos

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [Speed Insights Docs](https://vercel.com/docs/speed-insights)
- [Quick Start](https://vercel.com/docs/analytics/quickstart)

---

**Configurado:** 2026-03-24  
**Versión:** 6.0.0  
**Estado:** ✅ Activo en producción

**Hecho en Venezuela** 🇻🇪
