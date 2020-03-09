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
      { title: "Due Date" },
      { title: "Bill Date" },
      { title: "Description" },
      { title: '', orderable: false },// This column used for showing currency icon
      { title: "Bill Amount" },
      { title: "Status" },
      { title: "", orderable: false }, // This column used for recuring bill icons
      { title: "", orderable: false }, // This column used for edit button
      { title: "", orderable: false } // This column used for more options
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
    // var rows = bills.map((bill, key) => { return loadSingleRow(bill, key, featureAttachment); })
    // return rows;
  }

  // Show the Single Bill 
  // const loadSingleRow = (props) => {
  //   // let strike = bill.paid;
  //   // let lastPaid = this.calculateLastPaid(bill, bill.amount);
  //   // let billDescription = bill.description ? bill.description.length > 25 ? bill.description.substring(0, 25) + "..." : bill.description : bill.categoryName.name;
  //   // let singleRow = [
  //   //   bill.id,
  //     // strike ? "<strike>" + ShowServiceComponent.customDate(bill.dueDate_, true) + "</strike>" : ShowServiceComponent.customDate(bill.dueDate_, true),
  //     // strike ? "<strike>" + ShowServiceComponent.customDate(bill.billDate, false, true) + "</strike>" : ShowServiceComponent.customDate(bill.billDate, false, true),
  //     // strike ? "<strike>" + billDescription + "</strike>" : billDescription,
  //     // strike ? "<strike>" + this.getBillCurrency(bill.currency, bill.amount) + "</strike>" : this.getBillCurrency(bill.currency, bill.amount),
  //     // strike ? "<strike>" + this.handleSignedBillAmount(bill.amount) + "</strike>" : "<span>" + this.handleSignedBillAmount(bill.amount) + "</span>",
  //     // strike ? "<strike>" + this.loadPaidStatus(bill, lastPaid) + "</strike>" : this.loadPaidStatus(bill, lastPaid),
  //     // strike ? "<strike>" + (bill.recurId ? "<i class='fa fa-undo bill-icon-color'/>" : '') + "</strike>" : (bill.recurId ? "<i class='fa fa-undo bill-icon-color'/>" : ''),
  //     '',
  //     // this.loadDropDown(bill, key, featureAttachment)
  //   // ]
  //   // return singleRow;
  // }


const mapStateToProps = state => { return state; };

export default connect(mapStateToProps)(PaymentDatatable);