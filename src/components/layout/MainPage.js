import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RoutesPath from './RoutesPath';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderPart from '../helper/Header';
import { connect } from "react-redux";
import * as actionsCre from "../../action/index";
import Login, { isLogin } from '../login/Login';

class MainPage extends Component {
    render() {
        return <Container className="justify-content-md-center">
            <Row>
                <HeaderPart />
            </Row>
            <Row style={{ paddingTop: 20 }}>
                {!isLogin(this.props) ? <Login /> : <>
                    <Col xl={2}><RoutesConfig /></Col>
                    <Col style={{ width: "70%" }}><RouteSwitch /></Col>
                </>}
            </Row>
        </Container>
    }
}

const RoutesConfig = (props) => {
    return <div>
        <nav className="navbar ">
            <ul className="navbar-nav">
                {RoutesPath.map((route, index) => {
                    return <li className="nav-item" key={index}>
                        <Link className="nav-link" to={route.link}>{route.text}</Link>
                    </li>
                })
                }
            </ul>
        </nav>
    </div>
}


const RouteSwitch = (props) => {
    return <Switch>
        {RoutesPath.map((route, index) => {
            return <Route key={index} path={route.link} exact component={route.componet} />
        })}
    </Switch>
}

// This is line maping state const variable 
const mapStateToProps = state => { return state; };

export default connect(mapStateToProps, actionsCre)(MainPage);