import { addLocaleData } from 'react-intl'

import en_messages from './en'

import en from 'react-intl/locale-data/en'

export const locales = [
  {
    locale: 'en',
    messages: en_messages,
    data: en
  }
]

export const getLocale = (localeId) => locales.find((l) => l.locale === localeId) || locales[0]

export const getLocaleMessages = (localeId) => getLocale(localeId).messages

export const addLocalizationData = (locales) => locales.forEach((locale) => addLocaleData(locale.data))

export default locales