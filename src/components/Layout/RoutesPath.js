import Main from '../Main';
import Login from '../login/Login';
import PaymentStructure from '../paymentData/PaymentStructure';
import PaymentOps from '../paymentData/paymentOperation/PaymentOps';

export default [
    {
        link:"/",
        text:"Dashborad",
        componet: Main
    },
    {
        link:"/payments",
        text:"Payments",
        componet: PaymentStructure
    },
    {
        link:"/payments/addPayments",
        text:"Add Payment",
        componet: PaymentOps
    },
    {
        link:"/login",
        text:"logout",
        componet: Login
    }
]