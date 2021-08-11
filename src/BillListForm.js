import React from 'react';

function BillListForm(props) {
    return (
        <form onSubmit={props.createBill}>
            <h2>Enter new bill:</h2>
            <label>Bill Name: <input type="text" name="billName"></input></label>
            <label>BalanceDue: <input type="number" name="balanceDue" step="0.01"></input></label>
            <label>Due Date: <input type="date" name="dueDate"></input></label>
            <input type="submit" value="Add" ></input>
        </form>
    )
}

export default BillListForm;