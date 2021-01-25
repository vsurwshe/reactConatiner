import React from 'react'

// this is price compoent 
const Pricing = (props) => {
    const { price }=props
    return <div id="pricing" className="cards-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">PRODUCT PRICING</div>
                <h2 className="h2-heading">You will find best price with differnt pricing options.</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                { (price && price.length >0) && price.map((price, key) => {
                        return <div className="card" key={key}>
                            <div className="card-body">
                                <div className="card-title">{price.CardTitle}</div>
                                <div className="price"><span className="currency">{price.currency}</span><span className="value">{price.type}</span></div>
                                <div className="frequency">{price.frequency}</div>
                                <div className="divider"></div>
                                <ul className="list-unstyled li-space-lg">
                                    { (price.featuers && price.featuers.length > 0) && price.featuers.map((featuer,key) => {
                                            return featuer === "" ? <div style={{padding:15}} key={key}></div> : <li className="media" key={key}>
                                                <i className="fas fa-check"></i><div className="media-body">{featuer}</div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
</div>
}

export default Pricing;