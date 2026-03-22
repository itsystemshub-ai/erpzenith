-- AlterTable
ALTER TABLE "users" ADD COLUMN     "empresaId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
