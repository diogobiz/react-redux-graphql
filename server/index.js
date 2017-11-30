const express = require('express')
const graphqlHTTP = require('express-graphql')
const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const app = express()
const schema = require('./schema')

const itensPerPage = 10
const fetchPokemons = (page = 1) => fetch(`http://pokeapi.co/api/v2/pokemon?limit=${itensPerPage}&offset=${(page - 1) * itensPerPage}`).then((res) => res.json()).then((res) => res.results)
const fetchPokemon = (id) => fetch(`http://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())

app.use('/graphql', graphqlHTTP((req) => {
  const pokemonsLoader = new DataLoader((keys) => Promise.all(keys.map(fetchPokemons)))
  const pokemonLoader = new DataLoader((keys) => Promise.all(keys.map(fetchPokemon)))

  return {
    schema,
    context: {
      pokemonsLoader,
      pokemonLoader
    },
    graphiql: true
  }
}))

app.listen(4000)
console.log('Listening on localhost:4000...')
