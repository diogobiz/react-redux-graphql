import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const setupModules = (server) => {
  console.info('SETUP - Loading modules...')

  // enable CORS
  server.use(cors())

  // request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // request body cookie parser
  server.use(cookieParser())
}

export default setupModules