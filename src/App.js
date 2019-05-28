import React, { Component } from 'react'
import { ThemeContext } from './themeContext'
import Name from './Name'

class App extends Component {
  state = {
    theme: 'red'
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button
          onClick={() => {
            this.setState({theme:this.state.theme === 'red' ? 'blue' : 'red'})
          }}
        >
          change
        </button>
        <Name/>
      </ThemeContext.Provider>
    )
  }
}

export default App

