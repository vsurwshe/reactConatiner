import React from 'react'
import { Card,CardBody } from 'reactstrap';
import { Container } from 'react-bootstrap';

const HeaderPart=(props)=>{

    return <Container className="justify-content-md-center">
    <Card>
      <CardBody className="card-align">
      <center>
        <h3>Welcome to V & Y Soft. Tech. Pvt. Ltd.</h3>
      </center>
      </CardBody>
    </Card>
  </Container>
} 
export default HeaderPart;