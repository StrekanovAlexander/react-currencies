function TableRow(props) {
    const values = props.values.map((el, ix) => {
        const style = typeof el === 'number' ? { textAlign: 'right' } : null
        return <td style={style} key={ix}>{el}</td>
    })
    
    return (
        <tr>{values}</tr>
    )
}

export default TableRow

