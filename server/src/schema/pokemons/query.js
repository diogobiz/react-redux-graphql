import { GraphQLInt, GraphQLList } from 'graphql'

import PokemonType from './type'
import { getAll, getById } from './resolvers'

// all Pkemons
export const pokemons = {
  type: new GraphQLList(PokemonType),
  args: {
    page: {
      type: GraphQLInt
    }
  },
  resolve: getAll
}

// get one pokemon
export const pokemon = {
  type: PokemonType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: getById
}