import React from 'react';
//import './App.css';
import BillListForm from './BillListForm';
import BillListDisplay from './BillListDisplay';
import BillListSchedule from './BillListSchedule';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

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
      <>
        <Container fluid="xl">
          <Row>
            <Navbar bg="dark" expand="xl" variant="dark">
              <Container>
                <Navbar.Brand href="#">Chase's Bill Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Navbar.Text>Today is: {this.state.date.toLocaleDateString()}</Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
          <Row>
            <BillListForm onClick={this.createBill} />
          </Row>
          <Row>
            <BillListDisplay billsList={this.state.billsList} delClick={this.deleteBill} changeClick={this.changeBill} />
          </Row>
          <Row>
            <BillListSchedule billsList={this.state.billsList} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;