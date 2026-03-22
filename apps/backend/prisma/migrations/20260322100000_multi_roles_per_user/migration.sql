-- CreateTable: tabla pivot _RoleToUser (many-to-many implícita de Prisma)
CREATE TABLE IF NOT EXISTS "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- Migrar datos existentes: copiar roleId → tabla pivot
INSERT INTO "_RoleToUser" ("A", "B")
SELECT "roleId", "id" FROM "users" WHERE "roleId" IS NOT NULL
ON CONFLICT DO NOTHING;

-- Crear índices únicos requeridos por Prisma
CREATE UNIQUE INDEX IF NOT EXISTS "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");
CREATE INDEX IF NOT EXISTS "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- Añadir foreign keys
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey"
    FOREIGN KEY ("A") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey"
    FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Eliminar columna roleId de users
ALTER TABLE "users" DROP COLUMN IF EXISTS "roleId";
