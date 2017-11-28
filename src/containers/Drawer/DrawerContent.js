import { connect } from 'react-redux'

import { setResponsive, setDrawerOpen } from 'material-ui-responsive-drawer'

import themeActions from '../../store/theme/actions'
import localeActions from '../../store/locale/actions'

import { DrawerContent } from '../../components/Drawer'


const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setResponsive: () => dispatch(setResponsive()),
  setDrawerOpen: () => dispatch(setDrawerOpen()),
  updateTheme: (theme) => dispatch(themeActions.updateTheme(theme)),
  updateLocale: (locale) => dispatch(localeActions.updateLocale(locale))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)