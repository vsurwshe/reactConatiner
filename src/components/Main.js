import React,{Component} from 'react'
import { Container, Row} from "react-bootstrap";
import { connect } from "react-redux";
import PaymentDatatable from './PaymentDataTabel';
import Login, { isLogin } from './Login';

import * as actionsCre from "../action/index";
import HeaderPart from './Helper/Header';

class Main extends Component {


    // This is login form Loading
  loadLogin = () => {
    return <Login />
  }

   // This is loading main Dashborad Sturctres
   loadSecureFramework = () => {
    return <Container className="justify-content-md-center">
      <Row>
        <HeaderPart />
      </Row>
      <Row>
        {this.loadPayment()}
        <PaymentDatatable />
      </Row>
    </Container>
  };
  
  loadPayment=()=>{
    this.props.token && this.props.loadPayments(this.props.token);
  }

    render() { 
         // This condtions checking is user login or not using props
    if (isLogin(this.props)) {
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