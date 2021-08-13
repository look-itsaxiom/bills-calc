import React from 'react';

function BillListForm(props) {
    let formValues = {

    };

    const submit = e => {
        e.preventDefault();
        props.onClick(formValues);
    }
    
    function handleNameChange(e) {
        formValues.billName = e.target.value;
    }

    function handleAmountChange(e) {
        formValues.amt = e.target.value;
    }

    function handleDateChange(e) {
        formValues.dueDate = e.target.value;
    }

    return (
        <form onSubmit={submit}>
            <h2>Enter new bill:</h2>
            <label>Bill Name: <input type="text" name="billName" value={props.billName} onChange={handleNameChange}></input></label>
            <label>BalanceDue: <input type="number" name="balanceDue" step="0.01" value={props.amt} onChange={handleAmountChange}></input></label>
            <label>Due Date: <input type="date" name="dueDate" value={props.dueDate} onChange={handleDateChange}></input></label>
            <input type="submit" value="Add" ></input>
        </form>
    )
}

export default BillListForm;