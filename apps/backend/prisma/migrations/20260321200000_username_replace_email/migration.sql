-- Paso 1: agregar columna username nullable
ALTER TABLE "users" ADD COLUMN "username" TEXT;

-- Paso 2: poblar username desde email (tomar la parte antes del @)
UPDATE "users" SET "username" = SPLIT_PART("email", '@', 1);

-- Paso 3: hacer username NOT NULL y UNIQUE
ALTER TABLE "users" ALTER COLUMN "username" SET NOT NULL;
ALTER TABLE "users" ADD CONSTRAINT "users_username_key" UNIQUE ("username");

-- Paso 4: eliminar columna email
ALTER TABLE "users" DROP COLUMN "email";
