-- AlterTable clientes
ALTER TABLE "clientes" ADD COLUMN "region" TEXT, ADD COLUMN "municipio" TEXT;

-- AlterTable vendedores
ALTER TABLE "vendedores" ADD COLUMN "region" TEXT, ADD COLUMN "municipio" TEXT;

-- AlterTable proveedores
ALTER TABLE "proveedores" ADD COLUMN "region" TEXT, ADD COLUMN "municipio" TEXT;
