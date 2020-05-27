import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import { DataTable } from "./DataTabel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PaymentModel from "./PaymentModel";
import * as actionsPayment from "../../../action/Payment";
import * as actionsUser from "../../../action/User";
import Config from "../../../data/Config";

class PaymentDatatable extends Component {
  state = {
    showModal: false,
    modalData: [],
    loading: false,
  };

  componentDidMount = () => {
    this.props.users.length <= 0 && this.props.usersAct.loadUser();
  };

  toggle = (modalData) => {
    this.setState({ showModal: !this.state.showModal, modalData });
  };

  verifyHandelClick = (props) => {
    this.toggle(props);
  };

  handelClick = async (data) => {
    await this.setLoading();
    await this.props.paymentAct.setPaymentVeirfyValue(this.props.token, data);
    setTimeout(async () => {
      await this.props.paymentAct.loadPayments(this.props.token);
      await this.setLoading();
      await this.toggle();
    }, Config.API_EXE_TIME);
  };

  setLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  showUserName = (userId) => {
    let filterData =
      this.props.users &&
      this.props.users.filter((user) => user.userId === parseInt(userId));
    return filterData[0].userName;
  };

  render() {
    const { showModal, modalData, loading } = this.state;
    return showModal ? (
      <PaymentModel
        showModel={showModal}
        loading={loading}
        data={modalData}
        toggle={this.toggle}
        handelverify={this.handelClick}
      />
    ) : (
      this.loadDataTableConatier()
    );
  }

  loadDataTableConatier = () => (
    <Container className="justify-content-md-center">
      {this.loadDataTable(this.props)}
    </Container>
  );

  // This Functions Loading Jquery DataTable into bills
  loadDataTable = (props) => {
    // This array collection of header in DataTable
    let columns = [
      { title: "", visible: false },
      { title: "", visible: false },
      { title: "Sr. no" },
      { title: "Customer Name" },
      { title: "Payment Mode" },
      { title: "Payment Date" },
      { title: "Transcation Id" },
      { title: "Payment Amount" },
      { title: "Verify" },
      { title: "", orderable: false }, // This column used for edit button
      { title: "", orderable: false },
    ];
    // This is Returning DataTable Component
    return (
      <Card>
        <CardHeader>
          <b>Payment DataTabel</b>
        </CardHeader>
        <CardBody className="card-align">
          {/* Calling jquery datatable component providing rows and columns */}
          {this.props.payments.length > 0 ? (
            <>
              <DataTable
                data={this.loadTableRows(this.props)}
                columns={columns}
                handelVerifyClick={this.verifyHandelClick}
                handelEditClick={this.props.handelEditClick}
                handelDeleteClick={this.props.handelDeleteClick}
                showUserName={this.showUserName}
              />{" "}
            </>
          ) : (
            <DataTable columns={columns} />
          )}
        </CardBody>
      </Card>
    );
  };

  // This fucntion loading DataTable Rows.
  loadTableRows = (props) => {
    var rows =
      props.payments.length > 0 &&
      props.payments.map((payment, key) => {
        return this.loadSingleRow(payment, key);
      });
    return rows;
  };

  // Show the Single Bill
  loadSingleRow = (payment, key) => {
    const {
      paymentId,
      mode,
      transctionsId,
      amount,
      tarnsDate,
      verify,
      userId,
    } = payment;
    // eslint-disable-next-line no-sparse-arrays
    let singleRow = [
      "" + paymentId,
      "" + userId,
      "" + (key + 1),
      "" + userId,
      "" + mode,
      "" + tarnsDate,
      "" + transctionsId,
      "" + amount,
      "" + verify,
      "",
      "",
    ];
    return singleRow;
  };
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  usersAct: bindActionCreators(actionsUser, dispatch),
  paymentAct: bindActionCreators(actionsPayment, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentDatatable);
