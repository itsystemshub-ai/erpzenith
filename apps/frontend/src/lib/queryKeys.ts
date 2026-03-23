/**
 * Query Keys centralizadas — evita strings duplicados y permite
 * invalidación precisa entre módulos con React Query.
 */

export const QK = {
  // Inventario
  inventario: {
    all:        () => ['inventario'] as const,
    productos:  () => ['inventario', 'productos'] as const,
    producto:   (id: string) => ['inventario', 'productos', id] as const,
    movimientos:() => ['inventario', 'movimientos'] as const,
    almacenes:  () => ['inventario', 'almacenes'] as const,
    stock:      (id: string) => ['inventario', 'stock', id] as const,
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
  },

  // RRHH
  rrhh: {
    all:       () => ['rrhh'] as const,
    empleados: () => ['rrhh', 'empleados'] as const,
    empleado:  (id: string) => ['rrhh', 'empleados', id] as const,
    resumen:   () => ['rrhh', 'resumen'] as const,
    nomina:    () => ['rrhh', 'nomina'] as const,
  },

  // Dashboard ejecutivo
  ejecutivo: {
    kpis:      () => ['ejecutivo', 'kpis'] as const,
    charts:    () => ['ejecutivo', 'charts'] as const,
  },

  // Configuración
  configuracion: {
    all:       () => ['configuracion'] as const,
    clave:     (clave: string) => ['configuracion', clave] as const,
    bcvTasa:   () => ['configuracion', 'bcv', 'tasa'] as const,
    roles:     () => ['configuracion', 'sistema', 'roles'] as const,
  },
} as const
