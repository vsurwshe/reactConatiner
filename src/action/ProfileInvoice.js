import axios from "axios"
const { apiUrl } = window['runConfig'];
const API_URL = apiUrl;

// ------------------ This is dispath Actions Call any Component
// 1) Get All invoices
export function loadInvoices(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/user/profileInvoice/getAll", {
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

export function saveProfileInvoices(token,data) {
    return (dispatch) => {
        return axios.post(API_URL + "/user/"+data.userId+"/profileInvoice/genrate/"+data.invoiceDate, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            response.data && dispatch(resultSaveProfileInvoice(response.data));
        }).catch(err => {
            console.log("Error : ", err);
        })
    }
}
// -------------- Dispatcher method

export function saveInvoice(data){
    return{
        type:"LOAD_PROFILE_INVOICE",
        profile_invoices: data
    }
}

export function resultSaveProfileInvoice(data){
    return{
        type:"RESULT_SAVED_PROFILE_INVOICE",
        profile_invoice_result:data
    }
}