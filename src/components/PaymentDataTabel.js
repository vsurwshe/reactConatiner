import React from 'react';
import { Card} from "react-bootstrap";
import { CardBody } from 'reactstrap';
import { DataTable } from './DataTabel';
import { connect } from 'react-redux';



const PaymentDatatable=(props)=>{
    return loadDataTable(props);
}


// This Functions Loading Jquery DataTable into bills
const loadDataTable = (props) => {
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
           { (props.payments.length >0) ? <>
             <DataTable billData={loadTableRows(props)} columns={columns} /> </> : <DataTable columns={columns} /> 
           }
        </CardBody>
      </Card>
    
  }


   // This fucntion loading DataTable Rows.
   const loadTableRows = (props) => {
    var rows = props.payments.length>0 && props.payments.map((payment, key) => { return loadSingleRow(payment,key); })
    return rows;
  }

  // Show the Single Bill 
  const loadSingleRow = (payment,key) => {
    const {payId,mode,transctionsId,amount,tarnsDate,verify,user_id}=payment
    let singleRow=[
      ""+payId,
      ""+(key+1),
      ""+mode,
      ""+tarnsDate,
      ""+transctionsId,
      ""+amount,
      ""+verify,
      ""
    ]
    return singleRow;
  }


const mapStateToProps = state => { return state; };

export default connect(mapStateToProps)(PaymentDatatable);