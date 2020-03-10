import React, { Component } from 'react'
import { Container, Row, Card } from "react-bootstrap";
import { CardBody } from 'reactstrap';
import { PreLoder, Navigation, Desription, Features, LightBox, Details } from './Helper/ComponentPage';
import Customer from './Helper/Customer';
import Pricing from './Helper/Priceing';
import HeaderPart from './Helper/HeaderPart';
import FooterPart from './Helper/FooterPart';

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
    <Desription />
    <Features />
    <Details />
    {/* <LightBox /> */}
    <Pricing />
    <FooterPart />
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