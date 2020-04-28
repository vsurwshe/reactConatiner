import React from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../../../action/Invoice";
import { Button } from "react-bootstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Row, Col, } from "reactstrap";

const InvoiceForm = (props) => {
    const {handelSubmit, data}= props
    return <AvForm onSubmit={handelSubmit}>
        <Row>
            <Col>
                <AvField type="select" name="date" label="Select Payment Date for to Generate Payment Invoice"  errorMessage="Select Valid Date" required >
                    <option value="0" >OFFLINE</option>
                    <option value="1" >ONLINE</option>
                </AvField>
            </Col>
        </Row>
        <FormGroup> 
            <center>
            <Button type="submit" variant="outline-success">Generate Payment Invoices</Button>
    &nbsp;&nbsp;
    <Button type="button" variant="outline-danger" onClick={() => props.cancleLoading()}>Cancle</Button></center></FormGroup>
    </AvForm>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(InvoiceForm);