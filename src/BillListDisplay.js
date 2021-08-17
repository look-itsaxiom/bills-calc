import React from 'react';

function BillListDisplay(props) {

    let unpaidBillList = props.billsList.filter(bill => !bill.paid).sort((a,b) => a.dueDate - b.dueDate)

    let paidBillList = props.billsList.filter(bill => bill.paid).sort((a, b) => a.dueDate - b.dueDate)

    const deleteBill = function(e) {
        let selectedBill;

        if (unpaidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML).length > 0) {
            [selectedBill] = unpaidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML);
            props.delClick(selectedBill);
        } else if (paidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML).length > 0) {
            [selectedBill] = paidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML);
            props.delClick(selectedBill);
        } else {
            return null;
        }
    }

    const changeBill = function (e) {
        let selectedBill;

        if (unpaidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML).length > 0) {
            [selectedBill] = unpaidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML);
            props.changeClick(selectedBill);
        } else if (paidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML).length > 0) {
            [selectedBill] = paidBillList.filter(bill => bill.name === e.target.parentNode.parentNode.firstChild.innerHTML);
            props.changeClick(selectedBill);
        } else {
            return null;
        }
    }

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
                    {unpaidBillList.map(bill => ( 
                        <tr key={bill.name}>
                            <td>{bill.name}</td>
                            <td>{bill.balanceDue}</td>
                            {bill.dueDate <= new Date() ? (<td style={{ "backgroundColor": "hsla(0, 100%, 38%, 0.72)" }}>{bill.dueDate.toLocaleDateString()}</td>) : (<td>{bill.dueDate.toLocaleDateString()}</td>)}
                            <td><input type="button" value="Mark as Paid" onClick={changeBill}></input></td>
                            <td><input type="button" value="Delete" onClick={deleteBill}></input></td>
                        </tr>
                        )
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Owed</th>
                        <td>{unpaidBillList.reduce((acc, curr) => acc + curr.balanceDue, 0)/*.toFixed(2)*/}</td>
                    </tr>
                </tfoot>
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
                    {paidBillList.map(bill => (
                        <tr key={bill.name}>
                            <td>{bill.name}</td>
                            <td>{bill.balanceDue}</td>
                            <td>{bill.dueDate.toLocaleDateString()}</td>
                            <td><input type="button" value="Mark as Unpaid" onClick={changeBill}></input></td>
                            <td><input type="button" value="Delete" onClick={deleteBill}></input></td>
                        </tr>
                        )
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Paid</th>
                        <td>{paidBillList.reduce((acc, curr) => acc + curr.balanceDue, 0)/*.toFixed(2)*/}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default BillListDisplay;