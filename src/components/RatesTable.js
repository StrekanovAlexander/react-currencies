function RatesTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ textAlign: 'left' }}>Currencies</th>
                    <th>Buy</th>
                    <th>Sale</th>
                </tr>
                {props.ratesList}
            </thead>    
        </table>  
    )
}

export default RatesTable