import React from 'react'

import { withRouter } from 'react-router-dom'

import { injectIntl } from 'react-intl'

import muiThemeable from 'material-ui/styles/muiThemeable'

import FontIcon from 'material-ui/FontIcon'

// import { SelectableMenuList } from 'material-ui-selectable-menu-list'

const DrawerContent = ({ intl, match, messaging, history, responsiveDrawer, setDrawerOpen }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column'
  }

  const handleChange = (event, index) => {
    if (responsiveDrawer.open && index !== undefined) {
      setDrawerOpen(false)
    }

    if (index !== undefined && index !== Object(index)) {
      history.push(index)
    }
  }

  const items = [
    {
      value: '/my_account',
      primaryText: intl.formatMessage({ id: 'my_account' }),
      leftIcon: <FontIcon className='material-icons'>account_box</FontIcon>
    },
    {
      value: '/signin',
      primaryText: intl.formatMessage({ id: 'sign_out' }),
      leftIcon: <FontIcon className='material-icons'>lock</FontIcon>
    }
  ]

  return (
    <div style={styles}>
      {/* <SelectableMenuList
        items={items}
        onIndexChange={handleChange}
        index={match ? match.path : '/'}
      /> */}
      MENU
    </div>
  )
}

export default injectIntl(muiThemeable()(withRouter(DrawerContent)))