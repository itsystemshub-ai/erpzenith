const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'postgresql://postgres.nmhxxmvvbgqnodlfetil:F6xQmhVBA879qkf4@aws-0-us-west-2.pooler.supabase.com:6543/postgres'
      }
    }
  })

  try {
    console.log('Creando tablas restantes...')

    // Productos
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS productos (
        id TEXT PRIMARY KEY,
        sku TEXT NOT NULL,
        tipo TEXT,
        fabricante TEXT,
        marca TEXT,
        material TEXT,
        espesor TEXT,
        nombre TEXT NOT NULL,
        descripcion TEXT,
        medidas TEXT,
        unidad TEXT DEFAULT 'UND',
        precio_usd DECIMAL(12,2) NOT NULL,
        stock_min INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla productos creada')

    // Almacenes
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS almacenes (
        id TEXT PRIMARY KEY,
        codigo TEXT UNIQUE NOT NULL,
        nombre TEXT NOT NULL,
        ubicacion TEXT,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP
      )
    `)
    console.log('✅ Tabla almacenes creada')

    // Stock
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS stocks (
        id TEXT PRIMARY KEY,
        producto_id TEXT NOT NULL REFERENCES productos(id) ON DELETE CASCADE,
        almacen_id TEXT NOT NULL REFERENCES almacenes(id) ON DELETE CASCADE,
        cantidad INTEGER DEFAULT 0,
        updated_at TIMESTAMP DEFAULT NOW(),
        UNIQUE (producto_id, almacen_id)
      )
    `)
    console.log('✅ Tabla stocks creada')

    // Movimientos de stock
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS movimientos_stock (
        id TEXT PRIMARY KEY,
        producto_id TEXT NOT NULL REFERENCES productos(id) ON DELETE CASCADE,
        tipo TEXT NOT NULL,
        cantidad INTEGER NOT NULL,
        referencia TEXT,
        notas TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla movimientos_stock creada')

    // Proveedores
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS proveedores (
        id TEXT PRIMARY KEY,
        idcima TEXT,
        rif TEXT UNIQUE,
        nombre TEXT NOT NULL,
        region TEXT,
        estado TEXT,
        municipio TEXT,
        persona_contacto TEXT,
        direccion TEXT,
        telefono_personal TEXT,
        telefono_fijo TEXT,
        email TEXT,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla proveedores creada')

    // Ordenes de compra
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS ordenes_compra (
        id TEXT PRIMARY KEY,
        numero TEXT UNIQUE NOT NULL,
        proveedor_id TEXT NOT NULL REFERENCES proveedores(id),
        estado TEXT DEFAULT 'BORRADOR',
        subtotal_usd DECIMAL(12,2) NOT NULL,
        iva_usd DECIMAL(12,2) NOT NULL,
        total_usd DECIMAL(12,2) NOT NULL,
        tasa_bcv DECIMAL(10,4) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla ordenes_compra creada')

    // Items de orden de compra
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS items_orden_compra (
        id TEXT PRIMARY KEY,
        orden_id TEXT NOT NULL REFERENCES ordenes_compra(id) ON DELETE CASCADE,
        producto_id TEXT NOT NULL REFERENCES productos(id) ON DELETE RESTRICT,
        cantidad INTEGER NOT NULL,
        precio_usd DECIMAL(12,2) NOT NULL
      )
    `)
    console.log('✅ Tabla items_orden_compra creada')

    // Clientes
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS clientes (
        id TEXT PRIMARY KEY,
        idcima TEXT,
        rif TEXT,
        nombre TEXT NOT NULL,
        region TEXT,
        estado TEXT,
        municipio TEXT,
        persona_contacto TEXT,
        direccion TEXT,
        telefono_personal TEXT,
        telefono_fijo TEXT,
        email TEXT,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla clientes creada')

    // Vendedores
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS vendedores (
        id TEXT PRIMARY KEY,
        idcima TEXT,
        rif TEXT,
        nombre TEXT NOT NULL,
        region TEXT,
        estado TEXT,
        municipio TEXT,
        persona_contacto TEXT,
        direccion TEXT,
        telefono_personal TEXT,
        telefono_fijo TEXT,
        email TEXT,
        ciudad TEXT,
        notas TEXT,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla vendedores creada')

    // Facturas
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS facturas (
        id TEXT PRIMARY KEY,
        numero TEXT UNIQUE NOT NULL,
        cliente_id TEXT NOT NULL REFERENCES clientes(id),
        estado TEXT DEFAULT 'PENDIENTE',
        subtotal_ves DECIMAL(14,2) NOT NULL,
        iva_ves DECIMAL(14,2) NOT NULL,
        total_ves DECIMAL(14,2) NOT NULL,
        total_usd DECIMAL(12,2) NOT NULL,
        tasa_bcv DECIMAL(10,4) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla facturas creada')

    // Items de factura
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS items_factura (
        id TEXT PRIMARY KEY,
        factura_id TEXT NOT NULL REFERENCES facturas(id) ON DELETE CASCADE,
        descripcion TEXT NOT NULL,
        cantidad INTEGER NOT NULL,
        precio_ves DECIMAL(12,2) NOT NULL
      )
    `)
    console.log('✅ Tabla items_factura creada')

    // Empleados
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS empleados (
        id TEXT PRIMARY KEY,
        cedula TEXT UNIQUE NOT NULL,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        cargo TEXT NOT NULL,
        departamento TEXT NOT NULL,
        salario_usd DECIMAL(10,2) NOT NULL,
        fecha_ingro TIMESTAMP NOT NULL,
        estado TEXT DEFAULT 'ACTIVO',
        estado_geo TEXT,
        municipio TEXT,
        direccion TEXT,
        telefono TEXT,
        is_active BOOLEAN DEFAULT true,
        deleted_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla empleados creada')

    // Nómina
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS nominas (
        id TEXT PRIMARY KEY,
        empleado_id TEXT NOT NULL REFERENCES empleados(id) ON DELETE CASCADE,
        periodo TEXT NOT NULL,
        salario_bruto DECIMAL(10,2) NOT NULL,
        ivss DECIMAL(10,2) NOT NULL,
        faov DECIMAL(10,2) NOT NULL,
        inces DECIMAL(10,2) NOT NULL,
        islr DECIMAL(10,2) NOT NULL,
        salario_neto DECIMAL(10,2) NOT NULL,
        tasa_bcv DECIMAL(10,4) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla nominas creada')

    // Ordenes de producción
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS ordenes_produccion (
        id TEXT PRIMARY KEY,
        numero TEXT UNIQUE NOT NULL,
        estado TEXT DEFAULT 'PLANIFICADA',
        progreso INTEGER DEFAULT 0,
        fecha_inicio TIMESTAMP NOT NULL,
        fecha_fin TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla ordenes_produccion creada')

    // Items de orden de producción
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS items_orden_produccion (
        id TEXT PRIMARY KEY,
        orden_id TEXT NOT NULL REFERENCES ordenes_produccion(id) ON DELETE CASCADE,
        producto_id TEXT NOT NULL REFERENCES productos(id) ON DELETE RESTRICT,
        cantidad INTEGER NOT NULL
      )
    `)
    console.log('✅ Tabla items_orden_produccion creada')

    // Geografía
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS geo_regiones (
        id TEXT PRIMARY KEY,
        nombre TEXT UNIQUE NOT NULL
      )
    `)
    console.log('✅ Tabla geo_regiones creada')

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS geo_estados (
        id TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        region_id TEXT NOT NULL REFERENCES geo_regiones(id) ON DELETE CASCADE,
        UNIQUE (nombre, region_id)
      )
    `)
    console.log('✅ Tabla geo_estados creada')

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS geo_municipios (
        id TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        estado_id TEXT NOT NULL REFERENCES geo_estados(id) ON DELETE CASCADE,
        UNIQUE (nombre, estado_id)
      )
    `)
    console.log('✅ Tabla geo_municipios creada')

    // Configuración
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS configuracion (
        id TEXT PRIMARY KEY,
        clave TEXT UNIQUE NOT NULL,
        valor TEXT NOT NULL,
        descripcion TEXT,
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla configuracion creada')

    // Tasas BCV
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS tasas_bcv (
        id TEXT PRIMARY KEY,
        tasa DECIMAL(10,4) NOT NULL,
        fecha TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla tasas_bcv creada')

    // Password reset requests
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS password_reset_requests (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        new_password TEXT NOT NULL,
        status TEXT DEFAULT 'PENDIENTE',
        reviewed_by TEXT,
        reviewed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('✅ Tabla password_reset_requests creada')

    console.log('\n🎉 ¡Todas las tablas fueron creadas exitosamente!')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
