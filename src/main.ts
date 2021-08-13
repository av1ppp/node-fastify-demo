import fastify from 'fastify'
import cors from './plugins/cors'
import resform from './plugins/resform'
import apiRouterV1 from './routes/v1'

const server = fastify()

// Plugins
server.register(cors)
server.register(resform)

// Routes
server.register(apiRouterV1, { prefix: '/api/v1' })

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
