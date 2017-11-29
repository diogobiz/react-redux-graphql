import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Scrollbar } from './'

configure({ adapter: new Adapter() })

describe('[components] <Scrollbar />', () => {
  it('should exists Scrollbar component', () => {
    let wrapper = shallow(<Scrollbar />)

    expect(
      wrapper.exists()
    ).toEqual(true)
  })
})
