/**
 * Query Keys centralizadas — evita strings duplicados y permite
 * invalidación precisa entre módulos con React Query.
 */

export const QK = {
  // Inventario
  inventario: {
    all:                    () => ['inventario'] as const,
    productos:              () => ['inventario', 'productos'] as const,
    producto:               (id: string) => ['inventario', 'productos', id] as const,
    movimientos:            () => ['inventario', 'movimientos'] as const,
    almacenes:              () => ['inventario', 'almacenes'] as const,
    stock:                  (id: string) => ['inventario', 'stock', id] as const,
    reabastecimientoKpis:   () => ['inventario', 'reabastecimiento', 'kpis'] as const,
    reabastecimientoProductos:() => ['inventario', 'reabastecimiento', 'productos'] as const,
  },

  // Ventas
  ventas: {
    all:         () => ['ventas'] as const,
    facturas:    () => ['ventas', 'facturas'] as const,
    factura:     (id: string) => ['ventas', 'facturas', id] as const,
    cotizaciones:() => ['ventas', 'cotizaciones'] as const,
    clientes:    () => ['ventas', 'clientes'] as const,
    cliente:     (id: string) => ['ventas', 'clientes', id] as const,
    dashboard:   () => ['ventas', 'dashboard'] as const,
  },

  // Compras
  compras: {
    all:       () => ['compras'] as const,
    ordenes:   () => ['compras', 'ordenes'] as const,
    orden:     (id: string) => ['compras', 'ordenes', id] as const,
    proveedores:() => ['compras', 'proveedores'] as const,
  },

  // Contabilidad
  contabilidad: {
    all:       () => ['contabilidad'] as const,
    asientos:  () => ['contabilidad', 'asientos'] as const,
    balance:   () => ['contabilidad', 'balance'] as const,
    pyl:       () => ['contabilidad', 'pyl'] as const,
    stats:     () => ['contabilidad', 'stats'] as const,
  },

  // RRHH
  rrhh: {
    all:       () => ['rrhh'] as const,
    empleados: () => ['rrhh', 'empleados'] as const,
    empleado:  (id: string) => ['rrhh', 'empleados', id] as const,
    resumen:   () => ['rrhh', 'resumen'] as const,
    nomina:    () => ['rrhh', 'nomina'] as const,
    nominaEmpleados: () => ['rrhh', 'nomina', 'empleados'] as const,
    nominaDeducciones: () => ['rrhh', 'nomina', 'deducciones'] as const,
  },

  // Dashboard ejecutivo
  ejecutivo: {
    kpis:      () => ['ejecutivo', 'kpis'] as const,
    charts:    () => ['ejecutivo', 'charts'] as const,
  },

  // Activos
  activos: {
    all:       () => ['activos'] as const,
    kpis:      () => ['activos', 'kpis'] as const,
    list:      () => ['activos', 'list'] as const,
    asientos:  () => ['activos', 'asientos'] as const,
    categorias:() => ['activos', 'categorias'] as const,
  },

  // Configuración
  configuracion: {
    all:       () => ['configuracion'] as const,
    clave:     (clave: string) => ['configuracion', clave] as const,
    bcvTasa:   () => ['configuracion', 'bcv', 'tasa'] as const,
    roles:     () => ['configuracion', 'sistema', 'roles'] as const,
    arquitectura: {
      modulos:   () => ['configuracion', 'arquitectura', 'modulos'] as const,
      conexiones:() => ['configuracion', 'arquitectura', 'conexiones'] as const,
      stack:     () => ['configuracion', 'arquitectura', 'stack'] as const,
    },
  },

  // Marketing
  marketing: {
    all:       () => ['marketing'] as const,
    metricas:  () => ['marketing', 'metricas'] as const,
    campanas:  () => ['marketing', 'campanas'] as const,
    segmentos: () => ['marketing', 'segmentos'] as const,
    funnel:    () => ['marketing', 'funnel'] as const,
  },
} as const
