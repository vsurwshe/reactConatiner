import React from 'react'

export const PreLoder = () => <div className="spinner-wrapper">
    <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
</div>

export const Navigation = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{ backgroundColor: "#5f4dee" }}>
        <div className="container">
            {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
            {/* <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> --> */}
            {/* <!-- Image Logo --> */}
            <a className="navbar-brand logo-image" href="index.html"> <i>V & Y </i></a>
            {/* <!-- Mobile Menu Toggle Button --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-awesome fas fa-bars"></span>
                <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
            {/* <!-- end of mobile menu toggle button --> */}
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#details">DETAILS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#features">FEATURES</a>
                    </li>
                    {/* <!-- Dropdown Menu -->           */}
                    {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">VIDEO</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                    <div className="dropdown-items-divide-hr"></div>
                    <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                    <div className="dropdown-items-divide-hr"></div>
                    <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                </div>
            </li> */}
                    {/* <!-- end of dropdown menu --> */}
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#pricing">PRICING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#footer">CONTACT US</a>
                    </li>
                </ul>
                {/* <span className="nav-item">
            <a className="btn-outline-sm" href="log-in.html">LOG IN</a>
        </span> */}
            </div>
        </div>
    </nav>
}


export const Desription = () => <div id="description" className="cards-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">DESCRIPTION</div>
                <h2 className="h2-heading">Marketing Automation Will Bring More Qualified Leads</h2>
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
        <div className="row">
            <div className="col-lg-12">

                {/* <!-- Card --> */}
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src="images/description-1.png" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Lists Builder</h4>
                        <p>It's very easy to start creating email lists for your marketing actions. Just create your Tivo account</p>
                    </div>
                </div>
                {/* <!-- end of card -->

            <!-- Card --> */}
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src="images/description-2.png" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Campaign Tracker</h4>
                        <p>Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities</p>
                    </div>
                </div>
                {/* <!-- end of card --> */}

                {/* <!-- Card --> */}
                <div className="card">
                    <div className="card-image">
                        <img className="img-fluid" src="images/description-3.png" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Analytics Tool</h4>
                        <p>Tivo collects customer data in order to help you analyse different situations and take required action</p>
                    </div>
                </div>
                {/* <!-- end of card --> */}

            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
    </div>
    {/* <!-- end of container --> */}
</div>

const FeaturesCard = [
    {
        featureImagePath: "images/features-1.png",
        featureName: "Tabel Management",
        featureInfo: "Using these facilities you can manage your hotel or restaurant tables easily and simply. You can see the daily which tables are busy and you can reservations those tables for specific customers.",
        featureList: [
            "Manage the tables and their bills.",
            "Reversions of customer tables.",
            "A daily report generation of the tables."
        ]
    },
    {
        featureImagePath: "images/features-2.png",
        featureName: "Campaigns Monitoring Tools",
        featureInfo: "Campaigns monitoring is a feature we've developed since the beginning because it's at the core of Tivo and basically to any marketing activity focused on results.",
        featureList: [
            "Easily plan campaigns and schedule their starting date",
            "Start campaigns and follow their evolution closely",
            "Evaluate campaign results and optimize future actions"
        ]
    },
    {
        featureImagePath: "images/features-3.png",
        featureName: "Analytics Control Panel",
        featureInfo: "Analytics control  panel is important for every marketing team so it's beed implemented from the begging and designed to produce reports based on very little input information.",
        featureList: [
            "If you set it up correctly you will get acces to great intel",
            "Easy to integrate in your websites and landing pages",
            "The generated reports are important for your strategy"
        ]
    }


]


