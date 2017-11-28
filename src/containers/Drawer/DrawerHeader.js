import { connect } from 'react-redux'

import { DrawerHeader } from '../../components/Drawer'

const mapStateToProps = (state) => {
  const { theme, locale } = state

  return {
    theme,
    locale
  }
}

export default connect(mapStateToProps)(DrawerHeader)