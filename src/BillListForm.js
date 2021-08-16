import React from 'react';

function BillListForm(props) {
    let formValues = {
        paid: false,
        name: "",
        balanceDue: 0,
        dueDate: ""
    };

    const submit = e => {
        e.preventDefault();
        if (formValues.name !== "") {
            props.onClick(formValues); 
            formValues = {
                paid: false,
                name: "",
                balanceDue: 0,
                dueDate: ""
            };
            document.getElementById("new-bill").reset();
        }
    }
    
    function handleNameChange(e) {
        formValues.name = e.target.value;
    }

    function handleAmountChange(e) {
        formValues.balanceDue = e.target.value;
    }

    function handleDateChange(e) {
        formValues.dueDate = new Date(e.target.value);
    }

    return (
        <form onSubmit={submit} id="new-bill" autoComplete="off">
            <h2>Enter new bill:</h2>
            <label>Bill Name: <input required type="text" name="billName" onChange={handleNameChange}></input></label>
            <label>BalanceDue: <input required type="number" name="balanceDue" step="0.01" onChange={handleAmountChange}></input></label>
            <label>Due Date: <input required type="date" name="dueDate" onChange={handleDateChange}></input></label>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default BillListForm;