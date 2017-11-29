import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import themeActions from '../../store/theme/actions'
import localeActions from '../../store/locale/actions'

import { DrawerContent } from '../../components/Drawer'

const mapStateToProps = (state) => ({
  theme: state.theme,
  locale: state.locale
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTheme: (theme) => dispatch(themeActions.updateTheme(theme)),
  updateLocale: (locale) => dispatch(localeActions.updateLocale(locale))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DrawerContent))