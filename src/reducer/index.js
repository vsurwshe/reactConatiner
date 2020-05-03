const INITIAL_STATE = {
    token: '',
    userData: [],
    color: '',
    message: '',
    users: [],
    //------------------ Payment state 
    payments: [],
    paymentResult: [],
    udpatePaymentResult: [],
    paymentVerifyResult: [],
    paymentDeleteResult: "",
    //-----------------  Invoice State
    invoices: [],
    invoiceResult: [],
    updateInvoiceResult: [],
    invoiceDate: [],
    invoiceDeleteResult: "",
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOKEN_CHNAGE":
            return {
                ...state,
                token: action.token
            };
        case "TOKEN_REMOVE":
            return {
                ...state,
                token: action.token
            };
        case "SAVE_USER":
            return {
                ...state,
                userData: action.userData
            };
        case "SAVE_USERS":
            return {
                ...state,
                users: action.users
            };

        case "NOTIFICATIONS":
            return {
                ...state,
                color: action.color,
                message: action.message
            };
        //--------------------Payments Actions
        case "SAVE_PAYMENTS":
            return {
                ...state,
                payments: action.payments
            };
        case "SAVE_PAYMENT_RESULT":
            return {
                ...state,
                paymentResult: action.payment_result
            };
        case "UPDATE_PAYMENT_RESULT":
            return {
                ...state,
                udpatePaymentResult: action.payment_result
            };
        case "DELETE_PAYMENT_RESULT":
            return {
                ...state,
                paymentDeleteResult: action.payment_result
            };
        case "SAVE_PAYMENT_VEIRFY_RESULT":
            return {
                ...state,
                paymentVerifyResult: action.verifyResult
            };
        //------------------ Invoice Actions 
        case "SAVE_INVOICE":
            return {
                ...state,
                invoices: action.invoice
            };
        case "SAVE_INVOICE_DATE":
            return {
                ...state,
                invoiceDate: action.dates
            };

        case "SAVE_INVOICE_RESULT":
            return {
                ...state,
                invoiceResult: action.invoice_result
            };
        default: return state;
    }
};

