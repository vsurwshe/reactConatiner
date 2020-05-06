import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsProfileInvoice from "../../action/ProfileInvoice";
import * as actionsUser from "../../action/User";
import ProfileInvoiceDataTabel from './profileInvoiceTable/ProfileInvoiceDataTabel';
import ProfileInvoiceOps from "./profileInvoiceOpertion/ProfileInvoiceOps";

class ProfileInvoiceSturcture extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            setProfileInvoiceForm:false
        }
    }

    componentDidMount=async()=>{
       await this.props.users.length === 0 && this.props.usersAct.loadUser();
       await this.props.profileInvoices.length === 0 && this.props.profileInvoiceAct.loadProfileInvoices(this.props.token);
    }

    setLoading=()=>{
        this.setState({loading: !this.state.loading})
    }

    setProfileInvoiceForm=()=>{
        this.setState({setProfileInvoiceForm: !this.state.setProfileInvoiceForm})
    }

    
    render() { 
        const {setProfileInvoiceForm}=this.state
        return setProfileInvoiceForm ? <ProfileInvoiceOps />: this.loadInvoiceFrame()
    }

    loadInvoiceFrame=()=><>
    <Button style={{ float: "right" ,color: "#060606", backgroundColor: "#4dd814", borderColor: " #51f704" }} 
    onClick={() => this.setProfileInvoiceForm()}>Generate Profile Invoices</Button><br />
    <br />
    <ProfileInvoiceDataTabel
      handelEditClick={this.handelEditClick}
      handelDeleteClick={this.handelDeleteClick}
    />
  </>

}

const mapStateToProps = state => { return state; };
const mapDispatchToProps = (dispatch) => ({
  usersAct: bindActionCreators(actionsUser, dispatch),
  profileInvoiceAct: bindActionCreators(actionsProfileInvoice, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInvoiceSturcture);