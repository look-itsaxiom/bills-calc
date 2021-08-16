import React from 'react';

function BillListDisplay(props) {

    let unpaidBillList = props.billsList.filter(bill => !bill.paid).map(bill => 
        (<tr key={bill.name}>
            <td>{bill.name}</td>
            <td>{bill.balanceDue}</td>
            <td>{bill.dueDate}</td>
        </tr>));

    let paidBillList = props.billsList.filter(bill => bill.paid).map(bill =>
    (<tr key={bill.name}>
        <td>{bill.name}</td>
        <td>{bill.balanceDue}</td>
        <td>{bill.dueDate}</td>
    </tr>));

    return (
        <>
            <table>
                <caption>Unpaid Bills</caption>
                <thead>
                    <tr>
                        <th>Bill Name</th>
                        <th>Balance Due</th>
                        <th>Bill Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {unpaidBillList}
                </tbody>
            </table>
            
            <table>
                <caption>Paid Bills</caption>
                <thead>
                    <tr>
                        <th>Bill Name</th>
                        <th>Balance Due</th>
                        <th>Bill Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {paidBillList}
                </tbody>
            </table>
        </>
    )
}

export default BillListDisplay;