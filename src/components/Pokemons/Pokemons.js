import React from 'react'

import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import CircularProgress from 'material-ui/CircularProgress'
import { GridList, GridTile } from 'material-ui/GridList'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import { Scrollbar } from '../Scrollbar'

import { Toolbar } from '../../containers/Toolbar'

const Pokemons = ({ pokemons: { loading, error, pokemons } }) => (
  <Scrollbar>
    <Toolbar title="Pokemons" />

    <Subheader>Pokemons</Subheader>

    <Divider />

    {loading &&
      <CircularProgress mode="indeterminate" style={{ margin: '20px auto', display: 'block' }} />}

    {pokemons &&
      <GridList
        cellHeight={180}>
        {pokemons.map((pokemon) => (
          <GridTile
            key={pokemon.id}
            title={pokemon.name}
            subtitle={<span>{pokemon.url}</span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
            <img src={pokemon.image} alt={pokemon.name} />
          </GridTile>
        ))}
      </GridList>}
  </Scrollbar>
)

export default Pokemons
