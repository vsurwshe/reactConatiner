import React from 'react'



const PaymentDatatable=(props)=>{
    return <h1> Payment Data table</h1>
}


// This Functions Loading Jquery DataTable into bills
loadDataTable = (bills, featureAttachment) => {
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
    return <div className="animated fadeIn">
      <Card>
        <CardBody className="card-align">
          {/* Calling jquery datatable component providing rows and columns */}
          <DataTable billData={this.loadTableRows(bills, featureAttachment)} columns={columns} />
        </CardBody>
      </Card>
    </div>
  }


   // This fucntion loading DataTable Rows.
   loadTableRows = (bills, featureAttachment) => {
    var rows = bills.map((bill, key) => { return this.loadSingleRow(bill, key, featureAttachment); })
    return rows;
  }

  // Show the Single Bill 
  loadSingleRow = (bill, key, featureAttachment) => {
    let strike = bill.paid;
    let lastPaid = this.calculateLastPaid(bill, bill.amount);
    let billDescription = bill.description ? bill.description.length > 25 ? bill.description.substring(0, 25) + "..." : bill.description : bill.categoryName.name;
    let singleRow = [
      bill.id,
      strike ? "<strike>" + ShowServiceComponent.customDate(bill.dueDate_, true) + "</strike>" : ShowServiceComponent.customDate(bill.dueDate_, true),
      strike ? "<strike>" + ShowServiceComponent.customDate(bill.billDate, false, true) + "</strike>" : ShowServiceComponent.customDate(bill.billDate, false, true),
      strike ? "<strike>" + billDescription + "</strike>" : billDescription,
      strike ? "<strike>" + this.getBillCurrency(bill.currency, bill.amount) + "</strike>" : this.getBillCurrency(bill.currency, bill.amount),
      strike ? "<strike>" + this.handleSignedBillAmount(bill.amount) + "</strike>" : "<span>" + this.handleSignedBillAmount(bill.amount) + "</span>",
      strike ? "<strike>" + this.loadPaidStatus(bill, lastPaid) + "</strike>" : this.loadPaidStatus(bill, lastPaid),
      strike ? "<strike>" + (bill.recurId ? "<i class='fa fa-undo bill-icon-color'/>" : '') + "</strike>" : (bill.recurId ? "<i class='fa fa-undo bill-icon-color'/>" : ''),
      '',
      this.loadDropDown(bill, key, featureAttachment)
    ]
    return singleRow;
  }


const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(PaymentDatatable);