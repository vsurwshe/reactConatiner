import axios from "axios"
const { apiUrl } = window['runConfig'];
const API_URL = apiUrl;


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


export function logoutUser() {
    return (dispatch) => {
        dispatch(logout());
    }
}



//------------------------------------- User Custom Functions
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

export function saveUsers(users) {
    return {
        type: "SAVE_USERS",
        users: users
    }
}
export function loadMessage(color, message) {
    return {
        type: "NOTIFICATIONS",
        color: color,
        message: message
    }
} 
