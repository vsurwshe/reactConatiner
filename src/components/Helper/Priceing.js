import React from 'react'

const PriceTable = [
    {
        "CardTitle": "Free",
        "currency": "₹",
        "type": "0.0/-",
        "frequency": "Monthly",
        featuers: [
            "Add up to 5 of customers data",
            "Add up to 5 of food items data",
            "Add up to 5 of tables data",// "List Building And Cleaning",
            "",// "Collected Data Reports",
        ]
    },
    {
        "CardTitle": "BASIC",
        "currency": "₹",
        "type": "99.0/-",
        "frequency": "Monthly",
        featuers: [
            "Add up to 100 of customers data",
            "Add up to 100 of food items data",
            "Add up to 100 of table data",
            "You can take backup and restore your daily data",// "Collected Data Reports",
        ]
    },
    {
        "CardTitle": "PERMIUM",
        "currency": "₹",
        "type": "189.0/-",
        "frequency": "Monthly",
        featuers: [
            "Add up to 400 of customers data",
            "Add up to 400 of food items data",
            "Add up to 400 of tables data",
            "Automatic daily take your backup and restore daily data",
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
                    PriceTable.map((price, key) => {
                        return <div className="card" key={key}>
                            <div className="card-body">
                                <div className="card-title">{price.CardTitle}</div>
                                <div className="price"><span className="currency">{price.currency}</span><span className="value">{price.type}</span></div>
                                <div className="frequency">{price.frequency}</div>
                                <div className="divider"></div>
                                <ul className="list-unstyled li-space-lg">
                                    {
                                        price.featuers.length > 0 && price.featuers.map((featuer,key) => {
                                            return featuer === "" ? <div style={{padding:15}} key={key}></div> : <li className="media" key={key}>
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