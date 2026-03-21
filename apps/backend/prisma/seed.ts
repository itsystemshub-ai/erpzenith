import { PrismaClient, Prisma } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // ─── Permisos y Roles ────────────────────────────────────────────────────
  const modulos = ['inventario', 'compras', 'ventas', 'rrhh', 'nomina', 'produccion', 'mantenimiento', 'calidad', 'flota', 'marketing', 'pos', 'reportes', 'configuracion']
  const acciones = ['read', 'create', 'update', 'delete', 'export']

  const permisos = []
  for (const modulo of modulos) {
    for (const accion of acciones) {
      const p = await prisma.permission.upsert({
        where: { module_action: { module: modulo, action: accion } },
        update: {},
        create: { module: modulo, action: accion },
      })
      permisos.push(p)
    }
  }

  const rolSuperDev = await prisma.role.upsert({
    where: { name: 'SUPERDEV' },
    update: { permissions: { set: permisos.map((p) => ({ id: p.id })) } },
    create: { name: 'SUPERDEV', permissions: { connect: permisos.map((p) => ({ id: p.id })) } },
  })

  const password = await bcrypt.hash('Zenith@2026!', 12)
  const superuser = await prisma.user.upsert({
    where: { username: 'superadminzenith' },
    update: { password },
    create: { name: 'Super Admin Zenith', username: 'superadminzenith', password, roleId: rolSuperDev.id, isActive: true },
  })
  console.log('✅ Superusuario:', superuser.username)

  // ─── Tasa BCV ────────────────────────────────────────────────────────────
  const tasa = await prisma.tasaBCV.create({ data: { tasa: new Prisma.Decimal(46.82) } })
  console.log('✅ Tasa BCV:', tasa.tasa.toString(), 'VES/USD')

  // ─── Almacenes ───────────────────────────────────────────────────────────
  const almacenes = await Promise.all([
    prisma.almacen.upsert({ where: { codigo: 'ALM-001' }, update: {}, create: { codigo: 'ALM-001', nombre: 'Almacén Principal', ubicacion: 'Caracas, Miranda' } }),
    prisma.almacen.upsert({ where: { codigo: 'ALM-002' }, update: {}, create: { codigo: 'ALM-002', nombre: 'Hub Norte', ubicacion: 'Valencia, Carabobo' } }),
    prisma.almacen.upsert({ where: { codigo: 'ALM-003' }, update: {}, create: { codigo: 'ALM-003', nombre: 'Sucursal Sur', ubicacion: 'Maracaibo, Zulia' } }),
  ])
  console.log('✅ Almacenes:', almacenes.length)

  // ─── Productos ───────────────────────────────────────────────────────────
  const productosData = [
    { sku: 'SKU-8829-X', nombre: 'Hyperion Sensor V2', categoria: 'Óptica & Precisión', unidad: 'UND', precioUSD: new Prisma.Decimal(89.50), stockMin: 20 },
    { sku: 'SKU-1102-P', nombre: 'Zenith Control Unit', categoria: 'Procesadores', unidad: 'UND', precioUSD: new Prisma.Decimal(284.00), stockMin: 50 },
    { sku: 'SKU-4401-T', nombre: 'Titanium Flex Cable 2m', categoria: 'Cables & Cableado', unidad: 'UND', precioUSD: new Prisma.Decimal(18.00), stockMin: 100 },
    { sku: 'SKU-2210-M', nombre: 'Motor Servo Industrial 5A', categoria: 'Motores & Actuadores', unidad: 'UND', precioUSD: new Prisma.Decimal(145.00), stockMin: 30 },
    { sku: 'SKU-3305-R', nombre: 'Relay Modular 24VDC', categoria: 'Electrónica', unidad: 'UND', precioUSD: new Prisma.Decimal(12.50), stockMin: 200 },
    { sku: 'SKU-5512-B', nombre: 'Batería LiFePO4 100Ah', categoria: 'Energía', unidad: 'UND', precioUSD: new Prisma.Decimal(320.00), stockMin: 15 },
    { sku: 'SKU-6601-F', nombre: 'Filtro HEPA Industrial', categoria: 'Filtración', unidad: 'UND', precioUSD: new Prisma.Decimal(55.00), stockMin: 40 },
    { sku: 'SKU-7720-V', nombre: 'Válvula Solenoide 1/2"', categoria: 'Hidráulica', unidad: 'UND', precioUSD: new Prisma.Decimal(38.00), stockMin: 60 },
  ]

  const productos = []
  for (const p of productosData) {
    const prod = await prisma.producto.upsert({ where: { sku: p.sku }, update: {}, create: p })
    productos.push(prod)
  }
  console.log('✅ Productos:', productos.length)

  // ─── Stocks ──────────────────────────────────────────────────────────────
  const stocksData = [
    // Almacén Principal
    { productoId: productos[0].id, almacenId: almacenes[0].id, cantidad: 12 },  // crítico
    { productoId: productos[1].id, almacenId: almacenes[0].id, cantidad: 452 },
    { productoId: productos[2].id, almacenId: almacenes[0].id, cantidad: 84 },  // bajo
    { productoId: productos[3].id, almacenId: almacenes[0].id, cantidad: 67 },
    { productoId: productos[4].id, almacenId: almacenes[0].id, cantidad: 380 },
    // Hub Norte
    { productoId: productos[1].id, almacenId: almacenes[1].id, cantidad: 120 },
    { productoId: productos[5].id, almacenId: almacenes[1].id, cantidad: 8 },   // crítico
    { productoId: productos[6].id, almacenId: almacenes[1].id, cantidad: 95 },
    // Sucursal Sur
    { productoId: productos[2].id, almacenId: almacenes[2].id, cantidad: 210 },
    { productoId: productos[7].id, almacenId: almacenes[2].id, cantidad: 44 },
    { productoId: productos[3].id, almacenId: almacenes[2].id, cantidad: 28 },
  ]

  for (const s of stocksData) {
    await prisma.stock.upsert({
      where: { productoId_almacenId: { productoId: s.productoId, almacenId: s.almacenId } },
      update: { cantidad: s.cantidad },
      create: s,
    })
  }
  console.log('✅ Stocks registrados')

  // ─── Movimientos de Stock ────────────────────────────────────────────────
  await prisma.movimientoStock.createMany({
    data: [
      { productoId: productos[0].id, tipo: 'ENTRADA', cantidad: 250, referencia: 'OC-2025-001', notas: 'Recepción lote B2024-001' },
      { productoId: productos[1].id, tipo: 'SALIDA', cantidad: 12, referencia: 'FAC-2025-0128', notas: 'Despacho cliente' },
      { productoId: productos[2].id, tipo: 'TRASLADO', cantidad: 40, referencia: 'TRF-001', notas: 'Principal → Sucursal Sur' },
      { productoId: productos[3].id, tipo: 'AJUSTE', cantidad: -5, referencia: 'AJU-001', notas: 'Ajuste por inventario físico' },
      { productoId: productos[4].id, tipo: 'ENTRADA', cantidad: 500, referencia: 'OC-2025-002', notas: 'Reabastecimiento Q1' },
    ],
    skipDuplicates: true,
  })
  console.log('✅ Movimientos de stock')

  // ─── Proveedores ─────────────────────────────────────────────────────────
  const proveedores = await Promise.all([
    prisma.proveedor.upsert({ where: { rif: 'J-30495822-1' }, update: {}, create: { rif: 'J-30495822-1', nombre: 'Tecno Suministros C.A.', email: 'ventas@tecnosum.com.ve', telefono: '+58-212-555-0101' } }),
    prisma.proveedor.upsert({ where: { rif: 'J-29384756-3' }, update: {}, create: { rif: 'J-29384756-3', nombre: 'Distribuidora Electrónica Andina', email: 'compras@deandina.com.ve', telefono: '+58-241-555-0202' } }),
    prisma.proveedor.upsert({ where: { rif: 'J-40192837-5' }, update: {}, create: { rif: 'J-40192837-5', nombre: 'Importaciones Globales S.A.', email: 'info@imglobal.com.ve', telefono: '+58-261-555-0303' } }),
  ])
  console.log('✅ Proveedores:', proveedores.length)

  // ─── Órdenes de Compra ───────────────────────────────────────────────────
  const oc1 = await prisma.ordenCompra.upsert({
    where: { numero: 'OC-2025-001' },
    update: {},
    create: {
      numero: 'OC-2025-001', proveedorId: proveedores[0].id, estado: 'RECIBIDA',
      subtotalUSD: new Prisma.Decimal(1790.00), ivaUSD: new Prisma.Decimal(286.40),
      totalUSD: new Prisma.Decimal(2076.40), tasaBCV: new Prisma.Decimal(46.82),
      items: { create: [
        { productoId: productos[0].id, cantidad: 20, precioUSD: new Prisma.Decimal(89.50) },
      ]},
    },
  })
  const oc2 = await prisma.ordenCompra.upsert({
    where: { numero: 'OC-2025-002' },
    update: {},
    create: {
      numero: 'OC-2025-002', proveedorId: proveedores[1].id, estado: 'EMITIDA',
      subtotalUSD: new Prisma.Decimal(6250.00), ivaUSD: new Prisma.Decimal(1000.00),
      totalUSD: new Prisma.Decimal(7250.00), tasaBCV: new Prisma.Decimal(46.82),
      items: { create: [
        { productoId: productos[4].id, cantidad: 500, precioUSD: new Prisma.Decimal(12.50) },
      ]},
    },
  })
  const oc3 = await prisma.ordenCompra.upsert({
    where: { numero: 'OC-2025-003' },
    update: {},
    create: {
      numero: 'OC-2025-003', proveedorId: proveedores[2].id, estado: 'BORRADOR',
      subtotalUSD: new Prisma.Decimal(4800.00), ivaUSD: new Prisma.Decimal(768.00),
      totalUSD: new Prisma.Decimal(5568.00), tasaBCV: new Prisma.Decimal(46.82),
      items: { create: [
        { productoId: productos[5].id, cantidad: 15, precioUSD: new Prisma.Decimal(320.00) },
      ]},
    },
  })
  console.log('✅ Órdenes de compra:', [oc1, oc2, oc3].length)

  // ─── Clientes ────────────────────────────────────────────────────────────
  const clientes = await Promise.all([
    prisma.cliente.upsert({ where: { rif: 'J-30495822-9' }, update: {}, create: { rif: 'J-30495822-9', nombre: 'Inversiones Globales C.A.', email: 'admin@invglobales.com.ve', telefono: '+58-212-555-1001' } }),
    prisma.cliente.upsert({ where: { rif: 'J-29384756-4' }, update: {}, create: { rif: 'J-29384756-4', nombre: 'Soluciones Tech Andina C.A.', email: 'compras@techandina.com.ve', telefono: '+58-241-555-1002' } }),
    prisma.cliente.upsert({ where: { rif: 'J-00012345-6' }, update: {}, create: { rif: 'J-00012345-6', nombre: 'Alimentos Polar S.A.', email: 'proveedores@polar.com.ve', telefono: '+58-212-555-1003' } }),
    prisma.cliente.upsert({ where: { rif: 'J-40192837-6' }, update: {}, create: { rif: 'J-40192837-6', nombre: 'Distribuidora Norte C.A.', email: 'info@distnorte.com.ve', telefono: '+58-251-555-1004' } }),
    prisma.cliente.upsert({ where: { rif: 'J-31827465-2' }, update: {}, create: { rif: 'J-31827465-2', nombre: 'Constructora Orinoco S.A.', email: 'licitaciones@orinoco.com.ve', telefono: '+58-286-555-1005' } }),
    prisma.cliente.upsert({ where: { rif: 'J-19283746-4' }, update: {}, create: { rif: 'J-19283746-4', nombre: 'Ferretería Industrial Caracas', email: 'ventas@ferindcaracas.com.ve', telefono: '+58-212-555-1006' } }),
    prisma.cliente.upsert({ where: { rif: 'J-28374651-7' }, update: {}, create: { rif: 'J-28374651-7', nombre: 'Clínica Santa María C.A.', email: 'administracion@clinicasm.com.ve', telefono: '+58-212-555-1007' } }),
  ])
  console.log('✅ Clientes:', clientes.length)

  // ─── Facturas ────────────────────────────────────────────────────────────
  const facturasData = [
    { numero: 'FAC-2025-0128', clienteId: clientes[0].id, estado: 'PAGADA', subtotalVES: new Prisma.Decimal(184482.76), ivaVES: new Prisma.Decimal(29517.24), totalVES: new Prisma.Decimal(214000.00), totalUSD: new Prisma.Decimal(4568.56), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Zenith Control Unit x16', cantidad: 16, precioVES: new Prisma.Decimal(11530.17) }] },
    { numero: 'FAC-2025-0127', clienteId: clientes[1].id, estado: 'PENDIENTE', subtotalVES: new Prisma.Decimal(49431.03), ivaVES: new Prisma.Decimal(7908.97), totalVES: new Prisma.Decimal(57340.00), totalUSD: new Prisma.Decimal(1224.50), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Hyperion Sensor V2 x12', cantidad: 12, precioVES: new Prisma.Decimal(4119.25) }] },
    { numero: 'FAC-2025-0126', clienteId: clientes[2].id, estado: 'PAGADA', subtotalVES: new Prisma.Decimal(363793.10), ivaVES: new Prisma.Decimal(58206.90), totalVES: new Prisma.Decimal(422000.00), totalUSD: new Prisma.Decimal(9011.53), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Motor Servo Industrial 5A x62', cantidad: 62, precioVES: new Prisma.Decimal(5867.63) }] },
    { numero: 'FAC-2025-0125', clienteId: clientes[3].id, estado: 'VENCIDA', subtotalVES: new Prisma.Decimal(133620.69), ivaVES: new Prisma.Decimal(21379.31), totalVES: new Prisma.Decimal(155000.00), totalUSD: new Prisma.Decimal(3309.65), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Batería LiFePO4 100Ah x10', cantidad: 10, precioVES: new Prisma.Decimal(13362.07) }] },
    { numero: 'FAC-2025-0124', clienteId: clientes[4].id, estado: 'PAGADA', subtotalVES: new Prisma.Decimal(77155.17), ivaVES: new Prisma.Decimal(12344.83), totalVES: new Prisma.Decimal(89500.00), totalUSD: new Prisma.Decimal(1911.06), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Válvula Solenoide 1/2" x50', cantidad: 50, precioVES: new Prisma.Decimal(1543.10) }] },
    { numero: 'FAC-2025-0123', clienteId: clientes[5].id, estado: 'ANULADA', subtotalVES: new Prisma.Decimal(27586.21), ivaVES: new Prisma.Decimal(4413.79), totalVES: new Prisma.Decimal(32000.00), totalUSD: new Prisma.Decimal(683.04), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Relay Modular 24VDC x88', cantidad: 88, precioVES: new Prisma.Decimal(313.48) }] },
    { numero: 'FAC-2025-0122', clienteId: clientes[6].id, estado: 'VENCIDA', subtotalVES: new Prisma.Decimal(67413.79), ivaVES: new Prisma.Decimal(10786.21), totalVES: new Prisma.Decimal(78200.00), totalUSD: new Prisma.Decimal(1669.80), tasaBCV: new Prisma.Decimal(46.82), items: [{ descripcion: 'Filtro HEPA Industrial x26', cantidad: 26, precioVES: new Prisma.Decimal(2592.84) }] },
  ]

  for (const f of facturasData) {
    const { items, ...facturaFields } = f
    await prisma.factura.upsert({
      where: { numero: f.numero },
      update: {},
      create: { ...facturaFields, items: { create: items } },
    })
  }
  console.log('✅ Facturas:', facturasData.length)

  // ─── Empleados ───────────────────────────────────────────────────────────
  const empleadosData = [
    { cedula: 'V-12345678', nombre: 'Carlos', apellido: 'Rodríguez', email: 'c.rodriguez@zenith.com.ve', cargo: 'Gerente de Operaciones', departamento: 'Operaciones', salarioUSD: new Prisma.Decimal(2800.00), fechaIngreso: new Date('2020-03-15'), estado: 'ACTIVO' },
    { cedula: 'V-23456789', nombre: 'María', apellido: 'González', email: 'm.gonzalez@zenith.com.ve', cargo: 'Analista de Inventario', departamento: 'Inventario', salarioUSD: new Prisma.Decimal(1200.00), fechaIngreso: new Date('2021-06-01'), estado: 'ACTIVO' },
    { cedula: 'V-34567890', nombre: 'Luis', apellido: 'Martínez', email: 'l.martinez@zenith.com.ve', cargo: 'Ejecutivo de Ventas', departamento: 'Ventas', salarioUSD: new Prisma.Decimal(1500.00), fechaIngreso: new Date('2021-09-10'), estado: 'ACTIVO' },
    { cedula: 'V-45678901', nombre: 'Ana', apellido: 'Pérez', email: 'a.perez@zenith.com.ve', cargo: 'Coordinadora de Compras', departamento: 'Compras', salarioUSD: new Prisma.Decimal(1350.00), fechaIngreso: new Date('2022-01-20'), estado: 'ACTIVO' },
    { cedula: 'V-56789012', nombre: 'José', apellido: 'Hernández', email: 'j.hernandez@zenith.com.ve', cargo: 'Técnico de Almacén', departamento: 'Inventario', salarioUSD: new Prisma.Decimal(850.00), fechaIngreso: new Date('2022-05-03'), estado: 'ACTIVO' },
    { cedula: 'V-67890123', nombre: 'Sofía', apellido: 'López', email: 's.lopez@zenith.com.ve', cargo: 'Contadora Senior', departamento: 'Contabilidad', salarioUSD: new Prisma.Decimal(2100.00), fechaIngreso: new Date('2019-11-15'), estado: 'ACTIVO' },
    { cedula: 'V-78901234', nombre: 'Miguel', apellido: 'Torres', email: 'm.torres@zenith.com.ve', cargo: 'Desarrollador Backend', departamento: 'Tecnología', salarioUSD: new Prisma.Decimal(2500.00), fechaIngreso: new Date('2023-02-01'), estado: 'ACTIVO' },
    { cedula: 'V-89012345', nombre: 'Valentina', apellido: 'Díaz', email: 'v.diaz@zenith.com.ve', cargo: 'Analista de RRHH', departamento: 'Recursos Humanos', salarioUSD: new Prisma.Decimal(1100.00), fechaIngreso: new Date('2023-07-15'), estado: 'VACACIONES' },
    { cedula: 'V-90123456', nombre: 'Roberto', apellido: 'Sánchez', email: 'r.sanchez@zenith.com.ve', cargo: 'Supervisor de Producción', departamento: 'Producción', salarioUSD: new Prisma.Decimal(1800.00), fechaIngreso: new Date('2020-08-20'), estado: 'ACTIVO' },
    { cedula: 'V-01234567', nombre: 'Isabella', apellido: 'Ramírez', email: 'i.ramirez@zenith.com.ve', cargo: 'Gerente Comercial', departamento: 'Ventas', salarioUSD: new Prisma.Decimal(3200.00), fechaIngreso: new Date('2018-04-10'), estado: 'ACTIVO' },
  ]

  const empleados = []
  for (const e of empleadosData) {
    const emp = await prisma.empleado.upsert({ where: { cedula: e.cedula }, update: {}, create: e })
    empleados.push(emp)
  }
  console.log('✅ Empleados:', empleados.length)

  // ─── Configuración inicial ───────────────────────────────────────────────
  await prisma.configuracion.upsert({ where: { clave: 'empresa_nombre' }, update: {}, create: { clave: 'empresa_nombre', valor: 'NexusCore Zenith C.A.', descripcion: 'Nombre legal de la empresa' } })
  await prisma.configuracion.upsert({ where: { clave: 'empresa_rif' }, update: {}, create: { clave: 'empresa_rif', valor: 'J-40000001-0', descripcion: 'RIF de la empresa' } })
  await prisma.configuracion.upsert({ where: { clave: 'moneda_base' }, update: {}, create: { clave: 'moneda_base', valor: 'VES', descripcion: 'Moneda base del sistema' } })
  await prisma.configuracion.upsert({ where: { clave: 'iva_pct' }, update: {}, create: { clave: 'iva_pct', valor: '16', descripcion: 'Porcentaje de IVA Venezuela' } })
  console.log('✅ Configuración inicial')

  console.log('\n🚀 Seed completado exitosamente')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
