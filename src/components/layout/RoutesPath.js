import Main from '../Main';
import PaymentStructure from '../paymentData/PaymentStructure';
import Logout from '../login/Logout';
import ProfileInvoiceSturcture from '../profileInvoice/ProfileInvoiceSturcture';
import PaymentInvoiceStructure from '../paymentiInvoice/PaymentInvoiceStructure';

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
        componet: PaymentInvoiceStructure
    },
    {
        link:"/profileInvoice",
        text:"Profiles Invoices",
        componet: ProfileInvoiceSturcture
    },
    {
        link:"/logout",
        text:"User logout",
        componet: Logout
    }
]