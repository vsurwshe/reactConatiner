import axios from "axios"
const { apiUrl } = window['runConfig'];
const API_URL = apiUrl;

// ------------------ This is dispath Actions Call any Component
//  1) Load Token
export function loadToken(userData) {
    return (dispatch) => {
        return axios.post(API_URL + "/auth/user/token", {
            userEmail: userData.username,
            userPassword: userData.password
        }).then(response => {
                dispatch(loadMessage('success', 'Login Successfull'))
                dispatch(saveToken(response.data))
        }).catch(err => {
                dispatch(loadMessage('danger', 'Sorry you are not provied vaild credtional'));
        })
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(logout());
    }
}
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

// 3) Get Food 
export function loadUser() {
    return (dispatch) => {
        return axios.get(API_URL + "/auth/user/getAll", {
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(
            response => {
                dispatch(saveUsers(response.data));
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
        return axios.post(API_URL + '/user/'+postData.userId+'/payment/save', postData, config)
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
        return axios.get(API_URL + '/user/payment/'+postData[0]+'/verify', config)
            .then(response => { 
                dispatch(savePaymentVeirfyResult(response.data)) 
            })
            .catch(err => { console.log("Error : ", err) })
    }
}

// 4) Save Food
export function saveFoodData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };

    return (dispatch) => {
        return axios.post(API_URL + '/hotel-api/api/foodItem', postData, config)
            .then(response => { 
                // dispatch(loadFood(token)) 
            })
            .catch(err => { console.log("Error : ", err) })
    }
}
// 5) Update Food
export function updateFoodData(token, putData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.put(API_URL + '/hotel-api/api/foodItem/' + putData.foId, putData, config)
            .then(response => { 
                // dispatch(loadFood(token)) 
            })
            .catch(err => { console.log("Error : ", err) })
    }
}
// 5) Delete Food
export function deleteFoodData(token, delData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.delete(API_URL + '/hotel-api/api/foodItem/' + delData.foId, config)
            .then(response => { 
                // dispatch(loadFood(token)) 
            })
            .catch(err => { console.log("Error : ", err) })
    }
}



// -------------------------------------------------------------
// This Function Save Token
export function saveToken(token) {
    return {
        type: "TOKEN_CHNAGE",
        token: token ? token.userToken : []
    }
}

export function logout() {
    return {
        type: "TOKEN_REMOVE",
        token: null
    }
}
// This functions Save User
export function saveUser(data) {
    return {
        type: "SAVE_USER",
        userData: data
    }
}

// This functions Save User
export function savePayments(data) {
    return {
        type: "SAVE_PAYMENTS",
        payments: data
    }
}
// This is Save Food 
export function saveFood(data) {
    return {
        type: "SAVE_FOOD",
        foodData: data
    }
}
// This functions message
export function loadMessage(color, message) {
    return {
        type: "NOTIFICATIONS",
        color: color,
        message: message
    }
} 

export function saveUsers(users){
 return {
    type:"SAVE_USERS",
    users:users
 }
}

export function savePaymentResult(result){
    return {
       type:"SAVE_PAYMENT_RESULT",
       payment_result:result
    }
   }
export function savePaymentVeirfyResult(result){
    return{
        type:"SAVE_PAYMENT_VEIRFY_RESULT",
        verifyResult:result
    }
}