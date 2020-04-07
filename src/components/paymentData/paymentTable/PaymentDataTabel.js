import React,{Component} from 'react';
import { Card, Container } from "react-bootstrap";
import { CardBody } from 'reactstrap';
import { DataTable } from './DataTabel';
import { connect } from 'react-redux';
import PaymentModel from './PaymentModel';

import * as actionsCre from "../../../action/index";
import Config from '../../../data/Config';


class PaymentDatatable extends Component{

  state={
    showModal:false,
    modalData:[],
    loading:false
  }

  toggle=(modalData)=>{
    this.setState({showModal : !this.state.showModal,modalData})
  }

 verifyHandelClick=(props)=>{
    this.toggle(props);
  }
  
  handelVerifyClick=async(data)=>{
    await this.setLoading();
    await this.props.setPaymentVeirfyValue(this.props.token, data);
    setTimeout(async () => {
        await this.props.loadPayments(this.props.token);
        await this.setLoading();
        await this.toggle();
    }, Config.API_EXE_TIME)
    
  }

  setLoading=()=>{
    this.setState({loading: !this.state.loading})
  }

render(){
  const {showModal,modalData,loading}=this.state
  return showModal ?  <PaymentModel showModel={showModal} loading={loading}  data={modalData} toggle={this.toggle} handelverify={this.handelVerifyClick}/> : <Container className="justify-content-md-center">
  <center>{this.loadDataTable(this.props)}</center>
</Container>
 }

 // This Functions Loading Jquery DataTable into bills
loadDataTable = (props) => {
  // This array collection of header in DataTable
  let columns = [
    { title: '', visible: false },
    { title: "Sr. no" },
    { title: "Modes" },
    { title: "Transcations Dates" },
    { title: "Transcation Ids" },
    { title: "Amount" },
    { title: "Verify" },
    { title: "", orderable: false }, // This column used for edit button
  ]
  // This is Returning DataTable Component
  return <Card>
    <CardBody className="card-align">
      {/* Calling jquery datatable component providing rows and columns */}
      {(this.props.payments.length > 0) ? <>
        <DataTable data={this.loadTableRows(this.props)} columns={columns} handelClick={this.verifyHandelClick} /> </> : <DataTable columns={columns} />
      }
    </CardBody>
  </Card>

}

// This fucntion loading DataTable Rows.
loadTableRows = (props) => {
  console.log("Row ",props)
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
    ""
  ]
  return singleRow;
}
}

const mapStateToProps = state => { return state; };

export default connect(mapStateToProps,actionsCre)(PaymentDatatable);