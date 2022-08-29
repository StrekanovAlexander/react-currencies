function RateItem(props) {
    return (
        <tr>
            <td style={{ textAlign: 'left' }}>{props.rate.ccy} / {props.rate.base_ccy}</td>
            <td>{props.rate.buy}</td>
            <td>{props.rate.sale}</td>
        </tr>   
    )
}

export default RateItem