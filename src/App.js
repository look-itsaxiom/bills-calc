import React from 'react';
import './App.css';
import BillListForm from './BillListForm';
import BillListDisplay from './BillListDisplay';
import BillListSchedule from './BillListSchedule';

class App extends React.Component {
  constructor(props) {
    super(props);
    let j;
    this.state = {
      date: new Date(),
      billsList: Object.keys(j = require('./BillsSource.json')).map(entry => ({name: entry, balanceDue: j[entry].balanceDue, dueDate: new Date(j[entry].dueDate), paid: j[entry].paid}))
    }
    this.createBill = this.createBill.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.changeBill = this.changeBill.bind(this);
  }

  createBill(bill) {
    this.setState((prevState) => ({
      date: prevState.date,
      billsList: [...prevState.billsList, bill]
    }));
  }

  deleteBill(bill) {
    this.setState((prevState) => (prevState.billsList = prevState.billsList.filter(currBill => currBill !== bill)));
  }

  changeBill(bill) {
    bill.paid = !bill.paid;
    this.deleteBill(bill);
    this.createBill(bill);
  }

  render() {
    return (
      <div className="App">
        <h1>Chase's Bills Tool</h1>
        <h1>Today's Date is: {this.state.date.toLocaleDateString()}</h1>
        <BillListForm onClick={this.createBill} />
        <BillListDisplay billsList={this.state.billsList} delClick={this.deleteBill} changeClick={this.changeBill} />
        <BillListSchedule />
      </div>
    );
  }
}

export default App;
