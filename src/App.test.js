import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({ adapter: new Adapter() })

describe('[src] <App />', () => {
  it('should exists App component', () => {
    let wrapper = shallow(<App />)

    expect(
      wrapper.exists()
    ).toEqual(true)
  })
})
