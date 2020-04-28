import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import InvoiceDataTable from "./invoiceTable/InvoiceDataTabel";
import InvoiceFrom from './invoiceOperation/InvoiceFrom';

class InvoiceStructure extends Component {
    constructor(props){
        super(props);
        this.state={
            setInvoiceForm:false
        }
    }
    
    setInvoiceForm=()=>{
        this.setState({setInvoiceForm: !this.state.setInvoiceForm})
    }
    
    render() { 
        const {setInvoiceForm}=this.state
        return setInvoiceForm ? <InvoiceFrom cancleLoading={this.setInvoiceForm} /> : this.loadInvoiceFrame();
    }

    loadInvoiceFrame=()=><>
    <Button style={{ float: "right" ,color: "#060606", backgroundColor: "#4dd814", borderColor: " #51f704" }} 
    onClick={() => this.setInvoiceForm()}>Generate Invoices</Button><br />
    <br />
    <InvoiceDataTable
      handelEditClick={this.handelEditClick}
      handelDeleteClick={this.handelDeleteClick}
    />
  </>
}
 
export default InvoiceStructure;