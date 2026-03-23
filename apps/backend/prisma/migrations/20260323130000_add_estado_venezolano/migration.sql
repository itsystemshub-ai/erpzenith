-- AlterTable clientes: add estado (estado venezolano)
ALTER TABLE "clientes" ADD COLUMN "estado" TEXT;

-- AlterTable vendedores: add estado (estado venezolano)
ALTER TABLE "vendedores" ADD COLUMN "estado" TEXT;

-- AlterTable proveedores: add estado (estado venezolano)
ALTER TABLE "proveedores" ADD COLUMN "estado" TEXT;
