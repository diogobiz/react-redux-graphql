import express from 'express'

import setupModules from './setup/modules'
import setupGraphql from './setup/graphql'
import setupServer from './setup/server'

// cerate express server
const server = express()

// setup load modules
setupModules(server)

// setup graphQL
setupGraphql(server)

// start server
setupServer(server)