import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Routes } from './'

configure({ adapter: new Adapter() })

describe('[components] <Routes />', () => {
  it('should return array of routes', () => {
    expect(
      Array.isArray(Routes)
    ).toEqual(true)
  })
})
