import { GraphQLObjectType } from 'graphql'

import * as pokemons from './pokemons/query'

const query = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    ...pokemons
  })
})

export default query