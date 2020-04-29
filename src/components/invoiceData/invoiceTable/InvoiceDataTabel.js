import React, { Component } from 'react';
import { Card, Container } from "react-bootstrap";
import { CardBody, CardHeader } from 'reactstrap';
import { InvoiceTable } from './InvoiceTabel';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/Payment";
import Config from '../../../data/Config';

class InvoiceDataTable extends Component {
  state = {
    showModal: false,
    modalData: [],
    loading: false
  }

  toggle = (modalData) => {
    this.setState({ showModal: !this.state.showModal, modalData })
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
    const { showModal, modalData, loading } = this.state
    return this.loadDataTableConatier();
    // return showModal ? <PaymentModel showModel={showModal} loading={loading} data={modalData} toggle={this.toggle} handelverify={this.handelClick} /> : this.loadDataTableConatier()
  }

  loadDataTableConatier = () => <Container className="justify-content-md-center">
    {this.loadDataTable(this.props)}
  </Container>

  // This Functions Loading Jquery DataTable into bills
  loadDataTable = (props) => {
    // This array collection of header in DataTable
    let columns = [
      { title: '', visible: false },
      { title: "Sr. no" },
      { title: "Payment Mode" },
      { title: "Payment Date" },
      { title: "Transcation Id" },
      { title: "Payment Amount" },
      { title: "Verify" },
      { title: "", orderable: false }, // This column used for edit button
      { title: "", orderable: false },
    ]
    // This is Returning DataTable Component
    return <Card>
      <CardHeader><b>Payment Invoice Tabel</b></CardHeader>
      <CardBody className="card-align">
        {/* Calling jquery datatable component providing rows and columns */}
        {(this.props.payments.length > 0) ? <>
          <InvoiceTable
            data={this.loadTableRows(this.props)}
            columns={columns}
            handelVerifyClick={this.verifyHandelClick}
            handelEditClick={this.props.handelEditClick}
            handelDeleteClick={this.props.handelDeleteClick}
          /> </> : <InvoiceTable columns={columns} />
        }
      </CardBody>
    </Card>
  }

  // This fucntion loading DataTable Rows.
  loadTableRows = (props) => {
    var rows = props.payments.length > 0 && props.payments.map((payment, key) => { return this.loadSingleRow(payment, key); })
    return rows;
  }

  // Show the Single Bill 
  loadSingleRow = (payment, key) => {
    const { payId, mode, transctionsId, amount, tarnsDate, verify } = payment
    let singleRow = [
      "" + payId,
      "" + (key + 1),
      "" + mode,
      "" + tarnsDate,
      "" + transctionsId,
      "" + amount,
      "" + verify,
      "",
      ""
    ]
    return singleRow;
  }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(InvoiceDataTable);