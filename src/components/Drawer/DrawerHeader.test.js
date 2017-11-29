import React from 'react'

import { shallowWithMuiAndIntl } from '../../utils/test'

import { DrawerHeader } from './'

describe('[components] <DrawerHeader />', () => {
  it('should exists DrawerHeader component', () => {
    let wrapper = shallowWithMuiAndIntl(<DrawerHeader />)

    expect(
      wrapper.exists()
    ).toEqual(true)
  })
})
