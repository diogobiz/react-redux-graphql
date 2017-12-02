import config from '../config/config'

const setupServer = (server) => {
  // start web server
  server.listen(config.port, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`INFO - Server started on port ${config.port}.`)
    }
  })
}

export default setupServer