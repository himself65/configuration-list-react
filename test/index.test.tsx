import React from 'react'
import { shallow } from 'enzyme'
import { ConfigureList } from '~'

describe('Component: ConfigureList', () => {
  it('should pass', () => {
    expect(() => shallow(<ConfigureList/>))
      .not
      .toThrow()
  })
})
