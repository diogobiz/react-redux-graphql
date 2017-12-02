import gql from 'graphql-tag'

export default gql`
  query GetPokemons($page: Int!) {
    pokemons(page: $page) {
      id,
      name,
      url,
      image
    }
  }
`