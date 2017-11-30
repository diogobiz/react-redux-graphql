import React from 'react'

import { withRouter } from 'react-router-dom'

import { injectIntl } from 'react-intl'

import muiThemeable from 'material-ui/styles/muiThemeable'

import { List, ListItem } from 'material-ui'
import { makeSelectable } from 'material-ui/List'

import FontIcon from 'material-ui/FontIcon'

const DrawerContent = ({ match, history, close }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column'
  }

  const handleChange = (event, index) => {
    if (index !== undefined && index !== Object(index)) {
      close()
      history.push(index)
    }
  }

  const items = [
    {
      value: '/counter',
      primaryText: 'Counter',
      leftIcon: <FontIcon className='material-icons'>add</FontIcon>
    }
  ]

  const SelectableList = makeSelectable(List)

  return (
    <div style={styles}>
      <SelectableList
        value={match ? match.path : '/'}
        onChange={handleChange}>
        {items.map((item, i) => (
          <ListItem
            {...item}
            key={i}
            value={item.value} />))}
      </SelectableList>
    </div>
  )
}

export default injectIntl(muiThemeable()(withRouter(DrawerContent)))