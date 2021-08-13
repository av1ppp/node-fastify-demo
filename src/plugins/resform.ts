import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

async function plugin(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.addHook('preHandler', async (request, reply) => {
    reply.header('Content-Type', 'application/json')
  })

  // All ok
  fastify.addHook('onSend', async (request, reply, payload) => {
    const statusCode = reply.statusCode || 200
    const ok = true

    reply.statusCode = statusCode

    try {
      const payload_ = JSON.parse(payload as string)
      const data = (payload_.ok === undefined) ?
        { ok, statusCode, payload: payload_ } : payload_
      return JSON.stringify(data)
      
    } catch {
      return JSON.stringify({
        ok, statusCode, payload
      })
    }
  })

  // Error
  fastify.setErrorHandler(async (error, request, reply) => {
    const statusCode = reply.statusCode || 409
    const ok = false
    const payload = { error }

    reply.status(statusCode).send({
      ok, statusCode, payload,
    })
  })
  
  // Not found
  fastify.setNotFoundHandler(async (request,  reply) => {
    const statusCode = 404
    const ok = false
    const payload = { error: 'Router not found' }

    reply.status(404).send({
      ok, statusCode, payload,
    })
  })
}

export default fp(plugin)
