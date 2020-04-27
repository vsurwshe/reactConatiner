import React,{Component} from 'react';
import { connect } from "react-redux";

import * as actionsCre from "../../action/index";
import Login, { isLogin } from './Login';


class Logout extends Component {
    componentDidMount=()=>{
        this.props.logoutUser();
        window.location.href="/";
    }

    render() { 
        return !isLogin() && <Login />
    }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(Logout);