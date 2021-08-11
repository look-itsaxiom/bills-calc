import React from 'react';
import './App.css';
import BillListForm from './BillListForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      bills: require('./BillsSource.json')
    }
  }

  createBill(name, balanceDue, dueDate) {
    name = name.replace(/\s/g, "");
    this.setState(prevState => {
      let newBill = Object.assign({}, prevState.bills[name]);
      newBill.bills[name] = {
        "balanceDue": balanceDue,
        "dueDate": dueDate
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Chase's Bills Tool</h1>
        <h1>Today's Date is: {this.state.date.toLocaleDateString()}</h1>
        <BillListForm onClick={this.createBill} />
        {/* <BillListDisplay /> */}
        {/* <BillListSchedule /> */}
      </div>
    );
  }
}

export default App;
