import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
        formValues.balanceDue = parseFloat(e.target.value);
    }

    function handleDateChange(e) {
        formValues.dueDate = new Date(e.target.value);
    }

    return (
        <Form onSubmit={submit} id="new-bill" autoComplete="off">
            <h2>Enter new bill:</h2>
            <Form.Group>
                <FloatingLabel label="Bill Name:" controlId="billName" className="mb-3">
                    <Form.Control required type="text" name="billName" onChange={handleNameChange}></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="Balance Due:" controlId="balanceDue" className="mb-3">
                    <Form.Control required type="number" step="0.01" name="balanceDue" onChange={handleAmountChange}></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="Due Date:" controlId="dueDate" className="mb-3">
                    <Form.Control required type="date" name="dueDate" onChange={handleDateChange}></Form.Control>
                </FloatingLabel>
                <Button variant="primary" type="submit">Add</Button>
            </Form.Group>
            {/*<label>Bill Name: <input required type="text" name="billName" onChange={handleNameChange}></input></label>*/}
            {/*<label>BalanceDue: <input required type="number" name="balanceDue" step="0.01" onChange={handleAmountChange}></input></label>*/}
            {/* <label>Due Date: <input required type="date" name="dueDate" onChange={handleDateChange}></input></label>
            <input type="submit" value="Add"></input> */}
        </Form>
    )
}

export default BillListForm;