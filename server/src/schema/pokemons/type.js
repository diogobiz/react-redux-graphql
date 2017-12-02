import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'

const getUrl = (id) => `http://pokeapi.co/api/v2/pokemon/${id}/`
const getImage = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString,
      resolve: (res) => res.url || getUrl(res.id)
    },
    image: {
      type: GraphQLString,
      resolve: (res) => getImage(res.id)
    }
  })
})

export default PokemonType