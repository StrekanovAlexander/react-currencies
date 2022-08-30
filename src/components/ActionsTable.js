import Table from "./ui/table/Table"

function ActionsTable(props) {
    const heading = ['id', 'action', 'ccy', 'base ccy', 'amount', 'rate', 'result', 'datetime']
    const body = props.actions.reduce((acc, el) => {
        acc.push(Object.values(el))
        return acc
    }, [])

    return (
        <Table heading={heading} body={body} />
        // <table>
        //     <thead>
        //         <tr>{columns}</tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //             <td>1</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default ActionsTable

/*
import React, { Component } from 'react';
  
class App extends Component {
    render() {
        var heading = ['Name', 'City', 'Course'];
        var body =
            [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech']
            ];
        return (
            <div >
                <Table heading={heading} body={body} />,
            </div>
        );
    }
}
  
class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}
  
class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}
  
export default App;
*/