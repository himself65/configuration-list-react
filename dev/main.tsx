import React from 'react'
import ReactDOM from 'react-dom'

import ConfigurationList from '~'

import './index.less'
import { Configuration } from '~type'

const exampleList: Configuration = [
  {
    name: '主体',
    items: [

    ]
  }
]

const MainPage: React.FC = () => {
  return (
    <div>
      <div>Dev Env</div>
      <ConfigurationList list={[]}/>
    </div>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<MainPage/>, app)
