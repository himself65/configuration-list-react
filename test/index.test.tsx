import React from 'react'
import { shallow } from 'enzyme'
import { ConfigureList } from '~'
import { Configuration } from '~type'

const conf: Configuration = [
  {
    name: 'foo',
    items: [
      { name: 'goo', value: '1' },
      { name: 'hoo', value: '2' }
    ]
  }
]

describe('Component: ConfigureList', () => {
  it('should pass', () => {
    expect(() => shallow(<ConfigureList/>))
      .not
      .toThrow()
  })
})
