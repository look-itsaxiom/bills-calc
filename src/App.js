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

  render() {
    return (
      <div className="App">
        <h1>Chase's Bills Tool</h1>
        <h1>Today's Date is: {this.state.date.toLocaleDateString()}</h1>
        {/* <BillListForm /> */}
        {/* <BillListDisplay /> */}
        {/* <BillListSchedule /> */}
      </div>
    );
  }
}

export default App;
