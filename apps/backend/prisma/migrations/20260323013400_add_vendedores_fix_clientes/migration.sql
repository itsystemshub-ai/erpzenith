-- DropIndex
DROP INDEX "clientes_rif_key";

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "direccion" TEXT,
ALTER COLUMN "rif" DROP NOT NULL;

-- CreateTable
CREATE TABLE "vendedores" (
    "id" TEXT NOT NULL,
    "rif" TEXT,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "ciudad" TEXT,
    "contacto" TEXT,
    "direccion" TEXT,
    "notas" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendedores_pkey" PRIMARY KEY ("id")
);
