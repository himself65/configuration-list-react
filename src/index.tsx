import React from 'react'

import { ConfigurationItem, ConfigurationListProps } from '~type'

import './styles/index.less'

export const isStringArray = (arr: ConfigurationItem): arr is string[] => typeof arr[0] === 'string'

const ConfigurationList: React.FC<ConfigurationListProps> = ({ list }) => {
  let items: JSX.Element[] | undefined
  if (Array.isArray(list.value)) {
    if (isStringArray(list.value)) {
      items = list.value.map((item, index) => {
        return (
          <ul key={index}>
            // todo
          </ul>
        )
      })
    } else {
      items = list.value.map((item, index) => {
        return (
          <ul key={index}>
            // todo
          </ul>
        )
      })
    }
  }
  return (
    <div className='bread--configuration-list'>
      {items || <div/>}
    </div>
  )
}

export {
  ConfigurationList
}

export default ConfigurationList
