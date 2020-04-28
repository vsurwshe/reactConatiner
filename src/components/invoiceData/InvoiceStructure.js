import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import InvoiceDataTable from "./invoiceTable/InvoiceDataTabel";

class InvoiceStructure extends Component {
    
    
    
    render() { 
        return this.loadInvoiceFrame();
    }

    loadInvoiceFrame=()=><>
    <Button style={{ float: "right" ,color: "#060606", backgroundColor: "#4dd814", borderColor: " #51f704" }} onClick={() => this.setLoadPayment()}>Add Payment</Button><br />
    <br />
    <InvoiceDataTable
      handelEditClick={this.handelEditClick}
      handelDeleteClick={this.handelDeleteClick}
    />
  </>
}
 
export default InvoiceStructure;