import React from 'react'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { asyncComponent } from './'

configure({ adapter: new Adapter() })

const waitTo = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay))

const loader = (load) => () => waitTo().then(() => load())

const MyComponent = (props) => (<div>MyComponent {JSON.stringify(props)}</div>)

describe('[hoc] asyncComponent', () => {
  it('should return component in state', async () => {
    const AsyncMyComponent = asyncComponent(loader(() => MyComponent))

    let comp = mount(<AsyncMyComponent />)

    await waitTo(400)

    expect(comp.state()).toEqual({ component: MyComponent })
  })
})
