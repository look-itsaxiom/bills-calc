import React from 'react';
import './App.css';
import BillListForm from './BillListForm';
import BillListDisplay from './BillListDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    let j;
    this.state = {
      date: new Date(),
      billsList: Object.keys(j = require('./BillsSource.json')).map(entry => ({name: entry, balanceDue: j[entry].balanceDue, dueDate: new Date(j[entry].dueDate), paid: j[entry].paid}))
    }
    this.createBill = this.createBill.bind(this);
  }

  createBill(bill) {
    //move function down to form level, then pass up the finish object to add to state
    this.setState((prevState) => ({
      date: prevState.date,
      billsList: [...prevState.billsList, bill]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Chase's Bills Tool</h1>
        <h1>Today's Date is: {this.state.date.toLocaleDateString()}</h1>
        <BillListForm onClick={this.createBill} />
        <BillListDisplay billsList={this.state.billsList} />
        {/* <BillListSchedule /> */}
      </div>
    );
  }
}

export default App;
