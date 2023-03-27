import Joi from 'joi'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const schema = Joi.object({
  name: Joi.string().required().max(25),
  creator: Joi.string().required(),
  tags: Joi.array().max(6),
  description: Joi.string().required().max(400),
  institution: Joi.string().required(),
  maxMember: Joi.number(),
  image: Joi.string().required()
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { value, error } = await schema.valid(body)

  if (error) console.log(error)

  const project = await prisma.project.create({
    data: body
  })
  return project
})