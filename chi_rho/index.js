const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // You can start using Prisma Client here
  const users = await prisma.user.findMany()
  console.log(users)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })