import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import './styles.css'

const App = () => {
  const [count, setCount] = useState(0)

  const A = 'Apple'

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1 className="header-red">Hello world!</h1>
      <p className={count > 10 ? 'header-red' : null}>{count}</p>
      <button type="button" onClick={() => increase()}>
        Increase
      </button>
      <button type="button" onClick={() => decrease()}>
        Decrease
      </button>
    </>
  )
}

export default hot(module)(App)
