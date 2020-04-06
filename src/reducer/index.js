const INITIAL_STATE = {
    token: '',
    userData: [],
    foodData: [],
    color: '',
    message: '',
    payments: [],
    users:[],
    paymentResult:[]
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOKEN_CHNAGE":
            return {
                ...state,
                token: action.token
            };
        case "SAVE_USER":
            return {
                ...state,
                userData: action.userData
            };
        case "SAVE_FOOD":
            return {
                ...state,
                foodData: action.foodData
            };
        case "NOTIFICATIONS":
            return {
                ...state,
                color: action.color,
                message: action.message
            };
        case "SAVE_PAYMENTS":
            return {
                ...state,
                payments: action.payments
            };
        case "SAVE_USERS":
            return {
                ...state,
                users: action.users
            };
        case "SAVE_PAYMENT_RESULT":
            return {
                ...state,
                paymentResult: action.payment_result
            };

        default: return state;
    }
};

