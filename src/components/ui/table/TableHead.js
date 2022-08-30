function TableHead(props) {
    const heading = props.heading.map((el, ix) => <th key={ix}>{el}</th>)
    return (
        <thead>
            <tr>{heading}</tr>
        </thead>
    )
}

export default TableHead