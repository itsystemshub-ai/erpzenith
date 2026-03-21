import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create roles first
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
      description: 'Administrator role with full access',
      color: '#ef4444',
      icon: 'shield-check',
      isSystem: true,
    },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'User' },
    update: {},
    create: {
      name: 'User',
      description: 'Regular user role',
      color: '#6366f1',
      icon: 'user',
      isSystem: true,
    },
  });

  // Create permissions for admin role
  const adminPermissions = [
    { module: 'user', action: 'read', resource: 'all' },
    { module: 'user', action: 'create', resource: 'all' },
    { module: 'user', action: 'update', resource: 'all' },
    { module: 'user', action: 'delete', resource: 'all' },
    { module: 'product', action: 'read', resource: 'all' },
    { module: 'product', action: 'create', resource: 'all' },
    { module: 'product', action: 'update', resource: 'all' },
    { module: 'product', action: 'delete', resource: 'all' },
    { module: 'sale', action: 'read', resource: 'all' },
    { module: 'sale', action: 'create', resource: 'all' },
    { module: 'sale', action: 'update', resource: 'all' },
    { module: 'sale', action: 'delete', resource: 'all' },
    { module: 'purchase', action: 'read', resource: 'all' },
    { module: 'purchase', action: 'create', resource: 'all' },
    { module: 'purchase', action: 'update', resource: 'all' },
    { module: 'purchase', action: 'delete', resource: 'all' },
  ];

  for (const perm of adminPermissions) {
    await prisma.permission.upsert({
      where: {
        roleId_module_action_resource: {
          roleId: adminRole.id,
          module: perm.module,
          action: perm.action,
          resource: perm.resource,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        module: perm.module,
        action: perm.action,
        resource: perm.resource,
      },
    });
  }

  // Create permissions for user role (read-only)
  const userPermissions = [
    { module: 'user', action: 'read', resource: 'own' },
    { module: 'product', action: 'read', resource: 'all' },
    { module: 'sale', action: 'read', resource: 'own' },
    { module: 'purchase', action: 'read', resource: 'all' },
  ];

  for (const perm of userPermissions) {
    await prisma.permission.upsert({
      where: {
        roleId_module_action_resource: {
          roleId: userRole.id,
          module: perm.module,
          action: perm.action,
          resource: perm.resource,
        },
      },
      update: {},
      create: {
        roleId: userRole.id,
        module: perm.module,
        action: perm.action,
        resource: perm.resource,
      },
    });
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin1234!', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@erp.com' },
    update: {},
    create: {
      email: 'admin@erp.com',
      username: 'admin',
      passwordHash: hashedPassword,
      name: 'Admin User',
      firstName: 'Admin',
      lastName: 'User',
      cedula: '1234567890',
      phone: '+1234567890',
      isActive: true,
      isVerified: true,
      roleId: adminRole.id,
    },
  });

  // Create system config
  await prisma.systemConfig.upsert({
    where: { key: 'company_name' },
    update: {},
    create: {
      key: 'company_name',
      value: 'ERP ZENITH',
      type: 'string',
      group: 'company',
      label: 'Company Name',
      isPublic: true,
      isEditable: true,
    },
  });

  await prisma.systemConfig.upsert({
    where: { key: 'company_address' },
    update: {},
    create: {
      key: 'company_address',
      value: '123 Business St, City, Country',
      type: 'string',
      group: 'company',
      label: 'Company Address',
      isPublic: true,
      isEditable: true,
    },
  });

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { code: 'PROD-001' },
      update: {},
      create: {
        code: 'PROD-001',
        name: 'Laptop Dell XPS 13',
        description: 'High-performance laptop',
        cost: 1000.00,
        price: 1299.99,
        stock: 50,
        minStock: 5,
        isActive: true,
        isService: false,
      },
    }),
    prisma.product.upsert({
      where: { code: 'PROD-002' },
      update: {},
      create: {
        code: 'PROD-002',
        name: 'Mouse Logitech MX Master 3',
        description: 'Wireless ergonomic mouse',
        cost: 70.00,
        price: 99.99,
        stock: 100,
        minStock: 10,
        isActive: true,
        isService: false,
      },
    }),
    prisma.product.upsert({
      where: { code: 'PROD-003' },
      update: {},
      create: {
        code: 'PROD-003',
        name: 'Keyboard Mechanical RGB',
        description: 'Gaming mechanical keyboard',
        cost: 100.00,
        price: 149.99,
        stock: 75,
        minStock: 8,
        isActive: true,
        isService: false,
      },
    }),
  ]);

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.upsert({
      where: { rif: 'V-12345678-1' },
      update: {},
      create: {
        businessName: 'John Doe',
        rif: 'V-12345678-1',
        email: 'customer1@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, State',
      },
    }),
    prisma.customer.upsert({
      where: { rif: 'V-98765432-2' },
      update: {},
      create: {
        businessName: 'Jane Smith',
        rif: 'V-98765432-2',
        email: 'customer2@example.com',
        phone: '+0987654321',
        address: '456 Oak Ave, City, State',
      },
    }),
  ]);

  // Create sample suppliers
  const suppliers = await Promise.all([
    prisma.supplier.upsert({
      where: { rif: 'J-12345678-9' },
      update: {},
      create: {
        businessName: 'Tech Supplies Inc',
        rif: 'J-12345678-9',
        code: 'PROV-001',
        email: 'supplier1@example.com',
        phone: '+1112223333',
        address: '789 Tech Blvd, City, State',
      },
    }),
  ]);

  console.log('✅ Database seeding completed successfully!');
  console.log('📧 Admin user created: admin@erp.com / Admin1234!');
  console.log(`🔐 Created ${await prisma.role.count()} roles`);
  console.log(`👤 Created ${await prisma.user.count()} users`);
  console.log(`📦 Created ${products.length} products`);
  console.log(`👥 Created ${customers.length} customers`);
  console.log(`🏢 Created ${suppliers.length} suppliers`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });