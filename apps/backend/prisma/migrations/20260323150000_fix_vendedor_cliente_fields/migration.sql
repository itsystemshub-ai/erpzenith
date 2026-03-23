-- Vendedor: renombrar telefono→telefono_personal, contacto→persona_contacto, agregar idcima y telefono_fijo
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "idcima" TEXT;
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "persona_contacto" TEXT;
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "telefono_personal" TEXT;
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "telefono_fijo" TEXT;

-- Copiar datos existentes si los campos viejos existen
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='vendedores' AND column_name='telefono') THEN
    UPDATE "vendedores" SET "telefono_personal" = "telefono" WHERE "telefono_personal" IS NULL;
  END IF;
END $$;
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='vendedores' AND column_name='contacto') THEN
    UPDATE "vendedores" SET "persona_contacto" = "contacto" WHERE "persona_contacto" IS NULL;
  END IF;
END $$;

-- Cliente: agregar idcima y persona_contacto si no existen
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "idcima" TEXT;
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "persona_contacto" TEXT;
