import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: 'admin@erp.com' }
  });
  console.log('User found:', user ? 'YES' : 'NO');
  if (user) {
    console.log('Username:', user.username);
    console.log('Is Active:', user.isActive);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
