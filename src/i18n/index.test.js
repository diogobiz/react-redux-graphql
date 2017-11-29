import { locales, getLocale, getLocaleMessages, addLocalizationData } from './'

describe('[i18n]', () => {
  it('should have one locales', () => {
    expect(
      locales.length
    ).toEqual(1)
  })

  it('should return en language', () => {
    expect(
      getLocale('en')
    ).toEqual(locales[0])
  })

  it('should return en language if language not foud', () => {
    expect(
      getLocale('not-foud-id')
    ).toEqual(locales[0])
  })

  it('should return en language messages', () => {
    expect(
      getLocaleMessages('en')
    ).toEqual(locales[0].messages)
  })

  it('should return en language messages if language not foud', () => {
    expect(
      getLocaleMessages('not-foud-id')
    ).toEqual(locales[0].messages)
  })

  it('should return void on add locations', () => {
    expect(
      addLocalizationData(locales)
    ).toEqual(undefined)
  })
})