export const Features = () => <div id="features" className="tabs">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="above-heading">FEATURES OF</div>
                <h2 className="h2-heading">Hotel Management Desktop Application</h2>
                <p className="p-heading">Take your business strategy and The most important functions include front-desk operations, reservations, channel management, housekeeping, rate and occupancy management, and payment processing.</p>
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
        <div className="row">
            <div className="col-lg-12">

                {/* <!-- Tabs Links --> */}
                <ul className="nav nav-tabs" id="argoTabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-0" role="tab" aria-controls="tab-0" aria-selected="true"><i className="fas fa-list"></i>Tabel Management</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false"><i className="fas fa-envelope-open-text"></i>Campaigns</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-chart-bar"></i>Analytics</a>
                    </li>
                </ul>
                {/* <!-- end of tabs links --> */}

                {/* <!-- Tabs Content --> */}
                <div className="tab-content" id="argoTabsContent">
                    {
                        FeaturesCard.length >= 0 && FeaturesCard.map((feature, key) => {
                            return <div className={key === 0 ? "tab-pane fade show active" : "tab-pane fade"} id={"tab-" + key} role="tabpanel" aria-labelledby={"tab-" + key} key={key}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image-container">
                                            <img className="img-fluid" src={feature.featureImagePath} alt="alternative" />
                                        </div>
                                        {/* <!-- end of image-container --> */}
                                    </div>
                                    {/* <!-- end of col --> */}
                                    <div className="col-lg-6">
                                        <div className="text-container">
                                            <h3>{feature.featureName}</h3>
                                            <p>{feature.featureInfo}</p>
                                            <ul className="list-unstyled li-space-lg">
                                                {feature.featureList.length > 0 && feature.featureList.map((subFeatuer, key) => {
                                                    return <li className="media"> <i className="fas fa-square"></i><div className="media-body" key={key}>{subFeatuer}</div> </li>
                                                })}
                                            </ul>
                                        </div>
                                        {/* <!-- end of text-container --> */}
                                    </div>
                                    {/* <!-- end of col --> */}
                                </div>
                                {/* <!-- end of row --> */}
                            </div>
                        })
                    }
                </div>
                {/* <!-- end of tab content -->
            <!-- end of tabs content --> */}
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
    </div>
    {/* <!-- end of container --> */}
</div>



export const LightBox = () => <div id="details-lightbox-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
    <div className="container">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <div className="image-container">
                    <img className="img-fluid" src="images/details-lightbox.png" alt="alternative" />
                </div>
                {/* <!-- end of image-container --> */}
            </div>
            {/* <!-- end of col --> */}
            <div className="col-lg-4">
                <h3>List Building</h3>
                <hr />
                <h5>Core service</h5>
                <p>It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.</p>
                <ul className="list-unstyled li-space-lg">
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">List building framework</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">Easy database browsing</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">User administration</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">Automate user signup</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">Quick formatting tools</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i><div className="media-body">Fast email checking</div>
                    </li>
                </ul>
                <a className="btn-solid-reg mfp-close" href="sign-up.html">SIGN UP</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
    </div>
    {/* <!-- end of container --> */}
</div>


export const Details = () => <div id="details" className="basic-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="text-container">
                    <h2>Now Is The Time To Upgrade Hotel Management Solution</h2>
                    <p>Customarily, a hotel management system was defined as a platform that enabled a hotel to manage front-office capabilities, such as booking reservations, and billing. Hotel PMS delivered a software platform that replaced time-intensive, paper, and spreadsheet-heavy processes.</p>
                    {/* <ul className="list-unstyled li-space-lg">
                    <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Understand customers and meet their requirements</div>
                    </li>
                    <li className="media">
                        <i className="fas fa-square"></i>
                        <div className="media-body">Targeted client base with Tivo's efficient technology</div>
                    </li>
                </ul>
                <a className="btn-solid-reg page-scroll" href="sign-up.html">SIGN UP</a> */}
                </div>
                {/* <!-- end of text-container --> */}
            </div>
            {/* </div><!-- end of col --> */}
            <div className="col-lg-6">
                <div className="image-container">
                    <img className="img-fluid" src="images/details.png" alt="alternative" />
                </div>
                {/* <!-- end of image-container --> */}
            </div>
            {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of row --> */}
    </div>
    {/* <!-- end of container --> */}
</div>