-- Vendedor: agregar columna email
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "email" TEXT;

-- Proveedor: eliminar constraint unique de rif (para permitir nulls múltiples)
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'proveedores_rif_key'
  ) THEN
    ALTER TABLE "proveedores" DROP CONSTRAINT "proveedores_rif_key";
  END IF;
END $$;
