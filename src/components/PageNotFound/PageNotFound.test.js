import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { PageNotFound } from './'

configure({ adapter: new Adapter() })

describe('[components] <PageNotFound />', () => {
  it('should exists PageNotFound component', () => {
    let wrapper = shallow(<PageNotFound />)

    expect(
      wrapper.exists()
    ).toEqual(true)
  })
})
