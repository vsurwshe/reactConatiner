import React, { Component } from 'react'
import { Container, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PaymentDatatable from './PaymentDataTabel';
import Login, { isLogin } from './Login';

import * as actionsCre from "../action/index";
import HeaderPart from './Helper/Header';
import AddPayment from './AddPayment';

class Main extends Component {

  state = {
    loadPaymentValue: false
  }

  componentWillMount = () => {
    this.loadPayment();
  }
  // This is login form Loading
  loadLogin = () => <Login />

  setLoadPayment = () => {
    this.setState({ loadPaymentValue: !this.state.loadPaymentValue })
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    const { loadPaymentValue } = this.state
    return <Container className="justify-content-md-center">
      <Row>
        <HeaderPart />
      </Row>
      <Row >
        {loadPaymentValue ? this.loadAddFrame() : this.loadDataTableFrame()}
      </Row>
    </Container>
  };

  loadAddFrame = () => <AddPayment />

  loadDataTableFrame = () => <><div style={{ padding: 10, float: "right" }}>
    <Button onClick={() => this.setLoadPayment()}>Add Payment</Button><br />
  </div>
    <PaymentDatatable />
  </>


  loadPayment = () => {
    if (this.props.token && this.props.payments.length <= 0) {
      this.props.loadPayments(this.props.token);
    }
  }

  render() {
    // This condtions checking is user login or not using props
    if (isLogin(this.props)) {
      this.loadPayment();
      return this.loadSecureFramework();
    } else {
      return this.loadLogin();
    }

  }
}

// This is line maping state const variable 
const mapStateToProps = state => { return state; };

// This line passing above maping state to Main Class
export default connect(mapStateToProps, actionsCre)(Main);