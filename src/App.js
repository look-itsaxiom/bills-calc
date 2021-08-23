import React from 'react';
import './App.css';
import BillListForm from './BillListForm';
import BillListDisplay from './BillListDisplay';
import BillListSchedule from './BillListSchedule';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    let j;
    this.state = {
      date: new Date(),
      show: false,
      billsList: Object.keys(j = require('./BillsSource.json')).map(entry => ({name: entry, balanceDue: j[entry].balanceDue, dueDate: new Date(j[entry].dueDate), paid: j[entry].paid}))
    }
    this.createBill = this.createBill.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.changeBill = this.changeBill.bind(this);
    this.handleShow = this.handleShow.bind(this);
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

  handleShow() {
    this.setState((prevState) => ({
      ...prevState,
      show: !prevState.show
    }));
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
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                  <Button variant="secondary" onClick={this.handleShow}>Add Bill</Button>
                  <Navbar.Text>Today is: {this.state.date.toLocaleDateString()}</Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/*Migrate Offcanvas into BillList Form Component that takes state as prop to show or hide */}
            <Offcanvas show={this.state.show} onHide={this.handleShow} backdrop={false} placement="bottom" scroll="true">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add Bill</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <BillListForm onClick={this.createBill} />
              </Offcanvas.Body>
            </Offcanvas>
          </Row>
          <Row>
            <br />
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