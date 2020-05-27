import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Loader from 'react-loader-spinner';

const PaymentModel = (props) => {
    return <Modal isOpen={props.showModel} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}> Payment Verification</ModalHeader>
        <ModalBody>
            Hi admin, <br />
             You are veifying the payment transcations done by this id&nbsp;<b>{props.data[4]}</b>,on date&nbsp;<b>{props.data[3]}</b> through the transction mode is&nbsp;<b>{props.data[2]}</b>. The total amount is&nbsp;<b>{props.data[5]}</b>.<br />
            <center>{props.loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} />}</center>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => props.handelverify(props.data)}> Confrm Payment</Button>
            <Button color="secondary" onClick={props.toggle}> Cancel</Button>
        </ModalFooter>
    </Modal>
}

export default PaymentModel;