import fetch from 'node-fetch'

const url = 'http://pokeapi.co/api/v2/pokemon'
const itensPerPage = 10

const fetchPokemons = (page = 1) => fetch(`${url}?limit=${itensPerPage}&offset=${(page - 1) * itensPerPage}`)
  .then((res) => res.json())
  .then((res) => res.results)
  .then((res) => res.map((pokemon) => ({
    ...pokemon,
    id: /(\/\d+\/)/g.exec(pokemon.url)[0].match(/\d+/)[0]
  })))

const fetchPokemon = (id) => fetch(`${url}/${id}`)
  .then((res) => res.json())

export const getAll = (parentValue, args) => fetchPokemons(args.page)

export const getById = (parentValue, args) => fetchPokemon(args.id)