import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default () => {
  return prisma.project.findMany()
}

