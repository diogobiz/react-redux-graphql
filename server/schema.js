const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (res) => res.name
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      pokemon: {
        type: PokemonType,
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve: (root, args, context) => context.pokemonLoader.load(args.id)
      },
      pokemons: {
        type: new GraphQLList(PokemonType),
        args: {
          page: {
            type: GraphQLInt
          }
        },
        resolve: (root, args, context) => context.pokemonsLoader.load(args.page)
          .then((pokemons) => pokemons.map((pokemon) => /(\/\d+\/)/g.exec(pokemon.url)[0].match(/\d+/)[0]))
          .then((ids) => context.pokemonLoader.loadMany(ids))
      }
    })
  })
})