import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import cors from 'fastify-cors'

async function plugin(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.register(cors, {
    origin: '*'
  })
}

export default fp(plugin)
