import React from 'react';

function BillListDisplay(props) {

    let unpaidBillList = props.billsList.filter(bill => !bill.paid).map(bill => 
        (<tr>
            <td>{bill.name}</td>
            <td>{bill.balanceDue}</td>
            <td>{bill.dueDate}</td>
        </tr>));

    let paidBillList = props.billsList.filter(bill => bill.paid).map(bill =>
    (<tr>
        <td>{bill.name}</td>
        <td>{bill.balanceDue}</td>
        <td>{bill.dueDate}</td>
    </tr>));

    return (
        <>
            <table>
                <label>Unpaid Bills</label>
                <tr>
                    <th>Bill Name</th>
                    <th>Balance Due</th>
                    <th>Bill Due Date</th>
                </tr>
                {unpaidBillList}
            </table>
            
            <table>
                <label>Paid Bills</label>
                <tr>
                    <th>Bill Name</th>
                    <th>Balance Due</th>
                    <th>Bill Due Date</th>
                </tr>
                {paidBillList}
            </table>
        </>
    )
}

export default BillListDisplay;