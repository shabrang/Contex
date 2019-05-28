import React from 'react'
import { ThemeContext } from './themeContext'

const FullName = () => {

  return (
    <ThemeContext.Consumer>
      {theme => (
        <h1 style={{ color: theme === 'red' ? 'red' : 'blue' }}>
          hello
        </h1>
      )}
    </ThemeContext.Consumer>

  )

}

export default FullName