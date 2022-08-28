import Rates from "./Rates"

function Main(props) {
    return(
        <main>
            <div className="operations">Operations</div>
            <Rates 
                rates={props.states.rates} 
                isRatesLoading={props.states.isRatesLoading} />
        </main>
    )
}

export default Main