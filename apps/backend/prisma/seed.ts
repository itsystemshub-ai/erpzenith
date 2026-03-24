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
        update: { module: modulo, action: accion },
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

  const moduloRoles = [
    { name: 'ADMIN',      mods: modulos },
    { name: 'INVENTARIO', mods: ['inventario'] },
    { name: 'VENTAS',     mods: ['ventas', 'reportes'] },
    { name: 'COMPRAS',    mods: ['compras', 'inventario'] },
    { name: 'RRHH',       mods: ['rrhh', 'nomina'] },
    { name: 'PRODUCCION', mods: ['produccion', 'inventario'] },
    { name: 'CALIDAD',    mods: ['calidad', 'reportes'] },
    { name: 'REPORTES',   mods: ['reportes'] },
    { name: 'USER',       mods: ['inventario', 'ventas'] },
  ]

  const rolesCreados: Record<string, string> = { SUPERDEV: rolSuperDev.id }
  for (const r of moduloRoles) {
    const rolePerms = permisos.filter(p => (r.mods as string[]).includes(p.module))
    const rol = await prisma.role.upsert({
      where: { name: r.name },
      update: { permissions: { set: rolePerms.map(p => ({ id: p.id })) } },
      create: { name: r.name, permissions: { connect: rolePerms.map(p => ({ id: p.id })) } },
    })
    rolesCreados[r.name] = rol.id
  }
  console.log('✅ Roles creados:', Object.keys(rolesCreados).length)

  const superPassword = await bcrypt.hash('Zenith@2026!', 12)
  await prisma.user.upsert({
    where: { username: 'superadminzenith' },
    update: { password: superPassword, roles: { set: [{ id: rolesCreados['SUPERDEV'] }] } },
    create: { name: 'Super Admin Zenith', username: 'superadminzenith', password: superPassword, roles: { connect: [{ id: rolesCreados['SUPERDEV'] }] }, isActive: true },
  })
  console.log('✅ Superusuario: superadminzenith')

  const empresaDemo = await prisma.empresa.findFirst({ orderBy: { createdAt: 'asc' } })
  if (empresaDemo) console.log('✅ Empresa base:', empresaDemo.nombre)
  else console.log('⚠️  Sin empresa en BD')

  function genPass(seed: string): string {
    const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ', lower = 'abcdefghjkmnpqrstuvwxyz'
    const digits = '23456789', symbols = '@#$%&!'
    const h = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    return `${upper[(h*3)%upper.length]}${upper[(h*7)%upper.length]}${digits[(h*5)%digits.length]}${digits[(h*13)%digits.length]}${lower[(h*23)%lower.length]}${lower[(h*29)%lower.length]}${upper[(h*11)%upper.length]}${digits[(h*17)%digits.length]}${digits[(h*19)%digits.length]}${symbols[(h*31)%symbols.length]}`
  }

  const usuariosModulo = [
    { name: 'Admin Sistema',         username: 'admin.zenith',    role: 'ADMIN' },
    { name: 'Gestor Inventario',     username: 'inv.zenith',      role: 'INVENTARIO' },
    { name: 'Ejecutivo Ventas',      username: 'ventas.zenith',   role: 'VENTAS' },
    { name: 'Coordinador Compras',   username: 'compras.zenith',  role: 'COMPRAS' },
    { name: 'Analista RRHH',         username: 'rrhh.zenith',     role: 'RRHH' },
    { name: 'Supervisor Producción', username: 'prod.zenith',     role: 'PRODUCCION' },
    { name: 'Inspector Calidad',     username: 'calidad.zenith',  role: 'CALIDAD' },
    { name: 'Analista Reportes',     username: 'reportes.zenith', role: 'REPORTES' },
  ]

  console.log('\n📋 Contraseñas generadas:')
  for (const u of usuariosModulo) {
    const plain = genPass(u.username)
    const hashed = await bcrypt.hash(plain, 12)
    await prisma.user.upsert({
      where: { username: u.username },
      update: { password: hashed, name: u.name, roles: { set: [{ id: rolesCreados[u.role] }] }, ...(empresaDemo ? { empresaId: empresaDemo.id } : {}) },
      create: { name: u.name, username: u.username, password: hashed, roles: { connect: [{ id: rolesCreados[u.role] }] }, ...(empresaDemo ? { empresaId: empresaDemo.id } : {}), isActive: true },
    })
    console.log(`   ${u.username.padEnd(20)} → ${plain}`)
  }
  console.log('✅ Usuarios de módulo:', usuariosModulo.length)

  // ─── Tasa BCV ────────────────────────────────────────────────────────────
  const tasaExistente = await prisma.tasaBCV.findFirst({ orderBy: { fecha: 'desc' } })
  if (!tasaExistente) {
    await prisma.tasaBCV.create({ data: { tasa: new Prisma.Decimal(46.82) } })
    console.log('✅ Tasa BCV inicial: 46.82 VES/USD')
  } else {
    console.log('✅ Tasa BCV existente respetada:', tasaExistente.tasa.toString(), 'VES/USD')
  }

  // ─── Almacenes ───────────────────────────────────────────────────────────
  const almacenes = await Promise.all([
    prisma.almacen.upsert({ where: { codigo: 'ALM-001' }, update: { nombre: 'Almacén Principal', ubicacion: 'Caracas, Miranda' }, create: { codigo: 'ALM-001', nombre: 'Almacén Principal', ubicacion: 'Caracas, Miranda' } }),
    prisma.almacen.upsert({ where: { codigo: 'ALM-002' }, update: { nombre: 'Hub Norte', ubicacion: 'Valencia, Carabobo' }, create: { codigo: 'ALM-002', nombre: 'Hub Norte', ubicacion: 'Valencia, Carabobo' } }),
    prisma.almacen.upsert({ where: { codigo: 'ALM-003' }, update: { nombre: 'Sucursal Sur', ubicacion: 'Maracaibo, Zulia' }, create: { codigo: 'ALM-003', nombre: 'Sucursal Sur', ubicacion: 'Maracaibo, Zulia' } }),
  ])
  console.log('✅ Almacenes:', almacenes.length)

  // ─── Productos ───────────────────────────────────────────────────────────
  const productosData = [
    { sku: 'SKU-8829-X', nombre: 'Hyperion Sensor V2',        tipo: 'Sensor',    unidad: 'UND', precioUSD: new Prisma.Decimal(89.50),  stockMin: 20 },
    { sku: 'SKU-1102-P', nombre: 'Zenith Control Unit',       tipo: 'Electrónica', unidad: 'UND', precioUSD: new Prisma.Decimal(284.00), stockMin: 50 },
    { sku: 'SKU-4401-T', nombre: 'Titanium Flex Cable 2m',    tipo: 'Cable',     unidad: 'UND', precioUSD: new Prisma.Decimal(18.00),  stockMin: 100 },
    { sku: 'SKU-2210-M', nombre: 'Motor Servo Industrial 5A', tipo: 'Motor',     unidad: 'UND', precioUSD: new Prisma.Decimal(145.00), stockMin: 30 },
    { sku: 'SKU-3305-R', nombre: 'Relay Modular 24VDC',       tipo: 'Electrónica', unidad: 'UND', precioUSD: new Prisma.Decimal(12.50),  stockMin: 200 },
    { sku: 'SKU-5512-B', nombre: 'Batería LiFePO4 100Ah',     tipo: 'Energía',   unidad: 'UND', precioUSD: new Prisma.Decimal(320.00), stockMin: 15 },
    { sku: 'SKU-6601-F', nombre: 'Filtro HEPA Industrial',    tipo: 'Filtro',    unidad: 'UND', precioUSD: new Prisma.Decimal(55.00),  stockMin: 40 },
    { sku: 'SKU-7720-V', nombre: 'Válvula Solenoide 1/2"',    tipo: 'Hidráulica', unidad: 'UND', precioUSD: new Prisma.Decimal(38.00),  stockMin: 60 },
  ]
  const productos = []
  for (const p of productosData) {
    const prod = await prisma.producto.create({ data: p })
    productos.push(prod)
  }
  console.log('✅ Productos:', productos.length)

  // ─── Stocks ──────────────────────────────────────────────────────────────
  const stocksData = [
    { productoId: productos[0].id, almacenId: almacenes[0].id, cantidad: 12 },
    { productoId: productos[1].id, almacenId: almacenes[0].id, cantidad: 452 },
    { productoId: productos[2].id, almacenId: almacenes[0].id, cantidad: 84 },
    { productoId: productos[3].id, almacenId: almacenes[0].id, cantidad: 67 },
    { productoId: productos[4].id, almacenId: almacenes[0].id, cantidad: 380 },
    { productoId: productos[1].id, almacenId: almacenes[1].id, cantidad: 120 },
    { productoId: productos[5].id, almacenId: almacenes[1].id, cantidad: 8 },
    { productoId: productos[6].id, almacenId: almacenes[1].id, cantidad: 95 },
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

  await prisma.movimientoStock.createMany({
    data: [
      { productoId: productos[0].id, tipo: 'ENTRADA',  cantidad: 250, referencia: 'OC-2025-001', notas: 'Recepción lote B2024-001' },
      { productoId: productos[1].id, tipo: 'SALIDA',   cantidad: 12,  referencia: 'FAC-2025-0128', notas: 'Despacho cliente' },
      { productoId: productos[2].id, tipo: 'TRASLADO', cantidad: 40,  referencia: 'TRF-001', notas: 'Principal → Sucursal Sur' },
      { productoId: productos[3].id, tipo: 'AJUSTE',   cantidad: -5,  referencia: 'AJU-001', notas: 'Ajuste por inventario físico' },
      { productoId: productos[4].id, tipo: 'ENTRADA',  cantidad: 500, referencia: 'OC-2025-002', notas: 'Reabastecimiento Q1' },
    ],
    skipDuplicates: true,
  })
  console.log('✅ Movimientos de stock')

  // ─── Proveedores ─────────────────────────────────────────────────────────
  const proveedores = await Promise.all([
    prisma.proveedor.upsert({ where: { rif: 'J-30495822-1' }, update: { nombre: 'Tecno Suministros C.A.',          email: 'ventas@tecnosum.com.ve',   telefonoPersonal: '+58-212-555-0101' }, create: { rif: 'J-30495822-1', nombre: 'Tecno Suministros C.A.',          email: 'ventas@tecnosum.com.ve',   telefonoPersonal: '+58-212-555-0101' } }),
    prisma.proveedor.upsert({ where: { rif: 'J-29384756-3' }, update: { nombre: 'Distribuidora Electrónica Andina', email: 'compras@deandina.com.ve',  telefonoPersonal: '+58-241-555-0202' }, create: { rif: 'J-29384756-3', nombre: 'Distribuidora Electrónica Andina', email: 'compras@deandina.com.ve',  telefonoPersonal: '+58-241-555-0202' } }),
    prisma.proveedor.upsert({ where: { rif: 'J-40192837-5' }, update: { nombre: 'Importaciones Globales S.A.',      email: 'info@imglobal.com.ve',     telefonoPersonal: '+58-261-555-0303' }, create: { rif: 'J-40192837-5', nombre: 'Importaciones Globales S.A.',      email: 'info@imglobal.com.ve',     telefonoPersonal: '+58-261-555-0303' } }),
  ])
  console.log('✅ Proveedores:', proveedores.length)

  // ─── Órdenes de Compra ───────────────────────────────────────────────────
  const ocData = [
    { numero: 'OC-2025-001', idx: 0, estado: 'RECIBIDA', sub: 1790.00, iva: 286.40, total: 2076.40, prodIdx: 0, cant: 20, precio: 89.50 },
    { numero: 'OC-2025-002', idx: 1, estado: 'EMITIDA',  sub: 6250.00, iva: 1000.00,total: 7250.00, prodIdx: 4, cant: 500,precio: 12.50 },
    { numero: 'OC-2025-003', idx: 2, estado: 'BORRADOR', sub: 4800.00, iva: 768.00, total: 5568.00, prodIdx: 5, cant: 15, precio: 320.00 },
  ]
  for (const oc of ocData) {
    await prisma.ordenCompra.upsert({
      where: { numero: oc.numero },
      update: { estado: oc.estado, subtotalUSD: new Prisma.Decimal(oc.sub), ivaUSD: new Prisma.Decimal(oc.iva), totalUSD: new Prisma.Decimal(oc.total) },
      create: { numero: oc.numero, proveedorId: proveedores[oc.idx].id, estado: oc.estado, subtotalUSD: new Prisma.Decimal(oc.sub), ivaUSD: new Prisma.Decimal(oc.iva), totalUSD: new Prisma.Decimal(oc.total), tasaBCV: new Prisma.Decimal(46.82), items: { create: [{ productoId: productos[oc.prodIdx].id, cantidad: oc.cant, precioUSD: new Prisma.Decimal(oc.precio) }] } },
    })
  }
  console.log('✅ Órdenes de compra:', ocData.length)

  // Clientes y facturas de referencia eliminados — se cargan vía importación Excel

  // ─── Geografía Venezuela ─────────────────────────────────────────────────
  const geoData: Record<string, Record<string, string[]>> = {
    'REGIÓN LOS ANDES': {
      'BARINAS': ['Alberto Arvelo Torrealba','Andrés Eloy Blanco','Antonio José de Sucre','Arismendi','Barinas','Bolívar','Cruz Paredes','Ezequiel Zamora','Obispos','Pedraza','Rojas','Sosa'],
      'MÉRIDA': ['Alberto Adriani','Andrés Bello','Antonio Pinto Salinas','Aricagua','Arzobispo Chacón','Campo Elías','Caracciolo Parra Olmedo','Cardenal Quintero','Guaraque','Julio César Salas','Justo Briceño','Libertador','Miranda','Obispo Ramos de Lora','Padre Noguera','Pueblo Llano','Rangel','Rivas Dávila','Santos Marquina','Sucre','Tovar','Tulio Febres Cordero','Zea'],
      'TRUJILLO': ['Andrés Bello','Boconó','Bolívar','Candelaria','Carache','Escuque','José Felipe Márquez Cañizales','José Vicente Campo Elías','La Ceiba','Miranda','Monte Carmelo','Motatán','Pampán','Pampanito','Rafael Rangel','San Rafael de Carvajal','Sucre','Trujillo','Urdaneta','Valera'],
      'TÁCHIRA': ['Andrés Bello','Antonio Rómulo Costa','Ayacucho','Bolívar','Cárdenas','Córdoba','Fernández Feo','Francisco de Miranda','García de Hevia','Guásimos','Independencia','Jáuregui','José María Vargas','Junín','Libertad','Libertador','Lobatera','Michelena','Panamericano','Pedro María Ureña','Rafael Urdaneta','Samuel Darío Maldonado','San Cristóbal','San Judas Tadeo','Seboruco','Simón Rodríguez','Sucre','Torbes','Uribante'],
    },
    'REGIÓN CAPITAL': {
      'DISTRITO CAPITAL': ['Libertador'],
      'LA GUAIRA': ['Vargas'],
      'MIRANDA': ['Acevedo','Andrés Bello','Baruta','Brión','Buroz','Carrizal','Chacao','Cristóbal Rojas','El Hatillo','Guaicaipuro','Independencia','Lander','Los Salias','Páez','Paz Castillo','Pedro Gual','Plaza','Simón Bolívar','Sucre','Urdaneta','Zamora'],
    },
    'REGIÓN CENTRAL': {
      'ARAGUA': ['Bolívar','Camatagua','Francisco Linares Alcántara','Girardot','José Ángel Lamas','José Félix Ribas','José Rafael Revenga','Libertador','Mario Briceño Iragorry','Ocumare de la Costa de Oro','San Casimiro','San Sebastián','Santiago Mariño','Santos Michelena','Sucre','Tovar','Urdaneta','Zamora'],
      'CARABOBO': ['Bejuma','Carlos Arvelo','Diego Ibarra','Guacara','Juan José Mora','Libertador','Los Guayos','Miranda','Montalbán','Naguanagua','Puerto Cabello','San Diego','San Joaquín','Valencia'],
      'COJEDES': ['Anzoátegui','Falcón','Girardot','Lima Blanco','Pao de San Juan Bautista','Ricaurte','Rómulo Gallegos','San Carlos','Tinaco'],
    },
    'REGIÓN GUAYANA': {
      'BOLÍVAR': ['Caroní','Cedeño','El Callao','Gran Sabana','Heres','Padre Pedro Chien','Piar','Raúl Leoni','Roscio','Sifontes','Sucre'],
      'AMAZONAS': ['Alto Orinoco','Atabapo','Atures','Autana','Manapiare','Maroa','Río Negro'],
      'DELTA AMACURO': ['Antonio Díaz','Casacoima','Pedernales','Tucupita'],
    },
    'REGIÓN INSULAR': {
      'NUEVA ESPARTA': ['Antolín del Campo','Arismendi','Díaz','García','Gómez','Maneiro','Marcano','Mariño','Macanao','Tubores','Villalba'],
      'DEPENDENCIAS FEDERALES': [],
    },
    'REGIÓN LOS ANDES / LOS LLANOS': {
      'APURE': ['Achaguas','Biruaca','Muñoz','Páez','Pedro Camejo','Rómulo Gallegos','San Fernando'],
    },
    'REGIÓN LOS LLANOS': {
      'GUÁRICO': ['Camaguán','Chaguaramas','El Socorro','Francisco de Miranda','José Félix Ribas','José Tadeo Monagas','Juan Germán Roscio','Julián Mellado','Las Mercedes','Leonardo Infante','Ortiz','Pedro Zaraza','San Gerónimo de Guayabal','San José de Guaribe','Santa María de Ipire'],
    },
    'REGIÓN NOR-ORIENTAL': {
      'ANZOÁTEGUI': ['Anaco','Aragua','Diego Bautista Urbaneja','Fernando de Peñalver','Francisco del Carmen Carvajal','Francisco de Miranda','Guanta','Independencia','José Gregorio Monagas','Juan Antonio Sotillo','Juan Manuel Cajigal','Libertad','Manuel Ezequiel Bruzual','Pedro María Freites','Píritu','San José de Guanipa','San Juan de Capistrano','Santa Ana','Simón Bolívar','Simón Rodríguez','Sir Arthur McGregor'],
      'MONAGAS': ['Acosta','Aguasay','Bolívar','Caripe','Cedeño','Ezequiel Zamora','Libertador','Maturín','Piar','Punceres','Santa Bárbara','Sotillo','Uracoa'],
      'SUCRE': ['Andrés Eloy Blanco','Andrés Mata','Arismendi','Benítez','Bermúdez','Bolívar','Cajigal','Cruz Salmerón Acosta','Libertador','Mariño','Mejía','Montes','Ribero','Sucre','Valdez'],
    },
    'REGIÓN CENTRO-OCCIDENTAL': {
      'FALCÓN': ['Acosta','Bolívar','Buchivacoa','Cacique Manaure','Carirubana','Colina','Dabajuro','Democracia','Falcón','Federación','Jacura','Los Taques','Mauroa','Miranda','Monseñor Iturriza','Palmasola','Petit','Píritu','San Francisco','Silva','Sucre','Tocopero','Unión','Urumaco','Zamora'],
      'LARA': ['Andrés Eloy Blanco','Crespo','Iribarren','Jiménez','Morán','Palavecino','Simón Planas','Torres','Urdaneta'],
      'PORTUGUESA': ['Agua Blanca','Araure','Esteller','Guanare','Guanarito','Monseñor José Vicente de Unda','Ospino','Páez','Papelón','San Genaro de Boconoito','San Rafael de Onoto','Santa Rosalía','Sucre','Turén'],
      'YARACUY': ['Arístides Bastidas','Bolívar','Bruzual','Cocorote','Independencia','José Antonio Páez','La Trinidad','Manuel Monge','Nirgua','Peña','San Felipe','Sucre','Urachiche','Veroes'],
    },
    'REGIÓN ZULIANA': {
      'ZULIA': ['Almirante Padilla','Baralt','Cabimas','Catatumbo','Colón','Francisco Javier Pulgar','Jesús Enrique Lossada','Jesús María Semprún','La Cañada de Urdaneta','Lagunillas','Machiques de Perijá','Mara','Maracaibo','Miranda','Páez','Rosario de Perijá','San Francisco','Santa Rita','Simón Bolívar','Sucre','Valmore Rodríguez'],
    },
  }

  let geoCreated = 0
  for (const [regionNombre, estados] of Object.entries(geoData)) {
    const region = await prisma.geoRegion.upsert({
      where: { nombre: regionNombre },
      update: {},
      create: { nombre: regionNombre },
    })
    for (const [estadoNombre, municipios] of Object.entries(estados)) {
      const estado = await prisma.geoEstado.upsert({
        where: { nombre_regionId: { nombre: estadoNombre, regionId: region.id } },
        update: {},
        create: { nombre: estadoNombre, regionId: region.id },
      })
      for (const municipioNombre of municipios) {
        await prisma.geoMunicipio.upsert({
          where: { nombre_estadoId: { nombre: municipioNombre, estadoId: estado.id } },
          update: {},
          create: { nombre: municipioNombre, estadoId: estado.id },
        })
        geoCreated++
      }
    }
  }
  console.log(`✅ Geografía Venezuela: regiones/estados/municipios (${geoCreated} municipios)`)

  // ─── Empleados ───────────────────────────────────────────────────────────
  const empleadosData = [
    { cedula: 'V-12345678', nombre: 'Carlos',    apellido: 'Rodríguez', email: 'c.rodriguez@zenith.com.ve', cargo: 'Gerente de Operaciones',  departamento: 'Operaciones',       salarioUSD: new Prisma.Decimal(2800), fechaIngreso: new Date('2020-03-15'), estado: 'ACTIVO' },
    { cedula: 'V-23456789', nombre: 'María',     apellido: 'González',  email: 'm.gonzalez@zenith.com.ve',  cargo: 'Analista de Inventario',  departamento: 'Inventario',        salarioUSD: new Prisma.Decimal(1200), fechaIngreso: new Date('2021-06-01'), estado: 'ACTIVO' },
    { cedula: 'V-34567890', nombre: 'Luis',      apellido: 'Martínez',  email: 'l.martinez@zenith.com.ve',  cargo: 'Ejecutivo de Ventas',     departamento: 'Ventas',            salarioUSD: new Prisma.Decimal(1500), fechaIngreso: new Date('2021-09-10'), estado: 'ACTIVO' },
    { cedula: 'V-45678901', nombre: 'Ana',       apellido: 'Pérez',     email: 'a.perez@zenith.com.ve',     cargo: 'Coordinadora de Compras', departamento: 'Compras',           salarioUSD: new Prisma.Decimal(1350), fechaIngreso: new Date('2022-01-20'), estado: 'ACTIVO' },
    { cedula: 'V-56789012', nombre: 'José',      apellido: 'Hernández', email: 'j.hernandez@zenith.com.ve', cargo: 'Técnico de Almacén',      departamento: 'Inventario',        salarioUSD: new Prisma.Decimal(850),  fechaIngreso: new Date('2022-05-03'), estado: 'ACTIVO' },
    { cedula: 'V-67890123', nombre: 'Sofía',     apellido: 'López',     email: 's.lopez@zenith.com.ve',     cargo: 'Contadora Senior',        departamento: 'Contabilidad',      salarioUSD: new Prisma.Decimal(2100), fechaIngreso: new Date('2019-11-15'), estado: 'ACTIVO' },
    { cedula: 'V-78901234', nombre: 'Miguel',    apellido: 'Torres',    email: 'm.torres@zenith.com.ve',    cargo: 'Desarrollador Backend',   departamento: 'Tecnología',        salarioUSD: new Prisma.Decimal(2500), fechaIngreso: new Date('2023-02-01'), estado: 'ACTIVO' },
    { cedula: 'V-89012345', nombre: 'Valentina', apellido: 'Díaz',      email: 'v.diaz@zenith.com.ve',      cargo: 'Analista de RRHH',        departamento: 'Recursos Humanos',  salarioUSD: new Prisma.Decimal(1100), fechaIngreso: new Date('2023-07-15'), estado: 'VACACIONES' },
    { cedula: 'V-90123456', nombre: 'Roberto',   apellido: 'Sánchez',   email: 'r.sanchez@zenith.com.ve',   cargo: 'Supervisor de Producción',departamento: 'Producción',        salarioUSD: new Prisma.Decimal(1800), fechaIngreso: new Date('2020-08-20'), estado: 'ACTIVO' },
    { cedula: 'V-01234567', nombre: 'Isabella',  apellido: 'Ramírez',   email: 'i.ramirez@zenith.com.ve',   cargo: 'Gerente Comercial',       departamento: 'Ventas',            salarioUSD: new Prisma.Decimal(3200), fechaIngreso: new Date('2018-04-10'), estado: 'ACTIVO' },
  ]
  for (const e of empleadosData) {
    const { cedula, ...rest } = e
    await prisma.empleado.upsert({ where: { cedula }, update: rest, create: e })
  }
  console.log('✅ Empleados:', empleadosData.length)

  // ─── Configuración ───────────────────────────────────────────────────────
  const configs = [
    { clave: 'empresa_nombre', valor: 'NexusCore Zenith C.A.',  descripcion: 'Nombre legal de la empresa' },
    { clave: 'empresa_rif',    valor: 'J-40000001-0',           descripcion: 'RIF de la empresa' },
    { clave: 'moneda_base',    valor: 'VES',                    descripcion: 'Moneda base del sistema' },
    { clave: 'iva_pct',        valor: '16',                     descripcion: 'Porcentaje de IVA Venezuela' },
  ]
  for (const c of configs) {
    await prisma.configuracion.upsert({ where: { clave: c.clave }, update: { valor: c.valor, descripcion: c.descripcion }, create: c })
  }
  console.log('✅ Configuración inicial')
  console.log('\n🚀 Seed completado exitosamente')
}

main()
  .catch((e) => {
    if (e?.message?.includes("Can't reach database")) {
      console.warn('⚠️  Seed omitido: no se pudo conectar a la base de datos.')
      process.exit(0)
    }
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
