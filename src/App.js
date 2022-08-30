import React, { Component } from 'react'
import ActionsTable from './components/ActionsTable'
import Header from './components/Header'
import Main from './components/Main'
import Modal from './components/ui/Modal'

class App extends Component {
  state = {
    action: '',
    actions: [
      { id: 1, action: 'buy', ccy: 'USD', base_ccy: 'UAH', amount: 100, rate: 25, result: 2500, datetime: '234' },
      { id: 2, action: 'sale', ccy: 'EUR', base_ccy: 'UAH', amount: 200, rate: 35, result: 3500, datetime: '235' },
    ],
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
    return (
      <div className="app">
        <Header />
        <Main state={this.state} 
          selectRate={this.selectRate} 
          displayModal={this.displayModal}
        />
        <ActionsTable actions={this.state.actions} />
        {this.state.isModal && <Modal state={this.state} displayModal={this.displayModal} />}
      </div>
    )
  }  
}

export default App
