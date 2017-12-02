import graphqlHTTP from 'express-graphql'

import config from '../config/config'
import schema from '../schema'

const setupServer = (server) => {
  console.info('SETUP - GraphQL...')

  // API (GraphQL on route `/api`)
  server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty
  })))
}

export default setupServer