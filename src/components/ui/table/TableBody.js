import TableRow from './TableRow'

function TableBody(props) {
    return (
        <tbody>
            {props.body.map((el, ix) => <TableRow key={ix} values={el} /> )}
        </tbody>
    )

}

export default TableBody