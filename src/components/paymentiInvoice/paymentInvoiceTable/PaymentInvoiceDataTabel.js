import React, { Component } from 'react';
import { Card, Container } from "react-bootstrap";
import { CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/Payment";
import PaymentInvoiceModal from './PaymentInvoiceModal';
import { PaymentInvoiceTable } from './PaymentInvoiceTabel';

class PayementInvoiceDataTable extends Component {
  state = {
    showInvoiceModal: false,
    modalData: [],
    loading: false
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
    console.log("Show ",data,this.props.invoices)
    let filterData= this.props.invoices.length >0  && this.props.invoices.filter(invoiceData=> invoiceData.invoiceId=== parseInt(data[2]));
    console.log("filter data ",filterData[0])
    this.toggle(filterData[0]);
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
      { title: "Invoice Id" },
      { title: "Invoice Date" },
      { title: "Invoice Total Amount" },
      { title: "", orderable: false },
    ]
    // This is Returning DataTable Component
    return <Card>
      <CardHeader><b>Payment Invoice Tabel</b></CardHeader>
      <CardBody className="card-align">
        {(this.props.invoices.length > 0) ? <>
          <PaymentInvoiceTable
            data={this.loadTableRows(this.props)}
            columns={columns}
            handelShowInvoice={this.showInvoice}
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
      ""+  key,
      "" + (key + 1),
      "" + invoiceId,
      "" + invoiceDate,
      "" + invoiceTotalAmount,
      "" + payments,
    ]
    return singleRow;
  }

  
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(PayementInvoiceDataTable);