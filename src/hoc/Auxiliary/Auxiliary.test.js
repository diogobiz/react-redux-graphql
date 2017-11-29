import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Auxiliary } from './'

configure({ adapter: new Adapter() })

describe('[hoc] <Auxiliary />', () => {
  it('should return children of Auxiliary', () => {
    let content = (<div>test</div>)
    let wrapper = shallow(<Auxiliary>{content}</Auxiliary>)

    expect(
      wrapper.getElement()
    ).toEqual(content)
  })
})
