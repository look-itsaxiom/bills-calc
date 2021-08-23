import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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
        <Container fluid>
            <Tabs defaultActiveKey="unpaidBills" >
                <Tab eventKey="unpaidBills" title="Unpaid Bills">
                    <Table size="xs" striped responsive bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Bill Name</th>
                                <th>Balance Due</th>
                                <th>Bill Due Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {unpaidBillList.map(bill => ( 
                                <tr key={bill.name}>
                                    <td>{bill.name}</td>
                                    <td>${bill.balanceDue}</td>
                                    {bill.dueDate <= new Date() ? (<td style={{ "backgroundColor": "hsla(0, 100%, 38%, 0.72)" }}>{bill.dueDate.toLocaleDateString()}</td>) : (<td>{bill.dueDate.toLocaleDateString()}</td>)}
                                    <td><input type="button" value="Paid" onClick={changeBill}></input></td>
                                    <td><input type="button" value="X" onClick={deleteBill}></input></td>
                                </tr>
                                )
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Owed</th>
                                <td colSpan="4">${unpaidBillList.reduce((acc, curr) => acc + curr.balanceDue, 0).toFixed(2)}</td>

                            </tr>
                        </tfoot>
                    </Table>
                </Tab>
            
                <Tab eventKey="paidBills" title="Paid Bills">
                    <Table size="xs" responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Bill Name</th>
                                <th>Balance Due</th>
                                <th>Bill Due Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {paidBillList.map(bill => (
                                <tr key={bill.name}>
                                    <td>{bill.name}</td>
                                    <td>${bill.balanceDue}</td>
                                    <td>{bill.dueDate.toLocaleDateString()}</td>
                                    <td><input type="button" value="Unpaid" onClick={changeBill}></input></td>
                                    <td><input type="button" value="X" onClick={deleteBill}></input></td>
                                </tr>
                                )
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Paid</th>
                                <td colSpan="4">${paidBillList.reduce((acc, curr) => acc + curr.balanceDue, 0).toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default BillListDisplay;