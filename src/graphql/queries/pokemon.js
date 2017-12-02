import gql from 'graphql-tag'

export default gql`
  query GetPokemon($id: Int!) {
    pokemon(id: $id) {
      id,
      name,
      url,
      image
    }
  }
`