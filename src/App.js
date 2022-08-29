import React, { Component } from 'react'
import Header from './components/Header'
import Modal from './components/ui/Modal'
import Main from './components/Main'

class App extends Component {
  state = {
    action: '',
    isLoading: false,
    isModal: false,
    rates: [],
    selectedRate: {},
  }
  
  selectRate = (ev) => {
    const selectedRate = this.state.rates.filter(el => 
      el.ccy === ev.target.value)
    if (selectedRate[0]) {
      this.setState({
        selectedRate: selectedRate[0]
      })
    }
  }

  displayModal = (visible, action) => {
    this.setState({
      action: action,
      isModal: visible
    })
  }

  componentDidMount() {
    this.setState({ 
      isLoading: true,
      isModal: true,
    })
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(rates => {
        this.setState({ 
          rates: rates,
          isLoading: false,
          isModal: false, 
        })
      })
  }

  render() {
    const { action, isLoading, isModal } = this.state
    return (
      <div className="app">
        <Header />
        <Main state={this.state} 
          selectRate={this.selectRate} 
          displayModal={this.displayModal}
        />
        {isModal && <Modal action={action} isLoading={isLoading} displayModal={this.displayModal} />}
      </div>
    )
  }  
}

export default App
