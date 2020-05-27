import React from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../../../action/Invoice";
import { Button } from "react-bootstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Row, Col, } from "reactstrap";
import Loader from 'react-loader-spinner';

const ProfileInvoiceForm = (props) => {
    const { handelSubmit, loading } = props
    return <AvForm onSubmit={handelSubmit}>
        <Row>
            <Col>
                <AvField type="select" name="userId" label="Select User" errorMessage="Select vaild user" required >
                    {(props.users && props.users.length > 1) ? props.users.map((user, key) => <option key={key} value={user.userId}>{user.userName}</option>) : <option>No Users Available</option>}
                </AvField>
            </Col>
            <Col>
                <AvField type="date" name="invoiceDate" label="Select Date of Invoice" errorMessage="Select vaild date" required />
            </Col>
        </Row>
        <center>
            {loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} />}
        </center> <br />
        <FormGroup>
            <center>
                <Button type="submit" variant="outline-success">Generate Profile Invoice</Button>&nbsp;&nbsp;
                <Button type="button" variant="outline-danger" onClick={() => props.cancleLoading()}>Cancle</Button>
            </center>
    </FormGroup>
    </AvForm>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(ProfileInvoiceForm);