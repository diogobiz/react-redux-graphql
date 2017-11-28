import React from 'react'

import { injectIntl } from 'react-intl'

import muiThemeable from 'material-ui/styles/muiThemeable'

import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Paper from 'material-ui/Paper'

const DrawerHeader = ({ muiTheme, intl }) => {
  const styles = {
    paper: {
      backgroundColor: muiTheme.palette.primary2Color,
      color: muiTheme.palette.alternateTextColor,
      margin: 0,
      padding: 0
    },
    item: {
      backgroundColor: 'transparent'
    }
  }

  return (
    <Paper zDepth={1} style={styles.paper}>
      <List>
        <ListItem disabled primaryText={intl.formatMessage({ id: 'app_name' })} />

        <ListItem
          disabled
          leftAvatar={
            <Avatar size={45} src="" alt={intl.formatMessage({ id: 'app_name' })} icon={<FontIcon className="material-icons">person</FontIcon>} />
          }
        />

        <ListItem
          primaryText="Munir Ahmed"
          secondaryText="elsangedy@gmail.com"
          rightIconButton={
            <IconButton onClick={() => console.log('click')}>
              <FontIcon className='material-icons'>arrow_drop_down</FontIcon>
            </IconButton>
          }
          disableFocusRipple
          style={styles.item}
          onClick={() => console.log('click2')}
        />
      </List>
    </Paper>
  )
}

export default injectIntl(muiThemeable()(DrawerHeader))