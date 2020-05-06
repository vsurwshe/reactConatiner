import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators} from "redux"
import * as actionsProfileInvoice from "../../../action/ProfileInvoice";
import * as actionsUser from "../../../action/User";
import { CardBody, Card, Container, CardHeader } from "reactstrap";
import Loader from 'react-loader-spinner';
import Config from '../../../data/Config';
import ProfileInvoiceForm from './ProfileInvoiceFrom';
import ProfileInvoiceSturcture from '../ProfileInvoiceSturcture';

class ProfileInvoiceOps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            cancle: false
        }
    }

    componentDidMount = () => {
        (this.props.users && this.props.users.length === 0) && this.props.usersAct.loadUser();
    }

    handelSubmit = async (event, errors, values) => {
        if (errors.length === 0) {
            console.log(values);
            await this.setLoading();
            await this.props.profileInvoiceAct.saveProfileInvoices(this.props.token, values);
            setTimeout(async () => {
                await this.props.profileInvoiceAct.loadProfileInvoices(this.props.token);
                await this.setLoading();
                await this.cancleLoading();
            }, Config.API_EXE_TIME)
        }
    }

    cancleLoading = () => {
        this.setState({ cancle: !this.state.cancle })
    }

    setLoading = () => {
        this.setState({ loading: !this.state.loading })
    }
    // This method loading spiiner
    loadSpinner = () => { return <Loader type="Oval" color="#00BFFF" height={100} width={100} /> }

    render() {
        const { cancle } = this.state
        return cancle ? <ProfileInvoiceSturcture /> : this.loadPaymentForm()
    }

    loadPaymentForm = () => {
    const {loading }= this.state
    const { users, rowData } = this.props
    return <Container className="justify-content-md-center" style={{ paddingTop: 30 }}> <Card  >
        <CardHeader> <b>{(rowData && rowData.length>1) ? "Edit Payment Deatils" : "Add New Payment Deatils"}</b></CardHeader>
        <CardBody className="card-align">
            <ProfileInvoiceForm 
            users={users} 
            handelSubmit={this.handelSubmit} 
            cancleLoading={this.cancleLoading}
            data={rowData} 
            />
            <center>{loading && this.loadSpinner()}</center>
        </CardBody>
    </Card>
    </Container>}
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps=(dispatch)=>({
usersAct : bindActionCreators(actionsUser,dispatch),
profileInvoiceAct : bindActionCreators(actionsProfileInvoice,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileInvoiceOps);