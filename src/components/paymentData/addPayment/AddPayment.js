import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../../../action/index";
import { CardBody, Card, Container, CardHeader } from "reactstrap";
import Loader from 'react-loader-spinner';
import Config from '../../../data/Config';
import PaymentStructure from '../PaymentStructure';
import PaymentForm from './From';

class AddPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            cancle: false
        }
    }

    componentDidMount = () => {
        this.props.loadUser();
    }

    handelSubmit = async (event, errors, values) => {
        if (errors.length === 0) {
            await this.setLoading();
            await this.props.savePayementData(this.props.token, values);
            setTimeout(async () => {
                await this.props.loadPayments(this.props.token);
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
        const { loading, cancle } = this.state
        const { users } = this.props
        return cancle ? <PaymentStructure /> : <Container className="justify-content-md-center" style={{ paddingTop: 30 }}>{this.loadPaymentForm(loading, users)}</Container>
    }

    loadPaymentForm = (loading, users) => <Card  >
        <CardHeader> <b>Add New Payment Deatils</b></CardHeader>
        <CardBody className="card-align">
            <PaymentForm users={users} handelSubmit={this.handelSubmit} cancleLoading={this.cancleLoading} />
            <center>{loading && this.loadSpinner()}</center>
        </CardBody>
    </Card>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(AddPayment);