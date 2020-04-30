import React, { Component } from 'react';
import { Card, Container } from "react-bootstrap";
import { CardBody, CardHeader } from 'reactstrap';
import { InvoiceTable } from './InvoiceTabel';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/Payment";
import Config from '../../../data/Config';
import InvoiceModal from "../invoiceTable/InvoiceModal";

class InvoiceDataTable extends Component {
  state = {
    showInvoiceModal: false,
    modalData: [],
    loading: false
  }

  toggle = (modalData) => {
    this.setState({ showInvoiceModal: !this.state.showInvoiceModal, modalData })
  }

  verifyHandelClick = (props) => {
    this.toggle(props);
  }

  handelClick = async (data) => {
    await this.setLoading();
    await this.props.setPaymentVeirfyValue(this.props.token, data);
    setTimeout(async () => {
      await this.props.loadPayments(this.props.token);
      await this.setLoading();
      await this.toggle();
    }, Config.API_EXE_TIME)
  }


  setLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    const { showInvoiceModal, modalData, loading } = this.state
    // return this.loadDataTableConatier();
    return showInvoiceModal ? <InvoiceModal showModel={showInvoiceModal} loading={loading} data={modalData} toggle={this.toggle} handelverify={this.handelClick} /> : this.loadDataTableConatier()
  }

  loadDataTableConatier = () => <Container className="justify-content-md-center">
    {this.loadDataTable()}
  </Container>

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
      // { title: "", orderable: false }, // This column used for edit button
      // { title: "", orderable: false },
    ]
    // This is Returning DataTable Component
    return <Card>
      <CardHeader><b>Payment Invoice Tabel</b></CardHeader>
      <CardBody className="card-align">
        {/* Calling jquery datatable component providing rows and columns */}
        {(this.props.invoices.length > 0) ? <>
          <InvoiceTable
            data={this.loadTableRows(this.props)}
            columns={columns}
            handelShowInvoice={this.showInvoice}
            // handelEditClick={this.props.handelEditClick}
            // handelDeleteClick={this.props.handelDeleteClick}
          /> </> : <InvoiceTable columns={columns} />
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
      // "",
      // ""
    ]
    return singleRow;
  }

  showInvoice=(data)=>{
    let filterData= this.props.invoices.length >0  && this.props.invoices.filter(invoiceData=> invoiceData.invoiceId=== parseInt(data[0]));
    this.toggle(filterData[0]);
  }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(InvoiceDataTable);