import { RouteOptions } from 'fastify'

const getSystemInfo: RouteOptions = {
  method: ['GET', 'POST'],
  url: '/getSystemInfo',
  handler: (request, reply) => {
    reply.send({
      platform: process.platform,
      nodeVersion: process.version,
      arch: process.arch,
    })
  } 
}

const getProcessInfo: RouteOptions = {
  method: ['GET', 'POST'],
  url: '/getProcessInfo',
  handler: (request, reply) => {
    reply.send({
      pid: process.pid,
      uptime: process.uptime(),
      memoryUsed: process.memoryUsage(),
      cpuUsed: process.cpuUsage(),
      title: process.title,
    })
  } 
}

export default {
  getSystemInfo,
  getProcessInfo,
}