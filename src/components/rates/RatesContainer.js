import Loading from '../Loading'
import RateItem from './RateItem'
import RatesTable from './RatesTable'

function RatesContainer(props) {
    const ratesList = props.rates.map(rate => 
       <RateItem rate={rate} key={rate.ccy} />              
    )

    return (
        <div className="rates">
            <h2>Rates</h2>
            {props.isRatesLoading ? <Loading /> : <RatesTable ratesList={ratesList} />}
        </div>    
    )
}

export default RatesContainer