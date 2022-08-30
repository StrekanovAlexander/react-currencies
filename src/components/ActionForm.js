import React from 'react'

class ActionForm extends React.Component {
    constructor(props) {
        super()
        this.state.rate = props.selectedRate[props.action]
    }

    state = {
        amount: 0,
        result: 0
    }
     
    handleChange = (ev) => {
        const { value } = ev.target
        this.setState({
            amount: value,
            result: this.state.rate * value
        })
    }
    
    render() {
        return (
            <div className="action">
                <form>
                    <h1>{this.props.action} {this.props.selectedRate.ccy}</h1>
                    <div>
                        <label>Amount</label>
                        <input type="number" value={this.state.amount} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Rate</label>
                        <input type="number" value={this.state.rate} readOnly />
                    </div>
                    <div>
                        <label>Result</label>
                        <input type="number" value={this.state.result} readOnly />
                    </div>
                    <div>
                        <button onClick={() => console.log('Run')}>Run</button> 
                        <button onClick={() => this.props.displayModal(false, '')}>Close</button> 
                    </div>
                </form>
            </div>    
        )
    }
}

export default ActionForm