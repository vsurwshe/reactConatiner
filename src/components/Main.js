import React, { Component } from 'react'
import { Container, Row, Card } from "react-bootstrap";
import { CardBody } from 'reactstrap';
import { PreLoder, Navigation, Desription, Features, LightBox, Details } from './Helper/ComponentPage';
import HeaderPart from './Helper/Header';
import Customer from './Helper/Customer';
import Pricing from './Helper/Priceing';

class Main extends Component {

  render() {
    return this.loadSecureFramework();
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    return <>
    {/* <PreLoder /> */}
    <Navigation />
    <HeaderPart />
    {/* <Customer /> */}
    <Desription />
    <Features />
    <Details />
    {/* <LightBox /> */}
    <Pricing />
    </>
  };

  loadBody = () => <Container className="justify-content-md-center">
    <Card>
      <CardBody className="card-align">
        <center>
          <h3>Welcome to V & Y Soft. Tech. Pvt. Ltd.</h3>
        </center>
      </CardBody>
    </Card>
  </Container>
}

export default Main;