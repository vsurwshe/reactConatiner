import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionsCre from "../../action/Payment";
import PaymentDataTabel from './paymentTable/PaymentDataTabel';
import PaymentOps from './paymentOperation/PaymentOps';

class PaymentStructre extends Component {
  state = {
    loadPaymentValue: false,
    editPayment: false,
    deletePayment: false,
    editDeleteData: []
  }

  componentDidMount = () => {
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

  editPaymentToggle = (rowData) => {
    this.setState({ editPayment: !this.state.editPayment, editDeleteData: rowData })
  }

  deletePaymentToggle = (rowData) => {
    this.setState({ deletePayment: !this.state.deletePayment, editDeleteData: rowData })
  }

  handelEditClick = async (data) => {
    this.editPaymentToggle(data);
  }

  handelDeleteClick = async (data) => {
    this.deletePaymentToggle(data);
  }

  render() {
    const { loadPaymentValue, editPayment} = this.state
    return (loadPaymentValue || editPayment) ? this.loadAddFrame() : this.loadDataTableFrame()
  }

  loadDataTableFrame = () => <>
    <Button style={{ float: "right" ,color: "#060606", backgroundColor: "#4dd814", borderColor: " #51f704" }} onClick={() => this.setLoadPayment()}>Add Payment</Button><br />
    <br />
    <PaymentDataTabel
      handelEditClick={this.handelEditClick}
      handelDeleteClick={this.handelDeleteClick}
    />
  </>

  loadAddFrame = () => {
    const { editDeleteData } = this.state
    return <PaymentOps rowData={editDeleteData} />
  }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(PaymentStructre);
