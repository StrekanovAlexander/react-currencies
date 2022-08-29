function ControlPanel(props) {
    const { rates, selectedRate } = props.state
    
    const currenciesList = rates.map(item =>
        <option value={item.ccy} key={item.ccy}>{item.ccy}</option>
    )

    return (
        <div className="control-panel">
            <select 
                name="ccy"
                value={selectedRate.ccy} 
                onChange={props.selectRate}>
                <option value="">Select currency</option>
                {currenciesList}
            </select>
            {selectedRate.ccy && <label>Base: {selectedRate.base_ccy}</label>}
            {selectedRate.ccy && <label>Buy: {selectedRate.buy}</label>}
            {selectedRate.ccy && <label>Sale: {selectedRate.sale}</label>}
            {selectedRate.ccy && <button onClick={() => props.displayModal(true, 'buy')}>Buy</button>}
            {selectedRate.ccy && <button onClick={() => props.displayModal(true, 'sale')}>Sale</button>}
        </div>
    )
} 

export default ControlPanel