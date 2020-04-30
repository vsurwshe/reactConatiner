import React from 'react';
import { connect } from "react-redux";
import * as actionsCre from "../../../action/Invoice";
import { Button } from "react-bootstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Row, Col, } from "reactstrap";
import Loader from 'react-loader-spinner';

const InvoiceForm = (props) => {
    (props.invoiceDate && props.invoiceDate.length === 0) && props.getInvoiceDate(props.token)
    const { handelSubmit, invoiceDate, loading } = props
    return <AvForm onSubmit={handelSubmit}>
        <Row>
            {(invoiceDate && invoiceDate.length > 1) ? <Col>
                <AvField type="select" name="date" label="Select Payment Date for to Generate Payment Invoice" errorMessage="Select Valid Date" required >
                    {invoiceDate.map((date, key) => {
                        return <option key={key} value={date} >{date}</option>
                    })}
                </AvField>
            </Col> : <h3>Sorry No Payment is Ready for the Invoice</h3>}
        </Row>
            <center>
                {loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} />}
            </center> <br/>
        <FormGroup>
            <center>
                <Button type="submit" variant="outline-success">Generate Payment Invoices</Button>
    &nbsp;&nbsp;
    <Button type="button" variant="outline-danger" onClick={() => props.cancleLoading()}>Cancle</Button></center></FormGroup>
    </AvForm>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(InvoiceForm);