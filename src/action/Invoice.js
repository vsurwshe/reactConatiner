import axios from "axios"
const { apiUrl } = window['runConfig'];
const API_URL = apiUrl;

// ------------------ This is dispath Actions Call any Component
// 1) Get All invoices
export function loadInvoices(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/invoice/getAll", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            response.data && dispatch(saveInvoice(response.data));
        }).catch(err => {
            console.log("Error : ", err);
        })
    }
}

export function saveInvoiceData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.post(API_URL + '/user/' + postData.userId + '/payment/save', postData, config)
            .then(response => {
                dispatch(saveInvoiceResult(response.data))
            })
            .catch(err => { console.log("Error : ", err) })
    }
}

//------------------------- Custome Methods for 
// This functions Saves invoice get 
export function saveInvoice(data) {
    return {
        type: "SAVE_INVOICE",
        invoice: data
    }
}

// This functions Save invoice result
export function saveInvoiceResult(data) {
    return {
        type: "SAVE_INVOICE_RESULT",
        invoice_result: data
    }
}