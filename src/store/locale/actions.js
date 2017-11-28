import * as actionTypes from './types'

const updateLocale = (locale) => ({
  type: actionTypes.UPDATE_LOCALE,
  payload: locale
})

export default {
  updateLocale
}