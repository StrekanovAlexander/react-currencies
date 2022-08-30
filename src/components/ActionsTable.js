import Table from "./ui/table/Table"

function ActionsTable(props) {
    const heading = ['id', 'action', 'ccy', 'base ccy', 'amount', 'rate', 'result', 'datetime']
    const body = props.actions.reduce((acc, el) => {
        acc.push(Object.values(el))
        return acc
    }, [])

    return (
        <Table heading={heading} body={body} />
    )
}

export default ActionsTable
