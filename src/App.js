import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

  state = {
    rates: [],
    isRatesLoading: false
  }

  componentDidMount() {
    this.setState({ isRatesLoading: true})
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(rates => {
        this.setState({ 
          rates: rates,
          isRatesLoading: false 
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main states={this.state} />
      </div>
    )
  }  
}

export default App
