import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "../../css/invoiceTemplate.css"

const InvoiceModal = (props) => {
    console.log("Invoice ", props)
    return <Modal isOpen={props.showModel} toggle={props.toggle} size="lg">
        <ModalHeader toggle={props.toggle}>Invoice no: #{props.data.invoiceId} </ModalHeader>
        <ModalBody>
            {InvoiceHTMLTemplate(props.data)}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => props.handelverify(props.data)}> Print Invoice</Button>
            <Button color="secondary" onClick={props.toggle}> Cancel</Button>
        </ModalFooter>
    </Modal>
}

const InvoiceHTMLTemplate = (props) => {
    console.log(props);
    return <div className="invoice-box">
        <table cellPadding="0" cellSpacing="0">
            <tr className="top">
                <td colSpan="3">
                    <table>
                        <tbody>
                            <tr>
                                <td className="title">
                                    <img src="https://www.sparksuite.com/images/logo.png" style={{ width: "100%", maxWidth: 300 }} />
                                </td>
                                <td>
                                    Invoice #: {props.invoiceId}<br />
                                    Date: {props.invoiceDate}<br />
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr className="information">
                <td colSpan="3">
                    <table>
                        <tbody>
                            <tr>
                                <td className="title">
                                    <b>Form :</b> <br />
                                    V & Y Soft. Tech. Pvt. Ltd.<br />
                                    Nanded-Hyderbad Hwy,<br />
                                    Mahashtraha, IN-431603.
                                </td>
                                <td className="title">
                                    <b>To :</b><br />
                                    Acme Corp.<br />
                                    John Doe<br />
                                    john@example.com
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr className="heading">
                <td>Payment Method</td>
                <td></td>
                <td></td>
            </tr>
            <tr className="details">
                <td>{props.payments && props.payments.mode}</td>
                <td>{props.payments && props.payments.transctionsId}</td>
                <td></td>
            </tr>

            <tr className="heading">
                <td>Item</td>
                <td>Qty</td>
                <td>Price</td>
            </tr>
            {props.invoiceItem && props.invoiceItem.map((item, key) => {
                return <tr key={key} className="item" >
                    <td>{item.itemName}</td>
                    <td>{item.itemQty}</td>
                    <td>{item.itemPrice}</td></tr>
            })
            }
            <tr className="total">
                <td></td>
                <td>Total:</td>
                <td> ${props.invoiceTotalAmount}</td>
            </tr>
        </table>
    </div>
}

export default InvoiceModal;