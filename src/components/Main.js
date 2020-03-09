import React, { Component } from 'react'
import { Container, Row, Card } from "react-bootstrap";
import HeaderPart from './Helper/Header';
import FooterPart from './Helper/Footer';
import { CardBody } from 'reactstrap';

class Main extends Component {

  render() {
    return this.loadSecureFramework();
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    return <Container className="justify-content-md-center">
      <Row>
        <HeaderPart />
      </Row>
      <Row>
        {this.loadBody()}
      </Row>
      <Row>
        <FooterPart />
      </Row>
    </Container>
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