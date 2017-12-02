import { graphql } from 'react-apollo'

import { Pokemons } from '../../components/Pokemons'

import { POKEMONS_QUERY } from '../../graphql'

export default graphql(POKEMONS_QUERY, {
  name: 'pokemons',
  options: {
    variables: {
      page: 1
    }
  }
})(Pokemons)