import React from 'react'

const PriceTable = [
    {
        "CardTitle": "Free",
        "currency": "₹",
        "type": "Free",
        "frequency": "Unlimited",
        featuers: [
            "Email Marketing Module",
            "User Control Management",
            "",// "List Building And Cleaning",
            "",// "Collected Data Reports",
            ""// "Planning And Evaluation"
        ]
    },
    {
        "CardTitle": "BASIC",
        "currency": "₹",
        "type": "90",
        "frequency": "Monthly",
        featuers: [
            "Email Marketing Module",
            "User Control Management",
            "List Building And Cleaning",
            "",// "Collected Data Reports",
            ""// "Planning And Evaluation"
        ]
    },
    {
        "CardTitle": "PERMIUM",
        "currency": "₹",
        "type": "145",
        "frequency": "Monthly",
        featuers: [
            "Email Marketing Module",
            "User Control Management",
            "List Building And Cleaning",
            "Collected Data Reports",
            "Planning And Evaluation"
        ]
    }
]


const Pricing = () => <div id="pricing" className="cards-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">PRODUCT PRICING</div>
                <h2 className="h2-heading">You will find best price with differnt pricing options.</h2>
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
        <div className="row">
            <div className="col-lg-12">
                {
                    PriceTable.map((price) => {
                        return <div className="card">
                            <div className="card-body">
                                <div className="card-title">{price.CardTitle}</div>
                                <div className="price"><span className="currency">{price.currency}</span><span className="value">{price.type}</span></div>
                                <div className="frequency">{price.frequency}</div>
                                <div className="divider"></div>
                                <ul className="list-unstyled li-space-lg">
                                    {
                                        price.featuers.length > 0 && price.featuers.map((featuer) => {
                                            return featuer === "" ? <div style={{padding:15}}></div> : <li className="media">
                                                <i className="fas fa-check"></i><div className="media-body">{featuer}</div>
                                            </li>
                                        })
                                    }
                                </ul>
                                {/* <div className="button-wrapper">
                                <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a>
                            </div> */}
                            </div>
                        </div>
                    })
                }

            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
    </div>
    {/* <!-- end of container --> */}
</div>

export default Pricing;