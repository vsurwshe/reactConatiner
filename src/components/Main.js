import React, { Component } from 'react'
import { connect } from "react-redux";
import Login, { isLogin } from './login/Login';
import * as actionsCre from "../action/index";

class Main extends Component {

  loadLogin = () => <Login />

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    return  <h1>User Dashborad</h1>
    
    // <Container className="justify-content-md-center">
    //   <Row>
    //     <HeaderPart />
    //   </Row>
    //   <Row >
    //     <PaymentStructure />
    //   </Row>
    // </Container>
  };

  render() {
    // This condtions checking is user login or not using props
    if (isLogin(this.props)) {
      return this.loadSecureFramework()
    } else {
      return this.loadLogin();
    }
  }
}

// This is line maping state const variable 
const mapStateToProps = state => { return state; };

// This line passing above maping state to Main Class
export default connect(mapStateToProps, actionsCre)(Main);