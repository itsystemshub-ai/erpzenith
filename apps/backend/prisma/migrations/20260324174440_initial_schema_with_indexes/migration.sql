/*
  Warnings:

  - You are about to drop the column `telefono` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `vendedores` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "items_factura" DROP CONSTRAINT "items_factura_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "items_orden_compra" DROP CONSTRAINT "items_orden_compra_ordenId_fkey";

-- DropForeignKey
ALTER TABLE "items_orden_produccion" DROP CONSTRAINT "items_orden_produccion_ordenId_fkey";

-- DropForeignKey
ALTER TABLE "movimientos_stock" DROP CONSTRAINT "movimientos_stock_productoId_fkey";

-- DropForeignKey
ALTER TABLE "nominas" DROP CONSTRAINT "nominas_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "password_reset_requests" DROP CONSTRAINT "password_reset_requests_userId_fkey";

-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_almacenId_fkey";

-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_productoId_fkey";

-- DropIndex
DROP INDEX "productos_sku_key";

-- AlterTable
ALTER TABLE "almacenes" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "telefono",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "telefono_fijo" TEXT,
ADD COLUMN     "telefono_personal" TEXT;

-- AlterTable
ALTER TABLE "empleados" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "direccion" TEXT,
ADD COLUMN     "estado_geo" TEXT,
ADD COLUMN     "municipio" TEXT,
ADD COLUMN     "telefono" TEXT;

-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "estado" TEXT,
ADD COLUMN     "municipio" TEXT;

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "categoria",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "espesor" TEXT,
ADD COLUMN     "fabricante" TEXT,
ADD COLUMN     "marca" TEXT,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "medidas" TEXT,
ADD COLUMN     "tipo" TEXT;

-- AlterTable
ALTER TABLE "proveedores" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "vendedores" DROP COLUMN "telefono",
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "geo_regiones" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "geo_regiones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "geo_estados" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,

    CONSTRAINT "geo_estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "geo_municipios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "estadoId" TEXT NOT NULL,

    CONSTRAINT "geo_municipios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "geo_regiones_nombre_key" ON "geo_regiones"("nombre");

-- CreateIndex
CREATE INDEX "geo_estados_regionId_idx" ON "geo_estados"("regionId");

-- CreateIndex
CREATE UNIQUE INDEX "geo_estados_nombre_regionId_key" ON "geo_estados"("nombre", "regionId");

-- CreateIndex
CREATE INDEX "geo_municipios_estadoId_idx" ON "geo_municipios"("estadoId");

-- CreateIndex
CREATE UNIQUE INDEX "geo_municipios_nombre_estadoId_key" ON "geo_municipios"("nombre", "estadoId");

-- CreateIndex
CREATE INDEX "almacenes_codigo_idx" ON "almacenes"("codigo");

-- CreateIndex
CREATE INDEX "almacenes_isActive_idx" ON "almacenes"("isActive");

-- CreateIndex
CREATE INDEX "clientes_rif_idx" ON "clientes"("rif");

-- CreateIndex
CREATE INDEX "clientes_nombre_idx" ON "clientes"("nombre");

-- CreateIndex
CREATE INDEX "clientes_isActive_idx" ON "clientes"("isActive");

-- CreateIndex
CREATE INDEX "configuracion_clave_idx" ON "configuracion"("clave");

-- CreateIndex
CREATE INDEX "empleados_cedula_idx" ON "empleados"("cedula");

-- CreateIndex
CREATE INDEX "empleados_email_idx" ON "empleados"("email");

-- CreateIndex
CREATE INDEX "empleados_departamento_idx" ON "empleados"("departamento");

-- CreateIndex
CREATE INDEX "empleados_estado_idx" ON "empleados"("estado");

-- CreateIndex
CREATE INDEX "empleados_isActive_idx" ON "empleados"("isActive");

-- CreateIndex
CREATE INDEX "empresas_rif_idx" ON "empresas"("rif");

-- CreateIndex
CREATE INDEX "empresas_status_idx" ON "empresas"("status");

-- CreateIndex
CREATE INDEX "empresas_isActive_idx" ON "empresas"("isActive");

-- CreateIndex
CREATE INDEX "facturas_numero_idx" ON "facturas"("numero");

-- CreateIndex
CREATE INDEX "facturas_clienteId_idx" ON "facturas"("clienteId");

-- CreateIndex
CREATE INDEX "facturas_estado_idx" ON "facturas"("estado");

-- CreateIndex
CREATE INDEX "facturas_createdAt_idx" ON "facturas"("createdAt");

-- CreateIndex
CREATE INDEX "items_factura_facturaId_idx" ON "items_factura"("facturaId");

-- CreateIndex
CREATE INDEX "items_orden_compra_ordenId_idx" ON "items_orden_compra"("ordenId");

-- CreateIndex
CREATE INDEX "items_orden_compra_productoId_idx" ON "items_orden_compra"("productoId");

-- CreateIndex
CREATE INDEX "items_orden_produccion_ordenId_idx" ON "items_orden_produccion"("ordenId");

-- CreateIndex
CREATE INDEX "items_orden_produccion_productoId_idx" ON "items_orden_produccion"("productoId");

-- CreateIndex
CREATE INDEX "movimientos_stock_productoId_idx" ON "movimientos_stock"("productoId");

-- CreateIndex
CREATE INDEX "movimientos_stock_tipo_idx" ON "movimientos_stock"("tipo");

-- CreateIndex
CREATE INDEX "movimientos_stock_createdAt_idx" ON "movimientos_stock"("createdAt");

-- CreateIndex
CREATE INDEX "nominas_empleadoId_idx" ON "nominas"("empleadoId");

-- CreateIndex
CREATE INDEX "nominas_periodo_idx" ON "nominas"("periodo");

-- CreateIndex
CREATE INDEX "ordenes_compra_numero_idx" ON "ordenes_compra"("numero");

-- CreateIndex
CREATE INDEX "ordenes_compra_proveedorId_idx" ON "ordenes_compra"("proveedorId");

-- CreateIndex
CREATE INDEX "ordenes_compra_estado_idx" ON "ordenes_compra"("estado");

-- CreateIndex
CREATE INDEX "ordenes_produccion_numero_idx" ON "ordenes_produccion"("numero");

-- CreateIndex
CREATE INDEX "ordenes_produccion_estado_idx" ON "ordenes_produccion"("estado");

-- CreateIndex
CREATE INDEX "ordenes_produccion_fechaInicio_idx" ON "ordenes_produccion"("fechaInicio");

-- CreateIndex
CREATE INDEX "password_reset_requests_userId_idx" ON "password_reset_requests"("userId");

-- CreateIndex
CREATE INDEX "password_reset_requests_status_idx" ON "password_reset_requests"("status");

-- CreateIndex
CREATE INDEX "permissions_module_idx" ON "permissions"("module");

-- CreateIndex
CREATE INDEX "productos_sku_idx" ON "productos"("sku");

-- CreateIndex
CREATE INDEX "productos_nombre_idx" ON "productos"("nombre");

-- CreateIndex
CREATE INDEX "productos_isActive_idx" ON "productos"("isActive");

-- CreateIndex
CREATE INDEX "productos_deleted_at_idx" ON "productos"("deleted_at");

-- CreateIndex
CREATE INDEX "proveedores_rif_idx" ON "proveedores"("rif");

-- CreateIndex
CREATE INDEX "proveedores_nombre_idx" ON "proveedores"("nombre");

-- CreateIndex
CREATE INDEX "proveedores_isActive_idx" ON "proveedores"("isActive");

-- CreateIndex
CREATE INDEX "roles_name_idx" ON "roles"("name");

-- CreateIndex
CREATE INDEX "stocks_productoId_idx" ON "stocks"("productoId");

-- CreateIndex
CREATE INDEX "stocks_almacenId_idx" ON "stocks"("almacenId");

-- CreateIndex
CREATE INDEX "tasas_bcv_fecha_idx" ON "tasas_bcv"("fecha");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_empresaId_idx" ON "users"("empresaId");

-- CreateIndex
CREATE INDEX "users_isActive_idx" ON "users"("isActive");

-- CreateIndex
CREATE INDEX "users_deleted_at_idx" ON "users"("deleted_at");

-- CreateIndex
CREATE INDEX "vendedores_rif_idx" ON "vendedores"("rif");

-- CreateIndex
CREATE INDEX "vendedores_nombre_idx" ON "vendedores"("nombre");

-- CreateIndex
CREATE INDEX "vendedores_isActive_idx" ON "vendedores"("isActive");

-- AddForeignKey
ALTER TABLE "password_reset_requests" ADD CONSTRAINT "password_reset_requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_almacenId_fkey" FOREIGN KEY ("almacenId") REFERENCES "almacenes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_stock" ADD CONSTRAINT "movimientos_stock_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_orden_compra" ADD CONSTRAINT "items_orden_compra_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES "ordenes_compra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_factura" ADD CONSTRAINT "items_factura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "facturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nominas" ADD CONSTRAINT "nominas_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_orden_produccion" ADD CONSTRAINT "items_orden_produccion_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES "ordenes_produccion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "geo_estados" ADD CONSTRAINT "geo_estados_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "geo_regiones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "geo_municipios" ADD CONSTRAINT "geo_municipios_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "geo_estados"("id") ON DELETE CASCADE ON UPDATE CASCADE;
