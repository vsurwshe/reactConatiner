import React,{Component} from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";


import * as actionsCre from "../../action/index";
import AddPayment from './addPayment/AddPayment';
import PaymentDataTabel from './paymentTable/PaymentDataTabel';

class PaymentStructre extends Component {
    state = {
        loadPaymentValue: false
      }

    componentDidMount=()=>{
        this.loadPaymentData();
    }


  setLoadPayment = () => {
    this.setState({ loadPaymentValue: !this.state.loadPaymentValue })
  }

  loadPaymentData = () => {
    if (this.props.token && this.props.payments.length <= 0) {
      this.props.loadPayments(this.props.token);
    }
  }


    render() { 
        const { loadPaymentValue } = this.state
        return loadPaymentValue ? this.loadAddFrame() : this.loadDataTableFrame()
    }

    loadDataTableFrame = () => <><div style={{ padding: 10, float: "right" }}>
    <Button onClick={() => this.setLoadPayment()}>Add Payment</Button><br />
  </div>
    <PaymentDataTabel />
  </>

loadAddFrame = () => <AddPayment />

}
 
const mapStateToProps = state => { return state; };

export default connect(mapStateToProps,actionsCre)(PaymentStructre);
