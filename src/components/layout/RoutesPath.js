import Main from '../Main';
import PaymentStructure from '../paymentData/PaymentStructure';
import Logout from '../login/Logout';
import InvoiceStructure from '../invoiceData/InvoiceStructure';

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
        componet: InvoiceStructure
    },
    {
        link:"/logout",
        text:"User logout",
        componet: Logout
    }
]