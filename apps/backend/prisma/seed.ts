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
