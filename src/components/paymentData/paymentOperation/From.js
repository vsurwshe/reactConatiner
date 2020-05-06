import React from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../../../action/Payment";
import { Button } from "react-bootstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Row, Col, } from "reactstrap";

const PaymentForm = (props) => {
    const { handelSubmit, data } = props
    const { amount, version, paymentId, transctionsId, mode, tarnsDate, userId } = (data && data.length > 1) && props.payments[parseInt(data[2]) - 1];
    return <AvForm onSubmit={handelSubmit}>
        <Row>
            <Col><AvField type="text" name="amount" label="Enter Payment Amount" value={amount && amount} errorMessage="Enter vaild payment" placeholder="Ex : 1500,100,...." required /></Col>
            <Col><AvField type="text" name="transctionsId" label="Enter Transctions Id" value={transctionsId && transctionsId} errorMessage="Enter vaild transcations id" placeholder="Ex : UBTSC0100036" required /></Col>
        </Row>
        <Row>
            <Col>
                <AvField type="select" name="mode" label="Select Payment Mode" value={mode && mode} errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required >
                    <option value="0" >OFFLINE</option>
                    <option value="1" >ONLINE</option>
                </AvField>
            </Col>
            <Col>
                <AvField type="date" name="tarnsDate" label="Enter Transction Date" value={tarnsDate && tarnsDate} errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required />
            </Col>
        </Row>
        <Row>
            <Col>
                <AvField type="select" name="userId" label="Select User" value={userId && userId} errorMessage="Select vaild user" required >
                    {(props.users && props.users.length > 1) ? props.users.map((user, key) => <option key={key} value={user.userId}>{user.userName}</option>) : <option>No Users Available</option>}
                </AvField>
            </Col>
        </Row>
        {(data && data.length > 1) && <AvField type="hidden" name="version" value={version && version} />}
        {(data && data.length > 1) && <AvField type="hidden" name="paymentId" value={paymentId && paymentId} />}
        <FormGroup> <center>
            <Button type="submit" variant="outline-success">{(data && data.length > 1) ? "Update Payment Details" : "Save Payment Details"}</Button>
    &nbsp;&nbsp;
    <Button type="button" variant="outline-danger" onClick={() => props.cancleLoading()}>Cancle</Button></center></FormGroup>
    </AvForm>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(PaymentForm);