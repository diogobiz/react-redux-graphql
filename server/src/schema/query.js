import { GraphQLObjectType } from 'graphql'

import * as pokemons from './pokemons/query'
import * as todos from './todos/query'

const query = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    ...pokemons,
    ...todos
  })
})

export default query