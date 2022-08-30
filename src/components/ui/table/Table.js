import TableHead from './TableHead'
import TableBody from './TableBody'

function Table(props) {
    return (
        <table>
            <TableHead heading={props.heading} />
            <TableBody body={props.body} />
        </table>
    )
}

export default Table