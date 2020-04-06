import React,{Component} from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../action/index";
import { Button} from "react-bootstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, CardHeader, CardBody, Card, Row, Container, Col } from "reactstrap";
import Loader from 'react-loader-spinner';
import Config from '../data/Config';
import Main from './Main';


class AddPayment extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            cancle:false
        }
    }

    componentDidMount=()=>{
        this.props.loadUser();     
    }

    handelSubmit= async (event, errors, values)=>{
        if (errors.length === 0) {
            await this.setLoading();
            await this.props.savePayementData(this.props.token ,values);
            setTimeout(async () => {
                await this.props.loadMessage()
                await this.setLoading();
                await this.cancleLoading();
            }, Config.API_EXE_TIME)
        }
    }

    cancleLoading=()=>{
        this.setState({cancle: !this.state.cancle})
    }

    setLoading=()=>{
        this.setState({loading : !this.state.loading})
    }
     // This method loading spiiner
     loadSpinner = () => { return <Loader type="Oval" color="#00BFFF" height={100} width={100} /> }

    render() { 
        const {loading, cancle}=this.state
        const {users}=this.props
    return cancle ? <Main />: <Container className="justify-content-md-center" style={{paddingTop:30}}>{this.loadPaymentForm(loading,users)}</Container>
    }

    loadPaymentForm=(loading,users)=><Card  >
                    <CardBody className="card-align">
                        {this.loadFormStructre(users)}
                        <center>{loading && this.loadSpinner()}</center>
                    </CardBody>
                </Card>
    loadFormStructre=(users)=>  <AvForm onSubmit={this.handelSubmit}>
        <Row>
            <Col><AvField type="text" name="amount" label="Enter Payment Amount" errorMessage="Enter vaild payment" placeholder="Ex : 1500,100,...." required /></Col>
            <Col><AvField type="text" name="transctionsId" label="Enter Transctions Id" errorMessage="Enter vaild transcations id" placeholder="Ex : UBTSC0100036" required /></Col>
        </Row>
        <Row>
            <Col>
            <AvField type="select" name="mode" label="Select Payment Mode" errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required >
                <option value="0" >OFFLINE</option>
                <option value="1" >ONLINE</option>
            </AvField>
            </Col>
            <Col>
            <AvField type="date" name="tarnsDate" label="Enter Transction Date" errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required />
            </Col>
        </Row>
        <Row>
            <Col>
            <AvField type="select" name="userId" label="Select User" errorMessage="Enter vaild user" required >
                {(users && users.length>1) ? users.map((user,key)=><option key={key} value={user.user_id}>{user.userName}</option>) : <option>No Users Available</option>}
            </AvField>
            </Col>
        </Row>
    <FormGroup> <center><Button type="submit" variant="outline-success">Save Payment Details</Button></center></FormGroup>
</AvForm>
}
 


const mapStateToProps = state => { return state; };

export default connect(mapStateToProps,actionsCre)(AddPayment);