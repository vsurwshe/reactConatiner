import Main from '../Main';
import PaymentStructure from '../paymentData/PaymentStructure';
import MainInvoice from '../invoice/MainInvoice';
import Logout from '../login/Logout';

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
        link:"/invoice",
        text:"Payment Invoice",
        componet: MainInvoice
    },
    {
        link:"/logout",
        text:"User logout",
        componet: Logout
    }
]