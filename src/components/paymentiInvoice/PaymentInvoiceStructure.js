import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import * as actionsInvoice from "../../action/Invoice";
import InvoiceDataTable from "./paymentInvoiceTable/PaymentInvoiceDataTabel";
import InvoiceFrom from './paymentInvoiceOperation/PaymentInvoiceFrom';
import Config from '../../data/Config';

class PaymentInvoiceStructure extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            setInvoiceForm:false
        }
    }

    componentDidMount=()=>{
        this.props.invoices.length === 0 && this.props.loadInvoices(this.props.token);
    }

    handelInvoiceSubmit=async (event, errors, values)=>{
        if (errors.length === 0) {
            await this.setLoading();
            await this.props.generateInvoice(this.props.token,values.date);
            setTimeout(async () => {
                await this.props.getInvoiceDate(this.props.token);
                await this.setLoading();
                await this.setInvoiceForm();
            }, Config.API_EXE_TIME)
        }
    }

    setLoading=()=>{
        this.setState({loading: !this.state.loading})
    }

    setInvoiceForm=()=>{
        this.setState({setInvoiceForm: !this.state.setInvoiceForm})
    }
    
    render() { 
        const {setInvoiceForm, loading}=this.state
        return setInvoiceForm ? <InvoiceFrom handelSubmit={this.handelInvoiceSubmit} cancleLoading={this.setInvoiceForm} loading={loading} /> : this.loadInvoiceFrame();
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
 
const mapStateToProps = state => { return state; };
export default connect(mapStateToProps,actionsInvoice)(PaymentInvoiceStructure);