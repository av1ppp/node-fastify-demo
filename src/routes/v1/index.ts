import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import system from './system'

async function router(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.route(system.getSystemInfo)
  fastify.route(system.getProcessInfo)
}

export default router