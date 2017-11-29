import React from 'react'

import { shallowWithMuiAndIntl } from '../../utils/test'

import { DrawerContent } from './'

describe('[components] <DrawerContent />', () => {
  it('should exists DrawerContent component', () => {
    let wrapper = shallowWithMuiAndIntl(<DrawerContent />)

    expect(
      wrapper.exists()
    ).toEqual(true)
  })
})
