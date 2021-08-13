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
    this.createBill = this.createBill.bind(this);
  }

  createBill({name, amt, dueDate}) {
    //move function down to form level, then pass up the finish object to add to state
    let newBill = {};
    newBill[name] = {
      "balanceDue": amt,
      "dueDate": dueDate,
      "paid": false
    } 
    this.setState((prevState, props) => ({
      date: prevState.date,
      bills: {...prevState.bills,
         newBill
      }
    }));
    console.log(this.state);
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
