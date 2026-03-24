-- Clientes: idcima ya agregado en migración anterior, add personaContacto
-- ALTER TABLE "clientes" RENAME COLUMN "codigo_cima" TO "idcima"; -- Ya existe como idcima
ALTER TABLE "clientes" ADD COLUMN IF NOT EXISTS "persona_contacto" TEXT;

-- Vendedores: rename telefono → telefono_personal, rename contacto → persona_contacto,
--             add idcima, add telefono_fijo, drop ciudad (kept), drop notas (kept)
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "idcima" TEXT;
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "persona_contacto" TEXT;
ALTER TABLE "vendedores" ADD COLUMN IF NOT EXISTS "telefono_fijo" TEXT;
-- copy old contacto → persona_contacto if exists
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='vendedores' AND column_name='contacto') THEN
    UPDATE "vendedores" SET "persona_contacto" = "contacto" WHERE "persona_contacto" IS NULL;
    ALTER TABLE "vendedores" DROP COLUMN "contacto";
  END IF;
END $$;
-- rename telefono → telefono_personal only if telefono exists and telefono_personal doesn't
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='vendedores' AND column_name='telefono')
     AND NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='vendedores' AND column_name='telefono_personal') THEN
    ALTER TABLE "vendedores" RENAME COLUMN "telefono" TO "telefono_personal";
  END IF;
END $$;

-- Proveedores: make rif optional, add idcima, personaContacto, direccion, telefonoPersonal, telefonoFijo
ALTER TABLE "proveedores" ALTER COLUMN "rif" DROP NOT NULL;
ALTER TABLE "proveedores" ADD COLUMN IF NOT EXISTS "idcima" TEXT;
ALTER TABLE "proveedores" ADD COLUMN IF NOT EXISTS "persona_contacto" TEXT;
ALTER TABLE "proveedores" ADD COLUMN IF NOT EXISTS "direccion" TEXT;
ALTER TABLE "proveedores" ADD COLUMN IF NOT EXISTS "telefono_personal" TEXT;
ALTER TABLE "proveedores" ADD COLUMN IF NOT EXISTS "telefono_fijo" TEXT;
-- copy old telefono → telefono_personal if exists
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='proveedores' AND column_name='telefono') THEN
    UPDATE "proveedores" SET "telefono_personal" = "telefono" WHERE "telefono_personal" IS NULL;
    ALTER TABLE "proveedores" DROP COLUMN "telefono";
  END IF;
END $$;
