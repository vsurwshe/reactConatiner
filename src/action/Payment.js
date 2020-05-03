import axios from "axios"
const { apiUrl } = window['runConfig'];
const API_URL = apiUrl;



// 2) Get user
export function loadPayments(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/user/profile/payment/getAll", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            response.data && dispatch(savePayments(response.data));
        }).catch(err => {
            console.log("Error : ", err);
        })
    }
}

export function savePayementData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.post(API_URL + '/user/' + postData.userId + '/payment/save', postData, config)
            .then(response => {
                dispatch(savePaymentResult(response.data))
            })
            .catch(err => { console.log("Error : ", err) })
    }
}

export function updatePayementData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.put(API_URL + '/user/' + postData.userId + '/payment/' + postData.paymentId + '/update', postData, config)
            .then(response => {
                dispatch(updatePaymentResult(response.data))
            })
            .catch(err => { console.log("Error : ", err) })
    }
}

export function deletePayementData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.delete(API_URL + '/user/' + postData.userId + '/payment/' + postData.paymentId + '/delete', config)
            .then(response => {
                dispatch(savePaymentResult(response.data))
            })
            .catch(err => { console.log("Error : ", err) })
    }
}


export function setPaymentVeirfyValue(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.get(API_URL + '/user/payment/' + postData[0] + '/verify', config)
            .then(response => {
                dispatch(savePaymentVeirfyResult(response.data))
            })
            .catch(err => { console.log("Error : ", err) })
    }
}



// This functions Save User
export function savePayments(data) {
    return {
        type: "SAVE_PAYMENTS",
        payments: data
    }
}

export function savePaymentResult(result) {
    return {
        type: "SAVE_PAYMENT_RESULT",
        payment_result: result
    }
}
export function savePaymentVeirfyResult(result) {
    return {
        type: "SAVE_PAYMENT_VEIRFY_RESULT",
        verifyResult: result
    }
}

export function loadMessage(color, message) {
    return {
        type: "NOTIFICATIONS",
        color: color,
        message: message
    }
}

export function updatePaymentResult(data) {
    return {
        type: "UPDATE_PAYMENT_RESULT",
        payment_result: data
    }
}

