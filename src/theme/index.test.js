import { themes, getTheme, getThemeSource } from './'

describe('[theme]', () => {
  it('should have tow themes', () => {
    expect(
      themes.length
    ).toEqual(2)
  })

  it('should return dark theme', () => {
    expect(
      getTheme('dark')
    ).toEqual(themes[0])
  })

  it('should return light theme', () => {
    expect(
      getTheme('light')
    ).toEqual(themes[1])
  })

  it('should return dark theme if theme not foud', () => {
    expect(
      getTheme('not-foud-id')
    ).toEqual(themes[0])
  })

  it('should return dark theme source', () => {
    expect(
      getThemeSource('dark')
    ).toEqual(themes[0].source)
  })

  it('should return light theme source', () => {
    expect(
      getThemeSource('light')
    ).toEqual(themes[1].source)
  })

  it('should return dark theme source if theme not foud', () => {
    expect(
      getThemeSource('not-foud-id')
    ).toEqual(themes[0].source)
  })
})
