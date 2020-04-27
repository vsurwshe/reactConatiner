import React, { Component } from 'react';
import '../../css/jquery.dataTables.min.css';
import $ from 'jquery';
$.DataTable = require('datatables.net');

export class InvoiceDataTable extends Component {
    componentDidMount() {
        // Attaches normal html table to jquery datatable
        this.$el = $(this.el);
        this.loadDataTable();
    }

    // This function executes for each action on data table 
    componentDidUpdate() {
        this.loadDataTable();
    }

    //This loads the exact datatable
    loadDataTable = () => {
        if ($.fn.DataTable.isDataTable(this.$el)) {
            //This line clears the previous datatable for every show entries and pagination changes
            this.$el.DataTable().clear().destroy();
        }
        this.$el.DataTable({
            retrieve: true,
            data: this.props.data, // This is the billData provided to show in data Table
            columns: this.props.columns, // This is list of column names provided to display in data Table
            "deferRender": true,
            "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "pageLength": 5, // This is the no of default rows/entries shown in datatable
            "pagingType": "full_numbers", // This shows pagination list
            // These are pagination style settings of datatable
            "oLanguage": {
                "oPaginate": {
                    "sPrevious": "<<  Previous",
                    "sNext": "Next >>",
                    "sFirst": "First",
                    "sLast": "Last"
                }
            },
            columnDefs: [
                // Define a button in the datatable
                {
                    "targets": -3, // specifies the position of button(last but one) in the row
                    "data": function (row, type, val, meta) {
                        return row[6] === "No" ? "<button class='verifyButton' style='background-color: green; border-radius: 0.25em' >Verify</button>" : "Verifed"
                    },
                    "createdCell": (td, cellData, rowData, row, col) => {
                        $(td).click(e => {
                            this.props.handelVerifyClick(rowData)
                        })
                    },
                },
                {
                    "targets": -2, // specifies the position of button(last but one) in the row
                    "data": null,
                    "createdCell": (td, cellData, rowData, row, col) => {
                        $(td).click(e => {
                            this.props.handelEditClick(rowData)
                        })
                    },
                    "defaultContent": "<button class='verifyButton' style='background-color: yellow; border-radius: 0.25em'>Edit</button>"
                },
                {
                    "targets": -1, // specifies the position of button(last but one) in the row
                    "data": null,
                    "createdCell": (td, cellData, rowData, row, col) => {
                        $(td).click(e => {
                            this.props.handelDeleteClick(rowData)
                        })
                    },
                    "defaultContent": "<button class='verifyButton' style='background-color: red; border-radius: 0.25em'>Delete</button>"
                }
            ],
        })
    }
    render() { return <div className="table-responsive"> <table className="display" width="100%" ref={el => this.el = el}></table> </div> }
}