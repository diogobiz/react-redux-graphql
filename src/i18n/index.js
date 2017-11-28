import { addLocaleData } from 'react-intl'

import en_messages from './en'

import en from 'react-intl/locale-data/en'

const locales = [
  {
    locale: 'en',
    messages: en_messages,
    data: en
  }
]

export const getLocaleMessages = (localeId) => {
  const locale = locales.find((l) => l.locale === localeId)

  return !!locale ? locale.messages : en_messages
}

export const addLocalizationData = (ls) => {
  ls.map((l) => {
    addLocaleData(l.data)
    return l
  })
}

export default locales