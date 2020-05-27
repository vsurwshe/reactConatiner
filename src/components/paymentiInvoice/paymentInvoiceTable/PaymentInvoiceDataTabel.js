import React, { Component } from 'react';
import { Card, Container } from "react-bootstrap";
import { CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actionsPayment from "../../../action/Payment";
import * as actionsUser from "../../../action/User";
import PaymentInvoiceModal from './PaymentInvoiceModal';
import { PaymentInvoiceTable } from './PaymentInvoiceTabel';

class PayementInvoiceDataTable extends Component {
  state = {
    showInvoiceModal: false,
    modalData: [],
    loading: false
  }

  componentDidMount=async()=>{
    await this.props.users.length <=0 && this.props.usersAct.loadUser();
    await this.props.payments.length <=0 && this.props.paymentAct.loadPayments(this.props.token);
  }

  // This method used for the toggle the show invoice modal
  toggle = (modalData) => {
    this.setState({ showInvoiceModal: !this.state.showInvoiceModal, modalData })
  }

  // This method used for the loading functions
  setLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  showInvoice=(data)=>{
    let filterData= this.props.invoices.length >0  && this.props.invoices.filter(invoiceData=> invoiceData.invoiceId=== parseInt(data[2]));
    this.toggle(filterData[0]);
  }

  showUserNameByPaymentId=(paymentId)=>{
    let filterPaymentData= this.props.payments.length >0  && this.props.payments.filter(payment=> payment.paymentId=== parseInt(paymentId));
    let userId=(filterPaymentData && filterPaymentData.length >=0) && filterPaymentData[0].userId;
    let filterUserData=(this.props.users && userId) && this.props.users.filter((user) => user.userId === userId);
    return (filterUserData && filterUserData.length >=0) && filterUserData[0].userName;
  }

  render() {
    const { showInvoiceModal, modalData, loading } = this.state
    return showInvoiceModal ? <PaymentInvoiceModal showModel={showInvoiceModal} loading={loading} data={modalData} toggle={this.toggle}/> : this.loadDataTableContainer()
  }

  loadDataTableContainer = () => <Container className="justify-content-md-center">{this.loadDataTable()}</Container>

  // This Functions Loading Jquery DataTable into bills
  loadDataTable = () => {
    // This array collection of header in DataTable
    let columns = [
      { title: '', visible: false },
      { title: "Sr. no" },
      { title: "",visible:  false },
      { title: "Customer Name" },
      { title: "Invoice Date" },
      { title: "Invoice Total Amount" },
      { title: "", orderable: false },
    ]
    // This is Returning DataTable Component
    return <Card>
      <CardHeader><b>Payment Invoice Table</b></CardHeader>
      <CardBody className="card-align">
        {(this.props.invoices.length > 0) ? <>
          <PaymentInvoiceTable
            data={this.loadTableRows(this.props)}
            columns={columns}
            handelShowInvoice={this.showInvoice}
            showUserName={this.showUserNameByPaymentId}
          /> </> : <PaymentInvoiceTable columns={columns} />
        }
      </CardBody>
    </Card>
  }

  // This fucntion loading DataTable Rows.
  loadTableRows = (props) => {
    var rows = props.invoices.length > 0 && props.invoices.map((invoice, key) => { return this.loadSingleRow(invoice, key); })
    return rows;
  }

  // Show the Single Bill 
  loadSingleRow = (invoice, key) => {
    const { invoiceId,invoiceDate, invoiceTotalAmount, payments} = invoice
    let singleRow = [
      "" +  key,
      "" + (key + 1),
      "" + invoiceId,
      "" + payments.paymentId,
      "" + invoiceDate,
      "" + invoiceTotalAmount,
      "" + payments,
    ]
    return singleRow;
  }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps = (dispatch) => ({
  usersAct: bindActionCreators(actionsUser, dispatch),
  paymentAct: bindActionCreators(actionsPayment, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PayementInvoiceDataTable);