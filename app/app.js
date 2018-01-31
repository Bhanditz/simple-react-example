import React from 'react'
import ReactDOM from 'react-dom'

import StyledDiv from './components/StyledDiv'
import style from './styles/style.css'

ReactDOM.render(
  <StyledDiv style={style} />,
  document.getElementById('app')
)
