const argv = require('minimist')(process.argv.slice(2))
const SimpleServer = require('./simple-server/index')
const { spawn } = require('../util/index')
const { logger } = require('../util/index')

module.exports = async (cmd) => {
  const simpleMode = argv.simple

  const v2 = argv.v2

  if (simpleMode) {
    const server = new SimpleServer({
        port: 3000
    })
    server.run()
  } else if (v2) {
    const server = new SimpleServer({
        port: 3000,
        vueVersion: 2
    })
    server.run()
  } else {
    logger.log('[None-cli] running vite.')
    await spawn('npm', ['run', 'dev'], { cwd: process.cwd() })
  }
}

