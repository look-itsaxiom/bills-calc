import React from 'react';

function BillListForm(props) {
    return (
        <form>
            <label>Bill Name: <input type="text" name="billName"></input></label>
            <label>BalanceDue: <input type="number" name="balanceDue"></input></label>
            <label>Due Date: <input type="datetime-local" name="dueDate"></input></label>
            <input type="submit" value="Add"></input>
        </form>
    )
}