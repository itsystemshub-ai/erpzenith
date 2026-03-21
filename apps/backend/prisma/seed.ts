import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
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
    create: {
      name: 'SUPERDEV',
      permissions: { connect: permisos.map((p) => ({ id: p.id })) },
    },
  })

  const password = await bcrypt.hash('Zenith@2026!', 12)

  const superuser = await prisma.user.upsert({
    where: { username: 'superadminzenith' },
    update: { password },
    create: {
      name: 'Super Admin Zenith',
      username: 'superadminzenith',
      password,
      roleId: rolSuperDev.id,
      isActive: true,
    },
  })

  console.log('✅ Superusuario creado:')
  console.log('   Usuario : superadminzenith')
  console.log('   Password: Zenith@2026!')
  console.log('   Rol     : SUPERDEV (acceso total)')
  console.log('   ID      :', superuser.id)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
