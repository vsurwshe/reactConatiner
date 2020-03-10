import React,{Component} from 'react'
import { Container, Row} from "react-bootstrap";
import { connect } from "react-redux";
import PaymentDatatable from './PaymentDataTabel';
import Login, { isLogin } from './Login';

import * as actionsCre from "../action/index";
import HeaderPart from './Helper/Header';

class Main extends Component {

  componentWillMount=()=>{
    this.loadPayment();
  }
    // This is login form Loading
  loadLogin = () => <Login />
  

   // This is loading main Dashborad Sturctres
   loadSecureFramework = () => {
    return <Container className="justify-content-md-center">
      <Row>
        <HeaderPart />
      </Row>
      <Row>
        <PaymentDatatable />
      </Row>
    </Container>
  };
  
  loadPayment=()=>{
    if(this.props.token && this.props.payments.length<=0){
      this.props.loadPayments(this.props.token);
    }
  }

    render() { 
         // This condtions checking is user login or not using props
    if (isLogin(this.props)) {
        this.loadPayment();
        return this.loadSecureFramework();
      } else {
        return this.loadLogin();
      }
        
    }
}

// This is line maping state const variable 
const mapStateToProps = state => { return state; };
 
// This line passing above maping state to Main Class
export default connect(mapStateToProps, actionsCre)(Main);